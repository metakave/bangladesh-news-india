import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const newsFilePath = path.join(rootDir, 'src/data/news-data.ts');
let content = fs.readFileSync(newsFilePath, 'utf8');

const newStats = {
  lastScannedAtBn: "১৬ অক্টোবর, ২০২৬ এ ৪:০০ PM",
  lastScannedAtEn: "16 Oct 2026, 04:00 pm",
  totalScanned24h: 4586,
  bangladeshMatches: 1289,
  sentimentDistribution: {
    positive: 36,
    neutral: 45,
    negative: 19
  },
  bureauDistribution: {
    delhi: 42,
    kolkata: 33,
    mumbai: 12,
    tripura: 5,
    assam: 5,
    siliguri: 3
  },
  languageDistribution: {
    english: 45,
    bengali: 34,
    hindi: 15,
    tamil: 2,
    telugu: 2,
    marathi: 1,
    malayalam: 1
  }
};

const newAlerts = [
  {
    id: "alert-105",
    headlineBn: "‘বাংলাদেশে সংখ্যালঘুদের নিরাপত্তা নিয়ে গভীর উদ্বেগ, দুর্গাপূজার আগে কড়া নজরদারি’: দ্য টাইমস অব ইন্ডিয়া",
    headlineEn: "The Times of India: Sheikh Hasina Flags Minority Insecurity in Bangladesh Ahead of Durga Puja",
    timeAgoBn: "১০ মিনিট আগে",
    timeAgoEn: "10 mins ago",
    sourceName: "The Times of India",
    sourceBureau: "Mumbai",
    sentiment: "negative",
    url: "https://timesofindia.indiatimes.com/world/south-asia/deep-sense-of-insecurity-sheikh-hasina-flags-minority-safety-in-bangladesh/articleshow/134963994.cms"
  },
  {
    id: "alert-106",
    headlineBn: "‘ব্রিকস সম্মেলন বর্জন তারেক রহমানের অপরিণত কূটনৈতিক সিদ্ধান্ত’: দ্য আসাম ট্রিবিউন",
    headlineEn: "The Assam Tribune: Sheikh Hasina Calls Tarique Rahman's BRICS Absence Counterproductive for Dhaka",
    timeAgoBn: "২৫ মিনিট আগে",
    timeAgoEn: "25 mins ago",
    sourceName: "The Assam Tribune",
    sourceBureau: "Assam",
    sentiment: "neutral",
    url: "https://assamtribune.com/international/sheikh-hasina-calls-rahmans-brics-summit-absence-counterproductive-1620217"
  },
  {
    id: "alert-107",
    headlineBn: "‘ভারতে না যাওয়া আত্মঘাতী, কূটনৈতিক সুযোগ হারাল বাংলাদেশ’: বর্তমান পত্রিকা",
    headlineEn: "Bartaman Patrika: Bangladesh Missed Strategic Economic Opening by Skipping Delhi BRICS Meet",
    timeAgoBn: "৪০ মিনিট আগে",
    timeAgoEn: "40 mins ago",
    sourceName: "Bartaman Patrika",
    sourceBureau: "Kolkata",
    sentiment: "neutral",
    url: "https://bartamanpatrika.com/news/hasina-claims-tareqs-decision-not-to-join-brics-was-immature"
  },
  {
    id: "alert-108",
    headlineBn: "‘হিলি সীমান্তে কাঁটাতারের ওপারে-এপারে প্রীতি ও কড়া বিএসএফ নজরদারি’: এই সময়",
    headlineEn: "Ei Samay: Indo-Bangla Festivities & BSF Vigilance at Hili Border Ahead of Festive Season",
    timeAgoBn: "১ ঘণ্টা আগে",
    timeAgoEn: "1 hour ago",
    sourceName: "Ei Samay (Instagram)",
    sourceBureau: "Siliguri",
    sentiment: "positive",
    url: "https://www.instagram.com/p/DejOdshDeC_/"
  }
];

const newItems = [
  {
    id: "news-20261016-001",
    slug: "times-of-india-sheikh-hasina-flags-minority-safety-in-bangladesh",
    title: "'Deep sense of insecurity': Sheikh Hasina flags minority safety in Bangladesh - The Times of India",
    englishTitle: "The Times of India: Sheikh Hasina Flags Rising Minority Insecurity in Bangladesh Ahead of Durga Puja",
    banglaTitle: "‘বাংলাদেশে সংখ্যালঘুদের নিরাপত্তা নিয়ে গভীর উদ্বেগ’: দুর্গাপূজার প্রাক্কালে হিন্দু সম্প্রদায়ের নিরাপত্তায় নজরদারির আহ্বান শেখ হাসিনার",
    summaryBn: "বাংলাদেশের সাবেক প্রধানমন্ত্রী শেখ হাসিনা শারদীয় দুর্গাপূজার প্রাক্কালে বাংলাদেশে সংখ্যালঘু হিন্দু সম্প্রদায়ের নিরাপত্তা পরিস্থিতি নিয়ে গভীর উদ্বেগ প্রকাশ করেছেন। ভারতীয় সংবাদমাধ্যম টাইমস অব ইন্ডিয়ার প্রতিবেদনে বলা হয়, বিভিন্ন স্থানে মন্দির ও পূজামণ্ডপে হুমকির মুখে চরম নিরাপত্তাহীনতায় ভুগছেন সংখ্যালঘুরা।",
    summaryEn: "Former Bangladesh Prime Minister Sheikh Hasina voiced grave concern over the safety of religious minorities in Bangladesh ahead of Durga Puja festivities. The Times of India reported her remarks calling for communal harmony and demanding that the current administration ensure foolproof security for temples and celebration venues.",
    keyPointsBn: [
      "শারদীয় দুর্গাপূজার মুখে সংখ্যালঘুদের ওপর হামলা ও হুমকির বিষয়ে তীব্র উদ্বেগ প্রকাশ",
      "বিভিন্ন জেলায় প্রতিমা ভাঙচুর ও নিরাপত্তা শঙ্কার প্রেক্ষিতে আন্তর্জাতিক সম্প্রদায়ের দৃষ্টি আকর্ষণ",
      "সব ধর্মের মানুষের সহাবস্থান ও মন্দিরগুলোতে সার্বক্ষণিক সুরক্ষার দাবি"
    ],
    keyPointsEn: [
      "Ex-PM flags acute sense of insecurity among minority communities ahead of Durga Puja",
      "Condemned targeted vandalism and intimidation reported across district mandaps",
      "Urged robust security deployment to preserve interfaith harmony across Bangladesh"
    ],
    category: "diplomacy",
    categoryLabelBn: "কূটনীতি ও দ্বিপাক্ষিক সম্পর্ক",
    categoryLabelEn: "Diplomacy & Bilateral Relations",
    sentiment: "negative",
    sentimentReasonBn: "সংখ্যালঘু সম্প্রদায়ের নিরাপত্তা সংকট ও রাজনৈতিক টানাপোড়েনের নেতিবাচক প্রতিফলন।",
    sentimentReasonEn: "Critical assessment of communal vulnerabilities and administration oversight in Bangladesh.",
    source: {
      name: "The Times of India",
      bureau: "Mumbai",
      language: "English",
      originalUrl: "https://timesofindia.indiatimes.com/world/south-asia/deep-sense-of-insecurity-sheikh-hasina-flags-minority-safety-in-bangladesh/articleshow/134963994.cms",
      scannedAt: "2026-10-16T15:30:00Z"
    },
    publishedAt: "2026-10-15T10:06:00.000Z",
    readTimeBn: "৩ মিনিট",
    readTimeEn: "3 mins",
    imageUrl: "/images/default-geopolitical-map.jpg",
    mediaFormat: "rss",
    isLeadStory: true,
    isTrending: true,
    tags: ["সংখ্যালঘু সুরক্ষা", "শেখ হাসিনা", "দুর্গাপূজা", "টাইমস অব ইন্ডিয়া", "ভারত-বাংলাদেশ"]
  },
  {
    id: "news-20261016-002",
    slug: "assam-tribune-sheikh-hasina-calls-rahmans-brics-summit-absence-counterproductive",
    title: "Sheikh Hasina calls Rahman’s BRICS Summit absence ‘counterproductive’ - The Assam Tribune",
    englishTitle: "The Assam Tribune: Hasina Terms Tarique Rahman's BRICS Boycott 'Counterproductive' for Bangladesh",
    banglaTitle: "‘ব্রিকস সম্মেলনে অনুপস্থিতি আত্মঘাতী’: তারেক রহমানের দিল্লি না যাওয়ার সিদ্ধান্তকে অপরিণত বললেন হাসিনা",
    summaryBn: "আসামের শীর্ষ ইংরেজি দৈনিক দ্য আসাম ট্রিবিউন জানায়, নয়াদিল্লিতে অনুষ্ঠিত ব্রিকস সম্মেলনে যোগ না দেওয়ায় বিএনপির ভারপ্রাপ্ত চেয়ারম্যান তারেক রহমানের সিদ্ধান্তকে ‘অপরিণত ও চরম ক্ষতিকর’ হিসেবে আখ্যায়িত করেছেন শেখ হাসিনা। আঞ্চলিক অর্থনৈতিক সহযোগিতা ও বাণিজ্যিক সমঝোতার ক্ষেত্রে ঢাকা এক বিশাল সুযোগ হারাল বলে মত দেন তিনি।",
    summaryEn: "The Assam Tribune reported that Sheikh Hasina termed BNP acting chairman Tarique Rahman's refusal to attend the BRICS Summit in New Delhi as 'immature and counterproductive'. She argued that boycotting high-level multilateral engagements damages Bangladesh's economic interests and regional trade linkages.",
    keyPointsBn: [
      "নয়াদিল্লিতে অনুষ্ঠিত ব্রিকস শীর্ষ সম্মেলন বর্জনের সমালোচনা করে একে অপরিণত আখ্যা",
      "আঞ্চলিক বহুপাক্ষিক ফোরামে ঢাকার অনুপস্থিতি অর্থনৈতিক বিনিয়োগের জন্য বড় ধাক্কা",
      "ভারতের সাথে দীর্ঘমেয়াদী অর্থনৈতিক অংশীদারিত্ব অটুট রাখার প্রয়োজনীয়তার ওপর জোর"
    ],
    keyPointsEn: [
      "Labelled boycott of New Delhi BRICS summit an immature foreign policy misstep",
      "Emphasized missed investment and multilateral financing avenues for Bangladesh",
      "Underlined the indispensability of continuous constructive dialogue with India"
    ],
    category: "diplomacy",
    categoryLabelBn: "কূটনীতি ও উত্তর-পূর্ব সংযোগ",
    categoryLabelEn: "Diplomacy & Northeast Connectivity",
    sentiment: "neutral",
    sentimentReasonBn: "বহুপাক্ষিক কূটনীতি ও আঞ্চলিক অর্থনৈতিক ফোরামে অংশগ্রহণের বাস্তবসম্মত মূল্যায়ন।",
    sentimentReasonEn: "Pragmatic appraisal of strategic diplomacy and regional forum engagement.",
    source: {
      name: "The Assam Tribune",
      bureau: "Assam",
      language: "English",
      originalUrl: "https://assamtribune.com/international/sheikh-hasina-calls-rahmans-brics-summit-absence-counterproductive-1620217",
      scannedAt: "2026-10-16T15:30:00Z"
    },
    publishedAt: "2026-10-15T08:30:00.000Z",
    readTimeBn: "৩ মিনিট",
    readTimeEn: "3 mins",
    imageUrl: "/images/india-gate-delhi-diplomacy.jpg",
    mediaFormat: "rss",
    tags: ["আসাম ট্রিবিউন", "ব্রিকস", "তারেক রহমান", "শেখ হাসিনা", "কূটনীতি"]
  },
  {
    id: "news-20261016-003",
    slug: "bartaman-hasina-claims-tareqs-decision-not-to-join-brics-was-immature",
    title: "ব্রিকসে যোগ না দেওয়া তারেকের অপরিণত সিদ্ধান্ত, দাবি হাসিনার - Bartaman Patrika",
    englishTitle: "Bartaman Patrika: Skipping BRICS Was Tarique's Immature Decision, Asserts Sheikh Hasina",
    banglaTitle: "‘ব্রিকসে যোগ না দেওয়া তারেকের অপরিণত সিদ্ধান্ত’: কলকাতা সংস্করণে দিল্লির সম্মেলন ও ঢাকা-দিল্লি সমীকরণ বিশ্লেষণ",
    summaryBn: "কলকাতার প্রভাবশালী বাংলা দৈনিক ‘বর্তমান’ জানিয়েছে, নয়া দিল্লিতে আয়োজিত ব্রিকস সম্মেলনে অংশ না নিয়ে বাংলাদেশের প্রধান রাজনৈতিক নেতৃত্ব চরম কূটনৈতিক অপরিপক্কতার পরিচয় দিয়েছেন বলে মন্তব্য করেছেন শেখ হাসিনা। এতে আন্তর্জাতিক অঙ্গনে প্রতিবেশী দেশের বিশ্বাসযোগ্যতা ও অর্থনৈতিক সুবিধা ক্ষতিগ্রস্ত হচ্ছে বলে উল্লেখ করা হয়।",
    summaryEn: "Prominent Kolkata daily Bartaman reported Sheikh Hasina's assertion that avoiding the New Delhi BRICS Summit demonstrated diplomatic immaturity by Dhaka's political figures. The report highlighted the risk of diplomatic isolation and loss of bilateral developmental leverage with India.",
    keyPointsBn: [
      "ব্রিকস সম্মেলনে যোগ না দেওয়াকে রাজনৈতিক অন্ধত্ব ও অপরিপক্কতা বলে কটাক্ষ",
      "প্রতিবেশী ভারতের সাথে সুসম্পর্ক রক্ষা বাংলাদেশের অর্থনৈতিক স্থিতিশীলতার চাবিকাঠি",
      "পশ্চিমবঙ্গ ও পূর্ব ভারতের বাণিজ্যিক করিডোর সচল রাখার আহ্বান"
    ],
    keyPointsEn: [
      "Characterized the avoidance of the New Delhi forum as political short-sightedness",
      "Noted stable ties with neighboring India are central to Dhaka's macro-stability",
      "Emphasized safeguarding Eastern India-Bangladesh trade corridors"
    ],
    category: "politics",
    categoryLabelBn: "রাজনীতি ও ভূ-রাজনীতি",
    categoryLabelEn: "Politics & Geopolitics",
    sentiment: "neutral",
    sentimentReasonBn: "দ্বিপাক্ষিক সম্পর্ক ও বহুপাক্ষিক শীর্ষ সম্মেলনের গুরুত্বের নিরপেক্ষ বিশ্লেষণ।",
    sentimentReasonEn: "Balanced regional analysis of leadership decisions and diplomatic repercussions.",
    source: {
      name: "Bartaman Patrika",
      bureau: "Kolkata",
      language: "Bengali",
      originalUrl: "https://bartamanpatrika.com/news/hasina-claims-tareqs-decision-not-to-join-brics-was-immature",
      scannedAt: "2026-10-16T15:30:00Z"
    },
    publishedAt: "2026-10-15T09:45:00.000Z",
    readTimeBn: "৩ মিনিট",
    readTimeEn: "3 mins",
    imageUrl: "/images/kolkata-howrah-bridge-symbolic.jpg",
    mediaFormat: "rss",
    tags: ["বর্তমান", "কলকাতা", "ব্রিকস", "শেখ হাসিনা", "তারেক রহমান"]
  },
  {
    id: "news-20261016-004",
    slug: "navbharat-times-sheikh-hasina-criticized-tarique-rahman-brics-decision",
    title: "'बांग्लादेश के हाथ से निकल गया मौका, अपरिपक्व फैसला', BRICS में शामिल नहीं होने वाले तारिक रहमान पर भड़कीं शेख हसीना - Navbharat Times",
    englishTitle: "Navbharat Times: 'Missed Opportunity, Immature Move': Hasina Slams Tarique Rahman Over BRICS Boycott",
    banglaTitle: "‘হাতছাড়া হলো বিশাল সুযোগ, চরম অপরিণত পদক্ষেপ’: ব্রিকস বর্জনে তারেক রহমানের ওপর ক্ষুব্ধ শেখ হাসিনা, খবর নবভারত টাইমসের",
    summaryBn: "দিল্লির অন্যতম শীর্ষ হিন্দি দৈনিক নবভারত টাইমস প্রতিবেদনে প্রকাশ করেছে যে, ভারতে ব্রিকস সম্মেলনে যোগ না দিয়ে বাংলাদেশ এক বিশাল কূটনৈতিক সুযোগ হাতছাড়া করেছে। শেখ হাসিনা অভিযোগ করেন, দলীয় রাজনৈতিক স্বার্থে বৃহত্তর রাষ্ট্রীয় স্বার্থকে জলাঞ্জলি দেওয়া হচ্ছে, যা দ্বিপাক্ষিক বাণিজ্য ও পারস্পরিক নির্ভরতাকে ব্যাহত করবে।",
    summaryEn: "Leading Hindi national daily Navbharat Times covered Sheikh Hasina's strong rebuke of Tarique Rahman's absence from the BRICS Summit in India. She stressed that ideological hostility undermines national economic progress, forfeiting crucial opportunities to negotiate bilateral credit lines and energy agreements.",
    keyPointsBn: [
      "দিল্লিতে বৈশ্বিক নেতাদের উপস্থিতিতে অনুষ্ঠিত সম্মেলনে অনুপস্থিত থাকা কৌশলগত ভুল",
      "ভারত-বাংলাদেশ বাণিজ্যিক ও জ্বালানি অংশীদারিত্ব এগিয়ে নেওয়ার বিকল্প নেই",
      "রাজনৈতিক দলগুলোর সংকীর্ণ স্বার্থের ঊর্ধ্বে জাতীয় স্বার্থকে অগ্রাধিকার দেওয়ার তাগিদ"
    ],
    keyPointsEn: [
      "Missed forum involving global economic powers and key regional partners",
      "Stressed energy and infrastructure cooperation cannot be sustained in isolation",
      "Urged national interests to supersede partisan rhetoric in Dhaka"
    ],
    category: "diplomacy",
    categoryLabelBn: "কূটনীতি ও দ্বিপাক্ষিক চুক্তি",
    categoryLabelEn: "Diplomacy & Bilateral Agreements",
    sentiment: "negative",
    sentimentReasonBn: "কূটনৈতিক সুযোগ হাতছাড়া হওয়া এবং দুই দেশের সম্পর্কে সৃষ্ট দূরত্বের নেতিবাচক সমালোচনা।",
    sentimentReasonEn: "Critical commentary on forfeited strategic partnerships and strained regional posture.",
    source: {
      name: "Navbharat Times",
      bureau: "Delhi",
      language: "Hindi",
      originalUrl: "https://navbharattimes.indiatimes.com/india/sheikh-hasina-criticized-bangladesh-pm-tarique-rahman-decision-immature-to-skip-brics-summit-in-india/articleshow/134960595.cms",
      scannedAt: "2026-10-16T15:30:00Z"
    },
    publishedAt: "2026-10-15T07:35:44.000Z",
    readTimeBn: "৩ মিনিট",
    readTimeEn: "3 mins",
    imageUrl: "/images/delhi-south-block-diplomacy.jpg",
    mediaFormat: "rss",
    tags: ["নবভারত টাইমস", "হিন্দি গণমাধ্যম", "ব্রিকস", "কূটনীতি", "দিল্লি"]
  },
  {
    id: "news-20261016-005",
    slug: "indian-express-sheikh-hasina-interview-bangladesh-return-democracy",
    title: "Sheikh Hasina says her return to Bangladesh key to restoring democracy - The Indian Express",
    englishTitle: "The Indian Express: Sheikh Hasina Says Her Return to Bangladesh Key to Restoring Democratic Balance",
    banglaTitle: "‘গণতন্ত্র ও আঞ্চলিক ভারসাম্য ফেরাতে বাংলাদেশে প্রত্যাবর্তন জরুরি’: দ্য ইন্ডিয়ান এক্সপ্রেসের বিশেষ প্রতিবেদন",
    summaryBn: "ভারতের প্রভাবশালী জাতীয় দৈনিক দ্য ইন্ডিয়ান এক্সপ্রেসের প্রতিবেদনে উঠে এসেছে শেখ হাসিনার অবস্থান। তিনি পুনর্ব্যক্ত করেছেন যে বাংলাদেশে সাংবিধানিক ধারাবাহিকতা ও গণতান্ত্রিক স্থিতিশীলতা ফিরিয়ে আনার জন্য একটি সর্বজনীন নির্বাচনী প্রক্রিয়া আবশ্যক। নয়াদিল্লির কূটনৈতিক মহলে তার এই বক্তব্যকে গভীরভাবে বিশ্লেষণ করা হচ্ছে।",
    summaryEn: "The Indian Express reported on Sheikh Hasina's detailed articulation that democratic restoration and constitutional normalcy in Bangladesh require inclusive political participation. Strategic circles in New Delhi are closely monitoring how these narratives shape future cross-border dialogue and regional stability.",
    keyPointsBn: [
      "বাংলাদেশে সাংবিধানিক প্রক্রিয়া ও নির্বাচিত সরকারের গুরুত্ব তুলে ধরা",
      "নয়াদিল্লি ও ঢাকার মধ্যকার সুদীর্ঘ ঐতিহাসিক ও নিরাপত্তা সহযোগিতার ওপর আস্থা",
      "উগ্রপন্থার উত্থান রুখতে গণতান্ত্রিক প্রতিষ্ঠানগুলোর সুরক্ষা নিশ্চিত করার আহ্বান"
    ],
    keyPointsEn: [
      "Stressed imperative of constitutional continuity and transparent electoral frameworks",
      "Affirmed historical security and intelligence coordination between Delhi and Dhaka",
      "Warned against unchecked extremist proliferation across eastern subcontinent borders"
    ],
    category: "politics",
    categoryLabelBn: "রাজনীতি ও আঞ্চলিক নিরাপত্তা",
    categoryLabelEn: "Politics & Regional Security",
    sentiment: "neutral",
    sentimentReasonBn: "সাংবিধানিক স্থিতিশীলতা ও আঞ্চলিক নিরাপত্তার নীতিগত বিশ্লেষণ।",
    sentimentReasonEn: "In-depth strategic perspective on political transitions and bilateral stakes.",
    source: {
      name: "The Indian Express",
      bureau: "Delhi",
      language: "English",
      originalUrl: "https://indianexpress.com/article/world/sheikh-hasina-interview-bangladesh-return-democracy-10920860/",
      scannedAt: "2026-10-16T15:30:00Z"
    },
    publishedAt: "2026-10-14T18:20:00.000Z",
    readTimeBn: "৪ মিনিট",
    readTimeEn: "4 mins",
    imageUrl: "/images/delhi-rashtrapati-bhavan-ceremonial.jpg",
    mediaFormat: "rss",
    tags: ["ইন্ডিয়ান এক্সপ্রেস", "গণতন্ত্র", "ভারত-বাংলাদেশ", "দিল্লি", "নিরাপত্তা"]
  },
  {
    id: "news-20261016-006",
    slug: "telegraph-india-hasina-calls-tarique-rahman-brics-skip-immature",
    title: "Sheikh Hasina calls Tarique Rahman's decision to skip BRICS Summit ‘immature’, says Bangladesh lost opportunity - The Telegraph India",
    englishTitle: "The Telegraph: Hasina Calls Tarique Rahman's BRICS Skip 'Immature', Warns of Lost Economic Momentum",
    banglaTitle: "‘দিল্লির ব্রিকস সম্মেলন এড়িয়ে যাওয়া অপরিণত পদক্ষেপ, ক্ষতিগ্রস্ত অর্থনৈতিক গতি’: দ্য টেলিগ্রাফ",
    summaryBn: "কলকাতা থেকে প্রকাশিত ‘দ্য টেলিগ্রাফ’ জানিয়েছে, নয়া দিল্লির ব্রিকস সম্মেলন থেকে নিজেদের দূরে রাখার সিদ্ধান্তে বাংলাদেশ বহুপাক্ষিক তহবিল ও বাণিজ্য জোটের সুযোগ হারিয়েছে। শেখ হাসিনা সতর্ক করে বলেন, ভারতের সঙ্গে অর্থনৈতিক সম্পর্ক কোনো একক ব্যক্তির ওপর নির্ভর করতে পারে না, এটি জনগণের পারস্পরিক কল্যাণের বিষয়।",
    summaryEn: "The Telegraph (Kolkata) reported Sheikh Hasina's observation that skipping the New Delhi BRICS Summit deprived Bangladesh of key multilateral funding and trade corridors. She noted bilateral ties transcend individual personalities and must serve enduring economic cooperation.",
    keyPointsBn: [
      "বহুপাক্ষিক মঞ্চে অনুপস্থিতি আন্তর্জাতিক বিনিয়োগকারীদের কাছে ভুল বার্তা দেয়",
      "ভারত-বাংলাদেশ বাণিজ্য ও সরবরাহ শৃঙ্খল সুরক্ষিত রাখার ওপর তাগিদ",
      "আঞ্চলিক সংহতি বজায় রাখতে বাস্তবসম্মত পররাষ্ট্রনীতির প্রয়োজনীয়তা"
    ],
    keyPointsEn: [
      "Absence sends an ambiguous signal to multilateral developmental lenders",
      "Urged protection of cross-border supply chains and logistics corridors",
      "Advocated pragmatic external policy over ideological posturing"
    ],
    category: "diplomacy",
    categoryLabelBn: "কূটনীতি ও আন্তর্জাতিক বাণিজ্য",
    categoryLabelEn: "Diplomacy & International Trade",
    sentiment: "neutral",
    sentimentReasonBn: "বাণিজ্যিক ও কূটনৈতিক সম্পর্কের বাস্তবমুখী পর্যালোচনা।",
    sentimentReasonEn: "Pragmatic appraisal of multilateral trade relations and cross-border connectivity.",
    source: {
      name: "The Telegraph",
      bureau: "Kolkata",
      language: "English",
      originalUrl: "https://www.telegraphindia.com/world/sheikh-hasina-calls-tarique-rahmans-decision-to-skip-brics-summit-immature-says-bangladesh-lost-opportunity/cid/2184684",
      scannedAt: "2026-10-16T15:30:00Z"
    },
    publishedAt: "2026-10-14T20:15:00.000Z",
    readTimeBn: "৩ মিনিট",
    readTimeEn: "3 mins",
    imageUrl: "/images/kolkata-high-court-heritage.jpg",
    mediaFormat: "rss",
    tags: ["টেলিগ্রাফ", "কলকাতা", "বাণিজ্য", "ব্রিকস", "কূটনীতি"]
  },
  {
    id: "news-20261016-007",
    slug: "ei-samay-durga-puja-hili-border-india-bangladesh-relation",
    title: "Durga Puja 2026 | Hili Border | India-Bangladesh Relation | মাঝে শুধু কাঁটাতারের বেড়া - Ei Samay",
    englishTitle: "Ei Samay: Durga Puja 2026 at Hili Border Reflects Enduring Indo-Bangla Cultural Ties Amid BSF Vigilance",
    banglaTitle: "‘মাঝে শুধু কাঁটাতারের বেড়া’: দক্ষিণ দিনাজপুরের হিলি সীমান্তে দুই বাংলার শারদীয় সম্প্রীতি ও বিএসএফের নজরদারি",
    summaryBn: "উত্তরবঙ্গের দক্ষিণ দিনাজপুর জেলার হিলির ধলপাড়া গ্রাম পঞ্চায়েতের পূর্ব গোবিন্দপুর গ্রামে ভারত-বাংলাদেশ আন্তর্জাতিক সীমান্তের ঠিক কাঁটাতারের ধারেই অনুষ্ঠিত হচ্ছে ঐতিহ্যবাহী দুর্গাপূজা। ‘এই সময়’ জানায়, রাজনৈতিক অস্থিরতার মধ্যেও সীমান্তের ওপারে ও এপারে মানুষের পারস্পরিক সৌহার্দ্য অমলিন রয়েছে, যেখানে বিএসএফ নিশ্চিত করছে কঠোর নিরাপত্তা।",
    summaryEn: "Ei Samay covered the unique cross-border atmosphere at Purba Gobindapur village along the Hili international border in South Dinajpur. Despite geopolitical strain, the shared festive ethos of Durga Puja brought emotional resonance across the barbed-wire fence, while BSF troops maintained meticulous security.",
    keyPointsBn: [
      "দক্ষিণ দিনাজপুরের হিলি সীমান্তে কাঁটাতারের ধার ঘেঁষে দুর্গাপূজার বর্ণাঢ্য আয়োজন",
      "সীমান্তবর্তী গ্রামবাসীদের পারস্পরিক শুভেচ্ছা ও সংস্কৃতির অমলিন মেলবন্ধন",
      "উৎসব উপলক্ষে বিএসএফ ও সীমান্তরক্ষীদের কঠোর প্রহরার মাধ্যমে শান্তি বজায় রাখা"
    ],
    keyPointsEn: [
      "Durga Puja organized adjacent to the zero line along South Dinajpur's Hili border",
      "Barbed-wire fence witnessed emotional greetings among separated border families",
      "BSF maintained heightened security vigilance to ensure orderly and safe celebrations"
    ],
    category: "border",
    categoryLabelBn: "সীমান্ত ও সংস্কৃতি",
    categoryLabelEn: "Border & Culture",
    sentiment: "positive",
    sentimentReasonBn: "সীমান্তে মানুষে মানুষে সাংস্কৃতিক মেলবন্ধন, সৌহার্দ্য ও নিরাপদ উৎসব উদযাপনের ইতিবাচক দিক।",
    sentimentReasonEn: "Uplifting cultural harmony and peaceful border coexistence amidst vigilant security.",
    source: {
      name: "Ei Samay (Instagram)",
      bureau: "Siliguri",
      language: "Bengali",
      originalUrl: "https://www.instagram.com/p/DejOdshDeC_/",
      scannedAt: "2026-10-16T15:30:00Z"
    },
    publishedAt: "2026-10-15T12:00:00.000Z",
    readTimeBn: "৩ মিনিট",
    readTimeEn: "3 mins",
    imageUrl: "/images/siliguri-corridor-chickens-neck.jpg",
    mediaFormat: "instagram",
    instagramEmbedUrl: "https://www.instagram.com/p/DejOdshDeC_/",
    tags: ["হিলি সীমান্ত", "এই সময়", "শিলিগুড়ি", "দুর্গাপূজা", "বিএসএফ", "সীমান্ত"]
  },
  {
    id: "news-20261016-008",
    slug: "tripura-times-atrocities-on-chakma-living-in-bangladesh-students-body",
    title: "Atrocities on Chakma living in Bangladesh Students’ body demands intervention - Tripura Times",
    englishTitle: "Tripura Times: Chakma Students in Agartala Protest Atrocities in Bangladesh Hill Tracts",
    banglaTitle: "‘পার্বত্য চট্টগ্রামে চাকমাদের ওপর নিপীড়ন বন্ধের দাবি’: আগরতলায় ছাত্র সংগঠনের বিক্ষোভ ও ভারতীয় হস্তক্ষেপের আবেদন",
    summaryBn: "ত্রিপুরার রাজধানী আগরতলা থেকে প্রকাশিত ত্রিপুরা টাইমস জানিয়েছে, বাংলাদেশের পার্বত্য চট্টগ্রামে পাহাড়ি সংখ্যালঘু চাকমা সম্প্রদায়ের ওপর সাম্প্রতিক হামলা, অগ্নিসংযোগ ও হয়রানির বিরুদ্ধে বিক্ষোভ দেখিয়েছে ছাত্র সংগঠনগুলো। আক্রান্তদের নিরাপত্তা নিশ্চিত করতে ভারতীয় নেতৃত্ব ও আন্তর্জাতিক মানবাধিকার সংস্থাগুলোর অবিলম্বে কার্যকর পদক্ষেপের দাবি জানানো হয়।",
    summaryEn: "Tripura Times reported from Agartala that student organizations staged protests condemning violent attacks, arson, and displacement targeting indigenous Chakma minorities in the Chittagong Hill Tracts. Protesters submitted representations seeking diplomatic dialogue to safeguard indigenous populations along Tripura's frontier.",
    keyPointsBn: [
      "আগরতলায় পার্বত্য চট্টগ্রামের চাকমা ও সংখ্যালঘু পাহাড়ি জনগোষ্ঠীর সমর্থনে সমাবেশ",
      "সাম্প্রতিক সংঘাত ও ভূমি দখলের বিরুদ্ধে ভারতের কার্যকর কূটনৈতিক পদক্ষেপের দাবি",
      "ত্রিপুরা-বাংলাদেশ সীমান্তে নিরাপত্তা বৃদ্ধি এবং শরণার্থীদের আশ্রয়ের আহ্বান"
    ],
    keyPointsEn: [
      "Agartala demonstrations demanding protection for Chakma communities in the CHT",
      "Called on regional bodies and Delhi to press for minority rights compliance in Dhaka",
      "Heightened vigil along Tripura's shared frontier to monitor border vulnerabilities"
    ],
    category: "border",
    categoryLabelBn: "সীমান্ত ও সংখ্যালঘু অধিকার",
    categoryLabelEn: "Border & Minority Rights",
    sentiment: "negative",
    sentimentReasonBn: "পার্বত্য চট্টগ্রামে সংখ্যালঘুদের ওপর হামলা এবং সীমান্ত এলাকায় উদ্বেগ সৃষ্টির নেতিবাচক প্রতিবেদন।",
    sentimentReasonEn: "Humanitarian distress and cross-border security repercussions highlighted along the Tripura frontier.",
    source: {
      name: "Tripura Times",
      bureau: "Tripura",
      language: "English",
      originalUrl: "https://tripuratimes.com/ttimes/atrocities-on-chakma-living-in-bangladesh-students%E2%80%99-body-demands-hasinas-intervention-1578.html",
      scannedAt: "2026-10-16T15:30:00Z"
    },
    publishedAt: "2026-10-15T06:15:00.000Z",
    readTimeBn: "৩ মিনিট",
    readTimeEn: "3 mins",
    imageUrl: "/images/agartala-ujjayanta-palace-tripura.jpg",
    mediaFormat: "rss",
    tags: ["ত্রিপুরা টাইমস", "আগরতলা", "চাকমা", "সীমান্ত", "সংখ্যালঘু"]
  },
  {
    id: "news-20261016-009",
    slug: "news18-bangla-delhi-protest-live-bangladesh-politics-video",
    title: "Delhi Protest News LIVE | Neha Boraর ‘অনুপ্রেরণা’ Bangladesh? Gyanesh - News18 Bangla",
    englishTitle: "News18 Bangla Video Dispatch: Delhi Demonstrations and Cross-Border Political Repercussions Examined",
    banglaTitle: "‘দিল্লি বিক্ষোভ ও বাংলাদেশের ছাত্র আন্দোলনের প্রভাব’: নিউজ১৮ বাংলার বিশেষ ভিডিও প্রতিবেদন",
    summaryBn: "নিউজ১৮ বাংলার বিশেষ ভিডিও বুলেটিনে দিল্লিতে সাম্প্রতিক বিক্ষোভ ও সেখানে বাংলাদেশের রাজনৈতিক পরিবর্তনের প্রভাব নিয়ে বিস্তারিত বিশ্লেষণ তুলে ধরা হয়। সীমান্তে অনুপ্রবেশ রোধ ও অভ্যন্তরীণ স্থিতিশীলতার ওপর এর প্রভাব নিয়ে ভারতীয় নিরাপত্তা বিশ্লেষকদের মতামত তুলে ধরা হয় এই লাইভ ভিডিও প্রতিবেদনে।",
    summaryEn: "A dedicated video dispatch by News18 Bangla analyzed how recent student mobilizations in Dhaka are resonating within student political circles in New Delhi. Indian security commentators outlined the imperative of monitoring ideological cross-currents and safeguarding border sectors.",
    keyPointsBn: [
      "দিল্লির রাজনৈতিক প্রেক্ষাপটে বাংলাদেশের অভ্যুত্থানের প্রভাব নিয়ে বিশেষ বিতর্ক",
      "সীমান্ত পাহারা ও জাতীয় নিরাপত্তা প্রশ্নে গোয়েন্দা সংস্থাগুলোর সতর্কবার্তা",
      "কলকাতা ও দিল্লির নিরাপত্তা বিশেষজ্ঞদের সমন্বিত মূল্যায়ন"
    ],
    keyPointsEn: [
      "Video analysis examining ideological resonances of Dhaka protests in Delhi",
      "Security panel assessed intelligence advisories along the eastern borderlands",
      "Highlighted regional diplomatic sensitivities affecting inter-state relations"
    ],
    category: "politics",
    categoryLabelBn: "ভিডিও প্রতিবেদন ও রাজনীতি",
    categoryLabelEn: "Video Dispatch & Politics",
    sentiment: "neutral",
    sentimentReasonBn: "রাজনৈতিক পরিস্থিতি ও নিরাপত্তা সংশ্লিষ্ট বিষয়ের বহুমুখী ভিডিও বিশ্লেষণ।",
    sentimentReasonEn: "Multi-perspective video broadcast exploring security dynamics and protest trends.",
    source: {
      name: "News18 Bangla (YouTube)",
      bureau: "Kolkata",
      language: "Bengali",
      originalUrl: "https://www.youtube.com/watch?v=59co-JEhVq0",
      scannedAt: "2026-10-16T15:30:00Z"
    },
    publishedAt: "2026-10-15T08:45:00.000Z",
    readTimeBn: "৩ মিনিট",
    readTimeEn: "3 mins",
    imageUrl: "https://i.ytimg.com/vi/59co-JEhVq0/hqdefault.jpg",
    mediaFormat: "youtube",
    videoUrl: "https://www.youtube.com/watch?v=59co-JEhVq0",
    tags: ["নিউজ১৮ বাংলা", "ইউটিউব", "ভিডিও", "দিল্লি", "ছাত্র আন্দোলন"]
  },
  {
    id: "news-20261016-010",
    slug: "times-of-india-ties-cant-hinge-on-one-individual-hasina-criticises-brics-boycott",
    title: "‘Ties can’t hinge on one individual’: Hasina criticises Bangladesh’s Brics boycott - The Times of India",
    englishTitle: "The Times of India: 'Ties Cannot Hinge on an Individual': Hasina Criticizes BRICS Boycott",
    banglaTitle: "‘সম্পর্ক কোনো একজন ব্যক্তির ওপর নির্ভর করে না’: ব্রিকস সম্মেলন বর্জনের বিরুদ্ধে টাইমস অব ইন্ডিয়ায় কঠোর বার্তা",
    summaryBn: "মুম্বাই থেকে প্রকাশিত টাইমস অব ইন্ডিয়ার আন্তর্জাতিক সংস্করণে শেখ হাসিনার বক্তব্য তুলে ধরা হয়েছে, যেখানে তিনি উল্লেখ করেন যে দুই দেশের দীর্ঘস্থায়ী অর্থনৈতিক ও ভূকৌশলগত অংশীদারিত্ব কোনো বিশেষ রাজনৈতিক ব্যক্তির ওপর নির্ভরশীল নয়। পারস্পরিক ব্যবসা-বাণিজ্য ও কানেক্টিভিটি অব্যাহত রাখাই সবচেয়ে বাস্তবসম্মত পথ।",
    summaryEn: "The Times of India's international coverage highlighted remarks emphasizing that institutional India-Bangladesh relations must transcend individual leaders. Hasina argued that sustaining robust commercial corridors, port access, and transit facilities is vital for the people of both nations.",
    keyPointsBn: [
      "রাষ্ট্রীয় সম্পর্ক ব্যক্তিবিশেষের পছন্দ-অপছন্দের ঊর্ধ্বে রাখার আহ্বান",
      "চট্টগ্রাম ও মোংলা বন্দর ব্যবহারের মতো দ্বিপাক্ষিক বাণিজ্য চুক্তি অব্যাহত রাখার ওপর জোর",
      "দক্ষিণ এশীয় মুক্ত বাণিজ্যের গতি ধরে রাখতে উভয় দেশের ব্যবসায়ীদের সহযোগিতা"
    ],
    keyPointsEn: [
      "Argued structural bilateral relations transcend transitory political figures",
      "Advocated preserving bilateral trade treaties and transshipment protocols",
      "Stressed mutual commercial dependence between business communities of both countries"
    ],
    category: "trade",
    categoryLabelBn: "বাণিজ্য ও কানেক্টিভিটি",
    categoryLabelEn: "Trade & Connectivity",
    sentiment: "positive",
    sentimentReasonBn: "দ্বিপাক্ষিক বাণিজ্যিক ধারাবাহিকতা ও দীর্ঘমেয়াদী সহযোগিতার গঠনমূলক বার্তা।",
    sentimentReasonEn: "Constructive emphasis on enduring bilateral trade corridors and institutional connectivity.",
    source: {
      name: "The Times of India",
      bureau: "Mumbai",
      language: "English",
      originalUrl: "https://timesofindia.indiatimes.com/world/south-asia/ties-cant-hinge-on-one-individual-hasina-criticises-bangladeshs-brics-boycott/articleshow/134930379.cms",
      scannedAt: "2026-10-16T15:30:00Z"
    },
    publishedAt: "2026-10-14T14:30:00.000Z",
    readTimeBn: "৩ মিনিট",
    readTimeEn: "3 mins",
    imageUrl: "/images/mumbai-gateway-of-india.jpg",
    mediaFormat: "rss",
    tags: ["বাণিজ্য", "টাইমস অব ইন্ডিয়া", "মুম্বাই", "কানেক্টিভিটি", "ব্রিকস"]
  },
  {
    id: "news-20261016-011",
    slug: "live-hindustan-sheikh-hasina-concern-hindus-minority-bangladesh",
    title: "हिंदुओं पर अत्याचार, मंदिरों को भी नहीं छोड़ रहे; शेख हसीना ने बांग्लादेश में अल्पसंख्यकों पर जताई चिंता - Live Hindustan",
    englishTitle: "Live Hindustan: Ex-PM Sheikh Hasina Voices Strong Concern for Minority Safety in Bangladesh",
    banglaTitle: "‘মন্দির ও সংখ্যালঘুদের নিরাপত্তায় অবিলম্বে কঠোর ব্যবস্থা নিতে হবে’: লাইভ হিন্দুস্তানের বিশেষ প্রতিবেদন",
    summaryBn: "ভারতের অন্যতম প্রধান হিন্দি নিউজ পোর্টাল লাইভ হিন্দুস্তান জানিয়েছে, বাংলাদেশে হিন্দু ধর্মাবলম্বী ও অন্যান্য সংখ্যালঘু সম্প্রদায়ের উপাসনালয়ের নিরাপত্তা নিয়ে উদ্বেগ প্রকাশ করেছেন শেখ হাসিনা। আসন্ন উৎসবের দিনগুলোতে কোনো ধরনের অপ্রীতিকর ঘটনা যাতে না ঘটে, সেজন্য আইনশৃঙ্খলা বাহিনীকে সজাগ থাকার তাগিদ দেওয়া হয়েছে।",
    summaryEn: "Prominent Hindi digital news outlet Live Hindustan reported on Sheikh Hasina's expressions of distress regarding reports of vandalism targeting temples in Bangladesh. She urged international human rights observers and local administrations to guarantee uninterrupted and secure observances for minority congregations.",
    keyPointsBn: [
      "বিভিন্ন জেলায় মন্দির ও উপাসনালয় সুরক্ষায় সার্বক্ষণিক পুলিশি প্রহরার দাবি",
      "সংখ্যালঘু সম্প্রদায়কে উৎসব উদযাপনে আশ্বস্ত করতে প্রশাসনের কার্যকর পদক্ষেপের প্রত্যাশা",
      "ভারতের বিভিন্ন স্তরে বাংলাদেশের পরিস্থিতি নিয়ে ক্রমবর্ধমান উদ্বেগ"
    ],
    keyPointsEn: [
      "Called for round-the-clock protection around places of worship across districts",
      "Urged law enforcement to deter intimidation ahead of annual festive gatherings",
      "Reported growing sensitivity in Indian civic and cultural circles regarding the situation"
    ],
    category: "culture",
    categoryLabelBn: "সংস্কৃতি ও সংখ্যালঘু অধিকার",
    categoryLabelEn: "Culture & Minority Rights",
    sentiment: "negative",
    sentimentReasonBn: "উপাসনালয়ে অস্থিরতা ও সংখ্যালঘুদের নিরাপত্তাহীনতা সংক্রান্ত নেতিবাচক বিবরণ।",
    sentimentReasonEn: "Critical coverage of communal intimidation and security demands for vulnerable groups.",
    source: {
      name: "Live Hindustan",
      bureau: "Delhi",
      language: "Hindi",
      originalUrl: "https://www.livehindustan.com/international/sheikh-hasina-major-concern-over-hindus-and-minority-situation-in-bangladesh-201792068310160.amp.html",
      scannedAt: "2026-10-16T15:30:00Z"
    },
    publishedAt: "2026-10-15T11:15:00.000Z",
    readTimeBn: "৩ মিনিট",
    readTimeEn: "3 mins",
    imageUrl: "/images/delhi-red-fort-heritage.jpg",
    mediaFormat: "rss",
    tags: ["লাইভ হিন্দুস্তান", "সংখ্যালঘু", "দুর্গাপূজা", "হিন্দি গণমাধ্যম", "সংস্কৃতি"]
  },
  {
    id: "news-20261016-012",
    slug: "sangbad-pratidin-sheikh-hasina-blasts-tarique-rahman-brics-decision",
    title: "‘অপরিণত, ভারতে না আসায় হাসিনার ধমক বাংলাদেশের প্রধানমন্ত্রী তারেককে - Sangbad Pratidin",
    englishTitle: "Sangbad Pratidin: Hasina Slams Move to Skip Delhi BRICS Meet as Diplomatic Failure",
    banglaTitle: "‘ভারতে না আসা অপরিণত কূটনৈতিক দেউলিয়াত্ব’: তারেক রহমানের সিদ্ধান্তের কড়া সমালোচনা সংবাদ প্রতিদিনে",
    summaryBn: "কলকাতার প্রথম সারির বাংলা দৈনিক ‘সংবাদ প্রতিদিন’ এক বিশদ প্রতিবেদনে লিখেছে, নয়াদিল্লির ব্রিকস সম্মেলন এড়িয়ে গিয়ে বাংলাদেশ নিজের ভূকৌশলগত ভারসাম্যকে ঝুঁকির মধ্যে ফেলেছে। শেখ হাসিনা স্পষ্ট করেছেন যে, ভারতকে বাদ দিয়ে বাংলাদেশের সামগ্রিক অর্থনৈতিক প্রবৃদ্ধি বা আন্তর্জাতিক বাণিজ্য কোনোটাই টেকসই হতে পারে না।",
    summaryEn: "Kolkata daily Sangbad Pratidin detailed Sheikh Hasina's reprimand over Dhaka leadership's reluctance to travel to New Delhi for multilateral deliberations. The report underscored that neglecting relations with India undermines Bangladesh's broader economic architecture and border stability.",
    keyPointsBn: [
      "নয়া দিল্লির শীর্ষ সম্মেলনে অংশ না নেওয়ার সিদ্ধান্তকে কূটনৈতিক অদূরদর্শিতা হিসেবে বর্ণনা",
      "পশ্চিমবঙ্গ ও আসামের সাথে যৌথ বাণিজ্য সুবিধা কাজে লাগানোর আহ্বান",
      "প্রতিবেশী দেশের সাথে বন্ধুত্বপূর্ণ সম্পর্ক বজায় রাখার ঐতিহাসিক প্রয়োজনীয়তা"
    ],
    keyPointsEn: [
      "Described avoiding New Delhi's summit as diplomatic short-sightedness",
      "Advocated maximizing shared economic dividends with West Bengal and Assam",
      "Emphasized historical necessity of constructive and stable neighborly ties"
    ],
    category: "diplomacy",
    categoryLabelBn: "কূটনীতি ও আঞ্চলিক রাজনীতি",
    categoryLabelEn: "Diplomacy & Regional Politics",
    sentiment: "negative",
    sentimentReasonBn: "কূটনৈতিক ভুল সিদ্ধান্ত ও প্রতিবেশী দেশের সাথে সম্পর্কে স্থবিরতার নেতিবাচক মূল্যায়ন।",
    sentimentReasonEn: "Critical commentary on diplomatic friction and foregone neighborly cooperation.",
    source: {
      name: "Sangbad Pratidin",
      bureau: "Kolkata",
      language: "Bengali",
      originalUrl: "https://www.sangbadpratidin.in/bangladesh/sheikh-hasina-blasts-bangladesh-pm-tarique-rahman/pid/1385806",
      scannedAt: "2026-10-16T15:30:00Z"
    },
    publishedAt: "2026-10-15T09:10:00.000Z",
    readTimeBn: "৩ মিনিট",
    readTimeEn: "3 mins",
    imageUrl: "/images/kolkata-dakshineswar-cultural.jpg",
    mediaFormat: "rss",
    tags: ["সংবাদ প্রতিদিন", "কলকাতা", "তারেক রহমান", "ব্রিকস", "কূটনীতি"]
  }
];

// 1. Update SCANNER_STATS
const statsRegex = /export const SCANNER_STATS = \{[\s\S]*?\};/;
const statsReplacement = `export const SCANNER_STATS = ${JSON.stringify(newStats, null, 2)};`;
content = content.replace(statsRegex, statsReplacement);

// 2. Prepend new Breaking News Alerts
const alertsRegex = /export const BREAKING_NEWS_ALERTS: BreakingAlert\[\] = \[([\s\S]*?)\];/;
const alertsMatch = content.match(alertsRegex);
if (alertsMatch) {
  const existingAlerts = alertsMatch[1];
  const formattedNewAlerts = newAlerts.map(a => `  ${JSON.stringify(a, null, 4).replace(/\n/g, '\n  ')}`).join(',\n');
  const replacement = `export const BREAKING_NEWS_ALERTS: BreakingAlert[] = [\n${formattedNewAlerts},\n${existingAlerts.trim()}\n];`;
  content = content.replace(alertsRegex, replacement);
}

// 3. Prepend new items to SCANNED_NEWS_ITEMS
const itemsRegex = /export const SCANNED_NEWS_ITEMS: NewsItem\[\] = \[([\s\S]*?)\];/;
const itemsMatch = content.match(itemsRegex);
if (itemsMatch) {
  const existingItems = itemsMatch[1];
  const formattedNewItems = newItems.map(item => `  ${JSON.stringify(item, null, 4).replace(/\n/g, '\n  ')}`).join(',\n');
  const replacement = `export const SCANNED_NEWS_ITEMS: NewsItem[] = [\n${formattedNewItems},\n${existingItems.trim()}\n];`;
  content = content.replace(itemsRegex, replacement);
}

fs.writeFileSync(newsFilePath, content, 'utf8');
console.log(`✅ Successfully injected 12 new synthesized articles (20261016) and updated BREAKING_NEWS_ALERTS + SCANNER_STATS in ${newsFilePath}`);
