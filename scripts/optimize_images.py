import os
from PIL import Image

ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
IMAGES_DIR = os.path.join(ROOT_DIR, "images")

CARD_MAX_SIZE = (800, 600)
HERO_MAX_SIZE = (1280, 853)
CARD_MAX_BYTES = 200 * 1024
HERO_MAX_BYTES = 350 * 1024
JPEG_QUALITY = 80
OPTIMIZED_MARKER = b"optimized"


def optimize_all_images():
    total_before = 0
    total_after = 0
    count = 0
    skipped = 0

    for root, _, files in os.walk(IMAGES_DIR):
        is_root_images = (os.path.normpath(root) == os.path.normpath(IMAGES_DIR))
        max_dim = HERO_MAX_SIZE if is_root_images else CARD_MAX_SIZE
        max_bytes = HERO_MAX_BYTES if is_root_images else CARD_MAX_BYTES

        for fname in files:
            if not fname.lower().endswith((".jpg", ".jpeg", ".png", ".webp")):
                continue
            fpath = os.path.join(root, fname)
            try:
                size_before = os.path.getsize(fpath)

                with Image.open(fpath) as im:
                    already_marked = (im.info.get("comment") == OPTIMIZED_MARKER)
                    within_limits = (
                        im.format == "JPEG"
                        and im.width <= max_dim[0]
                        and im.height <= max_dim[1]
                        and size_before <= max_bytes
                    )
                    if already_marked or within_limits:
                        skipped += 1
                        continue

                    total_before += size_before
                    im_rgb = im.convert("RGB")
                    im_rgb.thumbnail(max_dim, Image.Resampling.LANCZOS)
                    im_rgb.save(
                        fpath,
                        format="JPEG",
                        quality=JPEG_QUALITY,
                        optimize=True,
                        progressive=True,
                        comment=OPTIMIZED_MARKER,
                    )

                size_after = os.path.getsize(fpath)
                total_after += size_after
                count += 1
            except Exception as e:
                print(f"Error optimizing {fpath}: {e}")

    mb_before = total_before / (1024 * 1024)
    mb_after = total_after / (1024 * 1024)
    print(f"Optimized {count} images (Skipped {skipped} already-optimized): {mb_before:.1f} MB -> {mb_after:.1f} MB (Saved {mb_before - mb_after:.1f} MB)")


if __name__ == "__main__":
    optimize_all_images()
