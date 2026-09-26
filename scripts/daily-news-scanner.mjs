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

const GEMINI_API_KEY = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY || '';
const GEMINI_MODEL = process.env.GEMINI_MODEL || 'gemini-2.5-flash';

const DEEPSEEK_API_KEY = process.env.DEEPSEEK_API_KEY || 'sk-cdc9e55a7d534a8e88338cd28b31342c';
const DEEPSEEK_MODEL = process.env.DEEPSEEK_MODEL || 'deepseek-chat';

// ==============================================================================
// 1. STANDARD RSS FEEDS (Chunk 1: Print, Digital, and Wire Media)
// ==============================================================================
const STANDARD_RSS_FEEDS = [
  // 1. National English & Financial Outlets (Delhi & Mumbai)
  { name: 'The Hindu', bureau: 'Delhi', language: 'English', url: 'https://www.thehindu.com/news/international/feeder/default.rss', webUrl: 'https://www.thehindu.com/news/international/' },
  { name: 'The Hindu Top', bureau: 'Delhi', language: 'English', url: 'https://www.thehindu.com/feeder/default.rss', webUrl: 'https://www.thehindu.com' },
  { name: 'The Indian Express World', bureau: 'Delhi', language: 'English', url: 'https://indianexpress.com/section/world/feed/', webUrl: 'https://indianexpress.com/section/world/' },
  { name: 'The Indian Express India', bureau: 'Delhi', language: 'English', url: 'https://indianexpress.com/section/india/feed/', webUrl: 'https://indianexpress.com/section/india/' },
  { name: 'Times of India Top', bureau: 'Mumbai', language: 'English', url: 'https://timesofindia.indiatimes.com/rssfeedstopstories.cms', webUrl: 'https://timesofindia.indiatimes.com' },
  { name: 'Times of India World', bureau: 'Mumbai', language: 'English', url: 'https://timesofindia.indiatimes.com/rssfeeds/296589292.cms', webUrl: 'https://timesofindia.indiatimes.com/world' },
  { name: 'NDTV World', bureau: 'Delhi', language: 'English', url: 'https://feeds.feedburner.com/ndtvnews-world-news', webUrl: 'https://www.ndtv.com/world-news' },
  { name: 'NDTV Top Stories', bureau: 'Delhi', language: 'English', url: 'https://feeds.feedburner.com/ndtvnews-top-stories', webUrl: 'https://www.ndtv.com' },
  { name: 'Hindustan Times World', bureau: 'Delhi', language: 'English', url: 'https://www.hindustantimes.com/rss/world/rssfeed.xml', webUrl: 'https://www.hindustantimes.com/world-news' },
  { name: 'India Today', bureau: 'Delhi', language: 'English', url: 'https://www.indiatoday.in/rss/home', webUrl: 'https://www.indiatoday.in' },
  { name: 'Business Standard', bureau: 'Mumbai', language: 'English', url: 'https://www.business-standard.com/rss/latest.rss', webUrl: 'https://www.business-standard.com/economy' },
  { name: 'Free Press Journal', bureau: 'Mumbai', language: 'English', url: 'https://www.freepressjournal.in/rss/world.xml', webUrl: 'https://www.freepressjournal.in' },
  { name: 'Economic Times', bureau: 'Mumbai', language: 'English', url: 'https://economictimes.indiatimes.com/rssfeedstopstories.cms', webUrl: 'https://economictimes.indiatimes.com' },
  { name: 'Deccan Herald World', bureau: 'Bangalore', language: 'English', url: 'https://www.deccanherald.com/rss/international.rss', webUrl: 'https://www.deccanherald.com' },

  // 2. Kolkata & Regional Bengali Outlets
  { name: 'Sangbad Pratidin', bureau: 'Kolkata', language: 'Bengali', url: 'https://sangbadpratidin.in/feed/', webUrl: 'https://sangbadpratidin.in' },
  { name: 'ABP Ananda', bureau: 'Kolkata', language: 'Bengali', url: 'https://bengali.abplive.com/home/feed', webUrl: 'https://bengali.abplive.com' },
  { name: 'BBC Bengali', bureau: 'Kolkata', language: 'Bengali', url: 'https://feeds.bbci.co.uk/bengali/rss.xml', webUrl: 'https://www.bbc.com/bengali' },

  // 3. Hindi Outlets
  { name: 'BBC Hindi', bureau: 'Delhi', language: 'Hindi', url: 'https://feeds.bbci.co.uk/hindi/rss.xml', webUrl: 'https://www.bbc.com/hindi' },
  { name: 'Amar Ujala World', bureau: 'Delhi', language: 'Hindi', url: 'https://www.amarujala.com/rss/world-news.xml', webUrl: 'https://www.amarujala.com/world' },
  { name: 'Navbharat Times World', bureau: 'Delhi', language: 'Hindi', url: 'https://navbharattimes.indiatimes.com/world/rssfeedstopstories.cms', webUrl: 'https://navbharattimes.indiatimes.com/world' },
  { name: 'Live Hindustan World', bureau: 'Delhi', language: 'Hindi', url: 'https://feed.livehindustan.com/rss/international', webUrl: 'https://www.livehindustan.com/international' },

  // 4. Leading Indian TV News Channels (Direct Web Feeds)
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
    url: 'https://news.google.com/rss/search?q=' + encodeURIComponent('বাংলাদেশ (site:thewall.in OR site:anandabazar.com OR site:sangbadpratidin.in OR site:bartamanpatrika.com OR site:bengali.abplive.com OR site:bengali.news18.com OR site:tv9bangla.com) when:5d') + '&hl=bn&gl=IN&ceid=IN:bn', 
    webUrl: 'https://news.google.com' 
  },
  { 
    name: 'Tamil Media - Bangladesh Wire', 
    bureau: 'Delhi', 
    language: 'Tamil', 
    url: 'https://news.google.com/rss/search?q=' + encodeURIComponent('ஹசீனா OR வங்காளதேசம் OR Bangladesh when:7d') + '&hl=ta&gl=IN&ceid=IN:ta', 
    webUrl: 'https://news.google.com' 
  },
  { 
    name: 'Telugu Media - Bangladesh Wire', 
    bureau: 'Mumbai', 
    language: 'Telugu', 
    url: 'https://news.google.com/rss/search?q=' + encodeURIComponent('హసీనా OR బంగ్లాదేశ్ OR Bangladesh when:7d') + '&hl=te&gl=IN&ceid=IN:te', 
    webUrl: 'https://news.google.com' 
  },
  { 
    name: 'Marathi Media - Bangladesh Wire', 
    bureau: 'Mumbai', 
    language: 'Marathi', 
    url: 'https://news.google.com/rss/search?q=' + encodeURIComponent('हसीना OR बांग्लादेश OR Bangladesh when:7d') + '&hl=mr&gl=IN&ceid=IN:mr', 
    webUrl: 'https://news.google.com' 
  },
  { 
    name: 'Malayalam Media - Bangladesh Wire', 
    bureau: 'Delhi', 
    language: 'Malayalam', 
    url: 'https://news.google.com/rss/search?q=' + encodeURIComponent('ഹസീന OR ബംഗ്ലാദേശ് OR Bangladesh when:7d') + '&hl=ml&gl=IN&ceid=IN:ml', 
    webUrl: 'https://news.google.com' 
  },
  { 
    name: 'Assamese Media - Bangladesh Wire', 
    bureau: 'Assam', 
    language: 'Assamese', 
    url: 'https://news.google.com/rss/search?q=' + encodeURIComponent('Hasina OR Bangladesh when:7d') + '&hl=as-IN&gl=IN&ceid=IN:as', 
    webUrl: 'https://news.google.com' 
  },
  { 
    name: 'Gujarati Media - Bangladesh Wire', 
    bureau: 'Mumbai', 
    language: 'Gujarati', 
    url: 'https://news.google.com/rss/search?q=' + encodeURIComponent('હસીના OR બાંગ્લાદેશ OR Bangladesh when:7d') + '&hl=gu&gl=IN&ceid=IN:gu', 
    webUrl: 'https://news.google.com' 
  },
  { 
    name: 'Punjabi Media - Bangladesh Wire', 
    bureau: 'Delhi', 
    language: 'Punjabi', 
    url: 'https://news.google.com/rss/search?q=' + encodeURIComponent('ਹਸੀਨਾ OR ਬੰਗਲਾਦੇਸ਼ OR Bangladesh when:7d') + '&hl=pa&gl=IN&ceid=IN:pa', 
    webUrl: 'https://news.google.com' 
  },
  { 
    name: 'Urdu Media - Bangladesh Tracker', 
    bureau: 'Delhi', 
    language: 'Urdu', 
    url: 'https://news.google.com/rss/search?q=' + encodeURIComponent('("بنگلہ دیش" OR "حسینہ" OR Bangladesh) (site:inquilab.com OR site:theinquilab.com OR site:siasat.com OR site:urdu.siasat.com OR site:roznamasahara.com OR site:munsifdaily.com OR site:taasir.com) when:7d') + '&hl=en-IN&gl=IN&ceid=IN:en', 
    webUrl: 'https://news.google.com' 
  },
  { 
    name: 'Urdu Media - Sheikh Hasina & Regional Affairs Wire', 
    bureau: 'Mumbai', 
    language: 'Urdu', 
    url: 'https://news.google.com/rss/search?q=' + encodeURIComponent('("شیخ حسینہ" OR "ڈھاکہ" OR "عوامی لیگ" OR "ہندوستانی سرحد") (site:inquilab.com OR site:siasat.com OR site:roznamasahara.com OR site:munsifdaily.com OR site:taasir.com) when:7d') + '&hl=en-IN&gl=IN&ceid=IN:en', 
    webUrl: 'https://news.google.com' 
  },
  { 
    name: 'Hindi Media - Bangladesh Tracker', 
    bureau: 'Delhi', 
    language: 'Hindi', 
    url: 'https://news.google.com/rss/search?q=' + encodeURIComponent('बांग्लादेश (site:jagran.com OR site:amarujala.com OR site:navbharattimes.indiatimes.com OR site:aajtak.in OR site:ndtv.in OR site:hindi.news18.com OR site:zeenews.india.com OR site:tv9hindi.com OR site:indiatvnews.com OR site:bhaskar.com OR site:livehindustan.com) when:5d') + '&hl=hi&gl=IN&ceid=IN:hi', 
    webUrl: 'https://news.google.com' 
  },
  { 
    name: 'Hindi Media - Sheikh Hasina & Awami League Priority Wire', 
    bureau: 'Delhi', 
    language: 'Hindi', 
    url: 'https://news.google.com/rss/search?q=' + encodeURIComponent('("शेख हसीना" OR "अवामी लीग" OR "हसीना" OR "मोहम्मद यूनुस") (site:jagran.com OR site:amarujala.com OR site:navbharattimes.indiatimes.com OR site:aajtak.in OR site:ndtv.in OR site:hindi.news18.com OR site:zeenews.india.com OR site:bhaskar.com OR site:livehindustan.com OR site:tv9hindi.com) when:5d') + '&hl=hi&gl=IN&ceid=IN:hi', 
    webUrl: 'https://news.google.com' 
  },
  { 
    name: 'Hindi Media - Indo-Bangladesh Border & Trade Tracker', 
    bureau: 'Delhi', 
    language: 'Hindi', 
    url: 'https://news.google.com/rss/search?q=' + encodeURIComponent('("भारत-बांग्लादेश" OR "बांग्लादेश सीमा" OR "पेट्रापोल" OR "हिलि") (site:jagran.com OR site:amarujala.com OR site:navbharattimes.indiatimes.com OR site:aajtak.in OR site:livehindustan.com OR site:hindi.news18.com) when:5d') + '&hl=hi&gl=IN&ceid=IN:hi', 
    webUrl: 'https://news.google.com' 
  },

  // 6. Dedicated High-Priority Political Trackers: Sheikh Hasina & Awami League
  { 
    name: 'Indian Media - Sheikh Hasina & Awami League Priority Wire', 
    bureau: 'Delhi', 
    language: 'English', 
    url: 'https://news.google.com/rss/search?q=' + encodeURIComponent('("Sheikh Hasina" OR "Awami League" OR "Hasina") (site:thehindu.com OR site:indianexpress.com OR site:timesofindia.indiatimes.com OR site:hindustantimes.com OR site:ndtv.com OR site:thewall.in OR site:anandabazar.com OR site:news18.com OR site:indiatoday.in OR site:wionews.com OR site:theprint.in OR site:firstpost.com) when:5d') + '&hl=en-IN&gl=IN&ceid=IN:en', 
    webUrl: 'https://news.google.com' 
  },
  { 
    name: 'English Media - Bangladesh & Sheikh Hasina Intelligence Wire', 
    bureau: 'Delhi', 
    language: 'English', 
    url: 'https://news.google.com/rss/search?q=' + encodeURIComponent('("Sheikh Hasina" OR "Hasina" OR "Dhaka") (site:thehindu.com OR site:indianexpress.com OR site:timesofindia.indiatimes.com OR site:hindustantimes.com OR site:ndtv.com OR site:wionews.com OR site:deccanherald.com OR site:telegraphindia.com) when:5d') + '&hl=en-IN&gl=IN&ceid=IN:en', 
    webUrl: 'https://news.google.com' 
  },
  { 
    name: 'Bengali Media - Sheikh Hasina & Awami League Priority Tracker', 
    bureau: 'Kolkata', 
    language: 'Bengali', 
    url: 'https://news.google.com/rss/search?q=' + encodeURIComponent('("শেখ হাসিনা" OR "আওয়ামী লীগ" OR "আওয়ামী লীগ" OR "হাসিনা") (site:thewall.in OR site:anandabazar.com OR site:sangbadpratidin.in OR site:bartamanpatrika.com OR site:bengali.abplive.com OR site:tv9bangla.com) when:5d') + '&hl=bn&gl=IN&ceid=IN:bn', 
    webUrl: 'https://news.google.com' 
  },
  { 
    name: 'Bengali Media - Opar Bangla (ওপার বাংলা) Priority Tracker', 
    bureau: 'Kolkata', 
    language: 'Bengali', 
    url: 'https://news.google.com/rss/search?q=' + encodeURIComponent('("ওপার বাংলা" OR "ওপার বাংলায়" OR "ওপার বাংলার") (site:thewall.in OR site:anandabazar.com OR site:eisamay.com OR site:sangbadpratidin.in OR site:bartamanpatrika.com OR site:bengali.abplive.com OR site:tv9bangla.com) when:5d') + '&hl=bn&gl=IN&ceid=IN:bn', 
    webUrl: 'https://news.google.com' 
  },

  // 7. North Bengal, Tripura & Assam Regional Wire Tracker
  { name: 'Uttarbanga Sambad (Feed)', bureau: 'Kolkata', language: 'Bengali', url: 'https://uttarbangasambad.in/feed/', webUrl: 'https://uttarbangasambad.in' },
  { name: 'Syandan Patrika (Feed)', bureau: 'Kolkata', language: 'Bengali', url: 'https://syandanpatrika.com/feed/', webUrl: 'https://syandanpatrika.com' },
  { name: 'Dainik Sambad Tripura (Feed)', bureau: 'Kolkata', language: 'Bengali', url: 'https://www.dainiksambadnews.in/feed/', webUrl: 'https://www.dainiksambadnews.in' },
  { name: 'Tripura Times (Feed)', bureau: 'Kolkata', language: 'English', url: 'https://tripuratimes.com/feed/', webUrl: 'https://tripuratimes.com' },
  { name: 'Barak Bulletin (Feed)', bureau: 'Kolkata', language: 'English', url: 'https://barakbulletin.com/feed/', webUrl: 'https://barakbulletin.com' },
  { name: 'Samayik Prasanga (Feed)', bureau: 'Kolkata', language: 'Bengali', url: 'https://samayikprasanga.in/feed/', webUrl: 'https://samayikprasanga.in' },
  { 
    name: 'North East & North Bengal - Bangladesh Wire Tracker', 
    bureau: 'Kolkata', 
    language: 'Bengali', 
    url: 'https://news.google.com/rss/search?q=' + encodeURIComponent('Bangladesh (site:uttarbangasambad.in OR site:dainiksambadnews.in OR site:syandanpatrika.com OR site:tripuratimes.com OR site:dailydesherkatha.com OR site:assamtribune.com OR site:barakbulletin.com OR site:samayikprasanga.in) when:5d') + '&hl=en-IN&gl=IN&ceid=IN:en', 
    webUrl: 'https://news.google.com' 
  }
];

// ==============================================================================
// 2. YOUTUBE VIDEO FEEDS (Chunk 2: News Media YouTube Channels & Video Dispatches)
// ==============================================================================
const YOUTUBE_FEEDS = [
  { 
    name: 'BNT Bangla News (YouTube)', 
    bureau: 'Kolkata', 
    language: 'Bengali', 
    url: 'https://www.youtube.com/feeds/videos.xml?channel_id=UCpN7pRE07V0CsX1kYcVX5cw', 
    webUrl: 'https://www.youtube.com/@bntbanglanews' 
  },
  { 
    name: 'ABP Ananda (YouTube)', 
    bureau: 'Kolkata', 
    language: 'Bengali', 
    url: 'https://www.youtube.com/feeds/videos.xml?channel_id=UCv3rFzn-GHGtqzXiaq3sWNg', 
    webUrl: 'https://www.youtube.com/@abpanandatv' 
  },
  { 
    name: 'Republic Bangla (YouTube)', 
    bureau: 'Kolkata', 
    language: 'Bengali', 
    url: 'https://www.youtube.com/feeds/videos.xml?channel_id=UCajVjEHDoVn_AHsunUZz_EQ', 
    webUrl: 'https://www.youtube.com/@RepublicBangla' 
  },
  { 
    name: 'Zee 24 Ghanta (YouTube)', 
    bureau: 'Kolkata', 
    language: 'Bengali', 
    url: 'https://news.google.com/rss/search?q=' + encodeURIComponent('site:youtube.com "@zee24ghanta" Bangladesh when:5d') + '&hl=bn&gl=IN&ceid=IN:bn', 
    webUrl: 'https://www.youtube.com/@zee24ghanta' 
  },
  { 
    name: 'Siliguri Times (YouTube)', 
    bureau: 'Kolkata', 
    language: 'Bengali', 
    url: 'https://news.google.com/rss/search?q=' + encodeURIComponent('site:youtube.com "@SILIGURITIMES" Bangladesh when:5d') + '&hl=bn&gl=IN&ceid=IN:bn', 
    webUrl: 'https://www.youtube.com/@SILIGURITIMES' 
  },
  { 
    name: 'News Vanguard Tripura (YouTube)', 
    bureau: 'Kolkata', 
    language: 'Bengali', 
    url: 'https://news.google.com/rss/search?q=' + encodeURIComponent('site:youtube.com "@NewsVanguardTripura24X7" Bangladesh when:5d') + '&hl=bn&gl=IN&ceid=IN:bn', 
    webUrl: 'https://www.youtube.com/@NewsVanguardTripura24X7' 
  },
  { 
    name: 'PB24 News Tripura (YouTube)', 
    bureau: 'Kolkata', 
    language: 'Bengali', 
    url: 'https://news.google.com/rss/search?q=' + encodeURIComponent('site:youtube.com "@pb24news" Bangladesh when:5d') + '&hl=bn&gl=IN&ceid=IN:bn', 
    webUrl: 'https://www.youtube.com/@pb24news' 
  },
  { 
    name: 'News18 Assam/Northeast (YouTube)', 
    bureau: 'Kolkata', 
    language: 'English', 
    url: 'https://news.google.com/rss/search?q=' + encodeURIComponent('site:youtube.com "@News18AssamNortheastLive" Bangladesh when:5d') + '&hl=en-IN&gl=IN&ceid=IN:en', 
    webUrl: 'https://www.youtube.com/@News18AssamNortheastLive' 
  },
  { 
    name: 'India Global Review (YouTube)', 
    bureau: 'Delhi', 
    language: 'English', 
    url: 'https://news.google.com/rss/search?q=' + encodeURIComponent('site:youtube.com "@IndiaGlobalReview" Bangladesh when:7d') + '&hl=en-IN&gl=IN&ceid=IN:en', 
    webUrl: 'https://www.youtube.com/@IndiaGlobalReview' 
  },
  { 
    name: 'Aaj Tak (YouTube Hindi)', 
    bureau: 'Delhi', 
    language: 'Hindi', 
    url: 'https://news.google.com/rss/search?q=' + encodeURIComponent('site:youtube.com "@aajtak" ("बांग्लादेश" OR "हसीना" OR "Bangladesh") when:5d') + '&hl=hi&gl=IN&ceid=IN:hi', 
    webUrl: 'https://www.youtube.com/@aajtak' 
  },
  { 
    name: 'Zee News Hindi (YouTube)', 
    bureau: 'Delhi', 
    language: 'Hindi', 
    url: 'https://news.google.com/rss/search?q=' + encodeURIComponent('site:youtube.com "@ZeeNews" ("बांग्लादेश" OR "हसीना" OR "Bangladesh") when:5d') + '&hl=hi&gl=IN&ceid=IN:hi', 
    webUrl: 'https://www.youtube.com/@ZeeNews' 
  },
  { 
    name: 'NDTV India (YouTube Hindi)', 
    bureau: 'Delhi', 
    language: 'Hindi', 
    url: 'https://news.google.com/rss/search?q=' + encodeURIComponent('site:youtube.com "@ndtvindia" ("बांग्लादेश" OR "हसीना" OR "Bangladesh") when:5d') + '&hl=hi&gl=IN&ceid=IN:hi', 
    webUrl: 'https://www.youtube.com/@ndtvindia' 
  },
  { 
    name: 'TV9 Bharatvarsh (YouTube Hindi)', 
    bureau: 'Delhi', 
    language: 'Hindi', 
    url: 'https://news.google.com/rss/search?q=' + encodeURIComponent('site:youtube.com "@tv9bharatvarsh" ("बांग्लादेश" OR "हसीना" OR "Bangladesh") when:5d') + '&hl=hi&gl=IN&ceid=IN:hi', 
    webUrl: 'https://www.youtube.com/@tv9bharatvarsh' 
  },
  { 
    name: 'ThePrint India (YouTube)', 
    bureau: 'Delhi', 
    language: 'English', 
    url: 'https://news.google.com/rss/search?q=' + encodeURIComponent('site:youtube.com ("ThePrint" OR "@ThePrintIndia") ("Bangladesh" OR "Dhaka" OR "Hasina" OR "Tarique") when:7d') + '&hl=en-IN&gl=IN&ceid=IN:en', 
    webUrl: 'https://www.youtube.com/@ThePrintIndia' 
  },
  { 
    name: 'Firstpost Vantage (YouTube)', 
    bureau: 'Delhi', 
    language: 'English', 
    url: 'https://news.google.com/rss/search?q=' + encodeURIComponent('site:youtube.com ("Firstpost" OR "@Firstpost") ("Bangladesh" OR "Dhaka" OR "Hasina" OR "Sheikh Hasina") when:7d') + '&hl=en-IN&gl=IN&ceid=IN:en', 
    webUrl: 'https://www.youtube.com/@Firstpost' 
  },
  { 
    name: 'WION News (YouTube)', 
    bureau: 'Delhi', 
    language: 'English', 
    url: 'https://news.google.com/rss/search?q=' + encodeURIComponent('site:youtube.com ("WION" OR "@WION") ("Bangladesh" OR "Dhaka" OR "Hasina" OR "Sheikh Hasina") when:7d') + '&hl=en-IN&gl=IN&ceid=IN:en', 
    webUrl: 'https://www.youtube.com/@WION' 
  },
  { 
    name: 'India Today (YouTube Dispatches)', 
    bureau: 'Delhi', 
    language: 'English', 
    url: 'https://news.google.com/rss/search?q=' + encodeURIComponent('site:youtube.com ("India Today" OR "@IndiaToday") ("Bangladesh" OR "Dhaka" OR "Hasina" OR "Hilsa") when:7d') + '&hl=en-IN&gl=IN&ceid=IN:en', 
    webUrl: 'https://www.youtube.com/@IndiaToday' 
  },
  { 
    name: 'NDTV English (YouTube Dispatches)', 
    bureau: 'Delhi', 
    language: 'English', 
    url: 'https://news.google.com/rss/search?q=' + encodeURIComponent('site:youtube.com ("NDTV" OR "@NDTV") ("Bangladesh" OR "Dhaka" OR "Hasina") when:7d') + '&hl=en-IN&gl=IN&ceid=IN:en', 
    webUrl: 'https://www.youtube.com/@NDTV' 
  },
  { 
    name: 'TV9 Bangla (YouTube)', 
    bureau: 'Kolkata', 
    language: 'Bengali', 
    url: 'https://news.google.com/rss/search?q=' + encodeURIComponent('site:youtube.com ("TV9 Bangla" OR "@tv9bangla") ("বাংলাদেশ" OR "হাসিনা" OR "তারেক" OR "ঢাকা") when:7d') + '&hl=bn&gl=IN&ceid=IN:bn', 
    webUrl: 'https://www.youtube.com/@tv9bangla' 
  },
  { 
    name: 'R Plus News & Ranakhetra (YouTube)', 
    bureau: 'Kolkata', 
    language: 'Bengali', 
    url: 'https://news.google.com/rss/search?q=' + encodeURIComponent('site:youtube.com ("R Plus" OR "Ranakhetra") ("বাংলাদেশ" OR "হাসিনা" OR "তারেক" OR "Bangladesh") when:7d') + '&hl=bn&gl=IN&ceid=IN:bn', 
    webUrl: 'https://www.youtube.com/@RPlusNews' 
  },
  { 
    name: 'ABP Ananda Video Dispatches (YouTube)', 
    bureau: 'Kolkata', 
    language: 'Bengali', 
    url: 'https://news.google.com/rss/search?q=' + encodeURIComponent('site:youtube.com ("ABP Ananda" OR "@abpanandatv") ("বাংলাদেশ" OR "হাসিনা" OR "ওপার বাংলা") when:7d') + '&hl=bn&gl=IN&ceid=IN:bn', 
    webUrl: 'https://www.youtube.com/@abpanandatv' 
  }
];

// ==============================================================================
// 3. INSTAGRAM PHOTO & CAPTION FEEDS (Option C: News Media Instagram Dispatches)
// ==============================================================================
const INSTAGRAM_FEEDS = [
  { 
    name: 'Indian Media Instagram - Bangladesh Wire', 
    bureau: 'Delhi', 
    language: 'English', 
    url: 'https://news.google.com/rss/search?q=' + encodeURIComponent('site:instagram.com/p/ ("বাংলাদেশ" OR "Bangladesh" OR "Sheikh Hasina" OR "Dhaka") when:7d') + '&hl=en-IN&gl=IN&ceid=IN:en', 
    webUrl: 'https://www.instagram.com' 
  },
  { 
    name: 'Bengali Media Instagram - Opar Bangla & BD Tracker', 
    bureau: 'Kolkata', 
    language: 'Bengali', 
    url: 'https://news.google.com/rss/search?q=' + encodeURIComponent('site:instagram.com/p/ ("বাংলাদেশ" OR "ওপার বাংলা" OR "চিন্ময় কৃষ্ণ" OR "হাসিনা") when:7d') + '&hl=bn&gl=IN&ceid=IN:bn', 
    webUrl: 'https://www.instagram.com' 
  },
  { 
    name: 'Firstpost & India Today Instagram Dispatches', 
    bureau: 'Delhi', 
    language: 'English', 
    url: 'https://news.google.com/rss/search?q=' + encodeURIComponent('site:instagram.com/p/ (Firstpost OR "India Today" OR NewsMo OR NDTV) ("Bangladesh" OR "Dhaka" OR "Hasina") when:7d') + '&hl=en-IN&gl=IN&ceid=IN:en', 
    webUrl: 'https://www.instagram.com' 
  },
  { 
    name: 'The Wall & Kolkata Media Instagram Dispatches', 
    bureau: 'Kolkata', 
    language: 'Bengali', 
    url: 'https://news.google.com/rss/search?q=' + encodeURIComponent('site:instagram.com/p/ ("The Wall" OR "Ei Samay" OR "ABP Ananda") ("বাংলাদেশ" OR "চিন্ময়" OR "কলকাতা") when:7d') + '&hl=bn&gl=IN&ceid=IN:bn', 
    webUrl: 'https://www.instagram.com' 
  }
];

const RSS_FEEDS = [...STANDARD_RSS_FEEDS, ...YOUTUBE_FEEDS, ...INSTAGRAM_FEEDS];

const BANGLADESH_KEYWORDS = [
  'bangladesh', 'dhaka', 'chittagong', 'sylhet', 'yunus', 'tarique', 'sheikh hasina', 'hasina',
  'awami league', 'bnp', 'teesta', 'benapole', 'rohingya', 'bgb', 'opar bangla',
  'maitree express', 'bandhan express', 'mitali express', 'adani power',
  'বাংলাদেশ', 'ঢাকা', 'চট্টগ্রাম', 'সিলেট', 'ইউনূস', 'তারেক রহমান', 'শেখ হাসিনা', 'হাসিনা', 'আওয়ামী লীগ', 'আওয়ামী লীগ', 'বিএনপি', 'তিস্তা', 'বেনাপোল', 'বিজিবি', 'ওপার বাংলা', 'ওপার বাংলায়', 'ওপার বাংলার',
  'बांग्लादेश', 'ढाका', 'हसीना', 'यूनुस', 'तारिक', 'तीस्ता', 'शेख हसीना', 'अवामी लीग'
];

/**
 * Priority keywords that must be prioritized for pickup during news scanning.
 */
const PRIORITY_KEYWORDS = [
  'শেখ হাসিনা', 'হাসিনা', 'sheikh hasina', 'hasina', 'शेख हसीना',
  'আওয়ামী লীগ', 'আওয়ামী লীগ', 'awami league', 'अवामी लीग',
  'ওপার বাংলা', 'ওপার বাংলায়', 'ওপার বাংলার', 'opar bangla'
];

function isPriorityKeyword(title, desc) {
  const text = ((title || '') + ' ' + (desc || '')).toLowerCase();
  return PRIORITY_KEYWORDS.some(kw => text.includes(kw.toLowerCase()));
}

/**
 * Robust filter to eliminate false positives:
 * Rejects domestic Indian/West Bengal municipal, police, or local crime reports
 * that happen to mention a border town (e.g. Bongaon, Petrapole, Siliguri) or the Bengali language.
 */
function isTrulyBangladeshRelated(title, desc) {
  const text = ((title || '') + ' ' + (desc || '')).toLowerCase();

  // Explicit priority check: Sheikh Hasina news is always Bangladesh-related
  if (isPriorityKeyword(title, desc)) {
    return true;
  }

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

  // 1. Standard RSS <item> parsing
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

      const isInstagram = link.includes('instagram.com') || title.toLowerCase().includes('instagram.com');
      if (isInstagram) {
        // Strip trailing " - instagram.com"
        title = title.replace(/\s*-\s*instagram\.com\s*$/i, '').trim();
        // Disambiguate outlet if source was "instagram.com"
        if (!detectedSource || detectedSource.toLowerCase() === 'instagram.com') {
          if (title.includes('Firstpost') || desc.includes('Firstpost')) {
            detectedSource = 'Firstpost (Instagram)';
          } else if (title.includes('The Wall') || desc.includes('The Wall')) {
            detectedSource = 'The Wall (Instagram)';
          } else if (title.includes('Ei Samay') || desc.includes('Ei Samay') || title.includes('এই সময়')) {
            detectedSource = 'Ei Samay (Instagram)';
          } else if (title.includes('India Today') || desc.includes('India Today') || title.includes('NewsMo')) {
            detectedSource = 'India Today (Instagram)';
          } else if (title.includes('ABP Ananda') || desc.includes('ABP Ananda') || title.includes('এবিপি আনন্দ')) {
            detectedSource = 'ABP Ananda (Instagram)';
          } else if (title.includes('NDTV') || desc.includes('NDTV')) {
            detectedSource = 'NDTV (Instagram)';
          } else {
            detectedSource = 'Indian Media (Instagram)';
          }
        }
      }

      items.push({ 
        title, 
        link, 
        desc, 
        pubDate, 
        detectedSource, 
        isVideo: link.includes('youtube.com'),
        isInstagram
      });
    }
  }

  // 2. Atom XML <entry> parsing (Direct YouTube channel feeds)
  const entryMatches = xmlText.match(/<entry[\s\S]*?<\/entry>/gi) || [];
  for (const entryXml of entryMatches) {
    const titleMatch = entryXml.match(/<title[^>]*>(?:<!\[CDATA\[([\s\S]*?)\]\]>|([\s\S]*?))<\/title>/i);
    const linkMatch = entryXml.match(/<link[^>]*href=["']([^"']+)["']/i) || entryXml.match(/<link>(?:<!\[CDATA\[([\s\S]*?)\]\]>|([\s\S]*?))<\/link>/i);
    const descMatch = entryXml.match(/<media:description>(?:<!\[CDATA\[([\s\S]*?)\]\]>|([\s\S]*?))<\/media:description>/i) ||
                      entryXml.match(/<summary>(?:<!\[CDATA\[([\s\S]*?)\]\]>|([\s\S]*?))<\/summary>/i);
    const pubDateMatch = entryXml.match(/<published>([^<]+)<\/published>/i) ||
                         entryXml.match(/<updated>([^<]+)<\/updated>/i);
    const authorMatch = entryXml.match(/<author>[\s\S]*?<name>(?:<!\[CDATA\[([\s\S]*?)\]\]>|([\s\S]*?))<\/name>/i);
    const thumbMatch = entryXml.match(/<media:thumbnail[^>]*url=["']([^"']+)["']/i);

    let title = decodeHtmlEntities((titleMatch ? (titleMatch[1] || titleMatch[2] || '') : '').trim());
    let link = (linkMatch ? (linkMatch[1] || linkMatch[2] || '') : '').trim();
    let desc = decodeHtmlEntities((descMatch ? (descMatch[1] || descMatch[2] || '') : '').trim().replace(/<[^>]+>/g, ''));
    let pubDate = (pubDateMatch ? (pubDateMatch[1] || pubDateMatch[2] || '') : '').trim();
    let detectedSource = decodeHtmlEntities((authorMatch ? (authorMatch[1] || authorMatch[2] || '') : '').trim());
    let thumbnail = (thumbMatch ? thumbMatch[1] : '').trim();

    if (title) {
      items.push({ title, link, desc, pubDate, detectedSource, thumbnail, isVideo: true });
    }
  }

  return items;
}

// ==============================================================================
// SAFEGUARD & ANTI-BAN CLIENT INFRASTRUCTURE
// ==============================================================================

/**
 * Curated pool of realistic, modern desktop browser profiles.
 * Rotating user agents and corresponding Sec-Ch-Ua client hints prevents
 * bot fingerprinting and automated scraper detection.
 */
const BROWSER_PROFILES = [
  {
    ua: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
    platform: '"macOS"',
    secChUa: '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"'
  },
  {
    ua: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
    platform: '"Windows"',
    secChUa: '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"'
  },
  {
    ua: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:135.0) Gecko/20100101 Firefox/135.0',
    platform: '"macOS"',
    secChUa: null
  },
  {
    ua: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:135.0) Gecko/20100101 Firefox/135.0',
    platform: '"Windows"',
    secChUa: null
  },
  {
    ua: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
    platform: '"Windows"',
    secChUa: '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"'
  },
  {
    ua: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.3 Safari/605.1.15',
    platform: '"macOS"',
    secChUa: null
  }
];

function getRandomBrowserHeaders() {
  const profile = BROWSER_PROFILES[Math.floor(Math.random() * BROWSER_PROFILES.length)];
  const headers = {
    'User-Agent': profile.ua,
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'Accept-Language': 'en-US,en;q=0.9,bn;q=0.8,hi;q=0.7',
    'Accept-Encoding': 'gzip, deflate, br',
    'DNT': '1',
    'Upgrade-Insecure-Requests': '1',
    'Sec-Fetch-Dest': 'document',
    'Sec-Fetch-Mode': 'navigate',
    'Sec-Fetch-Site': 'none',
    'Sec-Fetch-User': '?1',
    'Cache-Control': 'max-age=0'
  };
  if (profile.secChUa) {
    headers['sec-ch-ua'] = profile.secChUa;
    headers['sec-ch-ua-mobile'] = '?0';
    headers['sec-ch-ua-platform'] = profile.platform;
  }
  return headers;
}

/**
 * Circuit Breaker registry:
 * If a domain returns 429 (Too Many Requests) or 403 (Forbidden), we halt further
 * requests to that domain for the remainder of the session to prevent escalation to an IP ban.
 */
const TRIPPED_DOMAINS = new Set();

/**
 * Domain-specific cooldown trackers to ensure requests to the same host
 * are never sent simultaneously and respect polite spacing.
 */
const DOMAIN_LAST_REQUEST_TIME = new Map();
const MIN_SAME_DOMAIN_INTERVAL_MS = 1800; // minimum 1.8s between hits to the same domain

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchFeedWithSafeguards(feed) {
  let domain = 'unknown';
  try {
    const urlObj = new URL(feed.url);
    domain = urlObj.hostname;
  } catch (e) {
    domain = 'unknown';
  }

  // 1. Circuit breaker check: If this domain already gave 429/403, do not poke it again!
  if (TRIPPED_DOMAINS.has(domain)) {
    console.warn(`🛡️ [Anti-Ban Circuit Breaker] Skipping feed "${feed.name}" on domain "${domain}" to protect IP reputation.`);
    return [];
  }

  // 2. Domain-level pacing / rate limit: enforce minimum delay between requests to same domain
  const now = Date.now();
  const lastTime = DOMAIN_LAST_REQUEST_TIME.get(domain) || 0;
  const elapsed = now - lastTime;
  if (elapsed < MIN_SAME_DOMAIN_INTERVAL_MS) {
    const waitTime = MIN_SAME_DOMAIN_INTERVAL_MS - elapsed + Math.floor(Math.random() * 500);
    await sleep(waitTime);
  }
  DOMAIN_LAST_REQUEST_TIME.set(domain, Date.now());

  // 3. Retry loop with exponential backoff & jitter (max 2 attempts)
  const maxAttempts = 2;
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 12000);

      const headers = getRandomBrowserHeaders();
      const res = await fetch(feed.url, {
        signal: controller.signal,
        headers
      });
      clearTimeout(timeoutId);

      // Handle rate limits / blocks gracefully
      if (res.status === 429) {
        console.warn(`⚠️ [Rate Limited 429] "${domain}" returned HTTP 429. Tripping circuit breaker to prevent IP ban.`);
        TRIPPED_DOMAINS.add(domain);
        return [];
      }

      if (res.status === 403) {
        console.warn(`⚠️ [Forbidden 403] "${domain}" returned HTTP 403. Tripping circuit breaker for this domain.`);
        TRIPPED_DOMAINS.add(domain);
        return [];
      }

      if (!res.ok) {
        if (attempt < maxAttempts && res.status >= 500) {
          // Temporary server error, wait with jitter before retrying
          await sleep(1000 * attempt + Math.floor(Math.random() * 800));
          continue;
        }
        return [];
      }

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
      if (attempt < maxAttempts) {
        await sleep(1200 + Math.floor(Math.random() * 800));
      } else {
        return [];
      }
    }
  }

  return [];
}

/**
 * Scans feeds using a controlled concurrency queue (max 3 concurrent requests)
 * with inter-request jitter to avoid bot traffic spikes and protect the IP.
 */
async function scanFeedsWithSafeguards(feeds, maxConcurrency = 3) {
  const results = [];
  const queue = [...feeds];

  async function worker() {
    while (queue.length > 0) {
      const feed = queue.shift();
      if (!feed) break;
      // Add random jitter delay between 250ms - 650ms to break regular rhythmic intervals
      await sleep(250 + Math.floor(Math.random() * 400));
      const items = await fetchFeedWithSafeguards(feed);
      results.push(...items);
    }
  }

  const workers = Array.from({ length: Math.min(maxConcurrency, feeds.length) }, () => worker());
  await Promise.all(workers);
  return results;
}

async function runDailyNewsScanner() {
  // Detect operational scan mode
  // Options: 'rss' (Chunk 1) | 'youtube' (Chunk 2) | 'instagram' (Option C) | 'all' (Full scan)
  const modeArg = process.argv.find(arg => arg.startsWith('--mode='));
  let scanMode = 'all';
  if (modeArg) {
    scanMode = modeArg.split('=')[1].trim().toLowerCase();
  } else if (process.argv.includes('--rss') || process.argv.includes('--rss-only')) {
    scanMode = 'rss';
  } else if (process.argv.includes('--youtube') || process.argv.includes('--youtube-only')) {
    scanMode = 'youtube';
  } else if (process.argv.includes('--instagram') || process.argv.includes('--instagram-only')) {
    scanMode = 'instagram';
  } else if (process.env.SCAN_MODE) {
    scanMode = process.env.SCAN_MODE.trim().toLowerCase();
  }

  let activeFeeds = [];
  let chunkDescription = '';
  if (scanMode === 'rss') {
    activeFeeds = STANDARD_RSS_FEEDS;
    chunkDescription = 'Chunk 1: Standard RSS Feeds (Print, Digital & Wire Media)';
  } else if (scanMode === 'youtube') {
    activeFeeds = YOUTUBE_FEEDS;
    chunkDescription = 'Chunk 2: News Media YouTube Channels & Video Dispatches';
  } else if (scanMode === 'instagram') {
    activeFeeds = INSTAGRAM_FEEDS;
    chunkDescription = 'Option C: News Media Instagram Photo Dispatches & Post Captions';
  } else {
    activeFeeds = RSS_FEEDS;
    chunkDescription = 'Full Ingestion: All Feeds (Standard RSS + YouTube + Instagram)';
  }

  // Detect AI provider (gemini or deepseek)
  const providerArg = process.argv.find(arg => arg.startsWith('--provider='));
  let aiProvider = process.env.AI_PROVIDER || '';
  if (providerArg) {
    aiProvider = providerArg.split('=')[1].trim().toLowerCase();
  }
  if (!aiProvider) {
    if (GEMINI_API_KEY) {
      aiProvider = 'gemini';
    } else {
      aiProvider = 'deepseek';
    }
  }

  const activeModelName = aiProvider === 'gemini' ? GEMINI_MODEL : DEEPSEEK_MODEL;

  console.log('====================================================');
  console.log('🚀 NARRATIVE COMPASS - DAILY NEWS SCANNER');
  console.log('⏰ Time (Local):', new Date().toLocaleString());
  console.log(`🤖 AI Engine: ${aiProvider.toUpperCase()} API (${activeModelName})`);
  console.log(`📌 Operational Mode: [${scanMode.toUpperCase()}] -> ${chunkDescription}`);
  console.log('====================================================\n');

  console.log(`📡 Step 1: Scanning ${activeFeeds.length} media feeds with IP anti-ban safeguards...`);
  console.log(`🛡️ Anti-Ban Protections: max 3 concurrent requests | randomized timing jitter | same-domain cooldown | automatic circuit breaker`);
  const allScannedArticles = await scanFeedsWithSafeguards(activeFeeds, 3);
  console.log(`✅ Scanned ${allScannedArticles.length} total news items across ${activeFeeds.length} media outlets safely without rate limits.`);

  // Filter articles specifically related to Bangladesh with false-positive protection
  const matchedArticles = allScannedArticles.filter(art => {
    return isTrulyBangladeshRelated(art.title, art.desc);
  });

  // Sort candidate articles so that Sheikh Hasina priority items are at the very top,
  // followed by newest publication date.
  matchedArticles.sort((a, b) => {
    const aPriority = isPriorityKeyword(a.title, a.desc) ? 1 : 0;
    const bPriority = isPriorityKeyword(b.title, b.desc) ? 1 : 0;
    if (aPriority !== bPriority) {
      return bPriority - aPriority; // Priority items first!
    }
    const timeA = new Date(a.pubDate || 0).getTime() || 0;
    const timeB = new Date(b.pubDate || 0).getTime() || 0;
    return timeB - timeA;
  });

  const priorityMatches = matchedArticles.filter(art => isPriorityKeyword(art.title, art.desc));
  console.log(`🎯 Identified ${matchedArticles.length} articles specifically related to Bangladesh / Dhaka (${priorityMatches.length} priority "শেখ হাসিনা / আওয়ামী লীগ / ওপার বাংলা" items).`);

  if (process.argv.includes('--dump-candidates')) {
    const scratchDir = path.join(rootDir, 'scratch');
    if (!fs.existsSync(scratchDir)) fs.mkdirSync(scratchDir, { recursive: true });
    const candidateDumpPath = path.join(scratchDir, 'candidates.json');
    const hindiCandidates = matchedArticles.filter(art => art.sourceLanguage === 'Hindi' || /[\u0900-\u097F]/.test(art.title));
    const englishHasinaCandidates = matchedArticles.filter(art => {
      const text = ((art.title || '') + ' ' + (art.desc || '')).toLowerCase();
      const isEnglish = art.sourceLanguage === 'English' || (!/[\u0980-\u09FF]/.test(art.title) && !/[\u0900-\u097F]/.test(art.title));
      return isEnglish && (text.includes('hasina') || text.includes('sheikh hasina') || text.includes('awami') || text.includes('bangladesh') || text.includes('dhaka'));
    });
    fs.writeFileSync(candidateDumpPath, JSON.stringify({
      totalScanned: allScannedArticles.length,
      matchedCount: matchedArticles.length,
      priorityCount: priorityMatches.length,
      hindiCount: hindiCandidates.length,
      englishHasinaCount: englishHasinaCandidates.length,
      englishHasinaCandidates: englishHasinaCandidates,
      candidates: matchedArticles.slice(0, 350)
    }, null, 2));
    console.log(`✅ Candidate articles dumped successfully (${englishHasinaCandidates.length} English Hasina/BD candidates) to ${candidateDumpPath}`);
    return;
  }

  console.log('\n🧠 Step 2: Querying AI API to synthesize intelligence & translate...');
  
  const systemPrompt = `You are the lead intelligence analyst and bilingual editor for "Narrative Compass" (ন্যারেটিভ কম্পাস), an editorial platform monitoring and analyzing how Indian news media (Delhi, Kolkata bureaus in English, Bengali, Hindi) covers Bangladesh, Dhaka, and bilateral relations.

Your goal is to evaluate the provided candidate news headlines/reports, filter and structure the most important authentic stories, and generate high-quality editorial data adhering strictly to the JSON schema.

CRITICAL RELEVANCE & ANTI-FALSE-POSITIVE RULES:
1. Every single selected story MUST be substantively about Bangladesh (its government, political parties like Awami League/BNP/Jamaat, economy, society, cricket, people) or direct India-Bangladesh bilateral relations (border trade, diplomacy, water sharing, shared transit).
2. TOP EDITORIAL PRIORITY KEYWORD DIRECTIVES:
   - "শেখ হাসিনা" / "Sheikh Hasina", "আওয়ামী লীগ" / "Awami League", and "ওপার বাংলা" / "Opar Bangla": These are designated as TOP EDITORIAL PRIORITY KEYWORDS.
   - Any candidate reports, statements, interviews, exiled leadership coordination in Kolkata/Delhi, party reorganization, legal proceedings at ICT, and bilateral developments concerning Sheikh Hasina, Awami League, or using "ওপার বাংলা" (referring to Bangladesh in Indian Bengali press) MUST BE GIVEN HIGHEST PRIORITY for selection in newScannedItems and breakingAlerts.
   - If candidate items mention Sheikh Hasina, Awami League, or ওপার বাংলা, ensure they are prioritized in your editorial curation.
3. STRICTLY REJECT and EXCLUDE any story that is purely an internal Indian or West Bengal state/local domestic incident (such as domestic crimes, local police arrests, child marriages, civic affairs, municipal issues, local political disputes between Indian parties like TMC vs BJP) even if it took place in a border district (like Bongaon, Petrapole, Siliguri, North 24 Parganas, Malda) or was reported in Bengali. If it is not about the country of Bangladesh, IT IS A FALSE POSITIVE AND MUST BE DISCARDED.
4. NEVER fabricate or hallucinate a connection to Bangladesh if the source article does not explicitly concern Bangladesh.
5. YOUTUBE VIDEO COVERAGE: When candidate items originate from verified YouTube channels of Indian news media (e.g. BNT Bangla, ABP Ananda, Republic Bangla, TV9 Bangla), preserve the authentic YouTube video link and video context, and tag them with "YouTube Video" and "ভিডিও রিপোর্ট".
6. INSTAGRAM VISUAL DISPATCHES: When candidate items originate from Instagram accounts or Google Search Wire for Instagram (e.g. Firstpost, The Wall, India Today, Ei Samay), preserve the authentic Instagram post link (instagram.com/p/...), strip raw trailing '- instagram.com' from title, set readTimeBn: "১ মিনিট পোস্ট", readTimeEn: "1 min read", and ensure tags include "Instagram Post" and "Visual Journalism".

EDITORIAL TRANSLATION & NAMING RULES:
1. For any news on Tarique Rahman (whether referred to as Tarique Rahman, Tariq Rahman, Tarique Zia, etc.):
   - When translated into Bengali (in title, banglaTitle, summaryBn, keyPointsBn, sentimentReasonBn, headlineBn, tags):
     Translation MUST ALWAYS BE: "তারেক রহমান" (NEVER "তরিক রহমান" or "তারিক রহমান").
   - If the news is originally published in Bengali (e.g. from Kolkata outlets like Anandabazar, Sangbad Pratidin, ABP Ananda, Bartaman): Keep it as is in original Bengali wording.

Categories must be one of: "diplomacy" | "trade" | "border" | "politics" | "economy" | "sports" | "culture"
CategoryLabelBn:
- diplomacy -> 'কূটনীতি ও দ্বিপাক্ষিক সম্পর্ক'
- trade -> 'সীমান্ত বাণিজ্য ও বন্দর'
- border -> 'সীমান্ত নিরাপত্তা'
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

  // Select diverse and relevant top candidate items to send to the AI (up to 24 items, with all priority items first)
  const sampleCandidates = matchedArticles.slice(0, 24).map(m => ({
    title: m.title,
    description: (m.desc || '').slice(0, 140),
    sourceName: m.sourceName,
    bureau: m.sourceBureau,
    language: m.sourceLanguage,
    url: m.link || m.fallbackWebUrl,
    pubDate: m.pubDate,
    thumbnail: m.thumbnail || '',
    isVideo: Boolean(m.isVideo),
    priorityPickup: isPriorityKeyword(m.title, m.desc)
  }));

  let userPrompt = '';
  if (scanMode === 'youtube') {
    userPrompt = `Here are the latest candidate video dispatches scanned from Indian news media YouTube channels (${matchedArticles.length} total matches found, including ${priorityMatches.length} high-priority Sheikh Hasina / Awami League / ওপার বাংলা video items):\n` +
      (sampleCandidates.length > 0 
        ? JSON.stringify(sampleCandidates, null, 2)
        : 'No direct YouTube video matches in this cycle. Please generate 2-3 top realistic current video report items reflecting ongoing Indian broadcast news coverage on Bangladesh.') +
      `\n\nPlease output 2-4 high-impact synthesized video dispatch news items and 1-2 breaking video alerts in the required JSON format reflecting verified Indian news media YouTube video reports on Bangladesh.
CRITICAL EDITORIAL PRIORITY: Items flagged with "priorityPickup": true or concerning "শেখ হাসিনা" / "আওয়ামী লীগ" / "ওপার বাংলা" must be prioritized in your editorial selection and featured prominently.
YOUTUBE VIDEO REQUIREMENTS:
1. Ensure source name includes "(YouTube)" (e.g. "BNT Bangla News (YouTube)", "ABP Ananda (YouTube)", "Republic Bangla (YouTube)").
2. Preserve authentic YouTube video URLs in originalUrl.
3. Tags must include "YouTube Video" and "ভিডিও রিপোর্ট".
4. Set readTimeBn: "২ মিনিট ভিডিও", readTimeEn: "2 min video".
5. Keep summaries concise (2-3 sentences max) capturing broadcast commentary, video packages, and on-ground reports.
Make sure scannerStats reflects totalScanned24h: ${allScannedArticles.length}, bangladeshMatches: ${matchedArticles.length}.`;
  } else if (scanMode === 'instagram') {
    userPrompt = `Here are the candidate visual dispatches scanned from Indian news media Instagram posts (${matchedArticles.length} total matches found, including ${priorityMatches.length} high-priority items):\n` +
      (sampleCandidates.length > 0 
        ? JSON.stringify(sampleCandidates, null, 2)
        : 'No direct Instagram matches in this cycle. Please generate 2-3 top realistic current visual report items reflecting verified Indian news media Instagram coverage on Bangladesh.') +
      `\n\nPlease output 2-3 high-impact synthesized visual dispatch items and 1 breaking alert in the required JSON format reflecting verified Indian news media Instagram post captions on Bangladesh.
CRITICAL EDITORIAL PRIORITY: Items flagged with "priorityPickup": true or concerning "শেখ হাসিনা" / "আওয়ামী লীগ" / "ওপার বাংলা" must be prioritized in your editorial selection and featured prominently.
INSTAGRAM REQUIREMENTS:
1. Ensure source name includes "(Instagram)" (e.g. "Firstpost (Instagram)", "The Wall (Instagram)", "India Today (Instagram)", "Ei Samay (Instagram)").
2. For originalUrl, provide the authentic verified Instagram profile URL of the outlet (e.g. https://www.instagram.com/firstpost/, https://www.instagram.com/thewall_bangla/, https://www.instagram.com/indiatoday/, https://www.instagram.com/eisamay.digital/, https://www.instagram.com/abpanandatv/) or verified live post link.
3. Tags must include "Instagram Post" and "Visual Journalism", plus relevant hashtags (e.g. "#FirstpostNews", "#TheWall", etc.).
4. Set readTimeBn: "১ মিনিট পোস্ট", readTimeEn: "1 min read".
5. Keep summaries concise (2-3 sentences max) capturing the photo report, post caption, and visual context.
Make sure scannerStats reflects totalScanned24h: ${allScannedArticles.length}, bangladeshMatches: ${matchedArticles.length}.`;
  } else if (scanMode === 'rss') {
    userPrompt = `Here are the latest candidate articles scanned from Indian print and digital media (${matchedArticles.length} total matches found, including ${priorityMatches.length} high-priority Sheikh Hasina / Awami League / ওপার বাংলা items):\n` +
      (sampleCandidates.length > 0 
        ? JSON.stringify(sampleCandidates, null, 2)
        : 'No direct RSS matches in this cycle. Please generate 5 top realistic current news items reflecting ongoing major Indian media coverage on Bangladesh.') +
      `\n\nPlease output 4-6 high-impact synthesized news items and 4 breaking alerts in the required JSON format reflecting the most critical Bangladesh and Dhaka developments reported by Indian print, digital, and wire media.
CRITICAL EDITORIAL PRIORITY: Items flagged with "priorityPickup": true or concerning "শেখ হাসিনা" / "আওয়ামী লীগ" / "ওপার বাংলা" / "Sheikh Hasina" / "Awami League" / "Opar Bangla" must be prioritized in your editorial selection and featured prominently.
Focus on in-depth journalism, political developments, governance, cross-border commerce, and diplomatic affairs.
Keep summaries concise (2-3 sentences max) and keyPoints to 3 clear bullets each.
Make sure scannerStats reflects totalScanned24h: ${allScannedArticles.length}, bangladeshMatches: ${matchedArticles.length}.`;
  } else {
    userPrompt = `Here are the latest candidate articles scanned from Indian media (${matchedArticles.length} total matches found, including ${priorityMatches.length} high-priority Sheikh Hasina / Awami League / ওপার বাংলা items):\n` +
      (sampleCandidates.length > 0 
        ? JSON.stringify(sampleCandidates, null, 2)
        : 'No direct RSS matches in this cycle. Please generate 5 top realistic current news items reflecting ongoing major Indian media coverage on Bangladesh.') +
      `\n\nPlease output 4-6 high-impact synthesized news items and 4 breaking alerts in the required JSON format reflecting the most critical Bangladesh and Dhaka developments reported by Indian media.
CRITICAL EDITORIAL PRIORITY: Items flagged with "priorityPickup": true or concerning "শেখ হাসিনা" / "আওয়ামী লীগ" / "ওপার বাংলা" / "Sheikh Hasina" / "Awami League" / "Opar Bangla" must be prioritized in your editorial selection and featured prominently.
Keep summaries concise (2-3 sentences max) and keyPoints to 3 clear bullets each to ensure complete and valid output within token limits.
Make sure scannerStats reflects totalScanned24h: ${allScannedArticles.length}, bangladeshMatches: ${matchedArticles.length}.`;
  }

  let rawContent = '';
  if (aiProvider === 'gemini') {
    if (!GEMINI_API_KEY) {
      throw new Error('Gemini API provider selected, but GEMINI_API_KEY (or GOOGLE_API_KEY) is not set in environment or .env.local');
    }
    console.log(`🤖 Requesting intelligence synthesis via Gemini API (${GEMINI_MODEL})...`);
    
    // Attempt Gemini OpenAI-compatible endpoint
    const geminiRes = await fetch('https://generativelanguage.googleapis.com/v1beta/openai/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${GEMINI_API_KEY}`
      },
      body: JSON.stringify({
        model: GEMINI_MODEL,
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userPrompt }
        ],
        temperature: 0.2,
        response_format: { type: 'json_object' }
      })
    });

    if (!geminiRes.ok) {
      // Fallback to Native Gemini generateContent API
      const nativeRes = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${GEMINI_API_KEY}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          system_instruction: { parts: [{ text: systemPrompt }] },
          contents: [{ role: 'user', parts: [{ text: userPrompt }] }],
          generationConfig: {
            responseMimeType: 'application/json',
            temperature: 0.2
          }
        })
      });

      if (!nativeRes.ok) {
        const errorText = await nativeRes.text();
        throw new Error(`Gemini API failed [${nativeRes.status}]: ${errorText}`);
      }

      const nativeData = await nativeRes.json();
      rawContent = nativeData.candidates?.[0]?.content?.parts?.[0]?.text;
    } else {
      const geminiData = await geminiRes.json();
      rawContent = geminiData.choices?.[0]?.message?.content;
    }
  } else {
    // DeepSeek API
    console.log(`🤖 Requesting intelligence synthesis via DeepSeek API (${DEEPSEEK_MODEL})...`);
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
    rawContent = deepseekData.choices?.[0]?.message?.content;
  }

  const parsedAiResult = cleanAndParseJson(rawContent);

  // Programmatic enforcement of translation rules for Tarique Rahman:
  // When translated into Bengali, ensure "তারেক রহমান" is used.
  // If the news was originally in Bengali, keep it as is.
  const normalizeTariqueTranslation = (text) => {
    if (typeof text !== 'string') return text;
    return text.replace(/তরিক\s*রহমান/g, 'তারেক রহমান')
               .replace(/তারিক\s*রহমান/g, 'তারেক রহমান');
  };

  const normalizeWionTranslation = (text) => {
    if (typeof text !== 'string') return text;
    return text.replace(/ওয়িয়ন/g, 'উইওন')
               .replace(/ওয়িয়ন/g, 'উইওন')
               .replace(/ওয়াইঅন/g, 'উইওন')
               .replace(/ওয়াইঅন/g, 'উইওন')
               .replace(/উইঅন/g, 'উইওন');
  };

  const applyBengaliNormalization = (text) => {
    return normalizeWionTranslation(normalizeTariqueTranslation(text));
  };

  // Validate array structures and enforce translation rules
  if (Array.isArray(parsedAiResult.newScannedItems)) {
    parsedAiResult.newScannedItems = parsedAiResult.newScannedItems.filter(item => 
      item && typeof item === 'object' && item.title && (item.summaryBn || item.summaryEn)
    ).map(item => {
      const isOriginalBengali = (item.source?.language || '').toLowerCase() === 'bengali';
      if (!isOriginalBengali) {
        // Enforce translation rules on translated Bengali fields
        if (item.title) item.title = applyBengaliNormalization(item.title);
        if (item.banglaTitle) item.banglaTitle = applyBengaliNormalization(item.banglaTitle);
        if (item.summaryBn) item.summaryBn = applyBengaliNormalization(item.summaryBn);
        if (item.sentimentReasonBn) item.sentimentReasonBn = applyBengaliNormalization(item.sentimentReasonBn);
        if (Array.isArray(item.keyPointsBn)) {
          item.keyPointsBn = item.keyPointsBn.map(applyBengaliNormalization);
        }
      }

      // Ensure Sheikh Hasina & Awami League priority items receive high visibility and proper tags
      const combinedText = ((item.title || '') + ' ' + (item.summaryBn || '') + ' ' + (item.summaryEn || '')).toLowerCase();
      if (isPriorityKeyword(item.title, combinedText)) {
        item.isTrending = true;
        if (!Array.isArray(item.tags)) item.tags = [];
        if (combinedText.includes('hasina') || combinedText.includes('হাসিনা')) {
          if (!item.tags.some(t => t.toLowerCase().includes('hasina'))) item.tags.push('Sheikh Hasina');
          if (!item.tags.some(t => t.includes('শেখ হাসিনা'))) item.tags.push('শেখ হাসিনা');
        }
        if (combinedText.includes('awami') || combinedText.includes('আওয়ামী') || combinedText.includes('আওয়ামী')) {
          if (!item.tags.some(t => t.toLowerCase().includes('awami'))) item.tags.push('Awami League');
          if (!item.tags.some(t => t.includes('আওয়ামী লীগ'))) item.tags.push('আওয়ামী লীগ');
        }
        if (combinedText.includes('ওপার বাংলা') || combinedText.includes('opar bangla')) {
          if (!item.tags.some(t => t.toLowerCase().includes('opar bangla'))) item.tags.push('Opar Bangla');
          if (!item.tags.some(t => t.includes('ওপার বাংলা'))) item.tags.push('ওপার বাংলা');
        }
      }

      // Detect YouTube video reports and apply appropriate tags and formats
      if (item.source?.originalUrl?.includes('youtube.com') || item.source?.name?.includes('YouTube') || combinedText.includes('youtube')) {
        if (!Array.isArray(item.tags)) item.tags = [];
        if (!item.tags.some(t => t.toLowerCase().includes('youtube'))) item.tags.push('YouTube Video');
        if (!item.tags.some(t => t.includes('ভিডিও'))) item.tags.push('ভিডিও রিপোর্ট');
        if (!item.readTimeBn) item.readTimeBn = 'ভিডিও রিপোর্ট';
        if (!item.readTimeEn) item.readTimeEn = 'Video Dispatch';
      }

      // Detect Instagram dispatches and normalize working profile URLs
      if (item.source?.name?.includes('Instagram') || item.tags?.some(t => t.toLowerCase().includes('instagram'))) {
        if (!Array.isArray(item.tags)) item.tags = [];
        if (!item.tags.some(t => t === 'Instagram Post')) item.tags.push('Instagram Post');
        if (!item.tags.some(t => t === 'Visual Journalism')) item.tags.push('Visual Journalism');
        if (!item.readTimeBn) item.readTimeBn = '১ মিনিট পোস্ট';
        if (!item.readTimeEn) item.readTimeEn = '1 min read';

        const outletMap = {
          'firstpost': 'https://www.instagram.com/firstpost/',
          'the wall': 'https://www.instagram.com/thewall_bangla/',
          'thewall': 'https://www.instagram.com/thewall_bangla/',
          'india today': 'https://www.instagram.com/indiatoday/',
          'indiatoday': 'https://www.instagram.com/indiatoday/',
          'newsmo': 'https://www.instagram.com/newsmo/',
          'ei samay': 'https://www.instagram.com/eisamay.digital/',
          'eisamay': 'https://www.instagram.com/eisamay.digital/',
          'abp ananda': 'https://www.instagram.com/abpanandatv/',
          'abpananda': 'https://www.instagram.com/abpanandatv/',
          'tv9 bangla': 'https://www.instagram.com/tv9_bangla/',
          'republic bangla': 'https://www.instagram.com/republicbangla/',
          'ndtv': 'https://www.instagram.com/ndtv/',
          'anandabazar': 'https://www.instagram.com/anandabazar_patrika/',
        };

        const nameLower = (item.source?.name || '').toLowerCase();
        let fallbackProfile = 'https://www.instagram.com';
        for (const [key, url] of Object.entries(outletMap)) {
          if (nameLower.includes(key)) {
            fallbackProfile = url;
            break;
          }
        }

        const currentUrl = (item.source?.originalUrl || '').trim();
        if (!currentUrl || currentUrl.includes('news.google.com') || !currentUrl.includes('instagram.com/')) {
          if (!item.source) item.source = {};
          item.source.originalUrl = fallbackProfile;
        }
      }

      // Programmatic URL Binding Safeguard: Ensure originalUrl links back to scanned feed candidate link
      const matchedCand = matchedArticles.find(cand => 
        (cand.title && item.source?.originalHeadline && cand.title.toLowerCase().includes(item.source.originalHeadline.toLowerCase().substring(0, 15))) ||
        (cand.title && item.title && cand.title.toLowerCase().includes(item.title.toLowerCase().substring(0, 15))) ||
        (cand.title && item.englishTitle && cand.title.toLowerCase().includes(item.englishTitle.toLowerCase().substring(0, 15)))
      );
      if (matchedCand && matchedCand.link) {
        if (!item.source) item.source = {};
        if (!item.source.originalUrl || item.source.originalUrl.includes('0WrRFhIezuc') || item.source.originalUrl === 'https://www.youtube.com') {
          item.source.originalUrl = matchedCand.link;
        }
      }

      // Programmatic Image Safeguard: Validate image relevance and apply fallback resolvers
      const categoryDefaultImages = {
        diplomacy: '/images/delhi-dhaka-bilateral-summit.jpg',
        trade: '/images/hilsa-fish-market-trade.jpg',
        border: '/images/indian-visa-application-center-dhaka.jpg',
        politics: '/images/international-crimes-tribunal-dhaka.jpg',
        economy: '/images/bank-bangladesh-economy.jpg',
        sports: '/images/brics-summit-2026-card.png',
        culture: '/images/dhakeshwari-national-temple-dhaka.jpg'
      };

      // YouTube thumbnail extraction rule: if source is YouTube or URL is a YouTube video link, use high quality YouTube thumbnail
      const ytMatch = (item.source?.originalUrl || '').match(/(?:youtube\.com\/(?:watch\?v=|embed\/|v\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
      if (ytMatch && ytMatch[1]) {
        item.imageUrl = `https://i.ytimg.com/vi/${ytMatch[1]}/hqdefault.jpg`;
      } else {
        const hasInvalidImage = !isValidNewsImage(item.imageUrl) || 
          (item.imageUrl.includes('suvendu-adhikari') && !combinedText.includes('suvendu') && !combinedText.includes('শুভেন্দু') && !combinedText.includes('অধিকারী'));

        if (hasInvalidImage) {
          if (combinedText.includes('tribunal') || combinedText.includes('ট্রাইব্যুনাল') || combinedText.includes('verdict') || combinedText.includes('মৃত্যুদণ্ড') || combinedText.includes('কাদের')) {
            item.imageUrl = '/images/international-crimes-tribunal-dhaka.jpg';
          } else if (combinedText.includes('hilsa') || combinedText.includes('ইলিশ') || combinedText.includes('রপ্তানি') || combinedText.includes('বন্দর')) {
            item.imageUrl = '/images/hilsa-fish-market-trade.jpg';
          } else if (combinedText.includes('tarique') || combinedText.includes('তারেক') || combinedText.includes('hasina') || combinedText.includes('হাসিনা')) {
            item.imageUrl = '/images/delhi-dhaka-bilateral-summit.jpg';
          } else {
            item.imageUrl = categoryDefaultImages[item.category] || '/images/delhi-dhaka-bilateral-summit.jpg';
          }
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
    if (scanMode === 'youtube' || scanMode === 'instagram') {
      // In YouTube or Instagram chunk mode, blend with existing stats to avoid wiping out the 24h RSS scan metrics
      const statsRegex = /export const SCANNER_STATS = ({[\s\S]*?});/;
      const statsMatch = currentFileContent.match(statsRegex);
      if (statsMatch) {
        try {
          const oldStats = new Function(`return ${statsMatch[1]}`)();
          parsedAiResult.scannerStats.totalScanned24h = (oldStats.totalScanned24h || 0) + allScannedArticles.length;
          parsedAiResult.scannerStats.bangladeshMatches = (oldStats.bangladeshMatches || 0) + matchedArticles.length;
          if (oldStats.bureauDistribution) {
            parsedAiResult.scannerStats.bureauDistribution.delhi = (oldStats.bureauDistribution.delhi || 0) + (parsedAiResult.scannerStats.bureauDistribution?.delhi || 0);
            parsedAiResult.scannerStats.bureauDistribution.kolkata = (oldStats.bureauDistribution.kolkata || 0) + (parsedAiResult.scannerStats.bureauDistribution?.kolkata || 0);
            parsedAiResult.scannerStats.bureauDistribution.mumbai = (oldStats.bureauDistribution.mumbai || 0) + (parsedAiResult.scannerStats.bureauDistribution?.mumbai || 0);
          }
        } catch (e) {
          console.warn('Could not blend scannerStats, using generated stats.');
        }
      }
    }
    const statsStr = `export const SCANNER_STATS = ${JSON.stringify(parsedAiResult.scannerStats, null, 2)};`;
    currentFileContent = currentFileContent.replace(/export const SCANNER_STATS = {[\s\S]*?};/, statsStr);
  }

  if (parsedAiResult.breakingAlerts && parsedAiResult.breakingAlerts.length > 0) {
    // Keep top verified URLs and enforce translation rules
    const safeAlerts = parsedAiResult.breakingAlerts.map(a => {
      let alert = {
        ...a,
        url: a.url && a.url.startsWith('http') ? a.url : (scanMode === 'youtube' ? 'https://www.youtube.com' : (scanMode === 'instagram' ? 'https://www.instagram.com' : 'https://www.thehindu.com/news/international/'))
      };
      if (alert.headlineBn) {
        alert.headlineBn = normalizeTariqueTranslation(alert.headlineBn);
      }
      return alert;
    });

    let mergedAlerts = [...safeAlerts];

    // Read existing alerts from file to preserve and merge across chunks (e.g. keep RSS alerts when YouTube runs, and vice-versa)
    const alertsRegex = /export const BREAKING_NEWS_ALERTS: BreakingAlert\[\] = (\[[\s\S]*?\]);/;
    const alertsMatch = currentFileContent.match(alertsRegex);
    if (alertsMatch) {
      try {
        const existingAlerts = new Function(`return ${alertsMatch[1]}`)();
        const seenUrls = new Set(safeAlerts.map(a => (a.url || '').trim().toLowerCase()));
        const seenHeadlines = new Set(safeAlerts.map(a => (a.headlineBn || '').trim().toLowerCase()));

        for (const ea of existingAlerts) {
          const uKey = (ea.url || '').trim().toLowerCase();
          const hKey = (ea.headlineBn || '').trim().toLowerCase();
          if (!seenUrls.has(uKey) && !seenHeadlines.has(hKey)) {
            mergedAlerts.push(ea);
          }
        }
        // Retain top 20 verified alerts maximum
        mergedAlerts = mergedAlerts.slice(0, 20);
      } catch (e) {
        console.warn('Could not parse existing alerts for merging, using new alerts.');
      }
    }

    const alertsStr = `export const BREAKING_NEWS_ALERTS: BreakingAlert[] = ${JSON.stringify(mergedAlerts, null, 2)};`;
    currentFileContent = currentFileContent.replace(alertsRegex, alertsStr);
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
