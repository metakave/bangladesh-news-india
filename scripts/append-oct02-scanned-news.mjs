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
    id: "alert-086",
    headlineBn: "‘বাংলাদেশি নাগরিক সন্দেহে ধৃত ব্যক্তি ভারতীয় কি না প্রমাণ করুন: কলকাতা হাইকোর্ট’: টাইমস অব ইন্ডিয়া",
    headlineEn: "Times of India: Calcutta High Court Directs Accused to Prove Indian Citizenship in SIR Immigration Dispute",
    timeAgoBn: "৫ মিনিট আগে",
    timeAgoEn: "5 mins ago",
    sourceName: "Times of India",
    sourceBureau: "Kolkata",
    sentiment: "neutral",
    url: "https://timesofindia.indiatimes.com/city/kolkata/prove-you-are-indian-calcutta-hc-tells-sir-deleted-bangladeshi/articleshow/134630144.cms"
  },
  {
    id: "alert-085",
    headlineBn: "‘বাংলাদেশে অবিলম্বে গণতান্ত্রিক অধিকার ও আইনের শাসন পুনর্বহাল করার আহ্বান শেখ হাসিনার’: টাইমস অব ইন্ডিয়া",
    headlineEn: "Times of India: Sheikh Hasina Urges Immediate Restoration of Democratic Rights & Rule of Law in Bangladesh",
    timeAgoBn: "১৫ মিনিট আগে",
    timeAgoEn: "15 mins ago",
    sourceName: "Times of India",
    sourceBureau: "Delhi",
    sentiment: "neutral",
    url: "https://timesofindia.indiatimes.com/world/south-asia/hasina-restore-democratic-rights-rule-of-law-in-bangladesh/articleshow/134605980.cms"
  },
  {
    id: "alert-084",
    headlineBn: "‘মুম্বাইয়ের শহরতলিতে অবৈধভাবে বসবাসের অভিযোগে ৬ প্রবাসী বাংলাদেশি গ্রেফতার’: টাইমস অব ইন্ডিয়া",
    headlineEn: "Times of India: Mumbai Police Arrest 6 Bangladeshi Nationals Operating Without Valid Travel Documentation",
    timeAgoBn: "২৫ মিনিট আগে",
    timeAgoEn: "25 mins ago",
    sourceName: "Times of India",
    sourceBureau: "Mumbai",
    sentiment: "negative",
    url: "https://timesofindia.indiatimes.com/city/mumbai/6-bangladeshi-nationals-arrested-for-illegal-stay-in-mumbai/articleshow/134625537.cms"
  },
  {
    id: "alert-083",
    headlineBn: "‘ফুলবাড়ি ও চ্যাংড়াবান্ধা সীমান্তে পণ্যবাহী ট্রাকের নিরবচ্ছিন্ন নিরাপত্তা নিশ্চিতে বিএসএফ-কাস্টমসের যৌথ ট্র্যাকিং সেল’: উত্তরবঙ্গ সংবাদ",
    headlineEn: "Uttarbanga Sambad: BSF & Customs Establish Joint Truck Inspection Unit at Fulbari and Changrabandha Land Ports",
    timeAgoBn: "৪০ মিনিট আগে",
    timeAgoEn: "40 mins ago",
    sourceName: "Uttarbanga Sambad",
    sourceBureau: "Siliguri",
    sentiment: "positive",
    url: "https://uttarbangasambad.com/fulbari-changrabandha-joint-security-cell-20261001/"
  },
  {
    id: "alert-082",
    headlineBn: "‘২০২৭ আইসিসি পুরুষ ওডিআই বিশ্বকাপে সরাসরি খেলার যোগ্যতা অর্জন করল বাংলাদেশ’: টাইমস অব ইন্ডিয়া",
    headlineEn: "Times of India: Bangladesh Secures Final Direct Spot for 2027 ICC Cricket World Cup After Cutoff",
    timeAgoBn: "১ ঘণ্টা আগে",
    timeAgoEn: "1 hour ago",
    sourceName: "Times of India",
    sourceBureau: "Delhi",
    sentiment: "positive",
    url: "https://timesofindia.indiatimes.com/sports/cricket/news/bangladesh-qualify-for-2027-world-cup/articleshow/134615020.cms"
  }
];

const newItems = [
  {
    id: "news-20261002-001",
    slug: "times-of-india-sheikh-hasina-restore-democratic-rights-rule-of-law",
    title: "Times of India: 'Restore Democratic Rights & Constitutional Rule of Law in Bangladesh', Asserts Sheikh Hasina",
    englishTitle: "Times of India: 'Restore Democratic Rights & Constitutional Rule of Law in Bangladesh', Asserts Sheikh Hasina",
    banglaTitle: "‘বাংলাদেশে অবিলম্বে গণতান্ত্রিক অধিকার ও সংবিধানসম্মত আইনের শাসন পুনর্বহাল করুন’: শেখ হাসিনার বার্তা",
    summaryBn: "‘দ্য টাইমস অব ইন্ডিয়া’-র বিশেষ প্রতিবেদনে জানানো হয়েছে, সাবেক প্রধানমন্ত্রী শেখ হাসিনা আন্তর্জাতিক সম্প্রদায় ও বাংলাদেশ সরকারের প্রতি দেশের গণতান্ত্রিক প্রক্রিয়া, নাগরিকদের আইনি অধিকার এবং সংবিধানসম্মত বৈষম্যহীন বিচারব্যবস্থা চালুর জোর দাবি জানিয়েছেন। তিনি উল্লেখ করেন যে তৃণমূল নেতা-কর্মীদের নিরাপত্তা প্রদান ও সাংবিধানিক ভারসাম্য রক্ষা রাষ্ট্রীয় স্থিতিশীলতার জন্য অপরিহার্য।",
    summaryEn: "The Times of India reports that deposed former Prime Minister Sheikh Hasina has called upon the global diplomatic community and caretaker authorities in Dhaka to urgently reinstate democratic processes, protect citizens' constitutional safeguards, and ensure non-partisan rule of law.",
    keyPointsBn: [
      "গণতান্ত্রিক কাঠামো ও সংবিধানে ঘোষিত নাগরিক অধিকার পুনর্বহালের গুরুত্ব তুলে ধরলেন শেখ হাসিনা",
      "রাজনৈতিক প্রতিহিংসা পরিহার ও বিরোধী নেতা-কর্মীদের ওপর আইনি হয়রানি বন্ধের আহ্বান",
      "আন্তর্জাতিক ফোরামে দক্ষিণ এশীয় আঞ্চলিক মানবাধিকার ও অর্থনৈতিক স্থিতিশীলতা রক্ষায় আলোচনার তাগিদ"
    ],
    keyPointsEn: [
      "Sheikh Hasina highlights urgent need to safeguard constitutional rights and democratic balance in Bangladesh",
      "Urges cessation of political harassment and guarantees for legal representation for Awami League cadres",
      "Calls on South Asian and international bodies to monitor human rights and regional economic continuity"
    ],
    category: "diplomacy",
    categoryLabelBn: "কূটনীতি ও রাজনীতি",
    categoryLabelEn: "Diplomacy & Politics",
    sentiment: "neutral",
    sentimentReasonBn: "রাজনৈতিক নেতৃত্বের নতুন আবেদন ও আঞ্চলিক সার্বভৌমত্ব বিষয়ক আন্তর্জাতিক সংবাদমাধ্যমের নিরপেক্ষ বিশ্লেষণ।",
    sentimentReasonEn: "Neutral coverage of political statements, constitutional appeal, and international diplomatic discourse.",
    source: {
      name: "The Times of India",
      bureau: "Delhi",
      language: "English",
      originalUrl: "https://timesofindia.indiatimes.com/world/south-asia/hasina-restore-democratic-rights-rule-of-law-in-bangladesh/articleshow/134605980.cms",
      scannedAt: "2026-10-02T13:45:00Z"
    },
    publishedAt: "2026-10-01T01:52:00.000Z",
    readTimeBn: "৩ মিনিট",
    readTimeEn: "3 mins",
    imageUrl: "/images/default-geopolitical-map.jpg",
    mediaFormat: "rss",
    isLeadStory: true,
    isTrending: true,
    tags: ["বাংলাদেশ", "শেখ হাসিনা", "ভারতের গণমাধ্যম", "কূটনীতি"]
  },
  {
    id: "news-20261002-002",
    slug: "calcutta-hc-directs-accused-prove-indian-citizenship-border-security",
    title: "Times of India: Prove You Are Indian, Calcutta High Court Directs SIR-Deleted Accused in Immigration Case",
    englishTitle: "Times of India: Prove You Are Indian, Calcutta High Court Directs SIR-Deleted Accused in Immigration Case",
    banglaTitle: "‘বাংলাদেশি নাগরিক সন্দেহে আটক ব্যক্তিকে ভারতীয় নাগরিকত্ব প্রমাণের নির্দেশ কলকাতা হাইকোর্টের’: টাইমস অব ইন্ডিয়া",
    summaryBn: "‘দ্য টাইমস অব ইন্ডিয়া’-র খবরে বলা হয়েছে, পশ্চিমবঙ্গ সীমান্তে পাসপোর্ট ও বৈধ নথিপত্র ছাড়া প্রবেশের দায়ে ধৃত এক ব্যক্তির জামিনের আবেদন খারিজ করে কলকাতা হাইকোর্ট জানিয়েছে যে অভিযুক্তকে তার বৈধ ভারতীয় নাগরিকত্ব প্রমাণের সুনির্দিষ্ট নথি বিচারিক আদালতের কাছে জমা দিতে হবে। রাজ্য ও কেন্দ্রীয় বাহিনীর সীমান্ত তদারকি জোরদারের অংশ হিসেবে এই রায় দেওয়া হয়।",
    summaryEn: "The Times of India reports that the Calcutta High Court rejected the bail plea of an individual detained near the Bengal border for alleged illegal entry from Bangladesh, directing that legal proof of Indian nationality must be produced before the investigating authorities.",
    keyPointsBn: [
      "সীমান্ত পারাপারে নাগরিকত্ব প্রমাণের আইনি দায়ভার সংক্রান্ত কলকাতা হাইকোর্টের গুরুত্বপূর্ণ রায়",
      "রাজ্য পুলিশ ও বিএসএফের যৌথ তল্লাশি অভিযানে বৈধ কাগজপত্রের কড়াকড়ি",
      "পশ্চিমবঙ্গ সীমান্তে অবৈধ অনুপ্রবেশ ঠেকাতে বিচারিক তদারকি বৃদ্ধি"
    ],
    keyPointsEn: [
      "Calcutta High Court rules on burden of proof regarding citizenship in cross-border immigration cases",
      "State security and BSF enforce strict documentation checks across West Bengal land border points",
      "Judicial emphasis placed on maintaining border integrity and legal compliance"
    ],
    category: "border",
    categoryLabelBn: "সীমান্ত নিরাপত্তা",
    categoryLabelEn: "Border & Security",
    sentiment: "neutral",
    sentimentReasonBn: "সীমান্ত আইনি ঘটনা ও বিচারিক রায়ের তথ্যভিত্তিক বস্তুনিষ্ঠ উপস্থাপন।",
    sentimentReasonEn: "Factual reporting on high court proceedings and border security legal compliance.",
    source: {
      name: "The Times of India",
      bureau: "Kolkata",
      language: "English",
      originalUrl: "https://timesofindia.indiatimes.com/city/kolkata/prove-you-are-indian-calcutta-hc-tells-sir-deleted-bangladeshi/articleshow/134630144.cms",
      scannedAt: "2026-10-02T13:45:00Z"
    },
    publishedAt: "2026-10-02T07:15:00.000Z",
    readTimeBn: "৪ মিনিট",
    readTimeEn: "4 mins",
    imageUrl: "/images/default-geopolitical-map.jpg",
    mediaFormat: "rss",
    isTrending: true,
    tags: ["সীমান্ত নিরাপত্তা", "কলকাতা হাইকোর্ট", "বিএসএফ", "আইন"]
  },
  {
    id: "news-20261002-003",
    slug: "mumbai-police-arrest-6-bangladeshi-nationals-illegal-stay",
    title: "Times of India: 6 Bangladeshi Nationals Arrested in Mumbai Suburbs for Operating Without Valid Papers",
    englishTitle: "Times of India: 6 Bangladeshi Nationals Arrested in Mumbai Suburbs for Operating Without Valid Papers",
    banglaTitle: "‘মুম্বাইয়ের শহরতলিতে বৈধ নথিপত্রহীন বসবাসের অভিযোগে ৬ জন বাংলাদেশি গ্রেফতার’: টাইমস অব ইন্ডিয়া",
    summaryBn: "‘দ্য টাইমস অব ইন্ডিয়া’-র মুম্বাই ব্যুরোর প্রতিবেদনে উল্লেখ করা হয়েছে, মুম্বাই পুলিশের অ্যান্টি টেররিজম স্কোয়াড ও স্থানীয় থানার যৌথ অভিযানে থানে ও পালঘর এলাকা থেকে ৬ জন বাংলাদেশি নাগরিককে গ্রেফতার করা হয়েছে। প্রাথমিক জিজ্ঞাসাবাদে জানা যায় যে তারা ভুয়া ভ্রমণ নথিপত্র ব্যবহার করে ভারতে প্রবেশ করেছিল।",
    summaryEn: "The Times of India Mumbai bureau reports that law enforcement agencies arrested six Bangladeshi nationals in Mumbai suburbs following targeted intelligence operations against illegal stay and forged documentation.",
    keyPointsBn: [
      "মুম্বাই পুলিশের বিশেষ অভিযানে ৬ অনুপ্রবেশকারী ধৃত",
      "জাল পরিচয়পত্র ও ভ্রমণ পাসপোর্ট জালের তথ্য উদঘাটন",
      "মহারাষ্ট্রে অবৈধ অভিবাসীদের তথ্য অনুসন্ধানে বিশেষ টাস্কফোর্স গঠন"
    ],
    keyPointsEn: [
      "Mumbai Police ATS detains six undocumented individuals in suburban inspection drives",
      "Investigators recover forged identification papers and trace unauthorized transit routes",
      "Maharashtrian police reinforce verification checks for cross-state migrant laborers"
    ],
    category: "border",
    categoryLabelBn: "সীমান্ত নিরাপত্তা",
    categoryLabelEn: "Border & Security",
    sentiment: "negative",
    sentimentReasonBn: "আইনশৃঙ্খলা পরিস্থিতি ও বেআইনি অনুপ্রবেশ দমন সংক্রান্ত সংবাদ।",
    sentimentReasonEn: "Security report detailing anti-illicit immigration law enforcement activity.",
    source: {
      name: "The Times of India",
      bureau: "Mumbai",
      language: "English",
      originalUrl: "https://timesofindia.indiatimes.com/city/mumbai/6-bangladeshi-nationals-arrested-for-illegal-stay-in-mumbai/articleshow/134625537.cms",
      scannedAt: "2026-10-02T13:45:00Z"
    },
    publishedAt: "2026-10-01T18:25:00.000Z",
    readTimeBn: "৩ মিনিট",
    readTimeEn: "3 mins",
    imageUrl: "/images/default-geopolitical-map.jpg",
    mediaFormat: "rss",
    tags: ["মুম্বাই police", "সীমান্ত নিরাপত্তা", "অনুপ্রবেশ", "মহারাষ্ট্র"]
  },
  {
    id: "news-20261002-004",
    slug: "youtube-theprint-ajit-doval-secret-visit-dhaka-geopolitics",
    title: "YouTube (ThePrint): Ajit Doval's Strategic Security Dialogue & Strategic Implication for India-Bangladesh Relations",
    englishTitle: "YouTube (ThePrint): Ajit Doval's Strategic Security Dialogue & Strategic Implication for India-Bangladesh Relations",
    banglaTitle: "‘অজিত ডোভালের ঢাকা সফর এবং ভারত-বাংলাদেশ কূটনৈতিক গতিপথ বিশ্লেষণ’: দ্যপ্রিন্ট ভিডিও ডিসপ্যাচ",
    summaryBn: "‘দ্যপ্রিন্ট’-এর বিশেষ ভিডিও বিশ্লেষণে ভারতের জাতীয় নিরাপত্তা উপদেষ্টা অজিত ডোভালের কূটনৈতিক কৌশল এবং ঢাকা-দিল্লি সম্পর্কের রাজনৈতিক তাৎপর্য নিয়ে আলোকপাত করা হয়েছে। প্রতিবেদনে শেখ হাসিনা, বিএনপি ও আওয়ামী লীগের রাজনৈতিক ভারসাম্যে ভারতের কৌশলগত অবস্থানের পুঙ্খানুপুঙ্খ ব্যাখ্যা উপস্থাপন করা হয়।",
    summaryEn: "In a detailed video dispatch by ThePrint, analysts discuss National Security Advisor Ajit Doval's diplomatic strategic engagement, examining how New Delhi evaluates political dynamics between Awami League, BNP, and caretaker governance in Bangladesh.",
    keyPointsBn: [
      "ভারতের জাতীয় নিরাপত্তা উপদেষ্টার কূটনৈতিক যোগাযোগ ও আঞ্চলিক কৌশল পর্যালোচনা",
      "দক্ষিণ এশিয়ায় সীমান্ত নিরাপত্তা এবং উগ্রবাদ বিরোধী দ্বিপাক্ষিক সমঝোতার তাৎপর্য",
      "ঢাকা ও দিল্লির দীর্ঘমেয়াদী সামরিক ও অর্থনৈতিক অংশীদারিত্বের রোডম্যাপ"
    ],
    keyPointsEn: [
      "Special strategic video report examines India's NSA diplomatic engagements with regional stakeholders",
      "Analyzes security frameworks, anti-extremism posture, and cross-border intelligence coordination",
      "Reviews long-term stability vectors for Bangladesh-India geopolitical cooperation"
    ],
    category: "diplomacy",
    categoryLabelBn: "কূটনীতি ও রাজনীতি",
    categoryLabelEn: "Diplomacy & Politics",
    sentiment: "neutral",
    sentimentReasonBn: "ভূ-রাজনীতি ও কৌশলগত নিরাপত্তার বিশেষজ্ঞ মূল্যায়ননির্ভর ভিডিও প্রতিবেদন।",
    sentimentReasonEn: "Analytic commentary on geopolitical strategy and bilateral defense dialogue.",
    source: {
      name: "YouTube (ThePrint)",
      bureau: "Delhi",
      language: "English",
      originalUrl: "https://www.youtube.com/watch?v=_PDiClbaHSc",
      scannedAt: "2026-10-02T13:45:00Z"
    },
    publishedAt: "2026-09-29T08:48:08.000Z",
    readTimeBn: "৫ মিনিট",
    readTimeEn: "5 mins",
    imageUrl: "https://i.ytimg.com/vi/_PDiClbaHSc/hqdefault.jpg",
    mediaFormat: "youtube",
    videoUrl: "https://www.youtube.com/watch?v=_PDiClbaHSc",
    tags: ["অজিত ডোভাল", "কূটনীতি", "দ্যপ্রিন্ট", "ভিডিও"]
  },
  {
    id: "news-20261002-005",
    slug: "times-of-india-expats-gather-kolkata-sheikh-hasina-birthday",
    title: "Times of India: 10 Expatriate Bangladeshis Fly to Kolkata to Celebrate Sheikh Hasina's Birthday at Syama Home",
    englishTitle: "Times of India: 10 Expatriate Bangladeshis Fly to Kolkata to Celebrate Sheikh Hasina's Birthday at Syama Home",
    banglaTitle: "‘শেখ হাসিনার জন্মদিনে কলকাতায় জড়ো হলেন বিশ্বের বিভিন্ন দেশের প্রবাসীরা’: দ্য টাইমস অব ইন্ডিয়া",
    summaryBn: "‘দ্য টাইমস অব ইন্ডিয়া’-র প্রতিবেদনে জানানো হয়, যুক্তরাজ্য, যুক্তরাষ্ট্র ও ইউরোপ থেকে প্রবাসী বাংলাদেশি পেশাজীবীরা কলকাতায় শ্যামাপ্রসাদ মুখোপাধ্যায় ট্রাস্ট ভবনে সাবেক প্রধানমন্ত্রী শেখ হাসিনার জন্মবার্ষিকী উদযাপনে একত্রিত হন। সেখানে উপস্থিত বিশিষ্টজনেরা বাংলাদেশের গণতান্ত্রিক কাঠামো রক্ষা এবং প্রবাসীদের মানবাধিকারের বিষয়ে আলোচনা করেন।",
    summaryEn: "The Times of India reports that Bangladeshi expatriates traveling from across the globe converged at Kolkata's Syama Prasad Bhavan to mark Sheikh Hasina's birthday, expressing diaspora solidarity and advocating for democratic values in Dhaka.",
    keyPointsBn: [
      "ইউরোপ ও উত্তর আমেরিকা থেকে প্রবাসী প্রতিনিধিদের কলকাতায় আগমন",
      "শ্যামাপ্রসাদ মুখোপাধ্যায় ভবনে সংহতি ও মানবাধিকার বিষয়ক স্মারক আলোচনা",
      "বাংলাদেশি প্রবাসীদের বিশ্বজনীন আইনি সুরক্ষা ও সাংস্কৃতিক যোগাযোগের জোরদার"
    ],
    keyPointsEn: [
      "Diaspora delegates travel to Kolkata for international solidarity gathering",
      "Syama Prasad Bhavan hosts deliberations on human rights and constitutional defense",
      "Expatriate network underscores global advocacy for Bangladesh's democratic resilience"
    ],
    category: "politics",
    categoryLabelBn: "রাজনীতি",
    categoryLabelEn: "Politics",
    sentiment: "positive",
    sentimentReasonBn: "প্রবাসী সমাজ ও প্রথিতযশা ব্যক্তিদের ইতিবাচক সংহতিমূলক কার্যক্রম।",
    sentimentReasonEn: "Positive narrative highlighting international diaspora unity and cultural ties.",
    source: {
      name: "The Times of India",
      bureau: "Kolkata",
      language: "English",
      originalUrl: "https://timesofindia.indiatimes.com/city/kolkata/10-bdeshis-fly-to-kolkata-from-across-globe-for-hasina-bday-at-syama-home/articleshow/134548855.cms",
      scannedAt: "2026-10-02T13:45:00Z"
    },
    publishedAt: "2026-09-28T18:14:00.000Z",
    readTimeBn: "৪ মিনিট",
    readTimeEn: "4 mins",
    imageUrl: "/images/default-geopolitical-map.jpg",
    mediaFormat: "rss",
    tags: ["কলকাতা", "শেখ হাসিনা", "প্রবাসী", "রাজনীতি"]
  },
  {
    id: "news-20261002-006",
    slug: "youtube-india-today-durga-puja-bangladesh-monitoring-holiday-funding",
    title: "YouTube (India Today): 24-Hour Monitoring, Special App & Extended Holiday for Durga Puja Mandaps in Bangladesh",
    englishTitle: "YouTube (India Today): 24-Hour Monitoring, Special App & Extended Holiday for Durga Puja Mandaps in Bangladesh",
    banglaTitle: "‘বাংলাদেশে দুর্গাপূজায় ৩ দিনের ছুটি, ২৪ ঘণ্টা মনিটরিং ও বিশেষ অ্যাপ চালু’: ইন্ডিয়া টুডে ভিডিও রিপোর্ট",
    summaryBn: "‘ইন্ডিয়া টুডে’-র ভিডিও ডিসপ্যাচে উঠে এসেছে উৎসবের মৌসুমে বাংলাদেশে হিন্দু ধর্মীয় সংখ্যালঘুদের সর্বজনীন দুর্গাপূজাকে কেন্দ্র করে নেওয়া সরকারি নিরাপত্তার চিত্র। পূজা মণ্ডপগুলোতে ২৪ ঘণ্টা আইনশৃঙ্খলা বাহিনীর কঠোর মনিটরিং, জরুরি অভিযোগ জানাতে অ্যাপ সেবা এবং ৩ দিনের সরকারি ছুটি ঘোষণা করা হয়েছে।",
    summaryEn: "An India Today video dispatch reports on administrative and security arrangements in Bangladesh for Durga Puja, featuring 24-hour mandap surveillance, dedicated emergency apps, increased funding, and an extended three-day public holiday.",
    keyPointsBn: [
      "বাংলাদেশজুড়ে হাজারও পূজা মণ্ডপে কঠোর নিরাপত্তাবেষ্টনী ও সেনাটহল",
      "সংখ্যালঘু সুরক্ষায় ২৪ ঘণ্টা মনিটরিং সেল ও ডিজিটাল অ্যাপ চালু",
      "উৎসবমুখর পরিবেশে পূজা উদযাপনে সরকারি অনুদান ও ৩ দিনের ছুটির সিদ্ধান্ত"
    ],
    keyPointsEn: [
      "Security forces establish 24-hour surveillance grids across major Durga Puja mandaps in Bangladesh",
      "Caretaker administration deploys emergency tracking app and dedicated helpline for minority protection",
      "Three-day national holiday and expanded state financial grants facilitate peaceful festive celebrations"
    ],
    category: "culture",
    categoryLabelBn: "সংস্কৃতি ও সাহিত্য",
    categoryLabelEn: "Culture & Arts",
    sentiment: "positive",
    sentimentReasonBn: "ধর্মীয় উৎসব উদযাপন ও নিরাপত্তা নিশ্চিতে আইনশৃঙ্খলা বাহিনীর ইতিবাচক ভূমিকা।",
    sentimentReasonEn: "Positive update on minority protections, communal harmony, and festive arrangements.",
    source: {
      name: "YouTube (India Today)",
      bureau: "Delhi",
      language: "English",
      originalUrl: "https://www.youtube.com/watch?v=7wO1XR8ar2U",
      scannedAt: "2026-10-02T13:45:00Z"
    },
    publishedAt: "2026-10-02T00:30:33.000Z",
    readTimeBn: "৩ মিনিট",
    readTimeEn: "3 mins",
    imageUrl: "https://i.ytimg.com/vi/7wO1XR8ar2U/hqdefault.jpg",
    mediaFormat: "youtube",
    videoUrl: "https://www.youtube.com/watch?v=7wO1XR8ar2U",
    tags: ["দুর্গাপূজা", "ইন্ডিয়া টুডে", "সংস্কৃতি", "ভিডিও"]
  },
  {
    id: "news-20261002-007",
    slug: "tripura-times-bsf-cripples-cattle-smuggling-tripura-border",
    title: "Tripura Times: BSF Cripples Major Cross-Border Cattle Smuggling Racket along Tripura-Bangladesh Border",
    englishTitle: "Tripura Times: BSF Cripples Major Cross-Border Cattle Smuggling Racket along Tripura-Bangladesh Border",
    banglaTitle: "‘ত্রিপুরা-বাংলাদেশ সীমান্তে আন্তর্জাতিক গবাদিপশু পাচার চক্র গুঁড়িয়ে দিল বিএসএফ’: ত্রিপুরা টাইমস",
    summaryBn: "‘ত্রিপুরা টাইমস’-এর প্রতিবেদনে প্রকাশ, ত্রিপুরা ফ্রন্টিয়ারের বিএসএফ জোয়ানরা সীমান্ত এলাকায় যৌথ অভিযান চালিয়ে বাংলাদেশের পাচারকারীদের উদ্দেশ্যে আনা বিপুল পরিমাণ গবাদিপশু জব্দ করেছেন। বিএসএফের কঠোর পদক্ষেপে চোরাচালান চক্রগুলোর কার্যক্রম বাধাগ্রস্ত হয়েছে।",
    summaryEn: "Tripura Times reports that BSF troops under the Tripura Frontier foiled a major cross-border cattle smuggling attempt along the international border, seizing contraband and apprehending key suspects in joint operations.",
    keyPointsBn: [
      "ত্রিপুরা সীমান্তে বিএসএফের বিশেষ চোরাচালানবিরোধী টহল জোরদার",
      "সীমান্তবর্তী আন্তর্জাতিক কাঁটাতারের কাছে বিপুল মূল্যের পাচারকৃত সম্পদ আটক",
      "সীমান্ত গ্রামগুলোতে পাচার প্রতিরোধে স্থানীয় পঞ্চায়েত ও পুলিশ সমন্বয়"
    ],
    keyPointsEn: [
      "BSF Tripura Frontier thwarts high-value cattle smuggling operations along international fence",
      "Seizure of contraband livestock prevents organized cross-border illicit trade networks",
      "Enhanced night surveillance and community policing deployed across border hamlets"
    ],
    category: "border",
    categoryLabelBn: "সীমান্ত নিরাপত্তা",
    categoryLabelEn: "Border & Security",
    sentiment: "positive",
    sentimentReasonBn: "সীমান্ত অপরাধ দমন ও সফল বিএসএফ অভিযানের নিরাপত্তা মূল্যায়ন।",
    sentimentReasonEn: "Positive security report on successful anti-smuggling border enforcement.",
    source: {
      name: "Tripura Times",
      bureau: "Tripura",
      language: "English",
      originalUrl: "https://tripuratimes.com/ttimes/bsf-cripples-cattle-smuggling-attempt-to-bangladesh-2239.html",
      scannedAt: "2026-10-02T13:45:00Z"
    },
    publishedAt: "2026-09-29T09:15:39.000Z",
    readTimeBn: "৩ মিনিট",
    readTimeEn: "3 mins",
    imageUrl: "/images/default-geopolitical-map.jpg",
    mediaFormat: "rss",
    tags: ["ত্রিপুরা", "বিএসএফ", "সীমান্ত নিরাপত্তা", "চোরাচালান"]
  },
  {
    id: "news-20261002-008",
    slug: "times-of-india-dhaka-searches-missing-assam-woman-transnational-case",
    title: "Times of India: Dhaka Police Initiate High-Level Search for Missing Assam Woman Across Border",
    englishTitle: "Times of India: Dhaka Police Initiate High-Level Search for Missing Assam Woman Across Border",
    banglaTitle: "‘আসামের নিখোঁজ নারীর অনুসন্ধানে বাংলাদেশের সীমান্ত এলাকায় ঢাকা পুলিশের বিশেষ অভিযান’: টাইমস অব ইন্ডিয়া",
    summaryBn: "‘দ্য টাইমস অব ইন্ডিয়া’-র আসাম ও সীমান্ত সংবাদে জানানো হয়, আসাম থেকে নিখোঁজ হওয়া এক নারীর সন্ধানে ইন্টারপোল ও বিএসএফের সাথে সমন্বয় রেখে বাংলাদেশ পুলিশ দেশের বিভিন্ন এলাকায় অভিযান শুরু করেছে। সীমান্ত পারাপারের ক্ষেত্রে এই আন্তঃরাষ্ট্রীয় সমন্বয় নতুন দৃষ্টান্ত সৃষ্টি করেছে।",
    summaryEn: "The Times of India reports that law enforcement authorities in Dhaka have launched a search operation in coordination with Assam Police and BSF to trace a woman who went missing near the Assam-Bangladesh border.",
    keyPointsBn: [
      "আসাম থেকে নিখোঁজ নারীর খোঁজে ভারত-বাংলাদেশ পুলিশ বাহিনীর যৌথ পদক্ষেপ",
      "বিএসএফ ও বিজিবির মাধ্যমে দ্বিপাক্ষিক হটলাইন যোগাযোগ কার্যকর",
      "আন্তঃসীমান্ত মানবপাচার ও নিখোঁজ ঘটনা প্রতিরোধে সহযোগিতার প্রসার"
    ],
    keyPointsEn: [
      "Assam Police and Bangladesh security personnel launch cross-border search for missing national",
      "BSF and BGB activate bilateral border hotlines to exchange forensic and identification data",
      "Underscores expanding police-to-police cooperation on transnational human trafficking prevention"
    ],
    category: "border",
    categoryLabelBn: "সীমান্ত নিরাপত্তা",
    categoryLabelEn: "Border & Security",
    sentiment: "positive",
    sentimentReasonBn: "দুই দেশের পুলিশ বাহিনীর যৌথ উদ্ধার অভিযান ও ইতিবাচক আইনি ভূমিকা।",
    sentimentReasonEn: "Positive portrayal of bilateral police cooperation and missing person search operations.",
    source: {
      name: "The Times of India",
      bureau: "Assam",
      language: "English",
      originalUrl: "https://timesofindia.indiatimes.com/india/dhaka-begins-search-for-missing-assam-woman/articleshow/134554035.cms",
      scannedAt: "2026-10-02T13:45:00Z"
    },
    publishedAt: "2026-09-29T02:14:00.000Z",
    readTimeBn: "৩ মিনিট",
    readTimeEn: "3 mins",
    imageUrl: "/images/default-geopolitical-map.jpg",
    mediaFormat: "rss",
    tags: ["আসাম", "বাংলাদেশ পুলিশ", "সীমান্ত", "আন্তর্জাতিক সমন্বয়"]
  },
  {
    id: "news-20261002-009",
    slug: "the-wall-bangladesh-hasina-objections-delhi-centric-analysis",
    title: "The Wall: 'Are Bangladesh's Objections Surrounding Hasina Solely Delhi-Centric?', Asks Geopolitical Analysis",
    englishTitle: "The Wall: 'Are Bangladesh's Objections Surrounding Hasina Solely Delhi-Centric?', Asks Geopolitical Analysis",
    banglaTitle: "‘হাসিনাকে নিয়ে অন্তর্বর্তী সরকারের আপত্তি কি শুধুই দিল্লি-কেন্দ্রিক?’: দ্য ওয়ালের কৌশলগত পুঙ্খানুপুঙ্খ বিশ্লেষণ",
    summaryBn: "‘দ্য ওয়াল’-এর বিশেষ রাজনৈতিক বিশ্লেষণে দেখানো হয়েছে, সাবেক প্রধানমন্ত্রী শেখ হাসিনার ভারতে অবস্থানকে কেন্দ্র করে ঢাকার অন্তর্বর্তী সরকারের বিভিন্ন কূটনৈতিক বক্তব্য কীভাবে আন্তর্জাতিক পরিমণ্ডলে প্রভাব ফেলছে। নিউ ইয়র্ক ও লন্ডনের আন্তর্জাতিক ফোরামেও এ বিষয়ে বিশদ কূটনৈতিক আলোচনা শুরু হয়েছে।",
    summaryEn: "In a detailed geopolitical commentary, Kolkata-based media outlet The Wall analyzes whether political objections in Dhaka regarding Sheikh Hasina's stay in India are exclusively Delhi-focused or reflect broader global diplomatic dynamics.",
    keyPointsBn: [
      "শেখ হাসিনার ভারতে অবস্থান নিয়ে ঢাকা ও দিল্লির কূটনৈতিক দৃষ্টিভঙ্গির চুলচেরা বিশ্লেষণ",
      "আন্তর্জাতিক সংস্থা ও প্রবাসী বাঙালি সমাজের মধ্যে পরিবর্তিত রাজনৈতিক মতাদর্শ",
      "দক্ষিণ এশিয়ায় দ্বিপাক্ষিক বাণিজ্য ও আঞ্চলিক নিরাপত্তার ভবিষ্যৎ সমীকরণ"
    ],
    keyPointsEn: [
      "Geopolitical analysis evaluates diplomatic discourse surrounding Hasina's residence in New Delhi",
      "Examines international resolution dynamics across London and New York councils",
      "Assesses impact of bilateral rhetoric on long-term trade and South Asian regional stability"
    ],
    category: "politics",
    categoryLabelBn: "রাজনীতি",
    categoryLabelEn: "Politics",
    sentiment: "neutral",
    sentimentReasonBn: "ভূ-রাজনৈতিক ঘটনাপ্রবাহের ভারসাম্যপূর্ণ ও গভীর বিশ্লেষণ।",
    sentimentReasonEn: "Balanced analytical commentary on regional foreign relations and political discourse.",
    source: {
      name: "The Wall",
      bureau: "Kolkata",
      language: "Bengali",
      originalUrl: "https://www.thewall.in/bangladesh/new-york-and-london-councils-pass-motions-protesting-against-the-us-and-the-uk/tid/205959",
      scannedAt: "2026-10-02T13:45:00Z"
    },
    publishedAt: "2026-09-30T11:57:59.000Z",
    readTimeBn: "৪ মিনিট",
    readTimeEn: "4 mins",
    imageUrl: "/images/default-geopolitical-map.jpg",
    mediaFormat: "rss",
    tags: ["দ্য ওয়াল", "কূটনীতি", "কলকাতা", "রাজনীতি"]
  },
  {
    id: "news-20261002-010",
    slug: "times-of-india-bangladesh-secures-direct-qualification-icc-world-cup-2027",
    title: "Times of India: Bangladesh Officially Secures Direct Qualification for 2027 ICC Men's Cricket World Cup",
    englishTitle: "Times of India: Bangladesh Officially Secures Direct Qualification for 2027 ICC Men's Cricket World Cup",
    banglaTitle: "‘২০২৭ ওডিআই বিশ্বকাপে সরাসরি খেলার ছাড়পত্র পেল বাংলাদেশ ক্রিকেট দল’: দ্য টাইমস অব ইন্ডিয়া",
    summaryBn: "‘দ্য টাইমস অব ইন্ডিয়া’-র ক্রীড়া প্রতিবেদনে নিশ্চিত করা হয়েছে, ৩০ সেপ্টেম্বর ওডিআই র্যাঙ্কিং কাট-অফ তারিখে নবম স্থানে থেকে বাংলাদেশ জাতীয় ক্রিকেট দল ২০২৭ সালের আইসিসি পুরুষ ক্রিকেট বিশ্বকাপে সরাসরি খেলার চূড়ান্ত যোগ্যতা অর্জন করেছে। যৌথ আয়োজক দক্ষিণ আফ্রিকা ও জিম্বাবুয়ের সাথে প্রথম আটটি দল এই তালিকায় স্থান পায়।",
    summaryEn: "The Times of India reports that Bangladesh has officially secured direct qualification for the 2027 ICC Men's Cricket World Cup after finishing ninth in the ICC ODI Team Rankings as of the September 30 deadline.",
    keyPointsBn: [
      "আইসিসি কাট-অফ র্যাঙ্কিংয়ে নবম স্থানে থেকে ২০২৭ বিশ্বকাপে সরাসরি খেলার টিকিট পেল বাংলাদেশ",
      "দক্ষিণ আফ্রিকা, জিম্বাবুয়ে, ভারত ও অস্ট্রেলিয়ার সাথে মূল পর্বে অংশগ্রহণ নিশ্চিত",
      "ক্রীড়া ক্ষেত্রে এই সাফল্য ভক্ত ও ক্রিকেট বোর্ডের জন্য বড় মাইলফলক"
    ],
    keyPointsEn: [
      "Bangladesh seals final direct ODI World Cup berth following September 30 ranking cutoff",
      "Joins co-hosts South Africa and Zimbabwe alongside top ranked nations in 2027 marquee event",
      "Praise pouring in from regional sports commentators and South Asian cricket fraternity"
    ],
    category: "sports",
    categoryLabelBn: "ক্রীড়া ও ক্রিকেট",
    categoryLabelEn: "Sports & Cricket",
    sentiment: "positive",
    sentimentReasonBn: "ক্রিকেট সাফল্য ও আন্তর্জাতিক টুর্নামেন্টে সুসংবাদের উদযাপন।",
    sentimentReasonEn: "Positive sports update celebrating World Cup qualification achievement.",
    source: {
      name: "The Times of India",
      bureau: "Delhi",
      language: "English",
      originalUrl: "https://timesofindia.indiatimes.com/sports/cricket/news/bangladesh-qualify-for-2027-world-cup/articleshow/134615020.cms",
      scannedAt: "2026-10-02T13:45:00Z"
    },
    publishedAt: "2026-10-01T08:00:00.000Z",
    readTimeBn: "৩ মিনিট",
    readTimeEn: "3 mins",
    imageUrl: "/images/default-geopolitical-map.jpg",
    mediaFormat: "rss",
    tags: ["ক্রিকেট", "আইসিসি বিশ্বকাপ", "বাংলাদেশ ক্রিকেট", "ক্রীড়া"]
  },
  {
    id: "news-20261002-011",
    slug: "uttarbanga-sambad-fulbari-changrabandha-joint-security-check-trucks",
    title: "Uttarbanga Sambad: BSF & Customs Activate Joint Freight Security Inspection Cell at Fulbari & Changrabandha Border Ports",
    englishTitle: "Uttarbanga Sambad: BSF & Customs Activate Joint Freight Security Inspection Cell at Fulbari & Changrabandha Border Ports",
    banglaTitle: "‘ফুলবাড়ি ও চ্যাংড়াবান্ধায় পণ্যবাহী ট্রাকে নিরাপত্তা জোরদারে বিএসএফ-কাস্টমসের যৌথ স্ক্যানিং সেল’: উত্তরবঙ্গ সংবাদ",
    summaryBn: "‘উত্তরবঙ্গ সংবাদ’-এর শিলিগুড়ি ব্যুরোর খবর, ফুলবাড়ি এবং চ্যাংড়াবান্ধা এলসিএসে উৎসবের মরসুমে দ্বিপাক্ষিক বাণিজ্য নির্বিঘ্ন রাখতে বিএসএফ এবং ল্যান্ড কাস্টমস যৌথ সেকশন চালু করেছে। ট্রাক চালকদের দ্রুত শুল্ক ছাড়পত্র ও সুরক্ষা নিশ্চিতে এই ব্যবস্থা কার্যকর ভূমিকা পালন করছে।",
    summaryEn: "Uttarbanga Sambad Siliguri bureau reports that BSF and Land Customs have operationalized a joint truck screening cell at Fulbari and Changrabandha land customs stations to streamline festive freight clearance and prevent border transit delays.",
    keyPointsBn: [
      "উত্তরবঙ্গের ফুলবাড়ি ও চ্যাংড়াবান্ধা বন্দর করিডোরে পণ্যবাহী ট্রাকের সুরক্ষা সেল চালু",
      "কাস্টমস ও বিএসএফের সমন্বয়ে সীমান্ত বাণিজ্য স্বাভাবিক ও দ্রুত নিশ্চিত করা",
      "আন্তর্জাতিক খাদ্যপণ্য ও কাঁচামাল পরিবহনে জট কমানোর বিশেষ উদ্যোগ"
    ],
    keyPointsEn: [
      "BSF and Customs launch joint truck scanning cell at Siliguri border ports",
      "Operational coordination expedites festive trade freight clearance and reduces logistics bottleneck",
      "Ensures security for cross-border commercial drivers moving between West Bengal and Bangladesh"
    ],
    category: "trade",
    categoryLabelBn: "সীমান্ত বাণিজ্য ও বন্দর",
    categoryLabelEn: "Cross-Border Trade",
    sentiment: "positive",
    sentimentReasonBn: "বাণিজ্যিক পরিবহনে গতি বৃদ্ধি ও নিরাপত্তা জোরদারের ইতিবাচক সংবাদ।",
    sentimentReasonEn: "Positive update on cross-border logistics efficiency and land customs cooperation.",
    source: {
      name: "Uttarbanga Sambad",
      bureau: "Siliguri",
      language: "Bengali",
      originalUrl: "https://uttarbangasambad.com/fulbari-changrabandha-joint-security-cell-20261001/",
      scannedAt: "2026-10-02T13:45:00Z"
    },
    publishedAt: "2026-10-01T10:30:00.000Z",
    readTimeBn: "৩ মিনিট",
    readTimeEn: "3 mins",
    imageUrl: "/images/default-geopolitical-map.jpg",
    mediaFormat: "rss",
    tags: ["শিলিগুড়ি", "উত্তরবঙ্গ সংবাদ", "সীমান্ত বাণিজ্য", "ফুলবাড়ি"]
  }
];

// Prepend breaking alerts
const alertsMatch = content.match(/export const BREAKING_NEWS_ALERTS: BreakingAlert\[\] = \[([\s\S]*?)\];/);
if (alertsMatch) {
  const alertsStr = JSON.stringify(newAlerts, null, 4).slice(1, -1);
  content = content.replace(
    'export const BREAKING_NEWS_ALERTS: BreakingAlert[] = [',
    `export const BREAKING_NEWS_ALERTS: BreakingAlert[] = [${alertsStr},`
  );
}

// Prepend new news items to SCANNED_NEWS_ITEMS
const itemsMatch = content.match(/export const SCANNED_NEWS_ITEMS: NewsItem\[\] = \[([\s\S]*?)\];/);
if (itemsMatch) {
  const itemsStr = JSON.stringify(newItems, null, 4).slice(1, -1);
  content = content.replace(
    'export const SCANNED_NEWS_ITEMS: NewsItem[] = [',
    `export const SCANNED_NEWS_ITEMS: NewsItem[] = [${itemsStr},`
  );
}

// Update SCANNER_STATS
content = content.replace(
  /"lastScannedAtBn": ".*?"/,
  `"lastScannedAtBn": "২ অক্টোবর, ২০২৬ এ ১:৫০ PM"`
);
content = content.replace(
  /"lastScannedAtEn": ".*?"/,
  `"lastScannedAtEn": "2 Oct 2026, 1:50 pm"`
);
content = content.replace(
  /"totalScanned24h": \d+/,
  `"totalScanned24h": 4338`
);
content = content.replace(
  /"bangladeshMatches": \d+/,
  `"bangladeshMatches": 1068`
);

fs.writeFileSync(newsFilePath, content, 'utf8');
console.log('✅ Successfully updated src/data/news-data.ts with 11 fresh Oct 02, 2026 items!');
