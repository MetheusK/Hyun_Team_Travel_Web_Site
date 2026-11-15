import os
from PIL import Image

ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
IMAGES_DIR = os.path.join(ROOT_DIR, "images")

CARD_MAX_SIZE = (800, 600)
HERO_MAX_SIZE = (1280, 853)
JPEG_QUALITY = 80


def optimize_all_images():
    total_before = 0
    total_after = 0
    count = 0

    for root, _, files in os.walk(IMAGES_DIR):
        is_root_images = (os.path.normpath(root) == os.path.normpath(IMAGES_DIR))
        max_dim = HERO_MAX_SIZE if is_root_images else CARD_MAX_SIZE

        for fname in files:
            if not fname.lower().endswith((".jpg", ".jpeg", ".png", ".webp")):
                continue
            fpath = os.path.join(root, fname)
            try:
                size_before = os.path.getsize(fpath)
                total_before += size_before

                with Image.open(fpath) as im:
                    im_rgb = im.convert("RGB")
                    im_rgb.thumbnail(max_dim, Image.Resampling.LANCZOS)
                    im_rgb.save(fpath, format="JPEG", quality=JPEG_QUALITY, optimize=True, progressive=True)

                size_after = os.path.getsize(fpath)
                total_after += size_after
                count += 1
            except Exception as e:
                print(f"Error optimizing {fpath}: {e}")

    mb_before = total_before / (1024 * 1024)
    mb_after = total_after / (1024 * 1024)
    print(f"Optimized {count} images: {mb_before:.1f} MB -> {mb_after:.1f} MB (Saved {mb_before - mb_after:.1f} MB)")


if __name__ == "__main__":
    optimize_all_images()
