import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const newsFilePath = path.join(rootDir, 'src/data/news-data.ts');
const content = fs.readFileSync(newsFilePath, 'utf8');

// Known domain to source name mappings for consistency validation
const DOMAIN_SOURCE_RULES = [
  { domain: 'timesofindia.indiatimes.com', validNames: ['The Times of India', 'Times of India', 'Times of India World', 'Times of India Top'] },
  { domain: 'economictimes.indiatimes.com', validNames: ['Economic Times', 'The Economic Times'] },
  { domain: 'navbharattimes.indiatimes.com', validNames: ['Navbharat Times', 'Navbharat Times World'] },
  { domain: 'thehindu.com', validNames: ['The Hindu', 'The Hindu Top', 'The Hindu World', 'Sportstar'] },
  { domain: 'indianexpress.com', validNames: ['The Indian Express', 'The Indian Express World', 'The Indian Express India', 'The Indian Express Explained'] },
  { domain: 'anandabazar.com', validNames: ['Anandabazar Patrika', 'Anandabazar'] },
  { domain: 'sangbadpratidin.in', validNames: ['Sangbad Pratidin'] },
  { domain: 'thewall.in', validNames: ['The Wall', 'The Wall (Instagram)'] },
  { domain: 'ndtv.com', validNames: ['NDTV', 'NDTV World', 'NDTV Top Stories', 'NDTV Sports', 'NDTV India', 'NDTV Exclusive'] },
  { domain: 'indiatoday.in', validNames: ['India Today', 'India Today (Instagram)'] },
  { domain: 'hindustantimes.com', validNames: ['Hindustan Times', 'Hindustan Times World', 'Live Hindustan', 'Live Hindustan World', 'Hindustan'] },
  { domain: 'jagran.com', validNames: ['Dainik Jagran', 'Jagran'] },
  { domain: 'amarujala.com', validNames: ['Amar Ujala', 'Amar Ujala World'] },
  { domain: 'wionews.com', validNames: ['WION', 'WION Bangladesh & South Asia'] },
  { domain: 'republicworld.com', validNames: ['Republic TV', 'Republic TV World', 'Republic World', 'Republic Bangla (YouTube)'] },
  { domain: 'timesnownews.com', validNames: ['Times Now', 'Times Now World'] },
  { domain: 'news18.com', validNames: ['News18', 'News18 World', 'News18 Bengali', 'News18 Hindi'] },
  { domain: 'abplive.com', validNames: ['ABP Ananda', 'ABP Ananda (YouTube)', 'ABP Live', 'ABP Majha'] },
  { domain: 'tv9bangla.com', validNames: ['TV9 Bangla'] },
  { domain: 'tripuratimes.com', validNames: ['Tripura Times'] },
  { domain: 'assamtribune.com', validNames: ['The Assam Tribune', 'Assam Tribune'] },
  { domain: 'barakbulletin.com', validNames: ['Barak Bulletin'] },
  { domain: 'syandanpatrika.com', validNames: ['Syandan Patrika'] },
  { domain: 'bartamanpatrika.com', validNames: ['Bartaman Patrika'] },
  { domain: 'uttarbangasambad.com', validNames: ['Uttarbanga Sambad'] },
  { domain: 'eisamay.com', validNames: ['Ei Samay', 'Ei Samay (Instagram)'] },
  { domain: 'ntnews.com', validNames: ['Namasthe Telangana', 'NT News'] },
  { domain: 'madhyamam.com', validNames: ['Madhyamam'] },
  { domain: 'divyamarathi.bhaskar.com', validNames: ['Divya Marathi'] },
  { domain: 'ptcnews.tv', validNames: ['PTC News'] },
  { domain: 'inquilab.com', validNames: ['The Inquilab', 'Inquilab', 'Roznama Inquilab'] },
  { domain: 'theinquilab.com', validNames: ['The Inquilab', 'Inquilab', 'Roznama Inquilab'] },
  { domain: 'siasat.com', validNames: ['The Siasat Daily', 'Siasat Daily', 'Siasat Urdu', 'Siasat'] },
  { domain: 'roznamasahara.com', validNames: ['Roznama Rashtriya Sahara', 'Rashtriya Sahara', 'Sahara Urdu'] },
  { domain: 'munsifdaily.com', validNames: ['The Munsif Daily', 'Munsif Daily', 'Munsif Urdu', 'Munsif'] },
  { domain: 'taasir.com', validNames: ['Daily Taasir', 'Roznama Taasir', 'Taasir'] }
];

console.log('🔍 Running Narrative Compass - News Link & Source Integrity Validator...\n');

// Extract all news item JSON blocks
const items = [];
const itemRegex = /\{\s*"id":\s*"([^"]+)"[\s\S]*?"title":\s*"([^"]+)"[\s\S]*?"source":\s*\{([\s\S]*?)\}/g;
let match;

while ((match = itemRegex.exec(content)) !== null) {
  const id = match[1];
  const title = match[2];
  const sourceBlock = match[3];

  const nameMatch = sourceBlock.match(/"name":\s*"([^"]+)"/);
  const originalUrlMatch = sourceBlock.match(/"originalUrl":\s*"([^"]+)"/);
  const langMatch = sourceBlock.match(/"language":\s*"([^"]+)"/);

  if (nameMatch && originalUrlMatch) {
    items.push({
      id,
      title,
      sourceName: nameMatch[1],
      originalUrl: originalUrlMatch[1],
      language: langMatch ? langMatch[1] : 'Unknown'
    });
  }
}

console.log(`📊 Validating ${items.length} news dispatches...`);

let errorCount = 0;
let warningCount = 0;

items.forEach((item) => {
  const url = item.originalUrl.trim();

  // 1. Check for raw Google News redirect wrapper
  if (url.includes('news.google.com/rss/articles/')) {
    console.error(`❌ [${item.id}] Contains unresolved Google News wrapper URL: ${url}`);
    errorCount++;
  }

  // 2. Check for generic domain root
  if (url === 'https://www.youtube.com' || url === 'https://youtube.com' || url === 'https://www.instagram.com' || url === 'https://instagram.com') {
    console.warn(`⚠️ [${item.id}] Generic root media link: ${url}`);
    warningCount++;
  }

  // 3. Domain vs Source Name consistency check
  try {
    const parsed = new URL(url);
    let hostname = parsed.hostname.toLowerCase();
    if (hostname.startsWith('www.')) hostname = hostname.slice(4);
    if (hostname.startsWith('m.')) hostname = hostname.slice(2);
    if (hostname.startsWith('hindi.')) hostname = hostname.slice(6);
    if (hostname.startsWith('bengali.')) hostname = hostname.slice(8);

    for (const rule of DOMAIN_SOURCE_RULES) {
      if (hostname === rule.domain) {
        const isMatched = rule.validNames.some(vn => item.sourceName.toLowerCase().includes(vn.toLowerCase()) || vn.toLowerCase().includes(item.sourceName.toLowerCase()));
        if (!isMatched) {
          console.error(`❌ [${item.id}] SOURCE MISMATCH! Outlet '${item.sourceName}' does not match URL domain '${hostname}' (Link: ${url})`);
          errorCount++;
        }
      }
    }
  } catch (err) {
    console.error(`❌ [${item.id}] Malformed originalUrl: '${url}' (${err.message})`);
    errorCount++;
  }
});

console.log(`\n========================================`);
if (errorCount === 0) {
  console.log(`✅ All ${items.length} news items passed link and source integrity validation! (Warnings: ${warningCount})`);
  process.exit(0);
} else {
  console.error(`❌ Validation failed with ${errorCount} errors. Please fix the source link discrepancies above.`);
  process.exit(1);
}
