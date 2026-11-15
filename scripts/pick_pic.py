import os
import re
import shutil
import logging
import matplotlib.pyplot as plt
import matplotlib.image as mpimg
import requests
from icrawler.builtin import BingImageCrawler
from image_manager import (
    HTML_FILE,
    BASE_DIR,
    HEADERS,
    parse_html_for_images,
    build_queries,
    fetch_google_maps_photo_urls,
)

# ================= Configuration =================
SKIPPED_LOG_FILE = os.path.join(BASE_DIR, 'skipped_list.txt')
CANDIDATES_NUM = 8

logging.getLogger('icrawler').setLevel(logging.CRITICAL)


def download_candidates(item, clean_path, temp_dir):
    """
    1. Downloads representative photos directly from Google Maps for the place.
    2. If fewer than CANDIDATES_NUM photos are found, fills the rest using context-aware Bing search.
    """
    queries = build_queries(item, clean_path)
    downloaded_count = 0
    seen_urls = set()

    # Step 1: Fetch Google Maps place photos first
    for q in queries:
        if downloaded_count >= CANDIDATES_NUM:
            break
        print(f"   🗺️ [Google Maps] Searching photos for: '{q}'...")
        urls = fetch_google_maps_photo_urls(q, max_photos=CANDIDATES_NUM)
        for url in urls:
            if url in seen_urls or downloaded_count >= CANDIDATES_NUM:
                continue
            seen_urls.add(url)
            try:
                resp = requests.get(url, headers=HEADERS, timeout=10)
                if resp.status_code == 200 and "image" in resp.headers.get("Content-Type", "") and len(resp.content) > 8000:
                    downloaded_count += 1
                    file_path = os.path.join(temp_dir, f"gmaps_{downloaded_count:02d}.jpg")
                    with open(file_path, "wb") as f:
                        f.write(resp.content)
            except Exception:
                pass

    print(f"   ✅ Downloaded {downloaded_count} photo(s) from Google Maps.")

    # Step 2: Fill remaining slots from context-aware search if needed
    remaining = CANDIDATES_NUM - downloaded_count
    if remaining > 0 and queries:
        fallback_query = f"{queries[0]} real photography -clipart -icon -logo"
        print(f"   🔎 [Fallback] Downloading {remaining} more candidate(s) for: '{fallback_query}'...")
        crawler = BingImageCrawler(storage={'root_dir': temp_dir}, log_level=logging.CRITICAL)
        crawler.crawl(keyword=fallback_query, max_num=remaining)


def show_candidates_and_select(temp_dir, place_title):
    files = sorted(os.listdir(temp_dir))
    if not files:
        return None

    images = []
    valid_files = []
    for f in files:
        try:
            img_path = os.path.join(temp_dir, f)
            img = mpimg.imread(img_path)
            images.append(img)
            valid_files.append(f)
        except Exception:
            pass

    if not images:
        return None

    selection = {'result': None}

    rows = 2
    cols = 4
    fig, axes = plt.subplots(rows, cols, figsize=(16, 8))
    axes = axes.flatten()

    for i in range(len(images), len(axes)):
        axes[i].axis('off')

    for i, ax in enumerate(axes[:len(images)]):
        ax.imshow(images[i])
        fname = valid_files[i]
        source_tag = "Google Maps 대표" if fname == "gmaps_01.jpg" else ("Google Maps" if fname.startswith("gmaps_") else "Web")
        ax.set_title(f"[{i+1}] {source_tag}", fontsize=11, fontweight='bold')
        ax.axis('off')
        ax.set_gid(str(i))

    plt.suptitle(
        f"{place_title}\nClick an image to select. Press 'p' to PASS/SKIP, 'r' to RETRY.",
        fontsize=14
    )
    plt.tight_layout()

    def on_click(event):
        if event.inaxes:
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

    plt.show()
    return selection['result']


def main():
    print(f"🔎 Reading {HTML_FILE}...")
    items = parse_html_for_images(HTML_FILE)
    print(f"📌 Found {len(items)} image targets.")

    for item in items:
        name = item['name']
        relative_path = item['img']
        clean_path = relative_path.lstrip('./').replace('/', os.sep)
        full_path = os.path.join(BASE_DIR, clean_path)
        directory = os.path.dirname(full_path)

        if os.path.exists(full_path):
            continue

        os.makedirs(directory, exist_ok=True)
        print(f"\nTarget: [{name}] -> {clean_path}")

        temp_dir = os.path.join(directory, "temp_candidates")
        if os.path.exists(temp_dir):
            shutil.rmtree(temp_dir)
        os.makedirs(temp_dir)

        download_candidates(item, clean_path, temp_dir)
        selected_file = show_candidates_and_select(temp_dir, f"[{name}] ({clean_path})")

        if selected_file == "skip":
            print("⏩ Skipped.")
            with open(SKIPPED_LOG_FILE, 'a', encoding='utf-8') as f:
                f.write(f"{name} | {clean_path}\n")
            print(f"   (📝 기록됨: {SKIPPED_LOG_FILE})")
        elif selected_file == "retry":
            print("🔄 Retrying next time...")
        elif selected_file:
            shutil.move(selected_file, full_path)
            print(f"✅ Saved: {full_path}")
        else:
            print("⏩ No valid selection.")

        if os.path.exists(temp_dir):
            shutil.rmtree(temp_dir, ignore_errors=True)

    print("\n🎉 All tasks finished!")


if __name__ == "__main__":
    main()
