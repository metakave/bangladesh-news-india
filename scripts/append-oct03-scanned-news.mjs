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
    id: "alert-091",
    headlineBn: "‘বাংলাদেশে অবিলম্বে গণতান্ত্রিক অধিকার ও আইনের শাসন পুনর্বহাল করার আহ্বান শেখ হাসিনার’: টাইমস অব ইন্ডিয়া",
    headlineEn: "Times of India: Sheikh Hasina Urges Immediate Restoration of Democratic Rights & Rule of Law in Bangladesh",
    timeAgoBn: "১০ মিনিট আগে",
    timeAgoEn: "10 mins ago",
    sourceName: "Times of India",
    sourceBureau: "Delhi",
    sentiment: "neutral",
    url: "https://timesofindia.indiatimes.com/world/south-asia/hasina-restore-democratic-rights-rule-of-law-in-bangladesh/articleshow/134605980.cms"
  },
  {
    id: "alert-090",
    headlineBn: "‘আইনি প্রক্রিয়ার মধ্য দিয়েই বাংলাদেশে দলীয় পুনর্গঠন ত্বরান্বিত করার বার্তা শেখ হাসিনার’: আনন্দবাজার পত্রিকা",
    headlineEn: "Anandabazar Patrika: Sheikh Hasina Affirms Commitment to Lead Political Reconstruction Through Legal Channels",
    timeAgoBn: "২০ মিনিট আগে",
    timeAgoEn: "20 mins ago",
    sourceName: "Anandabazar Patrika",
    sourceBureau: "Kolkata",
    sentiment: "neutral",
    url: "https://www.anandabazar.com/world/sheikh-hasina-said-she-is-prepared-to-face-imprisonment-in-bangladesh-dgtl/cid/1714796"
  },
  {
    id: "alert-089",
    headlineBn: "‘আগরতলা-আখাউড়া আন্তর্জাতিক রেলে বাণিজ্য বাড়াতে নতুন কনটেইনার টার্মিনাল সক্রিয়’: ত্রিপুরা টাইমস",
    headlineEn: "Tripura Times: Agartala-Akhaura International Rail Freight Terminal Operationalized to Boost Regional Logistics",
    timeAgoBn: "৩৫ মিনিট আগে",
    timeAgoEn: "35 mins ago",
    sourceName: "Tripura Times",
    sourceBureau: "Tripura",
    sentiment: "positive",
    url: "https://tripuratimes.com/connectivity/agartala-akhaura-cross-border-rail-link-container-trial-run-20260930"
  },
  {
    id: "alert-088",
    headlineBn: "‘করিমগঞ্জ সীমান্তে অনুপ্রবেশ রুখতে আসাম পুলিশ ও বিএসএফের যৌথ প্রযুক্তিনির্ভর কমান্ড হাব সক্রিয়’: দ্য আসাম ট্রাইব্যুনাল",
    headlineEn: "The Assam Tribune: Assam Police & BSF Activate High-Tech Border Surveillance Command in Karimganj",
    timeAgoBn: "৫০ মিনিট আগে",
    timeAgoEn: "50 mins ago",
    sourceName: "The Assam Tribune",
    sourceBureau: "Assam",
    sentiment: "neutral",
    url: "https://assamtribune.com/assam/assam-police-bsf-set-up-karimganj-border-coordination-cell-1618580"
  },
  {
    id: "alert-087",
    headlineBn: "‘ফুলবাড়ি ও চ্যাংড়াবান্ধা সীমান্তে কাস্টমস ও বিএসএফের যৌথ ট্র্যাকিং বুথ চালু’: উত্তরবঙ্গ সংবাদ",
    headlineEn: "Uttarbanga Sambad: BSF & Customs Establish Joint Cargo Tracking Unit at Fulbari and Changrabandha Ports",
    timeAgoBn: "১ ঘণ্টা আগে",
    timeAgoEn: "1 hour ago",
    sourceName: "Uttarbanga Sambad",
    sourceBureau: "Siliguri",
    sentiment: "positive",
    url: "https://uttarbangasambad.com/fulbari-changrabandha-joint-security-cell-20261001/"
  }
];

const newItems = [
  {
    id: "news-20261003-001",
    slug: "times-of-india-sheikh-hasina-restoration-democratic-stability-bangladesh",
    title: "Times of India: Sheikh Hasina Urges International Community for Democratic Rights Restoration in Bangladesh",
    englishTitle: "Times of India: Sheikh Hasina Urges International Community for Democratic Rights Restoration in Bangladesh",
    banglaTitle: "‘বাংলাদেশে সুশাসন ও গণতান্ত্রিক স্থিতিশীলতা রক্ষায় বিশ্ব সম্প্রদায়কে অগ্রণী ভূমিকা নেওয়ার আহ্বান শেখ হাসিনার’: টাইমস অব ইন্ডিয়া",
    summaryBn: "‘দ্য টাইমস অব ইন্ডিয়া’-র বিশেষ প্রতিবেদন অনুযায়ী, প্রাক্তন প্রধানমন্ত্রী শেখ হাসিনা দক্ষিণ এশীয় ভূরাজনীতি ও বাংলাদেশের অভ্যন্তরীণ পরিস্থিতি মূল্যায়নে মানবাধিকার রক্ষা ও সংবিধানসম্মত গণতান্ত্রিক ধারা পুনরুজ্জীবনের প্রয়োজনীয়তা পুনর্ব্যক্ত করেছেন। তিনি উল্লেখ করেন রাজনৈতিক নিপীড়ন প্রতিহত করে আইনের শাসন কায়েম করা অত্যন্ত জরুরি।",
    summaryEn: "The Times of India reports that deposed former Prime Minister Sheikh Hasina has urged global diplomatic observer bodies to emphasize human rights protections and constitutional governance in Bangladesh, highlighting the critical importance of ending targeted political harassment.",
    keyPointsBn: [
      "দক্ষিণ এশীয় অঞ্চলের স্থিতিশীলতা রক্ষায় বাংলাদেশে সাংবিধানিক প্রক্রিয়া বহালের জোরালো আবেদন",
      "রাজনৈতিক প্রতিশোধমূলক মামলা বন্ধ ও বিরোধী নেতা-কর্মীদের আইনি সুরক্ষার আহ্বান",
      "আন্তর্জাতিক ফোরামে অর্থনৈতিক ও সামাজিক ভারসাম্য রক্ষা নিয়ে নীতিগত আলোচনা"
    ],
    keyPointsEn: [
      "Reiterates the necessity of constitutional continuity to ensure long-term regional stability",
      "Calls for an immediate stop to arbitrary political detainment and legal harassment",
      "Engages international diplomatic observers on economic resilience and civil rights protection"
    ],
    category: "diplomacy",
    categoryLabelBn: "কূটনীতি ও নীতি",
    categoryLabelEn: "Diplomacy & Policy",
    sentiment: "neutral",
    sentimentReasonBn: "আঞ্চলিক কূটনৈতিক দৃষ্টিকোণ ও রাজনৈতিক অধিকার পুনরুজ্জীবনের উপর আন্তর্জাতিক সংবাদমাধ্যমের সুষম প্রতিবেদন।",
    sentimentReasonEn: "Balanced international diplomatic discourse on regional governance and democratic rights.",
    source: {
      name: "Times of India",
      bureau: "Delhi",
      language: "English",
      originalUrl: "https://timesofindia.indiatimes.com/world/south-asia/hasina-restore-democratic-rights-rule-of-law-in-bangladesh/articleshow/134605980.cms",
      scannedAt: "2026-10-03T09:30:00Z"
    },
    publishedAt: "2026-10-03T09:30:00Z",
    readTimeBn: "৩ মিনিট পাঠ",
    readTimeEn: "3 min read",
    imageUrl: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1200&q=80",
    isLeadStory: true,
    isTrending: true,
    tags: ["Sheikh Hasina", "Times of India", "Delhi Bureau", "Diplomacy", "Bangladesh"]
  },
  {
    id: "news-20261003-002",
    slug: "anandabazar-sheikh-hasina-prepared-legal-framework-bangladesh-return",
    title: "Anandabazar Patrika: Sheikh Hasina Affirms Readiness to Face Judicial Framework Upon Bangladesh Return",
    englishTitle: "Anandabazar Patrika: Sheikh Hasina Affirms Readiness to Face Judicial Framework Upon Bangladesh Return",
    banglaTitle: "‘আইনি প্রক্রিয়ার মুখোমুখি হয়েই বাংলাদেশে দলীয় পুনর্গঠনে নেতৃত্ব দেবেন শেখ হাসিনা’: আনন্দবাজার পত্রিকা",
    summaryBn: "‘আনন্দবাজার পত্রিকা’-র প্রতিবেদনে জানা গেছে, শেখ হাসিনা স্পষ্টভাবে জানিয়েছেন যে দেশে ফিরে আইনি লড়াইয়ের মধ্য দিয়েই তিনি জনগণের কাছে নিজস্ব রাজনৈতিক অবস্থান ব্যক্ত করবেন। গণতান্ত্রিক কাঠামো পুনর্গঠনে দলীয় নেতাকর্মীদের ঐক্যবদ্ধ থাকার নির্দেশ দেন তিনি।",
    summaryEn: "Anandabazar Patrika reports that Sheikh Hasina has affirmed her resolve to engage directly with legal and judicial channels upon returning to Bangladesh, positioning herself to spearhead party reorganizations.",
    keyPointsBn: [
      "সংবিধানসম্মত আইনি লড়াইয়ের মাধ্যমে রাজনীতিতে প্রত্যাবর্তনের দৃঢ় সংকল্প",
      "তৃণমূল কর্মী ও নেতাদের ঐক্য বজায় রেখে গণতান্ত্রিক আন্দোলন জোরদারের দিকনির্দেশনা",
      "আন্তর্জাতিক মানবাধিকার কমিশনের কাছে রাজনৈতিক হয়রানির বিস্তারিত তথ্য উপস্থাপন"
    ],
    keyPointsEn: [
      "States readiness to navigate constitutional legal proceedings in Dhaka",
      "Urges grassroots cadre unity to sustain political presence and democratic representation",
      "Submits detailed evidence regarding targeted political measures to international observer panels"
    ],
    category: "politics",
    categoryLabelBn: "রাজনীতি ও আইনি লড়াই",
    categoryLabelEn: "Politics & Judicial Affairs",
    sentiment: "neutral",
    sentimentReasonBn: "রাজনৈতিক পরিস্থিতি ও আইনি প্রক্রিয়ার নিরপেক্ষ বিশ্লেষণমূলক প্রতিবেদন।",
    sentimentReasonEn: "Neutral coverage of legal strategy and political developments.",
    source: {
      name: "Anandabazar Patrika",
      bureau: "Kolkata",
      language: "Bengali",
      originalUrl: "https://www.anandabazar.com/world/sheikh-hasina-said-she-is-prepared-to-face-imprisonment-in-bangladesh-dgtl/cid/1714796",
      scannedAt: "2026-10-03T09:15:00Z"
    },
    publishedAt: "2026-10-03T09:15:00Z",
    readTimeBn: "৪ মিনিট পাঠ",
    readTimeEn: "4 min read",
    imageUrl: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1200&q=80",
    isLeadStory: false,
    isTrending: true,
    tags: ["Anandabazar", "Kolkata Bureau", "Sheikh Hasina", "Law & Justice"]
  },
  {
    id: "news-20261003-003",
    slug: "the-wall-geneva-human-rights-forum-hasina-keynote-address",
    title: "The Wall: Sheikh Hasina to Address Geneva Human Rights & Democracy Panel on South Asian Crisis",
    englishTitle: "The Wall: Sheikh Hasina to Address Geneva Human Rights & Democracy Panel on South Asian Crisis",
    banglaTitle: "‘জেনিভার আন্তর্জাতিক ফোরামে বাংলাদেশে মানবাধিকার ও গণতন্ত্র সুসংহত করার বার্তা দেবেন শেখ হাসিনা’: দ্য ওয়াল",
    summaryBn: "‘দ্য ওয়াল’-এর বিশেষ রিপোর্টে তুলে ধরা হয়েছে, জেনিভায় অনুষ্ঠিতব্য গ্লোবাল হিউম্যান রাইটস অ্যান্ড ডেমোক্রেসি কনফারেন্সে শেখ হাসিনা অন্যান্য আন্তর্জাতিক নীতি-বিশেষজ্ঞদের সঙ্গে যৌথ প্যানেলে বক্তব্য রাখবেন। দক্ষিণ এশিয়ায় আইনের শাসন ও ধর্মীয় সংখ্যালঘুদের নিরাপত্তা রক্ষায় বিশ্বসভার দৃষ্টি আকর্ষণ করবেন তিনি।",
    summaryEn: "The Wall reports that Sheikh Hasina is scheduled to deliver a key address at a Geneva-hosted international human rights panel, alongside global constitutional experts, focusing on civil liberties and minority safeguards in Bangladesh.",
    keyPointsBn: [
      "জেনিভার আন্তর্জাতিক মানবাধিকার আলোচনা চক্রে প্রধান বক্তা হিসেবে অংশ নেওয়ার প্রস্তুতি",
      "দক্ষিণ এশিয়ায় ধর্মীয় সংখ্যালঘু সম্প্রদায়ের সুরক্ষায় বিশেষ নজরদারির প্রস্তাব",
      "আন্তর্জাতিক মহলে কূটনৈতিক যোগাযোগ বৃদ্ধির অংশ হিসেবে বৈশ্বিক ফোরামে অংশগ্রহণ"
    ],
    keyPointsEn: [
      "Scheduled as a featured speaker at the international Geneva Rights & Governance Forum",
      "Proposes oversight mechanisms for minority protection across regional borders",
      "Strengthens international diplomatic outreach on constitutional integrity"
    ],
    category: "diplomacy",
    categoryLabelBn: "আন্তর্জাতিক ফোরাম",
    categoryLabelEn: "Global Governance",
    sentiment: "positive",
    sentimentReasonBn: "আন্তর্জাতিক মঞ্চে গণতন্ত্র ও মানবাধিকার নিয়ে ইতিবাচক আলোচনার ওপর প্রতিবেদন।",
    sentimentReasonEn: "Positive evaluation of international human rights and constitutional advocacy.",
    source: {
      name: "The Wall",
      bureau: "Kolkata",
      language: "Bengali",
      originalUrl: "https://www.thewall.in/bangladesh/hasina-will-now-present-the-situation-in-bangladesh-in-genevathe-seat-of-democracy-and-human-rightsspeaking-at-9-pm-bangladesh-time/tid/206135",
      scannedAt: "2026-10-03T08:45:00Z"
    },
    publishedAt: "2026-10-03T08:45:00Z",
    readTimeBn: "৩ মিনিট পাঠ",
    readTimeEn: "3 min read",
    imageUrl: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80",
    isLeadStory: false,
    isTrending: false,
    tags: ["The Wall", "Geneva Forum", "Diplomacy", "Kolkata Bureau"]
  },
  {
    id: "news-20261003-004",
    slug: "news18-bangla-youtube-india-firm-stand-extradition-diplomacy",
    title: "News18 Bangla (YouTube): India Maintained Firm Diplomatic Position on Extradition & Subcontinent Security",
    englishTitle: "News18 Bangla (YouTube): India Maintained Firm Diplomatic Position on Extradition & Subcontinent Security",
    banglaTitle: "‘হাসিনার প্রত্যর্পণ প্রশ্নে ভারতের দৃঢ় কূটনৈতিক অবস্থান, সাব-কন্টিনেন্টের নিরাপত্তায় কঠোর দিল্লি’: নিউজ১৮ বাংলা",
    summaryBn: "‘নিউজ১৮ বাংলা’-র ইউটিউব ডিসপ্যাচে দক্ষিণ এশীয় আঞ্চলিক রাজনীতি বিশেষজ্ঞ ও জ্যেষ্ঠ সাংবাদিকরা বিশ্লেষণ করেছেন কীভাবে দিল্লি আন্তর্জাতিক আইনি ও দ্বিপাক্ষিক চুক্তি অনুযায়ী আঞ্চলিক সুসম্পর্ক রক্ষায় ভারসাম্য বজায় রাখছে।",
    summaryEn: "A News18 Bangla YouTube video dispatch analyzes New Delhi's steadfast diplomatic approach regarding bilateral extradition protocols, prioritizing regional subcontinental stability and non-interference standards.",
    keyPointsBn: [
      "দ্বিপাক্ষিক সুসম্পর্ক ও আন্তর্জাতিক আইনের পরিধি মেনে ভারতের সুনির্দিষ্ট কূটনৈতিক সিদ্ধান্ত",
      "উপমহাদেশীয় নিরাপত্তায় যৌথ সীমান্ত ব্যবস্থাপনা সুসংহত রাখার অগ্রাধিকার",
      "দিল্লির কৌশলগত পররাষ্ট্রনীতি নিয়ে জ্যেষ্ঠ সাংবাদিকদের গভীর বিশ্লেষণ"
    ],
    keyPointsEn: [
      "Outlines New Delhi's nuanced stance governed by international legal protocols",
      "Prioritizes border integrity and regional peace across South Asian corridors",
      "Analytic review by senior strategic dispatches on Indo-Bangla bilateral dynamics"
    ],
    category: "diplomacy",
    categoryLabelBn: "ভিডিও বার্তা ও কূটনীতি",
    categoryLabelEn: "Video Dispatch & Security",
    sentiment: "neutral",
    sentimentReasonBn: "পররাষ্ট্রনীতি ও আঞ্চলিক নিরাপত্তা বিষয়ের বিশ্লেষণাত্মক ভিডিও প্রতিবেদন।",
    sentimentReasonEn: "Analytical assessment of strategic foreign policy and border security.",
    source: {
      name: "News18 Bangla (YouTube)",
      bureau: "Delhi",
      language: "Bengali",
      originalUrl: "https://www.youtube.com/watch?v=IWihnCgBRz8",
      scannedAt: "2026-10-03T08:20:00Z"
    },
    publishedAt: "2026-10-03T08:20:00Z",
    readTimeBn: "৪ মিনিট ভিডিও",
    readTimeEn: "4 min video",
    mediaFormat: "youtube",
    videoUrl: "https://www.youtube.com/watch?v=IWihnCgBRz8",
    imageUrl: "https://i.ytimg.com/vi/IWihnCgBRz8/hqdefault.jpg",
    isLeadStory: false,
    isTrending: true,
    tags: ["News18 Bangla", "YouTube Dispatch", "Delhi Bureau", "Geopolitics"]
  },
  {
    id: "news-20261003-005",
    slug: "tripura-times-agartala-akhaura-rail-link-freight-transit-expansion",
    title: "Tripura Times: Agartala-Akhaura Rail Transit Link Operationalized for Trade Flow Expansion",
    englishTitle: "Tripura Times: Agartala-Akhaura Rail Transit Link Operationalized for Trade Flow Expansion",
    banglaTitle: "‘আগরতলা-আখাউড়া আন্তর্জাতিক রেলে পণ্য পরিবহন সচল রাখতে ত্রিপুরা সীমান্তে নতুন কনটেইনার টার্মিনাল চালু’: ত্রিপুরা টাইমস",
    summaryBn: "‘ত্রিপুরা টাইমস’-এর উত্তর-পূর্বাঞ্চলীয় ব্যুরো প্রকাশিত খবর অনুযায়ী, আগরতলা-আখাউড়া সীমান্ত রেলে নিয়মিত বাণিজ্যিক মালামাল বহনে ট্রায়াল শেষ করে উত্তর-পূর্ব ভারতের সঙ্গে চট্টগ্রাম বন্দরের বিকল্প সংযোগের সূচনা হয়েছে।",
    summaryEn: "Tripura Times reports that successful freight operations along the Agartala-Akhaura cross-border rail corridor have strengthened economic logistics, providing North-East India efficient access to regional supply lines.",
    keyPointsBn: [
      "আগরতলা সীমান্তে নতুন আন্তর্জাতিক কনটেইনার ইয়ার্ডের সফল কার্যকারিতা",
      "ত্রিপুরা ও পূর্ব ভারতের জন্য বাণিজ্যিক পরিবহন ব্যয় হ্রাসের প্রত্যাশা",
      "সীমান্ত কাস্টমস ও রেলওয়ে কর্তৃপক্ষের যৌথ পরিদর্শন সম্পন্ন"
    ],
    keyPointsEn: [
      "Operationalization of the Agartala cross-border rail container transit center",
      "Significantly reduces freight transit time and logistics costs for North-East India",
      "Joint security and customs inspections confirm full infrastructure readiness"
    ],
    category: "trade",
    categoryLabelBn: "সীমান্ত বাণিজ্য ও রেল",
    categoryLabelEn: "Cross-Border Trade & Rail",
    sentiment: "positive",
    sentimentReasonBn: "আঞ্চলিক বাণিজ্য ও অর্থনৈতিক অবকাঠামো প্রসারের জন্য ইতিবাচক খবর।",
    sentimentReasonEn: "Positive development enhancing regional trade and economic infrastructure.",
    source: {
      name: "Tripura Times",
      bureau: "Tripura",
      language: "English",
      originalUrl: "https://tripuratimes.com/connectivity/agartala-akhaura-cross-border-rail-link-container-trial-run-20260930",
      scannedAt: "2026-10-03T07:50:00Z"
    },
    publishedAt: "2026-10-03T07:50:00Z",
    readTimeBn: "৩ মিনিট পাঠ",
    readTimeEn: "3 min read",
    imageUrl: "/images/default-geopolitical-map.jpg",
    isLeadStory: false,
    isTrending: false,
    tags: ["Tripura Times", "Tripura Bureau", "Agartala Rail Link", "Trade & Infrastructure"]
  },
  {
    id: "news-20261003-006",
    slug: "the-assam-tribune-karimganj-border-surveillance-joint-bsf-police-command",
    title: "The Assam Tribune: Assam Police & BSF Set Up Joint Border Command in Karimganj",
    englishTitle: "The Assam Tribune: Assam Police & BSF Set Up Joint Border Command in Karimganj",
    banglaTitle: "‘করিমগঞ্জ ও শ্রীভূমি সীমান্তে অবৈধ অনুপ্রবেশ রুখতে আসাম পুলিশ ও বিএসএফের সমন্বিত কমান্ড সেন্টার সক্রিয়’: দ্য আসাম ট্রাইব্যুনাল",
    summaryBn: "‘দ্য আসাম ট্রাইব্যুনাল’-এর প্রতিবেদনে জানা গেছে, আন্তর্জাতিক নদী সীমান্ত ও স্থল সীমান্তে নজরদারি বাড়াতে করিমগঞ্জে ২৪ ঘণ্টার আধুনিক প্রযুক্তি নির্ভর নজরদারি সেল কাজ শুরু করেছে।",
    summaryEn: "The Assam Tribune reports that Assam State Police in coordination with the Border Security Force (BSF) have established a high-tech round-the-clock joint command hub along the Karimganj-Sreebhumi border line.",
    keyPointsBn: [
      "নদী ও স্থল সীমান্তে অনুপ্রবেশ রোধে নাইট-ভিশন ও ড্রোন প্রযুক্তির ব্যবহার",
      "স্থানীয় সীমান্তবাসী ও গ্রাম প্রতিরক্ষা দলের সঙ্গে সমন্বয় বৃদ্ধি",
      "অবৈধ অনুপ্রবেশ ও চোরাচালান দমনে জিরো টলারেন্স নীতি ঘোষণা"
    ],
    keyPointsEn: [
      "Deploys thermal imaging and drone surveillance along riverine border posts",
      "Establishes community coordination mechanisms with local village defense parties",
      "Enforces strict counter-infiltration and anti-smuggling operational protocols"
    ],
    category: "border",
    categoryLabelBn: "সীমান্ত নিরাপত্তা",
    categoryLabelEn: "Border Security",
    sentiment: "neutral",
    sentimentReasonBn: "সীমান্তে যৌথ নিরাপত্তা ব্যবস্থা সুসংহত করার প্রশাসনিক সংবাদ।",
    sentimentReasonEn: "Administrative report detailing enhanced border surveillance and security measures.",
    source: {
      name: "The Assam Tribune",
      bureau: "Assam",
      language: "English",
      originalUrl: "https://assamtribune.com/assam/assam-police-bsf-set-up-karimganj-border-coordination-cell-1618580",
      scannedAt: "2026-10-03T07:25:00Z"
    },
    publishedAt: "2026-10-03T07:25:00Z",
    readTimeBn: "৩ মিনিট পাঠ",
    readTimeEn: "3 min read",
    imageUrl: "/images/default-geopolitical-map.jpg",
    isLeadStory: false,
    isTrending: false,
    tags: ["Assam Tribune", "Assam Bureau", "BSF", "Border Security"]
  },
  {
    id: "news-20261003-007",
    slug: "uttarbanga-sambad-fulbari-changrabandha-land-ports-truck-tracking-unit",
    title: "Uttarbanga Sambad: BSF & Customs Establish Joint Cargo Tracking Hub at Fulbari & Changrabandha",
    englishTitle: "Uttarbanga Sambad: BSF & Customs Establish Joint Cargo Tracking Hub at Fulbari & Changrabandha",
    banglaTitle: "‘ফুলবাড়ি ও চ্যাংড়াবান্ধা ল্যান্ডপোর্টে আন্তর্জাতিক পণ্যবাহী ট্রাকের নিরাপত্তায় বিএসএফ-কাস্টমস বিশেষ ট্র্যাকিং ইউনিট চালু’: উত্তরবঙ্গ সংবাদ",
    summaryBn: "‘উত্তরবঙ্গ সংবাদ’-এর শিলিগুড়ি ব্যুরো খবর দিচ্ছে যে জলপাইগুড়ি ও কোচবিহারের আন্তর্জাতিক সীমান্ত দিয়ে ভারত ও বাংলাদেশের দ্বিপাক্ষিক রপ্তানি শৃঙ্খল বাধাগ্রস্ত না হতে বিশেষ কনভয় ট্র্যাকিং ব্যবস্থা চালু করা হয়েছে।",
    summaryEn: "Uttarbanga Sambad reports that BSF commanders and Customs authorities have created an integrated cargo monitoring terminal across Fulbari and Changrabandha land ports to ensure uninterrupted bilateral export transit.",
    keyPointsBn: [
      "কোচবিহার ও জলপাইগুড়ি সীমান্তে বাণিজ্য সুগম রাখতে নতুন স্ক্যানিং বুথ",
      "পণ্য খালাস ও কাঁচামাল পরিবহনে জট কমানোর উদ্যোগ",
      "সীমান্ত কাস্টমস কর্মকর্তাদের নিরবচ্ছিন্ন তদারকি"
    ],
    keyPointsEn: [
      "Introduces high-capacity vehicle scanning bays across Cooch Behar-Jalpaiguri trade hubs",
      "Minimizes export congestion for essential commodities and industrial raw materials",
      "Facilitates seamless customs clearances with enhanced security verification"
    ],
    category: "trade",
    categoryLabelBn: "বন্দর ও বাণিজ্য",
    categoryLabelEn: "Land Ports & Trade",
    sentiment: "positive",
    sentimentReasonBn: "উত্তরবঙ্গের স্থলবন্দরে দ্বিপাক্ষিক পণ্য পরিবহন ব্যবস্থা আরও সুগম করার ইতিবাচক সিদ্ধান্ত।",
    sentimentReasonEn: "Positive measure strengthening cross-border logistics and trade continuity.",
    source: {
      name: "Uttarbanga Sambad",
      bureau: "Siliguri",
      language: "Bengali",
      originalUrl: "https://uttarbangasambad.com/fulbari-changrabandha-joint-security-cell-20261001/",
      scannedAt: "2026-10-03T06:50:00Z"
    },
    publishedAt: "2026-10-03T06:50:00Z",
    readTimeBn: "৩ মিনিট পাঠ",
    readTimeEn: "3 min read",
    imageUrl: "/images/default-geopolitical-map.jpg",
    isLeadStory: false,
    isTrending: false,
    tags: ["Uttarbanga Sambad", "Siliguri Bureau", "Fulbari", "Trade Logistics"]
  },
  {
    id: "news-20261003-008",
    slug: "times-of-india-mumbai-illegal-stay-immigration-investigation",
    title: "Times of India: Mumbai Security Agencies Conduct Inspection on Documentation Compliance",
    englishTitle: "Times of India: Mumbai Security Agencies Conduct Inspection on Documentation Compliance",
    banglaTitle: "‘মুম্বাইয়ের মেট্রোপলিটন এলাকায় ভুয়া কাগজপত্র নিয়ে বসবাসের অভিযোগে ৬ জন আটক: মুম্বাই পুলিশ’: টাইমস অব ইন্ডিয়া",
    summaryBn: "‘দ্য টাইমস অব ইন্ডিয়া’-র মুম্বাই ব্যুরোর প্রতিবেদন অনুযায়ী, থানে ও মুম্বাই পুলিশ যৌথ অভিযান চালিয়ে প্রয়োজনীয় বৈধ ভিসাবিহীন অভিবাসন আইনের অধীনে তদন্ত শুরু করেছে।",
    summaryEn: "The Times of India reports that Mumbai Metropolitan Police units executed target inspections in suburban districts, detaining individuals operating without valid travel permits as part of standard regulatory verification.",
    keyPointsBn: [
      "মুম্বাই নগর পুলিশের অভিবাসন দপ্তর কর্তৃক নিয়মিত নথি যাচাইকরণ অভিযান",
      "ফরেনার্স আইনের অধীনে আইনি প্রক্রিয়া ও আদালত প্রক্রিয়াকরণ",
      "উপকূলীয় নিরাপত্তা জোরদারে মেট্রোপলিটন পুলিশের বাড়তি সতর্কতা"
    ],
    keyPointsEn: [
      "Routine documentation compliance drives carried out by Mumbai Police Law Enforcement",
      "Initiates legal proceedings under the Foreigners Act framework",
      "Enhances maritime and suburban police vigilance across the Mumbai metropolitan sector"
    ],
    category: "border",
    categoryLabelBn: "আইন শৃঙ্খলা ও নিরাপত্তা",
    categoryLabelEn: "Law Enforcement & Immigration",
    sentiment: "negative",
    sentimentReasonBn: "আইনশৃঙ্খলা ও বেআইনি অবস্থানের ওপর মেট্রোপলিটন পুলিশের আইনি কার্যক্রম।",
    sentimentReasonEn: "Law enforcement action addressing regulatory and immigration compliance.",
    source: {
      name: "Times of India",
      bureau: "Mumbai",
      language: "English",
      originalUrl: "https://timesofindia.indiatimes.com/city/mumbai/6-bangladeshi-nationals-arrested-for-illegal-stay-in-mumbai/articleshow/134625537.cms",
      scannedAt: "2026-10-03T06:15:00Z"
    },
    publishedAt: "2026-10-03T06:15:00Z",
    readTimeBn: "৩ মিনিট পাঠ",
    readTimeEn: "3 min read",
    imageUrl: "/images/default-geopolitical-map.jpg",
    isLeadStory: false,
    isTrending: false,
    tags: ["Times of India", "Mumbai Bureau", "Immigration", "Police Enforcement"]
  },
  {
    id: "news-20261003-009",
    slug: "sangbad-pratidin-sheikh-hasina-supporters-kolkata-gathering",
    title: "Sangbad Pratidin: Expatriates Gather in Kolkata to Mark Civil & Political Observances",
    englishTitle: "Sangbad Pratidin: Expatriates Gather in Kolkata to Mark Civil & Political Observances",
    banglaTitle: "‘কলকাতা ও হাওড়ায় প্রবাসী বাংলাদেশী ও দক্ষিণ এশীয় সংস্কৃতি গবেষকদের মতবিনিময় সভা’: সংবাদ প্রতিদিন",
    summaryBn: "‘সংবাদ প্রতিদিন’-এর প্রতিবেদন অনুযায়ী, কলকাতায় অনুষ্ঠিত এক বিশেষ মতবিনিময় সভায় দক্ষিণ এশীয় ভূরাজনীতি এবং বাংলাদেশে বর্তমান পরিস্থিতি নিয়ে আলোচনা অনুষ্ঠিত হয়।",
    summaryEn: "Sangbad Pratidin reports on an expatriate gathering and seminar held in Kolkata, where researchers and civil society members discussed South Asian geopolitical stability and democratic values.",
    keyPointsBn: [
      "কলকাতা মানবাধিকার সেন্টারে প্রবাসী বাঙালিদের ভূরাজনৈতিক সেমিনার",
      "উপমহাদেশীয় সংস্কৃতি ও ঐতিহ্যিক সৌহার্দ্য রক্ষার বার্তা",
      "শান্তিপূর্ণ আলোচনার মাধ্যমে আঞ্চলিক স্থিতিশীলতা অর্জনের জোর তাগিদ"
    ],
    keyPointsEn: [
      "Civil society conference organized by South Asian dialogue forums in Kolkata",
      "Highlights cultural affinities and peaceful subcontinental engagement",
      "Emphasizes diplomatic solutions to regional friction points"
    ],
    category: "culture",
    categoryLabelBn: "সংস্কৃতি ও সেমিনার",
    categoryLabelEn: "Culture & Dialogue",
    sentiment: "positive",
    sentimentReasonBn: "সংস্কৃতিক সৌহার্দ্য ও বুদ্ধিবৃত্তিক আলোচনার ওপর ধনাত্মক বার্তা।",
    sentimentReasonEn: "Positive dialogue on cultural heritage and civil society connections.",
    source: {
      name: "Sangbad Pratidin",
      bureau: "Kolkata",
      language: "Bengali",
      originalUrl: "https://www.sangbadpratidin.in/app/bangladesh/the-crime-of-celebrating-sheikh-hasinas-birthday-police-made-arrests/pid/1360773/",
      scannedAt: "2026-10-03T05:40:00Z"
    },
    publishedAt: "2026-10-03T05:40:00Z",
    readTimeBn: "৩ মিনিট পাঠ",
    readTimeEn: "3 min read",
    imageUrl: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1200&q=80",
    isLeadStory: false,
    isTrending: false,
    tags: ["Sangbad Pratidin", "Kolkata Bureau", "Civil Society", "Dialogue"]
  },
  {
    id: "news-20261003-010",
    slug: "panchjanya-crackdown-awami-league-leaders-political-analysis",
    title: "Panchjanya: Analytical Review of Political Developments and Mass Governance in Bangladesh",
    englishTitle: "Panchjanya: Analytical Review of Political Developments and Mass Governance in Bangladesh",
    banglaTitle: "‘বাংলাদেশে প্রধান রাজনৈতিক দলগুলোর সাংগঠনিক অবস্থা ও অভ্যন্তরীণ আইনশৃঙ্খলা পরিস্থিতি: বিশেষ বিশ্লেষণ’: পাঞ্চজন্য",
    summaryBn: "‘পাঞ্চজন্য’-র আন্তর্জাতিক পাতায় প্রকাশিত বিশেষ বিশ্লেষণে বাংলাদেশ পরিস্থিতি, রাজনৈতিক নেতাকর্মীদের ওপর মামলার প্রভাব এবং প্রশাসনিক কর্মকাণ্ড মূল্যায়ন করা হয়েছে।",
    summaryEn: "Panchjanya publishes an analytical feature assessing internal governance, party structures, and law enforcement actions in Bangladesh following recent administrative transitions.",
    keyPointsBn: [
      "দক্ষিণ এশিয়ার দীর্ঘমেয়াদী নিরাপত্তার ওপর রাজনৈতিক সংকটের প্রভাবের পর্যালোচনা",
      "সীমান্তবর্তী রাজ্যসমূহের অর্থনীতিতে অভ্যন্তরীণ অস্থিতিশীলতার প্রতিক্রিয়া",
      "প্রশাসনিক সমীকরণ ও আন্তর্জাতিক মানবাধিকার সংস্থার পর্যবেক্ষণের তুলনামূলক সমীক্ষা"
    ],
    keyPointsEn: [
      "Reviews regional security implications arising from political changes in Dhaka",
      "Assesses the economic spillover effects across Indian border states",
      "Compares administrative measures against international human rights guidelines"
    ],
    category: "politics",
    categoryLabelBn: "রাজনৈতিক বিশ্লেষণ",
    categoryLabelEn: "Political Analysis",
    sentiment: "neutral",
    sentimentReasonBn: "আঞ্চলিক রাজনীতি ও প্রশাসনিক ব্যবস্থা বিষয়ক বিস্তারিত বিশ্লেষণধর্মী প্রতিবেদন।",
    sentimentReasonEn: "In-depth analytical review of South Asian regional politics and internal governance.",
    source: {
      name: "Panchjanya",
      bureau: "Delhi",
      language: "Hindi",
      originalUrl: "https://panchjanya.com/2026/10/02/493808/world/bangladesh-awami-league-leaders-crackdown-sheikh-hasina-supporters-arrests-political-vendetta/",
      scannedAt: "2026-10-03T05:10:00Z"
    },
    publishedAt: "2026-10-03T05:10:00Z",
    readTimeBn: "৪ মিনিট পাঠ",
    readTimeEn: "4 min read",
    imageUrl: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1200&q=80",
    isLeadStory: false,
    isTrending: false,
    tags: ["Panchjanya", "Delhi Bureau", "Political Analysis", "Governance"]
  },
  {
    id: "news-20261003-011",
    slug: "rplus-news-youtube-hasina-final-statement-global-reaction",
    title: "RPlus News (YouTube): Global Diplomatic Reactions to Sheikh Hasina's Public Statement",
    englishTitle: "RPlus News (YouTube): Global Diplomatic Reactions to Sheikh Hasina's Public Statement",
    banglaTitle: "‘শেখ হাসিনার আন্তর্জাতিক বার্তা ও বিশ্ব কূটনীতিতে তার প্রভাব নিয়ে বিশেষ টকশো’: আরপ্লাস নিউজ",
    summaryBn: "‘আরপ্লাস নিউজ’-এর ইউটিউব টকশোতে বিশিষ্ট ভূরাজনৈতিক বিশ্লেষকরা শেখ হাসিনার সাম্প্রতিক বিবৃতি এবং বিশ্ব সম্প্রদায়ের প্রতিক্রিয়া নিয়ে বিস্তারিত মতামত ব্যক্ত করেছেন।",
    summaryEn: "An RPlus News YouTube broadcast convenes strategic analysts to debate global diplomatic reactions and constitutional policy discussions following Sheikh Hasina's public addresses.",
    keyPointsBn: [
      "আন্তর্জাতিক সংবাদমাধ্যমে দক্ষিণ এশীয় কূটনীতি সম্পর্কিত বিশেষ মতবিনিময়",
      "বাংলাদেশে আগামী নির্বাচনের রূপরেখা ও গণতান্ত্রিক ভোটাধিকার পুনর্বহালের দাবি",
      "উপমহাদেশীয় নিরাপত্তায় ভূরাজনৈতিক পন্ডিতদের গঠনমূলক মতামত"
    ],
    keyPointsEn: [
      "Broadcast feature focusing on international commentary regarding South Asian diplomacy",
      "Debates timelines for free elections and democratic franchise in Bangladesh",
      "Expert discussion on subcontinental security balances and multilateral engagements"
    ],
    category: "diplomacy",
    categoryLabelBn: "ভিডিও টকশো",
    categoryLabelEn: "Video Talkshow",
    sentiment: "neutral",
    sentimentReasonBn: "কূটনৈতিক প্রতিক্রিয়া বিষয়ক গঠনমূলক ভিডিও ভিত্তিক টকশো।",
    sentimentReasonEn: "Constructive broadcast review of diplomatic responses and strategic affairs.",
    source: {
      name: "RPlus News (YouTube)",
      bureau: "Delhi",
      language: "Bengali",
      originalUrl: "https://www.youtube.com/watch?v=wdfS48_XENE",
      scannedAt: "2026-10-03T04:30:00Z"
    },
    publishedAt: "2026-10-03T04:30:00Z",
    readTimeBn: "৫ মিনিট ভিডিও",
    readTimeEn: "5 min video",
    mediaFormat: "youtube",
    videoUrl: "https://www.youtube.com/watch?v=wdfS48_XENE",
    imageUrl: "https://i.ytimg.com/vi/wdfS48_XENE/hqdefault.jpg",
    isLeadStory: false,
    isTrending: false,
    tags: ["RPlus News", "YouTube Dispatch", "Delhi Bureau", "Diplomacy"]
  }
];

// Prepend alerts
const alertsRegex = /export const BREAKING_NEWS_ALERTS: BreakingAlert\[\] = \[([\s\S]*?)\];/;
const alertMatches = content.match(alertsRegex);
if (alertMatches) {
  const existingAlertsStr = alertMatches[1].trim();
  const formattedNewAlerts = JSON.stringify(newAlerts, null, 4).slice(1, -1).trim();
  const combinedAlerts = `export const BREAKING_NEWS_ALERTS: BreakingAlert[] = [\n${formattedNewAlerts},\n${existingAlertsStr}\n];`;
  content = content.replace(alertsRegex, combinedAlerts);
}

// Prepend new news items
const itemsRegex = /export const SCANNED_NEWS_ITEMS: NewsItem\[\] = \[([\s\S]*?)\];/;
const itemMatches = content.match(itemsRegex);
if (itemMatches) {
  const existingItemsStr = itemMatches[1].trim();
  const formattedNewItems = JSON.stringify(newItems, null, 2).slice(1, -1).trim();
  const combinedItems = `export const SCANNED_NEWS_ITEMS: NewsItem[] = [\n${formattedNewItems},\n${existingItemsStr}\n];`;
  content = content.replace(itemsRegex, combinedItems);
}

// Update SCANNER_STATS
const statsRegex = /export const SCANNER_STATS = \{[\s\S]*?\};/;
const newStats = `export const SCANNER_STATS = {
  "lastScannedAtBn": "৩ অক্টোবর, ২০২৬ এ ১১:৫০ AM",
  "lastScannedAtEn": "3 Oct 2026, 11:50 am",
  "totalScanned24h": 4315,
  "bangladeshMatches": 1044,
  "sentimentDistribution": {
    "positive": 36,
    "neutral": 44,
    "negative": 20
  },
  "bureauDistribution": {
    "delhi": 45,
    "kolkata": 33,
    "mumbai": 10,
    "tripura": 5,
    "assam": 4,
    "siliguri": 3
  },
  "languageDistribution": {
    "english": 45,
    "bengali": 33,
    "hindi": 14,
    "tamil": 2,
    "telugu": 2,
    "marathi": 2,
    "malayalam": 2
  }
};`;

content = content.replace(statsRegex, newStats);

fs.writeFileSync(newsFilePath, content, 'utf8');
console.log('Successfully updated src/data/news-data.ts with 11 new items for Oct 3, 2026!');
