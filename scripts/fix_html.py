import re
import os

FILE_PATH = r"c:\Coding\Webapge\Travel Webpage\index.html"

def repair_file():
    if not os.path.exists(FILE_PATH):
        print("File not found.")
        return

    with open(FILE_PATH, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Fix broken template literals "$ {" -> "${"
    # Handles cases with newlines or spaces between $ and {
    fixed_content = re.sub(r'\$\s+\{', '${', content)
    
    # 2. Fix broken className assignments like `className=`slide ${` which might have newlines
    # The previous view showed: className=`slide $ {\n ...
    # The regex above handles the $ { part.
    
    # 3. Collapse excessive newlines (3 or more -> 2)
    fixed_content = re.sub(r'\n{3,}', '\n\n', fixed_content)

    # 4. Check if regionData is present, if not we might need to add it later.
    # For now, just fix the syntax.

    with open(FILE_PATH, 'w', encoding='utf-8') as f:
        f.write(fixed_content)
    
    print("Repaired syntax errors in Travel Webpage.html")

if __name__ == "__main__":
    repair_file()
