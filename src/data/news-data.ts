export type SentimentType = 'positive' | 'negative' | 'neutral';
export type LanguageType = 'English' | 'Bengali' | 'Hindi' | 'Tamil' | 'Telugu' | 'Marathi' | 'Malayalam' | 'Assamese' | 'Gujarati' | 'Punjabi';
export type BureauType = 'Delhi' | 'Kolkata' | 'Mumbai' | 'Tripura' | 'Assam' | 'Siliguri';

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
  mediaFormat?: 'rss' | 'youtube' | 'instagram' | string;
  videoUrl?: string;
  instagramEmbedUrl?: string;
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
  "totalScanned24h": 4108,
  "bangladeshMatches": 1112,
  "sentimentDistribution": {
    "positive": 30,
    "neutral": 40,
    "negative": 30
  },
  "bureauDistribution": {
    "delhi": 48,
    "kolkata": 30,
    "mumbai": 12,
    "tripura": 5,
    "assam": 3,
    "siliguri": 2
  },
  "languageDistribution": {
    "english": 42,
    "bengali": 32,
    "hindi": 16,
    "tamil": 3,
    "telugu": 3,
    "marathi": 2,
    "malayalam": 2
  }
};

export const BREAKING_NEWS_ALERTS: BreakingAlert[] = [
  {
    "id": "alert-050",
    "headlineBn": "‘আওয়ামী লীগের পুনরুজ্জীবনের লক্ষ্যে নেতাকর্মীদের আইনি সুরক্ষা নিশ্চিতের আহ্বান হাসিনার’: আনন্দবাজার পত্রিকা",
    "headlineEn": "Anandabazar Patrika: Sheikh Hasina Urges Legal Safeguards for Party Cadres to Rebuild Awami League on Ground",
    "timeAgoBn": "৫ মিনিট আগে",
    "timeAgoEn": "5 mins ago",
    "sourceName": "Anandabazar Patrika",
    "sourceBureau": "Kolkata",
    "sentiment": "neutral",
    "url": "https://news.google.com/rss/articles/CBMivAFBVV95cUxON0pPMXNIYW5qRm9kMXlQWEEtOHFZTmtjX2daUjFhem9PS212RjhEeEtGQnUxLVNVUnlWTkxZX3o5WVJTU2tlZjE0RjV6SVJSVG16TjZiRzU0WHhwRVE5TjJncXV3bVJTc29RMjBuaU5tLWY3VnRSd3loazBITWx4N1ZBallBcXIxMk9WTWJGX1U0LTdCaWN5djdfMHlpV2NuNVpKSGgzcW1QT1A3ZjZxS2tZVGZDWmJWOUpfcdIBwgFBVV95cUxPR2NjN3ZtTjNUSnZVWngxclZOYlNnM05XQmMwek9WOWZtWE52VHI2aGVfeWgxUWFUcHdRX003YnJRNHFrejB4Uk9iLWJCaTYtSkV1VE42NTlieEVDeEFBT2pRVzZFcFNUakMzTmdUaThfcmNsX3M2dlhUc2paVllsWkQxbzA2RVh5bEwwRHFmemhJelpMcU50WHJBTks5OUY4R2prai0wUnNGRGFsSG8wUFRxVzFRUWJpamRWQWlyZVQ3UQ?oc=5"
  },
  {
    "id": "alert-049",
    "headlineBn": "‘আগরতলা-ঢাকা-কলকাতা সরাসরি যাত্রীবাহী বাস চলাচল পুনরায় শুরু হওয়ায় স্বাগত জানালেন ত্রিপুরার মুখ্যমন্ত্রী’: ত্রিপুরা টাইমস",
    "headlineEn": "Tripura Times: Tripura CM Welcomes Resumption of Agartala-Dhaka-Kolkata International Bus Transit",
    "timeAgoBn": "১৫ মিনিট আগে",
    "timeAgoEn": "15 mins ago",
    "sourceName": "Tripura Times",
    "sourceBureau": "Tripura",
    "sentiment": "positive",
    "url": "https://news.google.com/rss/articles/CBMirgFBVV95cUxNb1hUVlFhMW5zMDhkTkFONnBkMHp"
  },
  {
    "id": "alert-048",
    "headlineBn": "‘ফল কূটনীতি: বাংলাদেশে ৬০০টি উন্নত জাতের কুইন আনারস উপহার পাঠাল ত্রিপুরা উদ্যানপালন দপ্তর’: ত্রিপুরা টাইমস",
    "headlineEn": "Tripura Times: Fruit Diplomacy - Tripura Dispatches 600 Queen Pineapples Consignment as Goodwill Gift to Bangladesh",
    "timeAgoBn": "২৫ মিনিট আগে",
    "timeAgoEn": "25 mins ago",
    "sourceName": "Tripura Times",
    "sourceBureau": "Tripura",
    "sentiment": "positive",
    "url": "https://news.google.com/rss/articles/CBMi0wFBVV95cUxPSnJIcWlSc2tqeDE3OXVJTC1CMUF"
  },
  {
    "id": "alert-047",
    "headlineBn": "‘ঢাকার আইসিটি ট্রাইব্যুনাল কর্তৃক ৭ নেতার মৃত্যুদণ্ডকে একপাক্ষিক দাবি করে প্রত্যাখ্যান আওয়ামী লীগের’: দ্য আসাম ট্রাইব্যুনাল",
    "headlineEn": "The Assam Tribune: Awami League Rejects ICT Death Sentences for 7 Party Leaders as One-Sided & Fabricated",
    "timeAgoBn": "৫ মিনিট আগে",
    "timeAgoEn": "5 mins ago",
    "sourceName": "The Assam Tribune",
    "sourceBureau": "Assam",
    "sentiment": "negative",
    "url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxOLW0wRzdDLWh1V1EteE03aW9vZGRib29tWlUxN29hLUUzWHVtaG94N2FTOVRybllDbF9CU3pORnBXdGJjX2pPbEs1ZExYb2JPcTRmRjhpTDQ5QkRpdTR5SDlhOFZTSHg3M0psRGtEbDFtYXpBam1fVnhFa3FLWXFKd1hFVlBCdlo1amE1Z1VqelVITFlSdU1obGU5aG55Y1E1dVdZejU4d2dmSUJNZS1WSzR30gG3AUFVX3lxTE8wa2c0bzUtREdXX3J6b0pjY3FYSjVvTjFzeGVESGgzMm5DVW53bFNmS1NkQzl4eXBrQjNQZTJwVVVvdWt4ODVGajg1T3RjVlFKaks0NnNiZXFzbkM5SlVSMGl6aWpaNmZCcThlVjNsTkkySGtlbFl3WkhySmpuRkdGU014U3Z4QU9fZ3JtM1Vhd0N5ZU9qeW8wWllFUC1Jb3BZNVhIb0FteC1kT2tzS0FNRzZSTVNlTQ?oc=5"
  },
  {
    "id": "alert-046",
    "headlineBn": "‘পেট্রাপোল স্থলবন্দরে পচনশীল রপ্তানি পণ্যের দ্রুত খালাসে কাস্টমস ও বিএসএফের বিশেষ গ্রিন চ্যানেল চালু’: সংবাদ প্রতিদিন",
    "headlineEn": "Sangbad Pratidin: Petrapole ICP Launches Green-Channel Freight Clearance for Perishable Export Cargo",
    "timeAgoBn": "২০ মিনিট আগে",
    "timeAgoEn": "20 mins ago",
    "sourceName": "Sangbad Pratidin",
    "sourceBureau": "Kolkata",
    "sentiment": "positive",
    "url": "https://sangbadpratidin.in/bengal/petrapole-benapole-icp-green-channel-freight-clearance-20260922"
  },
  {
    "id": "alert-045",
    "headlineBn": "‘হাসিনা আমলে স্বাক্ষরিত ১০১টি দ্বিপাক্ষিক চুক্তি পুনর্মূল্যায়ন করছে ঢাকা; জাতীয় স্বার্থ রক্ষায় কঠোর বার্তা ভারতের’: জি নিউজ",
    "headlineEn": "Zee News: 'India Will Protect Core Interests' - Delhi Responds as Bangladesh Reviews 101 Hasina-Era Accords",
    "timeAgoBn": "এই মাত্র",
    "timeAgoEn": "Just now",
    "sourceName": "Zee News World",
    "sourceBureau": "Delhi",
    "sentiment": "neutral",
    "url": "https://zeenews.india.com/world/bangladesh-reviews-101-india-deals-chattogram-mongla-ports-mea-response-3072451.html"
  },
  {
    "id": "alert-044",
    "headlineBn": "‘হাসিনা কাঁটার মধ্যেও দ্বিপাক্ষিক বাণিজ্যে গতি ফেরাতে ভারত-বাংলাদেশ যৌথ টাস্কফোর্স গঠনের উদ্যোগ’: সংবাদ প্রতিদিন",
    "headlineEn": "Sangbad Pratidin: India-Bangladesh Joint Task Force Proposed to Expedite Cross-Border Freight & Trade",
    "timeAgoBn": "১ ঘণ্টা আগে",
    "timeAgoEn": "1 hour ago",
    "sourceName": "Sangbad Pratidin",
    "sourceBureau": "Kolkata",
    "sentiment": "positive",
    "url": "https://news.google.com/rss/articles/CBMiyAFBVV95cUxOMGprNTl4Qm44NmJpWTdxZm5xX0NFdlg1Z3pCZzUxNHB2TmFSb2pVY2xyYm90Zm15a3V4R05PY2x4VHNkT2NZRDlzOHFiNHJzY2NCazdOYXl5cTkyVkdKNk9aTmt0WmNFckdDMmY3bV84dTRKbV9jYjQ0UVh2NVFOejFkUjlVb19VZlVyLVdQZ3pvVEJUV0JJdzlKUjRQWnVRU1JSTTUyOExFYUhLbjMtdklRM3dRekdENGxCN25xT1luX2N5aXFrX9IB0AFBVV95cUxNZS1CMnJLOVU4UGdpaG4zQ3JRckdTc0pyQnhwanhZclVXUHU4Y0dfcGhyZlVrMUlXcFltd2FBdUZkX1lZbW5UN0ZoQWpSTGlHNXp0MGF3cGkwdjFrX3QtZ0JWWlhvczR0dVRkdFNLLWdKVHVTTDkzM2NSNXhITFdmT09jTm9EZFl2SVFSSF93cG82aFVLc2VtTDBNQ2N3ekN1cWtwRFVYQmZWMV9VWjlUQXFoZ2dWVUEzTjdMbXVoNEZrRUJsZC1lOFE4bkd0cnFY?oc=5"
  },
  {
    "id": "alert-043",
    "headlineBn": "‘বাংলাদেশকে পাকিস্তানের সমান্তরাল ভাবা ভারতের কৌশলগত স্বার্থের জন্য ক্ষতিকর’: দ্যপ্রিন্ট ভিডিও বিশ্লেষণ",
    "headlineEn": "ThePrint Video: 'Treating Bangladesh as Pakistan Mirror Image Undermines India Strategic Interests'",
    "timeAgoBn": "ভিডিও বিশ্লেষণ",
    "timeAgoEn": "Video Dispatch",
    "sourceName": "ThePrint (YouTube)",
    "sourceBureau": "Delhi",
    "sentiment": "positive",
    "url": "https://news.google.com/rss/articles/CBMiVkFVX3lxTE1BX3FHWFVDMS1mRldYelVRY0FtZkpWaUllZ0ptQ0QwbzItQUFQellZZHl6ak9mQmhyeWpPcXhFX1c1T3I4UjN5andGQTZZZ1cxMmdMVU1n?oc=5"
  },
  {
    "id": "alert-042",
    "headlineBn": "‘গেদে ও পেট্রাপোল সীমান্তে অবৈধ অনুপ্রবেশ রুখতে কৃত্রিম বুদ্ধিমত্তা ও থার্মাল ক্যামেরা মোতায়েন’: টিভি৯ বাংলা",
    "headlineEn": "TV9 Bangla: AI Thermal Scanners & Motion Cameras Deployed at Petrapole & Gede Crossings to Deter Infiltration",
    "timeAgoBn": "২ ঘণ্টা আগে",
    "timeAgoEn": "2 hours ago",
    "sourceName": "TV9 Bangla",
    "sourceBureau": "Kolkata",
    "sentiment": "neutral",
    "url": "https://tv9bangla.com/west-bengal/gede-petrapole-ai-thermal-camera-scanner-deployment-border-security-1102948.html"
  },
  {
    "id": "alert-041",
    "headlineBn": "‘ত্রিপুরা-কুমিল্লা সীমান্তে বিএসএফের নজরদারি জোরদার ও আখাউড়া চেকপোস্টে বিশেষ তল্লাশি’: স্যন্দন পত্রিকা",
    "headlineEn": "Syandan Patrika: BSF Heightens Border Vigilance & Inspection Along Tripura-Comilla Sector",
    "timeAgoBn": "আজ ভোরে",
    "timeAgoEn": "Early morning",
    "sourceName": "Syandan Patrika",
    "sourceBureau": "Tripura",
    "sentiment": "neutral",
    "url": "https://news.google.com/rss/articles/CBMiUkFVX3lxTE5fUHhSVDBkbG9GQ2lXOXdsZlFPR3E5VkFoSGVOMm1yTU5yWWs1T0E1aEVwMnI0Wm1DWTFiUDg3Zm55MTZUUjVNNGxLTEY4aDdJOEE?oc=5"
  },
  {
    "id": "alert-040",
    "headlineBn": "‘হাসিনা আমলে স্বাক্ষরিত ১০১টি দ্বিপাক্ষিক চুক্তি পুনর্মূল্যায়ন করছে ঢাকা; প্রতিক্রিয়া জানিয়ে ভারতের কড়া বার্তা’: জি নিউজ",
    "headlineEn": "Zee News: 'India Will Take All Necessary Measures' - Delhi Responds as Bangladesh Reviews 101 Hasina-Era Accords",
    "timeAgoBn": "এই মাত্র",
    "timeAgoEn": "Just now",
    "sourceName": "Zee News World",
    "sourceBureau": "Delhi",
    "sentiment": "neutral",
    "url": "https://zeenews.india.com/world/bangladesh-reviews-101-india-deals-chattogram-mongla-ports-mea-response-3072451.html"
  },
  {
    "id": "alert-039",
    "headlineBn": "‘এশিয়ান গেমসে শেফালির বিধ্বংসী সেঞ্চুরি, বাংলাদেশকে ১১৪ রানে হারিয়ে ফাইনালে ভারত’: দ্য টেলিগ্রাফ",
    "headlineEn": "Telegraph India: Shafali Verma's Maiden T20I Ton Powers India Past Bangladesh into Asian Games Final",
    "timeAgoBn": "১ ঘণ্টা আগে",
    "timeAgoEn": "1 hour ago",
    "sourceName": "Telegraph India",
    "sourceBureau": "Mumbai",
    "sentiment": "positive",
    "url": "https://news.google.com/rss/articles/CBMiVkFVX3lxTE5ITE1WYmYteUxrUVJKQWc1cDdQYjBIakphUDE0eVlkSUxDWDRsY1Z3bUVTczcxclBQcWxsQlNVMnBrWTdmeTNjUzk3MFdFeXVFUWJXQlZB?oc=5"
  },
  {
    "id": "alert-038",
    "headlineBn": "‘ভারত-বাংলাদেশ বাণিজ্য গতিশীল করতে যৌথ টাস্কফোর্স ও দৈনিক ৫ হাজার ভিসা ছাড়পত্রের উদ্যোগ’: অমর উজালা",
    "headlineEn": "Amar Ujala: India & Bangladesh Form Joint Task Force to Expedite Bilateral Trade and Resume 5,000 Daily Visas",
    "timeAgoBn": "২ ঘণ্টা আগে",
    "timeAgoEn": "2 hours ago",
    "sourceName": "Amar Ujala",
    "sourceBureau": "Delhi",
    "sentiment": "positive",
    "url": "https://news.google.com/rss/articles/CBMiUkFVX3lxTE1Yc2QydThyZkg3clhNN3ZGZFFlb2l2TmpYbHoxTldGNDFDOXNBa211WWktZGxKNTBNRk9OTHQyS3FuU0l0WUd5bEc2bTAtN3Z4QWc?oc=5"
  },
  {
    "id": "alert-037",
    "headlineBn": "‘ট্রেনের নিচে লুকিয়ে সীমান্ত পারাপার রুখতে গেদে ও পেট্রাপোল চেকপোস্টে এআই ক্যামেরা মোতায়েন’: টিভি৯ বাংলা",
    "headlineEn": "TV9 Bangla: AI Motion Cameras and Scanners Deployed at Petrapole & Gede Crossings to Deter Freight Infiltration",
    "timeAgoBn": "আজ ভোরে",
    "timeAgoEn": "Early morning",
    "sourceName": "TV9 Bangla",
    "sourceBureau": "Kolkata",
    "sentiment": "neutral",
    "url": "https://tv9bangla.com/west-bengal/gede-petrapole-ai-thermal-camera-scanner-deployment-border-security-1102948.html"
  },
  {
    "id": "alert-036",
    "headlineBn": "‘শারদীয় উৎসব ঘিরে ভারতে ৫০০ টন ইলিশ রপ্তানির বিশেষ অনুমতি দিল বাংলাদেশ’: আজ তক ভিডিও রিপোর্ট",
    "headlineEn": "Aaj Tak Video: Bangladesh Clears 500 Metric Tonnes of Hilsa Fish Exports to India Ahead of Festive Season",
    "timeAgoBn": "ভিডিও রিপোর্ট",
    "timeAgoEn": "Video Dispatch",
    "sourceName": "Aaj Tak (YouTube)",
    "sourceBureau": "Delhi",
    "sentiment": "positive",
    "url": "https://news.google.com/rss/articles/CBMiVkFVX3lxTE1tZC0xZXBSVHpFWFEwLXhrM1V0QmxPcnNmQWZZNk1GSThzNXhtQlhNOXlyTlh4U3VKeFZyUTl4NjVfY3RoTE1fMmJFWWpNZnRnMUEybjBB?oc=5"
  },
  {
    "id": "alert-035",
    "headlineBn": "‘হু-এর দক্ষিণ-পূর্ব এশিয়া আঞ্চলিক পরিচালকের পদ থেকে পদত্যাগের নেপথ্যে রাজনৈতিক চাপ ও অনিয়ম ছিল’: ইনস্টাগ্রাম পোস্টে সায়মা ওয়াজেদ",
    "headlineEn": "Firstpost Instagram: Saima Wazed Cites Political Pressure and Violation of Due Process Behind WHO Regional Directorship Exit",
    "timeAgoBn": "১ ঘণ্টা আগে",
    "timeAgoEn": "1 hour ago",
    "sourceName": "Firstpost (Instagram)",
    "sourceBureau": "Delhi",
    "sentiment": "negative",
    "url": "https://news.google.com/rss/articles/CBMiUkFVX3lxTE93Qk1Bd1RRTDhmWVZibU1XaDgtU0JyZEdSYTJaeWFvTDhRMDZUdDZ5cHJfa1p0azVmdlVvNXc0amdGNkFyUWtlLWNTMXNCTkZMSFE?oc=5"
  },
  {
    "id": "alert-034",
    "headlineBn": "‘হাসিনা আমলে স্বাক্ষরিত ১০১টি দ্বিপাক্ষিক চুক্তি পর্যালোচনায় দিল্লির কড়া বার্তা: নিজেদের জাতীয় স্বার্থ সুরক্ষিত রাখবে ভারত’: জি নিউজ",
    "headlineEn": "Zee News: 'India Will Take All Steps to Protect National Interests' - Delhi Responds to Bangladesh Reviewing 101 Hasina-Era Deals",
    "timeAgoBn": "এই মাত্র",
    "timeAgoEn": "Just now",
    "sourceName": "Zee News World",
    "sourceBureau": "Delhi",
    "sentiment": "neutral",
    "url": "https://zeenews.india.com/world/bangladesh-reviews-101-india-deals-chattogram-mongla-ports-mea-response-3072451.html"
  },
  {
    "id": "alert-033",
    "headlineBn": "‘বাংলাদেশকে পাকিস্তানের সমান্তরাল ভাবা ভারতের কৌশলগত স্বার্থের জন্য ক্ষতিকর’: দ্যপ্রিন্ট ভিডিও বিশ্লেষণ",
    "headlineEn": "ThePrint Video Dispatch: 'Treating Bangladesh as Pakistan's Mirror Image Undermines India's Strategic Interests'",
    "timeAgoBn": "ভিডিও বিশ্লেষণ",
    "timeAgoEn": "Video Dispatch",
    "sourceName": "ThePrint (YouTube)",
    "sourceBureau": "Delhi",
    "sentiment": "positive",
    "url": "https://news.google.com/rss/articles/CBMiVkFVX3lxTE1BX3FHWFVDMS1mRldYelVRY0FtZkpWaUllZ0ptQ0QwbzItQUFQellZZHl6ak9mQmhyeWpPcXhFX1c1T3I4UjN5andGQTZZZ1cxMmdMVU1n?oc=5"
  },
  {
    "id": "alert-032",
    "headlineBn": "‘হাসিনা আমলের অস্বস্তিকর সম্পর্ক অতীত, ভারতের সাথে নতুন করে কূটনৈতিক সমীকরণ গড়তে চায় ঢাকা’: হিন্দুস্তান টাইমস",
    "headlineEn": "Hindustan Times: Bangladesh Wants to 'Reset' Ties With India, Calling Hasina-Era Relationship 'Uncomfortable'",
    "timeAgoBn": "এই মাত্র",
    "timeAgoEn": "Just now",
    "sourceName": "Hindustan Times",
    "sourceBureau": "Delhi",
    "sentiment": "neutral",
    "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxPeG1GajBTSGlCZDVBcGRybnhjeU9FN2lqd1lFZWNGWG11a3E0QVhxekJrT2QtUjVmTS0zYVFtSDdYMVBmUkFOOHdmNmNuRUdwU2ZnYzJsQThtekZEcGZwSmZhUjFIZnY3OGN4NFZRTVVhaUNUYXg3QlFJQVU5Zy1pTnBXWkdoOE5qODQ0QWJHVWZsajdpd1lVb3J6cWd2VDlkMGhITnFUZTVuZXpQdW1pMnNZY1A2S09NYnpVd3RsMXZrTUxqNXZTZGZNakdLOC1DN2Q5TktTVUstU1hhU1BueTE2VzZpSDQxNHByTl9QbEhVQdIB9wFBVV95cUxOUWE0eThvTUxINTh2QkYxdTB0SGh6U29qano0dllIRXJhXzlMYmM5Y0M4SVM4ME5jQWtfWXZtTXQtbllNekpaRU83M0pTQ29DVThuTjZOLVRHNi1NblNBeFppQVE2TTF3UFF1cnZmb1pVRFFHV3Q0dnpOYUc0bW5sR2ZvdTlZR1F3LUhlWDBnS3U0SFU3SXRUQkxmWVVYYkVsUlNPWUlTSDBsa0FUMkxSWXFrTHprTnJ5QTN5a3R5RmhvZVhQUTdHRFBHemlEc2ptV1k5bEh4ZV9IZ2VXYVlZX2diOHpJWWQ4NERGM3d0ZXZYbmNxU09N?oc=5"
  },
  {
    "id": "alert-031",
    "headlineBn": "‘হাসিনা বিতর্ক সত্ত্বেও বাংলাদেশের সঙ্গে স্বাভাবিক দ্বিপাক্ষিক সম্পর্কের পথ উন্মুক্ত রেখেছে ভারত’: এনডিটিভি",
    "headlineEn": "NDTV: India Keeps Door Open for Normalisation of Bangladesh Ties Despite Ongoing Hasina Extradition Row",
    "timeAgoBn": "আজ সকালে",
    "timeAgoEn": "This morning",
    "sourceName": "NDTV",
    "sourceBureau": "Delhi",
    "sentiment": "positive",
    "url": "https://news.google.com/rss/articles/CBMiwwFBVV95cUxOVDNsZlh1czNPN0c3UjVnR3B5dlNrLTJpbWJYbTBIekwxS0E1Ulk3QzFmS0F4Q0xZa1dKZmhVbnd0MlBQOUhmSVU1ZFhTbVozN29CTS1PcFlBWDVwcHh0cVlZRjdpOVdET195cUFwakNFSGdMRExXOXhySDJGdTZQbzcxTUJpOGJxTS1MUTd5TmpGcEZyeDg3UDNveWtmcEpUeWFnbjhXTEluUGZWbDhBeEhoTXB3TEJrNTFndHNteng4TknSAcsBQVVfeXFMTk9yMVRCZm9VWWdqbHM2ckNzRW9LcE9KS2VIUmdPYlZTSllYLXc1d1N6MXdHNU5wXzJpY0h4cTdIR2VYSWpIaFNXX1EyRzFwdWE4STJpdFgydUllcEp6Vnk0RTdhZ3dOamp4Ymppd2VHVVRhaG1fNVhfMENJOWl5RGZEUDlneXVTTEcwWlVxM1phYTRuaWRWUEE5ckFSOTRPX0syams1WUxTalYzaFBQOFpFSHNjLWtDMWNUYS0yLXFxbnFsd05sZEU0cDQ?oc=5"
  },
  {
    "id": "alert-030",
    "headlineBn": "‘হাসিনা আমলে স্বাক্ষরিত চুক্তি পুনর্মূল্যায়ন নিয়ে ঢাকার পদক্ষেপে ভারতের কড়া বার্তা: নিজেদের স্বার্থ রক্ষায় যেকোনো পদক্ষেপ নেবে দিল্লি’: টাইমস অব ইন্ডিয়া",
    "headlineEn": "The Times of India: 'Will Take All Necessary Actions' - India Issues Stern Warning Amid Bangladesh Reviewing 101 Hasina-Era Pacts",
    "timeAgoBn": "এই মাত্র",
    "timeAgoEn": "Just now",
    "sourceName": "The Times of India",
    "sourceBureau": "Delhi",
    "sentiment": "neutral",
    "url": "https://news.google.com/rss/articles/CBMiiAJBVV95cUxNaU9GbnZVdWRLb0Q5d3ZGaC1BR216dU15Nm9ITVh2MjNxV25JN1pINUphclBFbUVIOWp2cEpZMEJFLXJZUjBQcV9nYmh3dkFHb2xHbElLeTRaeFZrNmpGZGF3VmRBX0VGeTdBbGNkbDlaYjBBaWJMaXJaVFJXQ0E1NmhaR3BNaC1NM25vREtUOXdnTUZONUt6ZmxPMTA3Ny13RzdWeGRSWGpMSGR3RW4tYUpKVE94SHB4UHljcDdldk9ia3RkWFpKNWs2ZG0tZlZiQmQtYU5hdUxhRGt3OUlhcGpEOVhLWUVFU1NaUms1ZUZUVThPZ3pqUTcxNUpMci1icUFkSlJtT3HSAY4CQVVfeXFMTklpaHo4T1U1T2lSZFdoUjVDM1FkZGNORFI1UHQ4SEdGOE9WYkQ5Mllya0pDUE9leWw3NHlYWkxvcjFPekl6eTZOVEJiNy1XQWczMDg2SEdqbXBoLUJaZHRHRWlhdThkTDBBdzVleDhKVXVmeWY2Yjd3eWtSQVoyYmhRX3RqWW5PYXVvM0xUNm1XQ0ZRaWVJcWx1dXhsZU9nUFlRUDBhMWVfWk1IcEJsYU14d3JqSjd1dW50Z25waElONG1DN21wTnYtMXV4RXp5Z1BzYVhBdkFQLWV5SkMxS19BYnk4WGJlbWpYUUVVY0tTRlJDNGZydmhKNHJ0SVMzQjNLeXRGeVBvQWFEbVJR?oc=5"
  },
  {
    "id": "alert-029",
    "headlineBn": "‘হাসিনাকে ভারতে আশ্রয় দেওয়া সত্ত্বেও নভেম্বর বা ডিসেম্বরে তারেক রহমানের দিল্লি সফরের জোরালো সম্ভাবনা’: নিউজ১৮",
    "headlineEn": "News18: Bangladesh Leadership Explores Diplomatic Reset with Delhi Visit in Late 2026 Despite Hasina Exile Factor",
    "timeAgoBn": "আজ সকালে",
    "timeAgoEn": "This morning",
    "sourceName": "News18",
    "sourceBureau": "Delhi",
    "sentiment": "positive",
    "url": "https://news.google.com/rss/articles/CBMizAFBVV95cUxQMEdkMzF2S1B3SHdsWUdVemxJWWZ1MTVQZkFaYzM4dUN3V0FIb3VQRENLV2VpWElBMnh1WWE0R2xRTFl5ZTIyRUpBc1Q0RDYweDVoT21FWWdIallUQW96bDlBN2plY3FiMnFOZi10djRvOU5fZVJMRE9Idi11RnN0RzF4UnBwSG11bm9HRlUwX1hueVpRaE4yMDNNMlVNdmliWkFHU01fQnVYSk5oVXZWTE1mZzRWNzdXT1FINjlPWE5OMWt0cVVyTWw2a3XSAdIBQVVfeXFMTnh4U2FOV0lEY2VEekdtM2Ixd1VoN3R6VVFVam9US09XckV0MEp4cFdZeWVQa3VlOXYxQUtHV3U1TVh1aG00dTN0RkR4bE1ZdGpHSE53Q3AzaUZ2M092U1pfRDF6TmVuaDhwQUJPMkxCRkRtd0FpZWVHaUxwWHo0QWJMNGFHXzNvSGJ4bUt3RFVsc0E3RW9lcEdZTHloNEZCQTJwbktYNlZ0eVNkZ1U5dnRXT2RhTkh5eTRLekxWREhEN0Z3d04xUWMyYzNmbzd0T2JR?oc=5"
  },
  {
    "id": "alert-028",
    "headlineBn": "‘ভারত-বাংলাদেশ দ্বিপাক্ষিক চুক্তি বাতিল হবে না, উভয় দেশের স্বার্থ রক্ষা ও কার্যকারিতাই মূল লক্ষ্য’: দৈনিক জাগরণ",
    "headlineEn": "Dainik Jagran: India-Bangladesh Treaties Will Not Be Scrapped, Focus on Mutual Benefit and Reciprocal Economic Continuity",
    "timeAgoBn": "এই মাত্র",
    "timeAgoEn": "Just now",
    "sourceName": "Dainik Jagran",
    "sourceBureau": "Delhi",
    "sentiment": "positive",
    "url": "https://news.google.com/rss/articles/CBMinwFBVV95cUxONTJfT3ItMmhSZGpZV1NFRVVJYUs2M3dGQWMyNEdsSl83ZUVBcDdVaWlBTGxIV2dodzRpRVkzdUwxSnFHbkJlVDBoTkRCVEhZbkdieEw0UTdRZ1RHRThhaXpGT1ZDTGhXYzFTTHRHMDZmelhmT245aHo0RkdQcmZySHhScGF4UmxsSWVLVWd1NlJZUk5CQjJIU0l1RmExWEU?oc=5"
  },
  {
    "id": "alert-027",
    "headlineBn": "‘হাসিনা আমলে স্বাক্ষরিত ১০১টি দ্বিপাক্ষিক চুক্তি পর্যালোচনার নেপথ্য কারণ স্পষ্ট করলেন তারেক রহমানের উপদেষ্টা’: নবভারত টাইমস",
    "headlineEn": "Navbharat Times: Tarique Rahman's Aide Explains Real Intent Behind Review of 101 Hasina-Era Bilateral Accords",
    "timeAgoBn": "আজ সকালে",
    "timeAgoEn": "This morning",
    "sourceName": "Navbharat Times",
    "sourceBureau": "Delhi",
    "sentiment": "neutral",
    "url": "https://news.google.com/rss/articles/CBMi9wFBVV95cUxOdFIwTkNoempGUGlDM2E0cGVOVHFZZ3IxNWZqRzFCalU0YjFOcHgzV3hiUE9rOUFjY2VPUVplNzd4dFpUUDFBUFQwdWdwY293dDhSTVNDN2YwZ0hrVjBSelZEaW9CMGdqYWM1RjNsd2tLSWdhYmw5S0lxVHozVHFwczBJc213S2pJM0VwX1RUN1hVakpMSk1xM3Q1a0Z1elI0TWk4UDY5UFpyRjhRTWNVcXhoY1FfOHBpaVY4V1FPd3o3bGJsRlNjOFI4Vld5R3hPM1c3VTJmczhLa1lJRTFTZ19XUFBZajJiMnlDRUpVRnRMS1lRTnJ30gH8AUFVX3lxTFBhVDdJVExoZzVyaU9fclJjaWJhOFQ0aGwxSEJIYnpoUnBxU0tHZEQ0Z3pMVVBhT3YzWHMwTjRxR2FvRjRnT1FKUktzRjEwTlNBdVZlMFhmZ1NTUTNLRktKQlhXVmVzVXVXWlBZaWFlRWx1cnNWY0x6TXd4Ujh6T19CNTMtV0x5d042bHlNVHA1dHB0OC1wT3ZkWEVvdVVOTGhRbDIyVlV2SDZIZS1HNEJLbHV2LTg0bFliMVJaX2tqMFdkd0RNdE5FQ0dPZzg1aXBxdENaZnlDT0RQUGxRWmJuWktxb0ozRVNWcDFlWVVtQ2lKWGJ4WjJYcmdtbA?oc=5"
  },
  {
    "id": "alert-026",
    "headlineBn": "‘হাসিনার দেশে ফেরার ঘোষণায় ঢাকায় মিছিল ও ব্যাপক ধরপাকড়, ৫০০-র বেশি গ্রেপ্তার’: কলকাতার সংবাদ প্রতিদিন",
    "headlineEn": "Sangbad Pratidin: Hasina's Return Announcement Energizes Awami League, Over 500 Arrested in Dhaka Protests",
    "timeAgoBn": "এই মাত্র",
    "timeAgoEn": "Just now",
    "sourceName": "Sangbad Pratidin",
    "sourceBureau": "Kolkata",
    "sentiment": "negative",
    "url": "https://www.sangbadpratidin.in/bangladesh/awami-league-energized-by-hasinas-announcement-of-return-515-arrested/pid/1347323/"
  },
  {
    "id": "alert-025",
    "headlineBn": "‘১০১টি দ্বিপাক্ষিক চুক্তি পুনর্মূল্যায়ন নিয়ে ঢাকার পদক্ষেপে ভারতীয় পররাষ্ট্র মন্ত্রণালয়ের সতর্ক পর্যবেক্ষণ’: ইন্ডিয়ান এক্সপ্রেস",
    "headlineEn": "The Indian Express: India's MEA Closely Monitoring Dhaka's Move to Review 101 Bilateral Accords",
    "timeAgoBn": "আজ ভোরে",
    "timeAgoEn": "Early morning",
    "sourceName": "The Indian Express",
    "sourceBureau": "Delhi",
    "sentiment": "neutral",
    "url": "https://news.google.com/rss/articles/CBMiUkFVX3lxTE0xUXM2Tlk0N0J4N2FRRUkxc19OeDhWekdVYlBneUZILTJUMERldlV5MlJjY3pkM19udGdIUFZ5Y21rY1duZ1ZTYmlfQ3VVbTlTYWc?oc=5"
  },
  {
    "id": "alert-024",
    "headlineBn": "‘পাল্টা সমাবেশের ডাক দিয়ে সংঘাতের পথে বিএনপি, উত্তপ্ত ঢাকা’: বর্তমান পত্রিকার বিশেষ প্রতিবেদন",
    "headlineEn": "Bartaman Patrika: High Alert in Dhaka as BNP Calls Counter-Rallies Amid Awami League Demonstrations",
    "timeAgoBn": "আজ সকালে",
    "timeAgoEn": "This morning",
    "sourceName": "Bartaman Patrika",
    "sourceBureau": "Kolkata",
    "sentiment": "negative",
    "url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxOcTZwOFRhOUxLd2xicDRsZ2pQNm5sZVhJUlZZZEtVd2t6MnhlQ0xQbmx2S3lWNHp5eXlhWTRQZHR4bVh1ZkVvY3hIUkZ2NWg2U2p6dWZ1OHl1M2psb1Fic1lYQjQyTkVub210eEFWN0Z6QjBqVk5vT2cxaE1vS0V3aE1rYmN5aE0zZzZzRk13X1Q3SkZtN3h0U09zSFlxdk1xVnZDbTFNb01n0gEA?oc=5"
  },
  {
    "id": "alert-023",
    "headlineBn": "‘ডিসেম্বর পর্যন্ত ধারাবাহিক রাজনৈতিক খসড়া অনুমোদন’: দ্য ওয়াল-এর এক্সক্লুসিভ দিল্লি রিপোর্ট",
    "headlineEn": "The Wall Exclusive: Sheikh Hasina Chairs High-Level Delhi Consultation on Party Roadmap Through December",
    "timeAgoBn": "আজ দুপুরে",
    "timeAgoEn": "This afternoon",
    "sourceName": "The Wall",
    "sourceBureau": "Delhi",
    "sentiment": "neutral",
    "url": "https://news.google.com/rss/articles/CBMi_wFBVV95cUxNY1VOMUMwV210R2xhWUFlSkpxaXRsMXhWazlYQjg3a25LY1kxNE9GWTd1bTJCSGtwdGFVNGt0dE1rNV9xZlkyMTZHS2FTb2N6aVBYS2lNVnZDVVIzZWJ5WmxFWnI3WFpzTVg0YU5wTzN1cVN5UDNnb1RFenhJdlNZbmpWcjZVZ3ptRUxnLW0tZXdrdEhyLVJsdHl3eG83RkxzTVdYTkdzLUU4UkNKcXNKeTJjblBFQU9wUktkQlF6QXZLSDgyb1FPRElKN1RxcHBYTHZtZkRQbDllc1JDQ2UyTFppNW91QkhGaWFoSTI3THU5WURuNEU3cmVIeE8yTGfSAf8BQVVfeXFMTWNVTjFDMFdtdEdsYVlBZUpKcWl0bDF4Vms5WEI4N2tuS2NZMTRPRlk3dW0yQkhrcHRhVTRrdHRTWTVfcWZZMjE2R0thU29jemlQWEtpTVZ2Q1VSM2VieVpsRVpyN1hac01YNGFOcE8zdXFTeVAzZ29URXp4SXZTWW5qVnI2VWd6bUVMZy1tLWV3a3RIci1SbHR5d3hvN0ZMc01XWE5Hcy1FOFJDSnFzSnkyY25QRUFPcFJLZEJRekF2S0g4Mm9RT0RJSjdUcXBwWEx2bWZEUGw5ZXNSQ0NlMkxaaTVvdUJIRmlhaEkyN0x1OVlEbjRFN3JlSHhPMkxn?oc=5"
  },
  {
    "id": "alert-022",
    "headlineBn": "‘তারেক রহমানের প্রস্তাবিত ভারত সফর ও হাসিনাকে নিয়ে দ্বিপাক্ষিক সমীকরণ’: নবভারত টাইমসের খবর",
    "headlineEn": "Navbharat Times Report on Tarique Rahman's Planned India Visit and Bilateral Reset",
    "timeAgoBn": "আজ সকালে",
    "timeAgoEn": "This morning",
    "sourceName": "Navbharat Times",
    "sourceBureau": "Delhi",
    "sentiment": "neutral",
    "url": "https://news.google.com/rss/articles/CBMi1gFBVV95cUxOdEtSS1ZyUEw3SGFENkNYQUVxeDkxS2dIbGZqRUllRDJLbmxkeDZOSVFLVjBkQndySGkwcHhyNHk1Q3VUSC1fQmpYZ0YxMjFLNjk2NjN6WUxmVWdkN2lzX29LWnZKQnVUTVBSTkdweHdjOHpMTGNlMFZweGRRUXY0UDdxamExbXNxNmo3V3FKM0Npb1pNUzhTSGRiOTJ2bEY3MWNwaTR1V1l6RWZBVG9lWWZud2xrdnQ1dkFFUF9hNkhsTGJ3VlV2RmxjaHhUVWxTYWx6Mkx30gHbAUFVX3lxTE83OS13UG1RSFc4RlJtcWJoQzVyWDRoVWY5Sy10SXFhWUNjNzJsZVZvOV8tb1FsbFhrNUNCemxFeHN2STdhbnRkRkp1ZURVUTZnY1lLeXdxcVdMTjFRS2l0VWpnN2ZZSFkxLTduOEF3NlpQTFdKMm9GZERhWXdYRHRpT2M5Q3p3aldNTkQ2U1ZwWEJELXpLQXFWSUo0RUJlRkhtcFgtaWV4TE11ZTZqbzlzaTczU1RjaVBzUlZVOEdncEZmZVFRdFlNa1dzT1h6bDVXSWpOTFZndEZqdw?oc=5"
  },
  {
    "id": "alert-021",
    "headlineBn": "‘১০১টি দ্বিপাক্ষিক চুক্তি পুনর্মূল্যায়ন নিয়ে ঢাকার খবর ভারতীয় পররাষ্ট্র মন্ত্রণালয় কর্তৃক সতর্ক পর্যবেক্ষণ’: ইন্ডিয়ান এক্সপ্রেস",
    "headlineEn": "Indian Express: India's MEA Closely Watching Reports of Bangladesh Reviewing 101 Bilateral Deals",
    "timeAgoBn": "আজ সকালে",
    "timeAgoEn": "This morning",
    "sourceName": "The Indian Express",
    "sourceBureau": "Delhi",
    "sentiment": "neutral",
    "url": "https://indianexpress.com/article/world/bangladesh-reviews-101-india-deals-sheikh-hasina-government/"
  },
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
  }
];

export const SCANNED_NEWS_ITEMS: NewsItem[] = [
  {
    "id": "news-20260923-001",
    "slug": "anandabazar-sheikh-hasina-awami-league-revival-legal-safeguards",
    "title": "Anandabazar Patrika: 'Sheikh Hasina Signals Plan to Rebuild Awami League on Ground, Calls for Legal Safeguards'",
    "englishTitle": "Anandabazar Patrika: 'Sheikh Hasina Signals Plan to Rebuild Awami League on Ground, Calls for Legal Safeguards'",
    "banglaTitle": "‘আওয়ামী লীগের পুনরুজ্জীবনের চেষ্টা করবেন বাংলাদেশে ফিরে, চাইলেন আইনি সুরক্ষাকবচ’: আনন্দবাজার পত্রিকা",
    "summaryBn": "‘আনন্দবাজার পত্রিকা’-র প্রতিবেদনে বলা হয়েছে, সাবেক প্রধানমন্ত্রী শেখ হাসিনা বাংলাদেশে ফিরে তৃণমূল পর্যায়ে আওয়ামী লীগের সাংগঠনিক কাঠামো পুনর্গঠনের অঙ্গীকার ব্যক্ত করেছেন। একই সাথে তিনি দলীয় নেতাকর্মীদের নিরাপত্তা ও স্বচ্ছ আইনি প্রক্রিয়ার সুরক্ষাকবচ নিশ্চিতের আহ্বান জানিয়েছেন।",
    "summaryEn": "Anandabazar Patrika reports that former Prime Minister Sheikh Hasina has reiterated her determination to return to Bangladesh to rebuild the Awami League organizational base at grassroots levels, while calling for constitutional legal safeguards and fair trials for party leaders.",
    "keyPointsBn": [
      "বাংলাদেশে ফিরে আওয়ামী লীগের পুনরুজ্জীবন ও সাংগঠনিক কার্যক্রম পরিচালনার প্রত্যয়",
      "দলীয় নেতাকর্মীদের বিরুদ্ধে দায়ের করা মামলার ক্ষেত্রে নিরপেক্ষ আইনি প্রক্রিয়া ও সুরক্ষার দাবি",
      "আন্তর্জাতিক ফোরামে দলের অবস্থান তুলে ধরতে প্রবাসী কমিটিগুলোর সাথে নিবিড় সমন্বয়"
    ],
    "keyPointsEn": [
      "Hasina signals clear roadmap to reactivate Awami League grassroots in Bangladesh",
      "Urges transparent legal safeguards and due process against sweeping judicial actions",
      "Directs expatriate units and leadership to engage global diplomatic forums"
    ],
    "category": "politics",
    "categoryLabelBn": "রাজনীতি ও কূটনীতি",
    "categoryLabelEn": "Politics & Governance",
    "sentiment": "neutral",
    "sentimentReasonBn": "রাজনৈতিক পুনর্গঠন ও ভবিষ্যৎ কৌশল সম্পর্কিত ভারসাম্যপূর্ণ বিশ্লেষণ।",
    "sentimentReasonEn": "Balanced political reporting on party revival strategies and legal concerns.",
    "source": {
      "name": "Anandabazar Patrika",
      "bureau": "Kolkata",
      "language": "Bengali",
      "originalUrl": "https://news.google.com/rss/articles/CBMivAFBVV95cUxON0pPMXNIYW5qRm9kMXlQWEEtOHFZTmtjX2daUjFhem9PS212RjhEeEtGQnUxLVNVUnlWTkxZX3o5WVJTU2tlZjE0RjV6SVJSVG16TjZiRzU0WHhwRVE5TjJncXV3bVJTc29RMjBuaU5tLWY3VnRSd3loazBITWx4N1ZBallBcXIxMk9WTWJGX1U0LTdCaWN5djdfMHlpV2NuNVpKSGgzcW1QT1A3ZjZxS2tZVGZDWmJWOUpfcdIBwgFBVV95cUxPR2NjN3ZtTjNUSnZVWngxclZOYlNnM05XQmMwek9WOWZtWE52VHI2aGVfeWgxUWFUcHdRX003YnJRNHFrejB4Uk9iLWJCaTYtSkV1VE42NTlieEVDeEFBT2pRVzZFcFNUakMzTmdUaThfcmNsX3M2dlhUc2paVllsWkQxbzA2RVh5bEwwRHFmemhJelpMcU50WHJBTks5OUY4R2prai0wUnNGRGFsSG8wUFRxVzFRUWJpamRWQWlyZVQ3UQ?oc=5",
      "scannedAt": "2026-09-23T02:24:00Z"
    },
    "publishedAt": "2026-09-23T01:45:00Z",
    "readTimeBn": "৩ মিনিট",
    "readTimeEn": "3 min read",
    "imageUrl": "/images/thewall-hasina-interview.jpeg",
    "tags": [
      "Anandabazar",
      "Awami League",
      "Sheikh Hasina",
      "Kolkata Bureau",
      "Politics"
    ],
    "isLeadStory": true
  },
  {
    "id": "news-20260923-002",
    "slug": "sangbad-pratidin-hasina-december-return-readiness-to-face-trial",
    "title": "Sangbad Pratidin: 'Sheikh Hasina Asserts Return by December, Ready to Face Trial for People\\'s Welfare'",
    "englishTitle": "Sangbad Pratidin: 'Sheikh Hasina Asserts Return by December, Ready to Face Trial for People\\'s Welfare'",
    "banglaTitle": "‘দেশে ফিরছি ডিসেম্বরেই, জনতার কল্যাণে প্রয়োজনে কারাবাসের মূল্য দিতেও প্রস্তুত’: সংবাদ প্রতিদিন",
    "summaryBn": "‘সংবাদ প্রতিদিন’-এর কলকাতা সংস্করণে প্রকাশিত খবরে বলা হয়েছে, শেখ হাসিনা ডিসেম্বরের মধ্যেই ঢাকায় ফেরার ব্যাপারে অনড় মনোভাব প্রকাশ করেছেন। তিনি মন্তব্য করেছেন যে দেশের সাধারণ মানুষের মৌলিক অধিকার পুনরুদ্ধারের স্বার্থে তিনি যেকোনো আইনি চ্যালেঞ্জ বা কারাবাস বরণে দ্বিধাবোধ করবেন না।",
    "summaryEn": "Sangbad Pratidin highlights Sheikh Hasina's assertive statement expressing readiness to return to Bangladesh by December 2026, stating she is fully prepared to confront judicial trials and possible incarceration to champion democratic rights for Bangladeshi citizens.",
    "keyPointsBn": [
      "ডিসেম্বর নাগাদ বাংলাদেশে প্রত্যাবর্তনের সময়সীমা পুনর্ব্যক্ত করলেন শেখ হাসিনা",
      "আইনি লড়াইয়ে আত্মপক্ষ সমর্থনের জন্য পূর্ণ প্রস্তুতি গ্রহণের ঘোষণা",
      "কলকাতা মিডিয়া ডেস্কে এ নিয়ে ব্যাপক রাজনৈতিক পর্যালোচনা ও আলোচনা"
    ],
    "keyPointsEn": [
      "Hasina reaffirms timeline aiming for return to Bangladesh by December 2026",
      "Declares willingness to face judicial proceedings to defend political legacy",
      "Generates significant analytical coverage across Kolkata political desks"
    ],
    "category": "politics",
    "categoryLabelBn": "রাজনীতি ও কূটনীতি",
    "categoryLabelEn": "Politics & Governance",
    "sentiment": "neutral",
    "sentimentReasonBn": "আইনি প্রস্তুতি ও রাজনৈতিক বক্তব্যের বস্তুনিষ্ঠ প্রতিবেদন।",
    "sentimentReasonEn": "Objective coverage of high-profile political declaration and legal developments.",
    "source": {
      "name": "Sangbad Pratidin",
      "bureau": "Kolkata",
      "language": "Bengali",
      "originalUrl": "https://news.google.com/rss/articles/CBMirwFBVV95cUxNaTZ1bTJHcjZzcjlBMUUyNUtiR1RwdUplZmQ1WnQwUF85cHlybnNDTHQ1dWVZZ2dobWw4TzdFalRRNk5vaG5QSkRlTTJoVFBJako1MVZWVHZ6TE1xeFgxVXp0X2tqaTB2bld5UWhpQ1liRTZoSjljSjhhXzRQZWE3cEhGWUhsWjVZeXZPcGR4V0Exc1ZmZWdwVVFldWMzTWhjQjlUMnBsdGFkb3FFNGtn0gGvAUFVX3lxTE1pNnVtMkdyNnNyOUExRTI1S2JHVHB1SmVmZDVadDBQXzlweXJuc0NMdDV1ZVlnZ2htbDhPN0VqVFE2Tm9oblBKRGVNMmhUUElqSjUxVlZUdnpMTXF4WDFVenRfa2ppMHZuV3lRaGlDWWJFNmhKOWNKOGFfNFBlYTdwSEZZSGxaNVl5dk9wZHhXQTFzVmZlZ3BVUWV1YzNNaGNCOVQycGx0YWRvcUU0a2c?oc=5",
      "scannedAt": "2026-09-23T02:24:00Z"
    },
    "publishedAt": "2026-09-23T01:15:00Z",
    "readTimeBn": "৩ মিনিট",
    "readTimeEn": "3 min read",
    "imageUrl": "/images/sheikh-selim-awami-league.jpg",
    "tags": [
      "Sangbad Pratidin",
      "Sheikh Hasina",
      "Kolkata",
      "Legal Battle",
      "Awami League"
    ],
    "isLeadStory": false
  },
  {
    "id": "news-20260923-003",
    "slug": "the-wall-awami-league-leadership-rebuilding-succession-debates",
    "title": "The Wall: 'Awami League Organizational Rebuilding & Succession Debate Intensifies Ahead of Grassroots Activation'",
    "englishTitle": "The Wall: 'Awami League Organizational Rebuilding & Succession Debate Intensifies Ahead of Grassroots Activation'",
    "banglaTitle": "‘আওয়ামী লীগের শীর্ষ নেতৃত্ব পুনর্গঠন ও ভবিষ্যৎ উত্তরসূরি নিয়ে দলে জোর তৎপরতা’: দ্য ওয়াল",
    "summaryBn": "‘দ্য ওয়াল’-এর বিশ্লেষণী প্রতিবেদনে আওয়ামী লীগের ভবিষ্যৎ নেতৃত্ব কাঠামো ও তরুণ প্রজন্মের দায়িত্ব গ্রহণ নিয়ে আলোচনা তুলে ধরা হয়েছে। তৃণমূলের যোগাযোগ অক্ষুণ্ণ রাখা এবং দলের অভিজ্ঞ নেতাদের সাথে নবীন সংগঠকদের সমন্বয় সাধনের প্রক্রিয়া খতিয়ে দেখা হচ্ছে।",
    "summaryEn": "The Wall presents an analytical deep-dive into internal discussions within the Awami League regarding generational leadership transitions, grassroots restructuring, and coordination between veteran party figures and emerging leaders.",
    "keyPointsBn": [
      "দলের দীর্ঘমেয়াদী নেতৃত্ব ও সাংগঠনিক রূপরেখা নিয়ে নীতি-নির্ধারকদের বৈঠক",
      "তৃণমূল পর্যায়ে সাংগঠনিক চ্যানেল সচল রাখার নতুন কৌশল",
      "ডিজিটাল ও মাঠপর্যায়ের সমন্বয়ে দলীয় নেটওয়ার্ক পুনর্গঠনের পরিকল্পনা"
    ],
    "keyPointsEn": [
      "Strategic reviews on long-term party stewardship and structural reforms",
      "Fresh mechanisms to maintain grassroots connectivity across districts",
      "Synchronizing digital platforms and ground-level organizational units"
    ],
    "category": "politics",
    "categoryLabelBn": "রাজনীতি ও কূটনীতি",
    "categoryLabelEn": "Politics & Governance",
    "sentiment": "neutral",
    "sentimentReasonBn": "সাংগঠনিক কাঠামো ও দলীয় রূপরেখার যৌক্তিক বিশ্লেষণ।",
    "sentimentReasonEn": "In-depth analytical breakdown of organizational dynamics and political planning.",
    "source": {
      "name": "The Wall",
      "bureau": "Kolkata",
      "language": "Bengali",
      "originalUrl": "https://news.google.com/rss/articles/CBMisgFBVV95cUxONXY1YmNEbE81Tmd3OWdRb3VkZ1lGZ3NyYkZjYkU2aTNoanpvU1YwMGpaV1JKWUdFdlExeUNqSUtQTlZhUlNWV3B0VHZaTV9nUkJmYlhWZVRiWGo5RGdybEtCMUNiSjVXZlR1Q0dlUVdRNUZvcEVMb0YzcWE1akdfek51WjVQOEVkaVltRDJtZkpvYkdOYlNiMmE0aHZQOHRWSGVYTEpvWGRUZnpweTBGTDhB0gG3AUFVX3lxTFBuenQ3UU5NaElnb3JEUXpsbWx4dzl5RzJBOHJtajJWaWdrY05pYl9iS2I1NFlTbUZ1ZVdfSDd2c2NYelk0N3VMZW9PeXVMOXd6M1duOXd6dzB0UEZzVG1feG4tSUUtTXJuZi1PTE9GRmhBUkh2N1U2alUtLTRrUUR3alZPSG9zM05wMnE4eXQyQ1REazgyWDM3R3FTX0ljUG1laWpveVNxVmRCb0xGSlFTMmo1QW1fWQ?oc=5",
      "scannedAt": "2026-09-23T02:24:00Z"
    },
    "publishedAt": "2026-09-23T00:50:00Z",
    "readTimeBn": "৪ মিনিট",
    "readTimeEn": "4 min read",
    "imageUrl": "/images/dhaka-national-parliament-symbolic.jpg",
    "tags": [
      "The Wall",
      "Awami League",
      "Leadership",
      "Kolkata Bureau"
    ],
    "isLeadStory": false
  },
  {
    "id": "news-20260923-004",
    "slug": "namasthe-telangana-sheikh-hasina-december-return-legal-arena",
    "title": "Namasthe Telangana: 'Sheikh Hasina Asserts Commitment to Return by December, Ready for Legal Arena'",
    "englishTitle": "Namasthe Telangana: 'Sheikh Hasina Asserts Commitment to Return by December, Ready for Legal Arena'",
    "banglaTitle": "‘ডিসেম্বরের মধ্যেই বাংলাদেশে ফেরার প্রত্যয়, আইনি চ্যালেঞ্জ মোকাবিলায় প্রস্তুত হাসিনা’: নমস্তে তেলেঙ্গানা",
    "summaryBn": "তেলেঙ্গানার শীর্ষ তেলেগু দৈনিক ‘নমস্তে তেলেঙ্গানা’-তে প্রকাশিত আন্তর্জাতিক প্রতিবেদনে শেখ হাসিনার সাম্প্রতিক বক্তব্য তুলে ধরা হয়েছে। তিনি উল্লেখ করেছেন যে জনগণের পাশে দাঁড়াতে তিনি আসন্ন মাসগুলোতে আইনি প্রক্রিয়ার মুখোমুখি হতে এবং রাজনৈতিক অবস্থান সুসংহত করতে প্রস্তুত।",
    "summaryEn": "Leading Telugu daily Namasthe Telangana highlights former Bangladesh PM Sheikh Hasina's assertions on her anticipated return roadmap and determination to engage judicial proceedings in Dhaka to restore political stability.",
    "keyPointsBn": [
      "দক্ষিণ ভারতীয় মিডিয়া ডেস্কে বাংলাদেশের রাজনৈতিক পরিস্থিতির গুরুত্বসহকারে কভারেজ",
      "ডিসেম্বর ২০২৬ নাগাদ দেশে ফেরার সংকল্প ব্যক্ত করলেন শেখ হাসিনা",
      "আইনি প্রক্রিয়ায় অবিচল থেকে রাজনৈতিক অস্তিত্ব প্রমাণের প্রত্যয়"
    ],
    "keyPointsEn": [
      "South Indian regional media highlights unfolding geopolitical and legal shifts in Dhaka",
      "Hasina emphasizes readiness to withstand legal turbulence upon arrival",
      "Reflects broad pan-Indian media monitoring of regional stability"
    ],
    "category": "politics",
    "categoryLabelBn": "রাজনীতি ও কূটনীতি",
    "categoryLabelEn": "Politics & Governance",
    "sentiment": "neutral",
    "sentimentReasonBn": "দক্ষিণ ভারতীয় মিডিয়ায় বস্তুনিষ্ঠ আন্তর্জাতিক সংবাদ পরিবেশন।",
    "sentimentReasonEn": "Objective regional Indian reporting on subcontinental political affairs.",
    "source": {
      "name": "Namasthe Telangana",
      "bureau": "Mumbai",
      "language": "Telugu",
      "originalUrl": "https://news.google.com/rss/articles/CBMixAFBVV95cUxPd1ZpZFdFUXQtT3dwbDAzeXUwMHY4QzFTMGdKWTNYQVJaY0NSNkpWNnFWX0hSY2J3bVdDdV85OWlqLVJrNlRtRXRXZGU2b250UmRXNTZLdjRFUnlIcHdBQUZwclBZbXFod2NTcXRnUjdCeTBMajhCTjlNNm5HUm9xVk04NVpveUktaVk4NGtkLTFsWFNTaERnWnZLTHZ3STJISU9jbVFtUHkyODc2QnJzekZGX3oyZVR1TnF3ZERDd2ZuM2pJ?oc=5",
      "scannedAt": "2026-09-23T02:24:00Z"
    },
    "publishedAt": "2026-09-23T00:30:00Z",
    "readTimeBn": "৩ মিনিট",
    "readTimeEn": "3 min read",
    "imageUrl": "/images/delhi-dhaka-bilateral-summit.jpg",
    "tags": [
      "Namasthe Telangana",
      "Telugu Media",
      "Sheikh Hasina",
      "Regional Press"
    ],
    "isLeadStory": false
  },
  {
    "id": "news-20260923-005",
    "slug": "dainik-jagran-sheikh-hasina-not-when-but-how-dhaka-roadmap",
    "title": "Dainik Jagran: ''The Question is Not When, But How': Sheikh Hasina Outlines Strategic Roadmap for Dhaka Return'",
    "englishTitle": "Dainik Jagran: ''The Question is Not When, But How': Sheikh Hasina Outlines Strategic Roadmap for Dhaka Return'",
    "banglaTitle": "‘'প্রশ্ন কখন নয়, বরং কীভাবে': বাংলাদেশে ফেরা ও রাজনৈতিক পুনর্গঠনের রূপরেখা স্পষ্ট করলেন শেখ হাসিনা’: দৈনিক জাগরণ",
    "summaryBn": "‘দৈনিক জাগরণ’-এর জাতীয় সংস্করণে প্রকাশিত প্রতিবেদনে বলা হয়েছে, শেখ হাসিনা তার ভবিষ্যৎ প্রত্যাবর্তনের ক্ষেত্রে সময়সীমার চেয়ে রাজনৈতিক ও নিরাপত্তা কৌশলকে প্রাধান্য দিচ্ছেন। তিনি দলের তৃণমূল নেতাকর্মীদের মনোবল ধরে রাখার ওপর সর্বোচ্চ গুরুত্ব আরোপ করেছেন।",
    "summaryEn": "Dainik Jagran reports that Sheikh Hasina frames her return to Bangladesh not merely as a matter of timing, but as a calculated strategic process ensuring safety for grassroots cadres and institutional legitimacy.",
    "keyPointsBn": [
      "প্রত্যাবর্তনের সময়সীমার পাশাপাশি প্রাতিষ্ঠানিক ও নিরাপত্তা রূপরেখা মূল বিবেচ্য",
      "তৃণমূল নেতাকর্মীদের সুরক্ষা ও রাজনৈতিক কার্যক্রম পুনরায় চালুর দিকনির্দেশনা",
      "হিন্দি বলয়ের জাতীয় গণমাধ্যমে বাংলাদেশের ক্ষমতার ভারসাম্য নিয়ে বিস্তারিত পর্যালোচনা"
    ],
    "keyPointsEn": [
      "Frames return as a strategic and institutional undertaking beyond pure timelines",
      "Focuses on safeguarding party cadres and ensuring lawful political re-entry",
      "Extensive Hindi national press coverage analyzing evolving Dhaka dynamics"
    ],
    "category": "politics",
    "categoryLabelBn": "রাজনীতি ও কূটনীতি",
    "categoryLabelEn": "Politics & Governance",
    "sentiment": "neutral",
    "sentimentReasonBn": "রাজনৈতিক কৌশল ও নিরাপত্তা সমীকরণের জাতীয় পর্যালোচনা।",
    "sentimentReasonEn": "Analytical assessment of strategic maneuvering and political feasibility.",
    "source": {
      "name": "Dainik Jagran",
      "bureau": "Delhi",
      "language": "Hindi",
      "originalUrl": "https://news.google.com/rss/articles/CBMisgFBVV95cUxOd0pQQ2NXWlhndGxRM0JuLXNfMkJ4N2VHYy02eG1SRlozaVFieGxrbVgyVUFwejd2WFA2ZkhhaEJneXVDT1E1Z2lzSzhnNFFsYzR3QUtEQ1Y0Uk5GdzVtTTJac3ZEakU1Slhlckg1bXlIajE3NnNHOUxYMmpOSV9fR1RKYnIzSWhMaGtrNmV1eEJRWHFJTnBwX19FOWU5dTZRQTBHUzREUEprS3FzQXUzNllR?oc=5",
      "scannedAt": "2026-09-23T02:24:00Z"
    },
    "publishedAt": "2026-09-22T23:55:00Z",
    "readTimeBn": "৩ মিনিট",
    "readTimeEn": "3 min read",
    "imageUrl": "/images/bangabhaban-presidential-palace-dhaka.jpg",
    "tags": [
      "Dainik Jagran",
      "Hindi Media",
      "Sheikh Hasina",
      "Delhi Bureau",
      "Politics"
    ],
    "isLeadStory": false
  },
  {
    "id": "news-20260923-006",
    "slug": "navbharat-times-mea-diplomatic-stance-brics-dhaka-engagement",
    "title": "Navbharat Times: 'MEA Clarifies Diplomatic Stance on BRICS Invite & High-Level Engagement with Dhaka'",
    "englishTitle": "Navbharat Times: 'MEA Clarifies Diplomatic Stance on BRICS Invite & High-Level Engagement with Dhaka'",
    "banglaTitle": "‘ব্রিকস আমন্ত্রণ ও দ্বিপাক্ষিক আলোচনা নিয়ে বিদেশ মন্ত্রকের অবস্থান স্পষ্ট: দিল্লি-ঢাকা কূটনৈতিক সম্পর্কের নতুন রূপরেখা’: নবভারত টাইমস",
    "summaryBn": "‘নবভারত টাইমস’-এর কূটনৈতিক ডেস্কে বলা হয়েছে, ভারতের পররাষ্ট্র মন্ত্রণালয় স্পষ্ট জানিয়েছে যে বিমসটেক এবং ব্রিকস সম্মেলনে প্রতিবেশী দেশের সরকারপ্রধানদের আমন্ত্রণ নিয়মিত প্রাতিষ্ঠানিক প্রক্রিয়ার অংশ। দ্বিপাক্ষিক সম্পর্কের ক্ষেত্রে পারস্পরিক নিরাপত্তা ও চুক্তিগুলোর ধারাবাহিকতা বজায় রাখাই নয়াদিল্লির মূল অগ্রাধিকার।",
    "summaryEn": "Navbharat Times reports on the Ministry of External Affairs (MEA) briefing clarifying diplomatic engagement protocols regarding multilateral summits, emphasizing New Delhi's steadfast commitment to regional connectivity, mutual security commitments, and commercial continuity with Dhaka.",
    "keyPointsBn": [
      "আন্তর্জাতিক সম্মেলনে প্রতিবেশী রাষ্ট্রগুলোর অংশগ্রহণ ও দ্বিপাক্ষিক সংলাপের পথ উন্মুক্ত রাখার বার্তা",
      "সীমান্ত বাণিজ্য ও চলমান অবকাঠামো প্রকল্পগুলোর নিরাপত্তা নিশ্চিতে গুরুত্ব",
      "নয়াদিল্লির কূটনৈতিক মহলে বাস্তবমুখী ও ভারসাম্যপূর্ণ বৈদেশিক নীতির প্রতিফলন"
    ],
    "keyPointsEn": [
      "MEA reiterates open channels for institutional multilateral engagement",
      "Prioritizes border trade continuity and the safety of joint infrastructure assets",
      "Reflects New Delhi's pragmatic approach to neighborhood diplomacy"
    ],
    "category": "diplomacy",
    "categoryLabelBn": "কূটনীতি ও দূতাবাস",
    "categoryLabelEn": "Diplomacy & Embassy",
    "sentiment": "positive",
    "sentimentReasonBn": "দ্বিপাক্ষিক প্রাতিষ্ঠানিক যোগাযোগ ও কূটনৈতিক ধারাবাহিকতার ইতিবাচক দিক।",
    "sentimentReasonEn": "Constructive diplomatic messaging reinforcing institutional relations.",
    "source": {
      "name": "Navbharat Times",
      "bureau": "Delhi",
      "language": "Hindi",
      "originalUrl": "https://news.google.com/rss/articles/CBMi1gFBVV95cUxOdEtSS1ZyUEw3SGFENkNYQUVxeDkxS2dIbGZqRUllRDJLbmxkeDZOSVFLVjBkQndySGkwcHhyNHk1Q3VUSC1fQmpYZ0YxMjFLNjk2NjN6WUxmVWdkN2lzX29LWnZKQnVUTVBSTkdweHdjOHpMTGNlMFZweGRRUXY0UDdxamExbXNxNmo3V3FKM0Npb1pNUzhTSGRiOTJ2bEY3MWNwaTR1V1l6RWZBVG9lWWZud2xrdnQ1dkFFUF9hNkhsTGJ3VlV2RmxjaHhUVWxTYWx6Mkx30gHbAUFVX3lxTE83OS13UG1RSFc4RlJtcWJoQzVyWDRoVWY5Sy10SXFhWUNjNzJsZVZvOV8tb1FsbFhrNUNCemxFeHN2STdhbnRkRkp1ZURVUTZnY1lLeXdxcVdMTjFRS2l0VWpnN2ZZSFkxLTduOEF3NlpQTFdKMm9GZERhWXdYRHRpT2M5Q3p3aldNTkQ2U1ZwWEJELXpLQXFWSUo0RUJlRkhtcFgtaWV4TE11ZTZqbzlzaTczU1RjaVBzUlZVOEdncEZmZVFRdFlNa1dzT1h6bDVXSWpOTFZndEZqdw?oc=5",
      "scannedAt": "2026-09-23T02:24:00Z"
    },
    "publishedAt": "2026-09-22T23:20:00Z",
    "readTimeBn": "৩ মিনিট",
    "readTimeEn": "3 min read",
    "imageUrl": "/images/south-block-mea-delhi.jpg",
    "tags": [
      "MEA",
      "Navbharat Times",
      "BRICS",
      "Diplomacy",
      "Delhi Bureau"
    ],
    "isLeadStory": false
  },
  {
    "id": "news-20260923-007",
    "slug": "tripura-times-resumption-agartala-dhaka-kolkata-bus-service",
    "title": "Tripura Times: 'Tripura CM Welcomes Resumption of Agartala-Dhaka-Kolkata International Bus Transit Service'",
    "englishTitle": "Tripura Times: 'Tripura CM Welcomes Resumption of Agartala-Dhaka-Kolkata International Bus Transit Service'",
    "banglaTitle": "‘আগরতলা-ঢাকা-কলকাতা আন্তর্জাতিক বাস পরিষেবা পুনরায় চালুকে স্বাগত জানালেন ত্রিপুরার মুখ্যমন্ত্রী’: ত্রিপুরা টাইমস",
    "summaryBn": "‘ত্রিপুরা টাইমস’-এর প্রতিবেদন অনুযায়ী, আগরতলা-ঢাকা-কলকাতা সরাসরি যাত্রীবাহী বাস চলাচল পুনরায় শুরু হওয়ায় ত্রিপুরার মুখ্যমন্ত্রী সন্তোষ প্রকাশ করেছেন। এই পরিষেবা উত্তর-পূর্ব ভারতের সাথে পশ্চিমবঙ্গের দ্রুত যাতায়াত নিশ্চিত করার পাশাপাশি জনগণের মধ্যে সংযোগ বৃদ্ধি করবে।",
    "summaryEn": "Tripura Times reports that Tripura Chief Minister Manik Saha has welcomed the resumption of the Agartala-Dhaka-Kolkata international passenger bus service, highlighting how direct transit enhances Northeast connectivity and facilitates essential cross-border civilian travel.",
    "keyPointsBn": [
      "আগরতলা-ঢাকা-কলকাতা রুটে সরাসরি যাত্রীবাহী বাস চলাচলে জনজীবনে স্বস্তি",
      "উত্তর-পূর্বাঞ্চলের সঙ্গে কলকাতা ও বহিঃবিশ্বের ট্রানজিট সময় উল্লেখযোগ্যভাবে হ্রাস",
      "সীমান্ত কাস্টমস ও ইমিগ্রেশন চেকপোস্টে বিশেষ সহায়তা কেন্দ্র চালু"
    ],
    "keyPointsEn": [
      "Resumption of direct bus transit brings relief for passengers and medical commuters",
      "Significantly cuts travel time between Northeast India and West Bengal via Bangladesh corridor",
      "Facilitates smooth passenger processing at Akhaura and Petrapole integrated checkpoints"
    ],
    "category": "trade",
    "categoryLabelBn": "বাণিজ্য ও অর্থনীতি",
    "categoryLabelEn": "Trade & Connectivity",
    "sentiment": "positive",
    "sentimentReasonBn": "যোগাযোগ ব্যবস্থা ও যাত্রী চলাচলের জন্য অত্যন্ত ইতিবাচক পদক্ষেপ।",
    "sentimentReasonEn": "Positive development enhancing regional connectivity and cross-border transit.",
    "source": {
      "name": "Tripura Times",
      "bureau": "Tripura",
      "language": "English",
      "originalUrl": "https://news.google.com/rss/articles/CBMirgFBVV95cUxNb1hUVlFhMW5zMDhkTkFONnBkMHp",
      "scannedAt": "2026-09-23T02:24:00Z"
    },
    "publishedAt": "2026-09-22T22:45:00Z",
    "readTimeBn": "৩ মিনিট",
    "readTimeEn": "3 min read",
    "imageUrl": "/images/india-bangladesh-trade-land-port.jpg",
    "tags": [
      "Tripura Times",
      "Agartala",
      "Transit",
      "Cross-Border Bus",
      "Connectivity"
    ],
    "isLeadStory": false
  },
  {
    "id": "news-20260923-008",
    "slug": "tripura-times-fruit-diplomacy-queen-pineapples-goodwill-consignment",
    "title": "Tripura Times: 'Fruit Diplomacy: Tripura Sends 600 Export-Quality Queen Pineapples Consignment to Bangladesh'",
    "englishTitle": "Tripura Times: 'Fruit Diplomacy: Tripura Sends 600 Export-Quality Queen Pineapples Consignment to Bangladesh'",
    "banglaTitle": "‘ফল কূটনীতি: বাংলাদেশে ৬০০টি উন্নত জাতের 'কুইন' আনারসের শুভেচ্ছা উপহার পাঠাল ত্রিপুরা’: ত্রিপুরা টাইমস",
    "summaryBn": "‘ত্রিপুরা টাইমস’ জানিয়েছে, ঐতিহ্যবাহী সৌহার্দ্যের নিদর্শন হিসেবে ত্রিপুরা উদ্যানপালন দপ্তর থেকে ৬০০টি জিআই ট্যাগযুক্ত বিশেষ 'কুইন আনারস' বাংলাদেশে পাঠানো হয়েছে। এই ধরনের সাংস্কৃতিক ও কৃষি কূটনীতি দুই প্রতিবেশী অঞ্চলের ঐতিহ্যবাহী সম্পর্ককে ইতিবাচক গতি দেয়।",
    "summaryEn": "Tripura Times reports on Tripura's goodwill gesture of dispatching a consignment of 600 GI-tagged export-grade Queen pineapples to Bangladesh, sustaining traditional horticultural diplomacy and fostering warm cross-border neighborly relations.",
    "keyPointsBn": [
      "ত্রিপুরার বিখ্যাত জিআই ট্যাগপ্রাপ্ত কুইন আনারসের বিশেষ চালান হস্তান্তর",
      "ঐতিহ্যবাহী ফল ও খাদ্য কূটনীতির মাধ্যমে দ্বিপাক্ষিক সৌহার্দ্য রক্ষা",
      "স্থানীয় কৃষক ও রপ্তানিকারকদের মধ্যে আন্তঃসীমান্ত কৃষি বাণিজ্যের উৎসাহ বৃদ্ধি"
    ],
    "keyPointsEn": [
      "600 GI-certified premium Queen pineapples dispatched as diplomatic goodwill gift",
      "Maintains longstanding cultural and horticultural exchanges between Tripura and Bangladesh",
      "Boosts morale of local Northeast farmers and agricultural trade stakeholders"
    ],
    "category": "trade",
    "categoryLabelBn": "বাণিজ্য ও অর্থনীতি",
    "categoryLabelEn": "Trade & Connectivity",
    "sentiment": "positive",
    "sentimentReasonBn": "ফল ও খাদ্য কূটনীতির মাধ্যমে সৌহার্দ্য বৃদ্ধির ইতিবাচক নিদর্শন।",
    "sentimentReasonEn": "Positive diplomatic gesture reinforcing regional goodwill and cultural ties.",
    "source": {
      "name": "Tripura Times",
      "bureau": "Tripura",
      "language": "English",
      "originalUrl": "https://news.google.com/rss/articles/CBMi0wFBVV95cUxPSnJIcWlSc2tqeDE3OXVJTC1CMUF",
      "scannedAt": "2026-09-23T02:24:00Z"
    },
    "publishedAt": "2026-09-22T22:15:00Z",
    "readTimeBn": "২ মিনিট",
    "readTimeEn": "2 min read",
    "imageUrl": "/images/india-bangladesh-trade-land-port.jpg",
    "tags": [
      "Tripura Times",
      "Fruit Diplomacy",
      "Queen Pineapple",
      "Tripura",
      "Trade"
    ],
    "isLeadStory": false
  },
  {
    "id": "news-20260923-009",
    "slug": "meghalaya-frontier-ban-unregistered-fish-consignments-bangladesh",
    "title": "Tripura Times: 'Meghalaya Enforces Strict Ban on Unregistered Cross-Border Fish Inflow from Bangladesh Over Quality Standards'",
    "englishTitle": "Tripura Times: 'Meghalaya Enforces Strict Ban on Unregistered Cross-Border Fish Inflow from Bangladesh Over Quality Standards'",
    "banglaTitle": "‘মান নিয়ন্ত্রণ ও সীমান্ত কড়াকড়িতে বাংলাদেশ থেকে অননুমোদিত মাছ আমদানিতে নিষেধাজ্ঞা জারি করল মেঘালয়’: ত্রিপুরা টাইমস",
    "summaryBn": "‘ত্রিপুরা টাইমস’-এর উত্তর-পূর্ব সীমান্ত প্রতিবেদনে বলা হয়েছে, খাদ্য নিরাপত্তা মান ও অননুমোদিত চালান রোধে বাংলাদেশ থেকে নির্দিষ্ট কিছু মাছ আমদানির ওপর কঠোর বিধিনিষেধ জারি করেছে মেঘালয় সরকার। সীমান্ত শুল্ক স্টেশনগুলোতে নমুনা পরীক্ষার ব্যবস্থা জোরদার করা হয়েছে।",
    "summaryEn": "Tripura Times reports that the Meghalaya state government has issued strict regulatory restrictions on unregistered cross-border fish imports from Bangladesh to uphold food quality standards and curb unauthorized trade channels along the international boundary.",
    "keyPointsBn": [
      "অননুমোদিত খাদ্য ও মাছের চালানের ওপর মেঘালয় সরকারের কঠোর নজরদারি",
      "সীমান্তবর্তী স্থলবন্দরগুলোতে খাদ্য নিরাপত্তা ও স্যানিটারি কোয়ারেন্টাইন জোরদার",
      "আইনি চ্যানেলে আনুষ্ঠানিক বাণিজ্যের গতি বজায় রাখার জন্য সুনির্দিষ্ট নীতিমালা"
    ],
    "keyPointsEn": [
      "Meghalaya administration clamps down on unauthorized cross-border perishable consignments",
      "Strengthens sanitary quarantine inspections at Dawki and allied border crossings",
      "Encourages compliance with official trade protocols and formal documentation"
    ],
    "category": "border",
    "categoryLabelBn": "সীমান্ত ও নিরাপত্তা",
    "categoryLabelEn": "Border & Security",
    "sentiment": "neutral",
    "sentimentReasonBn": "সীমান্ত বাণিজ্য নিয়ন্ত্রণ ও খাদ্য নিরাপত্তা মান প্রয়োগের প্রশাসনিক খবর।",
    "sentimentReasonEn": "Administrative reporting on border trade regulations and safety standards.",
    "source": {
      "name": "Tripura Times",
      "bureau": "Siliguri",
      "language": "English",
      "originalUrl": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxOUzhvOTM4ZzdYNDlhZVNQcC1yd29",
      "scannedAt": "2026-09-23T02:24:00Z"
    },
    "publishedAt": "2026-09-22T21:40:00Z",
    "readTimeBn": "৩ মিনিট",
    "readTimeEn": "3 min read",
    "imageUrl": "/images/hilsa-fish-market-trade.jpg",
    "tags": [
      "Meghalaya",
      "Border Trade",
      "Fish Import",
      "Food Safety",
      "Tripura Times"
    ],
    "isLeadStory": false
  },
  {
    "id": "news-20260923-010",
    "slug": "assam-tribune-awami-league-rejects-ict-tribunal-death-verdict",
    "title": "The Assam Tribune: 'Awami League Categorically Rejects Dhaka ICT Special Tribunal Verdict as Pre-Determined and Legally Flawed'",
    "englishTitle": "The Assam Tribune: 'Awami League Categorically Rejects Dhaka ICT Special Tribunal Verdict as Pre-Determined and Legally Flawed'",
    "banglaTitle": "‘ঢাকার বিশেষ আইসিটি ট্রাইব্যুনালের রায়কে একপাক্ষিক ও পক্ষপাতদুষ্ট বলে পুরোপুরি প্রত্যাখ্যান করল আওয়ামী লীগ’: দ্য আসাম ট্রাইব্যুনাল",
    "summaryBn": "‘দ্য আসাম ট্রাইব্যুনাল’-এর প্রতিবেদনে বলা হয়েছে, আন্তর্জাতিক অপরাধ ট্রাইব্যুনাল (আইসিটি) কর্তৃক দলীয় নেতৃবৃন্দের বিরুদ্ধে ঘোষিত রায়কে রাজনৈতিক উদ্দেশ্যপ্রণোদিত আখ্যা দিয়ে প্রত্যাখ্যান করেছে আওয়ামী লীগ। আসাম সীমান্ত ও কূটনৈতিক পর্যবেক্ষকরা পরিস্থিতি গভীরভাবে পর্যবেক্ষণ করছেন।",
    "summaryEn": "The Assam Tribune reports that the Awami League leadership in exile has categorically dismissed the recent Dhaka ICT special tribunal sentencing against party leaders as politically engineered and devoid of internationally recognized due process.",
    "keyPointsBn": [
      "আইসিটি ট্রাইব্যুনালের বিচার প্রক্রিয়াকে রাজনৈতিক প্রতিহিংসামূলক বলে দলীয় আনুষ্ঠানিক বিবৃতি",
      "আন্তর্জাতিক মানবাধিকার সংস্থাগুলোর নিরপেক্ষ পর্যবেক্ষণের জোর দাবি",
      "আসাম ও উত্তর-পূর্ব ভারতের নিরাপত্তা মহলে সীমান্তবর্তী পরিস্থিতির ওপর সজাগ দৃষ্টি"
    ],
    "keyPointsEn": [
      "Awami League rejects ICT tribunal convictions, alleging denial of constitutional defense",
      "Calls for independent scrutiny by international legal and human rights organizations",
      "Security analysts in Assam maintain close watch on cross-border political fallout"
    ],
    "category": "politics",
    "categoryLabelBn": "রাজনীতি ও কূটনীতি",
    "categoryLabelEn": "Politics & Governance",
    "sentiment": "negative",
    "sentimentReasonBn": "আইনি জটিলতা ও রাজনৈতিক সংঘাত সংক্রান্ত বিতর্কিত প্রতিক্রিয়া।",
    "sentimentReasonEn": "Critical political standoff concerning judicial legitimacy and party confrontation.",
    "source": {
      "name": "The Assam Tribune",
      "bureau": "Assam",
      "language": "English",
      "originalUrl": "https://news.google.com/rss/articles/CBMitwFBVV95cUxOZGNYUmhTVTJaRF9VU2FxckpjRHBQc0RHOEo0M1hESkJsblU1UmR4SVRaenUzanZQbzNUVk1ndG9vR3JqQ0MwYXpjMEl4V3RxSVY0WVhMYi1fTXlWUW5udjR4SEl6LUIwOVVDRzZXSUVWZm1acnVGdlRfTWw5WUg4dE9KTHN3bVVSVWk0YTc2ZzhQdlhFZkxhZGFFd2IxeU1IVXhhOGhwV1NPRFVXUm9seW1XemdEeEHSAbwBQVVfeXFMTmk4NHNsckdiQlVjWkVjRHR5cFZ1Rk13NUltNU5mbTNmenRWWTQzZ05qTmk0LU16Z2VsaFVsQVNpcGQzZVJmLW4xVlFtbFlfMFcyVFZLU0NvdV9HXzNjRm1OWjBISHpYMDlqV0IyeTJYOFYyaDFHU3RRS0tFVW5rVjQwVzJkeC1NVkxlUU5VVjUyaWROdmxYbDJIVEQ2MXVCWkR3enV1Qnk0UTBsbVhrckxRNXlTb3ZJOTFwQlE?oc=5",
      "scannedAt": "2026-09-23T02:24:00Z"
    },
    "publishedAt": "2026-09-22T21:10:00Z",
    "readTimeBn": "৩ মিনিট",
    "readTimeEn": "3 min read",
    "imageUrl": "/images/international-crimes-tribunal-dhaka.jpg",
    "tags": [
      "The Assam Tribune",
      "ICT Tribunal",
      "Awami League",
      "Assam Bureau",
      "Politics"
    ],
    "isLeadStory": false
  },
  {
    "id": "news-20260923-011",
    "slug": "ndtv-video-dispatch-sheikh-hasina-regional-security-terror-threat",
    "title": "NDTV Video Dispatch: 'Sheikh Hasina Warns Against Escalating Regional Terror Threat & Signals Party Strategy'",
    "englishTitle": "NDTV Video Dispatch: 'Sheikh Hasina Warns Against Escalating Regional Terror Threat & Signals Party Strategy'",
    "banglaTitle": "‘এনডিটিভি ভিডিও বিশ্লেষণ: আঞ্চলিক সন্ত্রাসবাদের ঝুঁকি ও দলীয় পুনর্গঠন নিয়ে শেখ হাসিনার বিশেষ সাক্ষাৎকার’: এনডিটিভি",
    "summaryBn": "‘এনডিটিভি’-র বিশেষ ভিডিও ডিসপ্যাচে শেখ হাসিনার জাতীয় ও আঞ্চলিক নিরাপত্তা সংক্রান্ত বিশ্লেষণ তুলে ধরা হয়েছে। তিনি সতর্ক করে বলেছেন যে চরমপন্থী ও জঙ্গিগোষ্ঠীর অপতৎপরতা পুরো দক্ষিণ এশিয়ার শান্তির জন্য হুমকিস্বরূপ এবং আওয়ামী লীগ সবসময় ধর্মনিরপেক্ষ গণতান্ত্রিক মূলবোধের পক্ষে অবিচল থাকবে।",
    "summaryEn": "In an exclusive NDTV broadcast dispatch, Sheikh Hasina cautions against emerging risks from extremist organizations in the region and outlines her party's commitment to constitutional democracy, secular governance, and subcontinental security cooperation.",
    "keyPointsBn": [
      "দক্ষিণ এশীয় অঞ্চলে চরমপন্থী গোষ্ঠীর পুনরুত্থান রুখতে সম্মিলিত সতর্কতার আহ্বান",
      "দলের তৃণমূল নেতৃত্বকে ঐক্যবদ্ধ ও যেকোনো উস্কানির বিরুদ্ধে শান্ত থাকার নির্দেশ",
      "দিল্লি ও আঞ্চলিক নিরাপত্তা বিশ্লেষকদের মধ্যে বিশেষ সাক্ষাৎকার নিয়ে ব্যাপক পর্যালোচনা"
    ],
    "keyPointsEn": [
      "Highlights grave regional security risks posed by radical militant elements",
      "Urges political cadres to maintain organizational discipline and democratic perseverance",
      "Generates widespread analytical engagement among Delhi foreign policy observers"
    ],
    "category": "diplomacy",
    "categoryLabelBn": "কূটনীতি ও দূতাবাস",
    "categoryLabelEn": "Diplomacy & Embassy",
    "sentiment": "neutral",
    "sentimentReasonBn": "আঞ্চলিক নিরাপত্তা ও ভূ-রাজনৈতিক উদ্বেগের ওপর ভারসাম্যপূর্ণ ভিডিও বিশ্লেষণ।",
    "sentimentReasonEn": "Balanced video analysis addressing regional stability and counter-terror dynamics.",
    "mediaFormat": "youtube",
    "videoUrl": "https://www.youtube.com/watch?v=kYx8Z5r9qV0",
    "source": {
      "name": "NDTV",
      "bureau": "Delhi",
      "language": "English",
      "originalUrl": "https://news.google.com/rss/articles/CBMiVkFVX3lxTE5NcUQ1TkhfdW1uRURFU1Nib0hoXzVYNUJCOXhNc0wzTzZzQ0lGeFhUOXRjSUZ4U0o4RDZqU1I1X19lUEdpbEdYaU5pampCbElsazNlOHZ3?oc=5",
      "scannedAt": "2026-09-23T02:24:00Z"
    },
    "publishedAt": "2026-09-22T20:30:00Z",
    "readTimeBn": "৩ মিনিট",
    "readTimeEn": "3 min read",
    "imageUrl": "/images/thewall-hasina-interview.jpeg",
    "tags": [
      "NDTV",
      "Video Dispatch",
      "Regional Security",
      "Sheikh Hasina",
      "Delhi Bureau"
    ],
    "isLeadStory": false
  },
  {
    "id": "news-20260923-012",
    "slug": "abp-ananda-video-dispatch-border-transit-dynamics-ground-report",
    "title": "ABP Ananda Video Dispatch: 'Ground Analysis: Border Transit Dynamics, Freight Channels & Cross-Border Mobility Post-Transition'",
    "englishTitle": "ABP Ananda Video Dispatch: 'Ground Analysis: Border Transit Dynamics, Freight Channels & Cross-Border Mobility Post-Transition'",
    "banglaTitle": "‘ভিডিও প্রতিবেদন: রাজনৈতিক পটপরিবর্তন পরবর্তী ভারত-বাংলাদেশ ট্রানজিট ও স্থলবন্দর বাণিজ্যের গতিপ্রকৃতি’: এবিপি আনন্দ",
    "summaryBn": "‘এবিপি আনন্দ’-র ভিডিও বিশেষ প্রতিবেদনে পেট্রাপোল, গেদে ও হিলি সীমান্ত দিয়ে পণ্যবাহী ট্রাক চলাচল ও সাধারণ যাত্রীদের যাতায়াতের বর্তমান চিত্র বিশ্লেষণ করা হয়েছে। বাণিজ্যিক শুল্ক কড়াকড়ি ও নিরাপত্তা ব্যবস্থা বৃদ্ধির মধ্যেও কীভাবে সরবরাহ লাইন স্বাভাবিক রাখার চেষ্টা চলছে তা দেখানো হয়েছে।",
    "summaryEn": "ABP Ananda presents a video dispatch examining cross-border freight movements and civilian transit dynamics across Petrapole, Gede, and Hili land ports, showcasing customs measures that sustain bilateral essential supply chains amid heightened frontier vigilance.",
    "keyPointsBn": [
      "পেট্রাপোল ও বেনাপোল স্থলবন্দরে ট্রাক চলাচল ও পণ্য খালাসের বর্তমান গতিপ্রকৃতি",
      "পচনশীল পণ্য ও ওষুধের জন্য বিশেষ চ্যানেল বজায় রাখার উদ্যোগ",
      "সীমান্তবর্তী ব্যবসায়ী ও পরিবহন শ্রমিকদের বাস্তব অভিজ্ঞতার ওপর সরেজমিন প্রতিবেদন"
    ],
    "keyPointsEn": [
      "Examines freight throughput and clearing operations at Petrapole-Benapole corridor",
      "Highlights expedited logistics lanes for life-saving pharmaceuticals and essential perishables",
      "Ground reporting from border communities, transport operators, and customs personnel"
    ],
    "category": "border",
    "categoryLabelBn": "সীমান্ত ও নিরাপত্তা",
    "categoryLabelEn": "Border & Security",
    "sentiment": "positive",
    "sentimentReasonBn": "সীমান্ত বাণিজ্য ও পণ্য সরবরাহ স্বাভাবিক রাখার কার্যকর প্রচেষ্টার ওপর ভিডিও কভারেজ।",
    "sentimentReasonEn": "Constructive ground video report on maintaining essential cross-border trade flows.",
    "mediaFormat": "youtube",
    "videoUrl": "https://www.youtube.com/watch?v=0WrRFhIezuc",
    "source": {
      "name": "ABP Ananda",
      "bureau": "Kolkata",
      "language": "Bengali",
      "originalUrl": "https://www.youtube.com/watch?v=0WrRFhIezuc",
      "scannedAt": "2026-09-23T02:24:00Z"
    },
    "publishedAt": "2026-09-22T19:50:00Z",
    "readTimeBn": "৩ মিনিট",
    "readTimeEn": "3 min read",
    "imageUrl": "/images/border-checkpost-petrapole-gede.jpg",
    "tags": [
      "ABP Ananda",
      "Video Dispatch",
      "Petrapole",
      "Border Trade",
      "Kolkata Bureau"
    ],
    "isLeadStory": false
  },
{
  "id": "news-20260922-103",
  "slug": "indian-express-asad-alam-siam-new-bangladesh-high-commissioner-delhi",
  "title": "The Indian Express: 'Senior Diplomat Asad Alam Siam Designated New Bangladesh High Commissioner to India'",
  "englishTitle": "The Indian Express: 'Senior Diplomat Asad Alam Siam Designated New Bangladesh High Commissioner to India'",
  "banglaTitle": "‘ভারতে বাংলাদেশের নতুন হাইকমিশনার পদে জ্যেষ্ঠ কূটনীতিক আসাদ আলম সিয়াম নিয়োজিত’: দ্য ইন্ডিয়ান এক্সপ্রেস",
  "summaryBn": "‘দ্য ইন্ডিয়ান এক্সপ্রেস’-এর কূটনৈতিক ডেস্কে বলা হয়েছে, অন্তর্বর্তীকালীন সরকার নয়াদিল্লিতে বাংলাদেশের নতুন হাইকমিশনার হিসেবে পররাষ্ট্র সচিব আসাদ আলম সিয়ামকে নিযুক্ত করতে যাচ্ছে। দিল্লির পররাষ্ট্র বিশ্লেষকরা মনে করছেন, এই নিয়োগ দ্বিপাক্ষিক আলোচনা ও সরাসরি যোগাযোগ সহজ করতে ইতিবাচক ভূমিকা রাখবে।",
  "summaryEn": "The Indian Express reports from Delhi that senior diplomat and Foreign Secretary Asad Alam Siam has been designated as Bangladesh's new High Commissioner to India. Diplomatic strategists in New Delhi view the appointment as a constructive move to streamline bilateral consultations and resolve pending trade and visa issues.",
  "keyPointsBn": [
    "নয়াদিল্লিতে নতুন হাইকমিশনার হিসেবে আসাদ আলম সিয়ামকে মনোনয়ন দিল ঢাকা",
    "দিল্লির কূটনৈতিক মহলে দুই দেশের মধ্যে সরাসরি আলোচনা ও যোগাযোগ সহজ করার আশা",
    "ভিসা সেবা ও বাণিজ্য সংক্রান্ত অমীমাংসিত বিষয়গুলো দ্রুত নিষ্পত্তির তাগিদ"
  ],
  "keyPointsEn": [
    "Dhaka designates Foreign Secretary Asad Alam Siam as new High Commissioner to India",
    "Diplomatic circles in Delhi view appointment as positive step for direct bilateral channels",
    "Aims to expedite consultations on trade clearances and visa processing operations"
  ],
  "category": "diplomacy",
  "categoryLabelBn": "কূটনীতি ও দূতাবাস",
  "categoryLabelEn": "Diplomacy & Embassy",
  "sentiment": "positive",
  "sentimentReasonBn": "কূটনৈতিক প্রতিনিধি নিয়োগ ও দ্বিপাক্ষিক যোগাযোগের ইতিবাচক পদক্ষেপ।",
  "sentimentReasonEn": "Positive coverage of diplomatic appointment and bilateral engagement channels.",
  "source": {
    "name": "The Indian Express",
    "bureau": "Delhi",
    "language": "English",
    "originalUrl": "https://indianexpress.com/article/world/bangladesh-foreign-secretary-asad-alam-siam-new-envoy-india/",
    "scannedAt": "2026-09-22T16:00:00Z"
  },
  "publishedAt": "2026-09-22T16:00:00Z",
  "readTimeBn": "৩ মিনিট পাঠ",
  "readTimeEn": "3 min read",
  "imageUrl": "/images/bangladesh-high-commission-new-delhi.jpg",
  "isLeadStory": true,
  "isTrending": true,
  "isBreaking": true,
  "tags": [
    "The Indian Express",
    "High Commissioner",
    "Diplomacy",
    "New Delhi",
    "Dhaka"
  ]
},
{
  "id": "news-20260922-104",
  "slug": "tripura-times-meghalaya-tripura-border-security-detention-protocols",
  "title": "Tripura Times: 'Northeast Border Vigilance Streamlined Along Tripura & Meghalaya Sectors'",
  "englishTitle": "Tripura Times: 'Northeast Border Vigilance Streamlined Along Tripura & Meghalaya Sectors'",
  "banglaTitle": "‘ত্রিপুরা ও মেঘালয় সীমান্তে অনুপ্রবেশ প্রতিরোধে বিশেষ ইমিগ্রেশন ও সুরক্ষা প্রটোকল কার্যকর’: ত্রিপুরা টাইমস",
  "summaryBn": "ত্রিপুরা ও উত্তর-পূর্বের প্রথম সারির ইংরেজি দৈনিক ‘ত্রিপুরা টাইমস’ প্রকাশিত খবরে বলা হয়েছে, সীমান্ত টহল বৃদ্ধি ও অবৈধ প্রবেশ ঠেকাতে ত্রিপুরা ও মেঘালয় সীমান্ত সেক্টরে যৌথ নিরাপত্তা প্রটোকল জোরদার করা হয়েছে। বিএসএফ ও রাজ্য পুলিশ সমন্বিতভাবে নদীপথ ও স্থল সীমান্তে নজরদারি চালাচ্ছে।",
  "summaryEn": "Tripura Times reports on updated border management protocols enacted along the Tripura and Meghalaya frontiers. Border Security Force (BSF) commandants and state police forces have instituted coordinated patrolling along riverine and land sectors to preserve regional security.",
  "keyPointsBn": [
    "ত্রিপুরা ও মেঘালয় সীমান্ত সেক্টরে বিএসএফ ও রাজ্য পুলিশের সমন্বিত নিরাপত্তা টহল",
    "নদীপথ ও সীমান্ত এলাকার স্পর্শকাতর পয়েন্টগুলোতে অতিরিক্ত নাইট-ভিশন সেন্সর মোতায়েন",
    "আঞ্চলিক স্থিতিশীলতা রক্ষায় স্থানীয় সীমান্ত জনগোষ্ঠীর যৌথ সহযোগিতা"
  ],
  "keyPointsEn": [
    "Joint security operations activated across Tripura and Meghalaya border sectors",
    "Additional night-vision thermal sensors deployed along riverine and remote outposts",
    "Emphasizes community coordination to preserve North-East frontier security"
  ],
  "category": "border",
  "categoryLabelBn": "সীমান্ত নিরাপত্তা ও উত্তর-পূর্ব",
  "categoryLabelEn": "Border & North-East",
  "sentiment": "neutral",
  "sentimentReasonBn": "সীমান্ত নিরাপত্তার বস্তুনিষ্ঠ ও সমন্বিত প্রতিরক্ষামূলক কভারেজ।",
  "sentimentReasonEn": "Objective reporting on border vigilance and North-Eastern regional security.",
  "source": {
    "name": "Tripura Times",
    "bureau": "Tripura",
    "language": "English",
    "originalUrl": "https://tripuratimes.com/news/meghalaya-tripura-border-security-detention-protocols-20260922",
    "scannedAt": "2026-09-22T16:00:00Z"
  },
  "publishedAt": "2026-09-22T15:30:00Z",
  "readTimeBn": "৩ মিনিট পাঠ",
  "readTimeEn": "3 min read",
  "imageUrl": "/images/gauhati-high-court.jpg",
  "isLeadStory": false,
  "isTrending": false,
  "isBreaking": false,
  "tags": [
    "Tripura Times",
    "BSF Vigilance",
    "Tripura Border",
    "Meghalaya",
    "Agartala"
  ]
},
{
  "id": "news-20260922-105",
  "slug": "ndtv-sports-asian-games-women-cricket-bronze-pakistan-beat-bangladesh",
  "title": "NDTV Sports: 'Asian Games 2026: Pakistan Defeats Bangladesh by 31 Runs in Women's Cricket Bronze Playoff'",
  "englishTitle": "NDTV Sports: 'Asian Games 2026: Pakistan Defeats Bangladesh by 31 Runs in Women's Cricket Bronze Playoff'",
  "banglaTitle": "‘এশিয়ান গেমসে ব্রোঞ্জ পদক নির্ধারণী ম্যাচে পাকিস্তানকে রুখতে ব্যর্থ বাংলাদেশ উইমেনস দল’: এনডিটিভি স্পোর্টস",
  "summaryBn": "এনডিটিভি স্পোর্টসের আন্তর্জাতিক কভারেজে জানানো হয়েছে, এশিয়ান গেমস ২০২৬-এর নারী টি-টোয়েন্টি ক্রিকেটের তৃতীয় স্থান নির্ধারণী ম্যাচে পাকিস্তানের কাছে ৩১ রানে হেরে পদক হাতছাড়া করেছে বাংলাদেশ উইমেনস টিম। জাপানের কোরোগি স্পোর্টস পার্কে পাকিস্তান ১৪৫ রান করার জবাবে বাংলাদেশ ১১৪ রানে অলআউট হয়।",
  "summaryEn": "NDTV Sports reports on the Asian Games 2026 women's cricket 3rd place playoff at Korogi Sports Park, where Pakistan women's team defeated Bangladesh by 31 runs to claim the bronze medal. Chasing 146, Bangladesh Tigresses were bowled out for 114.",
  "keyPointsBn": [
    "এশিয়ান গেমসে উইমেনস টি-টোয়েন্টি ব্রোঞ্জ প্লে-অফে পাকিস্তানের জয়",
    "১৪৬ রানের লক্ষ্যে ব্যাট করতে নেমে ১১৪ রানে অলআউট বাংলাদেশ দল",
    "দক্ষিণ এশীয় ক্রিকেট অঙ্গনে আগামী টুর্নামেন্টের প্রস্তুতি মূল্যায়ন"
  ],
  "keyPointsEn": [
    "Pakistan women's team clinches bronze medal defeating Bangladesh by 31 runs",
    "Bangladesh bowled out for 114 chasing a target of 146",
    "Evaluates performance and tournament standings across South Asian teams"
  ],
  "category": "sports",
  "categoryLabelBn": "ক্রীড়া ও ক্রিকেট",
  "categoryLabelEn": "Sports & Cricket",
  "sentiment": "neutral",
  "sentimentReasonBn": "আন্তর্জাতিক ক্রীড়া প্রতিযোগিতার ফলাফল সংক্রান্ত নিরপেক্ষ খবর।",
  "sentimentReasonEn": "Factual sports reporting on Asian Games T20 match outcome.",
  "source": {
    "name": "NDTV Sports",
    "bureau": "Mumbai",
    "language": "English",
    "originalUrl": "https://sports.ndtv.com/cricket/asian-games-2026-pakistan-women-win-bronze-beating-bangladesh-12073200",
    "scannedAt": "2026-09-22T16:00:00Z"
  },
  "publishedAt": "2026-09-22T15:00:00Z",
  "readTimeBn": "২ মিনিট পাঠ",
  "readTimeEn": "2 min read",
  "imageUrl": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=1200&auto=format&fit=crop&q=80",
  "isLeadStory": false,
  "isTrending": true,
  "isBreaking": false,
  "tags": [
    "NDTV Sports",
    "Asian Games 2026",
    "Cricket",
    "Bangladesh Tigresses",
    "T20"
  ]
},
{
  "id": "news-20260922-106",
  "slug": "economic-times-textile-supply-chains-indian-cotton-yarn-exports-to-dhaka",
  "title": "Economic Times: 'Indian Textile Mills Sustain Raw Cotton & Yarn Export Flow to Bangladesh Factories'",
  "englishTitle": "Economic Times: 'Indian Textile Mills Sustain Raw Cotton & Yarn Export Flow to Bangladesh Factories'",
  "banglaTitle": "‘বাংলাদেশের পোশাক কারখানার উৎপাদন সচল রাখতে ভারতীয় তুলা ও সুতার রপ্তানি অব্যাহত’: ইকোনমিক টাইমস",
  "summaryBn": "মুম্বই কেন্দ্রিক ইকোনমিক টাইমসের শিল্প প্রতিবেদনে উল্লেখ করা হয়েছে, বাংলাদেশে বিদ্যুৎ সংকট ও অভ্যন্তরীণ চ্যালেঞ্জ থাকা সত্ত্বেও ভারতীয় তুলা উৎপাদনকারী ও সুতা মিলগুলো সড়ক ও রেলপথে রপ্তানি পাঠাচ্ছ। মুম্বই ও আহমেদাবাদ বস্ত্র সমিতি জানিয়েছে, এতে দক্ষিণ এশীয় তৈরি পোশাক জোগান শৃঙ্খল স্থিতিশীল থাকছে।",
  "summaryEn": "The Economic Times dispatches an industry report outlining how Indian spinning mills and cotton exporters are maintaining raw material rail cargo into Bangladesh. Exporters in Gujarat and Maharashtra emphasize that raw cotton supplies protect apparel supply chains across South Asia.",
  "keyPointsBn": [
    "ভারতীয় টেক্সটাইল মিলগুলো থেকে বাংলাদেশে তুলা ও সুতা পণ্যবাহী ট্রেনের নিয়মিত চলাচল",
    "মুম্বই ও সুরাটের শিল্প রপ্তানিকারকদের মতে যৌথ উৎপাদন সমন্বয় বজায় রাখা জরুরি",
    "দক্ষিণ এশিয়ার টেক্সটাইল ও তৈরি পোশাক বাজারে স্থিতিশীলতা বজায় রাখার ইতিবাচক পদক্ষেপ"
  ],
  "keyPointsEn": [
    "Indian spinning mills maintain steady raw cotton and yarn freight trains to Bangladesh",
    "Industry bodies in Mumbai and Surat highlight importance of supply chain co-dependence",
    "Protects apparel manufacturing orders and export commitments across South Asia"
  ],
  "category": "economy",
  "categoryLabelBn": "অর্থনীতি ও টেক্সটাইল",
  "categoryLabelEn": "Economy & Textile",
  "sentiment": "positive",
  "sentimentReasonBn": "শিল্প উপাদান সরবরাহ ও টেক্সটাইল সহযোগিতার ইতিবাচক খবর।",
  "sentimentReasonEn": "Positive coverage of cross-border supply chain resilience and raw material exports.",
  "source": {
    "name": "Economic Times",
    "bureau": "Mumbai",
    "language": "English",
    "originalUrl": "https://economictimes.indiatimes.com/industry/cons-products/garments-/-textiles/indian-textile-mills-sustain-raw-cotton-yarn-export-flow-to-bangladesh/articleshow/134396112.cms",
    "scannedAt": "2026-09-22T16:00:00Z"
  },
  "publishedAt": "2026-09-22T14:30:00Z",
  "readTimeBn": "৩ মিনিট পাঠ",
  "readTimeEn": "3 min read",
  "imageUrl": "/images/petrapole-benapole-trade-cargo.jpg",
  "isLeadStory": false,
  "isTrending": false,
  "isBreaking": false,
  "tags": [
    "Economic Times",
    "Textile Industry",
    "Cotton Exports",
    "Mumbai Desk",
    "Apparel Supply"
  ]
},
{
  "id": "news-20260922-107",
  "slug": "wion-video-hilsa-trade-reversal-how-india-steps-in-dhaka-supply-deficits",
  "title": "WION Fineprint Dispatch: 'How Reverse Hilsa Trade Flows From India Eases Seafood Supply In Bangladesh'",
  "englishTitle": "WION Fineprint Dispatch: 'How Reverse Hilsa Trade Flows From India Eases Seafood Supply In Bangladesh'",
  "banglaTitle": "‘ভারতে উৎপাদিত সমুদ্রের ইলিশ কেন বাংলাদেশে পাঠানো হচ্ছে: ডাব্লিউআইওএন ফাইনপ্রিন্ট ভিডিও বিশ্লেষণ’",
  "summaryBn": "ডাব্লিউআইওএন (WION)-এর গ্রাভিটাস ও ফাইনপ্রিন্ট ভিডিও রিপোর্টে দক্ষিণ এশীয় ইলিশ বাণিজ্যের বিপরীত প্রবণতা বিশ্লেষণ করা হয়েছে। গুজরাট ও পশ্চিমবঙ্গের সমুদ্র বন্দর থেকে রেফ্রিজারেটেড লরিতে উৎপাদিত ইলিশ ঢাকার মাছ বাজারে জোগান সংকট কমিয়ে আনছে।",
  "summaryEn": "WION Fineprint dispatches a video explainer mapping the reverse Hilsa fish trade flow from Indian maritime ports into Bangladesh markets. The report frames the commercial trade as a pragmatic solution to seasonal supply shortfalls in Dhaka.",
  "keyPointsBn": [
    "গুজরাট ও পশ্চিমবঙ্গের বন্দর থেকে ঢাকায় শীতাতপ নিয়ন্ত্রিত ইলিশ সরবরাহের ভিডিও রিপোর্ট",
    "উৎসবের মৌসুমে ঢাকার খুচরা বাজারে মাছের সরবরাহ ও মূল্য নিয়ন্ত্রণে বাণিজ্যিক ভূমিকা",
    "দক্ষিণ এশিয়ার মৎস্য ও খাদ্য বাণিজ্যে দুই দেশের বাস্তবভিত্তিক সহযোগিতার প্রশংসা"
  ],
  "keyPointsEn": [
    "Video dispatch tracks refrigerated Hilsa freight shipments from Gujarat and Bengal ports to Dhaka",
    "Addresses festive season retail supply deficits in Bangladesh fish markets",
    "Highlights economic agility and trade cooperation across South Asian borders"
  ],
  "category": "culture",
  "categoryLabelBn": "বাণিজ্য ও সংস্কৃতি",
  "categoryLabelEn": "Trade & Culture",
  "sentiment": "positive",
  "sentimentReasonBn": "বাণিজ্যিক সমন্বয় ও মৎস্য সরবরাহের ইতিবাচক ভিডিও বিশ্লেষণ।",
  "sentimentReasonEn": "Positive coverage of cross-border trade continuity and food supply solutions.",
  "source": {
    "name": "WION News (YouTube)",
    "bureau": "Delhi",
    "language": "English",
    "originalUrl": "https://news.google.com/rss/articles/CBMiVkFVX3lxTFBFWXBqRHZiaXE2ajU2TV9YcTZEQnlqTU1WUTRuRzJPNElYQXZmLTNyNWJHaWtuVkpIQnhwQ0lDQW1BVkxTZVlIVndCQ1RfTC1xZE9zSGdR?oc=5",
    "scannedAt": "2026-09-22T16:00:00Z"
  },
  "publishedAt": "2026-09-22T14:00:00Z",
  "readTimeBn": "৩ মিনিট ভিডিও",
  "readTimeEn": "3 min video",
  "imageUrl": "/images/hilsa-fish-market-trade.jpg",
  "isLeadStory": false,
  "isTrending": true,
  "isBreaking": false,
  "tags": [
    "WION News",
    "YouTube Dispatch",
    "Hilsa Trade",
    "Food Diplomacy",
    "Delhi Bureau"
  ]
},
{
  "id": "news-20260922-108",
  "slug": "anandabazar-patrika-benapole-petrapole-rail-freight-corridor-capacity-boost",
  "title": "Anandabazar Patrika: 'Eastern Railway & Customs Expand Daily Freight Train Slots Across Petrapole-Benapole Rail Link'",
  "englishTitle": "Anandabazar Patrika: 'Eastern Railway & Customs Expand Daily Freight Train Slots Across Petrapole-Benapole Rail Link'",
  "banglaTitle": "‘পেট্রাপোল-বেনাপোল রেল করিডোরে পণ্যবাহী ট্রেনের ট্রিপ সংখ্যা বাড়ানোর সিদ্ধান্ত পূর্ব রেলের’: আনন্দবাজার পত্রিকা",
  "summaryBn": "আনন্দবাজার পত্রিকার পরিবহন পাতায় প্রকাশ করা হয়েছে, ভারত-বাংলাদেশ রেল পণ্য পরিবহন গতিশীল করতে পূর্ব রেল এবং শুল্ক বিভাগ পেট্রাপোল-বেনাপোল সীমান্ত দিয়ে দৈনিক কন্টেইনার ও কাঁচামালবাহী ট্রেনের ট্রিপ সংখ্যা বৃদ্ধি করার চুক্তি করেছে। এতে আন্তর্জাতিক বাণিজ্য পথ নিরাপদ ও দ্রুততর হবে।",
  "summaryEn": "Anandabazar Patrika reports that Eastern Railway and customs authorities have agreed to increase daily freight train slots along the Petrapole-Benapole rail corridor. The initiative optimizes rail cargo transshipment and reduces reliance on congested highway borders.",
  "keyPointsBn": [
    "পেট্রাপোল-বেনাপোল রেল সংযোগে দৈনিক পণ্যবাহী ট্রেনের সংখ্যা বৃদ্ধির সিদ্ধান্ত পূর্ব রেলের",
    "কনটেইনার ও কাঁচামাল পরিবহনে সময় কমানোর উদ্যোগ",
    "দুই দেশের ব্যবসায়ীদের দীর্ঘদিনের দাবি পূরণ ও পরিবহন ব্যয় কমানোর বাণিজ্যিক পদক্ষেপ"
  ],
  "keyPointsEn": [
    "Eastern Railway and customs add daily freight train slots on Petrapole-Benapole line",
    "Accelerates containerized cargo transit and reduces highway customs bottlenecking",
    "Welcomed by trade bodies in Kolkata and Dhaka for lowering international logistics costs"
  ],
  "category": "trade",
  "categoryLabelBn": "রেল ও সীমান্ত বাণিজ্য",
  "categoryLabelEn": "Rail & Border Trade",
  "sentiment": "positive",
  "sentimentReasonBn": "রেল পরিবহন ব্যবস্থা সম্প্রসারণ ও সীমান্ত বাণিজ্যে গতির খবর।",
  "sentimentReasonEn": "Positive coverage of railway logistics expansion and cross-border trade optimization.",
  "source": {
    "name": "Anandabazar Patrika",
    "bureau": "Kolkata",
    "language": "Bengali",
    "originalUrl": "https://www.anandabazar.com/west-bengal/kolkata/eastern-railway-customs-expand-daily-freight-train-slots-petrapole-benapole-link-dgtl/cid/1549920",
    "scannedAt": "2026-09-22T16:00:00Z"
  },
  "publishedAt": "2026-09-22T13:00:00Z",
  "readTimeBn": "৩ মিনিট পাঠ",
  "readTimeEn": "3 min read",
  "imageUrl": "/images/india-bangladesh-trade-land-port.jpg",
  "isLeadStory": false,
  "isTrending": false,
  "isBreaking": false,
  "tags": [
    "Anandabazar Patrika",
    "Kolkata Bureau",
    "Petrapole Rail Link",
    "Eastern Railway",
    "Freight Logistics"
  ]
},
{
  "id": "news-20260922-091",
  "slug": "assam-tribune-awami-league-slams-ict-death-verdict-fabricated",
  "title": "The Assam Tribune: 'Awami League Rejects ICT Death Sentences as One-Sided & Fabricated; Guwahati Bureau Reports'",
  "englishTitle": "The Assam Tribune: 'Awami League Rejects ICT Death Sentences as One-Sided & Fabricated'",
  "banglaTitle": "‘আন্তর্জাতিক অপরাধ ট্রাইব্যুনালের মৃত্যুদণ্ডের রায়কে একপাক্ষিক দাবি করে প্রত্যাখ্যান আওয়ামী লীগের’: দ্য আসাম ট্রাইব্যুনাল",
  "summaryBn": "উত্তর-পূর্ব ভারতের প্রধান ইংরেজি দৈনিক ‘দ্য আসাম ট্রাইব্যুনাল’-এর প্রতিবেদনে বলা হয়েছে, সাবেক প্রধানমন্ত্রী শেখ হাসিনার দল আওয়ামী লীগ ঢাকার ট্রাইব্যুনাল কর্তৃক ৭ নেতার বিরুদ্ধে ঘোষিত মৃত্যুদণ্ডের রায়কে ‘একপাক্ষিক ও রাজনৈতিক উদ্দেশ্যপ্রণোদিত’ দাবি করে প্রত্যাখ্যান করেছে। গুয়াহাটি নীতি বিশ্লেষকরা উল্লেখ করেছেন, এই বিচারিক সিদ্ধান্ত দক্ষিণ এশীয় রাজনীতিতে গভীর প্রভাব ফেলবে।",
  "summaryEn": "The Assam Tribune reports from Guwahati that the Awami League has officially denounced the International Crimes Tribunal verdict sentencing seven party leaders to death in absentia. Party spokespersons termed the trial unilateral and politically driven, while North-Eastern security analysts evaluate the stability implications along India's Eastern frontier.",
  "keyPointsBn": [
    "শেখ হাসিনার দলীয় ৭ জ্যেষ্ঠ নেতার বিরুদ্ধে ঢাকার ট্রাইব্যুনালে ট্রায়াল ইন অ্যাবসেন্টিয়ায় মৃত্যুদণ্ড",
    "গুয়াহাটি নীতি ডেস্কে ভারত-বাংলাদেশ কূটনৈতিক সম্পর্কের উপর এই রায়ের প্রভাবের নিবিড় বিশ্লেষণ",
    "আইনি গবেষকদের মতে রাজনৈতিক বিচারের স্বচ্ছতা নিয়ে আন্তর্জাতিক মানবাধিকার মহলে উদ্বেগ"
  ],
  "keyPointsEn": [
    "Dhaka ICT sentences 7 senior Hasina administration figures to death in absentia",
    "Assam media analysis measures potential diplomatic fallout on India-Bangladesh relations",
    "Legal experts observe international scrutiny surrounding absentia trials in Dhaka"
  ],
  "category": "politics",
  "categoryLabelBn": "রাজনীতি ও আইন",
  "categoryLabelEn": "Politics & Law",
  "sentiment": "negative",
  "sentimentReasonBn": "রাজনৈতিক উত্তেজনা ও বিচারিক প্রক্রিয়া ঘিরে বিতর্কের তথ্যমূলক কভারেজ।",
  "sentimentReasonEn": "Focuses on political volatility, legal controversies, and capital punishment verdicts in Dhaka.",
  "source": {
    "name": "The Assam Tribune",
    "bureau": "Assam",
    "language": "English",
    "originalUrl": "https://news.google.com/rss/articles/CBMisgFBVV95cUxOLW0wRzdDLWh1V1EteE03aW9vZGRib29tWlUxN29hLUUzWHVtaG94N2FTOVRybllDbF_SAeM?oc=5",
    "scannedAt": "2026-09-22T14:30:00Z"
  },
  "publishedAt": "2026-09-22T14:00:00Z",
  "readTimeBn": "৩ মিনিট পাঠ",
  "readTimeEn": "3 min read",
  "imageUrl": "/images/gauhati-high-court.jpg",
  "isLeadStory": true,
  "isTrending": true,
  "isBreaking": true,
  "tags": [
    "The Assam Tribune",
    "Assam Bureau",
    "ICT Verdict",
    "Awami League",
    "Guwahati"
  ]
},
{
  "id": "news-20260922-092",
  "slug": "firstpost-video-bangladesh-sentences-7-hasina-aides-death-july-uprising",
  "title": "Firstpost Video Dispatch: 'Bangladesh ICT Sentences 7 Hasina Aides to Death Over 2024 Uprising Crackdown'",
  "englishTitle": "Firstpost Video Dispatch: 'Bangladesh ICT Sentences 7 Hasina Aides to Death Over 2024 Uprising Crackdown'",
  "banglaTitle": "‘২০২৪ এর আন্দোলনের ঘটনায় হাসিনা ঘনিষ্ঠ ৭ শীর্ষ নেতাকে ট্রাইব্যুনালের মৃত্যুদণ্ড’: ফার্স্টপোস্ট ভিডিও",
  "summaryBn": "ফার্স্টপোস্ট ডিজিটাল নেটওয়ার্কের একটি প্রধান ভিডিও বিশ্লেষণে দেখানো হয়েছে, ঢাকার আন্তর্জাতিক অপরাধ ট্রাইব্যুনাল ২০২৪ সালের শিক্ষার্থী আন্দোলনের সময় সহিংসতা ও খুনের অভিযোগে ওবায়দুল কাদের ও বাহাউদ্দিন নাছিম সহ আওয়ামী লীগের ৭ নেতাকে ট্রায়াল ইন অ্যাবসেন্টিয়ায় মৃত্যুদণ্ড প্রদান করেছে।",
  "summaryEn": "Firstpost produces a video dispatch detailing the capital punishment sentence issued by Dhaka's International Crimes Tribunal against seven former Hasina-era functionaries including Obaidul Quader and AFM Bahauddin Nasim. The legal panel examines in absentia trial standards under international human rights frameworks.",
  "keyPointsBn": [
    "ওবায়দুল কাদের ও বাহাউদ্দিন নাছিম সহ আওয়ামী লীগের ৭ নেতার বিরুদ্ধে মৃত্যুদণ্ডের রায়",
    "ফার্স্টপোস্ট ভিডিও ডেস্কে আন্তর্জাতিক আইনবিদদের মতামতের গুরুত্বারোপ",
    "দক্ষিণ এশিয়ার ভূ-কূটনীতি ও নিরাপত্তা বিশ্লেষকদের প্রতিক্রিয়া"
  ],
  "keyPointsEn": [
    "ICT Tribunal-2 issues death sentence for 7 senior Hasina-era officials in absentia",
    "Legal analysts examine procedural safeguards and human rights standards",
    "Measures regional stability impact across South Asian diplomatic capitals"
  ],
  "category": "politics",
  "categoryLabelBn": "রাজনীতি ও আন্তর্জাতিক আইন",
  "categoryLabelEn": "Politics & International Law",
  "sentiment": "negative",
  "sentimentReasonBn": "মৃত্যুদণ্ড ও রাজনৈতিক অস্থিরতা নিয়ে ভিডিও ডেসপ্যাচের পর্যালোচনার নেতিবাচক সুর।",
  "sentimentReasonEn": "Focuses on capital punishment, legal scrutiny, and political volatility.",
  "source": {
    "name": "Firstpost (YouTube)",
    "bureau": "Delhi",
    "language": "English",
    "originalUrl": "https://news.google.com/rss/articles/CBMiVkFVX3lxTE5ab2R6bWRnZ1AxUGkyenlXdmphdWNZdWF3S0xuSXU0MC1BbDFpZ29ScjJYR2d1Q1M2OFYxV0V0aVFRMEFVSXJhWFh6ZVVNTjZnbkluSGd3?oc=5",
    "scannedAt": "2026-09-22T14:30:00Z"
  },
  "publishedAt": "2026-09-22T13:30:00Z",
  "readTimeBn": "৪ মিনিট ভিডিও",
  "readTimeEn": "4 min video",
  "imageUrl": "https://i.ytimg.com/vi/a_Yw2qO7_pM/hqdefault.jpg",
  "isLeadStory": false,
  "isTrending": true,
  "isBreaking": false,
  "tags": [
    "Firstpost",
    "YouTube Dispatch",
    "ICT Trials",
    "Awami League",
    "Delhi Bureau"
  ]
},
{
  "id": "news-20260922-093",
  "slug": "sangbad-pratidin-petrapole-benapole-customs-green-channel-perishable-freight",
  "title": "Sangbad Pratidin: 'Petrapole ICP Launches Green-Channel Freight Clearance for Perishable Export Cargo'",
  "englishTitle": "Sangbad Pratidin: 'Petrapole ICP Launches Green-Channel Freight Clearance for Perishable Export Cargo'",
  "banglaTitle": "‘পেট্রাপোল স্থলবন্দরে পচনশীল রপ্তানি পণ্যের জন্য বিশেষ গ্রিন চ্যানেল চালু করেছে বিএসএফ ও কাস্টমস’: সংবাদ প্রতিদিন",
  "summaryBn": "সংবাদ প্রতিদিনের বিশেষ বাণিজ্যিক ডেস্কে জানানো হয়েছে, পেট্রাপোল-বেনাপোল আন্তর্জাতিক সীমান্তে আটকে থাকা পণ্যবাহী ট্রাক দ্রুত পারাপার করতে কোলকাতা কাস্টমস ও বিএসএফ সাউথ বেঙ্গল ফ্রন্টিয়ার যৌথ গ্রিন চ্যানেল ব্যবস্থা কার্যকর করেছে। এতে পোল্ট্রি, সবজি ও মাছের গাড়ি কম সময়ে সীমান্ত পার হতে পারছে।",
  "summaryEn": "Sangbad Pratidin reports from Kolkata that Indian customs and South Bengal Frontier BSF have instituted dedicated green-channel customs clearance corridors at Petrapole Integrated Check Post (ICP) to streamline perishable cargo trucks bound for Benapole.",
  "keyPointsBn": [
    "পেট্রাপোল স্থলবন্দরে পচনশীল পণ্যের ট্রাক জট কমাতে বিশেষ ফাস্ট-ট্র্যাক লেন চালু",
    "কোলকাতা কাস্টমস ও বিএসএফের যৌথ উদ্যোগে বাণিজ্য গতিশীলতা রক্ষা",
    "দুই দেশের ব্যবসায়িক মহলে স্বস্তি ও নিত্যপ্রয়োজনীয় খাদ্য সামগ্রীর সরবরাহ বৃদ্ধি"
  ],
  "keyPointsEn": [
    "Dedicated fast-track green channel established at Petrapole ICP for essential food cargo",
    "Joint initiative by Kolkata Customs and BSF South Bengal Frontier reduces border wait times",
    "Welcomed by cross-border trade associations for stabilizing market supplies in Dhaka"
  ],
  "category": "trade",
  "categoryLabelBn": "সীমান্ত বাণিজ্য ও পরিবহন",
  "categoryLabelEn": "Trade & Logistics",
  "sentiment": "positive",
  "sentimentReasonBn": "সীমান্ত বাণিজ্য সহজীকরণ ও পণ্য খালাসের ইতিবাচক পদক্ষেপ।",
  "sentimentReasonEn": "Positive coverage of cross-border trade facilitation and logistics optimization.",
  "source": {
    "name": "Sangbad Pratidin",
    "bureau": "Kolkata",
    "language": "Bengali",
    "originalUrl": "https://sangbadpratidin.in/bengal/petrapole-benapole-icp-green-channel-freight-clearance-20260922",
    "scannedAt": "2026-09-22T14:30:00Z"
  },
  "publishedAt": "2026-09-22T12:00:00Z",
  "readTimeBn": "৩ মিনিট পাঠ",
  "readTimeEn": "3 min read",
  "imageUrl": "/images/petrapole-benapole-trade-cargo.jpg",
  "isLeadStory": false,
  "isTrending": true,
  "isBreaking": true,
  "tags": [
    "Sangbad Pratidin",
    "Kolkata Bureau",
    "Petrapole ICP",
    "Trade Green Channel",
    "BSF"
  ]
},
{
  "id": "news-20260922-070",
  "slug": "zee-news-india-will-protect-core-interests-bangladesh-reviews-101-accords",
  "title": "Zee News: 'India Will Protect Core Interests' - Delhi Issues Firm Response as Bangladesh Reviews 101 Hasina-Era Accords",
  "englishTitle": "Zee News: 'India Will Protect Core Interests' - Delhi Issues Firm Response as Bangladesh Reviews 101 Hasina-Era Accords",
  "banglaTitle": "‘হাসিনা আমলে স্বাক্ষরিত ১০১টি দ্বিপাক্ষিক চুক্তি পুনর্মূল্যায়ন করছে ঢাকা; জাতীয় স্বার্থ সুরক্ষায় দিল্লির কঠোর বার্তা’: জি নিউজ",
  "summaryBn": "ভারতের শীর্ষস্থানীয় গণমাধ্যম জি নিউজ জানিয়েছে, শেখ হাসিনার ১৫ বছরের শাসনামলে ভারতের সাথে স্বাক্ষরিত ১০১টি দ্বিপাক্ষিক চুক্তি ও সমঝোতা স্মারক পুনর্মূল্যায়ন শুরু করেছে বাংলাদেশের অন্তর্বর্তী সরকার। চুক্তিগুলির মধ্যে চট্টগ্রাম ও মংলা সমুদ্রবন্দর ব্যবহারের সুবিধা এবং উত্তর-পূর্বাঞ্চলীয় রাজ্যগুলোতে ট্রানজিট পরিবহন অন্তর্ভুক্ত। ভারতের পররাষ্ট্র মন্ত্রণালয় (এমইএ) জানিয়েছে, তারা যেকোনো পরিস্থিতিতে নিজেদের কৌশলগত ও বাণিজ্যিক স্বার্থ সুরক্ষায় দৃঢ় পদক্ষেপ গ্রহণ করবে।",
  "summaryEn": "Zee News reports that Bangladesh has initiated a formal re-evaluation of 101 bilateral agreements signed during Sheikh Hasina's 15-year tenure, including transshipment access via Chattogram and Mongla ports. India’s Ministry of External Affairs affirmed New Delhi's commitment to diplomatic engagement while declaring it will resolutely safeguard its national and strategic interests.",
  "keyPointsBn": [
    "হাসিনা আমলে স্বাক্ষরিত ১০১টি দ্বিপাক্ষিক চুক্তি পুঙ্খানুপুঙ্খ পুনর্মূল্যায়নের উদ্যোগ ঢাকার",
    "চট্টগ্রাম ও মংলা বন্দর ট্রানজিট এবং অর্থনৈতিক করিডোর চুক্তি পর্যালোচনার অধীনে",
    "ভারতের পররাষ্ট্র মন্ত্রণালয় জানিয়েছে জাতীয় কৌশলগত ও বাণিজ্যিক স্বার্থ রক্ষায় দিল্লি আপসহীন"
  ],
  "keyPointsEn": [
    "Dhaka initiates structured review of 101 bilateral treaties signed during Sheikh Hasina's tenure",
    "Key transshipment routes to India’s landlocked Northeast states under scrutiny",
    "MEA affirms India will take all necessary measures to protect vital strategic & economic interests"
  ],
  "category": "diplomacy",
  "categoryLabelBn": "কূটনীতি ও চুক্তি",
  "categoryLabelEn": "Diplomacy & Accords",
  "sentiment": "neutral",
  "sentimentReasonBn": "দ্বিপাক্ষিক চুক্তির পর্যালোচনা নিয়ে কূটনৈতিক টানাপোড়েন সৃষ্টি হলেও পারস্পরিক স্বার্থ ও ভারসাম্যপূর্ণ কূটনীতির ইঙ্গিত রয়েছে।",
  "sentimentReasonEn": "Balanced reporting on policy reassessment in Dhaka alongside New Delhi’s firm diplomatic posture.",
  "source": {
    "name": "Zee News World",
    "bureau": "Delhi",
    "language": "English",
    "originalUrl": "https://zeenews.india.com/world/bangladesh-reviews-101-india-deals-chattogram-mongla-ports-mea-response-3072451.html",
    "scannedAt": "2026-09-22T00:30:00Z"
  },
  "publishedAt": "2026-09-22T00:15:00Z",
  "readTimeBn": "৪ মিনিট পাঠ",
  "readTimeEn": "4 min read",
  "imageUrl": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=1200&auto=format&fit=crop&q=80",
  "isLeadStory": true,
  "isTrending": true,
  "isBreaking": true,
  "tags": [
    "Zee News",
    "Diplomacy",
    "101 Agreements",
    "MEA Delhi",
    "Chattogram Port",
    "Sheikh Hasina",
    "Delhi Bureau"
  ]
},
{
  "id": "news-20260922-071",
  "slug": "sangbad-pratidin-india-bangladesh-joint-task-force-bilateral-trade",
  "title": "Sangbad Pratidin: 'India-Bangladesh Joint Task Force Proposed to Expedite Bilateral Trade & Port Transit'",
  "englishTitle": "Sangbad Pratidin: 'India-Bangladesh Joint Task Force Proposed to Expedite Bilateral Trade & Port Transit'",
  "banglaTitle": "‘হাসিনা কাঁটার মধ্যেও দ্বিপাক্ষিক বাণিজ্যে গতি ফেরাতে ভারত-বাংলাদেশ যৌথ টাস্কফোর্স গঠনের উদ্যোগ’: সংবাদ প্রতিদিন",
  "summaryBn": "কলকাতার শীর্ষস্থানীয় বাংলা দৈনিক সংবাদ প্রতিদিনের প্রতিবেদনে বলা হয়েছে, শেখ হাসিনার রাজনৈতিক অবস্থান ঘিরে জটিলতা সত্ত্বেও ভারত ও বাংলাদেশের মধ্যে দ্বিপাক্ষিক সীমান্ত বাণিজ্য সচল রাখতে যৌথ টাস্কফোর্স গঠনের প্রক্রিয়া এগিয়ে চলেছে। বেনাপোল-পেট্রাপোল এবং হিলি সীমান্তে পণ্য পরিবহন দ্রুততর করতে ও ভিসা প্রক্রিয়া সহজীকরণে ব্যবসায়িক সংগঠনগুলোর প্রস্তাব গুরুত্বের সাথে বিবেচনা করছে দুই দেশ।",
  "summaryEn": "Kolkata daily Sangbad Pratidin reports progress towards establishing an India-Bangladesh Joint Task Force to streamline cross-border commercial trade. Despite political friction surrounding Sheikh Hasina's exile, exporters and port authorities are pushing for expedited customs clearance at Petrapole and Hili land ports.",
  "keyPointsBn": [
    "ভারত-বাংলাদেশ দ্বিপাক্ষিক বাণিজ্যে গতি আনতে যৌথ টাস্কফোর্স গঠনের উদ্যোগ",
    "পেট্রাপোল ও হিলি বন্দরে মালবাহী ট্রাক খালাস প্রক্রিয়া দ্রুততর করার তাগিদ",
    "বাণিজ্য সম্পর্ক সচল রাখতে ভারত ও বাংলাদেশের ব্যবসায়ী চেম্বারের ইতিবাচক অবস্থান"
  ],
  "keyPointsEn": [
    "Joint Task Force proposed to eliminate customs bottlenecks in India-Bangladesh trade",
    "Focus on Petrapole-Benapole and Hili land ports for faster freight clearance",
    "Chambers of Commerce in Kolkata and Dhaka press for economic continuity"
  ],
  "category": "trade",
  "categoryLabelBn": "সীমান্ত বাণিজ্য",
  "categoryLabelEn": "Cross-Border Trade",
  "sentiment": "positive",
  "sentimentReasonBn": "দ্বিপাক্ষিক রাজনৈতিক উত্তেজনা সত্ত্বেও বাণিজ্য ও অর্থনৈতিক সহযোগিতা বৃদ্ধি পাওয়ার কারণে খবরটির সুর ইতিবাচক।",
  "sentimentReasonEn": "Focuses on constructive trade solutions and economic pragmatism between Kolkata and Dhaka.",
  "source": {
    "name": "Sangbad Pratidin",
    "bureau": "Kolkata",
    "language": "Bengali",
    "originalUrl": "https://news.google.com/rss/articles/CBMiyAFBVV95cUxOMGprNTl4Qm44NmJpWTdxZm5xX0NFdlg1Z3pCZzUxNHB2TmFSb2pVY2xyYm90Zm15a3V4R05PY2x4VHNkT2NZRDlzOHFiNHJzY2NCazdOYXl5cTkyVkdKNk9aTmt0WmNFckdDMmY3bV84dTRKbV9jYjQ0UVh2NVFOejFkUjlVb19VZlVyLVdQZ3pvVEJUV0JJdzlKUjRQWnVRU1JSTTUyOExFYUhLbjMtdklRM3dRekdENGxCN25xT1luX2N5aXFrX9IB0AFBVV95cUxNZS1CMnJLOVU4UGdpaG4zQ3JRckdTc0pyQnhwanhZclVXUHU4Y0dfcGhyZlVrMUlXcFltd2FBdUZkX1lZbW5UN0ZoQWpSTGlHNXp0MGF3cGkwdjFrX3QtZ0JWWlhvczR0dVRkdFNLLWdKVHVTTDkzM2NSNXhITFdmT09jTm9EZFl2SVFSSF93cG82aFVLc2VtTDBNQ2N3ekN1cWtwRFVYQmZWMV9VWjlUQXFoZ2dWVUEzTjdMbXVoNEZrRUJsZC1lOFE4bkd0cnFY?oc=5",
    "scannedAt": "2026-09-22T00:30:00Z"
  },
  "publishedAt": "2026-09-21T23:45:00Z",
  "readTimeBn": "৩ মিনিট পাঠ",
  "readTimeEn": "3 min read",
  "imageUrl": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&auto=format&fit=crop&q=80",
  "isLeadStory": false,
  "isTrending": true,
  "isBreaking": true,
  "tags": [
    "Sangbad Pratidin",
    "Trade Taskforce",
    "Petrapole",
    "Kolkata Bureau",
    "Bilateral Commerce"
  ]
},
{
  "id": "news-20260922-072",
  "slug": "theprint-video-treating-bangladesh-as-pakistan-mirror-image-undermines-strategic-interests",
  "title": "ThePrint Video Dispatch: 'Treating Bangladesh as Pakistan's Mirror Image Undermines India's Long-Term Strategic Interests'",
  "englishTitle": "ThePrint Video Dispatch: 'Treating Bangladesh as Pakistan's Mirror Image Undermines India's Long-Term Strategic Interests'",
  "banglaTitle": "‘বাংলাদেশকে পাকিস্তানের সমান্তরাল ভাবা ভারতের দীর্ঘমেয়াদী কৌশলগত স্বার্থের জন্য ক্ষতিকর’: দ্যপ্রিন্ট ভিডিও বিশ্লেষণ",
  "summaryBn": "ভারতের প্রভাবশালী স্বাধীন সংবাদ মাধ্যম দ্যপ্রিন্ট-এর সিনিয়র সম্পাদকীয় ভিডিও বিশ্লেষণে বলা হয়েছে, বাংলাদেশে রাজনৈতিক পরিবর্তন সত্ত্বেও দেশটিকে পাকিস্তানের ফ্রেমে বিচার করা দিল্লির কৌশলগত বড় ভুল হবে। ভৌগোলিক সান্নিধ্য, উত্তর-পূর্ব ভারতের নিরাপত্তা এবং অর্থনৈতিক সংযোগ রক্ষায় ঢাকার সাথে নতুন নেতৃত্বের সাথে সম্পর্ক পুনর্নির্মাণই দিল্লির জন্য ফলপ্রসূ হবে।",
  "summaryEn": "In a video analysis by ThePrint, defense and strategic experts argue that equating contemporary Bangladesh with Pakistan misreads regional geopolitics. The dispatch emphasizes that New Delhi must pragmatically engage Bangladesh's new political architecture to safeguard India's North-Eastern connectivity and counter-terrorism posture.",
  "keyPointsBn": [
    "বাংলাদেশকে পাকিস্তানের চোখে দেখা দিল্লির কৌশলগত ভূরাজনীতিতে ভুল বার্তা দেবে",
    "উত্তর-পূর্ব ভারতের ভৌগোলিক সংযোগ ও নিরাপত্তার স্বার্থে ঢাকার সাথে ইতিবাচক সম্পর্কের গুরুত্ব",
    "কূটনৈতিক বাস্তববাদের মাধ্যমে প্রতিবেশী দুই দেশের মধ্যকার ভবিষ্যৎ সমীকরণ তৈরির তাগিদ"
  ],
  "keyPointsEn": [
    "Equating Bangladesh with Pakistan misjudges South Asian security dynamics",
    "India's Northeast security and transshipment require sustained engagement with Dhaka",
    "Call for diplomatic pragmatism and multi-party outreach from New Delhi"
  ],
  "category": "diplomacy",
  "categoryLabelBn": "কূটনীতি ও ভূরাজনীতি",
  "categoryLabelEn": "Diplomacy & Geopolitics",
  "sentiment": "positive",
  "sentimentReasonBn": "প্রতিবেশী নীতিতে বৈরিতা এড়িয়ে গঠনমূলক সম্পর্ক গড়ে তোলার বস্তুনিষ্ঠ কৌশলগত পরামর্শ দেওয়ায় সংবাদের সুর ইতিবাচক।",
  "sentimentReasonEn": "Strategic analysis advising against knee-jerk hostility in favor of long-term diplomatic stability.",
  "source": {
    "name": "ThePrint (YouTube)",
    "bureau": "Delhi",
    "language": "English",
    "originalUrl": "https://news.google.com/rss/articles/CBMiVkFVX3lxTE1BX3FHWFVDMS1mRldYelVRY0FtZkpWaUllZ0ptQ0QwbzItQUFQellZZHl6ak9mQmhyeWpPcXhFX1c1T3I4UjN5andGQTZZZ1cxMmdMVU1n?oc=5",
    "scannedAt": "2026-09-22T00:30:00Z"
  },
  "publishedAt": "2026-09-21T22:30:00Z",
  "readTimeBn": "৫ মিনিট ভিডিও",
  "readTimeEn": "5 min video",
  "imageUrl": "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1200&auto=format&fit=crop&q=80",
  "isLeadStory": false,
  "isTrending": true,
  "isBreaking": false,
  "tags": [
    "ThePrint",
    "YouTube Dispatch",
    "Foreign Policy",
    "Geopolitics",
    "Delhi Bureau",
    "Strategic Analysis"
  ]
},
{
  "id": "news-20260922-073",
  "slug": "tv9-bangla-ai-thermal-scanners-deployed-petrapole-gede-border",
  "title": "TV9 Bangla: 'AI Motion Scanners & Thermal Cameras Deployed at Petrapole & Gede Border Checkpoints'",
  "englishTitle": "TV9 Bangla: 'AI Motion Scanners & Thermal Cameras Deployed at Petrapole & Gede Border Checkpoints'",
  "banglaTitle": "‘গেদে ও পেট্রাপোল সীমান্তে অবৈধ অনুপ্রবেশ রুখতে কৃত্রিম বুদ্ধিমত্তা ও থার্মাল ক্যামেরা মোতায়েন’: টিভি৯ বাংলা",
  "summaryBn": "টিভি৯ বাংলার প্রতিবেদনে জানানো হয়েছে, পশ্চিমবঙ্গ ও বাংলাদেশ সীমান্তে নিরাপত্তা নিশ্চিত করতে বিএসএফ পেট্রাপোল ও গেদে আন্তর্জাতিক সীমান্ত চেকপোস্টে কৃত্রিম বুদ্ধিমত্তা চালিত থার্মাল ক্যামেরা মোতায়েন করেছে। বিশেষ করে মালবাহী ট্রেনের নিচে বা কন্টেইনারে লুকিয়ে সীমান্ত পারাপারের চেষ্টা সম্পূর্ণ প্রতিরোধে এই আধুনিক নজরদারি ব্যবস্থা কাজ করছে।",
  "summaryEn": "TV9 Bangla reports that the Border Security Force (BSF) has deployed AI-driven motion scanners and high-precision thermal cameras along Petrapole and Gede border points in West Bengal. The advanced surveillance technology aims to prevent illegal infiltration via freight trains and commercial cargo.",
  "keyPointsBn": [
    "পেট্রাপোল ও গেদে সীমান্তে কৃত্রিম বুদ্ধিমত্তা চালিত নাইট-ভিশন থার্মাল ক্যামেরা স্থাপন",
    "মালবাহী ট্রেন ও পণ্যবাহী কন্টেইনারে অবৈধ অনুপ্রবেশ পুরোপুরি বন্ধে কঠোর ব্যবস্থা",
    "বিএসএফ সাউথ বেঙ্গল ফ্রন্টিয়ারের পক্ষ থেকে সীমান্ত নিরাপত্তা জোরদার করার ঘোষণা"
  ],
  "keyPointsEn": [
    "BSF deploys AI-powered thermal sensors along Petrapole and Gede rail check posts",
    "Technology targets illegal transit concealed inside international cargo trains",
    "South Bengal Frontier heightens 24/7 surveillance along South-West border sectors"
  ],
  "category": "border",
  "categoryLabelBn": "সীমান্ত নিরাপত্তা",
  "categoryLabelEn": "Border & Security",
  "sentiment": "neutral",
  "sentimentReasonBn": "সীমান্ত নিরাপত্তার আধুনিকীকরণ ও অনুপ্রবেশ প্রতিরোধী প্রযুক্তি ব্যবহারের বস্তুনিষ্ঠ বিবরণ সংবাদের মূল বিষয়।",
  "sentimentReasonEn": "Factual reporting on technological upgrades for border management and national security.",
  "source": {
    "name": "TV9 Bangla",
    "bureau": "Kolkata",
    "language": "Bengali",
    "originalUrl": "https://tv9bangla.com/west-bengal/gede-petrapole-ai-thermal-camera-scanner-deployment-border-security-1102948.html",
    "scannedAt": "2026-09-22T00:30:00Z"
  },
  "publishedAt": "2026-09-21T21:15:00Z",
  "readTimeBn": "৩ মিনিট পাঠ",
  "readTimeEn": "3 min read",
  "imageUrl": "/images/border-checkpost-petrapole-gede.jpg",
  "isLeadStory": false,
  "isTrending": false,
  "isBreaking": false,
  "tags": [
    "TV9 Bangla",
    "Border Security",
    "BSF",
    "Petrapole",
    "AI Surveillance",
    "Kolkata Bureau"
  ]
},
{
  "id": "news-20260922-074",
  "slug": "syandan-patrika-bsf-intensifies-border-vigilance-tripura-comilla-sector",
  "title": "Syandan Patrika: 'BSF Intensifies Border Surveillance & Inspection along Tripura-Comilla Sector'",
  "englishTitle": "Syandan Patrika: 'BSF Intensifies Border Surveillance & Inspection along Tripura-Comilla Sector'",
  "banglaTitle": "‘ত্রিপুরা-কুমিল্লা সীমান্তে বিএসএফের নজরদারি জোরদার ও আখাউড়া চেকপোস্টে বিশেষ তল্লাশি’: স্যন্দন পত্রিকা",
  "summaryBn": "ত্রিপুরার জনপ্রিয় বাংলা দৈনিক স্যন্দন পত্রিকার খবরে জানানো হয়েছে, আগরতলা-আখাউড়া সমন্বিত চেকপোস্ট এবং সোনামুড়া সীমান্ত অঞ্চলে সীমান্ত রক্ষী বাহিনী (বিএসএফ) বিশেষ টহল ও কঠোর নিরাপত্তা প্রহরা শুরু করেছে। অবৈধ চলাচল রুখতে কাঁটাতারের বেড়ার সংবেদনশীল পয়েন্টগুলোতে অতিরিক্ত জোয়ান মোতায়েন করা হয়েছে।",
  "summaryEn": "Agartala-based daily Syandan Patrika reports that BSF units have intensified border patrols and zero-line inspections along the Tripura-Comilla and Sonamura sectors. Security forces are conducting round-the-clock checks at the Agartala-Akhaura Integrated Check Post to deter illegal crossing.",
  "keyPointsBn": [
    "আগরতলা-আখাউড়া চেকপোস্টে বিএসএফের বিশেষ তল্লাশি অভিযান ও নজরদারি বৃদ্ধি",
    "সোনামুড়া ও সিপাহীজলা সীমান্তে কাঁটাতারের জিরো লাইনে অতিরিক্ত টহল",
    "সীমান্তবর্তী এলাকার বাসিন্দাদের পরিচয়পত্র সঙ্গে রাখার নির্দেশনা জারি"
  ],
  "keyPointsEn": [
    "BSF steps up zero-line patrols along Tripura-Comilla border zones",
    "Strict identity verification enforced at Agartala-Akhaura Integrated Check Post",
    "Additional forces deployed across sensitive unfenced stretches in Sepahijala"
  ],
  "category": "border",
  "categoryLabelBn": "সীমান্ত নিরাপত্তা",
  "categoryLabelEn": "Border & Security",
  "sentiment": "neutral",
  "sentimentReasonBn": "উত্তর-পূর্ব ভারতের সীমান্ত নিরাপত্তা ব্যবস্থার নিয়মিত হালনাগাদ ও বিএসএফের সতর্কতার নিউট্রাল রিপোর্ট।",
  "sentimentReasonEn": "Factual reporting on North-East frontier security measures and border control.",
  "source": {
    "name": "Syandan Patrika",
    "bureau": "Tripura",
    "language": "Bengali",
    "originalUrl": "https://syandanpatrika.com/news/tripura-border-vigilance-bsf-akhura-checkpost-security-20260921.html",
    "scannedAt": "2026-09-22T00:30:00Z"
  },
  "publishedAt": "2026-09-21T20:00:00Z",
  "readTimeBn": "৩ মিনিট পাঠ",
  "readTimeEn": "3 min read",
  "imageUrl": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1200&auto=format&fit=crop&q=80",
  "isLeadStory": false,
  "isTrending": false,
  "isBreaking": false,
  "tags": [
    "Syandan Patrika",
    "Tripura Bureau",
    "Agartala",
    "BSF Patrol",
    "Border Security"
  ]
},
{
  "id": "news-20260922-075",
  "slug": "firstpost-saima-wazed-cites-political-pressure-who-exit",
  "title": "Firstpost: 'Saima Wazed Cites Political Pressure and Process Deficits Behind WHO Regional Directorship Exit'",
  "englishTitle": "Firstpost: 'Saima Wazed Cites Political Pressure and Process Deficits Behind WHO Regional Directorship Exit'",
  "banglaTitle": "‘ডব্লিউএইচও-এর আঞ্চলিক পরিচালকের পদ থেকে পদত্যাগের নেপথ্যে রাজনৈতিক চাপ ও প্রক্রিয়াগত ঘাটতি ছিল’: ইনস্টাগ্রাম পোস্টে সায়মা ওয়াজেদ",
  "summaryBn": "ফার্স্টপোস্ট-এর প্রতিবেদন অনুযায়ী, শেখ হাসিনার কন্যা সায়মা ওয়াজেদ বিশ্ব স্বাস্থ্য সংস্থার (WHO) দক্ষিণ-পূর্ব এশিয়া অঞ্চলের পরিচালক পদ থেকে তাঁর পদত্যাগের কারণ হিসেবে রাজনৈতিক চাপ ও যথাযথ নিয়ম না মানার কথা উল্লেখ করেছেন। সোশ্যাল মিডিয়ার পোস্টে তিনি দাবি করেন যে তাঁর বিরুদ্ধে রাজনৈতিক প্রতিশোধ্যমূলক পরিস্থিতি তৈরি করা হয়েছিল।",
  "summaryEn": "Firstpost reports that Saima Wazed, daughter of ousted Prime Minister Sheikh Hasina, issued a public statement clarifying the circumstances surrounding her resignation as WHO Regional Director for South-East Asia. She attributed her departure to external political pressure and procedural irregularities within the international health body.",
  "keyPointsBn": [
    "সায়মা ওয়াজেদের পদত্যাগের নেপথ্যে বিশ্ব স্বাস্থ্য সংস্থায় অনাকাঙ্ক্ষিত রাজনৈতিক চাপের অভিযোগ",
    "ইনস্টাগ্রাম পোস্টে আন্তর্জাতিক প্রটোকল ও যথাযথ আইনি প্রক্রিয়া লঙ্ঘনের দাবি",
    "নয়াদিল্লি ও জেনেভায় বিশ্ব স্বাস্থ্য সংস্থার সদর দপ্তরের প্রতিক্রিয়া নিবিড় পর্যবেক্ষণ"
  ],
  "keyPointsEn": [
    "Saima Wazed alleges intense political pressure led to her WHO Regional Director resignation",
    "Claims due process and procedural standards were compromised amid political shift",
    "Global diplomatic observers track WHO regional leadership developments"
  ],
  "category": "diplomacy",
  "categoryLabelBn": "কূটনীতি ও আন্তর্জাতিক",
  "categoryLabelEn": "Diplomacy & International",
  "sentiment": "negative",
  "sentimentReasonBn": "আন্তর্জাতিক স্বাস্থ্য সংস্থায় পদত্যাগ ও রাজনৈতিক হস্তক্ষেপের অভিযোগ সংবাদের মূল বিষয় হওয়ায় সুরটি নেতিবাচক।",
  "sentimentReasonEn": "Focuses on contentious allegations of political interference and resignation from an international agency.",
  "source": {
    "name": "Firstpost (Instagram)",
    "bureau": "Delhi",
    "language": "English",
    "originalUrl": "https://news.google.com/rss/articles/CBMiUkFVX3lxTE93Qk1Bd1RRTDhmWVZibU1XaDgtU0JyZEdSYTJaeWFvTDhRMDZUdDZ5cHJfa1p0azVmdlVvNXc0amdGNkFyUWtlLWNTMXNCTkZMSFE?oc=5",
    "scannedAt": "2026-09-22T00:30:00Z"
  },
  "publishedAt": "2026-09-21T19:30:00Z",
  "readTimeBn": "৪ মিনিট পাঠ",
  "readTimeEn": "4 min read",
  "imageUrl": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&auto=format&fit=crop&q=80",
  "isLeadStory": false,
  "isTrending": true,
  "isBreaking": false,
  "tags": [
    "Firstpost",
    "Saima Wazed",
    "WHO Resignation",
    "Diplomacy",
    "Delhi Bureau"
  ]
},
{
  "id": "news-20260922-076",
  "slug": "assam-tribune-assam-power-grid-reviews-power-export-to-bangladesh",
  "title": "Assam Tribune: 'Assam Power Grid Maintained Power Transmission to Bangladesh Amid Regional Stability Talks'",
  "englishTitle": "Assam Tribune: 'Assam Power Grid Maintained Power Transmission to Bangladesh Amid Regional Stability Talks'",
  "banglaTitle": "‘আসাম বিদ্যুৎ গ্রিড থেকে বাংলাদেশে বিদ্যুৎ রপ্তানি সচল রাখা ও দ্বিপাক্ষিক বিদ্যুৎ সমীকরণ পর্যবেক্ষণ’: আসাম ট্রিব্রিউন",
  "summaryBn": "গুয়াহাটি ভিত্তিক শীর্ষ সংবাদপত্র আসাম ট্রিব্রিউনের প্রতিবেদনে জানানো হয়েছে, আসাম ও মেঘালয় সীমান্ত দিয়ে বাংলাদেশে বিদ্যুৎ সঞ্চালন ব্যবস্থা সুচারুভাবে চালু রয়েছে। জ্বালানি মন্ত্রণালয়ের শীর্ষ কর্তারা নিশ্চিত করেছেন যে, চুক্তিগত বাধ্যবাধকতা মেনে প্রতিদিন বিদ্যুৎ সরবরাহ বজায় রাখা হচ্ছে।",
  "summaryEn": "The Assam Tribune reports that cross-border electricity transmission lines connecting Assam and Meghalaya grids to Bangladesh are operating without disruption. Power sector officials in Guwahati confirmed contractual energy exports remain steady despite diplomatic re-alignments.",
  "keyPointsBn": [
    "আসামের সীমান্ত গ্রিড থেকে বাংলাদেশে বিদ্যুৎ সঞ্চালন পরিস্থিতি সম্পূর্ণ স্বাভাবিক",
    "আন্তঃসীমান্ত বিদ্যুৎ গ্রিডে প্রযুক্তিগত বা বাণিজ্যিক কোনো বিঘ্ন ঘটেনি",
    "জ্বালানি খাতে উত্তর-পূর্ব ভারতের সাথে যৌথ কাঠামোর স্থায়িত্ব বজায় রাখার গুরুত্ব"
  ],
  "keyPointsEn": [
    "Cross-border grid transmission from Assam to Bangladesh operates uninterrupted",
    "Energy sector authorities report zero technical or contractual disruptions",
    "Sub-regional power sharing remains a crucial anchor of bilateral stability"
  ],
  "category": "economy",
  "categoryLabelBn": "অর্থনীতি ও বিদ্যুৎ",
  "categoryLabelEn": "Economy & Energy",
  "sentiment": "positive",
  "sentimentReasonBn": "দ্বিপাক্ষিক শক্তি ও পরিকাঠামো খাতে নিরবচ্ছিন্ন সহযোগিতার সুসংবাদ বহন করায় প্রতিবেদনটির সুর ইতিবাচক।",
  "sentimentReasonEn": "Positive reporting highlighting uninterrupted energy infrastructure collaboration.",
  "source": {
    "name": "Assam Tribune",
    "bureau": "Assam",
    "language": "English",
    "originalUrl": "https://news.google.com/rss/articles/CBMiUkFVX3lxTE1Yc2QydThyZkg3clhNN3ZGZFFlb2l2TmpYbHoxTldGNDFDOXNBa211WWktZGxKNTBNRk9OTHQyS3FuU0l0WUd5bEc2bTAtN3Z4QWc?oc=5",
    "scannedAt": "2026-09-22T00:30:00Z"
  },
  "publishedAt": "2026-09-21T18:45:00Z",
  "readTimeBn": "৩ মিনিট পাঠ",
  "readTimeEn": "3 min read",
  "imageUrl": "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&auto=format&fit=crop&q=80",
  "isLeadStory": false,
  "isTrending": false,
  "isBreaking": false,
  "tags": [
    "Assam Tribune",
    "Assam Bureau",
    "Energy Export",
    "Power Grid",
    "Guwahati"
  ]
},
{
  "id": "news-20260922-077",
  "slug": "uttarbanga-sambad-phulbari-land-port-resumes-truck-cargo-operations",
  "title": "Uttarbanga Sambad: 'Phulbari-Banglabandha Land Port Operations Running 6 Days a Week with Full Clearance'",
  "englishTitle": "Uttarbanga Sambad: 'Phulbari-Banglabandha Land Port Operations Running 6 Days a Week with Full Clearance'",
  "banglaTitle": "‘ফুলবাড়ী-বাংলাবান্ধা স্থলবন্দরে ভারত-বাংলাদেশ সপ্তাহে ৬ দিন পণ্যবাহী ট্রাক চলাচল সচল’: উত্তরবঙ্গ সংবাদ",
  "summaryBn": "শিলিগুড়ি থেকে প্রকাশিত উত্তরবঙ্গ সংবাদের খবরে বলা হয়েছে, ফুলবাড়ী-বাংলাবান্ধা স্থলবন্দর দিয়ে পাথর, শাকসবজি ও শিল্প কাঁচামালবাহী ট্রাক চলাচল প্রতিদিন বাড়ছে। স্থানীয় কাস্টমস ও বিএসএফ কর্তারা জানিয়েছেন, বাণিজ্য সচল রাখতে সপ্তাহের ৬ দিন সীমান্ত বাণিজ্য কার্যক্রম চালু রাখা হয়েছে।",
  "summaryEn": "Uttarbanga Sambad reports that freight operations at the Phulbari-Banglabandha land port near Siliguri are running smoothly six days a week. Custom authorities report healthy trade volume in stone aggregates, fresh produce, and industrial raw materials.",
  "keyPointsBn": [
    "ফুলবাড়ী-বাংলাবান্ধা স্থলবন্দরে সপ্তাহে ৬ দিন পূর্ণাঙ্গ কাস্টমস ও কার্গো সুবিধা চালু",
    "পাথর, খাদ্যদ্রব্য ও শিল্প পণ্যের ট্রানজিট পরিবহনে গতি সচল",
    "উত্তরবঙ্গের ব্যবসায়ী সমিতিগুলোর পক্ষ থেকে বাণিজ্য সুবিধা বাড়ানোর দাবি"
  ],
  "keyPointsEn": [
    "Phulbari land port operates 6 days a week with full customs clearance",
    "High volume recorded in stone aggregates, agricultural commodities, and raw materials",
    "Siliguri trade associations push for enhanced border warehousing facilities"
  ],
  "category": "trade",
  "categoryLabelBn": "সীমান্ত বাণিজ্য",
  "categoryLabelEn": "Cross-Border Trade",
  "sentiment": "positive",
  "sentimentReasonBn": "উত্তরবঙ্গের স্থলবন্দরে পণ্য পরিবহন স্বাভাবিক থাকা এবং বাণিজ্যে ইতিবাচক প্রবৃদ্ধির খবর।",
  "sentimentReasonEn": "Positive update on cross-border logistics and trade growth at North Bengal border.",
  "source": {
    "name": "Uttarbanga Sambad",
    "bureau": "Siliguri",
    "language": "Bengali",
    "originalUrl": "https://news.google.com/rss/articles/CBMiUkFVX3lxTE1Yc2QydThyZkg3clhNN3ZGZFFlb2l2TmpYbHoxTldGNDFDOXNBa211WWktZGxKNTBNRk9OTHQyS3FuU0l0WUd5bEc2bTAtN3Z4QWc?oc=5",
    "scannedAt": "2026-09-22T00:30:00Z"
  },
  "publishedAt": "2026-09-21T17:30:00Z",
  "readTimeBn": "৩ মিনিট পাঠ",
  "readTimeEn": "3 min read",
  "imageUrl": "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1200&auto=format&fit=crop&q=80",
  "isLeadStory": false,
  "isTrending": false,
  "isBreaking": false,
  "tags": [
    "Uttarbanga Sambad",
    "Siliguri Bureau",
    "Phulbari Port",
    "Border Trade",
    "North Bengal"
  ]
},
{
  "id": "news-20260922-078",
  "slug": "telegraph-india-shafali-verma-maiden-t20i-ton-asian-games-semi-final",
  "title": "Telegraph India: 'Shafali Verma's Blistering Ton Powers India Past Bangladesh into Asian Games Gold Medal Match'",
  "englishTitle": "Telegraph India: 'Shafali Verma's Blistering Ton Powers India Past Bangladesh into Asian Games Gold Medal Match'",
  "banglaTitle": "‘এশিয়ান গেমসে শেফালি বর্মার আন্তর্জাতিক টি-টোয়েন্টির প্রথম শতরান, বাংলাদেশকে ১১৪ রানে হারিয়ে ফাইনালে ভারত’: দ্য টেলিগ্রাফ",
  "summaryBn": "দ্য টেলিগ্রাফের ক্রীড়া পাতায় প্রকাশিত খবরে বলা হয়েছে, এশিয়ান গেমসের সেমিফাইনালে ভারতীয় নারী ক্রিকেট দল বাংলাদেশকে ১১৪ রানে পরাজিত করে গোল্ড মেডেল ম্যাচে উঠেছে। শেফালি বর্মার দুর্দান্ত ১০৮ রানের উপর ভর করে ভারত ১৯৬ রান সংগ্রহ করে এবং বাংলাদেশি ব্যাটারদের ৮২ রানে গুটিয়ে দেয়।",
  "summaryEn": "Telegraph India highlights a commanding victory by the Indian Women's Cricket team in the Asian Games semi-final, defeating Bangladesh by 114 runs. Shafali Verma's Maiden T20I century (108) guided India to 196, before Indian bowlers folded Bangladesh for 82.",
  "keyPointsBn": [
    "এশিয়ান গেমসে শেফালি বর্মার অনবদ্য টি-টোয়েন্টি সেঞ্চুরি (১০৮ রান)",
    "১৯৭ রানের লক্ষ্য তাড়া করতে গিয়ে মাত্র ৮২ রানে অলআউট বাংলাদেশ",
    "এশিয়ান গেমস ফাইনালে শ্রীলঙ্কার মুখোমুখি হবে ভারতীয় দল"
  ],
  "keyPointsEn": [
    "Shafali Verma scripts historic maiden T20I ton in Asian Games semi-final",
    "Bangladesh women dismissed for 82 chasing target of 197",
    "India advance to gold medal match against Sri Lanka"
  ],
  "category": "sports",
  "categoryLabelBn": "ক্রীড়া ও এশিয়ান গেমস",
  "categoryLabelEn": "Sports & Asian Games",
  "sentiment": "positive",
  "sentimentReasonBn": "ভারতীয় ক্রীড়াবিদদের ঐতিহাসিক জয় ও পারফরম্যান্সের প্রশংসামূলক সংবাদ।",
  "sentimentReasonEn": "Celebratory sports reporting on landmark victory and Asian Games final qualification.",
  "source": {
    "name": "Telegraph India",
    "bureau": "Mumbai",
    "language": "English",
    "originalUrl": "https://news.google.com/rss/articles/CBMiVkFVX3lxTE5ITE1WYmYteUxrUVJKQWc1cDdQYjBIakphUDE0eVlkSUxDWDRsY1Z3bUVTczcxclBQcWxsQlNVMnBrWTdmeTNjUzk3MFdFeXVFUWJXQlZB?oc=5",
    "scannedAt": "2026-09-22T00:30:00Z"
  },
  "publishedAt": "2026-09-21T16:15:00Z",
  "readTimeBn": "৩ মিনিট পাঠ",
  "readTimeEn": "3 min read",
  "imageUrl": "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=1200&auto=format&fit=crop&q=80",
  "isLeadStory": false,
  "isTrending": true,
  "isBreaking": false,
  "tags": [
    "Telegraph India",
    "Asian Games",
    "Shafali Verma",
    "Cricket",
    "Mumbai Bureau"
  ]
},
{
  "id": "news-20260922-079",
  "slug": "aaj-tak-video-dhaka-protests-security-clampdown-awami-league-rallies",
  "title": "Aaj Tak Video Dispatch: 'Dhaka Rallies & Security Clampdown as Awami League Supporter Demonstrations Reported'",
  "englishTitle": "Aaj Tak Video Dispatch: 'Dhaka Rallies & Security Clampdown as Awami League Supporter Demonstrations Reported'",
  "banglaTitle": "‘ঢাকায় আওয়ামী লীগের মিছিল ও পুলিশের নিরাপত্তা চাদর নিয়ে ভারতীয় মিডিয়ায় ভিডিও রিপোর্ট’: আজ তক ভিডিও",
  "summaryBn": "আজ তক চ্যানেল প্রকাশিত ভিডিও রিপোর্টে দেখানো হয়েছে, ঢাকায় রাজপথে নিরাপত্তা রক্ষীদের উচ্চ সতর্ক অবস্থান ও বিক্ষোভ দমনে কঠোর পদক্ষেপ গ্রহণ করা হয়েছে। প্রতিবেদনে শেখ হাসিনার রাজনৈতিক বিবৃতি ও তার প্রতিক্রিয়া হিসেবে বাংলাদেশ পুলিশ ও সেনাবাহিনী কর্তৃক প্রধান সড়কগুলোতে তল্লাশিচৌকি বসানোর দৃশ্য অন্তর্ভুক্ত।",
  "summaryEn": "An Aaj Tak video dispatch details tightened security measures across major arteries in Dhaka following rally calls by Awami League supporters. Indian media coverage captures security deployments and military checkpoints set up to prevent unrest in key administrative zones.",
  "keyPointsBn": [
    "ঢাকায় প্রধান সড়কগুলোতে পুলিশ ও সেনাবাহিনী কর্তৃক উচ্চ মাত্রার বিশেষ নিরাপত্তা বেষ্টনী",
    "শেখ হাসিনার বক্তব্য ঘিরে রাজধানীতে মিছিলের চেষ্টা ও ব্যাপক গ্রেপ্তারের ভিডিও কভারেজ",
    "নয়াদিল্লি রাজনৈতিক বিশ্লেষকদের দৃষ্টিতে ঢাকার বর্তমান প্রশাসনিক পরিস্থিতির নিবিড় মূল্যায়ন"
  ],
  "keyPointsEn": [
    "Video coverage highlights security checkpoints across Dhaka's key thoroughfares",
    "Footage tracks law enforcement response to Awami League activist demonstrations",
    "Indian media analysis weighs law-and-order stability in the interim capital"
  ],
  "category": "politics",
  "categoryLabelBn": "রাজনীতি ও সিকিউরিটি",
  "categoryLabelEn": "Politics & Security",
  "sentiment": "negative",
  "sentimentReasonBn": "প্রতিবাদ, আইনশৃঙ্খলা পরিস্থিতি ও গ্রেপ্তার ঘিরে বিশৃঙ্খলা তুলে ধরায় সংবাদের নেতিবাচক সুর।",
  "sentimentReasonEn": "Focuses on security clampdown, political friction, and street unrest in Dhaka.",
  "source": {
    "name": "Aaj Tak (YouTube)",
    "bureau": "Delhi",
    "language": "Hindi",
    "originalUrl": "https://news.google.com/rss/articles/CBMiVkFVX3lxTE9LZ0prZjU2OWRCT1BjS3NwVUE4cU5fUFNDdXBTMGx1bTFxTkxwNS1kU0xpbExsci1sMER0a1hLR2hjZkc4UWJwSEdvTmNadVExOHZsNzR3?oc=5",
    "scannedAt": "2026-09-22T00:30:00Z"
  },
  "publishedAt": "2026-09-21T15:00:00Z",
  "readTimeBn": "৪ মিনিট ভিডিও",
  "readTimeEn": "4 min video",
  "imageUrl": "/images/dhaka-national-parliament-symbolic.jpg",
  "isLeadStory": false,
  "isTrending": false,
  "isBreaking": false,
  "tags": [
    "Aaj Tak",
    "YouTube Dispatch",
    "Dhaka Protests",
    "Awami League",
    "Delhi Bureau"
  ]
},
{
  "id": "news-20260922-080",
  "slug": "anandabazar-patrika-kolkata-book-fair-invites-bangladeshi-authors",
  "title": "Anandabazar Patrika: 'Kolkata Book Fair Committee Invites Bangladeshi Authors & Publishers for Cultural Pavilion'",
  "englishTitle": "Anandabazar Patrika: 'Kolkata Book Fair Committee Invites Bangladeshi Authors & Publishers for Cultural Pavilion'",
  "banglaTitle": "‘আন্তর্জাতিক কলকাতা বইমেলায় বাংলাদেশী লেখক ও প্রকাশকদের অংশগ্রহণে যৌথ সাহিত্যিক উদ্যোগ’: আনন্দবাজার পত্রিকা",
  "summaryBn": "আনন্দবাজার পত্রিকার সংস্কৃতি পাতায় প্রকাশিত প্রতিবেদনে বলা হয়েছে, আন্তর্জাতিক কলকাতা বইমেলা কমিটি আসন্ন মেলায় বাংলাদেশের বইমেলা প্যাভিলিয়ন ও সাহিত্যিকদের আমন্ত্রণ অব্যাহত রাখার কথা জানিয়েছে। দুই বাংলা ভাষার সাহিত্যিক আদান-প্রদান ও সাংস্কৃতিক বন্ধন সুদৃঢ় রাখার পক্ষে মত দিয়েছেন আয়োজকরা।",
  "summaryEn": "Anandabazar Patrika reports that the International Kolkata Book Fair Organising Committee has reiterated its invitation to Bangladeshi publishers and literary figures. Organisers emphasized that cross-border Bengali literary heritage and cultural exchange transcend political fluctuations.",
  "keyPointsBn": [
    "আন্তর্জাতিক কলকাতা বইমেলায় বাংলা সাহিত্যিকদের যৌথ প্যাভিলিয়ন সচল রাখার উদ্যোগ",
    "দুই বাংলার লেখক, কবি ও প্রকাশকদের মধ্যে সাহিত্যিক সম্পর্ক অটুট রাখার আহ্বান",
    "সংস্কৃতি ভিত্তিক কূটনৈতিক বন্ধন সুদৃঢ় করার বিষয়ে কলকাতার সাহিত্যিকদের ইতিবাচক অবস্থান"
  ],
  "keyPointsEn": [
    "Kolkata Book Fair Committee confirms invitation to Bangladeshi authors and publishers",
    "Organisers stress enduring shared Bengali literary legacy across borders",
    "Literary community in Kolkata supports uninterrupted cultural dialogue"
  ],
  "category": "culture",
  "categoryLabelBn": "সংস্কৃতি ও সাহিত্য",
  "categoryLabelEn": "Culture & Literature",
  "sentiment": "positive",
  "sentimentReasonBn": "দুই বাংলার যৌথ সাহিত্যিক ঐতিহ্য ও সাংস্কৃতিক বিনিময়ের সুসংবাদ বহন করায় খবরের সুর ইতিবাচক।",
  "sentimentReasonEn": "Positive culture story promoting literary harmony and shared heritage across Bengal borders.",
  "source": {
    "name": "Anandabazar Patrika",
    "bureau": "Kolkata",
    "language": "Bengali",
    "originalUrl": "https://news.google.com/rss/articles/CBMiUkFVX3lxTE1Yc2QydThyZkg3clhNN3ZGZFFlb2l2TmpYbHoxTldGNDFDOXNBa211WWktZGxKNTBNRk9OTHQyS3FuU0l0WUd5bEc2bTAtN3Z4QWc?oc=5",
    "scannedAt": "2026-09-22T00:30:00Z"
  },
  "publishedAt": "2026-09-21T14:00:00Z",
  "readTimeBn": "৩ মিনিট পাঠ",
  "readTimeEn": "3 min read",
  "imageUrl": "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=1200&auto=format&fit=crop&q=80",
  "isLeadStory": false,
  "isTrending": false,
  "isBreaking": false,
  "tags": [
    "Anandabazar Patrika",
    "Kolkata Bureau",
    "Kolkata Book Fair",
    "Culture",
    "Bengali Literature"
  ]
},
{
  "id": "news-20260922-081",
  "slug": "hindu-tamil-ict-sentences-7-hasina-allies-death-regional-analysis",
  "title": "ஹேக் ஹசீனா கட்சியின் 7 தலைவர்களுக்கு மரண தண்டனை விதிப்பு - Hindu Tamil Thisai",
  "englishTitle": "Hindu Tamil Thisai: 'Dhaka ICT Sentences 7 Senior Hasina Allies to Death in July Uprising Verdict'",
  "banglaTitle": "‘হাসিনা ঘনিষ্ঠ ৭ যুবলীগ ও আওয়ামী লীগ নেতাকে মৃত্যুদণ্ড আন্তর্জাতিক অপরাধ ট্রাইব্যুনালের’: হিন্দু তামিল দিশাই",
  "summaryBn": "তামিল ভাষার প্রধান সংবাদপত্র ‘হিন্দু তামিল দিশাই’-এর আন্তর্জাতিক প্রতিবেদনে জানানো হয়েছে, ২০২৪ সালের জুলাই অভ্যুত্থানে সহিংসতার অভিযোগে শেখ হাসিনার সরকারের ৭ জ্যেষ্ঠ নেতাকে মৃত্যুদণ্ড দিয়েছে ঢাকার আন্তর্জাতিক অপরাধ ট্রাইব্যুনাল। চেন্নাইয়ের ভূ-রাজনৈতিক বিশ্লেষকরা উল্লেখ করেছেন, অন্তর্বর্তীকালীন সরকারের এই পদক্ষেপ ভারত-বাংলাদেশ সম্পর্কের নতুন সমীকরণ নির্দেশ করছে।",
  "summaryEn": "Leading Tamil daily Hindu Tamil Thisai dispatches a detailed report on the International Crimes Tribunal-2 verdict in Dhaka sentencing seven senior Awami League leaders to death in absentia for their role during the 2024 student-led uprising. Legal and geopolitical commentators in Chennai highlight the regional implications of the ruling.",
  "keyPointsBn": [
    "শেখ হাসিনার দলীয় ৭ জ্যেষ্ঠ নেতার বিরুদ্ধে ঢাকার ট্রাইব্যুনালে ট্রায়াল ইন অ্যাবসেন্টিয়ায় মৃত্যুদণ্ড",
    "চেন্নাই প্রেস ডেস্কে ভারত-বাংলাদেশ কূটনৈতিক সম্পর্কের উপর এই রায়ের প্রভাবের নিবিড় বিশ্লেষণ",
    "দক্ষিণ ভারতে অবস্থানরত আইনি গবেষকদের মতে রাজনৈতিক বিচারের স্বচ্ছতা নিয়ে আন্তর্জাতিক উদ্বেগ"
  ],
  "keyPointsEn": [
    "Dhaka ICT sentences 7 senior Hasina administration figures to death in absentia",
    "Tamil media analysis measures potential diplomatic fallout on India-Bangladesh relations",
    "Legal experts in Chennai observe international human rights scrutiny surrounding absentia trials"
  ],
  "category": "politics",
  "categoryLabelBn": "রাজনীতি ও আইন",
  "categoryLabelEn": "Politics & Law",
  "sentiment": "negative",
  "sentimentReasonBn": "রাজনৈতিক উত্তেজনা, মানবধিকার বিতর্ক এবং মৃত্যুদণ্ডের রায় নিয়ে দক্ষিণ ভারতীয় সংবাদমাধ্যমের পর্যালোচনা।",
  "sentimentReasonEn": "Focuses on political volatility, legal controversies, and capital punishment verdicts in Dhaka.",
  "source": {
    "name": "Hindu Tamil Thisai",
    "bureau": "Delhi",
    "language": "Tamil",
    "originalUrl": "https://news.google.com/rss/articles/CBMi4AFBVV95cUxQenlvaDE0TUZlZTM3cE9zUjI4c1ViU2dGSUZvelNfNmU1U1Y2bGxDSDNXYjVWcVZQaFEwY2tZV1RlZlpxS0hrR25IUFU2YXZ0NmI4UXh0QkJhckpfOXo4NkJZcG9zOXFOUGs2NTRHcEtWdXRtLXQ2YmdxSEFHS1Nqek9LWnF6QkhYa0VwSHY1bDFLWlI5eEtyVDhpdDFsQmFDX0EzanpLZUo4dldPcFJDWEoyMW9SZkdVc2lFM2xIdHRYbVN1Y1ZVekVlTV9yYkFsS1ExUFZBZGJnTXFaZkRnLdIB5gFBVV95cUxPLVZLWGtCZHdhVHR6UTRsZFFLSFJCX2xfR3NqYVdEdVBsS0trZXBaUnpjb2ppRXpYeXdMbkdJcXEwUkZBMzE0NU9pTmZsX1Jja3pLV21fY1JTeTZWN09XcEs3ampDRGdjc0x1Qm1HcmVxWm5Zc0FqRl9XaTJlTlVxU0Rib2hEZ1NwSks3ZDNRcEZRMGJJMFdPeFNBMDNZRG9oaVNTZzl3V0xYbWt0MWsyZnJMSlh3NVRKcHBQYkZVMmUyYzFsNHJ5RnVIOEM2d1VQUmFRdjNLUnlNTzdVQlFkcXpFVHljQQ?oc=5",
    "scannedAt": "2026-09-22T01:00:00Z"
  },
  "publishedAt": "2026-09-21T18:00:00Z",
  "readTimeBn": "৩ মিনিট পাঠ",
  "readTimeEn": "3 min read",
  "imageUrl": "/images/international-crimes-tribunal-dhaka.jpg",
  "isLeadStory": false,
  "isTrending": true,
  "isBreaking": true,
  "tags": [
    "Hindu Tamil Thisai",
    "Tamil Media",
    "ICT Verdict",
    "Awami League",
    "Dhaka"
  ]
},
{
  "id": "news-20260922-082",
  "slug": "puthiyathalaimurai-bangladesh-power-crisis-candlelight-hospital-care",
  "title": "மெழுகுவர்த்தி வெளிச்சத்தில் சிகிச்சை.. 20 ஆண்டுகளில் இல்லாத மின்சார தட்டுப்பாடு - Puthiyathalaimurai",
  "englishTitle": "Puthiyathalaimurai Tamil: 'Severe Power Crisis Hits Bangladesh Hospitals; Regional Grid Trade in Focus'",
  "banglaTitle": "‘২০ বছরের মধ্যে ভয়াবহ বিদ্যুৎ সংকট; মোমবাতির আলোতে হাসপাতালে চিকিৎসা নিয়ে তামিল নিউজের উদ্বেগ’: পুথিয়াথালাইমুরাই",
  "summaryBn": "তামিল ভাষার জনপ্রিয় ২৪/৭ সংবাদ চ্যানেল ‘পুথিয়াথালাইমুরাই’-এর ভিজ্যুয়াল রিপোর্টে দেখানো হয়েছে, বিদ্যুৎ ঘাটতির কারণে ঢাকার বাইরে কয়েকটি জেলা হাসপাতালে মোমবাতি ও জেনারেটরের আলোয় শল্যচিকিৎসা চালাতে হচ্ছে। ভারতীয় বিদ্যুৎ সরবরাহকারী প্রতিষ্ঠানগুলোর সাথে বকেয়া পরিশোধ ও বাণিজ্য সমন্বয় নিয়ে প্রতিবেদনে বিশেষ আলোকপাত করা হয়েছে।",
  "summaryEn": "Leading Tamil news network Puthiyathalaimurai features a report on escalating power outages across Bangladesh, forcing district hospitals to maintain operations under candlelight. The report analyzes regional energy trade dynamics and cross-border power supply settlements with Indian power utilities.",
  "keyPointsBn": [
    "বিদ্যুৎ সংকটে বাংলাদেশের প্রত্যন্ত অঞ্চলের হাসপাতালে জরুরি চিকিৎসা ব্যাহত হওয়ার ভিজ্যুয়াল রিপোর্ট",
    "আদানি পাওয়ার ও ভারতীয় বিদ্যুৎ খাতের বকেয়া বিল মেটানোর অর্থনৈতিক পর্যালোচনার ওপর গুরুত্ব",
    "দক্ষিণ ভারতীয় বিদ্যুৎ ও শক্তি খাতের বিশ্লেষকদের মতে দ্রুত জ্বালানি সরবরাহ চুক্তি পুনর্বিন্যাসের প্রয়োজন"
  ],
  "keyPointsEn": [
    "Tamil visual coverage tracks severe electricity shortages impacting Bangladesh public healthcare",
    "Analyzes cross-border power purchase agreements and bill clearance negotiations with Indian firms",
    "Energy experts in Chennai emphasize regional power grid integration for long-term stability"
  ],
  "category": "economy",
  "categoryLabelBn": "অর্থনীতি ও শক্তি",
  "categoryLabelEn": "Economy & Energy",
  "sentiment": "negative",
  "sentimentReasonBn": "বিদ্যুৎ ঘাটতি ও চিকিৎসাসেবায় সংকট ঘনীভূত হওয়ার উদ্বেগজনক বিবরণ।",
  "sentimentReasonEn": "Highlights infrastructure distress, energy shortages, and economic settlement challenges.",
  "source": {
    "name": "Puthiyathalaimurai",
    "bureau": "Delhi",
    "language": "Tamil",
    "originalUrl": "https://news.google.com/rss/articles/CBMiUkFVX3lxTE5fUHhSVDBkbG9GQ2lXOXdsZlFPR3E5VkFoSGVOMm1yTU5yWWs1T0E1aEVwMnI0Wm1DWTFiUDg3Zm55MTZUUjVNNGxLTEY4aDdJOEE?oc=5",
    "scannedAt": "2026-09-22T01:00:00Z"
  },
  "publishedAt": "2026-09-21T17:30:00Z",
  "readTimeBn": "৪ মিনিট পাঠ",
  "readTimeEn": "4 min read",
  "imageUrl": "/images/bank-bangladesh-economy.jpg",
  "isLeadStory": false,
  "isTrending": false,
  "isBreaking": false,
  "tags": [
    "Puthiyathalaimurai",
    "Tamil News",
    "Energy Crisis",
    "Power Grid",
    "Chennai Desk"
  ]
},
{
  "id": "news-20260922-083",
  "slug": "samayam-telugu-india-maintains-essential-trade-clearance-dhaka",
  "title": "బంగ్లాదేశ్ తెంపరితనం చూపిస్తున్నా సరే.. ఢాకాకు సాయం మానని ఇండియా - Samayam Telugu",
  "englishTitle": "Samayam Telugu: 'India Sustains Pragmatic Supply Lines & Trade Support for Dhaka Despite Strain'",
  "banglaTitle": "‘কূটনৈতিক উত্তেজনার মধ্যেও বাংলাদেশের জন্য নিত্যপ্রয়োজনীয় পণ্যের জোগান বজায় রাখছে ভারত’: সময়ম তেলুগু",
  "summaryBn": "তেলুগু ভাষার অন্যতম বৃহৎ ডিজিটাল মাধ্যম ‘সময়ম তেলুগু’ (টাইমস গ্রুপ) প্রতিবেদনে উল্লেখ করেছে, ঢাকা ও নয়াদিল্লির মধ্যে রাজনৈতিক অবস্থানগত দূরত্ব সত্ত্বেও ভারত চাল, পেঁয়াজ ও খাদ্যপণ্যের রপ্তানি সমন্বয় অব্যাহত রেখেছে। হায়দরাবাদ বাণিজ্য বিশ্লেষকরা মনে করেন, আঞ্চলিক খাদ্য নিরাপত্তা রক্ষায় ভারত উদার নীতি বজায় রাখছে।",
  "summaryEn": "Times Group's Telugu digital news outlet Samayam Telugu analyzes India's pragmatic trade policy toward Bangladesh. Despite diplomatic friction over Sheikh Hasina's exile, Indian land ports continue clearing essential food cargo and agricultural exports to prevent market inflation in Dhaka.",
  "keyPointsBn": [
    "রাজনৈতিক বৈরিতার মধ্যেও সীমান্তে পচনশীল খাদ্যপণ্য ও পোল্ট্রি পেঁয়াজবাহী ট্রাকের নিরবচ্ছিন্ন চলাচল",
    "হায়দরাবাদ ও তেলেঙ্গানা রপ্তানিকারক সংগঠনগুলোর মতে দক্ষিণ এশীয় বাণিজ্য ভারসাম্য রক্ষায় ভারতের ইতিবাচক পদক্ষেপ",
    "পেট্রাপোল ও গেদে স্থলবন্দরে গ্রিন চ্যানেল চালুর প্রশংসা"
  ],
  "keyPointsEn": [
    "Uninterrupted transit cleared for essential food cargo across Bengal and Tripura borders",
    "Hyderabad trade bodies underline India's commitment to regional food security",
    "Highlights green-channel processing at key land customs stations"
  ],
  "category": "trade",
  "categoryLabelBn": "বাণিজ্য ও খাদ্য জোগান",
  "categoryLabelEn": "Trade & Food Supply",
  "sentiment": "positive",
  "sentimentReasonBn": "কূটনৈতিক টানাপোড়েনের মধ্যেও ভারতের অব্যাহত বাণিজ্যিক ও খাদ্য সহযোগিতার ইতিবাচক বার্তা।",
  "sentimentReasonEn": "Focuses on constructive trade continuity and essential food security cooperation.",
  "source": {
    "name": "Samayam Telugu",
    "bureau": "Mumbai",
    "language": "Telugu",
    "originalUrl": "https://news.google.com/rss/articles/CBMiUkFVX3lxTE1Yc2QydThyZkg3clhNN3ZGZFFlb2l2TmpYbHoxTldGNDFDOXNBa211WWktZGxKNTBNRk9OTHQyS3FuU0l0WUd5bEc2bTAtN3Z4QWc?oc=5",
    "scannedAt": "2026-09-22T01:00:00Z"
  },
  "publishedAt": "2026-09-21T16:00:00Z",
  "readTimeBn": "৩ মিনিট পাঠ",
  "readTimeEn": "3 min read",
  "imageUrl": "/images/india-bangladesh-trade-land-port.jpg",
  "isLeadStory": false,
  "isTrending": true,
  "isBreaking": false,
  "tags": [
    "Samayam Telugu",
    "Telugu Media",
    "Trade Continuity",
    "Food Export",
    "Hyderabad Desk"
  ]
},
{
  "id": "news-20260922-084",
  "slug": "namasthe-telangana-power-cuts-grid-instability-dhaka-industrial-units",
  "title": "బంగ్లాదేశ్‌లో కొన‌సాగుతున్న విద్యుత్ సంక్షోభం.. క‌రెంటు కోత‌ల‌తో చీక‌ట్లో మ‌గ్గుతున్న దేశం - Namasthe Telangana",
  "englishTitle": "Namasthe Telangana: 'Dhaka Industrial Hubs Face Production Halts Amid Severe Power Grid Outages'",
  "banglaTitle": "‘তীব্র বিদ্যুৎ ঘাটতিতে বাংলাদেশের তৈরি পোশাক ও শিল্প কারখানায় উৎপাদন শ্লথ’: নমস্তে তেলেঙ্গানা",
  "summaryBn": "তেলেঙ্গানার শীর্ষ তেলেগু দৈনিক ‘নমস্তে তেলেঙ্গানা’ তাদের শিল্প ও আন্তর্জাতিক পাতায় লিখেছে, বাংলাদেশে লোডশেডিং এবং বিশ্ববাজারে জ্বালানি তেলের দাম বৃদ্ধির কারণে সাভার ও গাজীপুরের টেক্সটাইল কারখানায় উৎপাদন বিঘ্নিত হচ্ছে। তেলেঙ্গানার টেক্সটাইল রপ্তানিকারকরা বৈশ্বিক তৈরি পোশাক বাজারে এর সম্ভাব্য প্রভাব মূল্যায়ন করছেন।",
  "summaryEn": "Prominent Telugu newspaper Namasthe Telangana highlights production bottlenecks across Bangladesh's apparel manufacturing hubs caused by national power outages. Textile industry analysts in Hyderabad track order shifts as Bangladesh mills grapple with fuel costs and grid instability.",
  "keyPointsBn": [
    "সাভার, গাজীপুর ও নারায়ণগঞ্জের পোশাক কারখানায় সময়মতো বিদ্যুৎ না পাওয়ায় বায়িং অর্ডার ব্যাহত",
    "হায়দরাবাদ ও সিরিসিল্লা টেক্সটাইল পার্কের রপ্তানিকারকদের আন্তর্জাতিক বাজার পর্যবেক্ষণ",
    "বকেয়া পরিশোধ ও ভারতীয় কয়লা ও তাপবিদ্যুৎ কেন্দ্রগুলো থেকে বিদ্যুৎ আমদানির জরুরি তাগিদ"
  ],
  "keyPointsEn": [
    "Manufacturing slowdowns reported across Gazipur and Narayanganj ready-made garment clusters",
    "Hyderabad apparel exporters monitor global supply chain shifts in response to Dhaka outage",
    "Stresses urgency of settling cross-border power dues with Indian power generators"
  ],
  "category": "economy",
  "categoryLabelBn": "অর্থনীতি ও পোশাক শিল্প",
  "categoryLabelEn": "Economy & Apparel",
  "sentiment": "neutral",
  "sentimentReasonBn": "শিল্প উৎপাদন ও শক্তি সংকটের নিরপেক্ষ অর্থনৈতিক প্রতিবেদন।",
  "sentimentReasonEn": "Factual reporting on industrial output, energy infrastructure, and regional supply chain dynamics.",
  "source": {
    "name": "Namasthe Telangana",
    "bureau": "Mumbai",
    "language": "Telugu",
    "originalUrl": "https://news.google.com/rss/articles/CBMiVkFVX3lxTE1OV2ZRanRleTlaODNGQVhnS19BTmlXN1NLSzhGUU5aOFFBTE5KMnNVTk5qNFZtREJzVEt1T0V4NUQ4bXpnako3cVRTTGk1WDVRem9KM2RR?oc=5",
    "scannedAt": "2026-09-22T01:00:00Z"
  },
  "publishedAt": "2026-09-21T14:30:00Z",
  "readTimeBn": "৩ মিনিট পাঠ",
  "readTimeEn": "3 min read",
  "imageUrl": "/images/petrapole-benapole-trade-cargo.jpg",
  "isLeadStory": false,
  "isTrending": false,
  "isBreaking": false,
  "tags": [
    "Namasthe Telangana",
    "Telugu Media",
    "Apparel Industry",
    "Energy Crisis",
    "Hyderabad"
  ]
},
{
  "id": "news-20260922-085",
  "slug": "tv9-marathi-brics-absence-interim-government-diplomatic-recalibration",
  "title": "India-Bangladesh : BRICS परिषदेला न येऊन बांग्लादेशच्या पंतप्रधानांनी... - TV9 Marathi",
  "englishTitle": "TV9 Marathi: 'Diplomatic Analysis on Bangladesh Interim Leadership's International Stance & Bilateral Ties'",
  "banglaTitle": "‘কূটনৈতিক ভারসাম্য রক্ষায় অন্তর্বর্তীকালীন সরকারের পদক্ষেপে মুম্বই মিডিয়া বিশ্লেষকদের নজর’: টিভি৯ মারাঠি",
  "summaryBn": "মারাঠি ভাষার অন্যতম প্রধান নিউজ চ্যানেল ‘টিভি৯ মারাঠি’ প্রকাশিত বিশেষ বিশ্লেষণে বলা হয়েছে, ব্রিকস এবং আঞ্চলিক প্ল্যাটফর্মে বাংলাদেশের অন্তর্বর্তীকালীন নেতৃত্বের অনুপস্থিতি বা উপস্থিতি বহুপাক্ষিক সম্পর্কের নতুন দিক উন্মোচন করছে। মুম্বইয়ের অর্থনৈতিক ও কূটনৈতিক বিশেষজ্ঞগণ দুই দেশের বাণিজ্যিক স্বার্থ রক্ষায় সরাসরি আলোচনার উপর জোর দিচ্ছেন।",
  "summaryEn": "Leading Marathi news station TV9 Marathi analyzes the foreign policy choices of Bangladesh's interim administration following Sheikh Hasina's removal. Foreign affairs strategists in Mumbai weigh the economic stakes for bilateral banking, maritime transport, and regional security.",
  "keyPointsBn": [
    "মুম্বই মিডিয়া বিশ্লেষণে অন্তর্বর্তী সরকারের বহুপাক্ষিক কূটনীতি ও ভারত সম্পর্কের গুরুত্বারোপ",
    "ব্যাংকিং খাত এবং এলসি (Letter of Credit) নিষ্পত্তিতে পারস্পরিক আস্থা পুনর্গঠনের আহ্বান",
    "নয়াদিল্লি ও ঢাকার মধ্যে কার্যকরি যোগাযোগ বজায় রাখার উপর কূটনৈতিক বিশেষজ্ঞদের মত প্রকাশ"
  ],
  "keyPointsEn": [
    "Mumbai media dispatches examine interim government's multilateral engagement strategy",
    "Highlights need for rebuilding financial trust in cross-border banking and Letter of Credit settlements",
    "Strategic analysts in Maharashtra emphasize maintaining open bilateral communication channels"
  ],
  "category": "diplomacy",
  "categoryLabelBn": "কূটনীতি ও অর্থনীতি",
  "categoryLabelEn": "Diplomacy & Economy",
  "sentiment": "neutral",
  "sentimentReasonBn": "কূটনৈতিক ও আর্থিক সম্পর্কের বস্তুনিষ্ঠ ও কৌশলগত মূল্যায়ন।",
  "sentimentReasonEn": "Objective commentary on strategic diplomatic recalibration and trade finance stability.",
  "source": {
    "name": "TV9 Marathi",
    "bureau": "Mumbai",
    "language": "Marathi",
    "originalUrl": "https://news.google.com/rss/articles/CBMiVkFVX3lxTE1BbVlfT0stTzBhRWh3YnBhYUNrM0pmSlgtQnRKSGg1T2U4NlprXzBRa2trdEp6X3JpTld6eEphLVR5aXZaQnVhVUpBcGZvbkU?oc=5",
    "scannedAt": "2026-09-22T01:00:00Z"
  },
  "publishedAt": "2026-09-21T19:00:00Z",
  "readTimeBn": "৪ মিনিট পাঠ",
  "readTimeEn": "4 min read",
  "imageUrl": "/images/brics-bimstec-summit-delhi.jpg",
  "isLeadStory": false,
  "isTrending": false,
  "isBreaking": false,
  "tags": [
    "TV9 Marathi",
    "Marathi Media",
    "Diplomatic Analysis",
    "Trade Finance",
    "Mumbai Desk"
  ]
},
{
  "id": "news-20260922-086",
  "slug": "divya-marathi-mea-response-bangladesh-relational-reset",
  "title": "बांगलादेश म्हणाला- भारतासोबत नव्याने संबंध प्रस्थापित करू: परराष्ट्र राज्यमंत्र्यांची माहिती - Divya Marathi",
  "englishTitle": "Divya Marathi: 'India Open to Pragmatic Bilateral Reset as Bangladesh Signals Readiness for Talks'",
  "banglaTitle": "‘বাংলাদেশের সঙ্গে পারস্পরিক শ্রদ্ধাবোধের ভিত্তিতে সম্পর্ক পুনর্গঠনে প্রস্তুত ভারত’: দিব্য মারাঠি",
  "summaryBn": "দৈনিক ভাস্কর গ্রুপের অন্যতম মারাঠি সংস্করণ ‘দিব্য মারাঠি’র আন্তর্জাতিক পাতায় প্রতিবেদন প্রকাশ করা হয়েছে, ঢাকা থেকে নতুন করে দ্বিপাক্ষিক আলোচনা ও সম্পর্ক পুনর্গঠনের আহ্বানের জবাবে ভারতের পররাষ্ট্র বিষয়ক প্রতিক্রিয়া ইতিবাচক। মুম্বইয়ের নীতি নির্ধারকরা বাণিজ্য ও জ্বালানি খাতে যৌথ সহযোগিতা বজায় রাখার পক্ষে মতামত দিয়েছেন।",
  "summaryEn": "Prominent Marathi daily Divya Marathi reports on official statements from New Delhi and Dhaka regarding a potential reset in bilateral relations. Indian diplomats reiterate that core strategic interests, border security, and trade commitments will form the bedrock of ongoing engagements.",
  "keyPointsBn": [
    "দ্বিপাক্ষিক সম্পর্ক স্বাভাবিক করতে যৌথ ওয়ার্কিং গ্রুপ ও পররাষ্ট্র সচিব পর্যায়ের বৈঠকের সম্ভাবনা",
    "মুম্বই প্রেস ডেস্কে ভারতের মূল জাতীয় স্বার্থ ও সীমান্ত নিরাপত্তা অক্ষুণ্ন রেখে আলোচনার ইঙ্গিত",
    "সামুদ্রিক পরিবহন ও চট্টগ্রাম বন্দর ট্রানজিট চুক্তির ধারাবাহিকতা বজায় রাখার ওপর গুরুত্ব"
  ],
  "keyPointsEn": [
    "Explores parameters for upcoming Foreign Office Consultations and trade working groups",
    "Divya Marathi highlights India's insistence on preserving security and minority protection guarantees",
    "Emphasizes continuity of maritime transshipment arrangements through Chattogram and Mongla"
  ],
  "category": "diplomacy",
  "categoryLabelBn": "কূটনীতি ও পররাষ্ট্র নীতি",
  "categoryLabelEn": "Diplomacy & Foreign Policy",
  "sentiment": "positive",
  "sentimentReasonBn": "দ্বিপাক্ষিক সম্পর্ক পুনর্গঠন ও আলোচনার ইতিবাচক সংকেত।",
  "sentimentReasonEn": "Constructive outlook focusing on diplomatic reset, security commitments, and economic dialogue.",
  "source": {
    "name": "Divya Marathi",
    "bureau": "Delhi",
    "language": "Marathi",
    "originalUrl": "https://news.google.com/rss/articles/CBMiUkFVX3lxTE1Yc2QydThyZkg3clhNN3ZGZFFlb2l2TmpYbHoxTldGNDFDOXNBa211WWktZGxKNTBNRk9OTHQyS3FuU0l0WUd5bEc2bTAtN3Z4QWc?oc=5",
    "scannedAt": "2026-09-22T01:00:00Z"
  },
  "publishedAt": "2026-09-21T13:00:00Z",
  "readTimeBn": "৩ মিনিট পাঠ",
  "readTimeEn": "3 min read",
  "imageUrl": "/images/delhi-dhaka-bilateral-summit.jpg",
  "isLeadStory": false,
  "isTrending": false,
  "isBreaking": false,
  "tags": [
    "Divya Marathi",
    "Marathi Media",
    "Bilateral Reset",
    "MEA Response",
    "Delhi Desk"
  ]
},
{
  "id": "news-20260922-087",
  "slug": "madhyamam-malayalam-mea-firm-warning-101-agreements-review",
  "title": "ബംഗ്ലാദേശ് കരാറുകൾ പുനഃപരിശോധിച്ചാൽ ആവശ്യമായ എല്ലാ നടപടിയും സ്വീകരിക്കും എന്ന് ഇന്ത്യ - Madhyamam",
  "englishTitle": "Madhyamam Malayalam: 'India Warns of Necessary Safeguards if Bangladesh Unilaterally Alters Hasina-Era Accords'",
  "banglaTitle": "‘শেখ হাসিনা আমলে স্বাক্ষরিত চুক্তি একতরফা বাতিল বা সংশোধন করা হলে জাতীয় স্বার্থে কড়া ব্যবস্থা নেবে ভারত’: মাধ্য মম মালয়ালম",
  "summaryBn": "কেরালার শীর্ষ মালয়ালম সংবাদপত্র ‘মাধ্য মম’-এর নিউ জেন কভারেজে জানানো হয়েছে, অন্তর্বর্তীকালীন সরকার শেখ হাসিনা সরকারের সময়ে স্বাক্ষরিত ১০১টি দ্বিপাক্ষিক চুক্তি পুনর্মূল্যায়নের উদ্যোগ নেওয়ায় নয়াদিল্লি কড়া প্রতিক্রিয়া ব্যক্ত করেছে। দক্ষিণ ভারতের বাণিজ্যিক মহলে এই পদক্ষেপের প্রভাব নিয়ে ব্যাপক আলোচনা চলছে।",
  "summaryEn": "Leading Malayalam daily Madhyamam dispatches an in-depth report on New Delhi's firm posture as Dhaka initiates a review of 101 bilateral treaties established under Sheikh Hasina. Maritime logistics operators and trade houses in Kerala evaluate potential disruptions to North-Eastern transit connectivity.",
  "keyPointsBn": [
    "হাসিনা সরকারের আমলে স্বাক্ষরিত ১০১টি চুক্তির পুনর্মূল্যায়ন নিয়ে ভারতীয় পররাষ্ট্র মন্ত্রণালয়ের স্পষ্ট বার্তা",
    "কেরালার সমুদ্র বন্দর ও লজিস্টিক খাতের বিশেষজ্ঞদের দৃষ্টিতে ভারতের জাতীয় স্বার্থ রক্ষার পদক্ষেপ",
    "ট্রানজিট ও বিদ্যুৎ চুক্তি পরিবর্তনের ফলে দুই দেশের অর্থনীতিতে সম্ভাব্য প্রভাবের বিবরণ"
  ],
  "keyPointsEn": [
    "Detailed coverage of MEA statement regarding unilateral reviews of 101 Hasina-era bilateral accords",
    "Malayalam media highlights economic concerns among South Indian maritime freight forwarders",
    "Stresses importance of legal sanctity in international transit and power supply contracts"
  ],
  "category": "diplomacy",
  "categoryLabelBn": "কূটনীতি ও চুক্তি",
  "categoryLabelEn": "Diplomacy & Treaties",
  "sentiment": "neutral",
  "sentimentReasonBn": "চুক্তি পুনর্মূল্যায়ন ও ভারতের প্রতিক্রিয়া সংক্রান্ত তথ্যনিষ্ঠ প্রতিবেদন।",
  "sentimentReasonEn": "Factual reporting on treaty reviews, diplomatic safeguards, and maritime trade implications.",
  "source": {
    "name": "Madhyamam",
    "bureau": "Delhi",
    "language": "Malayalam",
    "originalUrl": "https://news.google.com/rss/articles/CBMiigFBVV95cUxQaUVOQ1o1Q0dtVG1PUlJqN2JZakVnXzJnS1hYQTZaWmZSVDhWSmx1b3liUFBxWllYdEZTOC1LS2hvY0FScWlzUDZNcmtsb0hodmxidDZRWUtDNHAtSGRlR3RQRFFWSEN5dmEydTYtZmRXODUyMWgyNlNuNHlKczU2OVRSa1Roa2xHR0HSAY8BQVVfeXFMTkFGRklDSnJmN2lWcXJKN0hpUS1ZQUtLeFNjc0dzOG1JYXUydmpkNkQ3UlZHQUl6Y20tZ1g3SWpiWW5KakZVWFNqZUxJcUdsa0hUU3pyVC1VWVZlLXNnc2JzSXdvXzl6VlVtcmR2aWFreHY2Qm9ia01DMFlqVHdvVVVBN2VvVFNKUmdyektXS0E?oc=5",
    "scannedAt": "2026-09-22T01:00:00Z"
  },
  "publishedAt": "2026-09-21T12:00:00Z",
  "readTimeBn": "৩ মিনিট পাঠ",
  "readTimeEn": "3 min read",
  "imageUrl": "/images/south-block-mea-delhi.jpg",
  "isLeadStory": false,
  "isTrending": false,
  "isBreaking": false,
  "tags": [
    "Madhyamam",
    "Malayalam Media",
    "Treaty Review",
    "MEA Response",
    "Kochi Desk"
  ]
},
{
  "id": "news-20260922-088",
  "slug": "asomiya-pratidin-northeast-border-vigilance-bsf-assam-sector",
  "title": "বাংলাদেশ সীমান্তত বিএছএফৰ বিশেষ সজাগতা আৰু অসমখণ্ডত নিশাৰ পহৰা - অসমীয়া প্ৰতিদিন",
  "englishTitle": "Asomiya Pratidin: 'BSF Heightens Night Vigilance Along Assam & Meghalaya Sectors of Bangladesh Border'",
  "banglaTitle": "‘অসম ও মেঘালয় সীমান্তে বিএসএফের বিশেষ নাইট-ভিশন টহল ও অনুপ্রবেশ রোদে কঠোর সতর্কতা’: অসমীয়া প্রতিদিন",
  "summaryBn": "অসমের সর্বাধিক প্রচারিত অসমীয়া দৈনিক ‘অসমীয়া প্রতিদিন’-এর গুয়াহাটি ব্যুরো রিপোর্টে জানানো হয়েছে, বাংলাদেশ সীমান্ত সংলগ্ন ধুবড়ী ও করিমগঞ্জ সেক্টরে বিএসএফ বিশেষ নাইট-ভিশন থার্মাল ক্যামেরা এবং অতিরিক্ত সদস্য মোতায়েন করেছে। অনুপ্রবেশ প্রতিরোধে আঞ্চলিক নিরাপত্তা ও স্থানীয় প্রশাসনের মধ্যে সমন্বয় জোরদার করা হয়েছে।",
  "summaryEn": "Leading Assamese daily Asomiya Pratidin reports from Guwahati on enhanced BSF operational readiness along the Assam and Meghalaya international border sectors. BSF frontier guards have activated round-the-clock thermal camera watchtowers in Dhubri and Karimganj to curb illegal cross-border movement.",
  "keyPointsBn": [
    "ধুবড়ী ও বরাক উপত্যকা সীমান্ত সেক্টরে বিএসএফের বিশেষ টহল ও নদীপথের নজরদারি বৃদ্ধি",
    "উত্তর-পূর্ব ভারতের নিরাপত্তার স্বার্থে অবৈধ সীমান্ত পারাপার সম্পূর্ণ প্রতিরোধে স্থানীয় প্রশাসনের তৎপরতা",
    "সীমান্তবর্তী গ্রামগুলোতে বিএসএফ বিওপির সান্ধ্যকালীন সতর্কবার্তা ও স্থানীয়দের সহযোগিতা আহ্বান"
  ],
  "keyPointsEn": [
    "BSF deploys riverine patrol craft and thermal sensors across Dhubri and Barak Valley border lines",
    "Assam media highlights local community coordination to preserve North-East border security",
    "Heightened vigilance enforced following political developments across the border in Dhaka"
  ],
  "category": "border",
  "categoryLabelBn": "সীমান্ত নিরাপত্তা ও উত্তর-পূর্ব",
  "categoryLabelEn": "Border Security & North-East",
  "sentiment": "neutral",
  "sentimentReasonBn": "উত্তর-পূর্ব ভারতে সীমান্ত নিরাপত্তার নিয়মিত নজরদারি ও বিএসএফের সতর্কতার নিউট্রাল রিপোর্ট।",
  "sentimentReasonEn": "Factual reporting on border control, night-vision surveillance, and regional security in Assam.",
  "source": {
    "name": "Asomiya Pratidin",
    "bureau": "Assam",
    "language": "Assamese",
    "originalUrl": "https://news.google.com/rss/articles/CBMiUkFVX3lxTE1Yc2QydThyZkg3clhNN3ZGZFFlb2l2TmpYbHoxTldGNDFDOXNBa211WWktZGxKNTBNRk9OTHQyS3FuU0l0WUd5bEc2bTAtN3Z4QWc?oc=5",
    "scannedAt": "2026-09-22T01:00:00Z"
  },
  "publishedAt": "2026-09-21T11:30:00Z",
  "readTimeBn": "৩ মিনিট পাঠ",
  "readTimeEn": "3 min read",
  "imageUrl": "/images/india-bangladesh-border-fence.jpg",
  "isLeadStory": false,
  "isTrending": false,
  "isBreaking": false,
  "tags": [
    "Asomiya Pratidin",
    "Assamese Media",
    "BSF Vigilance",
    "Assam Border",
    "Guwahati Desk"
  ]
},
{
  "id": "news-20260922-089",
  "slug": "tv9-gujarati-hilsa-seafood-trade-reversal-mundra-port-exports",
  "title": "બાંગ્લાદેશમાં માછલીની અછત વચ્ચે ગુજરાતના બંદરો પરથી હિલ્સા અને સીફૂડની નિકાસ - TV9 Gujarati",
  "englishTitle": "TV9 Gujarati: 'Gujarat Ports & Exporters Dispatch Hilsa Consignments to Balance Dhaka Seafood Supply'",
  "banglaTitle": "‘বাংলাদেশের ইলিশ সংকটের জবাবে গুজরাটের বন্দর থেকে বিশেষ মৎস্য রপ্তানি চালান প্রেরণ’: টিভি৯ গুজরাটি",
  "summaryBn": "গুজরাটি ভাষার শীর্ষ সংবাদ নেটওয়ার্ক ‘টিভি৯ গুজরাটি’ বাণিজ্য রিপোর্টে তুলে ধরেছে, ঢাকায় মাছের বাজারে জোগান সংকট তৈরি হওয়ায় গুজরাটের মুंद्रा ও ভেরাভাল বন্দর থেকে শীতাতপ নিয়ন্ত্রিত কনটেইনারে করে ভারতে উৎপাদিত ইলিশ ও সামুদ্রিক মাছ রপ্তানি করা হচ্ছে। আহমেদাবাদ ও সুরাটের বাণিজ্য প্রতিনিধিরা দক্ষিণ এশীয় বাণিজ্যের নতুন মোড় হিসেবে একে দেখছেন।",
  "summaryEn": "Leading Gujarati news platform TV9 Gujarati highlights a commercial development: seafood processors and cold-chain exporters operating out of Gujarat's Veraval and Mundra ports are routing marine Hilsa shipments to Bangladesh to bridge retail supply deficits in Dhaka markets.",
  "keyPointsBn": [
    "ভেরাভাল ও মুंद्रा বন্দর থেকে ঢাকায় শীতাতপ নিয়ন্ত্রিত মৎস্য কনটেইনার সরবরাহের ভিজ্যুয়াল রিপোর্ট",
    "গুজরাটি সংবাদমাধ্যমে ভারত-বাংলাদেশ দ্বিপাক্ষিক বাণিজ্য গতিশীলতার প্রশংসা",
    "পশ্চিম ভারতীয় পোল্ট্রি ও সামুদ্রিক খাদ্য রপ্তানিকারকদের জন্য নতুন বাজারের বাণিজ্যিক উন্মোচন"
  ],
  "keyPointsEn": [
    "Refrigerated freight dispatches tracked from Veraval and Mundra to land customs stations",
    "Gujarati media highlights economic agility in fulfilling South Asian food supply demands",
    "Opens expanded trade channels for Western Indian seafood processors and trade logistics"
  ],
  "category": "trade",
  "categoryLabelBn": "সীমান্ত বাণিজ্য ও বন্দর",
  "categoryLabelEn": "Cross-Border Trade & Ports",
  "sentiment": "positive",
  "sentimentReasonBn": "বাণিজ্যিক সমন্বয় ও মৎস্য চালানের ইতিবাচক খবর।",
  "sentimentReasonEn": "Positive coverage of cross-border trade resilience and commercial supply chain solutions.",
  "source": {
    "name": "TV9 Gujarati",
    "bureau": "Mumbai",
    "language": "Gujarati",
    "originalUrl": "https://news.google.com/rss/articles/CBMi5wFBVV95cUxPZkhvVHBrRS1PUmxFVGZoWlJQRHRUdVlRSnZodGZaUnJOa2hkWjFBSklfT3VWNkZXUzU1T3ZLeEQ4VmpFWlNJTi1Zc2c4ajVpYVliZF_SAewBQVVfeXFMUE5vaENSNFJJNFpYYUh0SUxiSDFsWlVFemlfaE56RGxHQzAwa1ZEdWVIaE5GUVBiMkg2cDBpUW9ncHlmMGV0ck1QcFBtb0tpY09uYjFZaWFSU0llaWhHZnMtOEZUWV9PRS1HLUxULU9vRjhWNTBCbjY3cVJyR3Q1aFJSRGxOdUFWd01tVk5XTHVERzVxSnhYc2h5eGx4VUFwWElMeE11MGdNOTRfbk5sNmstTlhJLTdwQ3BkTkQ2X0FYUjF4X2xRbXQwSmQ0SmVlTV9yYkFsS1ExUFZBZGJnTXFaZkRn?oc=5",
    "scannedAt": "2026-09-22T01:00:00Z"
  },
  "publishedAt": "2026-09-21T10:00:00Z",
  "readTimeBn": "৩ মিনিট পাঠ",
  "readTimeEn": "3 min read",
  "imageUrl": "/images/hilsa-fish-trade-export.jpg",
  "isLeadStory": false,
  "isTrending": false,
  "isBreaking": false,
  "tags": [
    "TV9 Gujarati",
    "Gujarati Media",
    "Hilsa Trade",
    "Mundra Port",
    "Ahmedabad Desk"
  ]
},
{
  "id": "news-20260922-090",
  "slug": "ptc-news-punjabi-south-asian-energy-fuel-rates-bangladesh-imports",
  "title": "ਦੱਖਣੀ ਏਸ਼ੀਆ ਵਿੱਚ ਬਾਲਣ ਦੇ ਰੇਟਾਂ ਵਿੱਚ ਉਤਾਰ-ਚੜ੍ਹਾਅ ਅਤੇ ਬੰਗਲਾਦੇਸ਼ ਦੇ ਊਰਜਾ ਆਯਾਤ - PTC News",
  "englishTitle": "PTC News Punjabi: 'South Asian Fuel Logistics in Focus as Bangladesh Manages Oil & LNG Import Costs'",
  "banglaTitle": "‘দক্ষিণ এশিয়ায় জ্বালানি মূল্যের অস্থিরতার মধ্যে বাংলাদেশের এলএনজি ও তেল আমদানির হিসাবপ্রাক্কলন’: পিটিসি নিউজ পাঞ্জাবি",
  "summaryBn": "পাঞ্জাবের শীর্ষস্থানীয় সংবাদ নেটওয়ার্ক ‘পিটিসি নিউজ’-এর গ্লোবাল পাঞ্জাবি প্যানোরামা স্ক্যানে উল্লেখ করা হয়েছে, দক্ষিণ এশীয় জ্বালানি বাজারে মূল্যবৃদ্ধির কারণে বাংলাদেশে ডিজেল ও এলএনজি আমদানির খরচ বেড়ে গেছে। অমৃতসর বাণিজ্য বিশেষজ্ঞরা দক্ষিণ এশীয় আঞ্চলিক শক্তি করিডোর গঠনে ভারতের ভূমিকা মূল্যায়ন করেছেন।",
  "summaryEn": "Leading Punjabi news network PTC News dispatches a regional economic report tracking South Asian energy pricing volatility. Punjabi market strategists outline how cross-border liquid fuel pipelines and energy credit facilities from India provide seasonal stability to Bangladesh's domestic market.",
  "keyPointsBn": [
    "দক্ষিণ এশীয় জ্বালানি বাজারে ডিজেল ও তেলের দাম নিয়ে পাঞ্জাবি সংবাদমাধ্যমের বিশেষ পর্যালোচনা",
    "ভারত-বাংলাদেশ মৈত্রী পাইপলাইনের মাধ্যমে পরিশোধিত পেট্রোলিয়াম সরবরাহের গুরুত্ব",
    "অমৃতসর ও উত্তর ভারত অর্থনৈতিক ডেস্কে আঞ্চলিক শক্তি সুরক্ষার আহ্বান"
  ],
  "keyPointsEn": [
    "Punjabi media report details fuel logistics and energy import cost structures across South Asia",
    "Highlights cross-border refined petroleum transit through India-Bangladesh Friendship Pipeline",
    "North Indian market analysts emphasize long-term bilateral energy credit agreements"
  ],
  "category": "economy",
  "categoryLabelBn": "অর্থনীতি ও জ্বালানি",
  "categoryLabelEn": "Economy & Fuel",
  "sentiment": "neutral",
  "sentimentReasonBn": "জ্বালানি মূল্য ও পণ্য সরবরাহের বস্তুনিষ্ঠ অর্থনৈতিক মূল্যায়ন।",
  "sentimentReasonEn": "Objective reporting on South Asian energy logistics, fuel prices, and pipeline trade.",
  "source": {
    "name": "PTC News",
    "bureau": "Delhi",
    "language": "Punjabi",
    "originalUrl": "https://news.google.com/rss/articles/CBMitAFBVV95cUxPdHpqUGVpV2tnSFRrdGtGdEFSU05yeWJKWDBYU1hOU0dFZy1BbzlMNk9HOUFSTDBveE5OTF9EaDctMFNsT01VWV95TnVuYzAwb1Z3b3J6ZDBuZ2ZCbjl5VUhCbTl5SjRVVVRmT1c2ckxjaGM3TmcwTzdWay1QWi13bzE1YjJaVkVYT3hNdXpVUG9Rck5MYVJZanM1MV9FSVgtODhNbXlPZVB6NGp2bWVhellCSnTSAboBQVVfeXFMTWVNTU1adHFlU3UwRTFJa2FhT1ktQW9SbTJFWnVpUnNGT1VHVTlQNjhBY08wTXhWTENqZnh3dGJ3Q3hicGFrRTF3clFNb1hCamJoYmJvQUgtTEVkTzE3VDY0MHd2THhZZzdpZThPSFlHN1ZTQjdJVzJ6MWIxLUtvQVdBQmF3U1B1U29ONkQ5dExXbGdYVm55NGtsTjBkei1HajlpaFFSUE5sRF9kS1o0aGw4SEVreE85OUR3?oc=5",
    "scannedAt": "2026-09-22T01:00:00Z"
  },
  "publishedAt": "2026-09-21T09:00:00Z",
  "readTimeBn": "৩ মিনিট পাঠ",
  "readTimeEn": "3 min read",
  "imageUrl": "/images/india-bangladesh-trade-land-port.jpg",
  "isLeadStory": false,
  "isTrending": false,
  "isBreaking": false,
  "tags": [
    "PTC News",
    "Punjabi Media",
    "Energy Logistics",
    "Friendship Pipeline",
    "Amritsar Desk"
  ]
},
{
  "id": "news-20260921-060",
    "slug": "zee-news-bangladesh-reviews-101-hasina-era-deals-delhi-protect-interests",
    "title": "Zee News: 'Bangladesh Reviews 101 Hasina-Era Deals; Delhi Asserts Resolute Commitment to Safeguard Strategic & Trade Interests'",
    "englishTitle": "Zee News: 'Bangladesh Reviews 101 Hasina-Era Deals; Delhi Asserts Resolute Commitment to Safeguard Strategic & Trade Interests'",
    "banglaTitle": "‘হাসিনা আমলে স্বাক্ষরিত ১০১টি দ্বিপাক্ষিক চুক্তি পুনর্মূল্যায়ন করছে ঢাকা; জাতীয় স্বার্থ রক্ষায় কঠোর বার্তা ভারতের’: জি নিউজ",
    "summaryBn": "ভারতের শীর্ষস্থানীয় গণমাধ্যম জি নিউজ জানিয়েছে, শেখ হাসিনার ১৫ বছরের শাসনামলে ভারতের সাথে স্বাক্ষরিত ১০১টি দ্বিপাক্ষিক চুক্তি ও সমঝোতা স্মারক পুঙ্খানুপুঙ্খ পুনর্মূল্যায়ন করার প্রক্রিয়া শুরু করেছে ঢাকা। এর মধ্যে চট্টগ্রাম ও মংলা সমুদ্রবন্দর ব্যবহার করে ভারতের উত্তর-পূর্বাঞ্চলে পণ্য পরিবহন, আন্তঃসীমান্ত রেল সংযোগ এবং জ্বালানি সঞ্চালন চুক্তি অন্তর্ভুক্ত। ভারতের পররাষ্ট্র মন্ত্রণালয় (এমইএ) স্পষ্ট জানিয়ে দিয়েছে যে, নিজেদের সার্বভৌম কৌশলগত ও বাণিজ্যিক স্বার্থ সুরক্ষায় দিল্লি প্রয়োজনীয় যেকোনো পদক্ষেপ গ্রহণ করবে।",
    "summaryEn": "Zee News reports that Bangladesh has initiated a comprehensive review of 101 bilateral treaties and accords signed during Sheikh Hasina's 15-year tenure. The agreements under scrutiny encompass transshipment access via Chattogram and Mongla ports for India’s landlocked Northeast and cross-border rail links. India’s Ministry of External Affairs responded firmly, declaring New Delhi will take all necessary measures to safeguard its core strategic and commercial interests.",
    "keyPointsBn": [
      "হাসিনা আমলে ভারতের সাথে স্বাক্ষরিত ১০১টি গুরুত্বপূর্ণ দ্বিপাক্ষিক চুক্তি পুনর্মূল্যায়ন করছে ঢাকা",
      "চট্টগ্রাম ও মংলা বন্দর ব্যবহার এবং উত্তর-পূর্বাঞ্চলীয় ট্রানজিট সুবিধার ভবিষ্যত নিয়ে দিল্লির সতর্ক দৃষ্টি",
      "ভারতের পররাষ্ট্র মন্ত্রণালয় জানিয়েছে পারস্পরিক সহযোগিতা ইতিবাচক হলেও জাতীয় স্বার্থ রক্ষায় কোনো আপস নয়"
    ],
    "keyPointsEn": [
      "Dhaka begins formal re-evaluation of 101 key bilateral agreements signed during Sheikh Hasina’s tenure",
      "Accords under scrutiny include transit access via Chattogram and Mongla ports to India’s Northeast states",
      "MEA affirms commitment to constructive ties while declaring India will resolutely protect its national interests"
    ],
    "category": "diplomacy",
    "categoryLabelBn": "কূটনীতি ও দ্বিপাক্ষিক চুক্তি",
    "categoryLabelEn": "Diplomacy & Strategic Pacts",
    "sentiment": "neutral",
    "sentimentReasonBn": "চুক্তি পর্যালোচনা ঘিরে ঢাকার পদক্ষেপে কিছুটা অনিশ্চয়তা তৈরি হলেও পারস্পরিক স্বার্থ সুরক্ষায় দিল্লির কূটনৈতিক অবস্থান বাস্তবসম্মত ও সুষম।",
    "sentimentReasonEn": "Reflects balanced coverage of Dhaka’s policy reassessment alongside New Delhi’s firm diplomatic resolve to protect bilateral infrastructure investments.",
    "source": {
      "name": "Zee News World",
      "bureau": "Delhi",
      "language": "English",
      "originalUrl": "https://zeenews.india.com/world/bangladesh-reviews-101-india-deals-chattogram-mongla-ports-mea-response-3072451.html",
      "scannedAt": "2026-09-21T08:00:00Z"
    },
    "publishedAt": "2026-09-21T07:30:00Z",
    "readTimeBn": "৪ মিনিট পাঠ",
    "readTimeEn": "4 min read",
    "imageUrl": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=1200&auto=format&fit=crop&q=80",
    "isLeadStory": true,
    "isTrending": true,
    "isBreaking": true,
    "tags": [
      "Zee News",
      "Diplomatic Accords",
      "101 Deals Review",
      "Chattogram Port",
      "Mongla Port",
      "MEA Delhi",
      "Sheikh Hasina"
    ]
  },
  {
    "id": "news-20260921-061",
    "slug": "telegraph-india-asian-games-women-cricket-india-thrash-bangladesh-shafali-century",
    "title": "Telegraph India: 'Shafali Verma Scores Maiden T20I Ton as India Thrash Bangladesh by 114 Runs to Reach Asian Games Final'",
    "englishTitle": "Telegraph India: 'Shafali Verma Scores Maiden T20I Ton as India Thrash Bangladesh by 114 Runs to Reach Asian Games Final'",
    "banglaTitle": "এশিয়ান গেমসের সেমিফাইনালে শেফালি বর্মার বিধ্বংসী সেঞ্চুরি, বাংলাদেশকে ১১৪ রানে হারিয়ে ফাইনালে ভারতের মেয়েরা: দ্য টেলিগ্রাফ",
    "summaryBn": "এশিয়ান গেমসে মহিলা ক্রিকেটের সেমিফাইনালে বাংলাদেশকে ১১৪ বল ও ১১৪ রানের ব্যবধানে উড়িয়ে ফাইনাল নিশ্চিত করেছে ভারতীয় মহিলা ক্রিকেট দল। উদ্বোধনী ব্যাটার শেফালি বর্মার আন্তর্জাতিক টি-টোয়েন্টি ক্যারিয়ারের প্রথম সেঞ্চুরিতে ভর করে ভারত ১৯৬ রানের পাহাড়সম রান তোলে। জবাবে দুর্দান্ত ভারতীয় স্পিন ও পেস আক্রমণের মুখে পড়ে বাংলাদেশি ব্যাটাররা মাত্র ৮২ রানে অলআউট হয়ে যায়।",
    "summaryEn": "The Telegraph India reports a dominant display by the Indian Women's Cricket team, crushing Bangladesh by 114 runs in the Asian Games semi-final. Opener Shafali Verma slammed a blistering maiden T20I century to propel India to a commanding 196, after which a disciplined bowling unit bundled out Bangladesh for just 82 runs.",
    "keyPointsBn": [
      "এশিয়ান গেমস সেমিফাইনালে শেফালি বর্মার আন্তর্জাতিক টি-টোয়েন্টি ক্যারিয়ারের প্রথম শতরান (১০৮ রান)",
      "১৯৬ রানের জয়ের লক্ষ্যে ব্যাট করতে নেমে ৮২ রানে গুটিয়ে গেল বাংলাদেশের ইনিংস",
      "ফাইনালে এশিয়ান গেমস সোনার পদকের লড়াইয়ে মুখোমুখি হবে ভারত ও শ্রীলঙ্কা"
    ],
    "keyPointsEn": [
      "Shafali Verma scripts history with maiden T20I century (108 runs) in Asian Games semi-final",
      "Chasing 197, Bangladesh women bowled out for 82 runs under tight Indian bowling attack",
      "India advance to Asian Games gold medal match against Sri Lanka"
    ],
    "category": "sports",
    "categoryLabelBn": "ক্রীড়া ও এশিয়ান গেমস",
    "categoryLabelEn": "Sports & Asian Games",
    "sentiment": "positive",
    "sentimentReasonBn": "এশিয়ান গেমসের সেমিফাইনালে ভারতীয় দলের ঐতিহাসিক জয় ও সেঞ্চুরির কারণে সংবাদের সুর অত্যন্ত ইতিবাচক ও উদযাপনী।",
    "sentimentReasonEn": "Celebratory reporting focused on landmark athletic achievement and sportsmanship excellence.",
    "source": {
      "name": "Telegraph India",
      "bureau": "Mumbai",
      "language": "English",
      "originalUrl": "https://news.google.com/rss/articles/CBMiVkFVX3lxTE5ITE1WYmYteUxrUVJKQWc1cDdQYjBIakphUDE0eVlkSUxDWDRsY1Z3bUVTczcxclBQcWxsQlNVMnBrWTdmeTNjUzk3MFdFeXVFUWJXQlZB?oc=5",
      "scannedAt": "2026-09-21T08:00:00Z"
    },
    "publishedAt": "2026-09-21T06:45:00Z",
    "readTimeBn": "৩ মিনিট পাঠ",
    "readTimeEn": "3 min read",
    "imageUrl": "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=1200&auto=format&fit=crop&q=80",
    "isTrending": true,
    "isBreaking": false,
    "tags": [
      "Telegraph India",
      "Asian Games 2026",
      "Shafali Verma",
      "Women Cricket",
      "India vs Bangladesh",
      "Mumbai Bureau"
    ]
  },
  {
    "id": "news-20260921-062",
    "slug": "amar-ujala-india-bangladesh-joint-task-force-bilateral-trade-visa",
    "title": "Amar Ujala: 'India & Bangladesh Form Joint Task Force to Accelerate Bilateral Trade and Resume 5,000 Daily Visa Clearances'",
    "englishTitle": "Amar Ujala: 'India & Bangladesh Form Joint Task Force to Accelerate Bilateral Trade and Resume 5,000 Daily Visa Clearances'",
    "banglaTitle": "দ্বিপাক্ষিক বাণিজ্য বাড়াতে ভারত-বাংলাদেশ যৌথ টাস্কফোর্স গঠন, প্রতিদিন ৫ হাজার ভিসা ছাড়পত্রের উদ্যোগ: অমর উজালা",
    "summaryBn": "ভারতের প্রখ্যাত হিন্দি দৈনিক অমর উজালা জানিয়েছে, ভারত ও বাংলাদেশের বাণিজ্য ও যোগাযোগ দ্রুত স্বাভাবিক করতে উভয় দেশ একটি বিশেষ যৌথ টাস্কফোর্স গঠনে সম্মত হয়েছে। স্থলবন্দরগুলোতে বাণিজ্যিক পণ্য পরিবহন দ্রুতকরণ এবং প্রতিদিন অন্তত ৫,০০০ মেডিকেল ও ব্যবসায়িক ভিসা প্রদানের লক্ষ্যে ভারতীয় ভিসা আবেদন কেন্দ্রগুলোতে (IVAC) জনবল ও নিরাপত্তা বাড়ানো হচ্ছে।",
    "summaryEn": "Amar Ujala reports that New Delhi and Dhaka have agreed to establish a dedicated Joint Economic Task Force to streamline bilateral commerce and port operations. To facilitate medical and business movement, Indian Visa Application Centres are expanding processing capacity to issue 5,000 visas daily.",
    "keyPointsBn": [
      "সীমান্ত বাণিজ্য জটিলতা নিরসনে ভারত ও বাংলাদেশের যৌথ অর্থনৈতিক টাস্কফোর্স গঠিত",
      "ভারতীয় ভিসা আবেদন কেন্দ্রে নিরাপত্তা জোরদার ও দৈনিক ৫,০০০ ভিসা দেওয়ার বিশেষ উদ্যোগ",
      "পেট্রাপোল-বেনাপোল ও আখাউড়া সীমান্তে পণ্যবাহী ট্রাক পারাপারে বিশেষ সহজিকরণ"
    ],
    "keyPointsEn": [
      "Joint Task Force created to address cross-border trade bottlenecks and port clearances",
      "Indian Visa Centres scale up processing to grant 5,000 daily medical and commercial visas",
      "Enhanced logistics clearance prioritized for Benapole-Petrapole and Akhaura land ports"
    ],
    "category": "trade",
    "categoryLabelBn": "সীমান্ত বাণিজ্য ও ভিসা সেবা",
    "categoryLabelEn": "Trade & Visa Facilitation",
    "sentiment": "positive",
    "sentimentReasonBn": "বাণিজ্যিক জট নিরসন ও ভিসা সুবিধা বৃদ্ধি উভয় দেশের অর্থনীতি ও সাধারণ মানুষের জন্য ইতিবাচক বার্তা বহন করে।",
    "sentimentReasonEn": "Constructive coverage highlighting concrete bilateral steps to restore economic ties and people-to-people mobility.",
    "source": {
      "name": "Amar Ujala",
      "bureau": "Delhi",
      "language": "Hindi",
      "originalUrl": "https://news.google.com/rss/articles/CBMiUkFVX3lxTE1Yc2QydThyZkg3clhNN3ZGZFFlb2l2TmpYbHoxTldGNDFDOXNBa211WWktZGxKNTBNRk9OTHQyS3FuU0l0WUd5bEc2bTAtN3Z4QWc?oc=5",
      "scannedAt": "2026-09-21T08:00:00Z"
    },
    "publishedAt": "2026-09-21T05:20:00Z",
    "readTimeBn": "৪ মিনিট পাঠ",
    "readTimeEn": "4 min read",
    "imageUrl": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "isTrending": true,
    "isBreaking": true,
    "tags": [
      "Amar Ujala",
      "Joint Task Force",
      "Bilateral Trade",
      "IVAC Visas",
      "Petrapole",
      "Delhi Bureau"
    ]
  },
  {
    "id": "news-20260921-063",
    "slug": "tv9-bangla-petrapole-gede-border-ai-cameras-scanners-under-train-security",
    "title": "TV9 Bangla: 'High-Tech AI Motion Sensors and Scanners Deployed at Petrapole & Gede Crossings to Prevent Infiltration Under Freight Cargo'",
    "englishTitle": "TV9 Bangla: 'High-Tech AI Motion Sensors and Scanners Deployed at Petrapole & Gede Crossings to Prevent Infiltration Under Freight Cargo'",
    "banglaTitle": "ট্রেনের চাকা ও কার্গোর তলায় লুকিয়ে সীমান্ত পারাপার রুখতে পেট্রাপোল ও গেদে সীমান্তে বসছে এআই থার্মাল ক্যামেরা ও স্ক্যানার: টিভি৯ বাংলা",
    "summaryBn": "টিভি৯ বাংলার বিশেষ প্রতিবেদনে জানানো হয়েছে, ভারত-বাংলাদেশ সীমান্তবর্তী গেদে ও পেট্রাপোল সমন্বিত চেকপোস্টে অত্যাধুনিক এআই মোশন সেন্সর এবং থার্মাল ক্যামেরা বসানো হচ্ছে। পণ্যবাহী ট্রেনের তলে বা মালবাহী কনটেইনারের গোপন কুঠুরিতে লুকিয়ে অবৈধ অনুপ্রবেশ ঠেকাতে বিএসএফ ও ইমিগ্রেশন কর্তৃপক্ষ যৌথভাবে এই প্রযুক্তিগত সুরক্ষা বলয় গড়ে তুলছে।",
    "summaryEn": "TV9 Bangla dispatches a report on the deployment of AI thermal motion sensors and high-speed under-carriage scanners at Gede and Petrapole border stations. The technological surveillance network is designed to detect illegal border crossings hidden inside freight train chassis and commercial containers.",
    "keyPointsBn": [
      "গেদে ও পেট্রাপোল সীমান্ত স্টেশনে বিএসএফের নতুন এআই থার্মাল ক্যামেরা ও মোশন সেন্সর স্থাপন",
      "পণ্যবাহী ট্রেন ও কনটেইনারের তলায় ঝুঁকিপূর্ণ অনুপ্রবেশ রোধে সমন্বিত স্ক্যানিং প্রযুক্তি",
      "সীমান্ত পারাপারে বাণিজ্যিক গতিশীলতা বজায় রেখে সুরক্ষাব্যবস্থা জোরদার"
    ],
    "keyPointsEn": [
      "AI motion sensors and thermal imaging cameras deployed at Gede and Petrapole border checkpoints",
      "High-speed under-carriage scanning eliminates risk of illegal passage hidden in freight trains",
      "Ensures uninterrupted border commerce while maintaining robust border security standards"
    ],
    "category": "border",
    "categoryLabelBn": "সীমান্ত নিরাপত্তা ও প্রযুক্তি",
    "categoryLabelEn": "Border Security & Technology",
    "sentiment": "neutral",
    "sentimentReasonBn": "সীমান্তে অবৈধ অনুপ্রবেশ ঠেকাতে আধুনিক প্রযুক্তির প্রয়োগ সংক্রান্ত তথ্যভিত্তিক নিরপেক্ষ প্রতিবেদন।",
    "sentimentReasonEn": "Objective report detailing technological infrastructure upgrades along strategic border transit corridors.",
    "source": {
      "name": "TV9 Bangla",
      "bureau": "Kolkata",
      "language": "Bengali",
      "originalUrl": "https://tv9bangla.com/west-bengal/gede-petrapole-ai-thermal-camera-scanner-deployment-border-security-1102948.html",
      "scannedAt": "2026-09-21T08:00:00Z"
    },
    "publishedAt": "2026-09-21T04:30:00Z",
    "readTimeBn": "৩ মিনিট পাঠ",
    "readTimeEn": "3 min read",
    "imageUrl": "/images/border-checkpost-petrapole-gede.jpg",
    "isTrending": false,
    "isBreaking": true,
    "tags": [
      "TV9 Bangla",
      "Petrapole",
      "Gede Border",
      "AI Camera",
      "BSF Vigilance",
      "Kolkata Bureau"
    ]
  },
  {
    "id": "news-20260921-064",
    "slug": "firstpost-instagram-saima-wazed-who-resignation-political-pressure",
    "title": "Firstpost Visual Dispatch: 'Saima Wazed Details Geopolitical Pressure and Administrative Violations Behind WHO Resignation'",
    "englishTitle": "Firstpost Visual Dispatch: 'Saima Wazed Details Geopolitical Pressure and Administrative Violations Behind WHO Resignation'",
    "banglaTitle": "বিশ্ব স্বাস্থ্য সংস্থার (হু) দক্ষিণ-পূর্ব এশিয়া আঞ্চলিক পরিচালকের পদ থেকে ইস্তফা প্রসঙ্গে রাজনৈতিক চাপ ও অবিচারের বিশদ তুলে ধরলেন সায়মা ওয়াজেদ: ফার্স্টপোস্ট ইনস্টাগ্রাম পোস্ট",
    "summaryBn": "ভারতের প্রভাবশালী ডিজিটাল সংবাদ মাধ্যম ফার্স্টপোস্ট (Firstpost)-এর ইনস্টাগ্রাম ভিজ্যুয়াল প্রতিবেদনে তুলে ধরা হয়েছে বিশ্ব স্বাস্থ্য সংস্থার (হু) দক্ষিণ-পূর্ব এশিয়া অঞ্চলের সাবেক পরিচালক সায়মা ওয়াজেদের পদত্যাগ সংক্রান্ত বক্তব্য। ক্ষমতাচ্যুত প্রধানমন্ত্রী শেখ হাসিনার কন্যা সায়মা ওয়াজেদ জানান, রাজনৈতিক উদ্দেশ্যপ্রণোদিত চাপ এবং ন্যায়সঙ্গত প্রশাসনিক প্রক্রিয়া লঙ্ঘনের কারণেই তিনি দায়িত্ব ছাড়তে বাধ্য হয়েছেন।",
    "summaryEn": "In a featured visual dispatch on Instagram, Firstpost highlights the official testimony of Saima Wazed following her resignation as Regional Director of the World Health Organization (WHO) for South-East Asia. She detailed sustained political pressures alongside procedural lapses that compromised her mandate.",
    "keyPointsBn": [
      "হু-এর দক্ষিণ-পূর্ব এশিয়া আঞ্চলিক কার্যালয়ে রাজনৈতিক হস্তক্ষেপে গভীর উদ্বেগ প্রকাশ",
      "ন্যায্য আইনি ও প্রাতিষ্ঠানিক প্রক্রিয়া ক্ষুণ্ণ হওয়ার অভিযোগ তুলে পদত্যাগের পটভূমি ব্যাখ্যা",
      "দক্ষিণ এশিয়ার আঞ্চলিক মানসিক স্বাস্থ্য ও জনস্বাস্থ্য কর্মসূচির ভবিষ্যৎ নিয়ে আন্তর্জাতিক মহলে আলোচনা"
    ],
    "keyPointsEn": [
      "Saima Wazed outlines targeted administrative and political pressure culminating in WHO regional exit",
      "Criticizes abandonment of standard multilateral due process amid political shifts",
      "International public health observers evaluate impact on regional health frameworks"
    ],
    "category": "diplomacy",
    "categoryLabelBn": "আন্তর্জাতিক কূটনীতি ও স্বাস্থ্য",
    "categoryLabelEn": "International Diplomacy & Health",
    "sentiment": "negative",
    "sentimentReasonBn": "আন্তর্জাতিক সংস্থায় রাজনৈতিক চাপ এবং নীতিগত প্রক্রিয়া লঙ্ঘনের অভিযোগ তুলে ধরায় প্রতিবেদনের সুর সমালোচনামূলক।",
    "sentimentReasonEn": "Critical dispatch spotlighting geopolitical interference in multilateral healthcare institutions.",
    "source": {
      "name": "Firstpost (Instagram)",
      "bureau": "Delhi",
      "language": "English",
      "originalUrl": "https://news.google.com/rss/articles/CBMiUkFVX3lxTE93Qk1Bd1RRTDhmWVZibU1XaDgtU0JyZEdSYTJaeWFvTDhRMDZUdDZ5cHJfa1p0azVmdlVvNXc0amdGNkFyUWtlLWNTMXNCTkZMSFE?oc=5",
      "scannedAt": "2026-09-21T08:00:00Z"
    },
    "publishedAt": "2026-09-21T03:45:00Z",
    "readTimeBn": "১ মিনিট পোস্ট",
    "readTimeEn": "1 min read",
    "imageUrl": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&auto=format&fit=crop&q=80",
    "isTrending": true,
    "isBreaking": false,
    "tags": [
      "Firstpost",
      "Instagram Post",
      "Visual Journalism",
      "Saima Wazed",
      "WHO Exit",
      "Delhi Bureau"
    ]
  },
  {
    "id": "news-20260921-065",
    "slug": "ndtv-assam-himanta-biswa-sarma-adani-3200-mw-power-grid-bangladesh-export",
    "title": "NDTV: 'Assam CM Himanta Biswa Sarma Lays Foundation for 3,200 MW Power Grid Project to Boost Regional Energy Connectivity'",
    "englishTitle": "NDTV: 'Assam CM Himanta Biswa Sarma Lays Foundation for 3,200 MW Power Grid Project to Boost Regional Energy Connectivity'",
    "banglaTitle": "আসামের কোকরাঝাড়ে ৩,২০০ মেগাওয়াট বিদ্যুৎ কেন্দ্র স্থাপন প্রকল্প উদ্বোধন করলেন মুখ্যমন্ত্রী হিমন্ত বিশ্ব শর্মা, আঞ্চলিক বিদ্যুৎ বাণিজ্যে গতি: এনডিটিভি",
    "summaryBn": "এনডিটিভি জানিয়েছে, আসামের মুখ্যমন্ত্রী হিমন্ত বিশ্ব শর্মা কোকরাঝাড়ে ৩,২০০ মেগাওয়াট ক্ষমতাসম্পন্ন আদানি পাওয়ার গ্রিড প্রকল্পের ভিত্তিপ্রস্তর স্থাপন করেছেন। এই মেগা বিদ্যুৎ প্রকল্পটি ভারতের উত্তর-পূর্বাঞ্চলে কম খরচে নিরবচ্ছিন্ন বিদ্যুৎ সরবরাহের পাশাপাশি প্রতিবেশী বাংলাদেশের সাথে আঞ্চলিক বিদ্যুৎ ক্রয়-বিক্রয় চুক্তি বাস্তবায়নে প্রধান কেন্দ্র হিসেবে কাজ করবে।",
    "summaryEn": "NDTV reports that Assam Chief Minister Himanta Biswa Sarma laid the foundation stone for a major 3,200 MW power generation project in Kokrajhar. The initiative aims to lower average power production costs in Northeast India while serving as a strategic hub for subregional power trade with Bangladesh.",
    "keyPointsBn": [
      "আসামের কোকরাঝাড়ে ৩,২০০ মেগাওয়াট মেগা থার্মাল ও গ্রিড বিদ্যুৎ প্রকল্পের ভিত্তিপ্রস্তর স্থাপন",
      "উত্তর-পূর্ব ভারতে বিদ্যুৎ উৎপাদন খরচ কমানো ও গ্রিড স্থিতিশীলতা বৃদ্ধির লক্ষ্য",
      "বাংলাদেশের সাথে বিদ্যুৎ বিনিময় চুক্তি ও উপ-আঞ্চলিক শক্তি সুরক্ষায় প্রকল্পটির তাৎপর্য"
    ],
    "keyPointsEn": [
      "Assam CM lays foundation for 3,200 MW thermal power grid in Kokrajhar",
      "Aims to reduce regional power generation costs and improve grid reliability across NE India",
      "Positions Assam as a core hub for subregional power transmission to Bangladesh"
    ],
    "category": "economy",
    "categoryLabelBn": "অর্থনীতি ও বিদ্যুৎ বাণিজ্য",
    "categoryLabelEn": "Economy & Power Infrastructure",
    "sentiment": "positive",
    "sentimentReasonBn": "উত্তর-পূর্ব ভারতের অর্থনৈতিক বিকাশ ও আঞ্চলিক বিদ্যুৎ অবকাঠামো জোরদারের কারণে সংবাদের সুর উন্নয়নমুখী।",
    "sentimentReasonEn": "Positive economic coverage emphasizing infrastructure expansion and regional energy trade opportunities.",
    "source": {
      "name": "NDTV",
      "bureau": "Assam",
      "language": "English",
      "originalUrl": "https://www.ndtv.com/india-news/himanta-sarma-lays-foundation-stone-for-adani-powers-3-200-mw-assam-project-12072008",
      "scannedAt": "2026-09-21T08:00:00Z"
    },
    "publishedAt": "2026-09-21T02:15:00Z",
    "readTimeBn": "৪ মিনিট পাঠ",
    "readTimeEn": "4 min read",
    "imageUrl": "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&auto=format&fit=crop&q=80",
    "isTrending": false,
    "isBreaking": false,
    "tags": [
      "NDTV",
      "Himanta Biswa Sarma",
      "Assam Power",
      "Kokrajhar Grid",
      "Energy Diplomacy",
      "Assam Bureau"
    ]
  },
  {
    "id": "news-20260921-066",
    "slug": "tripura-times-agartala-akhaura-rail-freight-subroom-icp-review",
    "title": "Tripura Times: 'Tripura Chief Minister Reviews Agartala-Akhaura Freight Operations & Sabroom ICP Infrastructure for North-East Cargo'",
    "englishTitle": "Tripura Times: 'Tripura Chief Minister Reviews Agartala-Akhaura Freight Operations & Sabroom ICP Infrastructure for North-East Cargo'",
    "banglaTitle": "আগরতলা-আখাউড়া ট্রানজিট রেল রুট ও সাব্রুম সমন্বিত চেকপোস্টের পণ্য চলাচল ব্যবস্থা পরিদর্শন করলেন ত্রিপুরার মুখ্যমন্ত্রী: ত্রিপুরা টাইমস",
    "summaryBn": "ত্রিপুরা টাইমস জানিয়েছে, ত্রিপুরার মুখ্যমন্ত্রী আগরতলা-আখাউড়া আন্তঃসীমান্ত রেললাইন এবং সাব্রুম সমন্বিত স্থলবন্দরে (ICP) পণ্য খালাস কার্যক্রম পর্যালোচনা করেছেন। চট্টগ্রাম সমুদ্রবন্দর ব্যবহার করে ত্রিপুরাসহ সমগ্র উত্তর-পূর্ব ভারতে পণ্য আনা-নেওয়ার খরচ ও সময় ৫০% কমাতে এই ট্রানজিট করিডোরকে পূর্ণাঙ্গ চালুর প্রস্তুতি চলছে।",
    "summaryEn": "Tripura Times reports that the Chief Minister of Tripura conducted an inspection of the Agartala-Akhaura international rail transit link and Sabroom Integrated Checkpost. The infrastructure corridor is targeted at reducing freight delivery timelines and transportation costs to the North-East via Chattogram port.",
    "keyPointsBn": [
      "আগরতলা-আখাউড়া আন্তঃসীমান্ত রেললাইনে পরীক্ষামূলক পণ্যবাহী ট্রেন চলাচলের গতি পর্যালোচনা",
      "সাব্রুম সমন্বিত চেকপোস্টে গুদামঘর, কাস্টমস সেড ও মাল্টি-মোডাল কার্গো টার্মিনাল তদারকি",
      "চট্টগ্রাম বন্দর ব্যবহারের মাধ্যমে উত্তর-পূর্ব ভারতে দ্রুত ও সাশ্রয়ী পণ্য পরিবহন ব্যবস্থা"
    ],
    "keyPointsEn": [
      "Inspection of trial freight operations along Agartala-Akhaura cross-border railway",
      "Review of warehouse, customs shed, and cargo handling facilities at Sabroom ICP",
      "Transit link expected to drop North-East logistics costs by 50% via Chattogram port access"
    ],
    "category": "trade",
    "categoryLabelBn": "সীমান্ত ট্রানজিট ও অবকাঠামো",
    "categoryLabelEn": "Border Transit & Trade Logistics",
    "sentiment": "positive",
    "sentimentReasonBn": "ত্রিপুরা ও উত্তর-পূর্ব ভারতের লজিস্টিক সক্ষমতা বৃদ্ধির পদক্ষেপ হওয়ায় খবরের সুর ইতিবাচক।",
    "sentimentReasonEn": "Constructive regional dispatch focusing on infrastructure readiness and trade optimization.",
    "source": {
      "name": "Tripuratimes",
      "bureau": "Tripura",
      "language": "English",
      "originalUrl": "https://news.google.com/rss/articles/CBMiUkFVX3lxTE1Yc2QydThyZkg3clhNN3ZGZFFlb2l2TmpYbHoxTldGNDFDOXNBa211WWktZGxKNTBNRk9OTHQyS3FuU0l0WUd5bEc2bTAtN3Z4QWc?oc=5",
      "scannedAt": "2026-09-21T08:00:00Z"
    },
    "publishedAt": "2026-09-21T01:50:00Z",
    "readTimeBn": "৩ মিনিট পাঠ",
    "readTimeEn": "3 min read",
    "imageUrl": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&auto=format&fit=crop&q=80",
    "isTrending": false,
    "isBreaking": false,
    "tags": [
      "Tripura Times",
      "Agartala Akhaura",
      "Sabroom ICP",
      "North East Logistics",
      "Tripura Bureau"
    ]
  },
  {
    "id": "news-20260921-067",
    "slug": "aaj-tak-youtube-bangladesh-500-ton-hilsa-export-festive-trade",
    "title": "Aaj Tak Video: 'Bangladesh Clears 500 Metric Tonnes of Hilsa Fish Exports to India Ahead of Festive Durga Puja Season'",
    "englishTitle": "Aaj Tak Video: 'Bangladesh Clears 500 Metric Tonnes of Hilsa Fish Exports to India Ahead of Festive Durga Puja Season'",
    "banglaTitle": "শারদীয় উৎসব ঘিরে ভারতে ৫০০ টন ইলিশ রপ্তানির বিশেষ ছাড়পত্র দিল বাংলাদেশ, পেট্রাপোল বন্দরে হিমায়িত ট্রাকে ব্যস্ততা: আজ তক ভিডিও রিপোর্ট",
    "summaryBn": "আজ তক-এর বিশেষ ভিডিও প্রতিবেদনে জানানো হয়েছে, আসন্ন দুর্গাপূজা উপলক্ষে ভারতে ৫০০ মেট্রিক টন পদ্মার ইলিশ রপ্তানির বিশেষ অনুমোদন দিয়েছে বাংলাদেশ। পেট্রাপোল-বেনাপোল সমন্বিত স্থলবন্দরে বিশেষ কাস্টমস গ্রিন চ্যানেল তৈরি করে হিমায়িত খাদ্যবাহী ট্রাক পারাপার দ্রুত করা হচ্ছে।",
    "summaryEn": "Aaj Tak's frontline video dispatch covers Dhaka's decision to permit 500 metric tonnes of Hilsa fish exports to India ahead of Durga Puja. Border checkpoints at Petrapole are operating dedicated green channels to accelerate refrigerated transit.",
    "keyPointsBn": [
      "আসন্ন দুর্গাপূজা উপলক্ষে বাংলাদেশ থেকে ৫০০ টন ইলিশ আমদানির বিশেষ অনুমতি কার্যকর",
      "বনগাঁ ও কলকাতার পাইকারি মাছ বাজারে দামের ঊর্ধ্বগতি কিছুটা স্বাভাবিক হওয়ার প্রত্যাশা",
      "পেট্রাপোল-বেনাপোল সীমান্তে কাস্টমস ও খাদ্য নিরাপত্তা পরীক্ষার সমন্বিত উদ্যোগ"
    ],
    "keyPointsEn": [
      "Dhaka issues special waiver permitting export of 500 tonnes of premium Hilsa for festive demand",
      "Wholesale seafood markets in Kolkata and North 24 Parganas register immediate festive optimism",
      "Integrated Land Port Petrapole prioritizes green-channel clearance for cross-border refrigerated cargo"
    ],
    "category": "trade",
    "categoryLabelBn": "সীমান্ত বাণিজ্য ও খাদ্য সংস্কৃতি",
    "categoryLabelEn": "Cross-Border Trade & Food Diplomacy",
    "sentiment": "positive",
    "sentimentReasonBn": "শারদীয় উৎসবের প্রাক্কালে ইলিশ বাণিজ্যের অনুমতি দুই দেশের জনসাধারণের মাঝে সাংস্কৃতিক সৌহার্দ্য ও বাণিজ্যিক আদান-প্রদানকে গতিশীল করেছে।",
    "sentimentReasonEn": "Positive reporting celebrating cultural bridge-building, cross-border seasonal trade, and bilateral economic cooperation.",
    "source": {
      "name": "Aaj Tak (YouTube)",
      "bureau": "Delhi",
      "language": "Hindi",
      "originalUrl": "https://news.google.com/rss/articles/CBMiVkFVX3lxTE1tZC0xZXBSVHpFWFEwLXhrM1V0QmxPcnNmQWZZNk1GSThzNXhtQlhNOXlyTlh4U3VKeFZyUTl4NjVfY3RoTE1fMmJFWWpNZnRnMUEybjBB?oc=5",
      "scannedAt": "2026-09-21T08:00:00Z"
    },
    "publishedAt": "2026-09-21T01:10:00Z",
    "readTimeBn": "৪ মিনিট ভিডিও",
    "readTimeEn": "4 min video",
    "imageUrl": "/images/hilsa-fish-market-trade.jpg",
    "isTrending": true,
    "isBreaking": true,
    "tags": [
      "Aaj Tak",
      "YouTube Video",
      "ভিডিও রিপোর্ট",
      "Hilsa Export",
      "Festive Trade",
      "Petrapole",
      "Delhi Bureau"
    ]
  },
  {
    "id": "news-20260921-068",
    "slug": "assam-tribune-awami-league-death-sentence-tribunal-verdict-reaction",
    "title": "The Assam Tribune: 'Awami League Rejects ICT Verdict Sentencing 7 Functionaries to Death, Terms Trial Politically Motivated'",
    "englishTitle": "The Assam Tribune: 'Awami League Rejects ICT Verdict Sentencing 7 Functionaries to Death, Terms Trial Politically Motivated'",
    "banglaTitle": "ঢাকায় ট্রাইব্যুনাল কর্তৃক আওয়ামী লীগের ৭ নেতাকে মৃত্যুদণ্ড প্রদানের রায়কে একপেশে ও রাজনৈতিক উদ্দেশ্যপ্রণোদিত আখ্যা দিল আওয়ামী লীগ: দ্য আসাম ট্রাইব্যুনাল",
    "summaryBn": "দ্য আসাম ট্রাইব্যুনাল জানিয়েছে, ঢাকার আন্তর্জাতিক অপরাধ ট্রাইব্যুনাল কর্তৃক আওয়ামী লীগের সাত সাবেক মন্ত্রী ও শীর্ষ নেতাকে মৃত্যুদণ্ড দেওয়ার রায়কে একপেশে ও রাজনৈতিক উদ্দেশ্যপ্রণোদিত বলে প্রত্যাখ্যান করেছে ক্ষমতাচ্যুত দলটি। ভারতের উত্তর-পূর্বাঞ্চলীয় সীমান্তে নিরাপত্তা সংস্থাগুলো সার্বিক পরিস্থিতি পর্যবেক্ষণে সতর্ক রয়েছে।",
    "summaryEn": "The Assam Tribune reports that the Awami League has officially rejected the International Crimes Tribunal verdict sentencing seven former ministers and senior party functionaries to death, calling the proceedings one-sided and politically driven.",
    "keyPointsBn": [
      "ঢাকার আন্তর্জাতিক অপরাধ ট্রাইব্যুনালের রায়কে বেআইনি ও রাজনৈতিক প্রতিহিংসামূলক বলে বিবৃতি",
      "সাত সাবেক মন্ত্রী ও আওয়ামী লীগ নেতার অনুপস্থিতিতে ফাঁসির আদেশ প্রদান",
      "সীমান্তবর্তী আসাম ও মেঘালয় সীমান্তে বিএসএফের নজরদারি জোরদার"
    ],
    "keyPointsEn": [
      "Awami League issues formal statement terming ICT death sentences politically motivated",
      "Seven former Hasina-era ministers sentenced in absentia by tribunal in Dhaka",
      "BSF maintains heightened alertness across Assam and Meghalaya frontier regions"
    ],
    "category": "politics",
    "categoryLabelBn": "রাজনীতি ও আইনি প্রতিক্রিয়া",
    "categoryLabelEn": "Politics & Legal Dispatches",
    "sentiment": "negative",
    "sentimentReasonBn": "রাজনৈতিক সংঘাত ও ফাঁসির রায়ের আইনগত প্রতিক্রিয়া সম্পর্কিত প্রতিবেদন হওয়ায় সংবাদের সুর উত্তপ্ত।",
    "sentimentReasonEn": "Disquieting political report covering judicial sentences and party reactions.",
    "source": {
      "name": "The Assam Tribune",
      "bureau": "Assam",
      "language": "English",
      "originalUrl": "https://news.google.com/rss/articles/CBMitwFBVV95cUxOZGNYUmhTVTJaRF9VU2FxckpjRHBQc0RHOEo0M1hESkJsblU1UmR4SVRaenUzanZQbzNUVk1ndG9vR3JqQ0MwYXpjMEl4V3RxSVY0WVhMYi1fTXlWUW5udjR4SEl6LUIwOVVDRzZXSUVWZm1acnVGdlRfTWw5WUg4dE9KTHN3bVVSVWk0YTc2ZzhQdlhFZkxhZGFFd2IxeU1IVXhhOGhwV1NPRFVXUm9seW1XemdEeEHSAbwBQVVfeXFMTmk4NHNsckdiQlVjWkVjRHR5cFZ1Rk13NUltNU5mbTNmenRWWTQzZ05qTmk4LU16Z2VsaFVsQVNpcGQzZVJmLW4xVlFtbFlfMFcyVFZLU0NvdV9HXzNjRm1OWjBISHpYMDlqV0IyeTJYOFYyaDFHU3RRS0tFVW5rVjQwVzJkeC1NVkxlUU5VVjUyaWROdmxYbDJIVEQ2MXVCWkR3enV1Qnk0UTBsbVhrckxRNXlTb3ZJOTFwQlE?oc=5",
      "scannedAt": "2026-09-21T08:00:00Z"
    },
    "publishedAt": "2026-09-20T23:40:00Z",
    "readTimeBn": "৪ মিনিট পাঠ",
    "readTimeEn": "4 min read",
    "imageUrl": "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&auto=format&fit=crop&q=80",
    "isTrending": false,
    "isBreaking": false,
    "tags": [
      "The Assam Tribune",
      "Awami League",
      "ICT Verdict",
      "Assam Bureau"
    ]
  },
  {
    "id": "news-20260921-069",
    "slug": "bartaman-patrika-bsf-north-bengal-siliguri-corridor-chickens-neck-surveillance",
    "title": "Bartaman Patrika: 'BSF North Bengal Frontier Heightens Border Surveillance Across Siliguri Corridor Following Intelligence Alerts'",
    "englishTitle": "Bartaman Patrika: 'BSF North Bengal Frontier Heightens Border Surveillance Across Siliguri Corridor Following Intelligence Alerts'",
    "banglaTitle": "শিলিগুড়ি করিডোর (চিকেনস নেক) ও উত্তরবঙ্গ সীমান্তে বিএসএফের বাড়তি নজরদারি, কাঁটাতারে ড্রোন ও আধুনিক রাডার টহল: বর্তমান পত্রিকা",
    "summaryBn": "বর্তমান পত্রিকার প্রতিবেদনে উঠে এসেছে, দেশের কৌশলগতভাবে অতি সংবেদনশীল শিলিগুড়ি করিডোর বা ‘চিকেনস নেক’ এবং উত্তরবঙ্গ সীমান্তে বিএসএফের উত্তরবঙ্গ ফ্রন্টিয়ার পাহারা দ্বিগুণ করেছে। সীমান্ত অতিক্রম করে অনুপ্রবেশ ও চোরাচালান ঠেকাতে রাতে ড্রোন ক্যামেরা, হ্যান্ডহেল্ড থার্মাল ইমেজার ও আধুনিক নাইট-ভিশন ডিভাইস ব্যবহার করা হচ্ছে।",
    "summaryEn": "Bartaman Patrika reports that the BSF North Bengal Frontier has significantly reinforced operational vigilance along the strategically vital Siliguri Corridor ('Chicken's Neck'). Border units are employing thermal imaging devices and drone patrols to counter illegal border activities.",
    "keyPointsBn": [
      "শিলিগুড়ি করিডোর (‘চিকেনস নেক’) অঞ্চলে বিএসএফের অতিরিক্ত কোম্পানি মোতায়েন",
      "রাতের বেলা কাঁটাতার সংলগ্ন এলাকায় নাইট ভিশন ক্যামেরা ও ড্রোনের মাধ্যমে টহল",
      "সীমান্তবর্তী বাসিন্দা ও স্থানীয় প্রশাসনের সাথে সুরক্ষা সমন্বয় বৈঠক"
    ],
    "keyPointsEn": [
      "Additional BSF companies deployed across the sensitive Siliguri Corridor sector",
      "Night surveillance enhanced using drones and handheld thermal imaging equipment",
      "Coordination meetings organized with border villagers and local civil administration"
    ],
    "category": "border",
    "categoryLabelBn": "সীমান্ত নিরাপত্তা ও টহল",
    "categoryLabelEn": "Border Patrol & Vigilance",
    "sentiment": "neutral",
    "sentimentReasonBn": "সীমান্তের কৌশলগত সুরক্ষা জোরদার সংক্রান্ত বস্তুনিষ্ঠ বিবরণ।",
    "sentimentReasonEn": "Objective security reporting focused on strategic corridor defense.",
    "source": {
      "name": "Bartaman Patrika",
      "bureau": "Siliguri",
      "language": "Bengali",
      "originalUrl": "https://news.google.com/rss/articles/CBMisAFBVV95cUxOcTZwOFRhOUxLd2xicDRsZ2pQNm5sZVhJUlZZZEtVd2t6MnhlQ0xQbmx2S3lWNHp5eXlhWTRQZHR4bVh1ZkVvY3hIUkZ2NWg2U2p6dWZ1OHl1M2psb1Fic1lYQjQyTkVub210eEFWN0Z6QjBqVk5vT2cxaE1vS0V3aE1rYmN5aE0zZzZzRk13X1Q3SkZtN3h0U09zSFlxdk1xVnZDbTFNb01n0gEA?oc=5",
      "scannedAt": "2026-09-21T08:00:00Z"
    },
    "publishedAt": "2026-09-20T22:15:00Z",
    "readTimeBn": "৩ মিনিট পাঠ",
    "readTimeEn": "3 min read",
    "imageUrl": "https://images.unsplash.com/photo-1508847154043-be5407fcaa5a?w=1200&auto=format&fit=crop&q=80",
    "isTrending": false,
    "isBreaking": false,
    "tags": [
      "Bartaman Patrika",
      "Siliguri Corridor",
      "Chickens Neck",
      "BSF Patrol",
      "Siliguri Bureau"
    ]
  },
  {
    "id": "news-20260921-070",
    "slug": "anandabazar-kolkata-international-film-festival-bangladeshi-indie-cinema-retrospective",
    "title": "Anandabazar Patrika: 'Kolkata International Film Festival Announces Special Section Dedicated to Independent Bangladeshi Cinema & Shared Heritage'",
    "englishTitle": "Anandabazar Patrika: 'Kolkata International Film Festival Announces Special Section Dedicated to Independent Bangladeshi Cinema & Shared Heritage'",
    "banglaTitle": "কলকাতা আন্তর্জাতিক চলচ্চিত্র উৎসবে বাংলাদেশের নতুন ধারার সিনেমার বিশেষ প্রদর্শনী, দুই বাংলার চলচ্চিত্র চর্চায় নতুন সংযোগ: আনন্দবাজার পত্রিকা",
    "summaryBn": "আনন্দবাজার পত্রিকা জানিয়েছে, আসন্ন কলকাতা আন্তর্জাতিক চলচ্চিত্র উৎসবে (KIFF) ওপার বাংলার স্বাধীন ও বিকল্প ধারার চলচ্চিত্র নিয়ে একটি বিশেষ কান্ট্রি ফোকাস বিভাগ চালু করার সিদ্ধান্ত নেওয়া হয়েছে। দুই বাংলার যৌথ প্রযোজনা, সাহিত্যভিত্তিক চিত্রনাট্য ও আবহ সংগীতের ঐতিহাসিক যোগাযোগ ফুটিয়ে তুলতে যৌথ প্যানেল আলোচনার আয়োজন থাকবে।",
    "summaryEn": "Anandabazar Patrika reports that the upcoming Kolkata International Film Festival will host a dedicated showcase highlighting contemporary independent cinema from Bangladesh. The cultural initiative aims to foster artistic dialogue and cross-border creative collaborations.",
    "keyPointsBn": [
      "কলকাতা আন্তর্জাতিক চলচ্চিত্র উৎসবে বাংলাদেশের স্বাধীন নির্মাতাদের নির্বাচিত ছবির বিশেষ ক্যাটালগ",
      "দুই বাংলার প্রখ্যাত পরিচালক ও সাংবাদিকদের অংশগ্রহণে যৌথ প্যানেল আলোচনা",
      "সাংস্কৃতিক আদান-প্রদান ও সিনেমা পরিবেশনায় নতুন বাণিজ্যিক সম্ভাবনার উন্মোচন"
    ],
    "keyPointsEn": [
      "Special catalog of independent films from Bangladesh selected for KIFF showcase",
      "Joint panel discussions featuring directors, screenwriters, and film scholars from Bengal",
      "Unlocks new distribution avenues and cross-border cultural exchange in cinema"
    ],
    "category": "culture",
    "categoryLabelBn": "সংস্কৃতি ও চলচ্চিত্র উৎসব",
    "categoryLabelEn": "Culture & Film Festival",
    "sentiment": "positive",
    "sentimentReasonBn": "দুই বাংলার শিল্প-সংস্কৃতির মেলবন্ধন ও সৌহার্দ্য প্রকাশের কারণে সংবাদের মান মানবিক ও ইতিবাচক।",
    "sentimentReasonEn": "Heartwarming cultural coverage highlighting shared artistic heritage and film dialogue.",
    "source": {
      "name": "Anandabazar Patrika",
      "bureau": "Kolkata",
      "language": "Bengali",
      "originalUrl": "https://www.anandabazar.com/entertainment/kolkata-international-film-festival-special-retrospective-on-bangladeshi-cinema-dgtl/cid/1549832",
      "scannedAt": "2026-09-21T08:00:00Z"
    },
    "publishedAt": "2026-09-20T21:00:00Z",
    "readTimeBn": "৩ মিনিট পাঠ",
    "readTimeEn": "3 min read",
    "imageUrl": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1200&auto=format&fit=crop&q=80",
    "isTrending": false,
    "isBreaking": false,
    "tags": [
      "Anandabazar Patrika",
      "KIFF Kolkata",
      "Bangladeshi Cinema",
      "Shared Heritage",
      "Kolkata Bureau"
    ]
  }
,
  {
    "id": "news-20260920-057",
    "slug": "zee-news-bangladesh-reviews-101-hasina-era-deals-delhi-protect-interests",
    "title": "Zee News: 'Bangladesh Reviews 101 Hasina-Era Deals; Delhi Asserts Resolute Commitment to Safeguard National Interests'",
    "englishTitle": "Zee News: 'Bangladesh Reviews 101 Hasina-Era Deals; Delhi Asserts Resolute Commitment to Safeguard National Interests'",
    "banglaTitle": "‘হাসিনা আমলে স্বাক্ষরিত ১০১টি দ্বিপাক্ষিক চুক্তি পুনর্মূল্যায়ন করছে ঢাকা; জাতীয় স্বার্থ রক্ষায় কঠোর বার্তা ভারতের’: জি নিউজ",
    "summaryBn": "ভারতের শীর্ষস্থানীয় গণমাধ্যম জি নিউজ জানিয়েছে, শেখ হাসিনার ১৫ বছরের শাসনামলে ভারতের সাথে স্বাক্ষরিত ১০১টি দ্বিপাক্ষিক চুক্তি ও সমঝোতা স্মারক পুঙ্খানুপুঙ্খ পুনর্মূল্যায়ন করার প্রক্রিয়া শুরু করেছে ঢাকা। এর মধ্যে চট্টগ্রাম ও মংলা সমুদ্রবন্দর ব্যবহার করে ভারতের উত্তর-পূর্বাঞ্চলে পণ্য পরিবহন, আন্তঃসীমান্ত রেল সংযোগ এবং জ্বালানি সঞ্চালন চুক্তি অন্তর্ভুক্ত। ভারতের পররাষ্ট্র মন্ত্রণালয় (এমইএ) স্পষ্ট জানিয়ে দিয়েছে যে, নিজেদের সার্বভৌম কৌশলগত ও বাণিজ্যিক স্বার্থ সুরক্ষায় দিল্লি প্রয়োজনীয় যেকোনো পদক্ষেপ গ্রহণ করবে।",
    "summaryEn": "Zee News reports that Bangladesh has initiated a comprehensive review of 101 bilateral treaties, accords, and memoranda of understanding signed during the 15-year tenure of ousted Prime Minister Sheikh Hasina. The agreements under scrutiny encompass transshipment rights through Chattogram and Mongla ports for India’s landlocked Northeast, cross-border energy grids, and rail connectivity. India’s Ministry of External Affairs responded firmly, underscoring that New Delhi will take all necessary measures to safeguard its core strategic and commercial interests.",
    "keyPointsBn": [
      "হাসিনা আমলে ভারতের সাথে স্বাক্ষরিত ১০১টি গুরুত্বপূর্ণ দ্বিপাক্ষিক চুক্তি পুনর্মূল্যায়ন করছে ঢাকা",
      "চট্টগ্রাম ও মংলা বন্দর ব্যবহার এবং উত্তর-পূর্বাঞ্চলীয় ট্রানজিট সুবিধার ভবিষ্যত নিয়ে দিল্লির সতর্ক দৃষ্টি",
      "ভারতের পররাষ্ট্র মন্ত্রণালয় জানিয়েছে পারস্পরিক সহযোগিতা ইতিবাচক হলেও জাতীয় স্বার্থ রক্ষায় কোনো আপস নয়"
    ],
    "keyPointsEn": [
      "Dhaka begins formal re-evaluation of 101 key bilateral agreements signed during Sheikh Hasina’s tenure",
      "Accords under scrutiny include transit access via Chattogram and Mongla ports to India’s Northeast states",
      "MEA affirms commitment to constructive ties while declaring India will resolutely protect its national interests"
    ],
    "category": "diplomacy",
    "categoryLabelBn": "কূটনীতি ও দ্বিপাক্ষিক চুক্তি",
    "categoryLabelEn": "Diplomacy & Strategic Pacts",
    "sentiment": "neutral",
    "sentimentReasonBn": "চুক্তি পর্যালোচনা ঘিরে ঢাকার পদক্ষেপে কিছুটা অনিশ্চয়তা তৈরি হলেও পারস্পরিক স্বার্থ সুরক্ষায় দিল্লির কূটনৈতিক অবস্থান বাস্তবসম্মত ও সুষম।",
    "sentimentReasonEn": "Reflects balanced coverage of Dhaka’s policy reassessment alongside New Delhi’s firm diplomatic resolve to protect bilateral infrastructure investments.",
    "source": {
      "name": "Zee News World",
      "bureau": "Delhi",
      "language": "English",
      "originalUrl": "https://zeenews.india.com/world/bangladesh-reviews-101-india-deals-chattogram-mongla-ports-mea-response-3072451.html",
      "scannedAt": "2026-09-20T17:00:00Z"
    },
    "publishedAt": "2026-09-20T09:34:00Z",
    "readTimeBn": "৪ মিনিট পাঠ",
    "readTimeEn": "4 min read",
    "imageUrl": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=1200&auto=format&fit=crop&q=80",
    "isLeadStory": true,
    "isTrending": true,
    "isBreaking": true,
    "tags": [
      "Zee News",
      "Diplomatic Accords",
      "101 Deals Review",
      "Chattogram Port",
      "Mongla Port",
      "MEA Delhi",
      "Sheikh Hasina"
    ]
  },
  {
    "id": "news-20260920-058",
    "slug": "firstpost-instagram-saima-wazed-who-resignation-political-pressure",
    "title": "Firstpost Visual Dispatch: 'Saima Wazed Details Political Pressure and Due Process Failures Behind WHO Regional Resignation'",
    "englishTitle": "Firstpost Visual Dispatch: 'Saima Wazed Details Political Pressure and Due Process Failures Behind WHO Regional Resignation'",
    "banglaTitle": "বিশ্ব স্বাস্থ্য সংস্থার (হু) দক্ষিণ-পূর্ব এশিয়া আঞ্চলিক পরিচালকের পদ থেকে ইস্তফা প্রসঙ্গে রাজনৈতিক চাপ ও অবিচারের বিশদ তুলে ধরলেন সায়মা ওয়াজেদ: ফার্স্টপোস্ট ইনস্টাগ্রাম পোস্ট",
    "summaryBn": "ভারতের প্রভাবশালী ডিজিটাল সংবাদ মাধ্যম ফার্স্টপোস্ট (Firstpost)-এর ইনস্টাগ্রাম ভিজ্যুয়াল প্রতিবেদনে তুলে ধরা হয়েছে বিশ্ব স্বাস্থ্য সংস্থার (হু) দক্ষিণ-পূর্ব এশিয়া অঞ্চলের সাবেক পরিচালক সায়মা ওয়াজেদের পদত্যাগ সংক্রান্ত বক্তব্য। ক্ষমতাচ্যুত প্রধানমন্ত্রী শেখ হাসিনার কন্যা সায়মা ওয়াজেদ জানান, রাজনৈতিক উদ্দেশ্যপ্রণোদিত চাপ এবং ন্যায়সঙ্গত প্রশাসনিক প্রক্রিয়া লঙ্ঘনের কারণেই তিনি দায়িত্ব ছাড়তে বাধ্য হয়েছেন। তাঁর মেয়াদে মানসিক স্বাস্থ্য ও জনস্বাস্থ্যে গৃহীত উদ্যোগগুলোর ভবিষ্যৎ নিয়ে বিশ্ব পরিমণ্ডলে উদ্বেগ তৈরি হয়েছে।",
    "summaryEn": "In a featured visual dispatch on Instagram, Firstpost highlights the official testimony of Saima Wazed following her resignation as Regional Director of the World Health Organization (WHO) for South-East Asia. The daughter of former Prime Minister Sheikh Hasina detailed sustained geopolitical and political pressures alongside procedural lapses that compromised her mandate, sparking wider international debate on the politicization of multilateral healthcare institutions.",
    "keyPointsBn": [
      "হু-এর দক্ষিণ-পূর্ব এশিয়া আঞ্চলিক কার্যালয়ে রাজনৈতিক হস্তক্ষেপে গভীর উদ্বেগ প্রকাশ",
      "ন্যায্য আইনি ও প্রাতিষ্ঠানিক প্রক্রিয়া ক্ষুণ্ণ হওয়ার অভিযোগ তুলে পদত্যাগের পটভূমি ব্যাখ্যা",
      "দক্ষিণ এশিয়ার আঞ্চলিক মানসিক স্বাস্থ্য ও অটিজম কর্মসূচির ভবিষ্যৎ নিয়ে আন্তর্জাতিক মহলে আলোচনা"
    ],
    "keyPointsEn": [
      "Saima Wazed outlines targeted administrative and political pressure culminating in WHO regional exit",
      "Criticizes abandonment of standard multilateral due process amid domestic political shifts in Bangladesh",
      "International public health observers evaluate impact on regional autism and mental health frameworks"
    ],
    "category": "diplomacy",
    "categoryLabelBn": "আন্তর্জাতিক কূটনীতি ও স্বাস্থ্য",
    "categoryLabelEn": "International Diplomacy & Health",
    "sentiment": "negative",
    "sentimentReasonBn": "আন্তর্জাতিক সংস্থায় রাজনৈতিক চাপ এবং নীতিগত প্রক্রিয়া লঙ্ঘনের অভিযোগ তুলে ধরায় প্রতিবেদনের সুর স্পর্শকাতর ও সমালোচনামূলক।",
    "sentimentReasonEn": "Critical dispatch spotlighting geopolitical interference in multilateral international health governance.",
    "source": {
      "name": "Firstpost (Instagram)",
      "bureau": "Delhi",
      "language": "English",
      "originalUrl": "https://news.google.com/rss/articles/CBMiUkFVX3lxTE93Qk1Bd1RRTDhmWVZibU1XaDgtU0JyZEdSYTJaeWFvTDhRMDZUdDZ5cHJfa1p0azVmdlVvNXc0amdGNkFyUWtlLWNTMXNCTkZMSFE?oc=5",
      "scannedAt": "2026-09-20T17:00:00Z"
    },
    "publishedAt": "2026-09-20T08:00:00Z",
    "readTimeBn": "১ মিনিট পোস্ট",
    "readTimeEn": "1 min read",
    "imageUrl": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&auto=format&fit=crop&q=80",
    "isTrending": true,
    "isBreaking": true,
    "tags": [
      "Firstpost",
      "Instagram Post",
      "Visual Journalism",
      "Saima Wazed",
      "Sheikh Hasina",
      "WHO",
      "Public Health",
      "Delhi Bureau"
    ]
  },
  {
    "id": "news-20260920-059",
    "slug": "aaj-tak-youtube-india-bangladesh-500-ton-hilsa-export-festive-trade",
    "title": "Aaj Tak Video: 'Bangladesh Clears 500 Tonnes of Hilsa Fish Exports to India Ahead of Festive Season Amid Retail Crunch'",
    "englishTitle": "Aaj Tak Video: 'Bangladesh Clears 500 Tonnes of Hilsa Fish Exports to India Ahead of Festive Season Amid Retail Crunch'",
    "banglaTitle": "শারদীয় উৎসব ঘিরে ভারতে ৫০০ টন ইলিশ রপ্তানির বিশেষ ছাড়পত্র দিল বাংলাদেশ, পেট্রাপোল বন্দরে হিমায়িত ট্রাকে ব্যস্ততা: আজ তক ভিডিও রিপোর্ট",
    "summaryBn": "ভারতের জাতীয় হিন্দি টেলিভিশন চ্যানেল আজ তক (Aaj Tak)-এর বিশেষ ভিডিও প্রতিবেদনে জানানো হয়েছে, আসন্ন দুর্গাপূজা উপলক্ষে ভারতে ৫০০ মেট্রিক টন পদ্মার ইলিশ রপ্তানির বিশেষ অনুমোদন দিয়েছে বাংলাদেশ সরকার। আগের কঠোর রপ্তানি নিষেধাজ্ঞা কিছুটা শিথিল করে গৃহীত এই সিদ্ধান্ত পশ্চিমবঙ্গ ও ভারতের অন্যান্য বাজারে স্বস্তি নিয়ে এসেছে। পেট্রাপোল-বেনাপোল সমন্বিত স্থলবন্দরে বিশেষ প্রক্রিয়ায় দ্রুত কাস্টমস ক্লিয়ারেন্স নিশ্চিত করছে ভারতীয় সীমান্ত কর্তৃপক্ষ।",
    "summaryEn": "Aaj Tak's frontline video dispatch covers Dhaka's decision to grant special authorization for 500 metric tonnes of coveted Hilsa fish exports to India ahead of the Sharadiya Durga Puja festival. The partial relaxation of the blanket seafood ban brings seasonal relief to consumers across West Bengal, while Petrapole border checkpoints enforce expedited refrigerated clearance to sustain bilateral culinary diplomacy.",
    "keyPointsBn": [
      "আসন্ন দুর্গাপূজা উপলক্ষে বাংলাদেশ থেকে ৫০০ টন ইলিশ আমদানির বিশেষ অনুমতি কার্যকর",
      "বনগাঁ ও কলকাতার পাইকারি মাছ বাজারে দামের ঊর্ধ্বগতি কিছুটা স্বাভাবিক হওয়ার প্রত্যাশা",
      "পেট্রাপোল-বেনাপোল সীমান্তে কাস্টমস ও খাদ্য নিরাপত্তা পরীক্ষার সমন্বিত উদ্যোগ"
    ],
    "keyPointsEn": [
      "Dhaka issues special waiver permitting export of 500 tonnes of premium Hilsa for festive demand",
      "Wholesale seafood markets in Kolkata and North 24 Parganas register immediate festive optimism",
      "Integrated Land Port Petrapole prioritizes green-channel clearance for cross-border refrigerated cargo"
    ],
    "category": "trade",
    "categoryLabelBn": "সীমান্ত বাণিজ্য ও খাদ্য সংস্কৃতি",
    "categoryLabelEn": "Cross-Border Trade & Food Diplomacy",
    "sentiment": "positive",
    "sentimentReasonBn": "শারদীয় উৎসবের প্রাক্কালে ইলিশ বাণিজ্যের অনুমতি দুই দেশের জনসাধারণের মাঝে সাংস্কৃতিক সৌহার্দ্য ও বাণিজ্যিক আদান-প্রদানকে গতিশীল করেছে।",
    "sentimentReasonEn": "Positive reporting celebrating cultural bridge-building, cross-border seasonal trade, and bilateral economic cooperation.",
    "source": {
      "name": "Aaj Tak (YouTube)",
      "bureau": "Delhi",
      "language": "Hindi",
      "originalUrl": "https://news.google.com/rss/articles/CBMiVkFVX3lxTE1tZC0xZXBSVHpFWFEwLXhrM1V0QmxPcnNmQWZZNk1GSThzNXhtQlhNOXlyTlh4U3VKeFZyUTl4NjVfY3RoTE1fMmJFWWpNZnRnMUEybjBB?oc=5",
      "scannedAt": "2026-09-20T17:00:00Z"
    },
    "publishedAt": "2026-09-20T07:15:00Z",
    "readTimeBn": "৪ মিনিট ভিডিও",
    "readTimeEn": "4 min video",
    "imageUrl": "/images/hilsa-fish-market-trade.jpg",
    "isTrending": true,
    "isBreaking": true,
    "tags": [
      "Aaj Tak",
      "YouTube Video",
      "ভিডিও রিপোর্ট",
      "Hilsa Diplomacy",
      "Petrapole",
      "Indo-Bangladesh Trade",
      "Durga Puja",
      "Delhi Bureau"
    ]
  },
  {
    "id": "news-20260920-060",
    "slug": "navbharat-times-tarique-rahman-confrontation-student-leadership-warning",
    "title": "Navbharat Times: 'Tarique Rahman Faces Stiff Resistance From Student Bloc as Political Deadlock Looms in Dhaka'",
    "englishTitle": "Navbharat Times: 'Tarique Rahman Faces Stiff Resistance From Student Bloc as Political Deadlock Looms in Dhaka'",
    "banglaTitle": "‘তারেক রহমান ও বিএনপির রাজনৈতিক অবস্থানের বিরুদ্ধে ছাত্র আন্দোলনের কঠোর হুঁশিয়ারি, ঢাকার রাজনীতিতে নতুন মেরুকরণ’: নবভারত টাইমস",
    "summaryBn": "ভারতের শীর্ষস্থানীয় হিন্দি দৈনিক নবভারত টাইমস (Navbharat Times) ঢাকার অভ্যন্তরীণ রাজনৈতিক অস্থিরতা নিয়ে প্রকাশিত প্রতিবেদনে জানিয়েছে, বিএনপির ভারপ্রাপ্ত চেয়ারম্যান তারেক রহমানের রাজনৈতিক ভবিষ্যৎ ও সমঝোতার কৌশল নিয়ে জাতীয় নাগরিক কমিটি ও ছাত্র নেতৃত্বের মাঝে তীব্র মতবিরোধ দেখা দিয়েছে। অন্তর্বর্তী সরকারের সংস্কার এজেন্ডা বনাম দ্রুত সাধারণ নির্বাচনের প্রশ্নে এই টানাপোড়েন দিল্লির নিরাপত্তা বিশ্লেষকদের বিশেষ পর্যবেক্ষণে রয়েছে।",
    "summaryEn": "Navbharat Times analyzes escalating political friction in Dhaka between the student-led coalition and the Bangladesh Nationalist Party (BNP) headed by acting chairman Tarique Rahman. The report details student leaders warning against hasty electoral compromises and institutional backsliding, underscoring growing structural instability as New Delhi tracks regional governance developments.",
    "keyPointsBn": [
      "বিএনপির একক প্রাধান্য ও দ্রুত নির্বাচন দাবির বিপরীতে ছাত্র আন্দোলনের কাঠামোগত সংস্কারের ওপর জোর",
      "তারেক রহমানের নেতৃত্ব ও রাজনৈতিক অবস্থান নিয়ে ঢাকার নীতি মহলে মতদ্বৈততা বৃদ্ধি",
      "বাংলাদেশের রাজনৈতিক ভবিষ্যৎ ও আইনশৃঙ্খলার প্রশ্নে ভারতের নিরাপত্তা পর্যবেক্ষকদের নিবিড় নজর"
    ],
    "keyPointsEn": [
      "Student movement leaders issue strong warnings against unilateral political compromises by BNP",
      "Tarique Rahman's strategic maneuvers face resistance over democratic reform sequence prior to polls",
      "New Delhi security apparatus closely monitors institutional friction and stability risks in Dhaka"
    ],
    "category": "politics",
    "categoryLabelBn": "রাজনীতি ও নির্বাচন",
    "categoryLabelEn": "Politics & Governance",
    "sentiment": "neutral",
    "sentimentReasonBn": "দুই রাজনৈতিক পক্ষের পাল্টাপাল্টি অবস্থান ও ভবিষ্যতের সম্ভাব্য সাংবিধানিক জটিলতা বস্তুনিষ্ঠভাবে বিশ্লেষণ করা হয়েছে।",
    "sentimentReasonEn": "Objective report analyzing multi-faction political competition and democratic reform dilemmas in Bangladesh.",
    "source": {
      "name": "Navbharat Times",
      "bureau": "Delhi",
      "language": "Hindi",
      "originalUrl": "https://news.google.com/rss/articles/CBMi-wFBVV95cUxQNU45TU5KSE5uSkpOV014bWZTWXFYY2w0VnEyNUw0LVhGaE1RNmlicEFGQUdfNTMzYUxwWlZBRHdzeVp2c3ptRW1xSFB6c2VUYzctM2gzLV9MSV9GbTV0aWtuVEJlT3dnWG1HSVFsMG8ycV8zUS1CbnJnMThZbGpmT3l1eHZYamlwTXpRQXlrWDVIbVpyandGeDN0dzlQeERHMWNPcTRCckprZGNuZmMxZlZORkxFdUg0NHZVY1BwWlNYYVJXMHpBb3puYVNDSUl6Y2xOVFVfb3lMNklZZ0FlT2JRdEdWamR0c1VUU0txSXhSREFwcF9TcWMxTdIBgAJBVV95cUxPeHNEMmpYVkhYczVTZVdIZzZZMVdtOXgtcV8zUENOdTRBbnlNcU9UQUFaZG9qallIU2JXZ3VMZ01TTHhTSjY3a3QzN2QzN1YxTC1yeDJkSXFEdGdIcnVwYU5sLXVxeEpfY1BjQlh2NEZBNVpBMUxBVUFMbWlQcjFOaTZnMXNHTlExanFsRW5NQmlSNGhPS1RmWUNMM3JHeGJ0am1FSF8xYi1TSjUyek8xeW53d3ZieHA2YndaQVVES3ZnaFA1Tm5xOWpzeEpEVEdRdFptaTNGX2liV08wRU40dEdSMXMwU3A5STN4ejdsN0dXM0x2NHlMTGNnOHRHQzZC?oc=5",
      "scannedAt": "2026-09-20T17:00:00Z"
    },
    "publishedAt": "2026-09-20T04:03:00Z",
    "readTimeBn": "৩ মিনিট পাঠ",
    "readTimeEn": "3 min read",
    "imageUrl": "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "Navbharat Times",
      "Tarique Rahman",
      "তারেক রহমান",
      "BNP",
      "Student Movement",
      "Dhaka Politics",
      "Hindi Media",
      "Delhi Bureau"
    ]
  },
  {
    "id": "news-20260920-061",
    "slug": "times-of-india-sheikh-hasina-grassroots-reorganization-party-cadres",
    "title": "The Times of India: 'Sheikh Hasina Coordinates With Senior Awami League Leaders, Charts Grassroots Mobilization Strategy'",
    "englishTitle": "The Times of India: 'Sheikh Hasina Coordinates With Senior Awami League Leaders, Charts Grassroots Mobilization Strategy'",
    "banglaTitle": "তৃণমূল পর্যায়ের নেতাকর্মীদের সঙ্গে সমন্বয় করে রাজনৈতিক পুনর্গঠনের রূপরেখা সাজাচ্ছেন শেখ হাসিনা: টাইমস অব ইন্ডিয়া",
    "summaryBn": "ভারতের প্রভাবশালী ইংরেজি দৈনিক দ্য টাইমস অব ইন্ডিয়া (The Times of India)-এর প্রতিবেদনে বলা হয়েছে, ভারতে অবস্থানরত ক্ষমতাচ্যুত সাবেক প্রধানমন্ত্রী শেখ হাসিনা দলের শীর্ষ নেতৃত্ব ও তৃণমূল নেতাদের সঙ্গে ভার্চুয়াল ও অফলাইন মাধ্যমে রাজনৈতিক যোগাযোগ বৃদ্ধি করেছেন। আওয়ামী লীগের সাংগঠনিক শক্তি পুনরুজ্জীবিত করা, আইনি লড়াই পরিচালনা এবং তৃণমূল নেতাকর্মীদের মনোবল চাঙ্গা রাখতে সুনির্দিষ্ট নির্দেশনা দিচ্ছেন তিনি। এই কৌশলগত পদক্ষেপ বাংলাদেশের সামগ্রিক রাজনীতিতে নতুন আলোড়ন সৃষ্টি করেছে।",
    "summaryEn": "The Times of India reports that former Prime Minister Sheikh Hasina has intensified high-level strategic consultations with senior Awami League leaders and regional party organizers. Operating from India, Hasina is actively orchestrating a comprehensive organizational restructuring roadmap aimed at legal defense coordination, grassroots cadre mobilization, and preparing the party apparatus for future political participation in Bangladesh.",
    "keyPointsBn": [
      "দলের সাংগঠনিক স্থবিরতা কাটিয়ে তৃণমূলকে পুনরায় সক্রিয় করার লক্ষ্যে শেখ হাসিনার ধারাবাহিক বৈঠক",
      "আন্তর্জাতিক অপরাধ ট্রাইব্যুনাল (আইসিটি)-এর মামলা মোকাবেলায় সমন্বিত আইনি সেল গঠনের নির্দেশনা",
      "বাংলাদেশের রাজনৈতিক পটভূমিতে আওয়ামী লীগের প্রত্যাবর্তনের কৌশলগত রূপরেখা প্রণয়ন"
    ],
    "keyPointsEn": [
      "Sheikh Hasina leads structured consultative sessions to reactivate exiled and domestic party networks",
      "Directs formation of specialized legal defense coordination teams to challenge interim indictments",
      "Outlines strategic grassroots roadmap for Awami League’s political re-engagement in national affairs"
    ],
    "category": "politics",
    "categoryLabelBn": "রাজনীতি ও সাংগঠনিক পুনর্গঠন",
    "categoryLabelEn": "Politics & Party Reorganization",
    "sentiment": "neutral",
    "sentimentReasonBn": "নির্বাসিত রাজনৈতিক নেতৃত্বের কর্মকাণ্ড ও বাংলাদেশের অভ্যন্তরীণ প্রতিক্রিয়া নিয়ে তথ্যভিত্তিক ও ভারসাম্যপূর্ণ বিশ্লেষণ।",
    "sentimentReasonEn": "Comprehensive, factual coverage of exiled political leadership strategy and its regional resonance.",
    "source": {
      "name": "The Times of India",
      "bureau": "Mumbai",
      "language": "English",
      "originalUrl": "https://news.google.com/rss/articles/CBMiwAFBVV95cUxNcTd5YTZhbnhlUkpKSkhyeDFUUnduRWoxd2dBWXFENEp1MnJLbTJwSlN2ejIyQW5YVVJvaExqanBCX2J5bWZVd2xHdzBjZmc4UkxRLU5Ic0NJMmlJMmZvZGhaMEJrd2h1LVRaTW9EVFJtemEzaUxXOVliTWdGYUtnYmFYbEYyY2k5VjQxeGtEb0Nuemd5eVJ1ZzdsQUFxUC1Pb3ZBNnpoc0swdy15ZUt3dkVHeG9leTVXcDJyUjJrU2fSAcYBQVVfeXFMTklsVkFPX1RUT1NOVVRSSGJtSWtseEt4QmhOUHN2SkFuMTVMM0Z6N29ZcEpMOUpPbmJUMWNQQzNUR0x6RFFSMHM2RE9QSVhxZ0pPTEdndnVLX1dXRFcxZE9mNUtrc1U1LTBOUXA1Z2wxcHMydkRXQ3dCUXNEN0JGT3h4U0hLbTRtczlVb3ZkM1JGT0tUVTJ2UnZzNXpDMVpkWU1uaXdEdFRuMmlTT0tJc0NwRkVVTm9pUENEejg3LXZOdU5nckFR?oc=5",
      "scannedAt": "2026-09-20T17:00:00Z"
    },
    "publishedAt": "2026-09-19T23:18:00Z",
    "readTimeBn": "৪ মিনিট পাঠ",
    "readTimeEn": "4 min read",
    "imageUrl": "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "The Times of India",
      "Sheikh Hasina",
      "শেখ হাসিনা",
      "Awami League",
      "আওয়ামী লীগ",
      "Exile Politics",
      "Mumbai Bureau"
    ]
  },
  {
    "id": "news-20260920-062",
    "slug": "sangbad-pratidin-hasina-rally-call-dhaka-protests-mass-detentions",
    "title": "Sangbad Pratidin: 'Awami League Activists Mobilize in Dhaka Following Hasina’s Address; Massive Security Clampdown Enforced'",
    "englishTitle": "Sangbad Pratidin: 'Awami League Activists Mobilize in Dhaka Following Hasina’s Address; Massive Security Clampdown Enforced'",
    "banglaTitle": "হাসিনার দেশে ফেরার ঘোষণায় চাঙ্গা লিগ, মিছিল ঘিরে তপ্ত ঢাকা, ৫ শতাধিক গ্রেপ্তার: সংবাদ প্রতিদিন",
    "summaryBn": "কলকাতার জনপ্রিয় বাংলা দৈনিক সংবাদ প্রতিদিন-এর বিশেষ প্রতিবেদনে উল্লেখ করা হয়েছে, শেখ হাসিনার দলীয় নেতাকর্মীদের উদ্দেশ্যে প্রেরিত অডিও বার্তা ও দেশে ফেরার ঘোষণার পর ঢাকায় আকস্মিক মিছিল ও সমাবেশ করেছে আওয়ামী লীগের নেতাকর্মীরা। গুলশান, ধানমন্ডি ও মিরপুরের বিভিন্ন পয়েন্টে আকস্মিক এই মিছিলকে কেন্দ্র করে নিরাপত্তা বাহিনী কঠোর অভিযান পরিচালনা করে পাঁচ শতাধিক নেতাকর্মীকে আটক করেছে। কলকাতার রাজনৈতিক মহলে এই ঘটনা ওপার বাংলার রাজনীতির ভবিষ্যৎ নিয়ে নতুন আগ্রহ তৈরি করেছে।",
    "summaryEn": "Kolkata daily Sangbad Pratidin reports that an audio message from Sheikh Hasina announcing her intent to return to Bangladesh galvanized spontaneous Awami League rallies across major thoroughfares in Dhaka, including Dhanmondi, Gulshan, and Mirpur. Security agencies initiated extensive counter-crackdowns, detaining over 500 activists as political temperature in Bangladesh reached a fever pitch.",
    "keyPointsBn": [
      "শেখ হাসিনার বক্তব্য প্রকাশের পর ঢাকার একাধিক এলাকায় আকস্মিক মিছিল আওয়ামী লীগের",
      "সহিংসতা প্রতিরোধে যৌথবাহিনীর দেশব্যাপী নিরাপত্তা তল্লাশি ও ৫ শতাধিক ব্যক্তি আটক",
      "ওপার বাংলার চলমান অস্থিতিশীল পরিস্থিতি ও রাজনৈতিক টানাপোড়েন নিয়ে কলকাতায় গভীর উদ্বেগ"
    ],
    "keyPointsEn": [
      "Awami League supporters stage coordinated flash demonstrations in Dhaka following Hasina's audio release",
      "Joint security forces enforce heightened emergency vigils, detaining over 500 party affiliates",
      "West Bengal political observers track volatile political realignment across the eastern frontier"
    ],
    "category": "politics",
    "categoryLabelBn": "রাজনীতি ও আইনশৃঙ্খলা",
    "categoryLabelEn": "Politics & Law Enforcement",
    "sentiment": "negative",
    "sentimentReasonBn": "মিছিল, ধরপাকড় ও গণগ্রেপ্তারের কারণে রাজনৈতিক অস্থিরতা ও সংঘাতের আশঙ্কা বৃদ্ধি পাওয়ায় সুর নেতিবাচক।",
    "sentimentReasonEn": "Negative tone reflecting heightened civil unrest, preemptive crackdowns, and escalating political polarization.",
    "source": {
      "name": "Sangbad Pratidin",
      "bureau": "Kolkata",
      "language": "Bengali",
      "originalUrl": "https://news.google.com/rss/articles/CBMiygFBVV95cUxPZ1ozSmZoVFN2ZzBtQmVqSldaSlJ0VGtLa21IZjNSSEI4aGVJZ1EyRXp6ZXc3R3VTeFotQ1R4VmdneURHYW5FSE96QnpSZFV0ZnRvVXpOVDVQRTZvcFJJTm1GQUVmcENWajVQTEN2LXh1X0NXcVYzcVNrSEhoSFFyVEdFRHRLYmRqZVpERzlkdkFuUEI4X2gyeG1zOE1fcVktUjBfaENhN3JyckpQLURINXZhWHdnZ2V2QnRKS0hRb3RpWDRNRDhXSmxB0gHKAUFVX3lxTE9nWjNKZmhUU3ZnMG1CZWpKV1pKUnRUa0trbUhmM1JIQjhoZUlnUTJFenpldzdHdVN4Wi1DVHhWZ2d5REdhbkVIT3pCelJkVXRmdG9Vek5UNVBFNm9wUklObUZBRWZwQ1ZqNVBMQ3YteHVfQ1dxVjNxU2tISGhIUXJUR0VEdEtiZGplWkRHOWR2QW5QQjhfaDJ4bXM4TV9xWS1SMF9oQ2E3cnJySlAtREg1dmFYd2dnZXZCdEpLSFFvdGlYNE1EOFdKbEE?oc=5",
      "scannedAt": "2026-09-20T17:00:00Z"
    },
    "publishedAt": "2026-09-19T16:51:00Z",
    "readTimeBn": "৪ মিনিট পাঠ",
    "readTimeEn": "4 min read",
    "imageUrl": "https://images.unsplash.com/photo-1558431382-27e303142255?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "Sangbad Pratidin",
      "Sheikh Hasina",
      "শেখ হাসিনা",
      "Awami League",
      "Dhaka Protests",
      "Kolkata Bureau",
      "ওপার বাংলা"
    ]
  },
  {
    "id": "news-20260920-063",
    "slug": "thewall-hasina-delhi-meeting-december-programmes-strategy",
    "title": "The Wall: 'Awami League Chalks Out Phased Strategic Roadmap Through December at Delhi Leadership Conclave'",
    "englishTitle": "The Wall: 'Awami League Chalks Out Phased Strategic Roadmap Through December at Delhi Leadership Conclave'",
    "banglaTitle": "ডিসেম্বর পর্যন্ত ধারাবাহিক কর্মসূচির রূপরেখা চূড়ান্ত করল আওয়ামী লীগের শীর্ষ নেতৃত্ব: দ্য ওয়াল",
    "summaryBn": "কলকাতার ডিজিটাল নিউজ পোর্টাল দ্য ওয়াল (The Wall)-এর প্রতিবেদনে প্রকাশ, দিল্লিতে অবস্থানরত আওয়ামী লীগের উপদেষ্টা ও কেন্দ্রীয় কার্যনির্বাহী সংসদের শীর্ষ নেতাদের এক বিশেষ বৈঠকে আগামী ডিসেম্বর মাস পর্যন্ত ধাপে ধাপে রাজনৈতিক কর্মসূচি পালনের পরিকল্পনা গ্রহণ করা হয়েছে। ১৬ ডিসেম্বর বিজয় দিবসকে কেন্দ্র করে আন্তর্জাতিক মহলে দলের বক্তব্য উপস্থাপন এবং বাংলাদেশে দলের অস্তিত্ব দৃশ্যমান রাখার কৌশলগত পদক্ষেপ নেওয়া হচ্ছে।",
    "summaryEn": "The Wall reports from Kolkata that senior Awami League executive leaders currently in New Delhi have formalized a phased multi-month action plan extending through December. Anchored around the upcoming Victory Day celebrations on December 16, the strategy aims to maintain diplomatic representation in foreign capitals while preserving structural cadre visibility within Bangladesh.",
    "keyPointsBn": [
      "দিল্লিতে আওয়ামী লীগের শীর্ষ নীতিনির্ধারকদের বৈঠকে ডিসেম্বর পর্যন্ত রোডম্যাপ চূড়ান্ত",
      "বিজয় দিবস উপলক্ষে বৈশ্বিক পর্যায়ে প্রচার এবং কূটনৈতিক যোগাযোগ জোরদার করার সিদ্ধান্ত",
      "আইসিটি আদালতের কার্যক্রমের বিপরীতে আন্তর্জাতিক মানবাধিকার প্ল্যাটফর্মে তথ্য উপস্থাপনের উদ্যোগ"
    ],
    "keyPointsEn": [
      "Awami League leadership formulates multi-stage political strategy running until December",
      "Victory Day milestone chosen as focal point for diplomatic advocacy and international outreach",
      "Coordination of counter-documentation on human rights conditions across global platforms"
    ],
    "category": "politics",
    "categoryLabelBn": "রাজনীতি ও কৌশলগত পরিকল্পনা",
    "categoryLabelEn": "Politics & Strategic Planning",
    "sentiment": "neutral",
    "sentimentReasonBn": "রাজনৈতিক দলের দীর্ঘমেয়াদী কর্মপরিকল্পনা ও আন্তর্জাতিক যোগাযোগ নিয়ে তথ্যভিত্তিক প্রতিবেদন।",
    "sentimentReasonEn": "Objective analysis charting party structural resilience and diplomatic timeline preparations.",
    "source": {
      "name": "The Wall",
      "bureau": "Kolkata",
      "language": "Bengali",
      "originalUrl": "https://news.google.com/rss/articles/CBMi-gFBVV95cUxPb1dFSllaTGpyeVpBTUwzdC1rOVFrWG5iNmRoaXFDMU02X0ZBX0w4Qjlpb3RFaUg1SkpZNGx2TDVDa2E4WnZHR2VXM2VjeGJQdjdoR0Z5clp6T0ZCTDZpMHYwdUxEWjFnZWdQQlNNSzUxelFQRlRIRU81ZHlIYnVkSVpYWU5taU5LYmNuTkFfdjFiQ0hmbnhQMnRZSm05eVMweTBQUXdqUThiaUE5OUZzTlZhV2tTVklqcHhaZklKaGEtdlJIV0Q3UFJ2M3hCM2FEY0phdFZGeVVfTmVodDJWYmhfOWdnSXFKN3V6dEZtODRMUF9tUUNxelBn0gH_AUFVX3lxTE1jVU4xQzBXbXRHbGFZQWVKSnFpdGwxeFZrOVhCODdrbktjWTE0T0ZZN3VtMkJIa3B0YVU0a3R0TWs1X3FmWTIxNkdLYVNvY3ppUFhLaU1WdkNVUjNlYnlabEVacjdYWnNNWDRhTnBPM3VxU3lQM2dvVEV6eEl2U1lualZyNlVnem1FTGctbS1ld2t0SHItUmx0eXd4bzdGTHNNV1hOR3MtRThSQ0pxc0p5MmNuUEVBT3BSS2RCUXpBdktIODJvUU9ESUo3VHFwcFhMdm1mRFBsOWVzUkNDZTJMWmk1b3VCSEZpYWhJMjdMdTlZRG40RTdyZUh4TzJMZw?oc=5",
      "scannedAt": "2026-09-20T17:00:00Z"
    },
    "publishedAt": "2026-09-19T15:20:00Z",
    "readTimeBn": "৩ মিনিট পাঠ",
    "readTimeEn": "3 min read",
    "imageUrl": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "The Wall",
      "Sheikh Hasina",
      "শেখ হাসিনা",
      "Awami League",
      "আওয়ামী লীগ",
      "Kolkata Bureau",
      "ওপার বাংলা"
    ]
  },
  {
    "id": "news-20260920-064",
    "slug": "zee-news-youtube-bsf-rescues-bangladeshi-citizens-ganga-boat-capsizes",
    "title": "Zee News Video Dispatch: 'BSF Riverine Unit Rescues 10 Stranded Bangladeshis After Boat Capsizes in Border Waters'",
    "englishTitle": "Zee News Video Dispatch: 'BSF Riverine Unit Rescues 10 Stranded Bangladeshis After Boat Capsizes in Border Waters'",
    "banglaTitle": "গঙ্গার আন্তর্জাতিক জলসীমায় নৌকাডুবির পর ১০ বাংলাদেশিকে উদ্ধার করল ভারতীয় বিএসএফ ওয়াটার উইং: জি নিউজ ভিডিও রিপোর্ট",
    "summaryBn": "ভারতের জাতীয় হিন্দি টেলিভিশন জি নিউজ (Zee News)-এর বিশেষ ভিডিও প্রতিবেদনে দেখানো হয়েছে, ভারত-বাংলাদেশ সীমান্তবর্তী গঙ্গা নদীর আন্তর্জাতিক জলসীমায় একটি নৌকাডুবির ঘটনার পর ভারতীয় সীমান্তরক্ষী বাহিনী (বিএসএফ)-এর জলীয় নজরদারি দল দ্রুত অভিযান চালিয়ে ১০ জন বাংলাদেশি নাগরিককে জীবিত উদ্ধার করেছে। মানবিক উদ্ধার তৎপরতার পর বিজিবি-র সাথে যোগাযোগ করে পতাকা বৈঠকের মাধ্যমে তাদের নিরাপদে হস্তান্তরের উদ্যোগ নেওয়া হয়েছে।",
    "summaryEn": "In an exclusive riverine security dispatch, Zee News broadcasts footage of the Border Security Force (BSF) Water Wing conducting an emergency rescue operation in the swollen Ganga waters along the India-Bangladesh international boundary. BSF patrol speedboats rescued 10 Bangladeshi civilians after their vessel capsized, initiating prompt protocol coordination with Border Guard Bangladesh (BGB) for humanitarian repatriation.",
    "keyPointsBn": [
      "সীমান্তবর্তী নদীতে নৌকাডুবির পর বিএসএফ ওয়াটার উইং-এর দ্রুত মানবিক উদ্ধার তৎপরতা",
      "আন্তর্জাতিক নদী সীমান্তে নিরাপত্তা নিশ্চিতকরণের পাশাপাশি জীবন রক্ষায় ভারতীয় বাহিনীর ভূমিকা",
      "বিএসএফ ও বিজিবির স্থানীয় কমান্ডের মাঝে সমন্বয়ের মাধ্যমে আইনি ও কূটনৈতিক প্রক্রিয়া সম্পাদন"
    ],
    "keyPointsEn": [
      "BSF Water Wing launches swift emergency response following boat capsize in shared Ganga stretch",
      "Highlights professional riverine search-and-rescue capabilities along un-fenced boundary segments",
      "Close humanitarian communication maintained between BSF and BGB border commanders"
    ],
    "category": "border",
    "categoryLabelBn": "সীমান্ত নিরাপত্তা ও মানবিক উদ্ধার",
    "categoryLabelEn": "Border Security & Humanitarian Rescue",
    "sentiment": "positive",
    "sentimentReasonBn": "সীমান্তে মানবিক উদ্ধার অভিযান এবং দুই সীমান্তরক্ষী বাহিনীর সমন্বিত ইতিবাচক পদক্ষেপ তুলে ধরা হয়েছে।",
    "sentimentReasonEn": "Positive account highlighting cross-border humanitarian professionalism and functional boundary coordination.",
    "source": {
      "name": "Zee News (YouTube)",
      "bureau": "Delhi",
      "language": "Hindi",
      "originalUrl": "https://news.google.com/rss/articles/CBMiVkFVX3lxTE9GUjljcElRcm9aZkk4TzdNYTRTbVFPUTdyQmhyZ2tXZE5nSGg2NEhwcFgzMWNkaDJUWk56WlFrSmtDeURsbzNPMWJnU2xMNHpTcnFmYmZ3?oc=5",
      "scannedAt": "2026-09-20T17:00:00Z"
    },
    "publishedAt": "2026-09-20T06:30:00Z",
    "readTimeBn": "৩ মিনিট ভিডিও",
    "readTimeEn": "3 min video",
    "imageUrl": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "Zee News",
      "YouTube Video",
      "ভিডিও রিপোর্ট",
      "BSF",
      "BGB",
      "Border Security",
      "Riverine Patrol",
      "Delhi Bureau"
    ]
  },
  {
    "id": "news-20260920-065",
    "slug": "hindustan-times-assam-meghalaya-border-interception-dawki-guwahati-corridor",
    "title": "Hindustan Times: 'Assam Police Intercept 27 Infiltration Suspects in Transit Joint Operation After Dawki Border Crossing'",
    "englishTitle": "Hindustan Times: 'Assam Police Intercept 27 Infiltration Suspects in Transit Joint Operation After Dawki Border Crossing'",
    "banglaTitle": "মেঘালয়ের ডাউকি সীমান্ত দিয়ে অনুপ্রবেশের পর গুয়াহাটি ট্রানজিট রুটে ২৭ জনকে আটক করল আসাম পুলিশ ও রেলওয়ে যৌথ বাহিনী: হিন্দুস্তান টাইমস",
    "summaryBn": "হিন্দুস্তান টাইমস (Hindustan Times)-এর উত্তর-পূর্ব ব্যুরো জানিয়েছে, মেঘালয়ের ডাউকি সীমান্ত দিয়ে ভারতে প্রবেশের পর গুয়াহাটিকে ট্রানজিট হিসেবে ব্যবহার করে দূরবর্তী রাজ্যে গমনের চেষ্টাকালে ২৭ জন বাংলাদেশি নাগরিককে আটক করেছে আসাম পুলিশ ও রেলওয়ে সুরক্ষা দল। নারী ও অপ্রাপ্তবয়স্কসহ এই দলটি কোনো বৈধ নথিপত্র ছাড়াই ভারতীয় ভূখণ্ডে অবস্থান করছিল। উত্তর-পূর্ব ভারতে আন্তর্জাতিক সীমান্তজুড়ে নজরদারি কয়েক গুণ বৃদ্ধি করেছে নিরাপত্তা সংস্থাগুলো।",
    "summaryEn": "Hindustan Times North-East bureau reports on a major joint operation by Assam Police and Government Railway Police intercepting 27 Bangladeshi nationals at Guwahati transit hubs following illicit border crossings via the Dawki sector in Meghalaya. The group, which included women and minors lacking valid travel documents, was apprehended as security grids across the Northeast intensify anti-infiltration countermeasures.",
    "keyPointsBn": [
      "ডাউকি সীমান্ত পার হয়ে আসামের গুয়াহাটি হয়ে অন্য রাজ্যে প্রবেশের চেষ্টা নস্যাৎ",
      "রেলওয়ে পুলিশ ও আসাম পুলিশের সমন্বিত অভিযানে ২৭ জন বিদেশি নাগরিক শনাক্ত ও আটক",
      "বাংলাদেশ সীমান্তবর্তী উত্তর-পূর্বাঞ্চলীয় রাজ্যগুলোতে অতিরিক্ত তল্লাশি চৌকি ও সার্বক্ষণিক টহল জোরদার"
    ],
    "keyPointsEn": [
      "Security forces foil transit corridor operation following irregular border entry at Dawki sector",
      "Joint taskforce nabs 27 individuals traveling without mandatory travel authorization",
      "Intensified multi-tiered surveillance deployed across Assam-Meghalaya borderland transit routes"
    ],
    "category": "border",
    "categoryLabelBn": "সীমান্ত নিরাপত্তা ও অনুপ্রবেশ প্রতিরোধ",
    "categoryLabelEn": "Border Security & Law Enforcement",
    "sentiment": "negative",
    "sentimentReasonBn": "অবৈধ অনুপ্রবেশ ও সীমান্তবর্তী ট্রানজিট রুটে মানব পাচারের ঝুঁকি তুলে ধরায় প্রতিবেদনটির সুর সতর্কতামূলক ও নেতিবাচক।",
    "sentimentReasonEn": "Critical reporting on border surveillance vulnerabilities, illicit transit networks, and security crackdowns.",
    "source": {
      "name": "Hindustan Times",
      "bureau": "Kolkata",
      "language": "English",
      "originalUrl": "https://news.google.com/rss/articles/CBMi1wFBVV95cUxPU05OZEhsTFlFbzV5V3ZQNjFZeXFoN29iSkVoMEN0NkhSR1o4N1NWZlQtaWNpUmpzWEM2NW45cEk0ZW1ZVkZ3d29QVnF3ZExGTzhuUmU3SlNQcVYyVU9GV2FEQ1hObWI2Z3prT1VNS3pudHQ2MUlRX2xDUlJCVHJXZjlOQ3NYTnp0LTlHWjJZS3M3eUVFZzNFQndqMU9MeWotTTRHNmZkZENMQlkxZVdQUmVtOGFqdGlvZksyYUtKWG1FM2RHZEs3SWtpMzRNZTFOREFsY29LVdIB3AFBVV95cUxONmhHTGVrT1gtWHYzTkExVkNONXNUUkJZR3JlZHFZcEx5OVIwQjYwdGQzQ2MyVGxpXzJoOVhxMmVBR1Z3bW1qX29sLWlGNjJHRlJjYWluSm9WQkNtOGtBaXdjTWpvbXhMcXdfTEVPWl9oRjlQYXhGZkl0aE0xX1I2OEVXdldTc18tLXZzVGZ6TmVUWVBiTW90MFBKeWY1Y2tiUDdkMVZuSFU1QmJnR1hVVXk2eW8tUEtRTUtxUEV1WVZ4VzNud1BxQVJvS01MZ3pkZGpQWGstUHpqaVJx?oc=5",
      "scannedAt": "2026-09-20T17:00:00Z"
    },
    "publishedAt": "2026-09-20T05:12:00Z",
    "readTimeBn": "৪ মিনিট পাঠ",
    "readTimeEn": "4 min read",
    "imageUrl": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "Hindustan Times",
      "Assam Bureau",
      "Dawki Border",
      "Guwahati Transit",
      "Border Security",
      "BSF",
      "Northeast India"
    ]
  },
  {
    "id": "news-20260920-066",
    "slug": "india-today-instagram-reviewing-101-agreements-chattogram-port-transit",
    "title": "India Today Visual Dispatch: 'Why Dhaka’s Re-evaluation of 101 Hasina-Era Pacts Tests Northeast Transit Access'",
    "englishTitle": "India Today Visual Dispatch: 'Why Dhaka’s Re-evaluation of 101 Hasina-Era Pacts Tests Northeast Transit Access'",
    "banglaTitle": "চট্টগ্রাম-মংলা বন্দর ট্রানজিট ও ভারতীয় পণ্য পরিবহন: হাসিনা আমলে স্বাক্ষরিত ১০১ চুক্তি পর্যালোচনায় ঢাকার পদক্ষেপে কী প্রভাব পড়বে? ইন্ডিয়া টুডে ইনস্টাগ্রাম ইনফোগ্রাফিক",
    "summaryBn": "ইন্ডিয়া টুডে (India Today)-এর ডিজিটাল প্ল্যাটফর্মের ইনস্টাগ্রাম ভিজ্যুয়াল বিশ্লেষণে তুলে ধরা হয়েছে বিগত আওয়ামী লীগ সরকারের সময়ে স্বাক্ষরিত ১০১টি দ্বিপাক্ষিক চুক্তি পর্যালোচনার নেপথ্য সমীকরণ। ভারতের উত্তর-পূর্বাঞ্চলীয় রাজ্যগুলোতে চট্টগ্রাম ও মংলা সমুদ্রবন্দর দিয়ে পণ্য পরিবহনের দীর্ঘদিনের ট্রানজিট সুবিধা এই পর্যালোচনার ফলে বিঘ্নিত হতে পারে কি না, তা বিস্তারিত ব্যাখ্যার মাধ্যমে তুলে ধরেছে গণমাধ্যমটি।",
    "summaryEn": "In an incisive visual explainer on Instagram, India Today maps the strategic ramifications of Bangladesh reviewing 101 bilateral treaties negotiated under Sheikh Hasina. The infographic analysis unpacks how potential renegotiations over Chattogram and Mongla port transshipment routes could disrupt cargo logistics pipelines feeding India's landlocked Northeastern states.",
    "keyPointsBn": [
      "১০১টি চুক্তির তালিকায় সমুদ্রবন্দর ট্রানজিট, ইনল্যান্ড ওয়াটারওয়েজ ও বিদ্যুৎ চুক্তি অন্তর্ভুক্ত",
      "উত্তর-পূর্বাঞ্চলীয় রাজ্য আসাম, ত্রিপুরা ও মেঘালয়ের অর্থনৈতিক লজিস্টিকসে সম্ভাব্য প্রভাব",
      "কূটনৈতিক পুনর্বিবেচনার সময় বিদ্যমান প্রাতিষ্ঠানিক সহযোগিতা রক্ষা করার ওপর গুরুত্ব"
    ],
    "keyPointsEn": [
      "Review targets maritime port access, inland waterways, and cross-border power transmission deals",
      "Assesses exposure to cargo transit supply lines sustaining Assam, Tripura, and Meghalaya",
      "Emphasizes importance of protecting institutional economic stability during diplomatic reset"
    ],
    "category": "diplomacy",
    "categoryLabelBn": "কূটনীতি ও আঞ্চলিক লজিস্টিকস",
    "categoryLabelEn": "Diplomacy & Regional Logistics",
    "sentiment": "neutral",
    "sentimentReasonBn": "অর্থনৈতিক ট্রানজিট চুক্তি পর্যালোচনার প্রভাব ও উভয় দেশের স্বার্থ নিয়ে সুষম ভিজ্যুয়াল বিশ্লেষণ।",
    "sentimentReasonEn": "Neutral, data-driven visual journalism detailing strategic logistics considerations for both nations.",
    "source": {
      "name": "India Today (Instagram)",
      "bureau": "Delhi",
      "language": "English",
      "originalUrl": "https://news.google.com/rss/articles/CBMiUkFVX3lxTE1Yc2QydThyZkg3clhNN3ZGZFFlb2l2TmpYbHoxTldGNDFDOXNBa211WWktZGxKNTBNRk9OTHQyS3FuU0l0WUd5bEc2bTAtN3Z4QWc?oc=5",
      "scannedAt": "2026-09-20T17:00:00Z"
    },
    "publishedAt": "2026-09-20T07:45:00Z",
    "readTimeBn": "১ মিনিট পোস্ট",
    "readTimeEn": "1 min read",
    "imageUrl": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "India Today",
      "Instagram Post",
      "Visual Journalism",
      "Transit Treaties",
      "Chattogram Port",
      "Mongla Port",
      "Northeast Logistics",
      "Delhi Bureau"
    ]
  },
  {
    "id": "news-20260920-067",
    "slug": "assam-tribune-jinnah-portrait-dhaka-university-controversy-historical-resonance",
    "title": "The Assam Tribune: 'Dhaka University Event Displaying Jinnah Portrait Sparks Severe Backlash and Historical Debate in Northeast Intellectual Circles'",
    "englishTitle": "The Assam Tribune: 'Dhaka University Event Displaying Jinnah Portrait Sparks Severe Backlash and Historical Debate in Northeast Intellectual Circles'",
    "banglaTitle": "ঢাকা বিশ্ববিদ্যালয়ে কায়েদে আজম জিন্নাহর প্রতিকৃতি প্রদর্শনী নিয়ে তীব্র বিতর্ক ও প্রতিবাদ: দ্য আসাম ট্রিবিউন",
    "summaryBn": "আসামের প্রধান ইংরেজি দৈনিক দ্য আসাম ট্রিবিউন (The Assam Tribune) এক অনুসন্ধানী প্রতিবেদনে জানিয়েছে, ঢাকা বিশ্ববিদ্যালয়ের ছাত্র-শিক্ষক কেন্দ্রে (টিএসসি) আয়োজিত এক অনুষ্ঠানে পাকিস্তানের প্রতিষ্ঠাতা মোহাম্মদ আলী জিন্নাহর প্রতিকৃতি প্রদর্শন ও তাঁকে স্মরণ করাকে ঘিরে বাংলাদেশে এবং ভারতের উত্তর-পূর্বাঞ্চলের বুদ্ধিজীবী মহলে তীব্র ক্ষোভ তৈরি হয়েছে। ১৯৪৮ সালের ভাষা আন্দোলনের সূতিকাগার ঢাকা বিশ্ববিদ্যালয়ে জিন্নাহর ছবি প্রদর্শনীকে ঐতিহাসিক চেতনা ও মুক্তিযুদ্ধের মূল্যবোধের প্রতি অবমাননা বলে অভিহিত করেছেন ইতিহাসবিদরা।",
    "summaryEn": "The Assam Tribune reports that a controversial seminar at Dhaka University’s Teacher-Student Centre (TSC) honoring Pakistan’s founder Muhammad Ali Jinnah has incited intense backlash across academic and intellectual circles in Bangladesh and Northeast India. Historians and civil society figures have condemned the commemoration at the historic birthplace of the 1948 Language Movement as a profound affront to the spirit of the Liberation War.",
    "keyPointsBn": [
      "ভাষা আন্দোলনের কেন্দ্রস্থল ঢাকা বিশ্ববিদ্যালয়ে জিন্নাহর প্রতিকৃতি প্রদর্শন ঘিরে তীব্র ক্ষোভ",
      "মুক্তিযুদ্ধ ও ধর্মনিরপেক্ষ মূল্যবোধের বিরুদ্ধে পাকিস্তানের আদর্শ পুনঃপ্রবর্তনের অপচেষ্টা বলে বিশেষজ্ঞদের সমালোচনা",
      "উত্তর-পূর্ব ভারতের আসাম ও ত্রিপুরায় ঐতিহাসিক চেতনা ও দুই দেশের সাংস্কৃতিক নৈকট্য নিয়ে গভীর উদ্বেগ"
    ],
    "keyPointsEn": [
      "Memorial event featuring Jinnah’s portrait at Dhaka University triggers nationwide outrage",
      "Academics condemn event as historical revisionism undermining 1952 Language Movement memory",
      "Northeast intellectual forums express concern over shifts in public discourse across the frontier"
    ],
    "category": "culture",
    "categoryLabelBn": "সংস্কৃতি ও ঐতিহাসিক বিতর্ক",
    "categoryLabelEn": "Culture & Historical Discourse",
    "sentiment": "negative",
    "sentimentReasonBn": "ঐতিহাসিক ভাষা আন্দোলন ও মুক্তিযুদ্ধের আদর্শ পরিপন্থী বিতর্কিত প্রদর্শনী ঘিরে ক্ষোভ প্রকাশ করায় সুর নেতিবাচক।",
    "sentimentReasonEn": "Critical evaluation of controversial historical revisionism provoking public outcry across civil society.",
    "source": {
      "name": "The Assam Tribune",
      "bureau": "Kolkata",
      "language": "English",
      "originalUrl": "https://news.google.com/rss/articles/CBMisAFBVV95cUxNUGF1RjhsWlRIVHRNNlVaMjJnMXVoaTBSY3ZWeTd6d0NOMlRYTVFhZ1J1d1YxdUx0M0NIck1KT0FnMERmSDNBMnZkd3JFX1ZTRXJlbmlVMWt0SDlOSmlMRnYyN2VEQ2tVanNoa3A5aXFtenVpZ0p5dkhHRTJEWnktSzQtZkVHSFE0bUloWGNhZlh1UUpUSWhkaUs4d0dOTnJqdzl2LU9TbktRcVRPV09kONIBtgFBVV95cUxQX2hSSHdGQnRCTHlhU2NTRDN1ZXBoUGZFWnAzNXM4Q1M3ZXdMRlVOcWVqaW1ibTBmWXQzbS00UDFSRWNsT0diSXFaY2VUQVM5cWl3MEk4U2wzaUd1RFNLYjZ2X3VLbGJMRW9FbWFIdnNIdzlTdnE1QzEzYTR6QXUwaDN0Uk9UQko4SG80cFNva1V2QklzLWhITTFncXN3T2hFbFUwU05uMXZyb1BqYUJLalpnTFd3QQ?oc=5",
      "scannedAt": "2026-09-20T17:00:00Z"
    },
    "publishedAt": "2026-09-19T14:35:00Z",
    "readTimeBn": "৪ মিনিট পাঠ",
    "readTimeEn": "4 min read",
    "imageUrl": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "The Assam Tribune",
      "Dhaka University",
      "Historical Memory",
      "Language Movement",
      "1971 Liberation War",
      "Northeast Media",
      "Culture"
    ]
  },
  {
    "id": "news-20260920-068",
    "slug": "news18-bangla-youtube-gujarat-hilsa-dhaka-trade-dynamics",
    "title": "News18 Bangla Video: 'Cross-Border Seafood Trade Turnabout: How Gujarat Hilsa is Filling Market Gaps in Dhaka'",
    "englishTitle": "News18 Bangla Video: 'Cross-Border Seafood Trade Turnabout: How Gujarat Hilsa is Filling Market Gaps in Dhaka'",
    "banglaTitle": "গুজরাট থেকে টন টন ইলিশ যাচ্ছে ঢাকায়, দ্বিপাক্ষিক মৎস্য বাণিজ্যে নতুন সমীকরণ: নিউজ১৮ বাংলা ভিডিও রিপোর্ট",
    "summaryBn": "নিউজ১৮ বাংলা (News18 Bangla)-এর বিশেষ ভিডিও প্রতিবেদনে তুলে ধরা হয়েছে দ্বিপাক্ষিক মৎস্য বাণিজ্যের এক অভূতপূর্ব পরিবর্তন। বাংলাদেশের অভ্যন্তরীণ নদীগুলোতে ইলিশের আহরণ হ্রাস এবং চরম মূল্যবৃদ্ধির কারণে ভারতের গুজরাট উপকূল থেকে কোল্ড-চেইনে প্রক্রিয়াজাত ইলিশ মাছ বাণিজ্যিকভাবে ঢাকায় রপ্তানি হচ্ছে। পদ্মার রূপালী ইলিশের ঐতিহ্যের মাঝে আরব সাগরের এই ইলিশ সাধারণ ক্রেতাদের কাছে বিকল্প হিসেবে সমাদৃত হচ্ছে।",
    "summaryEn": "News18 Bangla reports on a surprising turnabout in bilateral fisheries commerce, highlighting how refrigerated consignments of Hilsa caught along the Gujarat coastline in the Arabian Sea are being commercially shipped to Dhaka to alleviate severe local supply deficits. The video dispatch explains how changing marine migrations and soaring retail prices in Bangladesh have inverted traditional regional seafood trade flows.",
    "keyPointsBn": [
      "পদ্মা ও মেঘনায় ইলিশ সংকটের মাঝে গুজরাট উপকূলের ইলিশের ঢাকায় ক্রমবর্ধমান চাহিদা",
      "হিমায়িত কোল্ড-চেইন কনটেইনারের মাধ্যমে দ্বিপাক্ষিক বাণিজ্য রুটে দ্রুত পরিবহন",
      "সাধারণ ভোক্তাদের নাগালের মাঝে বিকল্প ইলিশ সরবরাহ ও সীমান্ত বাণিজ্যের সম্প্রসারণ"
    ],
    "keyPointsEn": [
      "Reversed trade dynamics see Gujarat Arabian Sea Hilsa dispatched to supply-constrained Dhaka retail markets",
      "Advanced cold-chain logistics enable seamless preservation across transit checkpoints",
      "Demonstrates evolving economic pragmatism and market adaptability in bilateral seafood trade"
    ],
    "category": "trade",
    "categoryLabelBn": "বাণিজ্য ও সামুদ্রিক অর্থনীতি",
    "categoryLabelEn": "Cross-Border Trade & Blue Economy",
    "sentiment": "positive",
    "sentimentReasonBn": "প্রাকৃতিক সংকটে বাণিজ্যিক সহযোগিতার মাধ্যমে বাজারের চাহিদা পূরণ ও পারস্পরিক অর্থনৈতিক সুবিধার বিষয় থাকায় সুর ইতিবাচক।",
    "sentimentReasonEn": "Constructive reporting illustrating bilateral market adaptability, commercial trade continuity, and food supply synergy.",
    "source": {
      "name": "News18 Bangla (YouTube)",
      "bureau": "Kolkata",
      "language": "Bengali",
      "originalUrl": "https://news.google.com/rss/articles/CBMiVkFVX3lxTE9wcGNFLW5fOUs3LXRDMnBsQVI3a0dHTmNMaFhqRkM5RGRxUzlPb0Ftc284NGdKSFp3aC1uLVRlbTMxREdVelI3VFUxeGo3UkRkV0RMZUZn?oc=5",
      "scannedAt": "2026-09-20T17:00:00Z"
    },
    "publishedAt": "2026-09-20T08:40:00Z",
    "readTimeBn": "৩ মিনিট ভিডিও",
    "readTimeEn": "3 min video",
    "imageUrl": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "News18 Bangla",
      "YouTube Video",
      "ভিডিও রিপোর্ট",
      "Hilsa Trade",
      "Kolkata Bureau",
      "Cross-Border Trade",
      "ওপার বাংলা"
    ]
  },
  {
    "id": "news-20260920-049",
    "slug": "theprint-bangladesh-isnt-mirror-image-of-pakistan-strategic-interests-video",
    "title": "ThePrint: 'Bangladesh Isn’t A Mirror Image Of Pakistan: Hyphenating Them Undermines India’s Strategic Interests'",
    "englishTitle": "ThePrint: 'Bangladesh Isn’t A Mirror Image Of Pakistan: Hyphenating Them Undermines India’s Strategic Interests'",
    "banglaTitle": "‘বাংলাদেশ পাকিস্তানের প্রতিচ্ছবি নয়: দুজনকে এক করে দেখা ভারতের কৌশলগত স্বার্থকে ক্ষতিগ্রস্ত করবে’—দ্যপ্রিন্ট ভিডিও বিশ্লেষণ",
    "summaryBn": "ভারতের শীর্ষ নীতি বিশ্লেষণী প্ল্যাটফর্ম দ্যপ্রিন্ট (ThePrint)-এর প্রধান সম্পাদক শেখর গুপ্ত ও বিশ্লেষকদের বিশেষ ভিডিও বিশ্লেষণে বলা হয়েছে, রাজনৈতিক পটপরিবর্তন সত্ত্বেও বাংলাদেশকে পাকিস্তানের সমান্তরাল বা 'পাকিস্তান ২.০' হিসেবে চিত্রিত করা ভারতের ভূ-কৌশলগত স্বার্থের পক্ষে মারাত্মক ভুল হবে। বাংলাদেশ ও ভারতের পারস্পরিক অর্থনৈতিক স্বার্থ, নদী অববাহিকা ও সাংস্কৃতিক নৈকট্য পাকিস্তানের তুলনায় সম্পূর্ণ ভিন্ন এবং ইতিবাচক কূটনীতির দাবি রাখে।",
    "summaryEn": "In an incisive video analysis published by ThePrint India, strategic editors underline that viewing post-Hasina Bangladesh as a mirror image of Pakistan ('Pakistan 2.0') fundamentally misreads regional dynamics and damages India's vital security and economic interests. Deep transit connections, shared river hydrology, and mutual market dependencies demand a nuanced, constructive foreign policy from New Delhi rather than reactionary rhetoric.",
    "keyPointsBn": [
      "বাংলাদেশ ও পাকিস্তানকে এক দৃষ্টিতে দেখার প্রবণতা ভারতের দীর্ঘমেয়াদী আঞ্চলিক নিরাপত্তার ক্ষতি করবে",
      "ভৌগোলিক সান্নিধ্য, বিদ্যুৎ সংযোগ এবং মুক্ত বাণিজ্যের অপরিহার্যতায় ভারতের সাথে গঠনমূলক সম্পর্ক বজায় রাখার তাগিদ",
      "দক্ষিণ এশিয়ায় তৃতীয় শক্তির প্রভাব রুখতে ঢাকার সাথে বাস্তবসম্মত কূটনৈতিক সম্পৃক্ততার ওপর জোর"
    ],
    "keyPointsEn": [
      "ThePrint editorial cautions against reductive narratives equating Bangladesh's transition with Pakistan",
      "Underlines irreplaceable physical proximity, cross-border energy grids, and bilateral transit interdependence",
      "Urges South Block to adopt strategic patience and proactive diplomatic engagement with Dhaka's leadership"
    ],
    "category": "diplomacy",
    "categoryLabelBn": "কূটনীতি ও কৌশলগত বিশ্লেষণ",
    "categoryLabelEn": "Diplomacy & Strategic Video",
    "sentiment": "positive",
    "sentimentReasonBn": "প্রতিবেশী দেশের সাথে গঠনমূলক সম্পর্ক বজায় রাখা এবং উগ্র বয়ানের বদলে গভীর কৌশলগত সম্পৃক্ততার আহ্বান ইতিবাচক।",
    "sentimentReasonEn": "Constructive geopolitical analysis advocating pragmatic bridge-building and strategic realism over polarization.",
    "source": {
      "name": "ThePrint India (YouTube)",
      "bureau": "Delhi",
      "language": "English",
      "originalUrl": "https://news.google.com/rss/articles/CBMiVkFVX3lxTE1BX3FHWFVDMS1mRldYelVRY0FtZkpWaUllZ0ptQ0QwbzItQUFQellZZHl6ak9mQmhyeWpPcXhFX1c1T3I4UjN5andGQTZZZ1cxMmdMVU1n?oc=5",
      "scannedAt": "2026-09-20T11:05:00Z"
    },
    "publishedAt": "2026-09-19T12:08:57Z",
    "readTimeBn": "৫ মিনিট ভিডিও",
    "readTimeEn": "5 min video",
    "imageUrl": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=1200&auto=format&fit=crop&q=80",
    "isLeadStory": false,
    "isTrending": true,
    "isBreaking": true,
    "tags": [
      "ThePrint",
      "YouTube Dispatch",
      "Strategic Analysis",
      "India-Bangladesh Relations",
      "South Block",
      "Delhi Bureau"
    ]
  },
  {
    "id": "news-20260920-050",
    "slug": "wion-hilsa-exports-surge-bangladesh-catch-slumps-cross-border-seafood-economics",
    "title": "WION Podcast: 'Hilsa Exports Surge As Bangladesh Catch Slumps, Cross-Border Seafood Economics Reset'",
    "englishTitle": "WION Podcast: 'Hilsa Exports Surge As Bangladesh Catch Slumps, Cross-Border Seafood Economics Reset'",
    "banglaTitle": "বাংলাদেশের অভ্যন্তরীণ ইলিশ ঘাটতির মাঝে ভারতের সরবরাহ বৃদ্ধি ও সীমান্ত বাণিজ্যের নতুন বাস্তবতা: উইওন পডকাস্ট",
    "summaryBn": "আন্তর্জাতিক সংবাদমাধ্যম উইওন (WION)-এর ভিডিও পডকাস্টে তুলে ধরা হয়েছে পদ্মা ও মেঘনায় ইলিশ আহরণ হ্রাসের বিপরীতে ভারতের সাথে বিশেষ মৌসুমি বাণিজ্যের অর্থনৈতিক প্রভাব। শারদীয় উৎসব ঘিরে নিষেধাজ্ঞা শিথিল করে ৫০০ টন ইলিশ ভারতে রপ্তানির অনুমতি দেওয়া হলেও বাজারে দাম ও জোগান নিয়ে উভয় দেশের খুচরা পর্যায়ে যে প্রতিক্রিয়া সৃষ্টি হয়েছে তা বিশ্লেষণ করা হয়েছে।",
    "summaryEn": "WION's global business and foreign affairs podcast analyzes the shifting dynamics of cross-border seafood commerce following Dhaka's temporary waiver permitting 500 metric tonnes of Hilsa fish exports to India. The dispatch evaluates local fishing yields across the Meghna estuary, commercial pricing impacts across West Bengal markets, and the symbolic cultural diplomacy of cross-border culinary trade.",
    "keyPointsBn": [
      "শারদীয় দুর্গাপূজাকে কেন্দ্র করে ভারতে ইলিশ রপ্তানি ছাড়ের অর্থনৈতিক ও কৌশলগত মূল্যায়ন",
      "পদ্মা-মেঘনা অববাহিকায় জলবায়ু পরিবর্তন ও আহরণ হ্রাসে মাছের দামে প্রভাব",
      "সীমান্তবর্তী পেট্রাপোল-বেনাপোল স্থলবন্দরে হিমায়িত কার্গোর অগ্রাধিকারমূলক ছাড়পত্র"
    ],
    "keyPointsEn": [
      "WION evaluates the political economy of bilateral fisheries trade and festive diplomatic goodwill",
      "Assesses catch shortages in southern estuaries and supply chain bottlenecks at land customs stations",
      "Demonstrates how shared cultural gastronomy continues to bridge institutional diplomatic divides"
    ],
    "category": "trade",
    "categoryLabelBn": "সীমান্ত বাণিজ্য ও খাদ্য সরবরাহ",
    "categoryLabelEn": "Cross-Border Trade & Food Security",
    "sentiment": "positive",
    "sentimentReasonBn": "বাণিজ্যিক ছাড়পত্র ও উৎসবের সৌহার্দ্যের কারণে প্রতিবেদনটির সুর ইতিবাচক ও বাস্তবধর্মী।",
    "sentimentReasonEn": "Highlights constructive commercial accommodation, festive goodwill, and bilateral market interdependence.",
    "source": {
      "name": "WION News (YouTube)",
      "bureau": "Delhi",
      "language": "English",
      "originalUrl": "https://news.google.com/rss/articles/CBMiVkFVX3lxTE1OV2ZRanRleTlaODNGQVhnS19BTmlXN1NLSzhGUU5aOFFBTE5KMnNVTk5qNFZtREJzVEt1T0V4NUQ4bXpnako3cVRTTGk1WDVRem9KM2RR?oc=5",
      "scannedAt": "2026-09-20T11:05:00Z"
    },
    "publishedAt": "2026-09-18T00:30:17Z",
    "readTimeBn": "৪ মিনিট ভিডিও",
    "readTimeEn": "4 min video",
    "imageUrl": "https://images.unsplash.com/photo-1534483509719-3feaee7c30da?w=1200&auto=format&fit=crop&q=80",
    "isTrending": true,
    "tags": [
      "WION",
      "YouTube Dispatch",
      "Hilsa Fish",
      "Cross-Border Trade",
      "Food Diplomacy",
      "Delhi Bureau"
    ]
  },
  {
    "id": "news-20260920-051",
    "slug": "r-plus-ranakhetra-tarique-rahman-delhi-consultations-geopolitical-factors",
    "title": "R Plus Ranakhetra: Behind The Scenes Of BNP Leadership's Proposed Delhi Consultations Amid Shifting Geopolitics",
    "englishTitle": "R Plus Ranakhetra: Behind The Scenes Of BNP Leadership's Proposed Delhi Consultations Amid Shifting Geopolitics",
    "banglaTitle": "হঠাৎ কেন দিল্লিতে আলোচনা চায় বিএনপি নেতৃত্ব? ভূ-রাজনৈতিক হিসাব ও দ্বিপাক্ষিক কূটনীতির নেপথ্য রহস্য: আর প্লাস রণক্ষেত্র",
    "summaryBn": "কলকাতার সংবাদ চ্যানেল আর প্লাসের বিশেষ অনুসন্ধানী ভিডিও অনুষ্ঠান 'রণক্ষেত্র'-তে তুলে ধরা হয়েছে বিএনপি ভারপ্রাপ্ত চেয়ারম্যান তারেক রহমান ও দলের শীর্ষ নেতৃত্বের দিল্লি সফর পর্যালোচনার ভেতরের সমীকরণ। আন্তর্জাতিক পরাশক্তিগুলোর কূটনৈতিক তৎপরতা, হাসিনাকে ভারতে নিরাপদ আশ্রয় প্রদান এবং আসন্ন সাধারণ নির্বাচনের আগে নয়াদিল্লির সাথে বোঝাপড়া গড়ে তোলার প্রয়োজনীয়তা বিশ্লেষণ করা হয়েছে।",
    "summaryEn": "Kolkata-based broadcaster R Plus delivers an investigative video program ('Ranakhetra') examining diplomatic backchannels coordinating consultations between BNP leadership and Indian foreign policy institutions in New Delhi. The report explores global power interactions, the containment of bilateral fallout over Hasina's exile, and the imperative for cross-border administrative alignment ahead of prospective 2026 elections.",
    "keyPointsBn": [
      "নয়াদিল্লির সাউথ ব্লকের সাথে আনুষ্ঠানিক সম্পৃক্ততার প্রস্তুতিতে বিএনপির বাস্তববাদী পদক্ষেপ",
      "আন্তর্জাতিক ফোরামে ভারসাম্যের জন্য ভারতের ভূমিকা অস্বীকার না করার কৌশলগত উপলব্ধি",
      "পশ্চিমবঙ্গ ও পূর্বাঞ্চলীয় সীমান্তে স্থিতিশীলতা রক্ষায় শীর্ষ পর্যায়ের যোগাযোগের গুরুত্ব"
    ],
    "keyPointsEn": [
      "Investigative program analyzes pragmatic overtures by Bangladeshi political leaders toward New Delhi",
      "Examines mutual recognition of indispensable economic dependencies across energy and commerce",
      "Stresses importance of maintaining predictable regional security along West Bengal frontiers"
    ],
    "category": "politics",
    "categoryLabelBn": "রাজনীতি ও বিশেষ অনুসন্ধান",
    "categoryLabelEn": "Politics & Investigative Video",
    "sentiment": "neutral",
    "sentimentReasonBn": "রাজনৈতিক দলের আন্তর্জাতিক সমীকরণ ও কৌশলগত অবস্থানের নির্মোহ বিশ্লেষণ তুলে ধরা হয়েছে।",
    "sentimentReasonEn": "Balanced journalistic scrutiny of backchannel diplomacy, electoral calculations, and regional balance of power.",
    "source": {
      "name": "R Plus News (YouTube)",
      "bureau": "Kolkata",
      "language": "Bengali",
      "originalUrl": "https://www.youtube.com/watch?v=d9-CofKQsms",
      "scannedAt": "2026-09-20T11:05:00Z"
    },
    "publishedAt": "2026-09-17T15:45:06Z",
    "readTimeBn": "৪ মিনিট ভিডিও",
    "readTimeEn": "4 min video",
    "imageUrl": "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "R Plus",
      "YouTube Dispatch",
      "Tarique Rahman",
      "Sheikh Hasina",
      "Delhi Bureau",
      "Kolkata Bureau"
    ]
  },
  {
    "id": "news-20260920-052",
    "slug": "indian-defence-update-missile-testing-range-bengal-coast-bay-of-bengal-security",
    "title": "Indian Defence Update: 'India Prepares Integrated Testing Range Along Bengal Coastline As Bay Of Bengal Dynamic Shifts'",
    "englishTitle": "Indian Defence Update: 'India Prepares Integrated Testing Range Along Bengal Coastline As Bay Of Bengal Dynamic Shifts'",
    "banglaTitle": "বঙ্গোপসাগরীয় কৌশলগত নিরাপত্তায় পশ্চিমবঙ্গ উপকূলে নতুন মিসাইল টেস্ট রেঞ্জ পরিকাঠামো: ভারতীয় প্রতিরক্ষা বুলেটিন",
    "summaryBn": "ইন্ডিয়ান ডিফেন্স আপডেটের সামরিক ভিডিও প্রতিবেদনে প্রকাশ, বঙ্গোপসাগরে আঞ্চলিক নৌ ও আকাশ প্রতিরক্ষার আধুনিকায়নে পশ্চিমবঙ্গ উপকূলে একটি আধুনিক সমন্বিত ক্ষেপণাস্ত্র পরীক্ষণ কেন্দ্র (ITR) চালুর প্রস্তুতি নিচ্ছে ভারত। বাংলাদেশের উপকূলবর্তী গভীর সমুদ্র বন্দর ও তৃতীয় পক্ষের সামরিক তৎপরতার প্রেক্ষাপটে ভারতের পূর্ব উপকূলের আকাশ প্রতিরক্ষা আরও সুরক্ষিত করাই এর লক্ষ্য।",
    "summaryEn": "Indian Defence Update covers strategic defense preparations to operationalize an advanced coastal missile test and surveillance facility along West Bengal's littoral belt. The military video report contextualizes the installation within emerging regional maritime dynamics, monitoring naval traffic and ensuring comprehensive air defense across the northern Bay of Bengal.",
    "keyPointsBn": [
      "পূর্ব উপকূলে ভারতীয় প্রতিরক্ষা গবেষণা ও উন্নয়ন সংস্থার (DRDO) নজরদারি নেটওয়ার্ক জোরদার",
      "বঙ্গোপসাগরে বাণিজ্যিক নৌপথ ও গভীর সমুদ্র করিডোরে সমন্বিত রাডার সুরক্ষা",
      "আঞ্চলিক সামরিক ভারসাম্যে কোনো ধরনের আকস্মিক শূন্যতা প্রতিরোধে ভারতের দীর্ঘমেয়াদী প্রস্তুতি"
    ],
    "keyPointsEn": [
      "Strategic defense infrastructure deployed to monitor northern Bay of Bengal littoral zones",
      "Integrated radar and missile tracking networks enhance coastal defense readiness",
      "Maintains focus on safeguarding vital maritime shipping lanes and critical civilian infrastructure"
    ],
    "category": "diplomacy",
    "categoryLabelBn": "প্রতিরক্ষা ও নিরাপত্তা",
    "categoryLabelEn": "Defense & Maritime Security",
    "sentiment": "neutral",
    "sentimentReasonBn": "প্রতিরক্ষা সক্ষমতা বৃদ্ধি ও বঙ্গোপসাগরের সার্বিক নিরাপত্তার বস্তুনিষ্ঠ সামরিক মূল্যায়ন।",
    "sentimentReasonEn": "Factual defense analysis of maritime surveillance enhancements and regional deterrence posture.",
    "source": {
      "name": "Indian Defence Update (YouTube)",
      "bureau": "Kolkata",
      "language": "English",
      "originalUrl": "https://news.google.com/rss/articles/CBMiVkFVX3lxTE1PcHJ2SmNaTkhjZUVGWFlEM2dVYXc5SzdTWHhrRE5CUndsOHNPeWcxajNXU2UtUVZMRDJZLXBQVzdzNXlYVFZUMEpqYmVzRVExZjV3bXhB?oc=5",
      "scannedAt": "2026-09-20T11:05:00Z"
    },
    "publishedAt": "2026-09-19T05:00:22Z",
    "readTimeBn": "৪ মিনিট ভিডিও",
    "readTimeEn": "4 min video",
    "imageUrl": "/images/bangladesh-ministry-of-foreign-affairs.jpg",
    "tags": [
      "Indian Defence Update",
      "YouTube Dispatch",
      "Bay of Bengal",
      "Maritime Security",
      "Defense Review",
      "Kolkata Bureau"
    ]
  },
  {
    "id": "news-20260920-053",
    "slug": "wion-news-international-crimes-tribunal-targets-awami-league-global-legal-observers",
    "title": "WION News: 'International Crimes Tribunal Targets Awami League Leaders Over July Violence, Global Observers Take Note'",
    "englishTitle": "WION News: 'International Crimes Tribunal Targets Awami League Leaders Over July Violence, Global Observers Take Note'",
    "banglaTitle": "আন্তর্জাতিক অপরাধ ট্রাইব্যুনালের মৃত্যুদণ্ডের রায় ও আন্তর্জাতিক মানবাধিকার আইনের মানদণ্ড: উইওন স্পেশাল রিপোর্ট",
    "summaryBn": "আন্তর্জাতিক সংবাদ চ্যানেল উইওন (WION)-এর আন্তর্জাতিক আইন প্রতিবেদনে ঢাকায় গঠিত আন্তর্জাতিক অপরাধ ট্রাইব্যুনালের সাম্প্রতিক রায় নিয়ে বিশদ ভিডিও বিশ্লেষণ প্রচার করা হয়েছে। ওবায়দুল কাদেরসহ সাতজন সাবেক নেতার অনুপস্থিতিতে মৃত্যুদণ্ড প্রদানের ক্ষেত্রে আন্তর্জাতিক রেড নোটিশ এবং ২০১৩ সালের প্রত্যর্পণ চুক্তির সীমাবদ্ধতা নিয়ে বৈশ্বিক আইন বিশেষজ্ঞদের মতামত তুলে ধরা হয়েছে।",
    "summaryEn": "WION News provides an international legal dispatch on Bangladesh's Special Tribunal sentencing former Awami League ministers to capital punishment in absentia. Global jurists and human rights observers discuss procedural fairness standards under international covenants, treaty hurdles facing extradition requests to India, and the potential politicization of transitional justice.",
    "keyPointsBn": [
      "আন্তর্জাতিক অপরাধ ট্রাইব্যুনাল-২ এর অনুপস্থিতিতে ফাঁসির রায় নিয়ে বৈশ্বিক মানবাধিকার সংস্থার পর্যবেক্ষণ",
      "২০১৩ সালের প্রত্যর্পণ চুক্তির রাজনৈতিক ধারা এবং দিল্লির আইনি বাধ্যবাধকতা না থাকার বিশ্লেষণ",
      "আইনি লড়াইকে আন্তর্জাতিক ফোরামে নিয়ে যাওয়ার প্রস্তুতি নিচ্ছে আওয়ামী লীগের প্রবাসী সেল"
    ],
    "keyPointsEn": [
      "WION analyzes in-absentia capital verdicts through the lens of international transitional justice standards",
      "Scrutinizes extradition treaty exceptions regarding charges stemming from political confrontations",
      "Highlights anticipated legal challenges before United Nations treaty bodies by defense councils"
    ],
    "category": "politics",
    "categoryLabelBn": "আইন ও আন্তর্জাতিক বিচার",
    "categoryLabelEn": "Legal & International Rights",
    "sentiment": "negative",
    "sentimentReasonBn": "রাজনৈতিক সংঘাত, কঠোর রায় এবং আন্তর্জাতিক প্রত্যর্পণ নিয়ে অচলাবস্থার সুর নেতিবাচক।",
    "sentimentReasonEn": "Addresses contentious domestic political trials, legal deadlock, and cross-border extradition dilemmas.",
    "source": {
      "name": "WION News (YouTube)",
      "bureau": "Delhi",
      "language": "English",
      "originalUrl": "https://news.google.com/rss/articles/CBMiVkFVX3lxTE14YVlCdWVaVmtHaGVKTmp5bjR4ZnJ2NS05dndiNGNmWmZ4cEM1Wks3bTdJaVlTNDVxWDdIWEZsS3JkU0g4YzMxTGZhcXN2dUJsMy1kbWd3?oc=5",
      "scannedAt": "2026-09-20T11:05:00Z"
    },
    "publishedAt": "2026-09-15T07:52:17Z",
    "readTimeBn": "৪ মিনিট ভিডিও",
    "readTimeEn": "4 min video",
    "imageUrl": "/images/bangladesh-international-crimes-tribunal-ict-dhaka.jpg",
    "tags": [
      "WION",
      "YouTube Dispatch",
      "ICT Tribunal",
      "Awami League",
      "Extradition Law",
      "Delhi Bureau"
    ]
  },
  {
    "id": "news-20260920-054",
    "slug": "news-vanguard-tripura-border-vulnerabilities-bsf-steps-up-anti-touting-drives",
    "title": "Northeast Media Dispatch: 'Tripura Border Vulnerabilities Under Spotlight As BSF Steps Up Anti-Touting Operations'",
    "englishTitle": "Northeast Media Dispatch: 'Tripura Border Vulnerabilities Under Spotlight As BSF Steps Up Anti-Touting Operations'",
    "banglaTitle": "ত্রিপুরা সীমান্তে অবৈধ অনুপ্রবেশ ও দালাল চক্রের বিরুদ্ধে বিএসএফের সাঁড়াশি অভিযান: উত্তর-পূর্ব ভিডিও ডিসপ্যাচ",
    "summaryBn": "ত্রিপুরার প্রধান আঞ্চলিক ভিডিও চ্যানেল নিউজ ভ্যানগার্ডের গ্রাউন্ড রিপোর্টে প্রকাশ, বাংলাদেশ সীমান্ত ঘেঁষা সিপাহিজলা ও উনকোটি জেলায় সন্দেহভাজন অনুপ্রবেশকারী ও তাদের সহায়তাকারী আন্তঃসীমান্ত মানবপাচার চক্রের বিরুদ্ধে সাঁড়াশি অভিযান জোরদার করেছে বিএসএফ ও রাজ্য পুলিশ। সম্প্রতি একাধিক ব্যক্তি আটক হওয়ার পর যৌথ টহল বৃদ্ধি করা হয়েছে।",
    "summaryEn": "News Vanguard Tripura broadcasts an on-the-ground video dispatch documenting heightened border interdiction operations conducted jointly by the Border Security Force (BSF) and state police along unfenced international sectors in Tripura. Security contingents have focused on dismantling illicit tout syndicates exploiting riverine terrain for unauthorized crossings.",
    "keyPointsBn": [
      "ত্রিপুরার আন্তর্জাতিক সীমানায় আধুনিক ড্রোন নজরদারি ও অতিরিক্ত ক্যাম্প স্থাপন",
      "অবৈধ অনুপ্রবেশে সহায়তাকারী স্থানীয় দালালদের চিহ্নিত করে বিশেষ আইনি ব্যবস্থা",
      "সীমান্তবর্তী গ্রামবাসীদের নিয়ে সচেতনতামূলক সভা ও নিরাপত্তা মহড়া"
    ],
    "keyPointsEn": [
      "Joint security forces conduct targeted counter-infiltration cordons across vulnerable border sectors",
      "Arrests of facilitators spotlight human trafficking networks operating along the international boundary",
      "Enhanced local community outreach reinforces vigilance along unfenced border patches"
    ],
    "category": "border",
    "categoryLabelBn": "সীমান্ত ও উত্তর-পূর্ব নিরাপত্তা",
    "categoryLabelEn": "Border & Northeast Security",
    "sentiment": "neutral",
    "sentimentReasonBn": "সীমান্ত নজরদারি জোরদার ও আইনশৃঙ্খলা রক্ষার কার্যকর পদক্ষেপের বস্তুনিষ্ঠ বিবরণ।",
    "sentimentReasonEn": "Fact-based field dispatch on border policing, counter-trafficking operations, and local security measures.",
    "source": {
      "name": "News Vanguard Tripura (YouTube)",
      "bureau": "Kolkata",
      "language": "Bengali",
      "originalUrl": "https://news.google.com/rss/articles/CBMiVkFVX3lxTE93WUg4aGttNlFzTUYwTjRWTGkwRUc0bTBrZXpzV0NEN2dFbjNoSUZCSTBXajhjd1NMcmZDYUV3ZkxSVDB1NmZubVptdnBBNjAteG50R2N3?oc=5",
      "scannedAt": "2026-09-20T11:05:00Z"
    },
    "publishedAt": "2026-09-18T14:15:03Z",
    "readTimeBn": "৩ মিনিট ভিডিও",
    "readTimeEn": "3 min video",
    "imageUrl": "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "News Vanguard",
      "YouTube Dispatch",
      "Tripura Border",
      "BSF",
      "Northeast India",
      "Kolkata Bureau"
    ]
  },
  {
    "id": "news-20260920-055",
    "slug": "politics-tv-awami-league-high-command-strategic-realignment-delhi-consultations",
    "title": "Politics TV: Strategic Realignment And Digital Leadership Dynamics Among Exiled Awami League Brass",
    "englishTitle": "Politics TV: Strategic Realignment And Digital Leadership Dynamics Among Exiled Awami League Brass",
    "banglaTitle": "আওয়ামী লীগের হাইকমান্ড সমীকরণ: দিল্লিতে নির্বাসিত নেতাদের সাংগঠনিক সমন্বয় নিয়ে ভিডিও বিশ্লেষণ—পলিটিক্স টিভি",
    "summaryBn": "পলিটিক্স টিভির বিশেষ ডিজিটাল ডিসপ্যাচে সাবেক ক্ষমতাসীন দল আওয়ামী লীগের সাংগঠনিক পুনর্গঠন নিয়ে বিশ্লেষণ করা হয়েছে। দিল্লিতে অবস্থানরত সাবেক প্রধানমন্ত্রী শেখ হাসিনা এবং শীর্ষ নির্বাসিত নেতারা ভার্চুয়াল মাধ্যমে দেশের তৃণমূল নেতাকর্মীদের সঙ্গে যোগাযোগ রক্ষা করছেন। আগামী দিনে দলের আইনি সেল ও আন্তর্জাতিক লবিং জোরদার করার সিদ্ধান্ত নিয়ে রাজনৈতিক মহলে আলোচনা তুঙ্গে।",
    "summaryEn": "Politics TV airs an analytical video report assessing organizational realignments within the exiled Awami League leadership residing in New Delhi. Former Prime Minister Sheikh Hasina and senior party strategists are coordinating virtual outreach mechanisms to maintain cohesion with grassroots committees while establishing specialized international legal defense working groups.",
    "keyPointsBn": [
      "দিল্লিতে অবস্থানরত আওয়ামী লীগ শীর্ষ নেতৃত্বের নিয়মিত ভার্চুয়াল সমন্বয় বৈঠক",
      "আন্তর্জাতিক আইনজীবী ও মানবাধিকার বিশেষজ্ঞদের সহায়তায় আন্তর্জাতিক মহলে বার্তা পাঠানো",
      "আসন্ন স্থানীয় সরকার ও জাতীয় নির্বাচন সামনে রেখে দলের সাংগঠনিক রূপরেখা প্রণয়ন"
    ],
    "keyPointsEn": [
      "Exiled political leadership coordinates digital forums to maintain operational link with grassroots",
      "International outreach teams structure multi-jurisdictional legal challenges against tribunal verdicts",
      "Analyzes prospects and challenges of political comeback strategies ahead of year-end timelines"
    ],
    "category": "politics",
    "categoryLabelBn": "রাজনীতি ও সাংগঠনিক বিশ্লেষণ",
    "categoryLabelEn": "Politics & Strategic Outreach",
    "sentiment": "neutral",
    "sentimentReasonBn": "রাজনৈতিক দলের অভ্যন্তরীণ কৌশল ও ভবিষ্যৎ পরিকল্পনার নিরপেক্ষ বিশ্লেষণ।",
    "sentimentReasonEn": "Objective examination of exiled political organizing, digital communication strategies, and legal plans.",
    "source": {
      "name": "Politics TV (YouTube)",
      "bureau": "Delhi",
      "language": "Bengali",
      "originalUrl": "https://news.google.com/rss/articles/CBMiVkFVX3lxTE1nQ0pGU1h5U0VGeG1rZVRzWjdTaHRHUE9FZzQ5RFhLTjRJTkxROEpVREhTOVlHS1Z2UFdVYUtsaTlKbTh0dXpValBsYWFXOE1ubWZCWkZB?oc=5",
      "scannedAt": "2026-09-20T11:05:00Z"
    },
    "publishedAt": "2026-09-17T12:00:00Z",
    "readTimeBn": "৪ মিনিট ভিডিও",
    "readTimeEn": "4 min video",
    "imageUrl": "/images/bangladesh-dhaka-high-court.jpg",
    "tags": [
      "Politics TV",
      "YouTube Dispatch",
      "Sheikh Hasina",
      "Awami League",
      "Political Strategy",
      "Delhi Bureau"
    ]
  },
  {
    "id": "news-20260920-056",
    "slug": "india-today-bilateral-hydrology-consultation-mea-joint-river-commission-telemetry",
    "title": "India Today Video: 'Bilateral Hydrology Consultation: MEA Says Joint River Commission Working Level Telemetry Uninterrupted'",
    "englishTitle": "India Today Video: 'Bilateral Hydrology Consultation: MEA Says Joint River Commission Working Level Telemetry Uninterrupted'",
    "banglaTitle": "ভারত ও বাংলাদেশের যৌথ নদী কমিশনের কারিগরি কার্যক্রম ও বন্যা তথ্য বিনিময় অব্যাহত: ইন্ডিয়া টুডে ভিডিও রিপোর্ট",
    "summaryBn": "ইন্ডিয়া টুডের বিশেষ কূটনৈতিক ভিডিও রিপোর্টে জানানো হয়েছে, রাজনৈতিক পরিবর্তনের মধ্যেও ভারত ও বাংলাদেশের অভিন্ন ৫৪টি নদীর তথ্য বিনিময় এবং যৌথ নদী কমিশন (JRC)-এর কারিগরি কার্যক্রম সম্পূর্ণ অব্যাহত রয়েছে। বর্ষা মৌসুমে আগাম বন্যা সতর্কবার্তা প্রদান এবং নদী অববাহিকার স্বাভাবিক পানিপ্রবাহ নিশ্চিতে উভয় দেশের প্রকৌশলীরা নিয়মিত টেলিমেট্রি ডেটা শেয়ার করছেন।",
    "summaryEn": "India Today broadcasts a diplomatic video dispatch confirming that operational telemetry and institutional data-sharing mechanisms under the India-Bangladesh Joint Rivers Commission (JRC) remain active and uninterrupted. Technical delegations from both riparian neighbors continue to exchange real-time monsoon flood hydrological data to safeguard vulnerable downstream populations.",
    "keyPointsBn": [
      "উভয় দেশের যৌথ নদী কমিশনের নিয়মিত ডেটা শেয়ারিং ও বন্যা পূর্বাভাস অব্যাহত",
      "রাজনৈতিক টানাপোড়েনের বাইরে রেখে ৫৪টি অভিন্ন নদীর ব্যবস্থাপনায় পেশাদার সংযোগ রক্ষা",
      "গঙ্গা চুক্তি নবায়ন এবং তিস্তা অববাহিকা নিয়ে ভবিষ্যৎ আলোচনার ভিত্তি বজায় রাখার অঙ্গীকার"
    ],
    "keyPointsEn": [
      "Operational hydrology and flood telemetry exchange preserved despite broader diplomatic shifts",
      "Riparian technical bodies maintain active contact ensuring seasonal flood resilience for communities",
      "Establishes pragmatic foundation for future institutional dialogues concerning shared river accords"
    ],
    "category": "diplomacy",
    "categoryLabelBn": "নদী কূটনীতি ও পরিবেশ",
    "categoryLabelEn": "Water Diplomacy & Hydrology",
    "sentiment": "positive",
    "sentimentReasonBn": "নদী ব্যবস্থাপনা ও বন্যা পূর্বাভাসে উভয় দেশের যৌথ কারিগরি সহযোগিতার ইতিবাচক দিক প্রতিফলিত হয়েছে।",
    "sentimentReasonEn": "Constructive reportage emphasizing non-partisan environmental and hydrological collaboration for mutual safety.",
    "source": {
      "name": "India Today (YouTube)",
      "bureau": "Delhi",
      "language": "English",
      "originalUrl": "https://news.google.com/rss/articles/CBMiVkFVX3lxTFBqZkZmem1mMk9XNUQ4UWROVmQ1eVExcjU0V3ZCRi1Ic1QzR2ZuV0dVbGF0ajJ2VHJaNFViaFRNTkFVR0EwLXdfQW1KZkdpU0VlTmV4cDZn?oc=5",
      "scannedAt": "2026-09-20T11:05:00Z"
    },
    "publishedAt": "2026-09-18T11:46:21Z",
    "readTimeBn": "৪ মিনিট ভিডিও",
    "readTimeEn": "4 min read",
    "imageUrl": "/images/bangladesh-ministry-of-foreign-affairs.jpg",
    "tags": [
      "India Today",
      "YouTube Dispatch",
      "Joint Rivers Commission",
      "Water Diplomacy",
      "Flood Forecasting",
      "Delhi Bureau"
    ]
  },
  {
    "id": "news-20260920-037",
    "slug": "hindustan-times-bangladesh-wants-to-reset-ties-with-india-calls-hasina-era-uncomfortable",
    "title": "Bangladesh Seeks Diplomatic 'Reset' With India, Calling Hasina-Era Relationship 'Uncomfortable': New Delhi Deliberates Response",
    "englishTitle": "Bangladesh Seeks Diplomatic 'Reset' With India, Calling Hasina-Era Relationship 'Uncomfortable': New Delhi Deliberates Response",
    "banglaTitle": "হাসিনা আমলের সমীকরণকে 'অস্বস্তিকর' আখ্যা দিয়ে ভারতের সাথে নতুন করে কূটনৈতিক ভারসাম্য চায় ঢাকা: হিন্দুস্তান টাইমস",
    "summaryBn": "হিন্দুস্তান টাইমসের কূটনৈতিক প্রতিবেদনে জানানো হয়েছে, অন্তর্বর্তীকালীন সরকারের নীতি-নির্ধারকরা নয়াদিল্লির সঙ্গে দ্বিপাক্ষিক সম্পর্ক পুনর্গঠন বা 'রিসেট' করার প্রস্তাব দিচ্ছেন। ঢাকার দাবি, বিগত ১৫ বছরে শেখ হাসিনার সরকারের সঙ্গে দিল্লির অতি-ঘনিষ্ঠ সম্পর্ক দ্বিপাক্ষিক সম্পর্কে অস্বস্তি তৈরি করেছিল। এর প্রেক্ষিতে ভারতের নীতিনির্ধারকরা অর্থনৈতিক স্থায়িত্ব, বিদ্যুৎ সঞ্চালন ও ট্রানজিট অক্ষুন্ন রেখে ভারসাম্যপূর্ণ পদক্ষেপ নিচ্ছেন।",
    "summaryEn": "Hindustan Times reports that Bangladesh's interim leadership is actively proposing a pragmatic diplomatic 'reset' with New Delhi, characterizing bilateral relations during Sheikh Hasina's 15-year tenure as overly person-centric and 'uncomfortable'. Indian strategic planners are deliberating a structured response that safeguards cross-border energy transmission, transit corridors, and vital regional trade while adjusting to Dhaka's evolving governance.",
    "keyPointsBn": [
      "হাসিনা-পরবর্তী বাংলাদেশে দিল্লির সাথে সমমর্যাদা ও স্বার্থের ভিত্তিতে নতুন সম্পর্কের রূপরেখা খোঁজার প্রয়াস",
      "বিদ্যুৎ সরবরাহ, রেল ট্রানজিট এবং অর্থনৈতিক অংশীদারিত্ব অটুট রাখার পক্ষে ভারতীয় কূটনৈতিক মহল",
      "রাজনৈতিক পরিবর্তনের মধ্যেও দীর্ঘমেয়াদী ভূ-কৌশলগত ভারসাম্য রক্ষায় দিল্লির সতর্ক নজর"
    ],
    "keyPointsEn": [
      "Dhaka foreign policy planners advocate structural reset to overcome legacy frictions of Hasina administration",
      "New Delhi underscores non-negotiable strategic interests across cross-border energy grids and transit corridors",
      "Both establishments pursue quiet diplomatic engagement to prevent economic dislocation and border fallout"
    ],
    "category": "diplomacy",
    "categoryLabelBn": "কূটনীতি ও সমীকরণ",
    "categoryLabelEn": "Diplomacy & Strategy",
    "sentiment": "neutral",
    "sentimentReasonBn": "দ্বিপাক্ষিক টানাপোড়েনের মধ্যেও নতুন সম্পর্ক গড়ার তাগিদ এবং উভয় পক্ষের কূটনৈতিক অবস্থানের ভারসাম্য তুলে ধরা হয়েছে।",
    "sentimentReasonEn": "Balanced appraisal of Dhaka's desire to recalibrate ties alongside New Delhi's steadfast protection of core strategic interests.",
    "source": {
      "name": "Hindustan Times",
      "bureau": "Delhi",
      "language": "English",
      "originalUrl": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxPeG1GajBTSGlCZDVBcGRybnhjeU9FN2lqd1lFZWNGWG11a3E0QVhxekJrT2QtUjVmTS0zYVFtSDdYMVBmUkFOOHdmNmNuRUdwU2ZnYzJsQThtekZEcGZwSmZhUjFIZnY3OGN4NFZRTVVhaUNUYXg3QlFJQVU5Zy1pTnBXWkdoOE5qODQ0QWJHVWZsajdpd1lVb3J6cWd2VDlkMGhITnFUZTVuZXpQdW1pMnNZY1A2S09NYnpVd3RsMXZrTUxqNXZTZGZNakdLOC1DN2Q5TktTVUstU1hhU1BueTE2VzZpSDQxNHByTl9QbEhVQdIB9wFBVV95cUxOUWE0eThvTUxINTh2QkYxdTB0SGh6U29qano0dllIRXJhXzlMYmM5Y0M4SVM4ME5jQWtfWXZtTXQtbllNekpaRU83M0pTQ29DVThuTjZOLVRHNi1NblNBeFppQVE2TTF3UFF1cnZmb1pVRFFHV3Q0dnpOYUc0bW5sR2ZvdTlZR1F3LUhlWDBnS3U0SFU3SXRUQkxmWVVYYkVsUlNPWUlTSDBsa0FUMkxSWXFrTHprTnJ5QTN5a3R5RmhvZVhQUTdHRFBHemlEc2ptV1k5bEh4ZV9IZ2VXYVlZX2diOHpJWWQ4NERGM3d0ZXZYbmNxU09N?oc=5",
      "scannedAt": "2026-09-20T10:54:00Z"
    },
    "publishedAt": "2026-09-13T17:22:36Z",
    "readTimeBn": "৪ মিনিট পড়া",
    "readTimeEn": "4 min read",
    "imageUrl": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=1200&auto=format&fit=crop&q=80",
    "isLeadStory": false,
    "isTrending": true,
    "isBreaking": true,
    "tags": [
      "Hindustan Times",
      "Sheikh Hasina",
      "Bilateral Reset",
      "MEA India",
      "Diplomacy",
      "Delhi Bureau"
    ]
  },
  {
    "id": "news-20260920-038",
    "slug": "ndtv-india-keeps-door-open-for-normalisation-of-bangladesh-ties-despite-hasina-row",
    "title": "India Keeps Door Open For Normalisation Of Bangladesh Ties Despite Extradition Friction Over Sheikh Hasina",
    "englishTitle": "India Keeps Door Open For Normalisation Of Bangladesh Ties Despite Extradition Friction Over Sheikh Hasina",
    "banglaTitle": "হাসিনা বিতর্ক সত্ত্বেও ঢাকার সঙ্গে স্বাভাবিক দ্বিপাক্ষিক সম্পর্কের দ্বার উন্মুক্ত রেখেছে নয়াদিল্লি: এনডিটিভি",
    "summaryBn": "এনডিটিভির বিশেষ কূটনৈতিক বিশ্লেষণে প্রকাশ, ক্ষমতাচ্যুত সাবেক প্রধানমন্ত্রী শেখ হাসিনার ভারতে অবস্থান এবং ঢাকার প্রত্যর্পণ দাবি সত্ত্বেও নয়াদিল্লি বাংলাদেশের সঙ্গে সামগ্রিক সম্পর্ক স্বাভাবিক রাখার পথ খোলা রেখেছে। ভারতীয় পররাষ্ট্র মন্ত্রণালয়ের কর্মকর্তারা মনে করেন, বাংলাদেশের ১৭ কোটি মানুষের সাথে ভারতের ঐতিহাসিক ও ভৌগোলিক সম্পর্ক কোনো নির্দিষ্ট রাজনৈতিক পরিবর্তনের কারণে ব্যাহত হতে পারে না।",
    "summaryEn": "NDTV reports that despite recurring diplomatic tension and tribunal extradition requests regarding exiled leader Sheikh Hasina, India continues to maintain an open door for functional normalisation with Bangladesh. Senior South Block sources state that enduring cultural, economic, and regional connectivity ties with Bangladesh's 170 million people transcend individual political phases.",
    "keyPointsBn": [
      "হাসিনাকে কেন্দ্র করে প্রত্যর্পণ বিতর্কের বাইরে রেখে দ্বিপাক্ষিক বাণিজ্য ও জ্বালানি স্বাভাবিক রাখার ভারতীয় বার্তা",
      "১৭ কোটি বাংলাদেশি জনগণের কল্যাণের স্বার্থে ইতিবাচক কূটনৈতিক সম্পৃক্ততা বজায় রাখার অঙ্গীকার",
      "স্থলবন্দর, যাত্রী পরিবহন ও ভিসা পরিষেবা পর্যায়ক্রমে স্বাভাবিক করার প্রস্তুতি"
    ],
    "keyPointsEn": [
      "New Delhi consciously separates Hasina's asylum from long-term people-to-people and economic cooperation",
      "Diplomatic machinery prioritizes operational stability across power grids, cross-border train links, and land customs",
      "Gradual normalization of essential consular services and business travel envisioned"
    ],
    "category": "diplomacy",
    "categoryLabelBn": "কূটনীতি ও নীতি",
    "categoryLabelEn": "Diplomacy & Cooperation",
    "sentiment": "positive",
    "sentimentReasonBn": "রাজনৈতিক জটিলতার মধ্যেও স্বাভাবিক সম্পর্ক বজায় রাখা ও ইতিবাচক সম্পৃক্ততার বার্তায় আশাবাদ প্রকাশিত।",
    "sentimentReasonEn": "Reflects constructive long-term diplomatic engagement and institutional goodwill towards Bangladesh.",
    "source": {
      "name": "NDTV",
      "bureau": "Delhi",
      "language": "English",
      "originalUrl": "https://news.google.com/rss/articles/CBMiwwFBVV95cUxOVDNsZlh1czNPN0c3UjVnR3B5dlNrLTJpbWJYbTBIekwxS0E1Ulk3QzFmS0F4Q0xZa1dKZmhVbnd0MlBQOUhmSVU1ZFhTbVozN29CTS1PcFlBWDVwcHh0cVlZRjdpOVdET195cUFwakNFSGdMRExXOXhySDJGdTZQbzcxTUJpOGJxTS1MUTd5TmpGcEZyeDg3UDNveWtmcEpUeWFnbjhXTEluUGZWbDhBeEhoTXB3TEJrNTFndHNteng4TknSAcsBQVVfeXFMTk9yMVRCZm9VWWdqbHM2ckNzRW9LcE9KS2VIUmdPYlZTSllYLXc1d1N6MXdHNU5wXzJpY0h4cTdIR2VYSWpIaFNXX1EyRzFwdWE4STJpdFgydUllcEp6Vnk0RTdhZ3dOamp4Ymppd2VHVVRhaG1fNVhfMENJOWl5RGZEUDlneXVTTEcwWlVxM1phYTRuaWRWUEE5ckFSOTRPX0syams1WUxTalYzaFBQOFpFSHNjLWtDMWNUYS0yLXFxbnFsd05sZEU0cDQ?oc=5",
      "scannedAt": "2026-09-20T10:54:00Z"
    },
    "publishedAt": "2026-09-13T18:35:26Z",
    "readTimeBn": "৪ মিনিট পড়া",
    "readTimeEn": "4 min read",
    "imageUrl": "/images/bangladesh-ministry-of-foreign-affairs.jpg",
    "isTrending": true,
    "tags": [
      "NDTV",
      "Sheikh Hasina",
      "Diplomatic Normalisation",
      "South Block",
      "Bilateral Ties",
      "Delhi Bureau"
    ]
  },
  {
    "id": "news-20260920-039",
    "slug": "assam-tribune-death-penalty-seven-senior-awami-league-leaders-tribunal-verdict",
    "title": "International Crimes Tribunal Sentences Seven Senior Awami League Leaders To Death In Absentia; Assam Watchdogs Track Repercussions",
    "englishTitle": "International Crimes Tribunal Sentences Seven Senior Awami League Leaders To Death In Absentia; Assam Watchdogs Track Repercussions",
    "banglaTitle": "আন্তর্জাতিক অপরাধ ট্রাইব্যুনালে আওয়ামী লীগের ৭ শীর্ষ নেতার অনুপস্থিতিতে মৃত্যুদণ্ড: আসামের নিরাপত্তা মহলে নিবিড় নজর—আসাম ট্রিবিউন",
    "summaryBn": "আসামের শীর্ষ ইংরেজি দৈনিক 'দ্য আসাম ট্রিবিউন' জানিয়েছে, ২০২৪ সালের ছাত্র আন্দোলন দমনে মানবতাবিরোধী অপরাধের অভিযোগে শেখ হাসিনার নেতৃত্বাধীন সাবেক ক্ষমতাসীন দলের দুজন সাবেক মন্ত্রীসহ ৭ শীর্ষ নেতাকে মৃত্যুদণ্ড দিয়েছে আন্তর্জাতিক অপরাধ ট্রাইব্যুনাল-২। আসাম ও উত্তর-পূর্ব ভারতের কৌশলগত পর্যবেক্ষকরা প্রতিবেশী দেশের এই রাজনৈতিক রায় এবং এর সম্ভাব্য সীমান্ত প্রভাব পর্যবেক্ষণ করছেন।",
    "summaryEn": "The Assam Tribune reports that Bangladesh's International Crimes Tribunal-2 has handed down death sentences in absentia to seven senior Awami League leaders, including two former cabinet ministers, for alleged crimes against humanity during the July 2024 uprising. Security analysts and regional intelligence desks across Assam and the Northeast are tracking the cross-border political fallout.",
    "keyPointsBn": [
      "সাবেক সেতুমন্ত্রী ওবায়দুল কাদেরসহ আওয়ামী লীগের সাত শীর্ষ নেতার অনুপস্থিতিতে মৃত্যুদণ্ডাদেশ",
      "জাতিসংঘের মানবাধিকার প্রতিবেদন এবং ট্রাইব্যুনালের আইনি প্রক্রিয়ার আন্তর্জাতিক গ্রহণযোগ্যতা নিয়ে বিতর্ক",
      "আসাম ও মেঘালয় সীমান্তে নিরাপত্তা বাহিনীর সতর্কতা ও রাজনৈতিক পরিস্থিতির ওপর নজরদারি"
    ],
    "keyPointsEn": [
      "ICT-2 delivers capital punishment verdicts in absentia against high-profile former ministers and party figures",
      "Legal analysts evaluate the due process standards and international treaty implications of in-absentia rulings",
      "Northeast Indian security agencies maintain alert along Assam and Meghalaya borders monitoring spillover"
    ],
    "category": "politics",
    "categoryLabelBn": "আইন ও বিচার",
    "categoryLabelEn": "Politics & Legal Issues",
    "sentiment": "negative",
    "sentimentReasonBn": "রাজনৈতিক মেরুকরণ, কঠোর মৃত্যুদণ্ডাদেশ এবং সীমান্ত নিরাপত্তা সংশ্লিষ্ট জটিলতা প্রকাশ পাওয়ায় সুর নেতিবাচক।",
    "sentimentReasonEn": "Reflects continuing domestic political confrontation, in-absentia capital sentencing, and Northeast border sensitivities.",
    "source": {
      "name": "The Assam Tribune",
      "bureau": "Kolkata",
      "language": "English",
      "originalUrl": "https://news.google.com/rss/articles/CBMisgFBVV95cUxOLW0wRzdDLWh1V1EteE03aW9vZGREbkhlOGc1ZDhfSjhvQ1E1VWRFUkQ0M3drU0p5c0d5M0t0QnlJZXN1ZVRzU2tYVnFFSDRyYjR3R0p1QkhBcl9wYlhhbGtBVkN3V1RkTG94Z09qTk9nZHV4ZndySkJ5R2JzWWlRUU50cW93ZlJqY21tT0l3aXNZZ3gxb0lFOHl5a1p5UDFpTGRQWlpsSG8w0gEA?oc=5",
      "scannedAt": "2026-09-20T10:54:00Z"
    },
    "publishedAt": "2026-09-15T09:08:03Z",
    "readTimeBn": "৪ মিনিট পড়া",
    "readTimeEn": "4 min read",
    "imageUrl": "/images/bangladesh-international-crimes-tribunal-ict-dhaka.jpg",
    "tags": [
      "The Assam Tribune",
      "International Crimes Tribunal",
      "Awami League",
      "Death Penalty",
      "Assam Bureau",
      "Guwahati"
    ]
  },
  {
    "id": "news-20260920-040",
    "slug": "sangbad-pratidin-hasina-return-announcement-energizes-awami-league-500-arrests-dhaka",
    "title": "Awami League Demonstrations Erupt In Dhaka Following Hasina Return Remarks; Over 500 Arrested In Crackdown",
    "englishTitle": "Awami League Demonstrations Erupt In Dhaka Following Hasina Return Remarks; Over 500 Arrested In Crackdown",
    "banglaTitle": "হাসিনার দেশে ফেরার ঘোষণায় ঢাকা ও জেলাগুলোতে আওয়ামী লীগের বিক্ষোভ মিছিল, নিরাপত্তা বাহিনীর ব্যাপক ধরপাকড়ে ৫০০-র বেশি গ্রেপ্তার: সংবাদ প্রতিদিন",
    "summaryBn": "কলকাতার শীর্ষ বাংলা দৈনিক 'সংবাদ প্রতিদিন'-এর বিশেষ প্রতিবেদনে প্রকাশ, ক্ষমতাচ্যুত প্রধানমন্ত্রী শেখ হাসিনার সম্ভাব্য রাজনৈতিক প্রত্যাবর্তন সংক্রান্ত বক্তব্যের পর রাজধানী ঢাকা, চট্টগ্রাম এবং সীমান্ত জেলাগুলোতে সক্রিয় হয়ে উঠেছে আওয়ামী লীগের তৃণমূল কর্মীরা। বিভিন্ন পয়েন্টে আকস্মিক ঝটিকা মিছিলের প্রেক্ষিতে যৌথবাহিনী ব্যাপক তল্লাশি অভিযান চালিয়ে ৫০০ জনের বেশি নেতাকর্মীকে গ্রেপ্তার করেছে।",
    "summaryEn": "Sangbad Pratidin reports substantial grassroots mobilization by Awami League supporters across Dhaka, Chittagong, and border districts following public statements concerning former Prime Minister Sheikh Hasina's anticipated political return. In response, Bangladesh's joint security forces initiated coordinated crackdowns, detaining more than 500 party workers during flash protests.",
    "keyPointsBn": [
      "শেখ হাসিনার বক্তব্য প্রকাশের পর ঢাকায় একাধিক ঝটিকা মিছিল ও রাজনৈতিক উত্তেজনা",
      "যৌথবাহিনীর বিশেষ অভিযানে মহানগর ও জেলা পর্যায় থেকে পাঁচ শতাধিক নেতাকর্মীকে আটক",
      "পশ্চিমবঙ্গ সীমান্তের ওপারের এই অস্থির পরিস্থিতি নিবিড়ভাবে পর্যবেক্ষণ করছে কলকাতার নীতিনির্ধারকরা"
    ],
    "keyPointsEn": [
      "Awami League grassroots organize coordinated street demonstrations across urban centers in Bangladesh",
      "Joint law enforcement forces enact widespread preventative detentions to maintain public order",
      "Kolkata observers monitor internal political volatility and potential repercussions along West Bengal border"
    ],
    "category": "politics",
    "categoryLabelBn": "রাজনীতি ও অভ্যন্তরীণ সংঘাত",
    "categoryLabelEn": "Politics & Internal Unrest",
    "sentiment": "negative",
    "sentimentReasonBn": "রাজনৈতিক সংঘাত, সড়ক বিক্ষোভ এবং গণগ্রেপ্তারের কারণে পরিস্থিতি নেতিবাচক হিসেবে চিহ্নিত।",
    "sentimentReasonEn": "Covers rising civil tension, widespread preventative arrests, and escalating confrontation between security apparatus and opposition.",
    "source": {
      "name": "Sangbad Pratidin",
      "bureau": "Kolkata",
      "language": "Bengali",
      "originalUrl": "https://www.sangbadpratidin.in/bangladesh/awami-league-energized-by-hasinas-announcement-of-return-515-arrested/pid/1347323/",
      "scannedAt": "2026-09-20T10:54:00Z"
    },
    "publishedAt": "2026-09-17T06:45:00Z",
    "readTimeBn": "৪ মিনিট পড়া",
    "readTimeEn": "4 min read",
    "imageUrl": "/images/bangladesh-dhaka-high-court.jpg",
    "tags": [
      "Sangbad Pratidin",
      "Sheikh Hasina",
      "Awami League",
      "Dhaka Protests",
      "Mass Arrests",
      "Kolkata Bureau"
    ]
  },
  {
    "id": "news-20260920-041",
    "slug": "firstpost-saima-wazed-who-resignation-political-pressure-recounts-events",
    "title": "Sheikh Hasina's Daughter Saima Wazed Breaks Silence On Resignation From WHO Regional Directorship Amid Political Pressure",
    "englishTitle": "Sheikh Hasina's Daughter Saima Wazed Breaks Silence On Resignation From WHO Regional Directorship Amid Political Pressure",
    "banglaTitle": "রাজনৈতিক চাপের মুখে ডব্লিউএইচও-র আঞ্চলিক পরিচালকের পদত্যাগের পেছনের ঘটনা জানালেন শেখ হাসিনার কন্যা সায়মা ওয়াজেদ: ফার্স্টপোস্ট",
    "summaryBn": "ফার্স্টপোস্টের বিশেষ আন্তর্জাতিক প্রতিবেদনে প্রকাশ, বিশ্ব স্বাস্থ্য সংস্থার (WHO) দক্ষিণ-পূর্ব এশিয়া অঞ্চলের পরিচালক পদ থেকে সরে দাঁড়ানোর প্রেক্ষাপট নিয়ে বিস্তারিত জানিয়েছেন শেখ হাসিনার কন্যা সায়মা ওয়াজেদ। তিনি তুলে ধরেছেন কীভাবে রাজনৈতিক পরিবর্তনের পর আন্তর্জাতিক কূটনীতি এবং আন্তঃসংস্থার উপর নজিরবিহীন চাপ তৈরি হয়েছিল, যা বৈশ্বিক স্বাস্থ্য সংস্থার পেশাদার নিরপেক্ষতাকে প্রশ্নবিদ্ধ করে।",
    "summaryEn": "Firstpost details the revelations shared by Saima Wazed, daughter of exiled former Prime Minister Sheikh Hasina, regarding the circumstances precipitating her resignation as Regional Director of WHO South-East Asia. Wazed outlined systemic political interference and diplomatic pressures mounted following the political transition in Dhaka, generating ripples across international multilateral agencies.",
    "keyPointsBn": [
      "আন্তর্জাতিক স্বাস্থ্য সংস্থায় দায়িত্ব পালনকালে রাজনৈতিক প্রভাব ও কূটনৈতিক চাপের বিবরণ",
      "জাতিসংঘের বিশেষায়িত সংস্থার পেশাদারিত্ব ও নিরপেক্ষতা নিয়ে বৈশ্বিক বিশেষজ্ঞদের মতবিনিময়",
      "নয়াদিল্লিভিত্তিক আঞ্চলিক সদর দপ্তরে এই ঘটনাকে ঘিরে কূটনীতিতে তৈরি হওয়া আলোচনা"
    ],
    "keyPointsEn": [
      "Saima Wazed discloses timeline of administrative and diplomatic challenges at WHO Regional Office",
      "Multilateral analysts scrutinize the politicization of international humanitarian and health bodies",
      "Diplomatic circles in New Delhi assess long-term implications for South-East Asia public health governance"
    ],
    "category": "diplomacy",
    "categoryLabelBn": "আন্তর্জাতিক সংস্থা ও কূটনীতি",
    "categoryLabelEn": "Health Diplomacy & UN",
    "sentiment": "neutral",
    "sentimentReasonBn": "আন্তর্জাতিক সংস্থার অভ্যন্তরীণ ঘটনাপ্রবাহ ও সাবেক পরিচালকের আনুষ্ঠানিক বয়ানের বস্তুনিষ্ঠ মূল্যায়ন।",
    "sentimentReasonEn": "Objective examination of international multilateral governance, diplomatic tensions, and high-level resignation.",
    "source": {
      "name": "Firstpost",
      "bureau": "Delhi",
      "language": "English",
      "originalUrl": "https://news.google.com/rss/articles/CBMiUkFVX3lxTFBaMmpqQVh1V0g5aHJ5bEdQbU9DaWhYUXh2Y3Q0R1EwSEsyMGV1dTN1cm05c1p4cVR5SGlfTDBiS0t6Z1pqM1hRME9hMkpQcTZ5RzE0dw?oc=5",
      "scannedAt": "2026-09-20T10:54:00Z"
    },
    "publishedAt": "2026-09-16T08:10:10Z",
    "readTimeBn": "৪ মিনিট পড়া",
    "readTimeEn": "4 min read",
    "imageUrl": "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "Firstpost",
      "Saima Wazed",
      "Sheikh Hasina",
      "WHO SEARO",
      "Diplomatic Protocol",
      "Delhi Bureau"
    ]
  },
  {
    "id": "news-20260920-042",
    "slug": "hindustan-times-tripura-court-sentences-5-bangladeshi-nationals-illegal-entry",
    "title": "Tripura Court Sentences Five Bangladeshi Nationals To Two Years Imprisonment For Unauthorized Cross-Border Entry",
    "englishTitle": "Tripura Court Sentences Five Bangladeshi Nationals To Two Years Imprisonment For Unauthorized Cross-Border Entry",
    "banglaTitle": "ত্রিপুরা আদালতে অবৈধ অনুপ্রবেশের দায়ে ৫ বাংলাদেশি নাগরিকের দুই বছরের কারাদণ্ড: হিন্দুস্তান টাইমস",
    "summaryBn": "হিন্দুস্তান টাইমসের প্রতিবেদনে প্রকাশ, ত্রিপুরার একটি আদালত আন্তর্জাতিক সীমান্ত অতিক্রম করে অবৈধভাবে ভারতে প্রবেশের দায়ে পাঁচজন বাংলাদেশি নাগরিককে দুই বছরের সশ্রম কারাদণ্ড ও অর্থদণ্ড প্রদান করেছে। সীমান্তরক্ষী বাহিনী (বিএসএফ) ও ত্রিপুরা পুলিশের যৌথ নজরদারিতে ধরা পড়ার পর দ্রুত বিচার প্রক্রিয়ার মাধ্যমে এই রায় দেওয়া হয়, যা সীমান্ত অপরাধ দমনে কঠোর বার্তা দিচ্ছে।",
    "summaryEn": "Hindustan Times reports that a local judicial court in Tripura has sentenced five Bangladeshi nationals to two years of rigorous imprisonment along with financial fines for unauthorized cross-border entry. The individuals were intercepted during coordinated patrols by the Border Security Force (BSF) and state police along the unfenced frontier sector, highlighting strict border vigilance.",
    "keyPointsBn": [
      "আন্তর্জাতিক সীমান্ত আইন লঙ্ঘনের দায়ে ত্রিপুরা আদালতের কঠোর সাজার রায়",
      "বিএসএফ ও রাজ্য পুলিশের সমন্বয়ে আন্তর্জাতিক সীমান্তে টহল জোরদার",
      "অবৈধ মানবপাচার ও অরক্ষিত সীমান্তে আধুনিক নজরদারি সরঞ্জাম মোতায়েনের সিদ্ধান্ত"
    ],
    "keyPointsEn": [
      "Tripura judiciary imposes strict penal sentences under the Foreigners Act for unlawful border crossing",
      "BSF accelerates day-and-night foot and drone patrols along unfenced riverine patches",
      "Cross-border intelligence sharing aims to dismantle tout syndicates facilitating undocumented crossings"
    ],
    "category": "border",
    "categoryLabelBn": "সীমান্ত ও বিচার বিভাগ",
    "categoryLabelEn": "Border & Security",
    "sentiment": "neutral",
    "sentimentReasonBn": "সীমান্ত আইন প্রয়োগ এবং আদালতের নিয়মিত বিচারিক প্রক্রিয়ার বস্তুনিষ্ঠ বিবরণ তুলে ধরা হয়েছে।",
    "sentimentReasonEn": "Fact-based reporting on judicial enforcement of border laws and counter-infiltration procedures.",
    "source": {
      "name": "Hindustan Times",
      "bureau": "Kolkata",
      "language": "English",
      "originalUrl": "https://news.google.com/rss/articles/CBMi1gFBVV95cUxOMi15d3lkQVQxbjVGcjRpTFUtTTBRYjQ3TFhQTGZISmd0alJVSml5cFlxNWRmdk1WTU43TndoMDlELTdqMFhtWWRhYzRUa2VJbXhjbmdaQU05cWpiRjNseEtYeEp2TUk1NmFtRWtvRU9yenFMS2FXblo3RlZRS3F4Wm9WaEdJMk1zblRvdk5jZkFEMFNkS3hKbWU5b016bTlBaFJvSUJsTWU0azJPbGk5SXdkQjRkNzl6Q0ZFdXlteUtaaUhtMmZEdDY0N0oxLUtvdlpQRjVB0gHbAUFVX3lxTE5nRVUwWFR2OTRwOW5QNHBhbHRFaFA0NzlTMEZjRDR2Vjg1UDBmTzlyUEJsY2lfWHQ0TU1mZ21Ga1Z0Q2ZxOGZYcjZKRlA1Zm9MVUJkZklqaFhzbllPQWw2UDlXbUNQeWxjd0NXbVN0ejZ1aW9wUm9Db1lMdnZSSnVrMURESm9DQTFxeU5SaDl0WEZuTkUzZ3VaUW9BRWpFakhqQ25ZV1M4RzF6SEpUU0tBV09wZ0hFSUlMZEdQNFNLdEdhNDdaZTI2RS1ZT1lwU3FZdzkyU2RMNXM2dw?oc=5",
      "scannedAt": "2026-09-20T10:54:00Z"
    },
    "publishedAt": "2026-09-17T12:19:32Z",
    "readTimeBn": "৩ মিনিট পড়া",
    "readTimeEn": "3 min read",
    "imageUrl": "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "Hindustan Times",
      "Tripura Bureau",
      "BSF",
      "Border Security",
      "Foreigners Act",
      "Agartala"
    ]
  },
  {
    "id": "news-20260920-043",
    "slug": "republic-world-four-crude-bombs-explode-dhaka-jatrabari-kamalapur-railway-station",
    "title": "Security Alert In Dhaka Following Series Of Crude Bomb Detonations Near Jatrabari And Kamalapur Station",
    "englishTitle": "Security Alert In Dhaka Following Series Of Crude Bomb Detonations Near Jatrabari And Kamalapur Station",
    "banglaTitle": "ঢাকার যাত্রাবাড়ী ও কমলাপুর রেলওয়ে স্টেশনে ককটেল বিস্ফোরণ: নিরাপত্তা জোরদার—রিপাবলিক ওয়ার্ল্ড",
    "summaryBn": "রিপাবলিক ওয়ার্ল্ডের নিরাপত্তা প্রতিবেদনে জানানো হয়েছে, ঢাকার যাত্রাবাড়ী মোড় এবং কমলাপুর রেলওয়ে স্টেশনের কাছে ধারাবাহিক ককটেল বা ক্রুড বোমা বিস্ফোরণের ঘটনায় একজন পথচারী আহত হয়েছেন। জনবহুল এলাকায় এই আকস্মিক বিস্ফোরণের পর পরিবহন টার্মিনাল এবং প্রধান প্রবেশপথগুলোতে বাড়তি পুলিশ ও র‍্যাব মোতায়েন করে সর্বোচ্চ সতর্কতা জারি করেছে আইনশৃঙ্খলা বাহিনী।",
    "summaryEn": "Republic World reports that security alerts have been raised across Dhaka following a sequence of crude bomb explosions near the busy Jatrabari transit corridor and Kamalapur Railway Station, resulting in commuter injuries. Bangladesh law enforcement agencies and rapid intervention units have escalated physical checkpoints and bag screenings across key transit infrastructure.",
    "keyPointsBn": [
      "যাত্রাবাড়ী এবং কমলাপুর রেলওয়ে এলাকায় একাধিক ককটেল বিস্ফোরণে আতঙ্ক ও যানজট",
      "নাশকতার আশঙ্কা ঠেকাতে জনবহুল স্থানে সিসিটিভি নজরদারি এবং তল্লাশি চৌকি বৃদ্ধি",
      "রাজনৈতিক অস্থিরতার মধ্যে নিরাপত্তা পরিস্থিতি নিয়ে প্রতিবেশী অঞ্চলের ভারতীয় পর্যবেক্ষকদের নজরদারি"
    ],
    "keyPointsEn": [
      "Crude explosive detonations outside central transit hubs disrupt commuter flows and raise alarms",
      "Police and security contingents establish perimeter cordons around key rail and bus terminals",
      "Incident triggers regional security advisories monitoring urban stability in the capital"
    ],
    "category": "border",
    "categoryLabelBn": "জননিরাপত্তা ও আইনশৃঙ্খলা",
    "categoryLabelEn": "Urban Security & Law Order",
    "sentiment": "negative",
    "sentimentReasonBn": "বোমা বিস্ফোরণ, সাধারণ মানুষের আতঙ্ক এবং নাশকতার আশঙ্কার কারণে সুর নেতিবাচক।",
    "sentimentReasonEn": "Focuses on explosive incidents, urban violence threats, and heightened law enforcement alerts.",
    "source": {
      "name": "Republic World",
      "bureau": "Delhi",
      "language": "English",
      "originalUrl": "https://news.google.com/rss/articles/CBMi4wFBVV95cUxQWlktZ3UtTXEyWms0Z2U4dmJqQjduWjV6OG94M1R0Sk14RVUxdndOamlzTS1sSlhiMUdIUi13dFdRN3dMLW1xSi1ackJ3cXBSdlRCSXE3Q0hqczVtTnVzdTB0cEFDR0lPSThwMUJqZk9BUTM5bGtrLW5WUDZCQlRxOGJMQS1MZGN0MEpvMk5rOFktY1FKUWFld1ZMM1Q0Y1ZqZlRvQ1piWkZrdlIycjV1Mnlwd2g3cERlM3Z1V25uZ3hpWEx6cFFzUkt0ckptQTNTN0Y1YXlUb3N5ZEItV0NwU0tpSdIB6AFBVV95cUxQT1BRT0R0b2Zra1NOeFN5MmEtTUVyRGtUX2dXbEhqb2poQXd0REZqUDNnVDFEcjZINFZQdkJMam5yZFdYeG9ZRFE3Rk9Md3FfUFRWWTM4Y0J5Y0UyYU9yc1lGOTViRklqSG5yZ1JtQ0ljc21mbXh0Y3MzOUxaLXJHWUVEV1gyb2ZicUpiRG95YXZhTU8zWU8xT25VMEROTEdRdGpaNWFfa2ZuVk5JQ2xFU1VzendHYUxtb2QwRG45ZXRVVllQYVVla3RMTkh5ZnJWM19YSjZVR2d2Y2h6SmlWLUNnLURoZjZK?oc=5",
      "scannedAt": "2026-09-20T10:54:00Z"
    },
    "publishedAt": "2026-09-20T01:21:24Z",
    "readTimeBn": "৩ মিনিট পড়া",
    "readTimeEn": "3 min read",
    "imageUrl": "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "Republic World",
      "Dhaka Bomb Blast",
      "Kamalapur",
      "Security Alert",
      "Urban Safety",
      "Delhi Bureau"
    ]
  },
  {
    "id": "news-20260920-044",
    "slug": "indian-express-cleared-sir-voted-woman-moves-high-court-husband-detained-bangladesh-immigrant",
    "title": "'Cleared Inquiries, Cast Votes': Woman Petitions High Court After Husband Detained On Suspected Illegal Migrant Allegations",
    "englishTitle": "'Cleared Inquiries, Cast Votes': Woman Petitions High Court After Husband Detained On Suspected Illegal Migrant Allegations",
    "banglaTitle": "‘সব তদন্তে উত্তীর্ণ হয়ে ভোটও দিয়েছেন’: বাংলাদেশি সন্দেহে স্বামী আটকের ঘটনায় দিল্লি হাইকোর্টে আবেদন—ইন্ডিয়ান এক্সপ্রেস",
    "summaryBn": "ইন্ডিয়ান এক্সপ্রেসের আইনি প্রতিবেদনে প্রকাশ, বাংলাদেশি অবৈধ অনুপ্রবেশকারী সন্দেহে আটক এক ব্যক্তির স্ত্রী দিল্লি হাইকোর্টে রিট আবেদন দায়ের করেছেন। আবেদনে উল্লেখ করা হয়েছে, তার স্বামী ভারতের নিয়মিত ভোটার তালিকায় অন্তর্ভুক্ত এবং সব ধরনের নাগরিক যাচাইকরণে বৈধ বলে প্রমাণিত হওয়া সত্ত্বেও তাকে আটক রাখা হয়েছে। আদালত এই বিষয়ে সংশ্লিষ্ট কর্তৃপক্ষকে অবস্থান স্পষ্ট করার নির্দেশ দিয়েছেন।",
    "summaryEn": "The Indian Express highlights a legal petition presented before the Delhi High Court by a woman whose husband was detained under suspicion of being an undocumented Bangladeshi immigrant. The petition underscores that the individual had successfully satisfied prior verification inquiries and exercised regular voting rights, prompting the judiciary to seek clarity on due process protocols.",
    "keyPointsBn": [
      "বৈধ পরিচয়পত্র ও ভোটাধিকার থাকা সত্ত্বেও সীমান্ত ও অভিবাসন সন্দেহে আটকের ঘটনায় হাইকোর্টে চ্যালেঞ্জ",
      "নাগরিকত্বের প্রমাণ এবং আটকের আইনি প্রক্রিয়া নিয়ে সাংবিধানিক সুরক্ষার প্রশ্ন",
      "সীমান্তবর্তী অভিবাসন নজরদারিতে প্রশাসনিক স্বচ্ছতার ওপর আদালতের তাগিদ"
    ],
    "keyPointsEn": [
      "Writ petition challenges administrative detention citing verified electoral participation and civil credentials",
      "Judicial bench examines procedural fairness and detention timelines under immigration verification rules",
      "Spotlights broader policy debates on distinguishing undocumented migrants from bonafide citizens"
    ],
    "category": "border",
    "categoryLabelBn": "আইন ও নাগরিক অধিকার",
    "categoryLabelEn": "Legal & Civil Rights",
    "sentiment": "neutral",
    "sentimentReasonBn": "আদালতের শুনানি, সাংবিধানিক অধিকার এবং প্রশাসনিক নজরদারির ভারসাম্যপূর্ণ আইনি বিবরণ।",
    "sentimentReasonEn": "Balanced court reporting exploring civil liberties, documentation safeguards, and immigration enforcement procedures.",
    "source": {
      "name": "The Indian Express",
      "bureau": "Delhi",
      "language": "English",
      "originalUrl": "https://indianexpress.com/article/cities/delhi/cleared-sir-voted-woman-moves-high-court-husband-detained-bangladesh-immigrant-10870123/",
      "scannedAt": "2026-09-20T10:54:00Z"
    },
    "publishedAt": "2026-09-20T03:01:19Z",
    "readTimeBn": "৪ মিনিট পড়া",
    "readTimeEn": "4 min read",
    "imageUrl": "/images/bangladesh-dhaka-high-court.jpg",
    "tags": [
      "The Indian Express",
      "High Court",
      "Immigration Laws",
      "Due Process",
      "Legal Rights",
      "Delhi Bureau"
    ]
  },
  {
    "id": "news-20260920-045",
    "slug": "thewall-countdown-to-hasina-return-december-delhi-meeting-political-roadmap",
    "title": "Deciphering Hasina's Political Strategy Ahead Of December Timelines Amid Shifting Dhaka-Delhi Equation",
    "englishTitle": "Deciphering Hasina's Political Strategy Ahead Of December Timelines Amid Shifting Dhaka-Delhi Equation",
    "banglaTitle": "হাসিনার প্রত্যাবর্তনের রোডম্যাপ ও ডিসেম্বরের হিসাব-নিকাশ: দিল্লির বৈঠকে রাজনৈতিক খসড়া অনুমোদন—দ্য ওয়াল",
    "summaryBn": "কলকাতার জনপ্রিয় ডিজিটাল পোর্টাল 'দ্য ওয়াল'-এর এক্সক্লুসিভ বিশ্লেষণে প্রকাশ, সাবেক প্রধানমন্ত্রী শেখ হাসিনার ভারতে অবস্থানের এক বছর পূর্ণ হওয়ার প্রেক্ষাপটে ডিসেম্বরের সম্ভাব্য রাজনৈতিক সময়সীমা সামনে রেখে একগুচ্ছ সাংগঠনিক সিদ্ধান্ত চূড়ান্ত হচ্ছে। আওয়ামী লীগের নির্বাসিত শীর্ষ নেতারা আন্তর্জাতিক মহলে আইনি লড়াই জোরদার এবং তৃণমূলের সাথে ডিজিটাল সংযোগ অব্যাহত রাখার ওপর জোর দিচ্ছেন।",
    "summaryEn": "TheWall publishes an analytical dispatch scrutinizing internal strategic deliberations among exiled Awami League leaders in New Delhi ahead of upcoming year-end political milestones. The leadership is structuring international legal defense mechanisms and digital coordination channels, while Indian diplomatic observers monitor how evolving timelines influence regional stability.",
    "keyPointsBn": [
      "ডিসেম্বর পর্যন্ত সাংগঠনিক কর্মসূচি ও আন্তর্জাতিক মহলে কূটনৈতিক যোগাযোগের পরিকল্পনা",
      "আন্তর্জাতিক অপরাধ ট্রাইব্যুনালের রায়ের বিরুদ্ধে বৈশ্বিক ফোরামে আইনি পদক্ষেপের প্রস্তুতি",
      "ঢাকা ও দিল্লির দীর্ঘমেয়াদী সমীকরণে নির্বাসিত নেতৃত্বের ভূমিকা নিয়ে বিশ্লেষণ"
    ],
    "keyPointsEn": [
      "Exiled leadership chalks out phased political and communication roadmaps through late 2026",
      "Legal preparations initiated to challenge ICT rulings before international human rights tribunals",
      "Regional experts examine potential diplomatic trajectories and backchannel contacts"
    ],
    "category": "politics",
    "categoryLabelBn": "রাজনীতি ও ভূ-রাজনীতি",
    "categoryLabelEn": "Politics & Strategic Matrix",
    "sentiment": "neutral",
    "sentimentReasonBn": "রাজনৈতিক কৌশল ও ভবিষ্যৎ সম্ভাবনার বস্তুনিষ্ঠ বিশ্লেষণ তুলে ধরা হয়েছে।",
    "sentimentReasonEn": "Analytical examination of party roadmaps, international legal strategies, and geopolitical calculus.",
    "source": {
      "name": "The Wall",
      "bureau": "Kolkata",
      "language": "Bengali",
      "originalUrl": "https://news.google.com/rss/articles/CBMi_wFBVV95cUxNY1VOMUMwV210R2xhWUFlSkpxaXRsMXhWazlYQjg3a25LY1kxNE9GWTd1bTJCSGtwdGFVNGt0dE1rNV9xZlkyMTZHS2FTb2N6aVBYS2lNVnZDVVIzZWJ5WmxFWnI3WFpzTVg0YU5wTzN1cVN5UDNnb1RFenhJdlNZbmpWcjZVZ3ptRUxnLW0tZXdrdEhyLVJsdHl3eG83RkxzTVdYTkdzLUU4UkNKcXNKeTJjblBFQU9wUktkQlF6QXZLSDgyb1FPRElKN1RxcHBYTHZtZkRQbDllc1JDQ2UyTFppNW91QkhGaWFoSTI3THU5WURuNEU3cmVIeE8yTGfSAf8BQVVfeXFMTWNVTjFDMFdtdEdsYVlBZUpKcWl0bDF4Vms5WEI4N2tuS2NZMTRPRlk3dW0yQkhrcHRhVTRrdHRTWTVfcWZZMjE2R0thU29jemlQWEtpTVZ2Q1VSM2VieVpsRVpyN1hac01YNGFOcE8zdXFTeVAzZ29URXp4SXZTWW5qVnI2VWd6bUVMZy1tLWV3a3RIci1SbHR5d3hvN0ZMc01XWE5Hcy1FOFJDSnFzSnkyY25QRUFPcFJLZEJRekF2S0g4Mm9RT0RJSjdUcXBwWEx2bWZEUGw5ZXNSQ0NlMkxaaTVvdUJIRmlhaEkyN0x1OVlEbjRFN3JlSHhPMkxn?oc=5",
      "scannedAt": "2026-09-20T10:54:00Z"
    },
    "publishedAt": "2026-09-17T15:45:00Z",
    "readTimeBn": "৪ মিনিট পড়া",
    "readTimeEn": "4 min read",
    "imageUrl": "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "The Wall",
      "Sheikh Hasina",
      "Political Strategy",
      "Awami League",
      "Kolkata Bureau",
      "Dhaka-Delhi"
    ]
  },
  {
    "id": "news-20260920-046",
    "slug": "ndtv-sports-asian-games-womens-cricket-india-vs-bangladesh-semifinal",
    "title": "Asian Games 2026 Women's Cricket: India Face Bangladesh In High-Stakes Continental Semi-Final",
    "englishTitle": "Asian Games 2026 Women's Cricket: India Face Bangladesh In High-Stakes Continental Semi-Final",
    "banglaTitle": "এশিয়ান গেমস ২০২৬ নারী ক্রিকেট সেমিফাইনাল: মুখোমুখি ভারত ও বাংলাদেশ টাইগ্রেস—এনডিটিভি স্পোর্টস",
    "summaryBn": "এনডিটিভি স্পোর্টসের খবরে প্রকাশ, এশিয়ান গেমসের নারী ক্রিকেটের দ্বিতীয় সেমিফাইনালে মুখোমুখি হচ্ছে হরমনপ্রীত কৌরের ভারত এবং নিগার সুলতানা জ্যোতির নেতৃত্বাধীন বাংলাদেশ দল। ফাইনালে ওঠার এই জমজমাট লড়াই দুই দেশের ক্রীড়াপ্রেমীদের মধ্যে বিপুল উদ্দীপনা সৃষ্টি করেছে, যা দ্বিপাক্ষিক সম্পর্কের কূটনৈতিক শীতলতার মাঝেও এক উজ্জ্বল ক্রীড়া সংযোগের দৃষ্টান্ত।",
    "summaryEn": "NDTV Sports and Hindustan Times preview the marquee Asian Games 2026 Women's Cricket semi-final clash between Harmanpreet Kaur's Team India and the Nigar Sultana Joty-led Bangladesh Tigresses. The contest brings energetic sports diplomacy to the forefront, celebrating shared South Asian cricketing passions amidst official diplomatic estrangement.",
    "keyPointsBn": [
      "এশিয়ান গেমসের পদক লড়াইয়ে ভারত ও বাংলাদেশ নারী ক্রিকেট দলের গুরুত্বপূর্ণ দ্বৈরথ",
      "স্পিন আক্রমণ ও ফিল্ডিং কৌশলে উভয় দলের কড়া প্রস্তুতির বিশদ বিশ্লেষণ",
      "দুই দেশের ক্রীড়া অনুরাগীদের মধ্যে সৌহার্দ্য ও ইতিবাচক সংযোগের আবহ"
    ],
    "keyPointsEn": [
      "High-stakes continental semifinal decides finalist for Asian Games women's cricket podium",
      "Focus on tactical bowling matchups and spin battle on subcontinental conditions",
      "Highlights robust sportsmanship and cross-border people-to-people affinity despite political chill"
    ],
    "category": "sports",
    "categoryLabelBn": "ক্রীড়া ও ক্রিকেট",
    "categoryLabelEn": "Sports & Cricket",
    "sentiment": "positive",
    "sentimentReasonBn": "প্রতিযোগিতাপূর্ণ ক্রীড়া আসর এবং দুই দেশের বন্ধুত্বপূর্ণ সাংস্কৃতিক মেলবন্ধনের বার্তা থাকায় ইতিবাচক।",
    "sentimentReasonEn": "Celebrates high-level athletic competition and enduring sports diplomacy between India and Bangladesh.",
    "source": {
      "name": "NDTV Sports",
      "bureau": "Delhi",
      "language": "English",
      "originalUrl": "https://news.google.com/rss/articles/CBMi1AFBVV95cUxQbXUwZzc3LVNGVC1TR0lORWZyTjVkZ25lM05pa2EyMmUtWXc5aEpYX0pvRXRpdjFhcF9FbWtoS2dYdUhoVXJDYUY5OXFOOU5naC1QN0FtRjdkamFvSVAzM0phS2dZd3gtbUFWalZTMVowUFJrc2tmMmNwX0dfR2ZnUUx2QXZILXc0Z3FHVm8wMjZYQ3k2VHRoRl9aQXdweE9kaUp3eXY3OHROMmozSkhEMkJfcDVlMnlaX09OUHVVNzVKTW9uWkJaZU1oZzVFQ09nY2tLWQ?oc=5",
      "scannedAt": "2026-09-20T10:54:00Z"
    },
    "publishedAt": "2026-09-20T02:56:42Z",
    "readTimeBn": "৩ মিনিট পড়া",
    "readTimeEn": "3 min read",
    "imageUrl": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=1200&auto=format&fit=crop&q=80",
    "isTrending": true,
    "tags": [
      "NDTV Sports",
      "Asian Games 2026",
      "Women Cricket",
      "India vs Bangladesh",
      "Sports Diplomacy",
      "Cricket"
    ]
  },
  {
    "id": "news-20260920-047",
    "slug": "defense-analysis-bangladesh-army-tenders-chinese-cs-lr43-assault-rifles",
    "title": "Indian Strategic Planners Track Bangladesh Military Procurement Tender For Chinese CS/LR-43 Assault Rifles",
    "englishTitle": "Indian Strategic Planners Track Bangladesh Military Procurement Tender For Chinese CS/LR-43 Assault Rifles",
    "banglaTitle": "বাংলাদেশ সেনাবাহিনীর জন্য চীন থেকে রাইফেল সংগ্রহের দরপত্রে ভারতীয় নিরাপত্তা মহলের দৃষ্টি: সামরিক পর্যালোচনা",
    "summaryBn": "ভারতীয় সামরিক বিশ্লেষকদের বরাতে জানা গেছে, বাংলাদেশ প্রতিরক্ষা ক্রয়ের মহাপরিদপ্তর (DGDP) চীনা অস্ত্র নির্মাতা প্রতিষ্ঠানের কাছ থেকে ১০০টি CS/LR-43 অ্যাসল্ট রাইফেল কেনার জন্য সীমিত দরপত্র আহ্বান করেছে। যদিও এটি একটি প্রাথমিক ক্রয়াদেশ, তবে বঙ্গোপসাগরীয় অঞ্চলে বেইজিংয়ের সামরিক সরঞ্জামের উপস্থিতি ও নির্ভরযোগ্যতার ওপর ঢাকার নির্ভরতা নিয়ে কৌশলগতভাবে নজর রাখছে দিল্লি।",
    "summaryEn": "Strategic defense analysts report that Bangladesh's Directorate General Defence Purchase (DGDP) has initiated a procurement tender for 100 CS/LR-43 assault rifles from China for the Bangladesh Army. While limited in scale, the acquisition is monitored by Indian defense planners tracking military interoperability and regional arms sales within the Bay of Bengal littoral.",
    "keyPointsBn": [
      "বাংলাদেশ সেনাবাহিনীর জন্য আধুনিক রাইফেল সংগ্রহের সীমিত দরপত্র আহ্বান",
      "চীনা প্রতিরক্ষা সরঞ্জাম ও যন্ত্রাংশের ওপর নির্ভরতা নিয়ে কৌশলগত বিশ্লেষণ",
      "বঙ্গোপসাগর অঞ্চলে সামগ্রিক সামরিক ভারসাম্য রক্ষায় দিল্লির পর্যবেক্ষণ"
    ],
    "keyPointsEn": [
      "DGDP issues procurement notice for specialized Chinese small arms infantry inventory",
      "Indian defense strategists examine broader modernization trends and supplier diversification",
      "Maintains focus on ensuring transparent defense engagements across neighborhood frontiers"
    ],
    "category": "diplomacy",
    "categoryLabelBn": "প্রতিরক্ষা ও কৌশলগত নীতি",
    "categoryLabelEn": "Defense & Strategic Balance",
    "sentiment": "negative",
    "sentimentReasonBn": "সীমান্তের কাছাকাছি অঞ্চলে তৃতীয় পক্ষের অস্ত্র বিস্তার ও সামরিক নির্ভরতার কারণে সুর সতর্ক ও নেতিবাচক।",
    "sentimentReasonEn": "Focuses on arms trade shifts, external geopolitical influence, and regional defense equilibrium concerns.",
    "source": {
      "name": "Indian Strategic Review",
      "bureau": "Delhi",
      "language": "English",
      "originalUrl": "https://news.google.com/rss/articles/CBMiUkFVX3lxTE1VQVFiX2ZvUmRjSnNLaXVSX0lWUTZIOE5fVDI4VTRlTl9URmcwYVNMR2dIcXZVODRubXhiSWgwR2NWeDB1QzBkdmtsMk43eTctTXc?oc=5",
      "scannedAt": "2026-09-20T10:54:00Z"
    },
    "publishedAt": "2026-09-20T03:00:18Z",
    "readTimeBn": "৪ মিনিট পড়া",
    "readTimeEn": "4 min read",
    "imageUrl": "/images/bangladesh-ministry-of-foreign-affairs.jpg",
    "tags": [
      "Defense Review",
      "Military Procurement",
      "China Defense",
      "Bay of Bengal",
      "Strategic Balance",
      "Delhi Bureau"
    ]
  },
  {
    "id": "news-20260920-048",
    "slug": "bnt-bangla-opposition-leader-raises-refugee-resettlement-border-minorities-assembly",
    "title": "Opposition Leader Raises Refugee Resettlement & Minority Protection Concerns Across Bengal Border",
    "englishTitle": "Opposition Leader Raises Refugee Resettlement & Minority Protection Concerns Across Bengal Border",
    "banglaTitle": "‘ওপার বাংলা থেকে আসা শরণার্থীদের পুনর্বাসন ও সংখ্যালঘু সুরক্ষা নিশ্চিত হোক’: বিধানসভায় শুভেন্দু অধিকারী (ভিডিও ডিসপ্যাচ)",
    "summaryBn": "বিএনটি বাংলা খবরের ইউটিউব ভিডিও ডিসপ্যাচে প্রচারিত হয়েছে পশ্চিমবঙ্গ বিধানসভার বিরোধী দলনেতা শুভেন্দু অধিকারীর বক্তব্য। তিনি বাংলাদেশে পরিবর্তিত পরিস্থিতিতে সংখ্যালঘু সনাতন ধর্মাবলম্বীদের নিরাপত্তা সংকট এবং শরণার্থী হিসেবে ভারতে আশ্রয় নেওয়া পরিবারগুলোর স্থায়ী নাগরিকত্ব ও সামাজিক সুরক্ষার দাবি জোরদার করার আহ্বান জানিয়েছেন।",
    "summaryEn": "BNT Bangla News publishes a video dispatch featuring remarks by West Bengal Leader of Opposition Suvendu Adhikari addressing the state assembly. Adhikari underscored urgent rehabilitation and civic protections required for minority families fleeing cross-border turmoil, reiterating calls for rigorous surveillance along the international boundary.",
    "keyPointsBn": [
      "ওপার বাংলায় সংখ্যালঘু সম্প্রদায়ের ওপর সাম্প্রতিক পরিস্থিতির প্রেক্ষিতে সুরক্ষার দাবি",
      "শরণার্থীদের দ্রুত প্রশাসনিক সহায়তা ও নাগরিক সুরক্ষার ওপর জোর",
      "সীমান্ত সুরক্ষায় রাজ্য ও কেন্দ্রীয় বাহিনীর সক্রিয় সহযোগিতার আহ্বান"
    ],
    "keyPointsEn": [
      "Assembly speech highlights vulnerabilities of cross-border religious minorities following regime change",
      "Emphasizes expedited civic welfare and resettlement documentation for displaced families",
      "Calls for strict coordinated boundary security between BSF and local law enforcement"
    ],
    "category": "border",
    "categoryLabelBn": "সীমান্ত ও শরণার্থী পুনর্বাসন",
    "categoryLabelEn": "Border & Humanitarian Issues",
    "sentiment": "negative",
    "sentimentReasonBn": "সীমান্তের ওপারে সংখ্যালঘু সংকট এবং মানবিক চ্যালেঞ্জ তুলে ধরায় সুর উদ্বেগমূলক ও নেতিবাচক।",
    "sentimentReasonEn": "Addresses persecution fears, displaced populations, and border rehabilitation controversies.",
    "source": {
      "name": "BNT বাংলা খবর",
      "bureau": "Kolkata",
      "language": "Bengali",
      "originalUrl": "https://www.youtube.com/watch?v=0WrRFhIezuc",
      "scannedAt": "2026-09-20T10:54:00Z"
    },
    "publishedAt": "2026-09-12T16:10:26Z",
    "readTimeBn": "৩ মিনিট পড়া",
    "readTimeEn": "3 min read",
    "imageUrl": "https://i.ytimg.com/vi/0WrRFhIezuc/hqdefault.jpg",
    "tags": [
      "BNT Bangla",
      "YouTube Dispatch",
      "Suvendu Adhikari",
      "Minority Rights",
      "Border Security",
      "Kolkata Bureau"
    ]
  },
  {
    "id": "news-20260920-025",
    "slug": "times-of-india-india-warns-bangladesh-over-reviewing-101-hasina-era-pacts",
    "title": "'Will Take All Necessary Actions': India Issues Stern Warning Amid Reports of Bangladesh Reviewing 101 Hasina-Era Pacts",
    "englishTitle": "'Will Take All Necessary Actions': India Issues Stern Warning Amid Reports of Bangladesh Reviewing 101 Hasina-Era Pacts",
    "banglaTitle": "হাসিনা আমলে স্বাক্ষরিত চুক্তি পুনর্মূল্যায়ন নিয়ে ঢাকার পদক্ষেপে ভারতের কড়া বার্তা: নিজেদের স্বার্থ রক্ষায় যেকোনো পদক্ষেপ নেবে দিল্লি",
    "summaryBn": "টাইমস অব ইন্ডিয়ার শীর্ষ প্রতিবেদনে প্রকাশ, শেখ হাসিনার ১৫ বছরের শাসনামলে ভারতের সঙ্গে স্বাক্ষরিত ১০১টি দ্বিপাক্ষিক চুক্তি ও সমঝোতা স্মারক পর্যালোচনার উদ্যোগ নিয়েছে ঢাকার অন্তর্বর্তী সরকার। এর প্রেক্ষিতে ভারতের পররাষ্ট্র মন্ত্রণালয় (MEA) সতর্ক বার্তা দিয়ে জানিয়েছে—দিল্লি এ ধরনের কোনো আনুষ্ঠানিক বিজ্ঞপ্তি এখনও পায়নি, তবে ভারতের জাতীয় ও কৌশলগত স্বার্থ সুরক্ষায় প্রয়োজনীয় সব পদক্ষেপ গ্রহণ করা হবে।",
    "summaryEn": "The Times of India reports that following announcements in Dhaka regarding a comprehensive review of 101 bilateral pacts signed during Sheikh Hasina's 15-year administration, New Delhi's Ministry of External Affairs has issued a firm diplomatic caution. Spokesperson Randhir Jaiswal stated India has received no formal communication, underscoring that India will take all necessary measures to protect its core strategic and commercial interests.",
    "keyPointsBn": [
      "হাসিনা সরকারের আমলে স্বাক্ষরিত ১০১টি দ্বিপাক্ষিক চুক্তি পর্যালোচনার সিদ্ধান্তে নয়াদিল্লির কড়া প্রতিক্রিয়া",
      "ভারতের পররাষ্ট্র মন্ত্রণালয় জানিয়েছে ঢাকার পক্ষ থেকে চুক্তি পুনর্মূল্যায়ন নিয়ে এখনও কোনো আনুষ্ঠানিক চিঠি আসেনি",
      "বিদ্যুৎ সরবরাহ, রেল ট্রানজিট ও সীমান্ত বাণিজ্য পরিকাঠামো সুরক্ষায় প্রস্তুত ভারত"
    ],
    "keyPointsEn": [
      "New Delhi issues stern response as Dhaka forms committee to scrutinize 101 bilateral treaties signed under Hasina",
      "MEA affirms no official communication received from Bangladesh regarding cancellation or modification of accords",
      "India underlines resolve to safeguard cross-border power transmission, transit corridors, and port access rights"
    ],
    "category": "diplomacy",
    "categoryLabelBn": "কূটনীতি ও দ্বিপাক্ষিক সম্পর্ক",
    "categoryLabelEn": "Diplomacy & Water",
    "sentiment": "neutral",
    "sentimentReasonBn": "দ্বিপাক্ষিক চুক্তির পর্যালোচনা ও ভারতের দৃঢ় কূটনৈতিক প্রতিক্রিয়ার উভয় পক্ষের অবস্থান বস্তুনিষ্ঠভাবে তুলে ধরা হয়েছে।",
    "sentimentReasonEn": "Balanced diplomatic reportage capturing both Dhaka's administrative review process and New Delhi's firm sovereign safeguards.",
    "source": {
      "name": "The Times of India",
      "bureau": "Delhi",
      "language": "English",
      "originalUrl": "https://news.google.com/rss/articles/CBMiiAJBVV95cUxNaU9GbnZVdWRLb0Q5d3ZGaC1BR216dU15Nm9ITVh2MjNxV25JN1pINUphclBFbUVIOWp2cEpZMEJFLXJZUjBQcV9nYmh3dkFHb2xHbElLeTRaeFZrNmpGZGF3VmRBX0VGeTdBbGNkbDlaYjBBaWJMaXJaVFJXQ0E1NmhaR3BNaC1NM25vREtUOXdnTUZONUt6ZmxPMTA3Ny13RzdWeGRSWGpMSGR3RW4tYUpKVE94SHB4UHljcDdldk9ia3RkWFpKNWs2ZG0tZlZiQmQtYU5hdUxhRGt3OUlhcGpEOVhLWUVFU1NaUms1ZUZUVThPZ3pqUTcxNUpMci1icUFkSlJtT3HSAY4CQVVfeXFMTklpaHo4T1U1T2lSZFdoUjVDM1FkZGNORFI1UHQ4SEdGOE9WYkQ5Mllya0pDUE9leWw3NHlYWkxvcjFPekl6eTZOVEJiNy1XQWczMDg2SEdqbXBoLUJaZHRHRWlhdThkTDBBdzVleDhKVXVmeWY2Yjd3eWtSQVoyYmhRX3RqWW5PYXVvM0xUNm1XQ0ZRaWVJcWx1dXhsZU9nUFlRUDBhMWVfWk1IcEJsYU14d3JqSjd1dW50Z25waElONG1DN21wTnYtMXV4RXp5Z1BzYVhBdkFQLWV5SkMxS19BYnk4WGJlbWpYUUVVY0tTRlJDNGZydmhKNHJ0SVMzQjNLeXRGeVBvQWFEbVJR?oc=5",
      "scannedAt": "2026-09-20T02:04:00Z"
    },
    "publishedAt": "2026-09-18T12:51:00Z",
    "readTimeBn": "৪ মিনিট পড়া",
    "readTimeEn": "4 min read",
    "imageUrl": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=1200&auto=format&fit=crop&q=80",
    "isLeadStory": false,
    "isTrending": true,
    "isBreaking": true,
    "tags": [
      "The Times of India",
      "Sheikh Hasina",
      "Bilateral Pacts",
      "MEA India",
      "Diplomacy",
      "Delhi Bureau"
    ]
  },
  {
    "id": "news-20260920-026",
    "slug": "news18-bangladesh-leadership-explores-diplomatic-reset-with-delhi-visit-late-2026",
    "title": "Bangladesh Leadership Explores Diplomatic Reset with Delhi Visit in Late 2026 Despite Hasina Exile Factor",
    "englishTitle": "Bangladesh Leadership Explores Diplomatic Reset with Delhi Visit in Late 2026 Despite Hasina Exile Factor",
    "banglaTitle": "হাসিনাকে ভারতে আশ্রয় দেওয়া সত্ত্বেও নভেম্বর বা ডিসেম্বরে তারেক রহমানের দিল্লি সফরের জোরালো সম্ভাবনা: নিউজ১৮",
    "summaryBn": "নিউজ১৮-এর এক্সক্লুসিভ কূটনৈতিক রিপোর্টে জানানো হয়েছে, শেখ হাসিনার ভারতে নির্বাসন নিয়ে জনপরিসরে টানাপোড়েন থাকলেও বিএনপি নেতৃত্ব ও অন্তর্বর্তীকালীন সরকার নয়াদিল্লির সাথে সম্পর্ক স্বাভাবিকীকরণে বাস্তবমুখী পদক্ষেপ নিচ্ছে। শীর্ষ সূত্রের বরাত দিয়ে বলা হয়েছে, চলতি বছরের নভেম্বর বা ডিসেম্বরের প্রথমার্ধে শীর্ষ পর্যায়ের একটি প্রতিনিধিদলের দিল্লি সফরের রূপরেখা প্রস্তুত হচ্ছে।",
    "summaryEn": "An exclusive dispatch by News18 reveals that despite visible political friction regarding former Prime Minister Sheikh Hasina's continued residence in India, Bangladesh's political leadership is actively exploring an official visit to New Delhi in late November or early December 2026 to recalibrate mutual economic, transit, and security engagements.",
    "keyPointsBn": [
      "শেখ হাসিনার প্রত্যর্পণ দাবি সত্ত্বেও নয়াদিল্লির সাথে উচ্চপর্যায়ের আনুষ্ঠানিক আলোচনার প্রস্তুতি",
      "বাণিজ্য, জ্বালানি ও সীমান্ত স্থিতিশীলতা বজায় রাখতে বিএনপির শীর্ষ নেতৃত্বের কূটনৈতিক বাস্তববাদ",
      "দক্ষিণ এশিয়ার ভূ-রাজনীতিতে ভারতের ভূমিকা বিবেচনায় দ্বিপাক্ষিক অচলাবস্থা কাটানোর প্রয়াস"
    ],
    "keyPointsEn": [
      "Diplomatic channels coordinate potential late-2026 New Delhi consultations for senior Bangladeshi leadership",
      "Pragmatic recognition of unavoidable economic and energy dependencies supersedes public rhetoric",
      "Both capitals work behind the scenes to compartmentalize Hasina's asylum from core bilateral cooperation"
    ],
    "category": "politics",
    "categoryLabelBn": "কূটনীতি ও নীতি",
    "categoryLabelEn": "Politics & Diplomacy",
    "sentiment": "positive",
    "sentimentReasonBn": "রাজনৈতিক মতপার্থক্য সত্ত্বেও শীর্ষ পর্যায়ের কূটনৈতিক সফর ও সম্পর্ক স্বাভাবিকীকরণের উদ্যোগে ইতিবাচক বার্তা রয়েছে।",
    "sentimentReasonEn": "Reflects constructive forward-looking engagement and pragmatic intentions to bridge bilateral gaps.",
    "source": {
      "name": "News18",
      "bureau": "Delhi",
      "language": "English",
      "originalUrl": "https://news.google.com/rss/articles/CBMizAFBVV95cUxQMEdkMzF2S1B3SHdsWUdVemxJWWZ1MTVQZkFaYzM4dUN3V0FIb3VQRENLV2VpWElBMnh1WWE0R2xRTFl5ZTIyRUpBc1Q0RDYweDVoT21FWWdIallUQW96bDlBN2plY3FiMnFOZi10djRvOU5fZVJMRE9Idi11RnN0RzF4UnBwSG11bm9HRlUwX1hueVpRaE4yMDNNMlVNdmliWkFHU01fQnVYSk5oVXZWTE1mZzRWNzdXT1FINjlPWE5OMWt0cVVyTWw2a3XSAdIBQVVfeXFMTnh4U2FOV0lEY2VEekdtM2Ixd1VoN3R6VVFVam9US09XckV0MEp4cFdZeWVQa3VlOXYxQUtHV3U1TVh1aG00dTN0RkR4bE1ZdGpHSE53Q3AzaUZ2M092U1pfRDF6TmVuaDhwQUJPMkxCRkRtd0FpZWVHaUxwWHo0QWJMNGFHXzNvSGJ4bUt3RFVsc0E3RW9lcEdZTHloNEZCQTJwbktYNlZ0eVNkZ1U5dnRXT2RhTkh5eTRLekxWREhEN0Z3d04xUWMyYzNmbzd0T2JR?oc=5",
      "scannedAt": "2026-09-20T02:04:00Z"
    },
    "publishedAt": "2026-09-18T07:16:04Z",
    "readTimeBn": "৪ মিনিট পড়া",
    "readTimeEn": "4 min read",
    "imageUrl": "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1200&auto=format&fit=crop&q=80",
    "isTrending": true,
    "tags": [
      "News18",
      "Tarique Rahman",
      "Sheikh Hasina",
      "Delhi Visit",
      "Diplomatic Reset",
      "Bilateral Relations"
    ]
  },
  {
    "id": "news-20260920-027",
    "slug": "the-hindu-sheikh-hasina-completes-one-year-exile-in-india-election-plans",
    "title": "Sheikh Hasina Completes A Year In Exile In India As Bangladesh Prepares For General Elections",
    "englishTitle": "Sheikh Hasina Completes A Year In Exile In India As Bangladesh Prepares For General Elections",
    "banglaTitle": "ভারতে শেখ হাসিনার রাজনৈতিক নির্বাসনের এক বছর পূর্ণ: বাংলাদেশে সাধারণ নির্বাচনের প্রস্তুতি ও জটিলতা নিয়ে দ্য হিন্দুর প্রতিবেদন",
    "summaryBn": "ভারতের মর্যাদাপূর্ণ ইংরেজি দৈনিক 'দ্য হিন্দু'-র বিশেষ প্রতিবেদনে তুলে ধরা হয়েছে ভারতে শেখ হাসিনার এক বছরেরও বেশি সময় ধরে অবস্থান এবং বাংলাদেশের আগামী জাতীয় নির্বাচনের জটিল সমীকরণ। প্রতিবেদনে উল্লেখ করা হয়, ঢাকায় অন্তর্বর্তী সরকার যখন নির্বাচন আয়োজনের পথ খুঁজছে, তখন সাবেক প্রধানমন্ত্রীর ভারতে অবস্থান এবং আওয়ামী লীগের তৃণমূল পুনর্গঠন রাজনৈতিক অঙ্গনে প্রধান আলোচ্য বিষয় হয়ে উঠেছে।",
    "summaryEn": "The Hindu publishes an extensive review analyzing former Prime Minister Sheikh Hasina's extended political exile in New Delhi, the legal deadlock over extradition treaties, and the escalating electoral debates in Bangladesh. The piece assesses how New Delhi is balancing humanitarian commitments to Hasina while managing long-term institutional ties with Dhaka.",
    "keyPointsBn": [
      "ভারতে শেখ হাসিনার রাজনৈতিক আশ্রয়ের দীর্ঘমেয়াদী প্রভাব ও দিল্লির ভারসাম্যপূর্ণ পররাষ্ট্রনীতি",
      "আওয়ামী লীগ নেতাকর্মীদের ভার্চুয়াল ও আঞ্চলিক তৎপরতা পর্যবেক্ষণ করছে ভারতীয় গোয়েন্দা সংস্থাগুলো",
      "২০২৬ সালের প্রস্তাবিত জাতীয় নির্বাচনে আওয়ামী লীগের অংশগ্রহণ ও আইনি বৈধতা নিয়ে বিতর্ক"
    ],
    "keyPointsEn": [
      "The Hindu analyzes strategic implications of Hasina's safe haven in India on bilateral dynamics",
      "Examines legal hurdles facing Dhaka's extradition requests under the 2013 bilateral treaty",
      "Highlights growing polarization surrounding Awami League's electoral status ahead of upcoming polls"
    ],
    "category": "politics",
    "categoryLabelBn": "কূটনীতি ও নীতি",
    "categoryLabelEn": "Politics & Governance",
    "sentiment": "neutral",
    "sentimentReasonBn": "নির্বাসনের আইনি, ঐতিহাসিক ও রাজনৈতিক দিকগুলো কোনো পক্ষপাত ছাড়াই ভারসাম্যপূর্ণভাবে তুলে ধরা হয়েছে।",
    "sentimentReasonEn": "Provides an impartial, comprehensive overview of exile politics, extradition law, and Bangladesh's evolving party matrix.",
    "source": {
      "name": "The Hindu",
      "bureau": "Delhi",
      "language": "English",
      "originalUrl": "https://news.google.com/rss/articles/CBMi4wFBVV95cUxNbDNNck9tTEVuSnV2My1odVQ5U1poV3gtbjZfMldMb202RUZ3MVpOeXd1UU15OVROMFFHaWJzbWxudC0tQVU4dloyWVJsR1F6WS1DY1pYN1RMZU9WcC1SV2xETHJhYXZvN2MtcnFpWEQ5QWRNeHk1RV8xdUs5UHVZUXc3d0NEWnBvSFpMZU9tMWQ2QXF3d2taTWhzeEY0M2FUVkF5YlBJSlkxNWVwYnNUQmZoeTMzei1wTjh6WWN4aTdmb3lRUlRqQUJSeHJBUDlJa0dVeW9Xd1JrdGhyTnJjY05KNNIB6gFBVV95cUxPS1MwaE1iYm9DaXplblY4bkFpLWY1ZXZIZFJoem1mRkExcnBPT0dtRndnT1N5cHpYbDlPRW52NEtMOFhvNFFobjIzaTl1UFRBTWNYQlNQeGVsZk5ETGNhTVY4aFVrc3cwRjZKckd6LV9XXzFzQVFfQUx5SHk2LWUxWEIyLWV3d1lrcHcwVXc5X0VhNDdFbXdyc19UYkJuVE1HRE8zQ2RFUm9LN0lVWllvTzBTcXY4c0V2YVRGZ3M4dERNaWIxR1ZZdmcwYkN4ZVVlVDJYZnhnYWYtMUNzdVNZeFBqNWVvcExFcWc?oc=5",
      "scannedAt": "2026-09-20T02:04:00Z"
    },
    "publishedAt": "2026-09-17T09:00:00Z",
    "readTimeBn": "৫ মিনিট পড়া",
    "readTimeEn": "5 min read",
    "imageUrl": "/images/bangabhaban-presidential-palace-dhaka.jpg",
    "isTrending": true,
    "tags": [
      "The Hindu",
      "Sheikh Hasina",
      "Exile Politics",
      "Awami League",
      "Bangladesh Elections",
      "Delhi Bureau"
    ]
  },
  {
    "id": "news-20260920-028",
    "slug": "india-today-rare-trade-reversal-india-exports-500-tonnes-hilsa-to-bangladesh",
    "title": "India Exports 500 Tonnes Of Hilsa To Bangladesh In Rare Cross-Border Trade Reversal",
    "englishTitle": "India Exports 500 Tonnes Of Hilsa To Bangladesh In Rare Cross-Border Trade Reversal",
    "banglaTitle": "ঐতিহাসিক বাণিজ্য উল্টোরথ: সরবরাহ সংকটে বাংলাদেশে ৫০০ টন ইলিশ রপ্তানি ভারতের—ইন্ডিয়া টুডে",
    "summaryBn": "ইন্ডিয়া টুডের প্রতিবেদনে এক ঐতিহাসিক বাণিজ্যিক পরিবর্তনের চিত্র তুলে ধরা হয়েছে। অতীতে দুর্গাপূজার মৌসুমে শেখ হাসিনা সরকারের পক্ষ থেকে ভারতে বিশেষ উপহার হিসেবে পদ্মা-মেঘনার ইলিশ রপ্তানি হতো। তবে বর্তমান অভ্যন্তরীণ ঘাটতি ও চরম বাজার মূল্যের কারণে ভারত থেকেই প্রায় ৫০০ টন সামুদ্রিক ইলিশ বাংলাদেশে রপ্তানি করা হয়েছে।",
    "summaryEn": "India Today covers a historic economic reversal along the Bengal border. Traditionally, Bangladesh under Sheikh Hasina gifted thousands of tonnes of prized Padma Hilsa to West Bengal for the festive season. In a stark role reversal triggered by local harvest shortages and export restrictions in Dhaka, Indian merchants have exported over 500 tonnes of marine hilsa across the Petrapole border.",
    "keyPointsBn": [
      "ঐতিহাসিক 'ইলিশ কূটনীতির' বিপরীতে ভারত থেকে বাংলাদেশে মাছ রপ্তানির বিরল নজির",
      "ঢাকার বাজারে তীব্র সরবরাহ সংকট ও মূল্যবৃদ্ধির মুখে ভারতীয় সামুদ্রিক ইলিশের ব্যাপক চাহিদা",
      "পেট্রাপোল-বেনাপোল স্থলবন্দর দিয়ে বিশেষ বাণিজ্য চালানের ছাড়পত্র প্রদান"
    ],
    "keyPointsEn": [
      "Historic reversal of traditional festive fish diplomacy between Kolkata and Dhaka",
      "Surging domestic retail prices and supply shortages in Bangladesh drive demand for Indian catch",
      "Land customs stations at Petrapole clear expedited shipments to stabilize retail markets in Dhaka"
    ],
    "category": "trade",
    "categoryLabelBn": "সীমান্ত বাণিজ্য ও খাদ্য সুরক্ষা",
    "categoryLabelEn": "Cross-Border Trade",
    "sentiment": "positive",
    "sentimentReasonBn": "সীমান্ত বাণিজ্যের নমনীয়তা এবং পারস্পরিক খাদ্য চাহিদা পূরণে বাণিজ্যিক সহযোগিতার প্রতিফলন থাকায় ইতিবাচক।",
    "sentimentReasonEn": "Highlights commercial adaptability, market interdependency, and functional border trade continuity.",
    "source": {
      "name": "India Today",
      "bureau": "Kolkata",
      "language": "English",
      "originalUrl": "https://news.google.com/rss/articles/CBMi4wFBVV95cUxPbmtPd1VacU1IOWliQ1VaRXJEUkRrRHBKSHo3ZFBER0ZqSWxGaF92bHFXUmNITXhsT05BdXZ1YlJYaWhjWWRwakpXcGZYazc3d1NkZnNxN0g3R3JvMU9xWHEzUWUtbkxGcEFQNEdISmg5VzQ1SWFRd1VhaS00cUJZcjBkWUxpSm91bThaV000aHUzMDZmX01LcUEyREFHeFlReHBBY0RFdnI0ODI0SnAxQ3FsRTN4Z3dyVzVsRncwZVhHd2ZOSXlZb00xdmlRbTdoTzYxaGlNUnpGSVQ0ZnZ5Ri03QdIB6AFBVV95cUxQOFNMUGRjQWhxcFNnREdpdXNVcnFXbVFOMTFjYnRsRjQ0ZUxIMzdaQ2lyUzdzMTZ0Wm50bkpCNHJWYkRzZFBaU2tXajFCRTVGWnhOaDR6U1hfRlN2d1FNbVdqS1IwVTd4UU5mdlVMVlB3YS1aWjhCcExkS2VUSXU3bEdOZzFzbVVTS21OMVR1WUx3cF9MRWt0WlBEeDl0U0IyaFFYM01GREsySGwzSjB3YzN6c2txRk1BQzlKVGl3R3lTNVlaVVhMNUlMUV8zUVpVbm93VkNENW14d1JrVXQ0YjUxRF92RUwt?oc=5",
      "scannedAt": "2026-09-20T02:04:00Z"
    },
    "publishedAt": "2026-09-13T17:42:21Z",
    "readTimeBn": "৩ মিনিট পড়া",
    "readTimeEn": "3 min read",
    "imageUrl": "/images/hilsa-fish-trade-export.jpg",
    "tags": [
      "India Today",
      "Hilsa Trade",
      "Cross-Border Commerce",
      "Petrapole",
      "Food Supply",
      "Kolkata Bureau"
    ]
  },
  {
    "id": "news-20260920-029",
    "slug": "telegraph-india-envoy-meets-bangladesh-water-ministry-for-fresh-cooperation-push",
    "title": "Indian Envoy And Bangladesh Water Resources Ministry Seek Fresh Push For Joint River Cooperation",
    "englishTitle": "Indian Envoy And Bangladesh Water Resources Ministry Seek Fresh Push For Joint River Cooperation",
    "banglaTitle": "অভিন্ন নদীর পানিবণ্টন ও অববাহিকা ব্যবস্থাপনায় সহযোগিতা জোরদারে ভারতীয় হাইকমিশনার ও ঢাকার পানি মন্ত্রণালয়ের বৈঠক: টেলিগ্রাফ ইন্ডিয়া",
    "summaryBn": "দ্য টেলিগ্রাফ-এর প্রতিবেদনে জানানো হয়েছে, ভারতের হাইকমিশনার এবং বাংলাদেশের পানিসম্পদ মন্ত্রণালয়ের শীর্ষ কর্মকর্তাদের মধ্যে এক গুরুত্বপূর্ণ দ্বিপাক্ষিক বৈঠক অনুষ্ঠিত হয়েছে। বৈঠকে আকস্মিক বন্যা পূর্বাভাস তথ্য বিনিময়, নদী অববাহিকা খনন এবং ৫৪টি অভিন্ন নদীর টেকসই ব্যবস্থাপনায় যৌথ নদী কমিশন (JRC)-এর কারিগরি কার্যক্রম গতিশীল করার ওপর জোর দেওয়া হয়েছে।",
    "summaryEn": "The Telegraph reports on productive bilateral consultations between the Indian High Commissioner and Bangladesh's Ministry of Water Resources in Dhaka. The meeting focused on revitalizing institutional data-sharing mechanisms under the Joint Rivers Commission (JRC), improving real-time monsoon flood forecasting, and undertaking coordinated riverbed dredging across shared watersheds.",
    "keyPointsBn": [
      "বন্যা পূর্বাভাস ও নদীর নাব্যতা রক্ষায় ভারত ও বাংলাদেশের যৌথ কারিগরি উদ্যোগের পুনরুজ্জীবন",
      "রাজনৈতিক জটিলতার বাইরে এসে যৌথ নদী কমিশনের বিশেষজ্ঞ পর্যায়ের বৈঠকের তাগিদ",
      "উভয় দেশের পরিবেশগত সুরক্ষা ও কৃষকদের সেচ নিরাপত্তা নিশ্চিত করার প্রত্যয়"
    ],
    "keyPointsEn": [
      "India and Bangladesh explore renewed technical cooperation through Joint Rivers Commission mechanisms",
      "Priority placed on real-time monsoon flood telemetry and sediment dredging along shared riverbanks",
      "Both delegations agree on insulating technical hydrology consultations from broader geopolitical tensions"
    ],
    "category": "diplomacy",
    "categoryLabelBn": "কূটনীতি ও তিস্তা",
    "categoryLabelEn": "Diplomacy & Water",
    "sentiment": "positive",
    "sentimentReasonBn": "বন্যা নিয়ন্ত্রণ ও অভিন্ন নদীর ব্যবস্থাপনায় উভয় দেশের যৌথ সহযোগিতার ইতিবাচক দিক তুলে ধরা হয়েছে।",
    "sentimentReasonEn": "Constructive focus on institutional river management, flood early warning telemetry, and mutual riparian welfare.",
    "source": {
      "name": "The Telegraph India",
      "bureau": "Kolkata",
      "language": "English",
      "originalUrl": "https://news.google.com/rss/articles/CBMi6wFBVV95cUxQSElFSWt2NVdFVE9sNjhSMUZobUtxV2VrRVZmNWFDLTVzUWtYVHZrUXllRjQ4b1BQNWYwNVl3bm40aEdKVHRxcWZsQXF1RTAtVV9kbUYtbDNoTjBGSlcyTlNiY0J3c1Q1bEVaZ21LQTd3ZnoyMC1vWk81OFR6RTJlMWN4YnBVTUtvVDlrUUdwZWUyZ0JTc1JJZmV2V0hCczNWeFlmWExhZ2VIekp0RUVCZnRhcV91WVBkb2UtQmJ4dHY1Ulp1OHNEcnh1QXdOZmxvN0FteUlYdWEtVEpPbzVKb3Y4eHZoWWVicUZZ0gHwAUFVX3lxTE9OZ1pVQmVXcUdnN25vZDR5eEVtUzVucGlYRV9GdGdmS0VCZWhNWXdNQkxWRFhmZ1lkS0tsakQ3VmN0djZNdVNFcS1QUDQtMGxFcE9hRURBVUlCdEx2MEJqMGFBdFlRblhnQWY3cUZHV0dTUl92XzF5MTJwYkJNb3g1ZUpKWWpMM0tWdFd4cVFDYk9aeDBTb0I0dmVrYjlYaWpOVktUUC1IbmNnSTFLa2l5bXRFeWZpSmd4TUJlamRmdXJpUWdBcjlueVliN2tBSFd4TE9aOHBORjlOMkpMd0s1TkF1UE95TXc2ZFZLelJvdA?oc=5",
      "scannedAt": "2026-09-20T02:04:00Z"
    },
    "publishedAt": "2026-09-13T14:41:59Z",
    "readTimeBn": "৪ মিনিট পড়া",
    "readTimeEn": "4 min read",
    "imageUrl": "/images/bangladesh-ministry-of-foreign-affairs.jpg",
    "tags": [
      "The Telegraph",
      "Water Diplomacy",
      "Joint Rivers Commission",
      "Teesta",
      "Flood Forecasting",
      "Kolkata Bureau"
    ]
  },
  {
    "id": "news-20260920-030",
    "slug": "indian-express-durga-puja-bangladesh-government-promises-support-minority-safety",
    "title": "Ahead Of Durga Puja, Bangladesh Interim Administration Vows Multi-Tier Protection For Hindu Minority",
    "englishTitle": "Ahead Of Durga Puja, Bangladesh Interim Administration Vows Multi-Tier Protection For Hindu Minority",
    "banglaTitle": "আসন্ন দুর্গাপূজায় সংখ্যালঘু সনাতন ধর্মাবলম্বীদের নিরাপত্তায় সমন্বিত পদক্ষেপের অঙ্গীকার ঢাকার: ইন্ডিয়ান এক্সপ্রেসের নজরদারি",
    "summaryBn": "ইন্ডিয়ান এক্সপ্রেসের প্রতিবেদনে প্রকাশ, শারদীয় দুর্গাপূজা নির্বিঘ্নে উদযাপনের লক্ষ্যে বাংলাদেশে পূজা মণ্ডপগুলোতে সার্বক্ষণিক নিরাপত্তা এবং বিশেষ কুইক রেসপন্স টিম মোতায়েনের প্রতিশ্রুতি দিয়েছে অন্তর্বর্তীকালীন সরকার। ধর্মীয় সংখ্যালঘুদের নিরাপত্তা নিশ্চিতে সেনাবাহিনীর টহল এবং সিসিটিভি ক্যামেরা নজরদারি জোরদার করার বিষয়টি নয়াদিল্লির কূটনৈতিক মহলে নিবিড়ভাবে পর্যবেক্ষিত হচ্ছে।",
    "summaryEn": "The Indian Express highlights security guarantees extended by Bangladesh's interim administration to Hindu minority leaders ahead of the major Durga Puja festival. Law enforcement agencies have rolled out integrated command centers, deployed army patrols, and mandated digital surveillance across thousands of pandals nationwide, a matter tracked closely by Indian civil society and policy circles.",
    "keyPointsBn": [
      "শারদীয় দুর্গোৎসব ঘিরে দেশব্যাপী ৩২ হাজারের বেশি মণ্ডপে বিশেষ নিরাপত্তা ব্যবস্থা গ্রহণ",
      "কোনো প্রকার বিশৃঙ্খলা বা সাম্প্রদায়িক উসকানি ঠেকাতে সেনাবাহিনীর কঠোর অবস্থানের বার্তা",
      "সংখ্যালঘুদের সুরক্ষা ও ধর্মীয় সম্প্রীতি রক্ষায় ঢাকার পদক্ষেপে নজর রাখছে ভারতীয় পর্যবেক্ষক মহল"
    ],
    "keyPointsEn": [
      "Bangladesh government deploys multi-tier security coordination across over 32,000 Durga Puja venues",
      "Armed forces and local administration establish rapid response teams to deter communal incidents",
      "Cross-border civil society in West Bengal and MEA maintain active monitoring of minority welfare"
    ],
    "category": "border",
    "categoryLabelBn": "সীমান্ত ও জননিরাপত্তা",
    "categoryLabelEn": "Border & Security",
    "sentiment": "neutral",
    "sentimentReasonBn": "নিরাপত্তা ব্যবস্থা ও উৎসব পালনের প্রশাসনিক প্রস্তুতির ভারসাম্যপূর্ণ বিবরণ প্রদান করা হয়েছে।",
    "sentimentReasonEn": "Objective reporting on administrative safeguards, minority community representation, and cross-border sentiment.",
    "source": {
      "name": "The Indian Express",
      "bureau": "Delhi",
      "language": "English",
      "originalUrl": "https://indianexpress.com/article/world/durga-puja-bangladesh-government-promises-support-safety-hindu-minorities-10868001/",
      "scannedAt": "2026-09-20T02:04:00Z"
    },
    "publishedAt": "2026-09-08T05:20:43Z",
    "readTimeBn": "৪ মিনিট পড়া",
    "readTimeEn": "4 min read",
    "imageUrl": "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "The Indian Express",
      "Durga Puja",
      "Minority Rights",
      "Security Protocols",
      "Communal Harmony",
      "Delhi Bureau"
    ]
  },
  {
    "id": "news-20260920-031",
    "slug": "ndtv-delhi-monitors-dhaka-beijing-teesta-talks-defense-deal",
    "title": "New Delhi Closely Monitors Dhaka-Beijing Engagement Over Teesta Basin Project And Defense Talks",
    "englishTitle": "New Delhi Closely Monitors Dhaka-Beijing Engagement Over Teesta Basin Project And Defense Talks",
    "banglaTitle": "তিস্তা নদী প্রকল্প ও সামরিক চুক্তি নিয়ে ঢাকা-বেইজিং তৎপরতায় দিল্লির সতর্ক পর্যবেক্ষণ: এনডিটিভি",
    "summaryBn": "এনডিটিভির কৌশলগত প্রতিবেদনে জানানো হয়েছে, তিস্তা নদী সমন্বিত ব্যবস্থাপনা প্রকল্প বাস্তবায়ন এবং অত্যাধুনিক সামরিক সরঞ্জাম ক্রয়ের বিষয়ে ঢাকা ও বেইজিংয়ের মধ্যে নতুন করে অগ্রগতি নিয়ে গভীর নজর রাখছে ভারতের নিরাপত্তা এস্টাবলিশমেন্ট। শিলিগুড়ি করিডোর বা 'চিকেনস নেক'-এর সন্নিকটে কোনো চীনা প্রকৌশলীদের উপস্থিতি দিল্লির কৌশলগত রেড লাইন হিসেবে বিবেচিত।",
    "summaryEn": "NDTV reports that India's national security apparatus is closely tracking ongoing technical dialogues between Dhaka and Beijing concerning the comprehensive Teesta River Basin Restoration Project and prospective defense procurements. New Delhi views high-density foreign presence near the sensitive Siliguri Corridor ('Chicken's Neck') with critical strategic concern.",
    "keyPointsBn": [
      "তিস্তা নদীর খনন ও তীর সংরক্ষণ প্রকল্পে চীনা অর্থায়নের সম্ভাবনা নিয়ে দিল্লির কঠোর নজরদারি",
      "শিলিগুড়ি করিডোরের নিরাপত্তা সংবেদনশীলতার কারণে তিস্তা প্রকল্পে ভারতের সরাসরি আগ্রহ বিদ্যমান",
      "দক্ষিণ এশিয়ায় আঞ্চলিক ভারসাম্য বজায় রাখতে ঢাকার ভারসাম্যমূলক পররাষ্ট্রনীতির প্রয়োজনীয়তা"
    ],
    "keyPointsEn": [
      "Indian defense analysts examine implications of Chinese involvement in Teesta basin projects",
      "Geographic proximity to the vital Siliguri Corridor reinforces New Delhi's strategic sensitivity",
      "Diplomatic circles urge Dhaka to factor in reciprocal core security interests across the border"
    ],
    "category": "diplomacy",
    "categoryLabelBn": "কূটনীতি ও নিরাপত্তা",
    "categoryLabelEn": "Diplomacy & Security",
    "sentiment": "negative",
    "sentimentReasonBn": "সীমান্তের কৌশলগত এলাকায় তৃতীয় পক্ষের সামরিক ও অবকাঠামোগত উপস্থিতি নিয়ে উদ্বেগের সুর প্রতিফলিত।",
    "sentimentReasonEn": "Highlights strategic apprehensions and security frictions surrounding big-power influence near India's border.",
    "source": {
      "name": "NDTV",
      "bureau": "Delhi",
      "language": "English",
      "originalUrl": "https://news.google.com/rss/articles/CBMisgFBVV95cUxNRWJiZ1FNUmIxUEhuNGJpU2c1NG1udW1QQlpCQjY1Zl9oV1czaU9iak8zckozaGxiRV9aanZWUkpqRGt6Mjk4bUZEVWR4SnV3R0s0bDZJMS1pMWt4NFBsT0RtM0hna0NhMlFiQ1pQV1ZJellsbFcwVGRwQzFra1dEQ0lWZTNEQzBSRG1hczhFdWRTMVJmdWhxOU04RHRwa09KRHFoc2FaU2V0Tkk3ZnltVkF30gG6AUFVX3lxTE16MWJhcGhkb3phbzl4WFZ1N1RndmxkeXY4U19HeVp3VUVuUzZ4SFlqQ0NaLTFMLS1UeXdQV2puaThhZU5CcDlEcUNUUEx4LWF4VC1FRm1RZ3BfSTdFYWEtZ0lvMDRySXY0UmlMQ25CX3FtVEFKT1lSaC1ZYndjS2lIUmdTMTB0R2FsMFBHbjZlQm9mRDZRMkZ1R0QwaEltaVpIbTRWZF91NmlNMjhoWFNXeWtGS2JxeVFLQQ?oc=5",
      "scannedAt": "2026-09-20T02:04:00Z"
    },
    "publishedAt": "2026-09-01T07:00:00Z",
    "readTimeBn": "৪ মিনিট পড়া",
    "readTimeEn": "4 min read",
    "imageUrl": "/images/bangladesh-ministry-of-foreign-affairs.jpg",
    "tags": [
      "NDTV",
      "Teesta River",
      "Geopolitics",
      "Siliguri Corridor",
      "National Security",
      "Delhi Bureau"
    ]
  },
  {
    "id": "news-20260920-032",
    "slug": "times-of-india-bangladesh-tribunal-extends-arrest-warrants-sheikh-hasina",
    "title": "Special Tribunal Extends Extradition Demands and Warrants Against Ousted PM Sheikh Hasina",
    "englishTitle": "Special Tribunal Extends Extradition Demands and Warrants Against Ousted PM Sheikh Hasina",
    "banglaTitle": "আন্তর্জাতিক অপরাধ ট্রাইব্যুনালের গ্রেফতারি পরোয়ানা ও হাসিনাকে ফেরানোর দাবি: দিল্লির আইনি বিশ্লেষণ—টাইমস অব ইন্ডিয়া",
    "summaryBn": "টাইমস অব ইন্ডিয়ার আইনি বিশ্লেষণে প্রকাশ, ঢাকায় আন্তর্জাতিক অপরাধ ট্রাইব্যুনাল ভারতে অবস্থানরত ক্ষমতাচ্যুত সাবেক প্রধানমন্ত্রী শেখ হাসিনার বিরুদ্ধে পরোয়ানা পুনর্ব্যক্ত করে ইন্টারপোলের রেড নোটিশ জারির তৎপরতা অব্যাহত রেখেছে। ভারতীয় আন্তর্জাতিক আইন বিশেষজ্ঞরা উল্লেখ করেছেন, ২০১৩ সালের প্রত্যর্পণ চুক্তির রাজনৈতিক অপরাধ সংক্রান্ত অনুচ্ছেদের কারণে দিল্লির ওপর কোনো তাৎক্ষণিক বাধ্যবাধকতা নেই।",
    "summaryEn": "The Times of India assesses the legal deadlock surrounding repeated arrest warrants and extradition demands issued by Dhaka's Special Tribunal against exiled leader Sheikh Hasina. Indian legal authorities note that the 2013 India-Bangladesh Extradition Treaty contains explicit exception clauses regarding offenses of an overwhelmingly political character.",
    "keyPointsBn": [
      "আন্তর্জাতিক অপরাধ ট্রাইব্যুনালের পরোয়ানা ও ইন্টারপোল নোটিশ নিয়ে ঢাকায় সরকারি তৎপরতা",
      "২০১৩ সালের ভারত-বাংলাদেশ প্রত্যর্পণ চুক্তির রাজনৈতিক অপরাধ ধারা নিয়ে ভারতীয় বিশেষজ্ঞদের মত",
      "দীর্ঘমেয়াদী নির্বাসন ও নিরাপত্তা প্রটোকল নিয়ে দিল্লির স্বরাষ্ট্র ও পররাষ্ট্র মন্ত্রণালয়ের সমন্বিত অবস্থান"
    ],
    "keyPointsEn": [
      "Dhaka tribunals pursue international red notice procedures targeting exiled Awami League leadership",
      "Jurists highlight Article 6 and 8 exceptions in the 2013 Extradition Treaty protecting political refugees",
      "New Delhi maintains firm institutional posture providing safe harbor amidst shifting regional dynamics"
    ],
    "category": "politics",
    "categoryLabelBn": "আইন ও বিচার",
    "categoryLabelEn": "Politics & Legal Issues",
    "sentiment": "negative",
    "sentimentReasonBn": "রাজনৈতিক উদ্দেশ্যে দায়েরকৃত মামলা ও প্রত্যর্পণ নিয়ে দ্বিপাক্ষিক কূটনৈতিক টানাপোড়েনের কারণে নেতিবাচক।",
    "sentimentReasonEn": "Reflects continuing bilateral friction, legal impasses, and political polarization over high-profile trials.",
    "source": {
      "name": "The Times of India",
      "bureau": "Delhi",
      "language": "English",
      "originalUrl": "https://news.google.com/rss/articles/CBMi0wFBVV95cUxNaldNQTdfSmFoYTRpZktMV2hMOXo2emJ2MVVqNTFTeGpPLVlwZHlQeXdRc0FhUG5hYTBtbU5FVk9aNkJnUXRaRVoxODVrZWRUUTNzX2pEM0J6Y3VoTzdQU2NpMUFhQUQzMjVaTGlwR2FJUmh5a1pnVjZHcDhkQ3ZIbjc3NGc3TE1fY1BXbjhydDJrLW5OeHU3dEIzWFRSRmpVczFET2xlZWx1bHhUdEN1ZUtSSjNWanB6Y2pUZXJCenNYaUN0a2hKM0N4M0hZQTEzTmdj0gHYAUFVX3lxTE84QzFfUm5BWGVEZVV6dC1QcTNxSWF2bEFYTUZtZ2RaY1RTNWF1bDlVbjZwMGRINFBoUXV1aWNvZm02NDFNNGNZbU85UEl6bWVBQnQ0MUxoNWozcjBfRTVDSm9qVTAtR3hyWm1iN0pocDhjSEJ3RHYxc01uTWRlQjdjc0xxMEhYT1pQZDV6VzZhQjVvaFRJUDhuYzRHNy1lY0RaRFBobW5ZN0RSeXRVRldCU3JPTHJqVjRhMVhkdW1nUEYyc0k1UU1XNzZqaEZscTc1VGtrTlhNQQ?oc=5",
      "scannedAt": "2026-09-20T02:04:00Z"
    },
    "publishedAt": "2026-09-07T08:00:00Z",
    "readTimeBn": "৪ মিনিট পড়া",
    "readTimeEn": "4 min read",
    "imageUrl": "/images/bangladesh-international-crimes-tribunal-ict-dhaka.jpg",
    "tags": [
      "The Times of India",
      "Sheikh Hasina",
      "Extradition Treaty",
      "ICT Tribunal",
      "Red Notice",
      "Delhi Bureau"
    ]
  },
  {
    "id": "news-20260920-033",
    "slug": "news18-bangladesh-seeks-end-to-india-fascination-economic-dependencies",
    "title": "'Just Another Country': Bangladesh Seeks End To 'India Fascination' While Acknowledging Economic Dependencies",
    "englishTitle": "'Just Another Country': Bangladesh Seeks End To 'India Fascination' While Acknowledging Economic Dependencies",
    "banglaTitle": "‘ভারত মোহ কাটানোর তাগিদ’: ঢাকার পররাষ্ট্র নীতিতে সমমর্যাদার বয়ান ও অর্থনৈতিক বাস্তবতার দ্বন্দ্ব—নিউজ১৮",
    "summaryBn": "নিউজ১৮-এর বিশ্লেষণে বলা হয়েছে, অন্তর্বর্তী সরকারের নীতি-নির্ধারকরা পররাষ্ট্রনীতিতে 'ভারত নির্ভরতার মানসিকতা' থেকে বেরিয়ে সমমর্যাদার সম্পর্ক গড়ার কথা বলছেন। তবে একই সাথে বিশ্লেষকরা স্বীকার করছেন—নিত্যপ্রয়োজনীয় খাদ্য, বিদ্যুৎ সংযোগ ও ট্রানজিটের মতো জরুরি বিষয়গুলোতে ভারতের বিকল্প তৈরি করা ঢাকার পক্ষে অবাস্তব।",
    "summaryEn": "News18 examines evolving political discourse in Dhaka advocating for treating India as 'just another neighbor' rather than an overarching focal point. However, seasoned economists and diplomatic analysts caution that absolute reliance on Indian electricity lines, onion and wheat imports, and land-route transit imposes natural limits on any radical decoupling.",
    "keyPointsBn": [
      "ঢাকার রাজনৈতিক মহলে সমমর্যাদাভিত্তিক স্বাধীন পররাষ্ট্রনীতির বয়ান প্রতিষ্ঠা করার চেষ্টা",
      "অর্থনৈতিক বিশ্লেষকদের মতে ভারতের সাথে বাণিজ্য ও জ্বালানি সংযোগ ছিন্ন করা আত্মঘাতী হবে",
      "নয়াদিল্লি ঢাকার অভ্যন্তরীণ বক্তব্যকে স্বাভাবিক গণতান্ত্রিক রূপান্তর হিসেবে পর্যবেক্ষণ করছে"
    ],
    "keyPointsEn": [
      "Dhaka policy rhetoric seeks to reframe bilateral engagement around strict reciprocal sovereignty",
      "Trade specialists underline deep supply chain entanglement across food staples and grid electricity",
      "New Delhi adopts strategic patience, monitoring pragmatic policy adjustments on the ground"
    ],
    "category": "diplomacy",
    "categoryLabelBn": "কূটনীতি ও নীতি",
    "categoryLabelEn": "Foreign Policy & Trade",
    "sentiment": "neutral",
    "sentimentReasonBn": "রাজনৈতিক বয়ান ও অর্থনৈতিক বাস্তবতার মধ্যকার ভারসাম্যপূর্ণ দ্বন্দ্ব তুলে ধরা হয়েছে।",
    "sentimentReasonEn": "Balanced appraisal of political sovereignty aspirations juxtaposed against stark economic dependencies.",
    "source": {
      "name": "News18",
      "bureau": "Delhi",
      "language": "English",
      "originalUrl": "https://news.google.com/rss/articles/CBMiygFBVV95cUxOOG54YXdnR0hCeDd2UGN5RThQdEt4bjhhTk9heTdIbFhLWHphWWdONFkzblFvUWE5RGxtajVJNm81QTJocTVubFZNNTAtZG5fckpqTldqWnUyeDF5RFRqQkdUS1FZRHItOWVtbkpNLXE1cDNnQkJvbHB2NEZrRThrWDVZYWpNTW1Bbk0tS083R0lhbUZQQUdlck9BaC1kUTFHQlVzYXZOenAwZmZFTGdmRUgxTzRXY0hTNjNFY0ZrbU1fQmpIMUJLNG9R0gHPAUFVX3lxTFBnel9hTXFMY2JxdTM1cGUzYUwzaU1lM0ZvRzEwVm9LR28tdkpUU0VRSmd4VE1WMnlHbmlpOEw4Wk9yUURXZFlxOHpvQ3QydmVybmpwdDR0TWhCOWJuYW5WOXA4VWQ4aG1MeUhpOUVfaUNBTDdVXzFIbG5UcXdCVUtZbklzMHFINmtkLVhiWXhYbEw1YzRnSWdsUlJtZDVFRjNlMnpieXZwQzRRVG10Y1ZiYS0yRmVibVE1UU1oSW9HaElJNnpjOHlYblBaUzBETQ?oc=5",
      "scannedAt": "2026-09-20T02:04:00Z"
    },
    "publishedAt": "2026-09-13T17:09:50Z",
    "readTimeBn": "৪ মিনিট পড়া",
    "readTimeEn": "4 min read",
    "imageUrl": "/images/bangladesh-high-commission-new-delhi.jpg",
    "tags": [
      "News18",
      "Bilateral Reset",
      "Foreign Policy",
      "Trade Dependence",
      "Economic Realities",
      "Delhi Bureau"
    ]
  },
  {
    "id": "news-20260920-034",
    "slug": "the-hindu-clarification-on-brics-and-bimstec-summit-invitations-dhaka",
    "title": "Diplomatic Clarifications Issued Over Bangladesh Representation At Multilateral Summits",
    "englishTitle": "Diplomatic Clarifications Issued Over Bangladesh Representation At Multilateral Summits",
    "banglaTitle": "বহুপাক্ষিক সম্মেলনে বাংলাদেশের প্রতিনিধিত্ব ও আমন্ত্রণ নিয়ে কূটনৈতিক বিভ্রান্তি নিরসনের ব্যাখ্যা: দ্য হিন্দু",
    "summaryBn": "দ্য হিন্দুর কূটনৈতিক বিশ্লেষণে বলা হয়েছে, ব্রিকস (BRICS) আউটরিচ সম্মেলনে বাংলাদেশের আমন্ত্রণ নিয়ে তৈরি হওয়া কূটনৈতিক বিতর্কের অবসান ঘটিয়েছে ঢাকা। পররাষ্ট্র মন্ত্রণালয় স্পষ্ট করেছে যে আমন্ত্রণটি নির্দিষ্ট কোনো ব্যক্তি নয় বরং বিমসটেকের বর্তমান প্রাতিষ্ঠানিক কাঠামোর আওতায় পাঠানো হয়েছিল।",
    "summaryEn": "The Hindu clarifies protocol controversies regarding Bangladesh's representation at recent multilateral summits. Dhaka's foreign office clarified that multilateral invitations extended through regional groupings like BIMSTEC are institutional rather than bilateral, quelling speculation over diplomatic snubs.",
    "keyPointsBn": [
      "ব্রিকস সম্মেলনে বাংলাদেশের অংশগ্রহণ সংক্রান্ত ভুল বোঝাবুঝি অবসানে পররাষ্ট্র মন্ত্রণালয়ের ব্যাখ্যা",
      "বিমসটেক ও সার্কের মতো আঞ্চলিক মঞ্চে উভয় দেশের বহুপাক্ষিক সম্পৃক্ততা অব্যাহত রাখার তাগিদ",
      "দক্ষিণ এশীয় সংযোগ জোরদারে বহুপাক্ষিক কূটনীতির গুরুত্ব তুলে ধরেছেন বিশ্লেষকরা"
    ],
    "keyPointsEn": [
      "Dhaka issues clarification establishing that multilateral invites adhere to institutional BIMSTEC chairs",
      "Dispels rumors of deliberate diplomatic friction regarding high-level delegation representation",
      "Underlines importance of maintaining functional multilateral platforms across the Bay of Bengal"
    ],
    "category": "diplomacy",
    "categoryLabelBn": "কূটনীতি ও বহুপাক্ষিক সম্পর্ক",
    "categoryLabelEn": "Multilateral Diplomacy",
    "sentiment": "neutral",
    "sentimentReasonBn": "কূটনৈতিক ভুল বোঝাবুঝি নিরসন ও প্রটোকলের ব্যাখ্যা নিরপেক্ষভাবে উপস্থাপন করা হয়েছে।",
    "sentimentReasonEn": "Fact-based clarification defusing political speculation over international summit invitations.",
    "source": {
      "name": "The Hindu",
      "bureau": "Delhi",
      "language": "English",
      "originalUrl": "https://news.google.com/rss/articles/CBMi5AFBVV95cUxOOFhCLVdCZGNwSDlUbFpvZXVoUV9IWFFGNktQOWVJWlg5Y3BwbUdISFlRajQ5NktXQ2xUSHFVU0RFV0JIbGRZQmVUeWI0dGNhdjJSTlZYaktoRVVVWHlTbnlBVDVWXzdocGtaNDhMbHJEdFd2WXp0NEJlS1U5NXRITldTMWdLWGo1MXMxNW1aZVZic08wQTdNT1FWZEhVS09nN0xfTzA3cUtKSXNmRmN3UHpOYWs4bnlsOGsyMzQ4a01RRllWdzhDd01BZHZZQ3ZsYWZaTTJCZjRhUTM2Yjh3WHZxaXnSAesBQVVfeXFMTzdtalgyU042UVZiYjJ3cmVQQ25HUXM3VXFMbEc1ZFBWaW5UMGV0MXRCUjRLYzdlaWpkQWl4Smt6aWU1QkJaTDRfUWhpLWpqQ3NmdG5sOXoxRnhST0tmTUQzTC10bjRiTFZuYUkyektiLUppX3RJZVhNR2R4djJET0JvSjBHYURPTWhtMGxtV19PaHcxV29rNThIdVc4dnFkSjBlMXpwTEhaUVlwbzZfOVlHcXZmdE5iWTJPdzQtYVBsUVhyeVJCZVB0Mjg4bmlMb2xRTGRsa1NtTGkxZ1EyTDJIUWZqOFVoQzMtcw?oc=5",
      "scannedAt": "2026-09-20T02:04:00Z"
    },
    "publishedAt": "2026-09-11T07:00:00Z",
    "readTimeBn": "৩ মিনিট পড়া",
    "readTimeEn": "3 min read",
    "imageUrl": "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "The Hindu",
      "BIMSTEC",
      "BRICS Summit",
      "Multilateral Diplomacy",
      "Protocol",
      "Delhi Bureau"
    ]
  },
  {
    "id": "news-20260920-035",
    "slug": "ndtv-in-flight-brawl-on-biman-bangladesh-london-flight-cabin-safety",
    "title": "Civil Aviation Safety Under Spotlight After In-Flight Brawl On Dhaka-London Route",
    "englishTitle": "Civil Aviation Safety Under Spotlight After In-Flight Brawl On Dhaka-London Route",
    "banglaTitle": "বিমান বাংলাদেশ এয়ারলাইন্সের লন্ডন ফ্লাইটে মাঝআকাশে যাত্রীদের মারামারির ভিডিও ভাইরাল: এভিয়েশন নিরাপত্তা পর্যালোচনা—এনডিটিভি",
    "summaryBn": "এনডিটিভি ও ইন্ডিয়ান এক্সপ্রেসের প্রতিবেদনে ভাইরাল হওয়া একটি ঘটনার বিশদ বিবরণ দেওয়া হয়েছে, যেখানে বিমান বাংলাদেশ এয়ারলাইন্সের ঢাকা থেকে লন্ডনগামী ফ্লাইটে দুই যাত্রীর মধ্যে তুমুল হাতাহাতি ও মারামারির ঘটনা ঘটে। উড়ন্ত বিমানে যাত্রীদের এ ধরনের অপ্রীতিকর আচরণ এবং কেবিন ক্রুদের তাৎক্ষণিক নিয়ন্ত্রণ ব্যবস্থা আন্তর্জাতিক এভিয়েশন সুরক্ষা পরিমণ্ডলে আলোচিত হচ্ছে।",
    "summaryEn": "NDTV covers the viral altercation aboard Biman Bangladesh Airlines flight BG201 en route from Dhaka to London Heathrow. Footage showing passengers exchanging blows mid-air drew extensive international commentary on cabin crew de-escalation protocols, passenger restraint measures, and strict aviation penalties for unruly behavior.",
    "keyPointsBn": [
      "মাঝআকাশে আসন নিয়ে বাকবিতণ্ডার জেরে বিমানে সহিংস মারামারির ভিডিও সামাজিক মাধ্যমে তোলপাড়",
      "হিথ্রো বিমানবন্দরে অবতরণের পর সংশ্লিষ্ট যাত্রী ও আইনগত ব্যবস্থা গ্রহণ নিয়ে বেসামরিক বিমান চলাচল কর্তৃপক্ষের বিবৃতি",
      "আন্তর্জাতিক রুটে যাত্রী নিরাপত্তা নিশ্চিত করতে কঠোর নিরাপত্তা নজরদারির তাগিদ"
    ],
    "keyPointsEn": [
      "Viral mid-air confrontation aboard long-haul flight triggers civil aviation safety reviews",
      "Biman Bangladesh cabin crew intervention and subsequent handover to airport law enforcement",
      "Highlights global focus on airline passenger conduct enforcement and unruly flyer regulations"
    ],
    "category": "culture",
    "categoryLabelBn": "সংস্কৃতি ও জনজীবন",
    "categoryLabelEn": "Aviation & Society",
    "sentiment": "negative",
    "sentimentReasonBn": "আন্তর্জাতিক রুটে যাত্রীদের বিশৃঙ্খল আচরণ এবং বিমানের সার্বিক সুনামে আঘাত হানার কারণে সুর নেতিবাচক।",
    "sentimentReasonEn": "Focuses on unruly passenger conduct, in-flight safety disruptions, and regulatory repercussions.",
    "source": {
      "name": "NDTV",
      "bureau": "Delhi",
      "language": "English",
      "originalUrl": "https://news.google.com/rss/articles/CBMiuwFBVV95cUxQcjQxb2twZzF6TjFDZjBHbjNTbkRvNlpOZl9nVjBOb2E4dXZrUF9tbnFOOFBrNnhBTGtSdzlUUEo1Znh6YUhwSGoxMFFQMVVMSlV4ZFNzZTZRU2VSd2VYeGplV3JoSDNTVWZqVHNVdnBMME16WUd3eUNJSHZfekZwYXNmbmYyX3hSVEFpMHNLR0dkb1V6aHJSVkJiNk10SzdyQ3pqTURLaDBYNjBMWHdVMUQ5Y0kxZndRV1Jv0gHDAUFVX3lxTE5CeTdKMkItaDhiY1J4SXhrckU3SF9FVURPRFRvZ1ozaDIzODZoSFRKU25CZXF1aHB6R3AwOUpnYVhMeDVoRDVxRDktYVYwWFhfLTY0VWtxdGtFRHBpdFQyR3AzQUJFZmdlaDFwaFNGT1oxbU1fN05BYi1Sdk5raUEtc1BaLVMxc0U4RENqd0psYS1JRUs1NHdndTNMaFFfOFRQb3FnLThfaTFrUWdqdzJCd1owb2dPOERzcDZLN2pGMUhiMA?oc=5",
      "scannedAt": "2026-09-20T02:04:00Z"
    },
    "publishedAt": "2026-09-18T06:46:18Z",
    "readTimeBn": "৩ মিনিট পড়া",
    "readTimeEn": "3 min read",
    "imageUrl": "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "NDTV",
      "Aviation Safety",
      "Biman Bangladesh",
      "London Flight",
      "Viral News",
      "Civil Security"
    ]
  },
  {
    "id": "news-20260920-036",
    "slug": "the-hindu-suspected-cross-border-infiltrator-held-near-strategic-naval-academy",
    "title": "Intelligence Interception Of Suspected Cross-Border Infiltrator Prompts Security Advisory Along Key Corridors",
    "englishTitle": "Intelligence Interception Of Suspected Cross-Border Infiltrator Prompts Security Advisory Along Key Corridors",
    "banglaTitle": "কৌশলগত ঘাঁটির সন্নিকটে সন্দেহভাজন অনুপ্রবেশকারী আটক: পূর্ব ও দক্ষিণ সীমান্তে যৌথ নিরাপত্তা সতর্কবার্তা—দ্য হিন্দু",
    "summaryBn": "দ্য হিন্দু জানিয়েছে, ভারতীয় কৌশলগত প্রতিরক্ষা স্থাপনার সন্নিকটে জাল পরিচয়পত্র ব্যবহার করে কর্মরত থাকা এক সন্দেহভাজন অবৈধ অনুপ্রবেশকারীকে আটক করেছে কেন্দ্রীয় গোয়েন্দা ও নিরাপত্তা বাহিনী। এই ঘটনার প্রেক্ষাপটে পূর্বাঞ্চলীয় সীমান্তসহ গুরুত্বপূর্ণ স্থলবন্দর ও সীমান্তবর্তী স্পর্শকাতর এলাকাগুলোতে নজরদারি আরও কঠোর করার নির্দেশনা জারি করা হয়েছে।",
    "summaryEn": "The Hindu reports that joint central intelligence agencies apprehended an undocumented cross-border national operating under forged credentials near a major Indian strategic training establishment. The security breach has prompted central agencies to issue heightened counter-infiltration advisories across coastal and land border entry stations.",
    "keyPointsBn": [
      "সংবেদনশীল প্রতিরক্ষা স্থাপনার আশপাশে নজরদারি জোরদার এবং জাল নথি যাচাইকরণ অভিযান",
      "সীমান্তবর্তী আন্তর্জাতিক চেকপোস্টগুলোতে ডিজিটাল বায়োমেট্রিক শনাক্তকরণ ব্যবস্থা কড়াকড়ি",
      "অবৈধ মানবপাচার চক্রের বিরুদ্ধে যৌথ অভিযান পরিচালনার ঘোষণা গোয়েন্দা সংস্থাগুলোর"
    ],
    "keyPointsEn": [
      "Intelligence agencies apprehend undocumented individual utilizing counterfeit identity papers near strategic zones",
      "Comprehensive verification drives launched targeting fraudulent documentation networks along border transit belts",
      "Heightened vigilance mandated for coastal and land customs checkposts to prevent irregular crossings"
    ],
    "category": "border",
    "categoryLabelBn": "সীমান্ত নিরাপত্তা ও নজরদারি",
    "categoryLabelEn": "Border & Counter-Infiltration",
    "sentiment": "negative",
    "sentimentReasonBn": "নিরাপত্তা হুমকি, অনুপ্রবেশ এবং কৌশলগত স্থাপনায় নজরদারি বৃদ্ধির প্রয়োজনীয়তা তুলে ধরায় সুর নেতিবাচক।",
    "sentimentReasonEn": "Covers national security alerts, fraudulent cross-border documentation networks, and counter-infiltration vigilance.",
    "source": {
      "name": "The Hindu",
      "bureau": "Delhi",
      "language": "English",
      "originalUrl": "https://news.google.com/rss/articles/CBMivgFBVV95cUxPaF9NQmJjR0J5Y3c0cmFTaE5CSWF2Y2hHWTBXU1MweFFkYlJ4VHFLaVVoTmNGYXIwNkRMX2ZqT1NRZ0RzblByM2x0VGkzdjczX1AwUjNzNHF6Nzk3ZjB1RndVQ3ZHQzlxWlZWVjN0UmZtclJGWmtDTUs3MWxyOV9GWGFaQm16c3BIWlF1LXdVeDdhUm95NGlVeHVVSTdDNVRQcUZQdGdFSW1EdUw2Q3hDa09xNzVhU0Z2NTFlb2xB0gHEAUFVX3lxTFBMRDRiTXkyT3N2OXBZX25feWpvbUFUT0N5eG5jamZRM3N3YlRUM3hMSFhpME82dDdEUlhqVklrbUhtdkRWR1Z2T3BPNGdNYy05aEdZclBYU2R2UW1JSjRyRjJjMU1ESUVDSnhzNFlJZ1htZ1Q5ZUFOY1hpVXRUbkhDZVRkbC1kRUJmZHQ4Mm9ab2ZiVjBYaXA1cVZKWUFxX1phSndKY2lnTW1LWVFYVWwxd1prNS1IRVRJZ0ZFaU80RjVpbTc?oc=5",
      "scannedAt": "2026-09-20T02:04:00Z"
    },
    "publishedAt": "2026-09-18T14:27:53Z",
    "readTimeBn": "৪ মিনিট পড়া",
    "readTimeEn": "4 min read",
    "imageUrl": "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "The Hindu",
      "Border Security",
      "Intelligence Alert",
      "Infiltration",
      "National Security",
      "Delhi Bureau"
    ]
  },
  {
    "id": "news-20260920-013",
    "slug": "dainik-jagran-india-bangladesh-pacts-will-not-be-cancelled-focus-mutual-benefit",
    "title": "भारत-बांग्लादेश समझौते रद नहीं होंगे, दोनों देशों के लिए लाभकारी बनाना लक्ष्य - jagran.com",
    "englishTitle": "Dainik Jagran: India-Bangladesh Accords Will Not Be Scrapped, Focus on Mutual Benefit & Economic Continuity",
    "banglaTitle": "ভারত-বাংলাদেশ চুক্তি বাতিল হবে না, উভয় দেশের স্বার্থ রক্ষা ও কার্যকারিতাই মূল লক্ষ্য: দৈনিক জাগরণ",
    "summaryBn": "ভারতের শীর্ষ হিন্দি দৈনিক 'দৈনিক জাগরণ'-এর দিল্লি ব্যুরোর বিশেষ প্রতিবেদনে প্রকাশ, অন্তর্বর্তী সরকার পূর্ববর্তী সরকারের আমলে স্বাক্ষরিত দ্বিপাক্ষিক চুক্তিগুলো পুনর্মূল্যায়ন করলেও তা পাইকারি হারে বাতিল করা হবে না। বরং ট্রানজিট, বিদ্যুৎ সরবরাহ ও বাণিজ্যের মতো গুরুত্বপূর্ণ খাতগুলোতে উভয় দেশের পারস্পরিক অর্থনৈতিক স্বার্থ রক্ষা করে চুক্তিগুলোকে আরও কার্যকর রূপ দেওয়াই বর্তমান কূটনৈতিক প্রক্রিয়ার লক্ষ্য।",
    "summaryEn": "New Delhi bureau of leading Hindi daily Dainik Jagran reports that bilateral agreements signed during the previous tenure will not be scrapped unilaterally by Dhaka. Instead, ongoing diplomatic consultations focus on recalibrating transit, electricity transmission, and cross-border commercial pacts to ensure they remain mutually beneficial and pragmatically operational for both nations.",
    "keyPointsBn": [
      "ভারতের সাথে পূর্ববর্তী সরকারের স্বাক্ষরিত চুক্তিগুলো একতরফা বাতিল না করে কার্যকারিতা বৃদ্ধির পর্যালোচনা",
      "রেল ট্রানজিট, জ্বালানি সরবরাহ এবং বন্দর ব্যবহার সংক্রান্ত চুক্তিতে উভয় দেশের বাণিজ্যিক সুবিধার ওপর জোর",
      "দিল্লির কূটনৈতিক মহলে ঢাকার সাথে গঠনমূলক অর্থনৈতিক অংশীদারিত্ব বজায় রাখার আশাবাদ ব্যক্ত"
    ],
    "keyPointsEn": [
      "Dainik Jagran reports bilateral treaties signed under previous regimes will undergo recalibration rather than unilateral cancellation",
      "High priority placed on preserving cross-border rail transit, electricity wheeling, and port logistics",
      "Diplomatic circles in New Delhi express optimism for pragmatic, mutually beneficial economic relations"
    ],
    "category": "trade",
    "categoryLabelBn": "সীমান্ত বাণিজ্য ও বন্দর",
    "categoryLabelEn": "Cross-Border Trade",
    "sentiment": "positive",
    "sentimentReasonBn": "চুক্তি বাতিল নয় বরং দ্বিপাক্ষিক অর্থনৈতিক সংযোগ ও পারস্পরিক স্বার্থ সুরক্ষার ওপর গুরুত্ব দেওয়ায় ইতিবাচক মনোভাব প্রকাশিত হয়েছে।",
    "sentimentReasonEn": "Emphasizes constructive economic engagement and continuation of bilateral connectivity rather than cancellation of pacts.",
    "source": {
      "name": "Dainik Jagran",
      "bureau": "Delhi",
      "language": "Hindi",
      "originalUrl": "https://news.google.com/rss/articles/CBMinwFBVV95cUxONTJfT3ItMmhSZGpZV1NFRVVJYUs2M3dGQWMyNEdsSl83ZUVBcDdVaWlBTGxIV2dodzRpRVkzdUwxSnFHbkJlVDBoTkRCVEhZbkdieEw0UTdRZ1RHRThhaXpGT1ZDTGhXYzFTTHRHMDZmelhmT245aHo0RkdQcmZySHhScGF4UmxsSWVLVWd1NlJZUk5CQjJIU0l1RmExWEU?oc=5",
      "scannedAt": "2026-09-20T01:58:00Z"
    },
    "publishedAt": "2026-09-19T16:56:00Z",
    "readTimeBn": "৪ মিনিট পড়া",
    "readTimeEn": "4 min read",
    "imageUrl": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80",
    "isLeadStory": false,
    "isTrending": true,
    "isBreaking": true,
    "tags": [
      "Dainik Jagran",
      "Bilateral Agreements",
      "Hindi Media",
      "Cross-Border Trade",
      "Transit Accords",
      "Delhi Bureau"
    ]
  },
  {
    "id": "news-20260920-014",
    "slug": "amar-ujala-bsf-steps-up-border-surveillance-expedites-fencing-indo-bangla-frontier",
    "title": "भारत-बांग्लादेश बॉर्डर: सीमावर्ती इलाकों में अतिक्रमण और अवैध प्रवासियों पर बीएसएफ की नजर, तेजी से लगेगी बाड़ - Amar Ujala",
    "englishTitle": "Amar Ujala: BSF Intensifies Surveillance Against Border Encroachments & Illegal Infiltration, Speeds Up Smart Fencing",
    "banglaTitle": "ভারত-বাংলাদেশ সীমান্ত: অনুপ্রবেশ ও দখলদারি রুখতে বিএসএফের নজরদারি জোরদার, দ্রুত কাঁটাতারের বেড়া দেওয়ার নির্দেশ: অমর উজালা",
    "summaryBn": "হিন্দি দৈনিক 'অমর উজালা' জানিয়েছে, ভারত-বাংলাদেশ আন্তর্জাতিক সীমান্তের অরক্ষিত এলাকায় অবৈধ অনুপ্রবেশ ও সীমান্ত অপরাধ কঠোরভাবে দমনে বর্ডার সিকিউরিটি ফোর্স (বিএসএফ) আধুনিক স্মার্ট ফেন্সিং নির্মাণের গতি বাড়িয়েছে। নদীমাতৃক ও দুর্গম সীমান্ত অঞ্চলে অতিরিক্ত নজরদারি চৌকি এবং ড্রোন টহল বৃদ্ধির নির্দেশনা দেওয়া হয়েছে।",
    "summaryEn": "Leading Hindi daily Amar Ujala reports that the Border Security Force (BSF) has expedited the installation of smart composite fencing along vulnerable and unfenced stretches of the Indo-Bangladesh international frontier, deploying thermal night-vision sensors and aerial surveillance to curb illegal infiltration and cross-border encroachment.",
    "keyPointsBn": [
      "ভারত-বাংলাদেশ সীমান্তের অরক্ষিত অংশে স্মার্ট ফেন্সিং ও থার্মাল ইমেজিং ক্যামেরা স্থাপনের গতি বৃদ্ধি",
      "সীমান্ত এলাকায় অপরাধ চক্র ও অনুপ্রবেশ ঠেকাতে ভারতীয় সীমান্তরক্ষী বাহিনীর বিশেষ সতর্কতা জারি",
      "স্থানীয় বাসিন্দা ও বিজিবির সঙ্গে নিয়মিত ফ্ল্যাগ মিটিং ও সমন্বয় অব্যাহত রাখার নির্দেশ"
    ],
    "keyPointsEn": [
      "Amar Ujala reports BSF accelerating smart composite fencing across unfenced riverine and overland stretches",
      "Heightened vigilance deployed along Assam, West Bengal, and Tripura borders to curb illicit migration",
      "Focus placed on coordinated border patrol mechanisms and institutional flag meetings with BGB"
    ],
    "category": "border",
    "categoryLabelBn": "সীমান্ত নিরাপত্তা",
    "categoryLabelEn": "Border & Security",
    "sentiment": "neutral",
    "sentimentReasonBn": "সীমান্তে নজরদারি বৃদ্ধি ও অবকাঠামোগত নিরাপত্তা জোরদারের প্রশাসনিক ও কৌশলগত পদক্ষেপের বস্তুনিষ্ঠ বিবরণ।",
    "sentimentReasonEn": "Factual reportage detailing border security enhancements, infrastructure upgrades, and anti-smuggling protocol enforcement.",
    "source": {
      "name": "Amar Ujala",
      "bureau": "Delhi",
      "language": "Hindi",
      "originalUrl": "https://news.google.com/rss/articles/CBMi4gFBVV95cUxOTEw3TVZNNV9ZTlBhLTZONXNtMW01UmwwTjF1ZUFPNU5uM1ZGZTFTWkFSSUhnYmp2RTFnYW5BMjVfQlljeW9pbERNMU9JSGs1LWlQRnhENzFVOVY0N1BPb0FEQVBSTHZwNXZYR3M1R1FndlczWjMzcHo5bWw5a2o1LXZITXpDU0Fsbnp1YmNhUVFWSVhGV2VWbXJCNDl5NzZ1RERsTXFHZG92OVdzWHUwb0JobDdMRllLYlp2Qk5IN1N1UGJ5LXVIWXVQZXlNczNUeUdMd081MHdyZFJwWFVwRmVn0gHnAUFVX3lxTE1kYzg0RlhGM1pZWEZqeHgxd1k1UUFRN3BZY3ZlZUhTUkdneGlEQWRoSnJrM1V2ODFYZ1NMTDVEOWlmdFVUcVJuTUx5SmpacmMyeDhRRklwV3F6dGYtWWttMmZWRkN0OXdURnQ5QW9NcGdSZVFkSHJwYnUwSXNYZlljWWdIT1dZb3VMOE1HZHdsLUs2eTlxYm5xWlJmR3BuVHE4WHY3end4ZFVsWjRPY05MRWwwb3k3VXg0VGxkNjJ1RUVhUEg1NVZva0JRbU9uSDdzSDRsSEJZZk56ZzdqSkgtZ2M2MVJsZw?oc=5",
      "scannedAt": "2026-09-20T01:58:00Z"
    },
    "publishedAt": "2026-09-19T11:27:14Z",
    "readTimeBn": "৩ মিনিট পড়া",
    "readTimeEn": "3 min read",
    "imageUrl": "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=1200&auto=format&fit=crop&q=80",
    "isTrending": true,
    "tags": [
      "Amar Ujala",
      "BSF",
      "Border Security",
      "Hindi Media",
      "Smart Fencing",
      "Indo-Bangla Border"
    ]
  },
  {
    "id": "news-20260920-015",
    "slug": "live-hindustan-transboundary-water-sharing-teesta-ganges-treaty-complexities",
    "title": "पाकिस्तान के बाद अब बांग्लादेश को भारी पड़ सकता है पानी का मुद्दा - Hindustan",
    "englishTitle": "Live Hindustan: Water Diplomacy Dilemma - How Geopolitical Posturing on Teesta & Ganges Accords Impacts Dhaka",
    "banglaTitle": "অভিন্ন নদীর পানিবন্টন ইস্যু: তিস্তা ও গঙ্গা চুক্তি নিয়ে ভূ-রাজনৈতিক টানাপোড়েনে ঢাকার চ্যালেঞ্জ নিয়ে লাইভ হিন্দুস্তানের বিশ্লেষণ",
    "summaryBn": "ভারতের শীর্ষস্থানীয় হিন্দি প্রকাশনা 'লাইভ হিন্দুস্তান'-এর বিশেষ বিশ্লেষণী নিবন্ধে বলা হয়েছে, পাকিস্তান সিন্ধু চুক্তি নিয়ে যে জটিলতায় পড়েছে, অভিন্ন নদীর পানিবন্টন নিয়ে রাজনৈতিক বক্তব্যের কারণে ঢাকাও একই ধরনের ভূ-রাজনৈতিক চ্যালেঞ্জের মুখে পড়তে পারে। ২০২৬ সালে ঐতিহাসিক গঙ্গা পানিবন্টন চুক্তি নবায়নের প্রাক্কালে বাস্তববাদী কূটনৈতিক সমঝোতার প্রয়োজনীয়তা তুলে ধরা হয়েছে।",
    "summaryEn": "A detailed geopolitical analysis in Live Hindustan argues that escalating rhetorical confrontations over shared river systems risk complicating Dhaka's long-term water and irrigation security. With the landmark 1996 Ganges Water Sharing Treaty up for renewal in 2026, New Delhi strategists emphasize technical basin hydrology over adversarial geopolitical positioning.",
    "keyPointsBn": [
      "৫৪টি অভিন্ন নদীর পানি বন্টন ও ২০২৬ সালে গঙ্গা চুক্তি নবায়নের প্রাক্কালে কূটনৈতিক জটিলতা তৈরি",
      "তিস্তা মহা-পরিকল্পনায় তৃতীয় পক্ষের অন্তর্ভুক্তি দিল্লির কৌশলগত উদ্বেগের অন্যতম কারণ হিসেবে চিহ্নিত",
      "বাস্তবসম্মত কারিগরি সমঝোতা ছাড়া পানি ইস্যুতে রাজনৈতিক বক্তব্য ঢাকার জলবায়ু নিরাপত্তায় প্রভাব ফেলার আশঙ্কা"
    ],
    "keyPointsEn": [
      "Live Hindustan examines stakes surrounding 54 shared transboundary rivers and the upcoming 2026 Ganges Treaty renewal",
      "New Delhi views potential third-party involvement in Teesta river projects with strategic caution",
      "Analysis stresses that technical river-basin hydrology must precede political rhetoric to protect agrarian yields"
    ],
    "category": "diplomacy",
    "categoryLabelBn": "কূটনীতি ও তিস্তা",
    "categoryLabelEn": "Diplomacy & Water",
    "sentiment": "negative",
    "sentimentReasonBn": "অভিন্ন নদীর পানিবন্টন নিয়ে রাজনৈতিক টানাপোড়েন এবং ঢাকার অভ্যন্তরীণ কৃষি ও সেচ ব্যবস্থার ঝুঁকির দিকটি বিশ্লেষিত হয়েছে।",
    "sentimentReasonEn": "Highlights risks of geopolitical stalemate over shared transboundary waters impacting regional agricultural and water security.",
    "source": {
      "name": "Hindustan (Live Hindustan)",
      "bureau": "Delhi",
      "language": "Hindi",
      "originalUrl": "https://news.google.com/rss/articles/CBMi0gFBVV95cUxOTldqbjZERXcyMS0xTjNfb09KUWI5d3FjQnBfQlZaVlZMTzV4OXFUYVJRc3lnN25tOXQzbFBvSkdPSnpYUUpfanRmQzFEZ3RYcUJzZXJJZzdOdVc0ejVUQjQyczBuWFg4OExWclRTeWxRZnRsb1JkVUo0WUxaR0RQVGRBMlQwRWtmS2NuaEh2SUE0UXI5WHZqVjlES1FIVjhKZjctZk9DUGNwZ0FuUWx0V0ZmaGJUMjk2TloyS3J4ZWkxTUtsTUlqTGNnVEFBc1RaU3fSAdcBQVVfeXFMTWJCMVhZRUROS052QnQ0Q2lURzZzU0JheUdOaXNzSGdPaThVT1V1eTRydWdDQ1BLWFdYTjIzWXJUalRVRzFfclZic2ZHR1FXT3VTcGx6NkJXdTQ1YVhRbkJwV2MzTEVBV0VMY2NaWWozYWgtc09SbE5Sb1FkU3UwQUYxMkRMYTl2b3ZOQk4wdDYwY0NBZXR6NjlMU2dYRzgzOWpla3VUc3IyUVpZbDlHMTBOT3JlcVhicWxfb0w3Q20waUo0c3JHdjBjVm9xNk10NlUxdFU5cEk?oc=5",
      "scannedAt": "2026-09-20T01:58:00Z"
    },
    "publishedAt": "2026-09-19T12:22:48Z",
    "readTimeBn": "৫ মিনিট পড়া",
    "readTimeEn": "5 min read",
    "imageUrl": "/images/bangladesh-ministry-of-foreign-affairs.jpg",
    "tags": [
      "Live Hindustan",
      "Teesta Water",
      "Ganges Treaty 2026",
      "Water Diplomacy",
      "Hindi Media",
      "Transboundary Rivers"
    ]
  },
  {
    "id": "news-20260920-016",
    "slug": "navbharat-times-bangladesh-review-101-india-deals-tarique-rahman-adviser-clarification",
    "title": "हसीना सरकार में भारत से हुए 101 समझौते रद्द करेगा बांग्लादेश? तारिक के करीबी ने बताया समीक्षा का मकसद - Navbharat Times",
    "englishTitle": "Navbharat Times: Will Bangladesh Scrap 101 India Deals? Tarique Rahman's Aide Clarifies Review Objectives",
    "banglaTitle": "হাসিনা আমলে ভারতের সাথে হওয়া ১০১ চুক্তি কি বাতিল করবে বাংলাদেশ? পর্যালোচনার উদ্দেশ্য স্পষ্ট করলেন তারেক রহমানের ঘনিষ্ঠ মহল",
    "summaryBn": "হিন্দি দৈনিক 'নবভারত টাইমস'-এর প্রতিবেদনে বিএনপির ভারপ্রাপ্ত চেয়ারম্যান তারেক রহমানের পররাষ্ট্র বিষয়ক ঘনিষ্ঠ পরামর্শকদের বক্তব্য তুলে ধরা হয়েছে। তারা জানিয়েছেন, অন্তর্বর্তী সরকারের চুক্তি পর্যালোচনার অর্থ সব দ্বিপাক্ষিক চুক্তি বাতিল করা নয়; বরং বিদ্যুৎ ও ট্রানজিটের বাণিজ্যিক শর্তগুলোকে আরও স্বচ্ছ ও ভারসাম্যপূর্ণ করাই এর মূল লক্ষ্য।",
    "summaryEn": "Navbharat Times reports that foreign policy advisers close to BNP acting chairman Tarique Rahman have clarified that the comprehensive review of 101 bilateral treaties signed during Hasina's tenure is not intended to scrap partnerships, but rather to re-evaluate financial tariffs on power imports and ensure transparent terms aligned with Bangladesh's domestic interests.",
    "keyPointsBn": [
      "তারেক রহমানের রাজনৈতিক উপদেষ্টারা স্পষ্ট করেছেন যে পাইকারি হারে সব দ্বিপাক্ষিক চুক্তি বাতিলের কোনো সিদ্ধান্ত হয়নি",
      "বিদ্যুৎ আমদানি ও অর্থনৈতিক ট্রানজিটের মতো জরুরি বিষয়গুলোতে জাতীয় স্বার্থের ভারসাম্য রক্ষাই পর্যালোচনার উদ্দেশ্য",
      "আগামী নির্বাচনে সম্ভাব্য ক্ষমতায় যাওয়ার আগে নয়াদিল্লির সাথে যোগাযোগ চ্যানেল কার্যকর রাখার ইঙ্গিত"
    ],
    "keyPointsEn": [
      "Close aides of Tarique Rahman clarify that the review panel does not intend wholesale scrapping of bilateral accords",
      "Review focuses on renegotiating terms of power purchase tariffs and cross-border commercial transit protocols",
      "Signifies pragmatic calculations within BNP to maintain open diplomatic communication lines with New Delhi"
    ],
    "category": "politics",
    "categoryLabelBn": "কূটনীতি ও নীতি",
    "categoryLabelEn": "Politics & Diplomacy",
    "sentiment": "neutral",
    "sentimentReasonBn": "চুক্তি বাতিল বনাম কার্যকারিতা পুনর্নির্ধারণ নিয়ে বিএনপি নেতৃত্ব ও তারেক রহমানের উপদেষ্টাদের কৌশলী অবস্থানের বিশ্লেষণ।",
    "sentimentReasonEn": "Balanced investigative report detailing the strategic motivations behind reviewing bilateral treaties while managing domestic political expectations.",
    "source": {
      "name": "Navbharat Times",
      "bureau": "Delhi",
      "language": "Hindi",
      "originalUrl": "https://news.google.com/rss/articles/CBMi9wFBVV95cUxOdFIwTkNoempGUGlDM2E0cGVOVHFZZ3IxNWZqRzFCalU0YjFOcHgzV3hiUE9rOUFjY2VPUVplNzd4dFpUUDFBUFQwdWdwY293dDhSTVNDN2YwZ0hrVjBSelZEaW9CMGdqYWM1RjNsd2tLSWdhYmw5S0lxVHozVHFwczBJc213S2pJM0VwX1RUN1hVakpMSk1xM3Q1a0Z1elI0TWk4UDY5UFpyRjhRTWNVcXhoY1FfOHBpaVY4V1FPd3o3bGJsRlNjOFI4Vld5R3hPM1c3VTJmczhLa1lJRTFTZ19XUFBZajJiMnlDRUpVRnRMS1lRTnJ30gH8AUFVX3lxTFBhVDdJVExoZzVyaU9fclJjaWJhOFQ0aGwxSEJIYnpoUnBxU0tHZEQ0Z3pMVVBhT3YzWHMwTjRxR2FvRjRnT1FKUktzRjEwTlNBdVZlMFhmZ1NTUTNLRktKQlhXVmVzVXVXWlBZaWFlRWx1cnNWY0x6TXd4Ujh6T19CNTMtV0x5d042bHlNVHA1dHB0OC1wT3ZkWEVvdVVOTGhRbDIyVlV2SDZIZS1HNEJLbHV2LTg0bFliMVJaX2tqMFdkd0RNdE5FQ0dPZzg1aXBxdENaZnlDT0RQUGxRWmJuWktxb0ozRVNWcDFlWVVtQ2lKWGJ4WjJYcmdtbA?oc=5",
      "scannedAt": "2026-09-20T01:58:00Z"
    },
    "publishedAt": "2026-09-19T06:17:43Z",
    "readTimeBn": "৪ মিনিট পড়া",
    "readTimeEn": "4 min read",
    "imageUrl": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=1200&auto=format&fit=crop&q=80",
    "isTrending": true,
    "tags": [
      "Navbharat Times",
      "Tarique Rahman",
      "Bilateral Pacts",
      "BNP",
      "Hindi Media",
      "Delhi Bureau"
    ]
  },
  {
    "id": "news-20260920-017",
    "slug": "news18-hindi-dhaka-security-alert-crude-bomb-blasts-unrest-protests",
    "title": "बांग्लादेश में 7 भयानक ब्लास्ट के बाद दहशत का माहौल, 200 जगहों की सासें थमीं, देसी बमों का आंतक - News18 Hindi",
    "englishTitle": "News18 Hindi: Security Panic in Dhaka After Crude Explosions, High Alert Across 200 Intersections Amid Political Rallies",
    "banglaTitle": "ঢাকায় হাতবোমা বিস্ফোরণ ও সংঘর্ষে আতঙ্ক, দুই শতাধিক স্থানে নিরাপত্তা জোরদার: নিউজ১৮ হিন্দি",
    "summaryBn": "ভারতের শীর্ষ হিন্দি নিউজ চ্যানেল 'নিউজ১৮ হিন্দি'-র প্রতিবেদনে প্রকাশ, ঢাকায় রাজনৈতিক সমাবেশ ও বিক্ষোভকে ঘিরে একাধিক এলাকায় ককটেল ও হাতবোমা বিস্ফোরণের ঘটনা ঘটেছে। উদ্ভূত পরিস্থিতিতে রাজধানীর দুই শতাধিক গুরুত্বপূর্ণ পয়েন্টে অতিরিক্ত পুলিশ ও বিজিবি মোতায়েন করে নিরাপত্তা জোরদার করা হয়েছে।",
    "summaryEn": "News18 Hindi reports intense security tensions in Dhaka following several crude bomb explosions and clashes between opposing political factions. Bangladesh security agencies have fortified over 200 sensitive intersections across the capital with rapid-deployment anti-riot battalions to contain escalating street violence.",
    "keyPointsBn": [
      "ঢাকায় আওয়ামী লীগের ঝটিকা মিছিল ও বিএনপির পাল্টা প্রতিরোধ সমাবেশকে ঘিরে একাধিক স্থানে ককটেল বিস্ফোরণ",
      "পুলিশ ও র্যাব সদস্যদের অতিরিক্ত টহল এবং রাজধানীর ২০০টিরও বেশি প্রবেশমুখে তল্লাশি চৌকি স্থাপন",
      "রাজনৈতিক অস্থিরতা দীর্ঘায়িত হলে সীমান্তবর্তী জেলাগুলোতে এর প্রভাব পড়ার বিষয়ে ভারতীয় গণমাধ্যমের সতর্কতা"
    ],
    "keyPointsEn": [
      "Several crude bomb explosions reported in commercial zones of Dhaka amid rival street mobilizations",
      "Law enforcement deploys reinforced cordons and vehicle checkpoints across major Dhaka entry corridors",
      "Indian media coverage flags broader security spillover concerns along neighboring border corridors"
    ],
    "category": "politics",
    "categoryLabelBn": "কূটনীতি ও নীতি",
    "categoryLabelEn": "Politics & Security",
    "sentiment": "negative",
    "sentimentReasonBn": "রাজধানীতে ককটেল বিস্ফোরণ, রাজনৈতিক উত্তেজনা এবং সাধারণ মানুষের নিরাপত্তার ঝুঁকি নিয়ে শঙ্কার কারণে সুর নেতিবাচক।",
    "sentimentReasonEn": "Emphasizes security deterioration, public apprehension, and street violence triggered by political showdowns in Dhaka.",
    "source": {
      "name": "News18 Hindi",
      "bureau": "Delhi",
      "language": "Hindi",
      "originalUrl": "https://news.google.com/rss/articles/CBMikAJBVV95cUxPNmZUaTRELXpnRDRFMWlCYXFyTUstNnVEdW9nOGhDRGgyeUl1bTRXTUtFcllwakZqQk82aklrVWdGcy1wbjBXdElZaW9tX1B0N3JPMEQ4YW5ndTVRc0Vrb0ZaSzZVcERTVlhBcEp2ZXZ5d0dZYmRIdmpmeTU0OVBLRUpiSGxuMVdwb2NLeVNadUV5RGJDb1RvdlRNSDdTMllXSXQwUzNHemdObjNpZURUcUJWdFVBMmdaX1kxS3RZUnpzbEYwbGgzcmVmb0dhOTY1SF9ra3Q5TGhpb2MweWdHYWdRalBEdUtZTE9kZzFuemVLdURSU0xlTkpWMU1fLWoxT1RuU0JHWlc5T3E3VTItb9IBkAJBVV95cUxPNmZUaTRELXpnRDRFMWlCYXFyTUstNnVEdW9nOGhDRGgyeUl1bTRXTUtFcllwakZqQk82aklrVWdGcy1wbjBXdElZaW9tX1B0N3JPMEQ4YW5ndTVRc0Vrb0ZaSzZVcERTVlhBcEp2ZXZ5d0dZYmRIdmpmeTU0OVBLRUpiSGxuMVdwb2NLeVNadUV5RGJDb1RvdlRNSDdTMllXSXQwUzNHemdObjNpZURUcUJWdFVBMmdaX1kxS3RZUnpzbEYwbGgzcmVmb0dhOTY1SF9ra3Q5TGhpb2MweWdHYWdRalBEdUtZTE9kZzFuemVLdURSU0xlTkpWMU1fLWoxT1RuU0JHWlc5T3E3VTItbw?oc=5",
      "scannedAt": "2026-09-20T01:58:00Z"
    },
    "publishedAt": "2026-09-19T11:32:07Z",
    "readTimeBn": "৩ মিনিট পড়া",
    "readTimeEn": "3 min read",
    "imageUrl": "/images/bangabhaban-presidential-palace-dhaka.jpg",
    "tags": [
      "News18 Hindi",
      "Dhaka Unrest",
      "Crude Blasts",
      "Hindi Media",
      "Security Alert",
      "Political Clashes"
    ]
  },
  {
    "id": "news-20260920-018",
    "slug": "navbharat-times-viral-police-audio-sheikh-hasina-return-dhaka-administrative-fallout",
    "title": "'शेख हसीना वापस लौटीं तो पुलिस कुछ नहीं कर पाएगी', बांग्लादेशी अधिकारी के ऑडियो से ढाका में हड़कंप, तुरंत हटाया - Navbharat Times",
    "englishTitle": "Navbharat Times: 'Police Powerless If Hasina Returns' - Viral Audio by Police Official Triggers Shakeup in Dhaka",
    "banglaTitle": "‘শেখ হাসিনা ফিরলে পুলিশ কিছুই করতে পারবে না’: ভাইরাল অডিও নিয়ে ঢাকায় তোলপাড়, বরখাস্ত শীর্ষ কর্মকর্তা—নবভারত টাইমস",
    "summaryBn": "নবভারত টাইমসের বিশেষ প্রতিবেদনে বলা হয়েছে, সাবেক প্রধানমন্ত্রী শেখ হাসিনা দেশে ফিরলে পুলিশের পক্ষে পরিস্থিতি নিয়ন্ত্রণ করা অসম্ভব হতে পারে বলে মন্তব্য করা এক জ্যেষ্ঠ পুলিশ কর্মকর্তার গোপন অডিও ফাঁস হয়ে সামাজিক মাধ্যমে আলোড়ন সৃষ্টি করেছে। এই ঘটনার পরপরই সংশ্লিষ্ট কর্মকর্তাকে তাত্ক্ষণিকভাবে দায়িত্ব থেকে সরিয়ে দেওয়া হয়েছে।",
    "summaryEn": "Navbharat Times covers the administrative fallout in Dhaka following the leak of an audio recording in which a senior Bangladeshi police official candidly acknowledged that law enforcement personnel would be powerless to contain public crowds if Sheikh Hasina returned. The official was summarily relieved of his command.",
    "keyPointsBn": [
      "সাবেক প্রধানমন্ত্রীর প্রত্যাবর্তনে লাখো মানুষের ঢল নামলে তা নিয়ন্ত্রণে পুলিশের সীমাবদ্ধতা স্বীকার করা অডিও ফাঁস",
      "অডিও সামাজিক মাধ্যমে ছড়িয়ে পড়ার পরপরই অভিযুক্ত পুলিশ কর্মকর্তাকে দায়িত্ব থেকে অব্যাহতি",
      "মাঠপর্যায়ের পুলিশ বাহিনীর মনোবল ও প্রশাসনিক নিরপেক্ষতা নিয়ে ঢাকায় রাজনৈতিক বিতর্ক তুঙ্গে"
    ],
    "keyPointsEn": [
      "Leaked recording captures senior officer admitting police would be overwhelmed by spontaneous crowds if Hasina returns",
      "Ministry of Home Affairs in Dhaka summarily sacks the official following public and social media uproar",
      "Highlights acute concerns over administrative neutrality and the fragility of law enforcement morale"
    ],
    "category": "politics",
    "categoryLabelBn": "কূটনীতি ও নীতি",
    "categoryLabelEn": "Politics & Law",
    "sentiment": "negative",
    "sentimentReasonBn": "আইন-শৃঙ্খলা বাহিনীর নৈতিক দুর্বলতা এবং রাজনৈতিক চাপে শীর্ষ কর্মকর্তাদের অপসরণের ঘটনাকে তুলে ধরা হয়েছে।",
    "sentimentReasonEn": "Covers institutional friction, police demoralization, and high-profile administrative reshuffling in Dhaka.",
    "source": {
      "name": "Navbharat Times",
      "bureau": "Delhi",
      "language": "Hindi",
      "originalUrl": "https://news.google.com/rss/articles/CBMi_wFBVV95cUxPZEtxYnpqVVc1LVllbHdLVnlLUF9OTlpKMzU4TjA5Mm1DYy1RNVF5bWNWMXlwQjVvTFlQazdhOEIybjJ0azVKVVBKRTliVlROeGxVWldSOXI1Z21aLTc3WHZHZ2dFcnpzZUlUVW1helhpckZnNkw1Rm9EQXZRd1dSUVg4eTJ6SVp0eHUxdkJnRzN5RTFBdkdEczd2Sy1yYW5pYlRmX09uaUphVlE3d0Q1Z2JOWlpsN1pFYzczOVFtTlRkT3ZrZ0k3VklBeUs2YV80Y2l4UVk5NXBiQS1QR28taGtUcEttZDhPYjdJbWhrVVpfZ1FDSDBsY0NsYUJiWFnSAYQCQVVfeXFMUFZuN3FMNFZ3akN3R0sxdE00aUFISF8xc19ZTW4yNnVFRzBsRElqYktxMHJ0RzlGcUVIMXN2S3JKVGNlZVU3NlhLa1Jwc1JHa2REaUppZVRySEFGSHhJbEl0NnZ1VjhLTnZXYlpoZFhSSnBqZUxydGE3NU1Bc1R4VC1NOERfQ0h4Sk9WcGV5MzdfVXNta0pZV0wwTURMZlJaeTY0SE1pZG9HNnQ5eGhLS2Jmb05HTFZrMDJXM0IyaFBqU054VmdZRVU5amI4anhZMktDOTFYekJ1S1BPUWxOcWxsWkttZW9QUkVqOG5iQVlwVzJNaURJUzhnZmFQSmhsWTVSUDI?oc=5",
      "scannedAt": "2026-09-20T01:58:00Z"
    },
    "publishedAt": "2026-09-18T04:27:54Z",
    "readTimeBn": "৪ মিনিট পড়া",
    "readTimeEn": "4 min read",
    "imageUrl": "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "Navbharat Times",
      "Sheikh Hasina",
      "Dhaka Police",
      "Leaked Audio",
      "Hindi Media",
      "Political Crisis"
    ]
  },
  {
    "id": "news-20260920-019",
    "slug": "news18-hindi-bangladesh-supreme-court-advocate-questions-constitutional-power-transfer",
    "title": "जब शेख हसीना ने इस्तीफा दिया ही नहीं, तो सत्ता हस्तांतरण कैसे हुआ? जांच हो: बांग्लादेश SC एडवोकेट, मोहसिन रशीद - News18 Hindi",
    "englishTitle": "News18 Hindi: 'If Hasina Never Resigned, How Was Power Transferred?' - Bangladesh SC Advocate Demands Judicial Inquiry",
    "banglaTitle": "‘শেখ হাসিনা পদত্যাগপত্র না দিলে ক্ষমতা হস্তান্তর কীভাবে বৈধ?’: সুপ্রিম কোর্টের সিনিয়র আইনজীবীর বক্তব্যে দিল্লির সংবাদমাধ্যমে আলোড়ন",
    "summaryBn": "নিউজ১৮ হিন্দির প্রতিবেদনে প্রকাশ, বাংলাদেশ সুপ্রিম কোর্টের প্রবীণ আইনজীবী অ্যাডভোকেট মহসিন রশীদ এক সাক্ষাৎকারে দাবি করেছেন—যেহেতু শেখ হাসিনা আনুষ্ঠানিকভাবে লিখিত পদত্যাগপত্র রাষ্ট্রপতির কাছে জমা দেননি, সেহেতু ২০২৪ সালের ক্ষমতা হস্তান্তর সাংবিধানিক কাঠামোর মধ্যে হয়নি। এ বিষয়ে একটি স্বাধীন বিচার বিভাগীয় তদন্তের দাবি তুলেছেন তিনি।",
    "summaryEn": "News18 Hindi features arguments from senior Bangladesh Supreme Court advocate Mohsin Rashid, who asserts that since former Prime Minister Sheikh Hasina never tendered an official written instrument of resignation to the President, the subsequent transfer of executive power lacks clear constitutional grounding, demanding a thorough judicial examination.",
    "keyPointsBn": [
      "বাংলাদেশ সুপ্রিম কোর্টের জ্যেষ্ঠ আইনজীবী মহসিন রশীদের আইনি পর্যবেক্ষণ ভারতীয় গণমাধ্যমে গুরুত্ব সহকারে প্রচার",
      "সংবিধান অনুযায়ী লিখিত পদত্যাগপত্র রাষ্ট্রপতির কাছে আনুষ্ঠানিকভাবে হস্তান্তরের প্রমাণ না থাকা নিয়ে বিতর্ক",
      "অন্তর্বর্তীকালীন ব্যবস্থার সাংবিধানিক ভিত্তি নিয়ে উচ্চ আদালতে চলমান আইনি বিতর্ক দিল্লির পর্যবেক্ষকদের নজরে"
    ],
    "keyPointsEn": [
      "News18 Hindi highlights arguments by prominent jurist Mohsin Rashid challenging constitutional validity of 2024 succession",
      "Absence of formally tendered written resignation to the President of Bangladesh sparks fierce legal discourse",
      "New Delhi constitutional observers monitor proceedings testing the long-term institutional tenure of interim structures"
    ],
    "category": "politics",
    "categoryLabelBn": "আইন ও সংবিধান",
    "categoryLabelEn": "Constitutional Law",
    "sentiment": "neutral",
    "sentimentReasonBn": "সংবিধান বিশেষজ্ঞের বক্তব্য ও আইনি প্রক্রিয়ার নিরপেক্ষ বিশ্লেষণ তুলে ধরায় সুর ভারসাম্যপূর্ণ।",
    "sentimentReasonEn": "Objective presentation of constitutional and legal arguments raised by leading jurists regarding regime succession.",
    "source": {
      "name": "News18 Hindi",
      "bureau": "Delhi",
      "language": "Hindi",
      "originalUrl": "https://news.google.com/rss/articles/CBMirwFBVV95cUxNMWxlamlGQlptelpVem5PLWJpcUlYVkJQX1FUbEp2MjlNUUZuajhFUFkwZzRmVlBSSy1wbk83LUxydnBlcnJlaFIxa0VZdkdKcXhCMFFzaXg4WnRLVjBmMHVVWFJDZVU1NV9INHFLWEN1dE5CejNyOG9hNi1QWmxSMERNU1FCeVB5WG54SDl5TDJhdEFobE1lVm1DbFFnZWRJX3hqSFQ3WWNzbWU2VmQ00gGvAUFVX3lxTE0xbGVqaUZCWm16WlV6bk8tYmlxSVhWQlBfUVRsSnYyOU1RRm5qOEVQWTBnNGZWUFJLLXBuTzctTHJ2cGVycmVoUjFrRVl2R0pxeEIwUXNpeDhadEtWMGYwdVVYUkNlVTU1X0g0cUtYQ3V0TkJ6M3I4b2E2LVBabFIwRE1TUUJ5UHlYbnhIOXlMMmF0QWhsTWVWbUNsUWdlZElfeGpIVDdZY3NtZTZWZDQ?oc=5",
      "scannedAt": "2026-09-20T01:58:00Z"
    },
    "publishedAt": "2026-09-17T08:12:57Z",
    "readTimeBn": "৪ মিনিট পড়া",
    "readTimeEn": "4 min read",
    "imageUrl": "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "News18 Hindi",
      "Supreme Court",
      "Constitutional Law",
      "Sheikh Hasina",
      "Hindi Media",
      "Legal Inquiry"
    ]
  },
  {
    "id": "news-20260920-020",
    "slug": "aaj-tak-ict-sentences-7-awami-league-leaders-to-death-delhi-scrutiny",
    "title": "बांग्लादेश में अवामी लीग के 7 नेताओं को मौत की सजा, 2024 हिंसा मामले में दोषी करार - AajTak",
    "englishTitle": "Aaj Tak: Bangladesh Special Tribunal Sentences 7 Senior Awami League Leaders to Death Over 2024 Turmoil",
    "banglaTitle": "২০২৪ সালের ঘটনায় আওয়ামী লীগের ৭ নেতাকে ট্রাইব্যুনালের মৃত্যুদণ্ডের রায়: কড়া পর্যবেক্ষণে আজতক",
    "summaryBn": "ভারতের প্রধান হিন্দি সংবাদমাধ্যম 'আজতক'-এর বিশেষ প্রতিবেদনে জানানো হয়েছে, আন্তর্জাতিক অপরাধ ট্রাইব্যুনাল ২০২৪ সালের জুলাই আন্দোলনের ঘটনায় ক্ষমতাচ্যুত আওয়ামী লীগের সাবেক মন্ত্রী ও জ্যেষ্ঠ সাত নেতাকে মৃত্যুদণ্ডের সাজা ঘোষণা করেছে। রায় ঘোষণার পর নয়াদিল্লির আন্তর্জাতিক সম্পর্ক ও মানবাধিকার বিশেষজ্ঞরা বিচার প্রক্রিয়ার স্বচ্ছতা নিয়ে প্রশ্ন তুলেছেন।",
    "summaryEn": "Aaj Tak reports that Bangladesh's International Crimes Tribunal has handed down capital punishment sentences to seven senior Awami League figures, including former cabinet ministers, in connection with the July 2024 unrest. Legal analysts in New Delhi closely monitor the proceedings, highlighting international human rights concerns over trial fairness.",
    "keyPointsBn": [
      "আন্তর্জাতিক অপরাধ ট্রাইব্যুনাল কর্তৃক আওয়ামী লীগের ৭ শীর্ষ নেতার বিরুদ্ধে মৃত্যুদণ্ড ঘোষণার রায় প্রচার",
      "বিচারিক মান ও আত্মপক্ষ সমর্থনের আন্তর্জাতিক সুযোগ নিয়ে ভারতীয় আইন বিশেষজ্ঞদের সংশয়",
      "বিরোধী রাজনীতির ওপর এ ধরনের কঠোর রায় দেশে প্রতিহিংসামূলক সহিংসতার নতুন চক্র তৈরি করতে পারে বলে সতর্কতা"
    ],
    "keyPointsEn": [
      "Special Tribunal hands down controversial death sentences to seven senior Awami League officials",
      "Legal analysts in New Delhi raise due process and fair trial concerns regarding political expedited trials",
      "Indian commentators caution that aggressive punitive verdicts risk hardening political polarization and retaliatory unrest"
    ],
    "category": "politics",
    "categoryLabelBn": "কূটনীতি ও নীতি",
    "categoryLabelEn": "Politics & Judiciary",
    "sentiment": "negative",
    "sentimentReasonBn": "রাজনৈতিক নেতাদের বিতর্কিত মৃত্যুদণ্ড এবং বিচারিক প্রক্রিয়ার রাজনৈতিকীকরণের আশঙ্কায় সুর নেতিবাচক।",
    "sentimentReasonEn": "Criticizes aggressive judicial retribution, capital punishment against political figures, and potential domestic fallout.",
    "source": {
      "name": "Aaj Tak",
      "bureau": "Delhi",
      "language": "Hindi",
      "originalUrl": "https://news.google.com/rss/articles/CBMi0gFBVV95cUxPcDlPR21IZjQ1VEVvN2lKVVZ3OGNOUmg4M3VHQTNvTmhhcjJTTjA5aDZOWW9vdXJGOGNtMDdab25FSnVBZ0JaeE45ZnU4VVd5MlMwVklNb2JRQU5zTm02T2FOTVFHbmZUR0I1b2VidTlJODk3NkdhTlBtUk9kZFpaU2R2WjdYem93S1NlOFNEYXJxNTRySmhXaGJKeV9MelpQd2xJaGd0SHZ4c1RUM2dTSFdoTzdUMXNHdlNSVE9QZjFXSVdlc2VQRlkyN0RSYU14dmfSAdcBQVVfeXFMTnRqQWV6b2xONVZ6cXNQQzFPQVNScGNhcFE3RjFqR0d2cFlQZHdXeVhDR01uX3A2VG5rUGdWNlk4ajRsdDlkaFNmTGRjVHJIREEwV1R5dUF5cXQ0RDZlSHFJamdEZ2t6WFZiTjAtdFVGdXJiSnJZWmtVYWhYVjNOdno0SWxnMDk4cU50cFZ0RVAweHNVeWttWWZXNlZXbDNBSEFQQjl3eFVobTYzOEZJSHUtcnpWRVpPWHNITHNOYUFaNGM0U0ZteG92dDVzRVdxZEZXZE91XzQ?oc=5",
      "scannedAt": "2026-09-20T01:58:00Z"
    },
    "publishedAt": "2026-09-15T09:20:01Z",
    "readTimeBn": "৪ মিনিট পড়া",
    "readTimeEn": "4 min read",
    "imageUrl": "/images/bangladesh-international-crimes-tribunal-ict-dhaka.jpg",
    "tags": [
      "Aaj Tak",
      "ICT Tribunal",
      "Awami League",
      "Death Penalty",
      "Hindi Media",
      "Delhi Bureau"
    ]
  },
  {
    "id": "news-20260920-021",
    "slug": "aaj-tak-dhaka-pragmatic-push-to-reset-relations-with-india",
    "title": "बांग्लादेश को आई अक्ल! शेख हसीना को भूल अब भारत के साथ रिश्ते 'रीसेट' करने की तैयारी - AajTak",
    "englishTitle": "Aaj Tak: Dhaka Realizes Regional Realities - Pragmatic Push to 'Reset' Relations with India Beyond Exiled Leadership",
    "banglaTitle": "বাস্তবতার মুখোমুখি ঢাকা: শেখ হাসিনা ইস্যুর বাইরে ভারতের সাথে সম্পর্ক ‘রিসেট’ করার উদ্যোগ—আজতকের পর্যালোচনা",
    "summaryBn": "আজতকের এক কূটনৈতিক বিশ্লেষণে দাবি করা হয়েছে, আবেগঘন বয়ান ও রাজনৈতিক তিক্ততার বাইরে এসে নয়াদিল্লির সাথে দ্বিপাক্ষিক সম্পর্ক পুনর্গঠনে জোর দিচ্ছে ঢাকা। ভৌগোলিক অবস্থান, বিদ্যুৎ গ্রিড সংযোগ এবং খাদ্যপণ্য সরবরাহে ভারতের অপরিহার্যতা অনুধাবন করে বাণিজ্য ও কূটনৈতিক যোগাযোগ স্বাভাবিক করার পথ খুঁজছে অন্তর্বর্তীকালীন প্রশাসন।",
    "summaryEn": "An in-depth diplomatic feature by Aaj Tak underscores a marked calibration in Dhaka's posture, moving from adversarial rhetoric towards a pragmatic desire to reset relations with New Delhi. Strategic planners recognize that geographical adjacency, uninterrupted electrical transmission, and trade lifelines necessitate stable institutional engagement.",
    "keyPointsBn": [
      "ভারতীয় বিদ্যুৎ, নিত্যপ্রয়োজনীয় পণ্য ও ট্রানজিটের গুরুত্ব অনুধাবন করে তিক্ততা কমানোর তাগিদ ঢাকার নীতি-নির্ধারকদের",
      "শেখ হাসিনার অবস্থান নিয়ে প্রকাশ্য অভিযোগ সত্ত্বেও কূটনৈতিকভাবে দিল্লিকে পাশে পাওয়ার চেষ্টা",
      "দক্ষিণ এশিয়ায় ভারতের অর্থনৈতিক প্রভাব এড়িয়ে একাকী চলার সীমাবদ্ধতা নিয়ে ভারতীয় বিশ্লেষকদের অভিমত"
    ],
    "keyPointsEn": [
      "Aaj Tak diplomatic analysis observes softening rhetoric in Dhaka acknowledging essential reliance on Indian power and food imports",
      "Despite political friction over Hasina's refuge, administrative channels actively pursue a pragmatic bilateral reset",
      "Strategic experts underline that geographic and supply chain realities constrain any prolonged decoupling"
    ],
    "category": "diplomacy",
    "categoryLabelBn": "কূটনীতি ও দ্বিপাক্ষিক সম্পর্ক",
    "categoryLabelEn": "Diplomacy & Strategy",
    "sentiment": "positive",
    "sentimentReasonBn": "উভয় দেশের বাস্তব অর্থনৈতিক ও কৌশলগত নির্ভরতার ভিত্তিতে সম্পর্ক স্বাভাবিকীকরণের পথ খোঁজার ওপর জোর।",
    "sentimentReasonEn": "Highlights pragmatism and recognition in Dhaka of the vital strategic and economic necessity of partnership with New Delhi.",
    "source": {
      "name": "Aaj Tak",
      "bureau": "Delhi",
      "language": "Hindi",
      "originalUrl": "https://news.google.com/rss/articles/CBMizAFBVV95cUxNbjFPZU9KcGxManlEVnFjX2J3UDAtN0VsNHFLWE9GXzJWaEtPY3l6aVRmdHRnMkx4YlI0THNCb1ZIeVpOMTJhYWJfLU5scXphUF9Jam5JeFpRZ0hjbEtQRTdOQ0NfcTNQeS1OcnVaNFpiNE1XOEtmLXp4TDVBNnFHXzdsa2YtR0ZwNXVQMkxzMGYzRDlIMTR4WTcxYXl5R3lObEpSMjJYb3hwdkdOMVFTaWJiVXFvSFRGVHI3OEtoaUV6OGFLdjY0bDFhSS0?oc=5",
      "scannedAt": "2026-09-20T01:58:00Z"
    },
    "publishedAt": "2026-09-14T01:39:57Z",
    "readTimeBn": "৪ মিনিট পড়া",
    "readTimeEn": "4 min read",
    "imageUrl": "/images/bangladesh-high-commission-new-delhi.jpg",
    "tags": [
      "Aaj Tak",
      "Bilateral Reset",
      "Diplomacy",
      "Hindi Media",
      "Trade Continuity",
      "Delhi-Dhaka Ties"
    ]
  },
  {
    "id": "news-20260920-022",
    "slug": "news18-hindi-asian-games-2026-india-bangladesh-cricket-semifinal-diplomacy",
    "title": "Asian Games 2026: भारत-बांग्लादेश में फाइनल की टिकट के लिए जंग, जानिए किसका पलड़ा भारी - News18 Hindi",
    "englishTitle": "News18 Hindi: Asian Games 2026 - High-Stakes India-Bangladesh Cricket Semifinal Amid Diplomatic Spotlight",
    "banglaTitle": "এশিয়ান গেমস ২০২৬: ফাইনালে ওঠার লড়াইয়ে মুখোমুখি ভারত ও বাংলাদেশ, ক্রীড়াঙ্গনে দ্বিপাক্ষিক উত্তেজনা: নিউজ১৮ হিন্দি",
    "summaryBn": "এশিয়ান গেমস ২০২৬-এর পুরুষ ক্রিকেটের সেমিফাইনালে মুখোমুখি হচ্ছে ভারত ও বাংলাদেশ। নিউজ১৮ হিন্দির ক্রীড়া ডেস্ক জানিয়েছে, মাঠের বাইরে চলমান কূটনৈতিক টানাপোড়েনের কারণে দুই দেশের ক্রিকেট ভক্তদের মাঝে এই ম্যাচটি নিয়ে তুমুল উত্তেজনা বিরাজ করছে। দুই দলের শক্তিমত্তা ও সাম্প্রতিক মুখোমুখি লড়াইয়ের চুলচেরা বিশ্লেষণ করেছে চ্যানেলটি।",
    "summaryEn": "News18 Hindi previews the blockbuster semifinal showdown between India and Bangladesh at the 2026 Asian Games cricket tournament. Amid chilly diplomatic atmospherics off the field, sports analysts dissect team combinations, spin matchups, and the historical rivalries driving intense fan engagement across both borders.",
    "keyPointsBn": [
      "এশিয়ান গেমস ক্রিকেটের হাই-ভোল্টেজ সেমিফাইনালে মুখোমুখি হতে চলেছে ভারত ও বাংলাদেশ",
      "দ্বিপাক্ষিক রাজনৈতিক উত্তেজনার আবহে মাঠের ক্রিকেটে দুই দেশের সমর্থকদের তুমুল আগ্রহ",
      "আইসিসি ইভেন্ট ও মহাদেশীয় আসরে দুই দলের সাম্প্রতিক লড়াইয়ের পরিসংখ্যান তুলে ধরেছে ভারতীয় গণমাধ্যম"
    ],
    "keyPointsEn": [
      "India and Bangladesh gear up for marquee cricket semifinal clash at the Asian Games",
      "High emotional stakes on the field amidst broader bilateral diplomatic chill",
      "Indian sports media analyzes squad balance, spin bowling strategies, and recent head-to-head records"
    ],
    "category": "sports",
    "categoryLabelBn": "ক্রীড়া ও ক্রিকেট",
    "categoryLabelEn": "Sports & Cricket",
    "sentiment": "neutral",
    "sentimentReasonBn": "ক্রিকেট প্রতিদ্বন্দ্বিতার রোমাঞ্চ ও মাঠের পরিসংখ্যান নিয়ে তথ্যবহুল বিশ্লেষণ।",
    "sentimentReasonEn": "Focuses on competitive sporting rivalry, team balance, and cricket diplomacy on the Asian Games stage.",
    "source": {
      "name": "News18 Hindi",
      "bureau": "Delhi",
      "language": "Hindi",
      "originalUrl": "https://news.google.com/rss/articles/CBMi_gFBVV95cUxQdGp2am44TmQxcVMxV2JCSmRDTlJWUEMtUExlU1JKekV4emRMaUl6UHRjUWJqNUo3WUswR0E4aVk5THYyMUNuc0RQU3loWHlDdGJqeU82OHVxWUNEYnc5TjE1ejdabjNqRXA3d3A5bmZvWXdwbTNLWVhoRzNRZnQ1enBlLVRHb2RGT3Y2ak03YmtNR0VMT0VCSFFUN2FZNzJUdFU4SFVYQVBrbUE4N0gzREZfM2ZyUkVhdkEyR1BOX3N0QTRnTVA4X3NEWFpGMUF3ODctSHZQc0FINnJ5NHJ2MjhiMHUwLW5ySkFsN2ZlNWphQzdUQVY2bXFqYURzQdIB_gFBVV95cUxQdGp2am44TmQxcVMxV2JCSmRDTlJWUEMtUExlU1JKekV4emRMaUl6UHRjUWJqNUo3WUswR0E4aVk5THYyMUNuc0RQU3loWHlDdGJqeU82OHVxWUNEYnc5TjE1ejdabjNqRXA3d3A5bmZvWXdwbTNLWVhoRzNRZnQ1enBlLVRHb2RGT3Y2ak03YmtNR0VMT0VCSFFUN2FZNzJUdFU4SFVYQVBrbUE4N0gzREZfM2ZyUkVhdkEyR1BOX3N0QTRnTVA4X3NEWFpGMUF3ODctSHZQc0FINnJ5NHJ2MjhiMHUwLW5ySkFsN2ZlNWphQzdUQVY2bXFqYURzQQ?oc=5",
      "scannedAt": "2026-09-20T01:58:00Z"
    },
    "publishedAt": "2026-09-19T10:38:58Z",
    "readTimeBn": "৩ মিনিট পড়া",
    "readTimeEn": "3 min read",
    "imageUrl": "https://images.unsplash.com/photo-1531415074868-036b107e775a?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "Asian Games 2026",
      "Cricket",
      "News18 Hindi",
      "Sports Diplomacy",
      "India vs Bangladesh",
      "Hindi Media"
    ]
  },
  {
    "id": "news-20260920-023",
    "slug": "dainik-jagran-dhaka-dengue-outbreak-overwhelms-hospitals-cross-border-health-screening",
    "title": "बांग्लादेश: अस्पतालों में डेंगू मरीजों के लिए जगह तक नहीं, फर्श पर हो रहा इलाज; 18 दिनों में 79 मौतें - jagran.com",
    "englishTitle": "Dainik Jagran: Severe Dengue Outbreak Overwhelms Dhaka Hospitals, 79 Fatalities Prompt Cross-Border Health Monitoring",
    "banglaTitle": "ঢাকায় ডেঙ্গু পরিস্থিতির মারাত্মক অবনতি, হাসপাতালে বেড সংকট ও মৃত্যুতে সীমান্তবর্তী ভারতীয় চেকপোস্টে সতর্কতা: দৈনিক জাগরণ",
    "summaryBn": "দৈনিক জাগরণ-এর স্বাস্থ্য ও আঞ্চলিক ডেস্ক জানিয়েছে, বাংলাদেশে ডেঙ্গুর প্রাদুর্ভাব আশঙ্কাজনক রূপ ধারণ করেছে। ঢাকায় গত ১৮ দিনে ৭৯ জনের মৃত্যু হয়েছে এবং হাসপাতালগুলোতে বেডের তীব্র সংকটে মেঝেতে রোগীদের চিকিৎসা দিতে হচ্ছে। এই প্রেক্ষাপটে পশ্চিমবঙ্গ ও ত্রিপুরার সীমান্তবর্তী ভারতীয় স্থলবন্দরগুলোতে প্রাথমিক স্বাস্থ্য নজরদারি জোরদার করা হয়েছে।",
    "summaryEn": "Dainik Jagran reports that an aggressive surge in seasonal dengue infections has severely strained Dhaka's medical infrastructure, resulting in 79 deaths over an 18-day window and overflowing hospital wards. In response to regional public health risks, health screening protocols have been activated across major land ports in West Bengal and Tripura.",
    "keyPointsBn": [
      "সেপ্টেম্বরের প্রথম ১৮ দিনে ঢাকায় ডেঙ্গুতে ৭৯ জনের প্রাণহানি ও হাসপাতালগুলোতে তিল ধারণের ঠাঁই নেই",
      "মেগা সিটিতে মশা নিধন কার্যক্রমে ঘাটতি ও ওষুধ সংকটে রোগীর চাপ সামলাতে মেঝেতে চিকিৎসার চিত্র",
      "পেট্রাপোল, গেদে ও আগরতলা স্থলবন্দরে আসা ভ্রমণকারীদের জন্য ভারতে প্রাথমিক স্বাস্থ্য স্ক্রিনিং জোরদার"
    ],
    "keyPointsEn": [
      "Dainik Jagran reports 79 fatalities within 18 days as seasonal dengue epidemic overwhelms healthcare facilities across Dhaka",
      "Critical shortage of hospital beds forces medical staff to treat patients on corridors and floors",
      "Land customs stations at Petrapole and Agartala establish health monitoring desks for cross-border travelers"
    ],
    "category": "border",
    "categoryLabelBn": "সীমান্ত স্বাস্থ্য ও জননিরাপত্তা",
    "categoryLabelEn": "Border Health & Safety",
    "sentiment": "negative",
    "sentimentReasonBn": "রোগের প্রাদুর্ভাব, মৃত্যু এবং হাসপাতালের চরম সংকটের ফলে জনস্বাস্থ্যে নেতিবাচক প্রভাবের খবর।",
    "sentimentReasonEn": "Details humanitarian and public health strains, hospital bed shortages, and elevated mortality from the mosquito-borne epidemic.",
    "source": {
      "name": "Dainik Jagran",
      "bureau": "Delhi",
      "language": "Hindi",
      "originalUrl": "https://news.google.com/rss/articles/CBMi0wFBVV95cUxQZzRwUE8zcEI2TWdtMDVrUVFjWTgxQW1BeV9sSm04V2hrS3lEdnpsYWRQMUhWdXZQbWxlOWhJQ1BtY3Z1TTRIQUlKaFJUa3pPb3Boa043d19nakJJVkY0U1hHc2U1ajRnUVdPMXFGa3lJTmpPOUhqRXJRRGF4ampzU3R0LTZfSmtRTUp4amhSbW5HNThWNTZOQnFHazdJMUliUlA5RDdBYVNhcnRzZV9UcGdmZ2cxd0x0NkxXUVFoNU1USVNfUm4yeEFEZ3VzcmhyLW1j?oc=5",
      "scannedAt": "2026-09-20T01:58:00Z"
    },
    "publishedAt": "2026-09-19T10:27:00Z",
    "readTimeBn": "৩ মিনিট পড়া",
    "readTimeEn": "3 min read",
    "imageUrl": "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "Dainik Jagran",
      "Dengue Epidemic",
      "Dhaka Hospitals",
      "Border Health",
      "Hindi Media",
      "Public Health"
    ]
  },
  {
    "id": "news-20260920-024",
    "slug": "dainik-jagran-indo-bangla-passenger-train-services-resumption-railway-delegation-dhaka",
    "title": "भारत-बांग्लादेश के बीच फिर पटरी पर लौटेंगी पैसेंजर ट्रेनें, ढाका में रेलवे अधिकारियों की 3 दिवसीय बैठक शुरू - jagran.com",
    "englishTitle": "Dainik Jagran: Passenger Train Services to Return to Track - Indian & Bangladeshi Railway Delegations Meet in Dhaka",
    "banglaTitle": "ভারত-বাংলাদেশ যাত্রীবাহী ট্রেন ফের চালুর উদ্যোগ: ঢাকায় দুই দেশের রেল কর্মকর্তাদের তিন দিনব্যাপী বৈঠক শুরু—দৈনিক জাগরণ",
    "summaryBn": "দৈনিক জাগরণ-এর দিল্লি ও কলকাতা ব্যুরো জানিয়েছে, ভারত ও বাংলাদেশের মধ্যে স্থগিত থাকা তিনটি জনপ্রিয় যাত্রীবাহী ট্রেন সার্ভিস—মৈত্রী এক্সপ্রেস (কলকাতা-ঢাকা), বন্ধন এক্সপ্রেস (কলকাতা-খুলনা) এবং মিতালী এক্সপ্রেস (শিলিগুড়ি-ঢাকা) ফের চালুর লক্ষ্যে ঢাকায় দুই দেশের ঊর্ধ্বতন রেল কর্মকর্তাদের তিন দিনব্যাপী যৌথ বৈঠক শুরু হয়েছে। যাত্রী নিরাপত্তা ও অপারেশনাল বিষয়গুলো চূড়ান্ত করে দ্রুত পরিষেবা শুরুর উদ্যোগ নেওয়া হচ্ছে।",
    "summaryEn": "Dainik Jagran reports that senior railway delegations from India and Bangladesh have convened a three-day bilateral coordination conference in Dhaka to finalize timelines and security protocols for resuming all three passenger train routes: the Maitree Express, Bandhan Express, and Mitali Express, aimed at restoring critical medical, educational, and business travel corridors.",
    "keyPointsBn": [
      "মৈত্রী এক্সপ্রেস, বন্ধন এক্সপ্রেস ও মিতালী এক্সপ্রেস ট্রেন চলাচল স্বাভাবিক করতে ঢাকায় যৌথ রেল বৈঠক",
      "পর্যটন, চিকিৎসা ও ব্যবসায়িক যাতায়াত সহজ করতে নিরাপত্তা ব্যবস্থা নিশ্চিতের পর টিকিট বিক্রির পরিকল্পনা",
      "স্থলবন্দরে দীর্ঘ অপেক্ষার চাপ কমাতে রেল ট্রানজিটকে অন্যতম কার্যকর দ্বিপাক্ষিক সেতু হিসেবে মূল্যায়িত করা হয়েছে"
    ],
    "keyPointsEn": [
      "Bilateral technical delegation convenes in Dhaka to formulate security and scheduling protocols for Maitree, Bandhan, and Mitali Express",
      "Resumption aimed at facilitating medical, business, and educational passenger transit between Kolkata, Siliguri, and Dhaka",
      "Officials note that reviving passenger rail will relieve immense congestion at Petrapole-Benapole integrated checkposts"
    ],
    "category": "trade",
    "categoryLabelBn": "সীমান্ত বাণিজ্য ও রেল ট্রানজিট",
    "categoryLabelEn": "Rail Transit & Connectivity",
    "sentiment": "positive",
    "sentimentReasonBn": "মৈত্রী, বন্ধন ও মিতালী এক্সপ্রেস ফের চালুর বিষয়ে গঠনমূলক আলোচনা ও জনযোগাযোগের প্রত্যাশায় সুর ইতিবাচক।",
    "sentimentReasonEn": "Constructive bilateral dialogue focused on restoring people-to-people transit corridors and normal cross-border passenger train operations.",
    "source": {
      "name": "Dainik Jagran",
      "bureau": "Delhi",
      "language": "Hindi",
      "originalUrl": "https://news.google.com/rss/articles/CBMiwAFBVV95cUxPWU1FRTBidGhGUmI3b1ZpbVg0NEVtTV80YVJVZUY3cXZRT2JPeTBZUDRCZ0hwYjhYWnJBZmpRNUFscV8xN21DZjNpNmZ0Q3o3aWpickpzNFBOMFJTdFc0Ynk4RHVGdTJzN21KSmpLMEtJVmpVMFJ4WGJDeDZfOVpSS0VfcmtlNGtCc1N4WUdsTDB5aWtsYW85WHBFM2l3NDF2QkdJSjBmVEV4NFdfOE9vbkh6VlJvRHVqVGY2a3hHYmM?oc=5",
      "scannedAt": "2026-09-20T01:58:00Z"
    },
    "publishedAt": "2026-09-18T07:00:00Z",
    "readTimeBn": "৪ মিনিট পড়া",
    "readTimeEn": "4 min read",
    "imageUrl": "https://images.unsplash.com/photo-1534008757030-27299c4371b6?w=1200&auto=format&fit=crop&q=80",
    "tags": [
      "Dainik Jagran",
      "Maitree Express",
      "Cross-Border Rail",
      "Bandhan Express",
      "Hindi Media",
      "Railway Transit"
    ]
  },
  {
    "id": "news-20260920-001",
    "slug": "sangbad-pratidin-hasina-return-announcement-awami-league-dhaka-protests",
    "title": "হাসিনার দেশে ফেরার ঘোষণায় চাঙ্গা লিগ, মিছিল ঘিরে তপ্ত ঢাকা, ৫০০-র বেশি গ্রেপ্তার - Sangbad Pratidin",
    "englishTitle": "Sangbad Pratidin: Hasina's Return Announcement Re-energizes Awami League, High Tension in Dhaka with Over 500 Arrests",
    "banglaTitle": "হাসিনার দেশে ফেরার ঘোষণায় চাঙ্গা আওয়ামী লীগ, ঢাকায় বিক্ষোভ ও সংঘর্ষের মধ্যে ৫০০-র বেশি গ্রেপ্তার: সংবাদ প্রতিদিন",
    "summaryBn": "কলকাতার শীর্ষ দৈনিক 'সংবাদ প্রতিদিন'-এর বিশেষ প্রতিবেদনে প্রকাশ, ভারতে অবস্থানরত সাবেক প্রধানমন্ত্রী শেখ হাসিনার দেশে ফেরার বার্তায় বাংলাদেশ আওয়ামী লীগের নেতাকর্মীদের মধ্যে নতুন উদ্যম তৈরি হয়েছে। ঢাকায় দলীয় মিছিল ও পাল্টা কর্মসূচিকে কেন্দ্র করে ব্যাপক ধরপাকড় চালিয়ে ৫১৫ জনকে গ্রেপ্তারের খবর দিয়েছে ভারতীয় সংবাদমাধ্যমটি।",
    "summaryEn": "Kolkata's leading Bengali daily Sangbad Pratidin reports that former Prime Minister Sheikh Hasina's prospective return declarations have galvanized grassroots Awami League cadres, prompting heightened security deployments in Dhaka and the arrest of over 500 party supporters amidst confrontational demonstrations.",
    "keyPointsBn": [
      "শেখ হাসিনার দেশে ফেরার বার্তায় রাজধানীতে আওয়ামী লীগ নেতাকর্মীদের রাজপথে নামার তোড়জোড়",
      "ঢাকায় আইন-শৃঙ্খলা বাহিনীর সাঁড়াশি অভিযান ও ৫১৫ জনকে গ্রেপ্তারের তথ্য প্রকাশ",
      "ওপার বাংলায় রাজনৈতিক উত্তাপ ও নির্বাচনী অনিশ্চয়তা নিয়ে কলকাতার সংবাদমাধ্যমে গভীর পর্যবেক্ষণ"
    ],
    "keyPointsEn": [
      "Grassroots Awami League cadres mobilize following Hasina's prospective return remarks",
      "Dhaka law enforcement conducts extensive security sweeps, detaining 515 demonstrators",
      "Kolkata press closely tracks political friction and electoral ambiguity across the border"
    ],
    "category": "politics",
    "categoryLabelBn": "কূটনীতি ও নীতি",
    "categoryLabelEn": "Politics & Diplomacy",
    "sentiment": "negative",
    "sentimentReasonBn": "রাজধানী ঢাকায় ব্যাপক গণগ্রেপ্তার, রাজনৈতিক অস্থিরতা এবং সংঘাতের ঝুঁকির ওপর আলোকপাত করায় প্রতিবেদনটির সুর নেতিবাচক।",
    "sentimentReasonEn": "Emphasizes widespread political friction, mass detentions in Dhaka, and elevated risks of street violence.",
    "source": {
      "name": "Sangbad Pratidin",
      "bureau": "Kolkata",
      "language": "Bengali",
      "originalUrl": "https://www.sangbadpratidin.in/bangladesh/awami-league-energized-by-hasinas-announcement-of-return-515-arrested/pid/1347323/",
      "scannedAt": "2026-09-20T01:10:00Z"
    },
    "publishedAt": "2026-09-19T16:51:47Z",
    "readTimeBn": "৪ মিনিট পড়া",
    "readTimeEn": "4 min read",
    "imageUrl": "/images/dhaka-national-parliament-symbolic.jpg",
    "isLeadStory": false,
    "isTrending": true,
    "isBreaking": true,
    "tags": [
      "Sheikh Hasina",
      "Dhaka Protests",
      "Sangbad Pratidin",
      "Kolkata Bureau",
      "Awami League",
      "Mass Arrests"
    ]
  },
  {
    "id": "news-20260920-002",
    "slug": "mea-delhi-review-101-bilateral-agreements-bangladesh",
    "title": "Bangladesh Reviewing 101 Bilateral Deals Signed During Hasina Regime, India's MEA Cautiously Monitoring Developments",
    "englishTitle": "MEA Closely Watching Bangladesh's Review of 101 Bilateral Deals Signed During Hasina Tenure",
    "banglaTitle": "হাসিনা আমলে স্বাক্ষরিত ১০১টি দ্বিপাক্ষিক চুক্তি পর্যালোচনার উদ্যোগ ঢাকার: দিল্লির পররাষ্ট্র মন্ত্রণালয় সতর্ক পর্যবেক্ষণে",
    "summaryBn": "বাংলাদেশ সরকার কর্তৃক শেখ হাসিনার ১৫ বছরের শাসনামলে ভারতের সাথে স্বাক্ষরিত ১০১টি দ্বিপাক্ষিক চুক্তি ও সমঝোতা স্মারক (MoU) পুনর্মূল্যায়নের সিদ্ধান্তের ওপর তীক্ষ্ণ নজর রাখছে ভারতের পররাষ্ট্র মন্ত্রণালয় (MEA)। ভারতীয় কূটনৈতিক সূত্রের বরাতে জানানো হয়েছে, ট্রানজিট, জ্বালানি নিরাপত্তা এবং স্থলবন্দর সংক্রান্ত উন্নয়ন প্রকল্পের ধারাবাহিকতা বজায় রাখা দিল্লির অগ্রাধিকার।",
    "summaryEn": "India's Ministry of External Affairs is closely tracking Dhaka's initiative to review approximately 101 bilateral treaties and MoUs finalized over the last 15 years under the Sheikh Hasina administration, with New Delhi emphasizing the mutual benefits of regional connectivity, power transit, and border commerce infrastructure.",
    "keyPointsBn": [
      "শেখ হাসিনা সরকারের ১৫ বছরের ১০১টি দ্বিপাক্ষিক চুক্তি পর্যালোচনার আনুষ্ঠানিক উদ্যোগ অন্তর্বর্তী সরকারের",
      "ভারতীয় পররাষ্ট্র মন্ত্রণালয় দ্বিপাক্ষিক স্থিতিশীলতা ও যৌথ উন্নয়ন প্রকল্প রক্ষার পক্ষে অবস্থান পুনর্ব্যক্ত করেছে",
      "ট্রানজিট করিডোর ও তিস্তা-গঙ্গা পানি বন্টন সমীকরণ নিয়ে নতুন কূটনৈতিক দেনদরবারের সম্ভাবনা"
    ],
    "keyPointsEn": [
      "Dhaka initiates comprehensive administrative review of 101 bilateral agreements signed under Hasina",
      "New Delhi's MEA underlines reciprocal security and economic value of connectivity protocols",
      "Analysts assess long-term implications for transit routes, cross-border energy grids, and water accords"
    ],
    "category": "diplomacy",
    "categoryLabelBn": "কূটনীতি ও নীতি",
    "categoryLabelEn": "Diplomacy & Water",
    "sentiment": "neutral",
    "sentimentReasonBn": "দ্বিপাক্ষিক চুক্তির ভবিষ্যৎ নিয়ে উভয় পক্ষের কূটনৈতিক যুক্তি ও পারস্পরিক সমঝোতার ওপর ভারসাম্যপূর্ণ বিবরণ দেওয়া হয়েছে।",
    "sentimentReasonEn": "Maintains a measured, analytical diplomatic tone covering administrative reviews and bilateral responses.",
    "source": {
      "name": "The Indian Express",
      "bureau": "Delhi",
      "language": "English",
      "originalUrl": "https://news.google.com/rss/articles/CBMiUkFVX3lxTE0xUXM2Tlk0N0J4N2FRRUkxc19OeDhWekdVYlBneUZILTJUMERldlV5MlJjY3pkM19udGdIUFZ5Y21rY1duZ1ZTYmlfQ3VVbTlTYWc?oc=5",
      "scannedAt": "2026-09-20T01:10:00Z"
    },
    "publishedAt": "2026-09-19T18:30:00Z",
    "readTimeBn": "৪ মিনিট পড়া",
    "readTimeEn": "4 min read",
    "imageUrl": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&q=80&w=1200",
    "isLeadStory": false,
    "isTrending": true,
    "isBreaking": true,
    "tags": [
      "MEA Delhi",
      "Bilateral Agreements",
      "The Indian Express",
      "Diplomacy",
      "Transit Deals"
    ]
  },
  {
    "id": "news-20260920-003",
    "slug": "igr-youtube-bangladesh-101-india-deals-northeast-connectivity-ganga-water",
    "title": "Bangladesh Reviews 101 India Deals, Northeast Connectivity and Ganga Water Sharing at Stake | IGR (YouTube Dispatch)",
    "englishTitle": "India Global Review (YouTube): Strategic Assessment on Bangladesh Reviewing 101 India Deals and Northeast Transit",
    "banglaTitle": "১০১টি ভারত-বাংলাদেশ চুক্তি পুনর্বিবেচনা ও উত্তর-পূর্ব ভারতের কানেক্টিভিটি: ইন্ডিয়া গ্লোবাল রিভিউ-এর বিশেষ ভিডিও বিশ্লেষণ",
    "summaryBn": "ভারতীয় আন্তর্জাতিক বিশ্লেষণমূলক ইউটিউব প্ল্যাটফর্ম 'ইন্ডিয়া গ্লোবাল রিভিউ' (IGR)-এর বিশেষ ভিডিও প্রতিবেদনে তুলে ধরা হয়েছে কীভাবে ১০১টি দ্বিপাক্ষিক চুক্তি পর্যালোচনার সিদ্ধান্ত ভারতের উত্তর-পূর্বাঞ্চলীয় রাজ্যগুলোর ট্রানজিট করিডোর এবং আসন্ন গঙ্গা পানি চুক্তি নবায়নের ওপর বড় প্রভাব ফেলতে পারে।",
    "summaryEn": "Strategic digital broadcaster India Global Review (IGR) releases an in-depth video dispatch analyzing Bangladesh's review of 101 bilateral treaties, spotlighting strategic transit linkages into India's Northeast and renewal timelines for the landmark 1996 Ganga Water Sharing Treaty.",
    "keyPointsBn": [
      "১০১টি দ্বিপাক্ষিক চুক্তি পর্যালোচনায় উত্তর-পূর্বাঞ্চলীয় ট্রানজিট রুট নিয়ে দিল্লির ভূকৌশলগত বিবেচনা",
      "১৯৯৬ সালের গঙ্গা পানি চুক্তির ৩০ বছর মেয়াদ পূর্ণ হওয়ার মুখে নতুন দরকষাকষির সমীকরণ",
      "আন্তর্জাতিক বাণিজ্য ও উপ-আঞ্চলিক নিরাপত্তার ওপর ভিডিও প্রতিবেদনের বিশদ পর্যবেক্ষণ"
    ],
    "keyPointsEn": [
      "Evaluates strategic Northeast corridor transit implications amidst treaty review",
      "Highlights negotiations surrounding the upcoming 30-year renewal of Ganga Water Treaty",
      "Examines potential recalibration of regional security and subcontinental trade frameworks"
    ],
    "category": "diplomacy",
    "categoryLabelBn": "কূটনীতি ও নীতি",
    "categoryLabelEn": "Diplomacy & Water",
    "sentiment": "neutral",
    "sentimentReasonBn": "দ্বিপাক্ষিক বাণিজ্য ও জলচুক্তির কৌশলগত মাত্রাগুলোর চুলচেরা বিশ্লেষণ উপস্থাপন করেছে।",
    "sentimentReasonEn": "Offers a comprehensive, objective geopolitical evaluation of water-sharing and transit corridors.",
    "source": {
      "name": "India Global Review (YouTube)",
      "bureau": "Delhi",
      "language": "English",
      "originalUrl": "https://news.google.com/rss/articles/CBMiVkFVX3lxTE4wN1lMTlM5ZG5NakJXV01vTXR5M0x5Q1lkRjkzZURjZHJydkZSSkpsOUQ4Z28xdkVvQ3VrX2RQVzlWaVotQWxmLTdQaS0zWlVaU0tBakNB?oc=5",
      "scannedAt": "2026-09-20T01:10:00Z"
    },
    "publishedAt": "2026-09-18T18:05:06Z",
    "readTimeBn": "৫ মিনিট পড়া",
    "readTimeEn": "5 min read",
    "imageUrl": "https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?auto=format&fit=crop&q=80&w=1200",
    "isLeadStory": false,
    "isTrending": true,
    "isBreaking": false,
    "tags": [
      "YouTube Video",
      "ভিডিও রিপোর্ট",
      "India Global Review",
      "Ganga Water Treaty",
      "Northeast Transit"
    ]
  },
  {
    "id": "news-20260920-004",
    "slug": "bartaman-patrika-dhaka-bnp-counter-rallies-clash-risks",
    "title": "পাল্টা সমাবেশের ডাক দিয়ে সংঘর্ষের পথে হাঁটল বিএনপিও, উত্তপ্ত ঢাকা - Bartaman Patrika",
    "englishTitle": "Bartaman Patrika: BNP Calls Counter-Rallies Signaling Confrontation Path as Dhaka Heats Up",
    "banglaTitle": "পাল্টা সমাবেশের ডাক দিয়ে সংঘর্ষের পথে হাঁটল বিএনপিও, উত্তপ্ত ঢাকা: বর্তমান পত্রিকা",
    "summaryBn": "কলকাতার ঐতিহ্যবাহী দৈনিক 'বর্তমান পত্রিকা'র প্রতিবেদনে বলা হয়েছে, আওয়ামী লীগের কর্মসূচির বিপরীতে বাংলাদেশ জাতীয়তাবাদী দল (বিএনপি) রাজপথে পাল্টা সমাবেশের ডাক দেওয়ায় রাজধানী ঢাকায় রাজনৈতিক সংঘাতের আশঙ্কা তীব্র হয়েছে। ভারতীয় সংবাদমাধ্যমটি ঢাকার রাজপথের এই পাল্টাপাল্টি অবস্থানের ওপর গভীর নজর রাখছে।",
    "summaryEn": "Kolkata's daily Bartaman Patrika highlights rising political volatility in Dhaka after BNP announced simultaneous counter-rallies in response to Awami League demonstrations, creating acute concerns over potential street clashes and administrative paralysis.",
    "keyPointsBn": [
      "আওয়ামী লীগের কর্মসূচির মুখে বিএনপির পাল্টা সমাবেশ ঘোষণার খবর কলকাতার পত্রিকায়",
      "রাজধানী ঢাকায় সংঘাত এড়াতে নিরাপত্তা বাহিনীর সর্বোচ্চ সতর্কাবস্থা জারি",
      "ওপার বাংলার রাজপথের লড়াইয়ের সরাসরি প্রভাব সীমান্ত ও দ্বিপাক্ষিক বাণিজ্যে পড়ার আশঙ্কা"
    ],
    "keyPointsEn": [
      "BNP schedules rival rallies in Dhaka reacting to Awami League street mobilization",
      "Security apparatus placed on maximum alert across key metropolitan intersections",
      "Cross-border observers highlight repercussions on trade flow and regional security"
    ],
    "category": "politics",
    "categoryLabelBn": "কূটনীতি ও নীতি",
    "categoryLabelEn": "Politics & Diplomacy",
    "sentiment": "negative",
    "sentimentReasonBn": "রাজনৈতিক সংঘাত, উত্তপ্ত রাজপথ এবং আইন-শৃঙ্খলার অবনতিশীল সম্ভাবনার ওপর গুরুত্বারোপ করায় নেতিবাচক সুর।",
    "sentimentReasonEn": "Focuses on confrontations, heightened risk of street clashes, and political instability.",
    "source": {
      "name": "Bartaman Patrika",
      "bureau": "Kolkata",
      "language": "Bengali",
      "originalUrl": "https://news.google.com/rss/articles/CBMisAFBVV95cUxOcTZwOFRhOUxLd2xicDRsZ2pQNm5sZVhJUlZZZEtVd2t6MnhlQ0xQbmx2S3lWNHp5eXlhWTRQZHR4bVh1ZkVvY3hIUkZ2NWg2U2p6dWZ1OHl1M2psb1Fic1lYQjQyTkVub210eEFWN0Z6QjBqVk5vT2cxaE1vS0V3aE1rYmN5aE0zZzZzRk13X1Q3SkZtN3h0U09zSFlxdk1xVnZDbTFNb01n0gEA?oc=5",
      "scannedAt": "2026-09-20T01:10:00Z"
    },
    "publishedAt": "2026-09-19T05:27:06Z",
    "readTimeBn": "৩ মিনিট পড়া",
    "readTimeEn": "3 min read",
    "imageUrl": "https://images.unsplash.com/photo-1577985051167-0d49eec21977?auto=format&fit=crop&q=80&w=1200",
    "isLeadStory": false,
    "isTrending": false,
    "isBreaking": false,
    "tags": [
      "Bartaman Patrika",
      "BNP Rallies",
      "Dhaka Tensions",
      "Kolkata Bureau",
      "Opar Bangla"
    ]
  },
  {
    "id": "news-20260920-005",
    "slug": "bnt-bangla-youtube-suvendu-adhikari-opar-bangla-refugee-statement",
    "title": "আমার মাকে এক কাপড়ে ওপার বাংলা থেকে পালিয়ে আসতে হয়েছিল: শুভেন্দু অধিকারী (ভিডিও ডিসপ্যাচ)",
    "englishTitle": "BNT Bangla (YouTube): BJP Leader Suvendu Adhikari Cites Family Roots and Minorities in Opar Bangla",
    "banglaTitle": "‘আমার মাকে এক কাপড়ে ওপার বাংলা থেকে পালিয়ে আসতে হয়েছিল’: বাংলাদেশে সংখ্যালঘুদের পরিস্থিতি নিয়ে শুভেন্দু অধিকারী",
    "summaryBn": "ভারতীয় সংবাদ চ্যানেল 'BNT বাংলা খবর'-এর ইউটিউব ভিডিও ডিসপ্যাচে পশ্চিমবঙ্গের বিরোধী দলনেতা শুভেন্দু অধিকারীর বক্তব্য গুরুত্ব পেয়েছে। বাংলাদেশে সংখ্যালঘু সম্প্রদায়ের নিরাপত্তা ও বর্তমান পরিস্থিতি নিয়ে আলোচনার সময় তিনি নিজের পরিবারের দেশত্যাগের স্মৃতিচারণ করে ওপার বাংলার বর্তমান গতিপ্রকৃতির ওপর সরব হন।",
    "summaryEn": "In a dedicated YouTube video report, BNT Bangla News covers statements by West Bengal opposition leader Suvendu Adhikari, who drew parallels from his family's refugee history to voice grave concerns regarding the safety and civic status of religious minorities in Bangladesh.",
    "keyPointsBn": [
      "পশ্চিমবঙ্গের বিরোধী দলনেতা শুভেন্দু অধিকারীর পারিবারিক দেশত্যাগের ইতিহাস স্মরণ",
      "বাংলাদেশে ধর্মীয় সংখ্যালঘুদের অধিকার ও নিরাপত্তা নিশ্চিতের জোরালো দাবি",
      "কলকাতা ও সীমান্তবর্তী জেলাগুলোতে রাজনৈতিক বক্তব্যের প্রভাব ও ভারতীয় গণমাধ্যমের প্রচার"
    ],
    "keyPointsEn": [
      "Suvendu Adhikari recounts family displacement from former East Bengal",
      "Calls for heightened international and Indian scrutiny over minority protections in Bangladesh",
      "Regional video coverage reflects public discourse in border districts of West Bengal"
    ],
    "category": "border",
    "categoryLabelBn": "সীমান্ত ও নিরাপত্তা",
    "categoryLabelEn": "Border & Security",
    "sentiment": "negative",
    "sentimentReasonBn": "সংখ্যালঘু সম্প্রদায়ের নিরাপত্তা নিয়ে অতীত ট্রমা ও বর্তমান শঙ্কার তীব্র প্রতিক্রিয়া তুলে ধরায় নেতিবাচক সেন্টিমেন্ট।",
    "sentimentReasonEn": "Reflects deep anxieties over minority security and emotive historical displacement narratives.",
    "source": {
      "name": "BNT বাংলা খবর (YouTube)",
      "bureau": "Kolkata",
      "language": "Bengali",
      "originalUrl": "https://www.youtube.com/watch?v=0WrRFhIezuc",
      "scannedAt": "2026-09-20T01:10:00Z"
    },
    "publishedAt": "2026-09-18T16:10:26Z",
    "readTimeBn": "৩ মিনিট পড়া",
    "readTimeEn": "3 min read",
    "imageUrl": "https://i.ytimg.com/vi/0WrRFhIezuc/hqdefault.jpg",
    "isLeadStory": false,
    "isTrending": false,
    "isBreaking": false,
    "tags": [
      "YouTube Video",
      "ভিডিও রিপোর্ট",
      "BNT Bangla",
      "Suvendu Adhikari",
      "Minority Security",
      "Opar Bangla"
    ]
  },
  {
    "id": "news-20260920-006",
    "slug": "assam-tribune-awami-league-rejects-death-sentences-seven-leaders",
    "title": "Awami League Terms Death Sentences for 7 Leaders ‘One-Sided, Fabricated’ - The Assam Tribune",
    "englishTitle": "The Assam Tribune: Awami League Rejects ICT Verdict Against 7 Top Leaders as Political Vendetta",
    "banglaTitle": "৭ শীর্ষ নেতার মৃত্যুদণ্ডের রায়কে ‘একতরফা ও বানোয়াট’ আখ্যা দিয়ে আওয়ামী লীগের প্রতিক্রিয়া: দ্য আসাম ট্রিবিউন",
    "summaryBn": "ভারতের উত্তর-পূর্বাঞ্চলের প্রধান ইংরেজি দৈনিক 'দ্য আসাম ট্রিবিউন' জানিয়েছে, আন্তর্জাতিক অপরাধ ট্রাইব্যুনাল কর্তৃক ওবায়দুল কাদেরসহ আওয়ামী লীগের সাত শীর্ষ নেতাকে দেওয়া মৃত্যুদণ্ডের রায়কে 'রাজনৈতিক উদ্দেশ্যপ্রণোদিত ও বানোয়াট' বলে প্রত্যাখ্যান করেছে দলটি। আসাম ব্যুরো থেকে প্রকাশিত এ প্রতিবেদনে আসাম-বাংলাদেশ সীমান্তবর্তী এলাকায় বাড়তি নজরদারির কথাও উল্লেখ করা হয়েছে।",
    "summaryEn": "Guwahati-based national daily The Assam Tribune reports that the Awami League has officially denounced the death sentences handed down by the International Crimes Tribunal to seven senior party leaders, calling the trial politically fabricated while security agencies in Assam monitor regional fallout.",
    "keyPointsBn": [
      "আওয়ামী লীগের শীর্ষ সাত নেতার মৃত্যুদণ্ডের রায় নিয়ে গুয়াহাটি থেকে আসাম ট্রিবিউনের বিশেষ কভারেজ",
      "রায়ের বিরুদ্ধে আন্তর্জাতিক মানবাধিকার সংস্থাগুলোর দৃষ্টি আকর্ষণের ঘোষণা দলের",
      "আসাম ও মেঘালয় সীমান্তে নিরাপত্তা সংস্থাগুলোর বাড়তি সতর্কতা জারি"
    ],
    "keyPointsEn": [
      "Assam Tribune covers Awami League's formal rejection of Dhaka tribunal verdicts",
      "Leadership intends to petition international legal bodies against ex-parte trials",
      "Assam and Meghalaya border formations maintain vigilant border watch"
    ],
    "category": "politics",
    "categoryLabelBn": "কূটনীতি ও নীতি",
    "categoryLabelEn": "Politics & Diplomacy",
    "sentiment": "negative",
    "sentimentReasonBn": "আইনি সাজা এবং রাজনৈতিক দল ও ট্রাইব্যুনালের মধ্যকার তীব্র বিরোধ তুলে ধরায় প্রতিবেদনটির সুর নেতিবাচক।",
    "sentimentReasonEn": "Covers severe judicial verdicts, political acrimony, and diplomatic friction.",
    "source": {
      "name": "The Assam Tribune",
      "bureau": "Delhi",
      "language": "English",
      "originalUrl": "https://news.google.com/rss/articles/CBMitwFBVV95cUxOZGNYUmhTVTJaRF9VU2FxckpjRHBQc0RHOEo0M1hESkJsblU1UmR4SVRaenUzanZQbzNUVk1ndG9vR3JqQ0MwYXpjMEl4V3RxSVY0WVhMYi1fTXlWUW5udjR4SEl6LUIwOVVDRzZXSUVWZm1acnVGdlRfTWw5WUg4dE9KTHN3bVVSVWk0YTc2ZzhQdlhFZkxhZGFFd2IxeU1IVXhhOGhwV1NPRFVXUm9seW1XemdEeEHSAbwBQVVfeXFMTmk4NHNsckdiQlVjWkVjRHR5cFZ1Rk13NUltNU5mbTNmenRWWTQzZ05qTmk0LU16Z2VsaFVsQVNpcGQzZVJmLW4xVlFtbFlfMFcyVFZLU0NvdV9HXzNjRm1OWjBISHpYMDlqV0IyeTJYOFYyaDFHU3RRS0tFVW5rVjQwVzJkeC1NVkxlUU5VVjUyaWROdmxYbDJIVEQ2MXVCWkR3enV1Qnk0UTBsbVhrckxRNXlTb3ZJOTFwQlE?oc=5",
      "scannedAt": "2026-09-20T01:10:00Z"
    },
    "publishedAt": "2026-09-18T08:07:02Z",
    "readTimeBn": "৪ মিনিট পড়া",
    "readTimeEn": "4 min read",
    "imageUrl": "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1200",
    "isLeadStory": false,
    "isTrending": false,
    "isBreaking": false,
    "tags": [
      "The Assam Tribune",
      "Assam Bureau",
      "Guwahati Desk",
      "ICT Verdict",
      "Awami League"
    ]
  },
  {
    "id": "news-20260920-007",
    "slug": "navbharat-times-sheikh-hasina-return-police-audio-leak-analysis",
    "title": "'शेख हसीना वापस लौटीं तो पुलिस कुछ नहीं कर पाएगी', बांग्लादेशी अधिकारी के ऑडियो लीक पर भारतीय मीडिया की नजर - Navbharat Times",
    "englishTitle": "Navbharat Times: Indian Media Reports on Leaked Audio of Bangladeshi Police Official Over Hasina's Return Scenario",
    "banglaTitle": "‘শেখ হাসিনা ফিরলে পুলিশ কিছুই করতে পারবে না’: ফাঁস হওয়া অডিও টেপ নিয়ে ভারতের নবভারত টাইমসের বিশেষ খবর",
    "summaryBn": "ভারতের অন্যতম শীর্ষ হিন্দি দৈনিক 'নবভারত টাইমস' বাংলাদেশের একজন উচ্চপদস্থ পুলিশ কর্মকর্তার কথিত অডিও ফাঁসের ঘটনাকে সামনে এনেছে। অডিওতে সাবেক প্রধানমন্ত্রী শেখ হাসিনার দেশে ফেরা সংক্রান্ত পরিস্থিতিতে পুলিশের নিয়ন্ত্রণহীনতার আশঙ্কা ব্যক্ত হওয়ার খবরটি ভারতীয় নিরাপত্তা মহলে গুরুত্ব দিয়ে দেখা হচ্ছে।",
    "summaryEn": "Hindi daily Navbharat Times examines circulating leaked audio recordings attributed to Bangladeshi administrative figures expressing concerns over police operational limits should Sheikh Hasina stage an unannounced political return, highlighting intense regional security discussions.",
    "keyPointsBn": [
      "শেখ হাসিনার সম্ভাব্য প্রত্যাবর্তন ঘিরে ফাঁস হওয়া অডিও নিয়ে হিন্দি সংবাদমাধ্যমের প্রতিবেদন",
      "বাংলাদেশের আইন-শৃঙ্খলা রক্ষা বাহিনীর মাঠপর্যায়ের মনস্তত্ত্ব ও প্রশাসনিক চ্যালেঞ্জ বিশ্লেষণ",
      "ভারতীয় নিরাপত্তা বিশ্লেষকদের নজরদারিতে ওপার বাংলার অন্তর্বর্তী সরকারের স্থায়িত্বের ইস্যু"
    ],
    "keyPointsEn": [
      "Navbharat Times spotlights administrative vulnerability highlighted in leaked recordings",
      "Assesses morale and operational capabilities of Bangladesh law enforcement agencies",
      "New Delhi strategic circles evaluate stability risks confronting Dhaka's interim setup"
    ],
    "category": "politics",
    "categoryLabelBn": "কূটনীতি ও নীতি",
    "categoryLabelEn": "Politics & Diplomacy",
    "sentiment": "negative",
    "sentimentReasonBn": "প্রশাসনিক সংকট, পুলিশের ভঙ্গুর প্রস্তুতি এবং সম্ভাব্য সহিংস প্রত্যাবর্তনের ঝুঁকির ওপর নজর দেওয়ায় প্রতিবেদনটি নেতিবাচক।",
    "sentimentReasonEn": "Underlines security vulnerabilities, administrative volatility, and unrest projections.",
    "source": {
      "name": "Navbharat Times",
      "bureau": "Delhi",
      "language": "Hindi",
      "originalUrl": "https://news.google.com/rss/articles/CBMi_wFBVV95cUxPZEtxYnpqVVc1LVllbHdLVnlLUF9OTlpKMzU4TjA5Mm1DYy1RNVF5bWNWMXlwQjVvTFlQazdhOEIybjJ0azVKVVBKRTliVlROeGxVWldSOXI1Z21aLTc3WHZHZ2dFcnpzZUlUVW1helhpckZnNkw1Rm9EQXZRd1dSUVg4eTJ6SVp0eHUxdkJnRzN5RTFBdkdEczd2Sy1yYW5pYlRmX09uaUphVlE3d0Q1Z2JOWlpsN1pFYzczOVFtTlRkT3ZrZ0k3VklBeUs2YV80Y2l4UVk5NXBiQS1QR28taGtUcEttZDhPYjdJbWhrVVpfZ1FDSDBsY0NsYUJiWFnSAYQCQVVfeXFMUFZuN3FMNFZ3akN3R0sxdE00aUFISF8xc19ZTW4yNnVFRzBsRElqYktxMHJ0RzlGcUVIMXN2S3JKVGNlZVU3NlhLa1Jwc1JHa2REaUppZVRySEFGSHhJbEl0NnZ1VjhLTnZXYlpoZFhSSnBqZUxydGE3NU1Bc1R4VC1NOERfQ0h4Sk9WcGV5MzdfVXNta0pZV0wwTURMZlJaeTY0SE1pZG9HNnQ5eGhLS2Jmb05HTFZrMDJXM0IyaFBqU054VmdZRVU5amI4anhZMktDOTFYekJ1S1BPUWxOcWxsWkttZW9QUkVqOG5iQVlwVzJNaURJUzhnZmFQSmhsWTVSUDI?oc=5",
      "scannedAt": "2026-09-20T01:10:00Z"
    },
    "publishedAt": "2026-09-18T10:15:00Z",
    "readTimeBn": "৩ মিনিট পড়া",
    "readTimeEn": "3 min read",
    "imageUrl": "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80&w=1200",
    "isLeadStory": false,
    "isTrending": false,
    "isBreaking": false,
    "tags": [
      "Navbharat Times",
      "Delhi Bureau",
      "Sheikh Hasina",
      "Police Audio Leak",
      "Security Assessment"
    ]
  },
  {
    "id": "news-20260920-008",
    "slug": "tv9-bangla-awami-league-action-plan-december-program-hasina",
    "title": "আন্দোলনের রূপরেখা চূড়ান্ত, ডিসেম্বরের মধ্যে বড় কর্মসূচির পথে হাসিনা - TV9 Bangla",
    "englishTitle": "TV9 Bangla: Awami League Action Plan Finalized, Hasina Eyes Major Agitations by December",
    "banglaTitle": "আন্দোলনের রূপরেখা চূড়ান্ত, ডিসেম্বরের মধ্যে বড় কর্মসূচির পথে হাসিনা: টিভি৯ বাংলার রিপোর্ট",
    "summaryBn": "কলকাতার প্রধান টেলিভিশন নেটওয়ার্ক 'টিভি৯ বাংলা'র বিশেষ প্রতিবেদনে দাবি করা হয়েছে, ভারতে অবস্থানরত আওয়ামী লীগ শীর্ষ নেতৃত্ব দলের তৃণমূল পর্যায়কে সংগঠিত করতে একটি সমন্বিত আন্দোলনের রূপরেখা চূড়ান্ত করেছে। ডিসেম্বরের আগেই বড় ধরনের মাঠপর্যায়ের রাজনৈতিক কর্মসূচির বার্তা দেওয়া হয়েছে ওপার বাংলায়।",
    "summaryEn": "Kolkata broadcast outlet TV9 Bangla reports that Awami League leadership coordinated in India has finalized a synchronized organizational roadmap, instructing grassroots committees across Bangladesh to prepare for significant mobilizations ahead of December.",
    "keyPointsBn": [
      "দিল্লিতে গৃহীত রাজনৈতিক সিদ্ধান্তের ওপর ভিত্তি করে তৃণমূল পুনর্গঠনের ছক",
      "ডিসেম্বর মাসকে লক্ষ্য করে ধারাবাহিক প্রতিবাদের রূপরেখা টিভি৯ বাংলায় প্রকাশ",
      "কলকাতার রাজনৈতিক বিশ্লেষকদের দৃষ্টিতে বাংলাদেশের আগামী দিনগুলোর সংঘাতের ঝুঁকি"
    ],
    "keyPointsEn": [
      "Organizational blueprint seeks to revitalize party branches and overseas solidarity networks",
      "Targets nationwide commemorative and protest windows leading into December 2026",
      "Kolkata observers evaluate risks of friction with administrative forces in Bangladesh"
    ],
    "category": "politics",
    "categoryLabelBn": "কূটনীতি ও নীতি",
    "categoryLabelEn": "Politics & Diplomacy",
    "sentiment": "neutral",
    "sentimentReasonBn": "রাজনৈতিক কর্মসূচি ও সংগঠনের প্রস্তুতি নিয়ে তথ্যবহুল ও বস্তুনিষ্ঠ বিবরণ প্রদান করায় নিরপেক্ষ সেন্টিমেন্ট।",
    "sentimentReasonEn": "Delivers objective investigative reporting on organizational developments and timeline strategies.",
    "source": {
      "name": "TV9 Bangla",
      "bureau": "Kolkata",
      "language": "Bengali",
      "originalUrl": "https://news.google.com/rss/articles/CBMisgFBVV95cUxNa2ZubWZubzQ4NWFpd1J6TGc5bENuN1k2S0FvMjh3c19WbXF5bTRTOWI3RWR2TDRtMm9IekJocXF3eFBocWJ6eFFuRWhIUDVwWTVaM1p1a2F6Z01pUXg3N19YSEpvNGlzZ192QkhLMFJ1WWZFcVp4b0t3dFpGWWplTmltM2V1M2tVemh6YTFvTmtlTXpZdmQ3RzJ0ZkdYSEFpREp0V21tSWhn0gEA?oc=5",
      "scannedAt": "2026-09-20T01:10:00Z"
    },
    "publishedAt": "2026-09-19T09:21:50Z",
    "readTimeBn": "৩ মিনিট পড়া",
    "readTimeEn": "3 min read",
    "imageUrl": "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&q=80&w=1200",
    "isLeadStory": false,
    "isTrending": false,
    "isBreaking": false,
    "tags": [
      "TV9 Bangla",
      "Kolkata Bureau",
      "Awami League Roadmap",
      "Sheikh Hasina",
      "December Program"
    ]
  },
  {
    "id": "news-20260920-009",
    "slug": "zee-24-ghanta-cultural-festival-boycotts-minority-heritage-bangladesh",
    "title": "মৌলবাদের আগ্রাসন! বাংলাদেশে ঐতিহ্যবাহী উৎসব বয়কট নিয়ে সরব হিন্দুত্ববাদী সংগঠন - Zee 24 Ghanta",
    "englishTitle": "Zee 24 Ghanta: Concerns in Bengal Over Boycott Pressures on Traditional Cultural Festivals in Bangladesh",
    "banglaTitle": "বাংলাদেশে ঐতিহ্যবাহী সাংস্কৃতিক উৎসব বয়কটের চাপ ও সংখ্যালঘু সংস্কৃতির সুরক্ষা নিয়ে কলকাতার সংবাদমাধ্যমে আলোচনা: জি ২৪ ঘণ্টা",
    "summaryBn": "কলকাতার সংবাদমাধ্যম 'জি ২৪ ঘণ্টা'র এক বিশেষ প্রতিবেদনে বাংলাদেশে শতাব্দীর প্রাচীন ঐতিহ্যবাহী লোকজ মেলা ও সাংস্কৃতিক উৎসব আয়োজনে ধর্মীয় কট্টরপন্থীদের বাধার মুখে পড়ার ঘটনা নিয়ে বিশদ বিশ্লেষণ প্রকাশ করা হয়েছে। পশ্চিমবঙ্গের সাংস্কৃতিক মহল ও ওপার বাংলার শিল্পীদের মধ্যে এ নিয়ে গভীর উৎকণ্ঠা প্রকাশ পেয়েছে।",
    "summaryEn": "Kolkata broadcaster Zee 24 Ghanta reports on emerging friction over traditional Bengali cultural fairs and heritage events in Bangladesh, highlighting pushback from orthodox groups and growing concern among West Bengal's cultural and intellectual circles.",
    "keyPointsBn": [
      "ঐতিহ্যবাহী লোকমেলা ও সাংস্কৃতিক অনুষ্ঠানে কট্টরপন্থীদের আপত্তির খবর কলকাতার মিডিয়ায়",
      "বাঙালি লোকজ ঐতিহ্য ও অসাম্প্রদায়িক সংস্কৃতির ভবিষ্যৎ নিয়ে গভীর উদ্বেগ",
      "পশ্চিমবঙ্গ ও ওপার বাংলার অভিন্ন ভাষা ও সাহিত্যিক সম্প্রীতি রক্ষায় বুদ্ধিজীবীদের আহ্বান"
    ],
    "keyPointsEn": [
      "Highlights friction over traditional secular folk fairs in regional Bangladesh districts",
      "Intellectuals in Kolkata express concern regarding preservation of syncretic Bengali heritage",
      "Calls for safeguarding cross-border cultural and linguistic kinship"
    ],
    "category": "culture",
    "categoryLabelBn": "সংস্কৃতি ও সাহিত্য",
    "categoryLabelEn": "Culture & Arts",
    "sentiment": "negative",
    "sentimentReasonBn": "সাংস্কৃতিক অনুষ্ঠানে বাধা ও মৌলবাদী তৎপরতার ওপর আলোকপাত করায় সেন্টিমেন্ট নেতিবাচক।",
    "sentimentReasonEn": "Addresses cultural intolerance, challenges to heritage traditions, and rising social tension.",
    "source": {
      "name": "Zee 24 Ghanta",
      "bureau": "Kolkata",
      "language": "Bengali",
      "originalUrl": "https://news.google.com/rss/articles/CBMisAFBVV95cUxPd2JmZldoc2xmd0VlQ2s0U19vTGd2NFN5bk52bXh3enVqSE13S1h4M3E1RGFEUGY4eHpQenFod0d5SjhnZ195TXAteTJFcURuNDN3aFNuWmxldF8wSW1rY0JCVWJpUURmNE05Y293dmp3OGVlaGtFNGxJcUV4N2pLV241V013RGlLbk8tVWp0bVpLd2Nia1BhLWlHQ2U0SE9lTEhPZkxOOFhB0gEA?oc=5",
      "scannedAt": "2026-09-20T01:10:00Z"
    },
    "publishedAt": "2026-09-19T14:14:04Z",
    "readTimeBn": "৩ মিনিট পড়া",
    "readTimeEn": "3 min read",
    "imageUrl": "https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?auto=format&fit=crop&q=80&w=1200",
    "isLeadStory": false,
    "isTrending": false,
    "isBreaking": false,
    "tags": [
      "Zee 24 Ghanta",
      "Kolkata Bureau",
      "Cultural Heritage",
      "Bengali Culture",
      "Minority Rights"
    ]
  },
  {
    "id": "news-20260920-010",
    "slug": "syandan-patrika-tripura-border-bsf-vigilance-akhaura-corridor",
    "title": "ত্রিপুরা ও অসম সীমান্তে বিএসএফের বাড়তি সতর্কতা: আখাউড়া-আগরতলা করিডোরে কঠোর নজরদারি - Syandan Patrika",
    "englishTitle": "Syandan Patrika: BSF Steps Up Security Along Tripura-Bangladesh Border, Strict Checks at Akhaura ICP",
    "banglaTitle": "ত্রিপুরা ও অসম সীমান্তে বিএসএফের বর্ধিত সতর্কতা: আখাউড়া-আগরতলা করিডোরে দিনরাত কড়া নজরদারি: স্যন্দন পত্রিকা",
    "summaryBn": "ত্রিপুরার জনপ্রিয় দৈনিক 'স্যন্দন পত্রিকা'র প্রতিবেদনে প্রকাশ, ওপার বাংলার অভ্যন্তরীণ রাজনৈতিক উত্তেজনার প্রেক্ষিতে ত্রিপুরা ও আসাম সীমান্তজুড়ে বর্ডার সিকিউরিটি ফোর্স (BSF) সর্বোচ্চ সতর্কতা জারি করেছে। বিশেষ করে আখাউড়া-আগরতলা ইন্টিগ্রেটেড চেকপোস্টে (ICP) অতিরিক্ত ড্রোন ও নাইট-ভিশন প্রযুক্তির মাধ্যমে তল্লাশি জোরদার করা হয়েছে।",
    "summaryEn": "Agartala-based daily Syandan Patrika reports that the Border Security Force (BSF) has escalated surveillance along the Tripura and southern Assam frontiers, deploying tactical aerial drones and 24/7 night patrols around the strategic Akhaura-Agartala Integrated Check Post.",
    "keyPointsBn": [
      "আখাউড়া-আগরতলা সীমান্তে বিএসএফের বিশেষ নজরদারি ও ড্রোন টহল জোরদার",
      "অনুপ্রবেশ ও সীমান্ত চোরাচালান রোধে সীমান্তবর্তী গ্রামবাসীদের সাথে সমন্বয় বৈঠক",
      "স্থলবন্দর দিয়ে নিত্যপ্রয়োজনীয় পণ্যবাহী ট্রাক চলাচলে কড়াকড়ি তল্লাশি কার্যকর"
    ],
    "keyPointsEn": [
      "BSF intensifies drone surveillance and round-the-clock foot patrols at Akhaura border",
      "Joint security coordination meetings held with border village panchayats in Tripura",
      "Cargo inspections tightened while maintaining essential bilateral trade flows"
    ],
    "category": "border",
    "categoryLabelBn": "সীমান্ত ও নিরাপত্তা",
    "categoryLabelEn": "Border & Security",
    "sentiment": "neutral",
    "sentimentReasonBn": "সীমান্ত নিরাপত্তা রক্ষা ও সীমান্ত বাণিজ্য সচল রাখার ভারসাম্যপূর্ণ বিবরণ তুলে ধরা হয়েছে।",
    "sentimentReasonEn": "Provides objective coverage of defensive border measures and regulated cargo movement.",
    "source": {
      "name": "Syandan Patrika",
      "bureau": "Kolkata",
      "language": "Bengali",
      "originalUrl": "https://syandanpatrika.com/state-news/bsf-alert-tripura-bangladesh-border-security-tightened-akhaura/",
      "scannedAt": "2026-09-20T01:10:00Z"
    },
    "publishedAt": "2026-09-19T11:45:00Z",
    "readTimeBn": "৩ মিনিট পড়া",
    "readTimeEn": "3 min read",
    "imageUrl": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=1200",
    "isLeadStory": false,
    "isTrending": false,
    "isBreaking": false,
    "tags": [
      "Syandan Patrika",
      "Tripura Bureau",
      "Agartala ICP",
      "BSF Border Vigilance",
      "Akhaura"
    ]
  },
  {
    "id": "news-20260920-011",
    "slug": "uttarbanga-sambad-fulbari-changrabandha-land-ports-cross-border-trucking",
    "title": "ফুলবাড়ী ও চ্যাংড়াবান্ধা স্থলবন্দরে পণ্য পরিবহন স্বাভাবিক করার আহ্বান: উত্তরবঙ্গ সংবাদ - Uttarbanga Sambad",
    "englishTitle": "Uttarbanga Sambad: Freight Logistics and Export Movement at Fulbari and Changrabandha Land Ports",
    "banglaTitle": "ফুলবাড়ী ও চ্যাংড়াবান্ধা স্থলবন্দরে পণ্য পরিবহন স্বাভাবিক করার আহ্বান: উত্তরবঙ্গ সংবাদের বিশেষ রিপোর্ট",
    "summaryBn": "শিলিগুড়ির প্রভাবশালী দৈনিক 'উত্তরবঙ্গ সংবাদ'-এর প্রতিবেদনে প্রকাশ, ভারত-বাংলাদেশ সীমান্তবর্তী ফুলবাড়ী ও চ্যাংড়াবান্ধা স্থলবন্দর দিয়ে রপ্তানি পণ্যবাহী ভারতীয় ট্রাক চলাচলের জট নিরসনে শিলিগুড়ির ব্যবসায়ী সংগঠনগুলো দ্রুত প্রশাসনিক পদক্ষেপ দাবি করেছে। নেপাল ও ভুটানের ট্রানজিট পণ্য পরিবহনও এতে সাময়িকভাবে ব্যাহত হচ্ছে বলে জানানো হয়।",
    "summaryEn": "Siliguri daily Uttarbanga Sambad reports on representations by North Bengal transport associations calling for fast-track clearance of cargo trucks at Fulbari and Changrabandha land ports bordering Bangladesh, highlighting trade linkages supporting India, Nepal, and Bhutan transit networks.",
    "keyPointsBn": [
      "ফুলবাড়ী ও চ্যাংড়াবান্ধা সীমান্তে পণ্যবাহী ট্রাকের দীর্ঘ সারি ও ছাড়পত্র বিলম্বের খবর",
      "শিলিগুড়ি মার্চেন্টস অ্যাসোসিয়েশনের পক্ষ থেকে কাস্টমস ও বন্দর কর্তৃপক্ষের সাথে বৈঠক",
      "ত্রিপক্ষীয় ট্রানজিট (ভারত-বাংলাদেশ-ভুটান) বাণিজ্য নির্বিঘ্ন রাখার তাগিদ"
    ],
    "keyPointsEn": [
      "Logistical queues and clearance delays reported at Fulbari and Changrabandha land ports",
      "Siliguri trade associations urge customs authorities to streamline documentation",
      "Highlights strategic importance of North Bengal transit for trilateral sub-regional trade"
    ],
    "category": "trade",
    "categoryLabelBn": "সীমান্ত বাণিজ্য ও বন্দর",
    "categoryLabelEn": "Cross-Border Trade",
    "sentiment": "neutral",
    "sentimentReasonBn": "বাণিজ্যিক সংকট ও সমাধানের জন্য ব্যবসায়ী এবং শুল্ক বিভাগের সমন্বিত প্রচেষ্টার বিবরণ দেওয়ায় নিরপেক্ষ সেন্টিমেন্ট।",
    "sentimentReasonEn": "Presents a factual, solution-focused view of cross-border freight logistics.",
    "source": {
      "name": "Uttarbanga Sambad",
      "bureau": "Kolkata",
      "language": "Bengali",
      "originalUrl": "https://uttarbangasambad.com/siliguri-fulbari-land-port-bangladesh-transit-trade-cargo-updates/",
      "scannedAt": "2026-09-20T01:10:00Z"
    },
    "publishedAt": "2026-09-19T07:15:00Z",
    "readTimeBn": "৩ মিনিট পড়া",
    "readTimeEn": "3 min read",
    "imageUrl": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200",
    "isLeadStory": false,
    "isTrending": false,
    "isBreaking": false,
    "tags": [
      "Uttarbanga Sambad",
      "Siliguri Bureau",
      "Fulbari Land Port",
      "Changrabandha",
      "Cross-Border Cargo"
    ]
  },
  {
    "id": "news-20260920-012",
    "slug": "economic-times-mumbai-petrapole-benapole-trade-apparel-supply-chain",
    "title": "Economic Times: Indian Textile & Export Hubs Track Petrapole-Benapole Freight Clearance and Supply Resilience",
    "englishTitle": "The Economic Times: Apparel Exporters & Commercial Banks Monitor Cross-Border Supply Lines Via Petrapole",
    "banglaTitle": "পেট্রাপোল-বেনাপোল দিয়ে পণ্য ছাড়পত্র ও তৈরি পোশাক সাপ্লাই চেইন নিয়ে সতর্ক মুম্বাইয়ের রফতানিকারকরা: দ্য ইকোনমিক টাইমস",
    "summaryBn": "ভারতের অগ্রণী অর্থনৈতিক দৈনিক 'দ্য ইকোনমিক টাইমস' (মুম্বাই ব্যুরো) জানিয়েছে, দক্ষিণ এশিয়ার বৃহত্তম স্থলবন্দর পেট্রাপোল-বেনাপোল করিডোরে পণ্যবাহী কনটেইনারের নির্বিঘ্ন চলাচল নিশ্চিত করতে ভারতের বস্ত্র ও টেক্সটাইল রপ্তানিকারকরা ব্যাংকিং ও এলসি নিষ্পত্তির ওপর কড়া নজর রাখছেন। কাঁচামাল সরবরাহের ধারাবাহিকতা বজায় রাখার ওপর মুম্বাইয়ের বাণিজ্য বিশ্লেষকরা জোর দিয়েছেন।",
    "summaryEn": "The Economic Times (Mumbai bureau) reports that Indian apparel manufacturers and financial institutions are closely observing trade throughput across the critical Petrapole-Benapole border corridor, evaluating letters of credit settlement and raw material logistics to sustain supply chain continuity.",
    "keyPointsBn": [
      "পেট্রাপোল-বেনাপোল করিডোরে প্রতিদিনের পণ্য ছাড়পত্রের গতি পর্যালোচনায় মুম্বাইয়ের আর্থিক মহল",
      "বস্ত্র শিল্পে সুতা ও কাঁচামাল রফতানিতে ঋণপত্র (LC) জটিলতা নিরসনে রিজার্ভ ব্যাংকের দিকনির্দেশনা",
      "ভারত-বাংলাদেশ দ্বিপাক্ষিক বাণিজ্যে স্থিতিশীলতা রক্ষায় যৌথ ওয়ার্কিং গ্রুপের সক্রিয়তা"
    ],
    "keyPointsEn": [
      "Mumbai financial houses track cargo throughput across Petrapole-Benapole checkpoint",
      "Apparel sector reviews letter of credit arrangements for cotton and yarn export contracts",
      "Joint trade working groups coordinate to ensure cross-border commercial stability"
    ],
    "category": "trade",
    "categoryLabelBn": "সীমান্ত বাণিজ্য ও বন্দর",
    "categoryLabelEn": "Cross-Border Trade",
    "sentiment": "positive",
    "sentimentReasonBn": "বাণিজ্য নিরবচ্ছিন্ন রাখা এবং ব্যাংকিং চ্যানেলগুলোর সহযোগিতামূলক সমন্বয়ের ওপর আলোকপাত করায় ইতিবাচক সেন্টিমেন্ট।",
    "sentimentReasonEn": "Emphasizes resilience, supply chain continuity, and proactive commercial management.",
    "source": {
      "name": "The Economic Times",
      "bureau": "Mumbai",
      "language": "English",
      "originalUrl": "https://economictimes.indiatimes.com/news/economy/foreign-trade/india-bangladesh-cross-border-cargo-trade-apparel-supply-chain/articleshow/134789012.cms",
      "scannedAt": "2026-09-20T01:10:00Z"
    },
    "publishedAt": "2026-09-19T13:40:00Z",
    "readTimeBn": "৪ মিনিট পড়া",
    "readTimeEn": "4 min read",
    "imageUrl": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200",
    "isLeadStory": false,
    "isTrending": false,
    "isBreaking": false,
    "tags": [
      "The Economic Times",
      "Mumbai Bureau",
      "Petrapole Benapole",
      "Textile Supply Chain",
      "Cross-Border Trade"
    ]
  },
  {
    "id": "news-20260919-001",
    "slug": "the-wall-hasina-delhi-meeting-december-program-roadmap",
    "title": "ডিসেম্বর পর্যন্ত ধারাবাহিক কর্মসূচির সিদ্ধান্ত হাসিনার দিল্লি বৈঠকে - TheWall",
    "englishTitle": "The Wall Exclusive: Sheikh Hasina's High-Level Delhi Meeting Sets Roadmap for Party Programs Through December",
    "banglaTitle": "ডিসেম্বর পর্যন্ত ধারাবাহিক কর্মসূচির সিদ্ধান্ত হাসিনার দিল্লি বৈঠকে: দ্য ওয়াল-এর এক্সক্লুসিভ রিপোর্ট",
    "summaryBn": "নয়াদিল্লিতে শেখ হাসিনার সভাপতিত্বে বাংলাদেশ আওয়ামী লীগের উচ্চপর্যায়ের একাধিক বৈঠক অনুষ্ঠিত হয়েছে। দ্য ওয়াল-এর বিশেষ প্রতিবেদনে প্রকাশ, আগামী ডিসেম্বর মাস পর্যন্ত স্থায়ী হবে এমন একাধিক সামাজিক ও রাজনৈতিক কর্মসূচির প্রাথমিক খসড়া অনুমোদন দেওয়া হয়েছে এই বৈঠকে।",
    "summaryEn": "According to a special report by Kolkata portal The Wall, Sheikh Hasina chaired high-level consultative meetings in New Delhi where a strategic roadmap and series of political dispatches were approved, spanning through December 2026.",
    "keyPointsBn": [
        "নয়াদিল্লিতে অবস্থানরত আওয়ামী লীগ শীর্ষ নেতৃত্বের বৈঠক",
        "ডিসেম্বর ২০২৬ পর্যন্ত গণসংযোগ ও আন্তর্জাতিক লবিং জোরদারের সিদ্ধান্ত",
        "আইসিটির রায় প্রত্যাখ্যান করে বিশ্ব দরবারে স্মারকলিপি প্রদানের পরিকল্পনা"
    ],
    "keyPointsEn": [
        "High-level consultative gathering chaired by Sheikh Hasina in Delhi",
        "Strategic framework approved for political messaging until December 2026",
        "Plans to submit formal diplomatic dispatches challenging ICT verdicts"
    ],
    "category": "politics",
    "categoryLabelBn": "কূটনীতি ও নীতি",
    "categoryLabelEn": "Politics & Diplomacy",
    "sentiment": "neutral",
    "sentimentReasonBn": "বাংলাদেশের রাজনৈতিক পরিমণ্ডলে ভারতীয় সংবাদমাধ্যমের এই প্রতিবেদনটি দিল্লির কূটনৈতিক তৎপরতা ও নেতৃত্বের সম্ভাব্য পদক্ষেপের ভারসাম্যপূর্ণ বিবরণ প্রদান করে।",
    "sentimentReasonEn": "Provides a neutral journalistic account of political consultations held in Delhi and strategic outlines reported by regional media.",
    "source": {
        "name": "The Wall",
        "bureau": "Delhi",
        "language": "Bengali",
        "originalUrl": "https://news.google.com/rss/articles/CBMi_wFBVV95cUxNY1VOMUMwV210R2xhWUFlSkpxaXRsMXhWazlYQjg3a25LY1kxNE9GWTd1bTJCSGtwdGFVNGt0dE1rNV9xZlkyMTZHS2FTb2N6aVBYS2lNVnZDVVIzZWJ5WmxFWnI3WFpzTVg0YU5wTzN1cVN5UDNnb1RFenhJdlNZbmpWcjZVZ3ptRUxnLW0tZXdrdEhyLVJsdHl3eG83RkxzTVdYTkdzLUU4UkNKcXNKeTJjblBFQU9wUktkQlF6QXZLSDgyb1FPRElKN1RxcHBYTHZtZkRQbDllc1JDQ2UyTFppNW91QkhGaWFoSTI3THU5WURuNEU3cmVIeE8yTGfSAf8BQVVfeXFMTWNVTjFDMFdtdEdsYVlBZUpKcWl0bDF4Vms5WEI4N2tuS2NZMTRPRlk3dW0yQkhrcHRhVTRrdHRTWTVfcWZZMjE2R0thU29jemlQWEtpTVZ2Q1VSM2VieVpsRVpyN1hac01YNGFOcE8zdXFTeVAzZ29URXp4SXZTWW5qVnI2VWd6bUVMZy1tLWV3a3RIci1SbHR5d3hvN0ZMc01XWE5Hcy1FOFJDSnFzSnkyY25QRUFPcFJLZEJRekF2S0g4Mm9RT0RJSjdUcXBwWEx2bWZEUGw5ZXNSQ0NlMkxaaTVvdUJIRmlhaEkyN0x1OVlEbjRFN3JlSHhPMkxn?oc=5",
        "scannedAt": "2026-09-19T06:30:00Z"
    },
    "publishedAt": "2026-09-19T02:40:00Z",
    "readTimeBn": "৪ মিনিট পড়া",
    "readTimeEn": "4 min read",
    "imageUrl": "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&q=80&w=1200",
    "isLeadStory": false,
    "isTrending": true,
    "isBreaking": true,
    "tags": [
        "Sheikh Hasina",
        "Delhi Meeting",
        "The Wall",
        "Awami League",
        "Diplomacy"
    ]
},
  {
    "id": "news-20260919-002",
    "slug": "navbharat-times-tarique-rahman-delhi-visit-brics",
    "title": "BRICS से कर लिया था किनारा, अब भारत आ रहे तारिक रहमान, क्या शेख हसीना का मुद्दा भी उठाएंगे बांग्लादेशी पीएम? - Navbharat Times",
    "englishTitle": "Navbharat Times Analysis: Tarique Rahman's Planned India Visit and Potential Discussions on Sheikh Hasina",
    "banglaTitle": "তারেক রহমানের দিল্লি সফর ও সম্ভাব্য দ্বিপাক্ষিক আলোচনা: নবভারত টাইমসের বিশেষ বিশ্লেষণ",
    "summaryBn": "ভারতের অন্যতম শীর্ষ হিন্দি জাতীয় দৈনিক 'নবভারত টাইমস'-এর প্রতিবেদনে তারেক রহমানের সম্ভাব্য দিল্লি সফর এবং ভারতের সাথে দ্বিপাক্ষিক সম্পর্ক পুনর্গঠনের কৌশল নিয়ে সম্যক আলোকপাত করা হয়েছে। প্রতিবেদনে শেখ হাসিনার ভারতে অবস্থান সংক্রান্ত জটিলতা আলোচনার মূল টেবিলে উঠতে পারে বলে ইঙ্গিত দেওয়া হয়েছে।",
    "summaryEn": "Navbharat Times reports on the upcoming diplomatic engagements involving BNP leadership and India, evaluating how New Delhi views the bilateral reset and strategic security priorities in South Asia.",
    "keyPointsBn": [
        "তারেক রহমানের প্রস্তাবিত দিল্লি সফর নিয়ে হিন্দি মিডিয়ার বিশ্লেষণ",
        "শেখ হাসিনার ভারতে অবস্থান ও বাংলাদেশের প্রত্যর্পণ দাবির দ্বিপাক্ষিক প্রভাব",
        "দক্ষিণ এশীয় ভূরাজনীতি ও আঞ্চলিক নিরাপত্তার ওপর প্রভাব"
    ],
    "keyPointsEn": [
        "Hindi national daily analyzes upcoming diplomatic outreach",
        "Evaluates implications of Sheikh Hasina's exile status on bilateral talks",
        "Focuses on South Asian regional security and strategic balance"
    ],
    "category": "diplomacy",
    "categoryLabelBn": "কূটনীতি ও নীতি",
    "categoryLabelEn": "Diplomacy & Water",
    "sentiment": "neutral",
    "sentimentReasonBn": "প্রতিবেদনটিতে ভারত-বাংলাদেশ সম্পর্কের জটিল কূটনৈতিক মাত্রাগুলো বস্তুনিষ্ঠভাবে উপস্থাপন করা হয়েছে।",
    "sentimentReasonEn": "Offers a balanced journalistic perspective on complex diplomatic negotiations and regional security concerns.",
    "source": {
        "name": "Navbharat Times",
        "bureau": "Delhi",
        "language": "Hindi",
        "originalUrl": "https://news.google.com/rss/articles/CBMi1gFBVV95cUxOdEtSS1ZyUEw3SGFENkNYQUVxeDkxS2dIbGZqRUllRDJLbmxkeDZOSVFLVjBkQndySGkwcHhyNHk1Q3VUSC1fQmpYZ0YxMjFLNjk2NjN6WUxmVWdkN2lzX29LWnZKQnVUTVBSTkdweHdjOHpMTGNlMFZweGRRUXY0UDdxamExbXNxNmo3V3FKM0Npb1pNUzhTSGRiOTJ2bEY3MWNwaTR1V1l6RWZBVG9lWWZud2xrdnQ1dkFFUF9hNkhsTGJ3VlV2RmxjaHhUVWxTYWx6Mkx30gHbAUFVX3lxTE83OS13UG1RSFc4RlJtcWJoQzVyWDRoVWY5Sy10SXFhWUNjNzJsZVZvOV8tb1FsbFhrNUNCemxFeHN2STdhbnRkRkp1ZURVUTZnY1lLeXdxcVdMTjFRS2l0VWpnN2ZZSFkxLTduOEF3NlpQTFdKMm9GZERhWXdYRHRpT2M5Q3p3aldNTkQ2U1ZwWEJELXpLQXFWSUo0RUJlRkhtcFgtaWV4TE11ZTZqbzlzaTczU1RjaVBzUlZVOEdncEZmZVFRdFlNa1dzT1h6bDVXSWpOTFZndEZqdw?oc=5",
        "scannedAt": "2026-09-19T06:30:00Z"
    },
    "publishedAt": "2026-09-19T08:25:22Z",
    "readTimeBn": "৩ মিনিট পড়া",
    "readTimeEn": "3 min read",
    "imageUrl": "https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?auto=format&fit=crop&q=80&w=1200",
    "isLeadStory": false,
    "isTrending": true,
    "isBreaking": false,
    "tags": [
        "Tarique Rahman",
        "Navbharat Times",
        "Delhi Visit",
        "Diplomacy",
        "India Bangladesh"
    ]
},
  {
    "id": "news-20260919-003",
    "slug": "rplus-bangla-youtube-tarique-visit-putin-hasina-talks",
    "title": "হঠাৎ কেন দিল্লিতে আসতে চান তারেক রহমান? পুতিন-হাসিনা গোপন বৈঠকেই লুকিয়ে রহস্য - Rplus Bangla YouTube Dispatch",
    "englishTitle": "Rplus Bangla YouTube Dispatch: Strategic Analysis on Tarique Rahman's Delhi Outreach Amid Regional Developments",
    "banglaTitle": "তারেক রহমানের দিল্লি উদ্যোগ ও দক্ষিণ এশীয় ভূরাজনীতি: আরপ্লাস বাংলা (ইউটিউব নিউজ ডিসপ্যাচ)",
    "summaryBn": "ভারতীয় ডিজিটাল সংবাদ মাধ্যম 'আরপ্লাস বাংলা'-এর বিশেষ ভিডিও ডিসপ্যাচে দক্ষিণ এশিয়ার বর্তমান পরিবর্তনশীল ভূরাজনৈতিক প্রেক্ষাপট ও নতুন কূটনৈতিক সমীকরণ নিয়ে আলোকপাত করা হয়েছে।",
    "summaryEn": "Indian digital news outlet Rplus Bangla releases a special YouTube video dispatch examining regional diplomatic shifts, security considerations, and political developments involving Bangladesh leadership.",
    "keyPointsBn": [
        "আরপ্লাস বাংলার ইউটিউব চ্যানেল থেকে প্রচারিত ভিডিও বিশ্লেষণ",
        "ভারত ও দক্ষিণ এশিয়ায় কূটনৈতিক ভারসাম্যের কৌশল পর্যালোচনা",
        "বাংলাদেশ ও ভারতের মধ্যকার উচ্চপর্যায়ের যোগাযোগের চিত্র"
    ],
    "keyPointsEn": [
        "Special video broadcast by Indian media platform Rplus Bangla",
        "Analyzes regional security and geopolitical realignments",
        "Examines strategic implications for India-Bangladesh bilateral ties"
    ],
    "category": "diplomacy",
    "categoryLabelBn": "কূটনীতি ও ভূরাজনীতি",
    "categoryLabelEn": "Diplomacy & Geopolitics",
    "sentiment": "neutral",
    "sentimentReasonBn": "ভিডিও ডিসপ্যাচটিতে ভারতীয় গণমাধ্যমের দৃষ্টিভঙ্গি থেকে মুক্ত ও বিশ্লেষণাত্মক আলোচনা পেশ করা হয়েছে।",
    "sentimentReasonEn": "Presents an open analytical commentary from Indian digital media covering international relations.",
    "source": {
        "name": "Rplus Bangla (YouTube)",
        "bureau": "Delhi",
        "language": "Bengali",
        "originalUrl": "https://www.youtube.com/watch?v=d9-CofKQsms",
        "scannedAt": "2026-09-19T06:30:00Z"
    },
    "publishedAt": "2026-09-19T07:15:00Z",
    "readTimeBn": "৫ মিনিট ভিডিও",
    "readTimeEn": "5 min watch",
    "imageUrl": "https://i.ytimg.com/vi/d9-CofKQsms/hqdefault.jpg",
    "isLeadStory": false,
    "isTrending": true,
    "isBreaking": false,
    "tags": [
        "Rplus Bangla",
        "YouTube Dispatch",
        "Diplomacy",
        "Tarique Rahman",
        "Geopolitics"
    ]
},
  {
    "id": "news-20260919-004",
    "slug": "mea-response-bangladesh-review-101-bilateral-deals",
    "title": "India's MEA Responds to Reports of Bangladesh Reviewing 101 Bilateral Agreements Signed Under Sheikh Hasina",
    "englishTitle": "MEA Official Statement: India Takes Note of 101 Agreements Review in Dhaka, Assures Continued Project Safeguards",
    "banglaTitle": "১০১টি দ্বিপাক্ষিক চুক্তি পুনর্মূল্যায়ন নিয়ে ঢাকার খবর: ভারতীয় পররাষ্ট্র মন্ত্রণালয়ের (MEA) আনুষ্ঠানিক প্রতিক্রিয়া",
    "summaryBn": "বাংলাদেশ আওয়ামী লীগ সরকারের আমল স্বাক্ষরিত ১০১টি দ্বিপাক্ষিক চুক্তি পুনর্মূল্যায়নের খবরের জবাবে ভারতীয় পররাষ্ট্র মন্ত্রণালয় (MEA) নিশ্চিত করেছে যে নয়াদিল্লি বিষয়টি পর্যবেক্ষণ করছে এবং ভারতীয় বিনিয়োগ ও যৌথ অবকাঠামো প্রকল্পের স্বার্থ সুরক্ষায় প্রয়োজনীয় পদক্ষেপ নেবে।",
    "summaryEn": "In response to media reports regarding Dhaka reviewing 101 bilateral MoUs and pacts signed during Hasina's administration, India's Ministry of External Affairs affirmed it is closely following developments while prioritizing bilateral project continuity.",
    "keyPointsBn": [
        "১০১টি দ্বিপাক্ষিক চুক্তি নিয়ে ঢাকার উদ্যোগের পরিপ্রেক্ষিতে দিল্লির প্রতিক্রিয়া",
        "ভারতীয় পররাষ্ট্র মন্ত্রণালয়ের মুখপাত্র রণধীর জয়সওয়ালের বক্তব্য",
        "সীমান্ত বাণিজ্য, বিদ্যুৎ সঞ্চালন ও ট্রানজিট চুক্তির ধারাবাহিকতা বজায় রাখার ওপর জোর"
    ],
    "keyPointsEn": [
        "India's Ministry of External Affairs addresses reports of bilateral agreement reviews",
        "Spokesperson Randhir Jaiswal highlights focus on regional connectivity and trade stability",
        "Emphasizes protections for cross-border power transmission and infrastructure investments"
    ],
    "category": "trade",
    "categoryLabelBn": "সীমান্ত বাণিজ্য ও চুক্তি",
    "categoryLabelEn": "Cross-Border Trade",
    "sentiment": "neutral",
    "sentimentReasonBn": "ভারতীয় পররাষ্ট্র মন্ত্রণালয়ের সরকারি মুখপাত্রের বিবৃতি নিয়ে তৈরি এই সংবাদটি কূটনৈতিক কাঠামোর মধ্যে ভারসাম্য বজায় রাখে।",
    "sentimentReasonEn": "Reports official diplomatic positions from India's Ministry of External Affairs neutrally and accurately.",
    "source": {
        "name": "The Indian Express",
        "bureau": "Delhi",
        "language": "English",
        "originalUrl": "https://indianexpress.com/article/world/bangladesh-reviews-101-india-deals-sheikh-hasina-government/",
        "scannedAt": "2026-09-19T06:30:00Z"
    },
    "publishedAt": "2026-09-19T09:10:00Z",
    "readTimeBn": "৪ মিনিট পড়া",
    "readTimeEn": "4 min read",
    "imageUrl": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200",
    "isLeadStory": false,
    "isTrending": false,
    "isBreaking": false,
    "tags": [
        "MEA India",
        "Bilateral Deals",
        "Trade",
        "Randhir Jaiswal",
        "Indian Express"
    ]
},
  {
    "id": "news-20260919-005",
    "slug": "bsf-tripura-assam-border-security-high-alert",
    "title": "ত্রিপুরা ও অসম সীমান্তে বিএসএফের বাড়তি সতর্কবার্তা: অবৈধ অনুপ্রবেশ ও চোরাচালান রোধে কঠোর প্রহরা - Syandan Patrika",
    "englishTitle": "BSF Increases Vigilance Along Tripura and Assam Border Corridors Amid Regional Political Shifts",
    "banglaTitle": "ত্রিপুরা ও অসম সীমান্তে বিএসএফের বাড়তি নজরদারি: অবৈধ অনুপ্রবেশ রোধে কড়া পদক্ষেপ (স্যন্দন পত্রিকা প্রতিবেদন)",
    "summaryBn": "আগরতলা ও গুয়াহাটি ব্যুরো থেকে প্রকাশিত সংবাদে জানা গেছে, সীমান্ত সুরক্ষায় বিএসএফ ত্রিপুরা ও অসমের স্পর্শকাতর সীমান্ত পয়েন্টগুলোতে অতিরিক্ত টহল বৃদ্ধি করেছে। রাতে ড্রোন নজরদারি ও থার্মাল ইমেজিং কমান্ড ব্যবহার করা হচ্ছে।",
    "summaryEn": "Border Security Force (BSF) units deployed along the Tripura and Assam international boundaries have stepped up round-the-clock patrolling and drone monitoring to prevent illegal cross-border movement and smuggling.",
    "keyPointsBn": [
        "ত্রিপুরা ও অসম সীমান্তে বিএসএফের যৌথ সতর্ক টহল ও বিশেষ প্রহরা",
        "থার্মাল ক্যামেরা ও নাইট-ভিশন ড্রোনের সাহায্যে সীমান্ত পর্যবেক্ষণ",
        "স্থানীয় সীমান্ত গ্রামগুলোতে বিএসএফ ও পুলিশের কড়া তল্লাশি"
    ],
    "keyPointsEn": [
        "BSF intensifies round-the-clock border patrols across Tripura and Assam vectors",
        "Deployment of thermal vision tech and surveillance drones along sensitive boundaries",
        "Coordination between local border police and security agencies to preserve border calm"
    ],
    "category": "border",
    "categoryLabelBn": "সীমান্ত নিরাপত্তা",
    "categoryLabelEn": "Border & Security",
    "sentiment": "neutral",
    "sentimentReasonBn": "সীমান্ত নিরাপত্তা নিশ্চিতকরণে বিএসএফের রুটিন পদক্ষেপের একটি বস্তুনিষ্ঠ বিবরণ দেওয়া হয়েছে।",
    "sentimentReasonEn": "Describes routine border enforcement measures and security protocols without bias.",
    "source": {
        "name": "Syandan Patrika",
        "bureau": "Delhi",
        "language": "Bengali",
        "originalUrl": "https://news.google.com/rss/articles/CBMi1gFBVV95cUxOdEtSS1ZyUEw3SGFENkNYQUVxeDkxS2dIbGZqRUllRDJLbmxkeDZOSVFLVjBkQndySGkwcHhyNHk1Q3VUSC1fQmpYZ0YxMjFLNjk2NjN6WUxmVWdkN2lzX29LWnZKQnVUTVBSTkdweHdjOHpMTGNlMFZweGRRUXY0UDdxamExbXNxNmo3V3FKM0Npb1pNUzhTSGRiOTJ2bEY3MWNwaTR1V1l6RWZBVG9lWWZud2xrdnQ1dkFFUF9hNkhsTGJ3VlV2RmxjaHhUVWxTYWx6Mkx30gHbAUFVX3lxTE83OS13UG1RSFc4RlJtcWJoQzVyWDRoVWY5Sy10SXFhWUNjNzJsZVZvOV8tb1FsbFhrNUNCemxFeHN2STdhbnRkRkp1ZURVUTZnY1lLeXdxcVdMTjFRS2l0VWpnN2ZZSFkxLTduOEF3NlpQTFdKMm9GZERhWXdYRHRpT2M5Q3p3aldNTkQ2U1ZwWEJELXpLQXFWSUo0RUJlRkhtcFgtaWV4TE11ZTZqbzlzaTczU1RjaVBzUlZVOEdncEZmZVFRdFlNa1dzT1h6bDVXSWpOTFZndEZqdw?oc=5",
        "scannedAt": "2026-09-19T06:30:00Z"
    },
    "publishedAt": "2026-09-19T05:30:00Z",
    "readTimeBn": "৩ মিনিট পড়া",
    "readTimeEn": "3 min read",
    "imageUrl": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=1200",
    "isLeadStory": false,
    "isTrending": false,
    "isBreaking": false,
    "tags": [
        "BSF",
        "Tripura Border",
        "Assam Border",
        "Security",
        "Syandan Patrika"
    ]
},
  {
    "id": "news-20260919-006",
    "slug": "sangbad-pratidin-hasina-exile-return-political-discussions",
    "title": "বিজয় দিবসের আগেই ফিরবেন হাসিনা! আর কী জানাচ্ছে দলীয় সূত্র? - Sangbad Pratidin",
    "englishTitle": "Sangbad Pratidin Report: Discussions Surrounding Sheikh Hasina's Exile Return Strategy Ahead of December",
    "banglaTitle": "শেখ হাসিনার স্বদেশ প্রত্যাবর্তন চর্চা ও কলকাতার সংবাদ মাধ্যমের প্রতিবেদন: সংবাদ প্রতিদিন",
    "summaryBn": "কলকাতার শীর্ষ বাংলা দৈনিক 'সংবাদ প্রতিদিন'-এর বিশেষ প্রতিবেদনে শেখ হাসিনার অনুগামীদের সাথে শীর্ষ নেতৃত্বের যোগাযোগের বিবরণ দেওয়া হয়েছে। প্রতিবেদনে আগামী বিজয় দিবসের পূর্বে দল পুনর্গঠন ও রাজনৈতিক বার্তা দেওয়ার পরিকল্পনার ওপর আলোকপাত করা হয়েছে।",
    "summaryEn": "Kolkata daily Sangbad Pratidin covers discussions among exiled Awami League leaders in India, reporting on strategic consultations regarding political messaging and future party activities.",
    "keyPointsBn": [
        "সংবাদ প্রতিদিনের বিশেষ এক্সক্লুসিভ রিপোর্ট",
        "কলকাতায় অবস্থানরত নির্বাসিত রাজনীতিকদের সঙ্গে শীর্ষ নেতৃত্বের নিয়মিত কথা",
        "দলীয় কর্মসূচি ও রাজনৈতিক অবস্থান পুনর্নির্ধারণের ওপর জোর"
    ],
    "keyPointsEn": [
        "Exclusive reporting by Kolkata mainstream daily Sangbad Pratidin",
        "Details continuous communication channels maintained by exiled AL cadre",
        "Focuses on proposed strategies for structural reorganization"
    ],
    "category": "politics",
    "categoryLabelBn": "রাজনীতি ও কূটনীতি",
    "categoryLabelEn": "Politics & Diplomacy",
    "sentiment": "negative",
    "sentimentReasonBn": "বাংলাদেশের অভ্যন্তরীণ অস্থিতিশীলতা ও মামলা-মোকদ্দমার প্রেক্ষাপটে জটিল রাজনীতির বিবরণ থাকায় নেতিবাচক নির্দেশক চিহ্নিত করা হয়েছে।",
    "sentimentReasonEn": "Reflects political volatility and ongoing legal challenges surrounding Bangladesh's opposition figures.",
    "source": {
        "name": "Sangbad Pratidin",
        "bureau": "Kolkata",
        "language": "Bengali",
        "originalUrl": "https://news.google.com/rss/articles/CBMiswFBVV95cUxNaGxFeEcyU3dRTnFsRmcyRTNfVkw2Yk1mQThXaFljdlpJQTZvY3JPN1VXN3gyd0FuMVJpd3JhUHhfb01QWVdVWWh1OVVpbHpCcEhyNTh2VkxmanpmTUlwNVM4Q3ZsRTZZRnNRUFk4Qzl4dDkxRzdCNFE4cUNDV0thVTdSZmtfbVotUUtBVktjd3phRE5qUTlKOGkzWEFqTm5KZV_EcnhZcHRWbHpvQ3c5X1Fic9IBuwFBVV95cUxNVXJHTWNYZVMxVUN3RlBPU21zV3pTRW1PNE9JNjFiR0c2V2IyNVBrYjZ4dUpWQjRNVy02RklzTG84a0J4c3RwRjNuMk42Z2ZtR1poTThrTXJ6LWhDQ1ViYjlPaEVZZ0pGSk5WVDl5emR6VDA4NVNYemJXNnZXNnRCZFFWTG84UF8yLTZhRlZlX0YtbGpJZlNMRTVXNWN0WDFYSEpVdVFHY2pXZGs3b2NGM1RseVZxQW55MEdE?oc=5",
        "scannedAt": "2026-09-19T06:30:00Z"
    },
    "publishedAt": "2026-09-19T04:15:00Z",
    "readTimeBn": "৪ মিনিট পড়া",
    "readTimeEn": "4 min read",
    "imageUrl": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&q=80&w=1200",
    "isLeadStory": false,
    "isTrending": true,
    "isBreaking": false,
    "tags": [
        "Sangbad Pratidin",
        "Sheikh Hasina",
        "Kolkata Bureau",
        "Awami League"
    ]
},
  {
    "id": "news-20260919-007",
    "slug": "news18-bangla-ict-verdict-7-al-leaders-death-sentence",
    "title": "Bangladesh: শেখ হাসিনা ঘনিষ্ঠ ৭ আওয়ামী লিগ নেতাকে মৃত্যুদণ্ডের সাজা ঘোষণা বাংলাদেশের! তালিকায় প্রাক্তন মন্ত্রীও - News18",
    "englishTitle": "News18 Report: Bangladesh Tribunal Sentences 7 Senior Awami League Leaders to Death Over July Events",
    "banglaTitle": "আওয়ামী লীগের ৭ শীর্ষ নেতার বিরুদ্ধে আন্তর্জাতিক অপরাধ ট্রাইব্যুনালের রায়ের প্রতিক্রিয়া: নিউজ১৮ বাংলা",
    "summaryBn": "বাংলাদেশের আন্তর্জাতিক অপরাধ ট্রাইব্যুনাল (ICT) কর্তৃক আওয়ামী লীগের ৭ জন জ্যেষ্ঠ নেতার মৃত্যুদণ্ডের রায় ঘোষণার বিষয়টিকে গুরুত্বের সাথে প্রকাশ করেছে ভারতীয় সংবাদ মাধ্যম নিউজ১৮ বাংলা। রায়ে ওবায়দুল কাদের সহ একাধিক প্রাক্তন মন্ত্রীর নাম অন্তর্ভুক্ত রয়েছে।",
    "summaryEn": "News18 Bangla reports extensively on the International Crimes Tribunal (ICT) verdict in Dhaka, which handed death sentences to 7 senior Awami League officials including ex-ministers.",
    "keyPointsBn": [
        "নিউজ১৮ বাংলার ব্যুরো রিপোর্ট",
        "আন্তর্জাতিক অপরাধ ট্রাইব্যুনালের মৃত্যুদণ্ডের রায়ের বিশদ বিবরণ",
        "ভারতে অবস্থানরত নেতাদের আইনি ও কূটনৈতিক প্রতিক্রিয়া"
    ],
    "keyPointsEn": [
        "News18 coverage of ICT judicial rulings in Dhaka",
        "Details convictions against former cabinet ministers and senior AL organizers",
        "Examines potential legal appeals and human rights commentary in Indian media"
    ],
    "category": "politics",
    "categoryLabelBn": "আইন ও বিচার",
    "categoryLabelEn": "Politics & Judiciary",
    "sentiment": "negative",
    "sentimentReasonBn": "মৃত্যুদণ্ডের রায় ও মানবতাবিরোধী অপরাধ মামলার সাথে জড়িত হওয়ায় সংবাদের মেজাজ নেতিবাচক হিসেবে চিহ্নিত।",
    "sentimentReasonEn": "Covers judicial death penalty rulings and severe political conflict.",
    "source": {
        "name": "News18",
        "bureau": "Kolkata",
        "language": "Bengali",
        "originalUrl": "https://news.google.com/rss/articles/CBMigwJBVV95cUxQaDkydGFzYnRSR1Y0dG9EZzdrVUd5Z3FkRFNENWYzbnNheU5MR2ZVR3dmREdnQkhGa1BUdjQxQ2RDcDRwWUNwMUJrWXJlZkhnb0JlTlVqOEplZGE3VmFkYWpGaFowTHZ2QUVpMmJNbDlNQXRWUmJuYms3aWc1Y051MjRTY0Rsd0U5aDBpTGZ2VlVrR2JmcVA2TjJ6MWV2a2xrLXlwX251WlNyeUlFaEctejE5SGdOaS1qSks1bVNCczBuclROQmRBNjdFdHZmVkFWVGo0NHZOM3V2SkxqMkZPd1VRTG9xQlRrR1hTMzV0cXdyYlpoaFRDTU9aTkZWQmRnQ2JF?oc=5",
        "scannedAt": "2026-09-19T06:30:00Z"
    },
    "publishedAt": "2026-09-19T07:26:53Z",
    "readTimeBn": "৪ মিনিট পড়া",
    "readTimeEn": "4 min read",
    "imageUrl": "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1200",
    "isLeadStory": false,
    "isTrending": false,
    "isBreaking": false,
    "tags": [
        "News18 Bangla",
        "ICT Verdict",
        "Obaidul Quader",
        "Judiciary"
    ]
},
  {
    "id": "news-20260919-008",
    "slug": "rplus-bangla-youtube-tarique-yunus-hasina-leadership",
    "title": "হাসিনা, ইউনুসের পর একই তালিকায় তারেক? আসলে বাংলাদেশ চালাচ্ছেন কে? - Rplus Bangla YouTube Dispatch",
    "englishTitle": "Rplus Bangla Dispatch: Governance Analysis and Power Dynamics in Post-Hasina Bangladesh",
    "banglaTitle": "বাংলাদেশের শাসনব্যবস্থা ও রাজনৈতিক ক্ষমতার ভরকেন্দ্র: আরপ্লাস বাংলা (ইউটিউব নিউজ ডিসপ্যাচ)",
    "summaryBn": "ভারতীয় সংবাদ চ্যানেল আরপ্লাস বাংলা প্রচারিত এই ইউটিউব ভিডিও রিপোর্টে বাংলাদেশের অন্তর্বর্তী সরকার, বিএনপি নেতৃত্ব ও রাজনৈতিক দলগুলোর নীতি নির্ধারণী কৌশল নিয়ে বস্তুনিষ্ঠ আলোচনা বিশ্লেষণ উপস্থাপন করা হয়েছে।",
    "summaryEn": "Rplus Bangla releases an insightful video dispatch scrutinizing governance structures, interim cabinet policies, and political balance in contemporary Bangladesh.",
    "keyPointsBn": [
        "আরপ্লাস বাংলা কর্তৃক প্রকাশিত ডিজিটাল নিউজ ডিসপ্যাচ",
        "বাংলাদেশের প্রশাসন ও অন্তর্বর্তী নেতৃত্বের ভূরাজনৈতিক ভূমিকা বিশ্লেষণ",
        "ভারত-বাংলাদেশ সম্পর্কের বর্তমান অবস্থা পর্যালোচনা"
    ],
    "keyPointsEn": [
        "Special analytical broadcast by Indian news outlet Rplus Bangla",
        "Evaluates institutional stability and political transition in Dhaka",
        "Assesses key bilateral priorities for New Delhi"
    ],
    "category": "diplomacy",
    "categoryLabelBn": "ভূরাজনীতি ও বিশ্লেষণ",
    "categoryLabelEn": "Geopolitics & Analysis",
    "sentiment": "neutral",
    "sentimentReasonBn": "শাসনব্যবস্থা ও রাজনৈতিক সমীকরণের ভারসাম্যমূলক পর্যালোচনা পেশ করা হয়েছে।",
    "sentimentReasonEn": "Analyzes political governance and institutional shifts without bias.",
    "source": {
        "name": "Rplus Bangla (YouTube)",
        "bureau": "Delhi",
        "language": "Bengali",
        "originalUrl": "https://www.youtube.com/watch?v=HPwrbhXjMwA",
        "scannedAt": "2026-09-19T06:30:00Z"
    },
    "publishedAt": "2026-09-19T06:50:00Z",
    "readTimeBn": "৬ মিনিট ভিডিও",
    "readTimeEn": "6 min watch",
    "imageUrl": "https://i.ytimg.com/vi/HPwrbhXjMwA/hqdefault.jpg",
    "isLeadStory": false,
    "isTrending": false,
    "isBreaking": false,
    "tags": [
        "Rplus Bangla",
        "YouTube Dispatch",
        "Governance",
        "Tarique Rahman",
        "Interim Cabinet"
    ]
},
  {
    "id": "news-20260919-009",
    "slug": "navbharat-times-bdesh-official-audio-reaction",
    "title": "'शेख हसीना वापस लौटीं तो पुलिस कुछ नहीं कर पाएगी', बांग्लादेशी अधिकारी के ऑडियो से ढाका में हड़कंप, तुरंत हटाया - Navbharat Times",
    "englishTitle": "Navbharat Times Report on Security Discussions in Bangladesh Regarding Potential Political Shifts",
    "banglaTitle": "প্রশাসনের অভ্যন্তরীণ আলোচনা ও প্রতিক্রিয়া নিয়ে নবভারত টাইমসের খবর",
    "summaryBn": "ভারতের নবভারত টাইমস পত্রিকায় প্রকাশিত সংবাদে বলা হয়েছে, সম্প্রতি প্রকাশিত একটি অডিও রেকর্ডকে কেন্দ্র করে ঢাকার প্রশাসনিক মহল এবং নিরাপত্তা সংস্থায় নতুন আলোচনা শুরু হয়েছে। বিষয়টি নিয়ে প্রশাসনিক ব্যবস্থা গ্রহণের বিষয়টিও তুলে ধরা হয়েছে।",
    "summaryEn": "Navbharat Times reports on administrative developments and internal departmental discussions in Bangladesh regarding law enforcement readiness and security updates.",
    "keyPointsBn": [
        "হিন্দি দৈনিক নবভারত টাইমসের বিশেষ প্রতিবেদন",
        "প্রশাসনিক পর্যায়ে নিরাপত্তা আলোচনা ও সিদ্ধান্ত",
        "জননিরাপত্তা ও অভ্যন্তরীণ আইন-শৃঙ্খলা রক্ষা জোরদার"
    ],
    "keyPointsEn": [
        "Special report by Hindi daily Navbharat Times",
        "Examines administrative security assessments in Dhaka",
        "Highlights measures taken for maintaining public order and stability"
    ],
    "category": "politics",
    "categoryLabelBn": "রাজনীতি ও প্রশাসন",
    "categoryLabelEn": "Politics & Governance",
    "sentiment": "negative",
    "sentimentReasonBn": "আইন-শৃঙ্খলা ও প্রশাসনিক টানাপোড়েনের বিষয় অন্তর্ভুক্ত থাকায় সংবাদের মনোভাব নেতিবাচক।",
    "sentimentReasonEn": "Covers law enforcement tensions and administrative controversies.",
    "source": {
        "name": "Navbharat Times",
        "bureau": "Delhi",
        "language": "Hindi",
        "originalUrl": "https://news.google.com/rss/articles/CBMi_wFBVV95cUxPZEtxYnpqVVc1LVllbHdLVnlLUF9OTlpKMzU4TjA5Mm1DYy1RNVF5bWNWMXlwQjVvTFlQazdhOEIybjJ0azVKVVBKRTliVlROeGxVWldSOXI1Z21aLTc3WHZHZ2dFcnpzZUlUVW1helhpckZnNkw1Rm9EQXZRd1dSUVg4eTJ6SVp0eHUxdkJnRzN5RTFBdkdEczd2Sy1yYW5pYlRmX09uaUphVlE3d0Q1Z2JOWlpsN1pFYzczOVFtTlRkT3ZrZ0k3VklBeUs2YV80Y2l4UVk5NXBiQS1QR28taGtUcEttZDhPYjdJbWhrVVpfZ1FDSDBsY0NsYUJiWFnSAYQCQVVfeXFMUFZuN3FMNFZ3akN3R0sxdE00aUFISF8xc1_ZTWnZnVFRHBsRElqYktxMHJ0RzlGcUVIMXN2S3JKVGNlZVU3NlhLa1Jwc1JHa2REaUppZVRySEFGSHhJbEl0NnZ1VjhLTnZXYlpoZFhSSnBqZUxydGE3NU1Bc1R4VC1NOERfQ0h4Sk9WcGV5MzdfVXNta0pZV0wwTURMZlJaeTY0SE1pZG9HNnQ5eGhLS2Jmb05HTFZrMDJXM0IyaFBqU054VmdZRVU5amI4anhZMktDOTFYekJ1S1BPUWxOcWxsWkttZW9QUkVqOG5iQVlwVzJNaURJUzhnZmFQSmhsWTVSUDI?oc=5",
        "scannedAt": "2026-09-19T06:30:00Z"
    },
    "publishedAt": "2026-09-19T04:27:54Z",
    "readTimeBn": "৩ মিনিট পড়া",
    "readTimeEn": "3 min read",
    "imageUrl": "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80&w=1200",
    "isLeadStory": false,
    "isTrending": false,
    "isBreaking": false,
    "tags": [
        "Navbharat Times",
        "Governance",
        "Security",
        "Law Enforcement"
    ]
},
  {
    "id": "news-20260919-010",
    "slug": "uttarbanga-sambad-fulbari-changrabandha-land-port-trade",
    "title": "ফুলবাড়ী ও চ্যাংড়াবান্ধা স্থলবন্দরে পণ্যবাহী ট্রাক চলাচলে স্বাভাবিকতা: উত্তরবঙ্গ সংবাদের বিশেষ রিপোর্ট",
    "englishTitle": "Uttarbanga Sambad: Freight Operations and Truck Movement Resume Smoothly at Fulbari and Changrabandha Land Ports",
    "banglaTitle": "ফুলবাড়ী ও চ্যাংড়াবান্ধা স্থলবন্দরে ভারত-বাংলাদেশ সীমান্ত বাণিজ্য স্বাভাবিক: উত্তরবঙ্গ সংবাদ",
    "summaryBn": "শিলিগুড়ি ব্যুরো থেকে প্রকাশিত 'উত্তরবঙ্গ সংবাদ'-এর প্রতিবেদনে জানা গেছে, উত্তরবঙ্গের চ্যাংড়াবান্ধা ও ফুলবাড়ী স্থলবন্দর দিয়ে পণ্যবাহী ট্রাক চলাচল স্বাভাবিক রয়েছে। পাথর, খাদ্যপণ্য ও শিল্প কাঁচামাল রপ্তানিতে কাস্টমস ক্লিয়ারেন্স দ্রুত সম্পন্ন হচ্ছে।",
    "summaryEn": "Siliguri daily Uttarbanga Sambad reports that bilateral truck movement and custom clearing operations remain smooth across North Bengal land ports including Fulbari and Changrabandha.",
    "keyPointsBn": [
        "শিলিগুড়ি ব্যুরো ও উত্তরবঙ্গ সংবাদের যৌথ ক্ষেত্রভিত্তিক রিপোর্ট",
        "চ্যাংড়াবান্ধা ও ফুলবাড়ী স্থলবন্দরে প্রতিদিন ৪০০+ ট্রাকের যাতায়াত",
        "পণ্য পরিবহন ও সীমান্ত শুল্ক প্রক্রিয়ায় গতিশীলতা বজায় রাখা"
    ],
    "keyPointsEn": [
        "On-ground report from Siliguri bureau of Uttarbanga Sambad",
        "Over 400 trucks cleared daily through Changrabandha and Fulbari borders",
        "Ensures steady supply chain for essential commodities and industrial raw materials"
    ],
    "category": "trade",
    "categoryLabelBn": "সীমান্ত বাণিজ্য ও শুল্ক",
    "categoryLabelEn": "Border Trade & Commerce",
    "sentiment": "positive",
    "sentimentReasonBn": "সীমান্ত বাণিজ্য স্বাভাবিক ও সচল থাকার পজিটিভ চিত্র তুলে ধরা হয়েছে।",
    "sentimentReasonEn": "Highlights positive economic recovery and uninterrupted bilateral commerce.",
    "source": {
        "name": "Uttarbanga Sambad",
        "bureau": "Kolkata",
        "language": "Bengali",
        "originalUrl": "https://news.google.com/rss/articles/CBMi1gFBVV95cUxOdEtSS1ZyUEw3SGFENkNYQUVxeDkxS2dIbGZqRUllRDJLbmxkeDZOSVFLVjBkQndySGkwcHhyNHk1Q3VUSC1fQmpYZ0YxMjFLNjk2NjN6WUxmVWdkN2lzX29LWnZKQnVUTVBSTkdweHdjOHpMTGNlMFZweGRRUXY0UDdxamExbXNxNmo3V3FKM0Npb1pNUzhTSGRiOTJ2bEY3MWNwaTR1V1l6RWZBVG9lWWZud2xrdnQ1dkFFUF9hNkhsTGJ3VlV2RmxjaHhUVWxTYWx6Mkx30gHbAUFVX3lxTE83OS13UG1RSFc4RlJtcWJoQzVyWDRoVWY5Sy10SXFhWUNjNzJsZVZvOV8tb1FsbFhrNUNCemxFeHN2STdhbnRkRkp1ZURVUTZnY1lLeXdxcVdMTjFRS2l0VWpnN2ZZSFkxLTduOEF3NlpQTFdKMm9GZERhWXdYRHRpT2M5Q3p3aldNTkQ2U1ZwWEJELXpLQXFWSUo0RUJlRkhtcFgtaWV4TE11ZTZqbzlzaTczU1RjaVBzUlZVOEdncEZmZVFRdFlNa1dzT1h6bDVXSWpOTFZndEZqdw?oc=5",
        "scannedAt": "2026-09-19T06:30:00Z"
    },
    "publishedAt": "2026-09-19T05:10:00Z",
    "readTimeBn": "৩ মিনিট পড়া",
    "readTimeEn": "3 min read",
    "imageUrl": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200",
    "isLeadStory": false,
    "isTrending": false,
    "isBreaking": false,
    "tags": [
        "Uttarbanga Sambad",
        "Siliguri Bureau",
        "Trade",
        "Fulbari",
        "Land Port"
    ]
},
  {
    "id": "news-20260919-011",
    "slug": "economic-times-mumbai-garment-exporters-bangladesh-supply-chain",
    "title": "Economic Times Mumbai: Indian Textile Exporters Capitalize on Shifted Apparel Orders Amid Bangladesh Supply Adjustments",
    "englishTitle": "The Economic Times (Mumbai Bureau): Financial & Garment Hubs Track Trade Opportunities",
    "banglaTitle": "গার্মেন্টস ও টেক্সটাইল রপ্তানিতে ভারতীয় খাতের প্রবৃদ্ধি: ইকোনমিক টাইমসের (মুম্বাই ব্যুরো) বিশেষ প্রতিবেদন",
    "summaryBn": "মুম্বাইয়ের আর্থিক বাজার ও টেক্সটাইল রপ্তানিকারকদের উদ্ধৃতি দিয়ে ইকোনমিক টাইমস জানিয়েছে, আন্তর্জাতিক তৈরি পোশাক ব্র্যান্ডগুলো ভারত ও বাংলাদেশে যৌথভাবে ভারসাম্যপূর্ণ ক্রয় আদেশ প্রদান করছে।",
    "summaryEn": "The Economic Times (Mumbai bureau) reports on textile trade flows, noting how Indian garment manufacturers in Tirupur and Gujarat are coordinating with regional buyers.",
    "keyPointsBn": [
        "ইকোনমিক টাইমসের মুম্বাই ব্যুরোর শিল্প খাত বিশ্লেষণ",
        "আন্তর্জাতিক পোশাক ক্রেতাদের দ্বিপাক্ষিক ক্রয় কৌশল",
        "দক্ষিণ এশীয় টেক্সটাইল রপ্তানিতে ভারতের প্রস্তুতকারকদের ভূমিকা"
    ],
    "keyPointsEn": [
        "Financial report by The Economic Times Mumbai bureau",
        "Examines regional apparel supply chains and global brand Sourcing",
        "Highlights collaborative textile exports in South Asia"
    ],
    "category": "trade",
    "categoryLabelBn": "অর্থনীতি ও শিল্প",
    "categoryLabelEn": "Economy & Commerce",
    "sentiment": "positive",
    "sentimentReasonBn": "রপ্তানি বৃদ্ধি ও শিল্প খাতের ইতিবাচক প্রভাব তুলে ধরা হয়েছে।",
    "sentimentReasonEn": "Focuses on positive economic trends and commercial supply chain stabilization.",
    "source": {
        "name": "The Economic Times",
        "bureau": "Mumbai",
        "language": "English",
        "originalUrl": "https://economictimes.indiatimes.com/industry/cons-products/garments-/-textiles/indian-textile-units-see-order-surge/articleshow/134298101.cms",
        "scannedAt": "2026-09-19T06:30:00Z"
    },
    "publishedAt": "2026-09-19T08:00:00Z",
    "readTimeBn": "৪ মিনিট পড়া",
    "readTimeEn": "4 min read",
    "imageUrl": "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200",
    "isLeadStory": false,
    "isTrending": false,
    "isBreaking": false,
    "tags": [
        "Economic Times",
        "Mumbai Bureau",
        "Textile",
        "Exports",
        "Trade"
    ]
},
  {
    "id": "news-20260919-012",
    "slug": "ei-samay-kolkata-book-fair-bangladesh-stall-participation",
    "title": "আন্তর্জাতিক কলকাতা বইমেলায় বাংলাদেশ প্যাভিলিয়ন নির্মাণ প্রস্তুতি ও প্রকাশকদের অংশগ্রহণ: এই সময়-এর প্রতিবেদন",
    "englishTitle": "Ei Samay Kolkata: Cultural Preparations underway for Bangladesh Pavilion at Kolkata International Book Fair",
    "banglaTitle": "কলকাতা আন্তর্জাতিক বইমেলায় বাংলাদেশি প্রকাশকদের যৌথ উপস্থিতি: ‘এই সময়’ পত্রিকার বিশেষ সংবাদ",
    "summaryBn": "কলকাতার শীর্ষ দৈনিক 'এই সময়'-এর খবরে প্রকাশ, ৪8তম কলকাতা আন্তর্জাতিক বইমেলায় বাংলাদেশি প্রকাশনা সংস্থাগুলোর অংশগ্রহণ ও সাংস্কৃতিক আদান-প্রদান নিশ্চিত করতে বুক সেলার্স অ্যান্ড পাবলিশার্স গিল্ডের প্রস্তুতি পুরোদমে চলছে।",
    "summaryEn": "Kolkata newspaper Ei Samay reports on cultural exchange and publisher preparations for the Bangladesh Pavilion at the upcoming Kolkata International Book Fair.",
    "keyPointsBn": [
        "কলকাতার প্রধান সংবাদপত্র 'এই সময়'-এর সংস্কৃতি বিষয়ক সংবাদ",
        "বুক সেলার্স অ্যান্ড পাবলিশার্স গিল্ডের যৌথ বৈঠক ও সিদ্ধান্ত",
        "দুই বাংলার সাহিত্য ও পুস্তক প্রকাশের সাংস্কৃতিক মেলবন্ধন"
    ],
    "keyPointsEn": [
        "Cultural coverage by leading Kolkata daily Ei Samay",
        "Publishers & Booksellers Guild organizes pavilion allocations",
        "Fosters cross-border literary exchange and cultural affinity"
    ],
    "category": "culture",
    "categoryLabelBn": "সংস্কৃতি ও সাহিত্য",
    "categoryLabelEn": "Culture & Arts",
    "sentiment": "positive",
    "sentimentReasonBn": "সাংস্কৃতিক মেলবন্ধন ও সাহিত্যের সৌহার্দ্যময় উদ্যোগকে প্রতিফলিত করে।",
    "sentimentReasonEn": "Emphasizes cross-border cultural harmony, literature, and positive community ties.",
    "source": {
        "name": "Ei Samay",
        "bureau": "Kolkata",
        "language": "Bengali",
        "originalUrl": "https://eisamay.com/culture/kolkata-book-fair-bangladesh-stall-preparations-update/articleshow/134299102.cms",
        "scannedAt": "2026-09-19T06:30:00Z"
    },
    "publishedAt": "2026-09-19T09:30:00Z",
    "readTimeBn": "৩ মিনিট পড়া",
    "readTimeEn": "3 min read",
    "imageUrl": "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&q=80&w=1200",
    "isLeadStory": false,
    "isTrending": false,
    "isBreaking": false,
    "tags": [
        "Ei Samay",
        "Kolkata Book Fair",
        "Culture",
        "Literature",
        "Kolkata Bureau"
    ]
},
  
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
    "isLeadStory": false,
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
    "title": "Putin-Hasina Talks: হঠাৎ কেন দিল্লিতে আসতে চান তারেক রহমান? পুতিন-হাসিনা গোপন বৈঠকেই লুকিয়ে রহস্য - Rplus Bangla YouTube Dispatch",
    "englishTitle": "Putin-Hasina Talks: Why Does Tarique Rahman Seek Delhi Outreach? Rplus Bangla Examines Geopolitical Dynamics",
    "banglaTitle": "পুতিন-হাসিনা বৈঠক ও তারেক রহমানের দিল্লি উদ্যোগ: আরপ্লাস বাংলার বিশেষ ভিডিও রিপোর্ট",
    "summaryBn": "ভারতীয় ডিজিটাল সংবাদ মাধ্যম 'আরপ্লাস বাংলা'-এর বিশেষ ভিডিও ডিসপ্যাচে পুতিন-হাসিনা বৈঠকের প্রেক্ষাপট, দক্ষিণ এশিয়ায় বড় শক্তিগুলোর কৌশলগত অবস্থান, এবং তারেক রহমানের সম্ভাব্য ভারত সফর নিয়ে বিশদ আলোচনা সম্প্রচারিত হয়েছে।",
    "summaryEn": "Indian digital news outlet Rplus Bangla releases a special YouTube video dispatch examining regional diplomatic shifts, the Putin-Hasina dialogue context, and political considerations surrounding Tarique Rahman's outreach.",
    "keyPointsBn": [
      "আরপ্লাস বাংলার ইউটিউব চ্যানেল থেকে প্রচারিত পুতিন-হাসিনা ও তারেক রহমান সংক্রান্ত ভিডিও বিশ্লেষণ",
      "দক্ষিণ এশিয়ার ভূ-রাজনীতি ও দিল্লি-ঢাকা ভবিষ্যৎ কৌশলগত সম্পর্কের রূপরেখা",
      "ভারতীয় ডিজিটাল সংবাদমাধ্যমের বিশেষ ভিডিও কভারেজ ও প্যানেল পর্যালোচনা"
    ],
    "keyPointsEn": [
      "Special YouTube video broadcast by Indian media platform Rplus Bangla",
      "Analyzes regional security, Putin-Hasina talks context, and Tarique Rahman's outreach",
      "Examines strategic implications for India-Bangladesh bilateral reset"
    ],
    "category": "diplomacy",
    "categoryLabelBn": "কূটনীতি ও ভূরাজনীতি",
    "categoryLabelEn": "Diplomacy & Geopolitics",
    "sentiment": "neutral",
    "sentimentReasonBn": "ভূ-রাজনৈতিক শক্তিগুলোর কৌশলগত সম্পর্কের নিরপেক্ষ ভিডিও কভারেজ।",
    "sentimentReasonEn": "Balanced video panel analysis on South Asian diplomacy.",
    "source": {
      "name": "Rplus Bangla (YouTube)",
      "bureau": "Kolkata",
      "language": "Bengali",
      "originalUrl": "https://www.youtube.com/watch?v=d9-CofKQsms",
      "originalHeadline": "Putin-Hasina Talks: হঠাৎ কেন দিল্লিতে আসতে চান তারেক রহমান? পুতিন-হাসিনা গোপন বৈঠকেই লুকিয়ে রহস্য",
      "scannedAt": "2026-09-18T19:05:00.000Z"
    },
    "publishedAt": "2026-09-18T07:30:00.000Z",
    "readTimeBn": "৫ মিনিট ভিডিও",
    "readTimeEn": "5 min watch",
    "imageUrl": "https://i.ytimg.com/vi/d9-CofKQsms/hqdefault.jpg",
    "isLeadStory": false,
    "isTrending": false,
    "tags": [
      "YouTube Video",
      "ভিডিও রিপোর্ট",
      "Rplus Bangla",
      "Geopolitics",
      "Tarique Rahman",
      "Putin Hasina Talks",
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
    "isLeadStory": false,
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
    "isLeadStory": false,
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
    "isLeadStory": false,
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
