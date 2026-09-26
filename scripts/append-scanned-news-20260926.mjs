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
    headlineBn: "‘জাতিসংঘ অধিবেশনের ফাঁকে বাংলাদেশ-ভারত শীর্ষ দ্বিপাক্ষিক আলোচনা ও আঞ্চলিক নিরাপত্তা পর্যালোচনা’: দ্য হিন্দু",
    headlineEn: "The Hindu: PM Modi and Muhammad Yunus Hold High-Level Bilateral Talks on Regional Security & Stability",
    timeAgoBn: "১০ মিনিট আগে",
    timeAgoEn: "10 mins ago",
    sourceName: "The Hindu",
    sourceBureau: "Delhi",
    sentiment: "neutral",
    url: "https://www.thehindu.com/news/national/pm-modi-mohammad-yunus-meeting-updates/article69411639.ece"
  },
  {
    id: "alert-064",
    headlineBn: "‘আওয়ামী লীগ নেতাকর্মীদের আটকের বিরুদ্ধে আন্তর্জাতিক মহলের হস্তক্ষেপ চেয়ে শেখ হাসিনার বার্তা’: টাইমস অব ইন্ডিয়া",
    headlineEn: "Times of India: Sheikh Hasina Urges Global Community to Press for Release of Detained Leaders",
    timeAgoBn: "২০ মিনিট আগে",
    timeAgoEn: "20 mins ago",
    sourceName: "Times of India",
    sourceBureau: "Delhi",
    sentiment: "neutral",
    url: "https://timesofindia.indiatimes.com/world/rest-of-world/hasina-urges-global-community-press-release-of-detained-awami-league-leaders-20260926/articleshow/113698124.cms"
  },
  {
    id: "alert-063",
    headlineBn: "‘১৯৯৬ সালের গঙ্গা জলবণ্টন চুক্তি পর্যালোচনা নিয়ে যৌথ নদী কমিশনের কারিগরি কমিটির প্রাথমিক প্রস্তুতি’: দ্য ওয়াল",
    headlineEn: "The Wall: Joint River Commission Prepares Technical Consultations on 1996 Ganga Water Sharing Treaty",
    timeAgoBn: "৩৫ মিনিট আগে",
    timeAgoEn: "35 mins ago",
    sourceName: "The Wall",
    sourceBureau: "Kolkata",
    sentiment: "positive",
    url: "https://www.thewall.in/bangladesh/bangladesh-seeks-a-new-agreement-on-ganga-water-sharing-treaty-joint-river-commission-20260926"
  },
  {
    id: "alert-062",
    headlineBn: "‘ধুবড়ি সেক্টরে ব্রহ্মপুত্র নদের জলসীমান্তে বিএসএফের হাইটেক নাইট-ভিশন ও স্পিডবোট টহল জোরদার’: দ্য আসাম ট্রাইব্যুনাল",
    headlineEn: "The Assam Tribune: BSF Intensifies Riverine Patrols & Sensor Surveillance Along Dhubri Border",
    timeAgoBn: "৫০ মিনিট আগে",
    timeAgoEn: "50 mins ago",
    sourceName: "The Assam Tribune",
    sourceBureau: "Assam",
    sentiment: "neutral",
    url: "https://assamtribune.com/assam/bsf-guwahati-frontier-intensifies-riverine-patrol-dhubri-brahmaputra-border-1618392"
  },
  {
    id: "alert-061",
    headlineBn: "‘পুজোয় পদ্মার ইলিশ রফতানি নিয়ে পেট্রাপোল স্থলবন্দরে ক্লিয়ারেন্স ও লজিস্টিকস জোরদার’: নিউজ১৮ ইন্ডিয়া",
    headlineEn: "News18: Petrapole Land Port Steps Up Logistics & Customs Clearance for Festive Hilsa Consignments",
    timeAgoBn: "১ ঘণ্টা আগে",
    timeAgoEn: "1 hour ago",
    sourceName: "News18",
    sourceBureau: "Kolkata",
    sentiment: "positive",
    url: "https://www.news18.com/india/hilsa-shock-ahead-of-durga-puja-bangladesh-stops-fish-export-petrapole-border-9062314.html"
  }
];

const newItems = [
  {
    id: "news-20260926-001",
    slug: "the-hindu-modi-yunus-bilateral-talks-regional-security-unga",
    title: "PM Modi and Muhammad Yunus Hold Bilateral Talks on Regional Stability and Minority Safeguards at UNGA",
    englishTitle: "PM Modi and Muhammad Yunus Hold Bilateral Talks on Regional Stability and Minority Safeguards at UNGA",
    banglaTitle: "জাতিসংঘ অধিবেশনের ফাঁকে মোদী-ইউনূস দ্বিপাক্ষিক বৈঠক: আঞ্চলিক স্থিতিশীলতা ও সংখ্যালঘু সুরক্ষা নিয়ে আলোচনা",
    summaryBn: "জাতিসংঘ সাধারণ পরিষদের ৮১তম অধিবেশনের ফাঁকে ভারতের প্রধানমন্ত্রী নরেন্দ্র মোদী ও বাংলাদেশের অন্তর্বর্তীকালীন সরকারের প্রধান উপদেষ্টা ড. মুহাম্মদ ইউনূসের মধ্যে উচ্চপর্যায়ের দ্বিপাক্ষিক আলোচনা অনুষ্ঠিত হয়েছে। বৈঠকে দক্ষিণ এশিয়ার আঞ্চলিক স্থিতিশীলতা, সীমান্ত ব্যবস্থাপনা এবং বাংলাদেশে সংখ্যালঘুদের নিরাপত্তা সুরক্ষার বিষয়ে ভারতের অবস্থান স্পষ্টভাবে তুলে ধরা হয়।",
    summaryEn: "On the sidelines of the UN General Assembly, Prime Minister Narendra Modi held a substantive bilateral meeting with Bangladesh's Chief Adviser Muhammad Yunus, addressing critical regional security priorities, border stability, and the paramount importance of ensuring minority protection across Bangladesh.",
    keyPointsBn: [
      "জাতিসংঘ অধিবেশনের ফাঁকে বাংলাদেশ-ভারত শীর্ষ নেতৃত্বের গুরুত্বপূর্ণ দ্বিপাক্ষিক আলোচনা",
      "সীমান্ত নিরাপত্তা, পারস্পরিক সার্বভৌমত্ব ও বাণিজ্যিক সরবরাহ অক্ষুণ্ণ রাখার ওপর গুরুত্বারোপ",
      "সংখ্যালঘু সম্প্রদায়ের জানমাল রক্ষা ও আস্থা তৈরির সুনির্দিষ্ট পদক্ষেপ নিয়ে আলোচনা"
    ],
    keyPointsEn: [
      "Bilateral dialogue between Modi and Yunus on the sidelines of UNGA 81 session",
      "Focus on cross-border stability, lawful trade logistics, and regional diplomatic continuity",
      "New Delhi underscores the necessity of robust minority safeguards and ground-level security"
    ],
    category: "diplomacy",
    categoryLabelBn: "কূটনীতি ও রাজনীতি",
    categoryLabelEn: "Diplomacy & Politics",
    sentiment: "neutral",
    sentimentReasonBn: "দ্বিপাক্ষিক সম্পর্ক ও শীর্ষ পর্যায়ের কূটনৈতিক পর্যালোচনামূলক প্রতিবেদন।",
    sentimentReasonEn: "High-level diplomatic coverage focusing on bilateral dialogue and bilateral commitments.",
    source: {
      name: "The Hindu",
      bureau: "Delhi",
      language: "English",
      originalUrl: "https://www.thehindu.com/news/national/pm-modi-mohammad-yunus-meeting-updates/article69411639.ece",
      scannedAt: "2026-09-26T22:30:00Z"
    },
    publishedAt: "2026-09-26T21:15:00Z",
    readTimeBn: "৩ মিনিট পাঠ",
    readTimeEn: "3 min read",
    imageUrl: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1200&q=80",
    isLeadStory: true,
    isTrending: true,
    isBreaking: true,
    tags: ["Diplomacy", "Narendra Modi", "Muhammad Yunus", "UNGA", "New Delhi", "Dhaka"]
  },
  {
    id: "news-20260926-002",
    slug: "times-of-india-sheikh-hasina-urges-un-release-detained-leaders",
    title: "Sheikh Hasina Urges Global Community and UN to Press for Unconditional Release of Detained Leaders",
    englishTitle: "Sheikh Hasina Urges Global Community and UN to Press for Unconditional Release of Detained Leaders",
    banglaTitle: "আটক নেতাকর্মীদের নিঃশর্ত মুক্তির দাবিতে জাতিসংঘ ও আন্তর্জাতিক মহলের প্রতি শেখ হাসিনার আহ্বান",
    summaryBn: "টাইমস অব ইন্ডিয়ার প্রতিবেদনে প্রকাশিত তথ্যে সাবেক প্রধানমন্ত্রী শেখ হাসিনা আন্তর্জাতিক সম্প্রদায় ও মানবাধিকার সংস্থাগুলোর কাছে বাংলাদেশে আটক আওয়ামী লীগের সিনিয়র নেতাকর্মীদের নিঃশর্ত মুক্তি নিশ্চিতের আহ্বান জানিয়েছেন। তিনি অভিযোগ করেন, রাজনৈতিক প্রতিহিংসার বশবর্তী হয়ে উদ্দেশ্যপ্রণোদিত মামলা ও বন্দিদশা চাপিয়ে দেওয়া হচ্ছে।",
    summaryEn: "Former Bangladesh Prime Minister Sheikh Hasina has appealed to international bodies and the United Nations to press for the unconditional release of detained Awami League leaders, terming ongoing detentions politically motivated and urging independent legal scrutiny.",
    keyPointsBn: [
      "আন্তর্জাতিক মানবাধিকার পরিমণ্ডলে আটক নেতাকর্মীদের মুক্তির দাবি জানালেন শেখ হাসিনা",
      "রাজনৈতিক প্রতিহিংসা ও বেআইনি আটকের বিরুদ্ধে আন্তর্জাতিক আইনি পর্যবেক্ষণের আহ্বান",
      "দিল্লি ও বিভিন্ন বৈশ্বিক ফোরামে কূটনৈতিক তৎপরতা অব্যাহত রাখার বার্তা"
    ],
    keyPointsEn: [
      "Hasina calls upon UN and international watchdogs to scrutinize detentions in Bangladesh",
      "Alleges fabricated legal proceedings against frontline party representatives",
      "Reiterates commitment to constitutional restoration and democratic fair play"
    ],
    category: "diplomacy",
    categoryLabelBn: "কূটনীতি ও রাজনীতি",
    categoryLabelEn: "Diplomacy & Politics",
    sentiment: "neutral",
    sentimentReasonBn: "আন্তর্জাতিক বিবৃতি ও আইনি পর্যালোচনামূলক রাজনৈতিক খবর।",
    sentimentReasonEn: "Objective reportage on political appeals and legal statements issued to international forums.",
    source: {
      name: "The Times of India",
      bureau: "Delhi",
      language: "English",
      originalUrl: "https://timesofindia.indiatimes.com/world/rest-of-world/hasina-urges-global-community-press-release-of-detained-awami-league-leaders-20260926/articleshow/113698124.cms",
      scannedAt: "2026-09-26T22:00:00Z"
    },
    publishedAt: "2026-09-26T20:45:00Z",
    readTimeBn: "৩ মিনিট পাঠ",
    readTimeEn: "3 min read",
    imageUrl: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1200&q=80",
    isTrending: true,
    tags: ["Sheikh Hasina", "Awami League", "Human Rights", "United Nations", "Times of India"]
  },
  {
    id: "news-20260926-003",
    slug: "indian-express-sheikh-hasina-question-is-how-dhaka-return",
    title: "‘Question Is How, Not If’: Sheikh Hasina Reaffirms Determination on Returning to Bangladesh",
    englishTitle: "‘Question Is How, Not If’: Sheikh Hasina Reaffirms Determination on Returning to Bangladesh",
    banglaTitle: "‘ফেরা নিয়ে সংশয় নেই, কেবল সময় ও কৌশলের অপেক্ষা’: দ্য ইন্ডিয়ান এক্সপ্রেসকে দেওয়া সাক্ষাৎকারে শেখ হাসিনা",
    summaryBn: "দ্য ইন্ডিয়ান এক্সপ্রেসের এক বিশদ প্রতিবেদনে শেখ হাসিনার রাজনৈতিক ভবিষ্যৎ ও ঢাকা প্রত্যাবর্তনের রূপরেখা তুলে ধরা হয়েছে। তিনি স্পষ্ট ভাষায় জানিয়েছেন যে বাংলাদেশে তাঁর প্রত্যাবর্তন নিশ্চিত এবং দল পুনর্গঠন ও রাজনৈতিক সাংবিধানিক কাঠামো পুনরুদ্ধারে তিনি প্রস্তুতি গ্রহণ করছেন।",
    summaryEn: "In a detailed report by The Indian Express, former Prime Minister Sheikh Hasina reaffirmed her determination to return to Bangladesh, indicating that strategic timing and legal preparations are currently underway for grassroots revitalization.",
    keyPointsBn: [
      "ইন্ডিয়ান এক্সপ্রেসের প্রতিবেদনে শেখ হাসিনার ভবিষ্যৎ রাজনৈতিক কৌশলের রূপরেখা",
      "তৃণমূল নেতাকর্মীদের আইনি সুরক্ষা প্রদানে বিশেষ সেলের কার্যক্রম চলমান",
      "ঢাকা ও দিল্লির রাজনৈতিক পর্যবেক্ষক মহলে প্রত্যাবর্তনের সম্ভাব্য প্রভাব নিয়ে বিশ্লেষণ"
    ],
    keyPointsEn: [
      "Hasina outlines long-term political strategy and eventual return to Dhaka",
      "Ongoing coordination with legal defense teams to counter tribunal indictments",
      "New Delhi strategic think tanks analyze regional ramifications of transitional politics"
    ],
    category: "diplomacy",
    categoryLabelBn: "কূটনীতি ও রাজনীতি",
    categoryLabelEn: "Diplomacy & Politics",
    sentiment: "neutral",
    sentimentReasonBn: "আন্তর্জাতিক গণমাধ্যমে প্রকাশিত সাক্ষাৎকার ও বিশ্লেষণধর্মী প্রতিবেদন।",
    sentimentReasonEn: "In-depth analytical coverage examining future political transition and legal strategies.",
    source: {
      name: "The Indian Express",
      bureau: "Delhi",
      language: "English",
      originalUrl: "https://indianexpress.com/article/world/sheikh-hasina-dhaka-return-international-crimes-tribunal-verdict-bangladesh-interview-10890775/",
      scannedAt: "2026-09-26T21:30:00Z"
    },
    publishedAt: "2026-09-26T19:30:00Z",
    readTimeBn: "৪ মিনিট পাঠ",
    readTimeEn: "4 min read",
    imageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=1200&q=80",
    tags: ["Indian Express", "Sheikh Hasina", "Awami League", "Dhaka", "South Asia Politics"]
  },
  {
    id: "news-20260926-004",
    slug: "sangbad-pratidin-dhanmondi-32-joy-bangla-activists-defy-curbs",
    title: "নিষেধাজ্ঞা অগ্রাহ্য করে ধানমন্ডিতে ‘জয় বাংলা’ ধ্বনি, বঙ্গবন্ধু ভবনে ফুল দিয়ে আওয়ামী লীগ কর্মীদের শ্রদ্ধা",
    englishTitle: "Defying Restrictions, Awami League Activists Gather at Dhanmondi 32 with 'Joy Bangla' Chants to Pay Homage",
    banglaTitle: "নিষেধাজ্ঞা অগ্রাহ্য করে ধানমন্ডিতে ‘জয় বাংলা’ ধ্বনি, বঙ্গবন্ধু ভবনে ফুল দিয়ে আওয়ামী লীগ কর্মীদের শ্রদ্ধা",
    summaryBn: "সংবাদ প্রতিদিনের কলকাতা ডেস্কের প্রতিবেদনে জানানো হয়েছে, কঠোর প্রশাসনিক নিষেধাজ্ঞা ও তল্লাশি উপেক্ষা করে ঢাকার ধানমন্ডি ৩২ নম্বরে ঐতিহাসিক বঙ্গবন্ধু ভবনের সামনে আওয়ামী লীগের কর্মী-সমর্থকরা জড়ো হয়ে ‘জয় বাংলা’ স্লোগান দেন এবং পুষ্পস্তবক অর্পণ করেন।",
    summaryEn: "According to a Sangbad Pratidin dispatch, Awami League supporters in Dhaka defied heavy security deployments and restrictions to gather in front of the historic Bangabandhu Memorial in Dhanmondi 32, chanting 'Joy Bangla' slogans and offering floral tributes.",
    keyPointsBn: [
      "ধানমন্ডি ৩২-এ কড়া পুলিশি নজরদারি অগ্রাহ্য করে আওয়ামী লীগ সমর্থকদের সমাবেশ",
      "বঙ্গবন্ধু ভবনের সামনে পুষ্পস্তবক অর্পণ ও ‘জয় বাংলা’ স্লোগান প্রদান",
      "কলকাতার রাজনৈতিক পর্যবেক্ষক মহলে তৃণমূলের প্রতিরোধমূলক অবস্থানের মূল্যায়ন"
    ],
    keyPointsEn: [
      "Awami League grassroots activists stage sudden symbolic demonstration at Dhanmondi 32",
      "Supporters offer floral tributes amidst strict security checkpoints across Dhaka",
      "Kolkata political analysts evaluate ongoing grassroots resilience of party workers"
    ],
    category: "diplomacy",
    categoryLabelBn: "কূটনীতি ও রাজনীতি",
    categoryLabelEn: "Diplomacy & Politics",
    sentiment: "neutral",
    sentimentReasonBn: "ঢাকায় রাজনৈতিক জমায়েত ও তৃণমূলের প্রতিক্রিয়া নিয়ে নিরপেক্ষ প্রতিবেদন।",
    sentimentReasonEn: "Neutral coverage of grassroots political demonstration and security reactions in Dhaka.",
    source: {
      name: "Sangbad Pratidin",
      bureau: "Kolkata",
      language: "Bengali",
      originalUrl: "https://www.sangbadpratidin.in/app/bangladesh/all-media-are-free-said-bangladesh-pm-sheikh-hasina/pid/297545/",
      scannedAt: "2026-09-26T21:00:00Z"
    },
    publishedAt: "2026-09-26T18:45:00Z",
    readTimeBn: "৩ মিনিট পাঠ",
    readTimeEn: "3 min read",
    imageUrl: "https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=1200&q=80",
    tags: ["Sangbad Pratidin", "Dhanmondi 32", "Awami League", "Kolkata Bureau", "Dhaka"]
  },
  {
    id: "news-20260926-005",
    slug: "the-wall-ganga-water-sharing-treaty-joint-river-commission-review",
    title: "১৯৯৬ সালের গঙ্গা জলবণ্টন চুক্তি পুনর্নবীকরণ নিয়ে কূটনৈতিক আলোচনা শুরু; যৌথ নদী কমিশনের পর্যালোচনার প্রস্তুতি",
    englishTitle: "Bilateral Consultations on 1996 Ganga Water Treaty Renewal: Joint River Commission Prepares Technical Reviews",
    banglaTitle: "১৯৯৬ সালের গঙ্গা জলবণ্টন চুক্তি পুনর্নবীকরণ নিয়ে কূটনৈতিক আলোচনা শুরু; যৌথ নদী কমিশনের পর্যালোচনার প্রস্তুতি",
    summaryBn: "১৯৯৬ সালে স্বাক্ষরিত ঐতিহাসিক ৩০ বছর মেয়াদি গঙ্গা জলবণ্টন চুক্তির মেয়াদ ২০২৬ সালে পূর্ণ হতে চলায় ভারত ও বাংলাদেশের মধ্যে দ্বিপাক্ষিক কারিগরি পর্যালোচনা শুরু হয়েছে। ‘দ্য ওয়াল’-এর বিশেষ প্রতিবেদনে বলা হয়েছে, যৌথ নদী কমিশনের (JRC) আওতায় তথ্য বিনিময় ও শুষ্ক মৌসুমের জলপ্রবাহ পরিমাপের নতুন কাঠামো প্রণয়নে আলোচনা চলছে।",
    summaryEn: "With the 30-year 1996 Ganga Water Sharing Treaty approaching its renewal timeline, technical experts from India and Bangladesh under the Joint River Commission (JRC) are preparing data-sharing frameworks to evaluate dry-season water flow metrics.",
    keyPointsBn: [
      "১৯৯৬ সালের ৩০ বছর মেয়াদি গঙ্গা চুক্তির মেয়াদ ২০২৬-এ শেষ হওয়ার মুখে যৌথ পর্যালোচনা",
      "ফারাক্কা পয়েন্টে জলপ্রবাহ ও অববাহিকার বাস্তুসংস্থান সুরক্ষায় উভয় পক্ষের যৌথ কারিগরি উদ্যোগ",
      "পশ্চিমবঙ্গ সরকার ও কেন্দ্রীয় জলশক্তি মন্ত্রকের সমন্বয়ে রূপরেখা প্রস্তুত"
    ],
    keyPointsEn: [
      "Joint River Commission gears up for technical evaluation of the 30-year Ganga Water Treaty",
      "Hydrological flow data at Farakka Barrage to form baseline for upcoming diplomatic protocols",
      "West Bengal state government and central Jal Shakti Ministry align on regional water interests"
    ],
    category: "diplomacy",
    categoryLabelBn: "কূটনীতি ও জলবণ্টন",
    categoryLabelEn: "Diplomacy & Water Sharing",
    sentiment: "positive",
    sentimentReasonBn: "দ্বিপাক্ষিক নদীর জলবণ্টন চুক্তি পুনর্নবীকরণ ও কারিগরি সংলাপ বিষয়ক ইতিবাচক খবর।",
    sentimentReasonEn: "Constructive bilateral development focusing on institutional river water treaty renewal.",
    source: {
      name: "The Wall",
      bureau: "Kolkata",
      language: "Bengali",
      originalUrl: "https://www.thewall.in/bangladesh/bangladesh-seeks-a-new-agreement-on-ganga-water-sharing-treaty-joint-river-commission-20260926",
      scannedAt: "2026-09-26T20:30:00Z"
    },
    publishedAt: "2026-09-26T17:30:00Z",
    readTimeBn: "৩ মিনিট পাঠ",
    readTimeEn: "3 min read",
    imageUrl: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
    tags: ["The Wall", "Ganga Water Treaty", "Joint River Commission", "Farakka", "Kolkata"]
  },
  {
    id: "news-20260926-006",
    slug: "assam-tribune-bsf-guwahati-frontier-riverine-patrol-dhubri",
    title: "Assam Frontier: BSF Intensifies Brahmaputra Riverine Patrols and Sensor Monitoring Along Dhubri Border",
    englishTitle: "Assam Frontier: BSF Intensifies Brahmaputra Riverine Patrols and Sensor Monitoring Along Dhubri Border",
    banglaTitle: "আসাম সীমান্ত: ধুবড়িতে ব্রহ্মপুত্র নদের জলসীমান্তে বিএসএফের স্পিডবোট ও সেন্সর নজরদারি জোরদার",
    summaryBn: "দ্য আসাম ট্রাইব্যুনালের প্রতিবেদনে জানানো হয়েছে, আসামের ধুবড়ি সেক্টরে ভারত-বাংলাদেশ আন্তর্জাতিক জলসীমান্তে অনুপ্রবেশ ও চোরাচালান ঠেকাতে বিএসএফ গুয়াহাটি ফ্রন্টিয়ার আধুনিক নাইট-ভিশন সেন্সর, থার্মাল ইমেজার এবং হাই-স্পিড প্যাট্রোল বোট মোতায়েন করে ২৪ ঘণ্টার যৌথ নজরদারি শুরু করেছে।",
    summaryEn: "According to The Assam Tribune, BSF Guwahati Frontier has deployed advanced thermal imagers, night-vision cameras, and rapid interceptor watercraft to enhance round-the-clock surveillance across the unfenced riverine stretches of the Brahmaputra in Dhubri along the Indo-Bangladesh border.",
    keyPointsBn: [
      "ধুবড়ি আন্তর্জাতিক জলসীমান্তে বিএসএফের আধুনিক ইন্টারসেপ্টর বোট ও ড্রোন স্কোয়াড মোতায়েন",
      "চোরাচালান ও সীমান্ত অতিক্রম রোধে সমন্বিত নজরদারি প্রযুক্তি স্থাপন",
      "আসাম সীমান্তবর্তী সংবেদনশীল চরাঞ্চলে স্থানীয় ভিলেজ ডিফেন্স পার্টির সাথে সমন্বয় সভা"
    ],
    keyPointsEn: [
      "BSF deploys rapid interceptor boats and drone reconnaissance along Dhubri riverine sector",
      "Comprehensive sensor grid established to prevent illegal ingress across international border",
      "Coordination meetings held with local village defense committees in riparian border tracts"
    ],
    category: "border",
    categoryLabelBn: "সীমান্ত নিরাপত্তা",
    categoryLabelEn: "Border & Security",
    sentiment: "neutral",
    sentimentReasonBn: "সীমান্ত নিরাপত্তা ও নজরদারি ব্যবস্থা জোরদার সম্পর্কিত প্রতিরক্ষামূলক প্রতিবেদন।",
    sentimentReasonEn: "Security and defense reportage detailing frontier surveillance and riverine patrols.",
    source: {
      name: "The Assam Tribune",
      bureau: "Assam",
      language: "English",
      originalUrl: "https://assamtribune.com/assam/bsf-guwahati-frontier-intensifies-riverine-patrol-dhubri-brahmaputra-border-1618392",
      scannedAt: "2026-09-26T20:00:00Z"
    },
    publishedAt: "2026-09-26T16:20:00Z",
    readTimeBn: "৩ মিনিট পাঠ",
    readTimeEn: "3 min read",
    imageUrl: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
    tags: ["Assam Tribune", "BSF", "Assam Frontier", "Dhubri", "Border Security"]
  },
  {
    id: "news-20260926-007",
    slug: "tripura-times-chakma-advocacy-groups-agartala-human-rights-safeguards",
    title: "Chakma & Regional Advocacy Groups in Agartala Urge Human Rights Safeguards in Chittagong Hill Tracts",
    englishTitle: "Chakma & Regional Advocacy Groups in Agartala Urge Human Rights Safeguards in Chittagong Hill Tracts",
    banglaTitle: "পার্বত্য চট্টগ্রামের আদিবাসীদের নিরাপত্তা সুরক্ষায় আগরতলায় নাগরিক ও মানবাধিকার সংগঠনের দাবি",
    summaryBn: "ত্রিপুরা টাইমসের প্রতিবেদনে প্রকাশিত তথ্যে আগরতলায় ত্রিপুরা-ভিত্তিক বিভিন্ন নাগরিক ও ছাত্র সংগঠন বাংলাদেশের পার্বত্য চট্টগ্রাম অঞ্চলে বসবাসরত চাকমা ও সংখ্যালঘু পাহাড়ি জনগোষ্ঠীর নিরাপত্তা নিশ্চিতকরণ এবং মানবাধিকার লঙ্ঘনের বিরুদ্ধে সোচ্চার হওয়ার আহ্বান জানিয়েছে।",
    summaryEn: "According to Tripura Times, indigenous student bodies and human rights forums in Agartala submitted memoranda urging enhanced protection, constitutional safeguards, and impartial human rights monitoring for Chakma and tribal communities residing in the Chittagong Hill Tracts.",
    keyPointsBn: [
      "আগরতলায় পার্বত্য চট্টগ্রামের সংখ্যালঘুদের সুরক্ষার দাবিতে নাগরিক সমাবেশ",
      "ত্রিপুরা ও বাংলাদেশের সীমান্তবর্তী উপজাতি সম্প্রদায়ের নিরাপত্তা নিয়ে উদ্বেগ প্রকাশ",
      "আন্তর্জাতিক মানবাধিকার সংস্থাসমূহের সরেজমিন অনুসন্ধানের দাবি"
    ],
    keyPointsEn: [
      "Civil society and indigenous student forums in Agartala organize awareness rally",
      "Express concern over safety and land rights of tribal communities in Chittagong Hill Tracts",
      "Urge international monitoring teams to evaluate ground conditions impartially"
    ],
    category: "border",
    categoryLabelBn: "সীমান্ত ও মানবাধিকার",
    categoryLabelEn: "Border & Human Rights",
    sentiment: "neutral",
    sentimentReasonBn: "আঞ্চলিক মানবাধিকার ও উপজাতীয় নিরাপত্তা সম্পর্কিত তথ্যভিত্তিক প্রতিবেদন।",
    sentimentReasonEn: "Regional human rights reporting on tribal welfare and trans-border civil society appeals.",
    source: {
      name: "Tripura Times",
      bureau: "Tripura",
      language: "English",
      originalUrl: "https://tripuratimes.com/ttimes/atrocities-on-chakma-living-in-bangladesh-students-body-demand-action-20260926",
      scannedAt: "2026-09-26T19:30:00Z"
    },
    publishedAt: "2026-09-26T15:15:00Z",
    readTimeBn: "৩ মিনিট পাঠ",
    readTimeEn: "3 min read",
    imageUrl: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
    tags: ["Tripura Times", "Agartala", "Chakma Rights", "Chittagong Hill Tracts", "Northeast"]
  },
  {
    id: "news-20260926-008",
    slug: "news18-durga-puja-hilsa-petrapole-border-logistics-customs",
    title: "Durga Puja Festive Supply: Petrapole Land Port Expedites Customs Clearance for Hilsa Consignments",
    englishTitle: "Durga Puja Festive Supply: Petrapole Land Port Expedites Customs Clearance for Hilsa Consignments",
    banglaTitle: "পুজোর বাজার: পেট্রাপোল স্থলবন্দরে পদ্মার ইলিশ চালানের দ্রুত শুল্কায়ন ও বিশেষ কুলিং লজিস্টিকস",
    summaryBn: "নিউজ১৮ ইন্ডিয়ার প্রতিবেদনে জানা গেছে, আসন্ন দুর্গাপূজা উপলক্ষে বাংলাদেশ থেকে আগত ইলিশের বিশেষ চালানের নির্বিঘ্ন সরবরাহ নিশ্চিতে পেট্রাপোল ইন্টিগ্রেটেড চেকপোস্টে (ICP) কাস্টমস ও লজিস্টিকস কর্তৃপক্ষ দ্রুতগতির গ্রিন চ্যানেল ও শীতলীকরণ ব্যবস্থা চালু করেছে।",
    summaryEn: "News18 reports that authorities at the Petrapole Integrated Check Post (ICP) have operationalized dedicated green corridors and cold-storage logistics to expedite customs clearance for approved Durga Puja festive Hilsa consignments entering West Bengal.",
    keyPointsBn: [
      "পেট্রাপোল স্থলবন্দরে ইলিশ মাছের চালানের জন্য বিশেষ গ্রিন করিডোর চালু",
      "হাওড়া পাইকারি মাছ বাজারে দ্রুত সরবরাহ নিশ্চিতে ২৪ ঘণ্টার ক্লিয়ারেন্স সুবিধা",
      "উভয় দেশের রফতানিকারক ও শুল্ক কর্মকর্তাদের মধ্যে নিরবচ্ছিন্ন যোগাযোগ"
    ],
    keyPointsEn: [
      "Petrapole ICP establishes dedicated perishable green corridor for festive fish shipments",
      "Enables rapid distribution to Kolkata and Howrah wholesale fish markets",
      "Cross-border exporters and customs inspectors maintain real-time freight tracking"
    ],
    category: "trade",
    categoryLabelBn: "বাণিজ্য ও অর্থনীতি",
    categoryLabelEn: "Trade & Commerce",
    sentiment: "positive",
    sentimentReasonBn: "সীমান্ত বাণিজ্য ও উৎসবকালীন খাদ্য সরবরাহ সহজীকরণ সংক্রান্ত ইতিবাচক খবর।",
    sentimentReasonEn: "Positive commercial development on cross-border logistics and trade facilitation.",
    source: {
      name: "News18",
      bureau: "Kolkata",
      language: "English",
      originalUrl: "https://www.news18.com/india/hilsa-shock-ahead-of-durga-puja-bangladesh-stops-fish-export-petrapole-border-9062314.html",
      scannedAt: "2026-09-26T19:00:00Z"
    },
    publishedAt: "2026-09-26T14:40:00Z",
    readTimeBn: "৩ মিনিট পাঠ",
    readTimeEn: "3 min read",
    imageUrl: "https://images.unsplash.com/photo-1524813686514-a57563d77d66?auto=format&fit=crop&w=1200&q=80",
    tags: ["News18", "Petrapole", "Hilsa", "Durga Puja", "Border Trade"]
  },
  {
    id: "news-20260926-009",
    slug: "ndtv-youtube-sheikh-hasina-exclusive-interview-transition-roadmap",
    title: "NDTV Video Dispatch: Sheikh Hasina Details Roadmap on Awami League Rebuilding & Democratic Transition",
    englishTitle: "NDTV Video Dispatch: Sheikh Hasina Details Roadmap on Awami League Rebuilding & Democratic Transition",
    banglaTitle: "এনডিটিভি ভিডিও বিশেষ: দল পুনর্গঠন ও ভবিষ্যৎ গণতান্ত্রিক উত্তরণ নিয়ে শেখ হাসিনার বিশদ বার্তা",
    summaryBn: "এনডিটিভি-র ইউটিউব সম্প্রচারে সম্প্রচারিত বিশেষ ভিডিও বিশ্লেষণে সাবেক প্রধানমন্ত্রী শেখ হাসিনার সাম্প্রতিক বক্তব্যের গুরুত্বপূর্ণ দিকগুলো তুলে ধরা হয়েছে। তিনি দলের তৃণমূল নেতাকর্মীদের সংগঠিত রাখা এবং আন্তর্জাতিক পরিমণ্ডলে বাংলাদেশের সংবিধান সুরক্ষার ওপর জোর দেন।",
    summaryEn: "In an exclusive NDTV broadcast dispatch on YouTube, political analysts examine former Prime Minister Sheikh Hasina's latest strategic address regarding grassroots cadre reorganization and constitutional legal safeguards.",
    keyPointsBn: [
      "এনডিটিভি স্পেশাল ভিডিওতে শেখ হাসিনার রাজনৈতিক রূপরেখার বিশদ বিশ্লেষণ",
      "দলের নেতাকর্মীদের ঐক্যবদ্ধ থাকা ও আইনি সেল গঠনের নির্দেশনা",
      "আন্তর্জাতিক কূটনীতি ও আঞ্চলিক স্থিতিশীলতার গুরুত্ব পুনর্ব্যক্ত"
    ],
    keyPointsEn: [
      "NDTV special video analysis decodes Hasina's latest televised address and strategic roadmap",
      "Emphasizes unity across district committees and systematic legal defense efforts",
      "Reiterates the crucial necessity of regional security stability in South Asia"
    ],
    category: "diplomacy",
    categoryLabelBn: "কূটনীতি ও ভিডিও",
    categoryLabelEn: "Diplomacy & Video Dispatch",
    sentiment: "neutral",
    sentimentReasonBn: "টেলিভিশন সাক্ষাৎকার ও ভিডিও বিশ্লেষণের বস্তুনিষ্ঠ বিবরণ।",
    sentimentReasonEn: "Objective broadcast analysis examining televised statements and political developments.",
    source: {
      name: "NDTV",
      bureau: "Delhi",
      language: "English",
      originalUrl: "https://www.youtube.com/watch?v=KwJJEeu0fc8",
      scannedAt: "2026-09-26T18:30:00Z"
    },
    publishedAt: "2026-09-26T14:00:00Z",
    readTimeBn: "২ মিনিট পাঠ",
    readTimeEn: "2 min read",
    imageUrl: "https://i.ytimg.com/vi/KwJJEeu0fc8/hqdefault.jpg",
    mediaFormat: "youtube",
    videoUrl: "https://www.youtube.com/watch?v=KwJJEeu0fc8",
    tags: ["NDTV", "YouTube", "Video Dispatch", "Sheikh Hasina", "Delhi Bureau"]
  },
  {
    id: "news-20260926-010",
    slug: "anandabazar-bangladesh-hasina-documentary-film-screening-kolkata",
    title: "হাসিনা দেশ ছাড়লেন কেন: পটভূমি ও ঘটনাক্রম নিয়ে তৈরি তথ্যচিত্র প্রদর্শনের প্রস্তুতি কলকাতায়",
    englishTitle: "Documentary on Circumstances Surrounding Sheikh Hasina's Departure Scheduled for Screening in Kolkata",
    banglaTitle: "হাসিনা দেশ ছাড়লেন কেন: পটভূমি ও ঘটনাক্রম নিয়ে তৈরি তথ্যচিত্র প্রদর্শনের প্রস্তুতি কলকাতায়",
    summaryBn: "আনন্দবাজার পত্রিকার প্রতিবেদনে জানা গেছে, ২০২৪ সালের আগস্টে বাংলাদেশে রাজনৈতিক পটপরিবর্তন ও শেখ হাসিনার ভারতে আশ্রয়ের ঐতিহাসিক প্রেক্ষাপট নিয়ে নির্মিত একটি অনুসন্ধানী তথ্যচিত্র কলকাতার একাডেমি অফ ফাইন আর্টসে প্রদর্শনীর উদ্যোগ নেওয়া হয়েছে।",
    summaryEn: "Anandabazar Patrika reports that an investigative documentary analyzing the historic sequence of events that led to the political shift in Dhaka and Sheikh Hasina's relocation to India is scheduled for a special preview screening in Kolkata.",
    keyPointsBn: [
      "কলকাতায় রাজনৈতিক পটপরিবর্তন সংক্রান্ত তথ্যচিত্রের বিশেষ প্রদর্শনী",
      "ঐতিহাসিক ঘটনাক্রম, ছাত্র আন্দোলন ও ভূ-রাজনৈতিক প্রেক্ষাপট বিশ্লেষণ",
      "বিশিষ্ট ইতিহাসবিদ ও সাংবাদিক মহলের অংশগ্রহণে উন্মুক্ত প্যানেল আলোচনা"
    ],
    keyPointsEn: [
      "Special screening of investigative documentary organized in Kolkata cultural precinct",
      "Chronicles historical timeline, youth movements, and geopolitical dimensions",
      "Panel discussions featuring prominent historians and foreign affairs correspondents"
    ],
    category: "culture",
    categoryLabelBn: "সংস্কৃতি ও সমাজ",
    categoryLabelEn: "Culture & Society",
    sentiment: "neutral",
    sentimentReasonBn: "সাংস্কৃতিক অনুষ্ঠান ও ঐতিহাসিক তথ্যচিত্র প্রদর্শনী সংক্রান্ত খবর।",
    sentimentReasonEn: "Cultural and media coverage on historical documentary screening and public discourse.",
    source: {
      name: "Anandabazar Patrika",
      bureau: "Kolkata",
      language: "Bengali",
      originalUrl: "https://www.anandabazar.com/world/film-regarding-sheikh-hasinas-departure-from-bangladesh-will-be-screened-prnt/cid/1715106",
      scannedAt: "2026-09-26T18:00:00Z"
    },
    publishedAt: "2026-09-26T13:30:00Z",
    readTimeBn: "৩ মিনিট পাঠ",
    readTimeEn: "3 min read",
    imageUrl: "https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=1200&q=80",
    tags: ["Anandabazar", "Documentary", "Kolkata", "Culture", "Bangladesh History"]
  },
  {
    id: "news-20260926-011",
    slug: "republic-bangla-youtube-petrapole-benapole-truck-movement-hilsa",
    title: "ইলিশ রফতানি ও সীমান্ত বাণিজ্য নিয়ে পেট্রাপোল সীমান্তে ট্রাক চলাচলের সরাসরি ভিডিও রিপোর্ট",
    englishTitle: "Ground Video Report from Petrapole Border: Cross-Border Truck Freight Movement & Trade Logistics",
    banglaTitle: "ইলিশ রফতানি ও সীমান্ত বাণিজ্য নিয়ে পেট্রাপোল সীমান্তে ট্রাক চলাচলের সরাসরি ভিডিও রিপোর্ট",
    summaryBn: "রিপাবলিক বাংলার ইউটিউব ভিডিও প্রতিবেদনে পেট্রাপোল-বেনাপোল আন্তর্জাতিক স্থলবন্দরের বর্তমান পরিস্থিতি তুলে ধরা হয়েছে। পণ্যবাহী ট্রাকের ছাড়পত্র, সীমান্ত বাণিজ্য এবং চালকদের নিরাপত্তার বিষয়ে কাস্টমস ও বিএসএফের যৌথ উদ্যোগের সরাসরি দৃশ্য তুলে ধরা হয়।",
    summaryEn: "A Republic Bangla video dispatch on YouTube provides ground reporting from the Petrapole-Benapole international land border, detailing cross-border freight traffic, customs clearing processes, and trucker security mechanisms.",
    keyPointsBn: [
      "পেট্রাপোল-বেনাপোল সীমান্তে পণ্যবাহী ট্রাকের মসৃণ চলাচলে বিশেষ ব্যবস্থা",
      "কাঁচামাল ও পচনশীল পণ্যের দ্রুত ছাড়পত্রে কাস্টমসের অটোমেটেড স্ক্যানিং",
      "চালকদের নিরাপত্তা ও সীমান্তে ট্রাফিক জট নিরসনে বিএসএফের কড়া নজরদারি"
    ],
    keyPointsEn: [
      "On-ground video footage shows streamlined freight movement across Petrapole-Benapole border",
      "Automated customs scanning expedites clearance for perishable goods and essential supplies",
      "BSF maintains tight perimeter security to ensure seamless transport and driver safety"
    ],
    category: "trade",
    categoryLabelBn: "বাণিজ্য ও ভিডিও",
    categoryLabelEn: "Trade & Video Dispatch",
    sentiment: "positive",
    sentimentReasonBn: "স্থলবন্দরে বাণিজ্য সচল রাখা ও লজিস্টিকস উন্নয়ন সম্পর্কিত ভিডিও প্রতিবেদন।",
    sentimentReasonEn: "Positive ground coverage illustrating efficient trade logistics at key international border port.",
    source: {
      name: "Republic TV",
      bureau: "Kolkata",
      language: "Bengali",
      originalUrl: "https://www.youtube.com/watch?v=2ykz1WzGNPk",
      scannedAt: "2026-09-26T17:30:00Z"
    },
    publishedAt: "2026-09-26T12:45:00Z",
    readTimeBn: "২ মিনিট পাঠ",
    readTimeEn: "2 min read",
    imageUrl: "https://i.ytimg.com/vi/2ykz1WzGNPk/hqdefault.jpg",
    mediaFormat: "youtube",
    videoUrl: "https://www.youtube.com/watch?v=2ykz1WzGNPk",
    tags: ["Republic Bangla", "YouTube", "Petrapole", "Border Trade", "Video Report"]
  },
  {
    id: "news-20260926-012",
    slug: "india-today-instagram-howrah-wholesale-market-festive-hilsa-pricing",
    title: "Festive Market Watch: Howrah Wholesale Fish Market Analyzes Seasonal Demand & Cross-Border Supply",
    englishTitle: "Festive Market Watch: Howrah Wholesale Fish Market Analyzes Seasonal Demand & Cross-Border Supply",
    banglaTitle: "হাওড়া পাইকারি মাছ বাজারে উৎসবের মরসুমে ইলিশের সরবরাহ ও দামের ওঠা-নামা নিয়ে বিশেষ পর্যালোচনা",
    summaryBn: "ইন্ডিয়া টুডের ইনস্টাগ্রাম সোশ্যাল ভিডিও কভারেজে হাওড়া পাইকারি মাছ বাজারের চিত্র তুলে ধরা হয়েছে। পূজার আগে ওপার বাংলা থেকে আসা ইলিশ এবং স্থানীয় দীঘা-কাকদ্বীপের ইলিশের মিশ্র জোগানে বাজারের চাহিদা ও দামের স্থিতিশীলতা বজায় রাখার প্রচেষ্টা চলছে।",
    summaryEn: "India Today's social media dispatch covers the bustling Howrah wholesale fish market ahead of Durga Puja, capturing market sentiment, pricing dynamics, and the consumer demand for imported Padma and local coastal Hilsa fish varieties.",
    keyPointsBn: [
      "হাওড়া পাইকারি বাজারে উৎসব উপলক্ষে ক্রেতা-বিক্রেতাদের উপচে পড়া ভিড়",
      "পদ্মার ইলিশ ও স্থানীয় ইলিশের মিশ্র জোগানে দাম সহনশীল রাখার উদ্যোগ",
      "কলকাতা ও সংলগ্ন জেলাগুলোর খুচরা বাজারে দ্রুত সরবরাহের নেটওয়ার্ক"
    ],
    keyPointsEn: [
      "High buyer footfall recorded across Howrah fish wholesale markets ahead of Durga Puja",
      "Wholesalers balance supplies from cross-border imports and domestic coastal catches",
      "Efficient logistics grid ensures timely morning deliveries to city retailers"
    ],
    category: "culture",
    categoryLabelBn: "সংস্কৃতি ও বাজার",
    categoryLabelEn: "Culture & Festive Market",
    sentiment: "positive",
    sentimentReasonBn: "উৎসবের প্রস্তুতি ও সামাজিক খাদ্য সংস্কৃতি বিষয়ক ইতিবাচক সোশ্যাল প্রতিবেদন।",
    sentimentReasonEn: "Vibrant social dispatch highlighting festive preparations and cultural food traditions.",
    source: {
      name: "India Today",
      bureau: "Kolkata",
      language: "English",
      originalUrl: "https://www.instagram.com/p/DdwaHhynStH/",
      scannedAt: "2026-09-26T17:00:00Z"
    },
    publishedAt: "2026-09-26T12:00:00Z",
    readTimeBn: "২ মিনিট পাঠ",
    readTimeEn: "2 min read",
    imageUrl: "https://images.unsplash.com/photo-1524813686514-a57563d77d66?auto=format&fit=crop&w=1200&q=80",
    mediaFormat: "instagram",
    instagramEmbedUrl: "https://www.instagram.com/p/DdwaHhynStH/",
    tags: ["India Today", "Instagram", "Howrah Market", "Durga Puja", "Hilsa"]
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
  totalScanned24h: 4156,
  bangladeshMatches: 1080,
  sentimentDistribution: {
    positive: 36,
    neutral: 44,
    negative: 20
  },
  bureauDistribution: {
    delhi: 44,
    kolkata: 34,
    mumbai: 8,
    tripura: 6,
    assam: 5,
    siliguri: 3
  },
  languageDistribution: {
    english: 42,
    bengali: 36,
    hindi: 14,
    tamil: 2,
    telugu: 2,
    marathi: 2,
    malayalam: 2
  }
};

const updatedStatsStr = `export const SCANNER_STATS = ${JSON.stringify(newStats, null, 2)};`;
content = content.replace(statsRegex, updatedStatsStr);

fs.writeFileSync(newsFilePath, content, 'utf8');
console.log(`✅ Successfully appended ${newItems.length} news items and ${newAlerts.length} alerts to news-data.ts`);
