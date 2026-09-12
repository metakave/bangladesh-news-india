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
  totalScanned24h: 342,
  bangladeshMatches: 76,
  sentimentDistribution: {
    positive: 32,
    neutral: 26,
    negative: 18,
  },
  bureauDistribution: {
    delhi: 42,
    kolkata: 34,
  },
  languageDistribution: {
    english: 38,
    bengali: 24,
    hindi: 14,
  }
};

export const BREAKING_NEWS_ALERTS: BreakingAlert[] = [
  {
    id: 'b-new1',
    headlineBn: 'আদানি বিদ্যুৎ সঞ্চালন: কারিগরি ত্রুটি মেরামতের পর বাংলাদেশ জাতীয় গ্রিডে বিদ্যুৎ সরবরাহ সম্পূর্ণ স্বাভাবিক',
    headlineEn: 'Adani Power: High-voltage electricity transmission restored to Bangladesh grid after swift technical repairs',
    timeAgoBn: '১২ মিনিট আগে',
    timeAgoEn: '12m ago',
    sourceName: 'The Times of India',
    sourceBureau: 'Delhi',
    sentiment: 'positive',
    url: 'https://timesofindia.indiatimes.com/world/south-asia',
  },
  {
    id: 'b-new2',
    headlineBn: 'সুন্দরবন ও বাঘ সংরক্ষণ: জীববৈচিত্র্য রক্ষায় ঢাকায় ভারত ও বাংলাদেশের যৌথ টাস্কফোর্সের গুরুত্বপূর্ণ বৈঠক',
    headlineEn: 'Sundarbans Conservation: High-level joint taskforce meeting in Dhaka on biodiversity & Royal Bengal Tiger protection',
    timeAgoBn: '২৮ মিনিট আগে',
    timeAgoEn: '28m ago',
    sourceName: 'Ei Samay',
    sourceBureau: 'Kolkata',
    sentiment: 'positive',
    url: 'https://eisamay.com/bangladesh-news',
  },
  {
    id: 'b-new3',
    headlineBn: 'জরুরি ভিসা সেবা: বাংলাদেশি শিক্ষার্থী ও জটিল রোগীদের জন্য বিশেষ কনস্যুলার কাউন্টার বৃদ্ধি ভারতীয় হাইকমিশনের',
    headlineEn: 'Indian High Commission Dhaka expands priority visa appointments for Bangladeshi students and emergency patients',
    timeAgoBn: '৪৫ মিনিট আগে',
    timeAgoEn: '45m ago',
    sourceName: 'The Hindu',
    sourceBureau: 'Delhi',
    sentiment: 'positive',
    url: 'https://www.thehindu.com/news/international/',
  },
  {
    id: 'b1',
    headlineBn: 'দিল্লি ব্রিকস সম্মেলন: বাংলাদেশ প্রধানমন্ত্রীকে ব্রিকস নয়, বিমসটেক সভাপতি হিসেবে আমন্ত্রণ জানানো হয়েছিল বলে জানাল ঢাকা',
    headlineEn: 'Dhaka clarifies: PM Tarique Rahman was invited to New Delhi BRICS summit in capacity as BIMSTEC Chair, not as PM',
    timeAgoBn: '১ ঘণ্টা আগে',
    timeAgoEn: '1h ago',
    sourceName: 'The Hindu',
    sourceBureau: 'Delhi',
    sentiment: 'neutral',
    url: 'https://www.thehindu.com/news/international/',
  },
  {
    id: 'b2',
    headlineBn: 'মৈত্রী, বন্ধন ও মিতালী এক্সপ্রেস ট্রেন পরিষেবা পুনরায় চালু নিয়ে ভারত-বাংলাদেশ আলোচনা শীঘ্রই',
    headlineEn: 'India, Bangladesh to discuss resumption of Maitree, Bandhan, and Mitali passenger train services',
    timeAgoBn: '২ ঘণ্টা আগে',
    timeAgoEn: '2h ago',
    sourceName: 'The Indian Express',
    sourceBureau: 'Delhi',
    sentiment: 'positive',
    url: 'https://indianexpress.com/section/india/',
  }
];

export const SCANNED_NEWS_ITEMS: NewsItem[] = [
  {
    id: '1',
    slug: 'india-brics-invitation-bimstec-chair-dhaka-the-hindu',
    title: 'India did not invite Bangladesh PM Rahman for BRICS; invite was for BIMSTEC Chair: Dhaka',
    banglaTitle: 'ভারত বাংলাদেশ প্রধানমন্ত্রীকে ব্রিকসের জন্য আমন্ত্রণ জানায়নি; আমন্ত্রণ ছিল বিমসটেক সভাপতি হিসেবে: ঢাকা',
    summaryBn: 'দ্য হিন্দু দিল্লি ব্যুরোর প্রতিবেদন অনুযায়ী, ঢাকায় পররাষ্ট্র প্রতিমন্ত্রী জানিয়েছেন যে বাংলাদেশ প্রধানমন্ত্রী তারেক রহমানকে ভারতে অনুষ্ঠিত ১৮তম ব্রিকস সম্মেলনে মূলত বিমসটেক (BIMSTEC) আঞ্চলিক জোটের বর্তমান সভাপতি হিসেবে আমন্ত্রণ জানানো হয়েছিল, বাংলাদেশের সরকারপ্রধান হিসেবে নয়। ঢাকা আরও নিশ্চিত করেছে যে এই মুহূর্তে এই শীর্ষ সম্মেলনে বাংলাদেশের সরকারপ্রধান পর্যায়ের কোনো যোগদানের পরিকল্পনা নেই।',
    summaryEn: 'The Hindu reports from New Delhi that Dhaka has clarified the nature of the diplomatic invitation sent for the 18th BRICS Summit in New Delhi. The Minister of State for Foreign Affairs confirmed that Bangladesh Prime Minister Tarique Rahman was invited in his institutional capacity as the Chairperson of the Bay of Bengal Initiative for Multi-Sectoral Technical and Economic Cooperation (BIMSTEC), rather than on a standalone bilateral invite.',
    keyPointsBn: [
      'দিল্লিতে ১৮তম ব্রিকস শীর্ষ সম্মেলন চলাকালীন বিমসটেক কাঠামোর অধীনে সদস্য দেশগুলোর জন্য আমন্ত্রণ পাঠানো হয়েছিল।',
      'ঢাকা স্পষ্ট করেছে যে কোনো ভুল বোঝাবুঝি এড়াতে সরকারি প্রটোকল ও কূটনৈতিক প্রক্রিয়ার বিষয়টি স্পষ্ট করা প্রয়োজন।',
      'দ্বিপাক্ষিক স্তরে দিল্লি ও ঢাকার মধ্যে প্রাতিষ্ঠানিক যোগাযোগ অব্যাহত রয়েছে।'
    ],
    keyPointsEn: [
      'Invitation for the New Delhi summit was routed under the multilateral BIMSTEC institutional framework.',
      'Dhaka foreign ministry officials clarified the protocol nuances to prevent diplomatic misinterpretations.',
      'Bilateral bureaucratic channels between South Block and Dhaka remain active on shared regional priorities.'
    ],
    category: 'diplomacy',
    categoryLabelBn: 'কূটনীতি ও বহুপাক্ষিক ফোরাম',
    categoryLabelEn: 'Diplomacy & Water',
    sentiment: 'neutral',
    sentimentReasonBn: 'কূটনৈতিক আমন্ত্রণ ও প্রটোকলের প্রাতিষ্ঠানিক ব্যাখ্যা এবং বস্তুনিষ্ঠ সংবাদ পরিবেশন।',
    sentimentReasonEn: 'Objective diplomatic reporting detailing multilateral protocol, official clarifications from Dhaka, and regional summit dynamics.',
    source: {
      name: 'The Hindu',
      bureau: 'Delhi',
      language: 'English',
      originalUrl: 'https://www.thehindu.com/news/international/',
      originalHeadline: 'India did not invite Bangladesh PM Rahman for BRICS; invite was for BIMSTEC Chair: Dhaka',
      scannedAt: '18 mins ago',
    },
    publishedAt: '2026-09-12T09:47:43Z',
    readTimeBn: '৪ মিনিট পাঠ',
    readTimeEn: '4 min read',
    imageUrl: '/images/brics-summit-2026-card.png',
    isLeadStory: true,
    isTrending: true,
    tags: ['BRICS 2026', 'BIMSTEC', 'Dhaka', 'The Hindu', 'MEA Delhi', 'Diplomacy'],
  },
  {
    id: '2',
    slug: 'india-bangladesh-passenger-train-services-resumption-indian-express',
    title: 'India, Bangladesh likely to discuss resumption of passenger train services',
    banglaTitle: 'মৈত্রী, বন্ধন ও মিতালী এক্সপ্রেস ট্রেন পরিষেবা পুনরায় চালু নিয়ে ভারত-বাংলাদেশ আলোচনা শীঘ্রই',
    summaryBn: 'দ্য ইন্ডিয়ান এক্সপ্রেসের তথ্য অনুযায়ী, ভারতীয় রেলওয়ে ও বাংলাদেশ রেলওয়ের উচ্চপদস্থ প্রতিনিধিরা মৈত্রী এক্সপ্রেস (ঢাকা-কলকাতা), বন্ধন এক্সপ্রেস (খুলনা-কলকাতা) এবং মিতালী এক্সপ্রেস (ঢাকা-নিউ জলপাইগুড়ি) যাত্রীবাহী ট্রেন পরিষেবা পুনরায় চালুর বিষয়ে কারিগরি ও নিরাপত্তা আলোচনা করতে যাচ্ছেন। যাত্রী যাতায়াত স্বাভাবিক করতে দুই দেশের সাধারণ মানুষের দীর্ঘদিনের প্রত্যাশাকে গুরুত্ব দেওয়া হচ্ছে।',
    summaryEn: 'The Indian Express reports that senior railway and transport officials from India and Bangladesh are preparing to hold technical discussions regarding the resumption of popular cross-border passenger trains, including the Maitree Express, Bandhan Express, and Mitali Express. The move is aimed at restoring passenger connectivity, easing medical travel, and supporting family visits across the border.',
    keyPointsBn: [
      'গেদে-দর্শনা এবং পেট্রাপোল-বেনাপোল রেল করিডোরে ট্র্যাক ও নিরাপত্তা সমীক্ষা সম্পন্ন করার উদ্যোগ।',
      'যাত্রীদের ইমিগ্রেশন ও কাস্টমস প্রক্রিয়া দ্রুত সম্পন্ন করতে সমন্বিত ডিজিটাল চেকিং ব্যবস্থা চালুর প্রস্তাব।',
      'কলকাতা ও উত্তরবঙ্গের পর্যটন ও চিকিৎসা খাতের ব্যবসায়ীরা এই উদ্যোগকে স্বাগত জানিয়েছেন।'
    ],
    keyPointsEn: [
      'Technical safety audits planned across the Gede-Darshana and Petrapole-Benapole railway links.',
      'Proposals underway for digitized immigration synchronization to streamline cross-border clearances.',
      'Tourism and medical service stakeholders in Kolkata and Siliguri warmly welcome the connectivity push.'
    ],
    category: 'trade',
    categoryLabelBn: 'সীমান্ত যোগাযোগ ও রেলওয়ে',
    categoryLabelEn: 'Cross-Border Trade',
    sentiment: 'positive',
    sentimentReasonBn: 'জনসাধারণের যাতায়াত সহজীকরণ, দ্বিপাক্ষিক যোগাযোগ পুনঃস্থাপন এবং ইতিবাচক সহযোগিতার ওপর আলোকপাত।',
    sentimentReasonEn: 'Highlights constructive cross-border transport revival, easing civilian mobility, and mutual socio-economic benefits.',
    source: {
      name: 'The Indian Express',
      bureau: 'Delhi',
      language: 'English',
      originalUrl: 'https://indianexpress.com/section/india/',
      originalHeadline: 'India, Bangladesh likely to discuss resumption of passenger train services',
      scannedAt: '35 mins ago',
    },
    publishedAt: '2026-09-12T08:06:01Z',
    readTimeBn: '৩ মিনিট পাঠ',
    readTimeEn: '3 min read',
    imageUrl: 'https://images.unsplash.com/photo-1532105956626-9569c03602f6?w=1200&auto=format&fit=crop&q=80',
    isTrending: true,
    tags: ['Maitree Express', 'Bandhan Express', 'Mitali Express', 'Indian Railways', 'Indian Express', 'Connectivity'],
  },
  {
    id: '3',
    slug: 'amar-ujala-hindu-journalist-death-dhaka-samakal-investigation',
    title: 'बांग्लादेश में हिंदू पत्रकार की संदिग्ध मौत: दफ्तर में फंदे से लटका मिला शव, अवामी लीग ने क्यों उठाए सवाल?',
    englishTitle: 'Death of Hindu Journalist in Bangladesh: Body Found Inside Newsroom, Calls for Transparent Investigation',
    banglaTitle: 'বাংলাদেশে হিন্দু সাংবাদিকের রহস্যজনক মৃত্যু: পত্রিকা কার্যালয়ে মরদেহ উদ্ধার, নিরপেক্ষ তদন্তের দাবি',
    summaryBn: 'অমর উজালা দিল্লি ব্যুরোর খবরে প্রকাশ, ঢাকায় দৈনিক সমকাল পত্রিকার সিনিয়র সহ-সম্পাদক ও সনাতন ধর্মাবলম্বী সাংবাদিকের মরদেহ কার্যালয়ের ভেতর থেকে উদ্ধার করা হয়েছে। পুলিশ ঘটনার তদন্ত শুরু করেছে এবং ময়নাতদন্তের জন্য মরদেহ ঢাকা মেডিকেল কলেজ হাসপাতালে পাঠানো হয়েছে। বিভিন্ন সাংবাদিক সংগঠন ও রাজনৈতিক মহল ঘটনার নিরপেক্ষ তদন্ত ও সংবাদকর্মীদের সুরক্ষার জোর দাবি জানিয়েছে।',
    summaryEn: 'Amar Ujala reports on the tragic discovery of a senior Hindu journalist and sub-editor found dead inside the newsroom of a major daily in Dhaka. Local law enforcement authorities have launched an inquest and sent the body for forensic post-mortem analysis, while journalist associations and political observers urge a thorough, transparent probe and enhanced safety for mediapersons.',
    keyPointsBn: [
      'ঢাকা পুলিশ ঘটনাস্থল পরিদর্শন করে সিসিটিভি ফুটেজ ও আলামত সংগ্রহ করেছে।',
      'বাংলাদেশ ফেডারেল সাংবাদিক ইউনিয়ন (বিএফইউজে) নিরপেক্ষ ও দ্রুত তদন্ত প্রতিবেদন প্রকাশের দাবি জানিয়েছে।',
      'ঘটনার কারণ খতিয়ে দেখতে পুলিশের গোয়েন্দা বিভাগ বিশেষ দল গঠন করেছে।'
    ],
    keyPointsEn: [
      'Dhaka Metropolitan Police inspect the premises, retrieving CCTV footage and forensic evidence.',
      'Journalist federations in Dhaka issue calls for an impartial, expedited forensic enquiry.',
      'Specialist detective units assigned to investigate all circumstantial elements.'
    ],
    category: 'politics',
    categoryLabelBn: 'রাজনীতি ও গণমাধ্যম সুরক্ষা',
    categoryLabelEn: 'Politics & Governance',
    sentiment: 'negative',
    sentimentReasonBn: 'সাংবাদিকের অনাকাঙ্ক্ষিত মৃত্যু এবং গণমাধ্যমকর্মীদের নিরাপত্তা ও উদ্বেগের প্রেক্ষাপট।',
    sentimentReasonEn: 'Focuses on the unfortunate demise of a media professional, safety concerns, and demands for swift justice.',
    source: {
      name: 'Amar Ujala',
      bureau: 'Delhi',
      language: 'Hindi',
      originalUrl: 'https://www.amarujala.com/world',
      originalHeadline: 'बांग्लादेश में हिंदू पत्रकार की संदिग्ध मौत: दफ्तर में फंदे से लटका मिला शव, अवामी लीग ने क्यों उठाए सवाल?',
      scannedAt: '52 mins ago',
    },
    publishedAt: '2026-09-12T02:05:05Z',
    readTimeBn: '৩ মিনিট পাঠ',
    readTimeEn: '3 min read',
    imageUrl: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&auto=format&fit=crop&q=80',
    isTrending: true,
    tags: ['Amar Ujala', 'Media Freedom', 'Dhaka Newsroom', 'Investigation', 'Journalism'],
  },
  {
    id: '4',
    slug: 'sheikh-hasina-daughter-saima-wazed-who-regional-director-resignation',
    title: 'Sheikh Hasina’s daughter resigns as WHO regional director amid fraud allegations',
    banglaTitle: 'বিশ্ব স্বাস্থ্য সংস্থার আঞ্চলিক পরিচালকের পদ থেকে পদত্যাগ করলেন শেখ হাসিনার মেয়ে সায়মা ওয়াজেদ',
    summaryBn: 'দ্য হিন্দু ও ইন্ডিয়ান এক্সপ্রেসের প্রতিবেদনে জানা গেছে, বিশ্ব স্বাস্থ্য সংস্থার (হু) দক্ষিণ-পূর্ব এশিয়া অঞ্চলের আঞ্চলিক পরিচালকের পদ থেকে ইস্তফা দিয়েছেন সাবেক প্রধানমন্ত্রী শেখ হাসিনার মেয়ে সায়মা ওয়াজেদ পুতুল। এর আগে হু আঞ্চলিক কমিটি তার নিয়োগের প্রক্রিয়া ও অনিয়মের অভিযোগ নিয়ে পর্যালোচনা বৈঠক করে পদত্যাগের সুপারিশ করেছিল।',
    summaryEn: 'The Hindu and Indian Express report that Saima Wazed, daughter of former Bangladesh Prime Minister Sheikh Hasina, has resigned from her position as the World Health Organization (WHO) Regional Director for South-East Asia. The resignation followed recommendations by the WHO regional committee reviewing complaints and administrative petitions.',
    keyPointsBn: [
      'সায়মা ওয়াজেদ ২০২৩ সালে দিল্লির আঞ্চলিক কার্যালয়ে পাঁচ বছরের জন্য দায়িত্ব গ্রহণ করেছিলেন।',
      'ঢাকা থেকে অন্তর্বর্তী সরকারের পক্ষ থেকে নিয়োগ সংক্রান্ত অনিয়মের অভিযোগ আন্তর্জাতিক ফোরামে তোলা হয়েছিল।',
      'হু প্রধান কার্যালয় জানিয়েছে যে অন্তর্বর্তীকালীন নেতৃত্বের মাধ্যমে আঞ্চলিক কার্যক্রম নির্বিঘ্নে পরিচালিত হবে।'
    ],
    keyPointsEn: [
      'Saima Wazed had assumed the five-year directorship role at the New Delhi regional headquarters in 2023.',
      'Administrative petitions challenging the nomination process had been submitted by interim authorities in Dhaka.',
      'WHO headquarters confirmed interim arrangements to ensure South-East Asia healthcare operations proceed without disruption.'
    ],
    category: 'diplomacy',
    categoryLabelBn: 'কূটনীতি ও আন্তর্জাতিক সংস্থা',
    categoryLabelEn: 'Diplomacy & Water',
    sentiment: 'negative',
    sentimentReasonBn: 'আন্তর্জাতিক সংস্থার শীর্ষ পদে বিতর্ক, অভিযোগ এবং আকস্মিক পদত্যাগের ঘটনা।',
    sentimentReasonEn: 'Covers administrative scrutiny, institutional resignations, and multilateral governance friction.',
    source: {
      name: 'The Hindu',
      bureau: 'Delhi',
      language: 'English',
      originalUrl: 'https://www.thehindu.com/news/international/',
      originalHeadline: "Sheikh Hasina's daughter resigns as WHO regional director amid fraud allegations",
      scannedAt: '1 hour ago',
    },
    publishedAt: '2026-09-11T19:49:44Z',
    readTimeBn: '৪ মিনিট পাঠ',
    readTimeEn: '4 min read',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&auto=format&fit=crop&q=80',
    tags: ['WHO', 'The Hindu', 'Diplomacy', 'Saima Wazed', 'Health Governance'],
  },
  {
    id: '5',
    slug: 'durga-puja-minority-security-dhaka-indian-express',
    title: 'Ahead of Durga Puja, Bangladesh government promises support, safety for Hindu minority',
    banglaTitle: 'আসন্ন দুর্গাপূজা উপলক্ষে সংখ্যালঘু হিন্দু সম্প্রদায়ের নিরাপত্তা ও সর্বাত্মক সহায়তার প্রতিশ্রুতি বাংলাদেশ সরকারের',
    summaryBn: 'ইন্ডিয়ান এক্সপ্রেসের বিশ্ব সংবাদের পাতায় প্রকাশিত প্রতিবেদনে বলা হয়েছে, আসন্ন শারদীয় দুর্গোৎসব শান্তিপূর্ণ ও নির্বিঘ্ন করতে সব ধরনের প্রশাসনিক ও নিরাপত্তা সহায়তার প্রতিশ্রুতি দিয়েছে বাংলাদেশের অন্তর্বর্তীকালীন প্রশাসন। স্বরাষ্ট্র মন্ত্রণালয় দেশজুড়ে পূজামণ্ডপগুলোর নিরাপত্তায় সেনাবাহিনী, পুলিশ ও আনসার বাহিনীর সমন্বিত পাহারা এবং সিসিটিভি নজরদারির নির্দেশ দিয়েছে।',
    summaryEn: 'The Indian Express reports that authorities in Dhaka have assured robust security, administrative logistics, and round-the-clock protection for Hindu minority communities ahead of the upcoming Durga Puja festivities. The home ministry outlined deployment plans involving law enforcement, paramilitary forces, and CCTV surveillance networks across all registered puja pandals.',
    keyPointsBn: [
      'সারা দেশে ৩২ হাজারের বেশি পূজামণ্ডপে সমন্বিত নিরাপত্তা বলয় গড়ে তোলার নির্দেশ।',
      'পূজা উদযাপন পরিষদ ও মন্দির কমিটির প্রতিনিধিদের সাথে সরকারের নিয়মিত সমন্বয় বৈঠক।',
      'যেকোনো অপ্রীতিকর পরিস্থিতি তাৎক্ষণিকভাবে নিয়ন্ত্রণে জাতীয় জরুরি সেবা হটলাইন সার্বক্ষণিক সক্রিয় রাখা।'
    ],
    keyPointsEn: [
      'Security protocols mapped out for over 32,000 community puja pandals across Bangladesh.',
      'Structured coordination meetings held between government administrators and temple celebration committees.',
      'Emergency response helplines and specialized patrol teams deployed for rapid escalation control.'
    ],
    category: 'culture',
    categoryLabelBn: 'সংস্কৃতি ও সামাজিক সম্প্রীতি',
    categoryLabelEn: 'Culture & Arts',
    sentiment: 'positive',
    sentimentReasonBn: 'উৎসবের নিরাপত্তা নিশ্চিতকরণ, সরকারের ইতিবাচক প্রতিশ্রুতি ও সাম্প্রদায়িক সম্প্রীতি রক্ষার প্রচেষ্টা।',
    sentimentReasonEn: 'Emphasizes proactive communal harmony measures, state protection guarantees, and festive inclusivity.',
    source: {
      name: 'The Indian Express',
      bureau: 'Delhi',
      language: 'English',
      originalUrl: 'https://indianexpress.com/section/world/',
      originalHeadline: 'Ahead of Durga Puja, Bangladesh government promises support, safety for Hindu minority',
      scannedAt: '1.5 hours ago',
    },
    publishedAt: '2026-09-08T05:20:43Z',
    readTimeBn: '৩ মিনিট পাঠ',
    readTimeEn: '3 min read',
    imageUrl: 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=1200&auto=format&fit=crop&q=80',
    tags: ['Durga Puja', 'Communal Harmony', 'Indian Express', 'Minority Safety', 'Culture'],
  },
  {
    id: '6',
    slug: 'sangbad-pratidin-chinmoy-das-kolkata-reverberations',
    title: '‘হিন্দু বলে আমার মাকেও পালিয়ে আসতে হয়েছিল’, চিন্ময় প্রভুর চোখের জল দেখে অতীত স্মরণ শুভেন্দুর',
    englishTitle: 'Kolkata Political Reactions on Bangladesh Situation: Opposition Leader Recalls Past Hardships',
    summaryBn: 'সংবাদ প্রতিদিনের কলকাতা ডেস্ক জানাচ্ছে, বাংলাদেশে কারাবন্দি ইসকন সন্ন্যাসী চিন্ময় কৃষ্ণ দাস প্রভুর মায়ের শেষকৃত্য সংক্রান্ত ছবিকে কেন্দ্র করে কলকাতায় রাজনৈতিক মহলে তীব্র প্রতিক্রিয়া তৈরি হয়েছে। বিরোধী দলনেতা শুভেন্দু অধিকারী অতীত স্মৃতি স্মরণ করে সনাতন ধর্মাবলম্বীদের ধর্মীয় অধিকার ও মানবাধিকার সুরক্ষার দাবি জানিয়েছেন। একই সাথে দ্য হিন্দুতেও এই বিষয়ে বিস্তারিত প্রতিবেদন প্রকাশিত হয়েছে।',
    summaryEn: 'Sangbad Pratidin reports from Kolkata on intense political discussions regarding the continued incarceration of Bangladeshi Hindu monk Chinmoy Krishna Das. Leaders in West Bengal reacted strongly to recent media photographs of the monk, urging international rights bodies and bilateral diplomatic channels to ensure fair trial standards, bail considerations, and human rights safeguards.',
    keyPointsBn: [
      'কলকাতায় বিভিন্ন সামাজিক ও ধর্মীয় সংগঠনের পক্ষ থেকে সংহতি সমাবেশ অনুষ্ঠিত।',
      'দ্বিপাক্ষিক স্তরে ধর্মীয় সংখ্যালঘুদের অধিকার রক্ষার বিষয়ে ভারতের বিদেশ মন্ত্রকের দৃষ্টি আকর্ষণ।',
      'আইনজীবীরা আদালতে মানবিক কারণে জামিন শুনানির আবেদন দ্রুত নিষ্পত্তির তাগিদ দিয়েছেন।'
    ],
    keyPointsEn: [
      'Solidarity rallies organized by cultural and religious organizations across Kolkata.',
      'Calls directed to MEA in Delhi to maintain diplomatic monitoring of fair legal trials.',
      'Legal defense teams advocate for prompt bail consideration on humanitarian grounds.'
    ],
    category: 'politics',
    categoryLabelBn: 'রাজনীতি ও মানবাধিকার',
    categoryLabelEn: 'Politics & Governance',
    sentiment: 'negative',
    sentimentReasonBn: 'কারাবন্দি ধর্মীয় নেতাকে কেন্দ্র করে উদ্বেগ, রাজনৈতিক বিতর্ক ও সংবেদনশীল আলোচনা।',
    sentimentReasonEn: 'Covers political friction, human rights concerns, and heightened public sensitivity across the Bengal border.',
    source: {
      name: 'Sangbad Pratidin',
      bureau: 'Kolkata',
      language: 'Bengali',
      originalUrl: 'https://www.sangbadpratidin.in/kolkata/',
      originalHeadline: '‘হিন্দু বলে আমার মাকেও পালিয়ে আসতে হয়েছিল’, চিন্ময় প্রভুর চোখের জল দেখে অতীত স্মরণ শুভেন্দুর',
      scannedAt: '2 hours ago',
    },
    publishedAt: '2026-09-12T09:23:33Z',
    readTimeBn: '৪ মিনিট পাঠ',
    readTimeEn: '4 min read',
    imageUrl: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=1200&auto=format&fit=crop&q=80',
    tags: ['Sangbad Pratidin', 'Kolkata Politics', 'Chinmoy Das', 'Human Rights', 'West Bengal'],
  },
  {
    id: '7',
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
      originalUrl: 'https://www.anandabazar.com/world',
      originalHeadline: 'পেট্রাপোল সীমান্তে রেকর্ড বাণিজ্য: চব্বিশ ঘণ্টা পণ্য চলাচলে স্বস্তি দুই পারের ব্যবসায়ীদের',
      scannedAt: '2.5 hours ago',
    },
    publishedAt: '2026-09-12T08:30:00Z',
    readTimeBn: '৩ মিনিট পাঠ',
    readTimeEn: '3 min read',
    imageUrl: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80',
    tags: ['Petrapole', 'Benapole', 'Border Trade', 'Hilsa', 'RMG Supply Chain', 'Kolkata'],
  },
  {
    id: '8',
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
      scannedAt: '3 hours ago',
    },
    publishedAt: '2026-09-12T07:45:00Z',
    readTimeBn: '৪ মিনিট পাঠ',
    readTimeEn: '4 min read',
    imageUrl: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=1200&auto=format&fit=crop&q=80',
    tags: ['BSF', 'Border Security', 'Meghalaya', 'Smuggling', 'Infiltration', 'Dainik Jagran'],
  },
  {
    id: '9',
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
      originalUrl: 'https://indianexpress.com/article/india/delhi-reviews-technical-parameters-teesta-river-sharing-framework-joint-rivers-commission-9562810/',
      originalHeadline: 'India preps technical data on Teesta ahead of proposed Joint Rivers Commission engagement with Dhaka',
      scannedAt: '3.5 hours ago',
    },
    publishedAt: '2026-09-12T06:30:00Z',
    readTimeBn: '৪ মিনিট পাঠ',
    readTimeEn: '4 min read',
    imageUrl: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=1200&auto=format&fit=crop&q=80',
    tags: ['Teesta River', 'MEA Delhi', 'Diplomacy', 'Joint River Commission', 'Water Resources'],
  },
  {
    id: '10',
    slug: 'ei-samay-transnational-cyber-scam-chittagong-foreigners-arrested',
    title: 'স্ক্যাম-চক্রে বাংলাদেশে শতাধিক বিদেশি ধৃত',
    englishTitle: 'Over 100 Foreign Nationals Arrested in Bangladesh for Transnational Cyber Scam & Fraud Rings',
    summaryBn: 'এই সময় অনলাইনের প্রতিবেদনে জানানো হয়েছে, হত্যা, আর্থিক প্রতারণা, নারী পাচার ও অনলাইন জুয়া চক্রে জড়িত থাকার অভিযোগে গত এক বছরে ৫৩ জন চিনা নাগরিকসহ অন্তত ১১৬ জন বিদেশিকে গ্রেপ্তার করেছে বাংলাদেশ পুলিশ। সম্প্রতি চট্টগ্রামের খুলশিতে একটি আন্তর্জাতিক সাইবার ল্যাবে অভিযান চালিয়ে চিন, পাকিস্তান, লাওস, নেপাল ও ভিয়েতনামের ৬৩ জন জালিয়াতি চক্রের সদস্যকে আটক করা হয়।',
    summaryEn: 'Ei Samay reports that Bangladesh Police have cracked down on a major transnational cybercrime network, arresting over 116 foreign nationals across the past year—including 53 Chinese and several Pakistani citizens. A specialized raid in Chittagong’s Khulshi dismantled an international digital scam and cyber fraud hub with operations spanning Laos, Nepal, and Vietnam.',
    keyPointsBn: [
      'চট্টগ্রামের খুলশিতে সাইবার অপরাধের আন্তর্জাতিক আস্তানায় অভিযান চালিয়ে ৬৩ জন বিদেশিকে গ্রেপ্তার করা হয়েছে।',
      'ধৃতদের মধ্যে চিন, পাকিস্তান, লাওস, নেপাল ও ভিয়েতনামের নাগরিক রয়েছে।',
      'পারিবারিক ও বিয়ের ভিসায় নারী পাচার এবং ডিজিটাল আর্থিক প্রতারণার বিষয়ে তদন্ত আরও জোরদার করা হয়েছে।'
    ],
    keyPointsEn: [
      'Police raided a high-tech international cyber scam den in Chittagong’s Khulshi, detaining 63 foreign operatives.',
      'The transnational network involved citizens from China, Pakistan, Laos, Nepal, and Vietnam.',
      'Intelligence agencies have escalated probes into digital fraud syndicates and human trafficking rings exploiting marriage visas.'
    ],
    category: 'border',
    categoryLabelBn: 'আন্তর্জাতিক অপরাধ ও সাইবার নিরাপত্তা',
    categoryLabelEn: 'Border & Security',
    sentiment: 'neutral',
    sentimentReasonBn: 'আন্তর্জাতিক সাইবার অপরাধ চক্রের বিস্তার এবং একই সাথে বাংলাদেশ পুলিশের সক্রিয় পদক্ষেপ ও কার্যকর আইনি অভিযানের বাস্তবনিষ্ঠ প্রতিবেদন।',
    sentimentReasonEn: 'Covers transnational fraud syndicates operating across regional borders alongside active law enforcement crackdowns by Bangladesh Police.',
    source: {
      name: 'Ei Samay',
      bureau: 'Kolkata',
      language: 'Bengali',
      originalUrl: 'https://eisamay.com/bangladesh-news/more-than-100-foreigners-arrested-for-scam-in-bangladesh/200541587.cms',
      originalHeadline: 'স্ক্যাম-চক্রে বাংলাদেশে শতাধিক বিদেশি ধৃত',
      scannedAt: '4 hours ago',
    },
    publishedAt: '2026-09-12T11:19:45Z',
    readTimeBn: '৩ মিনিট পাঠ',
    readTimeEn: '3 min read',
    imageUrl: 'https://cf-images.assettype.com/eisamay%2F2026-08-26%2Fslc2ajr6%2F1786002572arrest-1.jpg?w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop&enlarge=true',
    tags: ['Cyber Crime', 'Ei Samay', 'Chittagong', 'Khulshi', 'Transnational Fraud', 'Arrests'],
  },
  {
    id: '11',
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
      originalUrl: 'https://eisamay.com/business/kolkata-private-hospitals-face-revenue-loss-due-to-bangladesh-medical-visa-delays/200539812.cms',
      originalHeadline: 'বাংলাদেশি রোগীদের ভিসা জট: চরম আর্থিক ধাক্কায় কলকাতার নামী বেসরকারি হাসপাতাল ও নার্সিংহোম',
      scannedAt: '4.5 hours ago',
    },
    publishedAt: '2026-09-11T22:15:00Z',
    readTimeBn: '৪ মিনিট পাঠ',
    readTimeEn: '4 min read',
    imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&auto=format&fit=crop&q=80',
    tags: ['Medical Tourism', 'Kolkata Hospitals', 'Visas', 'Healthcare', 'Ei Samay'],
  },
  {
    id: '12',
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
      originalUrl: 'https://www.business-standard.com/economy/news/adani-power-and-bangladesh-power-development-board-agree-on-payment-schedule-for-godda-plant-126091100482_1.html',
      originalHeadline: 'Adani Power, Bangladesh PDB reach understanding on payment schedule for Godda supply',
      scannedAt: '5 hours ago',
    },
    publishedAt: '2026-09-11T11:00:00Z',
    readTimeBn: '৩ মিনিট পাঠ',
    readTimeEn: '3 min read',
    imageUrl: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&auto=format&fit=crop&q=80',
    tags: ['Adani Power', 'BPDB', 'Energy Trade', 'Electricity Grid', 'Business Standard'],
  },
  {
    id: '13',
    slug: 'hilsa-shortage-india-gujarat-odisha-sea-fish-exports-dhaka-ei-samay',
    title: 'ইলিশ খেতে বাংলাদেশের ভরসা ভারত, মোদীর রাজ্য ও ওড়িশা থেকে সামুদ্রিক মাছের রফতানি বৃদ্ধি',
    englishTitle: 'Hilsa Shortage: Sea Fish Exports from Gujarat & Odisha Surge to Meet Dhaka Market Demand',
    banglaTitle: 'ইলিশের জোগানে ঘাটতি: গুজরাত ও ওড়িশা থেকে বাংলাদেশের বাজারে সামুদ্রিক মাছের রফতানি বৃদ্ধি',
    summaryBn: 'এই সময় (কলকাতা ব্যুরো)-এর অনুসন্ধানী প্রতিবেদনে জানা গেছে, বাজারে ইলিশের অভ্যন্তরীণ সংকট ও চড়া মূল্যের প্রেক্ষাপটে ভারতের গুজরাত ও ওড়িশার সামুদ্রিক মাছ এখন ঢাকার কাঁচাবাজারে বিকল্প হিসেবে জনপ্রিয় হয়ে উঠেছে। বেনাপোল ও হিলি স্থলবন্দর দিয়ে প্রতিদিন টনকে টন কড, পমফ্রেট ও টুনা জাতীয় সামুদ্রিক মাছ আমদানি হচ্ছে।',
    summaryEn: 'Ei Samay reports that amid domestic supply gaps and soaring prices for riverine Hilsa, commercial fish exports from Gujarat and Odisha ports are bridging consumer demand across Dhaka and major retail hubs in Bangladesh. Customs records indicate hundreds of tonnes of refrigerated sea fish shipments clearing through Benapole and Hili land customs.',
    keyPointsBn: [
      'গুজরাতের ভেরাভল ও ওড়িশার পারাদ্বীপ বন্দর থেকে শীতাতপ নিয়ন্ত্রিত কন্টেইনারে মাছ সরবরাহ বৃদ্ধি।',
      'ঢাকার কারওয়ান বাজার ও চট্টগ্রামের পাইকারি বাজারে তুলনামূলক কম মূল্যে বিক্রি হচ্ছে ভারতীয় সামুদ্রিক মাছ।',
      'দুই দেশের রফতানিকারক ও আমদানি সমিতি দ্রুত পচনশীল খাদ্যদ্রব্যের জন্য বিশেষ গ্রিন চ্যানেল চালুর আহ্বান জানিয়েছে।'
    ],
    keyPointsEn: [
      'Temperature-controlled reefer containers dispatched from Veraval (Gujarat) and Paradip (Odisha).',
      'Dhaka wholesale markets like Kawran Bazar and Chittagong report brisk sales due to affordable pricing.',
      'Bilateral trade chambers urge dedicated perishable-cargo green corridors across land borders.'
    ],
    category: 'trade',
    categoryLabelBn: 'সীমান্ত বাণিজ্য ও খাদ্য',
    categoryLabelEn: 'Cross-Border Trade',
    sentiment: 'positive',
    sentimentReasonBn: 'বাণিজ্যিক বিকল্প তৈরি, খাদ্য নিরাপত্তা রক্ষা এবং দুই দেশের পারস্পরিক বাণিজ্যিক সুবিধার ইতিবাচক চিত্র।',
    sentimentReasonEn: 'Demonstrates resilient commercial trade adaptability, meeting consumer nutritional needs, and expanding cross-border supply chains.',
    source: {
      name: 'Ei Samay',
      bureau: 'Kolkata',
      language: 'Bengali',
      originalUrl: 'https://eisamay.com/west-bengal-news/howrah-news/india-exports-hilsa-to-bangladesh-from-narendra-modi-state-gujarat/200541702.cms',
      originalHeadline: 'ইলিশ খেতে বাংলাদেশের ভরসা ভারত, ত্রাতা মোদীর রাজ্য',
      scannedAt: '12 mins ago',
    },
    publishedAt: '2026-09-12T13:45:00Z',
    readTimeBn: '৩ মিনিট পাঠ',
    readTimeEn: '3 min read',
    imageUrl: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&auto=format&fit=crop&q=80',
    tags: ['Ei Samay', 'Hilsa', 'Fish Exports', 'Gujarat', 'Benapole', 'Dhaka Market'],
  },
  {
    id: '14',
    slug: 'tech-glitch-adani-power-unit-godda-bangladesh-grid-toi',
    title: 'Tech glitch at Adani power unit briefly hits Bangladesh grid, supply restored swiftly',
    banglaTitle: 'আদানি পাওয়ার ইউনিটে সাময়িক কারিগরি ত্রুটি: দ্রুত মেরামতের পর বাংলাদেশ গ্রিডে বিদ্যুৎ সঞ্চালন স্বাভাবিক',
    summaryBn: 'টাইমস অব ইন্ডিয়ার প্রতিবেদনে বলা হয়েছে, ঝাড়খণ্ডের গড্ডায় আদানি পাওয়ারের ১৬০০ মেগাওয়াট আল্ট্রা-সুপারক্রিটিক্যাল থার্মাল পাওয়ার প্ল্যান্টের একটি ইউনিটে আকস্মিক কারিগরি ত্রুটির কারণে বাংলাদেশে বিদ্যুৎ সঞ্চালন কিছুক্ষণের জন্য হ্রাস পায়। ভারতীয় প্রকৌশলীদের দ্রুত পদক্ষেপে কয়েক ঘণ্টার মধ্যে ফল্ট শনাক্ত ও মেরামত করে বাংলাদেশ বিদ্যুৎ উন্নয়ন বোর্ডের (বিপিডিবি) কাছে পূর্ণ ক্ষমতায় ১,১৬০ মেগাওয়াট বিদ্যুৎ সরবরাহ পুনঃস্থাপন করা হয়েছে।',
    summaryEn: 'The Times of India reports that an unexpected boiler-turbine technical glitch at Unit 2 of Adani Power’s 1,600 MW ultra-supercritical plant in Godda, Jharkhand, caused a temporary dip in power dispatch to Bangladesh’s national grid. Dedicated engineering teams rectified the fault within hours, safely stabilizing high-voltage transmission back to the agreed 1,160 MW capacity.',
    keyPointsBn: [
      'ঝাড়খণ্ডের গড্ডা প্ল্যান্টের বিশেষ আন্তঃসীমান্ত সঞ্চালন লাইনের মাধ্যমে বিদ্যুৎ প্রবাহ সম্পূর্ণ স্বাভাবিক।',
      'বাংলাদেশ বিদ্যুৎ উন্নয়ন বোর্ড (বিপিডিবি) লোড ম্যানেজমেন্টের মাধ্যমে গ্রিডের ভারসাম্য বজায় রেখেছে।',
      'উভয় দেশের গ্রিড অপারেটরদের মধ্যে সার্বক্ষণিক কারিগরি সমন্বয় ব্যবস্থার কার্যকারিতা প্রমাণিত হয়েছে।'
    ],
    keyPointsEn: [
      'Cross-border dedicated 400kV transmission link fully restored to standard operational throughput.',
      'Bangladesh Power Development Board (BPDB) smoothly managed local load balancing during the transient dip.',
      'Real-time grid synchronization protocols between Indian and Bangladeshi dispatch centers operated effectively.'
    ],
    category: 'economy',
    categoryLabelBn: 'বিদ্যুৎ ও জ্বালানি গ্রিড',
    categoryLabelEn: 'Economy & Energy',
    sentiment: 'neutral',
    sentimentReasonBn: 'কারিগরি ত্রুটির বাস্তব তথ্য এবং তা দ্রুত মেরামত করে সরবরাহ স্বাভাবিক করার বস্তুনিষ্ঠ বিবরণ।',
    sentimentReasonEn: 'Objective technical reporting detailing transmission maintenance, rapid engineering resolution, and grid reliability.',
    source: {
      name: 'The Times of India',
      bureau: 'Delhi',
      language: 'English',
      originalUrl: 'https://timesofindia.indiatimes.com/world/south-asia/tech-glitch-at-adani-power-unit-hits-bangladesh-grid/articleshow/134099803.cms',
      originalHeadline: 'Tech glitch at Adani power unit hits Bangladesh grid',
      scannedAt: '25 mins ago',
    },
    publishedAt: '2026-09-12T12:30:00Z',
    readTimeBn: '৩ মিনিট পাঠ',
    readTimeEn: '3 min read',
    imageUrl: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&auto=format&fit=crop&q=80',
    isTrending: true,
    tags: ['Times of India', 'Adani Power', 'BPDB', 'Energy Grid', 'Godda Plant', 'Dhaka'],
  },
  {
    id: '15',
    slug: 'sundarbans-royal-bengal-tiger-conservation-dhaka-delhi-joint-taskforce-ei-samay',
    title: 'সুন্দরবন ও বাঘ সংরক্ষণে দিল্লি-ঢাকার যৌথ পদক্ষেপ: জীববৈচিত্র্য রক্ষায় একযোগে কাজ করবে দুই দেশ',
    englishTitle: 'Dhaka-Delhi Joint Taskforce Formulates Unified Blueprint for Sundarbans Biodiversity & Tiger Protection',
    banglaTitle: 'সুন্দরবন ও রয়্যাল বেঙ্গল টাইগার সংরক্ষণে দিল্লি-ঢাকার যৌথ পদক্ষেপ: জীববৈচিত্র্য রক্ষায় সমঝোতা',
    summaryBn: 'এই সময় কলকাতার প্রতিবেদনে প্রকাশ, সুন্দরবনের প্রাকৃতিক বাস্তুতন্ত্র ও সংকটাপন্ন রয়্যাল বেঙ্গল টাইগার সুরক্ষায় ঢাকায় ভারত ও বাংলাদেশের পরিবেশ, বন ও জলবায়ু পরিবর্তন মন্ত্রণালয়ের শীর্ষ কর্মকর্তাদের মধ্যে দ্বিপাক্ষিক টাস্কফোর্সের উচ্চপর্যায়ের বৈঠক অনুষ্ঠিত হয়েছে। দুই দেশের সুন্দরবন অংশে বাঘ গণনা, ম্যানগ্রোভ বন সংরক্ষণ ও যৌথ টহল জোরদার করার বিষয়ে চূড়ান্ত সমঝোতা হয়েছে।',
    summaryEn: 'Ei Samay reports that environmental and wildlife conservation authorities from India and Bangladesh concluded a bilateral taskforce consultation in Dhaka, unveiling a unified strategy to safeguard the shared Sundarbans mangrove ecosystem and monitor the transboundary Royal Bengal Tiger population through joint spatial tracking and anti-poaching patrols.',
    keyPointsBn: [
      'উভয় দেশের যৌথ ক্যামেরা ট্র্যাপিং ও কৃত্রিম বুদ্ধিমত্তা চালিত সেন্সর দিয়ে রয়্যাল বেঙ্গল টাইগার ট্র্যাকিং।',
      'নদীমাতৃক ম্যানগ্রোভ অঞ্চলে আন্তর্জাতিক চোরাশিকারিদের বিরুদ্ধে যৌথ কোস্টগার্ড ও বনরক্ষী টহল।',
      'জলবায়ু পরিবর্তনজনিত লবণাক্ততা বৃদ্ধির প্রভাব মোকাবিলায় বিজ্ঞানভিত্তিক গবেষণায় ঢাকা-কলকাতা অংশীদারিত্ব।'
    ],
    keyPointsEn: [
      'Joint camera-trapping census and AI-powered sensors deployed for harmonized tiger habitat tracking.',
      'Coordinated anti-poaching maritime patrols along delta water channels by forest guards.',
      'Collaborative scientific research between Dhaka and Kolkata institutes to counter salinity intrusion in mangroves.'
    ],
    category: 'diplomacy',
    categoryLabelBn: 'পরিবেশ ও যৌথ উদ্যোগ',
    categoryLabelEn: 'Diplomacy & Water',
    sentiment: 'positive',
    sentimentReasonBn: 'পরিবেশ ও বিরল বন্যপ্রাণী সুরক্ষায় দুই দেশের সৌহার্দ্যপূর্ণ সহযোগিতা ও ইতিবাচক পদক্ষেপ।',
    sentimentReasonEn: 'Highlights constructive cross-border environmental stewardship, biodiversity conservation, and peaceful scientific cooperation.',
    source: {
      name: 'Ei Samay',
      bureau: 'Kolkata',
      language: 'Bengali',
      originalUrl: 'https://eisamay.com/bangladesh-news/meeting-of-bangladesh-and-india-in-dhaka-on-biodiversity-and-royal-bengal-tiger-conservation-of-sundarbans/200539806.cms',
      originalHeadline: 'সুন্দরবন ও বাঘ সংরক্ষণে দিল্লি-ঢাকার যৌথ পদক্ষেপ',
      scannedAt: '40 mins ago',
    },
    publishedAt: '2026-09-12T11:15:00Z',
    readTimeBn: '৪ মিনিট পাঠ',
    readTimeEn: '4 min read',
    imageUrl: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=1200&auto=format&fit=crop&q=80',
    tags: ['Sundarbans', 'Tiger Conservation', 'Ei Samay', 'Biodiversity', 'Dhaka', 'Kolkata'],
  },
  {
    id: '16',
    slug: 'indian-high-commission-dhaka-visa-processing-expedited-medical-students-the-hindu',
    title: 'Indian High Commission in Dhaka expands emergency consular slots to expedite student and medical visas',
    banglaTitle: 'ঢাকায় ভারতীয় হাইকমিশনে শিক্ষার্থী ও জরুরি চিকিৎসা ভিসার জন্য বিশেষ কাউন্টার চালু',
    summaryBn: 'দ্য হিন্দু দিল্লি ব্যুরোর খবরে জানা গেছে, ঢাকায় ভারতীয় হাইকমিশন ও দেশের অন্যান্য সহকারী হাইকমিশনগুলোতে (চট্টগ্রাম, রাজশাহী, সিলেট ও খুলনা) উচ্চশিক্ষায় ভর্তি হওয়া বাংলাদেশি শিক্ষার্থী ও গুরুতর রোগীদের জন্য বিশেষ জরুরি ভিসা অ্যাপয়েন্টমেন্ট স্লট বৃদ্ধি করেছে। কনস্যুলার প্রক্রিয়ায় গতি ফেরাতে অতিরিক্ত কর্মকর্তা নিয়োজিত করা হয়েছে।',
    summaryEn: 'The Hindu reports that the High Commission of India in Dhaka and its assistant high commissions across Bangladesh have expanded prioritized consular appointment quotas specifically for Bangladeshi students pursuing admissions in Indian universities and emergency medical patients seeking urgent treatments in Indian hospitals.',
    keyPointsBn: [
      'মেডিক্যাল ও স্টুডেন্ট ক্যাটাগরিতে প্রতিদিন আবেদনের অনুমোদন সংখ্যা দ্বিগুণ করার সিদ্ধান্ত।',
      'ঢাকায় আইভিএসি (IVAC) যমুনা ফিউচার পার্ক সেন্টারে বিশেষ সাপোর্ট ডেস্ক স্থাপন।',
      'কূটনৈতিক চ্যানেলে নিয়মিত আলোচনার মাধ্যমে পর্যায়ক্রমে পর্যটন ভিসাও স্বাভাবিক করার পরিকল্পনা।'
    ],
    keyPointsEn: [
      'Dedicated fast-track processing quotas doubled for verified student enrollment and acute medical referrals.',
      'Specialized verification helpdesks deployed at IVAC Jamuna Future Park, Dhaka.',
      'Bilateral diplomatic consultations actively exploring phased restoration of routine tourist travel categories.'
    ],
    category: 'diplomacy',
    categoryLabelBn: 'কূটনীতি ও কনস্যুলার সেবা',
    categoryLabelEn: 'Diplomacy & Water',
    sentiment: 'positive',
    sentimentReasonBn: 'ভিসা প্রক্রিয়া সহজীকরণ, শিক্ষার্থী ও রোগীদের মানবিক সহায়তা এবং দুই দেশের জনগণের যোগাযোগ বৃদ্ধির ইতিবাচক বার্তা।',
    sentimentReasonEn: 'Emphasizes humanitarian consular relief, supporting student mobility, and alleviating medical travel bottlenecks.',
    source: {
      name: 'The Hindu',
      bureau: 'Delhi',
      language: 'English',
      originalUrl: 'https://www.thehindu.com/news/international/',
      originalHeadline: 'Indian High Commission in Dhaka expands emergency consular slots to expedite student and medical visas',
      scannedAt: '48 mins ago',
    },
    publishedAt: '2026-09-12T10:20:00Z',
    readTimeBn: '৩ মিনিট পাঠ',
    readTimeEn: '3 min read',
    imageUrl: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?w=1200&auto=format&fit=crop&q=80',
    tags: ['The Hindu', 'Indian Visa', 'Dhaka High Commission', 'Medical Visa', 'Student Exchange'],
  },
  {
    id: '17',
    slug: 'chinmoy-krishna-das-parole-funeral-court-ruling-toi',
    title: 'Hindu monk Chinmoy Krishna Das, in Bangladesh jail, gets 5-hour parole to attend mother\'s funeral',
    banglaTitle: 'মায়ের শেষকৃত্যে অংশ নিতে কারাবন্দি সন্ন্যাসী চিন্ময় কৃষ্ণ দাসকে ৫ ঘণ্টার প্যারোল দিল আদালত',
    summaryBn: 'টাইমস অব ইন্ডিয়া এবং এই সময়ের প্রতিবেদনে জানানো হয়েছে, চট্টগ্রামে কারাবন্দি হিন্দু ধর্মীয় নেতা চিন্ময় কৃষ্ণ দাস প্রভুর মায়ের মৃত্যুর পর আদালতের নির্দেশে কঠোর পুলিশি নিরাপত্তায় তাঁকে ৫ ঘণ্টার মানবিক প্যারোলে মুক্তি দেওয়া হয়। তিনি শ্মশানে উপস্থিত হয়ে মায়ের শেষকৃত্য সম্পন্ন করেন এবং পরবর্তীতে পুনরায় কারাগারে প্রত্যাবর্তন করেন।',
    summaryEn: 'The Times of India and regional Bengali dailies report that a metropolitan court in Chittagong granted a 5-hour humanitarian parole to incarcerated Hindu monk Chinmoy Krishna Das to perform the final rites of his deceased mother, Sandhyarani Dhar. Following emotional scenes at the crematorium under tight security escort, he was escorted back to the central jail.',
    keyPointsBn: [
      'আদালতের বিশেষ মানবিক আদেশে ৫ ঘণ্টার জন্য শেষকৃত্যে উপস্থিত থাকার অনুমতি।',
      'আইনজীবী দল নিয়মিত জামিন শুনানির জন্য উচ্চ আদালতে আবেদন বজায় রেখেছেন।',
      'কলকাতার বিভিন্ন সামাজিক সংগঠন ও মানবাধিকার পর্যবেক্ষকরা আইনি প্রক্রিয়ার স্বচ্ছতার ওপর গুরুত্ব দিয়েছেন।'
    ],
    keyPointsEn: [
      'Humanitarian parole order sanctioned by judicial magistrate for conducting cremation rituals.',
      'Legal defense counsels continue pursuing substantive regular bail hearings before higher appellate benches.',
      'Civil society and human rights observers monitor the judicial proceedings with close attention.'
    ],
    category: 'politics',
    categoryLabelBn: 'রাজনীতি ও আইনি প্রক্রিয়া',
    categoryLabelEn: 'Politics & Governance',
    sentiment: 'neutral',
    sentimentReasonBn: 'মানবিক প্যারোলের আদালতের সিদ্ধান্ত ও শেষকৃত্যের ঘটনার সংবেদনশীল ও বস্তুনিষ্ঠ প্রতিবেদন।',
    sentimentReasonEn: 'Balanced legal reporting covering humanitarian parole permissions, judicial processes, and public sensitivity.',
    source: {
      name: 'The Times of India',
      bureau: 'Kolkata',
      language: 'English',
      originalUrl: 'https://timesofindia.indiatimes.com/world/south-asia/hindu-monk-chinmoy-krishna-das-in-bangladesh-jail-gets-5-hour-parole-to-attend-mothers-funeral/articleshow/134048032.cms',
      originalHeadline: "Hindu monk Chinmoy Krishna Das, in Bangladesh jail, gets 5-hour parole to attend mother's funeral",
      scannedAt: '1 hour ago',
    },
    publishedAt: '2026-09-11T20:30:00Z',
    readTimeBn: '৩ মিনিট পাঠ',
    readTimeEn: '3 min read',
    imageUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&auto=format&fit=crop&q=80',
    tags: ['Times of India', 'Chinmoy Das', 'Chittagong', 'Parole', 'Human Rights', 'Judiciary'],
  },
  {
    id: '18',
    slug: 'indo-bangla-joint-river-commission-seasonal-monsoon-data-hindustan-times',
    title: 'Indo-Bangla Joint River Commission hydrologists complete seasonal monsoon data exchange session',
    banglaTitle: 'ভারত-বাংলাদেশ যৌথ নদী কমিশনের প্রকৌশলীদের মৌসুমি হাইড্রোলজিক্যাল তথ্য বিনিময় সম্পন্ন',
    summaryBn: 'হিন্দুস্তান টাইমসের দিল্লি ব্যুরোর খবরে প্রকাশ, ভারত ও বাংলাদেশের যৌথ নদী কমিশনের (JRC) কারিগরি দল গঙ্গা, তিস্তা, ব্রহ্মপুত্র ও বরাক নদীর মৌসুমি বৃষ্টিপাত ও পানি প্রবাহের বিস্তারিত হাইড্রোলজিক্যাল তথ্য আদান-প্রদান সম্পন্ন করেছে। এর ফলে উভয় দেশের বন্যা পূর্বাভাস কেন্দ্রগুলো আরও নিখুঁতভাবে আগাম সতর্কবার্তা জারি করতে সক্ষম হবে।',
    summaryEn: 'Hindustan Times reports that hydrology experts from the India-Bangladesh Joint River Commission (JRC) concluded their routine seasonal hydrological data sharing session covering the Ganga, Teesta, Brahmaputra, and Barak river basins. The synchronized telemetry enables meteorological departments in Delhi and Dhaka to issue precision flood advisories.',
    keyPointsBn: [
      'উভয় দেশের ৫৪টি অভিন্ন নদীর পানি প্রবাহের রিয়েল-টাইম তথ্য বিনিময় চুক্তি বাস্তবায়িত।',
      'আসাম, ত্রিপুরা ও বাংলাদেশের পূর্বাঞ্চলীয় জেলার বন্যা নিয়ন্ত্রণে আগাম সতর্কবার্তা ব্যবস্থার উন্নয়ন।',
      'নদী বিশেষজ্ঞগণ দীর্ঘমেয়াদি অববাহিকাভিত্তিক সমন্বিত পানি ব্যবস্থাপনার পরামর্শ দিয়েছেন।'
    ],
    keyPointsEn: [
      'Real-time telemetry and river discharge metrics exchanged across common transboundary river corridors.',
      'Enhanced early-warning radar integration assisting flood mitigation across Assam, Tripura, and Sylhet.',
      'Water resources engineers advocate for expanded institutional river basin basin-wide management protocols.'
    ],
    category: 'diplomacy',
    categoryLabelBn: 'নদী ও পানি সম্পদ',
    categoryLabelEn: 'Diplomacy & Water',
    sentiment: 'positive',
    sentimentReasonBn: 'নদী সংক্রান্ত তথ্য বিনিময়, বন্যা প্রতিরোধ ও প্রাতিষ্ঠানিক কারিগরি সহযোগিতার ইতিবাচক দিক তুলে ধরা হয়েছে।',
    sentimentReasonEn: 'Constructive scientific collaboration enhancing shared disaster management, flood mitigation, and water resource monitoring.',
    source: {
      name: 'Hindustan Times',
      bureau: 'Delhi',
      language: 'English',
      originalUrl: 'https://www.hindustantimes.com/world-news',
      originalHeadline: 'Indo-Bangla Joint River Commission hydrologists complete seasonal monsoon data exchange session',
      scannedAt: '1.2 hours ago',
    },
    publishedAt: '2026-09-12T05:15:00Z',
    readTimeBn: '৪ মিনিট পাঠ',
    readTimeEn: '4 min read',
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&auto=format&fit=crop&q=80',
    tags: ['Joint River Commission', 'Hindustan Times', 'Flood Control', 'Teesta', 'Hydrology'],
  },
  {
    id: '19',
    slug: 'digital-cargo-tracking-petrapole-benapole-customs-sangbad-pratidin',
    title: 'পেট্রাপোল-বেনাপোল বন্দরে ডিজিটাল কার্গো ট্র্যাকিং চালুর পর পণ্য খালাসে সময় কমল ৬০ শতাংশ',
    englishTitle: 'Digital Cargo Tracking at Petrapole-Benapole Slashes Customs Clearance Time by 60%',
    banglaTitle: 'পেট্রাপোল-বেনাপোল বন্দরে ডিজিটাল কার্গো ট্র্যাকিং চালুর পর পণ্য খালাসে সময় কমল ৬০ শতাংশ',
    summaryBn: 'সংবাদ প্রতিদিনের বাণিজ্য পাতায় জানানো হয়েছে, পেট্রাপোল-বেনাপোল সমন্বিত চেকপোস্টে (আইসিপি) রেডিও ফ্রিকোয়েন্সি আইডেন্টিফিকেশন (RFID) এবং কিউআর কোডভিত্তিক ডিজিটাল ট্র্যাকিং ব্যবস্থা চালুর ফলে পণ্যবাহী ট্রাকের ছাড়পত্র নেওয়ার সময় নাটকীয়ভাবে কমেছে। আগে যেখানে ২ থেকে ৩ দিন অপেক্ষা করতে হতো, এখন মাত্র কয়েক ঘণ্টার মধ্যে পণ্যবাহী যান সীমান্ত পার হতে পারছে।',
    summaryEn: 'Sangbad Pratidin reports from Kolkata that the introduction of RFID automated digital e-tracking and QR code clearance at the Petrapole-Benapole Integrated Check Post (ICP) has reduced freight turnaround times by over 60%. Cross-border commercial trucks which previously queued for days now complete joint customs inspections in under four hours.',
    keyPointsBn: [
      'স্বয়ংক্রিয় স্ক্যানিং ব্যবস্থার মাধ্যমে প্রতিদিন গড়ে ১,৪০০ পণ্যবাহী ট্রাক চলাচল করছে।',
      'পোশাক শিল্পের রফতানি চালান ও শিল্প কাঁচামালের দ্রুত পৌঁছানো নিশ্চিত হচ্ছে।',
      'ভারত-বাংলাদেশ ল্যান্ডপোর্ট অথরিটি যৌথভাবে অন্যান্য স্থলবন্দরেও এই মডেল চালুর পরিকল্পনা করছে।'
    ],
    keyPointsEn: [
      'Integrated automated scanners facilitate daily clearance of over 1,400 commercial cargo trucks.',
      'Apparel export consignments and essential raw materials reach manufacturing hubs without delays.',
      'Land Port Authorities of India and Bangladesh plan scaling this smart digitised protocol across all border terminals.'
    ],
    category: 'trade',
    categoryLabelBn: 'সীমান্ত বাণিজ্য ও প্রযুক্তি',
    categoryLabelEn: 'Cross-Border Trade',
    sentiment: 'positive',
    sentimentReasonBn: 'বাণিজ্য সহজীকরণ, ডিজিটাল বন্দর আধুনিকায়ন এবং আমদানি-রফতানিকারকদের সময় ও ব্যয় হ্রাসের ইতিবাচক সংবাদ।',
    sentimentReasonEn: 'Highlights modern trade infrastructure efficiency, reduced logistics costs, and technological modernization at land borders.',
    source: {
      name: 'Sangbad Pratidin',
      bureau: 'Kolkata',
      language: 'Bengali',
      originalUrl: 'https://www.sangbadpratidin.in/business/digital-cargo-tracking-at-petrapole-benapole-reduces-customs-clearance-time/pid/1335890/',
      originalHeadline: 'পেট্রাপোল-বেনাপোল বন্দরে ডিজিটাল কার্গো ট্র্যাকিং চালুর পর পণ্য খালাসে সময় কমল ৬০ শতাংশ',
      scannedAt: '1.8 hours ago',
    },
    publishedAt: '2026-09-12T04:45:00Z',
    readTimeBn: '৩ মিনিট পাঠ',
    readTimeEn: '3 min read',
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&auto=format&fit=crop&q=80',
    tags: ['Sangbad Pratidin', 'Petrapole', 'Benapole', 'Digital Port', 'Border Trade', 'Logistics'],
  },
  {
    id: '20',
    slug: 'india-bangladesh-essential-food-commodities-export-quota-dainik-jagran',
    title: 'ढाका और दिल्ली के बीच द्विपक्षीय व्यापार वार्ता: आवश्यक खाद्य वस्तुओं के निर्यात कोटा पर सहमति',
    englishTitle: 'India & Bangladesh Agree on Essential Food Commodities Export Quota Framework to Stabilize Prices',
    banglaTitle: 'ঢাকা ও দিল্লির মধ্যে দ্বিপাক্ষিক বাণিজ্য আলোচনা: নিত্যপ্রয়োজনীয় খাদ্যপণ্যের রফতানি কোটায় ঐকমত্য',
    summaryBn: 'দৈনিক জাগরণের দিল্লি ব্যুরো জানায়, গম, চাল, চিনি, পেঁয়াজ ও ডালের মতো নিত্যপ্রয়োজনীয় খাদ্যদ্রব্যের বার্ষিক আমদানি নিশ্চিত করতে ভারত ও বাংলাদেশের বাণিজ্য সচিব পর্যায়ের বৈঠকে একটি স্থায়ী বার্ষিক কোটা কাঠামোর বিষয়ে নীতিগত সমঝোতা হয়েছে। এর ফলে ভারতের অভ্যন্তরীণ বাজারে কোনো রফতানি নিষেধাজ্ঞা জারি হলেও পূর্বনির্ধারিত কোটার অধীনে বাংলাদেশে সরবরাহ অব্যাহত থাকবে।',
    summaryEn: 'Dainik Jagran reports that commerce ministry delegations from New Delhi and Dhaka have reached an understanding on an annual institutionalized export quota framework for essential food staples including wheat, non-basmati rice, sugar, onions, and pulses. The mechanism ensures steady supplies to Bangladesh insulated from temporary domestic export bans.',
    keyPointsBn: [
      'বাংলাদেশ সরকারের চাহিদার ভিত্তিতে নিত্যপণ্যের বার্ষিক আমদানির পূর্বাভাস তৈরি করা হবে।',
      'ভারতের অভ্যন্তরীণ নীতি পরিবর্তন সত্ত্বেও কোটার আওতাধীন পণ্য নিয়মিত ছাড়পত্র পাবে।',
      'ঢাকার বাজারে খাদ্য মূল্যস্ফীতি নিয়ন্ত্রণ ও সরবরাহ স্থিতিশীল রাখতে এই চুক্তি সহায়ক হবে।'
    ],
    keyPointsEn: [
      'Annual staple demand forecasts submitted by Dhaka commerce authorities to secure guaranteed export quotas.',
      'Exemption provisions insulate allocated quotas from sudden domestic market export restrictions in India.',
      'Mechanism directly supports price stabilization and food security across consumer markets in Bangladesh.'
    ],
    category: 'economy',
    categoryLabelBn: 'অর্থনীতি ও বাণিজ্য চুক্তি',
    categoryLabelEn: 'Economy & Energy',
    sentiment: 'positive',
    sentimentReasonBn: 'খাদ্য নিরাপত্তা নিশ্চিতকরণ, দীর্ঘমেয়াদী কোটা সমঝোতা এবং দ্বিপাক্ষিক অর্থনৈতিক সহযোগিতার ইতিবাচক দিক।',
    sentimentReasonEn: 'Demonstrates constructive bilateral trade policy, safeguarding regional food security and stabilizing market supply lines.',
    source: {
      name: 'Dainik Jagran',
      bureau: 'Delhi',
      language: 'Hindi',
      originalUrl: 'https://www.jagran.com/business/economy-india-bangladesh-bilateral-trade-talks-essential-food-commodities-quota-framework-23849102.html',
      originalHeadline: 'ढाका और दिल्ली के बीच द्विपक्षीय व्यापार वार्ता: आवश्यक खाद्य वस्तुओं के निर्यात कोटा पर सहमति',
      scannedAt: '2.2 hours ago',
    },
    publishedAt: '2026-09-12T03:30:00Z',
    readTimeBn: '৪ মিনিট পাঠ',
    readTimeEn: '4 min read',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&auto=format&fit=crop&q=80',
    tags: ['Dainik Jagran', 'Food Security', 'Trade Quota', 'Onion Export', 'Dhaka Market', 'Commerce'],
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
