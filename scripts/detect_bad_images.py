import os
import hashlib
from PIL import Image
import numpy as np

ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
IMAGES_DIR = os.path.join(ROOT_DIR, "images")

# Explicitly requested by user
USER_SPECIFIED = {
    os.path.normpath("images/america/usa/las_vegas/writers_block.jpg"),
    os.path.normpath("images/asia_aus/china/shanghai/the_bund.jpg"),
    os.path.normpath("images/asia_aus/japan/okinawa/hanon.jpg"),
    os.path.normpath("images/asia_aus/japan/okinawa/manzam.jpg"),
    os.path.normpath("images/asia_aus/korea/seoul/hollys_sejongro.jpg"),
    os.path.normpath("images/europe/france/paris/eiffel_tower.jpg"),
}


def analyze_image(filepath):
    """
    Returns (is_bad, reasons_list) for an image file.
    Detects:
      1. Pictograms / logos / flat vector illustrations (high flat-pixel ratio, white borders, low color entropy)
      2. Stock watermark footer bars (Shutterstock / Alamy / Dreamstime / VectorStock bottom bars)
      3. Corrupted / tiny images
    """
    reasons = []
    try:
        with Image.open(filepath) as im:
            im_rgb = im.convert("RGB")
            w, h = im_rgb.size
            if w < 220 or h < 160:
                return True, [f"too_small({w}x{h})"]

            arr = np.asarray(im_rgb, dtype=np.int16)
    except Exception as e:
        return True, [f"corrupt({e})"]

    # 1. Pure white pixel ratio (logos, cliparts, isolated vectors)
    white_mask = (arr[:, :, 0] > 248) & (arr[:, :, 1] > 248) & (arr[:, :, 2] > 248)
    white_ratio = float(np.mean(white_mask))

    # Border white ratio (top, bottom, left, right 4px strips)
    border_pixels = np.concatenate([
        white_mask[:4, :].ravel(),
        white_mask[-4:, :].ravel(),
        white_mask[:, :4].ravel(),
        white_mask[:, -4:].ravel(),
    ])
    border_white_ratio = float(np.mean(border_pixels))

    if white_ratio > 0.25 and border_white_ratio > 0.50:
        reasons.append(f"white_bg_pictogram(white={white_ratio:.2f},border={border_white_ratio:.2f})")

    # 2. Flat pixel ratio (vector graphics / illustrations / block colors)
    diff_h = np.max(np.abs(arr[:, 1:, :] - arr[:, :-1, :]), axis=2)
    diff_v = np.max(np.abs(arr[1:, :, :] - arr[:-1, :, :]), axis=2)
    flat_h = float(np.mean(diff_h <= 1))
    flat_v = float(np.mean(diff_v <= 1))
    flat_ratio = (flat_h + flat_v) / 2.0

    # Color quantization into 16x16x16 bins
    bins = ((arr[:, :, 0] // 16) << 8) + ((arr[:, :, 1] // 16) << 4) + (arr[:, :, 2] // 16)
    unique_bins, counts = np.unique(bins, return_counts=True)
    top3_ratio = float(np.sum(np.sort(counts)[-3:])) / float(w * h)
    num_significant_bins = int(np.sum(counts > (w * h * 0.001)))

    if flat_ratio > 0.52 and (top3_ratio > 0.45 or num_significant_bins < 75):
        reasons.append(f"vector_illustration(flat={flat_ratio:.2f},top3={top3_ratio:.2f},bins={num_significant_bins})")
    elif top3_ratio > 0.68 and num_significant_bins < 60:
        reasons.append(f"low_color_pictogram(top3={top3_ratio:.2f},bins={num_significant_bins})")
    elif border_white_ratio > 0.70 and flat_ratio > 0.35:
        reasons.append(f"white_border_clipart(border={border_white_ratio:.2f},flat={flat_ratio:.2f})")

    # 3. Stock watermark footer bar (Shutterstock / Alamy / Dreamstime bottom banner of any solid color)
    for strip_frac in (0.04, 0.06, 0.08, 0.10):
        sh = max(8, int(h * strip_frac))
        bottom_strip = arr[h - sh:, :, :]
        bottom_bins = bins[h - sh:, :]
        _, b_counts = np.unique(bottom_bins, return_counts=True)
        bottom_top1_ratio = float(np.max(b_counts)) / float(sh * w)
        bottom_flat_h = float(np.mean(diff_h[h - sh:, :] <= 1))

        # Check sharp horizontal seam at the top of the bottom bar
        seam_y = h - sh
        above_strip_bins = bins[max(0, seam_y - sh):seam_y, :]
        dominant_bin = int(np.unique(bottom_bins)[np.argmax(b_counts)])
        above_same_bin_ratio = float(np.mean(above_strip_bins == dominant_bin))

        if bottom_top1_ratio > 0.68 and bottom_flat_h > 0.75 and above_same_bin_ratio < 0.25:
            reasons.append(f"stock_watermark_bar(top1={bottom_top1_ratio:.2f},flat={bottom_flat_h:.2f})")
            break

    return (len(reasons) > 0), reasons


def scan_and_remove(remove=False):
    flagged = []
    hash_map = {}

    for root, _, files in os.walk(IMAGES_DIR):
        for fname in sorted(files):
            if not fname.lower().endswith((".jpg", ".jpeg", ".png", ".webp")):
                continue
            full_path = os.path.join(root, fname)
            rel_path = os.path.normpath(os.path.relpath(full_path, ROOT_DIR))

            reasons = []
            if rel_path in USER_SPECIFIED:
                reasons.append("user_specified")

            # Check duplicate file content (excluding top-level main hero images)
            if os.path.dirname(rel_path) != "images":
                with open(full_path, "rb") as f:
                    file_hash = hashlib.md5(f.read()).hexdigest()
                if file_hash in hash_map:
                    reasons.append(f"duplicate_of({hash_map[file_hash]})")
                else:
                    hash_map[file_hash] = rel_path

            is_bad, auto_reasons = analyze_image(full_path)
            if is_bad:
                reasons.extend(auto_reasons)

            if reasons:
                flagged.append((rel_path, full_path, reasons))

    print(f"Total flagged images: {len(flagged)}")
    for rel_path, full_path, reasons in flagged:
        print(f" - {rel_path}: {', '.join(reasons)}")
        if remove and os.path.exists(full_path):
            os.remove(full_path)

    if remove:
        print(f"Removed {len(flagged)} flagged images.")
    return flagged


if __name__ == "__main__":
    import sys
    do_remove = "--remove" in sys.argv
    scan_and_remove(remove=do_remove)
