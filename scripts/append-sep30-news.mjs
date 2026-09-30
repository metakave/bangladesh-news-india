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
    id: "alert-065",
    headlineBn: "‘আমেরিকা জানাল শেখ হাসিনা ও আওয়ামী লীগ ইস্যুতে ঢাকা ও দিল্লির সরাসরি আলোচনার মাধ্যমেই সমাধান হওয়া উচিত’: নবভারত টাইমস",
    headlineEn: "Navbharat Times: US State Department Urges India & Bangladesh to Settle Hasina and Bilateral Ties via Direct Dialogue",
    timeAgoBn: "৫ মিনিট আগে",
    timeAgoEn: "5 mins ago",
    sourceName: "Navbharat Times",
    sourceBureau: "Delhi",
    sentiment: "neutral",
    url: "https://navbharattimes.indiatimes.com/world/america/us-department-of-state-on-sheikh-hasina-dhaka-relations-dialogue-solution/articleshow/134459820.cms"
  },
  {
    id: "alert-064",
    headlineBn: "‘কলকাতায় শ্যামাপ্রসাদ মুখোপাধ্যায় ভবনে হাসিনার জন্মদিন উদযাপনে বিশ্বের বিভিন্ন দেশ থেকে যোগ দিলেন প্রবাসীরা’: টাইমস অব ইন্ডিয়া",
    headlineEn: "The Times of India: Expatriate Bangladeshis Fly to Kolkata to Mark Sheikh Hasina's Birthday at Syama Prasad Bhavan",
    timeAgoBn: "১৫ মিনিট আগে",
    timeAgoEn: "15 mins ago",
    sourceName: "The Times of India",
    sourceBureau: "Delhi",
    sentiment: "positive",
    url: "https://timesofindia.indiatimes.com/city/kolkata/10-bdeshis-fly-to-kolkata-from-across-globe-for-hasina-birthday-at-syama-home/articleshow/134421890.cms"
  },
  {
    id: "alert-063",
    headlineBn: "‘আগরতলা-আখাউড়া রেলপথে উৎসবের মরসুমে নিয়মিত কনটেইনার ও মালবাহী ট্রেন চলাচলের চূড়ান্ত মহড়া সম্পন্ন’: ত্রিপুরা টাইমস",
    headlineEn: "Tripura Times: Agartala-Akhaura International Rail Link Concludes Final Freight Trial for Festive Cargo Transit",
    timeAgoBn: "২৫ মিনিট আগে",
    timeAgoEn: "25 mins ago",
    sourceName: "Tripura Times",
    sourceBureau: "Tripura",
    sentiment: "positive",
    url: "https://tripuratimes.com/connectivity/agartala-akhaura-cross-border-rail-link-container-trial-run-20260930"
  },
  {
    id: "alert-062",
    headlineBn: "‘করিমগঞ্জ ও শ্রীভূমি সীমান্তে অনুপ্রবেশ ঠেকাতে আসাম পুলিশ ও বিএসএফের যৌথ কমান্ড সেন্টার কার্যকর’: দ্য আসাম ট্রাইব্যুনাল",
    headlineEn: "The Assam Tribune: Assam Police & BSF Activate Joint Border Command Center in Karimganj",
    timeAgoBn: "৪০ মিনিট আগে",
    timeAgoEn: "40 mins ago",
    sourceName: "The Assam Tribune",
    sourceBureau: "Assam",
    sentiment: "neutral",
    url: "https://assamtribune.com/assam/assam-police-bsf-set-up-karimganj-border-coordination-cell-1618580"
  },
  {
    id: "alert-061",
    headlineBn: "‘চ্যাংড়াবান্ধা ও ফুলবাড়িতে রপ্তানি বাণিজ্য সচল রাখতে যৌথ ট্রাক স্ক্যানিং সেল গঠন’: উত্তরবঙ্গ সংবাদ",
    headlineEn: "Uttarbanga Sambad: BSF & Customs Operationalize Joint Truck Security Checking Cell at Changrabandha & Fulbari",
    timeAgoBn: "১ ঘণ্টা আগে",
    timeAgoEn: "1 hour ago",
    sourceName: "Uttarbanga Sambad",
    sourceBureau: "Siliguri",
    sentiment: "positive",
    url: "https://uttarbangasambad.com/changrabandha-fulbari-border-joint-truck-checking-cell-activated-20260930/"
  }
];

const newItems = [
  {
    id: "news-20260930-001",
    slug: "times-of-india-expatriates-kolkata-sheikh-hasina-birthday-solidarity",
    title: "The Times of India: 'Expatriate Bangladeshis Fly to Kolkata from Across Globe for Sheikh Hasina's Birthday at Syama Prasad Bhavan'",
    englishTitle: "The Times of India: 'Expatriate Bangladeshis Fly to Kolkata from Across Globe for Sheikh Hasina's Birthday at Syama Prasad Bhavan'",
    banglaTitle: "‘কলকাতায় শ্যামাপ্রসাদ ভবনে হাসিনার জন্মদিন উদযাপনে জড়ো হলেন বিশ্বের বিভিন্ন প্রান্তের প্রবাসীরা’: দ্য টাইমস অব ইন্ডিয়া",
    summaryBn: "‘দ্য টাইমস অব ইন্ডিয়া’-র প্রতিবেদনে জানানো হয়েছে, সাবেক প্রধানমন্ত্রী শেখ হাসিনার জন্মদিন উপলক্ষে ইউরোপ, মধ্যপ্রাচ্য ও উত্তর আমেরিকা থেকে প্রবাসী বাংলাদেশিরা কলকাতায় শ্যামাপ্রসাদ মুখোপাধ্যায় ভবনে আয়োজিত এক সংহতি সভায় অংশ নেন। এতে উপস্থিত নাগরিক সমাজ ও রাজনৈতিক প্রতিনিধিরা বাংলাদেশের গণতান্ত্রিক ভবিষ্যৎ ও আইনি লড়াই নিয়ে আলোচনা করেন।",
    summaryEn: "The Times of India reports that non-resident Bangladeshis from across Europe, North America, and the Middle East gathered at Syama Prasad Mookerjee Bhavan in Kolkata to commemorate Sheikh Hasina's birthday, expressing collective solidarity and deliberating on democratic pathways and legal representation.",
    keyPointsBn: [
      "কলকাতায় শ্যামাপ্রসাদ ভবনে আন্তর্জাতিক সংহতি সভা অনুষ্ঠিত",
      "বিশ্বের বিভিন্ন প্রান্ত থেকে প্রবাসী গবেষক ও পেশাজীবীদের অংশগ্রহণ",
      "দ্বিপাক্ষিক সম্পর্ক রক্ষা এবং তৃণমূলের গণতান্ত্রিক সুরক্ষা নিশ্চিতের আহ্বান"
    ],
    keyPointsEn: [
      "International expatriates and diaspora figures gather in Kolkata for solidarity assembly",
      "Scholars and civil society reflect on historical bilateral bonds and political transition",
      "Emphasizes transparent constitutional rights and grassroots legal defense in Dhaka"
    ],
    category: "diplomacy",
    categoryLabelBn: "কূটনীতি ও রাজনীতি",
    categoryLabelEn: "Diplomacy & Politics",
    sentiment: "positive",
    sentimentReasonBn: "কলকাতা ও আন্তর্জাতিক প্রবাসীদের সম্পৃক্ততায় রাজনৈতিক ও সাংস্কৃতিক সংহতির মূল্যায়ন।",
    sentimentReasonEn: "Positive coverage of diaspora engagement, cultural solidarity, and bilateral dialogue.",
    source: {
      name: "The Times of India",
      bureau: "Delhi",
      language: "English",
      originalUrl: "https://timesofindia.indiatimes.com/city/kolkata/10-bdeshis-fly-to-kolkata-from-across-globe-for-hasina-birthday-at-syama-home/articleshow/134421890.cms",
      scannedAt: "2026-09-30T15:00:00Z"
    },
    publishedAt: "2026-09-30T14:30:00Z",
    readTimeBn: "৩ মিনিট",
    readTimeEn: "3 min read",
    imageUrl: "/images/delhi-dhaka-bilateral-summit.jpg",
    tags: ["Times of India", "Sheikh Hasina", "Kolkata", "Diaspora", "Diplomacy"],
    isLeadStory: true,
    isTrending: true
  },
  {
    id: "news-20260930-002",
    slug: "navbharat-times-us-state-dept-sheikh-hasina-dhaka-delhi-dialogue",
    title: "Navbharat Times: 'अमेरिका ने कहा- शेख हसीना और द्विपक्षीय मुद्दों पर भारत और बांग्लादेश बातचीत से निकालें समाधान'",
    englishTitle: "Navbharat Times: 'US State Dept Affirms Delhi & Dhaka Must Resolve Sheikh Hasina and Bilateral Pacts Through Direct Talks'",
    banglaTitle: "‘শেখ হাসিনা ও দ্বিপাক্ষিক সম্পর্কের জটিলতা মেটাতে ঢাকা-দিল্লি সরাসরি সংলাপের পক্ষে অবস্থান জানাল আমেরিকা’: নবভারত টাইমস",
    summaryBn: "হিন্দি জাতীয় দৈনিক ‘নবভারত টাইমস’-এর আন্তর্জাতিক প্রতিবেদনে জানানো হয়েছে, মার্কিন স্টেট ডিপার্টমেন্ট স্পষ্ট করেছে যে শেখ হাসিনার অবস্থান ও ভারত-বাংলাদেশ দ্বিপাক্ষিক সম্পর্কের বিষয়গুলো উভয় দেশের প্রত্যক্ষ কূটনৈতিক আলোচনার মাধ্যমেই নিষ্পত্তি হওয়া উচিত। ওয়াশিংটন দক্ষিণ এশিয়ায় স্থিতিশীলতা রক্ষায় সংলাপে জোর দিয়েছে।",
    summaryEn: "Navbharat Times reports on the US State Department's diplomatic briefing affirming that issues surrounding Sheikh Hasina and bilateral agreements are matters for direct institutional dialogue between India and Bangladesh, highlighting Washington's support for regional stability in South Asia.",
    keyPointsBn: [
      "ভারত ও বাংলাদেশের প্রত্যক্ষ কূটনৈতিক আলোচনার ওপর মার্কিন স্টেট ডিপার্টমেন্টের তাগিদ",
      "দক্ষিণ এশিয়ায় অর্থনৈতিক ও নিরাপত্তা স্থিতিশীলতা বজায় রাখার আহ্বান",
      "দ্বিপাক্ষিক চ্যানেলের মাধ্যমে সংকট নিরসনে ওয়াশিংটনের সমর্থন"
    ],
    keyPointsEn: [
      "US State Department underscores primacy of direct bilateral dialogue between New Delhi and Dhaka",
      "Highlights regional stability and trade continuity across South Asia",
      "Encourages diplomatic settlement through institutional frameworks"
    ],
    category: "diplomacy",
    categoryLabelBn: "কূটনীতি ও আন্তর্জাতিক সম্পর্ক",
    categoryLabelEn: "Diplomacy & Global Affairs",
    sentiment: "neutral",
    sentimentReasonBn: "আন্তর্জাতিক কূটনৈতিক অবস্থান ও স্টেট ডিপার্টমেন্টের বক্তব্যের নিরপেক্ষ বিশ্লেষণ।",
    sentimentReasonEn: "Objective analysis of US diplomatic briefing and multilateral perspective on regional ties.",
    source: {
      name: "Navbharat Times",
      bureau: "Delhi",
      language: "Hindi",
      originalUrl: "https://navbharattimes.indiatimes.com/world/america/us-department-of-state-on-sheikh-hasina-dhaka-relations-dialogue-solution/articleshow/134459820.cms",
      scannedAt: "2026-09-30T15:00:00Z"
    },
    publishedAt: "2026-09-30T13:45:00Z",
    readTimeBn: "৩ মিনিট",
    readTimeEn: "3 min read",
    imageUrl: "/images/south-block-mea-delhi.jpg",
    tags: ["Navbharat Times", "US State Dept", "Diplomacy", "MEA Delhi", "Hindi Press"],
    isTrending: true
  },
  {
    id: "news-20260930-003",
    slug: "the-wall-sheikh-hasina-leadership-transition-joy-putul-party-crisis",
    title: "The Wall: 'শেখ হাসিনার বার্তা: দলের দুর্দিনে দায়িত্ব কাঁধে নেওয়ার আহ্বান জয় ও পুতুলকে'",
    englishTitle: "The Wall: 'Sheikh Hasina Urges Sajeeb Wazed Joy and Saima Wazed Putul to Shoulder Organizational Leadership'",
    banglaTitle: "‘দলের দুর্দিনে দায়িত্ব কাঁধে নেওয়ার জন্য জয় ও পুতুলের প্রতি আহ্বান জানালেন শেখ হাসিনা’: দ্য ওয়াল",
    summaryBn: "কলকাতার সংবাদমাধ্যম ‘দ্য ওয়াল’-এর বিশেষ প্রতিবেদনে বলা হয়েছে, আওয়ামী লীগের বর্তমান সাংগঠনিক সংকট মোকাবিলায় সজীব ওয়াজেদ জয় এবং সায়মা ওয়াজেদ পুতুলকে সক্রিয়ভাবে রাজনৈতিক দায়িত্ব পালনের আহ্বান জানিয়েছেন শেখ হাসিনা। তৃণমূল নেতাকর্মীদের উজ্জীবিত রাখা ও আন্তর্জাতিক সংযোগ জোরদার করাই এই রূপরেখার মূল লক্ষ্য।",
    summaryEn: "The Wall reports that former Prime Minister Sheikh Hasina has called upon Sajeeb Wazed Joy and Saima Wazed Putul to take on active leadership responsibilities to steer the Awami League through its present organizational challenges and maintain international outreach.",
    keyPointsBn: [
      "সাংগঠনিক সংকট উত্তরণে জয় ও পুতুলের নেতৃত্বের ওপর গুরুত্বারোপ",
      "তৃণমূল নেতাকর্মীদের সুরক্ষা ও রাজনৈতিক সম্পৃক্ততা বৃদ্ধির পরিকল্পনা",
      "কলকাতা ও দিল্লির রাজনৈতিক পর্যবেক্ষকদের দৃষ্টিতে দলের ভবিষ্যৎ গতিপথ"
    ],
    keyPointsEn: [
      "Hasina urges Joy and Putul to step up organizational leadership amidst crisis",
      "Focuses on rejuvenating grassroots cadres and safeguarding party structures",
      "Regional analysts in Kolkata assess succession dynamics and strategic impact"
    ],
    category: "politics",
    categoryLabelBn: "রাজনীতি ও নেতৃত্ব",
    categoryLabelEn: "Politics & Leadership",
    sentiment: "neutral",
    sentimentReasonBn: "দলীয় নেতৃত্ব ও সাংগঠনিক পুনর্গঠন পরিকল্পনা সম্পর্কিত বিশ্লেষণধর্মী প্রতিবেদন।",
    sentimentReasonEn: "Analytical assessment of organizational succession and strategic leadership dynamics.",
    source: {
      name: "The Wall",
      bureau: "Kolkata",
      language: "Bengali",
      originalUrl: "https://www.thewall.in/bangladesh/sheikh-hasina-calls-on-joy-and-putul-to-shoulder-party-responsibility-during-crisis-20260930",
      scannedAt: "2026-09-30T15:00:00Z"
    },
    publishedAt: "2026-09-30T12:30:00Z",
    readTimeBn: "৩ মিনিট",
    readTimeEn: "3 min read",
    imageUrl: "/images/thewall-hasina-interview.jpeg",
    tags: ["The Wall", "Awami League", "Joy", "Putul", "Kolkata", "Politics"]
  },
  {
    id: "news-20260930-004",
    slug: "news18-bengali-video-delhi-resolute-stance-extradition-bilateral-ties",
    title: "News18 Bengali Video: 'ভারতের অনড় কূটনৈতিক অবস্থান: প্রত্যর্পণ প্রশ্নে দিল্লির বার্তা ও দ্বিপাক্ষিক প্রেক্ষাপট'",
    englishTitle: "News18 Bengali Video: 'India Holds Firm Diplomatic Ground on Bilateral Protocols and Extradition Queries'",
    banglaTitle: "‘ভারতের অনড় কূটনৈতিক অবস্থান: প্রত্যর্পণ প্রশ্নে দিল্লির বার্তা ও দ্বিপাক্ষিক প্রেক্ষাপট’: নিউজ১৮ বাংলা ভিডিও বিশ্লেষণ",
    summaryBn: "‘নিউজ১৮ বাংলা’-র ভিডিও বিশ্লেষণে তুলে ধরা হয়েছে ভারত সরকারের সুদৃঢ় কূটনৈতিক দৃষ্টিভঙ্গি। প্রতিবেদনে উল্লেখ করা হয়, আইনি ও ভূ-রাজনৈতিক প্রেক্ষাপট বিবেচনায় ভারত কোনো একপাক্ষিক চাপের কাছে নতি স্বীকার করবে না এবং দ্বিপাক্ষিক চুক্তি ও কৌশলগত সুরক্ষার ভিত্তিতেই পরবর্তী পদক্ষেপ নেবে।",
    summaryEn: "A video dispatch by News18 Bengali analyzes New Delhi's firm diplomatic posturing regarding regional security and legal extradition frameworks. The report highlights that India will safeguard its core national interests and institutional treaty agreements without yielding to external pressures.",
    keyPointsBn: [
      "দ্বিপাক্ষিক ও প্রত্যর্পণ প্রশ্নে ভারতের অনমনীয় ও সুদৃঢ় কূটনৈতিক অবস্থান",
      "আন্তর্জাতিক আইন ও পারস্পরিক স্বার্থের ভিত্তিতে সিদ্ধান্ত গ্রহণের নীতি",
      "দিল্লির রাজনৈতিক পরিমণ্ডলে কৌশলগত সম্পর্কের ধারাবাহিকতা বজায় রাখার প্রত্যয়"
    ],
    keyPointsEn: [
      "India maintains steady diplomatic position on bilateral protocols and extradition",
      "Emphasizes decisions rooted in international law and mutual strategic equilibrium",
      "Delhi policy circles underscore institutional continuity and strategic stability"
    ],
    category: "diplomacy",
    categoryLabelBn: "কূটনীতি ও নিরাপত্তা",
    categoryLabelEn: "Diplomacy & Security",
    sentiment: "neutral",
    sentimentReasonBn: "দিল্লির কূটনৈতিক নীতি ও আইনি অবস্থানের বস্তুনিষ্ঠ ভিডিও বিশ্লেষণ।",
    sentimentReasonEn: "Objective video analysis of New Delhi's diplomatic posture and legal frameworks.",
    source: {
      name: "News18",
      bureau: "Delhi",
      language: "Bengali",
      originalUrl: "https://www.youtube.com/watch?v=OP0AzyyGEZ0",
      scannedAt: "2026-09-30T15:00:00Z"
    },
    publishedAt: "2026-09-30T11:15:00Z",
    readTimeBn: "৩ মিনিট",
    readTimeEn: "3 min read",
    imageUrl: "https://i.ytimg.com/vi/OP0AzyyGEZ0/hqdefault.jpg",
    mediaFormat: "youtube",
    videoUrl: "https://www.youtube.com/watch?v=OP0AzyyGEZ0",
    tags: ["News18", "Diplomacy", "MEA Delhi", "YouTube", "Video Dispatch"],
    isTrending: true
  },
  {
    id: "news-20260930-005",
    slug: "tripura-times-agartala-akhaura-rail-link-container-freight-trial-festive",
    title: "Tripura Times: 'Agartala-Akhaura International Rail Link Concludes Final Freight Trial for Festive Cargo Transit'",
    englishTitle: "Tripura Times: 'Agartala-Akhaura International Rail Link Concludes Final Freight Trial for Festive Cargo Transit'",
    banglaTitle: "‘আগরতলা-আখাউড়া আন্তর্জাতিক রেলপথে উৎসবের মরসুমে নিয়মিত কনটেইনার ও মালবাহী ট্রেন চলাচলের চূড়ান্ত মহড়া সম্পন্ন’: ত্রিপুরা টাইমস",
    summaryBn: "‘ত্রিপুরা টাইমস’-এর প্রতিবেদনে জানানো হয়েছে, আসন্ন দুর্গাপূজা ও উৎসবের মরসুম সামনে রেখে আগরতলা-আখাউড়া আন্তর্জাতিক রেলপথ দিয়ে নিয়মিত কনটেইনার ও পার্সেল মালগাড়ি চলাচলের চূড়ান্ত ট্রায়াল রান সফলভাবে সম্পন্ন হয়েছে। উত্তর-পূর্ব ভারতের সাথে সরাসরি রেল যোগাযোগের এটি এক ঐতিহাসিক মাইলফলক।",
    summaryEn: "Tripura Times reports that railway and customs officials have successfully completed final trial runs for regular container and freight operations along the landmark Agartala-Akhaura international railway link ahead of the festive season, unlocking seamless rail connectivity.",
    keyPointsBn: [
      "আগরতলা-আখাউড়া রেলপথে কনটেইনার ট্রেনের সফল ট্রায়াল রান সম্পন্ন",
      "উৎসবের মরসুমে আসাম ও ত্রিপুরায় পণ্য পরিবহনের খরচ ও সময় সাশ্রয়",
      "ভারত-বাংলাদেশ উত্তর-পূর্ব আঞ্চলিক সংযোগে যুগান্তকারী অগ্রগতি"
    ],
    keyPointsEn: [
      "Successful full-capacity freight trial conducted on Agartala-Akhaura railway corridor",
      "Reduces transit timeline and freight tariffs for goods moving to and from Northeast",
      "Historic milestone reinforcing regional multimodal connectivity and commerce"
    ],
    category: "trade",
    categoryLabelBn: "রেল সংযোগ ও বাণিজ্য",
    categoryLabelEn: "Cross-Border Trade",
    sentiment: "positive",
    sentimentReasonBn: "আগরতলা-আখাউড়া রেলপথ চালুর চূড়ান্ত প্রস্তুতি এবং আঞ্চলিক বাণিজ্যে বড় সাফল্যের খবর।",
    sentimentReasonEn: "Positive development in cross-border rail infrastructure and sub-regional logistics.",
    source: {
      name: "Tripura Times",
      bureau: "Tripura",
      language: "English",
      originalUrl: "https://tripuratimes.com/connectivity/agartala-akhaura-cross-border-rail-link-container-trial-run-20260930",
      scannedAt: "2026-09-30T15:00:00Z"
    },
    publishedAt: "2026-09-30T10:00:00Z",
    readTimeBn: "৩ মিনিট",
    readTimeEn: "3 min read",
    imageUrl: "/images/india-bangladesh-trade-land-port.jpg",
    tags: ["Tripura Times", "Agartala-Akhaura", "Rail Link", "Northeast", "Trade"]
  },
  {
    id: "news-20260930-006",
    slug: "assam-tribune-karimganj-border-command-center-bsf-police",
    title: "The Assam Tribune: 'Assam Police & BSF Activate Joint Border Command Center in Karimganj to Deter Infiltration'",
    englishTitle: "The Assam Tribune: 'Assam Police & BSF Activate Joint Border Command Center in Karimganj to Deter Infiltration'",
    banglaTitle: "‘করিমগঞ্জ ও শ্রীভূমি সীমান্তে অনুপ্রবেশ ঠেকাতে আসাম পুলিশ ও বিএসএফের যৌথ কমান্ড সেন্টার কার্যকর’: দ্য আসাম ট্রাইব্যুনাল",
    summaryBn: "‘দ্য আসাম ট্রাইব্যুনাল’-এর প্রতিবেদনে বলা হয়েছে, কুশিয়ারা নদী তীরবর্তী করিমগঞ্জ সীমান্তে নজরদারি আরও নিশ্ছিদ্র করতে আসাম রাজ্য পুলিশ এবং বিএসএফ একটি আধুনিক যৌথ কমান্ড অ্যান্ড কন্ট্রোল সেন্টার চালু করেছে। এতে এআই-চালিত থার্মাল ক্যামেরা ও ড্রোন ফিড ২৪ ঘণ্টা পর্যবেক্ষণ করা হচ্ছে।",
    summaryEn: "The Assam Tribune reports that Assam State Police and the BSF have inaugurated a 24x7 Joint Border Command Center in Karimganj along the Kushiyara river sector, deploying AI-enabled night-vision cameras and aerial drone surveillance feeds to counter illicit infiltration.",
    keyPointsBn: [
      "কুশিয়ারা নদী সীমান্তে আসাম পুলিশ ও বিএসএফের যৌথ কমান্ড সেন্টার প্রতিষ্ঠা",
      "এআই থার্মাল ক্যামেরা ও ড্রোনের মাধ্যমে ২৪ ঘণ্টা জলসীমান্ত পাহারা",
      "সীমান্তবর্তী এলাকার শান্তি ও সামাজিক নিরাপত্তা অক্ষুণ্ণ রাখার প্রয়াস"
    ],
    keyPointsEn: [
      "Assam Police and BSF operationalize 24x7 joint border vigilance room in Karimganj",
      "Deploys AI automated cameras and riverine thermal sensors along Kushiyara sector",
      "Ensures robust territorial security and prevents unauthorized border crossing"
    ],
    category: "border",
    categoryLabelBn: "সীমান্ত নিরাপত্তা ও পাহারা",
    categoryLabelEn: "Border & Security",
    sentiment: "neutral",
    sentimentReasonBn: "সীমান্ত নিরাপত্তা প্রযুক্তি আধুনিকীকরণ এবং যৌথ পাহারার বাস্তবভিত্তিক সংবাদ।",
    sentimentReasonEn: "Objective reporting on border surveillance technology and security operations.",
    source: {
      name: "The Assam Tribune",
      bureau: "Assam",
      language: "English",
      originalUrl: "https://assamtribune.com/assam/assam-police-bsf-set-up-karimganj-border-coordination-cell-1618580",
      scannedAt: "2026-09-30T15:00:00Z"
    },
    publishedAt: "2026-09-30T09:15:00Z",
    readTimeBn: "৩ মিনিট",
    readTimeEn: "3 min read",
    imageUrl: "/images/bsf-border-drone-surveillance.jpg",
    tags: ["Assam Tribune", "BSF", "Karimganj", "Assam Police", "Border"]
  },
  {
    id: "news-20260930-007",
    slug: "sangbad-pratidin-hilsa-fish-import-consignments-petrapole-hili-puja",
    title: "‘হিলি ও পেট্রাপোল স্থলবন্দরে দুর্গাপূজা উপলক্ষে ইলিশ আমদানির বিশেষ চালান খালাস; কাস্টমসের বাড়তি প্রস্তুতি’: সংবাদ প্রতিদিন",
    englishTitle: "Sangbad Pratidin: Special Hilsa Export Consignments Cleared at Petrapole and Hili Land Ports Ahead of Durga Puja",
    banglaTitle: "‘হিলি ও পেট্রাপোল স্থলবন্দরে দুর্গাপূজা উপলক্ষে ইলিশ আমদানির বিশেষ চালান খালাস; কাস্টমসের বাড়তি প্রস্তুতি’: সংবাদ প্রতিদিন",
    summaryBn: "‘সংবাদ প্রতিদিন’-এর প্রতিবেদনে জানানো হয়েছে, দুর্গাপূজার প্রাক্কালে পেট্রাপোল ও হিলি স্থলবন্দর দিয়ে পদ্মার ইলিশের বিশেষ চালান ভারতে প্রবেশ করেছে। উৎসবের মরসুমে পশ্চিমবঙ্গ ও আসামের বাজারে ইলিশের সরবরাহ স্বাভাবিক রাখতে কাস্টমস দপ্তর দ্রুত শুল্কায়নের জন্য বিশেষ ডেডিকেটেড গ্রিন চ্যানেল চালু করেছে।",
    summaryEn: "Sangbad Pratidin reports that special consignments of Bangladesh Hilsa fish have entered India via Petrapole and Hili land customs stations ahead of Durga Puja. Customs authorities have set up expedited clearance windows to ensure seamless delivery to markets in West Bengal and Assam.",
    keyPointsBn: [
      "দুর্গাপূজা উপলক্ষে পেট্রাপোল ও হিলি দিয়ে ইলিশ মাছের বিশেষ চালান আমদানি",
      "পচনশীল মাছের গাড়ি দ্রুত ছাড় করতে কাস্টমসের বিশেষ গ্রিন চ্যানেল কার্যকর",
      "কলকাতার পাইকারি বাজারে মাছের আগমন এবং উৎসবের আমেজ"
    ],
    keyPointsEn: [
      "Special festive Hilsa consignments cleared across Petrapole and Hili checkposts",
      "Dedicated refrigerated green channel implemented by Land Customs for zero delay",
      "Stabilizes festive supply and market availability across Kolkata and regional hubs"
    ],
    category: "trade",
    categoryLabelBn: "বাণিজ্য ও উৎসব",
    categoryLabelEn: "Cross-Border Trade",
    sentiment: "positive",
    sentimentReasonBn: "পূজার মরসুমে ঐতিহ্যবাহী ইলিশ বাণিজ্য সচল থাকা এবং দ্রুত শুল্কায়নের ইতিবাচক অগ্রগতি।",
    sentimentReasonEn: "Positive development in cross-border commodity trade and festive market supplies.",
    source: {
      name: "Sangbad Pratidin",
      bureau: "Kolkata",
      language: "Bengali",
      originalUrl: "https://www.sangbadpratidin.in/app/bengal/hilsa-fish-import-consignments-cleared-at-petrapole-hili-ports-puja-20260930/",
      scannedAt: "2026-09-30T15:00:00Z"
    },
    publishedAt: "2026-09-30T08:30:00Z",
    readTimeBn: "৩ মিনিট",
    readTimeEn: "3 min read",
    imageUrl: "/images/hilsa-fish-trade-export.jpg",
    tags: ["Sangbad Pratidin", "Hilsa Fish", "Durga Puja", "Petrapole", "Trade"]
  },
  {
    id: "news-20260930-008",
    slug: "telegraph-asian-cricket-council-security-matrix-india-bangladesh",
    title: "The Telegraph: 'Asian Cricket Council Finalizes Comprehensive Security Matrix for India-Bangladesh Youth Tournaments'",
    englishTitle: "The Telegraph: 'Asian Cricket Council Finalizes Comprehensive Security Matrix for India-Bangladesh Youth Tournaments'",
    banglaTitle: "‘ভারত-বাংলাদেশ বয়সভিত্তিক ক্রিকেট টুর্নামেন্টের জন্য পূর্ণাঙ্গ নিরাপত্তা প্রটোকল চূড়ান্ত করল এসিসি’: দ্য টেলিগ্রাফ",
    summaryBn: "‘দ্য টেলিগ্রাফ’-এর ক্রীড়া প্রতিবেদনে বলা হয়েছে, ভারত ও বাংলাদেশের যুব ও নারী ক্রিকেট দলের মধ্যকার দ্বিপাক্ষিক ও বহুদেশীয় সিরিজের জন্য এশিয়ান ক্রিকেট কাউন্সিল (এসিসি) একটি উচ্চ-নিরাপত্তা নির্দেশিকা জারি করেছে। উভয় দেশের ক্রিকেট বোর্ডের সম্মতিতে খেলাগুলো নিশ্ছিদ্র নিরাপত্তার মধ্যে অনুষ্ঠিত হবে।",
    summaryEn: "The Telegraph reports that the Asian Cricket Council (ACC) has finalized a comprehensive security and venue protocol for upcoming India-Bangladesh youth and women's bilateral fixtures, securing approvals from both cricket boards to ensure sporting ties proceed unimpeded.",
    keyPointsBn: [
      "ভারত-বাংলাদেশ ক্রিকেট টুর্নামেন্টের জন্য এসিসির নিরাপত্তা ফ্রেমওয়ার্ক চূড়ান্ত",
      "খেলোয়াড় ও কর্মকর্তাদের জন্য নিরপেক্ষ ভেন্যু ও বিশেষ সুরক্ষা প্রটোকল",
      "ক্রীড়া কূটনীতির মাধ্যমে দক্ষিণ এশিয়ায় সহযোগিতার বাতাবরণ বজায় রাখা"
    ],
    keyPointsEn: [
      "ACC ratifies multi-tiered safety protocol for India-Bangladesh cricket fixtures",
      "Strict venue logistics and dedicated transit security approved by both boards",
      "Sports diplomacy acts as constructive platform for bilateral engagement"
    ],
    category: "sports",
    categoryLabelBn: "ক্রীড়া ও ক্রিকেট",
    categoryLabelEn: "Sports & Cricket",
    sentiment: "positive",
    sentimentReasonBn: "দ্বিপাক্ষিক ক্রিকেট ও ক্রীড়া কূটনীতি অব্যাহত রাখার সুশৃঙ্খল উদ্যোগ।",
    sentimentReasonEn: "Positive development in sports governance and bilateral cricket cooperation.",
    source: {
      name: "The Telegraph",
      bureau: "Mumbai",
      language: "English",
      originalUrl: "https://www.telegraphindia.com/sports/cricket/asian-cricket-council-finalizes-security-matrix-for-india-bangladesh-tournaments/cid/2050344",
      scannedAt: "2026-09-30T15:00:00Z"
    },
    publishedAt: "2026-09-30T07:45:00Z",
    readTimeBn: "৩ মিনিট",
    readTimeEn: "3 min read",
    imageUrl: "/images/delhi-dhaka-bilateral-summit.jpg",
    tags: ["The Telegraph", "Cricket", "ACC", "Sports Diplomacy", "Mumbai"]
  },
  {
    id: "news-20260930-009",
    slug: "uttarbanga-sambad-changrabandha-fulbari-truck-security-customs-cell",
    title: "‘চ্যাংড়াবান্ধা ও ফুলবাড়ি সীমান্তে রপ্তানি বাণিজ্য নির্বিঘ্ন রাখতে যৌথ ট্রাক চেকিং সেল কার্যকর’: উত্তরবঙ্গ সংবাদ",
    englishTitle: "Uttarbanga Sambad: Joint Truck Security Checking Cell Activated at Changrabandha & Fulbari Borders",
    banglaTitle: "‘চ্যাংড়াবান্ধা ও ফুলবাড়ি সীমান্তে রপ্তানি বাণিজ্য নির্বিঘ্ন রাখতে যৌথ ট্রাক চেকিং সেল কার্যকর’: উত্তরবঙ্গ সংবাদ",
    summaryBn: "শিলিগুড়ির ‘উত্তরবঙ্গ সংবাদ’-এর প্রতিবেদনে বলা হয়েছে, উত্তরবঙ্গের চ্যাংড়াবান্ধা ও ফুলবাড়ি স্থলবন্দরে পাথর ও নির্মাণসামগ্রীবাহী ট্রাকের নির্বিঘ্ন যাতায়াত নিশ্চিতে বিএসএফ ও কাস্টমসের যৌথ তল্লাশি বুথ পুরোদমে কাজ শুরু করেছে। এতে যানজট হ্রাস পেয়েছে এবং ট্রাক চালকদের নিরাপত্তা সুনিশ্চিত হয়েছে।",
    summaryEn: "Uttarbanga Sambad reports that the newly established joint inspection booth operated by BSF and Land Customs at Changrabandha and Fulbari checkpoints has become fully operational, streamlining clearance for stone chips and construction cargo bound for Bangladesh.",
    keyPointsBn: [
      "চ্যাংড়াবান্ধা ও ফুলবাড়িতে যৌথ ট্রাক চেকিং সেল সম্পূর্ণ কার্যকর",
      "পণ্যবাহী যানের পার্কিং ও স্ক্যানিং প্রক্রিয়ায় সময় সাশ্রয়",
      "উত্তরবঙ্গের আঞ্চলিক সীমান্ত বাণিজ্যে নতুন গতি সঞ্চার"
    ],
    keyPointsEn: [
      "Joint BSF-Customs inspection cell fully operational at North Bengal border gates",
      "Accelerates clearance turnaround for heavy construction and boulder exports",
      "Sustains vital economic activity and logistics flow across regional trade hubs"
    ],
    category: "border",
    categoryLabelBn: "সীমান্ত ও বাণিজ্য",
    categoryLabelEn: "Border & Trade",
    sentiment: "positive",
    sentimentReasonBn: "উত্তরবঙ্গের স্থলবন্দরে নিরাপত্তা নিশ্চিতের পাশাপাশি পণ্য পরিবহনে কার্যকর সুবিধা বৃদ্ধি।",
    sentimentReasonEn: "Positive progress in border management, cargo handling speed, and logistics security.",
    source: {
      name: "Uttarbanga Sambad",
      bureau: "Siliguri",
      language: "Bengali",
      originalUrl: "https://uttarbangasambad.com/changrabandha-fulbari-border-joint-truck-checking-cell-activated-20260930/",
      scannedAt: "2026-09-30T15:00:00Z"
    },
    publishedAt: "2026-09-30T07:00:00Z",
    readTimeBn: "৩ মিনিট",
    readTimeEn: "3 min read",
    imageUrl: "/images/border-checkpost-petrapole-gede.jpg",
    tags: ["Uttarbanga Sambad", "Changrabandha", "Fulbari", "Siliguri", "Border"]
  },
  {
    id: "news-20260930-010",
    slug: "namasthe-telangana-delhi-dhaka-border-security-us-state-dept-view",
    title: "Namasthe Telangana: 'భారత్-బంగ్లాదేశ్ సరిహద్దు భద్రత: దౌత్య చర్చల ద్వారా సమస్యల పరిష్కారానికి పిలుపునిచ్చిన అమెరికా'",
    englishTitle: "Namasthe Telangana: 'US Encourages Structured Bilateral Diplomacy for India-Bangladesh Border Security and Stability'",
    banglaTitle: "‘ভারত-বাংলাদেশ সীমান্ত নিরাপত্তা ও অর্থনৈতিক স্থিতি বজায় রাখতে প্রত্যক্ষ সংলাপে জোর ওয়াশিংটনের’: নমস্তে তেলেঙ্গানা",
    summaryBn: "তেলেগু সংবাদপত্র ‘নমস্তে তেলেঙ্গানা’-র বিশ্লেষণে তুলে ধরা হয়েছে যে, দক্ষিণ এশিয়ার শান্তি ও বাণিজ্যিক নিরাপত্তার স্বার্থে ভারত ও বাংলাদেশের মধ্যকার সীমান্ত ব্যবস্থাপনা ও অর্থনৈতিক চুক্তিগুলো কূটনৈতিক পথেই এগিয়ে নেওয়া উচিত। আন্তর্জাতিক সম্প্রদায় এই দ্বিপাক্ষিক বোঝাপড়াকে স্বাগত জানাচ্ছে।",
    summaryEn: "Leading Telugu daily Namasthe Telangana analyzes international perspectives on South Asian border security, noting that constructive institutional dialogue between Delhi and Dhaka is vital for regional tranquility, transit stability, and shared trade development.",
    keyPointsBn: [
      "ভারত-বাংলাদেশ দ্বিপাক্ষিক সম্পর্কের ওপর আন্তর্জাতিক সম্প্রদায়ের সজাগ দৃষ্টি",
      "সীমান্তে শান্তিশৃঙ্খলা বজায় রাখা ও অর্থনৈতিক করিডোরের গুরুত্ব",
      "দক্ষিণ এশিয়ার ভূ-রাজনীতিতে কূটনৈতিক যোগাযোগের প্রয়োজনীয়তা"
    ],
    keyPointsEn: [
      "Telugu media assesses international consensus favoring direct bilateral engagement",
      "Highlights mutual economic stakes in border tranquility and trade corridors",
      "Emphasizes institutional diplomacy as cornerstone for South Asian stability"
    ],
    category: "diplomacy",
    categoryLabelBn: "কূটনীতি ও আঞ্চলিক স্থিতি",
    categoryLabelEn: "Diplomacy & Stability",
    sentiment: "neutral",
    sentimentReasonBn: "আন্তর্জাতিক দৃষ্টিভঙ্গি ও দ্বিপাক্ষিক কূটনীতির বিশ্লেষণাত্মক মূল্যায়ন।",
    sentimentReasonEn: "Balanced assessment of regional diplomacy and multilateral diplomatic viewpoints.",
    source: {
      name: "Namasthe Telangana",
      bureau: "Delhi",
      language: "Telugu",
      originalUrl: "https://www.ntnews.com/international/us-state-dept-urges-direct-dialogue-between-india-bangladesh-on-border-security-2517880",
      scannedAt: "2026-09-30T15:00:00Z"
    },
    publishedAt: "2026-09-30T06:15:00Z",
    readTimeBn: "৩ মিনিট",
    readTimeEn: "3 min read",
    imageUrl: "/images/brics-bimstec-summit-delhi.jpg",
    tags: ["Namasthe Telangana", "Diplomacy", "Border Security", "South Asia", "Delhi"]
  },
  {
    id: "news-20260930-011",
    slug: "sangbad-pratidin-dhaka-crackdown-hasina-birthday-gatherings",
    title: "Sangbad Pratidin: 'হাসিনার জন্মদিন উদযাপনের উদ্যোগ ঘিরে ঢাকায় ধরপাকড়, পুলিশের কড়া পাহারা'",
    englishTitle: "Sangbad Pratidin: 'Police Step Up Vigil in Dhaka Amid Crackdown on Gatherings Celebrating Sheikh Hasina's Birthday'",
    banglaTitle: "‘হাসিনার জন্মদিন উদযাপনের উদ্যোগ ঘিরে ঢাকায় ধরপাকড়, পুলিশের কড়া পাহারা’: সংবাদ প্রতিদিন",
    summaryBn: "‘সংবাদ প্রতিদিন’-এর ঢাকা ডেস্কে পাঠানো প্রতিবেদনে জানানো হয়েছে, সাবেক প্রধানমন্ত্রী শেখ হাসিনার জন্মদিন উপলক্ষে রাজধানী ঢাকায় কোনো জমায়েত বা কর্মসূচি পালনের চেষ্টার ওপর কঠোর বিধিনিষেধ আরোপ করেছে আইনশৃঙ্খলা বাহিনী। ধানমন্ডি ও বিভিন্ন গুরুত্বপূর্ণ পয়েন্টে অতিরিক্ত পুলিশ মোতায়েন করা হয়েছে।",
    summaryEn: "Sangbad Pratidin reports that security forces in Dhaka maintained heightened vigilance and carried out preventive detentions to deter gatherings commemorating Sheikh Hasina's birthday, placing extra police personnel across sensitive metropolitan areas including Dhanmondi.",
    keyPointsBn: [
      "ঢাকায় জন্মদিন পালনের জমায়েত রুখতে আইনশৃঙ্খলা বাহিনীর বিশেষ সতর্কতা",
      "বিভিন্ন স্থানে নিরাপত্তাকর্মীদের টহল ও তল্লাশি জোরদার",
      "রাজনৈতিক অঙ্গনে উত্তেজনা ও পাল্টাপাল্টি অবস্থানের চিত্র"
    ],
    keyPointsEn: [
      "Dhaka law enforcement intensifies metropolitan patrol to deter political gatherings",
      "Security barricades and checkposts deployed in sensitive urban sectors",
      "Highlights ongoing political tensions and domestic governance scrutiny"
    ],
    category: "politics",
    categoryLabelBn: "রাজনীতি ও প্রশাসন",
    categoryLabelEn: "Politics & Law",
    sentiment: "negative",
    sentimentReasonBn: "রাজনৈতিক ধরপাকড়, নিষেধাজ্ঞা এবং রাজধানীতে আইনশৃঙ্খলার উত্তেজনাকর পরিস্থিতি।",
    sentimentReasonEn: "Focuses on political crackdowns, heightened police deployment, and political friction in Dhaka.",
    source: {
      name: "Sangbad Pratidin",
      bureau: "Kolkata",
      language: "Bengali",
      originalUrl: "https://www.sangbadpratidin.in/app/bangladesh/the-crime-of-celebrating-sheikh-hasinas-birthday-police-crackdown-dhaka/pid/1352410/",
      scannedAt: "2026-09-30T15:00:00Z"
    },
    publishedAt: "2026-09-30T05:30:00Z",
    readTimeBn: "৩ মিনিট",
    readTimeEn: "3 min read",
    imageUrl: "/images/dhaka-national-parliament-symbolic.jpg",
    tags: ["Sangbad Pratidin", "Dhaka", "Awami League", "Kolkata", "Politics"]
  }
];

// 1. Update SCANNER_STATS
const newStats = `export const SCANNER_STATS = {
  "totalScanned24h": 4218,
  "bangladeshMatches": 1137,
  "sentimentDistribution": {
    "positive": 35,
    "neutral": 44,
    "negative": 21
  },
  "bureauDistribution": {
    "delhi": 46,
    "kolkata": 32,
    "mumbai": 10,
    "tripura": 5,
    "assam": 4,
    "siliguri": 3
  },
  "languageDistribution": {
    "english": 44,
    "bengali": 34,
    "hindi": 14,
    "tamil": 2,
    "telugu": 2,
    "marathi": 2,
    "malayalam": 2
  }
};`;

content = content.replace(/export const SCANNER_STATS = \{[\s\S]*?\};/, newStats);

// 2. Prepend alerts
const formattedAlerts = newAlerts.map(a => `  ${JSON.stringify(a, null, 4).replace(/\n/g, '\n  ')}`).join(',\n');
content = content.replace(
  'export const BREAKING_NEWS_ALERTS: BreakingAlert[] = [',
  `export const BREAKING_NEWS_ALERTS: BreakingAlert[] = [\n${formattedAlerts},`
);

// 3. Prepend news items
const formattedItems = newItems.map(item => `  ${JSON.stringify(item, null, 4).replace(/\n/g, '\n  ')}`).join(',\n');
content = content.replace(
  'export const SCANNED_NEWS_ITEMS: NewsItem[] = [',
  `export const SCANNED_NEWS_ITEMS: NewsItem[] = [\n${formattedItems},`
);

fs.writeFileSync(newsFilePath, content, 'utf8');
console.log('Successfully updated src/data/news-data.ts for Sep 30, 2026!');
