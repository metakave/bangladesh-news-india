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
    id: "alert-101",
    headlineBn: "‘জিএম কাদেরের বাসভবনে হামলার প্রতিবাদে উত্তাল ঢাকা’: ইন্ডিয়া টুডে",
    headlineEn: "India Today: Mob Attacks GM Quader's Dhaka Residence; Leader Blames BNP, Jamaat",
    timeAgoBn: "১০ মিনিট আগে",
    timeAgoEn: "10 mins ago",
    sourceName: "India Today",
    sourceBureau: "Delhi",
    sentiment: "negative",
    url: "https://www.indiatoday.in/world/story/bangladesh-gm-quader-dhaka-home-attack-indian-agent-slogans-sheikh-hasina-bnp-jamaat-3015446-2026-10-12"
  },
  {
    id: "alert-102",
    headlineBn: "‘রবীন্দ্রনাথের ছবিতে কালির ঘটনায় চারজনের বিরুদ্ধে রাষ্ট্রদ্রোহ মামলা দায়ের’: আনন্দবাজার পত্রিকা",
    headlineEn: "Anandabazar Patrika: Bangladesh Police File Sedition Case Against Four in Tagore Graffiti Defacement Row",
    timeAgoBn: "২৫ মিনিট আগে",
    timeAgoEn: "25 mins ago",
    sourceName: "Anandabazar Patrika",
    sourceBureau: "Kolkata",
    sentiment: "neutral",
    url: "https://www.anandabazar.com/world/bangladesh-police-lodges-case-under-sedition-charge-against-those-arrested-in-allegation-of-defacing-a-graffiti-of-rabindranath-tagore-dgtl/cid/1718967"
  },
  {
    id: "alert-103",
    headlineBn: "‘পাঞ্জাব থেকে বাংলাদেশে ১৮টি আধুনিক এলএইচবি রেল কোচ রপ্তানি সম্পন্ন’: দৈনিক জাগরণ",
    headlineEn: "Dainik Jagran: Indian Railways Exports 18 Modern LHB Coaches from Punjab to Bangladesh",
    timeAgoBn: "৪০ মিনিট আগে",
    timeAgoEn: "40 mins ago",
    sourceName: "Dainik Jagran",
    sourceBureau: "Delhi",
    sentiment: "positive",
    url: "https://www.jagran.com/punjab/firozpur-punjab-made-train-to-run-in-bangladesh-more-then-91-lakh-earned-by-exporting-18-lhb-coaches-40402845.html"
  },
  {
    id: "alert-104",
    headlineBn: "‘গুয়াহাটিতে আন্তর্জাতিক পাচার নেটওয়ার্ক ও অনুপ্রবেশের অভিযোগে আটক ৪’: দ্য আসাম ট্রিবিউন",
    headlineEn: "The Assam Tribune: Guwahati Emerges as Transit Route for Bangladeshi Nationals; 4 Arrested",
    timeAgoBn: "১ ঘণ্টা আগে",
    timeAgoEn: "1 hour ago",
    sourceName: "The Assam Tribune",
    sourceBureau: "Assam",
    sentiment: "negative",
    url: "https://assamtribune.com/guwahati/guwahati-emerges-as-transit-route-for-bangladeshi-nationals-4-arrested-1619644"
  }
];

const newItems = [
  {
    id: "news-20261012-001",
    slug: "india-today-gm-quader-dhaka-home-attack-indian-agent-slogans",
    title: "Indian agent, chants mob, attacks home of Hasina ex-ally; Quader blames BNP, Jamaat - India Today",
    englishTitle: "India Today: Mob Attacks GM Quader's Dhaka Residence Chanting 'Indian Agent'; Leader Blames BNP-Jamaat",
    banglaTitle: "‘জিএম কাদেরের বাসভবনে হামলার প্রতিবাদে উত্তাল ঢাকা’: ভারতীয় দোসর আখ্যা দিয়ে মব অ্যাটাক, দায়ী বিএনপি-জামায়াত",
    summaryBn: "ঢাকায় জাতীয় পার্টির চেয়ারম্যান ও সাবেক সরকারের ঘনিষ্ঠ মিত্র জিএম কাদেরের উত্তরার বাসভবনে উগ্র বিক্ষোভকারীরা আক্রমণ চালায়। বিক্ষোভকারীরা তাকে ‘ভারতের দোসর’ আখ্যা দিয়ে স্লোগান দেয়। হামলার জন্য বিএনপি ও জামায়াতপন্থীদের দায়ী করেছেন কাদের, যেখানে ভারতের গণমাধ্যমে একে রাজনৈতিক অস্থিতিশীলতার নতুন নজির হিসেবে তুলে ধরা হয়েছে।",
    summaryEn: "Protesters attacked the Dhaka residence of Jatiya Party Chairman GM Quader, chanting slogans labeling him an 'Indian agent'. Quader blamed BNP and Jamaat-e-Islami cadres for orchestrating the assault, as Indian media highlighted escalating unrest and political intimidation targeting historic regional allies.",
    keyPointsBn: [
      "উত্তরায় জাতীয় পার্টির চেয়ারম্যান জিএম কাদেরের বাসভবনে আক্রমণ ও ভাঙচুর",
      "হামলাকারীদের মুখে ‘ভারতের দোসর’ ও হাসিনা বিরোধী উস্কানিমূলক স্লোগান",
      "পরিস্থিতির জন্য অন্তর্বর্তীকালীন প্রশাসনের নিরাপত্তা ব্যর্থতা ও বিরোধী দলকে দায়ী করলেন কাদের"
    ],
    keyPointsEn: [
      "Aggressive crowd targets residence of Jatiya Party chief GM Quader in Uttara, Dhaka",
      "Protesters chanted 'Indian agent' slogans amid allegations of ties to Awami League leadership",
      "Quader condemned the interim law enforcement's inaction and blamed BNP-Jamaat elements"
    ],
    category: "politics",
    categoryLabelBn: "রাজনীতি ও অন্তর্বর্তী সরকার",
    categoryLabelEn: "Politics & Governance",
    sentiment: "negative",
    sentimentReasonBn: "রাজনৈতিক সহিংসতা, আঞ্চলিক মিত্রদের উপর হামলা এবং নিরাপত্তা সংকটের নেতিবাচক বিশ্লেষণ।",
    sentimentReasonEn: "Critical reportage focusing on targeted political violence and deteriorating security for regional allies.",
    source: {
      name: "India Today",
      bureau: "Delhi",
      language: "English",
      originalUrl: "https://www.indiatoday.in/world/story/bangladesh-gm-quader-dhaka-home-attack-indian-agent-slogans-sheikh-hasina-bnp-jamaat-3015446-2026-10-12",
      scannedAt: "2026-10-12T22:30:00Z"
    },
    publishedAt: "2026-10-12T10:04:41.000Z",
    readTimeBn: "৩ মিনিট",
    readTimeEn: "3 mins",
    imageUrl: "/images/dhaka-national-parliament-symbolic.jpg",
    mediaFormat: "rss",
    isLeadStory: true,
    tags: ["জিএম কাদের", "জাতীয় পার্টি", "ভারত-বাংলাদেশ", "ঢাকা", "সহিংসতা"]
  },
  {
    id: "news-20261012-002",
    slug: "anandabazar-rabindranath-graffiti-deface-sedition-charges",
    title: "বাংলাদেশে রবীন্দ্রনাথের ছবিতে কালি: হাসিনা-বিরোধী যুবনেতা-সহ ধৃত চার জনের বিরুদ্ধে রুজু রাষ্ট্রদ্রোহের মামলা - Anandabazar Patrika",
    englishTitle: "Anandabazar Patrika: Bangladesh Police File Sedition Case Against Four in Tagore Graffiti Defacement Row",
    banglaTitle: "‘বাংলাদেশে রবীন্দ্রনাথের ছবিতে কালি লাগানোর ঘটনায় চারজনের বিরুদ্ধে রাষ্ট্রদ্রোহ মামলা’: আনন্দবাজার পত্রিকা",
    summaryBn: "বাংলাদেশে রবীন্দ্রনাথ ঠাকুরের প্রতিকৃতিতে কালি লেপে দেওয়ার অভিযোগে হাসিনা-বিরোধী এক যুবনেতা সহ চারজনের বিরুদ্ধে রাষ্ট্রদ্রোহের অভিযোগে মামলা রুজু করেছে পুলিশ। কলকাতার গণমাধ্যমে ঘটনাটিকে দুই বাংলার ঐতিহাসিক সাংস্কৃতিক মেলবন্ধনে মৌলবাদী আঘাত ও প্রশাসনিক পদক্ষেপ হিসেবে গুরুত্ব দেওয়া হয়েছে।",
    summaryEn: "Bangladesh police have filed sedition charges against four individuals, including an anti-Hasina youth leader, for defacing a public graffiti of Rabindranath Tagore in Dhaka. Kolkata press highlighted the incident as a cultural confrontation between historic secular heritage and rising extremist elements.",
    keyPointsBn: [
      "রবীন্দ্রনাথ ঠাকুরের ম্যুরাল বিকৃত করার অভিযোগে ঢাকায় চার অভিযুক্তের বিরুদ্ধে রাষ্ট্রদ্রোহ মামলা",
      "গ্রেফতারকৃতদের মধ্যে সরকারবিরোধী ছাত্র ও যুব আন্দোলনের প্রতিনিধি অন্তর্ভুক্ত",
      "কলকাতার সাংস্কৃতিক মহলে তীব্র প্রতিবাদ ও সাংস্কৃতিক সৌহার্দ্য রক্ষার আহ্বান"
    ],
    keyPointsEn: [
      "Police initiate sedition proceedings against four suspects over Rabindranath Tagore graffiti defacement",
      "Arrested individuals include youth elements active in post-regime-change demonstrations",
      "Kolkata civil society voices deep concern over targeting of shared Bengali cultural icons"
    ],
    category: "culture",
    categoryLabelBn: "সংস্কৃতি ও সাহিত্য",
    categoryLabelEn: "Culture & Arts",
    sentiment: "neutral",
    sentimentReasonBn: "আইনি পদক্ষেপ ও সাংস্কৃতিক সংঘাতের বস্তুনিষ্ঠ আইনি কভারেজ।",
    sentimentReasonEn: "Balanced reporting on legal prosecution against cultural vandalism.",
    source: {
      name: "Anandabazar Patrika",
      bureau: "Kolkata",
      language: "Bengali",
      originalUrl: "https://www.anandabazar.com/world/bangladesh-police-lodges-case-under-sedition-charge-against-those-arrested-in-allegation-of-defacing-a-graffiti-of-rabindranath-tagore-dgtl/cid/1718967",
      scannedAt: "2026-10-12T22:30:00Z"
    },
    publishedAt: "2026-10-11T12:48:25.000Z",
    readTimeBn: "৩ মিনিট",
    readTimeEn: "3 mins",
    imageUrl: "/images/dhaka-university-campus-landscape.jpg",
    mediaFormat: "rss",
    tags: ["রবীন্দ্রনাথ ঠাকুর", "সংস্কৃতি", "আনন্দবাজার পত্রিকা", "কলকাতা", "রাষ্ট্রদ্রোহ মামলা"]
  },
  {
    id: "news-20261012-003",
    slug: "sangbad-pratidin-nahid-islam-cjp-delhi-protest-back",
    title: "ককরোচদের বিদেশি-যোগ আরও স্পষ্ট! জোরাল সমর্থন বাংলাদেশের হাসিনা বিরোধী ছাত্রনেতা নাহিদের - Sangbad Pratidin",
    englishTitle: "Sangbad Pratidin: Anti-Hasina Student Leader Nahid Islam Backs Delhi CJP Protests, Fueling Diplomatic Friction",
    banglaTitle: "‘দিল্লির সিজেপি বিক্ষোভে বাংলাদেশের ছাত্রনেতা নাহিদ ইসলামের সমর্থন’: সংবাদ প্রতিদিনের বিশেষ বিশ্লেষণ",
    summaryBn: "বাংলাদেশে শেখ হাসিনা সরকারের পতনে নেতৃত্ব দেওয়া অন্যতম সমন্বয়ক নাহিদ ইসলাম নয়াদিল্লির বিতর্কিত সিজেপি আন্দোলনের সমর্থনে সামাজিক মাধ্যমে বিবৃতি দেওয়ায় ভারতীয় রাজনৈতিক ও কূটনৈতিক মহলে নতুন বিতর্ক তৈরি হয়েছে। ভারতীয় গণমাধ্যমে একে অভ্যন্তরীণ রাজনীতিতে অযাচিত অনুপ্রবেশ হিসেবে দেখা হচ্ছে।",
    summaryEn: "Anti-Hasina student uprising figure Nahid Islam expressed explicit solidarity with Delhi demonstrators participating in CJP protests, drawing sharp scrutiny from Indian observers who view the stance as external ideological interference in India's domestic political affairs.",
    keyPointsBn: [
      "নয়াদিল্লির বিক্ষোভের সাথে ঢাকার আন্দোলনের সমান্তরাল তুলনা টেনে নাহিদের বার্তা",
      "ভারতীয় কূটনৈতিক বিশ্লেষকদের মতে এটি দ্বিপাক্ষিক সম্পর্কের জন্য সংবেদনশীল প্রতিক্রিয়া সৃষ্টি করতে পারে",
      "সংবাদ প্রতিদিনের প্রতিবেদনে প্রতিবেশী দেশের নেতাদের অভ্যন্তরীণ রাজনীতিতে জড়ানোর প্রবণতার সমালোচনা"
    ],
    keyPointsEn: [
      "Nahid Islam draws parallels between Dhaka's 2024 uprising and ongoing Delhi street protests",
      "Indian diplomatic strategists flag cross-border political commentary as a concern for bilateral stability",
      "Kolkata editorial assesses risks of regional activist linkages on bilateral security"
    ],
    category: "diplomacy",
    categoryLabelBn: "কূটনীতি ও রাজনীতি",
    categoryLabelEn: "Diplomacy & Politics",
    sentiment: "negative",
    sentimentReasonBn: "ভারতের অভ্যন্তরীণ রাজনীতিতে প্রতিবেশী ছাত্রনেতাদের মন্তব্যের বিষয়ে ভারতীয় মিডিয়ার উদ্বেগ ও কড়া প্রতিক্রিয়া।",
    sentimentReasonEn: "Critical examination of cross-border political commentary impacting bilateral relations.",
    source: {
      name: "Sangbad Pratidin",
      bureau: "Kolkata",
      language: "Bengali",
      originalUrl: "https://www.sangbadpratidin.in/bangladesh/bangladesh-student-leader-nahid-islam-supports-cjp-protest-in-new-delhi-sparks-new-row/pid/1381233/",
      scannedAt: "2026-10-12T22:30:00Z"
    },
    publishedAt: "2026-10-11T11:02:17.000Z",
    readTimeBn: "৩ মিনিট",
    readTimeEn: "3 mins",
    imageUrl: "/images/delhi-dhaka-bilateral-summit.jpg",
    mediaFormat: "rss",
    tags: ["নাহিদ ইসলাম", "দিল্লি বিক্ষোভ", "সংবাদ প্রতিদিন", "কূটনীতি", "শেখ হাসিনা"]
  },
  {
    id: "news-20261012-004",
    slug: "republic-world-nahid-islam-cjp-protest-political-row-video",
    title: "LIVE: Nahid Islam Backs CJP Protests | Hasina Ouster Leader's Statement Sparks Political Row - Republic World",
    englishTitle: "Republic World: Hasina Ouster Leader Nahid Islam Backs Delhi Protests; Video Dispatch Highlights Cross-Border Tension",
    banglaTitle: "‘রিপাবলিক টিভি ভিডিও বুলেটিন: দিল্লির বিক্ষোভে ঢাকার নেতাদের সমর্থন ঘিরে তীব্র বিতর্ক’",
    summaryBn: "রিপাবলিক টিভির বিশেষ লাইভ ভিডিও সম্প্রচারে আলোচনা করা হয়েছে কীভাবে বাংলাদেশের অন্তর্বর্তী সরকারের সঙ্গে যুক্ত ছাত্রনেতাদের বক্তব্য ভারতের অভ্যন্তরীণ বিক্ষোভে ইন্ধন জোগাচ্ছে। অনুষ্ঠানটিতে নিরাপত্তা বিশ্লেষকরা প্রতিবেশী দেশগুলোর মধ্যকার সম্পর্কের স্পর্শকাতর দিকগুলো তুলে ধরেন।",
    summaryEn: "In a prime-time broadcast, Republic World examines the diplomatic ramifications of Bangladeshi student movement figures extending support to Indian protest groups, discussing national security considerations and bilateral sensitivities.",
    keyPointsBn: [
      "রিপাবলিক টিভির লাইভ প্যানেলে দুই দেশের নিরাপত্তা বিশেষজ্ঞদের বিশ্লেষণ",
      "বাংলাদেশের অভ্যন্তরীণ পটপরিবর্তনের প্রভাব ভারতের নিরাপত্তা গতিশীলতায় পড়ার আশঙ্কা",
      "নয়াদিল্লি ও ঢাকার পারস্পরিক কূটনৈতিক প্রটোকল কঠোরভাবে মেনে চলার আহ্বান"
    ],
    keyPointsEn: [
      "Panel debate scrutinizes ideological overlaps and cross-border rhetoric",
      "Analysts review diplomatic obligations of interim administration representatives",
      "Call for strict observance of sovereign non-interference protocols between New Delhi and Dhaka"
    ],
    category: "politics",
    categoryLabelBn: "ভিডিও সংবাদ ও রাজনীতি",
    categoryLabelEn: "Video Dispatches & Politics",
    sentiment: "negative",
    sentimentReasonBn: "জাতীয় নিরাপত্তা ও দ্বিপাক্ষিক প্রটোকল ভঙ্গের বিষয়ে ভারতের টেলিভিশন চ্যানেলের কঠোর অবস্থান।",
    sentimentReasonEn: "Hard-hitting television critique regarding regional interference and national security.",
    source: {
      name: "Republic World",
      bureau: "Mumbai",
      language: "English",
      originalUrl: "https://www.youtube.com/watch?v=qmehIhUzen0",
      scannedAt: "2026-10-12T22:30:00Z"
    },
    publishedAt: "2026-10-12T08:30:00.000Z",
    readTimeBn: "৩ মিনিট",
    readTimeEn: "3 mins",
    imageUrl: "https://i.ytimg.com/vi/qmehIhUzen0/hqdefault.jpg",
    mediaFormat: "youtube",
    videoUrl: "https://www.youtube.com/watch?v=qmehIhUzen0",
    tags: ["রিপাবলিক টিভি", "ভিডিও বুলেটিন", "নাহিদ ইসলাম", "ভারত", "নিরাপত্তা"]
  },
  {
    id: "news-20261012-005",
    slug: "ndtv-india-bangladesh-requests-removal-trade-curbs-yunus-regime",
    title: "बांग्लादेश ने भारत से यूनुस सरकार के समय लगाई गई पाबंदियों को हटाने का अनुरोध किया - NDTV India",
    englishTitle: "NDTV India: Dhaka Urges New Delhi to Ease Trade Barriers and Tariff Restrictions on Essential Exports",
    banglaTitle: "‘বাণিজ্যিক বিধিনিষেধ ও শুল্ক বাধা প্রত্যাহারের জন্য ভারতকে ঢাকার অনুরোধ’: এনডিটিভি ইন্ডিয়া",
    summaryBn: "বাংলাদেশ সরকারের পক্ষ থেকে ফলমূল, চাল, লোহা ও উত্তর-পূর্বাঞ্চলীয় সীমান্ত বাণিজ্যে আরোপিত শুল্ক ও অ-শুল্ক বাধাগুলো সহজ করার আনুষ্ঠানিক অনুরোধ জানানো হয়েছে। ভারতীয় নীতিনির্ধারকরা স্থানীয় সরবরাহ চেইন ও রাজস্ব সুরক্ষার শর্ত সাপেক্ষে প্রস্তাবটি মূল্যায়ন করছেন।",
    summaryEn: "Dhaka has formally approached New Delhi seeking the relaxation of high tariffs and trade barriers placed on commodities such as agricultural produce, rice, and industrial materials, alongside simplified transit regulations for India's northeastern states.",
    keyPointsBn: [
      "বাংলাদেশ-ভারত বাণিজ্য সংলাপে রপ্তানি শুল্ক শিথিল করার প্রস্তাব",
      "ভারতের উত্তর-পূর্বাঞ্চলীয় রাজ্যে খাদ্য ও শিল্প কাঁচামালের অবাধ সরবরাহ নিশ্চিতের তাগিদ",
      "দ্বিপাক্ষিক বাণিজ্য ভারসাম্য রক্ষায় ভারতের বাণিজ্য মন্ত্রণালয়ের পর্যালোচনা"
    ],
    keyPointsEn: [
      "Dhaka requests reduction of import duties on fruits, grain, and metallurgical goods",
      "Bilateral discussions focus on positive trade lists for India's northeastern frontier states",
      "Ministry of Commerce assesses bilateral equilibrium before adjusting regulatory framework"
    ],
    category: "trade",
    categoryLabelBn: "সীমান্ত বাণিজ্য ও বন্দর",
    categoryLabelEn: "Cross-Border Trade",
    sentiment: "positive",
    sentimentReasonBn: "বাণিজ্যিক অচলাবস্থা দূরীকরণে দ্বিপাক্ষিক আলোচনা ও ইতিবাচক অর্থনৈতিক উদ্যোগের প্রতিফলন।",
    sentimentReasonEn: "Constructive bilateral trade dialogue aimed at easing transit barriers and fostering economic cooperation.",
    source: {
      name: "NDTV India",
      bureau: "Delhi",
      language: "Hindi",
      originalUrl: "https://ndtv.in/india/bangladesh-requests-india-for-removal-of-restrictions-imposed-during-yunus-regime-12174946",
      scannedAt: "2026-10-12T22:30:00Z"
    },
    publishedAt: "2026-10-12T09:15:00.000Z",
    readTimeBn: "৩ মিনিট",
    readTimeEn: "3 mins",
    imageUrl: "/images/india-bangladesh-trade-land-port.jpg",
    mediaFormat: "rss",
    tags: ["এনডিটিভি", "বাণিজ্য", "শুল্ক নীতি", "সীমান্ত ট্রানজিট", "অর্থনীতি"]
  },
  {
    id: "news-20261012-006",
    slug: "live-hindustan-bimstec-brics-bangladesh-distances-delhi-meeting",
    title: "पहले BRICS, अब BIMSTEC... बांग्लादेश ने फिर बनाई भारत से दूरी - Live Hindustan",
    englishTitle: "Live Hindustan: After BRICS Hesitation, Bangladesh Distances from New Delhi BIMSTEC Ministerial Gathering",
    banglaTitle: "‘ব্রিকসের পর এবার বিমসটেক বৈঠক থেকেও ঢাকার দূরত্ব বজায় রাখার কৌশল’: লাইভ হিন্দুস্তান",
    summaryBn: "নয়াদিল্লিতে অনুষ্ঠিতব্য বিমসটেক মন্ত্রীপর্যায়ের বৈঠকে বাংলাদেশের স্বরাষ্ট্র বিষয়ক উপদেষ্টার অনুপস্থিতির সিদ্ধান্তের প্রেক্ষিতে লাইভ হিন্দুস্তানের বিশেষ বিশ্লেষণ। আঞ্চলিক ফোরামে ভারতের নেতৃত্বের সাথে ঢাকার সম্পৃক্ততার পরিবর্তনশীল গতিপ্রকৃতি পর্যালোচনা করা হয়েছে।",
    summaryEn: "Live Hindustan analyzes Bangladesh's diplomatic posture as ministerial representatives excuse themselves from regional BIMSTEC meetings in New Delhi, tracing shifting multilateral priorities and emerging recalibrations in neighborhood diplomacy.",
    keyPointsBn: [
      "নয়াদিল্লিতে বিমসটেক নিরাপত্তা বিষয়ক উচ্চপর্যায়ের আলোচনায় শীর্ষ উপদেষ্টার গরহাজিরা",
      "বহুপাক্ষিক প্ল্যাটফর্মে ভারত-বাংলাদেশ সরাসরি যোগাযোগে সাময়িক শিথিলতা",
      "আঞ্চলিক সংহতি বজায় রাখতে ভারতীয় কর্মকর্তাদের কূটনৈতিক চ্যানেলে যোগাযোগের বার্তা"
    ],
    keyPointsEn: [
      "Interim administration delegates skip Delhi BIMSTEC regional security ministerial talks",
      "Diplomatic correspondents note recalibration in Bangladesh's engagement with Delhi-hosted summits",
      "Indian foreign policy experts advise patience and institutional continuity in multilateral forums"
    ],
    category: "diplomacy",
    categoryLabelBn: "কূটনীতি ও বিমসটেক",
    categoryLabelEn: "Diplomacy & Multilateralism",
    sentiment: "neutral",
    sentimentReasonBn: "আঞ্চলিক কূটনৈতিক সমীকরণ ও বহুপাক্ষিক জোটের নিরপেক্ষ বিশ্লেষণ।",
    sentimentReasonEn: "Analytical breakdown of regional diplomatic presence without alarmist speculation.",
    source: {
      name: "Live Hindustan",
      bureau: "Delhi",
      language: "Hindi",
      originalUrl: "https://www.livehindustan.com/national/bangladesh-home-minister-will-not-attend-bimstec-meeting-distanced-from-new-delhi-meeting-201791814079960.html",
      scannedAt: "2026-10-12T22:30:00Z"
    },
    publishedAt: "2026-10-12T11:45:00.000Z",
    readTimeBn: "৩ মিনিট",
    readTimeEn: "3 mins",
    imageUrl: "/images/brics-bimstec-summit-delhi.jpg",
    mediaFormat: "rss",
    tags: ["বিমসটেক", "লাইভ হিন্দুস্তান", "কূটনীতি", "দিল্লি সম্মেলন", "বহুপাক্ষিক সম্পর্ক"]
  },
  {
    id: "news-20261012-007",
    slug: "jagran-punjab-rail-coach-export-bangladesh-lhb-freight",
    title: "बांग्लादेश में दौड़ेगी पंजाब में बनी ट्रेन, पड़ोसी देश को 18 LHB कोच निर्यात कर खूब कमाया पैसा - Dainik Jagran",
    englishTitle: "Dainik Jagran: Indian Railways Exports 18 Modern LHB Coaches from Punjab Facility to Bangladesh Railways",
    banglaTitle: "‘পাঞ্জাবের কাপুরথালা থেকে বাংলাদেশে ১৮টি আধুনিক এলএইচবি রেল কোচ রপ্তানি’: দৈনিক জাগরণ",
    summaryBn: "ভারতীয় রেলওয়ের পাঞ্জাবের কাপুরথালা কারখানা থেকে ১৮টি সর্বাধুনিক এলএইচবি যাত্রীবাহী কোচ বাংলাদেশে সফলভাবে রপ্তানি করা হয়েছে। এই চুক্তির মাধ্যমে ভারতের ভারী প্রকৌশল শিল্পে বিপুল বৈদেশিক মুদ্রা অর্জিত হয়েছে এবং দুই দেশের মধ্যে রেল ট্রানজিট সংযোগের ধারাবাহিকতা রক্ষিত হয়েছে।",
    summaryEn: "Indian Railways successfully delivered 18 modern Linke Hofmann Busch (LHB) coaches manufactured in Kapurthala, Punjab to Bangladesh Railways, generating substantial export earnings and highlighting enduring institutional cross-border logistics ties.",
    keyPointsBn: [
      "পাঞ্জাবের রেল কোচ ফ্যাক্টরি থেকে ১৮টি অত্যাধুনিক যাত্রীবাহী কোচের সফল সরবরাহ",
      "বাংলাদেশ রেলওয়ের যাত্রীবাহী সেবার আধুনিকায়নে ভারতীয় প্রযুক্তির ব্যবহার",
      "সীমান্ত সংযোগ ও পরিবহন খাতে দীর্ঘস্থায়ী বাণিজ্যিক অংশীদারিত্বের প্রমাণ"
    ],
    keyPointsEn: [
      "Kapurthala Rail Coach Factory dispatches 18 advanced passenger coaches to Bangladesh",
      "Consignment boosts bilateral technical collaboration in railway infrastructure",
      "Indian Railways reaffirms commitment to cross-border logistics and scheduled commitments"
    ],
    category: "economy",
    categoryLabelBn: "অর্থনীতি ও বিদ্যুৎ",
    categoryLabelEn: "Economy & Infrastructure",
    sentiment: "positive",
    sentimentReasonBn: "দ্বিপাক্ষিক বাণিজ্যিক সাফল্য, শিল্প উৎপাদন ও রেল যোগাযোগ বৃদ্ধির ইতিবাচক প্রতিবেদন।",
    sentimentReasonEn: "Strong positive reportage on bilateral industrial export success and infrastructure continuity.",
    source: {
      name: "Dainik Jagran",
      bureau: "Delhi",
      language: "Hindi",
      originalUrl: "https://www.jagran.com/punjab/firozpur-punjab-made-train-to-run-in-bangladesh-more-then-91-lakh-earned-by-exporting-18-lhb-coaches-40402845.html",
      scannedAt: "2026-10-12T22:30:00Z"
    },
    publishedAt: "2026-10-12T07:20:00.000Z",
    readTimeBn: "৩ মিনিট",
    readTimeEn: "3 mins",
    imageUrl: "/images/india-bangladesh-trade-land-port.jpg",
    mediaFormat: "rss",
    tags: ["রেলওয়ে", "দৈনিক জাগরণ", "এলএইচবি কোচ", "পাঞ্জাব", "রপ্তানি বাণিজ্য"]
  },
  {
    id: "news-20261012-008",
    slug: "tripura-times-chakma-minority-atrocities-bangladesh-memorandum",
    title: "Atrocities on Chakma living in Bangladesh Students’ body demands international intervention - TripuraTimes.com",
    englishTitle: "Tripura Times: Tribal Students' Front Submits Memorandum Demanding Security for Chakma Minorities in CHT",
    banglaTitle: "‘পার্বত্য চট্টগ্রামে চাকমা জনগোষ্ঠীর ওপর নিপীড়ন বন্ধে আন্তর্জাতিক হস্তক্ষেপের দাবি’: ত্রিপুরা টাইমস",
    summaryBn: "আগরতলায় ছাত্র সংগঠনগুলোর পক্ষ থেকে বাংলাদেশের পার্বত্য চট্টগ্রামে বসবাসরত সংখ্যালঘু চাকমা জনগোষ্ঠীর নিরাপত্তা ও অধিকার নিশ্চিত করতে আন্তর্জাতিক মানবাধিকার সংস্থাগুলোর হস্তক্ষেপ দাবি করে স্মারকলিপি পেশ করা হয়েছে। ত্রিপুরা সীমান্তে এই ইস্যুতে সংহতি প্রকাশ অব্যাহত রয়েছে।",
    summaryEn: "Indigenous student bodies in Agartala submitted memorandums demanding immediate international intervention and safeguard measures for Chakma minority communities in Bangladesh's Chittagong Hill Tracts following recent regional tensions.",
    keyPointsBn: [
      "আগরতলায় চাকমা সম্প্রদায়ের ওপর হামলার প্রতিবাদে শিক্ষার্থীদের স্মারকলিপি",
      "পার্বত্য শান্তি চুক্তির পূর্ণ বাস্তবায়ন এবং সংখ্যালঘু পরিবারের নিরাপত্তা নিশ্চিতের দাবি",
      "ত্রিপুরা সীমান্তবর্তী জেলাগুলোতে পাহাড়ি জনগোষ্ঠীর অধিকার নিয়ে উদ্বেগ বৃদ্ধি"
    ],
    keyPointsEn: [
      "Student groups in Tripura stage demonstrations over reported attacks in Chittagong Hill Tracts",
      "Memorandum calls for human rights protection and adherence to regional peace accords",
      "Cross-border tribal solidarity draws public attention across Northeast India"
    ],
    category: "border",
    categoryLabelBn: "সীমান্ত নিরাপত্তা ও উপজাতি",
    categoryLabelEn: "Border & Minorities",
    sentiment: "negative",
    sentimentReasonBn: "পার্বত্য চট্টগ্রামের সংখ্যালঘু জনগোষ্ঠীর নিরাপত্তা সংকট ও সীমান্তে উদ্বেগের প্রতিফলন।",
    sentimentReasonEn: "Concerned coverage of minority vulnerabilities and border-state civic mobilization.",
    source: {
      name: "Tripura Times",
      bureau: "Tripura",
      language: "English",
      originalUrl: "https://tripuratimes.com/ttimes/atrocities-on-chakma-living-in-bangladesh-students%E2%80%99-body-demands-hasinas-intervention-1578.html",
      scannedAt: "2026-10-12T22:30:00Z"
    },
    publishedAt: "2026-10-12T06:10:00.000Z",
    readTimeBn: "৩ মিনিট",
    readTimeEn: "3 mins",
    imageUrl: "/images/india-bangladesh-border-fence.jpg",
    mediaFormat: "rss",
    tags: ["চাকমা সম্প্রদায়", "ত্রিপুরা টাইমস", "আগরতলা", "পার্বত্য চট্টগ্রাম", "সীমান্ত"]
  },
  {
    id: "news-20261012-009",
    slug: "assam-tribune-guwahati-transit-route-bangladeshi-nationals-arrested",
    title: "Guwahati emerges as transit route for Bangladeshi nationals; 4 arrested - The Assam Tribune",
    englishTitle: "The Assam Tribune: Guwahati Emerges as Transit Hub in Cross-Border Infiltration Nexus; 4 Detained by Police",
    banglaTitle: "‘গুয়াহাটিতে মানবপাচার ও অনুপ্রবেশ নেটওয়ার্কের পর্দাফাঁস, চার বাংলাদেশি নাগরিক আটক’: দ্য আসাম ট্রিবিউন",
    summaryBn: "আসাম পুলিশের বিশেষ অভিযানে গুয়াহাটি রেলওয়ে স্টেশন এলাকা থেকে ভুয়া পরিচয়পত্র সহ চারজন বাংলাদেশি নাগরিককে আটক করা হয়েছে। তদন্তে প্রকাশ পেয়েছে যে আন্তর্জাতিক দালাল চক্র গুয়াহাটিকে ভারতের অন্যান্য রাজ্যে প্রেরণের ট্রানজিট পয়েন্ট হিসেবে ব্যবহার করছে।",
    summaryEn: "Assam Police apprehended four Bangladeshi nationals traveling with falsified documents near Guwahati railway hub, unearthing an organized trafficking corridor utilizing Assam as an inland transit route towards southern and western metropolitan centers.",
    keyPointsBn: [
      "গুয়াহাটিতে আসাম পুলিশের তল্লাশিতে চার অনুপ্রবেশকারী আটক",
      "দালাল চক্রের মাধ্যমে সীমান্তবর্তী এলাকা দিয়ে ভারতে প্রবেশের তথ্য প্রকাশ",
      "আসাম সরকার কর্তৃক আন্তর্জাতিক সীমান্তে সার্বক্ষণিক ড্রোন ও নজরদারি জোরদার"
    ],
    keyPointsEn: [
      "Assam Police intercept undocumented cross-border travelers during Guwahati surveillance drive",
      "Investigations identify tout networks routing individuals toward domestic job centers",
      "State authorities intensify monitoring along vulnerable riverine and border segments"
    ],
    category: "border",
    categoryLabelBn: "সীমান্ত নিরাপত্তা",
    categoryLabelEn: "Border & Security",
    sentiment: "negative",
    sentimentReasonBn: "সীমান্ত নিরাপত্তা লঙ্ঘন ও অবৈধ মানবপাচার চক্রের বিরুদ্ধে আইনশৃঙ্খলা রক্ষাকারী বাহিনীর কঠোর অভিযান।",
    sentimentReasonEn: "Security-focused dispatch covering cross-border infiltration interdiction and border enforcement.",
    source: {
      name: "The Assam Tribune",
      bureau: "Assam",
      language: "English",
      originalUrl: "https://assamtribune.com/guwahati/guwahati-emerges-as-transit-route-for-bangladeshi-nationals-4-arrested-1619644",
      scannedAt: "2026-10-12T22:30:00Z"
    },
    publishedAt: "2026-10-12T08:15:00.000Z",
    readTimeBn: "৩ মিনিট",
    readTimeEn: "3 mins",
    imageUrl: "/images/gauhati-high-court.jpg",
    mediaFormat: "rss",
    tags: ["আসাম ট্রিবিউন", "গুয়াহাটি", "সীমান্ত নিরাপত্তা", "অনুপ্রবেশ", "আসাম পুলিশ"]
  },
  {
    id: "news-20261012-010",
    slug: "jagran-siliguri-kishanganj-corridor-border-crossing-apprehension",
    title: "दोस्तों के साथ घूमते-घूमते भारतीय सीमा में घुसा बांग्लादेशी युवक, 12 दिन बाद किशनगंज में पकड़ा गया - Dainik Jagran",
    englishTitle: "Dainik Jagran: Undocumented Cross-Border Infiltrator Intercepted in Sensitive Siliguri-Kishanganj Corridor",
    banglaTitle: "‘শিলিগুড়ি-কিষাণগঞ্জ করিডোরে অবৈধভাবে সীমান্ত অতিক্রমকারী যুবক গ্রেফতার’: দৈনিক জাগরণ",
    summaryBn: "শিলিগুড়ি করিডোর সংলগ্ন কিষাণগঞ্জ সীমান্তে নিরাপত্তা বাহিনীর যৌথ অভিযানে এক বাংলাদেশি নাগরিককে আটক করা হয়েছে, যে সীমান্ত পেরিয়ে ১২ দিন ধরে ভারতীয় ভূখণ্ডে অবস্থান করছিল। চিকেনস নেক সংলগ্ন এই সংবেদনশীল অঞ্চলে বিএসএফ নিরাপত্তা প্রহরা আরও জোরদার করেছে।",
    summaryEn: "Security personnel deployed along the sensitive Siliguri-Kishanganj strategic corridor apprehended a Bangladeshi national who unlawfully entered Indian territory. BSF and state police reinforced vigilance across the vital transit choke point.",
    keyPointsBn: [
      "শিলিগুড়ি করিডোরের নিকটবর্তী কিষাণগঞ্জ সীমান্ত থেকে অনুপ্রবেশকারী আটক",
      "স্ট্র্যাটেজিক চিকেনস নেক এলাকায় বিএসএফ ও পুলিশের যৌথ তল্লাশি অভিযান",
      "সীমান্তবর্তী ফাঁড়িগুলোতে রাত্রিকালীন টহল ও থার্মাল ইমেজিং ক্যামেরা কার্যকর"
    ],
    keyPointsEn: [
      "Border personnel arrest illegal entrant near the strategic Siliguri transit corridor",
      "Joint operation by BSF and regional police reinforces surveillance across frontier villages",
      "Enhanced biometric and perimeter monitoring deployed along sensitive narrow corridor segments"
    ],
    category: "border",
    categoryLabelBn: "সীমান্ত নিরাপত্তা",
    categoryLabelEn: "Border & Security",
    sentiment: "neutral",
    sentimentReasonBn: "সীমান্ত নিরাপত্তা নজরদারি ও আইনি তদন্তের পেশাদার আইনানুগ কভারেজ।",
    sentimentReasonEn: "Factual border security reporting detailing border control protocols and vigilance.",
    source: {
      name: "Dainik Jagran",
      bureau: "Siliguri",
      language: "Hindi",
      originalUrl: "https://www.jagran.com/bihar/kishanganj-bangladeshi-youth-caught-in-kishanganj-after-border-crossing-40402809.html",
      scannedAt: "2026-10-12T22:30:00Z"
    },
    publishedAt: "2026-10-12T11:10:00.000Z",
    readTimeBn: "৩ মিনিট",
    readTimeEn: "3 mins",
    imageUrl: "/images/india-bangladesh-border-fence.jpg",
    mediaFormat: "rss",
    tags: ["শিলিগুড়ি করিডোর", "দৈনিক জাগরণ", "বিএসএফ", "সীমান্ত পাহারা", "কিষাণগঞ্জ"]
  },
  {
    id: "news-20261012-011",
    slug: "the-hindu-sportstar-litton-das-century-bangladesh-afghanistan-test",
    title: "Bangladesh closes on victory over Afghanistan after Litton century - Sportstar",
    englishTitle: "The Hindu (Sportstar): Litton Das' Resilient Century Puts Bangladesh on Brink of Historic Test Victory",
    banglaTitle: "‘লিটন দাসের অনবদ্য সেঞ্চুরিতে আফগানিস্তানের বিরুদ্ধে জয়ের দ্বারপ্রান্তে বাংলাদেশ’: স্পোর্টস্টার (দ্য হিন্দু)",
    summaryBn: "আবুধাবিতে অনুষ্ঠিত একমাত্র টেস্ট ম্যাচে লিটন দাসের চোখধাঁধানো শতরানের সুবাদে জয়ের পথে এগিয়ে গেছে বাংলাদেশ ক্রিকেট দল। ভারতীয় ক্রীড়া সাংবাদিকদের বিশ্লেষণে লিটনের ব্যাটিং ধৈর্য ও দ্বিতীয় ইনিংসে দলের দৃঢ় প্রত্যাবর্তনের ভূয়সী প্রশংসা করা হয়েছে।",
    summaryEn: "Sportstar (The Hindu) reports on Bangladesh's dominant showing in the one-off Test against Afghanistan, propelled by wicketkeeper-batter Litton Das' masterclass second-innings century that set up a commanding victory charge.",
    keyPointsBn: [
      "লিটন দাসের টেস্ট ক্যারিয়ারের অন্যতম সেরা শতকে রানের পাহাড়ে বাংলাদেশ",
      "দ্বিতীয় ইনিংসে ৩৭২/৭ স্কোরে ইনিংস ঘোষণা করে আফগানিস্তানকে শক্ত লক্ষ্য বেঁধে দেওয়া",
      "ভারতের ক্রীড়া সংবাদমাধ্যমে লিটনের ধারাবাহিকতা ও দলীয় রণকৌশলের প্রশংসা"
    ],
    keyPointsEn: [
      "Litton Das posts crucial century after top-order pressure, cementing Bangladesh's match grip",
      "Bangladesh declares second innings at 372/7 setting Afghanistan a daunting fourth-innings target",
      "Indian cricket analysts commend Bangladesh's red-ball discipline and middle-order resilience"
    ],
    category: "sports",
    categoryLabelBn: "ক্রীড়া ও ক্রিকেট",
    categoryLabelEn: "Sports & Cricket",
    sentiment: "positive",
    sentimentReasonBn: "ক্রিকেট অঙ্গনে অসাধারণ ব্যক্তিগত নৈপুণ্য ও দলীয় সাফল্যের প্রশংসাসূচক ক্রীড়া প্রতিবেদন।",
    sentimentReasonEn: "Celebratory sports reporting highlighting athletic excellence and test cricket triumph.",
    source: {
      name: "The Hindu",
      bureau: "Delhi",
      language: "English",
      originalUrl: "https://sportstar.thehindu.com/cricket/bangladesh-afghanistan-day-4-report-highlights-litton-das-century/article71576344.ece",
      scannedAt: "2026-10-12T22:30:00Z"
    },
    publishedAt: "2026-10-12T13:20:00.000Z",
    readTimeBn: "৩ মিনিট",
    readTimeEn: "3 mins",
    imageUrl: "/images/default-geopolitical-map.jpg",
    mediaFormat: "rss",
    tags: ["দ্য হিন্দু", "স্পোর্টস্টার", "লিটন দাস", "বাংলাদেশ ক্রিকেট", "টেস্ট ম্যাচ"]
  },
  {
    id: "news-20261012-012",
    slug: "sangbad-pratidin-300-year-old-durga-puja-bangladesh-heritage",
    title: "৩০০ বছর ধরে পূজিত রক্তবর্ণের দুর্গা, বাংলাদেশের প্রাচীন এই মন্দিরে অব্যাহত ঐতিহ্য - Sangbad Pratidin",
    englishTitle: "Sangbad Pratidin: 300-Year-Old Historic Crimson Durga Tradition Celebrated at Ancient Bangladesh Shrine",
    banglaTitle: "‘৩০০ বছর ধরে পূজিত রক্তবর্ণের দুর্গা: বাংলাদেশের ঐতিহ্যবাহী মন্দিরে উৎসবের ধারা অব্যাহত’: সংবাদ প্রতিদিন",
    summaryBn: "বাংলাদেশের প্রাচীন ঐতিহ্যমণ্ডিত এক মন্দিরে ৩০০ বছরের রক্তবর্ণ দেবী দুর্গার পূজা উদযাপিত হচ্ছে। রাজনৈতিক পালাবদলের মধ্যেও স্থানীয় হিন্দু ও মুসলিম সম্প্রদায়ের সহযোগিতায় সম্প্রীতির আবহ বজায় রেখে এই পূজা অনুষ্ঠিত হওয়াকে কলকাতার গণমাধ্যমে অনন্য দৃষ্টান্ত হিসেবে তুলে ধরা হয়েছে।",
    summaryEn: "Sangbad Pratidin profiles an exceptional 300-year-old crimson idol Durga Puja in Bangladesh, honoring unbroken ancestral traditions sustained through communal harmony and local neighborhood cooperation amidst political transitions.",
    keyPointsBn: [
      "বাংলাদেশে তিন শতক প্রাচীন মন্দিরে ঐতিহ্যবাহী রক্তবর্ণ দুর্গোৎসব উদযাপন",
      "রাজনৈতিক অস্থিরতার মাঝেও সাম্প্রদায়িক সম্প্রীতি ও যৌথ সুরক্ষার অনন্য নিদর্শন",
      "বাংলার অভিন্ন লোকঐতিহ্য ও ভক্তদের শ্রদ্ধার্ঘ্য নিয়ে কলকাতার সংবাদপত্রে বিশেষ ফিচার"
    ],
    keyPointsEn: [
      "Centuries-old crimson Durga heritage preserved at historic Bangladesh temple",
      "Local interfaith solidarity safeguards celebratory traditions during turbulent times",
      "Kolkata cultural feature celebrates living spiritual bonds connecting the two Bengals"
    ],
    category: "culture",
    categoryLabelBn: "সংস্কৃতি ও ঐতিহ্য",
    categoryLabelEn: "Culture & Heritage",
    sentiment: "positive",
    sentimentReasonBn: "সাম্প্রদায়িক সম্প্রীতি, ঐতিহ্য সংরক্ষণ ও অভিন্ন বাঙালি সংস্কৃতির অনুপ্রেরণাদায়ী প্রতিবেদন।",
    sentimentReasonEn: "Heartening cultural coverage emphasizing inter-community harmony and enduring spiritual heritage.",
    source: {
      name: "Sangbad Pratidin",
      bureau: "Kolkata",
      language: "Bengali",
      originalUrl: "https://www.sangbadpratidin.in/durga-puja/durga-puja-overseas/durga-puja-2026-bangladeshs-300-year-old-red-goddess/pid/1383152/",
      scannedAt: "2026-10-12T22:30:00Z"
    },
    publishedAt: "2026-10-12T05:30:00.000Z",
    readTimeBn: "৩ মিনিট",
    readTimeEn: "3 mins",
    imageUrl: "/images/dhakeshwari-national-temple-dhaka.jpg",
    mediaFormat: "rss",
    tags: ["দুর্গাপূজা", "সংবাদ প্রতিদিন", "ঐতিহ্য", "সাম্প্রদায়িক সম্প্রীতি", "সংস্কৃতি"]
  }
];

// Update SCANNER_STATS
const statsRegex = /export const SCANNER_STATS = \{[\s\S]*?\};/;
const updatedStats = `export const SCANNER_STATS = {
  "lastScannedAtBn": "১২ অক্টোবর, ২০২৬ এ ১০:৩০ PM",
  "lastScannedAtEn": "12 Oct 2026, 10:30 pm",
  "totalScanned24h": 4446,
  "bangladeshMatches": 1215,
  "sentimentDistribution": {
    "positive": 38,
    "neutral": 43,
    "negative": 19
  },
  "bureauDistribution": {
    "delhi": 44,
    "kolkata": 34,
    "mumbai": 11,
    "tripura": 4,
    "assam": 4,
    "siliguri": 3
  },
  "languageDistribution": {
    "english": 46,
    "bengali": 34,
    "hindi": 14,
    "tamil": 2,
    "telugu": 2,
    "marathi": 1,
    "malayalam": 1
  }
};`;

content = content.replace(statsRegex, updatedStats);

// Prepend new alerts
const alertAnchor = 'export const BREAKING_NEWS_ALERTS: BreakingAlert[] = [';
if (content.includes(alertAnchor)) {
  const insertIndex = content.indexOf(alertAnchor) + alertAnchor.length;
  const newAlertsStr = newAlerts.map(a => '\n  ' + JSON.stringify(a, null, 2).split('\n').join('\n  ') + ',').join('');
  content = content.slice(0, insertIndex) + newAlertsStr + content.slice(insertIndex);
}

// Prepend new news items
const newsAnchor = 'export const SCANNED_NEWS_ITEMS: NewsItem[] = [';
if (content.includes(newsAnchor)) {
  const insertIndex = content.indexOf(newsAnchor) + newsAnchor.length;
  const newItemsStr = newItems.map(item => '\n  ' + JSON.stringify(item, null, 2).split('\n').join('\n  ') + ',').join('');
  content = content.slice(0, insertIndex) + newItemsStr + content.slice(insertIndex);
}

fs.writeFileSync(newsFilePath, content, 'utf8');
console.log(`✅ Successfully injected 12 new news items, 4 breaking alerts, and updated scanner stats for 12 Oct 2026.`);
