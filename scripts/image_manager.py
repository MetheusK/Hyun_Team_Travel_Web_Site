import os
import re
import shutil
import logging
from icrawler.builtin import GoogleImageCrawler, BingImageCrawler

# Configuration
HTML_FILE = os.path.join(os.path.dirname(__file__), '../index.html')
BASE_DIR = os.path.join(os.path.dirname(__file__), '../')

# Suppress icrawler logs
logging.getLogger('icrawler').setLevel(logging.ERROR)

def parse_html_for_images(html_path):
    """
    Parses the HTML file to find image paths defined in the JS object.
    Matches logic: img: "PATH"
    """
    with open(html_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Regex to find all img: "..." patterns
    img_matches = re.findall(r'img:\s*["\']([^"\']+)["\']', content)
    
    # Filter for locally referenced images in the images/ folder
    image_paths = [path for path in img_matches if 'images/' in path]
    
    # Remove duplicates
    return list(set(image_paths))

def download_with_engine(crawler_cls, query, save_path):
    """
    Uses the specified Crawler Class (GoogleImageCrawler or BingImageCrawler) to download an image.
    """
    engine_name = "Google" if crawler_cls == GoogleImageCrawler else "Bing"
    print(f"Searching ({engine_name}) for: {query}...")
    
    # Directory where the final file should be
    target_dir = os.path.dirname(save_path)
    # Temporary directory for icrawler
    temp_dir = os.path.join(target_dir, f"temp_icrawler_{engine_name}")
    
    try:
        if not os.path.exists(temp_dir):
            os.makedirs(temp_dir, exist_ok=True)
            
        # Configure crawler
        # parser_threads=2, downloader_threads=2 for speed
        crawler = crawler_cls(
            downloader_threads=4,
            storage={'root_dir': temp_dir},
            log_level=logging.CRITICAL
        )
        
        # Crawl
        crawler.crawl(keyword=query, max_num=1, overwrite=True)
        
        # Check if file downloaded
        files = os.listdir(temp_dir)
        if not files:
            print(f"  [!] No results found on {engine_name} for '{query}'")
            shutil.rmtree(temp_dir)
            return False
            
        # Get the first file (usually 000001.jpg or similar)
        downloaded_file = files[0]
        src_file = os.path.join(temp_dir, downloaded_file)
        
        # Move and Rename to target save_path
        shutil.move(src_file, save_path)
        print(f"  [v] Saved to {save_path}")
        
        # Cleanup
        shutil.rmtree(temp_dir)
        return True
        
    except Exception as e:
        print(f"  [x] Error with {engine_name}: {e}")
        if os.path.exists(temp_dir):
            try:
                shutil.rmtree(temp_dir)
            except:
                pass
        return False

def clean_query(query):
    """
    Removes consecutive duplicate words from the query string.
    e.g., "Sydney Sydney Opera House" -> "Sydney Opera House"
    """
    if not query:
        return ""
    
    words = query.split()
    cleaned = [words[0]]
    for i in range(1, len(words)):
        # Case insensitive comparison
        if words[i].lower() != words[i-1].lower():
            cleaned.append(words[i])
            
    return " ".join(cleaned)

def main():
    print("Initializing Image Manager (Google -> Bing Fallback)...")
    print(f"Target: {HTML_FILE}")
    
    if not os.path.exists(HTML_FILE):
        print(f"Error: Could not find {HTML_FILE}")
        return

    img_paths = parse_html_for_images(HTML_FILE)
    print(f"Found {len(img_paths)} image references.")

    for relative_path in img_paths:
        # Correct path if it starts with ./
        clean_path = relative_path.lstrip('./').replace('/', os.sep)
        full_path = os.path.join(BASE_DIR, clean_path)
        directory = os.path.dirname(full_path)

        # 1. Create directory if missing
        if not os.path.exists(directory):
            print(f"Creating directory: {directory}")
            os.makedirs(directory, exist_ok=True)

        # 2. Check if file exists
        if os.path.exists(full_path):
            continue

        # 3. Determine search query from filename
        filename = os.path.basename(full_path)
        name_part = os.path.splitext(filename)[0]
        
        # Build a better query: "Country City AttractionName"
        # We can extract country/city from path for better context
        # Path structure: .../images/country/city/filename.jpg
        parts = clean_path.split(os.sep)
        context = ""
        if len(parts) >= 3:
            # parts[-3] is country, parts[-2] is city
            country = parts[-3].replace('_', ' ')
            city = parts[-2].replace('_', ' ')
            context = f"{country} {city}"
            
        # 1. Build Base Query
        raw_query = f"{context} {name_part.replace('_', ' ')}"
        # 2. Clean Duplicates (e.g. Sydney Sydney)
        base_query = clean_query(raw_query)
        
        # 3. Add suffixes for primary search
        primary_query = f"{base_query} travel landmark"

        print(f"\nMissing: {clean_path}")
        
        # Strategy:
        # 1. Google (Primary Query)
        # 2. Bing (Primary Query)
        # 3. Google (Simple Query)
        # 4. Bing (Simple Query)

        success = download_with_engine(GoogleImageCrawler, primary_query, full_path)
        
        if not success:
            success = download_with_engine(BingImageCrawler, primary_query, full_path)

        if not success:
            print(f"  [!] Retrying without suffixes: '{base_query}'")
            success = download_with_engine(GoogleImageCrawler, base_query, full_path)
            
        if not success:
            success = download_with_engine(BingImageCrawler, base_query, full_path)

    print("\nDone! Check the images folder.")

if __name__ == "__main__":
    main()
