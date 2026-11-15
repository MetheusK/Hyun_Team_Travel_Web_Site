import os
import re
import html
import shutil
import logging
import urllib.parse
import requests
from icrawler.builtin import GoogleImageCrawler, BingImageCrawler

# Configuration
HTML_FILE = os.path.join(os.path.dirname(__file__), '../index.html')
BASE_DIR = os.path.join(os.path.dirname(__file__), '../')
GOOGLE_MAPS_API_KEY = os.environ.get('GOOGLE_MAPS_API_KEY', '').strip()

# Suppress icrawler logs
logging.getLogger('icrawler').setLevel(logging.CRITICAL)

HEADERS = {
    "User-Agent": (
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
        "AppleWebKit/537.36 (KHTML, like Gecko) "
        "Chrome/124.0.0.0 Safari/537.36"
    ),
    "Accept-Language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7",
}

# Generic Korean names that need filename/description context to avoid wrong matches
GENERIC_NAMES = {"쇼핑", "맛집", "일몰", "온천 체험", "디즈니 투어", "해수욕", "선셋 산책"}


def parse_html_for_images(html_path):
    """
    Parses index.html to extract {name, desc, img} items with full context.
    Returns a list of dicts: {'name': str, 'desc': str, 'img': str}
    """
    with open(html_path, 'r', encoding='utf-8') as f:
        content = f.read()

    pattern = re.compile(
        r'\{\s*name:\s*(["\'])((?:\\.|(?!\1).)+)\1\s*,\s*desc:\s*(["\'])((?:\\.|(?!\3).)*)\3\s*,\s*img:\s*(["\'])([^"\']+)\5',
        re.DOTALL
    )
    items = []
    seen = set()
    for match in pattern.finditer(content):
        name = match.group(2).replace("\\'", "'").replace('\\"', '"').strip()
        desc = match.group(4).replace("\\'", "'").replace('\\"', '"').strip()
        img_path = match.group(6).strip()
        if 'images/' in img_path and img_path not in seen:
            seen.add(img_path)
            items.append({'name': name, 'desc': desc, 'img': img_path})
    return items


def build_queries(item, clean_path):
    """
    Builds accurate Google Maps search queries using country, city, place name, and filename slug.
    """
    parts = clean_path.split(os.sep)
    country_en, city_en = "", ""
    if len(parts) >= 4:
        country_en = parts[-3].replace('_', ' ')
        city_en = parts[-2].replace('_', ' ')

    filename = os.path.basename(clean_path)
    slug_en = os.path.splitext(filename)[0].replace('_', ' ')
    # Remove duplicate city prefix in slug (e.g., "sydney operahouse" -> "operahouse")
    if city_en and slug_en.lower().startswith(city_en.lower() + " "):
        slug_en = slug_en[len(city_en) + 1:]
    # Strip generic activity words from slug so Google Maps finds the actual POI
    slug_poi = re.sub(r'\b(activity|tour|walk|swim|snorkeling|picnic|experience|shopping)\b', '', slug_en, flags=re.IGNORECASE).strip()

    raw_name = re.sub(r'<[^>]+>', ' ', item.get('name', '')).strip()
    # Remove parenthetical notes like "(3월 한정)" for cleaner place search
    clean_name = re.sub(r'\([^)]*\)', '', raw_name).strip()
    desc_clean = re.sub(r'<[^>]+>', ' ', item.get('desc', '')).strip()

    queries = []
    if "banana_roti" in filename:
        queries.append("Puy Roti Lady Banana Roti Pancake")
    if raw_name in GENERIC_NAMES:
        if slug_poi:
            queries.append(f"{city_en} {country_en} {slug_poi}".strip())
        queries.append(f"{city_en} {country_en} {slug_en}".strip())
        if desc_clean:
            queries.append(f"{city_en} {desc_clean}".strip())
    else:
        if not city_en and clean_name:
            queries.append(clean_name)
        if raw_name:
            queries.append(f"{city_en} {country_en} {raw_name}".strip())
        if clean_name:
            queries.append(f"{city_en} {country_en} {clean_name}".strip())
        if slug_poi:
            queries.append(f"{city_en} {country_en} {slug_poi}".strip())
        queries.append(f"{city_en} {country_en} {clean_name} {slug_en}".strip())
        if slug_poi:
            queries.append(f"{city_en} {slug_poi} landmark museum".strip())

    unique_queries = []
    for q in queries:
        q_norm = " ".join(q.split())
        if q_norm and q_norm not in unique_queries:
            unique_queries.append(q_norm)
    return unique_queries


def _extract_photo_urls_from_text(text, max_photos=5):
    """
    Extracts Google Maps place representative photos (grass-cs, gps-cs-s, p),
    skipping 360-degree equirectangular photospheres (-pi/-ya/-ro),
    and upgrades their resolution suffix to =w1200-h800-k-no.
    """
    urls = []
    fallback_360 = []
    seen_bases = set()
    pattern = re.compile(
        r'(https://lh[3-6]\.googleusercontent\.com/(?:grass-cs|gps-cs-s|p)/[A-Za-z0-9_\-]+)(=w\d+-h\d+[^\s"\'\\<>\]\)]*)'
    )
    for match in pattern.finditer(text):
        base_url = match.group(1)
        suffix = match.group(2)
        if base_url in seen_bases:
            continue
        seen_bases.add(base_url)
        full_url = f"{base_url}=w800-h600-k-no"
        if any(tok in suffix for tok in ("-pi", "-ya", "-ro", "-fo")):
            fallback_360.append(full_url)
        else:
            urls.append(full_url)
            if len(urls) >= max_photos:
                break
    if not urls:
        return fallback_360[:max_photos]
    return urls


def fetch_google_maps_photo_urls(query, max_photos=5):
    """
    Fetches representative place photo URLs from Google Maps for the given query.
    1. Uses Google Places API (New) if GOOGLE_MAPS_API_KEY is configured.
    2. Otherwise queries Google Maps search -> internal tbm=map JSON endpoint to get place photos.
    """
    urls = []

    # Tier 1: Official Google Places API (if key provided)
    if GOOGLE_MAPS_API_KEY:
        try:
            resp = requests.post(
                "https://places.googleapis.com/v1/places:searchText",
                headers={
                    "Content-Type": "application/json",
                    "X-Goog-Api-Key": GOOGLE_MAPS_API_KEY,
                    "X-Goog-FieldMask": "places.displayName,places.photos",
                },
                json={"textQuery": query, "languageCode": "ko"},
                timeout=10,
            )
            if resp.status_code == 200:
                places = resp.json().get("places", [])
                if places and "photos" in places[0]:
                    for photo in places[0]["photos"][:max_photos]:
                        photo_name = photo.get("name")
                        if photo_name:
                            media_url = (
                                f"https://places.googleapis.com/v1/{photo_name}/media"
                                f"?maxWidthPx=1200&key={GOOGLE_MAPS_API_KEY}"
                            )
                            urls.append(media_url)
                    if urls:
                        return urls
        except Exception as e:
            print(f"  [!] Places API error: {e}")

    # Tier 2: Direct Google Maps Search -> tbm=map JSON payload
    try:
        encoded = urllib.parse.quote(query)
        search_url = f"https://www.google.com/maps/search/{encoded}?hl=ko"
        resp = requests.get(search_url, headers=HEADERS, timeout=12)
        if resp.status_code == 200:
            text = html.unescape(resp.text).replace('\\/', '/').replace('\\u003d', '=').replace('\\u0026', '&')

            # Follow the embedded /search?tbm=map&...&pb=... RPC URL first (contains ranked POI cards)
            tbm_urls = re.findall(r'/search\?tbm=map[^\s"\'\\<>]+', text)
            for tbm_path in tbm_urls:
                if 'pb=' not in tbm_path:
                    continue
                r2 = requests.get("https://www.google.com" + tbm_path, headers=HEADERS, timeout=12)
                if r2.status_code == 200:
                    t2 = html.unescape(r2.text).replace('\\/', '/').replace('\\u003d', '=').replace('\\u0026', '&')
                    urls = _extract_photo_urls_from_text(t2, max_photos=max_photos)
                    if urls:
                        return urls

            # Fallback to direct photos embedded in the initial HTML shell
            urls = _extract_photo_urls_from_text(text, max_photos=max_photos)
            if urls:
                return urls
    except Exception as e:
        print(f"  [!] Google Maps direct search error: {e}")

    return urls


from detect_bad_images import analyze_image


def download_from_google_maps(queries, save_path):
    """
    Attempts to download the representative photo from Google Maps using the candidate queries.
    Validates each candidate against pictogram/logo/watermark filters before accepting.
    """
    fallback_bytes = None
    for query in queries:
        print(f"  [Google Maps] Searching place photo for: '{query}'...")
        photo_urls = fetch_google_maps_photo_urls(query, max_photos=6)
        for url in photo_urls:
            try:
                resp = requests.get(url, headers=HEADERS, timeout=12)
                content_type = resp.headers.get("Content-Type", "")
                if resp.status_code == 200 and "image" in content_type and len(resp.content) > 5000:
                    if fallback_bytes is None:
                        fallback_bytes = resp.content
                    with open(save_path, "wb") as f:
                        f.write(resp.content)
                    is_bad, reasons = analyze_image(save_path)
                    if is_bad:
                        print(f"  [!] Skipping logo/vector candidate ({', '.join(reasons)}), trying next photo...")
                        continue
                    print(f"  [v] Saved Google Maps photo to {save_path} ({len(resp.content) // 1024} KB)")
                    return True
            except Exception as e:
                print(f"  [x] Failed downloading photo URL: {e}")

    if fallback_bytes is not None:
        with open(save_path, "wb") as f:
            f.write(fallback_bytes)
        print(f"  [~] Saved fallback Google Maps photo to {save_path}")
        return True
    return False


from concurrent.futures import ThreadPoolExecutor, as_completed


def process_item(item):
    relative_path = item['img']
    clean_path = relative_path.lstrip('./').replace('/', os.sep)
    full_path = os.path.join(BASE_DIR, clean_path)
    directory = os.path.dirname(full_path)

    os.makedirs(directory, exist_ok=True)

    if os.path.exists(full_path):
        return True

    queries = build_queries(item, clean_path)
    print(f"\nMissing: [{item['name']}] -> {clean_path}")
    return download_from_google_maps(queries, full_path)


def main():
    print("Initializing Image Manager (Google Maps Representative Photo Fetcher)...")
    print(f"Target: {HTML_FILE}")

    if not os.path.exists(HTML_FILE):
        print(f"Error: Could not find {HTML_FILE}")
        return

    items = parse_html_for_images(HTML_FILE)
    # Ensure country hero slider images are also checked
    hero_items = [
        {'name': 'Taipei 101 Observatory Taiwan', 'desc': 'Taiwan landmark skyline', 'img': './images/taiwan_main.jpg'},
        {'name': 'Marina Bay Sands Singapore', 'desc': 'Singapore skyline', 'img': './images/singapore_main.jpg'},
        {'name': 'Petronas Twin Towers Kuala Lumpur', 'desc': 'Malaysia skyline', 'img': './images/malaysia_main.jpg'},
        {'name': 'Wat Arun Bangkok Thailand', 'desc': 'Thailand landmark skyline', 'img': './images/thailand_main.jpg'},
    ]
    items = hero_items + items
    print(f"Found {len(items)} place image references.")

    missing_items = []
    for item in items:
        clean_path = item['img'].lstrip('./').replace('/', os.sep)
        full_path = os.path.join(BASE_DIR, clean_path)
        if not os.path.exists(full_path):
            missing_items.append(item)

    print(f"Fetching {len(missing_items)} missing images from Google Maps...")
    with ThreadPoolExecutor(max_workers=6) as executor:
        futures = [executor.submit(process_item, item) for item in missing_items]
        for _ in as_completed(futures):
            pass

    print("\nDone! Check the images folder.")


if __name__ == "__main__":
    main()
