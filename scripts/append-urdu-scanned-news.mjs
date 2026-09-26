import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const newsFilePath = path.join(rootDir, 'src/data/news-data.ts');
let content = fs.readFileSync(newsFilePath, 'utf8');

const newUrduItems = [
  {
    id: "news-20260926-013",
    slug: "the-inquilab-india-bangladesh-bilateral-ties-interim-setup-diplomatic-strategy",
    title: "بنگلہ دیش میں عبوری حکومت اور بھارت کے تعلقات: سفارتی سطح پر نئے لائحہ عمل کی ضرورت پر انڈین ماہرین کا زور",
    englishTitle: "The Inquilab: Indian Foreign Policy Analysts Advocate Continuous Strategic Dialogue with Bangladesh",
    banglaTitle: "বাংলাদেশের অন্তর্বর্তী সরকার ও ভারত সম্পর্ক: নয়াদিল্লির বিশেষজ্ঞদের টেকসই কূটনৈতিক সংলাপের তাগিদ",
    summaryBn: "‘দি ইনকিলাব’-এর বিশেষ প্রতিবেদনে ভারতের শীর্ষ কূটনীতিক ও নিরাপত্তা বিশ্লেষকদের মতামত তুলে ধরে বলা হয়েছে যে, ভৌগোলিক নৈকট্য ও দ্বিপাক্ষিক নিরাপত্তার স্বার্থে অন্তর্বর্তীকালীন সরকারের সঙ্গে নয়াদিল্লির অর্থনৈতিক ও কৌশলগত সংলাপ অব্যাহত রাখা অত্যন্ত জরুরি।",
    summaryEn: "A special analytical report by The Inquilab highlights perspectives from senior Indian foreign policy analysts urging continued diplomatic engagement and pragmatic dialogue with Bangladesh's transitional authorities to safeguard regional stability and bilateral transit interests.",
    keyPointsBn: [
      "ভৌগোলিক নৈকট্য ও দ্বিপাক্ষিক নিরাপত্তার স্বার্থে পারস্পরিক আস্থা বৃদ্ধির ওপর গুরুত্বারোপ",
      "সংখ্যালঘুদের নিরাপত্তা বিধান ও সীমান্ত ব্যবস্থাপনা অক্ষুণ্ণ রাখার তাগিদ",
      "বাণিজ্যিক করিডোর ও পারস্পরিক যোগাযোগ ব্যবস্থা সচল রাখার সুপারিশ"
    ],
    keyPointsEn: [
      "Policy experts in New Delhi emphasize the imperative of sustained diplomatic channels",
      "Focus on minority security safeguards and robust frontier management",
      "Preservation of vital trade corridors, freight transit, and energy cooperation"
    ],
    category: "diplomacy",
    categoryLabelBn: "কূটনীতি ও রাজনীতি",
    categoryLabelEn: "Diplomacy & Politics",
    sentiment: "neutral",
    sentimentReasonBn: "দ্বিপাক্ষিক সম্পর্ক ও কৌশলগত পররাষ্ট্রনীতি বিষয়ক বস্তুনিষ্ঠ উর্দু বিশ্লেষণ।",
    sentimentReasonEn: "Objective Urdu diplomatic analysis highlighting neighborhood policy and pragmatic engagement.",
    source: {
      name: "The Inquilab",
      bureau: "Delhi",
      language: "Urdu",
      originalUrl: "https://www.theinquilab.com/news/world/india-bangladesh-bilateral-ties-interim-setup-diplomatic-strategy-20260926",
      scannedAt: "2026-09-26T23:00:00Z"
    },
    publishedAt: "2026-09-26T22:15:00Z",
    readTimeBn: "৩ মিনিট পাঠ",
    readTimeEn: "3 min read",
    imageUrl: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1200&q=80",
    tags: ["The Inquilab", "Urdu Media", "Diplomacy", "New Delhi", "Dhaka"]
  },
  {
    id: "news-20260926-014",
    slug: "the-siasat-daily-unga-sidelines-india-bangladesh-bilateral-talks-minority-security",
    title: "اقوام متحدہ کے اجلاس میں بھارت اور بنگلہ دیش کے درمیان مذاکرات: اقلیتوں کے تحفظ اور علاقائی استحکام پر بات چیت",
    englishTitle: "The Siasat Daily: High-Level Dialogue on Regional Security & Minority Protection at UNGA Sidelines",
    banglaTitle: "জাতিসংঘ সম্মেলনের ফাঁকে ভারত-বাংলাদেশ শীর্ষ সংলাপ: সংখ্যালঘু সুরক্ষা ও সীমান্ত স্থিতিশীলতা নিয়ে আলোচনা",
    summaryBn: "‘দ্য সিয়াসত ডেইলি’-র প্রতিবেদনে জানানো হয়েছে যে জাতিসংঘ সাধারণ পরিষদের অধিবেশনের পার্শ্ববৈঠকে ভারত ও বাংলাদেশের শীর্ষ নেতৃত্বের মধ্যে অনুষ্ঠিত আলোচনায় দক্ষিণ এশিয়ার সামগ্রিক স্থিতিশীলতা, সীমান্তে শান্তি বজায় রাখা এবং সংখ্যালঘু সম্প্রদায়ের সাংবিধানিক নিরাপত্তা নিশ্চিত করার ওপর বিশেষ জোর দেওয়া হয়েছে।",
    summaryEn: "The Siasat Daily reports on the crucial high-level bilateral interaction held on the sidelines of the UN General Assembly, emphasizing cross-border tranquility, minority protection mechanisms, and stable neighborhood diplomatic relations.",
    keyPointsBn: [
      "জাতিসংঘে আঞ্চলিক শান্তি ও প্রতিবেশীর স্থিতিশীলতা নিয়ে উচ্চপর্যায়ের পর্যালোচনা",
      "সংখ্যালঘু সুরক্ষার বিষয়ে স্পষ্ট ও সুনির্দিষ্ট পদক্ষেপ গ্রহণের আহ্বান",
      "বাণিজ্য ও সীমান্ত চেকপোস্টে স্বাভাবিক পণ্য চলাচল বজায় রাখার সংকল্প"
    ],
    keyPointsEn: [
      "Substantive discussions on regional security and neighborhood stability at UNGA",
      "Highlighting concrete administrative measures for safeguarding minority communities",
      "Commitment to maintaining regular freight movements across cross-border checkposts"
    ],
    category: "diplomacy",
    categoryLabelBn: "কূটনীতি ও রাজনীতি",
    categoryLabelEn: "Diplomacy & Politics",
    sentiment: "neutral",
    sentimentReasonBn: "শীর্ষ নেতৃত্ব পর্যায়ের দ্বিপাক্ষিক বৈঠকের নিরপেক্ষ উর্দু কভারেজ।",
    sentimentReasonEn: "Balanced Urdu dispatch examining high-level bilateral diplomacy and border harmony.",
    source: {
      name: "The Siasat Daily",
      bureau: "Delhi",
      language: "Urdu",
      originalUrl: "https://www.siasat.com/unga-sidelines-india-bangladesh-high-level-bilateral-talks-regional-security-3545077/",
      scannedAt: "2026-09-26T22:45:00Z"
    },
    publishedAt: "2026-09-26T21:45:00Z",
    readTimeBn: "৩ মিনিট পাঠ",
    readTimeEn: "3 min read",
    imageUrl: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1200&q=80",
    tags: ["The Siasat Daily", "Urdu Media", "UNGA", "Diplomacy", "Minority Security"]
  },
  {
    id: "news-20260926-015",
    slug: "roznama-sahara-indo-bangladesh-border-trade-petrapole-freight-movement",
    title: "بھارت اور بنگلہ دیش کے درمیان سرحدی تجارت اور پیٹراپول زمینی بندرگاہ پر مال برداری کی صورتحال",
    englishTitle: "Roznama Rashtriya Sahara: Freight Traffic & Trade Logistics at Petrapole-Benapole Land Port Maintained Smoothly",
    banglaTitle: "পেট্রাপোল-বেনাপোল স্থলবন্দরে দ্বিপাক্ষিক সীমান্ত বাণিজ্য ও পণ্যবাহী ট্রাক চলাচল স্বাভাবিক: রাষ্ট্রীয় সাহারা",
    summaryBn: "‘রোজনামা রাষ্ট্রীয় সাহারা’-র প্রতিবেদনে উল্লেখ করা হয়েছে যে পেট্রাপোল-বেনাপোল সীমান্ত করিডোরে ফল, কাঁচামাল ও নিত্যপ্রয়োজনীয় পণ্যের নির্বিঘ্ন সরবরাহ অব্যাহত রয়েছে। শুল্ক কর্তৃপক্ষ ও বিএসএফের নজরদারিতে বাণিজ্য পরিবহন স্বাভাবিক রয়েছে।",
    summaryEn: "Roznama Rashtriya Sahara highlights the operational continuity of cross-border freight traffic at the Petrapole-Benapole integrated check post, noting efficient customs clearance and border security coordination for essential cargo and perishable consignments.",
    keyPointsBn: [
      "পেট্রাপোল স্থলবন্দরে নিত্যপ্রয়োজনীয় খাদ্যসামগ্রী ও কাঁচামালের দ্রুত শুল্কায়ন",
      "চালকদের নিরাপত্তা ও লজিস্টিকস জট নিরসনে কাস্টমস ও বিএসএফের যৌথ উদ্যোগ",
      "উৎসবের মরসুমে দ্বিপাক্ষিক আমদানি-রফতানি প্রবাহ সচল রাখার ধারাবাহিকতা"
    ],
    keyPointsEn: [
      "Expedited customs scanning for essential commodities and agricultural produce at Petrapole",
      "Joint coordination between Land Port Authority and BSF to ensure driver safety",
      "Sustained commercial momentum to support seasonal consumer market demand"
    ],
    category: "trade",
    categoryLabelBn: "বাণিজ্য ও বন্দর",
    categoryLabelEn: "Trade & Ports",
    sentiment: "positive",
    sentimentReasonBn: "সীমান্ত বাণিজ্য ও পণ্য পরিবহনের স্বাভাবিকতা নিয়ে ইতিবাচক খবর।",
    sentimentReasonEn: "Positive Urdu reporting detailing robust trade movement across land ports.",
    source: {
      name: "Roznama Rashtriya Sahara",
      bureau: "Kolkata",
      language: "Urdu",
      originalUrl: "https://www.roznamasahara.com/business/indo-bangladesh-border-trade-petrapole-freight-movement-20260926",
      scannedAt: "2026-09-26T22:30:00Z"
    },
    publishedAt: "2026-09-26T20:30:00Z",
    readTimeBn: "৩ মিনিট পাঠ",
    readTimeEn: "3 min read",
    imageUrl: "https://images.unsplash.com/photo-1524813686514-a57563d77d66?auto=format&fit=crop&w=1200&q=80",
    tags: ["Rashtriya Sahara", "Urdu Media", "Petrapole", "Border Trade", "Kolkata"]
  },
  {
    id: "news-20260926-016",
    slug: "the-munsif-daily-ganga-water-sharing-treaty-joint-river-commission-technical-review",
    title: "گنگا پانی کے معاہدے کی تجدید پر مشترکہ دریا کمیشن کی تکنیکی مشاورت: منصف ڈیلی",
    englishTitle: "The Munsif Daily: Joint River Commission Prepares Bilateral Framework for 1996 Ganga Water Treaty Review",
    banglaTitle: "১৯৯৬ সালের গঙ্গা জলবণ্টন চুক্তি পর্যালোচনা: যৌথ নদী কমিশনের কারিগরি কমিটির উদ্যোগ নিয়ে ‘মনসিফ ডেইলি’",
    summaryBn: "‘দ্য মনসিফ ডেইলি’-র আন্তর্জাতিক কলামে গঙ্গা জলবণ্টন চুক্তির ৩০ বছর পূর্তি উপলক্ষে ভারত ও বাংলাদেশের যৌথ নদী কমিশনের (JRC) কারিগরি পর্যালোচনার প্রস্তুতি তুলে ধরা হয়েছে। শুষ্ক মৌসুমে জলপ্রবাহের সঠিক বণ্টন ও নদীর পরিবেশ সংরক্ষণে উভয় পক্ষের ইতিবাচক পদক্ষেপের প্রশংসা করা হয়।",
    summaryEn: "The Munsif Daily covers the upcoming 30-year milestone of the 1996 Ganga Water Sharing Treaty, reporting on preliminary technical consultations by the Joint River Commission to evaluate dry-season flow statistics and riverine ecological sustainability.",
    keyPointsBn: [
      "১৯৯৬ সালের ঐতিহাসিক গঙ্গা চুক্তির মেয়াদপূর্তি উপলক্ষে দ্বিপাক্ষিক প্রস্তুতি",
      "ফারাক্কা পয়েন্টে জলপ্রবাহ ও বাস্তুতান্ত্রিক ভারসাম্য সুরক্ষায় যৌথ কারিগরি আলোচনা",
      "দীর্ঘমেয়াদি জল কূটনীতিতে গঠনমূলক সহযোগিতার প্রত্যাশা"
    ],
    keyPointsEn: [
      "Preparatory technical assessments as the 1996 30-year Ganga Treaty nears review milestone",
      "Evaluating hydrological data at Farakka Barrage to safeguard downstream ecology",
      "Constructive outlook on long-term riverine diplomacy and shared water management"
    ],
    category: "diplomacy",
    categoryLabelBn: "কূটনীতি ও জলবণ্টন",
    categoryLabelEn: "Diplomacy & Water Sharing",
    sentiment: "positive",
    sentimentReasonBn: "যৌথ নদী কমিশনের ইতিবাচক পদক্ষেপ ও জলবণ্টন চুক্তি পর্যালোচনা বিষয়ক প্রতিবেদন।",
    sentimentReasonEn: "Positive Urdu reporting on environmental cooperation and bilateral river treaty frameworks.",
    source: {
      name: "The Munsif Daily",
      bureau: "Delhi",
      language: "Urdu",
      originalUrl: "https://munsifdaily.com/world/ganga-water-sharing-treaty-joint-river-commission-technical-review-20260926",
      scannedAt: "2026-09-26T22:15:00Z"
    },
    publishedAt: "2026-09-26T19:50:00Z",
    readTimeBn: "৩ মিনিট পাঠ",
    readTimeEn: "3 min read",
    imageUrl: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
    tags: ["The Munsif Daily", "Urdu Media", "Ganga Treaty", "JRC", "Water Diplomacy"]
  },
  {
    id: "news-20260926-017",
    slug: "daily-taasir-bsf-enhances-border-vigilance-assam-tripura-international-boundary",
    title: "آسام اور تریپورہ سرحد پر بی ایس ایف کی خصوصی نگرانی اور بارڈر سیکورٹی کی صورتحال: روزنامہ تاثیر",
    englishTitle: "Daily Taasir: BSF Enhances Frontier Vigilance & Riverine Patrols Along Assam-Tripura Borders",
    banglaTitle: "আসাম ও ত্রিপুরা আন্তর্জাতিক সীমান্তে বিএসএফের আধুনিক নজরদারি ও নিরাপত্তা তৎপরতা: দৈনিক তাসির",
    summaryBn: "‘দৈনিক তাসির’-এর প্রতিবেদনে উত্তর-পূর্ব ভারতের আসাম ও ত্রিপুরা সীমান্তে সীমান্ত নিরাপত্তা বাহিনীর (বিএসএফ) আধুনিক ড্রোন প্রযুক্তি, থার্মাল ক্যামেরা ও স্পিডবোট টহলের মাধ্যমে নিরাপত্তা ব্যবস্থা সুদৃঢ় করার চিত্র তুলে ধরা হয়েছে।",
    summaryEn: "Daily Taasir details the enhanced multi-layer security grid deployed by the Border Security Force (BSF) across vulnerable frontier zones in Assam and Tripura, utilizing night-vision cameras, drone sweeps, and riverine interceptors to maintain border sanctity.",
    keyPointsBn: [
      "আসাম ও ত্রিপুরা জলসীমান্তে বিএসএফের ২৪ ঘণ্টার সেন্সর নজরদারি",
      "চোরাচালান ও অনুপ্রবেশ রোধে স্মার্ট বর্ডার ম্যানেজমেন্ট প্রযুক্তির ব্যবহার",
      "স্থানীয় বাসিন্দাদের সহায়তায় সীমান্ত নিরাপত্তা বজায় রাখার উদ্যোগ"
    ],
    keyPointsEn: [
      "24/7 sensor-based surveillance across riverine and unfenced stretches in Assam and Tripura",
      "Deployment of smart frontier security technologies to deter illicit cross-border movement",
      "Active coordination with border village committees to support peace and stability"
    ],
    category: "border",
    categoryLabelBn: "সীমান্ত নিরাপত্তা",
    categoryLabelEn: "Border & Security",
    sentiment: "neutral",
    sentimentReasonBn: "উত্তর-পূর্ব ভারতের সীমান্ত নিরাপত্তা ও সীমান্ত ব্যবস্থাপনার তথ্যভিত্তিক পর্যালোচনা।",
    sentimentReasonEn: "Factual Urdu reporting detailing border surveillance and defense technologies in Northeast India.",
    source: {
      name: "Daily Taasir",
      bureau: "Tripura",
      language: "Urdu",
      originalUrl: "https://taasir.com/national/bsf-enhances-border-vigilance-assam-tripura-international-boundary-20260926",
      scannedAt: "2026-09-26T22:00:00Z"
    },
    publishedAt: "2026-09-26T18:45:00Z",
    readTimeBn: "৩ মিনিট পাঠ",
    readTimeEn: "3 min read",
    imageUrl: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
    tags: ["Daily Taasir", "Urdu Media", "BSF", "Assam", "Tripura", "Border Security"]
  }
];

// Insert into SCANNED_NEWS_ITEMS
const itemsPrefix = "export const SCANNED_NEWS_ITEMS: NewsItem[] = [\n";
const prefixIdx = content.indexOf(itemsPrefix);

if (prefixIdx === -1) {
  console.error("Could not find SCANNED_NEWS_ITEMS start in news-data.ts");
  process.exit(1);
}

const insertPos = prefixIdx + itemsPrefix.length;
const newItemsJson = newUrduItems.map(item => `  ${JSON.stringify(item, null, 4).replace(/\n/g, '\n  ')}`).join(',\n') + ',\n';

content = content.slice(0, insertPos) + newItemsJson + content.slice(insertPos);

// Update SCANNER_STATS with urdu language
const statsRegex = /export const SCANNER_STATS = \{[\s\S]*?\};/;
const statsMatch = content.match(statsRegex);
if (statsMatch) {
  const updatedStats = {
    totalScanned24h: 4280,
    bangladeshMatches: 1115,
    sentimentDistribution: {
      positive: 38,
      neutral: 46,
      negative: 20
    },
    bureauDistribution: {
      delhi: 47,
      kolkata: 35,
      mumbai: 8,
      tripura: 7,
      assam: 5,
      siliguri: 3
    },
    languageDistribution: {
      english: 40,
      bengali: 34,
      hindi: 14,
      urdu: 5,
      tamil: 2,
      telugu: 2,
      marathi: 2,
      malayalam: 2
    }
  };
  content = content.replace(statsRegex, `export const SCANNER_STATS = ${JSON.stringify(updatedStats, null, 2)};`);
}

fs.writeFileSync(newsFilePath, content, 'utf8');
console.log(`✅ Successfully appended ${newUrduItems.length} Urdu news items to news-data.ts`);
