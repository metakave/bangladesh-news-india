import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'src/data/news-data.ts');
let content = fs.readFileSync(filePath, 'utf-8');

const regex = /export const SCANNED_NEWS_ITEMS: NewsItem\[\] = (\[[\s\S]*?\n\]);/;
const match = content.match(regex);

if (!match) {
  console.error("Could not find SCANNED_NEWS_ITEMS");
  process.exit(1);
}

const arrayContent = match[1];
const items = new Function('return ' + arrayContent)();

let modifiedCount = 0;
for (const item of items) {
  const title = (item.title || "").toLowerCase();
  const enTitle = (item.englishTitle || "").toLowerCase();
  const bnTitle = (item.banglaTitle || "");
  const tags = (item.tags || []).map(t => t.toLowerCase());

  const isHasinaRelated = 
    title.includes('hasina') ||
    enTitle.includes('hasina') ||
    bnTitle.includes('হাসিনা') ||
    tags.some(t => t.includes('hasina') || t.includes('হাসিনা'));

  const isYouTube = item.source && item.source.originalUrl && 
    (item.source.originalUrl.includes('youtube.com') || item.source.originalUrl.includes('youtu.be'));

  // Ensure it's not a YouTube video as they MUST use the video thumbnail
  if (isHasinaRelated && !isYouTube) {
    if (item.imageUrl !== '/images/sheikh-hasina-mea.jpg') {
      item.imageUrl = '/images/sheikh-hasina-mea.jpg';
      modifiedCount++;
    }
  }
}

console.log(`Modified ${modifiedCount} items.`);

const newArrayContent = JSON.stringify(items, null, 2);
const newContent = content.replace(regex, 'export const SCANNED_NEWS_ITEMS: NewsItem[] = ' + newArrayContent + ';');

fs.writeFileSync(filePath, newContent, 'utf-8');
console.log("Done.");
