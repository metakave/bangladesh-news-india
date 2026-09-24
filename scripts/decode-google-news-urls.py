import re
import json
import time
from googlenewsdecoder import gnewsdecoder

with open("src/data/news-data.ts", "r", encoding="utf-8") as f:
    content = f.read()

url_matches = list(re.finditer(r'"originalUrl":\s*"(https://news\.google\.com/rss/articles/[^"]+)"', content))
print(f"Found {len(url_matches)} Google News URLs in news-data.ts")

unique_urls = list(set([m.group(1) for m in url_matches]))
print(f"Unique Google News URLs: {len(unique_urls)}")

decoded_map = {}
failed_urls = []

for i, url in enumerate(unique_urls):
    try:
        res = gnewsdecoder(url)
        if res.get("success") and res.get("decoded_url"):
            decoded_url = res.get("decoded_url")
            decoded_map[url] = decoded_url
            print(f"[{i+1}/{len(unique_urls)}] OK -> {decoded_url[:80]}")
        else:
            failed_urls.append(url)
            print(f"[{i+1}/{len(unique_urls)}] FAILED")
    except Exception as e:
        failed_urls.append(url)
        print(f"[{i+1}/{len(unique_urls)}] Error: {e}")
    time.sleep(0.05)

print(f"\nSuccessfully decoded {len(decoded_map)} of {len(unique_urls)} URLs.")
print(f"Failed count: {len(failed_urls)}")

with open("scratch/decoded_urls_map.json", "w", encoding="utf-8") as out:
    json.dump(decoded_map, out, indent=2)

print("Saved scratch/decoded_urls_map.json")
