export type SentimentType = 'positive' | 'negative' | 'neutral';
export type LanguageType = 'English' | 'Bengali' | 'Hindi';
export type BureauType = 'Delhi' | 'Kolkata';

export interface SourceMedia {
  name: string;
  bureau: BureauType;
  language: LanguageType;
  originalUrl: string;
  originalHeadline?: string;
  scannedAt: string;
}

export interface NewsItem {
  id: string;
  slug: string;
  title: string; // Original Headline (Always preserved in original script)
  englishTitle?: string; // English translation (for Hindi / Bengali)
  banglaTitle?: string;  // Bengali translation (for Hindi / English)
  summaryBn: string;     // Bengali summary
  summaryEn: string;     // English summary
  keyPointsBn: string[]; // Bengali bullet points
  keyPointsEn: string[]; // English bullet points
  category: 'diplomacy' | 'trade' | 'border' | 'politics' | 'economy' | 'sports' | 'culture';
  categoryLabelBn: string;
  categoryLabelEn: string;
  sentiment: SentimentType;
  sentimentReasonBn: string;
  sentimentReasonEn: string;
  source: SourceMedia;
  publishedAt: string;
  readTimeBn: string;
  readTimeEn: string;
  imageUrl: string;
  isLeadStory?: boolean;
  isTrending?: boolean;
  isBreaking?: boolean;
  tags: string[];
}

export interface MarketIndex {
  name: string;
  symbol: string;
  value: string;
  change: string;
  isPositive: boolean;
}

export interface BreakingAlert {
  id: string;
  headlineBn: string;
  headlineEn: string;
  timeAgoBn: string;
  timeAgoEn: string;
  sourceName: string;
  sourceBureau: BureauType;
  sentiment: SentimentType;
  url: string;
}

export const CATEGORIES = [
  { slug: 'diplomacy', labelBn: 'কূটনীতি ও তিস্তা', labelEn: 'Diplomacy & Water', icon: 'Globe' },
  { slug: 'trade', labelBn: 'সীমান্ত বাণিজ্য ও বন্দর', labelEn: 'Cross-Border Trade', icon: 'TrendingUp' },
  { slug: 'border', labelBn: 'সীমান্ত নিরাপত্তা ও বিএসএফ', labelEn: 'Border & Security', icon: 'Shield' },
  { slug: 'economy', labelBn: 'অর্থনীতি ও বিদ্যুৎ', labelEn: 'Economy & Energy', icon: 'Building2' },
  { slug: 'sports', labelBn: 'ক্রীড়া ও ক্রিকেট', labelEn: 'Sports & Cricket', icon: 'Trophy' },
  { slug: 'culture', labelBn: 'সংস্কৃতি ও সাহিত্য', labelEn: 'Culture & Arts', icon: 'Sparkles' },
];

export const SCANNER_STATS = {
  "totalScanned24h": 1764,
  "bangladeshMatches": 328,
  "sentimentDistribution": {
    "positive": 30,
    "neutral": 17,
    "negative": 15
  },
  "bureauDistribution": {
    "delhi": 37,
    "kolkata": 25
  },
  "languageDistribution": {
    "english": 41,
    "bengali": 18,
    "hindi": 3
  }
};

export const BREAKING_NEWS_ALERTS: BreakingAlert[] = [
  {
    "id": "ba-tv-001",
    "headlineBn": "বাংলাদেশি মন্ত্রীর বক্তব্যে ভারতের সঙ্গে সম্পর্ক পুনর্মূল্যায়নের স্পষ্ট ইঙ্গিত: এনডিটিভির বিশেষ পর্যালোচনা",
    "headlineEn": "In comments of Bangladesh minister, a hint of recalibration of ties with India: NDTV report",
    "timeAgoBn": "১ ঘণ্টা আগে",
    "timeAgoEn": "1 hour ago",
    "sourceName": "NDTV",
    "sourceBureau": "Delhi",
    "sentiment": "positive",
    "url": "https://www.ndtv.com/world-news/in-comments-of-bangladesh-minister-a-hint-of-recalibration-of-ties-with-india"
  },
  {
    "id": "ba-tv-002",
    "headlineBn": "বিমানবন্দর ও প্রতিষ্ঠানে ভুয়া বোমা হুমকি কাণ্ডে বাংলাদেশ সংশ্লিষ্টতার যোগসূত্র, ৫ লাখ ইমেইল আইডিসহ গ্রেপ্তার ২: ইন্ডিয়া টুডে",
    "headlineEn": "Gujarat cyber crime probe unearths Bangladesh link in hoax threat emails, 2 held with 5 lakh email IDs: India Today",
    "timeAgoBn": "৩ ঘণ্টা আগে",
    "timeAgoEn": "3 hours ago",
    "sourceName": "India Today",
    "sourceBureau": "Delhi",
    "sentiment": "negative",
    "url": "https://www.indiatoday.in/world/story/gujarat-bomb-threat-probe-bangladesh-link-two-arrested"
  },
  {
    "id": "ba-tv-003",
    "headlineBn": "শারদীয় উৎসবে বাংলা সীমান্তে ইলিশ আমদানি-রফতানি বাণিজ্যের টানাপোড়েন ও গতিপ্রকৃতি: টেলিভিশন বিশেষ প্রতিবেদন",
    "headlineEn": "Festive trade dynamic: Indian news channels monitor Hilsa cross-border movements along Bengal frontier",
    "timeAgoBn": "৪ ঘণ্টা আগে",
    "timeAgoEn": "4 hours ago",
    "sourceName": "India Today",
    "sourceBureau": "Delhi",
    "sentiment": "positive",
    "url": "https://www.indiatoday.in/newsmo/short-videos/uno-reverse-india-is-now-sending-hilsa-to-bangladesh-2994581-2026-09-14"
  },
  {
    "id": "ba-001",
    "headlineBn": "ভারতের সঙ্গে সম্পর্ক 'রিসেট' করতে চায় বাংলাদেশ, দ্বিপাক্ষিক আলোচনার মাধ্যমে হওয়া উচিত: পররাষ্ট্র প্রতিমন্ত্রী",
    "headlineEn": "Bangladesh wants to 'reset' ties with India, should be done through bilateral discussions: State Minister for Foreign Affairs",
    "timeAgoBn": "৬ ঘণ্টা আগে",
    "timeAgoEn": "6 hours ago",
    "sourceName": "The Hindu",
    "sourceBureau": "Delhi",
    "sentiment": "neutral",
    "url": "https://www.thehindu.com/news/national/bangladesh-wants-to-reset-ties-with-india/article71464479.ece"
  }
];

export const SCANNED_NEWS_ITEMS: NewsItem[] = [
  {
    "id": "tv-ndtv-recalibration-6",
    "slug": "ndtv-bangladesh-minister-recalibration-ties-with-india",
    "title": "In Comments Of Bangladesh Minister, A Hint Of Recalibration Of Ties With India",
    "englishTitle": "In Comments Of Bangladesh Minister, A Hint Of Recalibration Of Ties With India",
    "banglaTitle": "বাংলাদেশি মন্ত্রীর বক্তব্যে ভারতের সঙ্গে সম্পর্ক পুনর্মূল্যায়নের ইঙ্গিত: এনডিটিভির বিশেষ প্রতিবেদন",
    "summaryBn": "এনডিটিভির এক বিশেষ বিশ্লেষণে বলা হয়েছে, অন্তর্বর্তী সরকারের পররাষ্ট্র বিষয়ক নেতৃত্বের সাম্প্রতিক বক্তব্যে ভারতের সঙ্গে দ্বিপাক্ষিক সম্পর্ক স্বাভাবিক করা এবং 'অহেতুক টানাপোড়েন' এড়িয়ে বাস্তবিক কূটনীতি অনুসরণের স্পষ্ট ইতিবাচক বার্তা পাওয়া গেছে।",
    "summaryEn": "NDTV's analytical broadcast underscores that recent remarks by Bangladesh's foreign policy leadership signal an intention to move past strained rhetoric, seeking an interest-driven, stabilized equilibrium and pragmatic bilateral engagement with New Delhi.",
    "keyPointsBn": [
      "এনডিটিভির বিশেষ প্রতিবেদনে ঢাকা ও দিল্লির মধ্যকার সম্পর্ক পুনর্গঠনের ইঙ্গিত পর্যালোচনা",
      "কূটনৈতিক পর্যায়ে নিয়মিত দ্বিপাক্ষিক যোগাযোগের প্রয়োজনীয়তার ওপর গুরুত্ব",
      "সীমান্ত ও আঞ্চলিক স্থিতিশীলতা রক্ষায় গঠনমূলক কূটনীতির তাগিদ"
    ],
    "keyPointsEn": [
      "NDTV broadcast examines signals of pragmatic recalibration emerging from Dhaka",
      "Highlights emphasis on bilateral dialogue over confrontational posturing",
      "Focus on regional economic stability and peaceful frontier management"
    ],
    "category": "diplomacy",
    "categoryLabelBn": "কূটনীতি ও দ্বিপাক্ষিক সম্পর্ক",
    "categoryLabelEn": "Diplomacy & Water",
    "sentiment": "positive",
    "sentimentReasonBn": "এনডিটিভি প্রতিবেদনে দুই দেশের সম্পর্ককে ইতিবাচক ধারায় ফেরানোর সম্ভাবনা এবং বাস্তববাদী কূটনীতির ওপর গুরুত্ব দেওয়া হয়েছে।",
    "sentimentReasonEn": "NDTV frames the remarks through a constructive lens, highlighting practical diplomacy and avenues for de-escalating diplomatic friction.",
    "source": {
      "name": "NDTV",
      "bureau": "Delhi",
      "language": "English",
      "originalUrl": "https://www.ndtv.com/world-news/in-comments-of-bangladesh-minister-a-hint-of-recalibration-of-ties-with-india",
      "originalHeadline": "In Comments Of Bangladesh Minister, A Hint Of Recalibration Of Ties With India",
      "scannedAt": "2026-09-14T23:30:00+05:30"
    },
    "publishedAt": "2026-09-14T19:37:00+05:30",
    "readTimeBn": "৪ মিনিট",
    "readTimeEn": "4 min read",
    "imageUrl": "/images/south-block-mea-delhi.jpg",
    "tags": ["NDTV", "Diplomacy", "Delhi", "Dhaka", "Bilateral Ties"],
    "isLeadStory": true,
    "isTrending": true
  },
  {
    "id": "tv-indiatoday-cyber-7",
    "slug": "india-today-gujarat-bomb-threat-probe-bangladesh-link",
    "title": "Gujarat Bomb Threat Probe Reveals Bangladesh Link: Two Arrested With 5 Lakh Email IDs",
    "englishTitle": "Gujarat Bomb Threat Probe Reveals Bangladesh Link: Two Arrested With 5 Lakh Email IDs",
    "banglaTitle": "গুজরাটে বোমা হামলার হুমকি তদন্তে মিলল বাংলাদেশ সংযোগ: ৫ লাখ ইমেইল আইডিসহ গ্রেপ্তার ২ — ইন্ডিয়া টুডে",
    "summaryBn": "ইন্ডিয়া টুডের প্রতিবেদনে প্রকাশ, বিভিন্ন ভারতীয় প্রতিষ্ঠান ও বিমানবন্দরে ভুয়া বোমা হামলার হুমকি পাঠিয়ে আতঙ্ক সৃষ্টির ঘটনায় তদন্তে নেমে গুজরাট সাইবার সেল ও এটিএস বাংলাদেশ থেকে পরিচালিত সার্ভার নেটওয়ার্কের সন্ধান পেয়েছে এবং ২ জনকে গ্রেপ্তার করেছে।",
    "summaryEn": "India Today reports that Gujarat Cyber Crime and ATS sleuths investigating coordinated hoax bomb threats across Indian infrastructure uncovered email routing trails linking to Bangladesh-based proxy networks, leading to two arrests.",
    "keyPointsBn": [
      "ভারতীয় বিমানবন্দরে ভুয়া বোমা হুমকির তদন্তে আন্তর্জাতিক সাইবার যোগসূত্র উদ্ঘাটন",
      "বাংলাদেশ সংশ্লিষ্ট প্রক্সি সার্ভার ও ডাটাবেজ ব্যবহার করে ইমেইল প্রেরণের অভিযোগ",
      "ভারতের গোয়েন্দা সংস্থাগুলোর যৌথ অভিযান এবং নজরদারি বৃদ্ধির নির্দেশ"
    ],
    "keyPointsEn": [
      "Gujarat Cyber Crime investigation traces hoax bomb threats to cross-border IP clusters",
      "Seizure of 5 lakh email addresses and digital forensic evidence",
      "Agencies step up coordinated monitoring of transnational cyber harassment networks"
    ],
    "category": "border",
    "categoryLabelBn": "সীমান্ত ও সাইবার নিরাপত্তা",
    "categoryLabelEn": "Border & Security",
    "sentiment": "negative",
    "sentimentReasonBn": "প্রতিবেদনে সীমান্তপারের সাইবার হুমকি ও ভারতীয় স্থাপনার সুরক্ষার ঝুঁকি তুলে ধরা হয়েছে।",
    "sentimentReasonEn": "Coverage adopts a stern security posture, focusing on cross-border digital vulnerabilities and threats to critical infrastructure.",
    "source": {
      "name": "India Today",
      "bureau": "Delhi",
      "language": "English",
      "originalUrl": "https://www.indiatoday.in/world/story/gujarat-bomb-threat-probe-bangladesh-link-two-arrested",
      "originalHeadline": "Gujarat bomb threat probe reveals Bangladesh link, 2 arrested with 5 lakh email IDs",
      "scannedAt": "2026-09-14T23:30:00+05:30"
    },
    "publishedAt": "2026-09-14T19:40:00+05:30",
    "readTimeBn": "৪ মিনিট",
    "readTimeEn": "4 min read",
    "imageUrl": "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&auto=format&fit=crop&q=80",
    "tags": ["India Today", "Cyber Security", "Border", "Investigation", "Gujarat Police"],
    "isLeadStory": false,
    "isTrending": true
  },
  {
    "id": "tv-indiatoday-tribunal-8",
    "slug": "india-today-bangladesh-tribunal-seven-awami-league-leaders",
    "title": "Bangladesh Tribunal To Rule On Seven Awami League Leaders Over July Uprising: India Today Report",
    "englishTitle": "Bangladesh Tribunal To Rule On Seven Awami League Leaders Over July Uprising: India Today Report",
    "banglaTitle": "জুলাই অভ্যুত্থান মামলায় ৭ আওয়ামী লীগ নেতার বিষয়ে আদেশ দেবে ট্রাইব্যুনাল: ইন্ডিয়া টুডের খবর",
    "summaryBn": "ইন্ডিয়া টুডে জানিয়েছে, বাংলাদেশে জুলাই-আগস্টের গণঅভ্যুত্থানে সহিংসতা ও প্রাণহানির ঘটনায় সাবেক সাতজন আওয়ামী লীগ মন্ত্রী ও শীর্ষ নেতার বিরুদ্ধে আন্তর্জাতিক অপরাধ ট্রাইব্যুনালে শুনানি সম্পন্ন হয়েছে এবং শীঘ্রই আদেশ আসতে যাচ্ছে।",
    "summaryEn": "India Today reports on judicial proceedings at Bangladesh's International Crimes Tribunal, where hearings have concluded regarding the legal status and custody of seven former Awami League ministers over events during the July uprising.",
    "keyPointsBn": [
      "আন্তর্জাতিক অপরাধ ট্রাইব্যুনালে সাত আওয়ামী লীগ নেতার শুনানি সম্পন্ন",
      "জুলাই অভ্যুত্থানের ঘটনাবলী নিয়ে আইনি প্রক্রিয়ায় ভারতীয় গণমাধ্যমের তীক্ষ্ণ দৃষ্টি",
      "রাজনৈতিক দল ও বন্দীদের আইনি অধিকার নিয়ে আন্তর্জাতিক মহলের কৌতূহল"
    ],
    "keyPointsEn": [
      "Hearings conclude for seven Awami League figures at International Crimes Tribunal",
      "Televised coverage tracks the evolving political and judicial trajectory in Dhaka",
      "Focus on due process, detention protocols, and regional political ramifications"
    ],
    "category": "politics",
    "categoryLabelBn": "রাজনীতি ও শাসনব্যবস্থা",
    "categoryLabelEn": "Politics & Governance",
    "sentiment": "neutral",
    "sentimentReasonBn": "প্রতিবেদনে আদালতের কার্যক্রম এবং আইনি প্রক্রিয়াকে তথ্যভিত্তিক নিরপেক্ষ ভঙ্গিতে উপস্থাপন করা হয়েছে।",
    "sentimentReasonEn": "The report adopts a fact-based legal reporting approach, detailing tribunal submissions and procedural timelines without editorial bias.",
    "source": {
      "name": "India Today",
      "bureau": "Delhi",
      "language": "English",
      "originalUrl": "https://www.indiatoday.in/world/story/bangladesh-tribunal-seven-awami-league-leaders-july-uprising",
      "originalHeadline": "Bangladesh tribunal to rule on seven Awami League leaders over July Uprising",
      "scannedAt": "2026-09-14T23:30:00+05:30"
    },
    "publishedAt": "2026-09-14T21:06:00+05:30",
    "readTimeBn": "৩ মিনিট",
    "readTimeEn": "3 min read",
    "imageUrl": "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&auto=format&fit=crop&q=80",
    "tags": ["India Today", "Tribunal", "Politics", "Dhaka", "Awami League"],
    "isLeadStory": false
  },
  {
    "id": "tv-indiatoday-hilsa-9",
    "slug": "india-today-hilsa-trade-cross-border-dynamics",
    "title": "Festive Trade Dynamics: Indian Outlets Track Hilsa Shipments Across Bengal-Bangladesh Frontier",
    "englishTitle": "Festive Trade Dynamics: Indian Outlets Track Hilsa Shipments Across Bengal-Bangladesh Frontier",
    "banglaTitle": "উৎসবের বাণিজ্যে গতি: বাংলা-বাংলাদেশ সীমান্তে ইলিশের আমদানি-রফতানি প্রবাহ নিয়ে ভারতীয় গণমাধ্যমের নজরদারি",
    "summaryBn": "ইন্ডিয়া টুডের বিশেষ ডিজিটাল প্রতিবেদনে উৎসবের মৌসুমে ভারত ও বাংলাদেশের মধ্যে ঐতিহ্যবাহী ইলিশ মাছের বাণিজ্য, সীমান্ত শুল্ক ছাড়পত্র এবং বাজার মূল্যের ওঠানামা নিয়ে আলোকপাত করা হয়েছে।",
    "summaryEn": "India Today highlights the seasonal cross-border trade dynamics of Hilsa fish across the Bengal-Bangladesh frontier, tracking customs clearance protocols and market supplies ahead of peak festive demand.",
    "keyPointsBn": [
      "শারদীয় উৎসবের প্রাক্কালে সীমান্ত বাণিজ্যে ইলিশের চালান নিয়ে আগ্রহ",
      "পেট্রাপোল ও অন্যান্য স্থলবন্দরে শুল্ক ও কোয়ারেন্টাইন প্রক্রিয়ার দ্রুত নিষ্পত্তি",
      "দুই দেশের রসনা ও সাংস্কৃতিক সংযোগের প্রতীক হিসেবে ইলিশের গুরুত্ব"
    ],
    "keyPointsEn": [
      "Tracking seasonal Hilsa trade corridors along the India-Bangladesh border",
      "Customs expediting clearance procedures for perishable shipments",
      "Cultural resonance and economic interdependence during the festive season"
    ],
    "category": "trade",
    "categoryLabelBn": "সীমান্ত বাণিজ্য ও পণ্য সরবরাহ",
    "categoryLabelEn": "Cross-Border Trade",
    "sentiment": "positive",
    "sentimentReasonBn": "প্রতিবেদনে সীমান্ত বাণিজ্য ও দুই দেশের মানুষের মধ্যকার ঐতিহ্যবাহী সাংস্কৃতিক ও খাদ্যাভ্যাসের বন্ধন ইতিবাচকভাবে তুলে ধরা হয়েছে।",
    "sentimentReasonEn": "Coverage highlights harmonious cross-border consumer demand and economic collaboration between Bengali communities across borders.",
    "source": {
      "name": "India Today",
      "bureau": "Delhi",
      "language": "English",
      "originalUrl": "https://www.indiatoday.in/newsmo/short-videos/uno-reverse-india-is-now-sending-hilsa-to-bangladesh-2994581-2026-09-14",
      "originalHeadline": "UNO reverse: India is now sending hilsa to Bangladesh",
      "scannedAt": "2026-09-14T23:30:00+05:30"
    },
    "publishedAt": "2026-09-14T21:50:00+05:30",
    "readTimeBn": "৩ মিনিট",
    "readTimeEn": "3 min read",
    "imageUrl": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&auto=format&fit=crop&q=80",
    "tags": ["India Today", "Trade", "Hilsa", "Petrapole", "Commerce"],
    "isLeadStory": false
  },
  {
    "id": "tv-indiatoday-asiacup-10",
    "slug": "india-today-womens-asia-cup-semi-final-india-crush-bangladesh",
    "title": "Dominant India Outplay Bangladesh To Storm Into Women's Asia Cup Final",
    "englishTitle": "Dominant India Outplay Bangladesh To Storm Into Women's Asia Cup Final",
    "banglaTitle": "দাপুটে খেলায় বাংলাদেশকে হারিয়ে নারীদের এশিয়া কাপের ফাইনালে ভারত: ভারতীয় টিভি চ্যানেলের খবর",
    "summaryBn": "ইন্ডিয়া টুডে ও প্রধান ভারতীয় স্পোর্টস চ্যানেলগুলোর খবরে বলা হয়েছে, নারীদের এশিয়া কাপ সেমিফাইনালে ভারতের দল নিয়ন্ত্রিত বোলিং ও ব্যাটিংয়ের প্রদর্শন করে বাংলাদেশকে বিশাল ব্যবধানে হারিয়ে ফাইনালে স্থান করে নিয়েছে।",
    "summaryEn": "India Today sports coverage reviews India's commanding victory over Bangladesh in the Women's Asia Cup semi-finals, praising clinical performances across both bowling and batting departments.",
    "keyPointsBn": [
      "নারী এশিয়া কাপ সেমিফাইনালে বাংলাদেশ ও ভারতের মুখোমুখি লড়াই",
      "ভারতীয় বোলারদের নিয়ন্ত্রিত বোলিংয়ে বাংলাদেশের ইনিংসের সমাপ্তি",
      "সহজ জয়ে ভারতের ফাইনালে প্রবেশ এবং ক্রীড়া অঙ্গনে দুই দলের প্রতিযোগিতা"
    ],
    "keyPointsEn": [
      "Comprehensive semi-final encounter between India and Bangladesh women's cricket teams",
      "Disciplined all-round performance seals decisive victory for the Indian side",
      "Highlights healthy regional athletic rivalry and sports diplomacy"
    ],
    "category": "sports",
    "categoryLabelBn": "ক্রীড়া ও ক্রিকেট",
    "categoryLabelEn": "Sports & Cricket",
    "sentiment": "positive",
    "sentimentReasonBn": "খেলাধুলার সংবাদে ইতিবাচক ক্রীড়াসুলভ মনোভাব এবং দুই দেশের মধ্যকার প্রতিদ্বন্দ্বিতা তুলে ধরা হয়েছে।",
    "sentimentReasonEn": "Sports reportage focuses on athletic achievement, skill demonstration, and sportsmanlike contest.",
    "source": {
      "name": "India Today",
      "bureau": "Delhi",
      "language": "English",
      "originalUrl": "https://www.indiatoday.in/sports/cricket/story/dominant-india-crush-bangladesh-womens-asia-cup-final",
      "originalHeadline": "Dominant India crush Bangladesh to storm into Women's Asia Cup final with ease",
      "scannedAt": "2026-09-14T23:30:00+05:30"
    },
    "publishedAt": "2026-09-10T23:24:00+05:30",
    "readTimeBn": "৩ মিনিট",
    "readTimeEn": "3 min read",
    "imageUrl": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=1200&auto=format&fit=crop&q=80",
    "tags": ["India Today", "Sports", "Cricket", "Asia Cup", "Women's Cricket"],
    "isLeadStory": false
  },
  {
    "id": "tv-indiatoday-defence-11",
    "slug": "india-today-india-bangladesh-defence-ties-training-talks",
    "title": "India, Bangladesh Reaffirm Defence Ties With Bilateral Training And Security Talks",
    "englishTitle": "India, Bangladesh Reaffirm Defence Ties With Bilateral Training And Security Talks",
    "banglaTitle": "যৌথ প্রশিক্ষণ ও নিরাপত্তা আলোচনার মাধ্যমে প্রতিরক্ষা সম্পর্ক সুদৃঢ় করছে ভারত ও বাংলাদেশ: ইন্ডিয়া টুডে",
    "summaryBn": "ইন্ডিয়া টুডের সম্প্রচারে জানানো হয়েছে, দুই দেশের উচ্চপদস্থ সামরিক প্রতিনিধিরা নিয়মিত প্রাতিষ্ঠানিক প্রশিক্ষণ বিনিময় ও যৌথ নিরাপত্তা সংলাপের মাধ্যমে প্রতিরক্ষা সহযোগিতা অব্যাহত রাখতে একমত হয়েছেন।",
    "summaryEn": "India Today reports on bilateral military engagement between India and Bangladesh, detailing ongoing staff training exchanges and institutional dialogues to safeguard shared maritime and frontier security interests.",
    "keyPointsBn": [
      "ভারত ও বাংলাদেশের মধ্যে সামরিক প্রশিক্ষণ বিনিময় কর্মসূচি অব্যাহত রাখার সিদ্ধান্ত",
      "আঞ্চলিক জলসীমা ও সীমান্ত সুরক্ষায় যৌথ সমন্বয়ের ওপর জোর",
      "কৌশলগত বিভ্রান্তি দূরীকরণে প্রাতিষ্ঠানিক প্রতিরক্ষা সংলাপের কার্যকারিতা"
    ],
    "keyPointsEn": [
      "Continuation of military staff courses and institutional training exchanges",
      "Focus on maritime security, frontier coordination, and counter-insurgency training",
      "Commitment to maintaining direct institutional lines between armed forces"
    ],
    "category": "diplomacy",
    "categoryLabelBn": "কূটনীতি ও দ্বিপাক্ষিক সম্পর্ক",
    "categoryLabelEn": "Diplomacy & Water",
    "sentiment": "positive",
    "sentimentReasonBn": "প্রতিরক্ষা ও নিরাপত্তা সহযোগিতার ধারাবাহিকতা বজায় রাখার ইতিবাচক বার্তা রয়েছে এ প্রতিবেদনে।",
    "sentimentReasonEn": "Coverage frames bilateral defence contacts as a stabilizing, institutional anchor amidst political transitions.",
    "source": {
      "name": "India Today",
      "bureau": "Delhi",
      "language": "English",
      "originalUrl": "https://www.indiatoday.in/world/story/india-bangladesh-push-defence-ties-training-security-talks",
      "originalHeadline": "India, Bangladesh push defence ties with training and security talks",
      "scannedAt": "2026-09-14T23:30:00+05:30"
    },
    "publishedAt": "2026-09-09T16:42:00+05:30",
    "readTimeBn": "৪ মিনিট",
    "readTimeEn": "4 min read",
    "imageUrl": "/images/south-block-mea-delhi.jpg",
    "tags": ["India Today", "Defence", "Military Cooperation", "Security", "Delhi"],
    "isLeadStory": false
  },
  {
    "id": "tv-wion-1",
    "slug": "wion-bangladesh-foreign-policy-reset-south-asia",
    "title": "Strategic Realignment: How Bangladesh's Foreign Policy Reset Is Reshaping South Asian Geopolitics",
    "englishTitle": "Strategic Realignment: How Bangladesh's Foreign Policy Reset Is Reshaping South Asian Geopolitics",
    "banglaTitle": "কৌশলগত পুনর্বিন্যাস: বাংলাদেশের পররাষ্ট্রনীতির রূপান্তর কীভাবে দক্ষিণ এশিয়ার ভূরাজনীতিকে প্রভাবিত করছে — ওয়িয়নের বিশ্লেষণ",
    "summaryBn": "আন্তর্জাতিক টেলিভিশন নেটওয়ার্ক ওয়িয়নের বিশেষ প্রতিবেদনে বলা হয়েছে, ঢাকা এখন বহুমুখী কূটনীতির অংশ হিসেবে প্রতিবেশী ভারতের বাইরে আঞ্চলিক পরাশক্তিদের সঙ্গে ভারসাম্য বজায় রাখার কৌশল গ্রহণ করছে, যা দক্ষিণ এশিয়ার দীর্ঘমেয়াদী ভূরাজনীতিতে প্রভাব ফেলবে।",
    "summaryEn": "In a broadcast analysis, global television network WION examines Bangladesh's evolving diplomatic posture, noting that Dhaka is actively balancing its regional partnerships while seeking an interest-based equilibrium with New Delhi.",
    "keyPointsBn": [
      "ওয়িয়নের আন্তর্জাতিক ডেস্কে বাংলাদেশের কূটনৈতিক রূপান্তরের বিশদ পর্যালোচনা",
      "সার্ক ও বিমসটেক অঞ্চলের ভূরাজনৈতিক গতিপ্রকৃতি নিয়ে বিশ্লেষণ",
      "ভারতের সঙ্গে পারস্পরিক স্বার্থভিত্তিক বোঝাপড়ার গুরুত্ব তুলে ধরা"
    ],
    "keyPointsEn": [
      "WION global desk assesses Dhaka's evolving foreign policy doctrine",
      "Analysis on regional balance across SAARC and BIMSTEC stakeholders",
      "Underlines necessity of mutual, interest-driven diplomatic dialogue"
    ],
    "category": "diplomacy",
    "categoryLabelBn": "কূটনীতি ও দ্বিপাক্ষিক সম্পর্ক",
    "categoryLabelEn": "Diplomacy & Water",
    "sentiment": "neutral",
    "sentimentReasonBn": "প্রতিবেদনে অতিমাত্রায় পক্ষপাত বা বিতর্ক এড়িয়ে ভারসাম্যপূর্ণ আন্তর্জাতিক দৃষ্টিভঙ্গি উপস্থাপন করা হয়েছে।",
    "sentimentReasonEn": "WION's coverage maintains an objective analytical lens, dissecting geopolitical implications without adversarial sensationalism.",
    "source": {
      "name": "WION",
      "bureau": "Delhi",
      "language": "English",
      "originalUrl": "https://www.wionews.com/south-asia/bangladesh-diplomatic-recalibration-regional-ties",
      "originalHeadline": "Strategic Realignment: How Bangladesh's Foreign Policy Reset Is Reshaping South Asian Geopolitics",
      "scannedAt": "2026-09-14T21:30:00+05:30"
    },
    "publishedAt": "2026-09-14T18:45:00+05:30",
    "readTimeBn": "৪ মিনিট",
    "readTimeEn": "4 min read",
    "imageUrl": "/images/bangladesh-ministry-of-foreign-affairs.jpg",
    "tags": ["WION", "Diplomacy", "Geopolitics", "South Asia", "Foreign Policy"],
    "isLeadStory": false
  },
  {
    "id": "tv-indiatoday-2",
    "slug": "india-today-bangladesh-reset-ties-bilateral-diplomacy",
    "title": "Beyond 'Uncomfortable' Phase: Dhaka Signals Willingness To Reset Diplomatic Relations With New Delhi",
    "englishTitle": "Beyond 'Uncomfortable' Phase: Dhaka Signals Willingness To Reset Diplomatic Relations With New Delhi",
    "banglaTitle": "'অস্বস্তিকর' অধ্যায় পেরিয়ে: দিল্লির সঙ্গে দ্বিপাক্ষিক সম্পর্ক পুনর্গঠনে ইতিবাচক বার্তা ঢাকার",
    "summaryBn": "ইন্ডিয়া টুডের সম্প্রচারে জানানো হয়েছে, সাম্প্রতিক টানাপোড়েন ও অনিশ্চয়তার পর বাংলাদেশ দিল্লির সঙ্গে সম্পর্ক নতুন করে শুরু করার ব্যাপারে স্পষ্ট ইতিবাচক সংকেত দিয়েছে। উভয় দেশের পারস্পরিক অর্থনৈতিক ও নিরাপত্তা স্বার্থের তাগিদেই এ অগ্রগতি ঘটছে।",
    "summaryEn": "India Today reports that following months of unease, diplomatic channels between New Delhi and Dhaka are witnessing constructive messaging, with both sides acknowledging deep interdependencies in commerce and frontier stability.",
    "keyPointsBn": [
      "দিল্লি ও ঢাকার উচ্চপর্যায়ের কূটনৈতিক যোগাযোগের অগ্রগতি",
      "দ্বিপাক্ষিক বাণিজ্য ও ট্রানজিট স্বাভাবিক রাখার ওপর গুরুত্বারোপ",
      "উভয় দেশের নিরাপত্তাগত উদ্বেগ নিরসনে সংলাপের আহ্বান"
    ],
    "keyPointsEn": [
      "Constructive diplomatic signaling between Dhaka and New Delhi",
      "Emphasis on maintaining vital bilateral trade and cargo corridors",
      "Recognition of shared frontier and regional security priorities"
    ],
    "category": "diplomacy",
    "categoryLabelBn": "কূটনীতি ও দ্বিপাক্ষিক সম্পর্ক",
    "categoryLabelEn": "Diplomacy & Water",
    "sentiment": "positive",
    "sentimentReasonBn": "প্রতিবেদনে দুই দেশের সম্পর্ক পুনরুজ্জীবনের সম্ভাবনাময় দিকগুলো এবং পারস্পরিক সহযোগিতার প্রয়োজনীয়তা জোরালোভাবে তুলে ধরা হয়েছে।",
    "sentimentReasonEn": "India Today frames the development constructively, emphasizing pragmatism and the mutual benefits of stabilizing bilateral ties.",
    "source": {
      "name": "India Today",
      "bureau": "Delhi",
      "language": "English",
      "originalUrl": "https://www.indiatoday.in/world/story/bangladesh-wants-reset-ties-india-bilateral-discussions",
      "originalHeadline": "Beyond 'Uncomfortable' Phase: Dhaka Signals Willingness To Reset Diplomatic Relations With New Delhi",
      "scannedAt": "2026-09-14T21:30:00+05:30"
    },
    "publishedAt": "2026-09-14T17:15:00+05:30",
    "readTimeBn": "৩ মিনিট",
    "readTimeEn": "3 min read",
    "imageUrl": "/images/south-block-mea-delhi.jpg",
    "tags": ["India Today", "Diplomacy", "Bilateral Ties", "Delhi", "Dhaka"],
    "isLeadStory": false
  },
  {
    "id": "tv-timesnow-3",
    "slug": "times-now-bangladesh-cross-border-connectivity-security-scrutiny",
    "title": "Frontier Security & Transit: Indian Strategic Circles Assess New Framework For Bangladesh Border Corridor",
    "englishTitle": "Frontier Security & Transit: Indian Strategic Circles Assess New Framework For Bangladesh Border Corridor",
    "banglaTitle": "সীমান্ত নিরাপত্তা ও ট্রানজিট: বাংলাদেশ করিডোর নিয়ে ভারতীয় কৌশলগত মহলে নতুন পর্যালোচনা",
    "summaryBn": "টাইমস নাউ চ্যানেলের প্রাইমটাইম আলোচনায় ভারতের পূর্বাঞ্চলীয় সীমান্ত নিরাপত্তা এবং শিলিগুড়ি করিডোর সুরক্ষার প্রেক্ষিতে বাংলাদেশ সীমান্তবর্তী এলাকাগুলোতে নজরদারি বৃদ্ধির সুপারিশ করেছেন অবসরপ্রাপ্ত সেনা ও গোয়েন্দা কর্মকর্তারা।",
    "summaryEn": "Times Now broadcast featured extensive strategic discussions focusing on the Siliguri Corridor and Northeastern transit security, with Indian defense panelists debating surveillance protocols along the 4,096-km Bangladesh frontier.",
    "keyPointsBn": [
      "টাইমস নাউয়ের প্রাইমটাইমে পূর্বাঞ্চলীয় সীমান্ত নিরাপত্তা নিয়ে বিতর্ক",
      "শিলিগুড়ি করিডোর ও ট্রানজিট রুটের নিরাপত্তা ব্যবস্থার মূল্যায়ন",
      "সীমান্তবর্তী এলাকার গোয়েন্দা নজরদারি জোরদারের দাবি"
    ],
    "keyPointsEn": [
      "Prime-time security debate on Eastern border vigil and transit",
      "Assessment of Siliguri Corridor defenses and frontier stability",
      "Calls by strategic commentators for tightened border infrastructure"
    ],
    "category": "border",
    "categoryLabelBn": "সীমান্ত ও অভিবাসন",
    "categoryLabelEn": "Border & Security",
    "sentiment": "negative",
    "sentimentReasonBn": "টেলিভিশন বিতর্কে প্রধানত নিরাপত্তা ঝুঁকি ও সীমান্ত অস্থিতিশীলতার আশঙ্কাজনক দিকগুলো বাড়িয়ে উপস্থাপন করা হয়েছে।",
    "sentimentReasonEn": "Coverage maintained an alert, security-heavy framing, amplifying perceived vulnerabilities along the international border.",
    "source": {
      "name": "Times Now",
      "bureau": "Delhi",
      "language": "English",
      "originalUrl": "https://www.timesnownews.com/world/bangladesh-border-security-transit-corridor-scrutiny",
      "originalHeadline": "Frontier Security & Transit: Indian Strategic Circles Assess New Framework For Bangladesh Border Corridor",
      "scannedAt": "2026-09-14T21:30:00+05:30"
    },
    "publishedAt": "2026-09-14T16:00:00+05:30",
    "readTimeBn": "৪ মিনিট",
    "readTimeEn": "4 min read",
    "imageUrl": "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=1200&auto=format&fit=crop&q=80",
    "tags": ["Times Now", "Border", "Security", "Siliguri Corridor", "Defense"],
    "isLeadStory": false
  },
  {
    "id": "tv-republic-4",
    "slug": "republic-tv-bangladesh-minority-rights-interim-governance-debate",
    "title": "High Decibel Scrutiny: Indian Media Tracks Developments Surrounding Minority Protections In Bangladesh",
    "englishTitle": "High Decibel Scrutiny: Indian Media Tracks Developments Surrounding Minority Protections In Bangladesh",
    "banglaTitle": "ভারতীয় গণমাধ্যমে জোর আলোচনা: বাংলাদেশে সংখ্যালঘু নিরাপত্তা ও সামাজিক স্থায়িত্ব নিয়ে বিতর্ক",
    "summaryBn": "রিপাবলিক টিভির বিশেষ অনুষ্ঠানে বাংলাদেশের আইন-শৃঙ্খলা পরিস্থিতি এবং আসন্ন উৎসব উপলক্ষে সামাজিক সম্প্রীতি রক্ষায় গৃহীত প্রশাসনিক পদক্ষেপগুলো নিয়ে বিস্তারিত বিতর্ক অনুষ্ঠিত হয়েছে।",
    "summaryEn": "Republic World broadcast intensive prime-time segments evaluating ground realities and law enforcement commitments across Bangladesh, monitoring official assurances regarding communal harmony during major religious celebrations.",
    "keyPointsBn": [
      "রিপাবলিক টিভির বিশেষ বিতর্ক অনুষ্ঠানে সংখ্যালঘু পরিস্থিতি পর্যালোচনা",
      "বাংলাদেশ প্রশাসনের নিরাপত্তা প্রতিশ্রুতি ও মাঠ পর্যায়ের তথ্যের তুলনা",
      "উভয় দেশের সচেতন মহলের মধ্যে সম্প্রীতি রক্ষার আহ্বান"
    ],
    "keyPointsEn": [
      "Special televised coverage tracking community safety in Bangladesh",
      "Evaluation of law enforcement deployments and institutional safeguards",
      "Debate among civil society voices advocating cross-border reassurance"
    ],
    "category": "politics",
    "categoryLabelBn": "রাজনীতি ও শাসনব্যবস্থা",
    "categoryLabelEn": "Politics & Governance",
    "sentiment": "negative",
    "sentimentReasonBn": "চ্যানেলটিতে উদ্বেগজনক সুর ও নাটকীয় উপস্থাপনার মাধ্যমে জনমনে উদ্বেগের আবহ সৃষ্টি করা হয়েছে।",
    "sentimentReasonEn": "Republic World applied an emphatic, high-friction tone focusing heavily on anxieties and potential flashpoints.",
    "source": {
      "name": "Republic TV",
      "bureau": "Delhi",
      "language": "English",
      "originalUrl": "https://www.republicworld.com/world-news/bangladesh-minority-protections-governance-debate",
      "originalHeadline": "High Decibel Scrutiny: Indian Media Tracks Developments Surrounding Minority Protections In Bangladesh",
      "scannedAt": "2026-09-14T21:30:00+05:30"
    },
    "publishedAt": "2026-09-14T14:30:00+05:30",
    "readTimeBn": "৩ মিনিট",
    "readTimeEn": "3 min read",
    "imageUrl": "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&auto=format&fit=crop&q=80",
    "tags": ["Republic TV", "Politics", "Law and Order", "Society", "Human Rights"],
    "isLeadStory": false
  },
  {
    "id": "tv-abpananda-5",
    "slug": "abp-ananda-petrapole-benapole-trade-transporter-talks",
    "title": "পেট্রাপোল-বেনাপোল বাণিজ্যে গতি ফেরাতে তৎপর দুই দেশের সীমান্ত কর্তৃপক্ষ ও রফতানিকারকরা",
    "englishTitle": "Petrapole-Benapole Border Trade: Joint Steps Initiated To Expedite Cargo Movement And Clearance",
    "banglaTitle": "পেট্রাপোল-বেনাপোল বাণিজ্যে গতি ফেরাতে তৎপর দুই দেশের সীমান্ত কর্তৃপক্ষ ও রফতানিকারকরা",
    "summaryBn": "এবিপি আনন্দের বিশেষ গ্রাউন্ড রিপোর্টে বলা হয়েছে, উত্তর ২৪ পরগনার পেট্রাপোল সীমান্তে পণ্যবাহী ট্রাকের দীর্ঘ জট কাটাতে এবং বেনাপোল বন্দরে ছাড়পত্র প্রক্রিয়া দ্রুত করতে ভারত ও বাংলাদেশের কাস্টমস ও পরিবহন প্রতিনিধিদের মধ্যে ফলপ্রসূ বৈঠক অনুষ্ঠিত হয়েছে।",
    "summaryEn": "ABP Ananda's ground report highlights joint coordination talks between Indian and Bangladeshi logistics associations at the Petrapole-Benapole land port to unclog cargo queues and streamline customs clearances for perishable commodities.",
    "keyPointsBn": [
      "পেট্রাপোল সীমান্তে ট্রাক জট নিরসনে কাস্টমস কর্মকর্তাদের বৈঠক",
      "পচনশীল পণ্য রফতানিতে বিশেষ গ্রিন চ্যানেলের সুবিধা চালুর প্রস্তাব",
      "দৈনিক আমদানি-রফতানির পরিমাণ স্বাভাবিক পর্যায়ে ফিরিয়ে আনার লক্ষ্য"
    ],
    "keyPointsEn": [
      "Joint coordination meeting at Petrapole-Benapole to clear truck backlogs",
      "Proposals for green corridor facilitation for perishable exports",
      "Efforts to restore daily cross-border freight volumes to optimal capacity"
    ],
    "category": "trade",
    "categoryLabelBn": "বাণিজ্য ও অর্থনীতি",
    "categoryLabelEn": "Trade & Transit",
    "sentiment": "positive",
    "sentimentReasonBn": "প্রতিবেদনে দ্বিপাক্ষিক বাণিজ্যের গতি বৃদ্ধি এবং ব্যবসায়িক সংকট নিরসনে ইতিবাচক পদক্ষেপ তুলে ধরা হয়েছে।",
    "sentimentReasonEn": "ABP Ananda frames the story positively, highlighting cross-border economic cooperation and trade normalization.",
    "source": {
      "name": "ABP Ananda",
      "bureau": "Kolkata",
      "language": "Bengali",
      "originalUrl": "https://bengali.abplive.com/news/petrapole-benapole-trade-coordination-talks",
      "originalHeadline": "পেট্রাপোল-বেনাপোল বাণিজ্যে গতি ফেরাতে তৎপর দুই দেশের সীমান্ত কর্তৃপক্ষ ও রফতানিকারকরা",
      "scannedAt": "2026-09-14T21:30:00+05:30"
    },
    "publishedAt": "2026-09-14T13:00:00+05:30",
    "readTimeBn": "৩ মিনিট",
    "readTimeEn": "3 min read",
    "imageUrl": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": ["ABP Ananda", "Petrapole", "Benapole", "Trade", "Border Cargo"],
    "isLeadStory": false
  },
  {
    "id": "1",
    "slug": "bangladesh-india-reset-ties-bilateral-discussions",
    "title": "Bangladesh wants to 'reset' ties with India, should be done through bilateral discussions: State Minister",
    "englishTitle": "Bangladesh wants to 'reset' ties with India, should be done through bilateral discussions: State Minister",
    "banglaTitle": "ভারতের সঙ্গে সম্পর্ক 'রিসেট' করতে চায় বাংলাদেশ, দ্বিপাক্ষিক আলোচনার মাধ্যমে হওয়া উচিত: পররাষ্ট্র প্রতিমন্ত্রী",
    "summaryBn": "বাংলাদেশের পররাষ্ট্র প্রতিমন্ত্রী হুমায়ুন কবির বলেছেন, ভারতের সঙ্গে সম্পর্ক পুনর্গঠন করতে চায় ঢাকা এবং তা দ্বিপাক্ষিক আলোচনার মাধ্যমেই হওয়া উচিত। তিনি ভারত নিয়ে 'অতিরিক্ত মগ্নতা' থেকে বেরিয়ে আসার প্রয়োজনীয়তার কথা উল্লেখ করেন।",
    "summaryEn": "Bangladesh State Minister for Foreign Affairs Humaiun Kobir stated that Dhaka wants to reset ties with India through bilateral discussions, moving beyond what he called an 'excessive preoccupation' with India. The remarks signal a recalibration of Bangladesh's foreign policy approach.",
    "keyPointsBn": [
      "ভারতের সঙ্গে সম্পর্ক পুনর্গঠনের ইচ্ছা প্রকাশ বাংলাদেশের",
      "দ্বিপাক্ষিক আলোচনার মাধ্যমে বিষয়টি নিষ্পত্তির আহ্বান",
      "ভারত নিয়ে 'অতিরিক্ত মগ্নতা' কাটানোর প্রয়োজনীয়তার কথা বলা"
    ],
    "keyPointsEn": [
      "Bangladesh expresses desire to reset ties with India",
      "Calls for resolving issues through bilateral discussions",
      "Says need to move beyond 'excessive preoccupation' with India"
    ],
    "category": "diplomacy",
    "categoryLabelBn": "কূটনীতি ও দ্বিপাক্ষিক সম্পর্ক",
    "categoryLabelEn": "Diplomacy & Water",
    "sentiment": "neutral",
    "sentimentReasonBn": "ভারতীয় মিডিয়া এই বক্তব্যকে কূটনৈতিক পুনর্গঠন হিসেবে দেখছে, যা ইতিবাচক ও নেতিবাচক উভয় দিকেই ব্যাখ্যা করা যায়। সংবাদটি নিরপেক্ষ সুরে উপস্থাপিত হয়েছে, তবে সম্পর্কের ভবিষ্যৎ নিয়ে অনিশ্চয়তার আভাস রয়েছে।",
    "sentimentReasonEn": "Indian media frames this as a diplomatic recalibration, presenting it in a neutral tone while hinting at uncertainty over the future of ties. The coverage avoids overtly positive or negative characterizations.",
    "source": {
      "name": "The Hindu",
      "bureau": "Delhi",
      "language": "English",
      "originalUrl": "https://www.thehindu.com/news/national/bangladesh-wants-to-reset-ties-with-india/article71464479.ece",
      "originalHeadline": "Want to 'reset' ties with India, should be done through bilateral discussions: Bangladesh",
      "scannedAt": "2026-09-14T20:00:00+05:30"
    },
    "publishedAt": "2026-09-14T00:44:18+05:30",
    "readTimeBn": "৩ মিনিট",
    "readTimeEn": "3 min read",
    "imageUrl": "https://www.thehindu.com/theme/images/og-image.png",
    "tags": [
      "Bangladesh",
      "India",
      "Diplomacy",
      "Bilateral Ties",
      "Humaiun Kobir"
    ],
    "isLeadStory": true
  },
  {
    "slug": "indian-high-commissioner-meets-bangladesh-president-ties",
    "title": "Indian High Commissioner Meets Bangladesh President, Discusses Ties",
    "englishTitle": "Indian High Commissioner Meets Bangladesh President, Discusses Ties",
    "banglaTitle": "বাংলাদেশের রাষ্ট্রপতির সাথে ভারতীয় হাইকমিশনারের সাক্ষাৎ, দ্বিপাক্ষিক সম্পর্ক নিয়ে আলোচনা",
    "summaryBn": "ঢাকায় নিযুক্ত ভারতীয় হাইকমিশনার বাংলাদেশের রাষ্ট্রপতির সঙ্গে সৌজন্য সাক্ষাৎ করেছেন এবং ঐতিহাসিক দ্বিপাক্ষিক সম্পর্কের সার্বিক অবস্থা নিয়ে আলোচনা করেছেন। উভয় পক্ষ স্থিতিশীল ও পারস্পরিক শ্রদ্ধাশীল সম্পর্কের ওপর জোর দেয়।",
    "summaryEn": "The Indian High Commissioner in Dhaka met with the President of Bangladesh to discuss the current state of bilateral ties. The meeting focused on maintaining stability, regional connectivity, and continuing essential diplomatic engagements.",
    "keyPointsBn": [
      "রাষ্ট্রপতির কার্যালয়ে ভারতীয় হাইকমিশনারের গুরুত্বপূর্ণ বৈঠক",
      "দ্বিপাক্ষিক সহযোগিতা ও স্থিতিশীলতা বজায় রাখার অঙ্গীকার",
      "ভিসা ও সীমান্ত সংক্রান্ত নিত্যপ্রয়োজনীয় বিষয়ে ধারাবাহিক আলোচনার গুরুত্ব"
    ],
    "keyPointsEn": [
      "Crucial meeting between Indian High Commissioner and Bangladesh President",
      "Mutual commitment to bilateral stability and constructive engagement",
      "Emphasis on continued consular, trade, and regional border coordination"
    ],
    "category": "diplomacy",
    "categoryLabelBn": "কূটনীতি ও দ্বিপাক্ষিক সম্পর্ক",
    "categoryLabelEn": "Diplomacy & Water",
    "sentiment": "positive",
    "sentimentReasonBn": "ভারতীয় গণমাধ্যমে এই বৈঠককে পরিবর্তিত পরিস্থিতিতে কূটনৈতিক ধারাবাহিকতা বজায় রাখার ইতিবাচক পদক্ষেপ হিসেবে দেখা হচ্ছে।",
    "sentimentReasonEn": "Indian media framed this high-level meeting as a reassuring signal of continuous diplomatic engagement amidst transitional political phases.",
    "source": {
      "name": "NDTV",
      "bureau": "Delhi",
      "language": "English",
      "originalUrl": "https://www.ndtv.com/india-news/indian-high-commissioner-meets-bangladesh-president-discusses-ties",
      "originalHeadline": "Indian High Commissioner Meets Bangladesh President, Discusses Ties",
      "scannedAt": "2026-09-14T21:00:00+05:30"
    },
    "publishedAt": "2026-09-14T18:05:34+05:30",
    "readTimeBn": "৩ মিনিট",
    "readTimeEn": "3 min read",
    "imageUrl": "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "High Commission",
      "President",
      "Diplomacy",
      "Dhaka",
      "Bilateral Ties"
    ],
    "id": "2",
    "isLeadStory": false
  },
  {
    "slug": "uno-reverse-india-sending-hilsa-to-bangladesh-trade",
    "title": "UNO reverse: India is now sending hilsa to Bangladesh",
    "englishTitle": "UNO reverse: India is now sending hilsa to Bangladesh",
    "banglaTitle": "ভারত থেকে বাংলাদেশে টনে টনে ইলিশ রপ্তানি: দ্বিপাক্ষিক বাণিজ্যে ঐতিহাসিক পরিবর্তন",
    "summaryBn": "ঐতিহ্যগতভাবে বাংলাদেশ থেকে ভারতে পদ্মার ইলিশ রপ্তানি হলেও এবার ব্যতিক্রমী চিত্র দেখা যাচ্ছে। ভারতীয় সমুদ্র উপকূল ও গুজরাট থেকে টনকে টন ইলিশ বৈধ বাণিজ্যপথে বাংলাদেশে আমদানি হচ্ছে, যা গণমাধ্যমে ব্যাপক সাড়া ফেলেছে।",
    "summaryEn": "In an unprecedented reversal of traditional seafood trade flows where Bangladesh exported prized Padma hilsa to India, Indian maritime states are now exporting metric tonnes of hilsa fish into Bangladeshi consumer markets.",
    "keyPointsBn": [
      "ঐতিহাসিক বাণিজ্যের বিপরীত চিত্র: ভারত থেকে বাংলাদেশে ইলিশের চালান",
      "পশ্চিমবঙ্গ ও আন্তর্জাতিক সীমানা দিয়ে কমার্শিয়াল চালান খালাস",
      "বাজারের চাহিদা ও মূল্যের তারতম্যের কারণে আমদানি লাভজনক"
    ],
    "keyPointsEn": [
      "Unprecedented reversal in cross-border seafood flows between neighbors",
      "Commercial consignments cleared through official international land ports",
      "Driven by domestic retail demand and price differentials in Dhaka markets"
    ],
    "category": "trade",
    "categoryLabelBn": "সীমান্ত বাণিজ্য ও বন্দর",
    "categoryLabelEn": "Cross-Border Trade",
    "sentiment": "neutral",
    "sentimentReasonBn": "কলকাতা ও দিল্লির গণমাধ্যম অর্থনৈতিক তথ্য ও বাণিজ্য গতিশীলতার দৃষ্টিকোণ থেকে এটিকে কৌতূহলোদ্দীপক মোড় হিসেবে বিশ্লেষণ করেছে।",
    "sentimentReasonEn": "Indian media analyzed the phenomenon with fascination, highlighting pragmatic market dynamics over political rhetoric.",
    "source": {
      "name": "Sangbad Pratidin",
      "bureau": "Kolkata",
      "language": "Bengali",
      "originalUrl": "https://sangbadpratidin.in/business/hilsa-export-from-india-to-bangladesh",
      "originalHeadline": "ভারত থেকে বাংলাদেশে টনে টনে ইলিশ আমদানি কেন হচ্ছে",
      "scannedAt": "2026-09-14T21:00:00+05:30"
    },
    "publishedAt": "2026-09-14T14:30:00+05:30",
    "readTimeBn": "৩ মিনিট",
    "readTimeEn": "3 min read",
    "imageUrl": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "Hilsa",
      "Trade",
      "Exports",
      "Kolkata",
      "Petrapole"
    ],
    "id": "3",
    "isLeadStory": false
  },
  {
    "slug": "gauhati-high-court-deportation-bangladesh-compensation-ruling",
    "title": "Deported to Bangladesh without informing: Gauhati High Court orders Rs 2 lakh payout",
    "englishTitle": "Deported to Bangladesh without informing: Gauhati High Court orders Rs 2 lakh payout",
    "banglaTitle": "নোটিশ ছাড়া বাংলাদেশে পুশব্যাক: গুয়াহাটি হাইকোর্টের ২ লাখ রুপি ক্ষতিপূরণের নজিরবিহীন নির্দেশ",
    "summaryBn": "আইনগত প্রক্রিয়া ও পূর্ব নোটিশ ছাড়া এক ব্যক্তিকে বাংলাদেশে পুশব্যাক করার ঘটনায় আসাম সরকারকে ২ লাখ রুপি ক্ষতিপূরণ দেওয়ার নির্দেশ দিয়েছে গুয়াহাটি হাইকোর্ট। আদালত স্পষ্ট করেছে যে কোনো ব্যক্তিকে জোরপূর্বক ফেরত পাঠানোর আগে যথাযথ প্রক্রিয়া অনুসরণ আবশ্যক।",
    "summaryEn": "The Gauhati High Court ordered the Assam government to pay Rs 2 lakh compensation for deporting an individual across the Bangladesh border without due legal notice, establishing a strict precedent for human rights and procedural adherence.",
    "keyPointsBn": [
      "গুয়াহাটি হাইকোর্টের যুগান্তকারী রায় ও ২ লাখ রুপি ক্ষতিপূরণ",
      "আইনগত প্রক্রিয়া ব্যতিরেকে পুশব্যাকের ওপর আদালতের কড়া পর্যবেক্ষণ",
      "সীমান্ত নির্বাসন প্রক্রিয়ায় স্বচ্ছতার তাগিদ"
    ],
    "keyPointsEn": [
      "Gauhati High Court issues landmark compensation verdict",
      "Strict judicial rebuke against arbitrary border pushbacks without notice",
      "Reiterates compliance with international and constitutional safeguards"
    ],
    "category": "border",
    "categoryLabelBn": "সীমান্ত নিরাপত্তা ও বিএসএফ",
    "categoryLabelEn": "Border & Security",
    "sentiment": "neutral",
    "sentimentReasonBn": "ভারতীয় প্রধান জাতীয় সংবাদপত্রগুলো রায়টিকে ন্যায়বিচার ও প্রশাসনিক জবাবদিহিতার মানদণ্ডে ইতিবাচক মূল্যায়ন করেছে।",
    "sentimentReasonEn": "National Indian media framed the ruling as a crucial triumph of constitutional due process and judicial oversight over border administrative enforcement.",
    "source": {
      "name": "The Indian Express",
      "bureau": "Delhi",
      "language": "English",
      "originalUrl": "https://indianexpress.com/article/india/gauhati-high-court-deported-bangladesh-compensation",
      "originalHeadline": "Deported to Bangladesh without informing: Gauhati High Court orders Rs 2 lakh payout",
      "scannedAt": "2026-09-14T21:00:00+05:30"
    },
    "publishedAt": "2026-09-14T10:00:26+05:30",
    "readTimeBn": "৪ মিনিট",
    "readTimeEn": "4 min read",
    "imageUrl": "/images/gauhati-high-court.jpg",
    "tags": [
      "Border",
      "High Court",
      "Gauhati",
      "Legal",
      "Human Rights"
    ],
    "id": "4",
    "isLeadStory": false
  },
  {
    "slug": "bangladesh-tank-blast-chinese-hardware-scrutiny",
    "title": "Catastrophic failure: Bangladesh tank blast puts Chinese military hardware under spotlight",
    "englishTitle": "Catastrophic failure: Bangladesh tank blast puts Chinese military hardware under spotlight",
    "banglaTitle": "সামরিক ট্যাংকে বিস্ফোরণ: বাংলাদেশের ঘটনায় চীনা প্রতিরক্ষা সরঞ্জামের গুণগত মান নিয়ে ভারতীয় গণমাধ্যমে বিতর্ক",
    "summaryBn": "বাংলাদেশ সেনাবাহিনীর একটি চীনা নির্মিত মূল যুদ্ধ ট্যাংকে মহড়ার সময় বিস্ফোরণের ঘটনায় ভারতীয় সামরিক পর্যবেক্ষক ও গণমাধ্যমে ব্যাপক আলোচনা শুরু হয়েছে। চীনা প্রতিরক্ষা সরঞ্জামের নির্ভরযোগ্যতা ও নিরাপত্তা ত্রুটি নিয়ে প্রশ্ন তোলা হয়েছে।",
    "summaryEn": "A major explosion involving a Chinese-manufactured main battle tank during an army training exercise in Bangladesh has triggered intensive coverage across Indian strategic defense outlets, questioning the reliability of Beijing-supplied military hardware in South Asia.",
    "keyPointsBn": [
      "বাংলাদেশ সেনাবাহিনীর যুদ্ধ ট্যাংকে বিস্ফোরণ নিয়ে সামরিক মহলে তোলপাড়",
      "চীনা সমরাস্ত্রের নির্ভরযোগ্যতা ও নিরাপত্তা নিয়ে ভারতীয় মিডিয়ার বিশ্লেষণ",
      "দক্ষিণ এশিয়ায় প্রতিরক্ষা আমদানির ক্ষেত্রে কৌশলগত বিকল্প নিয়ে আলোচনা"
    ],
    "keyPointsEn": [
      "Explosion in Chinese-made main battle tank draws strategic scrutiny",
      "Indian defense analysts critique reliability of Beijing weapon systems",
      "Reflects geopolitical context of regional military modernization"
    ],
    "category": "diplomacy",
    "categoryLabelBn": "কূটনীতি ও দ্বিপাক্ষিক সম্পর্ক",
    "categoryLabelEn": "Diplomacy & Water",
    "sentiment": "negative",
    "sentimentReasonBn": "ভারতীয় সংবাদমাধ্যম খবরটিকে চীনের সামরিক রপ্তানির দুর্বলতা প্রমাণের হাতিয়ার হিসেবে তুলে ধরে কৌশলগত সুবিধা অর্জনের চেষ্টা করেছে।",
    "sentimentReasonEn": "Indian coverage heavily stressed Chinese defense supply shortcomings, framing the episode as vindication of concerns regarding Beijing hardware.",
    "source": {
      "name": "The Times of India",
      "bureau": "Delhi",
      "language": "English",
      "originalUrl": "https://timesofindia.indiatimes.com/world/bangladesh-tank-blast-chinese-hardware",
      "originalHeadline": "Catastrophic failure: Bangladesh tank blast puts Chinese military hardware under spotlight",
      "scannedAt": "2026-09-14T21:00:00+05:30"
    },
    "publishedAt": "2026-09-14T07:29:00+05:30",
    "readTimeBn": "৩ মিনিট",
    "readTimeEn": "3 min read",
    "imageUrl": "/images/bangladesh-army-type-59-tank.jpg",
    "tags": [
      "Defense",
      "Military",
      "China",
      "Strategic",
      "Security"
    ],
    "id": "5",
    "isLeadStory": false
  },
  {
    "slug": "bsf-ganga-rescue-bangladeshi-nationals-drowning",
    "title": "BSF rescues 10 Bangladeshi nationals, including children, from drowning in River Ganga",
    "englishTitle": "BSF rescues 10 Bangladeshi nationals, including children, from drowning in River Ganga",
    "banglaTitle": "গঙ্গা নদীতে ডুবে যাওয়ার হাত থেকে শিশুসহ ১০ বাংলাদেশি নাগরিককে উদ্ধার করল বিএসএফ",
    "summaryBn": "পশ্চিমবঙ্গের মুর্শিদাবাদ সংলগ্ন আন্তর্জাতিক সীমান্ত এলাকায় গঙ্গা নদীতে নৌকাডুবির উপক্রম হলে তাৎক্ষণিক অভিযান চালিয়ে শিশু ও নারীসহ ১০ জন বাংলাদেশি নাগরিককে জীবিত উদ্ধার করেছে ভারতীয় সীমান্তরক্ষী বাহিনী (বিএসএফ)।",
    "summaryEn": "In a swift humanitarian operation along the Murshidabad riverine border sector in West Bengal, the Border Security Force (BSF) rescued 10 Bangladeshi nationals, including women and children, whose boat was capsizing in turbulent Ganga waters.",
    "keyPointsBn": [
      "মুর্শিদাবাদ সীমান্ত সংলগ্ন গঙ্গায় বিএসএফের দ্রুত উদ্ধার অভিযান",
      "শিশু ও নারীসহ ১০ বাংলাদেশি নাগরিককে সুরক্ষিতভাবে উদ্ধার",
      "সীমান্তবর্তী এলাকায় মানবিক উদ্ধার তৎপরতার ভূয়সী প্রশংসা"
    ],
    "keyPointsEn": [
      "Rapid BSF riverine patrol intervention in Murshidabad border sector",
      "10 Bangladeshi nationals including children brought to safety",
      "Widely reported in Kolkata media as exemplary humanitarian duty"
    ],
    "category": "border",
    "categoryLabelBn": "সীমান্ত নিরাপত্তা ও বিএসএফ",
    "categoryLabelEn": "Border & Security",
    "sentiment": "positive",
    "sentimentReasonBn": "কলকাতা ও দিল্লির গণমাধ্যমে বিএসএফের মানবিক দায়িত্বপালন ও দ্রুত পদক্ষেপকে অত্যন্ত ইতিবাচকভাবে চিত্রিত করা হয়েছে।",
    "sentimentReasonEn": "Indian media presented the rescue as a heartening humanitarian achievement highlighting compassionate border patrol action.",
    "source": {
      "name": "The Times of India",
      "bureau": "Kolkata",
      "language": "English",
      "originalUrl": "https://timesofindia.indiatimes.com/city/kolkata/bsf-rescues-bangladeshi-nationals-ganga",
      "originalHeadline": "BSF rescues 10 Bangladeshi nationals, including children, from drowning in River Ganga",
      "scannedAt": "2026-09-14T21:00:00+05:30"
    },
    "publishedAt": "2026-09-14T11:45:00+05:30",
    "readTimeBn": "২ মিনিট",
    "readTimeEn": "2 min read",
    "imageUrl": "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "BSF",
      "Border",
      "Humanitarian",
      "Rescue",
      "Ganga"
    ],
    "id": "6",
    "isLeadStory": false
  },
  {
    "slug": "afghanistan-bangladesh-uae-cricket-tour-series",
    "title": "Afghanistan to host Bangladesh, Zimbabwe in UAE for multi-format home season",
    "englishTitle": "Afghanistan to host Bangladesh, Zimbabwe in UAE for multi-format home season",
    "banglaTitle": "সংযুক্ত আরব আমিরাতে বাংলাদেশের বিপক্ষে পূর্ণাঙ্গ সিরিজ আয়োজন করবে আফগানিস্তান",
    "summaryBn": "আফগানিস্তান ক্রিকেট বোর্ড ঘোষণা করেছে যে তারা আগামী মৌসুমে সংযুক্ত আরব আমিরাতের ভেন্যুতে বাংলাদেশের বিপক্ষে টেস্ট, ওডিআই এবং টি-টোয়েন্টি ফরম্যাটের পূর্ণাঙ্গ দ্বিপাক্ষিক সিরিজ আয়োজন করবে। ভারতীয় ক্রীড়া মিডিয়ায় সিরিজের সূচি গুরুত্ব পেয়েছে।",
    "summaryEn": "The Afghanistan Cricket Board officially confirmed its multi-format home series hosting Bangladesh and Zimbabwe across stadiums in the United Arab Emirates, scheduling high-stakes fixtures covered extensively by Indian sports desks.",
    "keyPointsBn": [
      "আরব আমিরাতের ভেন্যুতে বাংলাদেশ-আফগানিস্তান ক্রিকেট সিরিজ নিশ্চিত",
      "টেস্ট, ওয়ানডে ও টি-টোয়েন্টি তিন ফরম্যাটেই প্রতিদ্বন্দ্বিতা",
      "উপমহাদেশের ক্রিকেট ভক্তদের মধ্যে সিরিজ নিয়ে ব্যাপক আগ্রহ"
    ],
    "keyPointsEn": [
      "Complete multi-format schedule announced across UAE venues",
      "Features Test, ODI, and T20I clashes against Bangladesh",
      "Garnered significant spotlight across prominent Indian sports news desks"
    ],
    "category": "sports",
    "categoryLabelBn": "ক্রীড়া ও ক্রিকেট",
    "categoryLabelEn": "Sports & Cricket",
    "sentiment": "neutral",
    "sentimentReasonBn": "ক্রীড়া প্রতিবেদন হিসেবে ভারতীয় গণমাধ্যম কোনো পক্ষ না নিয়ে খেলোয়াড়দের পারফরম্যান্স ও সময়সূচি নিরপেক্ষভাবে তুলে ধরেছে।",
    "sentimentReasonEn": "Indian sports journalism provided neutral, analytical previews focusing on match conditions and ICC championship implications.",
    "source": {
      "name": "Sportstar",
      "bureau": "Delhi",
      "language": "English",
      "originalUrl": "https://sportstar.thehindu.com/cricket/afghanistan-to-play-bangladesh-zimbabwe-schedule-dates-uae",
      "originalHeadline": "Afghanistan to play Bangladesh, Zimbabwe — Full schedule, venue, dates for T20Is, ODIs and Tests",
      "scannedAt": "2026-09-14T21:00:00+05:30"
    },
    "publishedAt": "2026-09-14T07:50:35+05:30",
    "readTimeBn": "২ মিনিট",
    "readTimeEn": "2 min read",
    "imageUrl": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "Cricket",
      "Sports",
      "Bangladesh",
      "Afghanistan",
      "UAE"
    ],
    "id": "7",
    "isLeadStory": false
  },
  {
    "slug": "teesta-hydrological-data-sharing-joint-river-commission",
    "title": "Teesta hydrological data sharing: Joint River Commission technical exchange",
    "englishTitle": "Teesta hydrological data sharing: Joint River Commission technical exchange",
    "banglaTitle": "তিস্তার পানি প্রবাহ ও জলতাত্ত্বিক উপাত্ত বিনিময়: যৌথ নদী কমিশনের কারিগরি দলের বৈঠক",
    "summaryBn": "গাজলডোবা ব্যারেজ এবং ডালিয়া পয়েন্টে তিস্তার বর্ষা-পরবর্তী পানি প্রবাহের নির্ভরযোগ্য তথ্য আদান-প্রদান নিশ্চিত করতে ভারত ও বাংলাদেশের যৌথ নদী কমিশনের কারিগরি কমিটির মধ্যে ভার্চুয়াল বৈঠক অনুষ্ঠিত হয়েছে।",
    "summaryEn": "Technical teams of the Joint River Commission (JRC) from India and Bangladesh held technical sessions to streamline post-monsoon hydrological data exchanges and telemetry monitoring between Gajoldoba barrage and Dalia points along the Teesta.",
    "keyPointsBn": [
      "যৌথ নদী কমিশনের কারিগরি কমিটির নিয়মিত তথ্য বিনিময় আলোচনা",
      "তিস্তা নদীর বর্ষা-পরবর্তী প্রবাহ পর্যবেক্ষণে রিয়েল-টাইম ডেটা শেয়ারিং",
      "অববাহিকার দুই পাড়ের কৃষক ও পানিসম্পদ ব্যবস্থাপনার জন্য উদ্যোগটি জরুরি"
    ],
    "keyPointsEn": [
      "JRC technical teams review cross-border river gauge telemetry",
      "Focus on real-time data transparency for equitable water management",
      "Critical groundwork supporting farmers across northern riparian regions"
    ],
    "category": "diplomacy",
    "categoryLabelBn": "কূটনীতি ও দ্বিপাক্ষিক সম্পর্ক",
    "categoryLabelEn": "Diplomacy & Water",
    "sentiment": "positive",
    "sentimentReasonBn": "কলকাতা ও দিল্লির গণমাধ্যমে নদী বিষয়ক কারিগরি সহযোগিতাকে রাজনৈতিক উত্তেজনার ঊর্ধ্বে এক ইতিবাচক প্রাতিষ্ঠানিক বন্ধন হিসেবে দেখা হয়েছে।",
    "sentimentReasonEn": "Indian media commended institutional technical continuity as an essential, constructive bridge insulated from transient political headwinds.",
    "source": {
      "name": "Anandabazar Patrika",
      "bureau": "Kolkata",
      "language": "Bengali",
      "originalUrl": "https://www.anandabazar.com/west-bengal/teesta-hydrological-data-exchange-jrc",
      "originalHeadline": "তিস্তার জলপ্রবাহের তথ্য বিনিময়ে ভারত-বাংলাদেশ কারিগরি বৈঠক",
      "scannedAt": "2026-09-14T21:00:00+05:30"
    },
    "publishedAt": "2026-09-14T13:15:00+05:30",
    "readTimeBn": "৩ মিনিট",
    "readTimeEn": "3 min read",
    "imageUrl": "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "Teesta",
      "Water Sharing",
      "JRC",
      "River",
      "Diplomacy"
    ],
    "id": "8",
    "isLeadStory": false
  },
  {
    "slug": "adani-power-supply-payment-discussions-bangladesh-bank",
    "title": "Adani power supply payment discussions: Bangladesh Bank reviews power dues",
    "englishTitle": "Adani power supply payment discussions: Bangladesh Bank reviews power dues",
    "banglaTitle": "আদানি পাওয়ারের বিদ্যুৎ সরবরাহ ও বকেয়া পরিশোধ: বাংলাদেশ ব্যাংকের পর্যালোচনা বৈঠক",
    "summaryBn": "ভারতের গোড্ডা বিদ্যুৎ কেন্দ্র থেকে বাংলাদেশে নিরবচ্ছিন্ন বিদ্যুৎ সরবরাহ নিশ্চিত করতে বকেয়া বিল পরিশোধের প্রক্রিয়া পর্যালোচনা করেছে বাংলাদেশ ব্যাংক ও বিদ্যুৎ উন্নয়ন বোর্ড (বিপিডিবি)। ভারতীয় গণমাধ্যমে জ্বালানি সম্পর্কের আর্থিক স্থায়িত্ব নিয়ে বিশদ প্রতিবেদন প্রকাশিত হয়েছে।",
    "summaryEn": "Bangladesh Bank and the Bangladesh Power Development Board conducted high-level financial reviews to expedite pending payment settlements for electricity supplied from Adani Power's Godda plant in Jharkhand, aiming to maintain grid stability.",
    "keyPointsBn": [
      "গোড্ডা প্ল্যান্ট থেকে নিরবচ্ছিন্ন বিদ্যুৎ আমদানির আর্থিক হিসাব সমন্বয়",
      "বাংলাদেশ ব্যাংকের ডলার বরাদ্দ ও পর্যায়ক্রমিক অর্থ পরিশোধের পরিকল্পনা",
      "দ্বিপাক্ষিক বিদ্যুৎ চুক্তির ধারাবাহিকতা বজায় রাখার ওপর জোর"
    ],
    "keyPointsEn": [
      "Financial reconciling of cross-border electricity payments from Godda",
      "Bangladesh Bank allocations to service international energy invoices",
      "Indian commercial media assesses long-term regional energy interdependence"
    ],
    "category": "economy",
    "categoryLabelBn": "অর্থনীতি ও বিদ্যুৎ",
    "categoryLabelEn": "Economy & Energy",
    "sentiment": "neutral",
    "sentimentReasonBn": "ভারতীয় বাণিজ্য সংবাদমাধ্যম বিষয়টিকে চুক্তিভিত্তিক বাণিজ্যিক দায়বদ্ধতা ও মুদ্রা সংকটের ভারসাম্য হিসেবে নিরপেক্ষভাবে তুলে ধরেছে।",
    "sentimentReasonEn": "Indian business press treated the matter objectively as contractual debt restructuring amidst broader South Asian foreign reserve realities.",
    "source": {
      "name": "Business Standard",
      "bureau": "Delhi",
      "language": "English",
      "originalUrl": "https://www.business-standard.com/economy/adani-power-bangladesh-payment-settlement-talks",
      "originalHeadline": "Adani power supply payment discussions: Bangladesh Bank reviews power dues",
      "scannedAt": "2026-09-14T21:00:00+05:30"
    },
    "publishedAt": "2026-09-14T09:40:00+05:30",
    "readTimeBn": "৪ মিনিট",
    "readTimeEn": "4 min read",
    "imageUrl": "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "Adani Power",
      "Electricity",
      "Economy",
      "Bangladesh Bank",
      "Energy"
    ],
    "id": "9",
    "isLeadStory": false
  },
  {
    "slug": "petrapole-benapole-24x7-cargo-clearance-push",
    "title": "Petrapole-Benapole 24x7 cargo clearance push by logistics stakeholders",
    "englishTitle": "Petrapole-Benapole 24x7 cargo clearance push by logistics stakeholders",
    "banglaTitle": "পেট্রাপোল-বেনাপোল বন্দরে ২৪ ঘণ্টা পণ্য খালাসে জোর দাবি পরিবহন ও রপ্তানিকারকদের",
    "summaryBn": "ভারত-বাংলাদেশ বাণিজ্যের প্রধান স্থলবন্দর পেট্রাপোল-বেনাপোলে যানজট নিরসন এবং পণ্যের অপচয় রোধে সার্বক্ষণিক (২৪/৭) পণ্য খালাস ও শুল্কায়ন ব্যবস্থা পুরোপুরি কার্যকর করার তাগিদ দিয়েছে দুই দেশের যৌথ লজিস্টিকস ফেডারেশন।",
    "summaryEn": "Exporters, clearing agents, and trucking associations across West Bengal and Jessore have urged port administrations at Petrapole-Benapole to implement round-the-clock cargo clearances to eliminate border parking congestion and freight demurrage charges.",
    "keyPointsBn": [
      "পেট্রাপোল-বেনাপোলে ২৪ ঘণ্টা ক্লিয়ারেন্স নিশ্চিত করার যৌথ দাবি",
      "জট কমিয়ে আন্তর্জাতিক সরবরাহের গতি বাড়ানোর আহ্বান",
      "দৈনিক বাণিজ্যের পরিমাণ ও রাজস্ব আয়ের বিপুল সম্ভাবনার দিকটি চিহ্নিত"
    ],
    "keyPointsEn": [
      "Logistics and freight federations demand 24/7 port operational status",
      "Reduction of border turnaround delays to lower supply chain overheads",
      "Petrapole land port handles over 70% of bilateral overland trade volume"
    ],
    "category": "trade",
    "categoryLabelBn": "সীমান্ত বাণিজ্য ও বন্দর",
    "categoryLabelEn": "Cross-Border Trade",
    "sentiment": "positive",
    "sentimentReasonBn": "কলকাতা ও দিল্লির অর্থনীতি বিষয়ক প্রতিবেদনে বাণিজ্য সহজীকরণের এই উদ্যোগকে উভয় দেশের অর্থনীতির জন্য লাভজনক হিসেবে উপস্থাপন করা হয়েছে।",
    "sentimentReasonEn": "Indian business reporting celebrated bilateral commercial pushback against red tape, underscoring win-win commercial efficiency.",
    "source": {
      "name": "The Statesman",
      "bureau": "Kolkata",
      "language": "English",
      "originalUrl": "https://thestatesman.com/bengal/petrapole-benapole-24x7-cargo-clearance-push",
      "originalHeadline": "Petrapole-Benapole 24x7 cargo clearance push by logistics stakeholders",
      "scannedAt": "2026-09-14T21:00:00+05:30"
    },
    "publishedAt": "2026-09-14T12:20:00+05:30",
    "readTimeBn": "৩ মিনিট",
    "readTimeEn": "3 min read",
    "imageUrl": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "Petrapole",
      "Benapole",
      "Ports",
      "Trade",
      "Logistics"
    ],
    "id": "10",
    "isLeadStory": false
  },
  {
    "slug": "dhaka-high-commission-visa-facilitation-desks-medical-students",
    "title": "Indian medical and student visa facilitation desks at Dhaka High Commission",
    "englishTitle": "Indian medical and student visa facilitation desks at Dhaka High Commission",
    "banglaTitle": "ঢাকায় ভারতীয় হাইকমিশনে চিকিৎসা ও উচ্চশিক্ষার জন্য বিশেষ ভিসা সহায়তা ডেস্ক",
    "summaryBn": "বাংলাদেশি শিক্ষার্থী ও জটিল রোগে আক্রান্ত রোগীদের ভারতে গমনাগমন সহজ করতে ঢাকায় ভারতীয় সহকারী হাইকমিশন ও ভিসা সেন্টারে বিশেষ অগ্রাধিকারমূলক সেবা ডেস্ক জোরদার করা হয়েছে। গণমাধ্যমে এই সিদ্ধান্তকে মানবিক স্বস্তি হিসেবে দেখা হচ্ছে।",
    "summaryEn": "The High Commission of India in Dhaka has augmented specialized consular desks prioritizing urgent medical patients and students heading to Indian universities, ensuring essential cross-border humanitarian travel remains streamlined.",
    "keyPointsBn": [
      "চিকিৎসা ও স্টুডেন্ট ভিসার জন্য বিশেষ অগ্রাধিকারমূলক ব্যবস্থা",
      "জরুরি আবেদন দ্রুত নিষ্পত্তিতে কনস্যুলার সেবার পরিসর বৃদ্ধি",
      "দুই দেশের সাধারণ মানুষের যোগাযোগে স্বস্তি ফিরে আসার ইঙ্গিত"
    ],
    "keyPointsEn": [
      "High Commission streamlines priority processing for urgent travel",
      "Focus on critical healthcare cases and academic university admissions",
      "Signals goodwill and people-to-people diplomatic responsiveness"
    ],
    "category": "diplomacy",
    "categoryLabelBn": "কূটনীতি ও দ্বিপাক্ষিক সম্পর্ক",
    "categoryLabelEn": "Diplomacy & Water",
    "sentiment": "positive",
    "sentimentReasonBn": "ভারতীয় গণমাধ্যমে এটিকে প্রতিবেশী দেশের মানুষের প্রতি মানবিক সহমর্মিতা ও বিশ্বাস পুনর্গঠনের গুরুত্বপূর্ণ উদ্যোগ হিসেবে চিহ্নিত করা হয়েছে।",
    "sentimentReasonEn": "Indian newspapers praised the consular initiative as thoughtful diplomacy preserving irreplaceable healthcare and educational bonds.",
    "source": {
      "name": "The Hindu",
      "bureau": "Delhi",
      "language": "English",
      "originalUrl": "https://www.thehindu.com/news/national/dhaka-high-commission-visa-facilitation-desks",
      "originalHeadline": "Indian medical and student visa facilitation desks at Dhaka High Commission",
      "scannedAt": "2026-09-14T21:00:00+05:30"
    },
    "publishedAt": "2026-09-14T16:10:00+05:30",
    "readTimeBn": "৩ মিনিট",
    "readTimeEn": "3 min read",
    "imageUrl": "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "Visa",
      "High Commission",
      "Dhaka",
      "Students",
      "Healthcare"
    ],
    "id": "11",
    "isLeadStory": false
  },
  {
    "slug": "india-bangladesh-border-haats-revival-trade-committee",
    "title": "Border haats revival discussions: India and Bangladesh border trade committee meets",
    "englishTitle": "Border haats revival discussions: India and Bangladesh border trade committee meets",
    "banglaTitle": "সীমান্ত হাটগুলো পুনরায় সচল করতে ভারত-বাংলাদেশ সীমান্ত বাণিজ্য কমিটির ভার্চুয়াল বৈঠক",
    "summaryBn": "মেঘালয়, ত্রিপুরা ও আসাম সীমান্তে অবস্থিত ঐতিহ্যবাহী সীমান্ত হাটগুলোতে স্থানীয় কৃষিজ পণ্য ও হস্তশিল্পের কেনাবেচা পুনরায় স্বাভাবিক করতে যৌথ সীমান্ত বাণিজ্য কমিটির বৈঠক অনুষ্ঠিত হয়েছে। এতে স্থানীয় সীমান্তবর্তী অর্থনীতিতে প্রাণচাঞ্চল্য ফেরার প্রত্যাশা তৈরি হয়েছে।",
    "summaryEn": "The Joint Border Haats Committee met to formulate operational guidelines for fully reactivating border haats across Meghalaya, Tripura, and Assam borders, promoting direct micro-commerce between contiguous border rural communities.",
    "keyPointsBn": [
      "মেঘালয় ও ত্রিপুরা সীমান্তের গ্রামীণ হাটগুলো চালুর বিষয়ে যৌথ আলোচনা",
      "সীমান্তবর্তী স্থানীয় উৎপাদক ও ক্ষুদ্র ব্যবসায়ীদের জীবিকা সুরক্ষা",
      "অনানুষ্ঠানিক চোরাচালান কমিয়ে বৈধ স্থানীয় বাণিজ্যের সুযোগ বৃদ্ধি"
    ],
    "keyPointsEn": [
      "Joint committee convenes to resume border haat commerce in Northeast",
      "Supports micro-livelihoods of indigenous border-adjacent communities",
      "Curbs illicit cross-border smuggling by encouraging formal local exchanges"
    ],
    "category": "trade",
    "categoryLabelBn": "সীমান্ত বাণিজ্য ও বন্দর",
    "categoryLabelEn": "Cross-Border Trade",
    "sentiment": "positive",
    "sentimentReasonBn": "উত্তর-পূর্ব ভারতের সংবাদমাধ্যমে গ্রামীণ অর্থনীতি পুনরুজ্জীবন ও দুই পারের সৌহার্দ্য রক্ষার প্রতীক হিসেবে উদ্যোগটি ইতিবাচকভাবে প্রশংসিত হয়েছে।",
    "sentimentReasonEn": "Regional Indian media warmly endorsed the initiative as grass-roots peaceful coexistence strengthening border camaraderie.",
    "source": {
      "name": "Bartaman",
      "bureau": "Kolkata",
      "language": "Bengali",
      "originalUrl": "https://bartamanpatrika.com/northeast/border-haats-revival-meeting",
      "originalHeadline": "সীমান্ত হাটগুলো পুনরায় সচল করতে ভারত-বাংলাদেশ বৈঠক",
      "scannedAt": "2026-09-14T21:00:00+05:30"
    },
    "publishedAt": "2026-09-14T11:25:00+05:30",
    "readTimeBn": "৩ মিনিট",
    "readTimeEn": "3 min read",
    "imageUrl": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "Border Haat",
      "Meghalaya",
      "Tripura",
      "Trade",
      "Rural Economy"
    ],
    "id": "12",
    "isLeadStory": false
  },
  {
    "slug": "kolkata-book-fair-invitation-bangladeshi-publishers",
    "title": "Kolkata International Book Fair invites Bangladeshi authors and publishers",
    "englishTitle": "Kolkata International Book Fair invites Bangladeshi authors and publishers",
    "banglaTitle": "কলকাতা আন্তর্জাতিক বইমেলায় বাংলাদেশি প্রকাশক ও লেখকদের অংশগ্রহণের বিশেষ আমন্ত্রণ",
    "summaryBn": "পাবলিশার্স অ্যান্ড বুকসেলার্স গিল্ডের পক্ষ থেকে আশ্বস্ত করা হয়েছে যে আসন্ন আন্তর্জাতিক কলকাতা বইমেলায় বাংলাদেশের প্রকাশক ও সাহিত্যিকদের অংশ নিতে যথারীতি আনুষ্ঠানিক আমন্ত্রণ ও প্যাভিলিয়ন বরাদ্দ অব্যাহত থাকবে।",
    "summaryEn": "The Publishers & Booksellers Guild confirmed that formal invitations and prime pavilion allocations will remain reserved for Bangladeshi publishers and authors at the forthcoming International Kolkata Book Fair, celebrating shared literary heritage.",
    "keyPointsBn": [
      "কলকাতা আন্তর্জাতিক বইমেলায় বাংলাদেশের প্রকাশকদের আমন্ত্রণ বহাল",
      "ভাষাগত ও সাংস্কৃতিক সেতুবন্ধন অটুট রাখার প্রত্যয়",
      "দুই বাংলার সাহিত্যপ্রেমীদের দীর্ঘদিনের ভালোবাসার প্রতিফলন"
    ],
    "keyPointsEn": [
      "Kolkata Book Fair reserves traditional pavilion space for Dhaka publishers",
      "Affirms enduring linguistic and literary solidarity despite political shifts",
      "Beloved cultural milestone welcomed by Bengali readers worldwide"
    ],
    "category": "culture",
    "categoryLabelBn": "সংস্কৃতি ও সাহিত্য",
    "categoryLabelEn": "Culture & Arts",
    "sentiment": "positive",
    "sentimentReasonBn": "কলকাতা সংবাদমাধ্যমে সাহিত্য ও সংস্কৃতিকে রাজনীতির ঊর্ধ্বে রেখে উভয় বাংলার মিলনের অন্যতম বৃহত্তম মঞ্চ হিসেবে তুলে ধরা হয়েছে।",
    "sentimentReasonEn": "Kolkata editorial pieces lauded literature as an untouchable common sanctuary bridging geopolitical frictions.",
    "source": {
      "name": "Sangbad Pratidin",
      "bureau": "Kolkata",
      "language": "Bengali",
      "originalUrl": "https://sangbadpratidin.in/culture/kolkata-book-fair-bangladesh-publishers",
      "originalHeadline": "কলকাতা বইমেলায় বাংলাদেশের প্রকাশকদের জন্য বরাদ্দ থাকছে প্যাভিলিয়ন",
      "scannedAt": "2026-09-14T21:00:00+05:30"
    },
    "publishedAt": "2026-09-14T17:00:00+05:30",
    "readTimeBn": "২ মিনিট",
    "readTimeEn": "2 min read",
    "imageUrl": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "Book Fair",
      "Kolkata",
      "Literature",
      "Culture",
      "Publishers"
    ],
    "id": "13",
    "isLeadStory": false
  },
  {
    "id": "14",
    "slug": "bangladesh-minister-fascination-with-india-row",
    "title": "'Fascination with India must end': Bangladesh minister sparks row",
    "englishTitle": "'Fascination with India must end': Bangladesh minister sparks row",
    "banglaTitle": "'ভারতের প্রতি মুগ্ধতা শেষ হতে হবে': বাংলাদেশের মন্ত্রীর মন্তব্যে বিতর্ক",
    "summaryBn": "বাংলাদেশের পররাষ্ট্র প্রতিমন্ত্রী হুমায়ুন কবিরের 'ভারতের প্রতি মুগ্ধতা শেষ করতে হবে' মন্তব্য নিয়ে বিতর্ক সৃষ্টি হয়েছে। তিনি বলেন, ভারত এখন কেবল আরেকটি দেশ যার সঙ্গে ভালো দ্বিপাক্ষিক সম্পর্ক চায় বাংলাদেশ।",
    "summaryEn": "Bangladesh State Minister for Foreign Affairs Humaiun Kobir's remark that 'fascination with India must end' has sparked a row. He stated that India is just another country with which Bangladesh wants a good bilateral relationship, signaling a shift in Dhaka's diplomatic posture.",
    "keyPointsBn": [
      "পররাষ্ট্র প্রতিমন্ত্রীর মন্তব্যে কূটনৈতিক বিতর্ক",
      "ভারতকে 'আরেকটি দেশ' হিসেবে উল্লেখ",
      "বাংলাদেশের পররাষ্ট্রনীতিতে পরিবর্তনের ইঙ্গিত"
    ],
    "keyPointsEn": [
      "State Minister's remark sparks diplomatic row",
      "Describes India as 'just another country'",
      "Signals shift in Bangladesh's foreign policy"
    ],
    "category": "diplomacy",
    "categoryLabelBn": "কূটনীতি ও দ্বিপাক্ষিক সম্পর্ক",
    "categoryLabelEn": "Diplomacy & Water",
    "sentiment": "negative",
    "sentimentReasonBn": "ভারতীয় মিডিয়া এই মন্তব্যকে বাংলাদেশের 'ভারত-বিরোধী' মনোভাবের প্রকাশ হিসেবে চিত্রিত করেছে, যা নেতিবাচক সুর তৈরি করেছে। সংবাদে বিতর্ক ও সম্পর্কের টানাপোড়েনের দিকটি গুরুত্ব পেয়েছে।",
    "sentimentReasonEn": "Indian media portrays the remark as indicative of an 'anti-India' sentiment in Bangladesh, creating a negative tone. The coverage emphasizes the controversy and strain in bilateral ties.",
    "source": {
      "name": "The Indian Express World",
      "bureau": "Delhi",
      "language": "English",
      "originalUrl": "https://indianexpress.com/article/world/bangladesh-minister-humaiun-kobir-india-ties-reset-tarique-rahman-unga-10877038/",
      "originalHeadline": "'Fascination with India must end': Bangladesh minister sparks row",
      "scannedAt": "2026-09-14T20:00:00+05:30"
    },
    "publishedAt": "2026-09-14T07:36:41+00:00",
    "readTimeBn": "৩ মিনিট",
    "readTimeEn": "3 min read",
    "imageUrl": "https://indianexpress.com/wp-content/uploads/2026/09/bangladesh-minister.jpg",
    "tags": [
      "Bangladesh",
      "India",
      "Diplomacy",
      "Controversy",
      "Humaiun Kobir"
    ],
    "isLeadStory": false
  },
  {
    "id": "15",
    "slug": "madrassas-mushrooming-near-bangladesh-border-giriraj-singh",
    "title": "Madrassas mushrooming near Bangladesh border: Giriraj Singh",
    "englishTitle": "Madrassas mushrooming near Bangladesh border: Giriraj Singh",
    "banglaTitle": "বাংলাদেশ সীমান্তের কাছে মাদ্রাসা বাড়ছে: গিরিরাজ সিং",
    "summaryBn": "কেন্দ্রীয় মন্ত্রী গিরিরাজ সিং দাবি করেছেন, বাংলাদেশ সীমান্তের কাছে মাদ্রাসার সংখ্যা দ্রুত বাড়ছে। তিনি এই প্রবণতাকে নিরাপত্তা উদ্বেগ হিসেবে চিহ্নিত করেছেন।",
    "summaryEn": "Union Minister Giriraj Singh claimed that madrassas are mushrooming near the Bangladesh border, flagging it as a security concern. The statement adds to the border security discourse in Indian media.",
    "keyPointsBn": [
      "বাংলাদেশ সীমান্তে মাদ্রাসা বৃদ্ধির দাবি",
      "নিরাপত্তা উদ্বেগ প্রকাশ কেন্দ্রীয় মন্ত্রীর",
      "সীমান্ত ব্যবস্থাপনা নিয়ে রাজনৈতিক বিতর্ক"
    ],
    "keyPointsEn": [
      "Claims rise in madrassas near Bangladesh border",
      "Flags security concerns",
      "Adds to political debate on border management"
    ],
    "category": "border",
    "categoryLabelBn": "সীমান্ত নিরাপত্তা ও বিএসএফ",
    "categoryLabelEn": "Border & Security",
    "sentiment": "negative",
    "sentimentReasonBn": "ভারতীয় মিডিয়া এই দাবিকে নিরাপত্তা হুমকি হিসেবে উপস্থাপন করেছে, যা বাংলাদেশ-বিরোধী নেতিবাচক আবহ তৈরি করে। সীমান্তে মাদ্রাসা বৃদ্ধির বিষয়টি সন্ত্রাসবাদ ও অনুপ্রবেশের সঙ্গে যুক্ত করে দেখা হচ্ছে।",
    "sentimentReasonEn": "Indian media presents the claim as a security threat, creating a negative narrative against Bangladesh. The issue of madrassas is linked to terrorism and infiltration in the coverage.",
    "source": {
      "name": "The Hindu Top",
      "bureau": "Delhi",
      "language": "English",
      "originalUrl": "https://www.thehindu.com/videos/shorts/madrassas-mushrooming-near-bangladesh-border-giriraj-singh/article71466105.ece",
      "originalHeadline": "Madrassas mushrooming near Bangladesh border: Giriraj Singh",
      "scannedAt": "2026-09-14T20:00:00+05:30"
    },
    "publishedAt": "2026-09-14T18:50:20+05:30",
    "readTimeBn": "২ মিনিট",
    "readTimeEn": "2 min read",
    "imageUrl": "https://www.thehindu.com/theme/images/og-image.png",
    "tags": [
      "Bangladesh",
      "Border",
      "Security",
      "Madrassas",
      "Giriraj Singh"
    ],
    "isLeadStory": false
  },
  {
    "id": "16",
    "slug": "no-dhaka-representation-brics-summit-tarique-rahman",
    "title": "No Dhaka representation at BRICS Summit as Bangladesh rules out Rahman's visit",
    "englishTitle": "No Dhaka representation at BRICS Summit as Bangladesh rules out Rahman's visit",
    "banglaTitle": "ব্রিকস শীর্ষ সম্মেলনে ঢাকার কোনো প্রতিনিধি নেই, তারেক রহমানের সফর বাতিল",
    "summaryBn": "বাংলাদেশ ব্রিকস শীর্ষ সম্মেলনে যোগ দেবে না বলে জানিয়েছে, কারণ প্রধানমন্ত্রী তারেক রহমানের দিল্লি সফর বাতিল হয়েছে। এই সিদ্ধান্ত দ্বিপাক্ষিক সম্পর্কের টানাপোড়েনের ইঙ্গিত দেয়।",
    "summaryEn": "Bangladesh has ruled out Prime Minister Tarique Rahman's visit to the BRICS Summit in Delhi, meaning no Dhaka representation at the event. The decision signals ongoing strain in bilateral relations.",
    "keyPointsBn": [
      "ব্রিকস সম্মেলনে বাংলাদেশের অনুপস্থিতি",
      "তারেক রহমানের দিল্লি সফর বাতিল",
      "দ্বিপাক্ষিক সম্পর্কে টানাপোড়েনের ইঙ্গিত"
    ],
    "keyPointsEn": [
      "Bangladesh absent from BRICS Summit",
      "Tarique Rahman's Delhi visit ruled out",
      "Signals strain in bilateral ties"
    ],
    "category": "diplomacy",
    "categoryLabelBn": "কূটনীতি ও দ্বিপাক্ষিক সম্পর্ক",
    "categoryLabelEn": "Diplomacy & Water",
    "sentiment": "negative",
    "sentimentReasonBn": "ভারতীয় মিডিয়া এই সিদ্ধান্তকে দ্বিপাক্ষিক সম্পর্কের অবনতির লক্ষণ হিসেবে দেখছে। সংবাদে বাংলাদেশের 'দূরত্ব' বজায় রাখার প্রবণতা তুলে ধরা হয়েছে, যা নেতিবাচক সুর তৈরি করেছে।",
    "sentimentReasonEn": "Indian media views the decision as a sign of deteriorating bilateral ties. The coverage highlights Bangladesh's tendency to maintain distance, creating a negative tone.",
    "source": {
      "name": "The Indian Express World",
      "bureau": "Delhi",
      "language": "English",
      "originalUrl": "https://indianexpress.com/article/world/tarique-rahman-brics-summit-india-visit-bangladesh-response-10872092/",
      "originalHeadline": "No Dhaka representation at BRICS Summit as Bangladesh rules out Rahman's visit",
      "scannedAt": "2026-09-14T20:00:00+05:30"
    },
    "publishedAt": "2026-09-10T12:33:25+00:00",
    "readTimeBn": "৩ মিনিট",
    "readTimeEn": "3 min read",
    "imageUrl": "https://indianexpress.com/wp-content/uploads/2026/09/brics-summit.jpg",
    "tags": [
      "Bangladesh",
      "BRICS",
      "Tarique Rahman",
      "Diplomacy",
      "Delhi"
    ],
    "isLeadStory": false
  },
  {
    "id": "17",
    "slug": "sheikh-hasina-daughter-saima-quits-who-post",
    "title": "Sheikh Hasina's daughter Saima quits WHO post, a day after it recommended her termination",
    "englishTitle": "Sheikh Hasina's daughter Saima quits WHO post, a day after it recommended her termination",
    "banglaTitle": "শেখ হাসিনার মেয়ে সায়মা ডব্লিউএইচওর পদ থেকে পদত্যাগ করলেন, একদিন আগে পদ অবসানের সুপারিশ",
    "summaryBn": "শেখ হাসিনার মেয়ে সায়মা ওয়াজেদ ডব্লিউএইচওর আঞ্চলিক প্রধান পদ থেকে পদত্যাগ করেছেন। জালিয়াতির অভিযোগ ওঠার পর সংস্থাটি তার পদ অবসানের সুপারিশ করেছিল।",
    "summaryEn": "Saima Wazed, daughter of Sheikh Hasina, resigned from her post as WHO Regional Director a day after the organization recommended her termination following fraud allegations. The development adds to the political turmoil surrounding the Hasina family.",
    "keyPointsBn": [
      "শেখ হাসিনার মেয়ের পদত্যাগ",
      "জালিয়াতির অভিযোগে ডব্লিউএইচওর সুপারিশ",
      "হাসিনা পরিবারের রাজনৈতিক সংকট গভীরতর"
    ],
    "keyPointsEn": [
      "Sheikh Hasina's daughter resigns",
      "WHO recommended termination over fraud charges",
      "Deepens political crisis for Hasina family"
    ],
    "category": "politics",
    "categoryLabelBn": "রাজনীতি ও নির্বাচন",
    "categoryLabelEn": "Politics & Governance",
    "sentiment": "negative",
    "sentimentReasonBn": "ভারতীয় মিডিয়া এই ঘটনাকে হাসিনা পরিবারের ভাবমূর্তি ক্ষুণ্নকারী হিসেবে উপস্থাপন করেছে। জালিয়াতির অভিযোগ ও পদত্যাগের বিষয়টি নেতিবাচক আলোচনার জন্ম দিয়েছে।",
    "sentimentReasonEn": "Indian media presents this as damaging to the Hasina family's image. The fraud allegations and resignation generate negative discourse.",
    "source": {
      "name": "The Indian Express World",
      "bureau": "Delhi",
      "language": "English",
      "originalUrl": "https://indianexpress.com/article/world/bangladesh-saima-wazed-sheikh-hasina-daughter-fraud-allegation-resigns-who-post-10871087/",
      "originalHeadline": "Sheikh Hasina's daughter Saima quits WHO post, a day after it recommended her termination",
      "scannedAt": "2026-09-14T20:00:00+05:30"
    },
    "publishedAt": "2026-09-10T03:36:07+00:00",
    "readTimeBn": "২ মিনিট",
    "readTimeEn": "2 min read",
    "imageUrl": "https://indianexpress.com/wp-content/uploads/2026/09/saima-wazed.jpg",
    "tags": [
      "Bangladesh",
      "Sheikh Hasina",
      "Saima Wazed",
      "WHO",
      "Fraud"
    ],
    "isLeadStory": false
  },
  {
    "id": "18",
    "slug": "durga-puja-bangladesh-government-promises-safety-hindu-minority",
    "title": "Ahead of Durga Puja, Bangladesh government promises support, safety for Hindu minority",
    "englishTitle": "Ahead of Durga Puja, Bangladesh government promises support, safety for Hindu minority",
    "banglaTitle": "দুর্গাপূজার আগে হিন্দু সংখ্যালঘুদের সহায়তা ও নিরাপত্তার প্রতিশ্রুতি বাংলাদেশ সরকারের",
    "summaryBn": "দুর্গাপূজার আগে বাংলাদেশ সরকার হিন্দু সংখ্যালঘুদের নিরাপত্তা ও সহায়তার প্রতিশ্রুতি দিয়েছে। এই পদক্ষেপ ধর্মীয় সম্প্রীতি বজায় রাখার প্রচেষ্টার অংশ।",
    "summaryEn": "Ahead of Durga Puja, the Bangladesh government has promised support and safety for the Hindu minority. The move is seen as an effort to maintain religious harmony amid political tensions.",
    "keyPointsBn": [
      "দুর্গাপূজার আগে নিরাপত্তা প্রতিশ্রুতি",
      "হিন্দু সংখ্যালঘুদের সুরক্ষার আশ্বাস",
      "ধর্মীয় সম্প্রীতি বজায় রাখার প্রচেষ্টা"
    ],
    "keyPointsEn": [
      "Safety assurance ahead of Durga Puja",
      "Promise to protect Hindu minority",
      "Effort to maintain religious harmony"
    ],
    "category": "culture",
    "categoryLabelBn": "সংস্কৃতি ও সাহিত্য",
    "categoryLabelEn": "Culture & Arts",
    "sentiment": "positive",
    "sentimentReasonBn": "ভারতীয় মিডিয়া এই পদক্ষেপকে ইতিবাচকভাবে দেখছে, কারণ এটি সংখ্যালঘুদের সুরক্ষা ও ধর্মীয় সহনশীলতার বার্তা দেয়। সংবাদে সরকারের উদ্যোগের প্রশংসা করা হয়েছে।",
    "sentimentReasonEn": "Indian media views this positively as it conveys a message of minority protection and religious tolerance. The coverage appreciates the government's initiative.",
    "source": {
      "name": "The Indian Express World",
      "bureau": "Delhi",
      "language": "English",
      "originalUrl": "https://indianexpress.com/article/world/durga-puja-bangladesh-government-promises-support-safety-hindu-minorities-10868001/",
      "originalHeadline": "Ahead of Durga Puja, Bangladesh government promises support, safety for Hindu minority",
      "scannedAt": "2026-09-14T20:00:00+05:30"
    },
    "publishedAt": "2026-09-08T05:20:43+00:00",
    "readTimeBn": "২ মিনিট",
    "readTimeEn": "2 min read",
    "imageUrl": "https://indianexpress.com/wp-content/uploads/2026/09/durga-puja-bangladesh.jpg",
    "tags": [
      "Bangladesh",
      "Durga Puja",
      "Hindu Minority",
      "Religious Harmony",
      "Culture"
    ],
    "isLeadStory": false
  },
  {
    "id": "19",
    "slug": "bangladesh-india-resume-train-ops-october",
    "title": "Bangladesh and India plan to resume train ops by October",
    "englishTitle": "Bangladesh and India plan to resume train ops by October",
    "banglaTitle": "অক্টোবরের মধ্যে ট্রেন চলাচল পুনরায় শুরু করার পরিকল্পনা বাংলাদেশ ও ভারতের",
    "summaryBn": "বাংলাদেশ ও ভারত অক্টোবরের মধ্যে ট্রেন চলাচল পুনরায় শুরু করার পরিকল্পনা করছে। এই পদক্ষেপ দুই দেশের মধ্যে যোগাযোগ ও বাণিজ্য বৃদ্ধিতে সহায়ক হবে।",
    "summaryEn": "Bangladesh and India are planning to resume train operations by October. The move is expected to boost connectivity and trade between the two countries, signaling a positive step in bilateral relations.",
    "keyPointsBn": [
      "অক্টোবরের মধ্যে ট্রেন চলাচল শুরুর পরিকল্পনা",
      "যোগাযোগ ও বাণিজ্য বৃদ্ধির সম্ভাবনা",
      "দ্বিপাক্ষিক সম্পর্কে ইতিবাচক পদক্ষেপ"
    ],
    "keyPointsEn": [
      "Plan to resume train ops by October",
      "Expected to boost connectivity and trade",
      "Positive step in bilateral relations"
    ],
    "category": "trade",
    "categoryLabelBn": "সীমান্ত বাণিজ্য ও বন্দর",
    "categoryLabelEn": "Cross-Border Trade",
    "sentiment": "positive",
    "sentimentReasonBn": "ভারতীয় মিডিয়া এই পরিকল্পনাকে ইতিবাচক উন্নতি হিসেবে দেখছে, যা দুই দেশের মধ্যে সম্পর্ক স্বাভাবিক করার ইঙ্গিত দেয়। সংবাদে সহযোগিতার দিকটি গুরুত্ব পেয়েছে।",
    "sentimentReasonEn": "Indian media views the plan as a positive development, indicating normalization of ties. The coverage emphasizes the cooperative aspect.",
    "source": {
      "name": "The Times of India",
      "bureau": "Delhi",
      "language": "English",
      "originalUrl": "https://news.google.com/rss/articles/CBMi0AFBVV95cUxPdUhTMmFhZGNwUDlVcDc1UDV5b3BmNWw3WVJGZUlYd2tQMlgtZnExNTRzOWViMklsdzY0bFh5a3FRVDBCdVpNZC1oTmJQRjdaWEZDSHBpVWpnVEVMNFRyX0VZR1NZRy1BWDJRczFzRkJtdVNSVjRlUmtKeHR5dUlWOEItcGhlUVNVano5WVpEaWpramdmYmxHajRqemVtSXNRcFlRbThQMWtYUkphdlB0dzdlS0QyRldnQ2JzS1lKdVJ1d3hEZzFHN0VCeVo4VHFO0gHWAUFVX3lxTE5kZ0xtZUdoMTZqY1lHVEtuS2pva0tzQXpWT1VIcWJJUkFHM1plU2lZMXBHMnJrX0RtYlIyZkVhS0dSelExUDl3eGlIb2oyZzdTZDNwUS1SYjNuZjVaaWZMWkl4c3ZZWHFqRVJ4U0FPdzU0eW9VTkwtSDY0Sm5sZ09laDNsYVV4X0FJNldMVjkyLUxkZ2RtcFBBdTZ1aHlmcDI4dDdJVUdnbm8wNDNkeUcyLUpVWVlBS1R5SDl3OUlzZ3FmaVFzVVAtT0dwc3lGZ2tMcEJROUE?oc=5",
      "originalHeadline": "Bangladesh and India plan to resume train ops by October",
      "scannedAt": "2026-09-14T20:00:00+05:30"
    },
    "publishedAt": "2026-09-07T20:59:00+00:00",
    "readTimeBn": "২ মিনিট",
    "readTimeEn": "2 min read",
    "imageUrl": "https://static.toiimg.com/thumb/msid-12345678,width-1070,height-580,imgsize-123456,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
    "tags": [
      "Bangladesh",
      "India",
      "Train",
      "Connectivity",
      "Trade"
    ],
    "isLeadStory": false
  },
  {
    "id": "20",
    "slug": "india-brics-invite-bimstec-chair-bangladesh",
    "title": "India did not invite Bangladesh PM Rahman for BRICS; invite was for BIMSTEC Chair: Dhaka",
    "englishTitle": "India did not invite Bangladesh PM Rahman for BRICS; invite was for BIMSTEC Chair: Dhaka",
    "banglaTitle": "ব্রিকসে বাংলাদেশের প্রধানমন্ত্রীকে আমন্ত্রণ জানায়নি ভারত, আমন্ত্রণ ছিল বিমসটেক চেয়ার হিসেবে: ঢাকা",
    "summaryBn": "বাংলাদেশের পররাষ্ট্র প্রতিমন্ত্রী জানিয়েছেন, ব্রিকস শীর্ষ সম্মেলনে বাংলাদেশের প্রধানমন্ত্রী তারিক রহমানকে আমন্ত্রণ জানানো হয়নি। আমন্ত্রণটি ছিল বিমসটেকের চেয়ার হিসেবে, প্রধানমন্ত্রী হিসেবে নয়। ভারতীয় গণমাধ্যম এ খবরকে কূটনৈতিক স্পষ্টীকরণ হিসেবে উপস্থাপন করেছে।",
    "summaryEn": "Bangladesh's Minister of State for Foreign Affairs clarified that PM Tarique Rahman was not invited to BRICS as Prime Minister, but in his capacity as BIMSTEC Chair. Indian media framed this as a diplomatic clarification, avoiding any suggestion of a snub.",
    "keyPointsBn": [
      "ব্রিকসে বাংলাদেশের প্রধানমন্ত্রীকে আমন্ত্রণ জানানো হয়নি বলে ঢাকা স্পষ্ট করেছে",
      "আমন্ত্রণ ছিল বিমসটেক চেয়ার হিসেবে, প্রধানমন্ত্রী পদবিতে নয়",
      "ভারতীয় গণমাধ্যম এটিকে কূটনৈতিক স্পষ্টীকরণ হিসেবে দেখিয়েছে"
    ],
    "keyPointsEn": [
      "Dhaka clarified Bangladesh PM was not invited to BRICS",
      "Invitation was as BIMSTEC Chair, not as Prime Minister",
      "Indian media framed it as a diplomatic clarification"
    ],
    "category": "diplomacy",
    "categoryLabelBn": "কূটনীতি ও দ্বিপাক্ষিক সম্পর্ক",
    "categoryLabelEn": "Diplomacy & Water",
    "sentiment": "neutral",
    "sentimentReasonBn": "ভারতীয় গণমাধ্যম নিরপেক্ষভাবে খবরটি পরিবেশন করেছে, কোনো পক্ষকে দোষারোপ না করে কূটনৈতিক স্পষ্টীকরণ হিসেবে উপস্থাপন করেছে।",
    "sentimentReasonEn": "Indian media reported neutrally, presenting it as a diplomatic clarification without assigning blame to either side.",
    "source": {
      "name": "The Hindu",
      "bureau": "Delhi",
      "language": "English",
      "originalUrl": "https://www.thehindu.com/news/international/india-did-not-invite-bangladesh-pm-rahman-for-brics-invite-was-for-bimstec-chair-dhaka/article71454857.ece",
      "originalHeadline": "India did not invite Bangladesh PM Rahman for BRICS; invite was for BIMSTEC Chair: Dhaka",
      "scannedAt": "2026-09-11T15:17:43+05:30"
    },
    "publishedAt": "2026-09-11T15:17:43+05:30",
    "readTimeBn": "২ মিনিট",
    "readTimeEn": "2 min read",
    "imageUrl": "https://www.thehindu.com/theme/images/og-image.png",
    "tags": [
      "BRICS",
      "BIMSTEC",
      "Bangladesh",
      "Diplomacy",
      "Tarique Rahman"
    ],
    "isLeadStory": false
  },
  {
    "id": "21",
    "slug": "ganges-padma-water-sharing-treaty-renewal-talks",
    "title": "Dhaka-Delhi talks begin on renewing Ganges-Padma water sharing treaty",
    "englishTitle": "Dhaka-Delhi talks begin on renewing Ganges-Padma water sharing treaty",
    "banglaTitle": "পদ্মা নদীর পানি বণ্টন চুক্তি নবায়ন নিয়ে ঢাকা-দিল্লি আলোচনা শুরু",
    "summaryBn": "গঙ্গা-পদ্মা নদীর পানি বণ্টন চুক্তি নবায়নের জন্য ঢাকা ও দিল্লির মধ্যে আলোচনা শুরু হয়েছে। ভারতীয় গণমাধ্যম এটিকে দ্বিপাক্ষিক সম্পর্কের ইতিবাচক অগ্রগতি হিসেবে দেখছে, যা দুই দেশের জনগণের জন্য উপকারী হবে।",
    "summaryEn": "Talks between Dhaka and Delhi have begun to renew the Ganges-Padma water sharing treaty. Indian media portrays this as a positive step in bilateral relations, beneficial for people of both countries.",
    "keyPointsBn": [
      "গঙ্গা-পদ্মা পানি বণ্টন চুক্তি নবায়নে আলোচনা শুরু",
      "ভারতীয় গণমাধ্যম এটিকে ইতিবাচক কূটনৈতিক অগ্রগতি হিসেবে দেখছে",
      "দুই দেশের জনগণের স্বার্থে সহযোগিতা বাড়ানোর সম্ভাবনা"
    ],
    "keyPointsEn": [
      "Talks begin to renew Ganges-Padma water sharing treaty",
      "Indian media sees it as positive diplomatic progress",
      "Potential for increased cooperation benefiting both nations"
    ],
    "category": "diplomacy",
    "categoryLabelBn": "কূটনীতি ও দ্বিপাক্ষিক সম্পর্ক",
    "categoryLabelEn": "Diplomacy & Water",
    "sentiment": "positive",
    "sentimentReasonBn": "ভারতীয় গণমাধ্যম আলোচনাকে ইতিবাচক অগ্রগতি হিসেবে চিহ্নিত করেছে, যা দ্বিপাক্ষিক সম্পর্ক উন্নয়নের ইঙ্গিত দেয়।",
    "sentimentReasonEn": "Indian media highlighted the talks as positive progress, signaling improved bilateral relations.",
    "source": {
      "name": "Anandabazar Patrika",
      "bureau": "Kolkata",
      "language": "Bengali",
      "originalUrl": "https://www.anandabazar.com/west-bengal/dhaka-delhi-water-sharing-talks",
      "originalHeadline": "পদ্মা নদীর পানি বণ্টন চুক্তি নবায়ন নিয়ে ঢাকা-দিল্লি আলোচনা শুরু",
      "scannedAt": "2026-09-11T13:00:00+05:30"
    },
    "publishedAt": "2026-09-11T13:00:00+05:30",
    "readTimeBn": "৩ মিনিট",
    "readTimeEn": "3 min read",
    "imageUrl": "https://www.anandabazar.com/images/water-sharing-talks.jpg",
    "tags": [
      "Water Sharing",
      "Ganges",
      "Padma",
      "Bangladesh",
      "Diplomacy"
    ],
    "isLeadStory": false
  },
  {
    "id": "22",
    "slug": "benapole-petrapole-trade-halt-traders-worried",
    "title": "Import-export halted at Benapole-Petrapole port, traders worried",
    "englishTitle": "Import-export halted at Benapole-Petrapole port, traders worried",
    "banglaTitle": "বেনাপোল-পেট্রাপোল বন্দরে আমদানি-রপ্তানি বন্ধ, ব্যবসায়ীদের দুশ্চিন্তা",
    "summaryBn": "বেনাপোল-পেট্রাপোল স্থলবন্দরে আমদানি-রপ্তানি বন্ধ হয়ে যাওয়ায় ব্যবসায়ীরা দুশ্চিন্তায় পড়েছেন। ভারতীয় গণমাধ্যম এটিকে সীমান্ত বাণিজ্যের একটি বড় ধাক্কা হিসেবে উপস্থাপন করেছে এবং এর প্রভাব নিয়ে উদ্বেগ প্রকাশ করেছে।",
    "summaryEn": "Import-export activities at Benapole-Petrapole land port have halted, causing worry among traders. Indian media presented this as a major setback to cross-border trade and expressed concern over its impact.",
    "keyPointsBn": [
      "বেনাপোল-পেট্রাপোল বন্দরে আমদানি-রপ্তানি বন্ধ",
      "ব্যবসায়ীদের মধ্যে দুশ্চিন্তা ও আর্থিক ক্ষতির আশঙ্কা",
      "ভারতীয় গণমাধ্যম এটিকে সীমান্ত বাণিজ্যের বড় ধাক্কা হিসেবে দেখছে"
    ],
    "keyPointsEn": [
      "Import-export halted at Benapole-Petrapole port",
      "Traders worried about financial losses",
      "Indian media sees it as a major blow to cross-border trade"
    ],
    "category": "trade",
    "categoryLabelBn": "সীমান্ত বাণিজ্য ও বন্দর",
    "categoryLabelEn": "Cross-Border Trade",
    "sentiment": "negative",
    "sentimentReasonBn": "ভারতীয় গণমাধ্যম বাণিজ্য বন্ধকে নেতিবাচকভাবে উপস্থাপন করেছে, ব্যবসায়ীদের দুশ্চিন্তা ও অর্থনৈতিক ক্ষতির দিক তুলে ধরেছে।",
    "sentimentReasonEn": "Indian media framed the trade halt negatively, highlighting traders' anxiety and economic losses.",
    "source": {
      "name": "Aaj Tak",
      "bureau": "Delhi",
      "language": "Hindi",
      "originalUrl": "https://www.aajtak.in/india/news/benapole-petrapole-trade-halt",
      "originalHeadline": "বেনাপোল-পেট্রাপোল বন্দরে আমদানি-রপ্তানি বন্ধ, ব্যবসায়ীদের দুশ্চিন্তা",
      "scannedAt": "2026-09-11T11:00:00+05:30"
    },
    "publishedAt": "2026-09-11T11:00:00+05:30",
    "readTimeBn": "২ মিনিট",
    "readTimeEn": "2 min read",
    "imageUrl": "https://www.aajtak.in/images/benapole-trade-halt.jpg",
    "tags": [
      "Benapole",
      "Petrapole",
      "Trade",
      "Bangladesh",
      "Border"
    ],
    "isLeadStory": false
  },
  {
    "id": "23",
    "slug": "bsf-high-alert-bangladesh-border-infiltration",
    "title": "BSF on high alert along Bangladesh border, special operation to check infiltration",
    "englishTitle": "BSF on high alert along Bangladesh border, special operation to check infiltration",
    "banglaTitle": "বাংলাদেশ সীমান্তে বিএসএফের সতর্কতা জারি, অনুপ্রবেশ রোধে বিশেষ অভিযান",
    "summaryBn": "বাংলাদেশ সীমান্তে বিএসএফ উচ্চ সতর্কতা জারি করেছে এবং অনুপ্রবেশ রোধে বিশেষ অভিযান শুরু করেছে। ভারতীয় গণমাধ্যম এটিকে নিরাপত্তা ব্যবস্থা হিসেবে নিরপেক্ষভাবে উপস্থাপন করেছে, তবে সীমান্তে উত্তেজনার ইঙ্গিত রয়েছে।",
    "summaryEn": "BSF has issued a high alert along the Bangladesh border and launched a special operation to check infiltration. Indian media presented this neutrally as a security measure, though it hints at border tensions.",
    "keyPointsBn": [
      "বাংলাদেশ সীমান্তে বিএসএফের উচ্চ সতর্কতা জারি",
      "অনুপ্রবেশ রোধে বিশেষ অভিযান শুরু",
      "ভারতীয় গণমাধ্যম এটিকে নিরাপত্তা ব্যবস্থা হিসেবে দেখছে"
    ],
    "keyPointsEn": [
      "BSF issues high alert along Bangladesh border",
      "Special operation launched to check infiltration",
      "Indian media views it as a security measure"
    ],
    "category": "border",
    "categoryLabelBn": "সীমান্ত নিরাপত্তা ও বিএসএফ",
    "categoryLabelEn": "Border & Security",
    "sentiment": "neutral",
    "sentimentReasonBn": "ভারতীয় গণমাধ্যম নিরপেক্ষভাবে নিরাপত্তা ব্যবস্থার খবর দিয়েছে, কোনো পক্ষকে দোষারোপ না করে সীমান্ত সুরক্ষার প্রয়োজনীয়তার উপর জোর দিয়েছে।",
    "sentimentReasonEn": "Indian media reported neutrally on the security measure, emphasizing border protection without blaming any side.",
    "source": {
      "name": "The Times of India",
      "bureau": "Kolkata",
      "language": "English",
      "originalUrl": "https://timesofindia.indiatimes.com/india/bsf-alert-bangladesh-border",
      "originalHeadline": "BSF on high alert along Bangladesh border, special operation to check infiltration",
      "scannedAt": "2026-09-11T09:00:00+05:30"
    },
    "publishedAt": "2026-09-11T09:00:00+05:30",
    "readTimeBn": "২ মিনিট",
    "readTimeEn": "2 min read",
    "imageUrl": "https://timesofindia.indiatimes.com/images/bsf-border-alert.jpg",
    "tags": [
      "BSF",
      "Border Security",
      "Bangladesh",
      "Infiltration"
    ],
    "isLeadStory": false
  },
  {
    "id": "24",
    "slug": "bangladesh-india-power-trade-increase",
    "title": "Bangladesh to import more power from India to meet summer demand",
    "englishTitle": "Bangladesh to import more power from India to meet summer demand",
    "banglaTitle": "গ্রীষ্মের চাহিদা মেটাতে ভারত থেকে বেশি বিদ্যুৎ আমদানি করবে বাংলাদেশ",
    "summaryBn": "গ্রীষ্মের চাহিদা মেটাতে বাংলাদেশ ভারত থেকে আরও বিদ্যুৎ আমদানি করার পরিকল্পনা করেছে। ভারতীয় গণমাধ্যম এটিকে দ্বিপাক্ষিক শক্তি সহযোগিতার ইতিবাচক উদাহরণ হিসেবে উপস্থাপন করেছে।",
    "summaryEn": "Bangladesh plans to import more power from India to meet summer demand. Indian media presented this as a positive example of bilateral energy cooperation.",
    "keyPointsBn": [
      "গ্রীষ্মের চাহিদা মেটাতে ভারত থেকে বেশি বিদ্যুৎ আমদানির পরিকল্পনা",
      "ভারতীয় গণমাধ্যম এটিকে ইতিবাচক শক্তি সহযোগিতা হিসেবে দেখছে",
      "দ্বিপাক্ষিক সম্পর্ক জোরদারে সহায়ক"
    ],
    "keyPointsEn": [
      "Bangladesh to import more power from India for summer demand",
      "Indian media sees it as positive energy cooperation",
      "Helps strengthen bilateral ties"
    ],
    "category": "economy",
    "categoryLabelBn": "অর্থনীতি ও বিদ্যুৎ",
    "categoryLabelEn": "Economy & Energy",
    "sentiment": "positive",
    "sentimentReasonBn": "ভারতীয় গণমাধ্যম বিদ্যুৎ আমদানিকে ইতিবাচক সহযোগিতা হিসেবে উপস্থাপন করেছে, যা দুই দেশের সম্পর্ক উন্নয়নে সহায়ক।",
    "sentimentReasonEn": "Indian media framed the power import as positive cooperation, beneficial for bilateral relations.",
    "source": {
      "name": "The Hindu BusinessLine",
      "bureau": "Delhi",
      "language": "English",
      "originalUrl": "https://www.thehindubusinessline.com/news/bangladesh-power-import-india",
      "originalHeadline": "Bangladesh to import more power from India to meet summer demand",
      "scannedAt": "2026-09-11T08:00:00+05:30"
    },
    "publishedAt": "2026-09-11T08:00:00+05:30",
    "readTimeBn": "২ মিনিট",
    "readTimeEn": "2 min read",
    "imageUrl": "https://www.thehindubusinessline.com/images/power-import.jpg",
    "tags": [
      "Power",
      "Energy",
      "Bangladesh",
      "India",
      "Trade"
    ],
    "isLeadStory": false
  },
  {
    "id": "25",
    "slug": "india-bangladesh-cricket-series-2027",
    "title": "India to tour Bangladesh for limited-overs series in 2027",
    "englishTitle": "India to tour Bangladesh for limited-overs series in 2027",
    "banglaTitle": "২০২৭ সালে সীমিত ওভারের সিরিজ খেলতে বাংলাদেশ সফর করবে ভারত",
    "summaryBn": "২০২৭ সালে সীমিত ওভারের সিরিজ খেলতে ভারত বাংলাদেশ সফর করবে বলে ঘোষণা দেওয়া হয়েছে। ভারতীয় গণমাধ্যম এটিকে ক্রীড়া কূটনীতির ইতিবাচক উদাহরণ হিসেবে উপস্থাপন করেছে।",
    "summaryEn": "India will tour Bangladesh for a limited-overs series in 2027, it was announced. Indian media presented this as a positive example of sports diplomacy.",
    "keyPointsBn": [
      "২০২৭ সালে বাংলাদেশ সফর করবে ভারতীয় ক্রিকেট দল",
      "সীমিত ওভারের সিরিজ অনুষ্ঠিত হবে",
      "ভারতীয় গণমাধ্যম এটিকে ক্রীড়া কূটনীতি হিসেবে দেখছে"
    ],
    "keyPointsEn": [
      "Indian cricket team to tour Bangladesh in 2027",
      "Limited-overs series to be held",
      "Indian media views it as sports diplomacy"
    ],
    "category": "sports",
    "categoryLabelBn": "ক্রীড়া ও ক্রিকেট",
    "categoryLabelEn": "Sports & Cricket",
    "sentiment": "positive",
    "sentimentReasonBn": "ভারতীয় গণমাধ্যম ক্রিকেট সিরিজকে ইতিবাচক ক্রীড়া কূটনীতি হিসেবে উপস্থাপন করেছে, যা দুই দেশের জনগণের মধ্যে সম্পর্ক উন্নয়নে সহায়ক।",
    "sentimentReasonEn": "Indian media framed the cricket series as positive sports diplomacy, helping improve people-to-people ties.",
    "source": {
      "name": "The Times of India",
      "bureau": "Delhi",
      "language": "English",
      "originalUrl": "https://timesofindia.indiatimes.com/sports/cricket/india-tour-bangladesh-2027",
      "originalHeadline": "India to tour Bangladesh for limited-overs series in 2027",
      "scannedAt": "2026-09-11T07:00:00+05:30"
    },
    "publishedAt": "2026-09-11T07:00:00+05:30",
    "readTimeBn": "১ মিনিট",
    "readTimeEn": "1 min read",
    "imageUrl": "https://timesofindia.indiatimes.com/images/cricket-series.jpg",
    "tags": [
      "Cricket",
      "Bangladesh",
      "India",
      "Sports"
    ],
    "isLeadStory": false
  },
  {
    "id": "26",
    "slug": "india-bangladesh-passenger-train-services-resumption",
    "title": "India, Bangladesh likely to discuss resumption of passenger train services",
    "englishTitle": "India, Bangladesh likely to discuss resumption of passenger train services",
    "banglaTitle": "ভারত, বাংলাদেশ যাত্রীবাহী ট্রেন পরিষেবা পুনরায় চালু নিয়ে আলোচনা করতে পারে",
    "summaryBn": "ভারত ও বাংলাদেশ মৈত্রী ও বন্ধন এক্সপ্রেস সহ যাত্রীবাহী ট্রেন পরিষেবা পুনরায় চালু করার বিষয়ে আলোচনা করতে পারে। এই আলোচনা দ্বিপাক্ষিক যোগাযোগ ও সম্পর্ক উন্নয়নের ইঙ্গিত দেয়।",
    "summaryEn": "India and Bangladesh are likely to discuss resuming passenger train services, including Maitree and Bandhan Express. This discussion signals improved bilateral connectivity and relations.",
    "keyPointsBn": [
      "ভারত ও বাংলাদেশ যাত্রীবাহী ট্রেন পরিষেবা পুনরায় চালু নিয়ে আলোচনা করতে পারে।",
      "মৈত্রী ও বন্ধন এক্সপ্রেস সহ পরিষেবাগুলি আলোচনার অন্তর্ভুক্ত।",
      "এই আলোচনা দ্বিপাক্ষিক যোগাযোগ ও সম্পর্ক উন্নয়নের ইঙ্গিত দেয়।"
    ],
    "keyPointsEn": [
      "India and Bangladesh may discuss resuming passenger train services.",
      "Services including Maitree and Bandhan Express are part of the discussion.",
      "This discussion signals improved bilateral connectivity and relations."
    ],
    "category": "trade",
    "categoryLabelBn": "সীমান্ত বাণিজ্য ও বন্দর",
    "categoryLabelEn": "Cross-Border Trade",
    "sentiment": "positive",
    "sentimentReasonBn": "ভারতীয় মিডিয়া এই খবরটি ইতিবাচকভাবে উপস্থাপন করেছে, দ্বিপাক্ষিক সম্পর্ক উন্নয়নের সম্ভাবনা তুলে ধরে।",
    "sentimentReasonEn": "Indian media framed the news positively, highlighting potential improvements in bilateral relations.",
    "source": {
      "name": "The Indian Express India",
      "bureau": "Delhi",
      "language": "English",
      "originalUrl": "https://indianexpress.com/article/india/india-bangladesh-to-discuss-resuming-maitree-bandhan-mitali-express-train-services-10867306/",
      "originalHeadline": "India, Bangladesh likely to discuss resumption of passenger train services",
      "scannedAt": "2026-09-12T10:00:00Z"
    },
    "publishedAt": "2026-09-07T13:36:01+00:00",
    "readTimeBn": "২ মিনিট",
    "readTimeEn": "2 min read",
    "imageUrl": "https://indianexpress.com/wp-content/uploads/2026/09/train-services.jpg",
    "tags": [
      "India-Bangladesh",
      "Train Services",
      "Connectivity",
      "Trade"
    ],
    "isLeadStory": false
  },
  {
    "id": "27",
    "slug": "family-court-relief-man-pushed-into-bangladesh",
    "title": "Family gets court relief, but how to find 43-year-old pushed into Bangladesh?",
    "englishTitle": "Family gets court relief, but how to find 43-year-old pushed into Bangladesh?",
    "banglaTitle": "পরিবার আদালত থেকে স্বস্তি পেলেও, বাংলাদেশে ঠেলে দেওয়া ৪৩ বছর বয়সীকে কীভাবে খুঁজে পাওয়া যাবে?",
    "summaryBn": "একটি পরিবার আদালত থেকে স্বস্তি পেলেও, তাদের ৪৩ বছর বয়সী সদস্যকে বাংলাদেশে ঠেলে দেওয়ার পর খুঁজে পাওয়া চ্যালেঞ্জিং হয়ে দাঁড়িয়েছে। এই ঘটনা সীমান্ত নিরাপত্তা ও মানবাধিকার উদ্বেগ প্রকাশ করে।",
    "summaryEn": "A family received court relief, but finding their 43-year-old member who was pushed into Bangladesh remains challenging. This incident highlights border security and human rights concerns.",
    "keyPointsBn": [
      "একটি পরিবার আদালত থেকে স্বস্তি পেয়েছে।",
      "তাদের ৪৩ বছর বয়সী সদস্যকে বাংলাদেশে ঠেলে দেওয়া হয়েছে।",
      "এই ঘটনা সীমান্ত নিরাপত্তা ও মানবাধিকার উদ্বেগ প্রকাশ করে।"
    ],
    "keyPointsEn": [
      "A family received court relief.",
      "Their 43-year-old member was pushed into Bangladesh.",
      "This incident highlights border security and human rights concerns."
    ],
    "category": "border",
    "categoryLabelBn": "সীমান্ত নিরাপত্তা ও বিএসএফ",
    "categoryLabelEn": "Border & Security",
    "sentiment": "negative",
    "sentimentReasonBn": "ভারতীয় মিডিয়া এই খবরটি নেতিবাচকভাবে উপস্থাপন করেছে, সীমান্ত নিরাপত্তা ও মানবাধিকার লঙ্ঘনের দিকে মনোযোগ আকর্ষণ করে।",
    "sentimentReasonEn": "Indian media framed the news negatively, drawing attention to border security and human rights violations.",
    "source": {
      "name": "The Indian Express India",
      "bureau": "Delhi",
      "language": "English",
      "originalUrl": "https://indianexpress.com/article/india/family-court-relief-how-find-43-year-old-pushed-bangladesh-10870452/",
      "originalHeadline": "Family gets court relief, but how to find 43-year-old pushed into Bangladesh?",
      "scannedAt": "2026-09-12T10:00:00Z"
    },
    "publishedAt": "2026-09-09T14:37:44+00:00",
    "readTimeBn": "২ মিনিট",
    "readTimeEn": "2 min read",
    "imageUrl": "https://indianexpress.com/wp-content/uploads/2026/09/border-security.jpg",
    "tags": [
      "Border Security",
      "Human Rights",
      "India-Bangladesh",
      "BSF"
    ],
    "isLeadStory": false
  },
  {
    "id": "28",
    "slug": "amar-ujala-hindu-journalist-death-dhaka-samakal-investigation",
    "title": "बांग्लादेश में हिंदू पत्रकार की संदिग्ध मौत: दफ्तर में फंदे से लटका मिला शव, अवामी लीग ने क्यों उठाए सवाल?",
    "englishTitle": "Death of Hindu Journalist in Bangladesh: Body Found Inside Newsroom, Calls for Transparent Investigation",
    "banglaTitle": "বাংলাদেশে হিন্দু সাংবাদিকের রহস্যজনক মৃত্যু: পত্রিকা কার্যালয়ে মরদেহ উদ্ধার, নিরপেক্ষ তদন্তের দাবি",
    "summaryBn": "অমর উজালা দিল্লি ব্যুরোর খবরে প্রকাশ, ঢাকায় দৈনিক সমকাল পত্রিকার সিনিয়র সহ-সম্পাদক ও সনাতন ধর্মাবলম্বী সাংবাদিকের মরদেহ কার্যালয়ের ভেতর থেকে উদ্ধার করা হয়েছে। পুলিশ ঘটনার তদন্ত শুরু করেছে এবং ময়নাতদন্তের জন্য মরদেহ ঢাকা মেডিকেল কলেজ হাসপাতালে পাঠানো হয়েছে। বিভিন্ন সাংবাদিক সংগঠন ও রাজনৈতিক মহল ঘটনার নিরপেক্ষ তদন্ত ও সংবাদকর্মীদের সুরক্ষার জোর দাবি জানিয়েছে।",
    "summaryEn": "Amar Ujala reports on the tragic discovery of a senior Hindu journalist and sub-editor found dead inside the newsroom of a major daily in Dhaka. Local law enforcement authorities have launched an inquest and sent the body for forensic post-mortem analysis, while journalist associations and political observers urge a thorough, transparent probe and enhanced safety for mediapersons.",
    "keyPointsBn": [
      "ঢাকা পুলিশ ঘটনাস্থল পরিদর্শন করে সিসিটিভি ফুটেজ ও আলামত সংগ্রহ করেছে।",
      "বাংলাদেশ ফেডারেল সাংবাদিক ইউনিয়ন (বিএফইউজে) নিরপেক্ষ ও দ্রুত তদন্ত প্রতিবেদন প্রকাশের দাবি জানিয়েছে।",
      "ঘটনার কারণ খতিয়ে দেখতে পুলিশের গোয়েন্দা বিভাগ বিশেষ দল গঠন করেছে।"
    ],
    "keyPointsEn": [
      "Dhaka Metropolitan Police inspect the premises, retrieving CCTV footage and forensic evidence.",
      "Journalist federations in Dhaka issue calls for an impartial, expedited forensic enquiry.",
      "Specialist detective units assigned to investigate all circumstantial elements."
    ],
    "category": "politics",
    "categoryLabelBn": "রাজনীতি ও গণমাধ্যম সুরক্ষা",
    "categoryLabelEn": "Politics & Governance",
    "sentiment": "negative",
    "sentimentReasonBn": "সাংবাদিকের অনাকাঙ্ক্ষিত মৃত্যু এবং গণমাধ্যমকর্মীদের নিরাপত্তা ও উদ্বেগের প্রেক্ষাপট।",
    "sentimentReasonEn": "Focuses on the unfortunate demise of a media professional, safety concerns, and demands for swift justice.",
    "source": {
      "name": "Amar Ujala",
      "bureau": "Delhi",
      "language": "Hindi",
      "originalUrl": "https://www.amarujala.com/world",
      "originalHeadline": "बांग्लादेश में हिंदू पत्रकार की संदिग्ध मौत: दफ्तर में फंदे से लटका मिला शव, अवामी लीग ने क्यों उठाए सवाल?",
      "scannedAt": "52 mins ago"
    },
    "publishedAt": "2026-09-12T02:05:05Z",
    "readTimeBn": "৩ মিনিট পাঠ",
    "readTimeEn": "3 min read",
    "imageUrl": "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&auto=format&fit=crop&q=80",
    "isTrending": true,
    "tags": [
      "Amar Ujala",
      "Media Freedom",
      "Dhaka Newsroom",
      "Investigation",
      "Journalism"
    ],
    "isLeadStory": false
  },
  {
    "id": "29",
    "slug": "sheikh-hasina-daughter-saima-wazed-who-regional-director-resignation",
    "title": "Sheikh Hasina’s daughter resigns as WHO regional director amid fraud allegations",
    "banglaTitle": "বিশ্ব স্বাস্থ্য সংস্থার আঞ্চলিক পরিচালকের পদ থেকে পদত্যাগ করলেন শেখ হাসিনার মেয়ে সায়মা ওয়াজেদ",
    "summaryBn": "দ্য হিন্দু ও ইন্ডিয়ান এক্সপ্রেসের প্রতিবেদনে জানা গেছে, বিশ্ব স্বাস্থ্য সংস্থার (হু) দক্ষিণ-পূর্ব এশিয়া অঞ্চলের আঞ্চলিক পরিচালকের পদ থেকে ইস্তফা দিয়েছেন সাবেক প্রধানমন্ত্রী শেখ হাসিনার মেয়ে সায়মা ওয়াজেদ পুতুল। এর আগে হু আঞ্চলিক কমিটি তার নিয়োগের প্রক্রিয়া ও অনিয়মের অভিযোগ নিয়ে পর্যালোচনা বৈঠক করে পদত্যাগের সুপারিশ করেছিল।",
    "summaryEn": "The Hindu and Indian Express report that Saima Wazed, daughter of former Bangladesh Prime Minister Sheikh Hasina, has resigned from her position as the World Health Organization (WHO) Regional Director for South-East Asia. The resignation followed recommendations by the WHO regional committee reviewing complaints and administrative petitions.",
    "keyPointsBn": [
      "সায়মা ওয়াজেদ ২০২৩ সালে দিল্লির আঞ্চলিক কার্যালয়ে পাঁচ বছরের জন্য দায়িত্ব গ্রহণ করেছিলেন।",
      "ঢাকা থেকে অন্তর্বর্তী সরকারের পক্ষ থেকে নিয়োগ সংক্রান্ত অনিয়মের অভিযোগ আন্তর্জাতিক ফোরামে তোলা হয়েছিল।",
      "হু প্রধান কার্যালয় জানিয়েছে যে অন্তর্বর্তীকালীন নেতৃত্বের মাধ্যমে আঞ্চলিক কার্যক্রম নির্বিঘ্নে পরিচালিত হবে।"
    ],
    "keyPointsEn": [
      "Saima Wazed had assumed the five-year directorship role at the New Delhi regional headquarters in 2023.",
      "Administrative petitions challenging the nomination process had been submitted by interim authorities in Dhaka.",
      "WHO headquarters confirmed interim arrangements to ensure South-East Asia healthcare operations proceed without disruption."
    ],
    "category": "diplomacy",
    "categoryLabelBn": "কূটনীতি ও আন্তর্জাতিক সংস্থা",
    "categoryLabelEn": "Diplomacy & Water",
    "sentiment": "negative",
    "sentimentReasonBn": "আন্তর্জাতিক সংস্থার শীর্ষ পদে বিতর্ক, অভিযোগ এবং আকস্মিক পদত্যাগের ঘটনা।",
    "sentimentReasonEn": "Covers administrative scrutiny, institutional resignations, and multilateral governance friction.",
    "source": {
      "name": "The Hindu",
      "bureau": "Delhi",
      "language": "English",
      "originalUrl": "https://www.thehindu.com/news/international/",
      "originalHeadline": "Sheikh Hasina's daughter resigns as WHO regional director amid fraud allegations",
      "scannedAt": "1 hour ago"
    },
    "publishedAt": "2026-09-11T19:49:44Z",
    "readTimeBn": "৪ মিনিট পাঠ",
    "readTimeEn": "4 min read",
    "imageUrl": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "WHO",
      "The Hindu",
      "Diplomacy",
      "Saima Wazed",
      "Health Governance"
    ],
    "isLeadStory": false
  },
  {
    "id": "30",
    "slug": "sangbad-pratidin-chinmoy-das-kolkata-reverberations",
    "title": "‘হিন্দু বলে আমার মাকেও পালিয়ে আসতে হয়েছিল’, চিন্ময় প্রভুর চোখের জল দেখে অতীত স্মরণ শুভেন্দুর",
    "englishTitle": "Kolkata Political Reactions on Bangladesh Situation: Opposition Leader Recalls Past Hardships",
    "summaryBn": "সংবাদ প্রতিদিনের কলকাতা ডেস্ক জানাচ্ছে, বাংলাদেশে কারাবন্দি ইসকন সন্ন্যাসী চিন্ময় কৃষ্ণ দাস প্রভুর মায়ের শেষকৃত্য সংক্রান্ত ছবিকে কেন্দ্র করে কলকাতায় রাজনৈতিক মহলে তীব্র প্রতিক্রিয়া তৈরি হয়েছে। বিরোধী দলনেতা শুভেন্দু অধিকারী অতীত স্মৃতি স্মরণ করে সনাতন ধর্মাবলম্বীদের ধর্মীয় অধিকার ও মানবাধিকার সুরক্ষার দাবি জানিয়েছেন। একই সাথে দ্য হিন্দুতেও এই বিষয়ে বিস্তারিত প্রতিবেদন প্রকাশিত হয়েছে।",
    "summaryEn": "Sangbad Pratidin reports from Kolkata on intense political discussions regarding the continued incarceration of Bangladeshi Hindu monk Chinmoy Krishna Das. Leaders in West Bengal reacted strongly to recent media photographs of the monk, urging international rights bodies and bilateral diplomatic channels to ensure fair trial standards, bail considerations, and human rights safeguards.",
    "keyPointsBn": [
      "কলকাতায় বিভিন্ন সামাজিক ও ধর্মীয় সংগঠনের পক্ষ থেকে সংহতি সমাবেশ অনুষ্ঠিত।",
      "দ্বিপাক্ষিক স্তরে ধর্মীয় সংখ্যালঘুদের অধিকার রক্ষার বিষয়ে ভারতের বিদেশ মন্ত্রকের দৃষ্টি আকর্ষণ।",
      "আইনজীবীরা আদালতে মানবিক কারণে জামিন শুনানির আবেদন দ্রুত নিষ্পত্তির তাগিদ দিয়েছেন।"
    ],
    "keyPointsEn": [
      "Solidarity rallies organized by cultural and religious organizations across Kolkata.",
      "Calls directed to MEA in Delhi to maintain diplomatic monitoring of fair legal trials.",
      "Legal defense teams advocate for prompt bail consideration on humanitarian grounds."
    ],
    "category": "politics",
    "categoryLabelBn": "রাজনীতি ও মানবাধিকার",
    "categoryLabelEn": "Politics & Governance",
    "sentiment": "negative",
    "sentimentReasonBn": "কারাবন্দি ধর্মীয় নেতাকে কেন্দ্র করে উদ্বেগ, রাজনৈতিক বিতর্ক ও সংবেদনশীল আলোচনা।",
    "sentimentReasonEn": "Covers political friction, human rights concerns, and heightened public sensitivity across the Bengal border.",
    "source": {
      "name": "Sangbad Pratidin",
      "bureau": "Kolkata",
      "language": "Bengali",
      "originalUrl": "https://www.sangbadpratidin.in/kolkata/",
      "originalHeadline": "‘হিন্দু বলে আমার মাকেও পালিয়ে আসতে হয়েছিল’, চিন্ময় প্রভুর চোখের জল দেখে অতীত স্মরণ শুভেন্দুর",
      "scannedAt": "2 hours ago"
    },
    "publishedAt": "2026-09-12T09:23:33Z",
    "readTimeBn": "৪ মিনিট পাঠ",
    "readTimeEn": "4 min read",
    "imageUrl": "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "Sangbad Pratidin",
      "Kolkata Politics",
      "Chinmoy Das",
      "Human Rights",
      "West Bengal"
    ],
    "isLeadStory": false
  },
  {
    "id": "31",
    "slug": "petrapole-benapole-trade-volume-hilsa-garment-logistics-abp",
    "title": "পেট্রাপোল সীমান্তে রেকর্ড বাণিজ্য: চব্বিশ ঘণ্টা পণ্য চলাচলে স্বস্তি দুই পারের ব্যবসায়ীদের",
    "englishTitle": "Record Cross-Border Trade at Petrapole: 24-Hour Cargo Movement Relieves Traders on Both Sides",
    "summaryBn": "আনন্দবাজার পত্রিকার সীমান্ত প্রতিনিধি জানাচ্ছেন, পেট্রাপোল-বেনাপোল সীমান্তে ২৪ ঘণ্টা স্বয়ংক্রিয় পণ্য ও যাত্রীবাহী লেন চালুর পর আমদানি-রফতানি বাণিজ্যে নতুন গতি এসেছে। ভারতীয় টেক্সটাইল মিল থেকে সুতো, তুলা ও রাসায়নিক কাঁচামাল দ্রুত বাংলাদেশে পৌঁছাচ্ছে। অন্যদিকে পদ্মার ইলিশবাহী ট্রাক বিশেষ ছাড়পত্র পেয়ে কলকাতার পাইকারি বাজারে পৌঁছানো শুরু হয়েছে।",
    "summaryEn": "Anandabazar Patrika’s border correspondent reports that land customs at Petrapole-Benapole have implemented 24/7 automated passenger and cargo lanes. Raw cotton, yarn, and chemical dyes from Indian mills are flowing into Bangladeshi ready-made garment clusters with minimal inspection delays, while specialized seasonal consignments of Padma Hilsa arrived at Kolkata wholesale fish markets.",
    "keyPointsBn": [
      "স্বয়ংক্রিয় স্মার্ট গেট চালুর পর দৈনিক পণ্যবাহী ট্রাকের সংখ্যা ৭৫০ থেকে বেড়ে ১২০০ ছাড়িয়েছে।",
      "সুরাট, আমদাবাদ ও লুধিয়ানার সুতো রফতানিকারকরা বাংলাদেশের গার্মেন্টস অর্ডার দ্রুত সরবরাহে স্বস্তি প্রকাশ করেছেন।",
      "উৎসবের মরশুমে কলকাতার মাছ বাজারে বিশেষ সড়ক করিডোর দিয়ে ৫০০ টন পদ্মার ইলিশ আমদানি নিশ্চিত হয়েছে।"
    ],
    "keyPointsEn": [
      "Daily cargo clearance increased from 750 trucks to over 1,200 following integrated automated smart gates.",
      "Textile exporters in Surat, Ahmedabad, and Ludhiana report steady demand from Dhaka buying houses.",
      "Kolkata fish merchants welcome the arrival of 500 tonnes of festive Hilsa consignments via land route."
    ],
    "category": "trade",
    "categoryLabelBn": "সীমান্ত বাণিজ্য",
    "categoryLabelEn": "Cross-Border Trade",
    "sentiment": "positive",
    "sentimentReasonBn": "সীমান্ত বাণিজ্য সহজীকরণ, ২৪ ঘণ্টা কার্গো চলাচল এবং দুই দেশের ব্যবসায়ীদের অর্থনৈতিক সুফলের ওপর জোর দেওয়া হয়েছে।",
    "sentimentReasonEn": "Highlights seamless cross-border trade acceleration, automated cargo clearance, and mutual economic benefits between Kolkata and Bangladesh.",
    "source": {
      "name": "Anandabazar Patrika",
      "bureau": "Kolkata",
      "language": "Bengali",
      "originalUrl": "https://www.anandabazar.com/world",
      "originalHeadline": "পেট্রাপোল সীমান্তে রেকর্ড বাণিজ্য: চব্বিশ ঘণ্টা পণ্য চলাচলে স্বস্তি দুই পারের ব্যবসায়ীদের",
      "scannedAt": "2.5 hours ago"
    },
    "publishedAt": "2026-09-12T08:30:00Z",
    "readTimeBn": "৩ মিনিট পাঠ",
    "readTimeEn": "3 min read",
    "imageUrl": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "Petrapole",
      "Benapole",
      "Border Trade",
      "Hilsa",
      "RMG Supply Chain",
      "Kolkata"
    ],
    "isLeadStory": false
  },
  {
    "id": "32",
    "slug": "dainik-jagran-border-security-bsf-smuggling-curfew",
    "title": "भारत-बांग्लादेश सीमा पर बीएसएफ का हाई अलर्ट: मेघालय और कूचबिहार में ड्रोन से पैनी निगरानी",
    "englishTitle": "BSF on High Alert Along Indo-Bangla Border: Drone Surveillance Intensified in Meghalaya & Cooch Behar",
    "banglaTitle": "ভারত-বাংলাদেশ সীমান্তে বিএসএফের হাই অ্যালার্ট: মেঘালয় ও কোচবিহারে ড্রোন নজরদারি জোরদার",
    "summaryBn": "দৈনিক জাগরণের প্রতিবেদন অনুযায়ী, বিএসএফের ইস্টার্ন কমান্ড মেঘালয় ও উত্তরবঙ্গের নদীমাতৃক ও কাঁটাতারহীন সীমান্তে অতিরিক্ত সৈন্য মোতায়েন করেছে। সীমান্ত এলাকায় চোরাচালান ও অনুপ্রবেশের আশঙ্কায় নাইট-ভিশন ড্রোন ও থার্মাল ইমেজিং ক্যামেরার মাধ্যমে সার্বক্ষণিক নজরদারি চালানো হচ্ছে এবং সীমান্তবর্তী গ্রামগুলোতে রাতের কারফিউ জারি করা হয়েছে।",
    "summaryEn": "Dainik Jagran reports that the Border Security Force (BSF) eastern command has deployed additional thermal imaging cameras and drone surveillance along unfenced patches in Meghalaya and Cooch Behar. The report cites intelligence inputs regarding smuggling cartels attempting to exploit political transitions in Dhaka, prompting joint patrolling and border curfew enforcement.",
    "keyPointsBn": [
      "মেঘালয় ও আসাম সীমান্তে বিএসএফ ব্যাটালিয়নগুলোকে রাতের টহল দ্বিগুণ করার কঠোর নির্দেশ দেওয়া হয়েছে।",
      "নদীপথে চোরাচালান ঠেকাতে স্পর্শকাতর সেক্টরগুলোতে অতিরিক্ত স্পিডবোট মোতায়েন করা হয়েছে।",
      "দিল্লিতে ভারতের স্বরাষ্ট্র মন্ত্রণালয় বর্ডার গার্ড বাংলাদেশের (BGB) সাথে নিয়মিত ফ্ল্যাগ মিটিং অব্যাহত রাখার পরামর্শ দিয়েছে।"
    ],
    "keyPointsEn": [
      "BSF battalions in Meghalaya and Assam sectors issued heightened red-alerts for night-time patrols.",
      "Seizures of contraband and unauthorized crossing attempts monitored along riverine unfenced patches.",
      "Indian Home Ministry officials in Delhi urge Border Guard Bangladesh (BGB) to maintain synchronized flag meetings."
    ],
    "category": "border",
    "categoryLabelBn": "সীমান্ত নিরাপত্তা",
    "categoryLabelEn": "Border & Security",
    "sentiment": "negative",
    "sentimentReasonBn": "সীমান্তে অনুপ্রবেশের আশঙ্কা, চোরাচালান এবং ভারতীয় নিরাপত্তা বাহিনীর উচ্চ সতর্কতার ওপর আলোকপাত করা হয়েছে।",
    "sentimentReasonEn": "Focuses on cross-border infiltration risks, smuggling concerns, and heightened border alerts flagged by Indian security forces.",
    "source": {
      "name": "Dainik Jagran",
      "bureau": "Delhi",
      "language": "Hindi",
      "originalUrl": "https://www.jagran.com/news/national-news-hindi.html",
      "originalHeadline": "भारत-बांग्लादेश सीमा पर बीएसएफ का हाई अलर्ट: मेघालय और कूचबिहार में ड्रोन से पैनी निगरानी",
      "scannedAt": "3 hours ago"
    },
    "publishedAt": "2026-09-12T07:45:00Z",
    "readTimeBn": "৪ মিনিট পাঠ",
    "readTimeEn": "4 min read",
    "imageUrl": "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "BSF",
      "Border Security",
      "Meghalaya",
      "Smuggling",
      "Infiltration",
      "Dainik Jagran"
    ],
    "isLeadStory": false
  },
  {
    "id": "33",
    "slug": "india-bangladesh-teesta-water-treaty-delhi-diplomatic-reassessment",
    "title": "Delhi Reviewing Technical Parameters on Teesta River Sharing Framework Ahead of Joint River Commission Talks",
    "banglaTitle": "যৌথ নদী কমিশনের বৈঠকের আগে তিস্তার পানি বণ্টন কাঠামোর কারিগরি দিক পর্যালোচনা করছে দিল্লি",
    "summaryBn": "ভারতের জলসম্পদ ও বিদেশ মন্ত্রক যৌথ নদী কমিশনের (JRC) আসন্ন বৈঠকের জন্য তিস্তা নদীর পানি প্রবাহ সংক্রান্ত সর্বশেষ হাইড্রোলজিক্যাল তথ্য প্রস্তুত করছে। প্রতিবেদনে উত্তরবঙ্গের সেচের প্রয়োজনীয়তা রক্ষার পাশাপাশি সিকিমের ব্যারেজ ব্যবস্থাপনার মাধ্যমে শুষ্ক মৌসুমে বাংলাদেশের রংপুর অঞ্চলের জন্য পানির ন্যায্য প্রবাহ নিশ্চিত করার উপায় খতিয়ে দেখা হচ্ছে।",
    "summaryEn": "India’s Ministry of Water Resources and External Affairs Ministry in Delhi are preparing updated hydrological data for the upcoming Joint River Commission meeting with Bangladesh. The report emphasizes balancing northern West Bengal irrigation needs while exploring reservoir management options in Sikkim to ensure dry-season water flow guarantees for Bangladesh’s Rangpur basin.",
    "keyPointsBn": [
      "দিল্লির নীতিনির্ধারকরা সিকিমের উজানের জলাধারের পানি প্রবাহের তথ্য বিশ্লেষণ করছেন।",
      "পশ্চিমবঙ্গ রাজ্য প্রশাসন স্পষ্ট করেছে যে উত্তরবঙ্গের কৃষকদের সেচের পানি সংকট তৈরি হতে দেওয়া যাবে না।",
      "উভয় পক্ষই একমত যে তৃতীয় পক্ষের প্রভাব এড়াতে প্রাতিষ্ঠানিক জেআরসি আলোচনাই প্রধান সমাধান।"
    ],
    "keyPointsEn": [
      "Delhi bureaucrats are analyzing Sikkim upstream reservoir flow data to model minimum winter discharge into Bangladesh.",
      "Kolkata state administration maintains that North Bengal farmers must not face lean-season water shortages.",
      "Both capitals agree that institutional JRC dialogues are essential to avoid third-party geopolitical entanglements."
    ],
    "category": "diplomacy",
    "categoryLabelBn": "কূটনীতি ও পানি",
    "categoryLabelEn": "Diplomacy & Water",
    "sentiment": "positive",
    "sentimentReasonBn": "দিল্লির ইতিবাচক মনোভাব এবং তিস্তার তথ্য বিনিময় ও প্রাতিষ্ঠানিক আলোচনা শুরুর আগ্রহ প্রকাশ পেয়েছে।",
    "sentimentReasonEn": "Constructive diplomatic posture from Delhi signaling willingness to share hydrological data and resume formal Joint River Commission dialogues.",
    "source": {
      "name": "The Indian Express",
      "bureau": "Delhi",
      "language": "English",
      "originalUrl": "https://indianexpress.com/article/india/delhi-reviews-technical-parameters-teesta-river-sharing-framework-joint-rivers-commission-9562810/",
      "originalHeadline": "India preps technical data on Teesta ahead of proposed Joint Rivers Commission engagement with Dhaka",
      "scannedAt": "3.5 hours ago"
    },
    "publishedAt": "2026-09-12T06:30:00Z",
    "readTimeBn": "৪ মিনিট পাঠ",
    "readTimeEn": "4 min read",
    "imageUrl": "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "Teesta River",
      "MEA Delhi",
      "Diplomacy",
      "Joint River Commission",
      "Water Resources"
    ],
    "isLeadStory": false
  },
  {
    "id": "34",
    "slug": "ei-samay-transnational-cyber-scam-chittagong-foreigners-arrested",
    "title": "স্ক্যাম-চক্রে বাংলাদেশে শতাধিক বিদেশি ধৃত",
    "englishTitle": "Over 100 Foreign Nationals Arrested in Bangladesh for Transnational Cyber Scam & Fraud Rings",
    "summaryBn": "এই সময় অনলাইনের প্রতিবেদনে জানানো হয়েছে, হত্যা, আর্থিক প্রতারণা, নারী পাচার ও অনলাইন জুয়া চক্রে জড়িত থাকার অভিযোগে গত এক বছরে ৫৩ জন চিনা নাগরিকসহ অন্তত ১১৬ জন বিদেশিকে গ্রেপ্তার করেছে বাংলাদেশ পুলিশ। সম্প্রতি চট্টগ্রামের খুলশিতে একটি আন্তর্জাতিক সাইবার ল্যাবে অভিযান চালিয়ে চিন, পাকিস্তান, লাওস, নেপাল ও ভিয়েতনামের ৬৩ জন জালিয়াতি চক্রের সদস্যকে আটক করা হয়।",
    "summaryEn": "Ei Samay reports that Bangladesh Police have cracked down on a major transnational cybercrime network, arresting over 116 foreign nationals across the past year—including 53 Chinese and several Pakistani citizens. A specialized raid in Chittagong’s Khulshi dismantled an international digital scam and cyber fraud hub with operations spanning Laos, Nepal, and Vietnam.",
    "keyPointsBn": [
      "চট্টগ্রামের খুলশিতে সাইবার অপরাধের আন্তর্জাতিক আস্তানায় অভিযান চালিয়ে ৬৩ জন বিদেশিকে গ্রেপ্তার করা হয়েছে।",
      "ধৃতদের মধ্যে চিন, পাকিস্তান, লাওস, নেপাল ও ভিয়েতনামের নাগরিক রয়েছে।",
      "পারিবারিক ও বিয়ের ভিসায় নারী পাচার এবং ডিজিটাল আর্থিক প্রতারণার বিষয়ে তদন্ত আরও জোরদার করা হয়েছে।"
    ],
    "keyPointsEn": [
      "Police raided a high-tech international cyber scam den in Chittagong’s Khulshi, detaining 63 foreign operatives.",
      "The transnational network involved citizens from China, Pakistan, Laos, Nepal, and Vietnam.",
      "Intelligence agencies have escalated probes into digital fraud syndicates and human trafficking rings exploiting marriage visas."
    ],
    "category": "border",
    "categoryLabelBn": "আন্তর্জাতিক অপরাধ ও সাইবার নিরাপত্তা",
    "categoryLabelEn": "Border & Security",
    "sentiment": "neutral",
    "sentimentReasonBn": "আন্তর্জাতিক সাইবার অপরাধ চক্রের বিস্তার এবং একই সাথে বাংলাদেশ পুলিশের সক্রিয় পদক্ষেপ ও কার্যকর আইনি অভিযানের বাস্তবনিষ্ঠ প্রতিবেদন।",
    "sentimentReasonEn": "Covers transnational fraud syndicates operating across regional borders alongside active law enforcement crackdowns by Bangladesh Police.",
    "source": {
      "name": "Ei Samay",
      "bureau": "Kolkata",
      "language": "Bengali",
      "originalUrl": "https://eisamay.com/bangladesh-news/more-than-100-foreigners-arrested-for-scam-in-bangladesh/200541587.cms",
      "originalHeadline": "স্ক্যাম-চক্রে বাংলাদেশে শতাধিক বিদেশি ধৃত",
      "scannedAt": "4 hours ago"
    },
    "publishedAt": "2026-09-12T11:19:45Z",
    "readTimeBn": "৩ মিনিট পাঠ",
    "readTimeEn": "3 min read",
    "imageUrl": "https://cf-images.assettype.com/eisamay%2F2026-08-26%2Fslc2ajr6%2F1786002572arrest-1.jpg?w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop&enlarge=true",
    "tags": [
      "Cyber Crime",
      "Ei Samay",
      "Chittagong",
      "Khulshi",
      "Transnational Fraud",
      "Arrests"
    ],
    "isLeadStory": false
  },
  {
    "id": "35",
    "slug": "ei-samay-medical-tourism-kolkata-hospitals-bangladesh-patients",
    "title": "বাংলাদেশি রোগীদের ভিসা জট: চরম আর্থিক ধাক্কায় কলকাতার বেসরকারি হাসপাতাল ও নার্সিংহোম",
    "englishTitle": "Bangladesh Patient Visa Bottlenecks: Kolkata Private Hospitals Suffer Severe Financial Hit",
    "summaryBn": "এই সময় (টাইমস গ্রুপ বাংলা)-এর প্রতিবেদনে কলকাতার স্বাস্থ্য পর্যটনের দুরবস্থা তুলে ধরা হয়েছে। মুকুন্দপুর ও সল্টলেকের নামী সুপার-স্পেশ্যালিটি হাসপাতালগুলিতে আন্তর্জাতিক রোগীদের ৭০ শতাংশই আসতেন বাংলাদেশ থেকে। মেডিক্যাল ভিসা প্রাপ্তিতে বিলম্বের কারণে রোগী আগমন প্রায় ৪০ শতাংশ কমে যাওয়ায় স্বাস্থ্য সংস্থাগুলি কেন্দ্রীয় বিদেশ মন্ত্রকে জরুরি ই-মেডিক্যাল ভিসা চালুর আবেদন জানিয়েছে।",
    "summaryEn": "Ei Samay (Times Group Bengali) reports on the severe economic impact felt by private hospital networks in Mukundapur and Salt Lake, Kolkata. Medical travel from Bangladesh, which traditionally constituted over 70% of Kolkata’s medical tourism revenue, has dropped sharply due to restricted visa appointments, prompting appeals for emergency medical e-visas.",
    "keyPointsBn": [
      "কলকাতার বেসরকারি হাসপাতালগুলিতে আন্তর্জাতিক স্যুট ও পূর্বনির্ধারিত জটিল অস্ত্রোপচার স্থগিত।",
      "ক্লিনিক, ডায়াগনস্টিক সেন্টার ও নিকটবর্তী গেস্ট হাউস মিলিয়ে মাসে প্রায় ৩৫০ কোটি টাকার আর্থিক ক্ষতির আশঙ্কা।",
      "পশ্চিমবঙ্গ বেসরকারি স্বাস্থ্য প্রতিষ্ঠান সমিতি বিদেশ মন্ত্রকে দ্রুত ই-ভিসা চালুর স্মারকলিপি জমা দিয়েছে।"
    ],
    "keyPointsEn": [
      "Major private hospitals in Kolkata report empty international patient suites and deferred surgeries.",
      "An estimated ₹350 Crore monthly revenue loss reported across private clinics and nearby guest houses.",
      "West Bengal health associations submit joint memorandum to MEA seeking fast-track medical e-visa clearance."
    ],
    "category": "economy",
    "categoryLabelBn": "অর্থনীতি ও চিকিৎসা",
    "categoryLabelEn": "Economy & Energy",
    "sentiment": "negative",
    "sentimentReasonBn": "ভিসা জটিলতার কারণে বাংলাদেশি রোগীদের ভোগান্তি এবং কলকাতার চিকিৎসা বাণিজ্যে নেতিবাচক আর্থিক প্রভাব তুলে ধরা হয়েছে।",
    "sentimentReasonEn": "Details the mutual economic hardship and medical distress caused by bilateral visa delays affecting Bangladeshi patients and Kolkata healthcare.",
    "source": {
      "name": "Ei Samay",
      "bureau": "Kolkata",
      "language": "Bengali",
      "originalUrl": "https://eisamay.com/business/kolkata-private-hospitals-face-revenue-loss-due-to-bangladesh-medical-visa-delays/200539812.cms",
      "originalHeadline": "বাংলাদেশি রোগীদের ভিসা জট: চরম আর্থিক ধাক্কায় কলকাতার নামী বেসরকারি হাসপাতাল ও নার্সিংহোম",
      "scannedAt": "4.5 hours ago"
    },
    "publishedAt": "2026-09-11T22:15:00Z",
    "readTimeBn": "৪ মিনিট পাঠ",
    "readTimeEn": "4 min read",
    "imageUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "Medical Tourism",
      "Kolkata Hospitals",
      "Visas",
      "Healthcare",
      "Ei Samay"
    ],
    "isLeadStory": false
  },
  {
    "id": "36",
    "slug": "business-standard-adani-power-godda-electricity-dhaka-dues",
    "title": "Adani Power and Bangladesh Power Development Board Agree on Streamlined Tariff Settlement Mechanism",
    "banglaTitle": "বিদ্যুৎ বিল নিষ্পত্তির বিষয়ে আদানি পাওয়ার ও বাংলাদেশ বিদ্যুৎ উন্নয়ন বোর্ডের সমঝোতা",
    "summaryBn": "বিজনেস স্ট্যান্ডার্ডের প্রতিবেদন অনুযায়ী, ঝাড়খণ্ডের গড্ডা প্ল্যান্ট থেকে বাংলাদেশে ১,১৬০ মেগাওয়াট নিরবচ্ছিন্ন বিদ্যুৎ সরবরাহ স্বাভাবিক রাখতে বিল পরিশোধের একটি ধারাবাহিক রোডম্যাপে সম্মত হয়েছে আদানি পাওয়ার ও বিপিডিবি। বাংলাদেশ ব্যাংক বৈদেশিক মুদ্রার রিজার্ভের সমর্থনে নিয়মিত লেটার অব ক্রেডিট প্রদান করছে।",
    "summaryEn": "Business Standard in Delhi reports that Adani Power and the Bangladesh Power Development Board (BPDB) have finalized a roadmap for regularizing power tariff payments from the 1,600 MW Godda plant. The dispatch of uninterrupted high-voltage electricity continues normally with active letters of credit.",
    "keyPointsBn": [
      "ডেডিকেটেড সঞ্চালন লাইনের মাধ্যমে বাংলাদেশে ১,১৬০ মেগাওয়াট বিদ্যুৎ সরবরাহ পূর্ণমাত্রায় বজায় রয়েছে।",
      "মাসিক বিল পরিশোধের জন্য সোনালী ব্যাংকের মাধ্যমে এলসি নিয়মিত খোলা হচ্ছে।",
      "জ্বালানি বিশেষজ্ঞরা জানিয়েছেন, দ্বিপাক্ষিক বিদ্যুৎ বাণিজ্য চুক্তি পেশাদারিত্বের সাথেই পরিচালিত হচ্ছে।"
    ],
    "keyPointsEn": [
      "Uninterrupted cross-border power supply of 1,160 MW maintained across the transmission line.",
      "BPDB opened fresh revolving letters of credit with Sonali Bank for timely invoice clearance.",
      "Energy analysts note that cross-border electricity trade remains resilient."
    ],
    "category": "economy",
    "categoryLabelBn": "বিদ্যুৎ ও জ্বালানি",
    "categoryLabelEn": "Economy & Energy",
    "sentiment": "positive",
    "sentimentReasonBn": "বিদ্যুৎ সরবরাহের ধারাবাহিকতা এবং উভয় দেশের আর্থিক সমঝোতার ইতিবাচক দিক তুলে ধরা হয়েছে।",
    "sentimentReasonEn": "Demonstrates successful commercial resolution, steady energy grid stability, and contractual compliance between Dhaka and Indian power utilities.",
    "source": {
      "name": "Business Standard",
      "bureau": "Delhi",
      "language": "English",
      "originalUrl": "https://www.business-standard.com/economy/news/adani-power-and-bangladesh-power-development-board-agree-on-payment-schedule-for-godda-plant-126091100482_1.html",
      "originalHeadline": "Adani Power, Bangladesh PDB reach understanding on payment schedule for Godda supply",
      "scannedAt": "5 hours ago"
    },
    "publishedAt": "2026-09-11T11:00:00Z",
    "readTimeBn": "৩ মিনিট পাঠ",
    "readTimeEn": "3 min read",
    "imageUrl": "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "Adani Power",
      "BPDB",
      "Energy Trade",
      "Electricity Grid",
      "Business Standard"
    ],
    "isLeadStory": false
  },
  {
    "id": "37",
    "slug": "hilsa-shortage-india-gujarat-odisha-sea-fish-exports-dhaka-ei-samay",
    "title": "ইলিশ খেতে বাংলাদেশের ভরসা ভারত, মোদীর রাজ্য ও ওড়িশা থেকে সামুদ্রিক মাছের রফতানি বৃদ্ধি",
    "englishTitle": "Hilsa Shortage: Sea Fish Exports from Gujarat & Odisha Surge to Meet Dhaka Market Demand",
    "banglaTitle": "ইলিশের জোগানে ঘাটতি: গুজরাত ও ওড়িশা থেকে বাংলাদেশের বাজারে সামুদ্রিক মাছের রফতানি বৃদ্ধি",
    "summaryBn": "এই সময় (কলকাতা ব্যুরো)-এর অনুসন্ধানী প্রতিবেদনে জানা গেছে, বাজারে ইলিশের অভ্যন্তরীণ সংকট ও চড়া মূল্যের প্রেক্ষাপটে ভারতের গুজরাত ও ওড়িশার সামুদ্রিক মাছ এখন ঢাকার কাঁচাবাজারে বিকল্প হিসেবে জনপ্রিয় হয়ে উঠেছে। বেনাপোল ও হিলি স্থলবন্দর দিয়ে প্রতিদিন টনকে টন কড, পমফ্রেট ও টুনা জাতীয় সামুদ্রিক মাছ আমদানি হচ্ছে।",
    "summaryEn": "Ei Samay reports that amid domestic supply gaps and soaring prices for riverine Hilsa, commercial fish exports from Gujarat and Odisha ports are bridging consumer demand across Dhaka and major retail hubs in Bangladesh. Customs records indicate hundreds of tonnes of refrigerated sea fish shipments clearing through Benapole and Hili land customs.",
    "keyPointsBn": [
      "গুজরাতের ভেরাভল ও ওড়িশার পারাদ্বীপ বন্দর থেকে শীতাতপ নিয়ন্ত্রিত কন্টেইনারে মাছ সরবরাহ বৃদ্ধি।",
      "ঢাকার কারওয়ান বাজার ও চট্টগ্রামের পাইকারি বাজারে তুলনামূলক কম মূল্যে বিক্রি হচ্ছে ভারতীয় সামুদ্রিক মাছ।",
      "দুই দেশের রফতানিকারক ও আমদানি সমিতি দ্রুত পচনশীল খাদ্যদ্রব্যের জন্য বিশেষ গ্রিন চ্যানেল চালুর আহ্বান জানিয়েছে।"
    ],
    "keyPointsEn": [
      "Temperature-controlled reefer containers dispatched from Veraval (Gujarat) and Paradip (Odisha).",
      "Dhaka wholesale markets like Kawran Bazar and Chittagong report brisk sales due to affordable pricing.",
      "Bilateral trade chambers urge dedicated perishable-cargo green corridors across land borders."
    ],
    "category": "trade",
    "categoryLabelBn": "সীমান্ত বাণিজ্য ও খাদ্য",
    "categoryLabelEn": "Cross-Border Trade",
    "sentiment": "positive",
    "sentimentReasonBn": "বাণিজ্যিক বিকল্প তৈরি, খাদ্য নিরাপত্তা রক্ষা এবং দুই দেশের পারস্পরিক বাণিজ্যিক সুবিধার ইতিবাচক চিত্র।",
    "sentimentReasonEn": "Demonstrates resilient commercial trade adaptability, meeting consumer nutritional needs, and expanding cross-border supply chains.",
    "source": {
      "name": "Ei Samay",
      "bureau": "Kolkata",
      "language": "Bengali",
      "originalUrl": "https://eisamay.com/west-bengal-news/howrah-news/india-exports-hilsa-to-bangladesh-from-narendra-modi-state-gujarat/200541702.cms",
      "originalHeadline": "ইলিশ খেতে বাংলাদেশের ভরসা ভারত, ত্রাতা মোদীর রাজ্য",
      "scannedAt": "12 mins ago"
    },
    "publishedAt": "2026-09-12T13:45:00Z",
    "readTimeBn": "৩ মিনিট পাঠ",
    "readTimeEn": "3 min read",
    "imageUrl": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "Ei Samay",
      "Hilsa",
      "Fish Exports",
      "Gujarat",
      "Benapole",
      "Dhaka Market"
    ],
    "isLeadStory": false
  },
  {
    "id": "38",
    "slug": "tech-glitch-adani-power-unit-godda-bangladesh-grid-toi",
    "title": "Tech glitch at Adani power unit briefly hits Bangladesh grid, supply restored swiftly",
    "banglaTitle": "আদানি পাওয়ার ইউনিটে সাময়িক কারিগরি ত্রুটি: দ্রুত মেরামতের পর বাংলাদেশ গ্রিডে বিদ্যুৎ সঞ্চালন স্বাভাবিক",
    "summaryBn": "টাইমস অব ইন্ডিয়ার প্রতিবেদনে বলা হয়েছে, ঝাড়খণ্ডের গড্ডায় আদানি পাওয়ারের ১৬০০ মেগাওয়াট আল্ট্রা-সুপারক্রিটিক্যাল থার্মাল পাওয়ার প্ল্যান্টের একটি ইউনিটে আকস্মিক কারিগরি ত্রুটির কারণে বাংলাদেশে বিদ্যুৎ সঞ্চালন কিছুক্ষণের জন্য হ্রাস পায়। ভারতীয় প্রকৌশলীদের দ্রুত পদক্ষেপে কয়েক ঘণ্টার মধ্যে ফল্ট শনাক্ত ও মেরামত করে বাংলাদেশ বিদ্যুৎ উন্নয়ন বোর্ডের (বিপিডিবি) কাছে পূর্ণ ক্ষমতায় ১,১৬০ মেগাওয়াট বিদ্যুৎ সরবরাহ পুনঃস্থাপন করা হয়েছে।",
    "summaryEn": "The Times of India reports that an unexpected boiler-turbine technical glitch at Unit 2 of Adani Power’s 1,600 MW ultra-supercritical plant in Godda, Jharkhand, caused a temporary dip in power dispatch to Bangladesh’s national grid. Dedicated engineering teams rectified the fault within hours, safely stabilizing high-voltage transmission back to the agreed 1,160 MW capacity.",
    "keyPointsBn": [
      "ঝাড়খণ্ডের গড্ডা প্ল্যান্টের বিশেষ আন্তঃসীমান্ত সঞ্চালন লাইনের মাধ্যমে বিদ্যুৎ প্রবাহ সম্পূর্ণ স্বাভাবিক।",
      "বাংলাদেশ বিদ্যুৎ উন্নয়ন বোর্ড (বিপিডিবি) লোড ম্যানেজমেন্টের মাধ্যমে গ্রিডের ভারসাম্য বজায় রেখেছে।",
      "উভয় দেশের গ্রিড অপারেটরদের মধ্যে সার্বক্ষণিক কারিগরি সমন্বয় ব্যবস্থার কার্যকারিতা প্রমাণিত হয়েছে।"
    ],
    "keyPointsEn": [
      "Cross-border dedicated 400kV transmission link fully restored to standard operational throughput.",
      "Bangladesh Power Development Board (BPDB) smoothly managed local load balancing during the transient dip.",
      "Real-time grid synchronization protocols between Indian and Bangladeshi dispatch centers operated effectively."
    ],
    "category": "economy",
    "categoryLabelBn": "বিদ্যুৎ ও জ্বালানি গ্রিড",
    "categoryLabelEn": "Economy & Energy",
    "sentiment": "neutral",
    "sentimentReasonBn": "কারিগরি ত্রুটির বাস্তব তথ্য এবং তা দ্রুত মেরামত করে সরবরাহ স্বাভাবিক করার বস্তুনিষ্ঠ বিবরণ।",
    "sentimentReasonEn": "Objective technical reporting detailing transmission maintenance, rapid engineering resolution, and grid reliability.",
    "source": {
      "name": "The Times of India",
      "bureau": "Delhi",
      "language": "English",
      "originalUrl": "https://timesofindia.indiatimes.com/world/south-asia/tech-glitch-at-adani-power-unit-hits-bangladesh-grid/articleshow/134099803.cms",
      "originalHeadline": "Tech glitch at Adani power unit hits Bangladesh grid",
      "scannedAt": "25 mins ago"
    },
    "publishedAt": "2026-09-12T12:30:00Z",
    "readTimeBn": "৩ মিনিট পাঠ",
    "readTimeEn": "3 min read",
    "imageUrl": "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&auto=format&fit=crop&q=80",
    "isTrending": true,
    "tags": [
      "Times of India",
      "Adani Power",
      "BPDB",
      "Energy Grid",
      "Godda Plant",
      "Dhaka"
    ],
    "isLeadStory": false
  },
  {
    "id": "39",
    "slug": "sundarbans-royal-bengal-tiger-conservation-dhaka-delhi-joint-taskforce-ei-samay",
    "title": "সুন্দরবন ও বাঘ সংরক্ষণে দিল্লি-ঢাকার যৌথ পদক্ষেপ: জীববৈচিত্র্য রক্ষায় একযোগে কাজ করবে দুই দেশ",
    "englishTitle": "Dhaka-Delhi Joint Taskforce Formulates Unified Blueprint for Sundarbans Biodiversity & Tiger Protection",
    "banglaTitle": "সুন্দরবন ও রয়্যাল বেঙ্গল টাইগার সংরক্ষণে দিল্লি-ঢাকার যৌথ পদক্ষেপ: জীববৈচিত্র্য রক্ষায় সমঝোতা",
    "summaryBn": "এই সময় কলকাতার প্রতিবেদনে প্রকাশ, সুন্দরবনের প্রাকৃতিক বাস্তুতন্ত্র ও সংকটাপন্ন রয়্যাল বেঙ্গল টাইগার সুরক্ষায় ঢাকায় ভারত ও বাংলাদেশের পরিবেশ, বন ও জলবায়ু পরিবর্তন মন্ত্রণালয়ের শীর্ষ কর্মকর্তাদের মধ্যে দ্বিপাক্ষিক টাস্কফোর্সের উচ্চপর্যায়ের বৈঠক অনুষ্ঠিত হয়েছে। দুই দেশের সুন্দরবন অংশে বাঘ গণনা, ম্যানগ্রোভ বন সংরক্ষণ ও যৌথ টহল জোরদার করার বিষয়ে চূড়ান্ত সমঝোতা হয়েছে।",
    "summaryEn": "Ei Samay reports that environmental and wildlife conservation authorities from India and Bangladesh concluded a bilateral taskforce consultation in Dhaka, unveiling a unified strategy to safeguard the shared Sundarbans mangrove ecosystem and monitor the transboundary Royal Bengal Tiger population through joint spatial tracking and anti-poaching patrols.",
    "keyPointsBn": [
      "উভয় দেশের যৌথ ক্যামেরা ট্র্যাপিং ও কৃত্রিম বুদ্ধিমত্তা চালিত সেন্সর দিয়ে রয়্যাল বেঙ্গল টাইগার ট্র্যাকিং।",
      "নদীমাতৃক ম্যানগ্রোভ অঞ্চলে আন্তর্জাতিক চোরাশিকারিদের বিরুদ্ধে যৌথ কোস্টগার্ড ও বনরক্ষী টহল।",
      "জলবায়ু পরিবর্তনজনিত লবণাক্ততা বৃদ্ধির প্রভাব মোকাবিলায় বিজ্ঞানভিত্তিক গবেষণায় ঢাকা-কলকাতা অংশীদারিত্ব।"
    ],
    "keyPointsEn": [
      "Joint camera-trapping census and AI-powered sensors deployed for harmonized tiger habitat tracking.",
      "Coordinated anti-poaching maritime patrols along delta water channels by forest guards.",
      "Collaborative scientific research between Dhaka and Kolkata institutes to counter salinity intrusion in mangroves."
    ],
    "category": "diplomacy",
    "categoryLabelBn": "পরিবেশ ও যৌথ উদ্যোগ",
    "categoryLabelEn": "Diplomacy & Water",
    "sentiment": "positive",
    "sentimentReasonBn": "পরিবেশ ও বিরল বন্যপ্রাণী সুরক্ষায় দুই দেশের সৌহার্দ্যপূর্ণ সহযোগিতা ও ইতিবাচক পদক্ষেপ।",
    "sentimentReasonEn": "Highlights constructive cross-border environmental stewardship, biodiversity conservation, and peaceful scientific cooperation.",
    "source": {
      "name": "Ei Samay",
      "bureau": "Kolkata",
      "language": "Bengali",
      "originalUrl": "https://eisamay.com/bangladesh-news/meeting-of-bangladesh-and-india-in-dhaka-on-biodiversity-and-royal-bengal-tiger-conservation-of-sundarbans/200539806.cms",
      "originalHeadline": "সুন্দরবন ও বাঘ সংরক্ষণে দিল্লি-ঢাকার যৌথ পদক্ষেপ",
      "scannedAt": "40 mins ago"
    },
    "publishedAt": "2026-09-12T11:15:00Z",
    "readTimeBn": "৪ মিনিট পাঠ",
    "readTimeEn": "4 min read",
    "imageUrl": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "Sundarbans",
      "Tiger Conservation",
      "Ei Samay",
      "Biodiversity",
      "Dhaka",
      "Kolkata"
    ],
    "isLeadStory": false
  },
  {
    "id": "40",
    "slug": "chinmoy-krishna-das-parole-funeral-court-ruling-toi",
    "title": "Hindu monk Chinmoy Krishna Das, in Bangladesh jail, gets 5-hour parole to attend mother's funeral",
    "banglaTitle": "মায়ের শেষকৃত্যে অংশ নিতে কারাবন্দি সন্ন্যাসী চিন্ময় কৃষ্ণ দাসকে ৫ ঘণ্টার প্যারোল দিল আদালত",
    "summaryBn": "টাইমস অব ইন্ডিয়া এবং এই সময়ের প্রতিবেদনে জানানো হয়েছে, চট্টগ্রামে কারাবন্দি হিন্দু ধর্মীয় নেতা চিন্ময় কৃষ্ণ দাস প্রভুর মায়ের মৃত্যুর পর আদালতের নির্দেশে কঠোর পুলিশি নিরাপত্তায় তাঁকে ৫ ঘণ্টার মানবিক প্যারোলে মুক্তি দেওয়া হয়। তিনি শ্মশানে উপস্থিত হয়ে মায়ের শেষকৃত্য সম্পন্ন করেন এবং পরবর্তীতে পুনরায় কারাগারে প্রত্যাবর্তন করেন।",
    "summaryEn": "The Times of India and regional Bengali dailies report that a metropolitan court in Chittagong granted a 5-hour humanitarian parole to incarcerated Hindu monk Chinmoy Krishna Das to perform the final rites of his deceased mother, Sandhyarani Dhar. Following emotional scenes at the crematorium under tight security escort, he was escorted back to the central jail.",
    "keyPointsBn": [
      "আদালতের বিশেষ মানবিক আদেশে ৫ ঘণ্টার জন্য শেষকৃত্যে উপস্থিত থাকার অনুমতি।",
      "আইনজীবী দল নিয়মিত জামিন শুনানির জন্য উচ্চ আদালতে আবেদন বজায় রেখেছেন।",
      "কলকাতার বিভিন্ন সামাজিক সংগঠন ও মানবাধিকার পর্যবেক্ষকরা আইনি প্রক্রিয়ার স্বচ্ছতার ওপর গুরুত্ব দিয়েছেন।"
    ],
    "keyPointsEn": [
      "Humanitarian parole order sanctioned by judicial magistrate for conducting cremation rituals.",
      "Legal defense counsels continue pursuing substantive regular bail hearings before higher appellate benches.",
      "Civil society and human rights observers monitor the judicial proceedings with close attention."
    ],
    "category": "politics",
    "categoryLabelBn": "রাজনীতি ও আইনি প্রক্রিয়া",
    "categoryLabelEn": "Politics & Governance",
    "sentiment": "neutral",
    "sentimentReasonBn": "মানবিক প্যারোলের আদালতের সিদ্ধান্ত ও শেষকৃত্যের ঘটনার সংবেদনশীল ও বস্তুনিষ্ঠ প্রতিবেদন।",
    "sentimentReasonEn": "Balanced legal reporting covering humanitarian parole permissions, judicial processes, and public sensitivity.",
    "source": {
      "name": "The Times of India",
      "bureau": "Kolkata",
      "language": "English",
      "originalUrl": "https://timesofindia.indiatimes.com/world/south-asia/hindu-monk-chinmoy-krishna-das-in-bangladesh-jail-gets-5-hour-parole-to-attend-mothers-funeral/articleshow/134048032.cms",
      "originalHeadline": "Hindu monk Chinmoy Krishna Das, in Bangladesh jail, gets 5-hour parole to attend mother's funeral",
      "scannedAt": "1 hour ago"
    },
    "publishedAt": "2026-09-11T20:30:00Z",
    "readTimeBn": "৩ মিনিট পাঠ",
    "readTimeEn": "3 min read",
    "imageUrl": "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "Times of India",
      "Chinmoy Das",
      "Chittagong",
      "Parole",
      "Human Rights",
      "Judiciary"
    ],
    "isLeadStory": false
  },
  {
    "id": "41",
    "slug": "indo-bangla-joint-river-commission-seasonal-monsoon-data-hindustan-times",
    "title": "Indo-Bangla Joint River Commission hydrologists complete seasonal monsoon data exchange session",
    "banglaTitle": "ভারত-বাংলাদেশ যৌথ নদী কমিশনের প্রকৌশলীদের মৌসুমি হাইড্রোলজিক্যাল তথ্য বিনিময় সম্পন্ন",
    "summaryBn": "হিন্দুস্তান টাইমসের দিল্লি ব্যুরোর খবরে প্রকাশ, ভারত ও বাংলাদেশের যৌথ নদী কমিশনের (JRC) কারিগরি দল গঙ্গা, তিস্তা, ব্রহ্মপুত্র ও বরাক নদীর মৌসুমি বৃষ্টিপাত ও পানি প্রবাহের বিস্তারিত হাইড্রোলজিক্যাল তথ্য আদান-প্রদান সম্পন্ন করেছে। এর ফলে উভয় দেশের বন্যা পূর্বাভাস কেন্দ্রগুলো আরও নিখুঁতভাবে আগাম সতর্কবার্তা জারি করতে সক্ষম হবে।",
    "summaryEn": "Hindustan Times reports that hydrology experts from the India-Bangladesh Joint River Commission (JRC) concluded their routine seasonal hydrological data sharing session covering the Ganga, Teesta, Brahmaputra, and Barak river basins. The synchronized telemetry enables meteorological departments in Delhi and Dhaka to issue precision flood advisories.",
    "keyPointsBn": [
      "উভয় দেশের ৫৪টি অভিন্ন নদীর পানি প্রবাহের রিয়েল-টাইম তথ্য বিনিময় চুক্তি বাস্তবায়িত।",
      "আসাম, ত্রিপুরা ও বাংলাদেশের পূর্বাঞ্চলীয় জেলার বন্যা নিয়ন্ত্রণে আগাম সতর্কবার্তা ব্যবস্থার উন্নয়ন।",
      "নদী বিশেষজ্ঞগণ দীর্ঘমেয়াদি অববাহিকাভিত্তিক সমন্বিত পানি ব্যবস্থাপনার পরামর্শ দিয়েছেন।"
    ],
    "keyPointsEn": [
      "Real-time telemetry and river discharge metrics exchanged across common transboundary river corridors.",
      "Enhanced early-warning radar integration assisting flood mitigation across Assam, Tripura, and Sylhet.",
      "Water resources engineers advocate for expanded institutional river basin basin-wide management protocols."
    ],
    "category": "diplomacy",
    "categoryLabelBn": "নদী ও পানি সম্পদ",
    "categoryLabelEn": "Diplomacy & Water",
    "sentiment": "positive",
    "sentimentReasonBn": "নদী সংক্রান্ত তথ্য বিনিময়, বন্যা প্রতিরোধ ও প্রাতিষ্ঠানিক কারিগরি সহযোগিতার ইতিবাচক দিক তুলে ধরা হয়েছে।",
    "sentimentReasonEn": "Constructive scientific collaboration enhancing shared disaster management, flood mitigation, and water resource monitoring.",
    "source": {
      "name": "Hindustan Times",
      "bureau": "Delhi",
      "language": "English",
      "originalUrl": "https://www.hindustantimes.com/world-news",
      "originalHeadline": "Indo-Bangla Joint River Commission hydrologists complete seasonal monsoon data exchange session",
      "scannedAt": "1.2 hours ago"
    },
    "publishedAt": "2026-09-12T05:15:00Z",
    "readTimeBn": "৪ মিনিট পাঠ",
    "readTimeEn": "4 min read",
    "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "Joint River Commission",
      "Hindustan Times",
      "Flood Control",
      "Teesta",
      "Hydrology"
    ],
    "isLeadStory": false
  },
  {
    "id": "42",
    "slug": "digital-cargo-tracking-petrapole-benapole-customs-sangbad-pratidin",
    "title": "পেট্রাপোল-বেনাপোল বন্দরে ডিজিটাল কার্গো ট্র্যাকিং চালুর পর পণ্য খালাসে সময় কমল ৬০ শতাংশ",
    "englishTitle": "Digital Cargo Tracking at Petrapole-Benapole Slashes Customs Clearance Time by 60%",
    "banglaTitle": "পেট্রাপোল-বেনাপোল বন্দরে ডিজিটাল কার্গো ট্র্যাকিং চালুর পর পণ্য খালাসে সময় কমল ৬০ শতাংশ",
    "summaryBn": "সংবাদ প্রতিদিনের বাণিজ্য পাতায় জানানো হয়েছে, পেট্রাপোল-বেনাপোল সমন্বিত চেকপোস্টে (আইসিপি) রেডিও ফ্রিকোয়েন্সি আইডেন্টিফিকেশন (RFID) এবং কিউআর কোডভিত্তিক ডিজিটাল ট্র্যাকিং ব্যবস্থা চালুর ফলে পণ্যবাহী ট্রাকের ছাড়পত্র নেওয়ার সময় নাটকীয়ভাবে কমেছে। আগে যেখানে ২ থেকে ৩ দিন অপেক্ষা করতে হতো, এখন মাত্র কয়েক ঘণ্টার মধ্যে পণ্যবাহী যান সীমান্ত পার হতে পারছে।",
    "summaryEn": "Sangbad Pratidin reports from Kolkata that the introduction of RFID automated digital e-tracking and QR code clearance at the Petrapole-Benapole Integrated Check Post (ICP) has reduced freight turnaround times by over 60%. Cross-border commercial trucks which previously queued for days now complete joint customs inspections in under four hours.",
    "keyPointsBn": [
      "স্বয়ংক্রিয় স্ক্যানিং ব্যবস্থার মাধ্যমে প্রতিদিন গড়ে ১,৪০০ পণ্যবাহী ট্রাক চলাচল করছে।",
      "পোশাক শিল্পের রফতানি চালান ও শিল্প কাঁচামালের দ্রুত পৌঁছানো নিশ্চিত হচ্ছে।",
      "ভারত-বাংলাদেশ ল্যান্ডপোর্ট অথরিটি যৌথভাবে অন্যান্য স্থলবন্দরেও এই মডেল চালুর পরিকল্পনা করছে।"
    ],
    "keyPointsEn": [
      "Integrated automated scanners facilitate daily clearance of over 1,400 commercial cargo trucks.",
      "Apparel export consignments and essential raw materials reach manufacturing hubs without delays.",
      "Land Port Authorities of India and Bangladesh plan scaling this smart digitised protocol across all border terminals."
    ],
    "category": "trade",
    "categoryLabelBn": "সীমান্ত বাণিজ্য ও প্রযুক্তি",
    "categoryLabelEn": "Cross-Border Trade",
    "sentiment": "positive",
    "sentimentReasonBn": "বাণিজ্য সহজীকরণ, ডিজিটাল বন্দর আধুনিকায়ন এবং আমদানি-রফতানিকারকদের সময় ও ব্যয় হ্রাসের ইতিবাচক সংবাদ।",
    "sentimentReasonEn": "Highlights modern trade infrastructure efficiency, reduced logistics costs, and technological modernization at land borders.",
    "source": {
      "name": "Sangbad Pratidin",
      "bureau": "Kolkata",
      "language": "Bengali",
      "originalUrl": "https://www.sangbadpratidin.in/business/digital-cargo-tracking-at-petrapole-benapole-reduces-customs-clearance-time/pid/1335890/",
      "originalHeadline": "পেট্রাপোল-বেনাপোল বন্দরে ডিজিটাল কার্গো ট্র্যাকিং চালুর পর পণ্য খালাসে সময় কমল ৬০ শতাংশ",
      "scannedAt": "1.8 hours ago"
    },
    "publishedAt": "2026-09-12T04:45:00Z",
    "readTimeBn": "৩ মিনিট পাঠ",
    "readTimeEn": "3 min read",
    "imageUrl": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "Sangbad Pratidin",
      "Petrapole",
      "Benapole",
      "Digital Port",
      "Border Trade",
      "Logistics"
    ],
    "isLeadStory": false
  },
  {
    "slug": "indian-envoy-bangladesh-water-resources-minister-cooperation",
    "title": "Indian envoy, Bangladesh water resources minister seek fresh push for cooperation, highlight shared heritage",
    "englishTitle": "Indian envoy, Bangladesh water resources minister seek fresh push for cooperation, highlight shared heritage",
    "banglaTitle": "পানিসম্পদ সহযোগিতা জোরদারে ভারতীয় দূত ও বাংলাদেশের মন্ত্রীর বৈঠক: অভিন্ন ঐতিহ্যের ওপর গুরুত্বারোপ",
    "summaryBn": "ঢাকায় নিযুক্ত ভারতীয় হাইকমিশনার ও বাংলাদেশের পানিসম্পদ উপদেষ্টা এক বৈঠকে ৫৪টি অভিন্ন নদীর পানিসম্পদ ব্যবস্থাপনা ও বন্যার পূর্বাভাস বিনিময়ে নতুন সহযোগিতার ক্ষেত্র উন্মোচনের প্রত্যয় ব্যক্ত করেছেন।",
    "summaryEn": "The Indian High Commissioner and Bangladesh's Water Resources Minister met in Dhaka, calling for a fresh collaborative momentum on shared river management, seasonal flood forecast data exchanges, and transboundary environmental preservation.",
    "keyPointsBn": [
      "৫৪টি অভিন্ন নদীর পানিসম্পদ ও অববাহিকা ব্যবস্থাপনায় জোর",
      "বন্যার পূর্বাভাস ও জলতাত্ত্বিক তথ্য দ্রুত বিনিময়ে যৌথ প্রতিশ্রুতি",
      "উভয় দেশের জনগণের সুবিধার স্বার্থে প্রযুক্তিগত সমন্বয় বৃদ্ধির আহ্বান"
    ],
    "keyPointsEn": [
      "Fresh momentum sought on 54 transboundary river basin management",
      "Commitment to rapid flood forecasting telemetry and hydrological data sharing",
      "Emphasis on insulating vital water resource management from political friction"
    ],
    "category": "diplomacy",
    "categoryLabelBn": "কূটনীতি ও দ্বিপাক্ষিক সম্পর্ক",
    "categoryLabelEn": "Diplomacy & Water",
    "sentiment": "positive",
    "sentimentReasonBn": "ভারতীয় সংবাদপত্রগুলো এই বৈঠককে পানি ব্যবস্থাপনায় দ্বিপাক্ষিক ইতিবাচক সদিচ্ছা এবং দীর্ঘস্থায়ী সহযোগিতার পথ হিসেবে তুলে ধরেছে।",
    "sentimentReasonEn": "Indian newspapers hailed the meeting as a constructive step affirming mutual goodwill and continuous technical cooperation on riparian affairs.",
    "source": {
      "name": "The Telegraph India",
      "bureau": "Kolkata",
      "language": "English",
      "originalUrl": "https://www.telegraphindia.com/india/indian-envoy-bangladesh-water-resources-minister-cooperation",
      "originalHeadline": "Indian envoy, Bangladesh water resources minister seek fresh push for cooperation, highlight shared heritage",
      "scannedAt": "2026-09-14T22:00:00+05:30"
    },
    "publishedAt": "2026-09-14T19:20:00+05:30",
    "readTimeBn": "৩ মিনিট",
    "readTimeEn": "3 min read",
    "imageUrl": "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "Water Resources",
      "High Commission",
      "Diplomacy",
      "Telegraph",
      "Floods"
    ],
    "id": "43",
    "isLeadStory": false
  },
  {
    "slug": "bangladesh-president-calls-resolving-issues-through-talks",
    "title": "Bangladesh President calls for quickly resolving outstanding issues with India through talks",
    "englishTitle": "Bangladesh President calls for quickly resolving outstanding issues with India through talks",
    "banglaTitle": "ভারতের সাথে অমীমাংসিত বিষয়গুলো দ্রুত আলোচনার মাধ্যমে নিষ্পত্তির আহ্বান বাংলাদেশের রাষ্ট্রপতির",
    "summaryBn": "বাংলাদেশের রাষ্ট্রপতি মো. সাহাবুদ্দিন ভারতের সঙ্গে বিরাজমান তিস্তা চুক্তিসহ সমস্ত দ্বিপাক্ষিক অমীমাংসিত ইস্যু গঠনমূলক আলোচনার মাধ্যমে দ্রুত সমাধানের আহ্বান জানিয়েছেন।",
    "summaryEn": "Bangladesh President Mohammed Shahabuddin emphasized the necessity of resolving longstanding bilateral issues, including shared water sharing and border management, through expedited, constructive dialogue between Dhaka and New Delhi.",
    "keyPointsBn": [
      "রাষ্ট্রপতির কার্যালয় থেকে সৌহার্দ্যপূর্ণ আলোচনার সুস্পষ্ট আহ্বান",
      "তিস্তা ও সীমান্ত সংক্রান্ত অমীমাংসিত বিষয় দ্রুত নিষ্পত্তির তাগিদ",
      "দক্ষিণ এশীয় অঞ্চলের স্থিতিশীলতায় দুই দেশের সুসম্পর্কের অপরিহার্যতা"
    ],
    "keyPointsEn": [
      "President stresses peaceful and expedited dispute resolution",
      "Urges timely diplomatic closure on Teesta and border treaties",
      "Underlines that regional stability rests upon healthy bilateral ties"
    ],
    "category": "diplomacy",
    "categoryLabelBn": "কূটনীতি ও দ্বিপাক্ষিক সম্পর্ক",
    "categoryLabelEn": "Diplomacy & Water",
    "sentiment": "positive",
    "sentimentReasonBn": "ভারতীয় প্রধান গণমাধ্যম রাষ্ট্রপতির বক্তব্যকে ইতিবাচক ও দূরদর্শী কূটনৈতিক দৃষ্টিভঙ্গি হিসেবে মূল্যায়ন করেছে।",
    "sentimentReasonEn": "Indian mainstream press commended the President's statements as a stabilizing and statesmanlike reaffirmation of constructive engagement.",
    "source": {
      "name": "The Hindu",
      "bureau": "Delhi",
      "language": "English",
      "originalUrl": "https://www.thehindu.com/news/international/bangladesh-president-calls-for-resolving-outstanding-issues-with-india",
      "originalHeadline": "Bangladesh President calls for quickly resolving outstanding issues with India through talks",
      "scannedAt": "2026-09-14T22:00:00+05:30"
    },
    "publishedAt": "2026-09-14T17:45:00+05:30",
    "readTimeBn": "৩ মিনিট",
    "readTimeEn": "3 min read",
    "imageUrl": "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "President",
      "Dialogue",
      "The Hindu",
      "Diplomacy",
      "Dhaka"
    ],
    "id": "44",
    "isLeadStory": false
  },
  {
    "slug": "india-keeps-door-open-normalisation-bangladesh-ties",
    "title": "India Keeps Door Open For Normalisation Of Bangladesh Ties Despite Hasina Row",
    "englishTitle": "India Keeps Door Open For Normalisation Of Bangladesh Ties Despite Hasina Row",
    "banglaTitle": "রাজনৈতিক বিতর্কের মাঝেও বাংলাদেশের সঙ্গে সম্পর্ক স্বাভাবিক রাখতে ভারতের উন্মুক্ত কূটনৈতিক অবস্থান",
    "summaryBn": "নয়াদিল্লি কূটনৈতিক মহলে স্পষ্ট করেছে যে রাজনৈতিক টানাপোড়েন সত্ত্বেও প্রতিবেশী বাংলাদেশের জনগণের কল্যাণে বাণিজ্য, বিদ্যুৎ ও ভিসা স্বাভাবিকীকরণে ভারত তার কূটনৈতিক দরজা উন্মুক্ত রেখেছে।",
    "summaryEn": "New Delhi reaffirmed its diplomatic posture of keeping communication channels open with Dhaka, underscoring that institutional cooperation across energy, essential food commodities, and regional logistics transcends political transitions.",
    "keyPointsBn": [
      "বাণিজ্য ও মানবিক ক্ষেত্রে সম্পর্ক স্বাভাবিক রাখার নীতি দিল্লির",
      "বিদ্যুৎ সঞ্চালন ও খাদ্যশস্য সরবরাহে কোনো প্রতিবন্ধকতা না করার আশ্বাস",
      "দীর্ঘমেয়াদি কৌশলগত স্বার্থে দ্বিপাক্ষিক সম্পর্কের স্থায়িত্ব রক্ষা"
    ],
    "keyPointsEn": [
      "Delhi signals openness to normalizing operational bilateral ties",
      "Assurance that essential trade, fuel, and electricity flows remain unaffected",
      "Emphasis on strategic patience and long-term neighborly priorities"
    ],
    "category": "diplomacy",
    "categoryLabelBn": "কূটনীতি ও দ্বিপাক্ষিক সম্পর্ক",
    "categoryLabelEn": "Diplomacy & Water",
    "sentiment": "neutral",
    "sentimentReasonBn": "এনডিটিভি ও অন্যান্য বিশ্লেষণে ভারতের এ পদক্ষেপকে বাস্তবসম্মত কূটনীতি ও কৌশলগত সহিষ্ণুতা হিসেবে ব্যাখ্যা করা হয়েছে।",
    "sentimentReasonEn": "Indian analytical coverage viewed Delhi's calculated restraint as pragmatic diplomacy balancing regional realpolitik.",
    "source": {
      "name": "NDTV",
      "bureau": "Delhi",
      "language": "English",
      "originalUrl": "https://www.ndtv.com/india-news/india-keeps-door-open-for-normalisation-of-bangladesh-ties",
      "originalHeadline": "India Keeps Door Open For Normalisation Of Bangladesh Ties Despite Hasina Row",
      "scannedAt": "2026-09-14T22:00:00+05:30"
    },
    "publishedAt": "2026-09-14T15:10:00+05:30",
    "readTimeBn": "৪ মিনিট",
    "readTimeEn": "4 min read",
    "imageUrl": "/images/south-block-mea-delhi.jpg",
    "tags": [
      "NDTV",
      "Foreign Policy",
      "Diplomacy",
      "Delhi",
      "Normalization"
    ],
    "id": "45",
    "isLeadStory": false
  },
  {
    "slug": "us-overtakes-india-bangladesh-bilateral-trade-dynamics",
    "title": "US overtakes India as Bangladesh's second-largest bilateral trade partner",
    "englishTitle": "US overtakes India as Bangladesh's second-largest bilateral trade partner",
    "banglaTitle": "বাংলাদেশের দ্বিপাক্ষিক বাণিজ্যে ভারতকে টপকে দুই নম্বরে আমেরিকা: আনন্দবাজারের বিশেষ বিশ্লেষণ",
    "summaryBn": "বাংলাদেশের বৈদেশিক বাণিজ্য পরিসংখ্যানে ভারতকে পেছনে ফেলে দ্বিতীয় বৃহত্তম অংশীদারে পরিণত হয়েছে যুক্তরাষ্ট্র। তৈরি পোশাক রপ্তানি বৃদ্ধি এবং ভারত থেকে স্থলবন্দরকেন্দ্রিক কিছু আমদানি শ্লথ হওয়াকে এর প্রধান কারণ হিসেবে চিহ্নিত করেছে গণমাধ্যম।",
    "summaryEn": "Recent foreign trade statistics reveal the United States has surpassed India to become Bangladesh's second-largest overall bilateral trade partner, driven by surges in garment apparel off-take and tariff adjustments along land borders.",
    "keyPointsBn": [
      "বাংলাদেশের বৈদেশিক বাণিজ্যের শীর্ষে চীন, দ্বিতীয় স্থানে উঠে এসেছে আমেরিকা",
      "তৈরি পোশাক খাতের রপ্তানি প্রবৃদ্ধির ফলে আমেরিকার অংশীদারিত্ব বৃদ্ধি",
      "ভারত-বাংলাদেশ বাণিজ্য বহুমুখীকরণ ও শুল্কায়নে দ্রুত সংস্কারের তাগিদ"
    ],
    "keyPointsEn": [
      "US rises to become Bangladesh's #2 trade partner behind China",
      "Driven by substantial Western market demand for Bangladeshi ready-made garments",
      "Highlights need for modernization and non-tariff removal at Indian land borders"
    ],
    "category": "trade",
    "categoryLabelBn": "সীমান্ত বাণিজ্য ও বন্দর",
    "categoryLabelEn": "Cross-Border Trade",
    "sentiment": "neutral",
    "sentimentReasonBn": "আনন্দবাজারের প্রতিবেদনে তথ্যভিত্তিক বিশ্লেষণ তুলে ধরে ভারতের বাণিজ্যে প্রতিযোগিতার চ্যালেঞ্জ নিরপেক্ষভাবে উপস্থাপন করা হয়েছে।",
    "sentimentReasonEn": "Kolkata media presented comprehensive economic analysis assessing India's competitive export dynamics without bias.",
    "source": {
      "name": "Anandabazar Patrika",
      "bureau": "Kolkata",
      "language": "Bengali",
      "originalUrl": "https://www.anandabazar.com/business/us-overtakes-india-in-bangladesh-bilateral-trade",
      "originalHeadline": "বাংলাদেশের সঙ্গে দ্বিপাক্ষিক বাণিজ্যে ভারতকে ছাপিয়ে দুই নম্বরে উঠে এল আমেরিকা",
      "scannedAt": "2026-09-14T22:00:00+05:30"
    },
    "publishedAt": "2026-09-14T11:00:00+05:30",
    "readTimeBn": "৩ মিনিট",
    "readTimeEn": "3 min read",
    "imageUrl": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "Anandabazar",
      "Trade",
      "Economy",
      "RMG",
      "US-India"
    ],
    "id": "46",
    "isLeadStory": false
  },
  {
    "slug": "gujarat-hilsa-exports-dhaka-chittagong-sylhet-markets",
    "title": "Tonnes of Gujarat sea hilsa arriving in Dhaka, Chittagong, and Sylhet markets",
    "englishTitle": "Tonnes of Gujarat sea hilsa arriving in Dhaka, Chittagong, and Sylhet markets",
    "banglaTitle": "টন টন গুজরাতের ইলিশ যাচ্ছে বাংলাদেশে: ঢাকা, চট্টগ্রাম ও সিলেটের বাজারে চাহিদার উল্লম্ফন",
    "summaryBn": "ভারতের গুজরাট উপকূলের সামুদ্রিক ইলিশ পেট্রাপোল বন্দর হয়ে বাংলাদেশের পাইকারি বাজারে প্রবেশ করছে। পদ্মার ইলিশের উচ্চমূল্যের কারণে সাশ্রয়ী মূল্যে ভারতীয় ইলিশের ব্যাপক ক্রেতা চাহিদা তৈরি হয়েছে।",
    "summaryEn": "Large shipments of Gujarat coastal sea hilsa are arriving through Petrapole into wholesale fish distribution hubs across Dhaka, Chittagong, and Sylhet, creating heavy market buzz due to competitive pricing.",
    "keyPointsBn": [
      "পেট্রাপোল-বেনাপোল হয়ে ভারতীয় ইলিশের নিয়মিত বাণিজ্য চালান খালাস",
      "পদ্মার ইলিশের ঘাটতি ও দামের কারণে ভারতীয় ইলিশে ক্রেতাদের আকর্ষণ",
      "সীমান্ত বাণিজ্যে পণ্য সরবরাহের নতুন বাণিজ্যিক ভারসাম্য"
    ],
    "keyPointsEn": [
      "Regular commercial consignments of Gujarat hilsa imported via land ports",
      "Offers price relief for urban consumers amidst domestic river supply tightening",
      "Showcases flexible cross-border market responsiveness between consumer centers"
    ],
    "category": "trade",
    "categoryLabelBn": "সীমান্ত বাণিজ্য ও বন্দর",
    "categoryLabelEn": "Cross-Border Trade",
    "sentiment": "positive",
    "sentimentReasonBn": "বাংলা গণমাধ্যমে এই বাণিজ্যকে সাধারণ ক্রেতাদের স্বস্তি এবং দুই দেশের বাণিজ্য সম্ভাবনার ইতিবাচক দিক হিসেবে তুলে ধরা হয়েছে।",
    "sentimentReasonEn": "Bengali media highlighted consumer price relief and thriving cross-border agricultural/fisheries commerce.",
    "source": {
      "name": "News18",
      "bureau": "Kolkata",
      "language": "Bengali",
      "originalUrl": "https://bengali.news18.com/news/business/hilsa-import-from-gujarat-to-bangladesh-markets",
      "originalHeadline": "টন টন গুজরাতের ইলিশ যাচ্ছে বাংলাদেশে...! ঢাকা, চট্টগ্রাম, সিলেটের বাজারে দর",
      "scannedAt": "2026-09-14T22:00:00+05:30"
    },
    "publishedAt": "2026-09-14T14:15:00+05:30",
    "readTimeBn": "২ মিনিট",
    "readTimeEn": "2 min read",
    "imageUrl": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "News18",
      "Hilsa",
      "Fish Trade",
      "Gujarat",
      "Markets"
    ],
    "id": "47",
    "isLeadStory": false
  },
  {
    "slug": "tripura-smart-border-pilot-tech-surveillance",
    "title": "Tripura begins 'smart border' pilot with tech push to secure 100-km frontier",
    "englishTitle": "Tripura begins 'smart border' pilot with tech push to secure 100-km frontier",
    "banglaTitle": "ত্রিপুরায় ১০০ কিমি সীমান্তে আধুনিক 'স্মার্ট বর্ডার' নজরদারি প্রকল্প শুরু করল ভারত",
    "summaryBn": "ত্রিপুরা-বাংলাদেশ আন্তর্জাতিক সীমান্তের ১০০ কিলোমিটার জুড়ে সেন্সর, নাইট ভিশন ক্যামেরা ও থার্মাল ইমেজিং সম্বলিত ব্যাপক 'স্মার্ট বর্ডার সার্ভিল্যান্স' পাইলট প্রকল্প বাস্তবায়ন শুরু করেছে বিএসএফ।",
    "summaryEn": "The Border Security Force commenced a cutting-edge 'Smart Border' pilot along a 100-kilometer vulnerable stretch of the Tripura-Bangladesh frontier, deploying subterranean sensors, thermal cameras, and unmanned optical drone patrols.",
    "keyPointsBn": [
      "ত্রিপুরা সীমান্তে ১০০ কিমি জুড়ে ইন্টিগ্রেটেড নজরদারি ব্যবস্থা",
      "চোরাচালান ও অনুপ্রবেশ শূন্যের কোঠায় নামিয়ে আনার প্রযুক্তিগত উদ্যোগ",
      "প্রথাগত সীমান্ত পাহারাকে আধুনিক প্রযুক্তিনির্ভর ব্যবস্থার রূপান্তর"
    ],
    "keyPointsEn": [
      "Comprehensive technological surveillance over 100-km Tripura frontier",
      "Aims to curb cross-border contraband, human trafficking, and zero-point breaches",
      "Modernizes traditional physical patrolling through integrated electronic grids"
    ],
    "category": "border",
    "categoryLabelBn": "সীমান্ত নিরাপত্তা ও বিএসএফ",
    "categoryLabelEn": "Border & Security",
    "sentiment": "neutral",
    "sentimentReasonBn": "ভারতীয় সংবাদপত্রগুলো এই প্রযুক্তিগত আধুনিকায়নকে সীমান্ত অপরাধ দমন ও স্বচ্ছতা বৃদ্ধির উপায় হিসেবে উপস্থাপন করেছে।",
    "sentimentReasonEn": "Indian reporting framed the technical infrastructure as a necessary modernization to reduce physical border confrontations.",
    "source": {
      "name": "The Telegraph India",
      "bureau": "Kolkata",
      "language": "English",
      "originalUrl": "https://www.telegraphindia.com/north-east/tripura-begins-smart-border-pilot-tech-push",
      "originalHeadline": "Tripura begins 'smart border' pilot with tech push to secure 100-km Bangladesh frontier",
      "scannedAt": "2026-09-14T22:00:00+05:30"
    },
    "publishedAt": "2026-09-14T10:30:00+05:30",
    "readTimeBn": "৩ মিনিট",
    "readTimeEn": "3 min read",
    "imageUrl": "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "Tripura",
      "Smart Border",
      "BSF",
      "Surveillance",
      "Security"
    ],
    "id": "48",
    "isLeadStory": false
  },
  {
    "slug": "telegraph-grandpa-infant-rescue-ganga-boat-capsize",
    "title": "BSF saves 10 Bangladeshis after boat capsizes; struggling grandfather holds infant aloft",
    "englishTitle": "BSF saves 10 Bangladeshis after boat capsizes; struggling grandfather holds infant aloft",
    "banglaTitle": "গঙ্গায় নৌকাডুবি: কোলের শিশুকে উঁচিয়ে বাঁচানোর চেষ্টা বৃদ্ধের, বিএসএফের সাহসিকতায় উদ্ধার ১০ জন",
    "summaryBn": "মুর্শিদাবাদ সীমান্তের নদীতে নৌকাডুবির মর্মস্পর্শী মুহূর্তে এক বৃদ্ধ দাদা পানিতে তলিয়ে যাওয়ার সময় কোলের শিশুকে পানির ওপর উঁচিয়ে ধরে রাখেন। বিএসএফের স্পিডবোট টিম তাৎক্ষণিক ঝাঁপিয়ে পড়ে শিশুসহ সবাইকে উদ্ধার করে।",
    "summaryEn": "Details emerged from the Murshidabad riverine rescue where a drowning grandfather heroically held a 6-month-old infant above water until BSF patrol speedboats arrived, rescuing all 10 passengers amidst treacherous currents.",
    "keyPointsBn": [
      "কোলের শিশুকে বাঁচাতে বৃদ্ধের জীবনবাজির দৃশ্য গণমাধ্যমে আলোড়ন",
      "বিএসএফের দ্রুত লাইফ-জ্যাকেট ও রেসকিউ টিম মোতায়েন",
      "উদ্ধারকৃতদের চিকিৎসা ও মানবিক সহায়তা দিয়ে পরিবারের কাছে হস্তান্তরের প্রক্রিয়া"
    ],
    "keyPointsEn": [
      "Emotional river rescue where grandfather held infant aloft till patrols arrived",
      "BSF marine unit deployed life rings and CPR on water",
      "Covered across West Bengal media as an inspiring human story"
    ],
    "category": "border",
    "categoryLabelBn": "সীমান্ত নিরাপত্তা ও বিএসএফ",
    "categoryLabelEn": "Border & Security",
    "sentiment": "positive",
    "sentimentReasonBn": "পশ্চিমবঙ্গের সমস্ত পত্রপত্রিকায় এই সাহসিকতাপূর্ণ মানবিক অভিযানকে অত্যন্ত আবেগঘন ও ইতিবাচকভাবে উপস্থাপন করা হয়েছে।",
    "sentimentReasonEn": "Kolkata press widely celebrated the touching rescue, underscoring human empathy transcending international boundaries.",
    "source": {
      "name": "The Telegraph India",
      "bureau": "Kolkata",
      "language": "English",
      "originalUrl": "https://www.telegraphindia.com/west-bengal/bsf-saves-10-bangladeshis-after-boat-capsizes",
      "originalHeadline": "BSF saves 10 Bangladeshis after boat capsizes, struggling grandpa holds aloft infant",
      "scannedAt": "2026-09-14T22:00:00+05:30"
    },
    "publishedAt": "2026-09-14T12:00:00+05:30",
    "readTimeBn": "২ মিনিট",
    "readTimeEn": "2 min read",
    "imageUrl": "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "Humanitarian",
      "Ganga",
      "Rescue",
      "Telegraph",
      "West Bengal"
    ],
    "id": "49",
    "isLeadStory": false
  },
  {
    "slug": "chinmoy-krishna-das-legal-proceedings-minority-discourse",
    "title": "Inside Chinmoy Krishna Das’s legal proceedings: Court arguments and minority advocacy",
    "englishTitle": "Inside Chinmoy Krishna Das’s legal proceedings: Court arguments and minority advocacy",
    "banglaTitle": "চিন্ময় কৃষ্ণ দাসের জামিন শুনানি ও আইনি লড়াই: আদালতের যুক্তিতর্ক এবং সংখ্যালঘু নিরাপত্তা প্রসঙ্গ",
    "summaryBn": "চট্টগ্রাম আদালতে সনাতন জাগরণ মঞ্চের নেতা চিন্ময় কৃষ্ণ দাসের জামিন আবেদন ও আইনি লড়াইকে ঘিরে ভারতীয় মিডিয়া বিশদ অনুসন্ধানী প্রতিবেদন প্রকাশ করেছে। সংবাদে সংখ্যালঘুদের নিরাপত্তা ও আইনি অধিকার নিশ্চিত করার দাবি প্রতিফলিত হয়েছে।",
    "summaryEn": "Indian national newspapers provided comprehensive legal coverage on the court hearings of Chinmoy Krishna Das in Chittagong, detailing arguments by defense counsels, international legal observers, and diplomatic calls for communal harmony.",
    "keyPointsBn": [
      "চট্টগ্রাম আদালতে আইনি শুনানি ও আইনজীবীদের যুক্তিতর্ক",
      "সংখ্যালঘু সম্প্রদায়ের অধিকার ও ধর্মীয় উপাসনালয় সুরক্ষার দাবি",
      "ভারতীয় রাজনৈতিক ও সামাজিক অঙ্গনে বিষয়টি নিয়ে গভীর উদ্বেগ"
    ],
    "keyPointsEn": [
      "Detailed legal scrutiny of Chittagong court proceedings",
      "Focus on defense arguments regarding constitutional freedom of assembly",
      "Significant resonance and concern echoed across Indian editorial boards"
    ],
    "category": "politics",
    "categoryLabelBn": "রাজনীতি ও নির্বাচন",
    "categoryLabelEn": "Politics & Governance",
    "sentiment": "negative",
    "sentimentReasonBn": "ভারতীয় গণমাধ্যমে ঘটনাটিকে সংখ্যালঘুদের অধিকার ও সুরক্ষার ঘাটতি হিসেবে বিবেচনা করে উদ্বেগের সুরে উপস্থাপন করা হয়েছে।",
    "sentimentReasonEn": "Indian media covered the legal struggle with concern, viewing it through the prism of minority safeguards and human rights standards.",
    "source": {
      "name": "The Indian Express",
      "bureau": "Delhi",
      "language": "English",
      "originalUrl": "https://indianexpress.com/article/world/inside-chinmoy-krishna-dass-legal-battle-in-bangladesh",
      "originalHeadline": "‘Broke down in jail’: Inside Chinmoy Krishna Das’s legal battle in Bangladesh",
      "scannedAt": "2026-09-14T22:00:00+05:30"
    },
    "publishedAt": "2026-09-14T08:30:00+05:30",
    "readTimeBn": "৪ মিনিট",
    "readTimeEn": "4 min read",
    "imageUrl": "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "Chittagong",
      "Minority Rights",
      "Indian Express",
      "Legal",
      "Politics"
    ],
    "id": "50",
    "isLeadStory": false
  },
  {
    "slug": "barisal-journalist-pulak-chatterjee-investigation",
    "title": "Death of senior journalist Pulak Chatterjee in Barisal draws media scrutiny",
    "englishTitle": "Death of senior journalist Pulak Chatterjee in Barisal draws media scrutiny",
    "banglaTitle": "বরিশালে জ্যেষ্ঠ সাংবাদিক পুলক চট্টোপাধ্যায়ের রহস্যজনক মৃত্যু: সাংবাদিক মহলে শোক ও সুষ্ঠু তদন্তের দাবি",
    "summaryBn": "বরিশালে সাংবাদিক পুলক চট্টোপাধ্যায়ের ঝুলন্ত মরদেহ উদ্ধারের ঘটনায় গভীর শোক ও উদ্বেগ প্রকাশ করেছে ভারতীয় ও আন্তর্জাতিক গণমাধ্যম ফোরাম। প্রেস ক্লাব ও সাংবাদিক সংগঠনগুলো মৃত্যুর কারণ উদঘাটনে নিরপেক্ষ তদন্ত দাবি করেছে।",
    "summaryEn": "The untimely demise of respected veteran journalist Pulak Chatterjee in Barisal has drawn prominent coverage across Kolkata media, with press unions demanding an impartial and transparent judicial inquiry into the circumstances.",
    "keyPointsBn": [
      "বরিশালে কর্মস্থলে প্রবীণ সাংবাদিকের মরদেহ উদ্ধার",
      "কলকাতা ও ঢাকার সাংবাদিক ইউনিয়নগুলোর গভীর শোক ও নিরপেক্ষ তদন্ত দাবি",
      "সংবাদমাধ্যমের স্বাধীনতা ও সাংবাদিকদের নিরাপত্তা সংক্রান্ত আলোচনা"
    ],
    "keyPointsEn": [
      "Veteran journalist found deceased in Barisal press bureau",
      "Journalist unions across Kolkata and Dhaka demand prompt transparent inquiry",
      "Highlights pressing concerns regarding workplace safety for media professionals"
    ],
    "category": "politics",
    "categoryLabelBn": "রাজনীতি ও নির্বাচন",
    "categoryLabelEn": "Politics & Governance",
    "sentiment": "negative",
    "sentimentReasonBn": "কলকাতার সংবাদমাধ্যম সহকর্মীর মৃত্যুতে শোক প্রকাশ করে ঘটনার নিরপেক্ষ ও গ্রহণযোগ্য তদন্ত নিশ্চিতের তাগিদ দিয়েছে।",
    "sentimentReasonEn": "Kolkata editorial pieces conveyed solidarity with the press fraternity, emphasizing journalistic protection and accountability.",
    "source": {
      "name": "Anandabazar Patrika",
      "bureau": "Kolkata",
      "language": "Bengali",
      "originalUrl": "https://www.anandabazar.com/bangladesh/journalist-pulak-chatterjee-death-in-barisal",
      "originalHeadline": "বাংলাদেশে রহস্যমৃত্যু সাংবাদিক পুলক চট্টোপাধ্যায়ের, বরিশালের দফতরে ঝুলন্ত দেহ",
      "scannedAt": "2026-09-14T22:00:00+05:30"
    },
    "publishedAt": "2026-09-14T16:40:00+05:30",
    "readTimeBn": "২ মিনিট",
    "readTimeEn": "2 min read",
    "imageUrl": "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "Anandabazar",
      "Journalism",
      "Barisal",
      "Press Freedom",
      "Media"
    ],
    "id": "51",
    "isLeadStory": false
  },
  {
    "slug": "india-vs-bangladesh-womens-asia-cup-semifinal-clash",
    "title": "India vs Bangladesh Women's Asia Cup Semifinal: High-stakes encounter preview",
    "englishTitle": "India vs Bangladesh Women's Asia Cup Semifinal: High-stakes encounter preview",
    "banglaTitle": "নারী এশিয়া কাপ সেমিফাইনালে ভারত বনাম বাংলাদেশ: ব্লকবাস্টার ম্যাচের প্রস্তুতি ও বিশ্লেষণ",
    "summaryBn": "নারী এশিয়া কাপ ২০২৬-এর হাইভোল্টেজ সেমিফাইনালে মুখোমুখি হচ্ছে ভারত ও বাংলাদেশ। শেফালি বর্মা ও নিগার সুলতানা জ্যোতির নেতৃত্বাধীন দুই দলের লড়াই ঘিরে ভারতীয় ক্রীড়া মাধ্যমে রোমাঞ্চকর পূর্বাভাস দেওয়া হয়েছে।",
    "summaryEn": "India and Bangladesh face off in a blockbuster Women's Asia Cup semifinal clash, with Indian sports desks previewing key player matchups, middle-order batting resilience, and spin bowling strengths.",
    "keyPointsBn": [
      "এশিয়া কাপের মর্যাদাপূর্ণ সেমিফাইনালে দুই প্রতিবেশী দেশের মুখোমুখি লড়াই",
      "ভারতের ব্যাটিং শক্তি বনাম বাংলাদেশের স্পিন আক্রমণের দ্বৈরথ",
      "উপমহাদেশের ক্রীড়াপ্রেমীদের মাঝে তুমুল উত্তেজনা"
    ],
    "keyPointsEn": [
      "High-profile semifinal clash between regional arch-rivals",
      "India's hard-hitting batting against Bangladesh's disciplined spin attack",
      "Extensive tactical previews across prominent Indian sports desks"
    ],
    "category": "sports",
    "categoryLabelBn": "ক্রীড়া ও ক্রিকেট",
    "categoryLabelEn": "Sports & Cricket",
    "sentiment": "positive",
    "sentimentReasonBn": "ক্রীড়া প্রতিবেদন হিসেবে ভারতীয় গণমাধ্যম দুই দলের সামর্থ্য ও প্রতিযোগিতামূলক ক্রিকেট স্পিরিটকে অত্যন্ত ইতিবাচকভাবে তুলে ধরেছে।",
    "sentimentReasonEn": "Indian sports journalism praised the spirited rivalry and elevated standard of women's cricket in South Asia.",
    "source": {
      "name": "Sportstar",
      "bureau": "Delhi",
      "language": "English",
      "originalUrl": "https://sportstar.thehindu.com/cricket/womens-cricket/india-vs-bangladesh-womens-asia-cup-semifinal-preview",
      "originalHeadline": "Shafali confident India’s middle order will deliver against Bangladesh in semifinal",
      "scannedAt": "2026-09-14T22:00:00+05:30"
    },
    "publishedAt": "2026-09-14T14:50:00+05:30",
    "readTimeBn": "২ মিনিট",
    "readTimeEn": "2 min read",
    "imageUrl": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "Asia Cup",
      "Cricket",
      "Sportstar",
      "Women Cricket",
      "India vs Bangladesh"
    ],
    "id": "52",
    "isLeadStory": false
  },
  {
    "slug": "suspected-measles-outbreak-bangladesh-health-response",
    "title": "Suspected measles outbreak in remote districts: Health directorate launches mass vaccination",
    "englishTitle": "Suspected measles outbreak in remote districts: Health directorate launches mass vaccination",
    "banglaTitle": "দূরবর্তী জেলাগুলোতে হামের প্রাদুর্ভাব: স্বাস্থ্য অধিদপ্তরের জরুরি টিকাদান কর্মসূচি",
    "summaryBn": "বাংলাদেশের পার্বত্য ও উপকূলীয় কিছু প্রত্যন্ত অঞ্চলে হামের লক্ষণযুক্ত রোগীর সংখ্যা বৃদ্ধিতে জরুরি টিকাদান ক্যাম্পেইন জোরদার করেছে স্বাস্থ্য অধিদপ্তর। ভারতীয় স্বাস্থ্য সংশ্লিষ্ট গণমাধ্যমে এ বিষয়ে পর্যবেক্ষণ প্রতিবেদন এসেছে।",
    "summaryEn": "Public health authorities in Bangladesh initiated urgent supplementary immunization drives across peripheral rural districts following reports of measles cases, with regional health desks monitoring transboundary epidemiology.",
    "keyPointsBn": [
      "প্রত্যন্ত অঞ্চলে বিশেষ টিকাদান ক্যাম্পেইন ও ভিটামিন-এ ক্যাপসুল বিতরণ",
      "বিশ্ব স্বাস্থ্য সংস্থা ও ইউনিসেফের কারিগরি সহযোগিতা গ্রহণ",
      "শিশুদের সংক্রমণ রোধে জনসচেতনতা বৃদ্ধির উদ্যোগ"
    ],
    "keyPointsEn": [
      "Supplementary immunization campaigns mobilized in rural border districts",
      "Coordination with international public health agencies (WHO/UNICEF)",
      "Regional epidemiologists track viral transmission containment measures"
    ],
    "category": "culture",
    "categoryLabelBn": "সংস্কৃতি ও সাহিত্য",
    "categoryLabelEn": "Culture & Arts",
    "sentiment": "neutral",
    "sentimentReasonBn": "জনস্বাস্থ্য প্রতিবেদন হিসেবে তথ্য ও প্রতিষেধক ব্যবস্থাপনার অগ্রগতি নিরপেক্ষভাবে উপস্থাপন করা হয়েছে।",
    "sentimentReasonEn": "Indian medical and news desks reported objectively on healthcare infrastructure response and containment.",
    "source": {
      "name": "The Hindu",
      "bureau": "Delhi",
      "language": "English",
      "originalUrl": "https://www.thehindu.com/news/international/suspected-measles-cases-bangladesh-containment",
      "originalHeadline": "Suspected measles cases kill nearly 1,000 as Bangladesh struggles to contain outbreak",
      "scannedAt": "2026-09-14T22:00:00+05:30"
    },
    "publishedAt": "2026-09-14T16:00:00+05:30",
    "readTimeBn": "৩ মিনিট",
    "readTimeEn": "3 min read",
    "imageUrl": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "The Hindu",
      "Healthcare",
      "Measles",
      "Vaccination",
      "Public Health"
    ],
    "id": "53",
    "isLeadStory": false
  },
  {
    "slug": "inani-clouded-leopard-wildlife-biodiversity-conservation",
    "title": "Rare clouded leopard and endangered wildlife spotted in Inani reserve forests",
    "englishTitle": "Rare clouded leopard and endangered wildlife spotted in Inani reserve forests",
    "banglaTitle": "ইনানী সংরক্ষিত বনে বিপন্ন মেঘলা চিতাবাঘের দেখা: জীববৈচিত্র্য সংরক্ষণে আশার আলো",
    "summaryBn": "কক্সবাজারের ইনানী জাতীয় উদ্যান ও সংলগ্ন বনে ট্র্যাপ ক্যামেরায় অতি বিরল মেঘলা চিতাবাঘসহ বেশ কিছু বিলুপ্তপ্রায় বন্যপ্রাণীর উপস্থিতি শনাক্ত হয়েছে। পরিবেশবিদরা একে দক্ষিণ এশিয়ার জীববৈচিত্র্য রক্ষার ক্ষেত্রে অত্যন্ত ইতিবাচক সংবাদ হিসেবে দেখছেন।",
    "summaryEn": "Camera traps in the Inani National Park reserve forests recorded sightings of the critically elusive clouded leopard and other vulnerable mammals, celebrated by South Asian conservationists as a triumph of habitat recovery.",
    "keyPointsBn": [
      "ইনানী জাতীয় উদ্যানে ট্র্যাপ ক্যামেরায় বিরল মেঘলা চিতাবাঘের ছবি ধরা পড়েছে",
      "প্রাকৃতিক বনাঞ্চল সংরক্ষণ ও বন্যপ্রাণী করিডোর রক্ষার গুরুত্ব বৃদ্ধি",
      "ভারত ও বাংলাদেশের পরিবেশ গবেষকদের যৌথ বৈজ্ঞানিক উচ্ছ্বাস"
    ],
    "keyPointsEn": [
      "Camera traps record evidence of elusive clouded leopard in Inani reserve",
      "Validates habitat restoration efforts across coastal protected forests",
      "Welcomed by South Asian ecological researchers and wildlife enthusiasts"
    ],
    "category": "culture",
    "categoryLabelBn": "সংস্কৃতি ও সাহিত্য",
    "categoryLabelEn": "Culture & Arts",
    "sentiment": "positive",
    "sentimentReasonBn": "বিবিসি বাংলা ও ভারতীয় পরিবেশ প্রতিবেদনে বিরল বন্যপ্রাণী সুরক্ষার সাফল্যকে অত্যন্ত উৎসাহব্যঞ্জক ও আশাবাদী হিসেবে তুলে ধরা হয়েছে।",
    "sentimentReasonEn": "Wildlife journalism warmly lauded the rediscovery as an inspiring success story for regional ecological preservation.",
    "source": {
      "name": "BBC Bengali",
      "bureau": "Kolkata",
      "language": "Bengali",
      "originalUrl": "https://www.bbc.com/bengali/articles/inani-clouded-leopard-wildlife",
      "originalHeadline": "ইনানীতে বিপন্ন মেঘলা চিতাসহ আরও যেসব প্রাণীর দেখা মিললো",
      "scannedAt": "2026-09-14T22:00:00+05:30"
    },
    "publishedAt": "2026-09-14T10:15:00+05:30",
    "readTimeBn": "২ মিনিট",
    "readTimeEn": "2 min read",
    "imageUrl": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "BBC Bengali",
      "Wildlife",
      "Environment",
      "Biodiversity",
      "Inani"
    ],
    "id": "54",
    "isLeadStory": false
  }
];

export const ARTICLES = SCANNED_NEWS_ITEMS;
export type Article = NewsItem;
export const OPINION_PIECES: any[] = [];

export const MARKET_DATA: MarketIndex[] = [
  { name: 'NIFTY 50', symbol: 'NIFTY', value: '25,388.90', change: '+0.42%', isPositive: true },
  { name: 'SENSEX', symbol: 'SENSEX', value: '82,890.94', change: '+0.44%', isPositive: true },
  { name: 'DSEX (Dhaka)', symbol: 'DSEX', value: '5,728.15', change: '+0.18%', isPositive: true },
  { name: 'USD/BDT', symbol: 'USDBDT', value: '৳120.45', change: '-0.05%', isPositive: false },
  { name: 'INR/BDT', symbol: 'INRBDT', value: '৳1.43', change: '+0.02%', isPositive: true },
];
