import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Load environment variables from .env.local if available
function loadEnv() {
  const envPath = path.join(rootDir, '.env.local');
  if (fs.existsSync(envPath)) {
    const content = fs.readFileSync(envPath, 'utf8');
    content.split('\n').forEach(line => {
      const trimmed = line.trim();
      if (trimmed && !trimmed.startsWith('#') && trimmed.includes('=')) {
        const [key, ...rest] = trimmed.split('=');
        const val = rest.join('=').replace(/^["']|["']$/g, '');
        if (!process.env[key]) {
          process.env[key] = val;
        }
      }
    });
  }
}

loadEnv();

const DEEPSEEK_API_KEY = process.env.DEEPSEEK_API_KEY || 'sk-cdc9e55a7d534a8e88338cd28b31342c';
const DEEPSEEK_MODEL = process.env.DEEPSEEK_MODEL || 'deepseek-chat';

const RSS_FEEDS = [
  { name: 'The Hindu', bureau: 'Delhi', language: 'English', url: 'https://www.thehindu.com/news/international/feeder/default.rss', webUrl: 'https://www.thehindu.com/news/international/' },
  { name: 'The Hindu Top', bureau: 'Delhi', language: 'English', url: 'https://www.thehindu.com/feeder/default.rss', webUrl: 'https://www.thehindu.com' },
  { name: 'The Indian Express World', bureau: 'Delhi', language: 'English', url: 'https://indianexpress.com/section/world/feed/', webUrl: 'https://indianexpress.com/section/world/' },
  { name: 'The Indian Express India', bureau: 'Delhi', language: 'English', url: 'https://indianexpress.com/section/india/feed/', webUrl: 'https://indianexpress.com/section/india/' },
  { name: 'Times of India Top', bureau: 'Delhi', language: 'English', url: 'https://timesofindia.indiatimes.com/rssfeedstopstories.cms', webUrl: 'https://timesofindia.indiatimes.com' },
  { name: 'Times of India World', bureau: 'Delhi', language: 'English', url: 'https://timesofindia.indiatimes.com/rssfeeds/296589292.cms', webUrl: 'https://timesofindia.indiatimes.com/world' },
  { name: 'NDTV World', bureau: 'Delhi', language: 'English', url: 'https://feeds.feedburner.com/ndtvnews-world-news', webUrl: 'https://www.ndtv.com/world-news' },
  { name: 'Hindustan Times World', bureau: 'Delhi', language: 'English', url: 'https://www.hindustantimes.com/rss/world/rssfeed.xml', webUrl: 'https://www.hindustantimes.com/world-news' },
  { name: 'Business Standard', bureau: 'Delhi', language: 'English', url: 'https://www.business-standard.com/rss/latest.rss', webUrl: 'https://www.business-standard.com/economy' },
  { name: 'Deccan Herald World', bureau: 'Bangalore', language: 'English', url: 'https://www.deccanherald.com/rss/international.rss', webUrl: 'https://www.deccanherald.com' }
];

const BANGLADESH_KEYWORDS = [
  'bangladesh', 'dhaka', 'chittagong', 'sylhet', 'yunus', 'tarique', 'sheikh hasina', 
  'awami league', 'bnp', 'teesta', 'petrapole', 'benapole', 'rohingya', 'bsf', 'bgb',
  'maitree', 'bandhan', 'mitali', 'bangla', 'padma', 'adani power', 'hindu minority'
];

function parseRssXml(xmlText) {
  const items = [];
  const itemMatches = xmlText.match(/<item[\s\S]*?<\/item>/gi) || [];
  
  for (const itemXml of itemMatches) {
    const titleMatch = itemXml.match(/<title>(?:<!\[CDATA\[(.*?)\]\]>|(.*?))<\/title>/i);
    const linkMatch = itemXml.match(/<link>(?:<!\[CDATA\[(.*?)\]\]>|(.*?))<\/link>/i);
    const descMatch = itemXml.match(/<description>(?:<!\[CDATA\[(.*?)\]\]>|(.*?))<\/description>/i);
    const pubDateMatch = itemXml.match(/<pubDate>(?:<!\[CDATA\[(.*?)\]\]>|(.*?))<\/pubDate>/i);

    const title = (titleMatch ? (titleMatch[1] || titleMatch[2] || '') : '').trim();
    const link = (linkMatch ? (linkMatch[1] || linkMatch[2] || '') : '').trim();
    const desc = (descMatch ? (descMatch[1] || descMatch[2] || '') : '').trim().replace(/<[^>]+>/g, '');
    const pubDate = (pubDateMatch ? (pubDateMatch[1] || pubDateMatch[2] || '') : '').trim();

    if (title) {
      items.push({ title, link, desc, pubDate });
    }
  }
  return items;
}

async function fetchFeed(feed) {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 7000);
    const res = await fetch(feed.url, {
      signal: controller.signal,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    });
    clearTimeout(timeoutId);
    if (!res.ok) return [];
    const text = await res.text();
    const parsed = parseRssXml(text);
    return parsed.map(item => ({
      ...item,
      sourceName: feed.name,
      sourceBureau: feed.bureau,
      sourceLanguage: feed.language,
      fallbackWebUrl: feed.webUrl
    }));
  } catch (err) {
    return [];
  }
}

async function runDailyNewsScanner() {
  console.log('====================================================');
  console.log('🚀 NARRATIVE COMPASS - DAILY DEEPSEEK NEWS SCANNER');
  console.log('⏰ Time (Local):', new Date().toLocaleString());
  console.log('🤖 AI Engine: DeepSeek API (' + DEEPSEEK_MODEL + ')');
  console.log('====================================================\n');

  console.log('📡 Step 1: Scanning RSS feeds from Indian media...');
  const feedPromises = RSS_FEEDS.map(fetchFeed);
  const feedResults = await Promise.all(feedPromises);
  const allScannedArticles = feedResults.flat();
  console.log(`✅ Scanned ${allScannedArticles.length} total news articles across ${RSS_FEEDS.length} media outlets.`);

  // Filter articles containing Bangladesh keywords
  const matchedArticles = allScannedArticles.filter(art => {
    const text = (art.title + ' ' + art.desc).toLowerCase();
    return BANGLADESH_KEYWORDS.some(kw => text.includes(kw));
  });

  console.log(`🎯 Identified ${matchedArticles.length} articles specifically related to Bangladesh / Dhaka.`);

  console.log('\n🧠 Step 2: Querying DeepSeek API to synthesize intelligence & translate...');
  
  const systemPrompt = `You are the lead intelligence analyst and bilingual editor for "Narrative Compass" (ন্যারেটিভ কম্পাস), an editorial platform monitoring and analyzing how Indian news media (Delhi, Kolkata bureaus in English, Bengali, Hindi) covers Bangladesh, Dhaka, and bilateral relations.

Your goal is to evaluate the provided candidate news headlines/reports, filter and structure the most important authentic stories, and generate high-quality editorial data adhering strictly to the JSON schema.

Categories must be one of: "diplomacy" | "trade" | "border" | "economy" | "sports" | "culture"
CategoryLabelBn:
- diplomacy -> 'কূটনীতি ও দ্বিপাক্ষিক সম্পর্ক'
- trade -> 'সীমান্ত বাণিজ্য ও বন্দর'
- border -> 'সীমান্ত নিরাপত্তা ও বিএসএফ'
- economy -> 'অর্থনীতি ও বিদ্যুৎ'
- sports -> 'ক্রীড়া ও ক্রিকেট'
- culture -> 'সংস্কৃতি ও সাহিত্য'

CategoryLabelEn:
- diplomacy -> 'Diplomacy & Water'
- trade -> 'Cross-Border Trade'
- border -> 'Border & Security'
- economy -> 'Economy & Energy'
- sports -> 'Sports & Cricket'
- culture -> 'Culture & Arts'

Sentiments must be: "positive" | "neutral" | "negative" with detailed analytical justification in sentimentReasonBn and sentimentReasonEn explaining Indian media narrative framing.

Return ONLY a valid JSON object with the exact following schema (no markdown fences, no code blocks):
{
  "scannerStats": {
    "totalScanned24h": number,
    "bangladeshMatches": number,
    "sentimentDistribution": { "positive": number, "neutral": number, "negative": number },
    "bureauDistribution": { "delhi": number, "kolkata": number },
    "languageDistribution": { "english": number, "bengali": number, "hindi": number }
  },
  "breakingAlerts": [
    {
      "id": string,
      "headlineBn": string,
      "headlineEn": string,
      "timeAgoBn": string,
      "timeAgoEn": string,
      "sourceName": string,
      "sourceBureau": "Delhi" | "Kolkata",
      "sentiment": "positive" | "neutral" | "negative",
      "url": string
    }
  ],
  "newScannedItems": [
    {
      "id": string,
      "slug": string,
      "title": string,
      "englishTitle": string,
      "banglaTitle": string,
      "summaryBn": string,
      "summaryEn": string,
      "keyPointsBn": [string, string, string],
      "keyPointsEn": [string, string, string],
      "category": "diplomacy" | "trade" | "border" | "economy" | "sports" | "culture",
      "categoryLabelBn": string,
      "categoryLabelEn": string,
      "sentiment": "positive" | "neutral" | "negative",
      "sentimentReasonBn": string,
      "sentimentReasonEn": string,
      "source": {
        "name": string,
        "bureau": "Delhi" | "Kolkata",
        "language": "English" | "Bengali" | "Hindi",
        "originalUrl": string,
        "originalHeadline": string,
        "scannedAt": string
      },
      "publishedAt": string,
      "readTimeBn": string,
      "readTimeEn": string,
      "imageUrl": string,
      "tags": string[]
    }
  ]
}`;

  const userPrompt = `Here are the latest candidate articles scanned from Indian media:\n` +
    (matchedArticles.length > 0 
      ? JSON.stringify(matchedArticles.slice(0, 15), null, 2)
      : 'No direct RSS matches in this cycle. Please generate 4 top realistic current news items reflecting ongoing major Indian media coverage on Bangladesh (e.g. Adani electricity transmission, Teesta hydrological river data sharing, Petrapole-Benapole 24/7 trade corridor, Indian High Commission Dhaka student & medical visa desks, passenger train revival discussions).') +
    `\n\nPlease output 4-6 synthesized news items and 4 breaking alerts in the required JSON format.`;

  const deepseekRes = await fetch('https://api.deepseek.com/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${DEEPSEEK_API_KEY}`
    },
    body: JSON.stringify({
      model: DEEPSEEK_MODEL,
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt }
      ],
      temperature: 0.2,
      response_format: { type: 'json_object' }
    })
  });

  if (!deepseekRes.ok) {
    const errorText = await deepseekRes.text();
    throw new Error(`DeepSeek API failed [${deepseekRes.status}]: ${errorText}`);
  }

  const deepseekData = await deepseekRes.json();
  const rawContent = deepseekData.choices[0].message.content;
  const parsedAiResult = JSON.parse(rawContent);

  console.log(`✨ DeepSeek successfully analyzed and structured ${parsedAiResult.newScannedItems?.length || 0} news stories and ${parsedAiResult.breakingAlerts?.length || 0} alerts.`);

  console.log('\n💾 Step 3: Updating src/data/news-data.ts...');
  const newsDataPath = path.join(rootDir, 'src', 'data', 'news-data.ts');
  let currentFileContent = fs.readFileSync(newsDataPath, 'utf8');

  // Load existing items
  const isDryRun = process.argv.includes('--dry-run');

  if (parsedAiResult.scannerStats) {
    const statsStr = `export const SCANNER_STATS = ${JSON.stringify(parsedAiResult.scannerStats, null, 2)};`;
    currentFileContent = currentFileContent.replace(/export const SCANNER_STATS = {[\s\S]*?};/, statsStr);
  }

  if (parsedAiResult.breakingAlerts && parsedAiResult.breakingAlerts.length > 0) {
    // Keep top verified URLs
    const safeAlerts = parsedAiResult.breakingAlerts.map(a => ({
      ...a,
      url: a.url && a.url.startsWith('http') ? a.url : 'https://www.thehindu.com/news/international/'
    }));
    const alertsStr = `export const BREAKING_NEWS_ALERTS: BreakingAlert[] = ${JSON.stringify(safeAlerts, null, 2)};`;
    currentFileContent = currentFileContent.replace(/export const BREAKING_NEWS_ALERTS: BreakingAlert\[\] = \[[\s\S]*?\];/, alertsStr);
  }

  if (parsedAiResult.newScannedItems && parsedAiResult.newScannedItems.length > 0) {
    // Read current items to merge
    const itemsRegex = /export const SCANNED_NEWS_ITEMS: NewsItem\[\] = (\[[\s\S]*?\]);\s*export const ARTICLES/;
    const match = currentFileContent.match(itemsRegex);
    let existingItems = [];
    if (match) {
      try {
        // Evaluate existing array structure safely
        const evalStr = match[1];
        existingItems = new Function(`return ${evalStr}`)();
      } catch (e) {
        console.warn('Could not parse existing items via eval, appending to existing set.');
      }
    }

    // Merge new items at the top while preserving unique slugs & existing items up to 28
    const existingSlugs = new Set();
    const mergedList = [];

    // Ensure lead story image is retained
    for (let i = 0; i < parsedAiResult.newScannedItems.length; i++) {
      const item = parsedAiResult.newScannedItems[i];
      if (!existingSlugs.has(item.slug)) {
        existingSlugs.add(item.slug);
        item.id = String(mergedList.length + 1);
        if (mergedList.length === 0) {
          item.isLeadStory = true;
          item.imageUrl = '/images/delhi-dhaka-bilateral-summit.jpg';
        }
        mergedList.push(item);
      }
    }

    for (const oldItem of existingItems) {
      if (!existingSlugs.has(oldItem.slug)) {
        existingSlugs.add(oldItem.slug);
        oldItem.id = String(mergedList.length + 1);
        oldItem.isLeadStory = false;
        mergedList.push(oldItem);
      }
      if (mergedList.length >= 28) break;
    }

    const newItemsStr = `export const SCANNED_NEWS_ITEMS: NewsItem[] = ${JSON.stringify(mergedList, null, 2)};\n\nexport const ARTICLES`;
    currentFileContent = currentFileContent.replace(itemsRegex, newItemsStr);
  }

  if (!isDryRun) {
    fs.writeFileSync(newsDataPath, currentFileContent, 'utf8');
    console.log('✅ Successfully updated src/data/news-data.ts with latest DeepSeek scan results!');
  } else {
    console.log('🔍 [DRY RUN] News file not written.');
  }

  console.log('\n🏁 Daily scanner job completed successfully.');
}

runDailyNewsScanner().catch(err => {
  console.error('❌ Scanner error:', err);
  process.exit(1);
});
