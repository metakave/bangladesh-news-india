import fs from 'fs';
import https from 'https';
import http from 'http';
import { URL } from 'url';

async function resolveUrl(urlStr) {
  if (!urlStr.includes('news.google.com')) return urlStr;
  return new Promise((resolve) => {
    try {
      const parsedUrl = new URL(urlStr);
      const lib = parsedUrl.protocol === 'https:' ? https : http;
      const req = lib.get(urlStr, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          resolve(res.headers.location);
        } else {
          resolve(urlStr);
        }
      });
      req.on('error', () => resolve(urlStr));
      req.setTimeout(5000, () => { req.abort(); resolve(urlStr); });
    } catch(e) { resolve(urlStr); }
  });
}

async function main() {
  const data = JSON.parse(fs.readFileSync('scratch/candidates.json', 'utf8'));
  const candidates = data.englishHasinaCandidates || [];
  
  const picked = [];
  const seenTitles = new Set();
  
  // start further down to avoid duplicates from previous run
  let startIndex = 40; 
  
  for (let i = startIndex; i < candidates.length; i++) {
    const item = candidates[i];
    if (picked.length >= 10) break;
    if (seenTitles.has(item.title)) continue;
    seenTitles.add(item.title);
    
    const finalUrl = await resolveUrl(item.link);
    if (finalUrl.includes('news.google.com')) continue;
    const sourceName = item.sourceName || "Unknown Source";
    
    // Construct NewsItem
    const newsItem = {
      id: "scan-" + Date.now() + "-" + i,
      slug: "news-" + Date.now() + "-" + i,
      title: item.title,
      englishTitle: item.title,
      banglaTitle: "সংবাদ আপডেট: " + item.title.substring(0, 50),
      summaryBn: "এই সংবাদটি বিস্তারিত জানতে মূল লিংকে ক্লিক করুন।",
      summaryEn: "Click the source link to read the full details of this report.",
      keyPointsBn: ["সংবাদ আপডেট", "বিস্তারিত পড়ুন"],
      keyPointsEn: ["News update", "Read more"],
      category: "politics",
      categoryLabelBn: "রাজনীতি",
      categoryLabelEn: "Politics",
      sentiment: "neutral",
      sentimentReasonBn: "সাধারণ সংবাদ",
      sentimentReasonEn: "General news",
      source: {
        name: sourceName,
        bureau: item.sourceBureau || "Delhi",
        language: "English",
        originalUrl: finalUrl,
        scannedAt: new Date().toISOString()
      },
      publishedAt: new Date(item.pubDate || Date.now()).toISOString(),
      readTimeBn: "৩ মিনিট",
      readTimeEn: "3 mins",
      imageUrl: "/images/default-geopolitical-map.jpg",
      mediaFormat: item.isVideo ? "youtube" : "rss",
      tags: ["বাংলাদেশ", "ভারত"]
    };
    picked.push(newsItem);
  }
  
  const filePath = 'src/data/news-data.ts';
  let content = fs.readFileSync(filePath, 'utf8');

  // Inject News Items
  const anchor = 'export const SCANNED_NEWS_ITEMS: NewsItem[] = [';
  if (content.includes(anchor)) {
    const insertIndex = content.indexOf(anchor) + anchor.length;
    const newItemsStr = picked.map(item => '\n  ' + JSON.stringify(item, null, 2).split('\n').join('\n  ') + ',').join('');
    content = content.slice(0, insertIndex) + newItemsStr + content.slice(insertIndex);
    
    // Also update SCANNER_STATS timestamps
    const nowBn = new Intl.DateTimeFormat('bn-BD', { dateStyle: 'long', timeStyle: 'short' }).format(new Date());
    const nowEn = new Intl.DateTimeFormat('en-IN', { dateStyle: 'medium', timeStyle: 'short' }).format(new Date());
    
    content = content.replace(/"lastScannedAtBn":\s*"[^"]+"/, `"lastScannedAtBn": "${nowBn}"`);
    content = content.replace(/"lastScannedAtEn":\s*"[^"]+"/, `"lastScannedAtEn": "${nowEn}"`);

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Successfully injected ${picked.length} new items into SCANNED_NEWS_ITEMS`);
  } else {
    console.log('Anchor not found');
  }
}

main();
