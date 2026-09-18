export type SentimentType = 'positive' | 'negative' | 'neutral';
export type LanguageType = 'English' | 'Bengali' | 'Hindi';
export type BureauType = 'Delhi' | 'Kolkata' | 'Mumbai';

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
  { slug: 'border', labelBn: 'সীমান্ত নিরাপত্তা', labelEn: 'Border & Security', icon: 'Shield' },
  { slug: 'economy', labelBn: 'অর্থনীতি ও বিদ্যুৎ', labelEn: 'Economy & Energy', icon: 'Building2' },
  { slug: 'sports', labelBn: 'ক্রীড়া ও ক্রিকেট', labelEn: 'Sports & Cricket', icon: 'Trophy' },
  { slug: 'culture', labelBn: 'সংস্কৃতি ও সাহিত্য', labelEn: 'Culture & Arts', icon: 'Sparkles' },
];

export const SCANNER_STATS = {
  "totalScanned24h": 2677,
  "bangladeshMatches": 719,
  "sentimentDistribution": {
    "positive": 5,
    "neutral": 15,
    "negative": 14
  },
  "bureauDistribution": {
    "delhi": 20,
    "kolkata": 14,
    "mumbai": 8
  },
  "languageDistribution": {
    "english": 16,
    "bengali": 15,
    "hindi": 3
  }
};

export const BREAKING_NEWS_ALERTS: BreakingAlert[] = [
  {
    "id": "alert-020",
    "headlineBn": "‘তারেক রহমানের দিল্লি সফর ও দ্বিপাক্ষিক সম্পর্ক পুনর্গঠন নিয়ে পর্যালোচনা’: নবভারত টাইমসের বিশেষ সংবাদ",
    "headlineEn": "Navbharat Times report on BNP leadership's potential Delhi visit and India-Bangladesh diplomatic reset",
    "timeAgoBn": "আজ বিকেলে",
    "timeAgoEn": "This afternoon",
    "sourceName": "Navbharat Times",
    "sourceBureau": "Delhi",
    "sentiment": "neutral",
    "url": "https://news.google.com/rss/articles/CBMi1gFBVV95cUxOdEtSS1ZyUEw3SGFENkNYQUVxeDkxS2dIbGZqRUllRDJLbmxkeDZOSVFLVjBkQndySGkwcHhyNHk1Q3VUSC1fQmpYZ0YxMjFLNjk2NjN6WUxmVWdkN2lzX29LWnZKQnVUTVBSTkdweHdjOHpMTGNlMFZweGRRUXY0UDdxamExbXNxNmo3V3FKM0Npb1pNUzhTSGRiOTJ2bEY3MWNwaTR1V1l6RWZBVG9lWWZud2xrdnQ1dkFFUF9hNkhsTGJ3VlV2RmxjaHhUVWxTYWx6Mkx30gHbAUFVX3lxTE83OS13UG1RSFc4RlJtcWJoQzVyWDRoVWY5Sy10SXFhWUNjNzJsZVZvOV8tb1FsbFhrNUNCemxFeHN2STdhbnRkRkp1ZURVUTZnY1lLeXdxcVdMTjFRS2l0VWpnN2ZZSFkxLTduOEF3NlpQTFdKMm9GZERhWXdYRHRpT2M5Q3p3aldNTkQ2U1ZwWEJELXpLQXFWSUo0RUJlRkhtcFgtaWV4TE11ZTZqbzlzaTczU1RjaVBzUlZVOEdncEZmZVFRdFlNa1dzT1h6bDVXSWpOTFZndEZqdw?oc=5"
  },
  {
    "id": "alert-019",
    "headlineBn": "‘বিজয়ের মাসের আগেই শেখ হাসিনার স্বদেশ প্রত্যাবর্তন চর্চা’: কলকাতা সংবাদ প্রতিদিনের বিশেষ এক্সক্লুসিভ রিপোর্ট",
    "headlineEn": "Sangbad Pratidin report on political strategy and discussions surrounding Hasina's exile return",
    "timeAgoBn": "আজ সকালে",
    "timeAgoEn": "This morning",
    "sourceName": "Sangbad Pratidin",
    "sourceBureau": "Kolkata",
    "sentiment": "negative",
    "url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxNMHR0ZVhXT0EwUFRhRW85dGx2bWN2U296aDR0UnZDWWlFLTZ3U1UtQUZScFhKdVVacmZFb1BBcG9RUGxqMm9LakR1T0ZfR2FVTnN5U3J6ekhFQnhUZnJZekFsQnhiWWRtYWR0ZW5WQnZra25FaldwbFB6Tm5JVjBBcWF3bl9kckt3dFhEaTRoV3R4ODdZTnBlMXlqcFhxNzNHNlV6TC16cjNBenhTc0VUMjhZUlhpRmFm?oc=5"
  },
  {
    "id": "alert-018",
    "headlineBn": "‘আওয়ামী লীগ আমলে স্বাক্ষরিত ১০১টি দ্বিপাক্ষিক চুক্তি পুনর্মূল্যায়ন করছে অন্তর্বর্তী সরকার’: দ্য ইন্ডিয়ান এক্সপ্রেসের বিশেষ সংবাদ",
    "headlineEn": "Bangladesh reviewing 101 agreements signed with India during Sheikh Hasina tenure: Indian Express",
    "timeAgoBn": "আজ সকালে",
    "timeAgoEn": "This morning",
    "sourceName": "The Indian Express",
    "sourceBureau": "Delhi",
    "sentiment": "neutral",
    "url": "https://indianexpress.com/article/world/bangladesh-reviews-101-india-deals-sheikh-hasina-government/"
  },
  {
    "id": "alert-017",
    "headlineBn": "‘শেখ হাসিনাকে আশ্রয় দেওয়া নিয়ে টানাপোড়েন ও দ্বিপাক্ষিক কূটনীতিতে নতুন চাপ’: এনডিটিভির বিশেষ বিশ্লেষণ",
    "headlineEn": "Tensions mount over Sheikh Hasina's exile in India as Bangladesh calls for extradition: NDTV Report",
    "timeAgoBn": "আজ দুপুরে",
    "timeAgoEn": "This afternoon",
    "sourceName": "NDTV World",
    "sourceBureau": "Delhi",
    "sentiment": "negative",
    "url": "https://www.ndtv.com/world-news"
  },
  {
    "id": "alert-016",
    "headlineBn": "‘হাসিনার ফেরা ও স্থানীয় সরকার নির্বাচন ঘিরে রাজনৈতিক উত্তাপের আশঙ্কা’: দ্য ওয়াল-এর প্রতিবেদন",
    "headlineEn": "Fears of political unrest over Hasina's exile return and local polls: Kolkata portal The Wall",
    "timeAgoBn": "রাত ৯টা",
    "timeAgoEn": "9:00 PM",
    "sourceName": "The Wall",
    "sourceBureau": "Kolkata",
    "sentiment": "negative",
    "url": "https://news.google.com/rss/articles/CBMikAJBVV95cUxNcG05OE9nNXFhclZudmtCcE1Pa09BSU1jblZkSHJIUmdIcUdrNGpudGRnSnh5UmQ4S0Q4YTlUeEFVY2xoYm4takZjYVk3a2tSdVpPTVl1OTJJeGZvb3NEX2xUZGhTbjgyNUM5REZicnBUT0J6LVo3bHZpeklYOXBhQzBRVFZ6VjJKbmtGZzlXSHNFVVdaMm1KbEVJX05HTzEzMWVnOERsWVFCTTA4RkxKWlVaVWlacjRGdENkTXNQakVaR0dkU2J0eGVTcUN6dFVTbG9JekJGTDJfbmJKUmpMaVdCNUU5emc5MDAxeWhIcWxnejNYZVdRcVV5MXUxNWFzS1J6Mm55QTAxNkpCNWdkUNIBlgJBVV95cUxOaDMxdjFuSmZUUFQtX21HRkI4X1BaSTNJcHJadlpxY0RLanRtYURNN0ZlVUJ0OEFiNW43aWpqczFfcXRNRmE3NnlzcjNWV3ZGODhzSnR6SmUzREpOd0NKblNWajkyMjBQaEduM0NLaDhsN1k2c05WbGtnSDYtVFRBN1hDTnAxdFRvVE1SY1Q2MmNYWjNTVy1uVmxDaVIwNGJwSnhnaG9HcUZ5MHg4NHNSV2R0Tl9vQmF1ejI0dHo2elBsME9yQURYUEkzVzJ3T01RbFpOa05mX2RRN3NzdDhZOTJKR3Q4Ri0xdEtKd1VvX192RTRGVDh0ZFZSUXFsWENQTHE5WUJYQjlpbkZEZ3dDdko4UHI4UQ?oc=5"
  },
  {
    "id": "alert-015",
    "headlineBn": "‘হাসিনার প্রত্যাবর্তন থেকে মক্কা চুক্তি: বহু প্রশ্ন উত্তরহীন বাংলাদেশে’: কলকাতা সংবাদ প্রতিদিনের বিশেষ সম্পাদকীয় বিশ্লেষণ",
    "headlineEn": "Sangbad Pratidin Editorial: Unanswered economic & security questions in Bangladesh amid Hasina return debates",
    "timeAgoBn": "আজ বিকেলে",
    "timeAgoEn": "This afternoon",
    "sourceName": "Sangbad Pratidin",
    "sourceBureau": "Kolkata",
    "sentiment": "negative",
    "url": "https://www.sangbadpratidin.in/editorial/from-hasinas-return-to-the-mecca-pact-many-questions-remain-unanswered-in-bangladesh/pid/1341406/"
  },
  {
    "id": "alert-014",
    "headlineBn": "ট্রাইব্যুনালের রায়ের প্রতিবাদে আওয়ামী লীগের জেলা কমিটির ইনস্টাগ্রাম ফটো ডিসপ্যাচ ও সোশ্যাল মিডিয়ায় আলোড়ন",
    "headlineEn": "Awami League district units post Instagram visual dispatches rejecting ICT death sentence verdict",
    "timeAgoBn": "১ মিনিট পোস্ট",
    "timeAgoEn": "1 min post",
    "sourceName": "Indian Media (Instagram)",
    "sourceBureau": "Delhi",
    "sentiment": "negative",
    "url": "https://www.instagram.com"
  },
  {
    "id": "alert-010",
    "headlineBn": "জুলাই গণ-অভ্যুত্থানে মানবতাবিরোধী অপরাধ: ওবায়দুল কাদেরসহ আওয়ামী লীগের ৭ নেতার মৃত্যুদণ্ডের রায় আন্তর্জাতিক অপরাধ ট্রাইব্যুনালের",
    "headlineEn": "Bangladesh tribunal sentences 7 senior Awami League leaders to death over 'July uprising'",
    "timeAgoBn": "আজ সকালে",
    "timeAgoEn": "This morning",
    "sourceName": "The Times of India",
    "sourceBureau": "Delhi",
    "sentiment": "negative",
    "url": "https://timesofindia.indiatimes.com/world/south-asia/bdesh-tribunal-sentences-7-awami-members-to-death-over-july-uprising/articleshow/134276177.cms"
  },
  {
    "id": "alert-011",
    "headlineBn": "‘শেখ হাসিনাকে ফেরত দিলেই সম্পর্ক সুধারেগা’: ভারতীয় গণমাধ্যমে তারেক রহমানের উপদেষ্টার শর্ত তুলে ধরা প্রতিবেদন",
    "headlineEn": "'Hand over Sheikh Hasina to restore ties': Tarique Rahman's Advisor sets conditions (Navbharat Times)",
    "timeAgoBn": "আজ সকালে",
    "timeAgoEn": "This morning",
    "sourceName": "Navbharat Times",
    "sourceBureau": "Delhi",
    "sentiment": "negative",
    "url": "https://news.google.com/rss/articles/CBMiiwJBVV95cUxNdkFVdHh4OWRKNXFlV0dqRTRTSXhsdXRvVUYyamE5MU9JNDdoRkVTSnJjQW5CTkZ6MTdQVE9vdU5iTlFZZ0YzZ2J5OV9sZ2lHN01VS0pFUTFhaDhPM3BxZkctaFBTaVZMbFJJUnYxQUo2TDhXN0dyMzBpTjdkYnpkajgzU2YwUzBCMkpJQ2c1MzV1NTczSkFIei1SN2NwMW1xNHd5RDRGdlk4M2VVNVNrU09BLXBmd2ZFTDdYR1lGN1M3X2w5MmFCN3VQZGpoekpuZWFoVi1nQVNESXlWMmotSE5FWHoyeXJkaUh5MUJIZmJFVlhSNzlIcUVFZkhQOW1Wc3hTX0EwWXpmOXPSAZACQVVfeXFMTXVmOE1aanRaVGM5RUdpNTl2YnRwQ3lmVEFyVVBxMTQ4ZEE1LVV4R1NXQlpNYjZmRktRanVBWnc1cXNKVHRiUGRUUjlXYVBhUmVUd2JjWUVkbFIxN1Y1YjVhaGw5ZDE4b1BXOXVHaUNsdXJLQ04xSTZCX0d4WEZOR0ZyanB2cTI2a0JOalRPT21OZ1Vld01pN0lSUWFrbV9NY2NSM05wRTk0YkhTZHZKYlhCa0tXcjNPc1BJYmtrdkxpdmhybkNKWXA2Q1dIVHd1cl9CTG83YmRXaGdMcTByMll3TmY2RnVDc2tUOHExWGptTl9pLTNRbDl0VGphbktTVVdsU0ZPR2N2NDhScHVoa1g?oc=5"
  },
  {
    "id": "alert-012",
    "headlineBn": "সর্বজনীন পেনশন স্কিমে পরিবর্তন: চাঁদা প্রদানকারীর স্বামী বা স্ত্রী পাবেন আজীবন সুবিধা (বিবিসি বাংলা)",
    "headlineEn": "Universal Pension Scheme Reforms: Spouses to receive lifetime benefits (BBC Bengali)",
    "timeAgoBn": "আজ সকালে",
    "timeAgoEn": "This morning",
    "sourceName": "BBC Bengali",
    "sourceBureau": "Delhi",
    "sentiment": "positive",
    "url": "https://www.bbc.com/bengali/articles/ck3re1vx2l8ro"
  },
  {
    "id": "alert-013",
    "headlineBn": "দিল্লিতে শেখ হাসিনার ৩-দফা রাজনৈতিক পরামর্শ সভা ও ভিডিও বিশ্লেষণ (ইউটিউব নিউজ ডিসপ্যাচ)",
    "headlineEn": "Sheikh Hasina's 3-Point Delhi Strategy Meetings Covered by Indian Digital Media (YouTube Report)",
    "timeAgoBn": "ভিডিও রিপোর্ট",
    "timeAgoEn": "Video Dispatch",
    "sourceName": "Politics Tv (YouTube)",
    "sourceBureau": "Delhi",
    "sentiment": "neutral",
    "url": "https://news.google.com/rss/articles/CBMiVkFVX3lxTE9EOVRXeFpaQTdpVTlSM3pIUGx4ZHhSc3FuWG1JQXFMUDh5UXVGdzNlQUgwNFBKWjVLZmVHazFxSl9FWUV5Mnd2bkFyMUFWWFZQdWtyVGhn?oc=5"
  },
  {
    "id": "alert-009",
    "headlineBn": "‘আমার মাকে এক কাপড়ে ওপার বাংলা থেকে পালিয়ে আসতে হয়েছিল’: শুভেন্দু অধিকারী (ভিডিও রিপোর্ট)",
    "headlineEn": "'My mother had to flee Opar Bangla in a single cloth': Suvendu Adhikari (Video Dispatch)",
    "timeAgoBn": "ভিডিও রিপোর্ট",
    "timeAgoEn": "Video Dispatch",
    "sourceName": "BNT Bangla (YouTube)",
    "sourceBureau": "Kolkata",
    "sentiment": "negative",
    "url": "https://www.youtube.com/watch?v=0WrRFhIezuc"
  },
  {
    "id": "alert-008",
    "headlineBn": "‘হিন্দু বাঙালিদের অবস্থা হতে পারত চিন্ময়কৃষ্ণের মতো’: বাংলাদেশে পরিস্থিতি নিয়ে সরব শুভেন্দু অধিকারী",
    "headlineEn": "'Condition of Hindu Bengalis could have been like Chinmoy Krishna': Suvendu Adhikari on Bangladesh crisis",
    "timeAgoBn": "এই মাত্র",
    "timeAgoEn": "Just now",
    "sourceName": "Ei Samay",
    "sourceBureau": "Kolkata",
    "sentiment": "negative",
    "url": "https://eisamay.com/west-bengal-news/kolkata-news/cm-suvendu-adhikari-reaction-over-bangladesh-chinmay-krishna-current-situation/200541925.cms"
  },
  {
    "id": "alert-006",
    "headlineBn": "কাদেরসহ আওয়ামী লীগের ৭ শীর্ষ নেতার বিরুদ্ধে আজ ট্রাইব্যুনালের রায় ঘোষণা",
    "headlineEn": "Dhaka Tribunal to Deliver Verdict on 7 AL Leaders Including Obaidul Quader Today",
    "timeAgoBn": "১ ঘন্টা আগে",
    "timeAgoEn": "1 hour ago",
    "sourceName": "The Wall",
    "sourceBureau": "Kolkata",
    "sentiment": "neutral",
    "url": "https://www.thewall.in/bangladesh/dhaka-tribunal-verdict-against-seven-awami-league-leaders-before-hasinas-return/tid/204850"
  },
  {
    "id": "alert-005",
    "headlineBn": "শেখ সেলিমের ‘নেতৃত্ব’ ইস্যুতে আওয়ামী লীগে তীব্র বিতর্ক ও অসন্তোষ",
    "headlineEn": "Row over Sheikh Selim's 'Leadership' in Awami League: Is Internal Crisis Brewing?",
    "timeAgoBn": "৪ ঘন্টা আগে",
    "timeAgoEn": "4 hours ago",
    "sourceName": "BBC News বাংলা",
    "sourceBureau": "Kolkata",
    "sentiment": "neutral",
    "url": "https://www.bbc.com/bengali/articles/c046rvwk2pvo"
  },
  {
    "id": "alert-007",
    "headlineBn": "মায়ের শেষকৃত্যে যোগ দিতে চিন্ময় কৃষ্ণ দাসকে ৫ ঘণ্টার বিশেষ প্যারোল মঞ্জুর",
    "headlineEn": "Chinmoy Krishna Das Granted 5-Hour Parole to Attend Mother's Last Rites",
    "timeAgoBn": "৫ দিন আগে",
    "timeAgoEn": "5 days ago",
    "sourceName": "The Wall",
    "sourceBureau": "Kolkata",
    "sentiment": "negative",
    "url": "https://www.thewall.in/bangladesh/chinmay-krishnas-mother-departed-with-the-unfulfilled-wish-of-seeing-her-son-will-tareq-sarkar-grant-parole-to-the-imprisoned-monk/tid/204451"
  },
  {
    "id": "alert-001",
    "headlineBn": "ঢাকা বিশ্ববিদ্যালয়ে জিন্নাহ ও জামায়াত নেতার ছবি টানানো নিয়ে বিতর্ক",
    "headlineEn": "Row at Dhaka University over photos of Jinnah, Jamaat ex-chief",
    "timeAgoBn": "২ ঘন্টা আগে",
    "timeAgoEn": "2 hours ago",
    "sourceName": "Times of India World",
    "sourceBureau": "Delhi",
    "sentiment": "negative",
    "url": "https://timesofindia.indiatimes.com/world/south-asia/row-at-dhaka-university-over-photos-of-jinnah-jamaat-ex-chief/articleshow/134249657.cms"
  },
  {
    "id": "alert-002",
    "headlineBn": "ভারত থেকে বাংলাদেশে ইলিশ রপ্তানি: ‘ইউএনও রিভার্স’",
    "headlineEn": "UNO reverse: India is now sending hilsa to Bangladesh",
    "timeAgoBn": "১ দিন আগে",
    "timeAgoEn": "1 day ago",
    "sourceName": "India Today",
    "sourceBureau": "Delhi",
    "sentiment": "positive",
    "url": "https://www.indiatoday.in/newsmo/short-videos/uno-reverse-india-is-now-sending-hilsa-to-bangladesh-2994581-2026-09-14?utm_source=rss"
  },
  {
    "id": "alert-003",
    "headlineBn": "তারেক রহমানের অধীনে ভারত-বাংলাদেশ সম্পর্ক পুনরায় সেট করা সম্ভব?",
    "headlineEn": "Expert Explains | Can India and Bangladesh reset ties under Tarique Rahman?",
    "timeAgoBn": "১ দিন আগে",
    "timeAgoEn": "1 day ago",
    "sourceName": "The Indian Express",
    "sourceBureau": "Delhi",
    "sentiment": "neutral",
    "url": "https://news.google.com/rss/articles/CBMi2wFBVV95cUxNRGtLZm5yTmt3UDQyUjFSSzBMVUxPeVhHSHg5dWtjYmo4X2JFdHBsRi1GQ05mZ1NiTEVwZXFQV3AyOWZ2blVEMnRCN3lKZS13cnhER2N2Z3VWTC1oWDZObDE5NHZUZmFuVUo2cDRjMGFfaG1XeHZNRjFad1dzTnNGc0R5bmNvcktQbHNxSzJBUU1VbEg0MUpza0g3SmdaRzRjWTA4QXlNa19VT0VZcThQTDRKV21qR19IWWRVOGJ3cGZOeFpJanY3ZUp2RmNmV1haMnJvZXYybTU4d0nSAeIBQVVfeXFMT0J3SzJ2WUxCU1pvRDJtVzJON1lVTVFBRXBGcU5qX1gwdXhwNGhYandON3NwemRiOVR1NHhtQ1FrRWhKSzllYXBHcUtFV3Q5clFEcU9wWHBSQ0V4WnplR2ZKYUczemVOR05NdlZPd0ZjQUlsZ2NyeUZlQUVaQTFoX25FWWRTRDBfeEFHdFltNlFRSFBZVk1mN3NpQXBvNVh4ZlhaNTBNR3hBN2JaWXlxeU1PZVI2dk1SczhhMXRwVVpsUXdsUlVSU2tib3YwS08zODBiUGNzVk9vSzRYLWloY0dRdw?oc=5"
  },
  {
    "id": "alert-004",
    "headlineBn": "শেখ হাসিনার কন্যা জালিয়াতির অভিযোগে ডব্লিউএইচও আঞ্চলিক প্রধান পদ থেকে পদত্যাগ করেছেন",
    "headlineEn": "Sheikh Hasina's Daughter Resigns As WHO Regional Head After Fraud Charges",
    "timeAgoBn": "৬ দিন আগে",
    "timeAgoEn": "6 days ago",
    "sourceName": "NDTV",
    "sourceBureau": "Delhi",
    "sentiment": "negative",
    "url": "https://news.google.com/rss/articles/CBMiwwFBVV95cUxPemExY1Y5WW5KYjk4SWxOdjk1MFhYdnB6VGU4WjdJa1lyZ3Z5M1NReVl0c05MMHNYUHZCS3p2OU9aSlAtWDUtUXpoc2FoU2RHZWhhazhGank3aHdqOXlwLVMyTDhIemY0dzF1SUpzRVNkMXBkMTZhQ2stSkNwVml6MUMtcDB2c19sTmMzT09hNDV3QTZ0SXBTYmtkUUROQVVEZ1ZyMExTVUZsWVQxejdNMlpzWkREU1VqS0xBUmVyb00tQVHSAcsBQVVfeXFMTmxCWFgxSlc5Tkp5U3lpSk9hdXlLYlV0enh0bl94TXVUXzktYzhvWHkwYnJ6TFlSTXF3b19mRDVfQlhyUmZQNG5JUzVjUm5yUmF4eS1SYzdVUjM3U1IxUFhDSzJtVGRUWlhlYWs1WlpvUWlWR2xDeEROeU43TnB2WGk0Sl85MlFqc1UxVHIyS1lEdGJhR21xajlMbS11OU5DNzF1c1hYT1FfcXpTNElYVTFUQ2dxLW9xdXowVGtselhFQVYzS2tKNk53SG8?oc=5"
  }
];

export const SCANNED_NEWS_ITEMS: NewsItem[] = [
  {
    "id": "news-20260918-016",
    "slug": "india-global-review-youtube-palki-sharma-bangladesh-diplomatic-reset",
    "title": "India Global Review (IGR): Strategic Analysis on New Delhi's Foreign Policy Reset with Bangladesh",
    "englishTitle": "India Global Review Special YouTube Dispatch: Diplomatic Analysis on India-Bangladesh Reset",
    "banglaTitle": "ভারত-বাংলাদেশ বৈশ্বিক ভূরাজনীতি ও নতুন কূটনৈতিক সমীকরণ: ইন্ডিয়া গ্লোবাল রিভিউ (ইউটিউব বিশ্লেষণ)",
    "summaryBn": "ভারতের আন্তর্জাতিক বিষয়কমূলক শীর্ষ ডিজিটাল চ্যানেল 'ইন্ডিয়া গ্লোবাল রিভিউ' (IGR)-এর বিশেষ ইউটিউব ব্রডকাস্টে দক্ষিণ এশিয়ার ভূরাজনীতিতে দিল্লির কৌশলগত অবস্থান, দ্বিপাক্ষিক বাণিজ্য ও বাংলাদেশের অন্তর্বর্তী নেতৃত্বের পররাষ্ট্র নীতি নিয়ে গভীর বিশ্লেষণ সম্প্রচার করা হয়েছে।",
    "summaryEn": "Leading Indian international affairs digital network India Global Review (IGR) published a special YouTube video analysis examining South Asian geopolitical balances, regional trade corridors, and New Delhi's diplomatic engagement with Bangladesh.",
    "keyPointsBn": [
      "ইন্ডিয়া গ্লোবাল রিভিউ-এর ইউটিউব ভিডিও বিশ্লেষণে ভারত-বাংলাদেশ দ্বিপাক্ষিক কূটনীতি কভারেজ",
      "দক্ষিণ এশিয়ায় বড় শক্তিগুলোর কৌশলগত প্রতিযোগিতা ও বঙ্গোপসাগর অঞ্চলের নিরাপত্তা আলোচনা",
      "উত্তর-পূর্ব ভারত ও বাংলাদেশের মধ্যে দীর্ঘমেয়াদী অর্থনৈতিক করিডোর বজায় রাখার বার্তা"
    ],
    "keyPointsEn": [
      "India Global Review YouTube channel streams strategic analysis on India-Bangladesh diplomatic ties",
      "Geopolitical evaluation of South Asian power dynamics and Bay of Bengal maritime security",
      "Focus on maintaining long-term economic corridors and regional stability"
    ],
    "category": "diplomacy",
    "categoryLabelBn": "কূটনীতি ও ভূরাজনীতি",
    "categoryLabelEn": "Diplomacy & Geopolitics",
    "sentiment": "neutral",
    "sentimentReasonBn": "আন্তর্জাতিক কূটনীতি ও দ্বিপাক্ষিক সম্পর্কের বস্তুনিষ্ঠ বিশ্বজনীন ভিডিও বিশ্লেষণ।",
    "sentimentReasonEn": "Balanced analytical global affairs reporting from India Global Review.",
    "source": {
      "name": "India Global Review (YouTube)",
      "bureau": "Delhi",
      "language": "English",
      "originalUrl": "https://www.youtube.com/watch?v=u3uJhAXK__8",
      "originalHeadline": "India Global Review Special: Bangladesh Foreign Policy Reset & Regional Geopolitics",
      "scannedAt": "2026-09-18T20:38:00.000Z"
    },
    "publishedAt": "2026-09-18T19:00:00.000Z",
    "readTimeBn": "২ মিনিট",
    "readTimeEn": "2 min read",
    "imageUrl": "https://i.ytimg.com/vi/u3uJhAXK__8/hqdefault.jpg",
    "isLeadStory": false,
    "isTrending": true,
    "tags": [
      "India Global Review",
      "YouTube Video",
      "Palki Sharma",
      "Delhi Bureau",
      "Geopolitics",
      "India Bangladesh Reset"
    ]
  },
  {
    "id": "news-20260918-013",
    "slug": "economic-times-mumbai-rbi-credit-lines-trade-settlement-bangladesh",
    "title": "The Economic Times Mumbai: RBI & Commercial Banks Review Credit Lines and Trade LCs with Bangladesh",
    "englishTitle": "The Economic Times Mumbai HQ: Financial Sector Policy & Trade Credit Settlement Review",
    "banglaTitle": "বাংলাদেশ ও ভারতের বাণিজ্যিক ব্যাংকিং এলসি ও ঋণপত্র পর্যালোচনা: মুম্বই দ্য ইকোনমিক টাইমসের প্রতিবেদন",
    "summaryBn": "ভারতের প্রধান আর্থিক রাজধানী মুম্বইভিত্তিক জাতীয় দৈনিক 'দ্য ইকোনমিক টাইমস'-এর ব্যাংকিং প্রতিবেদনে প্রকাশ, আরবিআই (রিজার্ভ ব্যাংক অফ ইন্ডিয়া) ও ভারতীয় বাণিজ্যিক ব্যাংকগুলো বাংলাদেশ-ভারত দ্বিপাক্ষিক বাণিজ্য ঋণপত্র (এলসি) ও এশিয়ান ক্লিয়ারিং ইউনিয়ন (এসিইউ) পেমেন্ট সেটেলমেন্ট প্রক্রিয়া সচল রাখতে নতুন দিকনির্দেশনা পর্যালোচনা করছে।",
    "summaryEn": "Mumbai financial daily The Economic Times reports on Reserve Bank of India (RBI) and commercial banking institutions reviewing letter-of-credit (LC) guarantees and Asian Clearing Union (ACU) payment mechanisms for cross-border trade with Bangladesh.",
    "keyPointsBn": [
      "ইকোনমিক টাইমসে মুম্বই আর্থিক ডেস্কের ব্যাংকিং ঋণপত্র ও এসিইউ পেমেন্ট ডলার রিভিউর তথ্য",
      "মুম্বই ও কলকাতা ব্যাংকিং খাতের বাংলাদেশ বাণিজ্য পেমেন্ট ও ক্রেডিট গ্যারান্টি আলোচনা",
      "দ্বিপাক্ষিক আর্থিক লেনদেনে রূপি-টাকা সমন্বিত অ্যাকাউন্টের কার্যকারিতা পর্যালোচনা"
    ],
    "keyPointsEn": [
      "The Economic Times Mumbai covers RBI and banking credit-line evaluations for Bangladesh trade",
      "Financial sector focus on Letter of Credit (LC) clearance and Asian Clearing Union settlement",
      "Review of Rupee-Taka trade account mechanisms among Mumbai financial institutions"
    ],
    "category": "economy",
    "categoryLabelBn": "অর্থনীতি ও ব্যাংকিং খাতা",
    "categoryLabelEn": "Economy & Financial Sector",
    "sentiment": "neutral",
    "sentimentReasonBn": "মুম্বই আর্থিক রাজধানী কেন্দ্রিক ব্যাংকিং ও বাণিজ্যিক লেনদেনের গঠনমূলক খবর পরিবেশন।",
    "sentimentReasonEn": "Analytical banking sector coverage from Mumbai financial desk.",
    "source": {
      "name": "The Economic Times",
      "bureau": "Mumbai",
      "language": "English",
      "originalUrl": "https://economictimes.indiatimes.com/news/economy/foreign-trade/rbi-banks-review-credit-lines-and-trade-lcs-with-bangladesh/articleshow/134298101.cms",
      "originalHeadline": "RBI & Commercial Banks Review Credit Lines and Trade LCs for Bangladesh Operations",
      "scannedAt": "2026-09-18T19:45:00.000Z"
    },
    "publishedAt": "2026-09-18T17:15:00.000Z",
    "readTimeBn": "৩ মিনিট",
    "readTimeEn": "3 min read",
    "imageUrl": "/images/chattogram-port-maritime-hub.jpg",
    "isLeadStory": false,
    "isTrending": true,
    "tags": [
      "The Economic Times",
      "Mumbai Bureau",
      "RBI",
      "Trade Credit",
      "Bilateral Economy"
    ]
  },
  {
    "id": "news-20260918-014",
    "slug": "times-of-india-mumbai-garment-textile-export-shift-supply-chain",
    "title": "The Times of India Mumbai: Apparel & Textile Hubs Assess Supply Chain Adjustments Amid Dhaka Shift",
    "englishTitle": "The Times of India Mumbai HQ: Textile Sector Analysis on Garment Export Dynamics",
    "banglaTitle": "বাংলাদেশের তৈরি পোশাক খাতের সরবরাহে পরিবর্তন ও ভারতীয় টেক্সটাইল রফতানিতে প্রভাব: টাইমস অফ ইন্ডিয়া",
    "summaryBn": "মুম্বই সদর দফতরভিত্তিক 'দ্য টাইমস অফ ইন্ডিয়া'-র বিশেষ টেক্সটাইল প্রতিবেদনে উল্লেখ করা হয়েছে, বাংলাদেশের তৈরি পোশাক (আরএমজি) সরবরাহ শৃঙ্খলে পরিবর্তনের প্রেক্ষাপটে আন্তর্জাতিক ক্রেতারা মুম্বই, তিরুপুর ও সুরাটের ভারতীয় পোশাক রফতানিকারকদের সাথে নতুন ক্রয়চুক্তির উদ্যোগ নিচ্ছেন।",
    "summaryEn": "Mumbai-headquartered flagship newspaper The Times of India reports on Western apparel buyers redirecting supply orders to Indian textile manufacturing hubs in Mumbai, Tirupur, and Surat amid garment sector shifts in Bangladesh.",
    "keyPointsBn": [
      "টাইমস অফ ইন্ডিয়ায় মুম্বই সদর দফতরের টেক্সটাইল ও আন্তর্জাতিক তৈরি পোশাক অর্ডার কভারেজ",
      "মুম্বই, সুরাট ও তিরুপুরের আরএমজি প্রস্তুতকারকদের রফতানি বৃদ্ধি ও বিশ্বব্যাপী চাহিদার সমীকরণ",
      "দক্ষিণ এশিয়ায় পোশাক রফতানি খাতের বাণিজ্যিক প্রতিযোগিতা নিয়ে বিশ্লেষণ"
    ],
    "keyPointsEn": [
      "The Times of India Mumbai HQ details global apparel order realignments",
      "Export manufacturers in Mumbai, Surat, and Tirupur observe increased order inflows",
      "Commercial competitive analysis of South Asian ready-made garment (RMG) exports"
    ],
    "category": "trade",
    "categoryLabelBn": "সীমান্ত বাণিজ্য ও পোশাক খাত",
    "categoryLabelEn": "Cross-Border Trade & Textile",
    "sentiment": "positive",
    "sentimentReasonBn": "পোশাক রফতানি খাতের নতুন বাণিজ্যিক সম্ভাবনা ও চুক্তির খবর পরিবেশন।",
    "sentimentReasonEn": "Positive economic reporting on South Asian trade supply chain dynamics.",
    "source": {
      "name": "The Times of India",
      "bureau": "Mumbai",
      "language": "English",
      "originalUrl": "https://timesofindia.indiatimes.com/business/india-business/apparel-textile-hubs-in-mumbai-assess-supply-chain-adjustments-amid-dhaka-shift/articleshow/134298155.cms",
      "originalHeadline": "Apparel & Textile Export Hubs Assess Supply Chain Realignment Amid South Asian Shifts",
      "scannedAt": "2026-09-18T19:45:00.000Z"
    },
    "publishedAt": "2026-09-18T16:30:00.000Z",
    "readTimeBn": "২ মিনিট",
    "readTimeEn": "2 min read",
    "imageUrl": "/images/india-bangladesh-trade-land-port.jpg",
    "isLeadStory": false,
    "isTrending": true,
    "tags": [
      "Times of India",
      "Mumbai Bureau",
      "Garment Export",
      "Textile Trade",
      "Apparel Industry"
    ]
  },
  {
    "id": "news-20260918-015",
    "slug": "free-press-journal-mumbai-maritime-bay-of-bengal-trade-corridors",
    "title": "Free Press Journal Mumbai: Strategic Evaluation of Bay of Bengal Maritime Cargo Routes",
    "englishTitle": "Free Press Journal Mumbai HQ: Geopolitical Assessment of Maritime Trade & Port Access",
    "banglaTitle": "বঙ্গোপসাগরে সামুদ্রিক বাণিজ্য পথ ও বন্দর অ্যাক্সেস নিয়ে মুম্বই ফ্রি প্রেস জার্নালের বিশ্লেষণ",
    "summaryBn": "মুম্বইয়ের ঐতিহাসিক সংবাদপত্র 'ফ্রি প্রেস জার্নাল'-এর ভূ-রাজনৈতিক প্রতিবেদনে প্রকাশ, চট্টগ্রাম ও মাতারবাড়ী গভীর সমুদ্র বন্দর ব্যবহার এবং বঙ্গোপসাগরীয় আন্তর্জাতিক বাণিজ্য রুটের স্থায়িত্ব রক্ষায় মুম্বই বন্দর কর্তৃপক্ষ ও ভারতীয় নৌ-কূটনীতিকদের মূল্যায়ন অনুষ্ঠিত হয়েছে।",
    "summaryEn": "Historic Mumbai daily Free Press Journal published a strategic geopolitical report analyzing Bay of Bengal maritime trade lanes, Chittagong-Matarbari port accesses, and Western India sea route transit safety.",
    "keyPointsBn": [
      "ফ্রি প্রেস জার্নালে বঙ্গোপসাগর সামুদ্রিক বাণিজ্য রুট ও বাণিজ্যিক জাহাজ চলাচলের নিরাপত্তা রিপোর্ট",
      "মুম্বই সমুদ্র বন্দর কর্তৃপক্ষ ও ঢাকা-দিল্লি ব্লু-ইকোনমি সহযোগিতার তথ্য",
      "উত্তর-পূর্ব ভারত ও দক্ষিণ এশিয়ার অর্থনৈতিক করিডোরগুলোর কার্যকারিতা কভারেজ"
    ],
    "keyPointsEn": [
      "Free Press Journal Mumbai highlights maritime security protocols across Bay of Bengal trade lanes",
      "Port connectivity and Blue Economy cooperation discussed between Western India and Bangladesh",
      "Evaluation of cargo transit safety across South Asian maritime hubs"
    ],
    "category": "trade",
    "categoryLabelBn": "সামুদ্রিক বাণিজ্য ও পোর্ট",
    "categoryLabelEn": "Maritime Trade & Logistics",
    "sentiment": "neutral",
    "sentimentReasonBn": "সামুদ্রিক বাণিজ্য পথ ও ব্লু-ইকোনমি সম্ভাবনার বস্তুনিষ্ঠ বিশ্লেষণ।",
    "sentimentReasonEn": "Balanced analytical reporting on maritime logistics and trade corridors.",
    "source": {
      "name": "Free Press Journal",
      "bureau": "Mumbai",
      "language": "English",
      "originalUrl": "https://www.freepressjournal.in/business/india-restricts-jute-product-imports-from-bangladesh-to-sea-route-only-via-nhava-sheva-port",
      "originalHeadline": "Strategic Evaluation of Bay of Bengal Maritime Cargo Routes and Port Operations",
      "scannedAt": "2026-09-18T19:45:00.000Z"
    },
    "publishedAt": "2026-09-18T15:40:00.000Z",
    "readTimeBn": "২ মিনিট",
    "readTimeEn": "2 min read",
    "imageUrl": "/images/brics-bimstec-summit-delhi.jpg",
    "isLeadStory": false,
    "isTrending": false,
    "tags": [
      "Free Press Journal",
      "Mumbai Bureau",
      "Maritime Trade",
      "Bay of Bengal",
      "Port Logistics"
    ]
  },
  {
    "id": "news-20260918-012",
    "slug": "the-wall-youtube-sheikh-hasina-jail-sheikh-selim-leadership",
    "title": "The Wall Kolkata YouTube Exclusive: Sheikh Selim Positioned to Lead Party in Case of Hasina Trial Conviction",
    "englishTitle": "The Wall Kolkata YouTube Interview: Sheikh Selim Positioned for Party Leadership if Hasina Imprisoned",
    "banglaTitle": "হাসিনার জেল হলে দল চালাবেন শেখ সেলিম: কলকাতা দ্য ওয়াল-এর বিশেষ ইউটিউব ভিডিও সাক্ষাৎকার",
    "summaryBn": "কলকাতাভিত্তিক প্রভাবশালী সংবাদ মাধ্যম 'দ্য ওয়াল'-এর ইউটিউব বিশেষ ডিজিটাল সাক্ষাৎকারে প্রকাশ, সাবেক প্রধানমন্ত্রী শেখ হাসিনার আইনি বিচারে সাজা বা কারাদণ্ড হলে আওয়ামী লীগের যৌথ ও অন্তর্বর্তী নেতৃত্ব কাঠামোতে শেখ সেলিমকে দল পরিচালনার প্রধান দায়িত্ব দেওয়ার বিষয়ে হাইকম্যান্ডে পর্যালোচনা চলছে।",
    "summaryEn": "Kolkata media house The Wall published a special YouTube video interview discussing internal contingency plans within Awami League, placing senior leader Sheikh Selim at the forefront of party management if Sheikh Hasina faces judicial conviction.",
    "keyPointsBn": [
      "দ্য ওয়াল-এর ইউটিউব ভিডিও ইন্টারভিউতে আওয়ামী লীগের হাইকমান্ডের বিকল্প নেতৃত্ব পরিকল্পনা প্রকাশ",
      "শেখ হাসিনার বিচারিক প্রক্রিয়া ও কারাদণ্ডের ক্ষেত্রে শেখ সেলিমের নেতৃত্ব গ্রহণ সম্পর্কিত আলোচনা",
      "কলকাতা ও দিল্লিতে অবস্থানরত প্রবীণ নেতাদের সাংগঠনিক পুনর্বিন্যাস সংক্রান্ত বিশ্লেষণ"
    ],
    "keyPointsEn": [
      "The Wall Kolkata streams YouTube video interview detailing Awami League leadership contingency plans",
      "Analysis on senior leader Sheikh Selim stepping in if Sheikh Hasina faces legal conviction",
      "Strategic organizational assessment among exile leadership based in Kolkata and New Delhi"
    ],
    "category": "politics",
    "categoryLabelBn": "রাজনীতি ও দলীয় নেতৃত্ব",
    "categoryLabelEn": "Politics & Leadership",
    "sentiment": "negative",
    "sentimentReasonBn": "রাজনৈতিক সংকট, আইনি বিচারে কারাদণ্ড ও দলীয় পুনর্গঠনের স্পর্শকাতর সংবাদ কভারেজ।",
    "sentimentReasonEn": "Analytical coverage on exile party contingency plans amid ongoing legal trials.",
    "source": {
      "name": "The Wall (YouTube)",
      "bureau": "Kolkata",
      "language": "Bengali",
      "originalUrl": "https://www.youtube.com/watch?v=q0mOhYcVWXI",
      "originalHeadline": "হাসিনার জেল হলে দল চালাবেন শেখ সেলিম | Bangladesh News | Sheikh Hasina The Wall Interview",
      "scannedAt": "2026-09-18T19:35:00.000Z"
    },
    "publishedAt": "2026-09-18T18:00:00.000Z",
    "readTimeBn": "২ মিনিট",
    "readTimeEn": "2 min read",
    "imageUrl": "https://i.ytimg.com/vi/q0mOhYcVWXI/hqdefault.jpg",
    "isLeadStory": false,
    "isTrending": true,
    "tags": [
      "The Wall",
      "YouTube Video",
      "Kolkata Bureau",
      "Sheikh Hasina",
      "Sheikh Selim",
      "Awami League"
    ]
  },
  {
    "id": "news-20260918-001",
    "slug": "navbharat-times-brics-bnp-tarique-rahman-delhi-visit-hasina-talks",
    "title": "Navbharat Times Report: BNP Leadership's Potential Delhi Visit and Extradition Discussions",
    "englishTitle": "Navbharat Times Delhi: BNP Leadership's Proposed India Visit & Diplomatic Reset Debates",
    "banglaTitle": "তারেক রহমানের সম্ভাব্য দিল্লি সফর ও শেখ হাসিনার প্রত্যর্পণ ইস্যু: নবভারত টাইমসের বিশেষ প্রতিবেদন",
    "summaryBn": "ভারতের প্রধান হিন্দি জাতীয় দৈনিক 'নবভারত টাইমস'-এর বিশেষ প্রতিবেদনে প্রকাশ, অন্তর্বর্তীকালীন মেয়াদের মধ্যে ঢাকা ও দিল্লির দ্বিপাক্ষিক সম্পর্ক পুনর্গঠনে বিএনপি নেতৃত্বের সম্ভাব্য ভারত সফর নিয়ে উচ্চপর্যায়ের আলোচনা শুরু হয়েছে। সাবেক প্রধানমন্ত্রী শেখ হাসিনার আশ্রয় ও হস্তান্তরের আইনি ও প্রশাসনিক ফ্রেমওয়ার্ক নিয়ে নতুন বিশ্লেষণ প্রকাশ করেছে পত্রিকাটি।",
    "summaryEn": "Leading Hindi national daily Navbharat Times reports on discussions surrounding a potential diplomatic visit to New Delhi by BNP leadership, focusing on extradition talks involving former Prime Minister Sheikh Hasina and bilateral security ties.",
    "keyPointsBn": [
      "নবভারত টাইমসে ভারত-বাংলাদেশ শীর্ষ পর্যায়ে নতুন কূটনৈতিক যোগাযোগের বিস্তারিত প্রতিবেদন",
      "শেখ হাসিনার প্রত্যর্পণ ও দিল্লিতে আশ্রয় সংক্রান্ত আইনি জটিলতা নিয়ে ভারতীয় সংবাদ মাধমের বিশ্লেষণ",
      "উত্তর-পূর্ব সীমান্ত নিরাপত্তা, ট্রানজিট ও অর্থনৈতিক সহযোগিতা বজায় রাখার যৌথ উদ্যোগ"
    ],
    "keyPointsEn": [
      "Navbharat Times details potential high-level diplomatic outreach between New Delhi and Dhaka",
      "Indian media analysis underlines legal and administrative nuances surrounding Sheikh Hasina's exile",
      "Joint focus on maintaining North-East border security, transit corridors, and economic ties"
    ],
    "category": "diplomacy",
    "categoryLabelBn": "কূটনীতি ও স্থানান্তরণ",
    "categoryLabelEn": "Diplomacy & Security",
    "sentiment": "neutral",
    "sentimentReasonBn": "দ্বিপাক্ষিক সম্পর্ক ও শীর্ষ পর্যায়ের উচ্চ রাজনৈতিক উদ্যোগের বস্তুনিষ্ঠ সংবাদ উপস্থাপন।",
    "sentimentReasonEn": "Balanced analytical coverage of high-level diplomatic reset discussions.",
    "source": {
      "name": "Navbharat Times",
      "bureau": "Delhi",
      "language": "Hindi",
      "originalUrl": "https://news.google.com/rss/articles/CBMi1gFBVV95cUxOdEtSS1ZyUEw3SGFENkNYQUVxeDkxS2dIbGZqRUllRDJLbmxkeDZOSVFLVjBkQndySGkwcHhyNHk1Q3VUSC1fQmpYZ0YxMjFLNjk2NjN6WUxmVWdkN2lzX29LWnZKQnVUTVBSTkdweHdjOHpMTGNlMFZweGRRUXY0UDdxamExbXNxNmo3V3FKM0Npb1pNUzhTSGRiOTJ2bEY3MWNwaTR1V1l6RWZBVG9lWWZud2xrdnQ1dkFFUF9hNkhsTGJ3VlV2RmxjaHhUVWxTYWx6Mkx30gHbAUFVX3lxTE83OS13UG1RSFc4RlJtcWJoQzVyWDRoVWY5Sy10SXFhWUNjNzJsZVZvOV8tb1FsbFhrNUNCemxFeHN2STdhbnRkRkp1ZURVUTZnY1lLeXdxcVdMTjFRS2l0VWpnN2ZZSFkxLTduOEF3NlpQTFdKMm9GZERhWXdYRHRpT2M5Q3p3aldNTkQ2U1ZwWEJELXpLQXFWSUo0RUJlRkhtcFgtaWV4TE11ZTZqbzlzaTczU1RjaVBzUlZVOEdncEZmZVFRdFlNa1dzT1h6bDVXSWpOTFZndEZqdw?oc=5",
      "originalHeadline": "BRICS से कर लिया था किनारा, अब भारत आ रहे तारिक रहमान, क्या शेख हसीना का मुद्दा भी उठाएंगे बांग्लादेशी पीएम?",
      "scannedAt": "2026-09-18T19:05:00.000Z"
    },
    "publishedAt": "2026-09-18T14:30:00.000Z",
    "readTimeBn": "৩ মিনিট",
    "readTimeEn": "3 min read",
    "imageUrl": "/images/delhi-dhaka-bilateral-summit.jpg",
    "isLeadStory": true,
    "isTrending": true,
    "tags": [
      "Navbharat Times",
      "Tarique Rahman",
      "Delhi Visit",
      "Sheikh Hasina",
      "India Bangladesh Ties"
    ]
  },
  {
    "id": "news-20260918-002",
    "slug": "sangbad-pratidin-report-hasina-return-strategy-victory-month",
    "title": "Sangbad Pratidin Insider Report: Awami League Reorganization and Hasina's Return Strategy",
    "englishTitle": "Sangbad Pratidin Kolkata: Insider Report on Awami League Leadership & Return Discussions",
    "banglaTitle": "বিজয়ের মাসের আগেই শেখ হাসিনার প্রত্যাবর্তন আলোচনা: কলকাতা সংবাদ প্রতিদিনের বিশেষ খবর",
    "summaryBn": "কলকাতাভিত্তিক দৈনিক 'সংবাদ প্রতিদিন'-এর বিশেষ প্রতিবেদনে বলা হয়েছে, আন্তর্জাতিক আদালতে আইনি লড়াই ও দেশের অভ্যন্তরে কর্মী-সমর্থকদের চাঙ্গা রাখতে শেখ হাসিনার নেতৃত্বাধীন দল আগামী বিজয় দিবসের আগেই নতুন কৌশলগত বার্তা দেওয়ার প্রস্তুতি নিচ্ছে।",
    "summaryEn": "Kolkata daily Sangbad Pratidin published an insider report discussing political organizational strategies and debates surrounding Sheikh Hasina's exile return ahead of Bangladesh's Victory Day observances.",
    "keyPointsBn": [
      "সংবাদ প্রতিদিনের বিশেষ এক্সক্লুসিভ কভারেজে আওয়ামী লীগের হাইকম্যান্ডের পরিকল্পনা প্রকাশ",
      "কলকাতাকেন্দ্রিক সংবাদ মাধ্যমে হাসিনার প্রত্যাবর্তন ও যৌথ নেতৃত্বের বিষয়ে তথ্য প্রকাশ",
      "সীমান্ত পেরিয়ে নতুন প্রচার ও আন্তর্জাতিক মানবাধিকার ফোরামে আবেদনের কৌশল"
    ],
    "keyPointsEn": [
      "Sangbad Pratidin Kolkata details internal high-command strategies regarding party reorganization",
      "Media analysis on potential joint leadership structures during Sheikh Hasina's exile",
      "Outreach plans targeting international legal platforms and rights forums"
    ],
    "category": "politics",
    "categoryLabelBn": "রাজনীতি ও সাংগঠনিক কৌশল",
    "categoryLabelEn": "Politics & Leadership",
    "sentiment": "negative",
    "sentimentReasonBn": "রাজনৈতিক উত্তাপ ও আন্তর্জাতিক বিচারিক প্রক্রিয়ার প্রভাব উপস্থাপন।",
    "sentimentReasonEn": "Focuses on political friction and exile organizational strategies.",
    "source": {
      "name": "Sangbad Pratidin",
      "bureau": "Kolkata",
      "language": "Bengali",
      "originalUrl": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxNMHR0ZVhXT0EwUFRhRW85dGx2bWN2U296aDR0UnZDWWlFLTZ3U1UtQUZScFhKdVVacmZFb1BBcG9RUGxqMm9LakR1T0ZfR2FVTnN5U3J6ekhFQnhUZnJZekFsQnhiWWRtYWR0ZW5WQnZra25FaldwbFB6Tm5JVjBBcWF3bl9kckt3dFhEaTRoV3R4ODdZTnBlMXlqcFhxNzNHNlV6TC16cjNBenhTc0VUMjhZUlhpRmFm?oc=5",
      "originalHeadline": "বিজয় দিবসের আগেই ফিরবেন হাসিনা! আর কী জানাচ্ছে দলীয় সূত্র?",
      "scannedAt": "2026-09-18T19:05:00.000Z"
    },
    "publishedAt": "2026-09-18T11:15:00.000Z",
    "readTimeBn": "২ মিনিট",
    "readTimeEn": "2 min read",
    "imageUrl": "/images/bangabhaban-presidential-palace-dhaka.jpg",
    "isLeadStory": false,
    "isTrending": true,
    "tags": [
      "Sangbad Pratidin",
      "Kolkata Bureau",
      "Sheikh Hasina",
      "Awami League",
      "Victory Day"
    ]
  },
  {
    "id": "news-20260918-003",
    "slug": "bbc-bengali-police-patrols-awami-league-activity",
    "title": "BBC News Bengali Report: Security Forces Enforce Strict Vigilance Over Unauthorized Marches",
    "englishTitle": "BBC News Bengali: Law Enforcement Heightens Surveillance Across Police Stations",
    "banglaTitle": "আওয়ামী লীগের ঝটিকা মিছিল ও রাজনৈতিক তৎপরতা রোধে পুলিশের বিশেষ টহল নির্দেশ: বিবিসি বাংলার প্রতিবেদন",
    "summaryBn": "বিসিবি ও বিবিসি বাংলার বিশেষ প্রতিবেদনে প্রকাশ, নিষিদ্ধ আওয়ামী লীগের ঝটিকা মিছিল ও দেশব্যাপী রাজনৈতিক তৎপরতা রোধে মাঠপর্যায়ে পুলিশ ও আইনশৃঙ্খলা বাহিনীর টহল বাড়ানোসহ নতুন কড়া নির্দেশ জারি করা হয়েছে।",
    "summaryEn": "BBC News Bengali reports on heightened security monitoring and strict instructions issued across Bangladesh police units to prevent unauthorized political demonstrations.",
    "keyPointsBn": [
      "বিবিসি বাংলায় বাংলাদেশের আইনশৃঙ্খলা পরিস্থিতি ও থানা পর্যায়ের নতুন কড়া নির্দেশ কভারেজ",
      "মাঠপর্যায়ে টহল ও সীমান্ত সংলগ্ন অঞ্চলে অনুপ্রবেশ রোধে বাড়তি নজরদারি",
      "রাজনৈতিক সংঘাত এড়াতে পুলিশি তৎপরতার বিশেষ বিশ্লেষণ"
    ],
    "keyPointsEn": [
      "BBC Bengali reports on law enforcement directives across Bangladesh district stations",
      "Increased night patrols and border corridor surveillance enforced",
      "Analysis of security measures aimed at preventing public disturbance"
    ],
    "category": "border",
    "categoryLabelBn": "সীমান্ত ও নিরাপত্তা",
    "categoryLabelEn": "Security & Public Order",
    "sentiment": "neutral",
    "sentimentReasonBn": "আইনশৃঙ্খলা বাহিনীর টহল ও নিরাপত্তা নির্দেশের নিরপেক্ষ আন্তর্জাতিক মিডিয়া পরিবেশন।",
    "sentimentReasonEn": "Fact-based international reporting on security surveillance.",
    "source": {
      "name": "BBC Bengali",
      "bureau": "Delhi",
      "language": "Bengali",
      "originalUrl": "https://www.bbc.com/bengali/articles/cklyjz35njvwo",
      "originalHeadline": "আওয়ামী লীগের তৎপরতা ঘিরে চাপের মুখে পুলিশ",
      "scannedAt": "2026-09-18T19:05:00.000Z"
    },
    "publishedAt": "2026-09-18T09:00:00.000Z",
    "readTimeBn": "২ মিনিট",
    "readTimeEn": "2 min read",
    "imageUrl": "/images/india-bangladesh-border-fence.jpg",
    "isLeadStory": false,
    "isTrending": false,
    "tags": [
      "BBC Bengali",
      "Police Patrol",
      "Bangladesh Security",
      "Public Order",
      "Dhaka"
    ]
  },
  {
    "id": "news-20260918-004",
    "slug": "geopolitical-youtube-dispatch-tarique-rahman-delhi-visit-russia-talks",
    "title": "Geopolitical YouTube Dispatch: Regional Analysts Discuss Russia-India-Bangladesh Diplomatic Matrix",
    "englishTitle": "Regional News YouTube Dispatch: Geopolitical Analysis on Delhi-Dhaka Reset & Foreign Relations",
    "banglaTitle": "দিল্লি সফর ও আঞ্চলিক শক্তিগুলোর ভূ-রাজনৈতিক প্রভাব নিয়ে ইউটিউব ভিডিও নিউজ কভারেজ",
    "summaryBn": "কলকাতাকেন্দ্রিক ও ভারতীয় ডিজিটাল সংবাদের ইউটিউব ভিডিও ব্রডকাস্টে দক্ষিণ এশিয়ায় বড় শক্তিগুলোর কৌশলগত অবস্থান, তারেক রহমানের সম্ভাব্য ভারত সফর ও হাসিনার উপস্থিতি নিয়ে বিশিষ্ট সাংবাদিকদের প্যানেল আলোচনা সম্প্রচারিত হয়েছে।",
    "summaryEn": "Regional YouTube video dispatches analyze geopolitical dynamics and high-level diplomatic contacts between New Delhi and Dhaka.",
    "keyPointsBn": [
      "ইউটিউব সংবাদ চ্যানেলে দিল্লি-ঢাকা ভবিষ্যৎ কৌশলগত সম্পর্কের বিস্তারিত কভারেজ",
      "আঞ্চলিক শক্তিগুলোর আগ্রহ ও বঙ্গোপসাগর ভূ-রাজনীতি নিয়ে বিশ্লেষকদের মতামত",
      "পূর্ব ভারতের প্রধান সংবাদ মাধ্যমের ভিডিও ডিজিটাল মনিটরিং"
    ],
    "keyPointsEn": [
      "Regional YouTube news desks broadcast panel analysis on Delhi-Dhaka strategic ties",
      "Geopolitical evaluation regarding Bay of Bengal security corridors",
      "Digital video tracking across Kolkata news networks"
    ],
    "category": "diplomacy",
    "categoryLabelBn": "কূটনীতি ও দক্ষিণ এশিয়া",
    "categoryLabelEn": "Diplomacy & Geopolitics",
    "sentiment": "neutral",
    "sentimentReasonBn": "ভূ-রাজনৈতিক শক্তিগুলোর কৌশলগত সম্পর্কের নিরপেক্ষ ভিডিও কভারেজ।",
    "sentimentReasonEn": "Balanced video panel analysis on South Asian diplomacy.",
    "source": {
      "name": "Indian Media (YouTube)",
      "bureau": "Kolkata",
      "language": "Bengali",
      "originalUrl": "https://news.google.com/rss/articles/CBMiUkFVX3lxTE1IWGJhVk5VYTZOSVVBWXlUMV8zYUVsMDFNNmdwYTV0cjd1UUVxb3VyQXZVYkNmcnE1ZHpWMXJYX0JzNDI0UloxSzYwYXpSTjFqUnc?oc=5",
      "originalHeadline": "হঠাৎ কেন দিল্লিতে আসতে চান তারেক রহমান? পুতিন-হাসিনা গোপন বৈঠকেই লুকিয়ে রহস্য",
      "scannedAt": "2026-09-18T19:05:00.000Z"
    },
    "publishedAt": "2026-09-18T07:30:00.000Z",
    "readTimeBn": "২ মিনিট",
    "readTimeEn": "2 min read",
    "imageUrl": "/images/brics-bimstec-summit-delhi.jpg",
    "isLeadStory": false,
    "isTrending": false,
    "tags": [
      "YouTube News",
      "Geopolitics",
      "Kolkata Desk",
      "India Bangladesh Reset",
      "Diplomacy"
    ]
  },
  {
    "id": "news-20260918-005",
    "slug": "the-wall-kolkata-hasina-exile-joint-leadership-awami-league",
    "title": "The Wall Kolkata Analysis: Awami League Explores Joint Leadership Model During Hasina Exile",
    "englishTitle": "The Wall Kolkata: Awami League Explores Joint Leadership Model Amid Exile",
    "banglaTitle": "হাসিনার বিপদ-আপদে দলে যৌথ নেতৃত্ব: কলকাতা দ্য ওয়াল-এর বিশেষ প্রতিবেদন",
    "summaryBn": "কলকাতাভিত্তিক অনলাইন দৈনিক 'দ্য ওয়াল'-এর এক্সক্লুসিভ প্রতিবেদনে প্রকাশ, শেখ হাসিনার অনুপস্থিতিতে দলের সাংগঠনিক কার্যক্রমে যৌথ নেতৃত্ব কাঠামোর বিকল্প নিয়ে কলকাতায় অবস্থানরত নেতাকর্মী ও নীতি-নির্ধারকদের মধ্যে আলোচনা তীব্র হচ্ছে।",
    "summaryEn": "Kolkata news portal The Wall reports on ongoing discussions among Awami League leaders exploring joint leadership structures during Sheikh Hasina's period of exile in India.",
    "keyPointsBn": [
      "দ্য ওয়াল-এর প্রতিবেদনে আওয়ামী লীগের সাংগঠনিক পুনর্গঠনের যৌথ নেতৃত্বের প্রস্তাব কভারেজ",
      "আন্তর্জাতিক আইন ও অভ্যন্তরীণ বিচারিক প্রক্রিয়ার মুখোমুখি হওয়া নিয়ে পর্যালোচনা",
      "কলকাতা ও দিল্লিতে অবস্থানরত শীর্ষ নেতৃত্বের মধ্যে নতুন সমন্বয় উদ্যোগ"
    ],
    "keyPointsEn": [
      "The Wall Kolkata covers internal debates on organizational joint-leadership models",
      "Analysis on navigating legal proceedings and exile communications",
      "Coordination efforts among party representatives based in Kolkata and Delhi"
    ],
    "category": "politics",
    "categoryLabelBn": "রাজনীতি ও দলীয় নেতৃত্ব",
    "categoryLabelEn": "Politics & Leadership",
    "sentiment": "negative",
    "sentimentReasonBn": "রাজনৈতিক সংকট ও দলীয় নেতৃত্ব পুনর্গঠনের উত্তাপ নিরপেক্ষভাবে পরিবেশন।",
    "sentimentReasonEn": "Analytical coverage on exile party dynamics and leadership challenges.",
    "source": {
      "name": "The Wall",
      "bureau": "Kolkata",
      "language": "Bengali",
      "originalUrl": "https://news.google.com/rss/articles/CBMi2AFBVV95cUxNRXZYVFBUcTlySmpWRnRyelJValJILTVoRkpIUEVlQ0dfT1N6WE5BQjBuNmZXQ3Q1QmQ0R0FfYlAzajBHczVsYm9RVjFrX0FJZFplNkI0SEgwdV9DX09BMDRqMEZOQ09RelNfdU8wRWhuN3ZsSHFjd3IzelphVUVzN0ZsNkRLSVFPbUdxU2RHTDN6SzRDZjZrS2kycjlPRVhyb05ZMlhXVnlsSXY2cXYyQTRrOE4xUXpTcDBUMTBvNENZT0ZKTHhKRDMtV3h2dUpPSjFhNW5xSmfSAd4BQVVfeXFMTkNVU291TV9xbzIwT29DQVB0a3dpTHg2TDZqajl4d3lDSldLUmVLT3d4YzZyMWhXbzdVQ1hjSTg0OFVSS2t1WW9oOEFlREp5ZFM5TG4zQjNpaEFWUHI3VlpyZWxoNDFLRXh1V0d2WXhuYUc4bGxSRWtrZ2hiVWlSMGpPOTFZN1NVaS1wa0swU1ZwcXpMXzRCTUI5N21WaVVaX0QzSWhIeWk1Mml5QTdzQk5jZXlmV2w3ZWtmSm43Sk4wZnlOTnVCUS1kV29FODFpYWRGS3NZQWg2aXJVTFlB?oc=5",
      "originalHeadline": "হাসিনার বিপদ-আপদে দলে যৌথ নেতৃত্ব",
      "scannedAt": "2026-09-18T19:05:00.000Z"
    },
    "publishedAt": "2026-09-18T06:45:00.000Z",
    "readTimeBn": "২ মিনিট",
    "readTimeEn": "2 min read",
    "imageUrl": "/images/kolkata-writers-building.jpg",
    "isLeadStory": false,
    "isTrending": false,
    "tags": [
      "The Wall",
      "Kolkata Bureau",
      "Sheikh Hasina",
      "Awami League",
      "Leadership"
    ]
  },
  {
    "id": "news-20260918-006",
    "slug": "northeast-press-tripura-transit-border-trade-petrapole-akhaura",
    "title": "Tripura Media Report: Akhaura-Agartala Integrated Check Post Sustains Cross-Border Cargo Freight",
    "englishTitle": "Tripura Times / Northeast Media: Akhaura-Agartala ICP Trade Dynamics & Freight Logistics",
    "banglaTitle": "আগরতলা-আখাউড়া সমন্বিত চেকপোস্টে সীমান্ত বাণিজ্য ও পণ্য পরিবহন অব্যাহত: ত্রিপুরার সংবাদ মাধ্যমের প্রতিবেদন",
    "summaryBn": "ত্রিপুরার প্রধান রাজ্য দৈনিক ও উত্তর-পূর্ব ভারতের গণমাধ্যমের কভারেজে প্রকাশ, রাজনৈতিক পটপরিবর্তন সত্ত্বেও আগরতলা-আখাউড়া আইসিপি দিয়ে উত্তর-পূর্ব ভারতে খাদ্য ও প্রয়োজনীয় সামগ্রী পরিবহন স্বাভাবিক গতিতে বজায় রাখতে উভয় দেশের কাস্টমস ও বিএসএফ কর্মকর্তা সমন্বয় বজায় রাখছেন।",
    "summaryEn": "Tripura state press and regional North-East Indian media report on cross-border logistics at the Akhaura-Agartala Integrated Check Post, detailing continuous essential trade flow between Agartala and Bangladesh.",
    "keyPointsBn": [
      "আগরতলা আইসিপিতে বাণিজ্যিক পণ্য খালাস ও বিএসএফ-বিজিবি কর্মকর্তা সমন্বয়",
      "উত্তর-পূর্ব ভারতের অর্থনৈতিক প্রয়োজনীয়তায় বাংলাদেশ ট্রানজিট করিডোরের গুরুত্ব বিশ্লেষণ",
      "ত্রিপুরা সীমান্তে বাণিজ্য শুল্ক ও কাস্টমস ক্লিয়ারেন্স প্রক্রিয়া অব্যাহত"
    ],
    "keyPointsEn": [
      "Akhaura-Agartala ICP maintains regular cargo container movement and customs coordination",
      "North-East media highlights strategic importance of Bangladesh transit channels for Tripura",
      "Border trade protocols enforced smoothly by customs authorities"
    ],
    "category": "trade",
    "categoryLabelBn": "সীমান্ত বাণিজ্য ও ত্রিপুরা",
    "categoryLabelEn": "Cross-Border Trade & Tripura",
    "sentiment": "positive",
    "sentimentReasonBn": "উত্তর-পূর্ব সীমান্ত বাণিজ্য ও অর্থনীতি বজায় থাকার ইতিবাচক খবর উপস্থাপন।",
    "sentimentReasonEn": "Positive analytical coverage on regional border trade resilience.",
    "source": {
      "name": "Tripura Times",
      "bureau": "Kolkata",
      "language": "English",
      "originalUrl": "https://news.google.com/rss/articles/CBMiUkFVX3lxTE5BcmZGVlZkWDFiQ1FkUHF4WTRvUHF1TUtxTk96M1hNTEFXTVh5QnpYVkE0ZFNfWW1XZnpYVXc3SFdMOWpSM3lKQU0xb0hLQXgzY0E?oc=5",
      "originalHeadline": "Akhaura-Agartala ICP border trade continues steadily despite regional shifts",
      "scannedAt": "2026-09-18T19:05:00.000Z"
    },
    "publishedAt": "2026-09-18T05:30:00.000Z",
    "readTimeBn": "২ মিনিট",
    "readTimeEn": "2 min read",
    "imageUrl": "/images/india-bangladesh-trade-land-port.jpg",
    "isLeadStory": false,
    "isTrending": false,
    "tags": [
      "Tripura Times",
      "Agartala ICP",
      "Akhaura",
      "Northeast Trade",
      "Border Cargo"
    ]
  },
  {
    "id": "news-20260918-007",
    "slug": "anandabazar-patrika-kolkata-border-fencing-infiltration-vigilance",
    "title": "Anandabazar Patrika: BSF Heightens Night Vigilance and Thermal Drone Surveillance Across Bengal Border",
    "englishTitle": "Anandabazar Patrika Kolkata: BSF Boosts Thermal Drone Monitoring Along South Bengal Border",
    "banglaTitle": "দক্ষিণবঙ্গ সীমান্তে বিএসএফের বিশেষ নাইট ভিশন ড্রোন ও নজরদারি বৃদ্ধি: আনন্দবাজার পত্রিকার প্রতিবেদন",
    "summaryBn": "পশ্চিমবঙ্গের শীর্ষ দৈনিক 'আনন্দবাজার পত্রিকা'-র বিশেষ প্রতিবেদনে উল্লেখ করা হয়েছে, সীমান্ত অঞ্চলে অনাকাঙ্ক্ষিত অনুপ্রবেশ ও চোরাচালান সম্পূর্ণ রোধে বিএসএফের দক্ষিণবঙ্গ ফ্রন্টিয়ার পেট্রাপোল, বসিরহাট ও হিলি সীমান্তে আধুনিক নাইট-ভিশন ড্রোন ক্যামেরা মোতায়েন করেছে।",
    "summaryEn": "West Bengal's leading Bengali daily Anandabazar Patrika reports on BSF South Bengal Frontier enhancing border vigilance using night-vision thermal surveillance cameras across Petrapole and Hili sectors.",
    "keyPointsBn": [
      "আনন্দবাজার পত্রিকায় বিএসএফের দক্ষিণবঙ্গ ফ্রন্টিয়ারের আধুনিক নাইট ড্রোন নজরদারির তথ্য",
      "বসিরহাট, পেট্রাপোল ও মালদা সীমান্তে অবৈধ অনুপ্রবেশ রোধে জিরো-টলারেন্স নীতি",
      "পশ্চিমবঙ্গ সীমান্ত নিরাপত্তা ও বিজিবি-বিএসএফ ফ্ল্যাগ মিটিং সংক্রান্ত আপডেট"
    ],
    "keyPointsEn": [
      "Anandabazar Patrika details deployment of thermal night drones by BSF along West Bengal border",
      "Zero-tolerance stance enforced across Petrapole, Basirhat, and Hili sectors",
      "Regular BSF-BGB sector commander meetings maintain strict border compliance"
    ],
    "category": "border",
    "categoryLabelBn": "সীমান্ত ও বিএসএফ নজরদারি",
    "categoryLabelEn": "Border Vigilance & Security",
    "sentiment": "neutral",
    "sentimentReasonBn": "সীমান্ত নিরাপত্তা ব্যবস্থার বস্তুনিষ্ঠ সংবাদ পরিবেশন।",
    "sentimentReasonEn": "Fact-based reporting on border patrol technological upgrades.",
    "source": {
      "name": "Anandabazar Patrika",
      "bureau": "Kolkata",
      "language": "Bengali",
      "originalUrl": "https://www.anandabazar.com/west-bengal/bsf-boosts-thermal-drone-vigilance-along-south-bengal-bangladesh-border/cid/1542190",
      "originalHeadline": "সীমান্তে নজরদারিতে নাইট ড্রোন, কড়া সতর্কতায় বিএসএফ",
      "scannedAt": "2026-09-18T19:05:00.000Z"
    },
    "publishedAt": "2026-09-18T04:50:00.000Z",
    "readTimeBn": "৩ মিনিট",
    "readTimeEn": "3 min read",
    "imageUrl": "/images/bsf-border-drone-surveillance.jpg",
    "isLeadStory": false,
    "isTrending": true,
    "tags": [
      "Anandabazar Patrika",
      "BSF South Bengal",
      "Petrapole",
      "Border Drone",
      "Kolkata Bureau"
    ]
  },
  {
    "id": "news-20260918-008",
    "slug": "assam-tribune-northeast-border-security-riverine-patrols",
    "title": "The Assam Tribune: Riverine Patrols Intensified Along Brahmaputra Border Belt in Dhubri Sector",
    "englishTitle": "The Assam Tribune Guwahati: Riverine BSF Vigil In Dhubri Sector Borders Bangladesh",
    "banglaTitle": "আসামের ধুবড়ি রিভারাইন সীমান্তে বিএসএফ ও পুলিশি টহল জোরদার: দি আসাম ট্রিব্যুনালের প্রতিবেদন",
    "summaryBn": "গুয়াহাটি থেকে প্রকাশিত প্রধান ইংরেজি সংবাদপত্র 'দি আসাম ট্রিব্যুনাল'-এর বিশেষ সংবাদে বলা হয়েছে, আসামের ধুবড়ি ও করিমগঞ্জ জেলার নদীতীরবর্তী বাংলাদেশ সীমান্তে স্পিডবোট ও নাইট রিভার পেট্রোলিং দ্বিগুণ করা হয়েছে।",
    "summaryEn": "Guwahati-based national daily The Assam Tribune reports on BSF and Assam Police deploying speedboats and riverine searchlights along the Brahmaputra border stretches in Dhubri and Karimganj.",
    "keyPointsBn": [
      "দি আসাম ট্রিব্যুনালে আসাম-বাংলাদেশ রিভারাইন সীমান্তের বিশেষ স্পিডবোট টহল বিস্তারিত",
      "ধুবড়ি ও করিমগঞ্জ অঞ্চলে অবৈধ পারাপার সম্পূর্ণ বন্ধে আসাম পুলিশের সতর্কবার্তা",
      "উত্তর-পূর্ব সীমান্ত নিরাপত্তা জোরদারে কেন্দ্র-রাজ্য যৌথ পদক্ষেপ"
    ],
    "keyPointsEn": [
      "The Assam Tribune highlights BSF speedboat patrols across riverine stretches in Dhubri",
      "Assam State Police step up night vigil to check unauthorized river crossings",
      "Joint North-East security measures implemented under Assam Border Patrol directives"
    ],
    "category": "border",
    "categoryLabelBn": "আসাম সীমান্ত ও নিরাপত্তা",
    "categoryLabelEn": "Assam Border & Security",
    "sentiment": "neutral",
    "sentimentReasonBn": "উত্তর-পূর্ব নদীতীরবর্তী সীমান্তের কড়া নিরাপত্তা কভারেজ।",
    "sentimentReasonEn": "Analytical coverage on North-East riverine border patrols.",
    "source": {
      "name": "The Assam Tribune",
      "bureau": "Delhi",
      "language": "English",
      "originalUrl": "https://assamtribune.com/assam/bsf-intensifies-riverine-patrols-in-dhubri-along-bangladesh-border-1543820",
      "originalHeadline": "BSF intensifies riverine patrols in Dhubri along Bangladesh border",
      "scannedAt": "2026-09-18T19:05:00.000Z"
    },
    "publishedAt": "2026-09-18T04:15:00.000Z",
    "readTimeBn": "২ মিনিট",
    "readTimeEn": "2 min read",
    "imageUrl": "/images/siliguri-corridor-northeast-route.jpg",
    "isLeadStory": false,
    "isTrending": false,
    "tags": [
      "Assam Tribune",
      "Dhubri",
      "Riverine Patrol",
      "Guwahati Bureau",
      "BSF Assam"
    ]
  },
  {
    "id": "news-20260918-009",
    "slug": "indian-express-delhi-bilateral-treaties-energy-transit-review",
    "title": "The Indian Express: Comprehensive Review of Cross-Border Power Purchase & Hydro Tariffs",
    "englishTitle": "The Indian Express Delhi: Strategic Analysis of India-Bangladesh Energy Contracts & Transit Tariffs",
    "banglaTitle": "ভারত-বাংলাদেশ বিদ্যুৎ সরবরাহ ও অর্থনৈতিক চুক্তি পর্যালোচনা: দ্য ইন্ডিয়ান এক্সপ্রেসের কূটনৈতিক বিশ্লেষণ",
    "summaryBn": "নতুন দিল্লিভিত্তিক শীর্ষ জাতীয় দৈনিক 'দ্য ইন্ডিয়ান এক্সপ্রেস'-এর রিপোর্টে প্রকাশ, আদানির ঝাড়খণ্ড পাওয়ার প্ল্যান্টসহ ত্রিপুরা ও উত্তর-পূর্ব বিদ্যুৎ গ্রিড থেকে বাংলাদেশে বিদ্যুৎ রফতানি চুক্তি ও বকেয়া পরিশোধের বিষয় পর্যালোচনা চলছে।",
    "summaryEn": "New Delhi-based daily The Indian Express published an in-depth policy review evaluating bilateral power purchase agreements, grid transmission tariffs, and economic payments between India and Bangladesh.",
    "keyPointsBn": [
      "ইন্ডিয়ান এক্সপ্রেসে দিল্লি-ঢাকা বিদ্যুৎ সরবরাহ চুক্তি ও আদানির ঝাড়খণ্ড প্ল্যান্ট পর্যালোচনা কভারেজ",
      "ত্রিপুরা গ্রিড থেকে বাংলাদেশে বিদ্যুৎ রফতানির অর্থ পরিশোধ এবং নতুন পেমেন্ট ফ্রেমওয়ার্ক",
      "দ্বিপাক্ষিক বাণিজ্যিক ভারসাম্য রক্ষায় ভারতীয় পররাষ্ট্র মন্ত্রণালয়ের গঠনমূলক উদ্যোগ"
    ],
    "keyPointsEn": [
      "The Indian Express evaluates cross-border power purchase agreements and Adani Jharkhand tariff structures",
      "Analysis on electricity exports via Tripura grid and financial settlement mechanisms",
      "Ministry of External Affairs (MEA) constructive approach toward energy trade continuity"
    ],
    "category": "economy",
    "categoryLabelBn": "অর্থনীতি ও বিদ্যুৎ খাতা",
    "categoryLabelEn": "Economy & Power Sector",
    "sentiment": "neutral",
    "sentimentReasonBn": "বিদ্যুৎ চুক্তি ও পেমেন্ট কাঠামোর নিরপেক্ষ অর্থনৈতিক কভারেজ।",
    "sentimentReasonEn": "Balanced analytical reporting on bilateral power sector agreements.",
    "source": {
      "name": "The Indian Express",
      "bureau": "Delhi",
      "language": "English",
      "originalUrl": "https://indianexpress.com/article/business/economy/india-bangladesh-cross-border-power-purchase-reviews-adani-tariffs-9843210/",
      "originalHeadline": "India-Bangladesh Power Supply Agreements Under Financial & Grid Review",
      "scannedAt": "2026-09-18T19:05:00.000Z"
    },
    "publishedAt": "2026-09-18T03:40:00.000Z",
    "readTimeBn": "৩ মিনিট",
    "readTimeEn": "3 min read",
    "imageUrl": "/images/chattogram-port-maritime-hub.jpg",
    "isLeadStory": false,
    "isTrending": true,
    "tags": [
      "The Indian Express",
      "Delhi Bureau",
      "Energy Policy",
      "Adani Power",
      "Bilateral Economy"
    ]
  },
  {
    "id": "news-20260918-010",
    "slug": "zee-24-ghanta-youtube-hasina-extradition-diplomatic-talks",
    "title": "Zee 24 Ghanta Digital Panel Discussion: Evaluating Legal Provisions in Hasina Extradition Treaty",
    "englishTitle": "Zee 24 Ghanta Kolkata YouTube Dispatch: Legal Experts Weigh Extradition Treaty Clauses",
    "banglaTitle": "হাসিনার প্রত্যর্পণ চুক্তি ও আইনি জটিলতা: জি ২৪ ঘণ্টার ইউটিউব বিশেষ প্যানেল আলোচনা",
    "summaryBn": "কলকাতার জনপ্রিয় বাংলা নিউজ চ্যানেল 'জি ২৪ ঘণ্টা'-র ইউটিউব ডিজিটাল ব্রডকাস্টে বাংলাদেশের অন্তর্বর্তী সরকারের অনানুষ্ঠানিক অনুরোধ ও ২০১৩ সালের ভারত-বাংলাদেশ প্রত্যর্পণ চুক্তির রাজনৈতিক অপরাধ সংক্রান্ত আইনি অনুচ্ছেদ নিয়ে প্রখ্যাত সুপ্রিম কোর্ট আইনজীবী ও বিশ্লেষকদের গঠনমূলক বক্তব্য তুলে ধরা হয়।",
    "summaryEn": "Kolkata TV broadcaster Zee 24 Ghanta streamed a dedicated YouTube panel discussion featuring international legal experts analyzing the 2013 India-Bangladesh Extradition Treaty clauses regarding Sheikh Hasina.",
    "keyPointsBn": [
      "জি ২৪ ঘণ্টার ইউটিউব কভারেজে ২০১৩ সালের ভারত-বাংলাদেশ প্রত্যর্পণ আইনি ধারা বিশ্লেষণ",
      "রাজনৈতিক অপরাধ ব্যতিক্রম ধারা ও বিচারিক আদালতের রায়ের প্রভাব কভারেজ",
      "কলকাতা ও দিল্লির সুপ্রিম কোর্টের প্রবীণ আইনজীবীদের মতামত উপস্থাপন"
    ],
    "keyPointsEn": [
      "Zee 24 Ghanta YouTube panel reviews legal technicalities of the 2013 Bilateral Extradition Treaty",
      "Discussions on 'political exception' clauses under international law",
      "Insights from senior legal experts based in Kolkata and New Delhi"
    ],
    "category": "diplomacy",
    "categoryLabelBn": "কূটনীতি ও আইনি বিশ্লেষণ",
    "categoryLabelEn": "Diplomacy & Legal Analysis",
    "sentiment": "neutral",
    "sentimentReasonBn": "আইনি চুক্তি ও অনুচ্ছেদের বস্তুনিষ্ঠ টেলিভিশন ভিডিও আলোচনা।",
    "sentimentReasonEn": "Balanced YouTube panel debate on international extradition law.",
    "source": {
      "name": "Zee 24 Ghanta (YouTube)",
      "bureau": "Kolkata",
      "language": "Bengali",
      "originalUrl": "https://www.youtube.com/watch?v=HQKHzbPrQ8o",
      "originalHeadline": "শেখ হাসিনার প্রত্যর্পণ ও ২০১৩ সালের চুক্তির ধারা নিয়ে আইনি বিশেষজ্ঞদের ব্যাখ্যা | Zee 24 Ghanta",
      "scannedAt": "2026-09-18T19:05:00.000Z"
    },
    "publishedAt": "2026-09-18T02:30:00.000Z",
    "readTimeBn": "২ মিনিট",
    "readTimeEn": "2 min read",
    "imageUrl": "https://i.ytimg.com/vi/HQKHzbPrQ8o/hqdefault.jpg",
    "isLeadStory": false,
    "isTrending": false,
    "tags": [
      "Zee 24 Ghanta",
      "YouTube News",
      "Extradition Treaty",
      "Legal Analysis",
      "Kolkata Desk"
    ]
  },
  {
    "id": "news-20260918-011",
    "slug": "republic-bangla-youtube-tarique-rahman-uk-delhi-outreach",
    "title": "Republic Bangla YouTube Special: Strategic Assessment of BNP-Delhi Diplomatic Channels",
    "englishTitle": "Republic Bangla Kolkata YouTube Report: Diplomatic Assessment of Delhi-BNP Outreach",
    "banglaTitle": "বিএনপি ও দিল্লির কূটনৈতিক যোগাযোগ: রিপাবলিক বাংলার বিশেষ ইউটিউব ডিজিটাল প্রতিবেদন",
    "summaryBn": "কলকাতার প্রধান সংবাদ চ্যানেল 'রিপাবলিক বাংলা'-র ইউটিউব ডিজিটাল আউটলেটে বিএনপির শীর্ষ নেতৃত্ব ও দিল্লির কূটনৈতিক প্রতিনিধিবর্গের মধ্যে যোগাযোগ ও ভবিষ্যৎ স্থিতিশীলতার আঞ্চলিক পরিকল্পনা তুলে ধরে দীর্ঘ প্যানেল রিপোর্ট প্রকাশ করা হয়েছে।",
    "summaryEn": "Kolkata news network Republic Bangla released a digital YouTube report evaluating diplomatic channels between New Delhi policy-makers and BNP leadership regarding regional peace and trade stability.",
    "keyPointsBn": [
      "রিপাবলিক বাংলা ইউটিউব ডিসপ্যাচে বিএনপি ও দিল্লির গঠনমূলক কূটনৈতিক যোগাযোগ বিস্তারিত",
      "বাংলাদেশের ধর্মীয় সংখ্যালঘু নিরাপত্তা ও উত্তর-পূর্ব ভারতের সীমান্ত শান্তি বজায় রাখার যৌথ প্রতিশ্রুতি",
      "পূর্ব ভারতের কৌশলগত বিশ্লেষকদের বিশেষ পর্যালোচনা"
    ],
    "keyPointsEn": [
      "Republic Bangla YouTube report highlights constructive diplomatic communication between Delhi and BNP leadership",
      "Focus on minority protection and North-East border corridor stability",
      "Strategic perspectives from Eastern India geopolitical commentators"
    ],
    "category": "politics",
    "categoryLabelBn": "রাজনীতি ও ভূরাজনীতি",
    "categoryLabelEn": "Politics & Geopolitics",
    "sentiment": "neutral",
    "sentimentReasonBn": "আঞ্চলিক স্থায়িত্ব ও রাজনৈতিক কূটনীতির নিরপেক্ষ ডিজিটাল উপস্থাপন।",
    "sentimentReasonEn": "Balanced digital news report on regional diplomacy.",
    "source": {
      "name": "Republic Bangla (YouTube)",
      "bureau": "Kolkata",
      "language": "Bengali",
      "originalUrl": "https://news.google.com/rss/articles/CBMiUkFVX3lxTE1uS2FRUTZmdXRrTVh1cFVIdkJvTFNDOFlFMGdFZE5iNDlKMGdndmpyUWlyM1RwbFF1X2FROURuOHFCSnlaeUtPZF9oVXZ6a2M1NEE?oc=5",
      "originalHeadline": "দিল্লি ও বিএনপি-র নতুন কূটনৈতিক সমীকরণ: পূর্ব ভারতের সংবাদ মাধ্যমের বিশেষ পরিবেশনা | Republic Bangla",
      "scannedAt": "2026-09-18T19:05:00.000Z"
    },
    "publishedAt": "2026-09-18T01:15:00.000Z",
    "readTimeBn": "২ মিনিট",
    "readTimeEn": "2 min read",
    "imageUrl": "/images/dhaka-university-campus-landscape.jpg",
    "isLeadStory": false,
    "isTrending": false,
    "tags": [
      "Republic Bangla",
      "YouTube News",
      "BNP Outreach",
      "Delhi Diplomatic Ties",
      "Kolkata Desk"
    ]
  },
  {
    "id": "news-20260917-005",
    "slug": "abp-ananda-youtube-report-india-policy-sheikh-hasina-dhaka-ties",
    "title": "ABP Ananda Special Video Report on India's Policy Options Regarding Sheikh Hasina",
    "englishTitle": "ABP Ananda Kolkata Special YouTube Dispatch: India's Diplomatic Policy on Sheikh Hasina",
    "banglaTitle": "শেখ হাসিনাকে নিয়ে মোদী সরকারের অবস্থান ও ভারত-বাংলাদেশ সম্পর্ক: এবিপি আনন্দের বিশেষ ইউটিউব ভিডিও সম্প্রচার",
    "summaryBn": "কলকাতাভিত্তিক পূর্ব ভারতের অন্যতম শীর্ষ বাংলা সংবাদ নেটওয়ার্ক 'এবিপি আনন্দ'-এর ইউটিউব ভিডিও ডিসপ্যাচে প্রাক্তন প্রধানমন্ত্রী শেখ হাসিনার ভারতে অবস্থান, ঢাকা সরকারের প্রত্যর্পণ প্রস্তাব ও দিল্লির উত্তর-পূর্ব নিরাপত্তা কৌশল নিয়ে বিশেষ প্যানেল আলোচনা সম্প্রচার করা হয়েছে।",
    "summaryEn": "Leading Kolkata-based news network ABP Ananda published a special YouTube video dispatch analyzing New Delhi's diplomatic options regarding former Prime Minister Sheikh Hasina's stay and the future trajectory of India-Bangladesh bilateral ties.",
    "keyPointsBn": [
      "কলকাতার এবিপি আনন্দের বিশেষ ভিডিও কভারেজে শেখ হাসিনার দিল্লির অবস্থান বিশ্লেষণ",
      "ভারত-বাংলাদেশ দ্বিপাক্ষিক নিরাপত্তা ও সীমান্ত বাণিজ্য বজায় রাখার কৌশলগত সুযোগ আলোচনা",
      "কলকাতাকেন্দ্রিক শীর্ষ রাষ্ট্রবিজ্ঞান ও ভূ-রাজনীতি বিশেষজ্ঞদের মূল্যায়ন"
    ],
    "keyPointsEn": [
      "ABP Ananda Kolkata broadcasts special YouTube video coverage addressing Sheikh Hasina's exile in New Delhi",
      "Strategic analysis on maintaining regional security and border trade corridor stability",
      "Kolkata-based geopolitical analysts evaluate diplomatic implications for Eastern India"
    ],
    "category": "diplomacy",
    "categoryLabelBn": "কূটনীতি ও স্থানান্তর",
    "categoryLabelEn": "Diplomacy & Security",
    "sentiment": "neutral",
    "sentimentReasonBn": "দ্বিপাক্ষিক সম্পর্ক ও রাজনৈতিক অবস্থানের বস্তুনিষ্ঠ ভিডিও বিশ্লেষণ পরিবেশন।",
    "sentimentReasonEn": "Balanced analytical reporting on bilateral relations from Kolkata media bureau.",
    "source": {
      "name": "ABP Ananda (YouTube)",
      "bureau": "Kolkata",
      "language": "Bengali",
      "originalUrl": "https://www.youtube.com/watch?v=3lE0QeO4v1Q",
      "originalHeadline": "শেখ হাসিনাকে নিয়ে মোদী সরকারের অবস্থান ও ভারত-বাংলাদেশ সম্পর্ক: এবিপি আনন্দের বিশেষ সম্প্রচার",
      "scannedAt": "2026-09-17T10:16:00.000Z"
    },
    "publishedAt": "2026-09-17T09:15:00.000Z",
    "readTimeBn": "২ মিনিট",
    "readTimeEn": "2 min read",
    "imageUrl": "https://i.ytimg.com/vi/3lE0QeO4v1Q/hqdefault.jpg",
    "isLeadStory": false,
    "isTrending": true,
    "tags": [
      "ABP Ananda",
      "YouTube Video",
      "Kolkata Bureau",
      "Sheikh Hasina",
      "India Bangladesh Ties"
    ]
  },
  {
    "id": "news-20260917-006",
    "slug": "rashed-khan-warns-on-state-reform-consensus-sheikh-hasina",
    "title": "State Reform Consensus Essential to Prevent Political Instability: Rashed Khan Interview on YouTube",
    "englishTitle": "Rashed Khan Warns Consensus Required to Prevent Political Friction: Media Interview",
    "banglaTitle": "‘ঐকমত্যের ভিত্তিতে রাষ্ট্র পুনর্গঠন না হলে রাজনৈতিক সুযোগ নেবেন শেখ হাসিনা’: রাশেদ খানের ভিডিও সাক্ষাৎকার",
    "summaryBn": "বাংলাদেশের বর্তমান রাজনৈতিক প্রেক্ষাপটে ঐক্যবদ্ধ রাষ্ট্র সংস্কার ও নির্বাচন নিয়ে অধিকারকর্মী ও রাজনীতিবিদ রাশেদ খানের বিশেষ মন্তব্য প্রচারিত হয়েছে ইউটিউব নিউজ মিডিয়ায়। তিনি উল্লেখ করেন রাজনৈতিক দলগুলোর ঐকমত্যের গুরুত্ব দ্বিপাক্ষিক ও অভ্যন্তরীণ স্থিতিশীলতার জন্য অপরিহার্য।",
    "summaryEn": "Video dispatches monitored across regional news channels feature detailed political commentary by Rashed Khan emphasizing the urgency of national consensus on state reforms ahead of upcoming general polls.",
    "keyPointsBn": [
      "রাষ্ট্র পুনর্গঠন ও রাজনৈতিক দলগুলোর ঐক্য বিষয়ে রাশেদ খানের সাক্ষাৎকার কভারেজ",
      "ইউটিউব ডিজিটাল মিডিয়ায় বাংলাদেশ রাজনীতির ভবিষ্যৎ গতিপথের প্রেক্ষিত প্রচার",
      "অন্তর্বর্তী সরকারের সংস্কার উদ্যোগ ও নির্বাচন রোডম্যাপ নিয়ে আলোচনা"
    ],
    "keyPointsEn": [
      "Video interview highlights perspectives on national state reform and political unity",
      "Regional YouTube news desks track commentary regarding Dhaka's electoral roadmap",
      "Focus on bilateral stability and governance transition"
    ],
    "category": "politics",
    "categoryLabelBn": "রাজনীতি ও সংস্কার",
    "categoryLabelEn": "Politics & Reform",
    "sentiment": "neutral",
    "sentimentReasonBn": "রাজনৈতিক মতাদর্শ ও জাতীয় সংস্কার সংক্রান্ত বক্তব্যের বস্তুনিষ্ঠ পরিবেশন।",
    "sentimentReasonEn": "Balanced coverage of political interviews and reform discussions.",
    "source": {
      "name": "Indian Media (YouTube)",
      "bureau": "Delhi",
      "language": "Bengali",
      "originalUrl": "https://news.google.com/rss/articles/CBMiVkFVX3lxTE0tc0JLT2FxQ0UzUHI0NFgxTTRxdnVCLTNqUndaN0RYWEhzSUVreERzTmRDb054NUt6R29XMUZCQlhTZ3UzR3FLbHhKbTMxZi1HYXJfRnRB?oc=5",
      "originalHeadline": "ঐকমত্যের ভিত্তিতে রাষ্ট্র পুনর্গঠন না হলে সুযোগ নেবেন শেখ হাসিনা : রাশেদ খাঁন",
      "scannedAt": "2026-09-17T10:16:00.000Z"
    },
    "publishedAt": "2026-09-17T08:45:00.000Z",
    "readTimeBn": "২ মিনিট",
    "readTimeEn": "2 min read",
    "imageUrl": "/images/bangabhaban-presidential-palace-dhaka.jpg",
    "isLeadStory": false,
    "isTrending": false,
    "tags": [
      "Rashed Khan",
      "State Reform",
      "YouTube Dispatch",
      "Bangladesh Politics",
      "Dhaka"
    ]
  },
  {
    "id": "news-20260917-001",
    "slug": "bangladesh-reviews-101-india-deals-signed-under-sheikh-hasina-government",
    "title": "Bangladesh Reviews 101 India Deals Signed Under Sheikh Hasina Government",
    "englishTitle": "Bangladesh Reviews 101 Bilateral Deals Signed With India Under Sheikh Hasina Regime",
    "banglaTitle": "শেখ হাসিনা সরকারের আমলে ভারতের সঙ্গে স্বাক্ষরিত ১০১ চুক্তি পুনর্বিবেচনা করছে বাংলাদেশ",
    "summaryBn": "বাংলাদেশ অন্তর্বর্তী সরকার ও অর্থ-পররাষ্ট্র উপদেষ্টা কমিটি বিগত শেখ হাসিনা সরকারের আমলে ভারতের সঙ্গে স্বাক্ষরিত ১০১টি চুক্তি ও সমঝোতা স্মারক (MoU) পুনর্বিবেচনার প্রক্রিয়া শুরু করেছে। ভারতীয় গণমাধ্যম ও সংবাদ সংস্থাগুলো এই বড় পদক্ষেপকে দ্বিপাক্ষিক অর্থনৈতিক ও কৌশলগত সম্পর্কের ওপর নতুন প্রভাব ফেলার ইঙ্গিত হিসেবে ব্যাখ্যা করছে।",
    "summaryEn": "The interim administration in Bangladesh has launched a comprehensive legal and financial review of 101 bilateral agreements and Memorandums of Understanding (MoUs) signed with India during Sheikh Hasina's tenure, according to regional media dispatches.",
    "keyPointsBn": [
      "হাসিনা সরকারের ১০১টি ভারত কেন্দ্রিক চুক্তি ও সমঝোতা পুনর্মূল্যায়নের কাজ শুরু",
      "ট্রানজিট, বিদ্যুৎ ক্রয় ও বাণিজ্য চুক্তিগুলোর শর্ত পরীক্ষার জন্য কমিটি গঠন",
      "ভারতীয় মিডিয়া ট্র্যাকিংয়ে নতুন ভূ-রাজনৈতিক সমীকরণের বিশ্লেষণ"
    ],
    "keyPointsEn": [
      "Bangladesh initiates strategic audit of 101 bilateral MoUs and commercial agreements signed with India",
      "Advisory committees reviewing transit tariffs, power purchase terms, and infrastructure compacts",
      "Indian media analysis underlines changing geopolitical dynamics in Dhaka"
    ],
    "category": "trade",
    "categoryLabelBn": "সীমান্ত বাণিজ্য ও বন্দর",
    "categoryLabelEn": "Cross-Border Trade",
    "sentiment": "neutral",
    "sentimentReasonBn": "দ্বিপাক্ষিক চুক্তির অর্থনৈতিক ও আইনি পর্যালোচনার খবর নিরপেক্ষভাবে পরিবেশন।",
    "sentimentReasonEn": "Balanced coverage of official policy reviews regarding bilateral trade compacts.",
    "source": {
      "name": "Indian Media (Instagram)",
      "bureau": "Delhi",
      "language": "English",
      "originalUrl": "https://news.google.com/rss/articles/CBMiUkFVX3lxTE9pYXBMVnRtaExDRXM0S1AyWTduVjUzSGxqZkxja1hHNDA0TTZQOVNoUU91eHhlVUVwS2ZTYnAtYTRSdUxEVEtDMGszSE9WWGkwNFE?oc=5",
      "originalHeadline": "Bangladesh Reviews 101 India Deals Signed Under Sheikh Hasina Government",
      "scannedAt": "2026-09-17T09:56:00.000Z"
    },
    "publishedAt": "2026-09-17T08:30:00.000Z",
    "readTimeBn": "২ মিনিট",
    "readTimeEn": "2 min read",
    "imageUrl": "/images/india-bangladesh-trade-land-port.jpg",
    "isLeadStory": true,
    "isTrending": true,
    "tags": [
      "India-Bangladesh Deals",
      "MoU Review",
      "Sheikh Hasina",
      "BNP",
      "Dhaka Diplomacy",
      "Trade"
    ]
  },
  {
    "id": "news-20260917-002",
    "slug": "international-crimes-tribunal-sentences-seven-awami-league-leaders-to-death",
    "title": "International Crimes Tribunal Sentences Seven Senior Awami League Leaders to Death in Absentia",
    "englishTitle": "International Crimes Tribunal Sentences Seven Senior Awami League Leaders to Death: TOI Report",
    "banglaTitle": "আন্তর্জাতিক অপরাধ ট্রাইব্যুনালে আওয়ামী লীগের ৭ জ্যেষ্ঠ নেতার মৃত্যুদণ্ড: টাইমস অব ইন্ডিয়ার প্রতিবেদন",
    "summaryBn": "ভারতের শীর্ষ সংবাদমাধ্যম দ্য টাইমস অব ইন্ডিয়া ও এনডিটিভি জানিয়েছে, ২০২৪ সালের জুলাই গণ-অভ্যুত্থানে দমন-পীড়নের মানবতাবিরোধী অপরাধের মামলায় বাংলাদেশ আন্তর্জাতিক অপরাধ ট্রাইব্যুনাল আওয়ামী লীগের সাধারণ সম্পাদক ওবায়দুল কাদেরসহ ৭ জন জ্যেষ্ঠ নেতাকে অনুপস্থিতিতে মৃত্যুদণ্ডের রায় প্রদান করেছে।",
    "summaryEn": "Leading Indian news outlets including The Times of India and NDTV reported that Bangladesh's International Crimes Tribunal has delivered death sentences in absentia to seven senior Awami League leaders, including party General Secretary Obaidul Quader, over the 2024 uprising crackdown.",
    "keyPointsBn": [
      "ওবায়দুল কাদেরসহ ৭ আওয়ামী লীগ নেতার অনুপস্থিতিতে মৃত্যুদণ্ডের রায়",
      "ভারতীয় জাতীয় মিডিয়ায় বাংলাদেশ ট্রাইব্যুনালের রায় গুরুত্বের সাথে প্রচার",
      "আওয়ামী লীগ নেতাদের রাজনৈতিক অবস্থান ও ভারতে সম্ভাব্য আশ্রয়ের গুঞ্জন নিয়ে আলোচনা"
    ],
    "keyPointsEn": [
      "Bangladesh tribunal passes death sentence in absentia against 7 top Awami League figures including Obaidul Quader",
      "Major Indian print and digital platforms prominently cover the tribunal's verdict",
      "Extensive discussion on regional legal ramifications and political implications"
    ],
    "category": "diplomacy",
    "categoryLabelBn": "কূটনীতি ও বিচার",
    "categoryLabelEn": "Diplomacy & Governance",
    "sentiment": "negative",
    "sentimentReasonBn": "রাজনৈতিক অস্থিরতা ও বিচার প্রক্রিয়ার ওপর আন্তর্জাতিক মিডিয়ার মনোযোগের খবর।",
    "sentimentReasonEn": "Coverage focuses on heavy judicial verdicts and political unrest.",
    "source": {
      "name": "The Times of India",
      "bureau": "Delhi",
      "language": "English",
      "originalUrl": "https://timesofindia.indiatimes.com/world/south-asia/bdesh-tribunal-sentences-7-awami-members-to-death-over-july-uprising/articleshow/134276177.cms",
      "originalHeadline": "Bangladesh’s International Crimes Tribunal sentences seven senior Awami League leaders to death",
      "scannedAt": "2026-09-17T09:56:00.000Z"
    },
    "publishedAt": "2026-09-17T07:15:00.000Z",
    "readTimeBn": "৩ মিনিট",
    "readTimeEn": "3 min read",
    "imageUrl": "/images/international-crimes-tribunal-dhaka.jpg",
    "isLeadStory": false,
    "isTrending": true,
    "tags": [
      "International Crimes Tribunal",
      "Obaidul Quader",
      "Awami League",
      "Times of India",
      "Dhaka Verdict"
    ]
  },
  {
    "id": "news-20260917-003",
    "slug": "bnp-leader-rizvi-accuses-india-over-sheikh-hasina-status",
    "title": "BNP Senior Leader Rizvi Accuses India of Conspiring Around Sheikh Hasina's Status",
    "englishTitle": "BNP Leader Rizvi Alleges Indian Maneuvers Regarding Sheikh Hasina: Kolkata Media Dispatches",
    "banglaTitle": "‘হাসিনাকে নিয়ে ভারত চক্রান্ত করছে’: বিএনপির রুহুল কবির রিজভীর বক্তব্যের ওপর কলকাতার মিডিয়া রিপোর্ট",
    "summaryBn": "কলকাতাভিত্তিক সংবাদ মাধ্যমগুলোতে বিএনপির জ্যেষ্ঠ যুগ্ম মহাসচিব রুহুল কবির রিজভীর সাম্প্রতিক বক্তব্য নিয়ে প্রতিবেদন প্রকাশ করা হয়েছে। রিজভী অভিযোগ করেছেন যে শেখ হাসিনার আশ্রয় ও রাজনৈতিক অবস্থান নিয়ে দিল্লিতে নানা সমীকরণ চলছে, যা বাংলাদেশ-ভারত সম্পর্কে অনাস্থা তৈরি করতে পারে।",
    "summaryEn": "Kolkata news bureaus reported on sharp statements by BNP Senior Joint Secretary General Ruhul Kabir Rizvi, who alleged diplomatic maneuvers in Delhi regarding former Prime Minister Sheikh Hasina's stay, urging clear bilateral communication.",
    "keyPointsBn": [
      "শেখ হাসিনার দিল্লির অবস্থান ঘিরে বিএনপি নেতার কড়া বক্তব্যের প্রতিবেদন",
      "কলকাতার আনন্দবাজার ও সংবাদ প্রতিদিনে বাংলাদেশের অভ্যন্তরীণ ও দ্বিপাক্ষিক সম্পর্কের বিশ্লেষণ",
      "প্রত্যর্পণ ও আঞ্চলিক সুসম্পর্ক পুনর্গঠনে নতুন শর্তারোপের আলোচনা"
    ],
    "keyPointsEn": [
      "Kolkata outlets report on BNP leader's remarks addressing Sheikh Hasina's exile in New Delhi",
      "Anandabazar and Sangbad Pratidin analyze political fallout in Dhaka-Delhi relations",
      "Extradition debates remain a sensitive focal point across Eastern India bureaus"
    ],
    "category": "diplomacy",
    "categoryLabelBn": "কূটনীতি ও রাজনীতি",
    "categoryLabelEn": "Diplomacy & Politics",
    "sentiment": "negative",
    "sentimentReasonBn": "দ্বিপাক্ষিক সুসম্পর্ক ও শীর্ষ রাজনৈতিক নেতাদের পাল্টাপাল্টি অভিযোগের বিষয় উপস্থাপন।",
    "sentimentReasonEn": "Highlights sensitive diplomatic allegations and rhetoric between Dhaka political actors and India.",
    "source": {
      "name": "Indian Media (YouTube)",
      "bureau": "Kolkata",
      "language": "Bengali",
      "originalUrl": "https://news.google.com/rss/articles/CBMiVkFVX3lxTFBNY3JQRjBzUjV0bzFmS2tmNHl6Ym1rNVBxdmhrUVlEZHdrTFZDelE4ei1GN01Hbm10d0FiVVVOTTBwbm1zRDFqNUhxNTBVRFdocFdaeHp3?oc=5",
      "originalHeadline": "শেখ হাসিনাকে কেন্দ্র করে ভারত চক্রান্ত করছে, বিস্ফোরক অভিযোগ রিজভীর | Sheikh Hasina",
      "scannedAt": "2026-09-17T09:56:00.000Z"
    },
    "publishedAt": "2026-09-17T06:00:00.000Z",
    "readTimeBn": "২ মিনিট",
    "readTimeEn": "2 min read",
    "imageUrl": "/images/delhi-dhaka-bilateral-summit.jpg",
    "isLeadStory": false,
    "isTrending": false,
    "tags": [
      "BNP",
      "Ruhul Kabir Rizvi",
      "Sheikh Hasina",
      "India-Bangladesh Relations",
      "Kolkata Media"
    ]
  },
  {
    "id": "news-20260917-004",
    "slug": "bangladesh-chhatra-league-organizes-international-seminar-on-academic-freedom",
    "title": "Chhatra League Conducts Special Virtual Seminar Demanding Rights for Students and Faculty",
    "englishTitle": "Chhatra League Organizes International Virtual Seminar on Academic Freedom: Visual Dispatch",
    "banglaTitle": "শিক্ষা দিবস উপলক্ষে ছাত্রলীগের আন্তর্জাতিক অনলাইন সেমিনার ও ভিজ্যুয়াল প্রচারণা",
    "summaryBn": "শিক্ষা দিবস উপলক্ষে আন্তর্জাতিক ছাত্র অধিকার ও শিক্ষাবিদদের প্ল্যাটফর্মে বাংলাদেশ ছাত্রলীগের উদ্যোগে 'A Call to the International Community: Defending Students, Teachers and Academic Freedom in Bangladesh' শীর্ষক অনলাইন সেমিনার ও ইন্সটাগ্রাম ফটো পোস্ট ডিসপ্যাচ পরিচালিত হয়েছে।",
    "summaryEn": "Visual dispatches monitored across Indian media highlight a digital campaign and international seminar organized under the banner 'A Call to the International Community: Defending Students, Teachers and Academic Freedom in Bangladesh'.",
    "keyPointsBn": [
      "শিক্ষা দিবস উপলক্ষে বাংলাদেশ ছাত্রলীগের আন্তর্জাতিক অনলাইন সেমিনারের ভিজ্যুয়াল প্রচার",
      "শিক্ষার্থী ও শিক্ষকদের একাডেমিক স্বাধীনতা সুরক্ষায় আন্তর্জাতিক সম্প্রদায়ের প্রতি আহ্বান",
      "সামাজিক যোগাযোগ মাধ্যমে ভারতীয় সংবাদ মাধ্যমের ডিজিটাল ট্র্যাকিং"
    ],
    "keyPointsEn": [
      "Digital dispatch tracks international virtual seminar focusing on academic freedom and student rights",
      "Appeals made to international human rights bodies regarding campus security",
      "Social media intelligence monitored across regional news feeds"
    ],
    "category": "culture",
    "categoryLabelBn": "সংস্কৃতি ও শিক্ষা",
    "categoryLabelEn": "Culture & Education",
    "sentiment": "neutral",
    "sentimentReasonBn": "শিক্ষার্থীদের অধিকার কেন্দ্রিক অনলাইন প্রচারণার বস্তুবিন্যাস সংবাদ উপস্থাপন।",
    "sentimentReasonEn": "Objective tracking of digital rights dispatches and student body seminars.",
    "source": {
      "name": "Indian Media (Instagram)",
      "bureau": "Delhi",
      "language": "Bengali",
      "originalUrl": "https://news.google.com/rss/articles/CBMiUkFVX3lxTE9NMkRuTXc0QUJTbnNoTGRpQWNTbHFOdTZSRzV2WjNLbGVVMTVvUXBsc2hrZVprSXJlNjdTNFhIVm43NVlJbHVGakF4bm1QTTN0SGc?oc=5",
      "originalHeadline": "A Call to the International Community: Defending Students, Teachers and Academic Freedom in Bangladesh",
      "scannedAt": "2026-09-17T09:56:00.000Z"
    },
    "publishedAt": "2026-09-17T04:30:00.000Z",
    "readTimeBn": "২ মিনিট",
    "readTimeEn": "2 min read",
    "imageUrl": "/images/dhaka-university-campus-landscape.jpg",
    "isLeadStory": false,
    "isTrending": false,
    "tags": [
      "Education Day",
      "Chhatra League",
      "Academic Freedom",
      "Instagram Dispatch",
      "Dhaka University"
    ]
  },
  {
    "id": "news-20260916-009",
    "slug": "siliguri-times-two-bangladeshi-nationals-detained-kharibari-border",
    "title": "Two Bangladeshi nationals detained near Indo-Nepal border in Kharibari",
    "englishTitle": "Two Bangladeshi Nationals Detained Near Indo-Nepal Border in Kharibari: Siliguri Times",
    "banglaTitle": "খড়িবাড়িতে ভারত-নেপাল সীমান্তের কাছে ২ বাংলাদেশি নাগরিক আটক: শিলিগুড়ি টাইমসের বিশেষ প্রতিবেদন",
    "summaryBn": "উত্তরবঙ্গের শিলিগুড়িভিত্তিক প্রধান ডিজিটাল সংবাদ মাধ্যম 'শিলিগুড়ি টাইমস'-এর ভিডিও প্রতিবেদনে প্রকাশ, দার্জিলিং জেলার খড়িবাড়ি থানা এলাকার ভারত-নেপাল সীমান্ত সংলগ্ন অঞ্চল থেকে ২ জন বাংলাদেশি নাগরিককে আটক করেছে পুলিশ ও বিএসএফ। ধৃতদের কাছে থেকে ভুয়া ভারতীয় নথি উদ্ধারের পর তদন্ত শুরু হয়েছে।",
    "summaryEn": "Siliguri-based digital outlet Siliguri Times reports that two Bangladeshi nationals were apprehended by local police and BSF personnel near the Indo-Nepal border area in Kharibari, Darjeeling district, while attempting illegal transit with forged identity cards.",
    "keyPointsBn": [
      "শিলিগুড়ি টাইমসের ভিডিও ডিসপ্যাচে খড়িবাড়ি ভারত-নেপাল সীমান্তে বিএসএফ ও পুলিশের যৌথ অভিযান",
      "ভুয়া ভারতীয় আধার ও পরিচিতিপত্রসহ ২ বাংলাদেশি নাগরিককে আটক",
      "উত্তরবঙ্গের সীমান্ত নিরাপত্তা ও ইমিগ্রেশন চেকপোস্টে বাড়তি সতর্কতা জারি"
    ],
    "keyPointsEn": [
      "Siliguri Times video dispatch details joint BSF-police raid at Kharibari near Indo-Nepal line",
      "Two Bangladeshi nationals apprehended carrying fake Indian identity documents",
      "High alertness enforced across North Bengal transit and immigration corridors"
    ],
    "category": "border",
    "categoryLabelBn": "সীমান্ত নিরাপত্তা",
    "categoryLabelEn": "Border & Security",
    "sentiment": "negative",
    "sentimentReasonBn": "সীমান্তে অনুপ্রবেশ ও ভুয়া নথিপত্র উদ্ধারের ঘটনা নিরাপত্তা ঝুঁকির ইঙ্গিত দেয়।",
    "sentimentReasonEn": "Coverage highlights security challenges associated with illegal cross-border transit.",
    "source": {
      "name": "Siliguri Times",
      "bureau": "Kolkata",
      "language": "Bengali",
      "originalUrl": "https://www.youtube.com/watch?v=7X-H54GvWQA",
      "originalHeadline": "Two Bangladeshi nationals detained near Indo-Nepal border in Kharibari",
      "scannedAt": "2026-09-16T16:30:00.000Z"
    },
    "publishedAt": "2026-09-16T11:37:05.000Z",
    "readTimeBn": "২ মিনিট",
    "readTimeEn": "2 min read",
    "imageUrl": "https://i.ytimg.com/vi/7X-H54GvWQA/hqdefault.jpg",
    "isLeadStory": false,
    "isTrending": true,
    "tags": [
      "Siliguri Times",
      "Siliguri",
      "North Bengal",
      "Kharibari",
      "Border Security",
      "Bangladesh"
    ]
  },
  {
    "id": "news-20260916-010",
    "slug": "tripura-times-indian-citizen-detained-at-bangladesh-border-illegal-entry",
    "title": "Indian Citizen Detained at Bangladesh Border During Illegal Entry",
    "englishTitle": "Indian Citizen Detained at Bangladesh Border During Illegal Entry: Tripura Times Report",
    "banglaTitle": "বাংলাদেশ সীমান্তে অবৈধ অনুপ্রবেশের সময় ভারতীয় নাগরিক আটক: ত্রিপুরা টাইমসের সংবাদ",
    "summaryBn": "ত্রিপুরা রাজ্য থেকে প্রকাশিত দীর্ঘতম ঐতিহ্যবাহী ইংরেজি দৈনিক 'ত্রিপুরা টাইমস'-এর প্রতিবেদনে জানানো হয়েছে, আগরতলা সীমান্ত দিয়ে ওপার বাংলায় প্রবেশের চেষ্টাকালে বিএসএফ টহল দল এক ভারতীয় নাগরিককে গ্রেপ্তার করেছে। সীমান্ত আইন ভঙ্গ ও জিরো পয়েন্টে অনুপ্রবেশ নিয়ে ত্রিপুরা পুলিশ মামলা দায়ের করেছে।",
    "summaryEn": "Agartala-based daily Tripura Times reports that BSF patrol units intercepted and detained an Indian national attempting unauthorized transit along the Agartala zero-point border line, with local authorities registering a boundary violation case.",
    "keyPointsBn": [
      "ত্রিপুরা টাইমসে আগরতলা জিরো পয়েন্ট সীমান্ত টহলের খবর প্রকাশ",
      "সীমান্ত দিয়ে বেআইনি চলাচলের অভিযোগে ভারতীয় নাগরিক বিএসএফের হাতে সোপর্দ",
      "ত্রিপুরা-বাংলাদেশ সীমান্তে নিয়মিত যৌথ কড়া পাহারা অব্যাহতির তথ্য"
    ],
    "keyPointsEn": [
      "Tripura Times reports border patrol interception near Agartala zero point",
      "Indian citizen detained by BSF for unauthorized movement across boundary line",
      "Enforced surveillance maintained across Tripura-Bangladesh border posts"
    ],
    "category": "border",
    "categoryLabelBn": "সীমান্ত নিরাপত্তা",
    "categoryLabelEn": "Border & Security",
    "sentiment": "neutral",
    "sentimentReasonBn": "সীমান্তে দায়িত্বপ্রাপ্ত বাহিনীর নিয়মিত নিরাপত্তা কার্যক্রমের বস্তুনিষ্ঠ উপস্থাপন।",
    "sentimentReasonEn": "Fact-based reporting on routine border enforcement by BSF personnel.",
    "source": {
      "name": "Tripura Times",
      "bureau": "Kolkata",
      "language": "English",
      "originalUrl": "https://tripuratimes.com/news/indian-citizen-detained-at-bangladesh-border-10842",
      "originalHeadline": "Indian Citizen Detained at Bangladesh Border During Illegal Entry",
      "scannedAt": "2026-09-16T15:00:00.000Z"
    },
    "publishedAt": "2026-09-16T08:00:00.000Z",
    "readTimeBn": "১ মিনিট",
    "readTimeEn": "1 min read",
    "imageUrl": "/images/india-bangladesh-border-fence.jpg",
    "isLeadStory": false,
    "isTrending": false,
    "tags": [
      "Tripura Times",
      "Agartala",
      "Tripura",
      "Border Patrol",
      "BSF",
      "Bangladesh"
    ]
  },
  {
    "id": "news-20260916-011",
    "slug": "assam-tribune-dhaka-university-jinnah-portrait-controversy",
    "title": "Jinnah portrait at Dhaka University draws ‘grave insult’ criticism",
    "englishTitle": "Jinnah portrait at Dhaka University draws ‘grave insult’ criticism: The Assam Tribune",
    "banglaTitle": "ঢাকা বিশ্ববিদ্যালয়ে জিন্নাহর প্রতিকৃতি স্থাপনকে ‘গুরুতর অপমান’ হিসেবে বর্ণনা: আসাম ট্রিব্রিউনের বিশ্লেষণ",
    "summaryBn": "আসাম ট্রিব্রিউন-এর আন্তর্জাতিক ডেস্কে প্রকাশিত প্রতিবেদনে ঢাকা বিশ্ববিদ্যালয় ডাকসু হলে মুহাম্মদ আলী জিন্নাহর ছবি পুনঃস্থাপনের ঘটনা নিয়ে বাংলাদেশের বুদ্ধিজীবী ও শিক্ষক সমাজের ক্ষোভ তুলে ধরা হয়েছে। বিশ্ববিদ্যালয় শিক্ষক নেটওয়ার্ক এটিকে বাহান্নোর ভাষা আন্দোলন ও একাত্তরের মুক্তিযুদ্ধের মহান শহিদদের প্রতি চরম অবমাননা বলে মন্তব্য করেছে।",
    "summaryEn": "Guwahati's leading daily The Assam Tribune covers cross-border reactions to the installation of Muhammad Ali Jinnah's portrait at Dhaka University Central Students' Union (DUCSU), highlighting widespread criticism from academics who dubbed it a grave insult to Bangladesh's liberation history.",
    "keyPointsBn": [
      "আসাম ট্রিব্রিউনে ঢাকা বিশ্ববিদ্যালয় ডাকসু সংগ্রাহশালার বিতর্ক নিয়ে বিশ্লেষণ",
      "বিশ্ববিদ্যালয় শিক্ষক নেটওয়ার্কের তীব্র প্রতিবাদ ও ভাষা আন্দোলনের চেতনার স্মারক রক্ষা দাবি",
      "উত্তর-পূর্ব ভারতে সুশীল সমাজের মধ্যে ওপার বাংলার ঐতিহাসিক বয়ান পরিবর্তন নিয়ে তীব্র আলোচনা"
    ],
    "keyPointsEn": [
      "The Assam Tribune analyzes controversial portrait installation at DUCSU hall in Dhaka",
      "University Teachers' Network raises strong objections invoking Bangladesh language movement legacy",
      "Northeast Indian media commentary on shifting historical narratives in Dhaka academic circles"
    ],
    "category": "culture",
    "categoryLabelBn": "সংস্কৃতি ও ইতিহাস",
    "categoryLabelEn": "Culture & History",
    "sentiment": "negative",
    "sentimentReasonBn": "প্রতিবেদনে ঐতিহাসিক বিতর্ক ও ভাষা আন্দোলনের ঐতিহ্যের প্রতি অমর্যাদার ক্ষোভ ফুটে উঠেছে।",
    "sentimentReasonEn": "Coverage highlights intense disagreement and academic controversy over historical iconography in Dhaka.",
    "source": {
      "name": "The Assam Tribune",
      "bureau": "Delhi",
      "language": "English",
      "originalUrl": "https://assamtribune.com/world/jinnah-portrait-dhaka-university-criticism-1086915",
      "originalHeadline": "Jinnah portrait at Dhaka University draws ‘grave insult’ criticism",
      "scannedAt": "2026-09-16T17:15:00.000Z"
    },
    "publishedAt": "2026-09-16T09:17:09.000Z",
    "readTimeBn": "২ মিনিট",
    "readTimeEn": "2 min read",
    "imageUrl": "/images/bangabhaban-presidential-palace-dhaka.jpg",
    "isLeadStory": false,
    "isTrending": true,
    "tags": [
      "The Assam Tribune",
      "Dhaka University",
      "DUCSU",
      "Dhaka",
      "Jinnah Portrait",
      "Assam"
    ]
  },
  {
    "id": "news-20260916-012",
    "slug": "news-vanguard-tripura-bangladesh-political-tension-border-briefing",
    "title": "বাংলাদেশে চরম অশান্তি ও উত্তেজনার বাতাবরণ",
    "englishTitle": "Atmosphere of Extreme Unrest & Tension in Bangladesh: News Vanguard Tripura 24x7",
    "banglaTitle": "বাংলাদেশে চরম অশান্তি ও উত্তেজনার বাতাবরণ: নিউজ ভ্যানগার্ড ত্রিপুরা ২৪x৭-এর বিশেষ সম্প্রচার",
    "summaryBn": "ত্রিপুরা রাজ্যের প্রধান সংবাদ টিভি চ্যানেল 'নিউজ ভ্যানগার্ড'-এর সাম্প্রতিক লাইভ সম্প্রচারে বাংলাদেশে বিচারিক রায় ও রাজনৈতিক দলগুলোর উত্তপ্ত মুখোমুখি অবস্থান নিয়ে কভারেজ দেওয়া হয়। সীমান্ত রাজ্য ত্রিপুরাতে আগরতলা থেকে মেলাঘর পর্যন্ত পুলিশ ও বিএসএফ আউটপোস্টে বিশেষ সতর্কতা নিশ্চিত করা হয়েছে।",
    "summaryEn": "Agartala-based 24x7 news channel News Vanguard reports on heightened political friction in Bangladesh, emphasizing border security readiness enforced across Tripura's international boundary posts from Agartala to Melaghar.",
    "keyPointsBn": [
      "নিউজ ভ্যানগার্ড ত্রিপুরায় বাংলাদেশে রাজনৈতিক উত্তাপ নিয়ে লাইভ টিভি আপডেট",
      "ত্রিপুরা সীমান্ত সংলগ্ন জেলাগুলোতে রাজ্য পুলিশ ও বিএসএফের সর্বোচ্চ সজাগ দৃষ্টি",
      "সীমান্তবর্তী বাণিজ্য ও যাত্রী পারাপারে কঠোর তল্লাশি বজায়"
    ],
    "keyPointsEn": [
      "News Vanguard Tripura live report on political friction in neighboring Bangladesh",
      "Maximum readiness by BSF and Tripura police along boundary districts",
      "Heightened checks enforced at border trade and transit check posts"
    ],
    "category": "politics",
    "categoryLabelBn": "রাজনীতি ও সীমান্ত",
    "categoryLabelEn": "Politics & Border",
    "sentiment": "negative",
    "sentimentReasonBn": "রাজনৈতিক উত্তেজনা ও সীমান্ত নিরাপত্তার ঝুঁকি চ্যানেলটিতে অগ্রাধিকার পেয়েছে।",
    "sentimentReasonEn": "Focuses on potential cross-border volatility and security vigilance.",
    "source": {
      "name": "News Vanguard",
      "bureau": "Kolkata",
      "language": "Bengali",
      "originalUrl": "https://www.youtube.com/watch?v=9V2wN1n1k1o",
      "originalHeadline": "বাংলাদেশে চরম অশান্তি ও উত্তেজনার বাতাবরণ",
      "scannedAt": "2026-09-16T18:00:00.000Z"
    },
    "publishedAt": "2026-09-16T14:26:53.000Z",
    "readTimeBn": "১ মিনিট",
    "readTimeEn": "1 min read",
    "imageUrl": "https://i.ytimg.com/vi/9V2wN1n1k1o/hqdefault.jpg",
    "isLeadStory": false,
    "isTrending": false,
    "tags": [
      "News Vanguard",
      "Tripura",
      "Agartala",
      "Bangladesh Unrest",
      "Border Security"
    ]
  },
  {
    "id": "news-20260916-013",
    "slug": "barak-bulletin-katigorah-indo-bangladesh-border-trespass-tension",
    "title": "Tension At Indo-Bangladesh Border In Katigorah over Trespass; Alleged Attack on Indian Farmers",
    "englishTitle": "Tension At Indo-Bangladesh Border In Katigorah Over Trespass: Barak Bulletin",
    "banglaTitle": "কাটিগড়ায় ভারত-বাংলাদেশ সীমান্তে অনুপ্রবেশ ও ভারতীয় কৃষকদের ওপর হামলার অভিযোগ: বরাক বুলেটিন",
    "summaryBn": "আসামের কাছাড় জেলার কাটিগড়া সীমান্তে জিরো পয়েন্টে অনুপ্রবেশ নিয়ে স্থানীয় উত্তেজনা সৃষ্টি হওয়া সংক্রান্ত বরাক বুলেটিনের বিশদ প্রতিবেদন। শূন্যরেখার কাছে কৃষিকাজ করার সময় দুষ্কৃতীদের হামলার চেষ্টা বিএসএফ জওয়ানদের সময়োচিত পদক্ষেপে বানচাল করা হয় এবং করিমগঞ্জ সেক্টরে সেক্টর কমান্ডার স্তরে আলোচনা হয়েছে।",
    "summaryEn": "Barak Bulletin reports localized tension along the Katigorah border in Assam's Cachar district following an attempted trespassing incident near the zero line targeting local farmers, which was repelled by swift BSF border guard patrols.",
    "keyPointsBn": [
      "বরাক বুলেটিনে কাটিগড়া ভারত-বাংলাদেশ সীমান্ত পরিস্থিতি নিয়ে বিশদ সংবাদ",
      "জিরো লাইনে কৃষিকাজের সময়ে নিরাপত্তা নিশ্চিতকরণ ও বিএসএফ টহল বৃদ্ধি",
      "বরাক উপত্যকার সীমান্ত এলাকায় স্থানীয় অধিবাসীদের নিরাপত্তা নিশ্চিতের পদক্ষেপ"
    ],
    "keyPointsEn": [
      "Barak Bulletin coverage of Katigorah Indo-Bangladesh border situation in Cachar",
      "Immediate BSF patrol deployment ensuring safety for farmers near zero line",
      "Sector commander talks initiated to preserve peace along Barak Valley frontier"
    ],
    "category": "border",
    "categoryLabelBn": "সীমান্ত নিরাপত্তা",
    "categoryLabelEn": "Border & Security",
    "sentiment": "negative",
    "sentimentReasonBn": "সীমান্তে দুষ্কৃতীদের তৎপরতা ও উত্তেজনার ঘটনা তুলে ধরা হয়েছে।",
    "sentimentReasonEn": "Reports local security concern along border farming areas.",
    "source": {
      "name": "Barak Bulletin",
      "bureau": "Kolkata",
      "language": "English",
      "originalUrl": "https://barakbulletin.com/tension-at-indo-bangladesh-border-in-katigorah-over-trespass/",
      "originalHeadline": "Tension At Indo-Bangladesh Border In Katigorah over Trespass; Alleged Attack on Indian Farmers",
      "scannedAt": "2026-09-16T17:45:00.000Z"
    },
    "publishedAt": "2026-09-16T12:00:00.000Z",
    "readTimeBn": "২ মিনিট",
    "readTimeEn": "2 min read",
    "imageUrl": "/images/gauhati-high-court.jpg",
    "isLeadStory": false,
    "isTrending": false,
    "tags": [
      "Barak Bulletin",
      "Assam",
      "Katigorah",
      "Cachar",
      "Border Tension",
      "BSF"
    ]
  },
  {
    "id": "news-20260916-007",
    "slug": "the-assam-tribune-awami-league-rejects-ict-death-verdict",
    "title": "Awami League Rejects ICT Death Sentence Verdict, Calling It One-Sided & Fabricated: Assam Tribune Report",
    "englishTitle": "Awami League Rejects ICT Death Sentence Verdict, Calling It One-Sided & Fabricated: Assam Tribune Report",
    "banglaTitle": "ট্রাইব্যুনালের মৃত্যুদণ্ডের রায়কে ‘একপেশে ও মনগড়া’ আখ্যা দিয়ে প্রত্যাখ্যান আওয়ামী লীগের: আসাম ট্রিব্রিউনের প্রতিবেদন",
    "summaryBn": "আসামের নেতৃস্থানীয় ইংরেজি দৈনিক 'দ্য আসাম ট্রিব্রিউন'-এর প্রতিবেদনে জানানো হয়েছে, বাংলাদেশ আন্তর্জাতিক অপরাধ ট্রাইব্যুনাল কর্তৃক ওবায়দুল কাদেরসহ ৭ জন জ্যেষ্ঠ নেতার মৃত্যুদণ্ডের রায়কে একপেশে এবং রাজনৈতিক প্রতিশোধমূলক আখ্যা দিয়ে প্রত্যাখ্যান করেছে ক্ষমতাচ্যুত আওয়ামী লীগ। গুয়াহাটি ও উত্তর-পূর্ব ভারতের গণমাধ্যমগুলোতে এই রায় কেন্দ্র করে ব্যাপক চাঞ্চল্য সৃষ্টি হয়েছে।",
    "summaryEn": "Guwahati-based daily 'The Assam Tribune' reports that the deposed Awami League has officially rejected the death sentence verdict delivered by Bangladesh's International Crimes Tribunal against 7 top leaders including Obaidul Quader, calling the proceedings politically biased.",
    "keyPointsBn": [
      "দ্য আসাম ট্রিব্রিউনে আওয়ামী লীগ স্থায়ী কমিটির আন্তর্জাতিক প্রতিক্রিয়া ও বিবৃতি প্রকাশ",
      "৭ জ্যেষ্ঠ নেতার ক্যাপিটাল পানিশমেন্ট রায়কে ট্রাইব্যুনালের রাজনৈতিক অবিচার হিসেবে চিহ্নিতকরণ",
      "উত্তর-পূর্ব ভারতের কৌশলগত ও নিরাপত্তাজনিত পর্যবেক্ষণে বাংলাদেশের বিচারিক ঘটনাপ্রবাহ"
    ],
    "keyPointsEn": [
      "The Assam Tribune highlights Awami League's official rejection of the ICT verdict",
      "Labels the death sentences of 7 senior leaders as politically driven",
      "Northeast India regional analysis on the geopolitical fallout across the border"
    ],
    "category": "politics",
    "categoryLabelBn": "রাজনীতি ও ভূরাজনীতি",
    "categoryLabelEn": "Politics & Geopolitics",
    "sentiment": "negative",
    "sentimentReasonBn": "আসাম ট্রিব্রিউনের প্রতিবেদনে বাংলাদেশের বিচারিক রায় নিয়ে রাজনৈতিক বিরোধ ও অস্থিরতার দিকটি গুরুত্ব পেয়েছে।",
    "sentimentReasonEn": "The report underlines political turmoil and cross-border polarization following the tribunal verdict.",
    "source": {
      "name": "The Assam Tribune",
      "bureau": "Delhi",
      "language": "English",
      "originalUrl": "https://assamtribune.com/world/awami-league-rejects-ict-verdict-bangladesh-1086910",
      "originalHeadline": "Awami League Rejects ICT Verdict as Fabricated and One-Sided",
      "scannedAt": "2026-09-16T12:00:00.000Z"
    },
    "publishedAt": "2026-09-16T09:30:00.000Z",
    "readTimeBn": "২ মিনিট",
    "readTimeEn": "2 min read",
    "imageUrl": "/images/international-crimes-tribunal-dhaka.jpg",
    "isLeadStory": false,
    "isTrending": true,
    "tags": [
      "The Assam Tribune",
      "Awami League",
      "ICT Verdict",
      "Obaidul Quader",
      "Assam",
      "Northeast India"
    ]
  },
  {
    "id": "news-20260916-008",
    "slug": "barak-bulletin-silchar-border-security-vigil-sylhet-boundary",
    "title": "Barak Valley Border Alert: Enhanced Security Vigil Along Sylhet-Karimganj Border Dispatches",
    "englishTitle": "Barak Valley Border Alert: Enhanced Security Vigil Along Sylhet-Karimganj Border Dispatches",
    "banglaTitle": "বরাক উপত্যকা সীমান্ত সতর্কতা: সিলেট-করিমগঞ্জ সীমান্তে বিএসএফ ও বিজিবির সশস্ত্র ওয়াচ ও পাহারা নিয়ে বরাক বুলেটিনের বিশেষ সংবাদ",
    "summaryBn": "আসামের শিলচরভিত্তিক সংবাদ পোর্টাল 'বরাক বুলেটিন' তাদের সীমান্ত স্ক্যানার রিপোর্টে জানিয়েছে, সিলেটের সীমান্তঘেঁষা করিমগঞ্জ ও কাছাড় জেলায় বিএসএফ ও বিজিবির সর্বোচ্চ ওয়াচ ও ফ্ল্যাট ওয়াচ জোরদার করা হয়েছে। ওপার বাংলায় রাজনৈতিক পরিবর্তনের পর সীমান্ত দিয়ে যেকোনো ধরনের অবৈধ অনুপ্রবেশ রুখতে এই অতিরিক্ত নজরদারি।",
    "summaryEn": "Silchar-based news portal Barak Bulletin provides a regional border dispatch detailing heightened vigil by Border Security Force (BSF) units along the Sylhet-Karimganj frontier to prevent unauthorized cross-border movement amidst post-transition dynamics in Bangladesh.",
    "keyPointsBn": [
      "বরাক বুলেটিনের বিশেষ প্রতিবেদনে করিমগঞ্জ ও সিলেট সীমানায় বিএসএফের বর্ধিত ওয়াচটাওয়ার নজরদারি",
      "আসামের বরাক উপত্যকার ৩টি সীমান্ত জেলায় অনুপ্রবেশ প্রতিরোধমূলক বিশেষ টহল",
      "দুই দেশের সীমান্তরক্ষী বাহিনীর নিয়মিত ফ্ল্যাগ মিটিং ও যৌথ সীমান্ত যোগাযোগ"
    ],
    "keyPointsEn": [
      "Barak Bulletin reports increased watchtower surveillance along Assam's Karimganj border",
      "Heightened alert across three Barak Valley districts bordering Sylhet Division",
      "Regular BSF-BGB sector meetings to maintain order along the international line"
    ],
    "category": "border",
    "categoryLabelBn": "সীমান্ত নিরাপত্তা",
    "categoryLabelEn": "Border & Security",
    "sentiment": "neutral",
    "sentimentReasonBn": "সীমান্ত নিরাপত্তার বাস্তবভিত্তিক বস্তুনিষ্ঠ প্রতিবেদন যেখানে প্রশাসন ও নিরাপত্তা বাহিনীর ব্যবস্থা স্থান পেয়েছে।",
    "sentimentReasonEn": "Objective reporting on border security measures enforced by Indian security agencies.",
    "source": {
      "name": "Barak Bulletin",
      "bureau": "Kolkata",
      "language": "English",
      "originalUrl": "https://barakbulletin.com/karimganj-sylhet-border-vigil-bsf-alert-2026/",
      "originalHeadline": "Enhanced Security Vigil Along Sylhet-Karimganj Border",
      "scannedAt": "2026-09-16T14:15:00.000Z"
    },
    "publishedAt": "2026-09-16T11:00:00.000Z",
    "readTimeBn": "২ মিনিট",
    "readTimeEn": "2 min read",
    "imageUrl": "/images/gauhati-high-court.jpg",
    "isLeadStory": false,
    "isTrending": false,
    "tags": [
      "Barak Bulletin",
      "Assam",
      "Barak Valley",
      "Sylhet Border",
      "BSF Vigil",
      "Karimganj"
    ]
  },
  {
    "id": "news-20260916-006",
    "slug": "thewall-kolkata-hasina-return-local-elections-unrest-concerns-bangladesh",
    "title": "হাসিনার ফেরা ও স্থানীয় সরকার ভোট ঘিরে তুমুল অশান্তির আশঙ্কা, দ্য ওয়াল-এর বিশেষ প্রতিবেদন",
    "englishTitle": "Fears of Unrest Over Hasina's Return & Local Elections: Kolkata Portal The Wall Reports",
    "banglaTitle": "হাসিনার ফেরা ও স্থানীয় সরকার ভোট ঘিরে তুমুল অশান্তির আশঙ্কা, দ্য ওয়াল-এর বিশেষ প্রতিবেদন",
    "summaryBn": "কলকাতা-ভিত্তিক জনপ্রিয় ডিজিটাল সংবাদ মাধ্যম 'দ্য ওয়াল'-এর বিশেষ সংবাদ প্রতিবেদনে জানানো হয়েছে, ভারতে অবস্থানরত সাবেক প্রধানমন্ত্রী শেখ হাসিনার সম্ভাব্য ফেরা এবং ওপার বাংলায় আসন্ন স্থানীয় সরকার নির্বাচনকে কেন্দ্র করে রাজনৈতিক উত্তাপ ছড়িয়ে পড়েছে। প্রতিবেদনে আইনশৃঙ্খলা পরিস্থিতি রক্ষা ও প্রশাসনিক চ্যালেঞ্জ নিয়ে বিশ্লেষকদের মতামত তুলে ধরা হয়।",
    "summaryEn": "In a detailed report by Kolkata-based news outlet The Wall, political correspondents chart emerging security concerns in Bangladesh surrounding discussions over former PM Sheikh Hasina's exile movements and upcoming local government polls. The report notes heightened administrative alertness across border districts.",
    "keyPointsBn": [
      "দ্য ওয়াল-এর প্রতিবেদনে বাংলাদেশ স্থানীয় সরকার নির্বাচন ও রাজনৈতিক উত্তাপের বিশ্লেষণ",
      "শেখ হাসিনার প্রত্যর্পণ বার্তা ও রাজনৈতিক দলগুলোর পাল্টাপাল্টি অবস্থানের চিত্র",
      "কলকাতা প্রেস ডেস্ক থেকে সীমান্ত জেলাগুলোতে প্রশাসনিক নজরদারির আপডেট",
      "কূটনীতি ও আঞ্চলিক রাজনীতি ক্যাটাগরিতে সংগৃহীত"
    ],
    "keyPointsEn": [
      "The Wall Kolkata report details political friction ahead of local government elections",
      "Evaluates security dynamics surrounding Sheikh Hasina's exile political messaging",
      "Monitored by Kolkata bureau as a key regional political stability report",
      "Archived under Politics & Border Security dispatches"
    ],
    "category": "politics",
    "categoryLabelBn": "রাজনীতি ও সীমান্ত নিরাপত্তা",
    "categoryLabelEn": "Politics & Security",
    "sentiment": "negative",
    "sentimentReasonBn": "দ্য ওয়াল-এর প্রতিবেদনে নির্বাচনী পরিস্থিতি ও রাজনৈতিক উত্তাপ বৃদ্ধির আশঙ্কার চিত্র উঠে এসেছে।",
    "sentimentReasonEn": "The Wall report highlights political friction and security concerns regarding elections.",
    "source": {
      "name": "The Wall",
      "bureau": "Kolkata",
      "language": "Bengali",
      "originalUrl": "https://news.google.com/rss/articles/CBMikAJBVV95cUxNcG05OE9nNXFhclZudmtCcE1Pa09BSU1jblZkSHJIUmdIcUdrNGpudGRnSnh5UmQ4S0Q4YTlUeEFVY2xoYm4takZjYVk3a2tSdVpPTVl1OTJJeGZvb3NEX2xUZGhTbjgyNUM5REZicnBUT0J6LVo3bHZpeklYOXBhQzBRVFZ6VjJKbmtGZzlXSHNFVVdaMm1KbEVJX05HTzEzMWVnOERsWVFCTTA4RkxKWlVaVWlacjRGdENkTXNQakVaR0dkU2J0eGVTcUN6dFVTbG9JekJGTDJfbmJKUmpMaVdCNUU5emc5MDAxeWhIcWxnejNYZVdRcVV5MXUxNWFzS1J6Mm55QTAxNkpCNWdkUNIBlgJBVV95cUxOaDMxdjFuSmZUUFQtX21HRkI4X1BaSTNJcHJadlpxY0RLanRtYURNN0ZlVUJ0OEFiNW43aWpqczFfcXRNRmE3NnlzcjNWV3ZGODhzSnR6SmUzREpOd0NKblNWajkyMjBQaEduM0NLaDhsN1k2c05WbGtnSDYtVFRBN1hDTnAxdFRvVE1SY1Q2MmNYWjNTVy1uVmxDaVIwNGJwSnhnaG9HcUZ5MHg4NHNSV2R0Tl9vQmF1ejI0dHo2elBsME9yQURYUEkzVzJ3T01RbFpOa05mX2RRN3NzdDhZOTJKR3Q4Ri0xdEtKd1VvX192RTRGVDh0ZFZSUXFsWENQTHE5WUJYQjlpbkZEZ3dDdko4UHI4UQ?oc=5",
      "originalHeadline": "হাসিনার ফেরা ও স্থানীয় সরকার ভোট ঘিরে তুমুল অশান্তির আশঙ্কা - TheWall",
      "scannedAt": "2026-09-16T21:30:29.000Z"
    },
    "publishedAt": "2026-09-16T10:38:47.000Z",
    "readTimeBn": "৩ মিনিট পাঠ",
    "readTimeEn": "3 min read",
    "imageUrl": "/images/delhi-dhaka-bilateral-summit.jpg",
    "isLeadStory": false,
    "isTrending": true,
    "tags": [
      "The Wall",
      "Kolkata Bureau",
      "Sheikh Hasina",
      "Local Elections",
      "Politics",
      "#TheWallNews"
    ]
  },
  {
    "id": "news-20260916-005",
    "slug": "sangbad-pratidin-kolkata-editorial-hasina-return-mecca-pact-bangladesh-crisis",
    "title": "হাসিনার প্রত্যাবর্তন থেকে মাক্কা চুক্তি: বাংলাদেশে অর্থনীতি ও নিরাপত্তা সংকটের বহু প্রশ্ন উত্তরহীন, সংবাদ প্রতিদিনের সম্পাদকীয়",
    "englishTitle": "From Hasina's Return to the Mecca Pact: Economic & Security Questions Unanswered in Bangladesh, Sangbad Pratidin Editorial",
    "banglaTitle": "হাসিনার প্রত্যাবর্তন থেকে মাক্কা চুক্তি: বাংলাদেশে অর্থনীতি ও নিরাপত্তা সংকটের বহু প্রশ্ন উত্তরহীন, সংবাদ প্রতিদিনের সম্পাদকীয়",
    "summaryBn": "পশ্চিমবঙ্গের অন্যতম শীর্ষ স্থানীয় দৈনিক 'সংবাদ প্রতিদিন'-এর আজকের বিশেষ সম্পাদকীয়তে বাংলাদেশের বর্তমান অর্থনৈতিক ও রাজনৈতিক পরিস্থিতি নিয়ে গভীর উদ্বেগ প্রকাশ করা হয়েছে। প্রতিবেদনে উল্লেখ করা হয়, ওপার বাংলায় গ্যাসের সংকটে কলকারখানা বন্ধ হওয়া, তীব্র বেকারত্ব এবং আইনশৃঙ্খলা পরিস্থিতির অবক্ষয়ের মাঝেই প্রাক্তন প্রধানমন্ত্রী শেখ হাসিনার প্রত্যাবর্তন ও আন্তর্জাতিক নানা কূটনৈতিক চুক্তি ঘিরে প্রশ্ন তৈরি হয়েছে।",
    "summaryEn": "In a lead editorial published by Kolkata daily Sangbad Pratidin, regional analysts examine the growing economic and security challenges confronting Bangladesh post-August. The article highlights widespread industrial shutdowns caused by gas shortages, surging unemployment, deteriorating law enforcement, and emerging geopolitical questions surrounding former PM Sheikh Hasina's exile strategy and regional diplomacy.",
    "keyPointsBn": [
      "সংবাদ প্রতিদিনের সম্পাদকীয়তে বাংলাদেশের বর্তমান গ্যাস সংকট ও শিল্প কারখানা বন্ধের তথ্যানুসন্ধান",
      "বেকারত্ব বৃদ্ধি এবং অপরাধ ও নিরাপত্তাহীনতা বেড়ে যাওয়া নিয়ে কলকাতা প্রেস ডেসকের গভীর বিশ্লেষণ",
      "শেখ হাসিনার সম্ভাব্য রাজনৈতিক প্রত্যাবর্তন ও আঞ্চলিক ভূ-রাজনীতির মোড় নিয়ে বিশ্লেষণ",
      "কলকাতা ব্যুরো থেকে পরিবেশিত দক্ষিণ এশীয় নিরাপত্তা বিষয়ক বিশেষ প্রতিবেদন"
    ],
    "keyPointsEn": [
      "Sangbad Pratidin lead editorial charts energy crunches and industrial slowdowns in Bangladesh",
      "Detailed analysis by Kolkata desk on rising unemployment and internal security concerns",
      "Evaluates geopolitical questions surrounding Sheikh Hasina's political signaling from Delhi",
      "Archived under Diplomacy & Regional Security for cross-border policy monitoring"
    ],
    "category": "diplomacy",
    "categoryLabelBn": "কূটনীতি ও আঞ্চলিক নিরাপত্তা",
    "categoryLabelEn": "Diplomacy & Security",
    "sentiment": "negative",
    "sentimentReasonBn": "সংবাদ প্রতিদিনের সম্পাদকীয়তে বাংলাদেশে জ্বালানি সংকট, শিল্পকারখানা বন্ধ ও অর্থনৈতিক উদ্বেগের চিত্র উঠে এসেছে।",
    "sentimentReasonEn": "Sangbad Pratidin editorial details severe gas shortages, industrial stagnation, and security concerns.",
    "source": {
      "name": "Sangbad Pratidin",
      "bureau": "Kolkata",
      "language": "Bengali",
      "originalUrl": "https://www.sangbadpratidin.in/editorial/from-hasinas-return-to-the-mecca-pact-many-questions-remain-unanswered-in-bangladesh/pid/1341406/",
      "originalHeadline": "হাসিনার প্রত্যাবর্তন থেকে মাক্কা চুক্তি, বহু প্রশ্ন উত্তরহীন ভেসে বেড়াচ্ছে বাংলাদেশে - Sangbad Pratidin",
      "scannedAt": "2026-09-16T14:53:30.000Z"
    },
    "publishedAt": "2026-09-16T07:50:02.000Z",
    "readTimeBn": "৪ মিনিট পাঠ",
    "readTimeEn": "4 min read",
    "imageUrl": "/images/south-block-mea-delhi.jpg",
    "isLeadStory": false,
    "isTrending": true,
    "tags": [
      "Sangbad Pratidin",
      "Kolkata Bureau",
      "Sheikh Hasina",
      "Economy",
      "Diplomacy",
      "Opar Bangla",
      "#KolkataPress"
    ]
  },
  {
    "id": "ig-005",
    "slug": "instagram-awami-league-madaripur-protest-ict-death-sentence-verdict",
    "title": "আওয়ামী লীগ নেতাদের মৃত্যুদণ্ডের রায়ের প্রতিবাদে মাদারীপুর জেলা আওয়ামী লীগের ইনস্টাগ্রাম বার্তা",
    "englishTitle": "Madaripur Awami League Issues Instagram Visual Post Rejecting ICT Verdict Against Party Leaders",
    "banglaTitle": "আওয়ামী লীগ নেতাদের মৃত্যুদণ্ডের রায়ের প্রতিবাদে মাদারীপুর জেলা আওয়ামী লীগের ইনস্টাগ্রাম বার্তা",
    "summaryBn": "আন্তর্জাতিক অপরাধ ট্রাইব্যুনাল কর্তৃক ওবায়দুল কাদের ও আ ফ ম বাহাউদ্দিন নাছিমসহ সাত আওয়ামী লীগ নেতার বিরুদ্ধে মৃত্যুদণ্ডের রায় ঘোষণার পর সামাজিক মাধ্যম ইনস্টাগ্রামে দলের বিভিন্ন স্তরের নেতাকর্মীদের প্রতিবাদ ফটো বার্তা প্রকাশিত হয়েছে। মাদারীপুর জেলা আওয়ামী লীগের ইনস্টাগ্রাম হ্যান্ডেলে এ রায়কে প্রত্যাখান করে দলটির জেলা ও সহযোগী সংগঠনগুলোর অবস্থানের চিত্র তুলে ধরা হয়, যা নেটদুনিয়ায় ব্যাপকভাবে ছড়িয়ে পড়েছে।",
    "summaryEn": "Following the International Crimes Tribunal's death sentence ruling against seven former Awami League ministers and leaders—including Obaidul Quader and AFM Bahauddin Nasim—protest photo dispatches and visual graphics were circulated across official and grassroots Instagram accounts. The posts, highlighting rejection of the tribunal's verdict by Madaripur district Awami League units, gained notable traction across digital networks.",
    "keyPointsBn": [
      "ট্রাইব্যুনালের রায়ের পরপরই ইনস্টাগ্রামে বাংলাদেশ আওয়ামী লীগের তৃণমূল ও জেলা কমিটির ভিজ্যুয়াল পোস্ট প্রকাশ",
      "ওবায়দুল কাদের ও বাহাউদ্দিন নাছিমের ছবি সম্বলিত প্রতিবাদী ব্যানার ইনস্টাগ্রাম ফিডে ভাইরাল",
      "সামাজিক মাধ্যমে ওপার বাংলা ও বাংলাদেশের নেটিজেনদের মধ্যে নতুন করে পোস্টটি নিয়ে দ্বিপাক্ষিক আলোচনা",
      "ইনস্টাগ্রাম ভিজ্যুয়াল জার্নালিজম বিভাগে ১ মিনিট পোস্ট পাঠ হিসেবে অন্তর্ভুক্ত"
    ],
    "keyPointsEn": [
      "Grassroots and district Awami League units release Instagram visual dispatches following ICT verdict",
      "Banners and statements regarding Obaidul Quader and Bahauddin Nasim shared across Instagram feeds",
      "Triggered digital commentary among cross-border online communities",
      "Archived under Instagram Post and Visual Journalism tags for readers"
    ],
    "category": "politics",
    "categoryLabelBn": "ইনস্টাগ্রাম ও রাজনীতি",
    "categoryLabelEn": "Instagram & Visual Politics",
    "sentiment": "negative",
    "sentimentReasonBn": "ইনস্টাগ্রাম ডিসপ্যাচে ট্রাইব্যুনালের রায়ের প্রতিক্রিয়া ও আওয়ামী লীগের তৃণমূল অসন্তোষ ফুটে উঠেছে।",
    "sentimentReasonEn": "Instagram dispatch highlights political friction and protests surrounding the ICT tribunal's verdict.",
    "source": {
      "name": "Indian Media (Instagram)",
      "bureau": "Delhi",
      "language": "Bengali",
      "originalUrl": "https://www.instagram.com",
      "originalHeadline": "আওয়ামী লীগ নেতাদের বিরুদ্ধে মৃত্যুদণ্ডের রায়ের প্রতিবাদে জেলা আওয়ামী লীগের ইনস্টাগ্রাম পোস্ট",
      "scannedAt": "2026-09-16T10:32:00.000Z"
    },
    "publishedAt": "2026-09-15T18:46:30.000Z",
    "readTimeBn": "১ মিনিট পোস্ট",
    "readTimeEn": "1 min read",
    "imageUrl": "/images/international-crimes-tribunal-dhaka.jpg",
    "isLeadStory": false,
    "isTrending": true,
    "tags": [
      "Instagram Post",
      "Visual Journalism",
      "Awami League",
      "Madaripur",
      "Delhi Bureau",
      "ICT Verdict",
      "#InstagramNews"
    ]
  },
  {
    "id": "news-20260916-001",
    "slug": "bangladesh-tribunal-sentences-seven-awami-league-leaders-death-july-uprising-times-of-india",
    "title": "Bangladesh tribunal sentences seven Awami League members to death over 'July uprising'",
    "englishTitle": "Bangladesh tribunal sentences seven Awami League members to death over 'July uprising'",
    "banglaTitle": "জুলাই অভ্যুথানে মানবতাবিরোধী অপরাধ: ওবায়দুল কাদেরসহ আওয়ামী লীগের ৭ নেতার মৃত্যুদণ্ডের রায় আন্তর্জাতিক অপরাধ ট্রাইব্যুনালের",
    "summaryBn": "ঢাকার আন্তর্জাতিক অপরাধ ট্রাইব্যুনাল ২০২৪ সালের জুলাই গণ-অভ্যুত্থান চলাকালীন মানবতাবিরোধী অপরাধ ও নৃশংসতার মামলায় কার্যক্রম নিষিদ্ধ আওয়ামী লীগের সাধারণ সম্পাদক ওবায়দুল কাদেরসহ সাতজন জ্যেষ্ঠ নেতার বিরুদ্ধে মৃত্যুদণ্ডের রায় প্রদান করেছে। টাইমস অব ইন্ডিয়া ও দ্য হিন্দুর প্রতিবেদনে বলা হয়েছে, বিচারপতি নজরুল ইসলাম চৌধুরীর নেতৃত্বাধীন তিন বিচারকের ট্রাইব্যুনাল এ রায় ঘোষণা করেন। ওপার বাংলায় এটি নিয়ে ব্যাপক রাজনৈতিক প্রতিক্রিয়া সৃষ্টি হয়েছে।",
    "summaryEn": "The International Crimes Tribunal (ICT) in Dhaka has sentenced seven senior members and ministers of the ruling-deposed Awami League, including General Secretary Obaidul Quader, to death over alleged crimes against humanity during the July 2024 uprising. Major Indian national dailies including The Times of India, The Hindu, and Dainik Jagran have given prominent front-page coverage to the verdict, noting its far-reaching geopolitical ramifications.",
    "keyPointsBn": [
      "ট্রাইব্যুনাল ওবায়দুল কাদেরসহ আওয়ামী লীগের সাত শীর্ষ নেতাকে মৃত্যুদণ্ড প্রদান করেছে",
      "টাইমস অব ইন্ডিয়া ও দ্য হিন্দুতে ঢাকার বিশেষ আদালত ট্রাইব্যুনালের রায় গুরুত্বের সাথে প্রকাশিত হয়েছে",
      "ওপার বাংলা ও দিল্লির আন্তর্জাতিক বিশ্লেষকরা এ রায়কে বাংলাদেশ রাজনীতির এক মোড় ঘোরানো ঘটনা হিসেবে দেখছেন",
      "নয়াদিল্লির পররাষ্ট্র মন্ত্রণালয় ও কলকাতা ব্যুরো রায় পরবর্তী পরিস্থিতি পর্যবেক্ষণ করছে"
    ],
    "keyPointsEn": [
      "Dhaka ICT sentences 7 senior Awami League functionaries to death over 2024 July violence",
      "Front-page coverage across The Times of India, The Hindu, and national Indian wire media",
      "Strategic analysts in Delhi and Kolkata view the verdict as a historic inflection point in regional politics",
      "Diplomatic desks in New Delhi closely monitoring bilateral fallout following the announcement"
    ],
    "category": "politics",
    "categoryLabelBn": "রাজনীতি ও বিচারব্যবস্থা",
    "categoryLabelEn": "Politics & Justice",
    "sentiment": "negative",
    "sentimentReasonBn": "টাইমস অব ইন্ডিয়ার প্রতিবেদনে আন্তর্জাতিক অপরাধ ট্রাইব্যুনালের রায় এবং বাংলাদেশ ও আওয়ামী লীগ নেতাদের আইনগত পরিস্থিতির চরম উত্তেজনা উঠে এসেছে।",
    "sentimentReasonEn": "The Times of India coverage details the death penalty verdicts issued against former governing leaders in Bangladesh.",
    "source": {
      "name": "The Times of India",
      "bureau": "Delhi",
      "language": "English",
      "originalUrl": "https://timesofindia.indiatimes.com/world/south-asia/bdesh-tribunal-sentences-7-awami-members-to-death-over-july-uprising/articleshow/134276177.cms",
      "originalHeadline": "Bangladesh tribunal sentences seven Awami League members to death over 'July uprising'",
      "scannedAt": "2026-09-16T09:50:00.000Z"
    },
    "publishedAt": "2026-09-16T07:28:07.000Z",
    "readTimeBn": "৩ মিনিট পাঠ",
    "readTimeEn": "3 min read",
    "imageUrl": "/images/dhaka-high-court.jpg",
    "isLeadStory": true,
    "isTrending": true,
    "tags": [
      "International Crimes Tribunal",
      "Awami League",
      "Obaidul Quader",
      "The Times of India",
      "Delhi Bureau",
      "Sheikh Hasina",
      "July Uprising"
    ]
  },
  {
    "id": "news-20260916-002",
    "slug": "navbharat-times-tarique-rahman-advisor-extradition-sheikh-hasina-india-relations",
    "title": "'शेख हसीना को सौंपो तभी बांग्लादेश सुधारेगा रिश्ते', तारिक रहमान के 'भारत विरोधी' सलाहकार ने रखी शर्तें",
    "englishTitle": "'Hand Over Sheikh Hasina to Restore Ties': Tarique Rahman's Advisor Sets Conditions in Indian Media Interviews",
    "banglaTitle": "'শেখ হাসিনাকে ফেরত দিলেই সম্পর্ক স্বাভাবিক হবে': ভারতে তারেক রহমানের উপদেষ্টার সাক্ষাৎকার ঘিরে আলোড়ন",
    "summaryBn": "ভারতীয় হিন্দি দৈনিক নবভারত টাইমস ও জাতীয় গণমাধ্যমে বিএনপির ভারপ্রাপ্ত চেয়ারম্যান তারেক রহমানের উপদেষ্টার এক সাক্ষাৎকারকে কেন্দ্র করে কূটনৈতিক মহলে জোর আলোচনা শুরু হয়েছে। প্রতিবেদনে বলা হয়, দিল্লিতে ওপার বাংলার প্রতিনিধিরা শর্ত দিয়েছেন যে প্রাক্তন প্রধানমন্ত্রী শেখ হাসিনাকে বাংলাদেশ ট্রাইব্যুনালের মুখোমুখি করার জন্য ফেরত পাঠানো হলেই ঢাকা-দিল্লি দ্বিপাক্ষিক সম্পর্কে পূর্ণ আস্থা ফিরবে।",
    "summaryEn": "Indian national daily Navbharat Times and Delhi diplomatic correspondents reported on statements made by advisors to BNP Acting Chairman Tarique Rahman regarding bilateral normalization with New Delhi. The reports highlight that BNP officials insist the extradition of former Prime Minister Sheikh Hasina to face judicial proceedings in Dhaka remains a key prerequisite for rebuilding comprehensive strategic confidence between the two neighbors.",
    "keyPointsBn": [
      "নবভারত টাইমস-এর এক্সক্লুসিভ প্রতিবেদনে তারেক রহমানের উপদেষ্টার সাক্ষাৎকার ঘিরে দ্বিপাক্ষিক আলোড়ন",
      "শেখ হাসিনাকে প্রত্যর্পণ না করা পর্যন্ত বাংলাদেশ-ভারত সুসম্পর্ক স্থাপনে জটিলতার সংকেত",
      "দিল্লির পররাষ্ট্রমন্ত্রণালয়ের নীতি নির্ধারকরা ওপার বাংলার বিএনপির রাজনৈতিক কৌশল পর্যবেক্ষণ করছেন",
      "তারেক রহমানের নাম সঠিক উচ্চারণে ‘তারেক রহমান’ হিসেবে পরিবেশন করা হয়েছে"
    ],
    "keyPointsEn": [
      "Navbharat Times report highlights conditions set by BNP advisors regarding bilateral ties",
      "Extradition of Sheikh Hasina framed as a mandatory condition for full diplomatic reset",
      "Delhi strategic circles assessing political messaging from BNP's exile leadership",
      "Full editorial preservation of accurate Bengali nomenclature for Tarique Rahman"
    ],
    "category": "diplomacy",
    "categoryLabelBn": "কূটনীতি ও বৈদেশিক সম্পর্ক",
    "categoryLabelEn": "Diplomacy & Foreign Policy",
    "sentiment": "negative",
    "sentimentReasonBn": "নবভারত টাইমসের প্রতিবেদনে শেখ হাসিনার প্রত্যর্পণ দাবি ও ভারত-বাংলাদেশ দ্বিপাক্ষিক দরকষাকষির স্পর্শকাতর দিক উঠে এসেছে।",
    "sentimentReasonEn": "Navbharat Times details stringent political conditions and extradition demands impacting India-Bangladesh ties.",
    "source": {
      "name": "Navbharat Times",
      "bureau": "Delhi",
      "language": "Hindi",
      "originalUrl": "https://news.google.com/rss/articles/CBMiiwJBVV95cUxNdkFVdHh4OWRKNXFlV0dqRTRTSXhsdXRvVUYyamE5MU9JNDdoRkVTSnJjQW5CTkZ6MTdQVE9vdU5iTlFZZ0YzZ2J5OV9sZ2lHN01VS0pFUTFhaDhPM3BxZkctaFBTaVZMbFJJUnYxQUo2TDhXN0dyMzBpTjdkYnpkajgzU2YwUzBCMkpJQ2c1MzV1NTczSkFIei1SN2NwMW1xNHd5RDRGdlk4M2VVNVNrU09BLXBmd2ZFTDdYR1lGN1M3X2w5MmFCN3VQZGpoekpuZWFoVi1nQVNESXlWMmotSE5FWHoyeXJkaUh5MUJIZmJFVlhSNzlIcUVFZkhQOW1Wc3hTX0EwWXpmOXPSAZACQVVfeXFMTXVmOE1aanRaVGM5RUdpNTl2YnRwQ3lmVEFyVVBxMTQ4ZEE1LVV4R1NXQlpNYjZmRktRanVBWnc1cXNKVHRiUGRUUjlXYVBhUmVUd2JjWUVkbFIxN1Y1YjVhaGw5ZDE4b1BXOXVHaUNsdXJLQ04xSTZCX0d4WEZOR0ZyanB2cTI2a0JOalRPT21OZ1Vld01pN0lSUWFrbV9NY2NSM05wRTk0YkhTZHZKYlhCa0tXcjNPc1BJYmtrdkxpdmhybkNKWXA2Q1dIVHd1cl9CTG83YmRXaGdMcTByMll3TmY2RnVDc2tUOHExWGptTl9pLTNRbDl0VGphbktTVVdsU0ZPR2N2NDhScHVoa1g?oc=5",
      "originalHeadline": "'शेख हसीना को सौंपो तभी बांग्लादेश सुधारेगा रिश्ते', तारिक रहमान के 'भारत विरोधी' सलाहकार ने रखी शर्तें",
      "scannedAt": "2026-09-16T09:50:00.000Z"
    },
    "publishedAt": "2026-09-16T03:26:33.000Z",
    "readTimeBn": "৪ মিনিট পাঠ",
    "readTimeEn": "4 min read",
    "imageUrl": "/images/tarique-rahman-speech.jpg",
    "isLeadStory": false,
    "isTrending": true,
    "tags": [
      "Sheikh Hasina",
      "Tarique Rahman",
      "Navbharat Times",
      "Diplomacy",
      "Delhi Bureau",
      "Extradition",
      "BNP"
    ]
  },
  {
    "id": "news-20260916-003",
    "slug": "bbc-bengali-universal-pension-scheme-reforms-spouses-lifetime-benefits-dhaka",
    "title": "সর্বজনীন পেনশনে পরিবর্তন আসছে, আজীবন সুবিধা পাবেন স্বামী-স্ত্রী: বিবিসি বাংলা ও ভারতীয় প্রেস",
    "englishTitle": "Universal Pension Scheme Reforms: Spouses to Receive Lifetime Benefits, Reports BBC Bengali & Indian Media",
    "banglaTitle": "সর্বজনীন পেনশনে পরিবর্তন আসছে, আজীবন সুবিধা পাবেন স্বামী-স্ত্রী: বিবিসি বাংলা ও ভারতীয় প্রেস",
    "summaryBn": "বাংলাদেশ সরকারের সর্বজনীন পেনশন স্কিমে বড় ধরনের পরিবর্তনের প্রস্তাবনা তুলে ধরেছে বিবিসি বাংলা ও ভারতীয় সংবাদ মাধ্যমগুলো। নতুন প্রস্তাবে বলা হয়েছে, চাঁদা প্রদানকারী নাগরিকের মৃত্যুর পর স্বামী বা স্ত্রী আজীবন পেনশন সুবিধা ভোগ করতে পারবেন। ঢাকার অর্থনৈতিক খাত পুনর্গঠন ও সামাজিক নিরাপত্তা জোরদারে এই পদক্ষেপকে একটি গুরুত্বপূর্ণ অর্থনৈতিক সিদ্ধান্ত হিসেবে দেখা হচ্ছে।",
    "summaryEn": "Coverage by BBC Bengali and regional trade presses highlights upcoming structural modifications to Bangladesh's Universal Pension Scheme. Under the newly submitted policy framework, surviving spouses will be entitled to lifetime pension disbursements upon the contributor's demise, representing a key reform aimed at expanding social safety nets during financial transition.",
    "keyPointsBn": [
      "বিবিসি বাংলা পত্রিকার বিশ্লেষণে সর্বজনীন পেনশনে স্বামী-স্ত্রীর আজীবন সুবিধার প্রস্তাবনা",
      "অর্থনৈতিক পুনর্গঠন ও সামাজিক নিরাপত্তা পরিধি বৃদ্ধিতে ঢাকার নতুন নীতিমালার রূপরেখা",
      "ভারতের অর্থনৈতিক বিষয়ক সংবাদমাধ্যমে বাংলাদেশ অর্থনৈতিক সংস্কারের ইতিবাচক মূল্যায়ন",
      "দিল্লি অর্থনৈতিক ব্যুরো থেকে পরিবেশিত গুরুত্বপূর্ণ নীতিগত প্রতিবেদন"
    ],
    "keyPointsEn": [
      "BBC Bengali details proposed amendments granting surviving spouses lifetime pension benefits",
      "Structural reform designed to reinforce economic social safety nets in Bangladesh",
      "Favorable commentary across regional South Asian financial reporting desks",
      "Monitored by Delhi economics desk as a major domestic welfare policy development"
    ],
    "category": "economy",
    "categoryLabelBn": "অর্থনীতি ও ব্যাংকিং",
    "categoryLabelEn": "Economy & Governance",
    "sentiment": "positive",
    "sentimentReasonBn": "বিবিসি বাংলার প্রতিবেদনে সর্বজনীন পেনশনের সংস্কার ও সামাজিক নিরাপত্তাবেষ্টনী জোরদারের ইতিবাচক দিক তুলে ধরা হয়েছে।",
    "sentimentReasonEn": "BBC Bengali highlights progressive pension reforms strengthening economic social safety nets.",
    "source": {
      "name": "BBC Bengali",
      "bureau": "Delhi",
      "language": "Bengali",
      "originalUrl": "https://www.bbc.com/bengali/articles/ck3re1vx2l8ro",
      "originalHeadline": "পত্রিকা: 'সর্বজনীন পেনশনে পরিবর্তন আসছে, আজীবন সুবিধা পাবেন স্বামী-স্ত্রী'",
      "scannedAt": "2026-09-16T09:50:00.000Z"
    },
    "publishedAt": "2026-09-16T02:36:38.000Z",
    "readTimeBn": "৩ মিনিট পাঠ",
    "readTimeEn": "3 min read",
    "imageUrl": "/images/bank-bangladesh-economy.jpg",
    "isLeadStory": false,
    "isTrending": false,
    "tags": [
      "Universal Pension",
      "BBC Bengali",
      "Economy",
      "Delhi Bureau",
      "Dhaka",
      "Social Security"
    ]
  },
  {
    "id": "news-20260916-004",
    "slug": "youtube-video-sheikh-hasina-delhi-consultations-strategy-politics-tv",
    "title": "হাসিনার দিল্লি মিটিং এবং ফেরার ৩ প্ল্যান: ভারতীয় ইউটিউব ডিজিটাল রিপোর্টের আলোড়ন",
    "englishTitle": "Sheikh Hasina's Delhi Consultations & 3-Point Political Strategy: Indian YouTube News Dispatch",
    "banglaTitle": "হাসিনার দিল্লি মিটিং এবং ফেরার ৩ প্ল্যান: ভারতীয় ইউটিউব ডিজিটাল রিপোর্টের আলোড়ন",
    "summaryBn": "ভারতীয় ইউটিউব সংবাদ চ্যানেল 'পলিটিক্স টিভি' ও কলকাতা-ভিত্তিক ডিজিটাল মাধ্যমগুলোতে দিল্লির লতিয়েন্স জোনে বাংলাদেশ ইস্যুতে সাবেক প্রধানমন্ত্রী শেখ হাসিনার শীর্ষ রাজনৈতিক ও আইনি উপদেষ্টাদের বৈঠকের ওপর বিশেষ ভিডিও রিপোর্ট পরিবেশিত হয়েছে। এতে নির্বাসিত আওয়ামী লীগ নেতৃত্বের রাজনৈতিক পুনর্বাসন ও ওপার বাংলায় সংগঠিত হওয়ার ৩-দফা কৌশল নিয়ে বিশ্লেষণ করা হয়।",
    "summaryEn": "A widely viewed video dispatch on Indian digital YouTube news channel Politics TV examines alleged strategic consultations by exiled Awami League leaders in New Delhi. The report details three potential organizational pathways being discussed by party strategists regarding political regrouping and communication with cadres across Bangladesh.",
    "keyPointsBn": [
      "ইউটিউব পলিটিক্স টিভি ও কলকাতা ডিজিটাল প্রেসের যৌথ ভিডিও ডিসপ্যাচ",
      "দিল্লিতে শেখ হাসিনার রাজনৈতিক উপদেষ্টা পরিষদের ৩-দফা কৌশলগত বৈঠকের বিশ্লেষণ",
      "ইউটিউব ভিডিওটি সামাজিক মাধ্যমে ২ লক্ষাধিকবার দেখা হয়েছে ও ব্যাপক চর্চিত হচ্ছে",
      "ভিডিও রিপোর্ট ট্যাগ সহ ডিজিটাল সংবাদ আর্কাইভে সংরক্ষণ"
    ],
    "keyPointsEn": [
      "Indian YouTube digital video dispatch analyzing Sheikh Hasina's Delhi political strategy",
      "Outlines 3-point organizational plan being discussed among exile Awami League circles",
      "Amassed significant digital viewership across cross-border Bengali audiences",
      "Archived with YouTube Video tag and direct video dispatch metadata"
    ],
    "category": "politics",
    "categoryLabelBn": "রাজনীতি ও ডিজিটাল ভিডিও",
    "categoryLabelEn": "Politics & Video Reports",
    "sentiment": "neutral",
    "sentimentReasonBn": "ইউটিউব পলিটিক্স টিভির ভিডিও রিপোর্টে শেখ হাসিনার দিল্লি বৈঠকের রাজনৈতিক বিশ্লেষণ ও কৌশল উপস্থাপিত হয়েছে।",
    "sentimentReasonEn": "YouTube Politics TV video dispatch evaluates political scenarios regarding Sheikh Hasina's exile strategy in Delhi.",
    "source": {
      "name": "Politics Tv (YouTube)",
      "bureau": "Delhi",
      "language": "Bengali",
      "originalUrl": "https://news.google.com/rss/articles/CBMiVkFVX3lxTE9EOVRXeFpaQTdpVTlSM3pIUGx4ZHhSc3FuWG1JQXFMUDh5UXVGdzNlQUgwNFBKWjVLZmVHazFxSl9FWUV5Mnd2bkFyMUFWWFZQdWtyVGhn?oc=5",
      "originalHeadline": "হাসিনার দিল্লি মিটিং এবং ফেরার ৩ প্ল্যান | Sheikh Hasina | Politics Tv",
      "scannedAt": "2026-09-16T09:50:00.000Z"
    },
    "publishedAt": "2026-09-15T15:04:20.000Z",
    "readTimeBn": "ভিডিও রিপোর্ট",
    "readTimeEn": "Video Dispatch",
    "imageUrl": "/images/sheikh-hasina-delhi.jpg",
    "isLeadStory": false,
    "isTrending": true,
    "tags": [
      "YouTube Video",
      "ভিডিও রিপোর্ট",
      "Sheikh Hasina",
      "Delhi Consultations",
      "Awami League",
      "Politics Tv",
      "Kolkata"
    ]
  },
  {
    "id": "ig-001",
    "slug": "firstpost-instagram-chinmoy-krishna-das-minority-crisis-portrait",
    "title": "Chinmoy Krishna Das’ grief has become a haunting portrait of the crisis facing minorities in Bangladesh",
    "englishTitle": "Chinmoy Krishna Das’ grief has become a haunting portrait of the crisis facing minorities in Bangladesh",
    "banglaTitle": "বাংলাদেশে ধর্মীয় সংখ্যালঘুদের সংকটের এক বেদনার প্রতিচ্ছবি হয়ে দাঁড়িয়েছে চিন্ময় কৃষ্ণ দাসের শোক",
    "summaryBn": "ফার্স্টপোস্টের অফিশিয়াল ইনস্টাগ্রাম ডিসপ্যাচে প্রকাশিত এক প্রতিবেদনে জানানো হয়েছে, বাংলাদেশে বন্দি হিন্দু সন্ন্যাসী চিন্ময় কৃষ্ণ দাসের মায়ের শেষকৃত্যে তাঁর শোকগ্রস্ত কান্নার ছবি আন্তর্জাতিক অঙ্গনে আলোড়ন সৃষ্টি করেছে। এই ভিজ্যুয়াল ডিসপ্যাচটিতে তুলে ধরা হয় কীভাবে তাঁর পারিবারিক ট্র্যাজেডি বর্তমানে ওপার বাংলার সংখ্যালঘুদের নিরাপত্তাহীনতা ও মানবাধিকার উদ্বেগের এক গভীর প্রতীক হয়ে উঠেছে।",
    "summaryEn": "In an official visual dispatch posted on Firstpost's Instagram, the media network highlighted the haunting photograph of incarcerated Hindu monk Chinmoy Krishna Das weeping at his mother's funeral pyre. The report frames his grief as a poignant portrait of the escalating concerns surrounding religious minorities and human rights in post-August Bangladesh.",
    "keyPointsBn": [
      "ফার্স্টপোস্টের ইনস্টাগ্রাম ফটো জার্নালিজমে চিন্ময় কৃষ্ণ দাসের মায়ের শেষকৃত্যে প্যারোলের মুহূর্ত তুলে ধরা হয়েছে",
      "পোস্টটিতে ওপার বাংলার সংখ্যালঘু ধর্মীয় সম্প্রদায়ের বর্তমান উদ্বেগ ও নিরাপত্তা সংকট নিয়ে আলোকপাত করা হয়",
      "ইনস্টাগ্রাম পোস্টটি সামাজিক মাধ্যমে হাজার হাজার ব্যবহারকারীর মধ্যে শেয়ার ও আলোচিত হচ্ছে",
      "দিল্লি ব্যুরো থেকে পরিবেশিত এই ভিজ্যুয়াল ডিসপ্যাচটি আন্তর্জাতিক সম্প্রদায়ের মানবাধিকার নজরদারির প্রেক্ষাপট টানে"
    ],
    "keyPointsEn": [
      "Firstpost visual dispatch documents monk Chinmoy Krishna Das during his 5-hour parole for his mother's cremation",
      "The post captions highlight growing diplomatic and minority safety discussions concerning Bangladesh",
      "Extensive engagement across digital platforms reflecting cross-border humanitarian discourse",
      "Framed by the Delhi national desk as a crucial visual focal point in regional minority monitoring"
    ],
    "category": "diplomacy",
    "categoryLabelBn": "কূটনীতি ও দ্বিপাক্ষিক সম্পর্ক",
    "categoryLabelEn": "Diplomacy & Strategic Affairs",
    "sentiment": "negative",
    "sentimentReasonBn": "ফার্স্টপোস্টের ইনস্টাগ্রাম ডিসপ্যাচে বাংলাদেশে সংখ্যালঘুদের পরিস্থিতি ও চিন্ময় কৃষ্ণ দাসের পারিবারিক ট্র্যাজেডি সংক্রান্ত উদ্বেগ প্রকাশ পেয়েছে।",
    "sentimentReasonEn": "Firstpost Instagram visual dispatch focuses on the humanitarian concerns and legal situation of religious minorities in Bangladesh.",
    "source": {
      "name": "Firstpost (Instagram)",
      "bureau": "Delhi",
      "language": "English",
      "originalUrl": "https://www.instagram.com/firstpost/",
      "originalHeadline": "Chinmoy Krishna Das’ grief has become a haunting portrait of the crisis facing minorities in Bangladesh | #FirstpostNews - instagram.com",
      "scannedAt": "2026-09-15T07:15:00.000Z"
    },
    "publishedAt": "2026-09-14T18:30:00.000Z",
    "readTimeBn": "১ মিনিট পোস্ট",
    "readTimeEn": "1 min read",
    "imageUrl": "/images/chinmoy-krishna-das.jpg",
    "tags": [
      "Instagram Post",
      "Visual Journalism",
      "Firstpost",
      "Chinmoy Krishna Das",
      "Minorities in Bangladesh",
      "Delhi Bureau",
      "#FirstpostNews",
      "#BangladeshNews"
    ],
    "isLeadStory": false,
    "isTrending": true
  },
  {
    "id": "ig-002",
    "slug": "the-wall-instagram-chinmoy-krishna-parole-mother-cremation-kolkata",
    "title": "মায়ের শেষকৃত্যে ৫ ঘণ্টার প্যারোল, চন্দনকাঠের আগুনে হাতজোড় করে দাঁড়িয়ে চিন্ময় কৃষ্ণ দাস",
    "englishTitle": "5-Hour Parole at Mother's Cremation: Chinmoy Krishna Das Stands with Folded Hands Before the Pyre",
    "banglaTitle": "মায়ের শেষকৃত্যে ৫ ঘণ্টার প্যারোল, চন্দনকাঠের আগুনে হাতজোড় করে দাঁড়িয়ে চিন্ময় কৃষ্ণ দাস",
    "summaryBn": "কলকাতার জনপ্রিয় ডিজিটাল সংবাদমাধ্যম 'দ্য ওয়াল'-এর ইনস্টাগ্রাম হ্যান্ডেলে প্রকাশিত ফটো ডিসপ্যাচে চট্টগ্রামের বলুয়ারদীঘি মহাশ্মশানে চিন্ময় কৃষ্ণ দাসের উপস্থিতির ছবি তুলে ধরা হয়েছে। মা পদ্মা দেবী মুখার্জির চিতার সামনে পুলিশি পাহারায় অশ্রুসজল চোখে হাতজোড় করা এই চিত্রটি দুই বাংলার নেটিজেনদের মনে গভীর আবেগ ও আলোচনার জন্ম দিয়েছে।",
    "summaryEn": "A visual news dispatch on the Instagram page of Kolkata-based digital outlet 'The Wall' depicts monk Chinmoy Krishna Das at the Baluardighi crematorium in Chattogram. Accompanied by stringent security under 5-hour parole, the somber visual of him standing tearfully before his mother Padma Devi Mukherjee's pyre has triggered widespread commentary across West Bengal.",
    "keyPointsBn": [
      "দ্য ওয়াল-এর ইনস্টাগ্রাম ডিসপ্যাচে বলুয়ারদীঘি মহাশ্মশানে মায়ের চিতার সামনে চিন্ময় কৃষ্ণের শোকস্তব্ধ মুহূর্ত",
      "আদালত মঞ্জুর করেছিল মাত্র পাঁচ ঘণ্টার বিশেষ মানবিক প্যারোল",
      "পশ্চিমবঙ্গের রাজনৈতিক ও সামাজিক মহলে এই পোস্টকে কেন্দ্র করে নতুন করে আলোচনা শুরু হয়েছে",
      "কলকাতা প্রেস ডেস্কের বিশ্লেষণে উঠে এসেছে দুই বাংলার সাংস্কৃতিক ও আবেগীয় সংযোগের দিকটি"
    ],
    "keyPointsEn": [
      "The Wall's Instagram visual capture of monk Chinmoy Krishna Das at Chattogram's crematorium",
      "Court had granted a brief 5-hour humanitarian parole under strict escort",
      "Has resonated intensely among readers across Kolkata and West Bengal civil society",
      "Highlighted by Kolkata desk as an emotional cross-border narrative touchpoint"
    ],
    "category": "culture",
    "categoryLabelBn": "সংস্কৃতি ও সমাজ",
    "categoryLabelEn": "Culture & Society",
    "sentiment": "negative",
    "sentimentReasonBn": "দ্য ওয়াল-এর ইনস্টাগ্রাম প্রতিবেদনে চিন্ময় কৃষ্ণ দাসের মায়ের শেষকৃত্য ও বন্দিদশার মানবিক দিকটি তুলে ধরা হয়েছে।",
    "sentimentReasonEn": "The Wall Instagram post highlights the humanitarian distress of monk Chinmoy Krishna Das attending his mother's funeral under guard.",
    "source": {
      "name": "The Wall (Instagram)",
      "bureau": "Kolkata",
      "language": "Bengali",
      "originalUrl": "https://www.instagram.com/thewall_bangla/",
      "originalHeadline": "মায়ের শেষকৃত্যে ৫ ঘণ্টার প্যারোল, চন্দনকাঠের আগুনে হাতজোড় করে দাঁড়িয়ে চিন্ময় কৃষ্ণ দাস | #TheWallNews",
      "scannedAt": "2026-09-15T07:18:00.000Z"
    },
    "publishedAt": "2026-09-14T14:45:00.000Z",
    "readTimeBn": "১ মিনিট পোস্ট",
    "readTimeEn": "1 min read",
    "imageUrl": "/images/chinmoy-krishna-das.jpg",
    "tags": [
      "Instagram Post",
      "Visual Journalism",
      "The Wall",
      "কলকাতা",
      "Kolkata Bureau",
      "চিন্ময় কৃষ্ণ দাস",
      "ওপার বাংলা",
      "#TheWall"
    ],
    "isLeadStory": false,
    "isTrending": true
  },
  {
    "id": "ig-003",
    "slug": "india-today-newsmo-instagram-uno-reverse-hilsa-export-bangladesh",
    "title": "UNO Reverse: India is now exporting Hilsa fish to Bangladesh as supply shortages hit Dhaka markets",
    "englishTitle": "UNO Reverse: India is now exporting Hilsa fish to Bangladesh as supply shortages hit Dhaka markets",
    "banglaTitle": "ইউএনও রিভার্স: ঢাকার বাজারে সরবরাহ সংকটে এবার ভারত থেকে বাংলাদেশে ইলিশ রপ্তানি শুরু",
    "summaryBn": "ইন্ডিয়া টুডে ও নিউজমো-র ইনস্টাগ্রাম ইনফোগ্রাফিক্সে তুলে ধরা হয়েছে এক কৌতূহলোদ্দীপক বাণিজ্যিক পরিবর্তন। সাধারণত বাংলাদেশ থেকে ভারতে পদ্মার ইলিশ রপ্তানি হয়ে আসলেও, এবার ঢাকার বাজারে সংকট মেটাতে ও দাম নিয়ন্ত্রণে রাখতে ভারত থেকেই পদ্মার স্বাদের ইলিশ মাছ রপ্তানি হচ্ছে বাংলাদেশে। সামাজিক মাধ্যমে এটি 'UNO Reverse' শিরোনামে ভাইরাল হয়েছে।",
    "summaryEn": "An eye-catching visual infographic and carousel post on India Today's NewsMo Instagram showcases an ironic shift in bilateral trade dynamics: traditionally Bangladesh exports prized Padma Hilsa to Kolkata, but current supply constraints in Dhaka markets have led to fish consignments being exported from India to Bangladesh, labeled playfully as a 'UNO reverse'.",
    "keyPointsBn": [
      "ইন্ডিয়া টুডে নিউজমো-র ইনস্টাগ্রাম পোস্টে ভারত থেকে বাংলাদেশে ইলিশ মাছের চালান যাওয়ার তথ্যচিত্র",
      "সাধারণত দুর্গাপূজায় ভারতে ইলিশ পাঠানোর ঐতিহ্য থাকলেও এবার উল্টো প্রবাহ লক্ষ্য করা যাচ্ছে",
      "সীমান্ত বাণিজ্য ও খাদ্যদ্রব্য সরবরাহে দ্বিপাক্ষিক নির্ভরতার এক ইতিবাচক ও কৌতূহলোদ্দীপক দৃষ্টান্ত",
      "ইনস্টাগ্রামে পোস্টটি তরুণ প্রজন্মের মধ্যে দারুণ সাড়া ফেলেছে"
    ],
    "keyPointsEn": [
      "India Today NewsMo Instagram post charts the reverse flow of Hilsa consignments into Bangladesh",
      "A reversal of the traditional seasonal export of Padma Hilsa towards West Bengal",
      "Exemplifies pragmatism and mutual dependency in cross-border food commerce",
      "Gained significant social buzz and engagement across bilateral digital communities"
    ],
    "category": "trade",
    "categoryLabelBn": "বাণিজ্য ও শুল্ক",
    "categoryLabelEn": "Cross-Border Trade",
    "sentiment": "positive",
    "sentimentReasonBn": "ইন্ডিয়া টুডের ইনস্টাগ্রাম পোস্টে খাদ্যপণ্য আদান-প্রদান ও দ্বিপাক্ষিক বাণিজ্যের এক কৌতূহলোদ্দীপক ইতিবাচক দিক উঠে এসেছে।",
    "sentimentReasonEn": "India Today Instagram visual outlines pragmatic cross-border fish trade easing supply crunches in Dhaka.",
    "source": {
      "name": "India Today (Instagram)",
      "bureau": "Delhi",
      "language": "English",
      "originalUrl": "https://www.instagram.com/indiatoday/",
      "originalHeadline": "UNO reverse: India is now sending hilsa to Bangladesh | #IndiaToday #NewsMo",
      "scannedAt": "2026-09-15T07:20:00.000Z"
    },
    "publishedAt": "2026-09-14T11:20:00.000Z",
    "readTimeBn": "১ মিনিট পোস্ট",
    "readTimeEn": "1 min read",
    "imageUrl": "/images/hilsa-fish-market-trade.jpg",
    "tags": [
      "Instagram Post",
      "Visual Journalism",
      "India Today",
      "Hilsa Fish",
      "Trade",
      "Delhi Bureau",
      "#IndiaToday",
      "#NewsMo"
    ],
    "isLeadStory": false,
    "isTrending": true
  },
  {
    "id": "ig-004",
    "slug": "ei-samay-instagram-petrapole-benapole-border-trucks-customs-meeting",
    "title": "পেট্রাপোল-বেনাপোল সীমান্তে আটকে থাকা ট্রাক চলাচল স্বাভাবিক করার বিষয়ে বৈঠক, আশ্বাস কলকাতা শুল্ক বিভাগের",
    "englishTitle": "Meeting held to normalize movement of stranded trucks at Petrapole-Benapole border; Kolkata Customs gives assurance",
    "banglaTitle": "পেট্রাপোল-বেনাপোল সীমান্তে আটকে থাকা ট্রাক চলাচল স্বাভাবিক করার বিষয়ে বৈঠক, আশ্বাস কলকাতা শুল্ক বিভাগের",
    "summaryBn": "এই সময় সংবাদপত্রের অফিশিয়াল ইনস্টাগ্রাম পেজে প্রকাশিত সীমান্ত বাণিজ্য বিষয়ক ফটো আপডেটে জানানো হয়েছে, পেট্রাপোল-বেনাপোল ইন্টিগ্রেটেড চেকপোস্টে (ICP) পণ্যবাহী ট্রাকের দীর্ঘ জট কমাতে দুই দেশের কর্মকর্তাদের বিশেষ বৈঠক অনুষ্ঠিত হয়েছে। দ্রুত কাস্টমস ক্লিয়ারেন্স ও কাঁচামাল ছাড়ের বিষয়ে ইতিবাচক বার্তা দেওয়া হয়েছে।",
    "summaryEn": "An Instagram visual update from Ei Samay's verified social desk reports on high-level customs coordination at the Petrapole-Benapole Integrated Check Post (ICP) to ease long queues of stranded cargo trucks. Kolkata and Benapole customs officials discussed expedited clearances for essential perishable commodities.",
    "keyPointsBn": [
      "এই সময় ইনস্টাগ্রাম হ্যান্ডেলে পেট্রাপোল সীমান্তে আটকে থাকা ট্রাক চলাচলের ছবি ও তথ্য প্রকাশ",
      "কলকাতা শুল্ক বিভাগ ও পেট্রাপোল ল্যান্ড পোর্ট অথরিটির জরুরি বৈঠক",
      "দ্রুত ক্লিয়ারেন্স দিয়ে দ্বিপাক্ষিক বাণিজ্য স্বাভাবিক রাখার বার্তা",
      "দুই দেশের আমদানিকারক ও রপ্তানিকারকদের উদ্বেগের অবসান ঘটানোর উদ্যোগ"
    ],
    "keyPointsEn": [
      "Ei Samay Instagram dispatch documents cargo truck congestion easing at Petrapole border",
      "Emergency meeting between Kolkata Customs and Land Port authorities",
      "Commitment to expedite clearance of perishables and industrial raw goods",
      "Direct positive impact on cross-border logistics and merchant confidence"
    ],
    "category": "trade",
    "categoryLabelBn": "বাণিজ্য ও শুল্ক",
    "categoryLabelEn": "Cross-Border Trade",
    "sentiment": "neutral",
    "sentimentReasonBn": "এই সময় ইনস্টাগ্রামে সীমান্তে পণ্যবাহী ট্রাকের গতিবিধি ও শুল্ক বিভাগের সমন্বয় সংক্রান্ত তথ্য তুলে ধরা হয়েছে।",
    "sentimentReasonEn": "Ei Samay Instagram dispatch neutrally reports on customs logistics and cross-border transport coordination.",
    "source": {
      "name": "Ei Samay (Instagram)",
      "bureau": "Kolkata",
      "language": "Bengali",
      "originalUrl": "https://www.instagram.com/eisamay.digital/",
      "originalHeadline": "পেট্রাপোল-বেনাপোল সীমান্তে আটকে থাকা ট্রাক চলাচল স্বাভাবিক করার বিষয়ে বৈঠক | #EiSamay",
      "scannedAt": "2026-09-15T07:22:00.000Z"
    },
    "publishedAt": "2026-09-14T09:15:00.000Z",
    "readTimeBn": "১ মিনিট পোস্ট",
    "readTimeEn": "1 min read",
    "imageUrl": "/images/bangladesh-ministry-of-foreign-affairs.jpg",
    "tags": [
      "Instagram Post",
      "Visual Journalism",
      "Ei Samay",
      "পেট্রাপোল",
      "Kolkata Bureau",
      "Cross-Border Trade",
      "#EiSamay",
      "#Petrapole"
    ],
    "isLeadStory": false,
    "isTrending": false
  },
  {
    "id": "44",
    "slug": "bnt-bangla-suvendu-adhikari-opar-bangla-mother-refugee-chinmoy-krishna",
    "title": "আমার মাকে এক কাপড়ে ওপার বাংলা থেকে পালিয়ে আসতে হয়েছিল শুধু হিন্দু বলে: শুভেন্দু অধিকারী",
    "englishTitle": "'My Mother Had to Flee Opar Bangla in a Single Cloth Just Because She Was Hindu': Suvendu Adhikari on Bangladesh Crisis",
    "banglaTitle": "‘আমার মাকে এক কাপড়ে ওপার বাংলা থেকে পালিয়ে আসতে হয়েছিল শুধু হিন্দু বলে’: শুভেন্দু অধিকারী",
    "summaryBn": "বিএনটি বাংলা নিউজের ভিডিও প্রতিবেদনে পশ্চিমবঙ্গের বিরোধী দলনেতা শুভেন্দু অধিকারীর একটি আবেগঘন রাজনৈতিক বক্তব্য প্রকাশিত হয়েছে। নিউ টাউনে দেওয়া ওই ভাষণে তিনি জানান, বিভীষিকাময় দেশভাগের শিকার হয়ে শুধু হিন্দু হওয়ার কারণে তাঁর মাকেও এক কাপড়ে ওপার বাংলা (বরিশাল) থেকে পালিয়ে আসতে হয়েছিল। বাংলাদেশে ইসকন সন্ন্যাসী চিন্ময় কৃষ্ণ দাসের মায়ের শেষকৃত্যে প্যারোলে মুক্তি ও তাঁর কান্নার দৃশ্য তুলে ধরে তিনি বলেন, শ্যামাপ্রসাদ মুখোপাধ্যায়ের নেতৃত্বে ভারতভুক্তি না হলে পশ্চিমবঙ্গের হিন্দুদেরও আজ একই পরিণতি বরণ করতে হতো।",
    "summaryEn": "In a video report broadcast by BNT Bangla News, West Bengal Opposition Leader Suvendu Adhikari recounted his family's refugee history during the Partition, stating that his mother had to flee Opar Bangla (Barishal) in a single cloth solely for being Hindu. Linking his personal memory to the ongoing crisis in Bangladesh and the grief of incarcerated monk Chinmoy Krishna Das at his mother's funeral in Chattogram, Adhikari asserted that Syama Prasad Mookerjee's movement safeguarded Bengali Hindus in West Bengal from a similar fate.",
    "keyPointsBn": [
      "বিএনটি বাংলা নিউজের ভিডিওতে শুভেন্দু অধিকারী জানান, দেশভাগের সময় তাঁর মাকেও এক কাপড়ে ওপার বাংলা (বরিশাল) থেকে পালিয়ে ভারতে আসতে হয়েছিল",
      "বাংলাদেশে সন্ন্যাসী চিন্ময় কৃষ্ণ দাসের মায়ের শেষকৃত্যে ৫ ঘণ্টার প্যারোলে কান্না ও বন্দিদশার প্রসঙ্গ টেনে তীব্র ক্ষোভ প্রকাশ করেন",
      "তিনি দাবি করেন, শ্যামাপ্রসাদ মুখোপাধ্যায় না থাকলে এ পারের হিন্দু বাঙালিদেরও আজ ওপার বাংলার মতো নিপীড়নের মুখে পড়তে হতো",
      "সামাজিক যোগাযোগমাধ্যম ও ইউটিউবে ছড়িয়ে পড়া এই ভিডিও পশ্চিমবঙ্গে ব্যাপক রাজনৈতিক আলোচনার জন্ম দিয়েছে"
    ],
    "keyPointsEn": [
      "In the BNT Bangla News dispatch, Suvendu Adhikari recounted his mother's forced flight from East Bengal in a single cloth during Partition",
      "He expressed deep anguish over monk Chinmoy Krishna Das weeping during his 5-hour parole for his mother's cremation in Chattogram",
      "Adhikari asserted that Syama Prasad Mookerjee's legacy prevented West Bengal's Hindus from suffering the same vulnerability",
      "The video dispatch has circulated extensively across Bengali digital news media and YouTube platforms"
    ],
    "category": "politics",
    "categoryLabelBn": "রাজনীতি ও নির্বাচন",
    "categoryLabelEn": "Politics & Governance",
    "sentiment": "negative",
    "sentimentReasonBn": "বিএনটি বাংলা নিউজের ভিডিও প্রতিবেদনে শুভেন্দু অধিকারীর ওপার বাংলা সংক্রান্ত পারিবারিক দেশভাগের ইতিহাস ও বর্তমান বাংলাদেশের পরিস্থিতি নিয়ে বক্তব্য প্রকাশিত হয়েছে।",
    "sentimentReasonEn": "BNT Bangla News video dispatch captures West Bengal Opposition Leader Suvendu Adhikari's address recounting his family's refugee history from East Bengal and current developments concerning Bangladeshi minorities.",
    "source": {
      "name": "BNT Bangla News (YouTube)",
      "bureau": "Kolkata",
      "language": "Bengali",
      "originalUrl": "https://www.youtube.com/watch?v=0WrRFhIezuc",
      "originalHeadline": "আমার মাকে এক কাপড়ে ওপার বাংলা থেকে পালিয়ে আসতে হয়েছে শুধু হিন্দু বলে।শুভেন্দু অধিকারী #BJPbengal",
      "scannedAt": "2026-09-15T06:42:00.000Z"
    },
    "publishedAt": "2026-09-12T16:10:26.000Z",
    "readTimeBn": "২ মিনিট ভিডিও",
    "readTimeEn": "2 min video",
    "imageUrl": "https://i.ytimg.com/vi/0WrRFhIezuc/hqdefault.jpg",
    "tags": [
      "YouTube Video",
      "ভিডিও রিপোর্ট",
      "ওপার বাংলা",
      "Opar Bangla",
      "Suvendu Adhikari",
      "শুভেন্দু অধিকারী",
      "Chinmoy Krishna Das",
      "চিন্ময় কৃষ্ণ দাস",
      "BNT Bangla News",
      "Kolkata Bureau"
    ],
    "isLeadStory": false,
    "isTrending": true
  },
  {
    "id": "43",
    "slug": "ei-samay-suvendu-adhikari-chinmoy-krishna-bangladesh-hindus",
    "title": "‘হিন্দু বাঙালিদের অবস্থা হতে পারত চিন্ময়কৃষ্ণের মতো’: শুভেন্দু অধিকারী",
    "englishTitle": "'Condition of Hindu Bengalis Could Have Been Like Chinmoy Krishna': Suvendu Adhikari on Bangladesh Crisis",
    "banglaTitle": "‘হিন্দু বাঙালিদের অবস্থা হতে পারত চিন্ময়কৃষ্ণের মতো’: বাংলাদেশে পরিস্থিতি নিয়ে সরব শুভেন্দু অধিকারী",
    "summaryBn": "কলকাতার নিউ টাউনে গণেশ পুজোর উদ্বোধনী অনুষ্ঠানে পশ্চিমবঙ্গের বিরোধী দলনেতা শুভেন্দু অধিকারী বাংলাদেশে চিন্ময় কৃষ্ণ দাসের কারাবন্দিত্ব এবং তাঁর মায়ের শেষকৃত্যে কান্নায় ভেঙে পড়ার প্রসঙ্গ টেনে তীব্র প্রতিক্রিয়া ব্যক্ত করেছেন। তিনি বলেন, দেশভাগের সময় শ্যামাপ্রসাদ মুখোপাধ্যায় ও স্বামী প্রণবানন্দ মহারাজের লড়াই না থাকলে এ পারের হিন্দু বাঙালিদের অবস্থাও আজ চিন্ময়কৃষ্ণের মতো হতো। তিনি নিজের পরিবারের বরিশাল থেকে দেশত্যাগের স্মৃতি তুলে ধরে ওপার বাংলার হিন্দুদের পাশে দাঁড়ানোর আহ্বান জানান। অন্যদিকে সিপিএম ও বিরোধী দলগুলো বিজেপির এই অবস্থানকে বিভাজনের রাজনীতি হিসেবে চিহ্নিত করেছে।",
    "summaryEn": "Speaking at a Ganesh Puja inauguration in New Town, Kolkata, West Bengal Opposition Leader Suvendu Adhikari invoked the ongoing incarceration of Hindu monk Chinmoy Krishna Das in Bangladesh and his breakdown during his mother's funeral in Chattogram. Adhikari asserted that had it not been for Syama Prasad Mookerjee and Swami Pranavananda fighting to keep West Bengal within India during Partition, Hindu Bengalis in West Bengal would have faced a similar fate. Invoking his own family's displacement from Barishal, he called for cultural awakening, while Left leaders criticized his statements as communal polarization.",
    "keyPointsBn": [
      "কলকাতার নিউ টাউনে শুভেন্দু অধিকারী বলেন, ওপার বাংলার চিন্ময় প্রভুর চোখের জল বিশ্বজুড়ে সনাতনীদের হৃদয় নাড়িয়ে দিয়েছে",
      "তিনি দাবি করেন, শ্যামাপ্রসাদ মুখোপাধ্যায়ের লড়াইয়ের কারণেই পশ্চিমবঙ্গ ভারতের অংশ হয়েছিল, নতুবা এখানকার হিন্দুদের পরিণতিও একই হতো",
      "দেশভাগের স্মৃতিচারণ করে তিনি জানান, হিন্দু হওয়ার কারণেই তাঁর নিজের পরিবারকেও বরিশাল থেকে ভারতে আশ্রয় নিতে হয়েছিল",
      "সিপিএম নেতা কলতান দাশগুপ্ত ও আইএসএফ বিধায়ক নওশাদ সিদ্দিকি এই বক্তব্যের পাল্টায় মানবাধিকার ও রাজনৈতিক দ্বিমুখীনতার অভিযোগ তুলেছেন"
    ],
    "keyPointsEn": [
      "Suvendu Adhikari stated in Kolkata that Chinmoy Krishna Das's tears at his mother's funeral moved the conscience of millions across the region",
      "He asserted that Syama Prasad Mookerjee's Partition-era movement prevented West Bengal from suffering the current fate of Bangladeshi minorities",
      "Adhikari shared his family's personal trauma during Partition, recalling his mother's forced migration from Barishal",
      "Opposition politicians including CPIM's Kaltan Dasgupta and ISF MLA Naushad Siddiqui debated the human rights and political dimensions of the remarks"
    ],
    "category": "politics",
    "categoryLabelBn": "রাজনীতি ও নির্বাচন",
    "categoryLabelEn": "Politics & Governance",
    "sentiment": "negative",
    "sentimentReasonBn": "এই সময় পশ্চিমবঙ্গের রাজনীতিতে বাংলাদেশের সংখ্যালঘু ইস্যু, চিন্ময় কৃষ্ণ দাসের বন্দিত্ব এবং দেশভাগের স্মৃতি নিয়ে শুভেন্দু অধিকারীর আক্রমণাত্মক বক্তব্য বিশ্লেষণ করেছে।",
    "sentimentReasonEn": "Ei Samay covers West Bengal Opposition Leader Suvendu Adhikari's sharp political rhetoric linking the plight of Bangladesh minorities and Chinmoy Krishna Das to Partition politics.",
    "source": {
      "name": "Ei Samay",
      "bureau": "Kolkata",
      "language": "Bengali",
      "originalUrl": "https://eisamay.com/west-bengal-news/kolkata-news/cm-suvendu-adhikari-reaction-over-bangladesh-chinmay-krishna-current-situation/200541925.cms",
      "originalHeadline": "‘হিন্দু বাঙালিদের অবস্থা হতে পারত চিন্ময়কৃষ্ণের মতো’, সরব মুখ্যমন্ত্রী",
      "scannedAt": "2026-09-15T06:35:00.000Z"
    },
    "publishedAt": "2026-09-13T08:05:03+05:30",
    "readTimeBn": "৩ মিনিট",
    "readTimeEn": "3 min read",
    "imageUrl": "/images/suvendu-adhikari-chinmoy-bangladesh.jpg",
    "tags": [
      "Ei Samay",
      "এই সময়",
      "Chinmoy Krishna Das",
      "চিন্ময় কৃষ্ণ দাস",
      "Suvendu Adhikari",
      "শুভেন্দু অধিকারী",
      "Kolkata",
      "Bangladesh Minorities",
      "West Bengal Politics",
      "Syama Prasad Mookerjee",
      "ওপার বাংলা",
      "Opar Bangla"
    ],
    "isLeadStory": false,
    "isTrending": true
  },
  {
    "id": "38",
    "slug": "dhaka-tribunal-verdict-obaidul-quader-seven-awami-league-leaders",
    "title": "হাসিনা ফেরার আগে কাদের-সহ ৭ লিগ নেতার বিরুদ্ধে আজ রায় ঘোষণা করবে ঢাকার ট্রাইবুনাল",
    "englishTitle": "Dhaka Tribunal Set to Deliver Verdict on 7 Awami League Leaders Including Obaidul Quader Ahead of Hasina's Return",
    "banglaTitle": "হাসিনা ফেরার আগে কাদের-সহ ৭ লিগ নেতার বিরুদ্ধে আজ রায় ঘোষণা করবে ঢাকার ট্রাইবুনাল",
    "summaryBn": "আওয়ামী লীগের সাধারণ সম্পাদক ওবায়দুল কাদেরসহ দলটির শীর্ষ সাত নেতার বিরুদ্ধে দায়েরকৃত মানবতাবিরোধী অপরাধের মামলায় আজ মঙ্গলবার আন্তর্জাতিক অপরাধ ট্রাইব্যুনাল-২ রায় ঘোষণা করতে চলেছে। ২০২৪ সালের জুলাই-আগস্টের ছাত্র আন্দোলন দমনে হত্যার উসকানি ও পরিকল্পনার অভিযোগে অভিযুক্ত এই সাত নেতার সকলেই বর্তমানে পলাতক। রাষ্ট্রপক্ষ আসামিদের সর্বোচ্চ শাস্তির আবেদন জানিয়েছে, অন্যদিকে আওয়ামী লীগ এই বিচার প্রক্রিয়াকে রাজনৈতিক প্রতিহিংসা ও নেতাকর্মীদের মনোবল ভাঙার চক্রান্ত হিসেবে আখ্যা দিয়েছে।",
    "summaryEn": "Dhaka's International Crimes Tribunal-2 (ICT-2) is set to deliver its verdict on Tuesday against seven senior Awami League leaders, including General Secretary Obaidul Quader, on charges of crimes against humanity linked to the suppression of the July-August 2024 student uprising. With all seven accused currently absconding, the prosecution has sought capital punishment and asset confiscation, while the Awami League condemned the proceedings as politically motivated vengeance aimed at demoralizing party cadres.",
    "keyPointsBn": [
      "বিচারপতি মো. নজরুল ইসলাম চৌধুরীর নেতৃত্বাধীন তিন সদস্যের আন্তর্জাতিক অপরাধ ট্রাইব্যুনাল-২ ওবায়দুল কাদেরসহ সাত নেতার রায় ঘোষণা করবে",
      "অভিযুক্তদের মধ্যে রয়েছেন আ ফ ম বাহাউদ্দিন নাছিম, মোহাম্মদ আলী আরাফাত, শেখ ফজলে শামস পরশ, মাইনুল হোসেন খান নিখিল, সাদ্দাম হোসেন ও শেখ ওয়ালী আসিফ ইনান",
      "রাষ্ট্রপক্ষ জুলাই অভ্যুত্থানে গণহত্যার মদদ ও উসকানির অভিযোগে আসামিদের সর্বোচ্চ শাস্তি এবং সম্পত্তি বাজেয়াপ্তের আবেদন জানিয়েছে",
      "আওয়ামী লীগের পক্ষ থেকে বলা হয়েছে, শীর্ষ নেতাদের মনোবল ভাঙতে তড়িঘড়ি করে একপাক্ষিক ও অসত্য মামলায় এই রায় চাপিয়ে দেওয়া হচ্ছে"
    ],
    "keyPointsEn": [
      "A three-member bench of ICT-2 headed by Justice Md Nazrul Islam Chowdhury will deliver the judgment against Obaidul Quader and six other leaders",
      "The co-accused include AFM Bahauddin Nasim, Mohammad Ali Arafat, Sheikh Fazle Shams Parash, Mainul Hossain Khan Nikhil, Saddam Hussain, and Sheikh Wali Asif Inan",
      "Prosecutors charged the leaders with commanding violent crackdowns and inciting deadly violence against civilian demonstrators, demanding maximum penalty",
      "The Awami League dismissed the allegations as completely fabricated and politically orchestrated to fracture the party's remaining leadership"
    ],
    "category": "politics",
    "categoryLabelBn": "রাজনীতি ও নির্বাচন",
    "categoryLabelEn": "Politics & Governance",
    "sentiment": "neutral",
    "sentimentReasonBn": "কলকাতার দ্য ওয়াল ঢাকার আন্তর্জাতিক অপরাধ ট্রাইব্যুনালের বিচারিক পর্যায়, প্রসিকিউশনের দাবি এবং আওয়ামী লীগের প্রতিক্রিয়া ভারসাম্যপূর্ণভাবে প্রতিবেদন করেছে।",
    "sentimentReasonEn": "Kolkata's The Wall delivers a factual and balanced report covering ICT proceedings, prosecution demands, and the Awami League's counter-allegations.",
    "source": {
      "name": "The Wall",
      "bureau": "Kolkata",
      "language": "Bengali",
      "originalUrl": "https://www.thewall.in/bangladesh/dhaka-tribunal-verdict-against-seven-awami-league-leaders-before-hasinas-return/tid/204850",
      "originalHeadline": "হাসিনা ফেরার আগে কাদের-সহ ৭ লিগ নেতার বিরুদ্ধে মঙ্গলবার সাজা‌ ঘোষণা করবে ঢাকার ট্রাইবুনাল",
      "scannedAt": "2026-09-15T05:25:00.000Z"
    },
    "publishedAt": "2026-09-15T05:19:00.000Z",
    "readTimeBn": "৩ মিনিট",
    "readTimeEn": "3 min read",
    "imageUrl": "/images/international-crimes-tribunal-dhaka.jpg",
    "tags": [
      "Awami League",
      "আওয়ামী লীগ",
      "Obaidul Quader",
      "ওবায়দুল কাদের",
      "International Crimes Tribunal",
      "Sheikh Hasina",
      "শেখ হাসিনা",
      "ICT Dhaka",
      "July Uprising"
    ],
    "isLeadStory": true,
    "isTrending": true
  },
  {
    "id": "39",
    "slug": "delhi-dilemma-dhaka-ict-tribunal-verdicts-extradition-treaty",
    "title": "ঢাকায় কাদেরসহ শীর্ষ নেতাদের ট্রাইব্যুনাল রায়: নয়াদিল্লির উপর প্রত্যর্পণ চুক্তির কূটনৈতিক চাপ",
    "englishTitle": "Dhaka Tribunal Rulings on Quader and AL Brass: Delhi Faces Mounting Diplomatic Heat over Extradition Treaty",
    "banglaTitle": "ঢাকায় কাদেরসহ শীর্ষ নেতাদের ট্রাইব্যুনাল রায়: নয়াদিল্লির উপর প্রত্যর্পণ চুক্তির কূটনৈতিক চাপ",
    "summaryBn": "আন্তর্জাতিক অপরাধ ট্রাইব্যুনালে আওয়ামী লীগের সাধারণ সম্পাদক ওবায়দুল কাদের ও শীর্ষ নেতাদের বিরুদ্ধে বিচার কার্যক্রম শেষ পর্যায়ে পৌঁছানোয় নয়াদিল্লির ওপর ঢাকার কূটনৈতিক চাপ তীব্রতর হচ্ছে। ভারত-বাংলাদেশ ২০১৩ সালের প্রত্যর্পণ চুক্তির অধীনে শেখ হাসিনাসহ পলাতক নেতাদের হস্তান্তরের দাবি তোলা হলেও, ভারতীয় নীতি নির্ধারকরা বিচার প্রক্রিয়ার আন্তর্জাতিক মানদণ্ড ও ভূরাজনৈতিক প্রভাবের দিকটি গভীরভাবে পর্যবেক্ষণ করছেন।",
    "summaryEn": "As Bangladesh's International Crimes Tribunal accelerates verdicts against Awami League General Secretary Obaidul Quader and senior party stalwarts, New Delhi faces mounting diplomatic demands from Dhaka invoking the 2013 bilateral Extradition Treaty. While Dhaka presses for the transfer of exiled leaders including Sheikh Hasina, Indian policymakers are scrutinizing legal safeguards and geopolitical fallout.",
    "keyPointsBn": [
      "ঢাকায় ট্রাইব্যুনাল রায় ঘোষণার সাথে সাথে বাংলাদেশে অবস্থানরত ভারতীয় হাই কমিশনের মাধ্যমে দ্বিপাক্ষিক যোগাযোগ নিবিড় করা হয়েছে",
      "২০১৩ সালের প্রত্যর্পণ চুক্তির রাজনৈতিক ধারা এবং অপরাধের নিরপেক্ষ বিচার নিশ্চিতকরণ নিয়ে দিল্লির সাউথ ব্লকে আইনি পর্যালোচনা চলছে",
      "কূটনৈতিক বিশ্লেষকদের মতে, পলাতক নেতাদের অনুপস্থিতিতে দেওয়া রায় ওবায়দুল কাদের ও শেখ হাসিনার বিষয়ে দিল্লির সিদ্ধান্তকে আরও সংবেদনশীল করে তুলেছে",
      "ভারত সরকার স্পষ্টভাবে জানিয়েছে, বাংলাদেশের সঙ্গে দীর্ঘমেয়াদী স্থিতিশীলতা এবং নিরাপত্তা অংশীদারিত্ব রক্ষা করাই তাদের প্রধান লক্ষ্য"
    ],
    "keyPointsEn": [
      "Accelerated tribunal verdicts in Dhaka have triggered intensified bilateral backchannel communications between Dhaka and New Delhi",
      "South Block legal advisors are examining Article 6 of the 2013 India-Bangladesh Extradition Treaty regarding political offenses",
      "Strategic analysts note that judgments delivered in absentia complicate any formal processing of extradition requests across borders",
      "New Delhi maintains that regional stability, border security, and long-term democratic institutionalism remain its core focus"
    ],
    "category": "diplomacy",
    "categoryLabelBn": "কূটনীতি ও তিস্তা",
    "categoryLabelEn": "Diplomacy & Water",
    "sentiment": "neutral",
    "sentimentReasonBn": "দ্য হিন্দু দিল্লির সাউথ ব্লকের কূটনৈতিক বিবেচনা এবং প্রত্যর্পণ চুক্তির আইনি জটিলতা বিশ্লেষণাত্মক দৃষ্টিতে তুলে ধরেছে।",
    "sentimentReasonEn": "The Hindu provides a measured diplomatic analysis evaluating South Block's strategic considerations and extradition treaty complexities.",
    "source": {
      "name": "The Hindu",
      "bureau": "Delhi",
      "language": "English",
      "originalUrl": "https://www.thehindu.com/news/international/bangladesh-crimes-tribunal-verdict-extradition-delhi/article6864120.ece",
      "originalHeadline": "Dhaka tribunal verdicts against Awami League leadership put bilateral extradition pact in focus in New Delhi",
      "scannedAt": "2026-09-15T05:30:00.000Z"
    },
    "publishedAt": "2026-09-15T04:50:00.000Z",
    "readTimeBn": "৩ মিনিট",
    "readTimeEn": "3 min read",
    "imageUrl": "/images/south-block-mea-delhi.jpg",
    "tags": [
      "Diplomacy",
      "Extradition Treaty",
      "The Hindu",
      "Obaidul Quader",
      "Sheikh Hasina",
      "শেখ হাসিনা",
      "Awami League",
      "আওয়ামী লীগ",
      "South Block"
    ],
    "isLeadStory": false,
    "isTrending": true
  },
  {
    "id": "40",
    "slug": "anandabazar-tribunal-verdict-absentia-awami-league-exile-reaction",
    "title": "অনুপস্থিতিতে বিচার ও সর্বোচ্চ শাস্তির দাবি: আনন্দবাজারের বিশ্লেষণে ঢাকার ট্রাইব্যুনাল ও লীগের অবস্থান",
    "englishTitle": "Trial in Absentia and Death Penalty Pleas: Anandabazar Analyzes Dhaka Tribunal Proceedings and Awami League Stance",
    "banglaTitle": "অনুপস্থিতিতে বিচার ও সর্বোচ্চ শাস্তির দাবি: আনন্দবাজারের বিশ্লেষণে ঢাকার ট্রাইব্যুনাল ও লীগের অবস্থান",
    "summaryBn": "কলকাতার আনন্দবাজার পত্রিকার বিশেষ বিশ্লেষণে ঢাকার আন্তর্জাতিক অপরাধ ট্রাইব্যুনালের বিচারিক প্রক্রিয়া এবং আওয়ামী লীগের নির্বাসিত নেতৃত্বের প্রতিক্রিয়া তুলে ধরা হয়েছে। ওবায়দুল কাদেরসহ সাত নেতার বিরুদ্ধে রাষ্ট্রনিযুক্ত আইনজীবীদের মাধ্যমে পরিচালিত শুনানি ও সর্বোচ্চ শাস্তির দাবি নিয়ে তৈরি হওয়া আইনি বিতর্ক এবং দলটির রাজনৈতিক টিকে থাকার লড়াইয়ে এই রায়ের প্রভাব পর্যবেক্ষণ করছে পশ্চিমবঙ্গের রাজনৈতিক মহল।",
    "summaryEn": "A specialized analysis by Kolkata's Anandabazar Patrika examines the legal mechanics of Dhaka's International Crimes Tribunal and the defense narrative mounted by the Awami League's exiled leadership. The piece highlights debates surrounding state-appointed defense counsel, demands for capital punishment in absentia, and the profound political repercussions for the party's future.",
    "keyPointsBn": [
      "আসামিদের অনুপস্থিতিতে ট্রাইব্যুনালের রায় ঘোষণার সাংবিধানিক ও আন্তর্জাতিক গ্রহণযোগ্যতা নিয়ে দুই বাংলার আইন বিশেষজ্ঞদের মধ্যে বিতর্ক",
      "আওয়ামী লীগের নির্বাসিত নেতাদের বক্তব্য—আত্মপক্ষ সমর্থনের ন্যায়সঙ্গত সুযোগ ছাড়া একতরফা বিচার প্রক্রিয়া রাজনৈতিক উদ্দেশ্যপ্রণোদিত",
      "ইতিপূর্বে শেখ হাসিনাসহ ১৫ জনের মৃত্যুদণ্ডের পর ওবায়দুল কাদেরের মামলার রায় দলের তৃণমূল স্তরে মিশ্র প্রতিক্রিয়ার জন্ম দিয়েছে",
      "পশ্চিমবঙ্গ ও ত্রিপুরায় অবস্থানরত নেতাকর্মীদের মধ্যে আইনি পরিণতি ও আন্তর্জাতিক আশ্রয়ের ভবিষ্যৎ নিয়ে উদ্বেগ বাড়ছে"
    ],
    "keyPointsEn": [
      "Legal jurists in Kolkata and Dhaka deliberate on the international standards and appeal avenues for verdicts delivered in absentia",
      "Exiled Awami League leadership maintains that proceedings conducted without chosen defense counsel lack due process",
      "Following earlier death sentences handed down to 15 individuals including Sheikh Hasina, this verdict marks a defining institutional juncture",
      "Heightened concern reported among Awami League political workers currently residing across West Bengal regarding their legal status"
    ],
    "category": "politics",
    "categoryLabelBn": "রাজনীতি ও নির্বাচন",
    "categoryLabelEn": "Politics & Governance",
    "sentiment": "neutral",
    "sentimentReasonBn": "আনন্দবাজার পত্রিকা রায় ও আইনি বিতর্কের উভয় পক্ষের যুক্তি এবং নির্বাসিত নেতাদের প্রতিক্রিয়া তুলে ধরেছে।",
    "sentimentReasonEn": "Anandabazar Patrika presents an objective overview of legal debates surrounding in absentia trials alongside responses from exiled party members.",
    "source": {
      "name": "Anandabazar Patrika",
      "bureau": "Kolkata",
      "language": "Bengali",
      "originalUrl": "https://www.anandabazar.com/world/bangladesh-international-crimes-tribunal-verdict-on-awami-league-leaders-and-legal-debate-dgtl/cid/1547890",
      "originalHeadline": "কাদের-সহ ৭ জনের বিরুদ্ধে রায় আজ, অনুপস্থিতিতে বিচার নিয়ে বিতর্ক ও লীগের পাল্টা অভিযোগ",
      "scannedAt": "2026-09-15T05:35:00.000Z"
    },
    "publishedAt": "2026-09-15T04:15:00.000Z",
    "readTimeBn": "৩ মিনিট",
    "readTimeEn": "3 min read",
    "imageUrl": "/images/bangabhaban-presidential-palace-dhaka.jpg",
    "tags": [
      "Anandabazar Patrika",
      "Awami League",
      "আওয়ামী লীগ",
      "Obaidul Quader",
      "International Crimes Tribunal",
      "Sheikh Hasina",
      "শেখ হাসিনা",
      "Kolkata Bureau"
    ],
    "isLeadStory": false,
    "isTrending": false
  },
  {
    "id": "41",
    "slug": "chinmoy-krishna-das-mother-demise-parole-plea-the-wall",
    "title": "ছেলেকে দেখার ইচ্ছা বুকে চেপে চলে গেলেন চিন্ময়কৃষ্ণের মা: প্যারোলে মুক্তি নিয়ে আলোচনা",
    "englishTitle": "Chinmoy Krishna's Mother Passes Away with Unfulfilled Wish to See Son: Debate Over Parole in Bangladesh",
    "banglaTitle": "ছেলেকে দেখার ইচ্ছা বুকে চেপে চলে গেলেন চিন্ময়কৃষ্ণের মা: প্যারোলে মুক্তি নিয়ে আলোচনা",
    "summaryBn": "চট্টগ্রাম কারাগারে বন্দি সনাতন জাগরণ মঞ্চের মুখপাত্র চিন্ময় কৃষ্ণ দাস ব্রহ্মচারীর মা সন্ধ্যা রানি ধর (৭০) ক্যান্সারের সাথে দীর্ঘ লড়াই শেষে শ্রীশ্রী পুণ্ডরীক ধাম আশ্রমে শেষ নিঃশ্বাস ত্যাগ করেছেন। মায়ের শেষকৃত্যে অংশ নিতে তাঁর আইনজীবীরা চট্টগ্রামের জেলা প্রশাসনের কাছে প্যারোলে মুক্তির জোর আবেদন জানিয়েছেন। দীর্ঘ কারাবাস ও অসুস্থতার কারণে ছেলের সাথে শেষ দেখা না হওয়ায় গভীর শোক ও ক্ষোভ প্রকাশ করেছে তাঁর পরিবার ও ভক্তসমাজ।",
    "summaryEn": "Sandhya Rani Dhar (70), mother of imprisoned Sanatan Jagaran Mancha spokesperson Chinmoy Krishna Das, passed away at Sri Sri Pundarik Dham Ashram in Chattogram following a prolonged battle with cancer. As his legal counsel petitioned the Chattogram district administration for temporary parole to permit his participation in her final rites, family members and community leaders expressed profound grief over her passing without being able to see her detained son.",
    "keyPointsBn": [
      "ক্যান্সারে আক্রান্ত সন্ধ্যা রানি ধর চিকিৎসকদের পরামর্শে জীবনের শেষ দিনগুলো হাটহাজারীর পুণ্ডরীক ধাম আশ্রমে কাটিয়ে শেষ নিঃশ্বাস ত্যাগ করেন",
      "চট্টগ্রাম কেন্দ্রীয় কারাগারে বন্দি চিন্ময় কৃষ্ণের শারীরিক অবনতি ও লিভার জটিলতার কথা বিবেচনা করে আগে মায়ের গুরুতর অসুস্থতার খবর গোপন রাখা হয়েছিল",
      "আইনজীবী অপূর্ব ভট্টাচার্য মায়ের অন্ত্যেষ্টিক্রিয়া ও পারলৌকিক শ্রাদ্ধানুষ্ঠানে যোগ দেওয়ার জন্য চট্টগ্রাম প্রশাসনের কাছে জরুরি প্যারোলের আবেদন দাখিল করেন",
      "হাইকোর্টে ৪টি মামলায় জামিন পেলেও দুটি মামলায় জামিন না হওয়ায় তাঁর স্থায়ী মুক্তির পথ এখনও আটকে রয়েছে"
    ],
    "keyPointsEn": [
      "Sandhya Rani Dhar breathed her last at Hathazari's Pundarik Dham Ashram after battling advanced-stage cancer",
      "Defense counsel Apurba Bhattacharya revealed that details of his mother's critical state were initially withheld due to Chinmoy's own deteriorating health in jail",
      "A formal parole petition was submitted to the Chattogram district magistrate seeking temporary release to conduct the Hindu cremation rituals",
      "While the Bangladesh High Court granted bail in four of six cases, two pending charges continue to delay his formal release"
    ],
    "category": "politics",
    "categoryLabelBn": "রাজনীতি ও নির্বাচন",
    "categoryLabelEn": "Politics & Governance",
    "sentiment": "negative",
    "sentimentReasonBn": "কলকাতার দ্য ওয়াল কারাবন্দি হিন্দু সন্ন্যাসীর মায়ের প্রয়াণ ও প্যারোলে মুক্তির মানবিক সংকটকে স্পর্শকাতর ও সহানুভূতিশীল দৃষ্টিতে তুলে ধরেছে।",
    "sentimentReasonEn": "The Wall highlights the emotional human rights dimensions surrounding the monk's mother passing away without seeing her detained son.",
    "source": {
      "name": "The Wall",
      "bureau": "Kolkata",
      "language": "Bengali",
      "originalUrl": "https://www.thewall.in/bangladesh/chinmay-krishnas-mother-departed-with-the-unfulfilled-wish-of-seeing-her-son-will-tareq-sarkar-grant-parole-to-the-imprisoned-monk/tid/204451",
      "originalHeadline": "ছেলেকে দেখার ইচ্ছা বুকে চেপে চলে গেলেন চিন্ময়কৃষ্ণের মা, কারাবন্দি সাধুকে কি প্যারোলে মুক্তি দেবে তারেক সরকার",
      "scannedAt": "2026-09-15T05:40:00.000Z"
    },
    "publishedAt": "2026-09-10T07:11:00.000Z",
    "readTimeBn": "৩ মিনিট",
    "readTimeEn": "3 min read",
    "imageUrl": "/images/chinmoy-krishna-das.jpg",
    "tags": [
      "Chinmoy Krishna Das",
      "চিন্ময় কৃষ্ণ দাস",
      "The Wall",
      "Chattogram",
      "Pundarik Dham",
      "Minorities",
      "Human Rights",
      "Kolkata Bureau"
    ],
    "isLeadStory": false,
    "isTrending": true
  },
  {
    "id": "42",
    "slug": "ndtv-chinmoy-krishna-das-granted-five-hour-parole-mother-funeral",
    "title": "মায়ের শেষকৃত্যে যোগ দিতে চিন্ময় কৃষ্ণ দাসকে ৫ ঘণ্টার প্যারোল মঞ্জুর: এনডিটিভির প্রতিবেদন",
    "englishTitle": "Chinmoy Krishna Das Granted 5-Hour Parole for Mother's Last Rites in Chattogram: NDTV Report",
    "banglaTitle": "মায়ের শেষকৃত্যে যোগ দিতে চিন্ময় কৃষ্ণ দাসকে ৫ ঘণ্টার প্যারোল মঞ্জুর: এনডিটিভির প্রতিবেদন",
    "summaryBn": "ভারতের শীর্ষ সংবাদমাধ্যম এনডিটিভির প্রতিবেদনে জানানো হয়েছে, মা সন্ধ্যা রানি ধরের শেষকৃত্যানুষ্ঠানে যোগ দেওয়ার জন্য সনাতন জাগরণ মঞ্চের নেতা চিন্ময় কৃষ্ণ দাসকে ৫ ঘণ্টার শর্তসাপেক্ষ প্যারোল মঞ্জুর করে চট্টগ্রাম জেলা প্রশাসন। কড়া পুলিশি নিরাপত্তায় পুণ্ডরীক ধামে পৌঁছানোর পর তিনি ধর্মীয় আচার সম্পন্ন করেন এবং নির্ধারিত সময় শেষে পুনরায় চট্টগ্রাম কারাগারে ফিরে যান। নয়াদিল্লির পর্যবেক্ষক ও সামাজিক মাধ্যমগুলোতে ঘটনাটি নিয়ে গভীর আগ্রহ দেখা গেছে।",
    "summaryEn": "Leading Indian broadcaster NDTV reported that Bangladeshi Hindu monk Chinmoy Krishna Das was granted five hours of conditional parole by the Chattogram district administration to perform the final rites for his mother, Sandhya Rani Dhar. Escorted under heavy police security to Pundarik Dham, he completed the religious rituals before returning to Chattogram Central Jail, amid close observation from civil society and diplomatic circles in New Delhi.",
    "keyPointsBn": [
      "চট্টগ্রাম জেলা প্রশাসকের অনুমোদনে ৫ ঘণ্টার বিশেষ প্যারোলে মুক্তি পেয়ে পুণ্ডরীক ধামে মায়ের মরদেহে শেষ শ্রদ্ধা জানান চিন্ময় কৃষ্ণ দাস",
      "কঠোর পুলিশি প্রহরার মধ্যে ধর্মীয় আনুষ্ঠানিকতা শেষ হওয়ার পরপরই তাঁকে পুনরায় চট্টগ্রাম কেন্দ্রীয় কারাগারে নিয়ে যাওয়া হয়",
      "ভারতীয় গণমাধ্যমে তাঁর স্বাস্থ্যগত অবস্থা এবং সংখ্যালঘু সম্প্রদায়ের সুরক্ষা ও নিরাপত্তা নিয়ে অব্যাহত উদ্বেগ প্রকাশ করা হয়েছে",
      "নয়াদিল্লির কূটনৈতিক মহল ঘটনাপ্রবাহ এবং বাংলাদেশে মানবাধিকার ও আইনি প্রক্রিয়ার স্বচ্ছতা নিবিড়ভাবে পর্যবেক্ষণ করছে"
    ],
    "keyPointsEn": [
      "Chattogram District Deputy Commissioner granted 5 hours of conditional parole allowing Chinmoy Krishna to attend the funeral ceremony",
      "Accompanied by rigorous security detachments, he performed Hindu funerary customs at Pundarik Dham before returning to custody",
      "Indian national outlets continue to highlight his health condition and emphasize equitable treatment for minority religious leaders",
      "Diplomatic observers in New Delhi continue to closely track the legal trajectory and human rights protections in Bangladesh"
    ],
    "category": "politics",
    "categoryLabelBn": "রাজনীতি ও নির্বাচন",
    "categoryLabelEn": "Politics & Governance",
    "sentiment": "neutral",
    "sentimentReasonBn": "এনডিটিভি প্যারোল প্রক্রিয়া, আইনি ব্যবস্থাপনা ও ধর্মীয় আচার পালনের তথ্যনিষ্ঠ বিবরণ দিয়েছে।",
    "sentimentReasonEn": "NDTV provides a balanced and factual report covering the district administration's parole decision and security measures.",
    "source": {
      "name": "NDTV",
      "bureau": "Delhi",
      "language": "English",
      "originalUrl": "https://www.ndtv.com/world-news/bangladesh-hindu-monk-chinmoy-krishna-das-granted-five-hours-parole-to-attend-mothers-funeral-653210",
      "originalHeadline": "Bangladeshi Hindu monk Chinmoy Krishna Das granted five hours parole to perform mother's last rites",
      "scannedAt": "2026-09-15T05:45:00.000Z"
    },
    "publishedAt": "2026-09-10T12:30:00.000Z",
    "readTimeBn": "২ মিনিট",
    "readTimeEn": "2 min read",
    "imageUrl": "/images/chinmoy-krishna-das.jpg",
    "tags": [
      "Chinmoy Krishna Das",
      "NDTV",
      "Chattogram",
      "Parole",
      "Human Rights",
      "Delhi Bureau",
      "Minorities"
    ],
    "isLeadStory": false,
    "isTrending": false
  },
  {
    "id": "1",
    "slug": "dhaka-university-jinnah-photo-row",
    "title": "ঢাকা বিশ্ববিদ্যালয়ে জিন্নাহ ও জামায়াত নেতার ছবি টানানো নিয়ে বিতর্ক",
    "englishTitle": "Row at Dhaka University over photos of Jinnah, Jamaat ex-chief",
    "banglaTitle": "ঢাকা বিশ্ববিদ্যালয়ে জিন্নাহ ও জামায়াত নেতার ছবি টানানো নিয়ে বিতর্ক",
    "summaryBn": "ঢাকা বিশ্ববিদ্যালয়ের সংগ্রশালা থেকে জিন্নাহ ও আব্দুল মালেকের ছবি টানানো নিয়ে বিতর্ক সৃষ্টি হয়েছে। কর্তৃপক্ষ তিনটি কমিটি গঠন করেছে তদন্তের জন্য।",
    "summaryEn": "A controversy has erupted at Dhaka University over the removal of portraits of Jinnah and Jamaat ex-chief Abdul Malek from the museum. Authorities have formed three committees to investigate.",
    "keyPointsBn": [
      "ডাকসু সংগ্রশালা থেকে জিন্নাহ ও আব্দুল মালেকের ছবি টানানো হয়েছে",
      "শিক্ষক মূল্যায়ন ও নির্ভীক জুলাই স্মৃতিসৌধ নিয়েও তিনটি কমিটি তদন্ত করছে",
      "ভারতীয় মিডিয়া এটিকে বাংলাদেশের রাজনৈতিক অস্থিরতার লক্ষণ হিসেবে দেখছে"
    ],
    "keyPointsEn": [
      "Portraits of Jinnah and Abdul Malek removed from Dhaka University museum",
      "Three committees investigating teacher evaluation and 'Nirbhik July' memorial",
      "Indian media frames it as a sign of political instability in Bangladesh"
    ],
    "category": "politics",
    "categoryLabelBn": "রাজনীতি ও নির্বাচন",
    "categoryLabelEn": "Politics & Governance",
    "sentiment": "negative",
    "sentimentReasonBn": "ভারতীয় মিডিয়া এই ঘটনাকে বাংলাদেশে ধর্মীয় ও রাজনৈতিক মেরুকরণের প্রমাণ হিসেবে উপস্থাপন করছে, যা নেতিবাচক ছবি তৈরি করে।",
    "sentimentReasonEn": "Indian media portrays this as evidence of religious and political polarization in Bangladesh, creating a negative image.",
    "source": {
      "name": "Times of India World",
      "bureau": "Delhi",
      "language": "English",
      "originalUrl": "https://timesofindia.indiatimes.com/world/south-asia/row-at-dhaka-university-over-photos-of-jinnah-jamaat-ex-chief/articleshow/134249657.cms",
      "originalHeadline": "Row at Dhaka University over photos of Jinnah, Jamaat ex-chief",
      "scannedAt": "2026-09-15T01:47:45.000Z"
    },
    "publishedAt": "2026-09-15T01:47:45.000Z",
    "readTimeBn": "২ মিনিট",
    "readTimeEn": "2 min read",
    "imageUrl": "/images/bangabhaban-presidential-palace-dhaka.jpg",
    "tags": [
      "Dhaka University",
      "Jinnah",
      "Jamaat",
      "Bangladesh politics"
    ],
    "isLeadStory": false
  },
  {
    "id": "35",
    "slug": "sheikh-selim-leadership-row-awami-league",
    "title": "শেখ সেলিমের ‘নেতৃত্ব’ ইস্যুতে আওয়ামী লীগে বিরোধ তৈরি হচ্ছে?",
    "englishTitle": "Row over Sheikh Selim's 'Leadership' in Awami League: Is Internal Crisis Brewing?",
    "banglaTitle": "শেখ সেলিমের ‘নেতৃত্ব’ ইস্যুতে আওয়ামী লীগে বিরোধ তৈরি হচ্ছে?",
    "summaryBn": "ভারতে অবস্থানরত শেখ হাসিনা তাঁর অনুপস্থিতিতে জ্যেষ্ঠ প্রেসিডিয়াম সদস্য শেখ সেলিমের দল পরিচালনার ইঙ্গিত দেওয়ার পর আওয়ামী লীগের ভেতরে তীব্র বিতর্ক ও অসন্তোষ তৈরি হয়েছে। কলকাতায় নেতাদের একাংশের বৈঠকে অসন্তোষ দেখা গেলেও দলের মুখপাত্র ও অন্যান্য নেতারা নেতৃত্ব সংকট বা ভাঙনের খবরকে গুজব বলে উড়িয়ে দিচ্ছেন।",
    "summaryEn": "Following remarks by Sheikh Hasina in India hinting that senior presidium member Sheikh Selim could oversee party affairs in her absence, sharp internal disagreements have surfaced within the Awami League. While some exiled leaders in Kolkata express reservations, party spokespersons dismiss speculation of a leadership vacuum as baseless rumors.",
    "keyPointsBn": [
      "দ্য ওয়াল-এ শেখ হাসিনার সাক্ষাৎকারের পর শেখ সেলিমের ভূমিকা নিয়ে কলকাতায় অবস্থানরত আওয়ামী লীগ নেতাদের মধ্যে অসন্তোষ ও তৎপরতা শুরু হয়েছে",
      "নিউটাউনে শেখ সেলিমের বাসভবনে বৈঠক এবং তাঁকে ভারপ্রাপ্ত সভাপতি করার ভুয়া প্রেস বিজ্ঞপ্তি নিয়ে চরম বিভ্রান্তি তৈরি হয়েছে",
      "আওয়ামী লীগের মুখপাত্র মোহাম্মদ আলী আরাফাত ও সাবেক সংসদ সদস্য হাবিবে মিল্লাত জানান, শেখ হাসিনাই সভানেত্রী আছেন এবং নেতৃত্ব বদলের এখতিয়ার কেবল কাউন্সিলের",
      "রাজনৈতিক বিশ্লেষকদের মতে, ১৯৭৫ পরবর্তী সময়ের মতো শীর্ষ নেতৃত্বের অনুপস্থিতিতে দলে উপদলীয় কোন্দল বা মেরুকরণের ঝুঁকি সবসময়ই থেকে যায়"
    ],
    "keyPointsEn": [
      "Sheikh Hasina's remarks to The Wall regarding Sheikh Selim triggered intense discussions and friction among exiled Awami League leaders in Kolkata",
      "Meetings at Sheikh Selim's New Town residence and a fabricated press release claiming his interim presidency spurred controversy",
      "Awami League spokesperson Mohammad A. Arafat and former MP Habibe Millat emphasized that Sheikh Hasina remains president and only a council can alter leadership",
      "Political commentators draw parallels to post-1975 history, highlighting structural vulnerabilities to factional disputes when top leadership operates from exile"
    ],
    "category": "politics",
    "categoryLabelBn": "রাজনীতি ও নির্বাচন",
    "categoryLabelEn": "Politics & Governance",
    "sentiment": "neutral",
    "sentimentReasonBn": "বিবিসি বাংলার অনুসন্ধানী প্রতিবেদনে কলকাতায় অবস্থানরত আওয়ামী লীগ নেতাদের বিভিন্ন অংশের প্রতিক্রিয়া, গঠনতান্ত্রিক বিধিবিধান এবং শীর্ষ নেতৃত্বের অবস্থান তথ্যনিষ্ঠ ও ভারসাম্যপূর্ণভাবে তুলে ধরা হয়েছে।",
    "sentimentReasonEn": "BBC News Bengali presents a balanced and fact-based investigative report analyzing differing perspectives among exiled Awami League leaders in Kolkata, constitutional party provisions, and statements from party spokespersons.",
    "source": {
      "name": "BBC News বাংলা",
      "bureau": "Kolkata",
      "language": "Bengali",
      "originalUrl": "https://www.bbc.com/bengali/articles/c046rvwk2pvo",
      "originalHeadline": "শেখ সেলিমের ‘নেতৃত্ব’ ইস্যুতে আওয়ামী লীগে বিরোধ তৈরি হচ্ছে?",
      "scannedAt": "2026-09-15T04:30:00.000Z"
    },
    "publishedAt": "2026-09-09T13:22:52.358Z",
    "readTimeBn": "৩ মিনিট",
    "readTimeEn": "3 min read",
    "imageUrl": "/images/sheikh-selim-awami-league.jpg",
    "tags": [
      "Awami League",
      "Sheikh Hasina",
      "Sheikh Selim",
      "Kolkata",
      "Bangladesh politics",
      "Leadership"
    ],
    "isLeadStory": false,
    "isTrending": true
  },
  {
    "id": "36",
    "slug": "the-wall-sheikh-hasina-interview-sheikh-selim-awami-league",
    "title": "আমার জেল হলে দল চালাবেন শেখ সেলিম: দ্য ওয়াল-কে শেখ হাসিনা",
    "englishTitle": "'Sheikh Selim will lead party if I am jailed': Sheikh Hasina tells The Wall",
    "banglaTitle": "আমার জেল হলে দল চালাবেন শেখ সেলিম: দ্য ওয়াল-কে শেখ হাসিনা",
    "summaryBn": "কলকাতার সংবাদমাধ্যম দ্য ওয়াল-এর এক্সিকিউটিভ এডিটর অমল সরকারকে দেওয়া টেলিফোন সাক্ষাৎকারে শেখ হাসিনা বলেন, তাঁর গ্রেফতার বা অনুপস্থিতির ক্ষেত্রে দলীয় গঠনতন্ত্র অনুসারে জ্যেষ্ঠ প্রেসিডিয়াম সদস্য শেখ সেলিম দলের নেতৃত্ব দেবেন। তিনি দেশে ফেরার প্রত্যয় ব্যক্ত করেন এবং ব্যক্তিগত নিরাপত্তা নিয়ে উদ্বেগ জানান।",
    "summaryEn": "In an exclusive telephone interview with Kolkata-based The Wall's Executive Editor Amal Sarkar, Sheikh Hasina stated that under party rules, senior presidium member Sheikh Selim would steer party leadership in the event of her imprisonment or absence, while reaffirming her intention to return to Bangladesh.",
    "keyPointsBn": [
      "নির্বাসনে থাকা শেখ হাসিনা ভারতের মাটিতে ভারতীয় গণমাধ্যম দ্য ওয়াল-কে প্রথম বিস্তারিত রাজনৈতিক সাক্ষাৎকার দেন",
      "তিনি গঠনতন্ত্রের ধারা উল্লেখ করে বলেন, দলের মূল নেতার অবর্তমানে জ্যেষ্ঠ প্রেসিডিয়াম সদস্য হিসেবে শেখ সেলিমই সভা পরিচালনা ও দায়িত্ব পালন করবেন",
      "শেখ রেহানার সক্রিয় রাজনীতিতে আসার গুঞ্জন নাকচ করে জানান, তিনি প্রত্যক্ষ রাজনীতির সঙ্গে যুক্ত নন",
      "বাংলাদেশে বর্তমান শাসনব্যবস্থা, তাঁর নিরাপত্তা পরিস্থিতি এবং ভারত-বাংলাদেশ সম্পর্কের বাস্তবতা নিয়ে খোলামেলা কথা বলেন"
    ],
    "keyPointsEn": [
      "Sheikh Hasina granted an in-depth telephone interview to Kolkata-based The Wall's Executive Editor Amal Sarkar from her location in India",
      "Invoking party bylaws, she noted senior presidium member Sheikh Selim would steer organizational meetings during her absence",
      "She dismissed speculation regarding Sheikh Rehana entering active political leadership",
      "She shared reflections on ongoing political realities in Bangladesh, her personal safety, and future bilateral relations"
    ],
    "category": "politics",
    "categoryLabelBn": "রাজনীতি ও নির্বাচন",
    "categoryLabelEn": "Politics & Governance",
    "sentiment": "neutral",
    "sentimentReasonBn": "কলকাতাভিত্তিক পোর্টাল দ্য ওয়াল-এর সঙ্গে শেখ হাসিনার সরাসরি টেলিফোন কথোপকথনের ভিত্তিতে এই সাক্ষাৎকারটি প্রকাশিত হয়েছে, যেখানে দলীয় ভবিষ্যৎ ও তাঁর ব্যক্তিগত দৃষ্টিভঙ্গি সরাসরি তুলে ধরা হয়েছে।",
    "sentimentReasonEn": "Kolkata digital portal The Wall published an exclusive telephone interview with Sheikh Hasina discussing party continuity, constitutional succession, and her future return plans.",
    "source": {
      "name": "The Wall",
      "bureau": "Kolkata",
      "language": "Bengali",
      "originalUrl": "https://www.thewall.in/news/bangladesh/sheikh-hasina-interview-amal-sarkar-sheikh-selim-awami-league",
      "originalHeadline": "আমার জেল হলে দল চালাবেন শেখ সেলিম: দ্য ওয়াল-কে শেখ হাসিনা",
      "scannedAt": "2026-09-15T04:35:00.000Z"
    },
    "publishedAt": "2026-09-06T11:15:00.000Z",
    "readTimeBn": "৩ মিনিট",
    "readTimeEn": "3 min read",
    "imageUrl": "/images/thewall-hasina-interview.jpeg",
    "tags": [
      "Sheikh Hasina",
      "The Wall",
      "Sheikh Selim",
      "Awami League",
      "Kolkata",
      "Bangladesh"
    ],
    "isLeadStory": false
  },
  {
    "id": "37",
    "slug": "dhaka-objects-sheikh-hasina-indian-media-interviews-delhi",
    "title": "Dhaka objects to Sheikh Hasina's media interviews in India, raises concern with Delhi",
    "englishTitle": "Dhaka objects to Sheikh Hasina's media interviews in India, raises concern with Delhi",
    "banglaTitle": "ভারত থেকে শেখ হাসিনার সাক্ষাৎকারে ঢাকার তীব্র আপত্তি: দ্বিপাক্ষিক সম্পর্কে অস্বস্তি",
    "summaryBn": "ভারতের মাটিতে আশ্রয় নিয়ে দ্য ওয়ালসহ বিভিন্ন গণমাধ্যমে শেখ হাসিনার ধারাবাহিক রাজনৈতিক বক্তব্য ও সাক্ষাৎকার দেওয়া নিয়ে দিল্লির কাছে আনুষ্ঠানিক অসন্তোষ প্রকাশ করেছে ঢাকা। বাংলাদেশ সরকারের পক্ষ থেকে বলা হয়েছে, এমন কার্যক্রম দ্বিপাক্ষিক সম্পর্ক স্থিতিশীল করার প্রয়াসকে ক্ষতিগ্রস্ত করে।",
    "summaryEn": "Dhaka has registered official diplomatic displeasure with New Delhi over Sheikh Hasina's repeated political remarks and interviews to Indian media outlets including The Wall, warning that political maneuvers from Indian soil undermine bilateral efforts to normalize relations.",
    "keyPointsBn": [
      "শেখ হাসিনার ভারতীয় গণমাধ্যমে দেওয়া সাক্ষাৎকার নিয়ে কূটনৈতিক চ্যানেলে নয়াদিল্লির কাছে জোরালো আপত্তি জানিয়েছে বাংলাদেশ সরকার",
      "বাংলাদেশ সরকারের দাবি, ভারতের আশ্রয়ে থেকে এমন রাজনৈতিক বয়ান দেওয়া প্রত্যর্পণ প্রক্রিয়া ও সুপ্রতিবেশীসুলভ নীতিকে ব্যাহত করে",
      "দিল্লির কূটনৈতিক সূত্র জানিয়েছে, তারা আঞ্চলিক স্থিতিশীলতা ও দ্বিপাক্ষিক যোগাযোগের ব্যাপারে সতর্ক নজর রাখছে",
      "হাসিনার কর্মকাণ্ড ঘিরে বিদ্যমান দ্বিপাক্ষিক চুক্তি ও ভবিষ্যৎ কূটনীতি নিয়ে দুই দেশের মধ্যে নতুন করে বিতর্ক শুরু হয়েছে"
    ],
    "keyPointsEn": [
      "Bangladesh authorities lodged formal objections with New Delhi regarding Sheikh Hasina's interviews in Indian news outlets",
      "Dhaka stated that hosting political discourse from Indian territory strains neighborly engagement and ongoing extradition deliberations",
      "New Delhi diplomatic circles indicate continuous monitoring of bilateral dialogue and regional stability",
      "The controversy spotlights existing bilateral treaties and diplomatic protocols governing high-profile political asylum"
    ],
    "category": "diplomacy",
    "categoryLabelBn": "কূটনীতি ও দ্বিপাক্ষিক সম্পর্ক",
    "categoryLabelEn": "Diplomacy & Water",
    "sentiment": "negative",
    "sentimentReasonBn": "প্রতিবেদনে ভারতের ভূখণ্ডে অবস্থান করে রাজনৈতিক বিবৃতি ও সাক্ষাৎকার দেওয়াকে কেন্দ্র করে ঢাকা ও দিল্লির মধ্যকার কূটনৈতিক টানাপোড়েন ও সম্পর্কের অস্বস্তিকর দিক তুলে ধরা হয়েছে।",
    "sentimentReasonEn": "The Indian Express highlights diplomatic friction between Dhaka and New Delhi, focusing on Bangladesh's official protest against political interviews granted from Indian territory.",
    "source": {
      "name": "The Indian Express",
      "bureau": "Delhi",
      "language": "English",
      "originalUrl": "https://indianexpress.com/article/world/bangladesh-objects-sheikh-hasina-indian-media-interviews-diplomatic-ties-134251000/",
      "originalHeadline": "Dhaka objects to Sheikh Hasina's media interviews in India, raises concern with Delhi",
      "scannedAt": "2026-09-15T04:40:00.000Z"
    },
    "publishedAt": "2026-09-10T09:20:00.000Z",
    "readTimeBn": "২ মিনিট",
    "readTimeEn": "2 min read",
    "imageUrl": "/images/south-block-mea-delhi.jpg",
    "tags": [
      "Diplomacy",
      "Sheikh Hasina",
      "The Indian Express",
      "Dhaka-Delhi",
      "Extradition",
      "Bilateral Ties"
    ],
    "isLeadStory": false
  },
  {
    "id": "2",
    "slug": "bangladesh-daily-life-challenges",
    "title": "পত্রিকা: সিনিয়র কর্মকর্তাদের ইনক্রিমেন্ট কমছে, সবার বাসা ভাড়াও কমানো হচ্ছে",
    "englishTitle": "Newspaper: Senior officials' increments cut, house rents reduced for all",
    "banglaTitle": "পত্রিকা: সিনিয়র কর্মকর্তাদের ইনক্রিমেন্ট কমছে, সবার বাসা ভাড়াও কমানো হচ্ছে",
    "summaryBn": "বাংলাদেশে অর্থনৈতিক সংকটের কারণে সিনিয়র সরকারি কর্মকর্তাদের ইনক্রিমেন্ট কমানো হচ্ছে এবং বাসা ভাড়া কমানো হচ্ছে। এছাড়া ঢাকায় মাসে গড়ে ৫০টি বেওয়ারিশ লাশ পাওয়া যায়।",
    "summaryEn": "Due to economic crisis in Bangladesh, increments for senior government officials are being cut and house rents reduced. Also, an average of 50 unclaimed bodies are found in Dhaka monthly.",
    "keyPointsBn": [
      "সিনিয়র কর্মকর্তাদের ইনক্রিমেন্ট ও বাসা ভাড়া কমানো",
      "ঢাকায় মাসে গড়ে ৫০টি বেওয়ারিশ লাশ",
      "বরিশালে দারিদ্র্যের হার সবচেয়ে বেশি"
    ],
    "keyPointsEn": [
      "Increments and house rents reduced for senior officials",
      "Average 50 unclaimed bodies in Dhaka monthly",
      "Barishal has highest poverty rate"
    ],
    "category": "economy",
    "categoryLabelBn": "অর্থনীতি ও বিদ্যুৎ",
    "categoryLabelEn": "Economy & Energy",
    "sentiment": "negative",
    "sentimentReasonBn": "ভারতীয় মিডিয়া বাংলাদেশের অর্থনৈতিক সংকট ও সামাজিক অবক্ষয়ের চিত্র তুলে ধরছে, যা নেতিবাচক।",
    "sentimentReasonEn": "Indian media highlights Bangladesh's economic crisis and social degradation, which is negative.",
    "source": {
      "name": "BBC Bengali",
      "bureau": "Delhi",
      "language": "Bengali",
      "originalUrl": "https://www.bbc.com/bengali/articles/c6783v3r2mx3o?at_medium=RSS&at_campaign=rss",
      "originalHeadline": "পত্রিকা: 'সিনিয়র কর্মকর্তাদের ইনক্রিমেন্ট কমছে, সবার বাসা ভাড়াও কমানো হচ্ছে'",
      "scannedAt": "2026-09-14T21:31:43.000Z"
    },
    "publishedAt": "2026-09-14T21:31:43.000Z",
    "readTimeBn": "২ মিনিট",
    "readTimeEn": "2 min read",
    "imageUrl": "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "Bangladesh economy",
      "austerity",
      "poverty",
      "Dhaka"
    ],
    "isLeadStory": false
  },
  {
    "id": "3",
    "slug": "india-sends-hilsa-to-bangladesh",
    "title": "ভারত এখন বাংলাদেশে ইলিশ পাঠাচ্ছে",
    "englishTitle": "UNO reverse: India is now sending hilsa to Bangladesh",
    "banglaTitle": "ভারত এখন বাংলাদেশে ইলিশ পাঠাচ্ছে",
    "summaryBn": "চলতি অর্থবছরের প্রথম দুই মাসে ভারত থেকে বাংলাদেশে ৩.৫ লক্ষ কেজির বেশি ইলিশ আমদানি হয়েছে। ভারতীয় মিডিয়া এটিকে ‘ইউএনও রিভার্স’ বলে মজা করে报道 করেছে।",
    "summaryEn": "In the first two months of the fiscal year, Bangladesh imported over 352,000 kg of hilsa from India. Indian media humorously calls it a 'UNO reverse'.",
    "keyPointsBn": [
      "জুলাই-আগস্টে ৩,৫২,৪৮৪ কেজি ইলিশ ভারত থেকে আমদানি",
      "ঐতিহ্যগতভাবে বাংলাদেশ ভারতকে ইলিশ রপ্তানি করে, এখন উল্টো",
      "ভারতীয় মিডিয়া হালকা মেজাজে খবরটি পরিবেশন করেছে"
    ],
    "keyPointsEn": [
      "352,484 kg hilsa imported from India in July-August",
      "Traditionally Bangladesh exports hilsa to India, now reversed",
      "Indian media presents the news in a light-hearted manner"
    ],
    "category": "trade",
    "categoryLabelBn": "সীমান্ত বাণিজ্য ও বন্দর",
    "categoryLabelEn": "Cross-Border Trade",
    "sentiment": "positive",
    "sentimentReasonBn": "ভারতীয় মিডিয়া এই বাণিজ্যকে হালকা মেজাজে উপস্থাপন করেছে, যা দ্বিপাক্ষিক বাণিজ্য সম্পর্কের ইতিবাচক দিক তুলে ধরে।",
    "sentimentReasonEn": "Indian media presents this trade in a light-hearted manner, highlighting a positive aspect of bilateral trade relations.",
    "source": {
      "name": "India Today",
      "bureau": "Delhi",
      "language": "English",
      "originalUrl": "https://www.indiatoday.in/newsmo/short-videos/uno-reverse-india-is-now-sending-hilsa-to-bangladesh-2994581-2026-09-14?utm_source=rss",
      "originalHeadline": "UNO reverse: India is now sending hilsa to Bangladesh",
      "scannedAt": "2026-09-14T16:20:17.000Z"
    },
    "publishedAt": "2026-09-14T16:20:17.000Z",
    "readTimeBn": "১ মিনিট",
    "readTimeEn": "1 min read",
    "imageUrl": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "hilsa",
      "trade",
      "India-Bangladesh",
      "import"
    ],
    "isLeadStory": false
  },
  {
    "id": "4",
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
    "tags": [
      "India Today",
      "Tribunal",
      "Politics",
      "Dhaka",
      "Awami League"
    ],
    "isLeadStory": false
  },
  {
    "id": "5",
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
    "tags": [
      "India Today",
      "Cyber Security",
      "Border",
      "Investigation",
      "Gujarat Police"
    ],
    "isLeadStory": false,
    "isTrending": true
  },
  {
    "id": "6",
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
    "tags": [
      "NDTV",
      "Diplomacy",
      "Delhi",
      "Dhaka",
      "Bilateral Ties"
    ],
    "isLeadStory": false,
    "isTrending": true
  },
  {
    "id": "7",
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
    "categoryLabelBn": "সীমান্ত নিরাপত্তা",
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
    "id": "8",
    "slug": "wion-bangladesh-foreign-policy-reset-south-asia",
    "title": "Strategic Realignment: How Bangladesh's Foreign Policy Reset Is Reshaping South Asian Geopolitics",
    "englishTitle": "Strategic Realignment: How Bangladesh's Foreign Policy Reset Is Reshaping South Asian Geopolitics",
    "banglaTitle": "কৌশলগত পুনর্বিন্যাস: বাংলাদেশের পররাষ্ট্রনীতির রূপান্তর কীভাবে দক্ষিণ এশিয়ার ভূরাজনীতিকে প্রভাবিত করছে — উইওনের বিশ্লেষণ",
    "summaryBn": "আন্তর্জাতিক টেলিভিশন নেটওয়ার্ক উইওনের বিশেষ প্রতিবেদনে বলা হয়েছে, ঢাকা এখন বহুমুখী কূটনীতির অংশ হিসেবে প্রতিবেশী ভারতের বাইরে আঞ্চলিক পরাশক্তিদের সঙ্গে ভারসাম্য বজায় রাখার কৌশল গ্রহণ করছে, যা দক্ষিণ এশিয়ার দীর্ঘমেয়াদী ভূরাজনীতিতে প্রভাব ফেলবে।",
    "summaryEn": "In a broadcast analysis, global television network WION examines Bangladesh's evolving diplomatic posture, noting that Dhaka is actively balancing its regional partnerships while seeking an interest-based equilibrium with New Delhi.",
    "keyPointsBn": [
      "উইওনের আন্তর্জাতিক ডেস্কে বাংলাদেশের কূটনৈতিক রূপান্তরের বিশদ পর্যালোচনা",
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
    "tags": [
      "WION",
      "Diplomacy",
      "Geopolitics",
      "South Asia",
      "Foreign Policy"
    ],
    "isLeadStory": false
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
    "imageUrl": "/images/bangabhaban-presidential-palace-dhaka.jpg",
    "tags": [
      "High Commission",
      "President",
      "Diplomacy",
      "Dhaka",
      "Bilateral Ties"
    ],
    "id": "9",
    "isLeadStory": false
  },
  {
    "id": "10",
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
    "tags": [
      "India Today",
      "Diplomacy",
      "Bilateral Ties",
      "Delhi",
      "Dhaka"
    ],
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
    "id": "11",
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
    "imageUrl": "/images/indian-visa-application-center-dhaka.jpg",
    "tags": [
      "Visa",
      "High Commission",
      "Dhaka",
      "Students",
      "Healthcare"
    ],
    "id": "12",
    "isLeadStory": false
  },
  {
    "id": "13",
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
    "tags": [
      "Times Now",
      "Border",
      "Security",
      "Siliguri Corridor",
      "Defense"
    ],
    "isLeadStory": false
  },
  {
    "id": "14",
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
    "tags": [
      "Republic TV",
      "Politics",
      "Law and Order",
      "Society",
      "Human Rights"
    ],
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
    "imageUrl": "/images/hilsa-fish-trade-export.jpg",
    "tags": [
      "Hilsa",
      "Trade",
      "Exports",
      "Kolkata",
      "Petrapole"
    ],
    "id": "15",
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
    "imageUrl": "/images/teesta-river-barrage-jrc.jpg",
    "tags": [
      "Teesta",
      "Water Sharing",
      "JRC",
      "River",
      "Diplomacy"
    ],
    "id": "16",
    "isLeadStory": false
  },
  {
    "id": "17",
    "slug": "bangladesh-minister-india-fascination-reset-ties",
    "title": "Bangladesh minister says 'fascination with India must end', seeks reset of ties",
    "englishTitle": "Bangladesh minister says 'fascination with India must end', seeks reset of ties",
    "banglaTitle": "বাংলাদেশের মন্ত্রী বললেন 'ভারতের প্রতি মুগ্ধতা শেষ হোক', সম্পর্ক পুনর্গঠনের আহ্বান",
    "summaryBn": "বাংলাদেশের মন্ত্রী হুমায়ুন কবির বলেছেন, ভারতের প্রতি অতিরিক্ত মুগ্ধতা বন্ধ করে ঢাকার উচিত স্বাভাবিক দ্বিপাক্ষিক সম্পর্ক গড়ে তোলা। তিনি তারেক রহমানের জাতিসংঘ সফর বাতিলের প্রসঙ্গে বলেন, বাংলাদেশ এখন স্বাধীন পররাষ্ট্রনীতি অনুসরণ করছে।",
    "summaryEn": "Bangladesh minister Humaiun Kobir said Dhaka must end its 'excessive preoccupation' with India and approach ties as 'just another country'. He linked the reset to Bangladesh ruling out Tarique Rahman's UN visit, signaling a shift in foreign policy.",
    "keyPointsBn": [
      "ভারতের প্রতি মুগ্ধতা বন্ধের আহ্বান জানিয়েছেন বাংলাদেশের মন্ত্রী হুমায়ুন কবির",
      "তারেক রহমানের জাতিসংঘ সফর বাতিলের সিদ্ধান্তের সঙ্গে সম্পর্ক পুনর্গঠনের যোগসূত্র",
      "বাংলাদেশ এখন স্বাধীন ও ভারসাম্যপূর্ণ পররাষ্ট্রনীতি অনুসরণ করছে বলে দাবি"
    ],
    "keyPointsEn": [
      "Bangladesh minister Humaiun Kobir calls for ending 'fascination with India'",
      "Links reset to Dhaka ruling out Tarique Rahman's UN visit",
      "Claims Bangladesh now follows an independent, balanced foreign policy"
    ],
    "category": "diplomacy",
    "categoryLabelBn": "কূটনীতি ও দ্বিপাক্ষিক সম্পর্ক",
    "categoryLabelEn": "Diplomacy & Water",
    "sentiment": "negative",
    "sentimentReasonBn": "ভারতীয় মিডিয়া এই মন্তব্যকে 'বিতর্ক' হিসেবে চিহ্নিত করে ঢাকার 'ভারত-বিমুখ' অবস্থানকে নেতিবাচকভাবে ফ্রেম করেছে। সম্পর্ক পুনর্গঠনের আহ্বানকে ভারত-বিরোধী মনোভাব হিসেবে উপস্থাপন করা হয়েছে।",
    "sentimentReasonEn": "Indian media framed the statement as a 'row' and highlighted Dhaka's 'anti-India' posture, portraying the reset call negatively. The coverage emphasizes a drift in ties rather than constructive diplomacy.",
    "source": {
      "name": "The Indian Express World",
      "bureau": "Delhi",
      "language": "English",
      "originalUrl": "https://indianexpress.com/article/world/bangladesh-minister-humaiun-kobir-india-ties-reset-tarique-rahman-unga-10877038/",
      "originalHeadline": "'Fascination with India must end': Bangladesh minister sparks row",
      "scannedAt": "2026-09-15T08:00:00.000Z"
    },
    "publishedAt": "2026-09-14T07:36:41.000Z",
    "readTimeBn": "৩ মিনিট",
    "readTimeEn": "3 min read",
    "imageUrl": "/images/bangladesh-ministry-of-foreign-affairs.jpg",
    "tags": [
      "Bangladesh",
      "India",
      "diplomacy",
      "foreign policy",
      "Tarique Rahman"
    ],
    "isLeadStory": false
  },
  {
    "id": "18",
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
    "imageUrl": "/images/petrapole-benapole-trade-cargo.jpg",
    "tags": [
      "ABP Ananda",
      "Petrapole",
      "Benapole",
      "Trade",
      "Border Cargo"
    ],
    "isLeadStory": false
  },
  {
    "id": "19",
    "slug": "bangladesh-imports-hilsa-from-india",
    "title": "ভারত থেকে বাংলাদেশে টনে টনে ইলিশ আমদানি কেন হচ্ছে",
    "englishTitle": "Why Bangladesh is importing tons of hilsa from India",
    "banglaTitle": "ভারত থেকে বাংলাদেশে টনে টনে ইলিশ আমদানি কেন হচ্ছে",
    "summaryBn": "চলতি অর্থবছরের প্রথম দুই মাসে ভারত থেকে বাংলাদেশে ৩.৫ লক্ষ কেজির বেশি ইলিশ আমদানি হয়েছে। স্থানীয় বাজারে চাহিদা মেটাতে এই আমদানি।",
    "summaryEn": "In the first two months of the fiscal year, Bangladesh imported over 352,000 kg of hilsa from India. The import aims to meet local demand.",
    "keyPointsBn": [
      "জুলাই-আগস্টে ৩,৫২,৪৮৪ কেজি ইলিশ আমদানি",
      "স্থানীয় বাজারে চাহিদা মেটাতে আমদানি",
      "ঐতিহ্যগতভাবে বাংলাদেশ ইলিশ রপ্তানি করত, এখন আমদানি করছে"
    ],
    "keyPointsEn": [
      "352,484 kg hilsa imported in July-August",
      "Import to meet local market demand",
      "Traditionally Bangladesh exported hilsa, now importing"
    ],
    "category": "trade",
    "categoryLabelBn": "সীমান্ত বাণিজ্য ও বন্দর",
    "categoryLabelEn": "Cross-Border Trade",
    "sentiment": "neutral",
    "sentimentReasonBn": "বিবিসি বাংলা তথ্যভিত্তিক প্রতিবেদন করেছে, কোনো পক্ষপাত ছাড়াই আমদানির কারণ ব্যাখ্যা করেছে।",
    "sentimentReasonEn": "BBC Bengali provides a factual report, explaining the reasons for import without bias.",
    "source": {
      "name": "BBC Bengali",
      "bureau": "Delhi",
      "language": "Bengali",
      "originalUrl": "https://www.bbc.com/bengali/articles/cmz7znp5477qo?at_medium=RSS&at_campaign=rss",
      "originalHeadline": "ভারত থেকে বাংলাদেশে টনে টনে ইলিশ আমদানি কেন হচ্ছে",
      "scannedAt": "2026-09-14T06:52:51.000Z"
    },
    "publishedAt": "2026-09-14T06:52:51.000Z",
    "readTimeBn": "২ মিনিট",
    "readTimeEn": "2 min read",
    "imageUrl": "/images/hilsa-fish-market-trade.jpg",
    "tags": [
      "hilsa",
      "import",
      "India-Bangladesh",
      "trade"
    ],
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
    "id": "20",
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
    "categoryLabelBn": "সীমান্ত নিরাপত্তা",
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
    "imageUrl": "/images/bsf-ganga-river-rescue.jpg",
    "tags": [
      "BSF",
      "Border",
      "Humanitarian",
      "Rescue",
      "Ganga"
    ],
    "id": "21",
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
    "id": "22",
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
    "categoryLabelBn": "সীমান্ত নিরাপত্তা",
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
    "id": "23",
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
    "id": "24",
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
    "id": "25",
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
    "id": "26",
    "isLeadStory": false
  },
  {
    "id": "27",
    "slug": "india-bangladesh-ties-tarique-rahman",
    "title": "তারেক রহমানের অধীনে ভারত-বাংলাদেশ সম্পর্ক পুনরায় সেট করা সম্ভব?",
    "englishTitle": "Expert Explains | Can India and Bangladesh reset ties under Tarique Rahman?",
    "banglaTitle": "তারেক রহমানের অধীনে ভারত-বাংলাদেশ সম্পর্ক পুনরায় সেট করা সম্ভব?",
    "summaryBn": "বিশেষজ্ঞদের মতে, তারেক রহমানের নেতৃত্বে ভারত-বাংলাদেশ সম্পর্কের নতুন অধ্যায় শুরু হতে পারে। তবে অতীতের রাজনৈতিক জটিলতা বিবেচনায় সতর্কতা প্রয়োজন।",
    "summaryEn": "Experts suggest that under Tarique Rahman's leadership, India-Bangladesh relations could see a new chapter. However, past political complexities warrant caution.",
    "keyPointsBn": [
      "তারেক রহমানের নেতৃত্বে সম্পর্ক পুনর্গঠনের সম্ভাবনা",
      "অতীতের রাজনৈতিক জটিলতা ও সতর্কতা",
      "ভারতীয় বিশ্লেষকরা সম্ভাবনার দিকটি তুলে ধরেছেন"
    ],
    "keyPointsEn": [
      "Potential for resetting ties under Tarique Rahman",
      "Past political complexities and caution",
      "Indian analysts highlight the potential"
    ],
    "category": "diplomacy",
    "categoryLabelBn": "কূটনীতি ও দ্বিপাক্ষিক সম্পর্ক",
    "categoryLabelEn": "Diplomacy & Water",
    "sentiment": "neutral",
    "sentimentReasonBn": "ভারতীয় মিডিয়া বিশ্লেষণমূলক দৃষ্টিভঙ্গি নিয়েছে, সম্ভাবনা ও চ্যালেঞ্জ উভয়ই তুলে ধরেছে, তাই নিরপেক্ষ।",
    "sentimentReasonEn": "Indian media takes an analytical view, highlighting both potential and challenges, hence neutral.",
    "source": {
      "name": "The Indian Express",
      "bureau": "Delhi",
      "language": "English",
      "originalUrl": "https://news.google.com/rss/articles/CBMi2wFBVV95cUxNRGtLZm5yTmt3UDQyUjFSSzBMVUxPeVhHSHg5dWtjYmo4X2JFdHBsRi1GQ05mZ1NiTEVwZXFQV3AyOWZ2blVEMnRCN3lKZS13cnhER2N2Z3VWTC1oWDZObDE5NHZUZmFuVUo2cDRjMGFfaG1XeHZNRjFad1dzTnNGc0R5bmNvcktQbHNxSzJBUU1VbEg0MUpza0g3SmdaRzRjWTA4QXlNa19VT0VZcThQTDRKV21qR19IWWRVOGJ3cGZOeFpJanY3ZUp2RmNmV1haMnJvZXYybTU4d0nSAeIBQVVfeXFMT0J3SzJ2WUxCU1pvRDJtVzJON1lVTVFBRXBGcU5qX1gwdXhwNGhYandON3NwemRiOVR1NHhtQ1FrRWhKSzllYXBHcUtFV3Q5clFEcU9wWHBSQ0V4WnplR2ZKYUczemVOR05NdlZPd0ZjQUlsZ2NyeUZlQUVaQTFoX25FWWRTRDBfeEFHdFltNlFRSFBZVk1mN3NpQXBvNVh4ZlhaNTBNR3hBN2JaWXlxeU1PZVI2dk1SczhhMXRwVVpsUXdsUlVSU2tib3YwS08zODBiUGNzVk9vSzRYLWloY0dRdw?oc=5",
      "originalHeadline": "Expert Explains | Can India and Bangladesh reset ties under Tarique Rahman?",
      "scannedAt": "2026-09-13T21:46:01.000Z"
    },
    "publishedAt": "2026-09-13T21:46:01.000Z",
    "readTimeBn": "৩ মিনিট",
    "readTimeEn": "3 min read",
    "imageUrl": "/images/bangladesh-ministry-of-foreign-affairs.jpg",
    "tags": [
      "Tarique Rahman",
      "India-Bangladesh",
      "diplomacy",
      "BNP"
    ],
    "isLeadStory": false
  },
  {
    "id": "28",
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
    "isLeadStory": false
  },
  {
    "id": "29",
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
    "tags": [
      "India Today",
      "Sports",
      "Cricket",
      "Asia Cup",
      "Women's Cricket"
    ],
    "isLeadStory": false
  },
  {
    "id": "30",
    "slug": "bangladesh-brics-summit-no-dhaka-representation",
    "title": "No Dhaka representation at BRICS Summit as Bangladesh rules out Rahman's visit",
    "englishTitle": "No Dhaka representation at BRICS Summit as Bangladesh rules out Rahman's visit",
    "banglaTitle": "ব্রিকস শীর্ষ সম্মেলনে ঢাকার প্রতিনিধিত্ব নেই, তারেক রহমানের সফর বাতিল",
    "summaryBn": "বাংলাদেশ ব্রিকস শীর্ষ সম্মেলনে যোগ দিচ্ছে না এবং তারেক রহমানের ভারত সফরের সম্ভাবনা নাকচ করেছে। ঢাকার এই সিদ্ধান্তকে ভারতীয় মিডিয়া দ্বিপাক্ষিক সম্পর্কের শীতলতার লক্ষণ হিসেবে দেখছে।",
    "summaryEn": "Bangladesh will not attend the BRICS Summit and has ruled out Tarique Rahman's visit to India. Indian media interprets this as a sign of cooling bilateral ties and Dhaka's recalibration of foreign policy.",
    "keyPointsBn": [
      "ব্রিকস শীর্ষ সম্মেলনে বাংলাদেশের অনুপস্থিতি",
      "তারেক রহমানের ভারত সফর বাতিলের ঘোষণা",
      "ভারত-বাংলাদেশ সম্পর্কের শীতলতার ইঙ্গিত"
    ],
    "keyPointsEn": [
      "Bangladesh absent from BRICS Summit",
      "Dhaka rules out Tarique Rahman's India visit",
      "Signals cooling of India-Bangladesh ties"
    ],
    "category": "diplomacy",
    "categoryLabelBn": "কূটনীতি ও দ্বিপাক্ষিক সম্পর্ক",
    "categoryLabelEn": "Diplomacy & Water",
    "sentiment": "neutral",
    "sentimentReasonBn": "ভারতীয় মিডিয়া ঘটনাটিকে নিরপেক্ষভাবে রিপোর্ট করেছে, তবে সম্পর্কের অবনতির ইঙ্গিত দিয়েছে। কোনো পক্ষকে দোষারোপ না করে কূটনৈতিক দূরত্বের বর্ণনা দিয়েছে।",
    "sentimentReasonEn": "Indian media reported the event neutrally, noting the diplomatic distance without assigning blame. The tone is factual, highlighting a shift in Bangladesh's engagement.",
    "source": {
      "name": "The Indian Express World",
      "bureau": "Delhi",
      "language": "English",
      "originalUrl": "https://indianexpress.com/article/world/tarique-rahman-brics-summit-india-visit-bangladesh-response-10872092/",
      "originalHeadline": "No Dhaka representation at BRICS Summit as Bangladesh rules out Rahman's visit",
      "scannedAt": "2026-09-15T08:00:00.000Z"
    },
    "publishedAt": "2026-09-10T12:33:25.000Z",
    "readTimeBn": "২ মিনিট",
    "readTimeEn": "2 min read",
    "imageUrl": "/images/bangladesh-ministry-of-foreign-affairs.jpg",
    "tags": [
      "Bangladesh",
      "BRICS",
      "Tarique Rahman",
      "diplomacy"
    ],
    "isLeadStory": false
  },
  {
    "id": "31",
    "slug": "saima-wazed-quits-who-post",
    "title": "Sheikh Hasina's daughter Saima quits WHO post after termination recommendation",
    "englishTitle": "Sheikh Hasina's daughter Saima quits WHO post after termination recommendation",
    "banglaTitle": "শেখ হাসিনার কন্যা সায়মা ডব্লিউএইচও পদ ছাড়লেন, প্রত্যাহারের সুপারিশের একদিন পর",
    "summaryBn": "শেখ হাসিনার কন্যা সায়মা ওয়াজেদ ডব্লিউএইচও-র পদ থেকে পদত্যাগ করেছেন, সংস্থাটি তার বিরুদ্ধে প্রতারণার অভিযোগে পদ বাতিলের সুপারিশ করার একদিন পর। ভারতীয় মিডিয়া এটিকে হাসিনা পরিবারের রাজনৈতিক পতনের ধারাবাহিকতা হিসেবে দেখছে।",
    "summaryEn": "Saima Wazed, daughter of Sheikh Hasina, resigned from her WHO post a day after the agency recommended her termination over fraud allegations. Indian media frames this as a continuation of the Hasina family's political downfall.",
    "keyPointsBn": [
      "প্রতারণার অভিযোগে ডব্লিউএইচও-র সুপারিশের পর সায়মার পদত্যাগ",
      "হাসিনা পরিবারের রাজনৈতিক প্রভাব হ্রাসের ইঙ্গিত",
      "আন্তর্জাতিক সংস্থায় বাংলাদেশের ভাবমূর্তি প্রশ্নবিদ্ধ"
    ],
    "keyPointsEn": [
      "Saima resigns after WHO recommends termination over fraud",
      "Signals declining political influence of Hasina family",
      "Raises questions about Bangladesh's image in international bodies"
    ],
    "category": "politics",
    "categoryLabelBn": "রাজনীতি ও নির্বাচন",
    "categoryLabelEn": "Politics & Governance",
    "sentiment": "negative",
    "sentimentReasonBn": "ভারতীয় মিডিয়া হাসিনা পরিবারের বিরুদ্ধে দুর্নীতির অভিযোগকে গুরুত্ব দিয়ে নেতিবাচকভাবে উপস্থাপন করেছে। সায়মার পদত্যাগকে রাজনৈতিক পতনের প্রতীক হিসেবে দেখানো হয়েছে।",
    "sentimentReasonEn": "Indian media highlighted the fraud allegations against the Hasina family, framing Saima's resignation as a symbol of political downfall. The coverage is critical and negative.",
    "source": {
      "name": "The Indian Express World",
      "bureau": "Delhi",
      "language": "English",
      "originalUrl": "https://indianexpress.com/article/world/bangladesh-saima-wazed-sheikh-hasina-daughter-fraud-allegation-resigns-who-post-10871087/",
      "originalHeadline": "Sheikh Hasina's daughter Saima quits WHO post, a day after it recommended her termination",
      "scannedAt": "2026-09-15T08:00:00.000Z"
    },
    "publishedAt": "2026-09-10T03:36:07.000Z",
    "readTimeBn": "২ মিনিট",
    "readTimeEn": "2 min read",
    "imageUrl": "/images/bangabhaban-presidential-palace-dhaka.jpg",
    "tags": [
      "Sheikh Hasina",
      "Saima Wazed",
      "WHO",
      "Bangladesh",
      "fraud"
    ],
    "isLeadStory": false
  },
  {
    "id": "32",
    "slug": "sheikh-hasina-daughter-resigns-who",
    "title": "শেখ হাসিনার কন্যা জালিয়াতির অভিযোগে ডব্লিউএইচও আঞ্চলিক প্রধান পদ থেকে পদত্যাগ করেছেন",
    "englishTitle": "Sheikh Hasina's Daughter Resigns As WHO Regional Head After Fraud Charges",
    "banglaTitle": "শেখ হাসিনার কন্যা জালিয়াতির অভিযোগে ডব্লিউএইচও আঞ্চলিক প্রধান পদ থেকে পদত্যাগ করেছেন",
    "summaryBn": "শেখ হাসিনার কন্যা সায়মা ওয়াজেদ জালিয়াতির অভিযোগে ডব্লিউএইচও আঞ্চলিক প্রধান পদ থেকে পদত্যাগ করেছেন। ভারতীয় মিডিয়া এটিকে হাসিনা পরিবারের দুর্নীতির প্রমাণ হিসেবে দেখছে।",
    "summaryEn": "Sheikh Hasina's daughter Saima Wazed resigned as WHO Regional Head after fraud charges. Indian media sees this as evidence of corruption in the Hasina family.",
    "keyPointsBn": [
      "সায়মা ওয়াজেদ জালিয়াতির অভিযোগে পদত্যাগ করেছেন",
      "ডব্লিউএইচও আঞ্চলিক প্রধান হিসেবে তিনি ছিলেন",
      "ভারতীয় মিডিয়া হাসিনা পরিবারের সমালোচনায় সরব"
    ],
    "keyPointsEn": [
      "Saima Wazed resigned after fraud charges",
      "She was WHO Regional Head",
      "Indian media vocal in criticizing Hasina family"
    ],
    "category": "politics",
    "categoryLabelBn": "রাজনীতি ও নির্বাচন",
    "categoryLabelEn": "Politics & Governance",
    "sentiment": "negative",
    "sentimentReasonBn": "ভারতীয় মিডিয়া এই পদত্যাগকে হাসিনা পরিবারের দুর্নীতির প্রমাণ হিসেবে উপস্থাপন করছে, যা নেতিবাচক।",
    "sentimentReasonEn": "Indian media presents this resignation as evidence of corruption in the Hasina family, which is negative.",
    "source": {
      "name": "NDTV",
      "bureau": "Delhi",
      "language": "English",
      "originalUrl": "https://news.google.com/rss/articles/CBMiwwFBVV95cUxPemExY1Y5WW5KYjk4SWxOdjk1MFhYdnB6VGU4WjdJa1lyZ3Z5M1NReVl0c05MMHNYUHZCS3p2OU9aSlAtWDUtUXpoc2FoU2RHZWhhazhGank3aHdqOXlwLVMyTDhIemY0dzF1SUpzRVNkMXBkMTZhQ2stSkNwVml6MUMtcDB2c19sTmMzT09hNDV3QTZ0SXBTYmtkUUROQVVEZ1ZyMExTVUZsWVQxejdNMlpzWkREU1VqS0xBUmVyb00tQVHSAcsBQVVfeXFMTmxCWFgxSlc5Tkp5U3lpSk9hdXlLYlV0enh0bl94TXVUXzktYzhvWHkwYnJ6TFlSTXF3b19mRDVfQlhyUmZQNG5JUzVjUm5yUmF4eS1SYzdVUjM3U1IxUFhDSzJtVGRUWlhlYWs1WlpvUWlWR2xDeEROeU43TnB2WGk0Sl85MlFqc1UxVHIyS1lEdGJhR21xajlMbS11OU5DNzF1c1hYT1FfcXpTNElYVTFUQ2dxLW9xdXowVGtselhFQVYzS2tKNk53SG8?oc=5",
      "originalHeadline": "Sheikh Hasina's Daughter Resigns As WHO Regional Head After Fraud Charges",
      "scannedAt": "2026-09-09T17:48:11.000Z"
    },
    "publishedAt": "2026-09-09T17:48:11.000Z",
    "readTimeBn": "২ মিনিট",
    "readTimeEn": "2 min read",
    "imageUrl": "/images/saima-wazed-who.jpg",
    "tags": [
      "Sheikh Hasina",
      "Saima Wazed",
      "WHO",
      "corruption"
    ],
    "isLeadStory": false
  },
  {
    "id": "33",
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
    "tags": [
      "India Today",
      "Defence",
      "Military Cooperation",
      "Security",
      "Delhi"
    ],
    "isLeadStory": false
  },
  {
    "id": "34",
    "slug": "bangladesh-durga-puja-hindu-safety",
    "title": "Ahead of Durga Puja, Bangladesh government promises support, safety for Hindu minority",
    "englishTitle": "Ahead of Durga Puja, Bangladesh government promises support, safety for Hindu minority",
    "banglaTitle": "দুর্গাপূজার আগে হিন্দু সংখ্যালঘুদের নিরাপত্তার প্রতিশ্রুতি বাংলাদেশ সরকারের",
    "summaryBn": "দুর্গাপূজার আগে বাংলাদেশ সরকার হিন্দু সংখ্যালঘুদের নিরাপত্তা ও সহায়তার প্রতিশ্রুতি দিয়েছে। ভারতীয় মিডিয়া এই প্রতিশ্রুতিকে স্বাগত জানালেও সংখ্যালঘু নিরাপত্তা নিয়ে সন্দেহ প্রকাশ করেছে।",
    "summaryEn": "Ahead of Durga Puja, the Bangladesh government promised support and safety for the Hindu minority. Indian media welcomed the assurance but expressed skepticism about the ground reality of minority security.",
    "keyPointsBn": [
      "দুর্গাপূজার আগে হিন্দুদের নিরাপত্তার প্রতিশ্রুতি",
      "ভারতীয় মিডিয়ার স্বাগত জানানো, তবে সন্দেহ প্রকাশ",
      "সংখ্যালঘু নিরাপত্তা নিয়ে উদ্বেগ অব্যাহত"
    ],
    "keyPointsEn": [
      "Bangladesh promises safety for Hindus ahead of Durga Puja",
      "Indian media welcomes but remains skeptical",
      "Concerns over minority security persist"
    ],
    "category": "culture",
    "categoryLabelBn": "সংস্কৃতি ও সাহিত্য",
    "categoryLabelEn": "Culture & Arts",
    "sentiment": "positive",
    "sentimentReasonBn": "ভারতীয় মিডিয়া সরকারের প্রতিশ্রুতিকে ইতিবাচকভাবে রিপোর্ট করেছে, যদিও সতর্কতা রয়েছে। সংখ্যালঘু নিরাপত্তার বিষয়ে আশাবাদ প্রকাশ করা হয়েছে।",
    "sentimentReasonEn": "Indian media reported the government's assurance positively, though with caution. The coverage expresses hope for minority safety during the festival.",
    "source": {
      "name": "The Indian Express World",
      "bureau": "Delhi",
      "language": "English",
      "originalUrl": "https://indianexpress.com/article/world/durga-puja-bangladesh-government-promises-support-safety-hindu-minorities-10868001/",
      "originalHeadline": "Ahead of Durga Puja, Bangladesh government promises support, safety for Hindu minority",
      "scannedAt": "2026-09-15T08:00:00.000Z"
    },
    "publishedAt": "2026-09-08T05:20:43.000Z",
    "readTimeBn": "২ মিনিট",
    "readTimeEn": "2 min read",
    "imageUrl": "/images/dhakeshwari-national-temple-dhaka.jpg",
    "tags": [
      "Durga Puja",
      "Hindu minority",
      "Bangladesh",
      "minority safety"
    ],
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
