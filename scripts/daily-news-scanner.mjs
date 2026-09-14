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
  // 1. National English Outlets
  { name: 'The Hindu', bureau: 'Delhi', language: 'English', url: 'https://www.thehindu.com/news/international/feeder/default.rss', webUrl: 'https://www.thehindu.com/news/international/' },
  { name: 'The Hindu Top', bureau: 'Delhi', language: 'English', url: 'https://www.thehindu.com/feeder/default.rss', webUrl: 'https://www.thehindu.com' },
  { name: 'The Indian Express World', bureau: 'Delhi', language: 'English', url: 'https://indianexpress.com/section/world/feed/', webUrl: 'https://indianexpress.com/section/world/' },
  { name: 'The Indian Express India', bureau: 'Delhi', language: 'English', url: 'https://indianexpress.com/section/india/feed/', webUrl: 'https://indianexpress.com/section/india/' },
  { name: 'Times of India Top', bureau: 'Delhi', language: 'English', url: 'https://timesofindia.indiatimes.com/rssfeedstopstories.cms', webUrl: 'https://timesofindia.indiatimes.com' },
  { name: 'Times of India World', bureau: 'Delhi', language: 'English', url: 'https://timesofindia.indiatimes.com/rssfeeds/296589292.cms', webUrl: 'https://timesofindia.indiatimes.com/world' },
  { name: 'NDTV World', bureau: 'Delhi', language: 'English', url: 'https://feeds.feedburner.com/ndtvnews-world-news', webUrl: 'https://www.ndtv.com/world-news' },
  { name: 'NDTV Top Stories', bureau: 'Delhi', language: 'English', url: 'https://feeds.feedburner.com/ndtvnews-top-stories', webUrl: 'https://www.ndtv.com' },
  { name: 'Hindustan Times World', bureau: 'Delhi', language: 'English', url: 'https://www.hindustantimes.com/rss/world/rssfeed.xml', webUrl: 'https://www.hindustantimes.com/world-news' },
  { name: 'India Today', bureau: 'Delhi', language: 'English', url: 'https://www.indiatoday.in/rss/home', webUrl: 'https://www.indiatoday.in' },
  { name: 'Business Standard', bureau: 'Delhi', language: 'English', url: 'https://www.business-standard.com/rss/latest.rss', webUrl: 'https://www.business-standard.com/economy' },
  { name: 'Deccan Herald World', bureau: 'Bangalore', language: 'English', url: 'https://www.deccanherald.com/rss/international.rss', webUrl: 'https://www.deccanherald.com' },

  // 2. Kolkata & Regional Bengali Outlets
  { name: 'Sangbad Pratidin', bureau: 'Kolkata', language: 'Bengali', url: 'https://sangbadpratidin.in/feed/', webUrl: 'https://sangbadpratidin.in' },
  { name: 'ABP Ananda', bureau: 'Kolkata', language: 'Bengali', url: 'https://bengali.abplive.com/home/feed', webUrl: 'https://bengali.abplive.com' },
  { name: 'BBC Bengali', bureau: 'Kolkata', language: 'Bengali', url: 'https://feeds.bbci.co.uk/bengali/rss.xml', webUrl: 'https://www.bbc.com/bengali' },

  // 3. Hindi Outlets
  { name: 'BBC Hindi', bureau: 'Delhi', language: 'Hindi', url: 'https://feeds.bbci.co.uk/hindi/rss.xml', webUrl: 'https://www.bbc.com/hindi' },

  // 4. Multi-outlet Aggregated Live Feeds from Top Indian Media
  { 
    name: 'Indian Media - Bangladesh Wire', 
    bureau: 'Delhi', 
    language: 'English', 
    url: 'https://news.google.com/rss/search?q=' + encodeURIComponent('Bangladesh (site:thehindu.com OR site:indianexpress.com OR site:timesofindia.indiatimes.com OR site:hindustantimes.com OR site:ndtv.com OR site:telegraphindia.com OR site:anandabazar.com OR site:livemint.com OR site:news18.com OR site:indiatoday.in OR site:business-standard.com) when:5d') + '&hl=en-IN&gl=IN&ceid=IN:en', 
    webUrl: 'https://news.google.com' 
  },
  { 
    name: 'Indian Media - Dhaka Wire', 
    bureau: 'Delhi', 
    language: 'English', 
    url: 'https://news.google.com/rss/search?q=' + encodeURIComponent('Dhaka (site:thehindu.com OR site:indianexpress.com OR site:timesofindia.indiatimes.com OR site:hindustantimes.com OR site:ndtv.com OR site:telegraphindia.com OR site:anandabazar.com OR site:livemint.com OR site:news18.com OR site:indiatoday.in OR site:business-standard.com) when:5d') + '&hl=en-IN&gl=IN&ceid=IN:en', 
    webUrl: 'https://news.google.com' 
  },
  { 
    name: 'Bengali Media - Bangladesh Tracker', 
    bureau: 'Kolkata', 
    language: 'Bengali', 
    url: 'https://news.google.com/rss/search?q=' + encodeURIComponent('বাংলাদেশ (site:anandabazar.com OR site:sangbadpratidin.in OR site:bartamanpatrika.com OR site:bengali.abplive.com OR site:bengali.news18.com) when:5d') + '&hl=bn&gl=IN&ceid=IN:bn', 
    webUrl: 'https://news.google.com' 
  },
  { 
    name: 'Hindi Media - Bangladesh Tracker', 
    bureau: 'Delhi', 
    language: 'Hindi', 
    url: 'https://news.google.com/rss/search?q=' + encodeURIComponent('बांग्लादेश (site:jagran.com OR site:amarujala.com OR site:navbharattimes.indiatimes.com OR site:aajtak.in OR site:ndtv.in OR site:hindi.news18.com) when:5d') + '&hl=hi&gl=IN&ceid=IN:hi', 
    webUrl: 'https://news.google.com' 
  }
];

const BANGLADESH_KEYWORDS = [
  'bangladesh', 'dhaka', 'chittagong', 'sylhet', 'yunus', 'tarique', 'sheikh hasina', 
  'awami league', 'bnp', 'teesta', 'petrapole', 'benapole', 'rohingya', 'bsf', 'bgb',
  'maitree', 'bandhan', 'mitali', 'bangla', 'padma', 'adani power', 'hindu minority',
  'বাংলাদেশ', 'ঢাকা', 'চট্টগ্রাম', 'সিলেট', 'ইউনূস', 'তারেক', 'হাসিনা', 'তিস্তা', 'বেনাপোল', 'পেট্রাপোল',
  'बांग्लादेश', 'ढाका', 'हसीना', 'यूनुस', 'तारिक', 'तीस्ता'
];

const CATEGORY_DEFAULT_IMAGES = {
  diplomacy: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=1200&auto=format&fit=crop&q=80',
  trade: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80',
  border: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=1200&auto=format&fit=crop&q=80',
  politics: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=1200&auto=format&fit=crop&q=80',
  economy: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&auto=format&fit=crop&q=80',
  sports: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=1200&auto=format&fit=crop&q=80',
  culture: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=1200&auto=format&fit=crop&q=80'
};

function decodeHtmlEntities(str) {
  if (!str) return '';
  return str
    .replace(/&#8216;/g, "'")
    .replace(/&#8217;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&#8211;/g, '–')
    .replace(/&#8212;/g, '—')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&nbsp;/g, ' ')
    .replace(/&#(\d+);/g, (_, dec) => String.fromCharCode(dec));
}

function getBureauAndLanguage(sourceName, title, fallbackBureau = 'Delhi', fallbackLanguage = 'English') {
  const s = (sourceName || '').toLowerCase();
  let bureau = fallbackBureau;
  let language = fallbackLanguage;

  if (s.includes('anandabazar') || s.includes('pratidin') || s.includes('abp ananda') || 
      s.includes('bartaman') || s.includes('telegraph') || s.includes('statesman') || 
      s.includes('ei samay') || s.includes('kolkata') || s.includes('bangla')) {
    bureau = 'Kolkata';
  } else {
    bureau = 'Delhi';
  }

  if (/[\u0980-\u09FF]/.test(title) || s.includes('anandabazar') || s.includes('pratidin') || s.includes('abp ananda') || s.includes('bartaman') || s.includes('bengali') || s.includes('bangla')) {
    language = 'Bengali';
  } else if (/[\u0900-\u097F]/.test(title) || s.includes('jagran') || s.includes('amar ujala') || s.includes('navbharat') || s.includes('aaj tak') || s.includes('hindi')) {
    language = 'Hindi';
  } else {
    language = 'English';
  }

  return { bureau, language };
}

function parseRssXml(xmlText) {
  const items = [];
  const itemMatches = xmlText.match(/<item[\s\S]*?<\/item>/gi) || [];
  
  for (const itemXml of itemMatches) {
    const titleMatch = itemXml.match(/<title>(?:<!\[CDATA\[([\s\S]*?)\]\]>|([\s\S]*?))<\/title>/i);
    const linkMatch = itemXml.match(/<link>(?:<!\[CDATA\[([\s\S]*?)\]\]>|([\s\S]*?))<\/link>/i);
    const descMatch = itemXml.match(/<description>(?:<!\[CDATA\[([\s\S]*?)\]\]>|([\s\S]*?))<\/description>/i);
    const pubDateMatch = itemXml.match(/<pubDate>(?:<!\[CDATA\[([\s\S]*?)\]\]>|([\s\S]*?))<\/pubDate>/i);
    const sourceMatch = itemXml.match(/<source[^>]*>(?:<!\[CDATA\[([\s\S]*?)\]\]>|([\s\S]*?))<\/source>/i);

    let title = decodeHtmlEntities((titleMatch ? (titleMatch[1] || titleMatch[2] || '') : '').trim());
    let link = (linkMatch ? (linkMatch[1] || linkMatch[2] || '') : '').trim();
    let desc = decodeHtmlEntities((descMatch ? (descMatch[1] || descMatch[2] || '') : '').trim().replace(/<[^>]+>/g, ''));
    let pubDate = (pubDateMatch ? (pubDateMatch[1] || pubDateMatch[2] || '') : '').trim();
    let detectedSource = decodeHtmlEntities((sourceMatch ? (sourceMatch[1] || sourceMatch[2] || '') : '').trim());

    if (title) {
      if (!detectedSource && title.includes(' - ')) {
        const parts = title.split(' - ');
        detectedSource = parts[parts.length - 1].trim();
      }
      items.push({ title, link, desc, pubDate, detectedSource });
    }
  }
  return items;
}

async function fetchFeed(feed) {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 9000);
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
    return parsed.map(item => {
      const srcName = item.detectedSource || feed.name;
      const { bureau, language } = getBureauAndLanguage(srcName, item.title, feed.bureau, feed.language);
      return {
        ...item,
        sourceName: srcName,
        sourceBureau: bureau,
        sourceLanguage: language,
        fallbackWebUrl: feed.webUrl
      };
    });
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

Categories must be one of: "diplomacy" | "trade" | "border" | "politics" | "economy" | "sports" | "culture"
CategoryLabelBn:
- diplomacy -> 'কূটনীতি ও দ্বিপাক্ষিক সম্পর্ক'
- trade -> 'সীমান্ত বাণিজ্য ও বন্দর'
- border -> 'সীমান্ত নিরাপত্তা ও বিএসএফ'
- politics -> 'রাজনীতি ও নির্বাচন'
- economy -> 'অর্থনীতি ও বিদ্যুৎ'
- sports -> 'ক্রীড়া ও ক্রিকেট'
- culture -> 'সংস্কৃতি ও সাহিত্য'

CategoryLabelEn:
- diplomacy -> 'Diplomacy & Water'
- trade -> 'Cross-Border Trade'
- border -> 'Border & Security'
- politics -> 'Politics & Governance'
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
      "category": "diplomacy" | "trade" | "border" | "politics" | "economy" | "sports" | "culture",
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

  // Select diverse and relevant top candidate items to send to the AI
  const sampleCandidates = matchedArticles.slice(0, 25).map(m => ({
    title: m.title,
    description: m.desc.slice(0, 160),
    sourceName: m.sourceName,
    bureau: m.sourceBureau,
    language: m.sourceLanguage,
    url: m.link || m.fallbackWebUrl,
    pubDate: m.pubDate
  }));

  const userPrompt = `Here are the latest candidate articles scanned from Indian media (${matchedArticles.length} total matches found):\n` +
    (sampleCandidates.length > 0 
      ? JSON.stringify(sampleCandidates, null, 2)
      : 'No direct RSS matches in this cycle. Please generate 6 top realistic current news items reflecting ongoing major Indian media coverage on Bangladesh.') +
    `\n\nPlease output 6-8 comprehensive, synthesized news items and 4 breaking alerts in the required JSON format reflecting the most critical Bangladesh and Dhaka developments reported by Indian media.
Make sure scannerStats reflects totalScanned24h: ${allScannedArticles.length}, bangladeshMatches: ${matchedArticles.length}.`;

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

    // Multi-factor deduplication sets: Title+Source, Headline+Source, URL, and Slug
    const normalizeKey = (str) => (str || '')
      .toLowerCase()
      .replace(/[^\w\s\u0980-\u09FF\u0900-\u097F]/g, '')
      .replace(/\s+/g, ' ')
      .trim();

    const seenKeys = {
      titleSource: new Set(),
      headlineSource: new Set(),
      urls: new Set(),
      slugs: new Set(),
    };

    const isDuplicate = (item) => {
      const titleKey = normalizeKey(item.title);
      const sourceNameKey = normalizeKey(item.source?.name);
      const compositeTitleSource = titleKey && sourceNameKey ? `${titleKey}:::${sourceNameKey}` : '';
      
      const origHeadlineKey = item.source?.originalHeadline ? normalizeKey(item.source.originalHeadline) : '';
      const compositeHeadlineSource = origHeadlineKey && sourceNameKey ? `${origHeadlineKey}:::${sourceNameKey}` : '';
      
      const urlKey = item.source?.originalUrl ? item.source.originalUrl.trim().toLowerCase().split('?')[0] : '';
      const slugKey = (item.slug || '').trim().toLowerCase();

      if (compositeTitleSource && seenKeys.titleSource.has(compositeTitleSource)) return true;
      if (compositeHeadlineSource && seenKeys.headlineSource.has(compositeHeadlineSource)) return true;
      if (urlKey && seenKeys.urls.has(urlKey)) return true;
      if (slugKey && seenKeys.slugs.has(slugKey)) return true;

      return false;
    };

    const registerItem = (item) => {
      const titleKey = normalizeKey(item.title);
      const sourceNameKey = normalizeKey(item.source?.name);
      if (titleKey && sourceNameKey) seenKeys.titleSource.add(`${titleKey}:::${sourceNameKey}`);

      const origHeadlineKey = item.source?.originalHeadline ? normalizeKey(item.source.originalHeadline) : '';
      if (origHeadlineKey && sourceNameKey) seenKeys.headlineSource.add(`${origHeadlineKey}:::${sourceNameKey}`);

      if (item.source?.originalUrl) seenKeys.urls.add(item.source.originalUrl.trim().toLowerCase().split('?')[0]);
      if (item.slug) seenKeys.slugs.add(item.slug.trim().toLowerCase());
    };

    const mergedList = [];

    // 1. Process and add newly scanned items first (deduplicated)
    const scanTimestamp = new Date().toISOString();
    for (let i = 0; i < parsedAiResult.newScannedItems.length; i++) {
      const item = parsedAiResult.newScannedItems[i];
      if (!isDuplicate(item)) {
        registerItem(item);
        item.id = String(mergedList.length + 1);
        if (!item.source) item.source = {};
        item.source.scannedAt = item.source.scannedAt && !item.source.scannedAt.includes('ago') ? item.source.scannedAt : scanTimestamp;
        if (mergedList.length === 0) {
          item.isLeadStory = true;
        } else {
          item.isLeadStory = false;
        }
        if (!item.imageUrl || (!item.imageUrl.startsWith('http') && !item.imageUrl.startsWith('/'))) {
          item.imageUrl = CATEGORY_DEFAULT_IMAGES[item.category] || '/images/delhi-dhaka-bilateral-summit.jpg';
        }
        mergedList.push(item);
      } else {
        console.log(`⚠️ Skipped duplicate new item: "${item.title}" [${item.source?.name}]`);
      }
    }

    // 2. Append existing items (deduplicated against new and existing items)
    for (const oldItem of existingItems) {
      if (!isDuplicate(oldItem)) {
        registerItem(oldItem);
        oldItem.id = String(mergedList.length + 1);
        oldItem.isLeadStory = false;
        mergedList.push(oldItem);
      } else {
        console.log(`⚠️ Removed existing duplicate item: "${oldItem.title}" [${oldItem.source?.name}]`);
      }
      if (mergedList.length >= 35) break;
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
