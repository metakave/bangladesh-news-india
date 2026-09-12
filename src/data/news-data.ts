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
  title: string; // Original Headline (Bengali for Bengali, Hindi for Hindi, English for English)
  englishTitle?: string; // English translation
  banglaTitle?: string;  // Bengali translation
  summary: string;
  keyPoints: string[];
  category: 'diplomacy' | 'trade' | 'border' | 'politics' | 'economy' | 'sports' | 'culture';
  categoryLabel: string;
  sentiment: SentimentType;
  sentimentLabel: string;
  sentimentReason: string;
  source: SourceMedia;
  publishedAt: string;
  readTime: string;
  imageUrl: string;
  isLeadStory?: boolean;
  isTrending?: boolean;
  isBreaking?: boolean;
  tags: string[];
  audioDuration?: string;
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
  headline: string;
  timeAgo: string;
  sourceName: string;
  sourceBureau: BureauType;
  sentiment: SentimentType;
  url: string;
}

export const CATEGORIES = [
  { slug: 'diplomacy', label: 'Diplomacy & Water', icon: 'Globe' },
  { slug: 'trade', label: 'Cross-Border Trade', icon: 'TrendingUp' },
  { slug: 'border', label: 'Border & Security', icon: 'Shield' },
  { slug: 'economy', label: 'Economy & Energy', icon: 'Building2' },
  { slug: 'sports', label: 'Sports & Cricket', icon: 'Trophy' },
  { slug: 'culture', label: 'Culture & Arts', icon: 'Sparkles' },
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

export const MARKET_DATA: MarketIndex[] = [
  { name: 'USD / BDT', symbol: 'USDBDT', value: '৳121.50', change: '-0.20 (-0.16%)', isPositive: false },
  { name: 'PETRAPOLE FREIGHT', symbol: 'CARGO', value: '1,240 Trucks/day', change: '+8.5% WoW', isPositive: true },
  { name: 'BSE SENSEX (INDIA)', symbol: 'SENSEX', value: '82,419.80', change: '+412.30 (+0.50%)', isPositive: true },
  { name: 'DSE BROAD (BANGLADESH)', symbol: 'DSEX', value: '5,842.10', change: '+38.40 (+0.66%)', isPositive: true },
  { name: 'INDIA-BD POWER GRID', symbol: 'GRID', value: '1,160 MW', change: 'Normal Flow', isPositive: true },
  { name: 'INR / BDT EXCHANGE', symbol: 'INRBDT', value: '৳1.45', change: '+0.01 (+0.69%)', isPositive: true },
];

export const BREAKING_NEWS_ALERTS: BreakingAlert[] = [
  {
    id: 'b1',
    headline: 'MEA Delhi confirms diplomatic channel talks with Dhaka on expediting emergency medical visas and student clearance',
    timeAgo: '12m ago',
    sourceName: 'The Hindu',
    sourceBureau: 'Delhi',
    sentiment: 'positive',
    url: 'https://www.thehindu.com/news/national/india-bangladesh-diplomatic-talks-visas',
  },
  {
    id: 'b2',
    headline: 'পেট্রাপোল-বেনাপোল সীমান্তে ২৪ ঘণ্টা পণ্য খালাসের সিদ্ধান্ত শুল্ক দপ্তরের',
    timeAgo: '35m ago',
    sourceName: 'Anandabazar Patrika',
    sourceBureau: 'Kolkata',
    sentiment: 'positive',
    url: 'https://www.anandabazar.com/west-bengal/petrapole-benapole-border-trade-cargo-resumes',
  },
  {
    id: 'b3',
    headline: 'भारत-बांग्लादेश सीमा पर बीएसएफ की गश्त तेज: मेघालय और त्रिपुरा सेक्टर में अलर्ट',
    timeAgo: '50m ago',
    sourceName: 'Dainik Jagran',
    sourceBureau: 'Delhi',
    sentiment: 'negative',
    url: 'https://www.jagran.com/news/national-bsf-alert-bangladesh-border',
  },
];

export const SCANNED_NEWS_ITEMS: NewsItem[] = [
  {
    id: '1',
    slug: 'petrapole-benapole-trade-volume-hilsa-garment-logistics-abp',
    title: 'পেট্রাপোল সীমান্তে রেকর্ড বাণিজ্য: চব্বিশ ঘণ্টা পণ্য চলাচলে স্বস্তি দুই পারের ব্যবসায়ীদের',
    summary: 'আনন্দবাজার পত্রিকার সীমান্ত প্রতিনিধি জানাচ্ছেন, পেট্রাপোল-বেনাপোল সীমান্তে ২৪ ঘণ্টা স্বয়ংক্রিয় পণ্য ও যাত্রীবাহী লেন চালুর পর আমদানি-রফতানি বাণিজ্যে নতুন গতি এসেছে। ভারতীয় টেক্সটাইল মিল থেকে সুতো, তুলা ও রাসায়নিক কাঁচামাল দ্রুত বাংলাদেশে পৌঁছাচ্ছে। অন্যদিকে পদ্মার ইলিশবাহী ট্রাক বিশেষ ছাড়পত্র পেয়ে কলকাতার পাইকারি বাজারে পৌঁছানো শুরু হয়েছে।',
    keyPoints: [
      'স্বয়ংক্রিয় স্মার্ট গেট চালুর পর দৈনিক পণ্যবাহী ট্রাকের সংখ্যা ৭৫০ থেকে বেড়ে ১২০০ ছাড়িয়েছে।',
      'সুরাট, আমদাবাদ ও লুধিয়ানার সুতো রফতানিকারকরা বাংলাদেশের গার্মেন্টস অর্ডার দ্রুত সরবরাহে স্বস্তি প্রকাশ করেছেন।',
      'উৎসবের মরশুমে কলকাতার মাছ বাজারে বিশেষ সড়ক করিডোর দিয়ে ৫০০ টন পদ্মার ইলিশ আমদানি নিশ্চিত হয়েছে।'
    ],
    category: 'trade',
    categoryLabel: 'Cross-Border Trade',
    sentiment: 'positive',
    sentimentLabel: 'Positive on Bangladesh',
    sentimentReason: 'Highlights seamless cross-border trade acceleration, automated cargo clearance, and mutual economic benefits between Kolkata and Bangladesh.',
    source: {
      name: 'Anandabazar Patrika',
      bureau: 'Kolkata',
      language: 'Bengali',
      originalUrl: 'https://www.anandabazar.com/west-bengal/petrapole-benapole-border-trade-hits-record-daily-trucks/cid/15421',
      originalHeadline: 'পেট্রাপোল সীমান্তে রেকর্ড বাণিজ্য: চব্বিশ ঘণ্টা পণ্য চলাচলে স্বস্তি দুই পারের ব্যবসায়ীদের',
      scannedAt: '25 mins ago',
    },
    publishedAt: '2026-09-12T08:30:00Z',
    readTime: '3 min read',
    imageUrl: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80',
    isLeadStory: true,
    isTrending: true,
    tags: ['Petrapole', 'Benapole', 'Border Trade', 'Hilsa', 'RMG Supply Chain', 'Kolkata'],
    audioDuration: '3:10',
  },
  {
    id: '2',
    slug: 'dainik-jagran-border-security-bsf-smuggling-curfew',
    title: 'भारत-बांग्लादेश सीमा पर बीएसएफ का हाई अलर्ट: मेघालय और कूचबिहार में ड्रोन से पैनी निगरानी',
    englishTitle: 'BSF on High Alert Along Indo-Bangla Border: Drone Surveillance Intensified in Meghalaya & Cooch Behar',
    banglaTitle: 'ভারত-বাংলাদেশ সীমান্তে বিএসএফের হাই অ্যালার্ট: মেঘালয় ও কোচবিহারে ড্রোন নজরদারি জোরদার',
    summary: 'दैनिक जागरण की रिपोर्ट के अनुसार, पूर्वी कमान ने मेघालय और उत्तर बंगाल के नदी तटीय व बिना बाड़ वाले इलाकों में बीएसएफ की अतिरिक्त टुकड़ियां तैनात की हैं। सीमा पर तस्करों और अवैध घुसपैठ की आशंका को देखते हुए थर्मल इमेजिंग कैमरों और नाइट-विजन ड्रोन से 24 घंटे निगरानी की जा रही है तथा सीमावर्ती गांवों में रात्रि कर्फ्यू के निर्देश दिए गए हैं।',
    keyPoints: [
      'मेघालय और असम सीमांत पर बीएसएफ बटालियनों को रात की गश्त दोगुनी करने के कड़े निर्देश।',
      'नदी के रास्ते होने वाली तस्करी रोकने के लिए संवेदनशील सेक्टरों में अतिरिक्त स्पीड बोट तैनात।',
      'दिल्ली में गृह मंत्रालय के अधिकारियों ने बॉर्डर गार्ड बांग्लादेश (BGB) के साथ नियमित फ्लैग मीटिंग जारी रखने को कहा।'
    ],
    category: 'border',
    categoryLabel: 'Border & Security',
    sentiment: 'negative',
    sentimentLabel: 'Negative / Critical',
    sentimentReason: 'Focuses on cross-border infiltration risks, smuggling concerns, and heightened border alerts flagged by Indian security forces.',
    source: {
      name: 'Dainik Jagran',
      bureau: 'Delhi',
      language: 'Hindi',
      originalUrl: 'https://www.jagran.com/news/national-bsf-high-alert-on-india-bangladesh-meghalaya-border-238491.html',
      originalHeadline: 'भारत-बांग्लादेश सीमा पर बीएसएफ का हाई अलर्ट: मेघालय और कूचबिहार में ड्रोन से पैनी निगरानी',
      scannedAt: '40 mins ago',
    },
    publishedAt: '2026-09-12T07:45:00Z',
    readTime: '4 min read',
    imageUrl: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=1200&auto=format&fit=crop&q=80',
    isTrending: true,
    tags: ['BSF', 'Border Security', 'Meghalaya', 'Smuggling', 'Infiltration', 'Dainik Jagran'],
    audioDuration: '3:20',
  },
  {
    id: '3',
    slug: 'india-bangladesh-teesta-water-treaty-delhi-diplomatic-reassessment',
    title: 'Delhi Reviewing Technical Parameters on Teesta River Sharing Framework Ahead of Joint River Commission Talks',
    summary: 'India’s Ministry of Water Resources and External Affairs Ministry in Delhi are preparing updated hydrological data for the upcoming Joint River Commission meeting with Bangladesh. The report emphasizes balancing northern West Bengal irrigation needs while exploring reservoir management options in Sikkim to ensure dry-season water flow guarantees for Bangladesh’s Rangpur agricultural basin.',
    keyPoints: [
      'Delhi bureaucrats are analyzing Sikkim upstream reservoir flow data to model minimum winter discharge into Bangladesh.',
      'Kolkata state administration maintains that North Bengal farmers must not face lean-season water shortages.',
      'Both capitals agree that institutional JRC dialogues are essential to avoid third-party geopolitical entanglements.',
      'Indian foreign office sources describe the initiative as a pragmatic diplomatic restart to stabilize bilateral goodwill.'
    ],
    category: 'diplomacy',
    categoryLabel: 'Diplomacy & Water',
    sentiment: 'positive',
    sentimentLabel: 'Positive on Bangladesh',
    sentimentReason: 'Constructive diplomatic posture from Delhi signaling willingness to share hydrological data and resume formal Joint River Commission dialogues.',
    source: {
      name: 'The Indian Express',
      bureau: 'Delhi',
      language: 'English',
      originalUrl: 'https://indianexpress.com/article/india/india-bangladesh-teesta-water-sharing-jrc-talks-delhi/',
      originalHeadline: 'India preps technical data on Teesta ahead of proposed Joint Rivers Commission engagement with Dhaka',
      scannedAt: '15 mins ago',
    },
    publishedAt: '2026-09-12T06:30:00Z',
    readTime: '4 min read',
    imageUrl: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=1200&auto=format&fit=crop&q=80',
    isTrending: true,
    tags: ['Teesta River', 'MEA Delhi', 'Diplomacy', 'Joint River Commission', 'Water Resources'],
    audioDuration: '3:45',
  },
  {
    id: '4',
    slug: 'ei-samay-medical-tourism-kolkata-hospitals-bangladesh-patients',
    title: 'বাংলাদেশি রোগীদের ভিসা জট: চরম আর্থিক ধাক্কায় কলকাতার বেসরকারি হাসপাতাল ও নার্সিংহোম',
    summary: 'এই সময় (টাইমস গ্রুপ বাংলা)-এর প্রতিবেদনে কলকাতার স্বাস্থ্য পর্যটনের দুরবস্থা তুলে ধরা হয়েছে। মুকুন্দপুর ও সল্টলেকের নামী সুপার-স্পেশ্যালিটি হাসপাতালগুলিতে আন্তর্জাতিক রোগীদের ৭০ শতাংশই আসতেন বাংলাদেশ থেকে। মেডিক্যাল ভিসা প্রাপ্তিতে বিলম্বের কারণে রোগী আগমন প্রায় ৪০ শতাংশ কমে যাওয়ায় স্বাস্থ্য সংস্থাগুলি কেন্দ্রীয় বিদেশ মন্ত্রকে জরুরি ই-মেডিক্যাল ভিসা চালুর আবেদন জানিয়েছে।',
    keyPoints: [
      'কলকাতার বেসরকারি হাসপাতালগুলিতে আন্তর্জাতিক স্যুট ও পূর্বনির্ধারিত জটিল অস্ত্রোপচার স্থগিত।',
      'ক্লিনিক, ডায়াগনস্টিক সেন্টার ও নিকটবর্তী গেস্ট হাউস মিলিয়ে মাসে প্রায় ৩৫০ কোটি টাকার আর্থিক ক্ষতির আশঙ্কা।',
      'পশ্চিমবঙ্গ বেসরকারি স্বাস্থ্য প্রতিষ্ঠান সমিতি বিদেশ মন্ত্রকে দ্রুত ই-ভিসা চালুর স্মারকলিপি জমা দিয়েছে।'
    ],
    category: 'economy',
    categoryLabel: 'Economy & Energy',
    sentiment: 'negative',
    sentimentLabel: 'Negative / Impact Alert',
    sentimentReason: 'Details the mutual economic hardship and medical distress caused by bilateral visa delays affecting Bangladeshi patients and Kolkata healthcare.',
    source: {
      name: 'Ei Samay',
      bureau: 'Kolkata',
      language: 'Bengali',
      originalUrl: 'https://eisamay.com/west-bengal-news/kolkata-news/kolkata-private-hospitals-hit-hard-by-drop-in-bangladesh-patients/articleshow/10892341.cms',
      originalHeadline: 'বাংলাদেশি রোগীদের ভিসা জট: চরম আর্থিক ধাক্কায় কলকাতার নামী বেসরকারি হাসপাতাল ও নার্সিংহোম',
      scannedAt: '2 hours ago',
    },
    publishedAt: '2026-09-11T22:15:00Z',
    readTime: '4 min read',
    imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&auto=format&fit=crop&q=80',
    tags: ['Medical Tourism', 'Kolkata Hospitals', 'Visas', 'Healthcare', 'Ei Samay'],
  },
  {
    id: '5',
    slug: 'amar-ujala-tripura-transit-chittagong-port-connectivity',
    title: 'त्रिपुरा सरकार की केंद्र से मांग: चटगांव और मोंगला पोर्ट के जरिए पूर्वोत्तर कार्गो ट्रांजिट नियमों को तुरंत अंतिम रूप दिया जाए',
    englishTitle: 'Tripura Government Urges Centre to Finalize Transit Rules for Cargo Movement via Chittagong & Mongla Ports',
    banglaTitle: 'ত্রিপুরা সরকারের দাবি: চট্টগ্রাম ও মোংলা বন্দর হয়ে উত্তর-পূর্ব ভারতে পণ্য ট্রানজিট প্রটোকল দ্রুত কার্যকর করা হোক',
    summary: 'अमर उजाला की रिपोर्ट के अनुसार, त्रिपुरा राज्य सरकार ने नई दिल्ली स्थित वाणिज्य मंत्रालय से आग्रह किया है कि अगरतला-सबरूम और फेनी नदी पर बने मैत्री सेतु के जरिए चटगांव पोर्ट से माल ढुलाई के डिजिटल कस्टम प्रोटोकॉल को तुरंत लागू किया जाए, जिससे पूर्वोत्तर राज्यों के लिए लॉजिस्टिक्स लागत 40% तक कम हो जाएगी।',
    keyPoints: [
      'चटगांव पोर्ट ट्रांजिट से कोलकाता से अगरतला की ढुलाई दूरी 1,650 किमी से घटकर 500 किमी से भी कम हो जाएगी।',
      'सबरूम इंटीग्रेटेड चेक पोस्ट पर कंटेनर ट्रैकिंग और ऑटोमेटेड कस्टम क्लीयरेंस के ट्रायल पूरे।',
      'पूर्वोत्तर के व्यापारिक संगठनों ने आवश्यक वस्तुओं के दामों में भारी गिरावट आने की उम्मीद जताई।'
    ],
    category: 'trade',
    categoryLabel: 'Cross-Border Trade',
    sentiment: 'neutral',
    sentimentLabel: 'Neutral / Transit Focus',
    sentimentReason: 'Factual assessment of logistical transit negotiations and economic potential linking Northeast India with Bangladeshi deep-water ports.',
    source: {
      name: 'Amar Ujala',
      bureau: 'Delhi',
      language: 'Hindi',
      originalUrl: 'https://www.amarujala.com/india-news/tripura-urges-centre-for-early-transit-via-chittagong-port-bangladesh-2026',
      originalHeadline: 'त्रिपुरा सरकार की मांग: चटगांव पोर्ट के जरिए पूर्वोत्तर के लिए कार्गो ट्रांजिट जल्द शुरू हो',
      scannedAt: '3 hours ago',
    },
    publishedAt: '2026-09-11T19:40:00Z',
    readTime: '4 min read',
    imageUrl: 'https://images.unsplash.com/photo-1545459720-aac8509eb02c?w=1200&auto=format&fit=crop&q=80',
    tags: ['Tripura', 'Chittagong Port', 'Maitri Setu', 'Northeast Transit', 'Amar Ujala'],
  },
  {
    id: '6',
    slug: 'sangbad-pratidin-cricket-bangladesh-india-bilateral-series-kolkata',
    title: 'ইডেনে ভারত-বাংলাদেশ সিরিজ: টাইগার্সদের বরণ করতে তৈরি কলকাতা, নিরাপত্তা বন্দোবস্তে সন্তুষ্ট বিসিবি',
    summary: 'সংবাদ প্রতিদিনের ক্রীড়া ডেস্কের রিপোর্ট অনুযায়ী, ইডেন গার্ডেন্সে ভারত-বাংলাদেশ দ্বিপাক্ষিক সিরিজকে কেন্দ্র করে ক্রিকেটপ্রেমীদের মধ্যে তুমুল উন্মাদনা লক্ষ্য করা যাচ্ছে। সিএবি (CAB) সভাপতি জানিয়েছেন, মাঠ প্রস্তুত এবং বাংলাদেশ ক্রিকেট বোর্ডের (BCB) প্রতিনিধি দলের সঙ্গে কলকাতা পুলিশের নিশ্ছিদ্র নিরাপত্তা পরিকল্পনা চূড়ান্ত হয়েছে।',
    keyPoints: [
      'ইডেনের পিচে পেসারদের বাড়তি বাউন্স ও গতি ধরে রাখতে বিশেষ কিউরেটর দল কাজ করছে।',
      'কলকাতা পুলিশ ও সিএবি যৌথভাবে বাংলাদেশ দলের খেলোয়াড়দের জন্য বিশেষ গ্রিন করিডোর তৈরি করেছে।',
      'ক্রিকেট বিশেষজ্ঞদের মতে, দুই বাংলার আবেগ এই দ্বিপাক্ষিক সিরিজকে অনন্য উচ্চতায় নিয়ে যাবে।'
    ],
    category: 'sports',
    categoryLabel: 'Sports & Cricket',
    sentiment: 'positive',
    sentimentLabel: 'Positive on Bangladesh',
    sentimentReason: 'Positive sporting engagement, camaraderie, and excitement surrounding the Bangladesh cricket team in Kolkata.',
    source: {
      name: 'Sangbad Pratidin',
      bureau: 'Kolkata',
      language: 'Bengali',
      originalUrl: 'https://www.sangbadpratidin.in/sports/cricket/bangladesh-cricket-team-eden-gardens-kolkata-match-preparations/549102',
      originalHeadline: 'ইডেনে ভারত-বাংলাদেশ লড়াই: টাইগার্সদের বরণ করতে তৈরি কলকাতা, নিরাপত্তা নিয়ে সন্তুষ্ট বিসিবি',
      scannedAt: '4 hours ago',
    },
    publishedAt: '2026-09-11T16:00:00Z',
    readTime: '3 min read',
    imageUrl: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=1200&auto=format&fit=crop&q=80',
    tags: ['Cricket', 'Eden Gardens', 'BCB', 'Tigers', 'Sports Diplomacy', 'Sangbad Pratidin'],
  },
  {
    id: '7',
    slug: 'hindu-editorial-interim-governance-reforms-dhaka-diplomacy',
    title: 'The Hindu Editorial: India Must Engage Proactively With Bangladesh’s Democratic Transition',
    summary: 'In an analytical editorial from its Delhi bureau, The Hindu argues that India’s strategic interests are best preserved through broad-based institutional engagement with Bangladesh rather than tying diplomacy to specific political factions. The editorial urges South Block to fast-track student and medical visa issuance, expand trade corridors, and respect Dhaka’s domestic institutional reform process.',
    keyPoints: [
      'Argues that deep socio-economic ties between the people of India and Bangladesh transcend political personalities.',
      'Calls for prompt reopening of all Indian Visa Application Centers (IVAC) across Dhaka, Chittagong, and Sylhet.',
      'Warns that strategic disengagement from Delhi would create an artificial vacuum benefiting extra-regional competitors.'
    ],
    category: 'diplomacy',
    categoryLabel: 'Diplomacy & Water',
    sentiment: 'neutral',
    sentimentLabel: 'Neutral / Analytical',
    sentimentReason: 'Balanced strategic appraisal urging pragmatic diplomacy, respectful engagement with Dhaka’s institutions, and people-to-people connectivity.',
    source: {
      name: 'The Hindu',
      bureau: 'Delhi',
      language: 'English',
      originalUrl: 'https://www.thehindu.com/opinion/editorial/engaging-dhaka-on-india-bangladesh-ties/article68612940.ece',
      originalHeadline: 'Engaging Dhaka: On India’s strategic approach to Bangladesh’s transition',
      scannedAt: '5 hours ago',
    },
    publishedAt: '2026-09-11T13:20:00Z',
    readTime: '5 min read',
    imageUrl: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1200&auto=format&fit=crop&q=80',
    tags: ['The Hindu Editorial', 'Diplomacy', 'Visas', 'Foreign Policy', 'South Block'],
    audioDuration: '4:00',
  },
  {
    id: '8',
    slug: 'business-standard-adani-power-godda-electricity-dhaka-dues',
    title: 'Adani Power and Bangladesh Power Development Board Agree on Streamlined Tariff Settlement Mechanism',
    summary: 'Business Standard in Delhi reports that Adani Power and the Bangladesh Power Development Board (BPDB) have finalized a roadmap for regularizing power tariff payments from the 1,600 MW Godda thermal plant in Jharkhand. The dispatch of uninterrupted high-voltage electricity continues normally, with BPDB issuing letters of credit backed by central bank forex reserves.',
    keyPoints: [
      'Uninterrupted cross-border power supply of 1,160 MW maintained across the dedicated high-voltage transmission line.',
      'BPDB opened fresh revolving letters of credit with Sonali Bank to ensure timely monthly invoice clearance.',
      'Energy analysts note that cross-border electricity trade remains resilient despite political headwinds.'
    ],
    category: 'trade',
    categoryLabel: 'Cross-Border Trade',
    sentiment: 'positive',
    sentimentLabel: 'Positive on Bangladesh',
    sentimentReason: 'Demonstrates successful commercial resolution, steady energy grid stability, and contractual compliance between Dhaka and Indian power utilities.',
    source: {
      name: 'Business Standard',
      bureau: 'Delhi',
      language: 'English',
      originalUrl: 'https://www.business-standard.com/companies/news/adani-power-bpdb-bangladesh-electricity-payment-agreement-124091100452_1.html',
      originalHeadline: 'Adani Power, Bangladesh PDB reach understanding on payment schedule for Godda supply',
      scannedAt: '6 hours ago',
    },
    publishedAt: '2026-09-11T11:00:00Z',
    readTime: '3 min read',
    imageUrl: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?w=1200&auto=format&fit=crop&q=80',
    tags: ['Adani Power', 'BPDB', 'Energy Trade', 'Electricity Grid', 'Business Standard'],
  }
];
