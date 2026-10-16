import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const newsFilePath = path.join(rootDir, 'src/data/news-data.ts');
let content = fs.readFileSync(newsFilePath, 'utf8');

const updatedStats = {
  lastScannedAtBn: "১৬ অক্টোবর, ২০২৬ এ ৬:৩০ PM",
  lastScannedAtEn: "16 Oct 2026, 06:30 pm",
  totalScanned24h: 4621,
  bangladeshMatches: 1273,
  sentimentDistribution: {
    positive: 35,
    neutral: 46,
    negative: 19
  },
  bureauDistribution: {
    delhi: 43,
    kolkata: 33,
    mumbai: 12,
    tripura: 5,
    assam: 5,
    siliguri: 2
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

const freshAlerts = [
  {
    id: "alert-109",
    headlineBn: "‘রবীন্দ্রনাথের ছবিতে কালি বিতর্ক: বাংলাদেশের আত্মপরিচয়ের সংকট নিয়ে বিশেষ প্রতিবেদন’: দ্য টাইমস অব ইন্ডিয়া",
    headlineEn: "The Times of India: Black Ink on Tagore Reflects Deeper Identity Battle in Post-Transition Bangladesh",
    timeAgoBn: "৫ মিনিট আগে",
    timeAgoEn: "5 mins ago",
    sourceName: "The Times of India",
    sourceBureau: "Delhi",
    sentiment: "negative",
    url: "https://timesofindia.indiatimes.com/world/black-ink-on-tagore-the-fight-over-bangladeshs-identity/articleshow/134990572.cms"
  },
  {
    id: "alert-110",
    headlineBn: "‘বাংলাদেশগামী আধুনিক এলএইচবি রেল কোচ উত্তরপ্রদেশের রেলপথে রওনা, বাণিজ্য সংযোগ জোরদার’: নবভারত টাইমস",
    headlineEn: "Navbharat Times: Make in India Modern LHB Coaches for Bangladesh Transit Through Uttar Pradesh",
    timeAgoBn: "২০ মিনিট আগে",
    timeAgoEn: "20 mins ago",
    sourceName: "Navbharat Times",
    sourceBureau: "Delhi",
    sentiment: "positive",
    url: "https://navbharattimes.indiatimes.com/state/uttar-pradesh/shahjahanpur/modern-passenger-coaches-manufactured-bangladeshs-intercity-trains-lhb-make-in-india/articleshow/134981383.cms"
  },
  {
    id: "alert-111",
    headlineBn: "‘ভারতে পঞ্চম কনস্যুলার সংলাপে শেখ হাসিনাসহ রাজনৈতিক প্রত্যাবর্তনের আলোচনা’: এই সময় অনলাইন",
    headlineEn: "Ei Samay: Indo-Bangla Fifth Consular Dialogue Focuses on Visa Normalization & High-Level Exchanges",
    timeAgoBn: "৩৫ মিনিট আগে",
    timeAgoEn: "35 mins ago",
    sourceName: "Ei Samay (Instagram)",
    sourceBureau: "Siliguri",
    sentiment: "neutral",
    url: "https://www.instagram.com/p/DejF4x_nVZj/"
  },
  {
    id: "alert-112",
    headlineBn: "‘বাংলাদেশে পুশব্যাকের ঘটনায় কেন্দ্রে ও রাজ্যকে মুমতাজ বেগমের খোঁজ পাওয়ার নির্দেশ গৌহাটি হাইকোর্টের’: দৈনিক জাগরণ",
    headlineEn: "Dainik Jagran: Gauhati HC Directs Centre and Assam Govt to Trace Woman Expelled to Bangladesh",
    timeAgoBn: "৫০ মিনিট আগে",
    timeAgoEn: "50 mins ago",
    sourceName: "Dainik Jagran",
    sourceBureau: "Assam",
    sentiment: "negative",
    url: "https://www.jagran.com/news/national-where-is-mumtaz-begum-gauhati-hc-directs-centre-and-state-government-to-locate-woman-sent-to-bangladesh-40406523.html"
  }
];

const freshItems = [
  {
    id: "news-20261016-013",
    slug: "times-of-india-black-ink-tagore-fight-over-bangladesh-identity",
    title: "Black ink on Tagore: The fight over Bangladesh's identity - The Times of India",
    englishTitle: "The Times of India: Black Ink on Tagore Graffiti Ignites Ideological Battle Over Bangladesh's Cultural Identity",
    banglaTitle: "‘রবীন্দ্রনাথের প্রতিকৃতিতে কালি’: বাংলাদেশের সাংস্কৃতিক আত্মপরিচয় ও দ্বিপাক্ষিক সম্পর্কের টানাপোড়েন নিয়ে টাইমস অব ইন্ডিয়ার বিশ্লেষণ",
    summaryBn: "বাংলাদেশে নোবেলজয়ী কবি রবীন্দ্রনাথ ঠাকুরের প্রতিকৃতিতে কালি লেপনের ঘটনাকে কেন্দ্র করে শুরু হওয়া বিতর্ককে বাংলাদেশের সাংস্কৃতিক আত্মপরিচয়ের এক গভীর আদর্শিক লড়াই হিসেবে তুলে ধরেছে দ্য টাইমস অব ইন্ডিয়া। প্রতিবেদনে বলা হয়, ইতিহাস ও ধর্মনিরপেক্ষ মূল্যবোধের ওপর উগ্র ধর্মীয় গোষ্ঠীর আগ্রাসন দুই দেশের দীর্ঘদিনের সাংস্কৃতিক সেতুবন্ধনে আঘাত হানছে।",
    summaryEn: "The Times of India published an in-depth analysis detailing how the defacement of Rabindranath Tagore's mural has escalated into a core battle over Bangladesh's national ethos and secular heritage. The dispatch highlights growing concern across New Delhi's cultural and diplomatic quarters regarding revisionist religious extremism.",
    keyPointsBn: [
      "রবীন্দ্রনাথের ছবিতে কালি লেপনের ঘটনায় রাষ্ট্রদ্রোহ মামলা দায়েরের প্রেক্ষাপটে দিল্লি সংবাদমাধ্যমের তীক্ষ্ণ নজর",
      "বাঙালি ধর্মনিরপেক্ষ জাতীয়তাবাদের ওপর উগ্র ধর্মীয় মৌলবাদের মনস্তাত্ত্বিক আঘাতের বিশদ বিবরণ",
      "দুই দেশের যৌথ সাংস্কৃতিক ঐতিহ্য ও সাহিত্যিক সম্পর্কের ওপর সম্ভাব্য দীর্ঘমেয়াদী প্রভাব"
    ],
    keyPointsEn: [
      "Analyzed the legal sedition charges and political fallout surrounding Tagore's defaced portrait",
      "Highlighted clash between inclusive Bengali cultural heritage and revisionist fundamentalism",
      "Outlined strategic concern over preservation of shared literary and civilizational linkages"
    ],
    category: "culture",
    categoryLabelBn: "সংস্কৃতি ও দ্বিপাক্ষিক ঐতিহ্য",
    categoryLabelEn: "Culture & Shared Heritage",
    sentiment: "negative",
    sentimentReasonBn: "সাংস্কৃতিক ঐতিহ্যের ওপর আঘাত ও উগ্রপন্থী তৎপরতার বিরুদ্ধে ভারতীয় গণমাধ্যমের সমালোচনামূলক দৃষ্টিভঙ্গি।",
    sentimentReasonEn: "Critical reportage highlighting risks to shared cultural legacy and secular bilateral goodwill.",
    source: {
      name: "The Times of India",
      bureau: "Delhi",
      language: "English",
      originalUrl: "https://timesofindia.indiatimes.com/world/black-ink-on-tagore-the-fight-over-bangladeshs-identity/articleshow/134990572.cms",
      scannedAt: "2026-10-16T18:30:00Z"
    },
    publishedAt: "2026-10-16T12:15:00.000Z",
    readTimeBn: "৪ মিনিট",
    readTimeEn: "4 mins",
    imageUrl: "/images/delhi-red-fort-heritage.jpg",
    mediaFormat: "rss",
    isLeadStory: true,
    isTrending: true,
    tags: ["রবীন্দ্রনাথ ঠাকুর", "টাইমস অব ইন্ডিয়া", "সংস্কৃতি", "বাংলাদেশ", "আদর্শিক লড়াই"]
  },
  {
    id: "news-20261016-014",
    slug: "navbharat-times-modern-passenger-lhb-coaches-bangladesh-intercity-trains",
    title: "शाहजहांपुर से गुजरी बांग्लादेश की ट्रेन, जानें क्या है आधुनिक एलएचबी युक्त मेक इन इंडिया कोच - Navbharat Times",
    englishTitle: "Navbharat Times: Modern 'Make in India' LHB Coaches for Bangladesh Transit Through Uttar Pradesh",
    banglaTitle: "‘মেক ইন ইন্ডিয়া প্রকল্পের আধুনিক এলএইচবি কোচ যাচ্ছে বাংলাদেশে’: উত্তরপ্রদেশ দিয়ে ট্রেন চলাচলের খবর প্রকাশ নবভারত টাইমসে",
    summaryBn: "পাঞ্জাবের কাপুরথালা রেল কোচ কারখানা থেকে বাংলাদেশে রপ্তানি হওয়া অত্যাধুনিক ব্রডগেজ এলএইচবি রেল কোচ বোঝাই ট্রেন উত্তরপ্রদেশের শাহজাহানপুর অতিক্রম করেছে। নবভারত টাইমস জানিয়েছে, দুই দেশের রেল বাণিজ্য ও আন্তঃসীমান্ত যাত্রী যোগাযোগ ব্যবস্থা আধুনিকায়নে এটি ভারতের বড় শিল্প ও বাণিজ্যিক অগ্রগতি।",
    summaryEn: "A freight convoy transporting newly manufactured broad-gauge LHB passenger coaches exported to Bangladesh transited through Uttar Pradesh. Navbharat Times reported that this delivery demonstrates resilient cross-border industrial trade and railway infrastructure cooperation between India and Bangladesh.",
    keyPointsBn: [
      "পাঞ্জাব থেকে তৈরি ১৮টি আধুনিক ব্রডগেজ এলএইচবি কোচের সফল রেল ট্রানজিট",
      "দর্শনা-গেদে সীমান্ত করিডোর দিয়ে বাংলাদেশে পৌঁছানোর নির্ধারিত সময়সূচি",
      "দ্বিপাক্ষিক বাণিজ্যিক সহযোগিতা ও রেল যোগাযোগের ধারাবাহিক উন্নয়ন"
    ],
    keyPointsEn: [
      "Successful transit of 18 state-of-the-art broad-gauge LHB coaches manufactured in Punjab",
      "En route to Bangladesh via the strategic Gede-Darshana railway interchange border",
      "Demonstrates sustained cross-border transit trade and rolling stock supply"
    ],
    category: "trade",
    categoryLabelBn: "বাণিজ্য ও রেলওয়ে কানেক্টিভিটি",
    categoryLabelEn: "Trade & Railway Connectivity",
    sentiment: "positive",
    sentimentReasonBn: "রেল অবকাঠামো রপ্তানি ও দ্বিপাক্ষিক বাণিজ্য সহযোগিতার ইতিবাচক সাফল্য।",
    sentimentReasonEn: "Positive industrial dispatch underscoring bilateral rail connectivity and logistical trade.",
    source: {
      name: "Navbharat Times",
      bureau: "Delhi",
      language: "Hindi",
      originalUrl: "https://navbharattimes.indiatimes.com/state/uttar-pradesh/shahjahanpur/modern-passenger-coaches-manufactured-bangladeshs-intercity-trains-lhb-make-in-india/articleshow/134981383.cms",
      scannedAt: "2026-10-16T18:30:00Z"
    },
    publishedAt: "2026-10-16T11:40:00.000Z",
    readTimeBn: "৩ মিনিট",
    readTimeEn: "3 mins",
    imageUrl: "/images/delhi-south-block-diplomacy.jpg",
    mediaFormat: "rss",
    tags: ["রেলওয়ে", "নবভারত টাইমস", "মেক ইন ইন্ডিয়া", "বাণিজ্য", "এলএইচবি কোচ"]
  },
  {
    id: "news-20261016-015",
    slug: "dainik-jagran-where-is-mumtaz-begum-gauhati-hc-directs-centre-assam-government",
    title: "'कहां गई मुमताज बेगम', गुवाहाटी HC का केंद्र और राज्य सरकार को आदेश; बांग्लादेश भेजी गई महिला को खोजें - Dainik Jagran",
    englishTitle: "Dainik Jagran: Gauhati HC Directs Centre and Assam Government to Locate Woman Deported to Bangladesh",
    banglaTitle: "‘কোথায় গেলেন মুমতাজ বেগম’: বাংলাদেশে পুশব্যাকের ঘটনায় কেন্দ্র ও আসাম সরকারকে তল্লাশির নির্দেশ গৌহাটি হাইকোর্টের",
    summaryBn: "গৌহাটি হাইকোর্ট এক নজিরবিহীন রায়ে কেন্দ্র ও আসাম রাজ্য সরকারকে অবিলম্বে মুমতাজ বেগম নামের এক নারীকে খুঁজে বের করার নির্দেশ দিয়েছে, যাকে বাংলাদেশি নাগরিক সন্দেহে করিমগঞ্জ সীমান্ত দিয়ে পুশব্যাক করা হয়েছিল। দৈনিক জাগরণের প্রতিবেদনে সীমান্ত নির্ধারণ এবং আইনি প্রক্রিয়ার গুরুতর ত্রুটি তুলে ধরা হয়েছে।",
    summaryEn: "The Gauhati High Court ordered the Ministry of External Affairs and the Assam government to trace Mumtaz Begum, who was summarily expelled to Bangladesh through the Karimganj border before her legal nationality appeals concluded. Dainik Jagran detailed the procedural scrutiny surrounding border expulsions.",
    keyPointsBn: [
      "বিদেশি ট্রাইব্যুনালের রায়ের বিরুদ্ধে আপিল নিষ্পত্তির আগেই বাংলাদেশে বহিষ্কারের ঘটনায় আদালতের অসন্তোষ",
      "পররাষ্ট্র মন্ত্রণালয় ও বিএসএফের মাধ্যমে কূটনৈতিক চ্যানেলে অনুসন্ধান চালানোর আদেশ",
      "আসাম-বাংলাদেশ সীমান্ত অভিবাসন ও পুশব্যাক প্রক্রিয়ার স্বচ্ছতা নিয়ে গুরুত্বপূর্ণ প্রশ্ন"
    ],
    keyPointsEn: [
      "Gauhati High Court expressed dismay over deportation executed prior to statutory appeals",
      "Directed MEA and Assam authorities to initiate diplomatic tracing protocols",
      "Spotlighted legal controversies surrounding Assam-Bangladesh frontier pushback mechanisms"
    ],
    category: "border",
    categoryLabelBn: "সীমান্ত ও আইনি মানবাধিকার",
    categoryLabelEn: "Border & Human Rights",
    sentiment: "negative",
    sentimentReasonBn: "সীমান্ত নির্বাসন প্রক্রিয়ায় আইনি জটিলতা ও প্রশাসনিক ভুলের সমালোচনা।",
    sentimentReasonEn: "Legal scrutiny over border deportation procedures and cross-border human rights issues.",
    source: {
      name: "Dainik Jagran",
      bureau: "Assam",
      language: "Hindi",
      originalUrl: "https://www.jagran.com/news/national-where-is-mumtaz-begum-gauhati-hc-directs-centre-and-state-government-to-locate-woman-sent-to-bangladesh-40406523.html",
      scannedAt: "2026-10-16T18:30:00Z"
    },
    publishedAt: "2026-10-16T10:15:00.000Z",
    readTimeBn: "৩ মিনিট",
    readTimeEn: "3 mins",
    imageUrl: "/images/india-gate-delhi-diplomacy.jpg",
    mediaFormat: "rss",
    tags: ["গৌহাটি হাইকোর্ট", "আসাম", "দৈনিক জাগরণ", "সীমান্ত", "পুশব্যাক"]
  },
  {
    id: "news-20261016-016",
    slug: "sangbad-pratidin-taslima-nasrin-condemns-cow-slaughter-jagannath-university",
    title: "প্রকাশ্য রাস্তায় গরু জবাই! বাংলাদেশের জগন্নাথ বিশ্ববিদ্যালয়ের ঘটনায় তীব্র ক্ষোভ তসলিমা নাসরিনের - Sangbad Pratidin",
    englishTitle: "Sangbad Pratidin: Taslima Nasrin Condemns Public Cattle Slaughter at Jagannath University Campus",
    banglaTitle: "‘জগন্নাথ বিশ্ববিদ্যালয়ের ঘটনায় চরম ক্ষোভ তসলিমা নাসরিনের’: সাম্প্রদায়িক সম্প্রীতি ও ক্যাম্পাস নিরাপত্তা নিয়ে সংবাদ প্রতিদিনের প্রতিবেদন",
    summaryBn: "ঢাকার জগন্নাথ বিশ্ববিদ্যালয়ের হিন্দু ঐতিহ্যবাহী ছাত্রাবাসের সামনে প্রকাশ্য রাস্তায় ধর্মীয় উস্কানিমূলক পশু জবাইয়ের ঘটনার বিরুদ্ধে তীব্র ক্ষোভ প্রকাশ করেছেন ভারতে নির্বাসিত লেখিকা তসলিমা নাসরিন। কলকাতার সংবাদ প্রতিদিনের খবরে প্রকাশ, এই ঘটনাকে হিন্দু শিক্ষার্থীদের ধর্মীয় অনুভূতিতে আঘাত এবং উদ্দেশ্যপ্রণোদিত উস্কানি হিসেবে গণ্য করা হচ্ছে।",
    summaryEn: "Exiled Bangladeshi author Taslima Nasrin strongly condemned an incident of public cattle slaughter orchestrated in front of a Hindu student residential hall at Jagannath University in Dhaka. Kolkata's Sangbad Pratidin highlighted concerns among civil rights commentators regarding targeted communal intimidation.",
    keyPointsBn: [
      "জগন্নাথ বিশ্ববিদ্যালয়ের হিন্দু ছাত্রাবাসের সামনে ধর্মীয় উস্কানিমূলক পদক্ষেপের তীব্র নিন্দা তসলিমা নাসরিনের",
      "শিক্ষা প্রতিষ্ঠানে ধর্মীয় সম্প্রীতি বিনষ্ট ও উগ্রপন্থী মানসিকতার বিস্তার নিয়ে আশঙ্কা",
      "কলকাতার বুদ্ধিজীবী ও নাগরিক সমাজের পক্ষ থেকে অবিলম্বে শিক্ষার্থীদের নিরাপত্তার নিশ্চয়তা দাবি"
    ],
    keyPointsEn: [
      "Taslima Nasrin voiced sharp denunciation of deliberate provocative actions outside student halls",
      "Report flagged growing concern over institutional radicalization on university campuses",
      "Civil society circles in Kolkata urged Dhaka authorities to guarantee inclusive campus safety"
    ],
    category: "culture",
    categoryLabelBn: "সংস্কৃতি ও শিক্ষা অঙ্গন",
    categoryLabelEn: "Culture & University Campuses",
    sentiment: "negative",
    sentimentReasonBn: "শিক্ষা প্রতিষ্ঠানে সাম্প্রদায়িক উস্কানি ও শিক্ষার্থীদের নিরাপত্তাহীনতার নেতিবাচক মূল্যায়ন।",
    sentimentReasonEn: "Critical coverage of communal provocation and deteriorating safety on higher education campuses.",
    source: {
      name: "Sangbad Pratidin",
      bureau: "Kolkata",
      language: "Bengali",
      originalUrl: "https://www.sangbadpratidin.in/india/taslima-nasrin-strongly-condemns-cow-slaughter-around-jagannath-university-campus-in-bangladesh/pid/1389232/",
      scannedAt: "2026-10-16T18:30:00Z"
    },
    publishedAt: "2026-10-16T09:30:00.000Z",
    readTimeBn: "৩ মিনিট",
    readTimeEn: "3 mins",
    imageUrl: "/images/kolkata-howrah-bridge-symbolic.jpg",
    mediaFormat: "rss",
    tags: ["সংবাদ প্রতিদিন", "তসলিমা নাসরিন", "জগন্নাথ বিশ্ববিদ্যালয়", "কলকাতা", "সম্প্রীতি"]
  },
  {
    id: "news-20261016-017",
    slug: "ei-samay-fifth-consular-dialogue-hasina-repatriation-visa-talks",
    title: "ভারতের সঙ্গে আসন্ন পঞ্চম কনস্যুলার সংলাপে শেখ হাসিনাসহ অন্যদের প্রত্যার্পণ এজেন্ডা - Ei Samay",
    englishTitle: "Ei Samay: Indo-Bangla 5th Consular Dialogue to Address Visa Resumption, Extradition Agreements",
    banglaTitle: "‘আসন্ন পঞ্চম কনস্যুলার সংলাপ’: ভিসা প্রক্রিয়া স্বাভাবিকীকরণ ও প্রত্যার্পণ ইস্যুতে ঢাকা-দিল্লি আলোচনার পূর্বাভাস ‘এই সময়’-এ",
    summaryBn: "ভারত ও বাংলাদেশের মধ্যে অনুষ্ঠিতব্য পঞ্চম কনস্যুলার সংলাপে নিয়মিত ভিসা প্রদান কার্যক্রম পুনরায় সচল করা, বন্দী বিনিময় ও দ্বিপাক্ষিক প্রত্যার্পণ চুক্তির নানা দিক নিয়ে আলোচনার সম্ভাবনা তৈরি হয়েছে। ‘এই সময়’ জানিয়েছে, রাজনৈতিক পরিবর্তনের পর দুই দেশের কনস্যুলার পর্যায়ে এটিই হতে চলেছে প্রথম আনুষ্ঠানিক প্রাতিষ্ঠানিক বৈঠক।",
    summaryEn: "Ei Samay reported that the upcoming 5th Consular Dialogue between India and Bangladesh is poised to negotiate the gradual normalization of tourist and medical visas, prisoners' exchange protocols, and legal extradition pacts. The summit marks the first institutional consular engagement under the interim setup.",
    keyPointsBn: [
      "নতুন দিল্লিতে অনুষ্ঠিতব্য ভারত-বাংলাদেশ পঞ্চম কনস্যুলার সংলাপের প্রস্তুতি শুরু",
      "চিকিৎসা ও শিক্ষার্থী ভিসা ব্যবস্থা অবিলম্বে স্বাভাবিক করার ওপর বিশেষ গুরুত্ব",
      "সীমান্ত পারাপার ও বন্দীদের আইনি প্রত্যার্পণ কাঠামো নিয়ে বিস্তারিত দরকষাকষির সম্ভাবনা"
    ],
    keyPointsEn: [
      "Preparations underway for the 5th Indo-Bangla Consular Dialogue scheduled in New Delhi",
      "High priority assigned to expediting medical and student visa processing channels",
      "Discussions expected on cross-border travel protocols and legal extradition frameworks"
    ],
    category: "diplomacy",
    categoryLabelBn: "কূটনীতি ও কনস্যুলার সেবা",
    categoryLabelEn: "Diplomacy & Consular Affairs",
    sentiment: "neutral",
    sentimentReasonBn: "ভিসা ব্যবস্থা পুনরুদ্ধার ও প্রাতিষ্ঠানিক সংলাপ শুরুর বাস্তবমুখী পর্যালোচনা।",
    sentimentReasonEn: "Pragmatic appraisal of institutional diplomatic talks aiming to restore civilian cross-border mobility.",
    source: {
      name: "Ei Samay (Instagram)",
      bureau: "Siliguri",
      language: "Bengali",
      originalUrl: "https://www.instagram.com/p/DejF4x_nVZj/",
      scannedAt: "2026-10-16T18:30:00Z"
    },
    publishedAt: "2026-10-16T08:15:00.000Z",
    readTimeBn: "৩ মিনিট",
    readTimeEn: "3 mins",
    imageUrl: "/images/siliguri-corridor-chickens-neck.jpg",
    mediaFormat: "instagram",
    instagramEmbedUrl: "https://www.instagram.com/p/DejF4x_nVZj/",
    tags: ["কনস্যুলার সংলাপ", "এই সময়", "ভিসা", "কূটনীতি", "দিল্লি-ঢাকা"]
  },
  {
    id: "news-20261016-018",
    slug: "republic-world-former-pm-sheikh-hasina-flags-minority-insecurity-durga-puja",
    title: "Former Bangladesh PM Sheikh Hasina Flags Minority Insecurity In Bangladesh Ahead Of Durga Puja - Republic World",
    englishTitle: "Republic World: Ex-PM Sheikh Hasina Flags Severe Minority Insecurity in Bangladesh Ahead of Festive Season",
    banglaTitle: "‘উৎসবের আগে সংখ্যালঘুদের মধ্যে চরম ভীতি ও নিরাপত্তাহীনতা’: রিপাবলিক ওয়ার্ল্ডে শেখ হাসিনার সতর্কবার্তা",
    summaryBn: "রিপাবলিক ওয়ার্ল্ডের এক বিশেষ আন্তর্জাতিক বুলেটিনে জানানো হয়েছে যে, আসন্ন দুর্গাপূজার প্রাক্কালে বাংলাদেশে ধর্মীয় সংখ্যালঘুদের উপর ধারাবাহিক হুমকি ও আতঙ্কের পরিবেশ বিরাজ করছে বলে সতর্ক করেছেন শেখ হাসিনা। তিনি আন্তর্জাতিক মানবাধিকার সম্প্রদায় ও বর্তমান প্রশাসনকে হিন্দু মন্দির ও উপাসনালয়ের সার্বিক সুরক্ষা নিশ্চিত করার আহ্বান জানান।",
    summaryEn: "Republic World reported on Sheikh Hasina's festive address, highlighting an alarming escalation in intimidation directed at religious minorities across district communities in Bangladesh. She cautioned that failing to deter communal vigilantes damages the nation's pluralistic fabric and regional security equilibrium.",
    keyPointsBn: [
      "শারদীয় দুর্গাপূজার প্রাক্কালে হিন্দু সম্প্রদায়ের পূজা মণ্ডপ ও মূর্তির পূর্ণ নিরাপত্তার দাবি",
      "স্থানীয় পর্যায়ে উগ্রপন্থীদের হুমকি মোকাবেলায় আন্তর্জাতিক পর্যবেক্ষকদের দৃষ্টি আকর্ষণ",
      "প্রতিটি নাগরিকের ধর্মীয় উপাসনার অধিকার অটুট রাখার আহ্বান"
    ],
    keyPointsEn: [
      "Demanded complete round-the-clock security around Durga Puja mandaps and minority temples",
      "Drawn attention to grassroots intimidation and vandalism reported by local Hindu organizations",
      "Reiterated the constitutional obligation to defend pluralism and communal peace"
    ],
    category: "diplomacy",
    categoryLabelBn: "কূটনীতি ও সংখ্যালঘু অধিকার",
    categoryLabelEn: "Diplomacy & Minority Rights",
    sentiment: "negative",
    sentimentReasonBn: "সংখ্যালঘুদের নিরাপত্তাহীনতা ও পূজামণ্ডপে সম্ভাব্য হামলার আশঙ্কায় উদ্বেগজনক প্রতিবেদন।",
    sentimentReasonEn: "Critical coverage of security deficiencies and sectarian intimidation confronting religious minorities.",
    source: {
      name: "Republic World",
      bureau: "Delhi",
      language: "English",
      originalUrl: "https://www.republicworld.com/world-news/former-bangladesh-pm-sheikh-hasina-flags-minority-insecurity-in-bangladesh-ahead-of-durga-puja-2026-10-15-138996",
      scannedAt: "2026-10-16T18:30:00Z"
    },
    publishedAt: "2026-10-15T08:55:41.000Z",
    readTimeBn: "৩ মিনিট",
    readTimeEn: "3 mins",
    imageUrl: "/images/default-geopolitical-map.jpg",
    mediaFormat: "rss",
    tags: ["রিপাবলিক ওয়ার্ল্ড", "শেখ হাসিনা", "সংখ্যালঘু", "দুর্গাপূজা", "মানবাধিকার"]
  },
  {
    id: "news-20261016-019",
    slug: "republic-bangla-hasina-slams-tarique-policy-restoring-democracy-video",
    title: "Hasina Slams Tarique: তারেক-নীতির তুলোধনা | ‘গণতন্ত্র ফেরাতে ফিরব’— হাসিনা | THE BIG STORY - Republic Bangla",
    englishTitle: "Republic Bangla Video Dispatch: Hasina Slams Tarique Rahman's Strategic Moves, Vows Democratic Return",
    banglaTitle: "‘তারেক-নীতির তুলোধনা, গণতন্ত্র ফেরাতে ফিরব’: রিপাবলিক বাংলার বিশেষ ভিডিও প্রতিবেদন",
    summaryBn: "রিপাবলিক বাংলা চ্যানেলের বিশেষ প্রাইমটাইম ভিডিও অনুষ্ঠানে বিএনপির ভারপ্রাপ্ত চেয়ারম্যান তারেক রহমানের পররাষ্ট্রনীতি ও ব্রিকস সম্মেলন বর্জনের সিদ্ধান্তের কঠোর সমালোচনা তুলে ধরা হয়। সাবেক প্রধানমন্ত্রী শেখ হাসিনা কীভাবে গণতান্ত্রিক প্রক্রিয়ায় পুনর্বাসনের বার্তা দিচ্ছেন এবং ভারতের কূটনৈতিক মহলে তার কী প্রতিক্রিয়া হচ্ছে, তা বিশদভাবে আলোচনা করা হয়।",
    summaryEn: "A dedicated televised special by Republic Bangla examined Sheikh Hasina's critical posture towards Tarique Rahman's diplomatic stance, particularly boycotting key multilateral conferences in India. The video dispatch featured insights from strategic analysts assessing cross-border political realignments.",
    keyPointsBn: [
      "ব্রিকস সম্মেলনে অংশ না নেওয়ার তারেক-নীতির কড়া সমালোচনা ও ভিডিও ডিসপ্যাচ বিশ্লেষণ",
      "বাংলাদেশে অবাধ ও সুষ্ঠু নির্বাচনের মাধ্যমে সাংবিধানিক ধারা পুনরুদ্ধারের ওপর জোর",
      "নয়াদিল্লি ও কলকাতার রাজনৈতিক বিশ্লেষকদের প্যানেল আলোচনা"
    ],
    keyPointsEn: [
      "Broadcasted comprehensive panel critique regarding Tarique Rahman's diplomatic absenteeism",
      "Hasina's emphasis on returning to participate in constitutional and electoral normalization",
      "Insights from senior foreign policy correspondents across Kolkata and New Delhi"
    ],
    category: "politics",
    categoryLabelBn: "ভিডিও প্রতিবেদন ও রাজনীতি",
    categoryLabelEn: "Video Dispatch & Politics",
    sentiment: "neutral",
    sentimentReasonBn: "দ্বিপাক্ষিক রাজনীতি ও ভবিষ্যৎ সরকার গঠনের ওপর মাল্টি-অ্যাঙ্গেল ভিডিও বিশ্লেষণ।",
    sentimentReasonEn: "Televised intelligence analysis evaluating geopolitical dynamics and party leadership strategies.",
    source: {
      name: "Republic Bangla (YouTube)",
      bureau: "Kolkata",
      language: "Bengali",
      originalUrl: "https://www.youtube.com/watch?v=L0ZhBmFmLWc",
      scannedAt: "2026-10-16T18:30:00Z"
    },
    publishedAt: "2026-10-15T09:12:00.000Z",
    readTimeBn: "৩ মিনিট",
    readTimeEn: "3 mins",
    imageUrl: "https://i.ytimg.com/vi/L0ZhBmFmLWc/hqdefault.jpg",
    mediaFormat: "youtube",
    videoUrl: "https://www.youtube.com/watch?v=L0ZhBmFmLWc",
    tags: ["রিপাবলিক বাংলা", "ইউটিউব", "ভিডিও", "শেখ হাসিনা", "তারেক রহমান"]
  },
  {
    id: "news-20261016-020",
    slug: "zee-24-ghanta-december-extradition-diplomacy-video",
    title: "আলোচনায় ডিসেম্বর, শেখ হাসিনাকে ফেরত দেবে না ভারত? | Sheikh Hasina | Extradition - Zee 24 Ghanta",
    englishTitle: "Zee 24 Ghanta Video Report: Will India Extradite Sheikh Hasina? December Strategic Timeline Decoded",
    banglaTitle: "‘আলোচনায় ডিসেম্বর, হাসিনাকে কি ফেরত দেবে ভারত?’: জি ২৪ ঘণ্টার বিশেষ কূটনৈতিক অনুসন্ধান",
    summaryBn: "জি ২৪ ঘণ্টার বিশেষ ভিডিও অনুসন্ধানে আলোচনা করা হয়েছে যে, বাংলাদেশের অন্তর্বর্তী সরকারের সম্ভাব্য প্রত্যার্পণ অনুরোধের মুখে ভারত সরকারের আইনি ও কূটনৈতিক অবস্থান কী হতে পারে। নিরাপত্তা বিশ্লেষকদের উদ্ধৃতি দিয়ে প্রতিবেদনে স্পষ্ট করা হয় যে, আন্তর্জাতিক আইনের রাজনৈতিক অপরাধ সংক্রান্ত ছাড়ের কারণে দ্রুত কোনো হস্তান্তরের সম্ভাবনা নেই বললেই চলে।",
    summaryEn: "An analytical video report by Zee 24 Ghanta decoded legal and diplomatic conventions governing extradition requests between India and Bangladesh. Drawing from seasoned South Block analysts, the dispatch detailed why bilateral treaty exemptions for political asylum shield Sheikh Hasina from forced repatriation.",
    keyPointsBn: [
      "ভারত-বাংলাদেশ প্রত্যার্পণ চুক্তির ধারা এবং রাজনৈতিক অপরাধ সংক্রান্ত সুরক্ষার আইনি বিশ্লেষণ",
      "ডিসেম্বর মাসে রাজনৈতিক উত্তাপ বৃদ্ধির সম্ভাবনা নিয়ে ভারতীয় গোয়েন্দা মহলের মূল্যায়ন",
      "দুই দেশের দ্বিপাক্ষিক সম্পর্কের দীর্ঘমেয়াদী নিরাপত্তার অগ্রাধিকার"
    ],
    keyPointsEn: [
      "Deconstructed legal provisions and political offense clauses within the bilateral extradition treaty",
      "Security assessments tracking anticipations of rising political momentum by December",
      "Reaffirmed Delhi's prioritization of geopolitical equilibrium and diplomatic commitments"
    ],
    category: "diplomacy",
    categoryLabelBn: "ভিডিও প্রতিবেদন ও আন্তর্জাতিক আইন",
    categoryLabelEn: "Video Dispatch & International Law",
    sentiment: "neutral",
    sentimentReasonBn: "আন্তর্জাতিক আইন ও কূটনৈতিক সুরক্ষার বস্তুনিষ্ঠ ও ভারসাম্যপূর্ণ ভিডিও পর্যালোচনা।",
    sentimentReasonEn: "Objective televised dissection of international treaty obligations and geopolitical reality.",
    source: {
      name: "Zee 24 Ghanta (YouTube)",
      bureau: "Kolkata",
      language: "Bengali",
      originalUrl: "https://www.youtube.com/watch?v=UV81oxIz-uI",
      scannedAt: "2026-10-16T18:30:00Z"
    },
    publishedAt: "2026-10-14T16:45:00.000Z",
    readTimeBn: "৩ মিনিট",
    readTimeEn: "3 mins",
    imageUrl: "https://i.ytimg.com/vi/UV81oxIz-uI/hqdefault.jpg",
    mediaFormat: "youtube",
    videoUrl: "https://www.youtube.com/watch?v=UV81oxIz-uI",
    tags: ["জি ২৪ ঘণ্টা", "ইউটিউব", "প্রত্যার্পণ", "কূটনীতি", "আইন"]
  },
  {
    id: "news-20261016-021",
    slug: "wion-sheikh-hasina-slams-brics-absence-video",
    title: "Sheikh Hasina Slams Bangladesh PM Tarique Rahman for Skipping BRICS Summit in India - WION",
    englishTitle: "WION Global Dispatch: Sheikh Hasina Slams Move to Skip BRICS Summit in New Delhi",
    banglaTitle: "‘নয়া দিল্লিতে ব্রিকস সম্মেলন বর্জন ঢাকার চরম কূটনৈতিক ভুল’: উইওন আন্তর্জাতিক ভিডিও প্রতিবেদনে শেখ হাসিনা",
    summaryBn: "আন্তর্জাতিক ইংরেজি সংবাদ চ্যানেল উইওন (WION)-এর বৈশ্বিক বুলেটিনে সম্প্রচারিত এক প্রতিবেদনে তুলে ধরা হয়েছে কীভাবে শেখ হাসিনা নয়া দিল্লিতে অনুষ্ঠিত ব্রিকস সম্মেলনে ঢাকার অনুপস্থিতির তীব্র সমালোচনা করেছেন। তিনি সতর্ক করেছেন যে, আঞ্চলিক মহাশক্তিদের সম্মেলন এড়িয়ে গিয়ে অন্তর্বর্তী প্রশাসন আন্তর্জাতিক বাণিজ্য ও বিনিয়োগের বড় সম্ভাবনা হারিয়েছে।",
    summaryEn: "WION's global broadcast highlighted former Prime Minister Sheikh Hasina's pointed rebuke regarding Bangladesh's decision to bypass the New Delhi BRICS Summit. The international coverage emphasized that shunning major multilateral summits limits Bangladesh's strategic diversification and economic funding channels.",
    keyPointsBn: [
      "আন্তর্জাতিক ফোরামে অংশ না নেওয়াকে বহুপাক্ষিক অর্থনৈতিক সম্পর্কের জন্য বিপর্যয়কর পদক্ষেপ আখ্যা",
      "দক্ষিণ এশিয়ার জ্বালানি ও অবকাঠামো তহবিলের জন্য ব্রিকস জোটের গুরুত্ব",
      "আন্তর্জাতিক কূটনীতিতে দলবাজির চেয়ে রাষ্ট্রস্বার্থকে বড় করে দেখার তাগিদ"
    ],
    keyPointsEn: [
      "Labelled multilateral disengagement a significant diplomatic drawback for foreign investments",
      "Highlighted BRICS institutions as vital funding sources for regional energy and infrastructure",
      "Stressed putting sovereign national economic interests above domestic political calculations"
    ],
    category: "diplomacy",
    categoryLabelBn: "কূটনীতি ও বহুপাক্ষিক অর্থনীতি",
    categoryLabelEn: "Diplomacy & Multilateral Economy",
    sentiment: "neutral",
    sentimentReasonBn: "আন্তর্জাতিক অর্থনৈতিক জোট ও কৌশলগত কূটনীতির নিরপেক্ষ গ্লোবাল সম্প্রচার।",
    sentimentReasonEn: "Global English television broadcast contextualizing multilateral developmental engagements.",
    source: {
      name: "WION",
      bureau: "Delhi",
      language: "English",
      originalUrl: "https://www.youtube.com/watch?v=WJdtR141hpI",
      scannedAt: "2026-10-16T18:30:00Z"
    },
    publishedAt: "2026-10-15T07:20:00.000Z",
    readTimeBn: "৩ মিনিট",
    readTimeEn: "3 mins",
    imageUrl: "https://i.ytimg.com/vi/WJdtR141hpI/hqdefault.jpg",
    mediaFormat: "youtube",
    videoUrl: "https://www.youtube.com/watch?v=WJdtR141hpI",
    tags: ["উইওন", "ব্রিকস", "ইউটিউব", "কূটনীতি", "দিল্লি"]
  },
  {
    id: "news-20261016-022",
    slug: "news18-bangla-delhi-diplomatic-strategy-hasina-video",
    title: "দিল্লি কি শেখ হাসিনাকে ফেরত দিচ্ছে? ভারতের গোপন কূটনৈতিক চাল ফাঁস! | Sheikh Hasina - News18 Bangla",
    englishTitle: "News18 Bangla Dispatch: Delhi's Strategic Calculations and Sheikh Hasina's Diplomatic Safe-Haven",
    banglaTitle: "‘দিল্লি কি হাসিনাকে ফেরত দিচ্ছে?’: ভারতের ভূকৌশলগত হিসাব-নিকাশ নিয়ে নিউজ১৮ বাংলার ভিডিও ডিসপ্যাচ",
    summaryBn: "নিউজ১৮ বাংলার একটি বিশেষ অনুসন্ধানী ভিডিও ডিসপ্যাচে দিল্লির সাউথ ব্লকের কূটনৈতিক অবস্থান বিস্তারিতভাবে তুলে ধরা হয়েছে। ভারতের নিরাপত্তা ও পররাষ্ট্র মন্ত্রণালয়ের মনোভাব স্পষ্ট করে বিশ্লেষকরা জানান, ভারতের আন্তর্জাতিক বিশ্বাসযোগ্যতা ও ঐতিহাসিক বন্ধুত্বের প্রতি দায়বদ্ধতার কারণে শেখ হাসিনাকে কোনো প্রতিকূল পরিস্থিতিতে ছেড়ে দেওয়া হবে না।",
    summaryEn: "A dedicated investigation by News18 Bangla decoded strategic discussions within New Delhi's foreign affairs establishment regarding Bangladesh's transition. Security commentators outlined that India's geopolitical standing and long-standing strategic loyalty ensure uncompromised protection for historic allies.",
    keyPointsBn: [
      "সাউথ ব্লকের অভ্যন্তরীণ নীতি ও আঞ্চলিক মিত্রদের সুরক্ষার ঐতিহাসিক দৃষ্টান্ত",
      "ভারত মহাসাগর ও পূর্বাঞ্চলীয় সীমান্তে জাতীয় নিরাপত্তার ভূকৌশলগত ভারসাম্য রক্ষা",
      "পশ্চিমবঙ্গ ও ত্রিপুরার নিরাপত্তা বিশ্লেষকদের সমন্বিত মূল্যায়ন"
    ],
    keyPointsEn: [
      "Outlined South Block's institutional doctrines regarding protection for strategic partners",
      "Highlighted geopolitical imperatives in safeguarding eastern borderlands and regional access",
      "Incorporate assessments from veteran security specialists based in Kolkata and Tripura"
    ],
    category: "diplomacy",
    categoryLabelBn: "কূটনীতি ও সাউথ ব্লক",
    categoryLabelEn: "Diplomacy & Strategic Affairs",
    sentiment: "neutral",
    sentimentReasonBn: "দ্বিপাক্ষিক ভূকৌশলগত অগ্রাধিকার ও সাউথ ব্লকের নীতিমালার গভীর বিশ্লেষণ।",
    sentimentReasonEn: "Strategic intelligence dispatch exploring long-term borderland doctrine and regional stability.",
    source: {
      name: "News18 Bangla (YouTube)",
      bureau: "Kolkata",
      language: "Bengali",
      originalUrl: "https://www.youtube.com/watch?v=wmZ9DCvCpBU",
      scannedAt: "2026-10-16T18:30:00Z"
    },
    publishedAt: "2026-10-14T12:30:00.000Z",
    readTimeBn: "৩ মিনিট",
    readTimeEn: "3 mins",
    imageUrl: "https://i.ytimg.com/vi/wmZ9DCvCpBU/hqdefault.jpg",
    mediaFormat: "youtube",
    videoUrl: "https://www.youtube.com/watch?v=wmZ9DCvCpBU",
    tags: ["নিউজ১৮ বাংলা", "সাউথ ব্লক", "ইউটিউব", "কূটনীতি", "দিল্লি"]
  }
];

// 1. Update SCANNER_STATS
const statsRegex = /export const SCANNER_STATS = \{[\s\S]*?\};/;
const statsReplacement = `export const SCANNER_STATS = ${JSON.stringify(updatedStats, null, 2)};`;
content = content.replace(statsRegex, statsReplacement);

// 2. Prepend new alerts
const alertsRegex = /export const BREAKING_NEWS_ALERTS: BreakingAlert\[\] = \[([\s\S]*?)\];/;
const alertsMatch = content.match(alertsRegex);
if (alertsMatch) {
  const existingAlerts = alertsMatch[1];
  const formattedAlerts = freshAlerts.map(a => `  ${JSON.stringify(a, null, 4).replace(/\n/g, '\n  ')}`).join(',\n');
  const replacement = `export const BREAKING_NEWS_ALERTS: BreakingAlert[] = [\n${formattedAlerts},\n${existingAlerts.trim()}\n];`;
  content = content.replace(alertsRegex, replacement);
}

// 3. Prepend new items to SCANNED_NEWS_ITEMS
const itemsRegex = /export const SCANNED_NEWS_ITEMS: NewsItem\[\] = \[([\s\S]*?)\];/;
const itemsMatch = content.match(itemsRegex);
if (itemsMatch) {
  const existingItems = itemsMatch[1];
  const formattedItems = freshItems.map(item => `  ${JSON.stringify(item, null, 4).replace(/\n/g, '\n  ')}`).join(',\n');
  const replacement = `export const SCANNED_NEWS_ITEMS: NewsItem[] = [\n${formattedItems},\n${existingItems.trim()}\n];`;
  content = content.replace(itemsRegex, replacement);
}

fs.writeFileSync(newsFilePath, content, 'utf8');
console.log(`✅ Successfully injected 10 new evening synthesized articles (news-20261016-013 through 022) into ${newsFilePath}`);
