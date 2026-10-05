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
    id: "alert-075",
    headlineBn: "‘ভারতে শেখ হাসিনার অবস্থান দ্বিপাক্ষিক সম্পর্কের আলোচনায় নিয়মিত পর্যালোচিত হচ্ছে’: দ্য হিন্দু",
    headlineEn: "The Hindu: Sheikh Hasina's Status in India Examined Through Formal Diplomatic & Legal Channels",
    timeAgoBn: "১০ মিনিট আগে",
    timeAgoEn: "10 mins ago",
    sourceName: "The Hindu",
    sourceBureau: "Delhi",
    sentiment: "neutral",
    url: "https://www.thehindu.com/news/national/sheikh-hasinas-activities-in-india-principal-challenge-in-planning-bangladesh-pms-visit/article71546940.ece"
  },
  {
    id: "alert-074",
    headlineBn: "‘আইনি কাঠামো ও দ্বিপাক্ষিক চুক্তির ভিত্তিতেই প্রত্যর্পণ মূল্যায়ন অব্যাহত’: টাইমস অব ইন্ডিয়া",
    headlineEn: "Times of India: Political Will and Legal Protocol Core to Hasina Extradition Review",
    timeAgoBn: "২৫ মিনিট আগে",
    timeAgoEn: "25 mins ago",
    sourceName: "The Times of India",
    sourceBureau: "Delhi",
    sentiment: "neutral",
    url: "https://timesofindia.indiatimes.com/world/south-asia/indias-political-will-needed-to-extradite-sheikh-hasina-bangladesh/articleshow/134683095.cms"
  },
  {
    id: "alert-073",
    headlineBn: "‘ফুলবাড়ি ও চ্যাংড়াবান্ধায় পণ্য খালাস ত্বরান্বিত করতে বিএসএফ-কাস্টমসের সমন্বয় সভা’: উত্তরবঙ্গ সংবাদ",
    headlineEn: "Uttarbanga Sambad: BSF & Customs Hold Joint Coordination Summit at Fulbari Land Port",
    timeAgoBn: "৪০ মিনিট আগে",
    timeAgoEn: "40 mins ago",
    sourceName: "Uttarbanga Sambad",
    sourceBureau: "Siliguri",
    sentiment: "positive",
    url: "https://uttarbangasambad.com/siliguri-fulbari-changrabandha-border-truckers-security-customs-meeting-20260924/"
  },
  {
    id: "alert-072",
    headlineBn: "‘শ্রীমন্তপুর স্থল শুল্ক স্টেশনে পণ্য পরিবহনের ধারা অব্যাহত’: ত্রিপুরা টাইমস",
    headlineEn: "Tripura Times: Srimantapur LCS Records Freight Transit Continuity with Bangladesh",
    timeAgoBn: "১ ঘণ্টা আগে",
    timeAgoEn: "1 hour ago",
    sourceName: "Tripura Times",
    sourceBureau: "Tripura",
    sentiment: "positive",
    url: "https://tripuratimes.com/trade-and-commerce/srimantapur-lcs-freight-surge-bangladesh-cross-border-connectivity-20260924"
  }
];

const newItems = [
  {
    id: "news-20261005-001",
    slug: "the-hindu-sheikh-hasina-presence-in-india-diplomatic-engagements",
    title: "The Hindu: Sheikh Hasina's Presence in India Key Factor in Regional Diplomatic Engagements, Envoy Notes",
    englishTitle: "The Hindu: Sheikh Hasina's Presence in India Key Factor in Regional Diplomatic Engagements, Envoy Notes",
    banglaTitle: "‘ভারতে শেখ হাসিনার অবস্থান দ্বিপাক্ষিক সম্পর্কের প্রধান অনুঘটক’: দ্য হিন্দু প্রতিবেদনে ভারতীয় হাইকমিশনার",
    summaryBn: "বাংলাদেশ ও ভারতের মধ্যকার উচ্চপর্যায়ের সাম্প্রতিক কূটনৈতিক আলোচনায় সাবেক প্রধানমন্ত্রী শেখ হাসিনার ভারতে অবস্থানের বিষয়টি একটি প্রধান বিষয় হিসেবে আলোচিত হয়েছে। ভারতের হাইকমিশনার জানান, আইনি প্রক্রিয়া ও প্রতিষ্ঠিত কাঠামোর আওতায় এ সংক্রান্ত প্রস্তাব ও উদ্বেগের বিষয়গুলো পর্যালোচনা করা হচ্ছে।",
    summaryEn: "Recent diplomatic discussions between Bangladesh and India highlighted former Prime Minister Sheikh Hasina's presence in India as a significant point of reference. The Indian envoy noted that all related communications and legal requests are being reviewed under established bilateral legal frameworks.",
    keyPointsBn: [
      "দ্বিপাক্ষিক বৈঠকে শেখ হাসিনার ভারতে অবস্থান ও আইনগত প্রক্রিয়ার অগ্রগতি পর্যালোচনা",
      "ভারতের পক্ষ থেকে দীর্ঘমেয়াদী আঞ্চলিক স্থিতিশীলতা ও সহযোগিতার ওপর জোর প্রদান",
      "প্রত্যর্পণ বা আইনগত আবেদনের বিষয়ে নির্ধারিত সময়সীমার পরিবর্তে আইনি বিধান অনুসরণের অবস্থান"
    ],
    keyPointsEn: [
      "Diplomatic dialogues review Hasina's status in India within existing legal mechanisms",
      "India reiterates focus on long-term regional stability and bilateral institutional cooperation",
      "Extradition inquiries evaluated through structured judicial and legal channels without fixed deadlines"
    ],
    category: "diplomacy",
    categoryLabelBn: "কূটনীতি ও রাজনীতি",
    categoryLabelEn: "Diplomacy & Politics",
    sentiment: "neutral",
    sentimentReasonBn: "দ্বিপাক্ষিক কূটনৈতিক সংলাপ ও আইনি পর্যালোচনার বস্তুনিষ্ঠ বিশ্লেষণাত্মক প্রতিবেদন।",
    sentimentReasonEn: "Objective analytical coverage of diplomatic dialogues and legal review frameworks.",
    source: {
      name: "The Hindu",
      bureau: "Delhi",
      language: "English",
      originalUrl: "https://www.thehindu.com/news/national/sheikh-hasinas-activities-in-india-principal-challenge-in-planning-bangladesh-pms-visit/article71546940.ece",
      scannedAt: "2026-10-05T20:00:00Z"
    },
    publishedAt: "2026-10-05T08:30:00Z",
    readTimeBn: "৪ মিনিট",
    readTimeEn: "4 mins",
    imageUrl: "/images/default-geopolitical-map.jpg",
    mediaFormat: "rss",
    tags: ["বাংলাদেশ", "ভারত", "কূটনীতি"]
  },
  {
    id: "news-20261005-002",
    slug: "times-of-india-political-will-legal-framework-hasina-extradition",
    title: "Times of India: Political Will and Legal Framework Core to Hasina Extradition Review, Asserts Indian High Commission",
    englishTitle: "Times of India: Political Will and Legal Framework Core to Hasina Extradition Review, Asserts Indian High Commission",
    banglaTitle: "‘রাজনৈতিক সদিচ্ছা ও আইনি প্রক্রিয়ার ওপর নির্ভরশীল শেখ হাসিনার প্রত্যর্পণ মূল্যায়ন’: টাইমস অব ইন্ডিয়া",
    summaryBn: "টাইমস অব ইন্ডিয়ার প্রতিবেদনে প্রকাশ, শেখ হাসিনার প্রত্যর্পণ সম্পর্কিত ঢাকার আবেদনের জবাবে ভারতীয় হাইকমিশনার স্পষ্ট করেছেন যে বিষয়টি সুনির্দিষ্ট আইনি ও বিচারিক বিধিমালার অধীনে পর্যালোচিত হচ্ছে। যেকোনো দ্বিপাক্ষিক সিদ্ধান্তের ক্ষেত্রে আইনি ভিত্তি ও উভয় দেশের দীর্ঘমেয়াদী কূটনৈতিক ভারসাম্য গুরুত্বপূর্ণ।",
    summaryEn: "The Times of India reports that in response to Dhaka's extradition request regarding Sheikh Hasina, the Indian High Commission emphasized that the matter is being evaluated within strict judicial and bilateral treaty frameworks, balancing legal obligations and regional diplomacy.",
    keyPointsBn: [
      "আইনি চুক্তি ও দ্বি-পাক্ষিক প্রত্যর্পণ বিধিমালার অধীনে আবেদন পর্যালোচনার প্রক্রিয়া অব্যাহত",
      "ভারতের মতে যেকোনো চূড়ান্ত সিদ্ধান্ত সুনির্দিষ্ট বিচারিক পর্যায় অতিক্রম করবে",
      "প্রতিবেশী দেশের সাথে বন্ধুত্বপূর্ণ অর্থনৈতিক ও বাণিজ্য সম্পর্ক বজায় রাখার প্রতি অঙ্গীকার"
    ],
    keyPointsEn: [
      "Formal requests being examined under bilateral extradition treaty terms and legal precedents",
      "New Delhi underlines that final determinations must navigate defined judicial procedures",
      "Reaffirms commitment to sustaining economic, commercial, and border trade cooperation"
    ],
    category: "politics",
    categoryLabelBn: "রাজনীতি",
    categoryLabelEn: "Politics",
    sentiment: "neutral",
    sentimentReasonBn: "দ্বিপাক্ষিক প্রত্যর্পণ চুক্তি ও আইনি প্রক্রিয়ার প্রশাসনিক বিশ্লেষণ।",
    sentimentReasonEn: "Administrative analysis of bilateral extradition treaties and legal mechanisms.",
    source: {
      name: "The Times of India",
      bureau: "Delhi",
      language: "English",
      originalUrl: "https://timesofindia.indiatimes.com/world/south-asia/indias-political-will-needed-to-extradite-sheikh-hasina-bangladesh/articleshow/134683095.cms",
      scannedAt: "2026-10-05T20:00:00Z"
    },
    publishedAt: "2026-10-05T07:15:00Z",
    readTimeBn: "৩ মিনিট",
    readTimeEn: "3 mins",
    imageUrl: "/images/default-geopolitical-map.jpg",
    mediaFormat: "rss",
    tags: ["বাংলাদেশ", "ভারত", "আইন"]
  },
  {
    id: "news-20261005-003",
    slug: "india-today-bangladesh-requests-extradition-process-speed-up",
    title: "India Today: Bangladesh Requests Fast-Tracking of Hasina Proceedings as Legal Experts Review Documentation",
    englishTitle: "India Today: Bangladesh Requests Fast-Tracking of Hasina Proceedings as Legal Experts Review Documentation",
    banglaTitle: "‘শেখ হাসিনার প্রত্যর্পণ আবেদনের গতি বাড়াতে ঢাকার অনুরোধ, কাগজপত্র খতিয়ে দেখছেন আইনি বিশেষজ্ঞরা’: ইন্ডিয়া টুডে",
    summaryBn: "ইন্ডিয়া টুডের এক প্রতিবেদনে জানানো হয়েছে যে ঢাকা আনুষ্ঠানিকভাবে প্রত্যর্পণ প্রক্রিয়া ত্বরান্বিত করার আহ্বান জানিয়েছে। তবে ভারতের সংশ্লিষ্ট কর্তৃপক্ষ ও আইন বিশেষজ্ঞরা দাখিলকৃত নথিপত্র ও আইনি শর্তাবলি বিস্তারিতভাবে পর্যালোচনা করছেন।",
    summaryEn: "India Today reports that Bangladesh has requested the fast-tracking of Sheikh Hasina's extradition proceedings. Indian authorities and legal specialists are currently assessing the submitted documentation against statutory and treaty requirements.",
    keyPointsBn: [
      "প্রত্যর্পণ ত্বরান্বিত করতে ঢাকার পররাষ্ট্র মন্ত্রণালয়ের কূটনৈতিক বার্তা প্রেরণ",
      "দিল্লির পররাষ্ট্র ও আইন মন্ত্রণালয়ে সংশ্লিষ্ট নথিপত্র যাচাই-বাছাই প্রক্রিয়া",
      "সীমান্তে স্থিতিশীলতা ও পুলিশি তদারকি স্বাভাবিক রাখার যৌথ বার্তা"
    ],
    keyPointsEn: [
      "Dhaka submits diplomatic notes urging expedited handling of extradition request",
      "Indian Ministry of External Affairs and legal teams scrutinize supporting documentation",
      "Both nations agree on maintaining border tranquility and routine security protocols"
    ],
    category: "diplomacy",
    categoryLabelBn: "কূটনীতি ও রাজনীতি",
    categoryLabelEn: "Diplomacy & Politics",
    sentiment: "neutral",
    sentimentReasonBn: "কূটনৈতিক বার্তা ও আইনি নথি পর্যালোচনার তথ্যভিত্তিক প্রতিবেদন।",
    sentimentReasonEn: "Fact-based reporting on diplomatic communications and legal documentation checks.",
    source: {
      name: "India Today",
      bureau: "Delhi",
      language: "English",
      originalUrl: "https://www.indiatoday.in/amp/world/story/sheikh-hasina-extradition-bangladesh-asks-india-to-speed-up-return-process-ptag-3009469-2026-10-04",
      scannedAt: "2026-10-05T20:00:00Z"
    },
    publishedAt: "2026-10-04T18:45:00Z",
    readTimeBn: "৪ মিনিট",
    readTimeEn: "4 mins",
    imageUrl: "/images/default-geopolitical-map.jpg",
    mediaFormat: "rss",
    tags: ["বাংলাদেশ", "ভারত", "কূটনীতি"]
  },
  {
    id: "news-20261005-004",
    slug: "hindustan-times-dinesh-trivedi-duty-as-neighbour-shelter-hasina",
    title: "Hindustan Times: 'It Was Our Duty as Neighbour', Says Envoy Dinesh Trivedi on Hosting Sheikh Hasina",
    englishTitle: "Hindustan Times: 'It Was Our Duty as Neighbour', Says Envoy Dinesh Trivedi on Hosting Sheikh Hasina",
    banglaTitle: "‘প্রতিবেশী হিসেবে আশ্রয় দেওয়া দায়িত্ব ছিল’: শেখ হাসিনাকে আশ্রয় দেওয়া নিয়ে ভারতীয় হাই কমিশনারের বক্তব্য",
    summaryBn: "হিন্দুস্তান টাইমসের প্রতিবেদনে উল্লেখ করা হয়, ঢাকায় এক অনুষ্ঠানে ভারতীয় হাইকমিশনার দীনেশ ত্রিবেদী বলেছেন, তৎকালীন সংকটময় মুহূর্তে সাবেক প্রধানমন্ত্রী শেখ হাসিনাকে সাময়িক আশ্রয় প্রদান প্রতিবেশী রাষ্ট্র হিসেবে ভারতের মানবিক ও কূটনৈতিক দায়িত্ব ছিল।",
    summaryEn: "In a report by Hindustan Times, Indian High Commissioner Dinesh Trivedi stated in Dhaka that granting temporary shelter to former Prime Minister Sheikh Hasina during critical developments was a neighborly responsibility for India.",
    keyPointsBn: [
      "২০২৪ সালের আগস্টে বাংলাদেশি সামরিক বিমানে অবতরণের সময়কালীন পরিস্থিতির ওপর আলোকপাত",
      "মানবিক ও দ্বিপাক্ষিক দৃষ্টিভঙ্গি থেকে আশ্রয়ের সিদ্ধান্ত গ্রহণের ব্যাখ্যা",
      "দুই দেশের সম্পর্ক ব্যক্তি-নির্ভর না হয়ে প্রাতিষ্ঠানিক ভিত্তিতে জোরদার করার গুরুত্ব প্রদান"
    ],
    keyPointsEn: [
      "Recalls circumstances surrounding Hasina's arrival via Bangladeshi military aircraft in August 2024",
      "Explains the decision as grounded in humanitarian duty and neighborly bilateral precedent",
      "Stresses that long-term Indo-Bangladesh ties transcend specific political figures"
    ],
    category: "diplomacy",
    categoryLabelBn: "কূটনীতি ও রাজনীতি",
    categoryLabelEn: "Diplomacy & Politics",
    sentiment: "neutral",
    sentimentReasonBn: "কূটনৈতিক বক্তব্য ও প্রতিবেশী নীতির ব্যাখ্যামূলক বিশ্লেষণ।",
    sentimentReasonEn: "Explanatory coverage of diplomatic remarks and good-neighbor policy rationale.",
    source: {
      name: "Hindustan Times",
      bureau: "Delhi",
      language: "English",
      originalUrl: "https://www.hindustantimes.com/india-news/bangladesh-sheikh-hasina-india-extradition-dinesh-trivedi-latest-news-bilateral-ties-101791082744744.html",
      scannedAt: "2026-10-05T20:00:00Z"
    },
    publishedAt: "2026-10-04T04:00:16Z",
    readTimeBn: "৩ মিনিট",
    readTimeEn: "3 mins",
    imageUrl: "/images/default-geopolitical-map.jpg",
    mediaFormat: "rss",
    tags: ["বাংলাদেশ", "ভারত", "কূটনীতি"]
  },
  {
    id: "news-20261005-005",
    slug: "republic-world-indian-envoy-clarifies-military-role-hasina-arrival",
    title: "Republic World: Indian Envoy Clarifies Military Role in Sheikh Hasina's 2024 Arrival",
    englishTitle: "Republic World: Indian Envoy Clarifies Military Role in Sheikh Hasina's 2024 Arrival",
    banglaTitle: "‘শেখ হাসিনার ভারত আগমনে ভারতীয় সশস্ত্র বাহিনীর কোনো ভূমিকা ছিল না’: রিপাবলিক ওয়ার্ল্ড",
    summaryBn: "রিপাবলিক ওয়ার্ল্ডের প্রতিবেদন অনুযায়ী, ভারতীয় হাইকমিশনার স্পষ্ট করেছেন যে শেখ হাসিনা বাংলাদেশি সামরিক বিমানে করে ভারতে এসেছিলেন এবং এই প্রক্রিয়ায় ভারতীয় সামরিক বাহিনীর কোনো পূর্বপরিকল্পনা বা সম্পৃক্ততা ছিল না।",
    summaryEn: "Republic World reports that the Indian High Commissioner clarified Sheikh Hasina traveled to India aboard a Bangladeshi military aircraft, with no operational role played by Indian armed forces.",
    keyPointsBn: [
      "বাংলাদেশি সামরিক ফ্লাইটের জরুরি অবতরণ অনুমতির তথ্য পুনর্ব্যক্ত",
      "ভারতীয় সশস্ত্র বাহিনী তাকে আনা বা পরিবহনে যুক্ত ছিল না মর্মে স্পষ্টকরণ",
      "দুই দেশের অভ্যন্তরীণ রাজনীতি থেকে কূটনৈতিক পেশাদারিত্ব বজায় রাখার ওপর তাগিদ"
    ],
    keyPointsEn: [
      "Reiterates clearance given for emergency landing of Bangladeshi military aircraft",
      "Clarifies Indian armed forces had no role in arranging her transport or departure",
      "Emphasizes institutional professionalism in maintaining bilateral security relations"
    ],
    category: "politics",
    categoryLabelBn: "রাজনীতি",
    categoryLabelEn: "Politics",
    sentiment: "neutral",
    sentimentReasonBn: "সামরিক ও নিরাপত্তা সংশ্লিষ্ট তথ্যের স্পষ্টীকরণমূলক প্রতিবেদন।",
    sentimentReasonEn: "Fact-based report clarifying military and security flight operations.",
    source: {
      name: "Republic World",
      bureau: "Delhi",
      language: "English",
      originalUrl: "https://www.republicworld.com/world-news/sheikh-hasinas-arrival-in-india-was-unexpected-indian-military-had-no-role-says-indian-envoy-in-dhaka-2026-10-04-138265",
      scannedAt: "2026-10-05T20:00:00Z"
    },
    publishedAt: "2026-10-04T13:45:00Z",
    readTimeBn: "৩ মিনিট",
    readTimeEn: "3 mins",
    imageUrl: "/images/default-geopolitical-map.jpg",
    mediaFormat: "rss",
    tags: ["বাংলাদেশ", "ভারত", "নিরাপত্তা"]
  },
  {
    id: "news-20261005-006",
    slug: "wion-youtube-sheikh-hasina-extradition-legal-process-underway",
    title: "WION Dispatch: Legal Examination Process Underway Regarding Sheikh Hasina Extradition Request",
    englishTitle: "WION Dispatch: Legal Examination Process Underway Regarding Sheikh Hasina Extradition Request",
    banglaTitle: "‘শেখ হাসিনার প্রত্যর্পণ আবেদন ও আইনি ধারা পর্যালোচনার ওপর ভিডিও রিপোর্ট’: ডব্লিউআইওএন ভিডিও ডিসপ্যাচ",
    summaryBn: "ডব্লিউআইওএন (WION)-এর ভিডিও ডিসপ্যাচে দক্ষিণ এশিয়ার সাম্প্রতিক কূটনৈতিক প্রতিক্রিয়া বিশ্লেষণ করা হয়েছে। ভারতের উচ্চপর্যায়ের প্রতিনিধিদের উদ্ধৃতি দিয়ে জানানো হয় যে যেকোনো প্রত্যর্পণ প্রক্রিয়া সুনির্দিষ্ট আইনি নীতিমালা মেনে অগ্রসর হচ্ছে।",
    summaryEn: "A video dispatch by WION analyzes South Asian diplomatic reactions, highlighting official statements confirming that all requests involving Sheikh Hasina are subject to legal and judicial scrutiny.",
    keyPointsBn: [
      "ডব্লিউআইওএন সংবাদ দলের বিশেষ ভিডিও ও কূটনৈতিক বিশ্লেষকদের মতামত",
      "আন্তর্জাতিক আইনি প্রটোকল ও ভারত-বাংলাদেশ দ্বিপাক্ষিক চুক্তির ধারা পর্যালোচনা",
      "সীমান্ত নিরাপত্তা ও বাণিজ্য স্বাভাবিক রাখার বিষয়ে উভয় দেশের সহমত"
    ],
    keyPointsEn: [
      "WION special video coverage featuring expert commentary on South Asian diplomacy",
      "Examination of international legal protocols and provisions of bilateral extradition treaties",
      "Focus on maintaining uninterrupted cross-border freight flow and regional stability"
    ],
    category: "diplomacy",
    categoryLabelBn: "কূটনীতি ও রাজনীতি",
    categoryLabelEn: "Diplomacy & Politics",
    sentiment: "neutral",
    sentimentReasonBn: "টেলিভিশন ও ডিজিটাল গণমাধ্যমের ভিডিও বিশ্লেষণাত্মক সংবাদ।",
    sentimentReasonEn: "Analytical digital broadcast video coverage of bilateral legal developments.",
    source: {
      name: "WION",
      bureau: "Delhi",
      language: "English",
      originalUrl: "https://www.youtube.com/watch?v=7Ea7qgpn9sQ",
      scannedAt: "2026-10-05T20:00:00Z"
    },
    publishedAt: "2026-10-04T12:00:00Z",
    readTimeBn: "৩ মিনিট",
    readTimeEn: "3 mins",
    imageUrl: "https://i.ytimg.com/vi/7Ea7qgpn9sQ/hqdefault.jpg",
    mediaFormat: "youtube",
    tags: ["বাংলাদেশ", "ভারত", "ভিডিও"]
  },
  {
    id: "news-20261005-007",
    slug: "anandabazar-hasina-shelter-kolkata-bengal-impact-analysis",
    title: "Anandabazar Patrika: Analysis of West Bengal Cross-Border Sentiment and Diplomatic Dynamics",
    englishTitle: "Anandabazar Patrika: Analysis of West Bengal Cross-Border Sentiment and Diplomatic Dynamics",
    banglaTitle: "‘ওপার বাংলার রাজনৈতিক পরিস্থিতি ও পশ্চিমবঙ্গে প্রভাব: আনন্দবাজার পত্রিকার বিশেষ বিশ্লেষণ’",
    summaryBn: "আনন্দবাজার পত্রিকার প্রতিবেদনে বাংলাদেশ-ভারত সীমান্তবর্তী জেলাগুলোর অর্থনৈতিক ও বাণিজ্যিক সম্পর্কের ওপর সাম্প্রতিক রাজনৈতিক গতিপ্রকৃতির প্রভাব পর্যালোচনা করা হয়েছে। পেট্রাপোল ও গেদে সীমান্তে পণ্য পরিবহন স্বাভাবিক রাখার প্রতি আলোকপাত করা হয়।",
    summaryEn: "Anandabazar Patrika analyzes the impact of recent political developments on West Bengal border districts, highlighting measures to keep cross-border trade at Petrapole and Gede functioning smoothly.",
    keyPointsBn: [
      "কলকাতা ও সীমান্ত জেলাগুলোর সুশীল সমাজ ও ব্যবসায়ীদের প্রতিক্রিয়া",
      "পেট্রাপোল-বেনাপোল স্থলবন্দরে ট্রাক চলাচল ও কাস্টমস ছাড়পত্রের বর্তমান অবস্থা",
      "পশ্চিমবঙ্গ সরকারের সীমান্ত নিরাপত্তা নিশ্চিতকরণ ও স্থানীয় যোগাযোগ ব্যবস্থা"
    ],
    keyPointsEn: [
      "Civil society and trade group perspectives across Kolkata and border districts",
      "Operational status of freight transit and customs processing at Petrapole-Benapole",
      "West Bengal administration coordination to guarantee border zone stability"
    ],
    category: "trade",
    categoryLabelBn: "বাণিজ্য ও অর্থনীতি",
    categoryLabelEn: "Trade & Economy",
    sentiment: "neutral",
    sentimentReasonBn: "সীমান্ত বাণিজ্য ও স্থানীয় অর্থনীতির ওপর প্রভাব কেন্দ্রিক বিশ্লেষণ।",
    sentimentReasonEn: "Economic analysis focusing on border trade continuity and commerce.",
    source: {
      name: "Anandabazar",
      bureau: "Kolkata",
      language: "Bengali",
      originalUrl: "https://www.anandabazar.com/west-bengal/kolkata/bangladesh-news-live-updates-sheikh-hasina-quits-as-prime-minister-dgtl/cid/1536780",
      scannedAt: "2026-10-05T20:00:00Z"
    },
    publishedAt: "2026-10-04T14:30:00Z",
    readTimeBn: "৪ মিনিট",
    readTimeEn: "4 mins",
    imageUrl: "/images/default-geopolitical-map.jpg",
    mediaFormat: "rss",
    tags: ["কলকাতা", "বাণিজ্য", "বাংলাদেশ"]
  },
  {
    id: "news-20261005-008",
    slug: "uttarbanga-sambad-fulbari-changrabandha-land-port-coordination",
    title: "Uttarbanga Sambad: BSF & Land Customs Host High-Level Freight Clearance Summit at Fulbari",
    englishTitle: "Uttarbanga Sambad: BSF & Land Customs Host High-Level Freight Clearance Summit at Fulbari",
    banglaTitle: "‘ফুলবাড়ি ও চ্যাংড়াবান্ধা সীমান্তে ট্রাক চালকদের নিরাপত্তা ও দ্রুত শুল্কায়নে কাস্টমস-বিএসএফ সমন্বয় বৈঠক’: উত্তরবঙ্গ সংবাদ",
    summaryBn: "উত্তরবঙ্গ সংবাদের খবর অনুযায়ী, ফুলবাড়ি ও চ্যাংড়াবান্ধা সীমান্ত দিয়ে বাংলাদেশগামী পণ্যবাহী ট্রাকের সুরক্ষা এবং দ্রুত শুল্ক প্রক্রিয়া শেষ করতে বিএসএফ ও ল্যান্ড কাস্টমস কর্তৃপক্ষ উচ্চপর্যায়ের সমন্বয় বৈঠক করেছে।",
    summaryEn: "Uttarbanga Sambad reports that BSF and Land Customs authorities conducted a high-level coordination meeting at Fulbari and Changrabandha land ports to ensure trucker safety and expedite customs clearance for Bangladesh-bound cargo.",
    keyPointsBn: [
      "শিলিগুড়ি ও চ্যাংড়াবান্ধা করিডোরে কাঁচামাল ও প্রয়োজনীয় পণ্যের নিরবচ্ছিন্ন সীমান্ত পারাপার",
      "সীমান্তবর্তী চেকপোস্টে অতিরিক্ত বিএসএফ টহল ও সিসিটিভি নজরদারি বৃদ্ধিকরণ",
      "বাংলাদেশি আমদানিকারকদের সাথে সমন্বয় করে পণ্য খালাস দ্রুত করার সিদ্ধান্ত"
    ],
    keyPointsEn: [
      "Uninterrupted cross-border movement of essential commodities via Siliguri and Changrabandha routes",
      "Enhanced BSF patrolling and expanded surveillance monitoring at border checkpoints",
      "Joint mechanism with Bangladeshi importers to accelerate freight handling and clearing"
    ],
    category: "trade",
    categoryLabelBn: "বাণিজ্য ও অর্থনীতি",
    categoryLabelEn: "Trade & Economy",
    sentiment: "positive",
    sentimentReasonBn: "সীমান্ত বাণিজ্য সম্প্রসারণ ও নিরাপত্তা ব্যবস্থা সুসংহত করার ইতিবাচক সংবাদ।",
    sentimentReasonEn: "Positive coverage highlighting enhanced border trade logistics and security.",
    source: {
      name: "Uttarbanga Sambad",
      bureau: "Siliguri",
      language: "Bengali",
      originalUrl: "https://uttarbangasambad.com/siliguri-fulbari-changrabandha-border-truckers-security-customs-meeting-20260924/",
      scannedAt: "2026-10-05T20:00:00Z"
    },
    publishedAt: "2026-10-04T10:00:00Z",
    readTimeBn: "৩ মিনিট",
    readTimeEn: "3 mins",
    imageUrl: "/images/default-geopolitical-map.jpg",
    mediaFormat: "rss",
    tags: ["শিলিগুড়ি", "বাণিজ্য", "সীমান্ত"]
  },
  {
    id: "news-20261005-009",
    slug: "the-wall-kolkata-scholar-forum-indobangla-ties",
    title: "The Wall: Academic & Cultural Forum in Kolkata Emphasizes Resilience in Indo-Bangla Relations",
    englishTitle: "The Wall: Academic & Cultural Forum in Kolkata Emphasizes Resilience in Indo-Bangla Relations",
    banglaTitle: "‘ভারত-বাংলাদেশ সুসংহত সম্পর্ক বজায় রাখতে কলকাতায় বুদ্ধিজীবী ও সাংস্কৃতিক মহলের সংলাপ’: দ্য ওয়াল",
    summaryBn: "দ্য ওয়ালের প্রতিবেদনে জানানো হয়েছে, কলকাতায় আয়োজিত এক সেমিনারে ভারতের শীর্ষস্থানীয় শিক্ষাবিদ ও বিশেষজ্ঞরা দুই দেশের জনগণের সামাজিক ও অর্থনৈতিক বন্ধন সুদৃঢ় রাখার ওপর তাগিদ দিয়েছেন।",
    summaryEn: "The Wall reports from Kolkata on an academic and cultural forum where scholars highlighted the enduring people-to-people and economic ties connecting West Bengal and Bangladesh.",
    keyPointsBn: [
      "কলকাতায় বুদ্ধিজীবী ও সুশীল সমাজের সেমিনারে দ্বিপাক্ষিক সম্পর্কের ভবিষ্যৎ দিকনির্দেশনা",
      "সংস্কৃতি, সাহিত্য ও অর্থনৈতিক বিনিময় জোরদার রাখার যৌথ আহ্বান",
      "সীমান্তবর্তী এলাকায় গুজব রোধ ও পারস্পরিক যোগাযোগ বাড়ানোর প্রস্তাব"
    ],
    keyPointsEn: [
      "Kolkata symposium featuring academics discussing long-term bilateral relational stability",
      "Emphasizes sustained cultural, literary, and commercial exchanges between the two regions",
      "Proposes measures to prevent misinformation and bolster civil society dialogue"
    ],
    category: "sports/culture",
    categoryLabelBn: "ক্রীড়া ও সংস্কৃতি",
    categoryLabelEn: "Sports & Culture",
    sentiment: "positive",
    sentimentReasonBn: "সংস্কৃতি ও সামাজিক যোগাযোগ জোরদার করার ইতিবাচক দৃষ্টিভঙ্গি।",
    sentimentReasonEn: "Positive focus on institutional cultural ties and civil society collaboration.",
    source: {
      name: "The Wall",
      bureau: "Kolkata",
      language: "Bengali",
      originalUrl: "https://www.thewall.in/news/civil-society-in-india-to-send-solidarity-message-on-hasinas-80th-birthday-20260924",
      scannedAt: "2026-10-05T20:00:00Z"
    },
    publishedAt: "2026-10-04T11:20:00Z",
    readTimeBn: "৩ মিনিট",
    readTimeEn: "3 mins",
    imageUrl: "/images/default-geopolitical-map.jpg",
    mediaFormat: "rss",
    tags: ["কলকাতা", "সংস্কৃতি", "বাংলাদেশ"]
  },
  {
    id: "news-20261005-010",
    slug: "tripura-times-srimantapur-lcs-freight-growth-report",
    title: "Tripura Times: Srimantapur Land Customs Station Records Freight Inflow Boost with Bangladesh",
    englishTitle: "Tripura Times: Srimantapur Land Customs Station Records Freight Inflow Boost with Bangladesh",
    banglaTitle: "‘শ্রীমন্তপুর স্থল শুল্ক স্টেশনে দ্বিপাক্ষিক পণ্য পারাপার বৃদ্ধিতে স্বস্তি, সচল ত্রিপুরা-বাংলাদেশ সীমান্ত’: ত্রিপুরা টাইমস",
    summaryBn: "ত্রিপুরা টাইমসের রিপোর্ট অনুযায়ী, শ্রীমন্তপুর ল্যান্ড কাস্টমস স্টেশন দিয়ে ত্রিপুরা ও বাংলাদেশের মধ্যে সিমেন্ট, পাথর ও নিত্যপ্রয়োজনীয় পণ্যের বাণিজ্য স্বাভাবিক গতিতে পরিচালিত হচ্ছে।",
    summaryEn: "Tripura Times reports that bilateral trade through Srimantapur LCS between Tripura and Bangladesh continues to show steady growth in essential goods, construction material, and consumer cargo.",
    keyPointsBn: [
      "ত্রিপুরা-বাংলাদেশ সীমান্তে শ্রীমন্তপুর স্থলবন্দরের মাধ্যমে বাণিজ্য প্রবাহ অব্যাহত",
      "সীমান্ত বাণিজ্য সহজীকরণে দুই দেশের ল্যান্ড কাস্টমস কর্মকর্তাদের যৌথ পদক্ষেপ",
      "আগরতলা ও শ্রীমন্তপুর পয়েন্টে বিএসএফ ও নিরাপত্তা সংস্থার সুসংগঠিত পাহারা"
    ],
    keyPointsEn: [
      "Steady cargo traffic maintained via Srimantapur Land Customs Station in Tripura",
      "Joint measures by land customs authorities to streamline cross-border documentation",
      "Enhanced security coordination by BSF at Agartala and Srimantapur checkpoints"
    ],
    category: "trade",
    categoryLabelBn: "বাণিজ্য ও অর্থনীতি",
    categoryLabelEn: "Trade & Economy",
    sentiment: "positive",
    sentimentReasonBn: "ত্রিপুরা সীমান্ত দিয়ে বাণিজ্যিক অগ্রগতি ও পণ্য পরিবহন বাড়ার শুভ সংবাদ।",
    sentimentReasonEn: "Positive economic coverage of cargo expansion across the Tripura border.",
    source: {
      name: "Tripura Times",
      bureau: "Tripura",
      language: "English",
      originalUrl: "https://tripuratimes.com/trade-and-commerce/srimantapur-lcs-freight-surge-bangladesh-cross-border-connectivity-20260924",
      scannedAt: "2026-10-05T20:00:00Z"
    },
    publishedAt: "2026-10-04T09:15:00Z",
    readTimeBn: "৩ মিনিট",
    readTimeEn: "3 mins",
    imageUrl: "/images/default-geopolitical-map.jpg",
    mediaFormat: "rss",
    tags: ["ত্রিপুরা", "বাণিজ্য", "সীমান্ত"]
  },
  {
    id: "news-20261005-011",
    slug: "assam-tribune-bsf-dhubri-sector-brahmaputra-riverine-patrol",
    title: "The Assam Tribune: BSF Intensifies Riverine Vigilance along Dhubri Brahmaputra Border",
    englishTitle: "The Assam Tribune: BSF Intensifies Riverine Vigilance along Dhubri Brahmaputra Border",
    banglaTitle: "‘ধুবড়ি সেক্টরে ব্রহ্মপুত্র নদের জলসীমান্তে বিএসএফের যৌথ স্পিডবোট ও নাইট-ভিশন টহল জোড়দার’: দ্য আসাম ট্রাইব্যুনাল",
    summaryBn: "দ্য আসাম ট্রাইব্যুনালের খবর অনুযায়ী, ধুবড়ি সেক্টরে ব্রহ্মপুত্র নদের বাংলাদেশ সীমান্তে অনাকাঙ্ক্ষিত অনুপ্রবেশ এবং চোরাচালান ঠেকাতে বিএসএফ স্পিডবোট ও নাইটরুম ভিষণ ক্যামেরা সংবলিত বিশেষ নদীর টহল বাড়িয়েছে।",
    summaryEn: "The Assam Tribune reports that the Border Security Force (BSF) has stepped up riverine patrolling with speedboats and thermal imaging along the Brahmaputra riverine border in Assam's Dhubri sector.",
    keyPointsBn: [
      "ধুবড়ি ও মানকাচর সেক্টরে বিএসএফের যৌথ স্পিডবোট ও আধুনিক নজরদারি সরঞ্জাম মোতায়েন",
      "নদীর চরে চোরাচালান ও অনুপ্রবেশ রোধে ২৪ ঘণ্টা প্রহরার ব্যবস্থা",
      "স্থানীয় সীমান্তবাসী ও বিএসএফের মধ্যে সার্বক্ষণিক তথ্য আদান-প্রদান ব্যবস্থা চালু"
    ],
    keyPointsEn: [
      "BSF deploys high-speed river boats and thermal optics along Assam's Dhubri border",
      "24-hour riverine vigilance to curb unauthorized crossings and contraband smuggling",
      "Local community liaison mechanism established to share real-time security alerts"
    ],
    category: "border",
    categoryLabelBn: "সীমান্ত নিরাপত্তা",
    categoryLabelEn: "Border Security",
    sentiment: "neutral",
    sentimentReasonBn: "সীমান্ত নিরাপত্তা ও বিএসএফের নজরদারি জোরদারের পেশাদার প্রতিবেদন।",
    sentimentReasonEn: "Professional operational coverage of riverine border security and vigilance.",
    source: {
      name: "The Assam Tribune",
      bureau: "Assam",
      language: "English",
      originalUrl: "https://assamtribune.com/assam/bsf-guwahati-frontier-intensifies-riverine-patrol-dhubri-brahmaputra-border-1618392",
      scannedAt: "2026-10-05T20:00:00Z"
    },
    publishedAt: "2026-10-04T08:00:00Z",
    readTimeBn: "৩ মিনিট",
    readTimeEn: "3 mins",
    imageUrl: "/images/default-geopolitical-map.jpg",
    mediaFormat: "rss",
    tags: ["আসাম", "সীমান্ত", "বিএসএফ"]
  }
];

// Inject BREAKING_NEWS_ALERTS
const alertAnchor = 'export const BREAKING_NEWS_ALERTS: BreakingAlert[] = [';
if (content.includes(alertAnchor)) {
  const insertIdx = content.indexOf(alertAnchor) + alertAnchor.length;
  const alertStr = newAlerts.map(a => '\n  ' + JSON.stringify(a, null, 2).split('\n').join('\n  ') + ',').join('');
  content = content.slice(0, insertIdx) + alertStr + content.slice(insertIdx);
}

// Inject SCANNED_NEWS_ITEMS
const newsAnchor = 'export const SCANNED_NEWS_ITEMS: NewsItem[] = [';
if (content.includes(newsAnchor)) {
  const insertIdx = content.indexOf(newsAnchor) + newsAnchor.length;
  const newsStr = newItems.map(item => '\n  ' + JSON.stringify(item, null, 2).split('\n').join('\n  ') + ',').join('');
  content = content.slice(0, insertIdx) + newsStr + content.slice(insertIdx);
}

// Update SCANNER_STATS timestamps
const now = new Date();
const nowBn = new Intl.DateTimeFormat('bn-BD', { dateStyle: 'long', timeStyle: 'short' }).format(now);
const nowEn = new Intl.DateTimeFormat('en-IN', { dateStyle: 'medium', timeStyle: 'short' }).format(now);

content = content.replace(/"lastScannedAtBn":\s*"[^"]+"/, `"lastScannedAtBn": "${nowBn}"`);
content = content.replace(/"lastScannedAtEn":\s*"[^"]+"/, `"lastScannedAtEn": "${nowEn}"`);

fs.writeFileSync(newsFilePath, content, 'utf8');
console.log(`Successfully injected ${newItems.length} news items and ${newAlerts.length} alerts into src/data/news-data.ts`);
