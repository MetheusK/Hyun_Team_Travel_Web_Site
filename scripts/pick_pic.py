import os
import re
import shutil
import logging
import matplotlib.pyplot as plt
import matplotlib.image as mpimg
from icrawler.builtin import BingImageCrawler

# ================= Configuration =================
HTML_FILE = os.path.join(os.path.dirname(__file__), '../index.html') # index.html 경로 확인
BASE_DIR = os.path.join(os.path.dirname(__file__), '../')
SKIPPED_LOG_FILE = os.path.join(BASE_DIR, 'skipped_list.txt') # 스킵 목록 저장 파일
CANDIDATES_NUM = 8

# 로그 숨기기
logging.getLogger('icrawler').setLevel(logging.CRITICAL)

def parse_html_smart(html_path):
    if not os.path.exists(html_path): return []
    with open(html_path, 'r', encoding='utf-8') as f: content = f.read()
    pattern = r'\{\s*name:\s*["\']([^"\']+)["\'].*?img:\s*["\']([^"\']+)["\']'
    return re.findall(pattern, content, re.DOTALL)

def show_candidates_and_select(temp_dir):
    files = sorted(os.listdir(temp_dir))
    if not files: return None

    images = []
    valid_files = []
    for f in files:
        try:
            img_path = os.path.join(temp_dir, f)
            img = mpimg.imread(img_path)
            images.append(img)
            valid_files.append(f)
        except: pass

    if not images: return None

    # State container to store selection result
    selection = {'result': None}

    # Layout: 2 rows of 4 columns (since 8 candidates)
    rows = 2
    cols = 4
    fig, axes = plt.subplots(rows, cols, figsize=(16, 8))
    axes = axes.flatten()  # Flatten to 1D array for easy indexing

    # Hide unused axes if any
    for i in range(len(images), len(axes)):
        axes[i].axis('off')

    for i, ax in enumerate(axes[:len(images)]):
        ax.imshow(images[i])
        ax.set_title(f"[{i+1}]", fontsize=12, fontweight='bold')
        ax.axis('off')
        # Store index in axes for event handler
        ax.set_gid(str(i))

    plt.suptitle(f"Click an image to select. Press 'p' to PASS/SKIP, 'r' to RETRY.\nFound {len(images)} images.", fontsize=16)
    plt.tight_layout()

    def on_click(event):
        if event.inaxes:
            # Check if an image axis was clicked
            gid = event.inaxes.get_gid()
            if gid is not None:
                idx = int(gid)
                selection['result'] = os.path.join(temp_dir, valid_files[idx])
                plt.close(fig)

    def on_key(event):
        if event.key == 'p':
            selection['result'] = "skip"
            plt.close(fig)
        elif event.key == 'r':
            selection['result'] = "retry"
            plt.close(fig)
        elif event.key == 'escape':
            selection['result'] = "skip"
            plt.close(fig)

    fig.canvas.mpl_connect('button_press_event', on_click)
    fig.canvas.mpl_connect('key_press_event', on_key)

    # Block until window is closed or selection is made
    plt.show()

    return selection['result']

def main():
    print(f"🔎 Reading {HTML_FILE}...")
    tasks = parse_html_smart(HTML_FILE)
    print(f"📌 Found {len(tasks)} image targets.")

    for name, relative_path in tasks:
        clean_path = relative_path.lstrip('./').replace('/', os.sep)
        full_path = os.path.join(BASE_DIR, clean_path)
        directory = os.path.dirname(full_path)

        # 이미 있으면 패스
        if os.path.exists(full_path):
            continue
        
        os.makedirs(directory, exist_ok=True)
        print(f"\nTarget: [{name}] -> {clean_path}")
        
        search_query = f"{name} travel landmark scenery real photography 4k -clipart -icon -vector -logo -cartoon"
        
        temp_dir = os.path.join(directory, "temp_candidates")
        if os.path.exists(temp_dir): shutil.rmtree(temp_dir)
        os.makedirs(temp_dir)

        print(f"   Downloading candidates...")
        crawler = BingImageCrawler(storage={'root_dir': temp_dir}, log_level=logging.CRITICAL)
        crawler.crawl(keyword=search_query, max_num=CANDIDATES_NUM)

        selected_file = show_candidates_and_select(temp_dir)

        # 결과 처리
        if selected_file == "skip":
            print(f"⏩ Skipped.")
            # [핵심 2] 스킵 목록 파일에 저장
            with open(SKIPPED_LOG_FILE, 'a', encoding='utf-8') as f:
                f.write(f"{name} | {clean_path}\n")
            print(f"   (📝 기록됨: {SKIPPED_LOG_FILE})")

        elif selected_file == "retry":
            print("🔄 Retrying next time...")
            pass 

        elif selected_file:
            shutil.move(selected_file, full_path)
            print(f"✅ Saved: {full_path}")
        
        else:
            print("⏩ No valid selection.")

        if os.path.exists(temp_dir):
            shutil.rmtree(temp_dir)

    print("\n🎉 All tasks finished!")

if __name__ == "__main__":
    main()