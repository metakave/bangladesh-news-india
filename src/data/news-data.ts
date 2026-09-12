export type SentimentType = 'positive' | 'negative' | 'neutral';
export type LanguageType = 'English' | 'Bengali' | 'Hindi';
export type BureauType = 'Delhi' | 'Kolkata';

export interface SourceMedia {
  name: string;
  bureau: BureauType;
  language: LanguageType;
  originalUrl: string;
  originalHeadline?: string;
  scannedAt: string;
}

export interface NewsItem {
  id: string;
  slug: string;
  title: string; // Original Headline (Always preserved in original script)
  englishTitle?: string; // English translation (for Hindi / Bengali)
  banglaTitle?: string;  // Bengali translation (for Hindi / English)
  summaryBn: string;     // Bengali summary
  summaryEn: string;     // English summary
  keyPointsBn: string[]; // Bengali bullet points
  keyPointsEn: string[]; // English bullet points
  category: 'diplomacy' | 'trade' | 'border' | 'politics' | 'economy' | 'sports' | 'culture';
  categoryLabelBn: string;
  categoryLabelEn: string;
  sentiment: SentimentType;
  sentimentReasonBn: string;
  sentimentReasonEn: string;
  source: SourceMedia;
  publishedAt: string;
  readTimeBn: string;
  readTimeEn: string;
  imageUrl: string;
  isLeadStory?: boolean;
  isTrending?: boolean;
  isBreaking?: boolean;
  tags: string[];
}

export interface MarketIndex {
  name: string;
  symbol: string;
  value: string;
  change: string;
  isPositive: boolean;
}

export interface BreakingAlert {
  id: string;
  headlineBn: string;
  headlineEn: string;
  timeAgoBn: string;
  timeAgoEn: string;
  sourceName: string;
  sourceBureau: BureauType;
  sentiment: SentimentType;
  url: string;
}

export const CATEGORIES = [
  { slug: 'diplomacy', labelBn: 'কূটনীতি ও তিস্তা', labelEn: 'Diplomacy & Water', icon: 'Globe' },
  { slug: 'trade', labelBn: 'সীমান্ত বাণিজ্য ও বন্দর', labelEn: 'Cross-Border Trade', icon: 'TrendingUp' },
  { slug: 'border', labelBn: 'সীমান্ত নিরাপত্তা ও বিএসএফ', labelEn: 'Border & Security', icon: 'Shield' },
  { slug: 'economy', labelBn: 'অর্থনীতি ও বিদ্যুৎ', labelEn: 'Economy & Energy', icon: 'Building2' },
  { slug: 'sports', labelBn: 'ক্রীড়া ও ক্রিকেট', labelEn: 'Sports & Cricket', icon: 'Trophy' },
  { slug: 'culture', labelBn: 'সংস্কৃতি ও সাহিত্য', labelEn: 'Culture & Arts', icon: 'Sparkles' },
];

export const SCANNER_STATS = {
  totalScanned24h: 184,
  bangladeshMatches: 38,
  sentimentDistribution: {
    positive: 12,
    neutral: 16,
    negative: 10,
  },
  bureauDistribution: {
    delhi: 20,
    kolkata: 18,
  },
  languageDistribution: {
    english: 18,
    bengali: 12,
    hindi: 8,
  }
};

export const BREAKING_NEWS_ALERTS: BreakingAlert[] = [
  {
    id: 'b1',
    headlineBn: 'দিল্লি বিদেশ মন্ত্রক: বাংলাদেশের সঙ্গে জরুরি মেডিক্যাল ও স্টুডেন্ট ভিসা চালুর বিষয়ে কূটনৈতিক আলোচনা অগ্রসর',
    headlineEn: 'MEA Delhi confirms diplomatic channel talks with Dhaka on expediting emergency medical visas and student clearance',
    timeAgoBn: '১২ মিনিট আগে',
    timeAgoEn: '12m ago',
    sourceName: 'The Hindu',
    sourceBureau: 'Delhi',
    sentiment: 'positive',
    url: 'https://www.thehindu.com/topic/bangladesh/',
  },
  {
    id: 'b2',
    headlineBn: 'পেট্রাপোল-বেনাপোল সীমান্তে ২৪ ঘণ্টা পণ্য খালাসের সিদ্ধান্ত কার্যকর শুল্ক দপ্তরের',
    headlineEn: 'Benapole-Petrapole land port resumes full night-shift cargo clearance after high-level customs meeting',
    timeAgoBn: '৩৫ মিনিট আগে',
    timeAgoEn: '35m ago',
    sourceName: 'Anandabazar Patrika',
    sourceBureau: 'Kolkata',
    sentiment: 'positive',
    url: 'https://www.anandabazar.com/topic/bangladesh',
  },
  {
    id: 'b3',
    headlineBn: 'ভারত-বাংলাদেশ সীমান্তে বিএসএফের টহল জোরদার: মেঘালয় ও ত্রিপুরা সেক্টরে বিশেষ সতর্কতা',
    headlineEn: 'BSF increases vigil along Meghalaya and Tripura frontiers following cross-border security alerts',
    timeAgoBn: '৫০ মিনিট আগে',
    timeAgoEn: '50m ago',
    sourceName: 'Dainik Jagran',
    sourceBureau: 'Delhi',
    sentiment: 'negative',
    url: 'https://www.jagran.com/news/national-news-hindi.html',
  },
];

export const SCANNED_NEWS_ITEMS: NewsItem[] = [
  {
    id: '1',
    slug: 'petrapole-benapole-trade-volume-hilsa-garment-logistics-abp',
    title: 'পেট্রাপোল সীমান্তে রেকর্ড বাণিজ্য: চব্বিশ ঘণ্টা পণ্য চলাচলে স্বস্তি দুই পারের ব্যবসায়ীদের',
    englishTitle: 'Record Cross-Border Trade at Petrapole: 24-Hour Cargo Movement Relieves Traders on Both Sides',
    summaryBn: 'আনন্দবাজার পত্রিকার সীমান্ত প্রতিনিধি জানাচ্ছেন, পেট্রাপোল-বেনাপোল সীমান্তে ২৪ ঘণ্টা স্বয়ংক্রিয় পণ্য ও যাত্রীবাহী লেন চালুর পর আমদানি-রফতানি বাণিজ্যে নতুন গতি এসেছে। ভারতীয় টেক্সটাইল মিল থেকে সুতো, তুলা ও রাসায়নিক কাঁচামাল দ্রুত বাংলাদেশে পৌঁছাচ্ছে। অন্যদিকে পদ্মার ইলিশবাহী ট্রাক বিশেষ ছাড়পত্র পেয়ে কলকাতার পাইকারি বাজারে পৌঁছানো শুরু হয়েছে।',
    summaryEn: 'Anandabazar Patrika’s border correspondent reports that land customs at Petrapole-Benapole have implemented 24/7 automated passenger and cargo lanes. Raw cotton, yarn, and chemical dyes from Indian mills are flowing into Bangladeshi ready-made garment clusters with minimal inspection delays, while specialized seasonal consignments of Padma Hilsa arrived at Kolkata wholesale fish markets.',
    keyPointsBn: [
      'স্বয়ংক্রিয় স্মার্ট গেট চালুর পর দৈনিক পণ্যবাহী ট্রাকের সংখ্যা ৭৫০ থেকে বেড়ে ১২০০ ছাড়িয়েছে।',
      'সুরাট, আমদাবাদ ও লুধিয়ানার সুতো রফতানিকারকরা বাংলাদেশের গার্মেন্টস অর্ডার দ্রুত সরবরাহে স্বস্তি প্রকাশ করেছেন।',
      'উৎসবের মরশুমে কলকাতার মাছ বাজারে বিশেষ সড়ক করিডোর দিয়ে ৫০০ টন পদ্মার ইলিশ আমদানি নিশ্চিত হয়েছে।'
    ],
    keyPointsEn: [
      'Daily cargo clearance increased from 750 trucks to over 1,200 following integrated automated smart gates.',
      'Textile exporters in Surat, Ahmedabad, and Ludhiana report steady demand from Dhaka buying houses.',
      'Kolkata fish merchants welcome the arrival of 500 tonnes of festive Hilsa consignments via land route.'
    ],
    category: 'trade',
    categoryLabelBn: 'সীমান্ত বাণিজ্য',
    categoryLabelEn: 'Cross-Border Trade',
    sentiment: 'positive',
    sentimentReasonBn: 'সীমান্ত বাণিজ্য সহজীকরণ, ২৪ ঘণ্টা কার্গো চলাচল এবং দুই দেশের ব্যবসায়ীদের অর্থনৈতিক সুফলের ওপর জোর দেওয়া হয়েছে।',
    sentimentReasonEn: 'Highlights seamless cross-border trade acceleration, automated cargo clearance, and mutual economic benefits between Kolkata and Bangladesh.',
    source: {
      name: 'Anandabazar Patrika',
      bureau: 'Kolkata',
      language: 'Bengali',
      originalUrl: 'https://www.anandabazar.com/topic/bangladesh',
      originalHeadline: 'পেট্রাপোল সীমান্তে রেকর্ড বাণিজ্য: চব্বিশ ঘণ্টা পণ্য চলাচলে স্বস্তি দুই পারের ব্যবসায়ীদের',
      scannedAt: '25 mins ago',
    },
    publishedAt: '2026-09-12T08:30:00Z',
    readTimeBn: '৩ মিনিট পাঠ',
    readTimeEn: '3 min read',
    imageUrl: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80',
    isLeadStory: true,
    isTrending: true,
    tags: ['Petrapole', 'Benapole', 'Border Trade', 'Hilsa', 'RMG Supply Chain', 'Kolkata'],
  },
  {
    id: '2',
    slug: 'dainik-jagran-border-security-bsf-smuggling-curfew',
    title: 'भारत-बांग्लादेश सीमा पर बीएसएफ का हाई अलर्ट: मेघालय और कूचबिहार में ड्रोन से पैनी निगरानी',
    englishTitle: 'BSF on High Alert Along Indo-Bangla Border: Drone Surveillance Intensified in Meghalaya & Cooch Behar',
    banglaTitle: 'ভারত-বাংলাদেশ সীমান্তে বিএসএফের হাই অ্যালার্ট: মেঘালয় ও কোচবিহারে ড্রোন নজরদারি জোরদার',
    summaryBn: 'দৈনিক জাগরণের প্রতিবেদন অনুযায়ী, বিএসএফের ইস্টার্ন কমান্ড মেঘালয় ও উত্তরবঙ্গের নদীমাতৃক ও কাঁটাতারহীন সীমান্তে অতিরিক্ত সৈন্য মোতায়েন করেছে। সীমান্ত এলাকায় চোরাচালান ও অনুপ্রবেশের আশঙ্কায় নাইট-ভিশন ড্রোন ও থার্মাল ইমেজিং ক্যামেরার মাধ্যমে সার্বক্ষণিক নজরদারি চালানো হচ্ছে এবং সীমান্তবর্তী গ্রামগুলোতে রাতের কারফিউ জারি করা হয়েছে।',
    summaryEn: 'Dainik Jagran reports that the Border Security Force (BSF) eastern command has deployed additional thermal imaging cameras and drone surveillance along unfenced patches in Meghalaya and Cooch Behar. The report cites intelligence inputs regarding smuggling cartels attempting to exploit political transitions in Dhaka, prompting joint patrolling and border curfew enforcement.',
    keyPointsBn: [
      'মেঘালয় ও আসাম সীমান্তে বিএসএফ ব্যাটালিয়নগুলোকে রাতের টহল দ্বিগুণ করার কঠোর নির্দেশ দেওয়া হয়েছে।',
      'নদীপথে চোরাচালান ঠেকাতে স্পর্শকাতর সেক্টরগুলোতে অতিরিক্ত স্পিডবোট মোতায়েন করা হয়েছে।',
      'দিল্লিতে ভারতের স্বরাষ্ট্র মন্ত্রণালয় বর্ডার গার্ড বাংলাদেশের (BGB) সাথে নিয়মিত ফ্ল্যাগ মিটিং অব্যাহত রাখার পরামর্শ দিয়েছে।'
    ],
    keyPointsEn: [
      'BSF battalions in Meghalaya and Assam sectors issued heightened red-alerts for night-time patrols.',
      'Seizures of contraband and unauthorized crossing attempts monitored along riverine unfenced patches.',
      'Indian Home Ministry officials in Delhi urge Border Guard Bangladesh (BGB) to maintain synchronized flag meetings.'
    ],
    category: 'border',
    categoryLabelBn: 'সীমান্ত নিরাপত্তা',
    categoryLabelEn: 'Border & Security',
    sentiment: 'negative',
    sentimentReasonBn: 'সীমান্তে অনুপ্রবেশের আশঙ্কা, চোরাচালান এবং ভারতীয় নিরাপত্তা বাহিনীর উচ্চ সতর্কতার ওপর আলোকপাত করা হয়েছে।',
    sentimentReasonEn: 'Focuses on cross-border infiltration risks, smuggling concerns, and heightened border alerts flagged by Indian security forces.',
    source: {
      name: 'Dainik Jagran',
      bureau: 'Delhi',
      language: 'Hindi',
      originalUrl: 'https://www.jagran.com/news/national-news-hindi.html',
      originalHeadline: 'भारत-बांग्लादेश सीमा पर बीएसएफ का हाई अलर्ट: मेघालय और कूचबिहार में ड्रोन से पैनी निगरानी',
      scannedAt: '40 mins ago',
    },
    publishedAt: '2026-09-12T07:45:00Z',
    readTimeBn: '৪ মিনিট পাঠ',
    readTimeEn: '4 min read',
    imageUrl: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=1200&auto=format&fit=crop&q=80',
    isTrending: true,
    tags: ['BSF', 'Border Security', 'Meghalaya', 'Smuggling', 'Infiltration', 'Dainik Jagran'],
  },
  {
    id: '3',
    slug: 'india-bangladesh-teesta-water-treaty-delhi-diplomatic-reassessment',
    title: 'Delhi Reviewing Technical Parameters on Teesta River Sharing Framework Ahead of Joint River Commission Talks',
    banglaTitle: 'যৌথ নদী কমিশনের বৈঠকের আগে তিস্তার পানি বণ্টন কাঠামোর কারিগরি দিক পর্যালোচনা করছে দিল্লি',
    summaryBn: 'ভারতের জলসম্পদ ও বিদেশ মন্ত্রক যৌথ নদী কমিশনের (JRC) আসন্ন বৈঠকের জন্য তিস্তা নদীর পানি প্রবাহ সংক্রান্ত সর্বশেষ হাইড্রোলজিক্যাল তথ্য প্রস্তুত করছে। প্রতিবেদনে উত্তরবঙ্গের সেচের প্রয়োজনীয়তা রক্ষার পাশাপাশি সিকিমের ব্যারেজ ব্যবস্থাপনার মাধ্যমে শুষ্ক মৌসুমে বাংলাদেশের রংপুর অঞ্চলের জন্য পানির ন্যায্য প্রবাহ নিশ্চিত করার উপায় খতিয়ে দেখা হচ্ছে।',
    summaryEn: 'India’s Ministry of Water Resources and External Affairs Ministry in Delhi are preparing updated hydrological data for the upcoming Joint River Commission meeting with Bangladesh. The report emphasizes balancing northern West Bengal irrigation needs while exploring reservoir management options in Sikkim to ensure dry-season water flow guarantees for Bangladesh’s Rangpur basin.',
    keyPointsBn: [
      'দিল্লির নীতিনির্ধারকরা সিকিমের উজানের জলাধারের পানি প্রবাহের তথ্য বিশ্লেষণ করছেন।',
      'পশ্চিমবঙ্গ রাজ্য প্রশাসন স্পষ্ট করেছে যে উত্তরবঙ্গের কৃষকদের সেচের পানি সংকট তৈরি হতে দেওয়া যাবে না।',
      'উভয় পক্ষই একমত যে তৃতীয় পক্ষের প্রভাব এড়াতে প্রাতিষ্ঠানিক জেআরসি আলোচনাই প্রধান সমাধান।'
    ],
    keyPointsEn: [
      'Delhi bureaucrats are analyzing Sikkim upstream reservoir flow data to model minimum winter discharge into Bangladesh.',
      'Kolkata state administration maintains that North Bengal farmers must not face lean-season water shortages.',
      'Both capitals agree that institutional JRC dialogues are essential to avoid third-party geopolitical entanglements.'
    ],
    category: 'diplomacy',
    categoryLabelBn: 'কূটনীতি ও পানি',
    categoryLabelEn: 'Diplomacy & Water',
    sentiment: 'positive',
    sentimentReasonBn: 'দিল্লির ইতিবাচক মনোভাব এবং তিস্তার তথ্য বিনিময় ও প্রাতিষ্ঠানিক আলোচনা শুরুর আগ্রহ প্রকাশ পেয়েছে।',
    sentimentReasonEn: 'Constructive diplomatic posture from Delhi signaling willingness to share hydrological data and resume formal Joint River Commission dialogues.',
    source: {
      name: 'The Indian Express',
      bureau: 'Delhi',
      language: 'English',
      originalUrl: 'https://indianexpress.com/about/bangladesh/',
      originalHeadline: 'India preps technical data on Teesta ahead of proposed Joint Rivers Commission engagement with Dhaka',
      scannedAt: '15 mins ago',
    },
    publishedAt: '2026-09-12T06:30:00Z',
    readTimeBn: '৪ মিনিট পাঠ',
    readTimeEn: '4 min read',
    imageUrl: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=1200&auto=format&fit=crop&q=80',
    isTrending: true,
    tags: ['Teesta River', 'MEA Delhi', 'Diplomacy', 'Joint River Commission', 'Water Resources'],
  },
  {
    id: '4',
    slug: 'ei-samay-medical-tourism-kolkata-hospitals-bangladesh-patients',
    title: 'বাংলাদেশি রোগীদের ভিসা জট: চরম আর্থিক ধাক্কায় কলকাতার বেসরকারি হাসপাতাল ও নার্সিংহোম',
    englishTitle: 'Bangladesh Patient Visa Bottlenecks: Kolkata Private Hospitals Suffer Severe Financial Hit',
    summaryBn: 'এই সময় (টাইমস গ্রুপ বাংলা)-এর প্রতিবেদনে কলকাতার স্বাস্থ্য পর্যটনের দুরবস্থা তুলে ধরা হয়েছে। মুকুন্দপুর ও সল্টলেকের নামী সুপার-স্পেশ্যালিটি হাসপাতালগুলিতে আন্তর্জাতিক রোগীদের ৭০ শতাংশই আসতেন বাংলাদেশ থেকে। মেডিক্যাল ভিসা প্রাপ্তিতে বিলম্বের কারণে রোগী আগমন প্রায় ৪০ শতাংশ কমে যাওয়ায় স্বাস্থ্য সংস্থাগুলি কেন্দ্রীয় বিদেশ মন্ত্রকে জরুরি ই-মেডিক্যাল ভিসা চালুর আবেদন জানিয়েছে।',
    summaryEn: 'Ei Samay (Times Group Bengali) reports on the severe economic impact felt by private hospital networks in Mukundapur and Salt Lake, Kolkata. Medical travel from Bangladesh, which traditionally constituted over 70% of Kolkata’s medical tourism revenue, has dropped sharply due to restricted visa appointments, prompting appeals for emergency medical e-visas.',
    keyPointsBn: [
      'কলকাতার বেসরকারি হাসপাতালগুলিতে আন্তর্জাতিক স্যুট ও পূর্বনির্ধারিত জটিল অস্ত্রোপচার স্থগিত।',
      'ক্লিনিক, ডায়াগনস্টিক সেন্টার ও নিকটবর্তী গেস্ট হাউস মিলিয়ে মাসে প্রায় ৩৫০ কোটি টাকার আর্থিক ক্ষতির আশঙ্কা।',
      'পশ্চিমবঙ্গ বেসরকারি স্বাস্থ্য প্রতিষ্ঠান সমিতি বিদেশ মন্ত্রকে দ্রুত ই-ভিসা চালুর স্মারকলিপি জমা দিয়েছে।'
    ],
    keyPointsEn: [
      'Major private hospitals in Kolkata report empty international patient suites and deferred surgeries.',
      'An estimated ₹350 Crore monthly revenue loss reported across private clinics and nearby guest houses.',
      'West Bengal health associations submit joint memorandum to MEA seeking fast-track medical e-visa clearance.'
    ],
    category: 'economy',
    categoryLabelBn: 'অর্থনীতি ও চিকিৎসা',
    categoryLabelEn: 'Economy & Energy',
    sentiment: 'negative',
    sentimentReasonBn: 'ভিসা জটিলতার কারণে বাংলাদেশি রোগীদের ভোগান্তি এবং কলকাতার চিকিৎসা বাণিজ্যে নেতিবাচক আর্থিক প্রভাব তুলে ধরা হয়েছে।',
    sentimentReasonEn: 'Details the mutual economic hardship and medical distress caused by bilateral visa delays affecting Bangladeshi patients and Kolkata healthcare.',
    source: {
      name: 'Ei Samay',
      bureau: 'Kolkata',
      language: 'Bengali',
      originalUrl: 'https://eisamay.com/west-bengal-news/kolkata-news',
      originalHeadline: 'বাংলাদেশি রোগীদের ভিসা জট: চরম আর্থিক ধাক্কায় কলকাতার নামী বেসরকারি হাসপাতাল ও নার্সিংহোম',
      scannedAt: '2 hours ago',
    },
    publishedAt: '2026-09-11T22:15:00Z',
    readTimeBn: '৪ মিনিট পাঠ',
    readTimeEn: '4 min read',
    imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&auto=format&fit=crop&q=80',
    tags: ['Medical Tourism', 'Kolkata Hospitals', 'Visas', 'Healthcare', 'Ei Samay'],
  },
  {
    id: '5',
    slug: 'amar-ujala-tripura-transit-chittagong-port-connectivity',
    title: 'त्रिपुरा सरकार की केंद्र से मांग: चटगांव और मोंगला पोर्ट के जरिए पूर्वोत्तर कार्गो ट्रांजिट नियमों को तुरंत अंतिम रूप दिया जाए',
    englishTitle: 'Tripura Government Urges Centre to Finalize Transit Rules for Cargo Movement via Chittagong & Mongla Ports',
    banglaTitle: 'ত্রিপুরা সরকারের দাবি: চট্টগ্রাম ও মোংলা বন্দর হয়ে উত্তর-পূর্ব ভারতে পণ্য ট্রানজিট প্রটোকল দ্রুত কার্যকর করা হোক',
    summaryBn: 'অমর উজালা জানাচ্ছে, ত্রিপুরা রাজ্য সরকার ভারতের বাণিজ্য মন্ত্রকের কাছে দাবি জানিয়েছে যাতে চট্টগ্রাম ও মোংলা বন্দর ব্যবহার করে ফেনী নদীর ওপর মৈত্রী সেতুর মাধ্যমে মাল পরিবহনের ডিজিটাল শুল্ক প্রটোকল দ্রুত চূড়ান্ত করা হয়। এর ফলে কলকাতা থেকে আগরতলার দূরত্ব ১,৬৫০ কিমি থেকে কমে ৫০০ কিমিতে নেমে আসবে।',
    summaryEn: 'Amar Ujala reports from Agartala that the state administration has requested the central commerce ministry in Delhi to finalize simplified digital manifest rules for goods moving from mainland India to the Northeast via Chittagong Port and the Maitri Setu bridge over the Feni River.',
    keyPointsBn: [
      'চট্টগ্রাম বন্দর দিয়ে পণ্য পরিবহনে কলকাতা থেকে ত্রিপুরার দূরত্ব এক-তৃতীয়াংশে নেমে আসবে।',
      'সবারুম চেকপোস্টে অটোমেটেড কাস্টমস ট্রায়াল সফলভাবে সম্পন্ন হয়েছে।',
      'উত্তর-পূর্ব ভারতের বাজারে নিত্যপ্রয়োজনীয় পণ্যের দাম উল্লেখযোগ্যভাবে কমার প্রত্যাশা।'
    ],
    keyPointsEn: [
      'Transit route via Chittagong Port cuts freight distance from Kolkata to Agartala from 1,650 km to under 500 km.',
      'Customs automation and container tracking trials completed at Sabroom integrated check post.',
      'Northeastern business chambers project a reduction in commodity transportation costs.'
    ],
    category: 'trade',
    categoryLabelBn: 'ট্রানজিট ও বাণিজ্য',
    categoryLabelEn: 'Cross-Border Trade',
    sentiment: 'neutral',
    sentimentReasonBn: 'চট্টগ্রাম বন্দর ট্রানজিট নিয়ে ত্রিপুরা সরকারের যৌক্তিক দাবি ও বাণিজ্যিক সম্ভাবনার বস্তুনিষ্ঠ বিবরণ।',
    sentimentReasonEn: 'Factual assessment of logistical transit negotiations and economic potential linking Northeast India with Bangladeshi deep-water ports.',
    source: {
      name: 'Amar Ujala',
      bureau: 'Delhi',
      language: 'Hindi',
      originalUrl: 'https://www.amarujala.com/tags/bangladesh',
      originalHeadline: 'त्रिपुरा सरकार की मांग: चटगांव पोर्ट के जरिए पूर्वोत्तर के लिए कार्गो ट्रांजिट जल्द शुरू हो',
      scannedAt: '3 hours ago',
    },
    publishedAt: '2026-09-11T19:40:00Z',
    readTimeBn: '৪ মিনিট পাঠ',
    readTimeEn: '4 min read',
    imageUrl: 'https://images.unsplash.com/photo-1545459720-aac8509eb02c?w=1200&auto=format&fit=crop&q=80',
    tags: ['Tripura', 'Chittagong Port', 'Maitri Setu', 'Northeast Transit', 'Amar Ujala'],
  },
  {
    id: '6',
    slug: 'sangbad-pratidin-cricket-bangladesh-india-bilateral-series-kolkata',
    title: 'ইডেনে ভারত-বাংলাদেশ সিরিজ: টাইগার্সদের বরণ করতে তৈরি কলকাতা, নিরাপত্তা বন্দোবস্তে সন্তুষ্ট বিসিবি',
    englishTitle: 'India-Bangladesh Cricket Series at Eden Gardens: Kolkata Prepares to Welcome the Tigers with Full Security',
    summaryBn: 'সংবাদ প্রতিদিনের ক্রীড়া ডেস্কের রিপোর্ট অনুযায়ী, ইডেন গার্ডেন্সে ভারত-বাংলাদেশ দ্বিপাক্ষিক সিরিজকে কেন্দ্র করে ক্রিকেটপ্রেমীদের মধ্যে তুমুল উন্মাদনা লক্ষ্য করা যাচ্ছে। সিএবি (CAB) সভাপতি জানিয়েছেন, মাঠ প্রস্তুত এবং বাংলাদেশ ক্রিকেট বোর্ডের (BCB) প্রতিনিধি দলের সঙ্গে কলকাতা পুলিশের নিশ্ছিদ্র নিরাপত্তা পরিকল্পনা চূড়ান্ত হয়েছে।',
    summaryEn: 'Sangbad Pratidin reports from the Cricket Association of Bengal (CAB) headquarters at Eden Gardens. Preparations are underway for the bilateral series fixtures, with Kolkata fans and diaspora communities expressing enthusiasm for competitive cricket between the Tigers and Team India.',
    keyPointsBn: [
      'ইডেনের পিচে পেসারদের বাড়তি বাউন্স ও গতি ধরে রাখতে বিশেষ কিউরেটর দল কাজ করছে।',
      'কলকাতা পুলিশ ও সিএবি যৌথভাবে বাংলাদেশ দলের খেলোয়াড়দের জন্য বিশেষ গ্রিন করিডোর তৈরি করেছে।',
      'ক্রিকেট বিশেষজ্ঞদের মতে, দুই বাংলার আবেগ এই দ্বিপাক্ষিক সিরিজকে অনন্য উচ্চতায় নিয়ে যাবে।'
    ],
    keyPointsEn: [
      'Eden Gardens groundsmen prepare sporting pitches with high carry for the upcoming fixtures.',
      'BCB and BCCI officials confirm full security protocol coordination with Kolkata Police.',
      'Sports commentators highlight the passionate rivalry and high viewership generated across Bengal.'
    ],
    category: 'sports',
    categoryLabelBn: 'ক্রীড়া কূটনীতি',
    categoryLabelEn: 'Sports & Cricket',
    sentiment: 'positive',
    sentimentReasonBn: 'দুই দেশের মধ্যকার সৌহার্দ্যপূর্ণ ক্রিকেট আয়োজন এবং কলকাতার দর্শকদের ইতিবাচক মনোভাব প্রতিফলিত হয়েছে।',
    sentimentReasonEn: 'Positive sporting engagement, camaraderie, and excitement surrounding the Bangladesh cricket team in Kolkata.',
    source: {
      name: 'Sangbad Pratidin',
      bureau: 'Kolkata',
      language: 'Bengali',
      originalUrl: 'https://www.sangbadpratidin.in/topic/bangladesh/',
      originalHeadline: 'ইডেনে ভারত-বাংলাদেশ লড়াই: টাইগার্সদের বরণ করতে তৈরি কলকাতা, নিরাপত্তা নিয়ে সন্তুষ্ট বিসিবি',
      scannedAt: '4 hours ago',
    },
    publishedAt: '2026-09-11T16:00:00Z',
    readTimeBn: '৩ মিনিট পাঠ',
    readTimeEn: '3 min read',
    imageUrl: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=1200&auto=format&fit=crop&q=80',
    tags: ['Cricket', 'Eden Gardens', 'BCB', 'Tigers', 'Sports Diplomacy', 'Sangbad Pratidin'],
  },
  {
    id: '7',
    slug: 'hindu-editorial-interim-governance-reforms-dhaka-diplomacy',
    title: 'The Hindu Editorial: India Must Engage Proactively With Bangladesh’s Democratic Transition',
    banglaTitle: 'দ্য হিন্দু সম্পাদকীয়: বাংলাদেশের গণতান্ত্রিক রূপান্তরে ভারতের সক্রিয় ও ইতিবাচক কূটনৈতিক সম্পৃক্ততা প্রয়োজন',
    summaryBn: 'দিল্লি ব্যুরো থেকে দ্য হিন্দুর সম্পাদকীয়তে বলা হয়েছে, ব্যক্তি বা নির্দিষ্ট রাজনৈতিক দলের ওপর নির্ভর না করে বাংলাদেশের রাষ্ট্রীয় প্রতিষ্ঠান ও জনগণের সাথে প্রাতিষ্ঠানিক সম্পর্ক বজায় রাখাই ভারতের দীর্ঘমেয়াদি কৌশলগত স্বার্থে শ্রেষ্ঠ পথ। সম্পাদকীয়তে ভিসা সেবা অবিলম্বে স্বাভাবিক করার আহ্বান জানানো হয়েছে।',
    summaryEn: 'In an analytical editorial from its Delhi bureau, The Hindu argues that India’s strategic interests are best preserved through broad-based institutional engagement with Bangladesh rather than tying diplomacy to specific political factions. The editorial urges South Block to fast-track student and medical visas.',
    keyPointsBn: [
      'উভয় দেশের মানুষের মধ্যকার ঐতিহাসিক ও সামাজিক সম্পর্ককে কূটনীতির মূল চালিকাশক্তি হিসেবে দেখার আহ্বান।',
      'ঢাকা, চট্টগ্রাম ও সিলেটের ভারতীয় ভিসা আবেদন কেন্দ্রগুলো অবিলম্বে পুনরায় চালুর ওপর গুরুত্বারোপ।',
      'কূটনৈতিক নিষ্ক্রিয়তা দ্বিপাক্ষিক সম্পর্কের ক্ষতি করতে পারে বলে সতর্কতা উচ্চারণ।'
    ],
    keyPointsEn: [
      'Argues that deep socio-economic ties between the people of India and Bangladesh transcend political personalities.',
      'Calls for prompt reopening of all Indian Visa Application Centers (IVAC) across Bangladesh.',
      'Warns that strategic disengagement from Delhi would create an artificial vacuum.'
    ],
    category: 'diplomacy',
    categoryLabelBn: 'কূটনৈতিক সম্পাদকীয়',
    categoryLabelEn: 'Diplomacy & Water',
    sentiment: 'neutral',
    sentimentReasonBn: 'কূটনৈতিক সম্পর্কের গঠনমূলক ও বাস্তববাদী বিশ্লেষণের ওপর জোর দেওয়া হয়েছে।',
    sentimentReasonEn: 'Balanced strategic appraisal urging pragmatic diplomacy, respectful engagement with Dhaka’s institutions, and people-to-people connectivity.',
    source: {
      name: 'The Hindu',
      bureau: 'Delhi',
      language: 'English',
      originalUrl: 'https://www.thehindu.com/topic/bangladesh/',
      originalHeadline: 'Engaging Dhaka: On India’s strategic approach to Bangladesh’s transition',
      scannedAt: '5 hours ago',
    },
    publishedAt: '2026-09-11T13:20:00Z',
    readTimeBn: '৫ মিনিট পাঠ',
    readTimeEn: '5 min read',
    imageUrl: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1200&auto=format&fit=crop&q=80',
    tags: ['The Hindu Editorial', 'Diplomacy', 'Visas', 'Foreign Policy', 'South Block'],
  },
  {
    id: '8',
    slug: 'business-standard-adani-power-godda-electricity-dhaka-dues',
    title: 'Adani Power and Bangladesh Power Development Board Agree on Streamlined Tariff Settlement Mechanism',
    banglaTitle: 'বিদ্যুৎ বিল নিষ্পত্তির বিষয়ে আদানি পাওয়ার ও বাংলাদেশ বিদ্যুৎ উন্নয়ন বোর্ডের সমঝোতা',
    summaryBn: 'বিজনেস স্ট্যান্ডার্ডের প্রতিবেদন অনুযায়ী, ঝাড়খণ্ডের গড্ডা প্ল্যান্ট থেকে বাংলাদেশে ১,১৬০ মেগাওয়াট নিরবচ্ছিন্ন বিদ্যুৎ সরবরাহ স্বাভাবিক রাখতে বিল পরিশোধের একটি ধারাবাহিক রোডম্যাপে সম্মত হয়েছে আদানি পাওয়ার ও বিপিডিবি। বাংলাদেশ ব্যাংক বৈদেশিক মুদ্রার রিজার্ভের সমর্থনে নিয়মিত লেটার অব ক্রেডিট প্রদান করছে।',
    summaryEn: 'Business Standard in Delhi reports that Adani Power and the Bangladesh Power Development Board (BPDB) have finalized a roadmap for regularizing power tariff payments from the 1,600 MW Godda plant. The dispatch of uninterrupted high-voltage electricity continues normally with active letters of credit.',
    keyPointsBn: [
      'ডেডিকেটেড সঞ্চালন লাইনের মাধ্যমে বাংলাদেশে ১,১৬০ মেগাওয়াট বিদ্যুৎ সরবরাহ পূর্ণমাত্রায় বজায় রয়েছে।',
      'মাসিক বিল পরিশোধের জন্য সোনালী ব্যাংকের মাধ্যমে এলসি নিয়মিত খোলা হচ্ছে।',
      'জ্বালানি বিশেষজ্ঞরা জানিয়েছেন, দ্বিপাক্ষিক বিদ্যুৎ বাণিজ্য চুক্তি পেশাদারিত্বের সাথেই পরিচালিত হচ্ছে।'
    ],
    keyPointsEn: [
      'Uninterrupted cross-border power supply of 1,160 MW maintained across the transmission line.',
      'BPDB opened fresh revolving letters of credit with Sonali Bank for timely invoice clearance.',
      'Energy analysts note that cross-border electricity trade remains resilient.'
    ],
    category: 'economy',
    categoryLabelBn: 'বিদ্যুৎ ও জ্বালানি',
    categoryLabelEn: 'Economy & Energy',
    sentiment: 'positive',
    sentimentReasonBn: 'বিদ্যুৎ সরবরাহের ধারাবাহিকতা এবং উভয় দেশের আর্থিক সমঝোতার ইতিবাচক দিক তুলে ধরা হয়েছে।',
    sentimentReasonEn: 'Demonstrates successful commercial resolution, steady energy grid stability, and contractual compliance between Dhaka and Indian power utilities.',
    source: {
      name: 'Business Standard',
      bureau: 'Delhi',
      language: 'English',
      originalUrl: 'https://www.business-standard.com/topic/bangladesh',
      originalHeadline: 'Adani Power, Bangladesh PDB reach understanding on payment schedule for Godda supply',
      scannedAt: '6 hours ago',
    },
    publishedAt: '2026-09-11T11:00:00Z',
    readTimeBn: '৩ মিনিট পাঠ',
    readTimeEn: '3 min read',
    imageUrl: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&auto=format&fit=crop&q=80',
    tags: ['Adani Power', 'BPDB', 'Energy Trade', 'Electricity Grid', 'Business Standard'],
  }
];

export const ARTICLES = SCANNED_NEWS_ITEMS;
export type Article = NewsItem;
export const OPINION_PIECES: any[] = [];


export const MARKET_DATA: MarketIndex[] = [
  { name: 'NIFTY 50', symbol: 'NIFTY', value: '25,388.90', change: '+0.42%', isPositive: true },
  { name: 'SENSEX', symbol: 'SENSEX', value: '82,890.94', change: '+0.44%', isPositive: true },
  { name: 'DSEX (Dhaka)', symbol: 'DSEX', value: '5,728.15', change: '+0.18%', isPositive: true },
  { name: 'USD/BDT', symbol: 'USDBDT', value: '৳120.45', change: '-0.05%', isPositive: false },
  { name: 'INR/BDT', symbol: 'INRBDT', value: '৳1.43', change: '+0.02%', isPositive: true },
];

