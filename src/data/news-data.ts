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
  { slug: 'border', labelBn: 'সীমান্ত নিরাপত্তা', labelEn: 'Border & Security', icon: 'Shield' },
  { slug: 'economy', labelBn: 'অর্থনীতি ও বিদ্যুৎ', labelEn: 'Economy & Energy', icon: 'Building2' },
  { slug: 'sports', labelBn: 'ক্রীড়া ও ক্রিকেট', labelEn: 'Sports & Cricket', icon: 'Trophy' },
  { slug: 'culture', labelBn: 'সংস্কৃতি ও সাহিত্য', labelEn: 'Culture & Arts', icon: 'Sparkles' },
];

export const SCANNER_STATS = {
  "totalScanned24h": 1142,
  "bangladeshMatches": 291,
  "sentimentDistribution": {
    "positive": 1,
    "neutral": 3,
    "negative": 2
  },
  "bureauDistribution": {
    "delhi": 4,
    "kolkata": 2
  },
  "languageDistribution": {
    "english": 4,
    "bengali": 2,
    "hindi": 0
  }
};

export const BREAKING_NEWS_ALERTS: BreakingAlert[] = [
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
    "isLeadStory": true
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
    "imageUrl": "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=1200&auto=format&fit=crop&q=80",
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
    "imageUrl": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
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
    "imageUrl": "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=1200&auto=format&fit=crop&q=80",
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
    "imageUrl": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
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
    "imageUrl": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
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
    "imageUrl": "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=1200&auto=format&fit=crop&q=80",
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
    "imageUrl": "/images/bangabhaban-presidential-palace-dhaka.jpg",
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
    "imageUrl": "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=1200&auto=format&fit=crop&q=80",
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
