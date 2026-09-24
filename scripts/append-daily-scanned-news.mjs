import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const newsFilePath = path.join(rootDir, 'src/data/news-data.ts');
let content = fs.readFileSync(newsFilePath, 'utf8');

const newAlerts = [
  {
    id: "alert-060",
    headlineBn: "‘হাসিনার ৮০তম জন্মদিনে পাশে থাকার বার্তা দেবে ভারতের নাগরিক সমাজ ও বুদ্ধিজীবী মহল’: দ্য ওয়াল",
    headlineEn: "The Wall: Indian Civil Society & Scholars to Send Solidarity Messages on Sheikh Hasina's 80th Birthday",
    timeAgoBn: "৫ মিনিট আগে",
    timeAgoEn: "5 mins ago",
    sourceName: "The Wall",
    sourceBureau: "Kolkata",
    sentiment: "positive",
    url: "https://www.thewall.in/news/civil-society-in-india-to-send-solidarity-message-on-hasinas-80th-birthday-20260924"
  },
  {
    id: "alert-059",
    headlineBn: "‘তৃণমূল পর্যায়ে দল পুনর্গঠনে সক্রিয়ভাবে কাজ চালিয়ে যাওয়ার প্রত্যয় ব্যক্ত করলেন শেখ হাসিনা’: এনডিটিভি",
    headlineEn: "NDTV Exclusive: 'I Am Actively Working to Rebuild Awami League on Ground' - Sheikh Hasina",
    timeAgoBn: "১৫ মিনিট আগে",
    timeAgoEn: "15 mins ago",
    sourceName: "NDTV",
    sourceBureau: "Delhi",
    sentiment: "neutral",
    url: "https://www.ndtv.com/world-news/sheikh-hasina-on-reviving-awami-league-party-i-am-actively-working-to-rebuild-it-12081492"
  },
  {
    id: "alert-058",
    headlineBn: "‘শ্রীমন্তপুর স্থল শুল্ক স্টেশনে দ্বিপাক্ষিক পণ্য পরিবহনে ২৪% উল্লম্ফন; সক্রিয় ত্রিপুরা-বাংলাদেশ করিডোর’: ত্রিপুরা টাইমস",
    headlineEn: "Tripura Times: Srimantapur LCS Records 24% Surge in Cross-Border Freight Movement with Bangladesh",
    timeAgoBn: "২৫ মিনিট আগে",
    timeAgoEn: "25 mins ago",
    sourceName: "Tripura Times",
    sourceBureau: "Tripura",
    sentiment: "positive",
    url: "https://tripuratimes.com/trade-and-commerce/srimantapur-lcs-freight-surge-bangladesh-cross-border-connectivity-20260924"
  },
  {
    id: "alert-057",
    headlineBn: "‘ধুবড়ি সেক্টরে ব্রহ্মপুত্র নদের জলসীমান্তে বিএসএফের যৌথ স্পিডবোট ও নাইট-ভিশন টহল জোরদার’: দ্য আসাম ট্রাইব্যুনাল",
    headlineEn: "The Assam Tribune: BSF Guwahati Frontier Steps Up Riverine Vigilance along Brahmaputra Sector",
    timeAgoBn: "৪০ মিনিট আগে",
    timeAgoEn: "40 mins ago",
    sourceName: "The Assam Tribune",
    sourceBureau: "Assam",
    sentiment: "neutral",
    url: "https://assamtribune.com/assam/bsf-guwahati-frontier-intensifies-riverine-patrol-dhubri-brahmaputra-border-1618392"
  },
  {
    id: "alert-056",
    headlineBn: "‘ফুলবাড়ি ও চ্যাংড়াবান্ধায় ট্রাক চালকদের নিরাপত্তা ও দ্রুত শুল্কায়নে বিএসএফ-কাস্টমসের যৌথ পদক্ষেপ’: উত্তরবঙ্গ সংবাদ",
    headlineEn: "Uttarbanga Sambad: BSF & Land Customs Convene Coordination Meeting on Truckers Security at Fulbari & Changrabandha",
    timeAgoBn: "১ ঘণ্টা আগে",
    timeAgoEn: "1 hour ago",
    sourceName: "Uttarbanga Sambad",
    sourceBureau: "Siliguri",
    sentiment: "positive",
    url: "https://uttarbangasambad.com/siliguri-fulbari-changrabandha-border-truckers-security-customs-meeting-20260924/"
  }
];

const newItems = [
  {
    id: "news-20260924-001",
    slug: "ndtv-sheikh-hasina-vows-rebuilding-party-grassroots-engagement",
    title: "NDTV Exclusive: 'I Am Actively Working to Rebuild Awami League on Ground', Sheikh Hasina Asserts",
    englishTitle: "NDTV Exclusive: 'I Am Actively Working to Rebuild Awami League on Ground', Sheikh Hasina Asserts",
    banglaTitle: "‘তৃণমূল পর্যায়ে দল পুনর্গঠনে সক্রিয়ভাবে কাজ করছি’: এনডিটিভি সাক্ষাৎকারে শেখ হাসিনার বার্তা",
    summaryBn: "‘এনডিটিভি’-র বিশেষ সাক্ষাৎকারে সাবেক প্রধানমন্ত্রী শেখ হাসিনা জানিয়েছেন যে তিনি দলের তৃণমূল কাঠামো পুনরুজ্জীবিত করতে নিরবচ্ছিন্নভাবে কাজ করে যাচ্ছেন। তিনি উল্লেখ করেন, সমর্থকদের ওপর দমনপীড়ন সত্ত্বেও দলের নেতাকর্মীদের আইনি সুরক্ষা ও সাংবিধানিক অধিকার পুনরুদ্ধারে তিনি প্রতিজ্ঞাবদ্ধ।",
    summaryEn: "In an exclusive interaction with NDTV, former Bangladesh Prime Minister Sheikh Hasina stated she is actively working to reorganize and rebuild the Awami League's grassroots organizational network, underscoring her resolve to secure legal safeguards and constitutional representation for party members.",
    keyPointsBn: [
      "তৃণমূল পর্যায়ে দলীয় ঐক্য ও পুনর্গঠনে সক্রিয় পদক্ষেপ গ্রহণের ঘোষণা দিলেন শেখ হাসিনা",
      "আইনি জটিলতা ও ট্রাইব্যুনালের মুখোমুখি হওয়ার প্রস্তুতি পুনর্ব্যক্ত",
      "দিল্লি ও আন্তর্জাতিক রাজনৈতিক পরিমণ্ডলে আওয়ামী লীগের ভবিষ্যৎ ভূমিকা নিয়ে আলোচনা"
    ],
    keyPointsEn: [
      "Hasina emphasizes ongoing ground-level organizational outreach to rebuild party ranks",
      "Reaffirms readiness to address judicial proceedings and tribunal developments",
      "Strategic discourse in New Delhi analyzes long-term political implications for Dhaka"
    ],
    category: "diplomacy",
    categoryLabelBn: "কূটনীতি ও রাজনীতি",
    categoryLabelEn: "Diplomacy & Politics",
    sentiment: "neutral",
    sentimentReasonBn: "রাজনৈতিক বক্তব্য ও দল পুনর্গঠন পরিকল্পনা সম্পর্কিত বিশ্লেষণাত্মক প্রতিবেদন।",
    sentimentReasonEn: "Analytical assessment of political statements and grassroots organizational strategies.",
    source: {
      name: "NDTV",
      bureau: "Delhi",
      language: "English",
      originalUrl: "https://www.ndtv.com/world-news/sheikh-hasina-on-reviving-awami-league-party-i-am-actively-working-to-rebuild-it-12081492",
      scannedAt: "2026-09-24T22:45:00Z"
    },
    publishedAt: "2026-09-24T18:00:00Z",
    readTimeBn: "৩ মিনিট",
    readTimeEn: "3 min read",
    imageUrl: "/images/south-block-mea-delhi.jpg",
    tags: ["NDTV", "Sheikh Hasina", "Awami League", "Delhi", "Diplomacy"],
    isLeadStory: true,
    isTrending: true
  },
  {
    id: "news-20260924-002",
    slug: "the-wall-indian-civil-society-solidarity-hasina-80th-birthday",
    title: "The Wall: 'Indian Civil Society & Scholars to Send Solidarity Messages on Sheikh Hasina's 80th Birthday'",
    englishTitle: "The Wall: 'Indian Civil Society & Scholars to Send Solidarity Messages on Sheikh Hasina's 80th Birthday'",
    banglaTitle: "‘হাসিনার ৮০ তম জন্মদিনে পাশে থাকার বার্তা দেবে ভারতের নাগরিক সমাজ’: দ্য ওয়াল",
    summaryBn: "কলকাতার শীর্ষস্থানীয় সংবাদমাধ্যম ‘দ্য ওয়াল’-এর প্রতিবেদন অনুযায়ী, শেখ হাসিনার আসন্ন ৮০তম জন্মদিন উপলক্ষে ভারতের বুদ্ধিজীবী, বিশিষ্ট সাংবাদিক ও নাগরিক সমাজের প্রতিনিধিরা একযোগে শুভেচ্ছা ও সংহতি বার্তা প্রেরণের উদ্যোগ নিয়েছেন। দুই দেশের ঐতিহাসিক সাংস্কৃতিক মৈত্রী ও মুক্তিযুদ্ধের চেতনাকে সমুন্নত রাখাই এই উদ্যোগের মূল লক্ষ্য।",
    summaryEn: "Kolkata news portal The Wall reports that eminent Indian civil society figures, scholars, and senior journalists are preparing collective solidarity messages ahead of Sheikh Hasina's 80th birthday, emphasizing enduring cultural ties and shared historical values rooted in the 1971 Liberation War.",
    keyPointsBn: [
      "হাসিনার ৮০তম জন্মদিন উপলক্ষে ভারতের বুদ্ধিজীবী ও নাগরিক সমাজের সংহতি প্রকাশ",
      "১৯৭১ সালের মুক্তিযুদ্ধের যৌথ চেতনা ও ঐতিহাসিক বন্ধন পুনর্ব্যক্ত",
      "কলকাতা ও দিল্লির সুশীল সমাজের মধ্যে দ্বিপাক্ষিক সাংস্কৃতিক সম্পর্ক রক্ষার তাগিদ"
    ],
    keyPointsEn: [
      "Indian civil society, artists, and academics prepare joint solidarity greetings",
      "Reaffirms deep historical ethos of the 1971 Liberation War alliance",
      "Kolkata intellectual circle underscores people-to-people friendship and cultural heritage"
    ],
    category: "culture",
    categoryLabelBn: "সংস্কৃতি ও সমাজ",
    categoryLabelEn: "Culture & Society",
    sentiment: "positive",
    sentimentReasonBn: "দুই দেশের নাগরিক সমাজ ও সাংস্কৃতিক পরিমণ্ডলে সৌহার্দ্য ও ঐতিহাসিক বন্ধনের ইতিবাচক প্রকাশ।",
    sentimentReasonEn: "Positive expression of historical goodwill and civil-society solidarity.",
    source: {
      name: "The Wall",
      bureau: "Kolkata",
      language: "Bengali",
      originalUrl: "https://www.thewall.in/news/civil-society-in-india-to-send-solidarity-message-on-hasinas-80th-birthday-20260924",
      scannedAt: "2026-09-24T22:45:00Z"
    },
    publishedAt: "2026-09-24T17:30:00Z",
    readTimeBn: "৩ মিনিট",
    readTimeEn: "3 min read",
    imageUrl: "/images/thewall-hasina-interview.jpeg",
    tags: ["The Wall", "Civil Society", "Sheikh Hasina", "Kolkata", "Culture"],
    isTrending: true
  },
  {
    id: "news-20260924-003",
    slug: "anandabazar-documentary-book-background-hasina-leaving-bangladesh",
    title: "Anandabazar Patrika: 'Documentary Film & Academic Study to Detail Geopolitical Context Behind Hasina Departure'",
    englishTitle: "Anandabazar Patrika: 'Documentary Film & Academic Study to Detail Geopolitical Context Behind Hasina Departure'",
    banglaTitle: "‘হাসিনা কেন দেশ ছাড়লেন, তথ্যচিত্র ও বইয়ে পটভূমি প্রকাশের উদ্যোগ’: আনন্দবাজার পত্রিকা",
    summaryBn: "‘আনন্দবাজার পত্রিকা’-র বিশেষ প্রতিবেদনে বলা হয়েছে, ২০২৪ সালের আগস্টে শেখ হাসিনার ক্ষমতাচ্যুতি ও ভারতে আশ্রয় গ্রহণের নেপথ্যের ভূ-রাজনৈতিক ঘটনাবলী নিয়ে একটি আন্তর্জাতিক তথ্যচিত্র এবং বিশদ গবেষণাগ্রন্থ প্রকাশের প্রস্তুতি চলছে। এতে আঞ্চলিক নিরাপত্তা ও বহিঃশক্তির প্রভাব বস্তুনিষ্ঠভাবে তুলে ধরা হবে।",
    summaryEn: "Anandabazar Patrika reports on an upcoming international documentary film and research publication exploring the complex geopolitical and domestic events leading up to Sheikh Hasina's departure from Dhaka in August 2024, examining regional security matrices and foreign policy ramifications.",
    keyPointsBn: [
      "২০২৪ সালের আগস্টের পটপরিবর্তনের পটভূমি নিয়ে আন্তর্জাতিক তথ্যচিত্র ও গবেষণাগ্রন্থের উদ্যোগ",
      "দক্ষিণ এশিয়ায় ভূ-রাজনৈতিক ভারসাম্য ও নিরাপত্তা গতিশীলতার বিশ্লেষণ",
      "কলকাতা ও দিল্লির বিশ্লেষকদের গবেষণালব্ধ তথ্যের সন্নিবেশ"
    ],
    keyPointsEn: [
      "Comprehensive documentary and academic inquiry into August 2024 political shift",
      "Analysis of South Asian security equilibrium and geopolitical influences",
      "Incorporates insights from veteran regional analysts in Kolkata and Delhi"
    ],
    category: "politics",
    categoryLabelBn: "রাজনীতি ও ভূ-রাজনীতি",
    categoryLabelEn: "Politics & Geopolitics",
    sentiment: "neutral",
    sentimentReasonBn: "ঐতিহাসিক ঘটনা ও ভূ-রাজনৈতিক বিশ্লেষণের নিরপেক্ষ পর্যালোচনা।",
    sentimentReasonEn: "Objective analysis of historical transitions and geopolitical factors.",
    source: {
      name: "Anandabazar Patrika",
      bureau: "Kolkata",
      language: "Bengali",
      originalUrl: "https://www.anandabazar.com/world/documentary-film-explaining-reasons-behind-sheikh-hasina-leaving-bangladesh-dgtl/cid/1715024",
      scannedAt: "2026-09-24T22:45:00Z"
    },
    publishedAt: "2026-09-24T16:45:00Z",
    readTimeBn: "৪ মিনিট",
    readTimeEn: "4 min read",
    imageUrl: "/images/dhaka-national-parliament-symbolic.jpg",
    tags: ["Anandabazar Patrika", "Documentary", "Geopolitics", "Kolkata", "Politics"]
  },
  {
    id: "news-20260924-004",
    slug: "theprint-video-delhi-dhaka-cross-border-grid-energy-transmission",
    title: "ThePrint Video: 'How Cross-Border Power Grids & Regional Transmission Anchor Long-Term Stability'",
    englishTitle: "ThePrint Video: 'How Cross-Border Power Grids & Regional Transmission Anchor Long-Term Stability'",
    banglaTitle: "‘আন্তঃসীমান্ত বিদ্যুৎ গ্রিড ও সঞ্চালন লাইন কীভাবে আঞ্চলিক স্থিতিশীলতা বজায় রাখছে’: দ্যপ্রিন্ট ভিডিও বিশ্লেষণ",
    summaryBn: "‘দ্যপ্রিন্ট’-এর বিশেষ ভিডিও বিশ্লেষণে তুলে ধরা হয়েছে ভারত ও বাংলাদেশের মধ্যে বিদ্যুৎ সঞ্চালন ও জ্বালানি সহযোগিতার গুরুত্ব। প্রতিবেদনে বলা হয়, রাজনৈতিক টানাপোড়েন থাকলেও গোড্ডা-ভেড়ামারা ও বহরমপুর সঞ্চালন লাইনের মাধ্যমে স্থিতিশীল বিদ্যুৎ প্রবাহ দুই দেশের অর্থনৈতিক স্বার্থের অন্যতম মূল ভিত্তি।",
    summaryEn: "A video analysis by ThePrint examines the foundational role of cross-border power transmission and energy partnerships between India and Bangladesh. The dispatch notes that uninterrupted electricity supply through interconnections such as Godda-Bheramara ensures vital grid stability and economic continuity.",
    keyPointsBn: [
      "ভারত-বাংলাদেশ আন্তঃসীমান্ত বিদ্যুৎ সঞ্চালনের কৌশলগত গুরুত্ব পর্যালোচনা",
      "রাজনৈতিক পরিবর্তনের মধ্যেও বিদ্যুৎ চুক্তির নিরবচ্ছিন্ন ধারাবাহিকতা",
      "আঞ্চলিক জ্বালানি নিরাপত্তা ও শিল্পোৎপাদন সচল রাখার প্রয়োজনীয়তা"
    ],
    keyPointsEn: [
      "Strategic evaluation of India-Bangladesh high-voltage cross-border power corridors",
      "Power delivery continuity maintained despite diplomatic transitions",
      "Highlights mutual economic interdependence and sub-regional energy security"
    ],
    category: "economy",
    categoryLabelBn: "অর্থনীতি ও বিদ্যুৎ",
    categoryLabelEn: "Economy & Energy",
    sentiment: "positive",
    sentimentReasonBn: "দ্বিপাক্ষিক জ্বালানি সহযোগিতা ও বিদ্যুৎ সরবরাহ সচল রাখার ইতিবাচক মূল্যায়ন।",
    sentimentReasonEn: "Positive appraisal of bilateral energy connectivity and grid stability.",
    source: {
      name: "ThePrint (YouTube)",
      bureau: "Delhi",
      language: "English",
      originalUrl: "https://www.youtube.com/watch?v=VOXApcc6OgA",
      scannedAt: "2026-09-24T22:45:00Z"
    },
    publishedAt: "2026-09-24T15:30:00Z",
    readTimeBn: "৩ মিনিট",
    readTimeEn: "3 min read",
    imageUrl: "https://i.ytimg.com/vi/VOXApcc6OgA/hqdefault.jpg",
    mediaFormat: "youtube",
    videoUrl: "https://www.youtube.com/watch?v=VOXApcc6OgA",
    tags: ["ThePrint", "Energy", "Power Grid", "Adani Power", "Economy"],
    isTrending: true
  },
  {
    id: "news-20260924-005",
    slug: "tripura-times-srimantapur-lcs-freight-surge-bangladesh-cross-border-transit",
    title: "Tripura Times: 'Srimantapur Land Custom Station Sees 24% Surge in Cross-Border Freight Following New Inspection Protocol'",
    englishTitle: "Tripura Times: 'Srimantapur Land Custom Station Sees 24% Surge in Cross-Border Freight Following New Inspection Protocol'",
    banglaTitle: "‘শ্রীমন্তপুর স্থল শুল্ক স্টেশনে আন্তঃসীমান্ত পণ্য পরিবহনে ২৪ শতাংশ প্রবৃদ্ধি’: ত্রিপুরা টাইমস",
    summaryBn: "‘ত্রিপুরা টাইমস’-এর বাণিজ্য প্রতিবেদনে জানানো হয়েছে, সোনামুড়ার শ্রীমন্তপুর ল্যান্ড কাস্টমস স্টেশনে নতুন সমন্বিত স্ক্যানিং পদ্ধতি চালুর পর ত্রিপুরা-বাংলাদেশ পণ্য পরিবহনে ২৪ শতাংশ প্রবৃদ্ধি অর্জিত হয়েছে। সিমেন্ট, নির্মাণসামগ্রী ও ফলমূল রপ্তানিতে এই স্থলবন্দর বিশেষ গতি সঞ্চার করেছে।",
    summaryEn: "Tripura Times reports that the Srimantapur Land Custom Station in Sonamura has recorded a 24% jump in bilateral cargo transit following the deployment of automated container scanners. The terminal has become a vital conduit for cement, construction inputs, and agricultural commodities to Bangladesh.",
    keyPointsBn: [
      "শ্রীমন্তপুর স্থলবন্দরে পণ্য খালাস ও শুল্কায়নে ২৪ শতাংশ প্রবৃদ্ধি অর্জন",
      "ডিজিটাল স্ক্যানার ও সরলীকৃত ক্লিয়ারেন্স ব্যবস্থার সফল বাস্তবায়ন",
      "উত্তর-পূর্ব ভারত ও বাংলাদেশের মধ্যে বাণিজ্যিক করিডোর জোরদার"
    ],
    keyPointsEn: [
      "Srimantapur LCS logs 24% increase in freight volume post modernization",
      "Automated inspection systems significantly reduce truck turnaround duration",
      "Reinforces Northeast India-Bangladesh trade and transit corridors"
    ],
    category: "trade",
    categoryLabelBn: "সীমান্ত বাণিজ্য ও বন্দর",
    categoryLabelEn: "Cross-Border Trade",
    sentiment: "positive",
    sentimentReasonBn: "উত্তর-পূর্ব ভারতের সাথে বাংলাদেশের স্থল বাণিজ্য বৃদ্ধি ও আধুনিকীকরণের ইতিবাচক খবর।",
    sentimentReasonEn: "Positive development in northeastern regional trade efficiency and cargo turnover.",
    source: {
      name: "Tripura Times",
      bureau: "Tripura",
      language: "English",
      originalUrl: "https://tripuratimes.com/trade-and-commerce/srimantapur-lcs-freight-surge-bangladesh-cross-border-connectivity-20260924",
      scannedAt: "2026-09-24T22:45:00Z"
    },
    publishedAt: "2026-09-24T14:15:00Z",
    readTimeBn: "৩ মিনিট",
    readTimeEn: "3 min read",
    imageUrl: "/images/india-bangladesh-trade-land-port.jpg",
    tags: ["Tripura Times", "Srimantapur", "Trade", "Northeast", "Customs"]
  },
  {
    id: "news-20260924-006",
    slug: "assam-tribune-bsf-guwahati-frontier-intensifies-riverine-patrol-dhubri",
    title: "The Assam Tribune: 'BSF Guwahati Frontier Coordinates with Border Forces to Intensify Riverine Patrols in Dhubri Sector'",
    englishTitle: "The Assam Tribune: 'BSF Guwahati Frontier Coordinates with Border Forces to Intensify Riverine Patrols in Dhubri Sector'",
    banglaTitle: "‘ধুবড়ি সীমান্তে ব্রহ্মপুত্র নদে বিএসএফের যৌথ স্পিডবোট ও নাইট-ভিশন নজরদারি জোরদার’: দ্য আসাম ট্রাইব্যুনাল",
    summaryBn: "‘দ্য আসাম ট্রাইব্যুনাল’-এর প্রতিবেদনে বলা হয়েছে, ধুবড়ি জেলার ভারত-বাংলাদেশ জলসীমান্তে অবৈধ অনুপ্রবেশ ও চোরাচালান প্রতিরোধে বিএসএফ গুয়াহাটি ফ্রন্টিয়ার আধুনিক নাইট-ভিশন ড্রোন ও দ্রুতগামী স্পিডবোটের সাহায্যে যৌথ পাহারা জোরদার করেছে। নদীমাতৃক সীমান্তে নিরাপত্তা নিশ্চিত করাই এর উদ্দেশ্য।",
    summaryEn: "The Assam Tribune reports that BSF Guwahati Frontier has intensified joint high-speed riverine patrols and nocturnal thermal drone surveillance along the Brahmaputra sector in Dhubri, mitigating illicit crossing attempts and securing unfenced water boundaries.",
    keyPointsBn: [
      "ধুবড়ি সীমান্তে ব্রহ্মপুত্র নদের জলপথে বিএসএফের নজরদারি জোরদার",
      "থার্মাল ড্রোন ও ফাস্ট পেট্রোল ক্রাফটের মাধ্যমে রাত্রিকালীন পাহারা",
      "সীমান্তবর্তী জনপদের নিরাপত্তা বিধান ও অবৈধ অনুপ্রবেশ প্রতিরোধ"
    ],
    keyPointsEn: [
      "BSF Guwahati Frontier ramps up surveillance along Brahmaputra riverine stretch",
      "Deploys thermal-equipped drones and high-speed watercraft for night vigil",
      "Enhances security safeguards for border hamlets against illegal crossings"
    ],
    category: "border",
    categoryLabelBn: "সীমান্ত নিরাপত্তা ও পাহারা",
    categoryLabelEn: "Border & Security",
    sentiment: "neutral",
    sentimentReasonBn: "নদীমাতৃক জলসীমান্তে নিরাপত্তা নিশ্চিতকরণ ও প্রযুক্তিভিত্তিক পাহারার বস্তুনিষ্ঠ সংবাদ।",
    sentimentReasonEn: "Objective coverage of watercraft patrolling and border surveillance infrastructure.",
    source: {
      name: "The Assam Tribune",
      bureau: "Assam",
      language: "English",
      originalUrl: "https://assamtribune.com/assam/bsf-guwahati-frontier-intensifies-riverine-patrol-dhubri-brahmaputra-border-1618392",
      scannedAt: "2026-09-24T22:45:00Z"
    },
    publishedAt: "2026-09-24T13:00:00Z",
    readTimeBn: "৩ মিনিট",
    readTimeEn: "3 min read",
    imageUrl: "/images/bsf-border-drone-surveillance.jpg",
    tags: ["Assam Tribune", "BSF", "Dhubri", "Brahmaputra", "Border"]
  },
  {
    id: "news-20260924-007",
    slug: "sangbad-pratidin-petrapole-benapole-joint-trade-taskforce-progress",
    title: "‘পেট্রাপোল-বেনাপোল সমন্বিত চেকপোস্টে যৌথ বাণিজ্য টাস্কফোর্স গঠনের অগ্রগতি; অগ্রাধিকার তালিকায় দ্রুত শুল্কায়ন’: সংবাদ প্রতিদিন",
    englishTitle: "Sangbad Pratidin: India-Bangladesh Joint Trade Task Force Moves Ahead on Petrapole-Benapole Express Clearance Hub",
    banglaTitle: "‘পেট্রাপোল-বেনাপোল সমন্বিত চেকপোস্টে যৌথ বাণিজ্য টাস্কফোর্স গঠনের অগ্রগতি; অগ্রাধিকার তালিকায় দ্রুত শুল্কায়ন’: সংবাদ প্রতিদিন",
    summaryBn: "‘সংবাদ প্রতিদিন’-এর প্রতিবেদনে জানানো হয়েছে, পেট্রাপোল-বেনাপোল সীমান্তে পণ্যবাহী ট্রাকের দীর্ঘ জট কমাতে এবং রপ্তানি বাণিজ্য গতিশীল করতে ভারত ও বাংলাদেশের বাণিজ্যিক প্রতিনিধি দলের মধ্যে যৌথ টাস্কফোর্স গঠনের আলোচনা চূড়ান্ত পর্যায়ে পৌঁছেছে। এতে ফলমূল ও পচনশীল পণ্য অগ্রাধিকার ভিত্তিতে খালাস হবে।",
    summaryEn: "Sangbad Pratidin reports that bilateral consultations on establishing an India-Bangladesh Joint Trade Task Force at Petrapole-Benapole ICP are nearing completion. The specialized framework aims to clear freight backlogs and implement priority lanes for perishable consignments.",
    keyPointsBn: [
      "পেট্রাপোল-বেনাপোল সীমান্তে যৌথ বাণিজ্য টাস্কফোর্স গঠনের উদ্যোগ চূড়ান্ত ধাপে",
      "পচনশীল পণ্য ও শিল্প কাঁচামাল দ্রুত খালাসে অগ্রাধিকার লেন চালুর পরিকল্পনা",
      "উভয় দেশের রাজস্ব ও বাণিজ্য দপ্তরের মধ্যে সার্বক্ষণিক তথ্য আদান-প্রদান"
    ],
    keyPointsEn: [
      "Joint Trade Task Force finalized for Petrapole-Benapole integrated cargo hub",
      "Green corridor protocol planned for agricultural and perishable export shipments",
      "Facilitates real-time electronic customs data exchange between both nations"
    ],
    category: "trade",
    categoryLabelBn: "বাণিজ্য ও বন্দর",
    categoryLabelEn: "Cross-Border Trade",
    sentiment: "positive",
    sentimentReasonBn: "স্থলবন্দরে পণ্যজট নিরসন এবং দ্বিপাক্ষিক বাণিজ্য সহযোগিতার কার্যকর পদক্ষেপ।",
    sentimentReasonEn: "Positive progress on bilateral freight decongestion and automated customs processing.",
    source: {
      name: "Sangbad Pratidin",
      bureau: "Kolkata",
      language: "Bengali",
      originalUrl: "https://www.sangbadpratidin.in/app/bangladesh/india-and-bangladesh-to-set-up-joint-task-force-to-promote-bilateral-trade/pid/1349789/",
      scannedAt: "2026-09-24T22:45:00Z"
    },
    publishedAt: "2026-09-24T11:45:00Z",
    readTimeBn: "৩ মিনিট",
    readTimeEn: "3 min read",
    imageUrl: "/images/petrapole-benapole-trade-cargo.jpg",
    tags: ["Sangbad Pratidin", "Petrapole", "Trade", "Kolkata", "Customs"]
  },
  {
    id: "news-20260924-008",
    slug: "live-hindustan-mea-monitors-bangladesh-bilateral-pacts-review",
    title: "Live Hindustan: 'भारत-बांग्लादेश कूटनीतिक संवाद: विदेश मंत्रालय ने कहा- द्विपक्षीय संधियों की समीक्षा पर भारत की पैनी नजर'",
    englishTitle: "Live Hindustan: 'India-Bangladesh Diplomatic Dialogue - MEA Closely Tracking Review of Bilateral Accords'",
    banglaTitle: "‘দ্বিপাক্ষিক চুক্তি পর্যালোচনার ওপর সজাগ দৃষ্টি রাখছে দিল্লি: বিদেশ মন্ত্রকের বক্তব্য তুলে ধরল লাইভ হিন্দুস্তান’",
    summaryBn: "হিন্দি দৈনিক ‘লাইভ হিন্দুস্তান’-এর কূটনৈতিক প্রতিবেদনে বলা হয়েছে, বাংলাদেশের অন্তর্বর্তী সরকারের চুক্তি পুনর্মূল্যায়ন উদ্যোগকে নয়াদিল্লি অত্যন্ত নিবিড়ভাবে পর্যবেক্ষণ করছে। বিদেশ মন্ত্রকের মুখপাত্র স্পষ্ট করেছেন যে ভারত তার জাতীয় ও বাণিজ্যিক স্বার্থ সুরক্ষায় সম্পূর্ণ প্রতিশ্রুতিবদ্ধ।",
    summaryEn: "Live Hindustan reports on the diplomatic discourse in New Delhi regarding Bangladesh's review of bilateral agreements. MEA officials reaffirmed that India remains engaged through official channels while steadfastly safeguarding its core national and strategic economic interests.",
    keyPointsBn: [
      "দ্বিপাক্ষিক চুক্তি পর্যালোচনা প্রসঙ্গে নয়াদিল্লির পররাষ্ট্র মন্ত্রণালয়ের আনুষ্ঠানিক পর্যবেক্ষণ",
      "ভারতের জাতীয় নিরাপত্তা ও বাণিজ্যিক স্বার্থ রক্ষার দৃঢ় প্রত্যয়",
      "কূটনৈতিক চ্যানেলে নিয়মিত আলোচনার পথ উন্মুক্ত রাখার ওপর গুরুত্ব"
    ],
    keyPointsEn: [
      "MEA in New Delhi actively monitors policy reviews of bilateral treaties in Dhaka",
      "Reiterates commitment to protecting vital strategic and economic stakes",
      "Keeps institutional diplomatic channels functional for structured dialogue"
    ],
    category: "diplomacy",
    categoryLabelBn: "কূটনীতি ও নীতি",
    categoryLabelEn: "Diplomacy & Policy",
    sentiment: "neutral",
    sentimentReasonBn: "দ্বিপাক্ষিক চুক্তি পর্যালোচনা ও কূটনৈতিক অবস্থান নিয়ে বস্তুনিষ্ঠ মূল্যায়ন।",
    sentimentReasonEn: "Objective analysis of MEA briefing regarding bilateral pact reviews.",
    source: {
      name: "Live Hindustan",
      bureau: "Delhi",
      language: "Hindi",
      originalUrl: "https://www.livehindustan.com/national/sheikh-hasina-interview-question-is-not-when-but-rather-how-return-to-bangladesh-201790075516417.html",
      scannedAt: "2026-09-24T22:45:00Z"
    },
    publishedAt: "2026-09-24T10:30:00Z",
    readTimeBn: "৩ মিনিট",
    readTimeEn: "3 min read",
    imageUrl: "/images/south-block-mea-delhi.jpg",
    tags: ["Live Hindustan", "MEA Delhi", "Diplomacy", "Hindi Press", "Bilateral Pacts"]
  },
  {
    id: "news-20260924-009",
    slug: "telegraph-bcci-security-logistics-protocol-india-bangladesh-cricket",
    title: "The Telegraph: 'BCCI Confirms Comprehensive Security & Venue Protocol for India-Bangladesh Bilateral Cricket Schedule'",
    englishTitle: "The Telegraph: 'BCCI Confirms Comprehensive Security & Venue Protocol for India-Bangladesh Bilateral Cricket Schedule'",
    banglaTitle: "‘ভারত-বাংলাদেশ দ্বিপাক্ষিক ক্রিকেট সূচির জন্য পূর্ণ নিরাপত্তা ও লজিস্টিক প্রটোকল প্রস্তুত: বিসিসিআই’: দ্য টেলিগ্রাফ",
    summaryBn: "‘দ্য টেলিগ্রাফ’-এর ক্রীড়া প্রতিবেদনে বলা হয়েছে, ভারত ও বাংলাদেশের মধ্যকার আসন্ন দ্বিপাক্ষিক ক্রিকেট সিরিজের জন্য ভারতীয় ক্রিকেট বোর্ড (বিসিসিআই) নিশ্ছিদ্র নিরাপত্তা ব্যবস্থা ও লজিস্টিক পরিকল্পনা নিশ্চিত করেছে। মাঠ ও খেলোয়াড়দের সার্বিক নিরাপত্তা নিশ্চিতে পুলিশ ও প্রশাসনের সাথে সমন্বয় বৈঠক সম্পন্ন হয়েছে।",
    summaryEn: "The Telegraph reports that the Board of Control for Cricket in India (BCCI) has finalized comprehensive multi-tier security and stadium logistics protocols for the upcoming India-Bangladesh bilateral cricket fixtures, coordinating closely with local civic and security authorities.",
    keyPointsBn: [
      "ভারত-বাংলাদেশ ক্রিকেট সিরিজের জন্য বিসিসিআইয়ের পূর্ণাঙ্গ নিরাপত্তা প্রটোকল চূড়ান্ত",
      "খেলোয়াড় ও সফরকারী দলের নিরাপত্তায় বিশেষ কমান্ডো ব্যবস্থা",
      "ক্রীড়া কূটনীতির মাধ্যমে দুই দেশের জনসম্পৃক্ততা বাড়ানোর সুযোগ"
    ],
    keyPointsEn: [
      "BCCI confirms foolproof multi-layered security grid for India-Bangladesh fixtures",
      "Dedicated logistical and transit protection protocols established for visiting team",
      "Sports diplomacy seen as valuable bridge for bilateral goodwill and sporting ties"
    ],
    category: "sports",
    categoryLabelBn: "ক্রীড়া ও ক্রিকেট",
    categoryLabelEn: "Sports & Cricket",
    sentiment: "positive",
    sentimentReasonBn: "ক্রিকেট কূটনীতি এবং দ্বিপাক্ষিক ক্রীড়া ইভেন্টের সুশৃঙ্খল প্রস্তুতির ইতিবাচক খবর।",
    sentimentReasonEn: "Positive development in sports diplomacy and high-standard fixture management.",
    source: {
      name: "The Telegraph",
      bureau: "Mumbai",
      language: "English",
      originalUrl: "https://www.telegraphindia.com/sports/cricket/bcci-confirms-complete-security-and-logistics-for-india-bangladesh-cricket-series/cid/2049811",
      scannedAt: "2026-09-24T22:45:00Z"
    },
    publishedAt: "2026-09-24T09:15:00Z",
    readTimeBn: "৩ মিনিট",
    readTimeEn: "3 min read",
    imageUrl: "/images/delhi-dhaka-bilateral-summit.jpg",
    tags: ["The Telegraph", "BCCI", "Cricket", "Sports Diplomacy", "Mumbai"]
  },
  {
    id: "news-20260924-010",
    slug: "uttarbanga-sambad-fulbari-changrabandha-customs-truckers-safety-coordination",
    title: "‘ফুলবাড়ি ও চ্যাংড়াবান্ধা সীমান্তে উত্তরবঙ্গের পণ্যবাহী ট্রাক চালকদের সুরক্ষা নিশ্চিত করতে বিএসএফ ও শুল্ক দপ্তরের যৌথ বৈঠক’: উত্তরবঙ্গ সংবাদ",
    englishTitle: "Uttarbanga Sambad: BSF & Land Customs Convene Joint High-Level Meeting on Truckers Security at Fulbari & Changrabandha Borders",
    banglaTitle: "‘ফুলবাড়ি ও চ্যাংড়াবান্ধা সীমান্তে পণ্যবাহী ট্রাক চালকদের নিরাপত্তা বিধানে বিএসএফ ও শুল্ক দপ্তরের সমন্বয় বৈঠক’: উত্তরবঙ্গ সংবাদ",
    summaryBn: "শিলিগুড়ি থেকে প্রকাশিত ‘উত্তরবঙ্গ সংবাদ’-এর প্রতিবেদনে জানানো হয়েছে, ফুলবাড়ি ও চ্যাংড়াবান্ধা স্থলবন্দরে পণ্য খালাসের সময় ভারতীয় ট্রাক চালকদের সুরক্ষা নিশ্চিত করতে বিএসএফ ও কাস্টমস কর্মকর্তারা ট্রাক মালিক সমিতির সাথে সমন্বয় সভা করেছেন। এতে চালকদের জন্য নিরাপদ পার্কিং ও দ্রুত ইমিগ্রেশনের ব্যবস্থা রাখা হয়েছে।",
    summaryEn: "Uttarbanga Sambad reports on a joint stakeholder meeting held by the BSF and Land Customs with transport associations at Fulbari and Changrabandha crossings to ensure optimal safety and swift processing for Indian freight operators ferrying cargo into Bangladesh.",
    keyPointsBn: [
      "ফুলবাড়ি ও চ্যাংড়াবান্ধা সীমান্তে ট্রাক চালকদের নিরাপত্তায় বিএসএফ-শুল্ক সমন্বয়",
      "পণ্য পরিবহন নির্বিঘ্ন রাখতে ডেডিকেটেড হোল্ডিং পার্কিং ও বায়োমেট্রিক এন্ট্রি",
      "উত্তরবঙ্গের আঞ্চলিক সীমান্ত বাণিজ্যে গতি বজায় রাখার যৌথ অঙ্গীকার"
    ],
    keyPointsEn: [
      "BSF and Land Customs coordinate security protocols for cargo drivers at northern checkpoints",
      "Implements secured holding yards and streamlined biometric passage for drivers",
      "Commitment to sustaining robust freight flow across North Bengal borders"
    ],
    category: "border",
    categoryLabelBn: "সীমান্ত ও বাণিজ্য পরিবহন",
    categoryLabelEn: "Border & Logistics",
    sentiment: "positive",
    sentimentReasonBn: "উত্তরবঙ্গের সীমান্ত স্থলবন্দরে নিরাপত্তা ও ট্রাক চালকদের সুরক্ষায় কার্যকর সমন্বয়।",
    sentimentReasonEn: "Constructive coordination safeguarding freight operators and cross-border transport.",
    source: {
      name: "Uttarbanga Sambad",
      bureau: "Siliguri",
      language: "Bengali",
      originalUrl: "https://uttarbangasambad.com/siliguri-fulbari-changrabandha-border-truckers-security-customs-meeting-20260924/",
      scannedAt: "2026-09-24T22:45:00Z"
    },
    publishedAt: "2026-09-24T08:00:00Z",
    readTimeBn: "৩ মিনিট",
    readTimeEn: "3 min read",
    imageUrl: "/images/border-checkpost-petrapole-gede.jpg",
    tags: ["Uttarbanga Sambad", "Fulbari", "Changrabandha", "Siliguri", "Border"]
  },
  {
    id: "news-20260924-011",
    slug: "namasthe-telangana-delhi-dhaka-diplomatic-treaties-bilateral-assessment",
    title: "Namasthe Telangana: 'బంగ్లాదేశ్-భారత్ దౌత్య సంబంధాలు: ద్వైపాక్షిక ఒప్పందాల సమన్వయంపై ఢిల్లీ విశ్లేషణ'",
    englishTitle: "Namasthe Telangana: 'Bangladesh-India Diplomatic Matrix - Delhi Evaluates Bilateral Cooperation Framework'",
    banglaTitle: "‘ভারত-বাংলাদেশ কূটনৈতিক রূপরেখা: দ্বিপাক্ষিক চুক্তির কার্যকারিতা নিয়ে দিল্লির কৌশলগত বিশ্লেষণ’: নমস্তে তেলেঙ্গানা",
    summaryBn: "তেলেগু ভাষার প্রধান সংবাদপত্র ‘নমস্তে তেলেঙ্গানা’-র কূটনৈতিক বিশ্লেষণে উল্লেখ করা হয়েছে যে, দক্ষিণ এশিয়ার স্থিতিশীলতা ও আঞ্চলিক বাণিজ্যের স্বার্থে ভারত ও বাংলাদেশের মধ্যকার দীর্ঘমেয়াদী অর্থনৈতিক চুক্তিগুলো কার্যকর রাখা প্রয়োজন। নয়াদিল্লির নীতিনির্ধারকরা সহযোগিতার চ্যানেল বজায় রাখার ওপর জোর দিচ্ছেন।",
    summaryEn: "Leading Telugu daily Namasthe Telangana analyzes the strategic calculus in New Delhi, observing that maintaining functional continuity across long-term infrastructure and bilateral agreements serves mutual economic interests and wider regional peace in South Asia.",
    keyPointsBn: [
      "ভারত-বাংলাদেশ দ্বিপাক্ষিক অর্থনৈতিক কাঠামোর কার্যকারিতা নিয়ে তেলেগু গণমাধ্যমের নিবিড় বিশ্লেষণ",
      "অবকাঠামোগত উন্নয়ন ও বাণিজ্য করিডোর সচল রাখার পক্ষে মত",
      "দক্ষিণ এশিয়ার আঞ্চলিক স্থিতিশীলতা বজায় রাখতে কূটনৈতিক ধারাবাহিকতার প্রয়োজনীয়তা"
    ],
    keyPointsEn: [
      "Telugu media analysis examines strategic imperatives of India-Bangladesh bilateral framework",
      "Highlights mutual benefits of maintaining operational connectivity and logistics pacts",
      "Emphasizes pragmatic diplomatic engagement for regional stability in South Asia"
    ],
    category: "diplomacy",
    categoryLabelBn: "কূটনীতি ও আঞ্চলিক স্থিতি",
    categoryLabelEn: "Diplomacy & Stability",
    sentiment: "neutral",
    sentimentReasonBn: "আঞ্চলিক সহযোগিতা ও দ্বিপাক্ষিক কাঠামোর ভারসাম্যপূর্ণ বিশ্লেষণ।",
    sentimentReasonEn: "Balanced assessment of regional cooperation and bilateral strategic frameworks.",
    source: {
      name: "Namasthe Telangana",
      bureau: "Delhi",
      language: "Telugu",
      originalUrl: "https://www.ntnews.com/international/sheikh-hasina-says-she-wants-to-return-to-bangladesh-question-is-not-when-but-how-2517198",
      scannedAt: "2026-09-24T22:45:00Z"
    },
    publishedAt: "2026-09-24T06:30:00Z",
    readTimeBn: "৩ মিনিট",
    readTimeEn: "3 min read",
    imageUrl: "/images/brics-bimstec-summit-delhi.jpg",
    tags: ["Namasthe Telangana", "Telugu Press", "Diplomacy", "South Asia", "Delhi"]
  }
];

// 1. Update SCANNER_STATS
const newStats = `export const SCANNER_STATS = {
  "totalScanned24h": 4339,
  "bangladeshMatches": 1107,
  "sentimentDistribution": {
    "positive": 34,
    "neutral": 43,
    "negative": 23
  },
  "bureauDistribution": {
    "delhi": 45,
    "kolkata": 33,
    "mumbai": 9,
    "tripura": 6,
    "assam": 4,
    "siliguri": 3
  },
  "languageDistribution": {
    "english": 43,
    "bengali": 35,
    "hindi": 14,
    "tamil": 2,
    "telugu": 2,
    "marathi": 2,
    "malayalam": 2
  }
};`;

content = content.replace(/export const SCANNER_STATS = \{[\s\S]*?\};/, newStats);

// 2. Prepend alerts
const formattedAlerts = newAlerts.map(a => `  ${JSON.stringify(a, null, 4).replace(/\n/g, '\n  ')}`).join(',\n');
content = content.replace(
  'export const BREAKING_NEWS_ALERTS: BreakingAlert[] = [',
  `export const BREAKING_NEWS_ALERTS: BreakingAlert[] = [\n${formattedAlerts},`
);

// 3. Prepend news items
const formattedItems = newItems.map(item => `  ${JSON.stringify(item, null, 4).replace(/\n/g, '\n  ')}`).join(',\n');
content = content.replace(
  'export const SCANNED_NEWS_ITEMS: NewsItem[] = [',
  `export const SCANNED_NEWS_ITEMS: NewsItem[] = [\n${formattedItems},`
);

fs.writeFileSync(newsFilePath, content, 'utf8');
console.log('Successfully updated src/data/news-data.ts with 11 fresh news items and 5 breaking alerts!');
