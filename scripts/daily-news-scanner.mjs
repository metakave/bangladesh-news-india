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

/**
 * Normalizes any timestamp/date string into a valid ISO-8601 string.
 * Handles dates with trailing 'GMT', invalid formats, etc.
 */
function normalizeIsoDate(dateStr) {
  if (!dateStr) return new Date().toISOString();
  let sanitized = String(dateStr).trim();
  if (sanitized.endsWith('GMT')) {
    sanitized = sanitized.replace(/GMT$/, 'Z');
  }
  const parsed = new Date(sanitized);
  return isNaN(parsed.getTime()) ? new Date().toISOString() : parsed.toISOString();
}

/**
 * Verifies if an image URL is valid and not a synthetic/hallucinated placeholder.
 */
function isValidNewsImage(url) {
  if (!url || typeof url !== 'string') return false;
  const u = url.trim().toLowerCase();
  if (u.startsWith('/images/')) return true;
  if (u.startsWith('https://images.unsplash.com/')) return true;
  if (u.startsWith('https://upload.wikimedia.org/')) return true;
  if (u.includes('.cms') || u.includes('123456') || u.includes('example.com') || u.includes('/wp-content/uploads/2026/')) {
    return false;
  }
  return u.startsWith('http://') || u.startsWith('https://');
}

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

  // 4. Leading Indian TV News Channels (Direct Feeds)
  { name: 'WION Bangladesh & South Asia', bureau: 'Delhi', language: 'English', url: 'https://www.wionews.com/rss/world.xml', webUrl: 'https://www.wionews.com/tags/bangladesh-0' },
  { name: 'Times Now World', bureau: 'Mumbai', language: 'English', url: 'https://www.timesnownews.com/rss/world.xml', webUrl: 'https://www.timesnownews.com/world' },
  { name: 'Republic TV World', bureau: 'Mumbai', language: 'English', url: 'https://www.republicworld.com/rss/world-news.xml', webUrl: 'https://www.republicworld.com/world-news' },
  { name: 'News18 World', bureau: 'Delhi', language: 'English', url: 'https://www.news18.com/commonfeeds/v1/eng/rss/world.xml', webUrl: 'https://www.news18.com/topics/bangladesh/' },
  { name: 'Aaj Tak World', bureau: 'Delhi', language: 'Hindi', url: 'https://www.aajtak.in/rssfeeds/world-news.xml', webUrl: 'https://www.aajtak.in/topic/bangladesh' },
  { name: 'Zee News World', bureau: 'Delhi', language: 'Hindi', url: 'https://zeenews.india.com/rss/world-news.xml', webUrl: 'https://zeenews.india.com/hindi/tags/bangladesh.html' },
  { name: 'TV9 Bangla', bureau: 'Kolkata', language: 'Bengali', url: 'https://tv9bangla.com/feed', webUrl: 'https://tv9bangla.com/topic/bangladesh' },

  // 5. Multi-outlet Aggregated Live Feeds from Top Indian Media
  { 
    name: 'Indian Media - Bangladesh Wire', 
    bureau: 'Delhi', 
    language: 'English', 
    url: 'https://news.google.com/rss/search?q=' + encodeURIComponent('Bangladesh (site:thehindu.com OR site:indianexpress.com OR site:timesofindia.indiatimes.com OR site:hindustantimes.com OR site:ndtv.com OR site:telegraphindia.com OR site:anandabazar.com OR site:livemint.com OR site:news18.com OR site:indiatoday.in OR site:business-standard.com) when:5d') + '&hl=en-IN&gl=IN&ceid=IN:en', 
    webUrl: 'https://news.google.com' 
  },
  { 
    name: 'Indian TV Channels - Bangladesh Tracker Wire', 
    bureau: 'Delhi', 
    language: 'English', 
    url: 'https://news.google.com/rss/search?q=' + encodeURIComponent('Bangladesh (site:wionews.com OR site:timesnownews.com OR site:republicworld.com OR site:indiatoday.in OR site:ndtv.com OR site:news18.com OR site:aajtak.in OR site:zeenews.india.com OR site:tv9hindi.com OR site:indiatvnews.com OR site:bengali.abplive.com OR site:tv9bangla.com) when:5d') + '&hl=en-IN&gl=IN&ceid=IN:en', 
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
    url: 'https://news.google.com/rss/search?q=' + encodeURIComponent('বাংলাদেশ (site:anandabazar.com OR site:sangbadpratidin.in OR site:bartamanpatrika.com OR site:bengali.abplive.com OR site:bengali.news18.com OR site:tv9bangla.com) when:5d') + '&hl=bn&gl=IN&ceid=IN:bn', 
    webUrl: 'https://news.google.com' 
  },
  { 
    name: 'Hindi Media - Bangladesh Tracker', 
    bureau: 'Delhi', 
    language: 'Hindi', 
    url: 'https://news.google.com/rss/search?q=' + encodeURIComponent('बांग्लादेश (site:jagran.com OR site:amarujala.com OR site:navbharattimes.indiatimes.com OR site:aajtak.in OR site:ndtv.in OR site:hindi.news18.com OR site:zeenews.india.com OR site:tv9hindi.com OR site:indiatvnews.com) when:5d') + '&hl=hi&gl=IN&ceid=IN:hi', 
    webUrl: 'https://news.google.com' 
  }
];

const BANGLADESH_KEYWORDS = [
  'bangladesh', 'dhaka', 'chittagong', 'sylhet', 'yunus', 'tarique', 'sheikh hasina', 
  'awami league', 'bnp', 'teesta', 'benapole', 'rohingya', 'bgb',
  'maitree express', 'bandhan express', 'mitali express', 'adani power',
  'বাংলাদেশ', 'ঢাকা', 'চট্টগ্রাম', 'সিলেট', 'ইউনূস', 'তারেক রহমান', 'শেখ হাসিনা', 'আওয়ামী লীগ', 'আওয়ামী লীগ', 'বিএনপি', 'তিস্তা', 'বেনাপোল', 'বিজিবি',
  'बांग्लादेश', 'ढाका', 'हसीना', 'यूनुस', 'तारिक', 'तीस्ता'
];

/**
 * Robust filter to eliminate false positives:
 * Rejects domestic Indian/West Bengal municipal, police, or local crime reports
 * that happen to mention a border town (e.g. Bongaon, Petrapole, Siliguri) or the Bengali language.
 */
function isTrulyBangladeshRelated(title, desc) {
  const text = ((title || '') + ' ' + (desc || '')).toLowerCase();

  // 1. Negative exclusion list: Local Indian domestic affairs that have no Bangladesh connection
  const domesticExclusions = [
    'নাবালিকা বিয়ে', 'child marriage', 'গৃহবধূ খুন', 'বধূ নির্যাতন', 'পারিবারিক কলহ',
    'পৌরসভা নির্বাচন', 'তৃণমূল-বিজেপি সংঘর্ষ', 'টমটম চালক', 'suvendu adhikari warning',
    'padma shri', 'padma bhushan', 'padma vibhushan', 'পদ্মশ্রী', 'পদ্মভূষণ', 'পদ্মবিভূষণ',
    'রেশন দুর্নীতি', 'শিক্ষক নিয়োগ দুর্নীতি'
  ];

  const hasNegative = domesticExclusions.some(neg => text.includes(neg));
  const hasExplicitCountryRef = text.includes('bangladesh') || text.includes('বাংলাদেশ') || text.includes('बांग्लादेश');

  if (hasNegative && !hasExplicitCountryRef) {
    return false;
  }

  // 2. Positive keywords match
  if (BANGLADESH_KEYWORDS.some(kw => text.includes(kw))) {
    return true;
  }

  // 3. Cross-border compound terms
  const crossBorderTerms = [
    'petrapole-benapole', 'পেট্রাপোল-বেনাপোল', 'ভারত-বাংলাদেশ', 'india-bangladesh',
    'বাংলাদেশ সীমান্ত', 'bangladesh border', 'indo-bangla', 'indo-bangladesh',
    'সীমান্ত হাট', 'border haat'
  ];
  return crossBorderTerms.some(term => text.includes(term));
}

const CATEGORY_DEFAULT_IMAGES = {
  diplomacy: '/images/bangladesh-ministry-of-foreign-affairs.jpg',
  trade: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80',
  border: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=1200&auto=format&fit=crop&q=80',
  politics: '/images/bangabhaban-presidential-palace-dhaka.jpg',
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

  // Filter articles specifically related to Bangladesh with false-positive protection
  const matchedArticles = allScannedArticles.filter(art => {
    return isTrulyBangladeshRelated(art.title, art.desc);
  });

  console.log(`🎯 Identified ${matchedArticles.length} articles specifically related to Bangladesh / Dhaka.`);

  console.log('\n🧠 Step 2: Querying DeepSeek API to synthesize intelligence & translate...');
  
  const systemPrompt = `You are the lead intelligence analyst and bilingual editor for "Narrative Compass" (ন্যারেটিভ কম্পাস), an editorial platform monitoring and analyzing how Indian news media (Delhi, Kolkata bureaus in English, Bengali, Hindi) covers Bangladesh, Dhaka, and bilateral relations.

Your goal is to evaluate the provided candidate news headlines/reports, filter and structure the most important authentic stories, and generate high-quality editorial data adhering strictly to the JSON schema.

CRITICAL RELEVANCE & ANTI-FALSE-POSITIVE RULES:
1. Every single selected story MUST be substantively about Bangladesh (its government, political parties like Awami League/BNP/Jamaat, economy, society, cricket, people) or direct India-Bangladesh bilateral relations (border trade, diplomacy, water sharing, shared transit).
2. STRICTLY REJECT and EXCLUDE any story that is purely an internal Indian or West Bengal state/local domestic incident (such as domestic crimes, local police arrests, child marriages, civic affairs, municipal issues, local political disputes between Indian parties like TMC vs BJP) even if it took place in a border district (like Bongaon, Petrapole, Siliguri, North 24 Parganas, Malda) or was reported in Bengali. If it is not about the country of Bangladesh, IT IS A FALSE POSITIVE AND MUST BE DISCARDED.
3. NEVER fabricate or hallucinate a connection to Bangladesh if the source article does not explicitly concern Bangladesh.

EDITORIAL TRANSLATION & NAMING RULES:
1. For any news on Tarique Rahman (whether referred to as Tarique Rahman, Tariq Rahman, Tarique Zia, etc.):
   - When translated into Bengali (in title, banglaTitle, summaryBn, keyPointsBn, sentimentReasonBn, headlineBn, tags):
     Translation MUST ALWAYS BE: "তারেক রহমান" (NEVER "তরিক রহমান" or "তারিক রহমান").
   - If the news is originally published in Bengali (e.g. from Kolkata outlets like Anandabazar, Sangbad Pratidin, ABP Ananda, Bartaman): Keep it as is in original Bengali wording.

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

  /**
   * Resilient self-healing JSON parser for LLM outputs.
   * Handles markdown code blocks, trailing commas, and token-truncated JSON strings/arrays.
   */
  function cleanAndParseJson(rawContent) {
    if (!rawContent || typeof rawContent !== 'string') {
      throw new Error('Empty or invalid response received from DeepSeek');
    }

    let cleaned = rawContent.trim();
    if (cleaned.startsWith('```')) {
      cleaned = cleaned.replace(/^```(?:json)?\s*\n?/i, '').replace(/\n?```\s*$/i, '').trim();
    }

    // 1. Attempt direct parse
    try {
      return JSON.parse(cleaned);
    } catch (err1) {
      console.warn(`⚠️ Direct JSON.parse failed (${err1.message}). Attempting self-healing repair...`);
    }

    // 2. Remove trailing commas before closing braces/brackets
    let repaired = cleaned.replace(/,\s*([\]}])/g, '$1');
    try {
      return JSON.parse(repaired);
    } catch (err2) {
      // Continue to boundary walk
    }

    // 3. Self-healing boundary walk for truncated JSON:
    // Walks backwards from the end, balancing open quotes, braces, and brackets
    for (let i = repaired.length - 1; i > 0; i--) {
      const char = repaired[i];
      if (char === '}' || char === ']' || char === '"' || char === ',') {
        let candidate = repaired.substring(0, i + 1);
        if (char === ',') candidate = candidate.slice(0, -1);

        let inString = false;
        let escaped = false;
        let openBrackets = 0;
        let openBraces = 0;

        for (let j = 0; j < candidate.length; j++) {
          const c = candidate[j];
          if (escaped) {
            escaped = false;
            continue;
          }
          if (c === '\\') {
            escaped = true;
            continue;
          }
          if (c === '"') {
            inString = !inString;
            continue;
          }
          if (!inString) {
            if (c === '{') openBraces++;
            else if (c === '}') openBraces--;
            else if (c === '[') openBrackets++;
            else if (c === ']') openBrackets--;
          }
        }

        if (inString) {
          candidate += '"';
        }

        while (openBrackets > 0) {
          candidate += ']';
          openBrackets--;
        }
        while (openBraces > 0) {
          candidate += '}';
          openBraces--;
        }

        candidate = candidate.replace(/,\s*([\]}])/g, '$1');

        try {
          const parsed = JSON.parse(candidate);
          console.log(`✅ Self-healing parser successfully recovered truncated JSON (original: ${cleaned.length} chars, recovered: ${candidate.length} chars)`);
          return parsed;
        } catch (e) {
          // Keep seeking backwards for next clean boundary
        }
      }
    }

    throw new Error(`Unable to recover JSON from AI response (${cleaned.length} characters).`);
  }

  // Select diverse and relevant top candidate items to send to the AI (optimized to prevent context bloat)
  const sampleCandidates = matchedArticles.slice(0, 16).map(m => ({
    title: m.title,
    description: (m.desc || '').slice(0, 120),
    sourceName: m.sourceName,
    bureau: m.sourceBureau,
    language: m.sourceLanguage,
    url: m.link || m.fallbackWebUrl,
    pubDate: m.pubDate
  }));

  const userPrompt = `Here are the latest candidate articles scanned from Indian media (${matchedArticles.length} total matches found):\n` +
    (sampleCandidates.length > 0 
      ? JSON.stringify(sampleCandidates, null, 2)
      : 'No direct RSS matches in this cycle. Please generate 5 top realistic current news items reflecting ongoing major Indian media coverage on Bangladesh.') +
    `\n\nPlease output 4-6 high-impact synthesized news items and 4 breaking alerts in the required JSON format reflecting the most critical Bangladesh and Dhaka developments reported by Indian media.
Keep summaries concise (2-3 sentences max) and keyPoints to 3 clear bullets each to ensure complete and valid output within token limits.
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
      max_tokens: 8192,
      response_format: { type: 'json_object' }
    })
  });

  if (!deepseekRes.ok) {
    const errorText = await deepseekRes.text();
    throw new Error(`DeepSeek API failed [${deepseekRes.status}]: ${errorText}`);
  }

  const deepseekData = await deepseekRes.json();
  const rawContent = deepseekData.choices?.[0]?.message?.content;
  const parsedAiResult = cleanAndParseJson(rawContent);

  // Programmatic enforcement of translation rules for Tarique Rahman:
  // When translated into Bengali, ensure "তারেক রহমান" is used.
  // If the news was originally in Bengali, keep it as is.
  const normalizeTariqueTranslation = (text) => {
    if (typeof text !== 'string') return text;
    return text.replace(/তরিক\s*রহমান/g, 'তারেক রহমান')
               .replace(/তারিক\s*রহমান/g, 'তারেক রহমান');
  };

  // Validate array structures and enforce translation rules
  if (Array.isArray(parsedAiResult.newScannedItems)) {
    parsedAiResult.newScannedItems = parsedAiResult.newScannedItems.filter(item => 
      item && typeof item === 'object' && item.title && (item.summaryBn || item.summaryEn)
    ).map(item => {
      const isOriginalBengali = (item.source?.language || '').toLowerCase() === 'bengali';
      if (!isOriginalBengali) {
        // Enforce Tarique Rahman translation on translated Bengali fields
        if (item.title) item.title = normalizeTariqueTranslation(item.title);
        if (item.banglaTitle) item.banglaTitle = normalizeTariqueTranslation(item.banglaTitle);
        if (item.summaryBn) item.summaryBn = normalizeTariqueTranslation(item.summaryBn);
        if (item.sentimentReasonBn) item.sentimentReasonBn = normalizeTariqueTranslation(item.sentimentReasonBn);
        if (Array.isArray(item.keyPointsBn)) {
          item.keyPointsBn = item.keyPointsBn.map(normalizeTariqueTranslation);
        }
      }
      return item;
    });
  } else {
    parsedAiResult.newScannedItems = [];
  }

  if (!Array.isArray(parsedAiResult.breakingAlerts)) {
    parsedAiResult.breakingAlerts = [];
  }

  console.log(`✨ DeepSeek successfully analyzed and structured ${parsedAiResult.newScannedItems.length} news stories and ${parsedAiResult.breakingAlerts.length} alerts.`);

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
    // Keep top verified URLs and enforce translation rules
    const safeAlerts = parsedAiResult.breakingAlerts.map(a => {
      let alert = {
        ...a,
        url: a.url && a.url.startsWith('http') ? a.url : 'https://www.thehindu.com/news/international/'
      };
      if (alert.headlineBn) {
        alert.headlineBn = normalizeTariqueTranslation(alert.headlineBn);
      }
      return alert;
    });
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
        item.source.scannedAt = normalizeIsoDate(item.source.scannedAt || scanTimestamp);
        item.publishedAt = normalizeIsoDate(item.publishedAt || scanTimestamp);
        if (mergedList.length === 0) {
          item.isLeadStory = true;
        } else {
          item.isLeadStory = false;
        }
        if (!isValidNewsImage(item.imageUrl)) {
          item.imageUrl = CATEGORY_DEFAULT_IMAGES[item.category] || '/images/bangladesh-ministry-of-foreign-affairs.jpg';
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
        if (!isValidNewsImage(oldItem.imageUrl)) {
          oldItem.imageUrl = CATEGORY_DEFAULT_IMAGES[oldItem.category] || '/images/bangladesh-ministry-of-foreign-affairs.jpg';
        }
        mergedList.push(oldItem);
      } else {
        console.log(`⚠️ Removed existing duplicate item: "${oldItem.title}" [${oldItem.source?.name}]`);
      }
      // Retain up to 500 historical news items in the archive
      if (mergedList.length >= 500) break;
    }

    // 3. Sort all articles strictly chronologically descending by publishedAt (latest first)
    mergedList.sort((a, b) => {
      const timeA = new Date(a.publishedAt).getTime() || 0;
      const timeB = new Date(b.publishedAt).getTime() || 0;
      return timeB - timeA;
    });

    // 4. Re-assign sequential IDs and lead story status (newest item is lead)
    mergedList.forEach((item, index) => {
      item.id = String(index + 1);
      item.isLeadStory = (index === 0);
    });

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
