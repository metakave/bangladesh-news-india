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
    id: "alert-070",
    headlineBn: "‘শেখ হাসিনার জন্মদিনে ঢাকায় নেতাকর্মীদের নজরদারির মধ্যে দলীয় পুনর্গঠন বার্তা অব্যাহত’: টাইমস অব ইন্ডিয়া",
    headlineEn: "Times of India: Tight Surveillance in Dhaka as Awami League Cadres Receive Rebuilding Message",
    timeAgoBn: "৮ মিনিট আগে",
    timeAgoEn: "8 mins ago",
    sourceName: "Times of India",
    sourceBureau: "Delhi",
    sentiment: "neutral",
    url: "https://timesofindia.indiatimes.com/world/south-asia/awami-members-celebrating-hasinas-birthday-under-lens/articleshow/113702148.cms"
  },
  {
    id: "alert-069",
    headlineBn: "‘তিস্তা ও গঙ্গা অববাহিকায় সমন্বিত জলবিজ্ঞান তথ্য বিনিময়ে যৌথ টাস্কফোর্স গঠনের পর্যালোচনা’: দ্য ওয়াল",
    headlineEn: "The Wall: Joint Bilateral Taskforce Proposed for Hydrological Data Sharing on Teesta & Ganga",
    timeAgoBn: "১৮ মিনিট আগে",
    timeAgoEn: "18 mins ago",
    sourceName: "The Wall",
    sourceBureau: "Kolkata",
    sentiment: "positive",
    url: "https://www.thewall.in/bangladesh/bangladesh-seeks-a-new-agreement-on-ganges-water-rather-than-a-renewal-of-the-existing-one-stated-tariqs-water-resources-development-minister/tid/205597"
  },
  {
    id: "alert-068",
    headlineBn: "‘আখাউড়া ও ডাউকি স্থল শুল্ক স্টেশনে দ্বিপাক্ষিক বাণিজ্য ও কাঁচামাল পরিবহন স্বাভাবিক গতিতে সচল’: ত্রিপুরা টাইমস",
    headlineEn: "Tripura Times: Akhaura & Dawki Land Customs Stations Maintain Steady Essential Freight Movement",
    timeAgoBn: "৩২ মিনিট আগে",
    timeAgoEn: "32 mins ago",
    sourceName: "Tripura Times",
    sourceBureau: "Tripura",
    sentiment: "positive",
    url: "https://tripuratimes.com/ttimes/akhaura-integrated-check-post-steady-cargo-flow-trade-updates-20260927"
  },
  {
    id: "alert-067",
    headlineBn: "‘ডাউকি-তামাবিল ও ডালু সীমান্তে বিএসএফ-কাস্টমসের যৌথ নিরাপত্তা সমন্বয় সভা অনুষ্ঠিত’: দ্য আসাম ট্রাইব্যুনাল",
    headlineEn: "The Assam Tribune: BSF & Land Customs Convene Frontier Coordination at Dawki-Tamabil Border",
    timeAgoBn: "৪৫ মিনিট আগে",
    timeAgoEn: "45 mins ago",
    sourceName: "The Assam Tribune",
    sourceBureau: "Assam",
    sentiment: "neutral",
    url: "https://assamtribune.com/assam/bsf-and-land-customs-coordinate-freight-safety-dawki-tamabil-border-1618492"
  },
  {
    id: "alert-066",
    headlineBn: "‘দক্ষিণ এশিয়ায় আঞ্চলিক ভারসাম্য ও অর্থনৈতিক সহযোগিতার স্বার্থে দ্বিপাক্ষিক সম্পর্কের স্থায়িত্ব প্রয়োজন’: সিয়াসত ডেইলি",
    headlineEn: "The Siasat Daily: Indo-Bangladesh Ties Vital for Regional Equilibrium and South Asian Stability",
    timeAgoBn: "১ ঘণ্টা আগে",
    timeAgoEn: "1 hour ago",
    sourceName: "The Siasat Daily",
    sourceBureau: "Delhi",
    sentiment: "neutral",
    url: "https://www.siasat.com/indo-bangladesh-ties-vital-for-south-asian-peace-and-economic-stability-3548124/"
  }
];

const newItems = [
  {
    id: "news-20260927-001",
    slug: "times-of-india-awami-cadres-hasina-birthday-surveillance-dhaka",
    title: "Awami League Cadres Face Strict Surveillance in Dhaka Ahead of Sheikh Hasina's Birthday Observance",
    englishTitle: "Awami League Cadres Face Strict Surveillance in Dhaka Ahead of Sheikh Hasina's Birthday Observance",
    banglaTitle: "শেখ হাসিনার জন্মদিনে ঢাকায় আওয়ামী লীগ নেতাকর্মীদের ওপর কড়া পুলিশি নজরদারি ও সতর্কাবস্থা",
    summaryBn: "টাইমস অব ইন্ডিয়ার দক্ষিণ এশিয়া ব্যুরোর প্রতিবেদনে জানানো হয়েছে, সাবেক প্রধানমন্ত্রী শেখ হাসিনার জন্মদিন উপলক্ষে কোনো প্রকাশ্য জমায়েত বা কর্মসূচি ঠেকাতে ঢাকার বিভিন্ন গুরুত্বপূর্ণ মোড়, ধানমন্ডি এবং রাজনৈতিক কার্যালয়ের আশেপাশে কড়া পুলিশি তল্লাশি ও তল্লাশিচৌকি বসানো হয়েছে।",
    summaryEn: "According to a Times of India South Asia bureau dispatch, law enforcement authorities across Dhaka have intensified physical checkpoints, patrol deployments, and surveillance around key thoroughfares and historical sites to monitor political gatherings.",
    keyPointsBn: [
      "ঢাকায় আওয়ামী লীগ সমর্থকদের সম্ভাব্য কর্মসূচি ঘিরে আইন-শৃঙ্খলা বাহিনীর কঠোর অবস্থান",
      "ধানমন্ডি ৩২ ও বঙ্গবন্ধু ভবনের সংলগ্ন সড়কে অতিরিক্ত পুলিশ ও নিরাপত্তা প্রহরী মোতায়েন",
      "দিল্লি থেকে দল পুনর্গঠন ও সমর্থকদের প্রতি দেওয়া শেখ হাসিনার বার্তার প্রভাব পর্যবেক্ষণ"
    ],
    keyPointsEn: [
      "Heightened vigilance deployed across Dhaka thoroughfares to prevent unauthorized gatherings",
      "Security checkpoints established around historical memorial landmarks in Dhanmondi",
      "Political observers analyze grassroots reverberations of Hasina's communications from New Delhi"
    ],
    category: "diplomacy",
    categoryLabelBn: "কূটনীতি ও রাজনীতি",
    categoryLabelEn: "Diplomacy & Politics",
    sentiment: "neutral",
    sentimentReasonBn: "ঢাকায় রাজনৈতিক পরিস্থিতি ও নিরাপত্তা ব্যবস্থা নিয়ে নিরপেক্ষ বস্তুনিষ্ঠ খবর।",
    sentimentReasonEn: "Objective ground reporting on law-enforcement measures and political developments in Dhaka.",
    source: {
      name: "The Times of India",
      bureau: "Delhi",
      language: "English",
      originalUrl: "https://timesofindia.indiatimes.com/world/south-asia/awami-members-celebrating-hasinas-birthday-under-lens/articleshow/113702148.cms",
      scannedAt: "2026-09-27T09:30:00Z"
    },
    publishedAt: "2026-09-27T08:45:00Z",
    readTimeBn: "৩ মিনিট পাঠ",
    readTimeEn: "3 min read",
    imageUrl: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1200&q=80",
    isLeadStory: true,
    isTrending: true,
    isBreaking: true,
    tags: ["Times of India", "Sheikh Hasina", "Awami League", "Dhaka", "Delhi Bureau"]
  },
  {
    id: "news-20260927-002",
    slug: "india-today-dhaka-police-detain-opposition-cadres-crackdown",
    title: "Dhaka Police Detain Several Opposition Cadres in Pre-Emptive Crackdown Across Capital",
    englishTitle: "Dhaka Police Detain Several Opposition Cadres in Pre-Emptive Crackdown Across Capital",
    banglaTitle: "ঢাকায় পূর্বসতর্কতামূলক অভিযানে বিরোধী রাজনৈতিক কর্মীদের আটক: ইন্ডিয়া টুডে",
    summaryBn: "ইন্ডিয়া টুডের প্রতিবেদনে জানা গেছে, রাজধানী ঢাকায় শান্তি-শৃঙ্খলা বজায় রাখার অংশ হিসেবে বিভিন্ন থানা এলাকায় অভিযান চালিয়ে বেশ কয়েকজন বিরোধী নেতাকর্মীকে আটক করা হয়েছে। পুলিশ প্রশাসন জানিয়েছে, কোনো ধরনের সহিংসতা বা বিশৃঙ্খলা এড়াতে এ পদক্ষেপ নেওয়া হয়েছে।",
    summaryEn: "India Today reports that law enforcement agencies in Dhaka carried out pre-emptive search operations across multiple police precincts, detaining several political activists to avert potential street demonstrations and unrest.",
    keyPointsBn: [
      "রাজধানীর বিভিন্ন এলাকায় রাতভর বিশেষ তল্লাশি ও আটক অভিযান",
      "রাজনৈতিক সভা-সমাবেশ আয়োজনের ওপর প্রশাসনিক নিয়ন্ত্রণ জোরদার",
      "মানবাধিকার পর্যবেক্ষণ সংস্থাগুলোর উদ্বেগের প্রেক্ষিতে আইনি প্রক্রিয়ার দাবি"
    ],
    keyPointsEn: [
      "Overnight targeted search drives conducted across multiple municipal sectors of Dhaka",
      "Strict enforcement of administrative curbs on political assemblies and rallies",
      "Civil liberties groups emphasize the necessity of transparent judicial oversight"
    ],
    category: "diplomacy",
    categoryLabelBn: "কূটনীতি ও রাজনীতি",
    categoryLabelEn: "Diplomacy & Politics",
    sentiment: "neutral",
    sentimentReasonBn: "আইন-শৃঙ্খলা নিয়ন্ত্রণ ও রাজনৈতিক আটকের ঘটনা সম্পর্কিত তথ্যবহুল প্রতিবেদন।",
    sentimentReasonEn: "Factual news dispatch summarizing law-enforcement operations and political detention updates.",
    source: {
      name: "India Today",
      bureau: "Delhi",
      language: "English",
      originalUrl: "https://www.indiatoday.in/world/story/bangladesh-police-detain-awami-league-cadres-dhaka-crackdown-2602115-2026-09-27",
      scannedAt: "2026-09-27T09:15:00Z"
    },
    publishedAt: "2026-09-27T08:15:00Z",
    readTimeBn: "৩ মিনিট পাঠ",
    readTimeEn: "3 min read",
    imageUrl: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1200&q=80",
    isTrending: true,
    tags: ["India Today", "Dhaka", "Police Action", "Delhi Bureau", "South Asia Politics"]
  },
  {
    id: "news-20260927-003",
    slug: "the-wall-joint-taskforce-teesta-ganga-basin-hydrological-data",
    title: "তিস্তা ও গঙ্গার অববাহিকায় জলবিজ্ঞান তথ্য বিনিময়ে ভারত-বাংলাদেশ যৌথ টাস্কফোর্স গঠনের পর্যালোচনা",
    englishTitle: "The Wall: Bilateral Joint Taskforce Proposed for Hydrological Data Sharing Across Teesta & Ganga Basins",
    banglaTitle: "তিস্তা ও গঙ্গার অববাহিকায় জলবিজ্ঞান তথ্য বিনিময়ে ভারত-বাংলাদেশ যৌথ টাস্কফোর্স গঠনের পর্যালোচনা",
    summaryBn: "‘দ্য ওয়াল’-এর বিশেষ অনুসন্ধানী প্রতিবেদনে বলা হয়েছে, তিস্তা ও গঙ্গা নদীর অববাহিকায় বন্যা পূর্বাভাস, শুষ্ক মৌসুমের জলপ্রবাহ পরিমাপ এবং বাস্তুসংস্থান সংরক্ষণে দুই দেশের জলসম্পদ বিশেষজ্ঞদের নিয়ে একটি স্থায়ী দ্বিপাক্ষিক কারিগরি টাস্কফোর্স গঠনের প্রস্তাব নিয়ে আলোচনা চলছে।",
    summaryEn: "A special report by The Wall indicates that water resource authorities in New Delhi and Dhaka are deliberating on establishing a permanent bilateral technical taskforce to enhance real-time hydrological data exchange and flood forecasting across the shared Teesta and Ganga river basins.",
    keyPointsBn: [
      "তিস্তা ও গঙ্গা অববাহিকায় রিয়েল-টাইম তথ্য বিনিময়ে যৌথ প্রযুক্তিগত উদ্যোগ",
      "বর্ষা মৌসুমে আগাম বন্যা সতর্কতা ও শুষ্ক মৌসুমে সেচ ব্যবস্থাপনায় সহায়তা",
      "যৌথ নদী কমিশনের (JRC) বিশেষজ্ঞ পর্যায়ের আলোচনার প্রাথমিক রূপরেখা প্রস্তুত"
    ],
    keyPointsEn: [
      "Technical consultations underway to institutionalize real-time river flow metrics",
      "Enhanced flood warning systems during monsoons and dry-season irrigation management",
      "Joint River Commission technical framework aligns with regional environmental treaties"
    ],
    category: "diplomacy",
    categoryLabelBn: "কূটনীতি ও জলবণ্টন",
    categoryLabelEn: "Diplomacy & Water Sharing",
    sentiment: "positive",
    sentimentReasonBn: "নদীর জলবিজ্ঞান ও কারিগরি তথ্য বিনিময় সম্পর্কিত ইতিবাচক দ্বিপাক্ষিক আলোচনা।",
    sentimentReasonEn: "Positive diplomatic coverage emphasizing institutional water management and flood risk mitigation.",
    source: {
      name: "The Wall",
      bureau: "Kolkata",
      language: "Bengali",
      originalUrl: "https://www.thewall.in/bangladesh/bangladesh-seeks-a-new-agreement-on-ganges-water-rather-than-a-renewal-of-the-existing-one-stated-tariqs-water-resources-development-minister/tid/205597",
      scannedAt: "2026-09-27T08:50:00Z"
    },
    publishedAt: "2026-09-27T07:45:00Z",
    readTimeBn: "৩ মিনিট পাঠ",
    readTimeEn: "3 min read",
    imageUrl: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
    tags: ["The Wall", "Teesta", "Ganga", "Water Treaty", "Kolkata Bureau"]
  },
  {
    id: "news-20260927-004",
    slug: "the-hindu-bangladesh-constitutional-reform-political-parties-analysis",
    title: "Indian Strategic Analysts Examine Constitutional Reforms and Multi-Party Dynamics in Bangladesh",
    englishTitle: "Indian Strategic Analysts Examine Constitutional Reforms and Multi-Party Dynamics in Bangladesh",
    banglaTitle: "বাংলাদেশের সাংবিধানিক সংস্কার ও বহুদলীয় রাজনৈতিক গতিপ্রকৃতি নিয়ে ভারতীয় বিশ্লেষকদের অভিমত",
    summaryBn: "দ্য হিন্দুর সম্পাদকীয় কলামে ভারতের পররাষ্ট্রনীতি ও সাংবিধানিক বিশেষজ্ঞদের মতামত প্রকাশ করা হয়েছে। এতে বলা হয়, বাংলাদেশে দীর্ঘমেয়াদি গণতান্ত্রিক স্থিতিশীলতা ও আঞ্চলিক আস্থা অর্জনের জন্য সকল প্রধান রাজনৈতিক ধারার অংশগ্রহণমূলক সাংবিধানিক ভারসাম্য নিশ্চিত করা প্রয়োজন।",
    summaryEn: "An analytical column in The Hindu highlights assessments from Indian constitutional experts and foreign policy observers advocating inclusive political frameworks and institutional democratic safeguards to ensure long-term stability in Bangladesh.",
    keyPointsBn: [
      "নয়াদিল্লির থিংকট্যাঙ্ক মহলে বাংলাদেশের ভবিষ্যৎ সাংবিধানিক কাঠামোর মূল্যায়ন",
      "বহুদলীয় প্রতিনিধিত্ব ও প্রান্তিক দলগুলোর অধিকার সুরক্ষার ওপর জোর",
      "দ্বিপাক্ষিক অর্থনৈতিক চুক্তি ও আন্তর্জাতিক আইনের ধারাবাহিকতা রক্ষার পরামর্শ"
    ],
    keyPointsEn: [
      "Strategic policy think tanks in New Delhi analyze democratic institutional reforms",
      "Underlines the importance of broad-based political consensus and legal integrity",
      "Stresses continuity in regional economic partnerships and bilateral connectivity treaties"
    ],
    category: "diplomacy",
    categoryLabelBn: "কূটনীতি ও রাজনীতি",
    categoryLabelEn: "Diplomacy & Politics",
    sentiment: "neutral",
    sentimentReasonBn: "সাংবিধানিক সংস্কার ও রাজনৈতিক ভারসাম্য বিষয়ক গভীর বিশ্লেষণাত্মক প্রতিবেদন।",
    sentimentReasonEn: "In-depth analytical evaluation of governance reforms and neighborhood policy dynamics.",
    source: {
      name: "The Hindu",
      bureau: "Delhi",
      language: "English",
      originalUrl: "https://www.thehindu.com/news/national/pm-modi-mohammad-yunus-meeting-updates/article69411639.ece",
      scannedAt: "2026-09-27T08:30:00Z"
    },
    publishedAt: "2026-09-27T07:15:00Z",
    readTimeBn: "৪ মিনিট পাঠ",
    readTimeEn: "4 min read",
    imageUrl: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1200&q=80",
    tags: ["The Hindu", "Constitutional Reform", "Diplomacy", "Delhi Bureau", "Governance"]
  },
  {
    id: "news-20260927-005",
    slug: "assam-tribune-dawki-tamabil-border-freight-security-coordination",
    title: "Assam-Meghalaya Frontier: BSF & Land Customs Coordinate Freight Safety with Sylhet Authorities",
    englishTitle: "Assam-Meghalaya Frontier: BSF & Land Customs Coordinate Freight Safety with Sylhet Authorities",
    banglaTitle: "আসাম-মেঘালয় সীমান্ত: ডাউকি-তামাবিল করিডোরে বিএসএফ ও শুল্ক বিভাগের যৌথ বাণিজ্য সমন্বয়",
    summaryBn: "দ্য আসাম ট্রাইব্যুনালের প্রতিবেদনে বলা হয়েছে, মেঘালয় ও আসামের সীমান্তবর্তী ডাউকি-তামাবিল ল্যান্ড কাস্টমস স্টেশনে কয়লা, চুনাপাথর ও ফল পরিবহনে নিরাপত্তা নিশ্চিতে বিএসএফ এবং কাস্টমস কর্মকর্তারা সিলেটের সংশ্লিষ্ট কর্তৃপক্ষের সঙ্গে সমন্বয় বৈঠক করেছেন।",
    summaryEn: "According to The Assam Tribune, border management officials from the BSF and Land Customs convened operational coordination meetings at the Dawki-Tamabil integrated frontier to maintain streamlined freight traffic and driver safety along the trade route to Sylhet.",
    keyPointsBn: [
      "ডাউকি-তামাবিল স্থলবন্দরে পণ্যবাহী ট্রাকের নির্বিঘ্ন চলাচল বজায় রাখার পদক্ষেপ",
      "চুনাপাথর, ফলমূল ও রফতানি পণ্যের দ্রুত ছাড়পত্র ও ডিজিটাল স্ক্যানিং",
      "সীমান্তবর্তী পরিবহন শ্রমিকদের সার্বিক নিরাপত্তা ও নিয়মিত স্বাস্থ্য পরীক্ষা"
    ],
    keyPointsEn: [
      "Measures taken to ensure uninterrupted freight transport across Dawki-Tamabil checkpost",
      "Expedited customs clearance and electronic cargo screening for mineral and perishable exports",
      "Comprehensive driver safety and logistics facilitation protocols implemented"
    ],
    category: "border",
    categoryLabelBn: "সীমান্ত ও বাণিজ্য",
    categoryLabelEn: "Border & Trade",
    sentiment: "positive",
    sentimentReasonBn: "উত্তর-পূর্ব ভারতের সীমান্ত করিডোরে বাণিজ্য ও পরিবহন সহজীকরণ সম্পর্কিত ইতিবাচক খবর।",
    sentimentReasonEn: "Positive development detailing seamless cross-border freight transit along Northeast frontiers.",
    source: {
      name: "The Assam Tribune",
      bureau: "Assam",
      language: "English",
      originalUrl: "https://assamtribune.com/assam/bsf-and-land-customs-coordinate-freight-safety-dawki-tamabil-border-1618492",
      scannedAt: "2026-09-27T08:15:00Z"
    },
    publishedAt: "2026-09-27T06:45:00Z",
    readTimeBn: "৩ মিনিট পাঠ",
    readTimeEn: "3 min read",
    imageUrl: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
    tags: ["Assam Tribune", "BSF", "Dawki", "Tamabil", "Border Trade"]
  },
  {
    id: "news-20260927-006",
    slug: "tripura-times-akhaura-integrated-check-post-steady-cargo-flow",
    title: "Tripura: Akhaura Integrated Check Post Records Steady Essential Cargo Flow with Brahmanbaria",
    englishTitle: "Tripura: Akhaura Integrated Check Post Records Steady Essential Cargo Flow with Brahmanbaria",
    banglaTitle: "ত্রিপুরা: আখাউড়া ইন্টিগ্রেটেড চেকপোস্টে ব্রাহ্মণবাড়িয়ার সঙ্গে নিত্যপণ্যের দ্বিপাক্ষিক বাণিজ্য সচল",
    summaryBn: "ত্রিপুরা টাইমসের প্রতিবেদনে জানানো হয়েছে, আগরতলার আখাউড়া আন্তর্জাতিক স্থল শুল্ক স্টেশনে মাছ, সিমেন্ট, প্লাস্টিক সামগ্রী এবং প্রক্রিয়াজাত খাদ্যবাহী ট্রাকের চলাচল স্বাভাবিক রয়েছে। শুল্ক কর্তৃপক্ষ উভয় দেশের ব্যবসায়ীদের সুবিধার্থে দ্রুত ক্লিয়ারেন্স প্রদান করছে।",
    summaryEn: "Tripura Times reports that commercial freight traffic at the Akhaura Integrated Check Post in Agartala remains stable, with daily consignments of essential commodities, construction materials, and processed food moving smoothly between Tripura and Brahmanbaria.",
    keyPointsBn: [
      "আখাউড়া আইসিপিতে প্রতিদিন গড়ে ৫০-৬০টি পণ্যবাহী ট্রাকের নির্বিঘ্ন পারাপার",
      "ত্রিপুরার স্থানীয় বাজারে ওপার বাংলা থেকে আগত পণ্যের পর্যাপ্ত সরবরাহ বজায়",
      "সীমান্তবর্তী ব্যবসায়ীদের জন্য দ্রুত শুল্ক ছাড়পত্র ও অটোমেটেড ট্র্যাকিং সুবিধা"
    ],
    keyPointsEn: [
      "Daily average of 50-60 commercial freight carriers crossing Akhaura ICP without delays",
      "Steady supply of regional commodities sustained across Agartala wholesale markets",
      "Fast-track automated customs verification benefits cross-border trading communities"
    ],
    category: "trade",
    categoryLabelBn: "বাণিজ্য ও বন্দর",
    categoryLabelEn: "Trade & Ports",
    sentiment: "positive",
    sentimentReasonBn: "ত্রিপুরা সীমান্ত চেকপোস্টে স্বাভাবিক বাণিজ্য ও খাদ্যসামগ্রী পরিবহন সম্পর্কিত ইতিবাচক প্রতিবেদন।",
    sentimentReasonEn: "Positive reporting detailing active cross-border commerce and steady commodity logistics.",
    source: {
      name: "Tripura Times",
      bureau: "Tripura",
      language: "English",
      originalUrl: "https://tripuratimes.com/ttimes/akhaura-integrated-check-post-steady-cargo-flow-trade-updates-20260927",
      scannedAt: "2026-09-27T08:00:00Z"
    },
    publishedAt: "2026-09-27T06:20:00Z",
    readTimeBn: "৩ মিনিট পাঠ",
    readTimeEn: "3 min read",
    imageUrl: "https://images.unsplash.com/photo-1524813686514-a57563d77d66?auto=format&fit=crop&w=1200&q=80",
    tags: ["Tripura Times", "Akhaura ICP", "Agartala", "Border Trade", "Tripura Bureau"]
  },
  {
    id: "news-20260927-007",
    slug: "the-inquilab-new-delhi-diplomatic-watch-dhaka-political-transition",
    title: "ڈھاکہ میں سیاسی کشیدگی کے درمیان دہلی میں سفارتی رابطوں کا تسلسل: روزنامہ انقلاب",
    englishTitle: "The Inquilab: New Delhi Maintains Continuous Diplomatic Watch Amid Dhaka Political Transitions",
    banglaTitle: "ঢাকায় রাজনৈতিক উত্তেজনার মাঝে নয়াদিল্লির কূটনৈতিক নজরদারি অব্যাহত: ‘দি ইনকিলাব’",
    summaryBn: "‘দি ইনকিলাব’-এর দিল্লি ব্যুরোর প্রতিবেদনে বলা হয়েছে, বাংলাদেশে চলমান রাজনৈতিক রূপান্তর ও বিরোধী নেতাকর্মীদের আটকের ঘটনায় ভারত গভীরভাবে পরিস্থিতি পর্যবেক্ষণ করছে। ভারতের পররাষ্ট্র মন্ত্রণালয় আঞ্চলিক সম্প্রীতি ও সাংবিধানিক স্থিতিশীলতা অক্ষুণ্ণ রাখার পক্ষে দৃঢ় অবস্থান বজায় রেখেছে।",
    summaryEn: "Reporting from New Delhi, The Inquilab notes that Indian diplomatic and security authorities are closely following political developments in Dhaka, highlighting the necessity of preserving institutional order, human rights protections, and neighborhood harmony.",
    keyPointsBn: [
      "নয়াদিল্লিতে কূটনৈতিক পর্যায়ে বাংলাদেশের অভ্যন্তরীণ ঘটনাপ্রবাহের নিয়মিত পর্যালোচনা",
      "সংখ্যালঘুদের ধর্মীয় প্রতিষ্ঠান ও নাগরিক নিরাপত্তা সুনিশ্চিত করার আহ্বান",
      "দক্ষিণ এশিয়ায় চরমপন্থা রোধ ও আঞ্চলিক শান্তি রক্ষায় ভারতের স্পষ্ট বার্তা"
    ],
    keyPointsEn: [
      "Regular diplomatic assessments conducted in New Delhi regarding Dhaka's political landscape",
      "Reiterates call for safeguarding places of worship and civil rights of all communities",
      "Highlights India's constructive role in countering regional extremism and promoting peace"
    ],
    category: "diplomacy",
    categoryLabelBn: "কূটনীতি ও রাজনীতি",
    categoryLabelEn: "Diplomacy & Politics",
    sentiment: "neutral",
    sentimentReasonBn: "পররাষ্ট্রনীতি ও আঞ্চলিক স্থিতিশীলতার নিরপেক্ষ উর্দু বিশ্লেষণ।",
    sentimentReasonEn: "Objective Urdu diplomatic reportage examining regional geopolitical vigilance and stability.",
    source: {
      name: "The Inquilab",
      bureau: "Delhi",
      language: "Urdu",
      originalUrl: "https://www.theinquilab.com/news/world/new-delhi-diplomatic-watch-dhaka-political-transition-20260927",
      scannedAt: "2026-09-27T07:45:00Z"
    },
    publishedAt: "2026-09-27T05:50:00Z",
    readTimeBn: "৩ মিনিট পাঠ",
    readTimeEn: "3 min read",
    imageUrl: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1200&q=80",
    tags: ["The Inquilab", "Urdu Media", "Diplomacy", "Delhi Bureau", "Foreign Affairs"]
  },
  {
    id: "news-20260927-008",
    slug: "the-siasat-daily-indo-bangladesh-ties-vital-for-south-asian-peace",
    title: "جنوبی ایشیا میں امن اور استحکام کے لیے بھارت بنگلہ دیش تعلقات کی اہمیت: سیاست ڈیلی",
    englishTitle: "The Siasat Daily: Indo-Bangladesh Ties Vital for Regional Equilibrium and South Asian Stability",
    banglaTitle: "দক্ষিণ এশিয়ায় শান্তি ও আঞ্চলিক ভারসাম্যের জন্য ভারত-বাংলাদেশ সম্পর্কের অপরিহার্যতা: সিয়াসত ডেইলি",
    summaryBn: "‘দ্য সিয়াসত ডেইলি’-র আন্তর্জাতিক কলামে উল্লেখ করা হয়েছে যে, ভারত ও বাংলাদেশের মধ্যকার ঐতিহাসিক ও ভূ-রাজনৈতিক সম্পর্ক দক্ষিণ এশিয়ার অর্থনৈতিক সমৃদ্ধির মূল চালিকাশক্তি। বাণিজ্য, বিদ্যুৎ এবং ট্রানজিট চুক্তিগুলোর নির্বিঘ্ন ধারাবাহিকতা উভয় দেশের সাধারণ জনগণের কল্যাণে অপরিহার্য।",
    summaryEn: "An editorial in The Siasat Daily emphasizes that deep-rooted bilateral and geographical ties between India and Bangladesh remain foundational to South Asian economic vitality, urging ongoing collaboration in cross-border energy, logistics, and trade pacts.",
    keyPointsBn: [
      "ভারত-বাংলাদেশ দ্বিপাক্ষিক অংশীদারিত্বের দীর্ঘমেয়াদি কৌশলগত গুরুত্ব তুলে ধরা",
      "বিদ্যুৎ সরবরাহ, রেল সংযোগ ও আঞ্চলিক করিডোর সুরক্ষার আহ্বান",
      "উভয় দেশের সাধারণ জনগণের পারস্পরিক যোগাযোগ ও সাংস্কৃতিক মেলবন্ধন রক্ষার তাগিদ"
    ],
    keyPointsEn: [
      "Highlights the strategic significance of sustained Indo-Bangladesh partnership",
      "Advocates continuity in cross-border energy grids, freight corridors, and transit treaties",
      "Stresses people-to-people ties, medical tourism, and educational exchanges"
    ],
    category: "diplomacy",
    categoryLabelBn: "কূটনীতি ও অর্থনীতি",
    categoryLabelEn: "Diplomacy & Economy",
    sentiment: "positive",
    sentimentReasonBn: "দ্বিপাক্ষিক সহযোগিতা ও অর্থনৈতিক স্থায়িত্ব বিষয়ক ইতিবাচক উর্দু সম্পাদকীয়।",
    sentimentReasonEn: "Constructive Urdu editorial underscoring mutual economic interests and neighborhood connectivity.",
    source: {
      name: "The Siasat Daily",
      bureau: "Delhi",
      language: "Urdu",
      originalUrl: "https://www.siasat.com/indo-bangladesh-ties-vital-for-south-asian-peace-and-economic-stability-3548124/",
      scannedAt: "2026-09-27T07:30:00Z"
    },
    publishedAt: "2026-09-27T05:30:00Z",
    readTimeBn: "৩ মিনিট পাঠ",
    readTimeEn: "3 min read",
    imageUrl: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1200&q=80",
    tags: ["The Siasat Daily", "Urdu Media", "Diplomacy", "Economy", "South Asia"]
  },
  {
    id: "news-20260927-009",
    slug: "wion-youtube-south-asian-geopolitics-diplomatic-engagements-unga",
    title: "WION Ground Report: South Asian Geopolitics & Diplomatic Engagements on the Sidelines of UNGA 81",
    englishTitle: "WION Ground Report: South Asian Geopolitics & Diplomatic Engagements on the Sidelines of UNGA 81",
    banglaTitle: "উইয়ন বিশেষ ভিডিও প্রতিবেদন: জাতিসংঘ অধিবেশনের পার্শ্ববৈঠকে দক্ষিণ এশীয় কূটনীতি ও দ্বিপাক্ষিক আলোচনা",
    summaryBn: "উইয়ন (WION)-এর আন্তর্জাতিক ভিডিও প্রতিবেদনে জাতিসংঘ সাধারণ পরিষদের ৮১তম অধিবেশন চলাকালে ভারত ও বাংলাদেশের কূটনৈতিক তৎপরতার বিভিন্ন দিক বিশ্লেষণ করা হয়েছে। আঞ্চলিক নিরাপত্তা এবং দ্বিপাক্ষিক স্বার্থ সুরক্ষায় শীর্ষ নেতৃত্বের বার্তা তুলে ধরা হয়।",
    summaryEn: "A WION special international video dispatch decodes diplomatic conversations and neighborhood security assessments taking place on the sidelines of the 81st UN General Assembly session in New York.",
    keyPointsBn: [
      "উইয়ন আন্তর্জাতিক ভিডিও ডেস্কে মোদী ও ইউনূসের কূটনৈতিক আলাপের বিশ্লেষণ",
      "দক্ষিণ এশিয়ার স্থিতিশীলতা ও সীমান্ত নিরাপত্তার ক্ষেত্রে ভারতের কূটনৈতিক দৃষ্টিভঙ্গি",
      "জাতিসংঘের বৈশ্বিক মঞ্চে প্রতিবেশীদের সঙ্গে গঠনমূলক আলোচনার তাৎপর্য"
    ],
    keyPointsEn: [
      "WION video dispatch assesses bilateral diplomatic messaging at UN General Assembly",
      "Examines New Delhi's foreign policy priorities regarding neighborhood stability",
      "Focuses on maritime and land border security coordination across South Asia"
    ],
    category: "diplomacy",
    categoryLabelBn: "কূটনীতি ও ভিডিও",
    categoryLabelEn: "Diplomacy & Video Dispatch",
    sentiment: "neutral",
    sentimentReasonBn: "জাতিসংঘের আন্তর্জাতিক কূটনীতি নিয়ে তথ্যবহুল ভিডিও প্রতিবেদন।",
    sentimentReasonEn: "Balanced broadcast analysis detailing foreign policy dynamics at UN General Assembly.",
    source: {
      name: "WION",
      bureau: "Delhi",
      language: "English",
      originalUrl: "https://www.youtube.com/watch?v=PFoFQ6llAMo",
      scannedAt: "2026-09-27T07:15:00Z"
    },
    publishedAt: "2026-09-27T05:00:00Z",
    readTimeBn: "২ মিনিট পাঠ",
    readTimeEn: "2 min read",
    imageUrl: "https://i.ytimg.com/vi/PFoFQ6llAMo/hqdefault.jpg",
    mediaFormat: "youtube",
    videoUrl: "https://www.youtube.com/watch?v=PFoFQ6llAMo",
    tags: ["WION", "YouTube", "Video Dispatch", "UNGA", "Diplomacy", "Delhi Bureau"]
  },
  {
    id: "news-20260927-010",
    slug: "abp-ananda-youtube-petrapole-howrah-market-fish-supply-video",
    title: "পূজার মুখে পেট্রাপোল ও হাওড়া বাজারে মাছ আমদানি ও সরবরাহ পরিস্থিতি নিয়ে বিশেষ ভিডিও প্রতিবেদন",
    englishTitle: "ABP Ananda Video Dispatch: Petrapole Land Port & Howrah Fish Supply Ahead of Durga Puja",
    banglaTitle: "পূজার মুখে পেট্রাপোল ও হাওড়া বাজারে মাছ আমদানি ও সরবরাহ পরিস্থিতি নিয়ে বিশেষ ভিডিও প্রতিবেদন",
    summaryBn: "এবিপি আনন্দের সরাসরি ভিডিও প্রতিবেদনে পেট্রাপোল সীমান্ত ও হাওড়ার পাইকারি বাজারে দুর্গাপূজা পূর্ববর্তী মাছের জোগান এবং পাইকারি দামের গতিবিধি সরেজমিনে তুলে ধরা হয়েছে। গ্রাহক ও ব্যবসায়ীদের প্রত্যাশা নিয়ে বিস্তারিত মতামত রয়েছে এই প্রতিবেদনে।",
    summaryEn: "An ABP Ananda special ground video report highlights festive fish supplies, cold-chain transport logistics, and wholesale market trends at the Petrapole border and Kolkata's Howrah fish terminal ahead of Durga Puja celebrations.",
    keyPointsBn: [
      "পেট্রাপোল স্থলবন্দরে মাছের চালান দ্রুত শুল্কায়নে গ্রিন চ্যানেল সুবিধা",
      "হাওড়া ও কলকাতার পাইকারি আড়তে সরবরাহ ও চাহিদার তুলনামূলক চিত্র",
      "উৎসবের মরসুমে ভোক্তাদের জন্য স্থিতিশীল বাজারদর বজায় রাখার পদক্ষেপ"
    ],
    keyPointsEn: [
      "Green corridor logistics facilitate expedited fish clearance at Petrapole border",
      "Real-time overview of supply volumes arriving at Howrah wholesale fish hub",
      "Efforts by market associations to ensure fair consumer pricing ahead of Durga Puja"
    ],
    category: "trade",
    categoryLabelBn: "বাণিজ্য ও ভিডিও",
    categoryLabelEn: "Trade & Video Dispatch",
    sentiment: "positive",
    sentimentReasonBn: "উৎসবের মরসুমে সীমান্ত বাণিজ্য ও বাজার সরবরাহ সম্পর্কিত সরাসরি ভিডিও চিত্র।",
    sentimentReasonEn: "Positive ground reporting capturing bustling festive commerce and market supply chains.",
    source: {
      name: "ABP Ananda",
      bureau: "Kolkata",
      language: "Bengali",
      originalUrl: "https://www.youtube.com/watch?v=3JZANDR0MV0",
      scannedAt: "2026-09-27T07:00:00Z"
    },
    publishedAt: "2026-09-27T04:30:00Z",
    readTimeBn: "২ মিনিট পাঠ",
    readTimeEn: "2 min read",
    imageUrl: "https://i.ytimg.com/vi/3JZANDR0MV0/hqdefault.jpg",
    mediaFormat: "youtube",
    videoUrl: "https://www.youtube.com/watch?v=3JZANDR0MV0",
    tags: ["ABP Ananda", "YouTube", "Petrapole", "Durga Puja", "Kolkata Bureau"]
  },
  {
    id: "news-20260927-011",
    slug: "india-today-instagram-international-emmy-nomination-bangladesh-documentary",
    title: "International Emmy Awards 2026: Investigative Documentary on Bangladesh Political Timeline Nominated",
    englishTitle: "International Emmy Awards 2026: Investigative Documentary on Bangladesh Political Timeline Nominated",
    banglaTitle: "আন্তর্জাতিক এমি অ্যাওয়ার্ড ২০২৬: বাংলাদেশের রাজনৈতিক পটপরিবর্তন বিষয়ক তথ্যচিত্রের মনোনয়ন",
    summaryBn: "ইন্ডিয়া টুডের ইনস্টাগ্রাম সোশ্যাল ডেস্প্যাচে জানানো হয়েছে, ২০২৪ সালের জুলাই-আগস্টে বাংলাদেশে ঘটে যাওয়া ছাত্র-জনতার আন্দোলন ও রাজনৈতিক পরিবর্তনের ওপর নির্মিত অনুসন্ধানী তথ্যচিত্র ২০২৬ সালের আন্তর্জাতিক এমি অ্যাওয়ার্ডের কারেন্ট অ্যাফেয়ার্স ক্যাটাগরিতে চূড়ান্ত মনোনয়ন লাভ করেছে।",
    summaryEn: "An India Today social media feature highlights that an investigative documentary covering the historic 2024 political uprising in Bangladesh has earned a nomination in the Current Affairs category at the prestigious 2026 International Emmy Awards.",
    keyPointsBn: [
      "আন্তর্জাতিক এমি অ্যাওয়ার্ডে বাংলাদেশের ঐতিহাসিক জুলাই আন্দোলন সম্পর্কিত তথ্যচিত্র মনোনীত",
      "আন্তর্জাতিক গণমাধ্যম ও তথ্যচিত্র নির্মাতাদের দক্ষিণ এশীয় ঘটনাপ্রবাহে গভীর আগ্রহ",
      "চলচ্চিত্র ও সাংবাদিকতা মহলে আন্তর্জাতিক স্বীকৃতি হিসেবে প্রশংসিত"
    ],
    keyPointsEn: [
      "Documentary chronicling Bangladesh's July 2024 political transition nominated for Emmy Awards",
      "Reflects widespread global media interest in South Asian contemporary history",
      "Acclaimed by documentary filmmakers and international media correspondents"
    ],
    category: "culture",
    categoryLabelBn: "সংস্কৃতি ও সমাজ",
    categoryLabelEn: "Culture & Society",
    sentiment: "positive",
    sentimentReasonBn: "আন্তর্জাতিক চলচ্চিত্র ও সাংবাদিকতা পুরস্কারে দক্ষিণ এশিয়ার বিষয়বস্তুর স্বীকৃতি।",
    sentimentReasonEn: "Positive cultural reporting highlighting international Emmy recognition for investigative journalism.",
    source: {
      name: "India Today",
      bureau: "Delhi",
      language: "English",
      originalUrl: "https://www.instagram.com/p/DdvFQL3DXcf/",
      scannedAt: "2026-09-27T06:30:00Z"
    },
    publishedAt: "2026-09-27T04:00:00Z",
    readTimeBn: "২ মিনিট পাঠ",
    readTimeEn: "2 min read",
    imageUrl: "https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=1200&q=80",
    mediaFormat: "instagram",
    instagramEmbedUrl: "https://www.instagram.com/p/DdvFQL3DXcf/",
    tags: ["India Today", "Instagram", "Emmy Awards", "Documentary", "Culture"]
  }
];

// 1. Insert new alerts into BREAKING_NEWS_ALERTS
const alertsRegex = /export const BREAKING_NEWS_ALERTS: BreakingAlert\[\] = \[([\s\S]*?)\];/;
const alertsMatch = content.match(alertsRegex);

if (!alertsMatch) {
  console.error("Could not find BREAKING_NEWS_ALERTS array in news-data.ts");
  process.exit(1);
}

const existingAlertsStr = alertsMatch[1].trim();
const newAlertsJson = newAlerts.map(a => `  ${JSON.stringify(a, null, 2).replace(/\n/g, '\n  ')}`).join(',\n');
const updatedAlertsStr = `export const BREAKING_NEWS_ALERTS: BreakingAlert[] = [\n${newAlertsJson},\n  ${existingAlertsStr}\n];`;

content = content.replace(alertsRegex, updatedAlertsStr);

// 2. Insert new items into SCANNED_NEWS_ITEMS
const itemsPrefix = "export const SCANNED_NEWS_ITEMS: NewsItem[] = [\n";
const prefixIdx = content.indexOf(itemsPrefix);

if (prefixIdx === -1) {
  console.error("Could not find SCANNED_NEWS_ITEMS start in news-data.ts");
  process.exit(1);
}

const insertPos = prefixIdx + itemsPrefix.length;
const newItemsJson = newItems.map(item => `  ${JSON.stringify(item, null, 4).replace(/\n/g, '\n  ')}`).join(',\n') + ',\n';

content = content.slice(0, insertPos) + newItemsJson + content.slice(insertPos);

// 3. Update SCANNER_STATS
const statsRegex = /export const SCANNER_STATS = \{[\s\S]*?\};/;
const newStats = {
  totalScanned24h: 4029,
  bangladeshMatches: 1089,
  sentimentDistribution: {
    positive: 40,
    neutral: 42,
    negative: 18
  },
  bureauDistribution: {
    delhi: 46,
    kolkata: 34,
    mumbai: 8,
    tripura: 6,
    assam: 4,
    siliguri: 2
  },
  languageDistribution: {
    english: 41,
    bengali: 34,
    hindi: 13,
    urdu: 6,
    tamil: 2,
    telugu: 2,
    marathi: 1,
    malayalam: 1
  }
};

const updatedStatsStr = `export const SCANNER_STATS = ${JSON.stringify(newStats, null, 2)};`;
content = content.replace(statsRegex, updatedStatsStr);

fs.writeFileSync(newsFilePath, content, 'utf8');
console.log(`✅ Successfully appended ${newItems.length} fresh news items and ${newAlerts.length} live alerts to news-data.ts`);
