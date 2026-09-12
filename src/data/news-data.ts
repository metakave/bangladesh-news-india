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
  title: string;
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
    headline: 'Benapole-Petrapole land port resumes full night-shift cargo clearance after high-level customs bilateral meeting',
    timeAgo: '35m ago',
    sourceName: 'Anandabazar Patrika',
    sourceBureau: 'Kolkata',
    sentiment: 'positive',
    url: 'https://www.anandabazar.com/west-bengal/petrapole-benapole-border-trade-cargo-resumes',
  },
  {
    id: 'b3',
    headline: 'BSF increases vigil along Meghalaya and Tripura frontiers following cross-border cattle smuggling alerts',
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
    publishedAt: '2026-09-12T08:30:00Z',
    readTime: '4 min read',
    imageUrl: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=1200&auto=format&fit=crop&q=80',
    isLeadStory: true,
    isTrending: true,
    tags: ['Teesta River', 'MEA Delhi', 'Diplomacy', 'Joint River Commission', 'Water Resources'],
    audioDuration: '3:45',
  },
  {
    id: '2',
    slug: 'petrapole-benapole-trade-volume-hilsa-garment-logistics-abp',
    title: 'Petrapole Border Sees Record 1,200 Freight Trucks Daily as Bilateral Garment and Perishable Trade Surges',
    summary: 'Anandabazar Patrika’s border correspondent reports that land customs at Petrapole-Benapole have implemented 24/7 automated passenger and cargo lanes. Raw cotton, yarn, and chemical dyes from Indian mills are flowing into Bangladeshi ready-made garment clusters with minimal inspection delays, while specialized seasonal consignments of Padma Hilsa arrived at Kolkata wholesale fish markets.',
    keyPoints: [
      'Daily cargo clearance increased from 750 trucks to over 1,200 following integrated automated smart gates.',
      'Textile exporters in Surat, Ahmedabad, and Ludhiana report steady demand from Dhaka and Chittagong buying houses.',
      'Kolkata fish merchants welcome the arrival of 500 tonnes of festive Hilsa consignments via land route.'
    ],
    category: 'trade',
    categoryLabel: 'Cross-Border Trade',
    sentiment: 'positive',
    sentimentLabel: 'Positive on Bangladesh',
    sentimentReason: 'Highlights smooth economic cooperation, record cargo clearance, and mutual business benefits between Kolkata and Bangladesh.',
    source: {
      name: 'Anandabazar Patrika',
      bureau: 'Kolkata',
      language: 'Bengali',
      originalUrl: 'https://www.anandabazar.com/west-bengal/petrapole-benapole-border-trade-hits-record-daily-trucks/cid/15421',
      originalHeadline: 'পেট্রাপোল-বেনাপোল সীমান্তে রেকর্ড বাণিজ্য: চব্বিশ ঘণ্টা পণ্য চলাচলে স্বস্তি দুই পারের ব্যবসায়ীদের',
      scannedAt: '25 mins ago',
    },
    publishedAt: '2026-09-12T07:45:00Z',
    readTime: '3 min read',
    imageUrl: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&auto=format&fit=crop&q=80',
    isTrending: true,
    tags: ['Petrapole', 'Benapole', 'Border Trade', 'Hilsa', 'RMG Supply Chain', 'Kolkata'],
    audioDuration: '3:10',
  },
  {
    id: '3',
    slug: 'dainik-jagran-border-security-bsf-smuggling-curfew',
    title: 'BSF Tightens Night Surveillance Along Indo-Bangla Border In Meghalaya and North Bengal Over Infiltration Concerns',
    summary: 'Dainik Jagran reports that the Border Security Force (BSF) eastern command has deployed additional thermal imaging cameras and drone surveillance along unfenced patches in Meghalaya and Cooch Behar. The report cites intelligence inputs regarding smuggling cartels attempting to exploit political transitions in Dhaka, prompting joint patrolling and border curfew enforcement in sensitive frontier sectors.',
    keyPoints: [
      'BSF battalions in Meghalaya and Assam sectors issued heightened red-alerts for night-time patrols.',
      'Seizures of contraband and unauthorized crossing attempts increased by 14% along riverine unfenced patches.',
      'Indian Home Ministry officials in Delhi urge Border Guard Bangladesh (BGB) to maintain synchronized border flag meetings.'
    ],
    category: 'border',
    categoryLabel: 'Border & Security',
    sentiment: 'negative',
    sentimentLabel: 'Negative / Critical',
    sentimentReason: 'Focuses on cross-border infiltration risks, smuggling concerns, and border tensions flagged by Indian security forces.',
    source: {
      name: 'Dainik Jagran',
      bureau: 'Delhi',
      language: 'Hindi',
      originalUrl: 'https://www.jagran.com/news/national-bsf-high-alert-on-india-bangladesh-meghalaya-border-238491.html',
      originalHeadline: 'भारत-बांग्लादेश सीमा पर बीएसएफ का हाई अलर्ट: मेघालय और कूचबिहार में ड्रोन से पैनी निगरानी',
      scannedAt: '40 mins ago',
    },
    publishedAt: '2026-09-12T06:30:00Z',
    readTime: '4 min read',
    imageUrl: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=1200&auto=format&fit=crop&q=80',
    isTrending: true,
    tags: ['BSF', 'Border Security', 'Meghalaya', 'Smuggling', 'Infiltration', 'Dainik Jagran'],
    audioDuration: '3:20',
  },
  {
    id: '4',
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
      scannedAt: '1 hour ago',
    },
    publishedAt: '2026-09-12T05:00:00Z',
    readTime: '5 min read',
    imageUrl: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1200&auto=format&fit=crop&q=80',
    tags: ['The Hindu Editorial', 'Diplomacy', 'Visas', 'Foreign Policy', 'South Block'],
    audioDuration: '4:00',
  },
  {
    id: '5',
    slug: 'ei-samay-medical-tourism-kolkata-hospitals-bangladesh-patients',
    title: 'Kolkata Hospitals Experience 40% Drop in International Patient Footfall Due to Bangladesh Visa Curtailments',
    summary: 'Ei Samay (Times Group Bengali) reports on the severe economic impact felt by private hospital networks in Mukundapur and Salt Lake, Kolkata. Medical travel from Bangladesh, which traditionally constituted over 70% of Kolkata’s medical tourism revenue, has dropped sharply due to restricted visa appointment slots, prompting healthcare associations to appeal to the Ministry of External Affairs for emergency medical e-visas.',
    keyPoints: [
      'Major private hospitals in Kolkata report empty international patient suites and deferred specialized surgeries.',
      'An estimated ₹350 Crore monthly revenue loss reported across private clinics, diagnostic labs, and nearby guest houses.',
      'West Bengal health associations submit joint memorandum to MEA seeking fast-track medical e-visa clearance.'
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
    id: '6',
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
      scannedAt: '3 hours ago',
    },
    publishedAt: '2026-09-11T19:40:00Z',
    readTime: '3 min read',
    imageUrl: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?w=1200&auto=format&fit=crop&q=80',
    tags: ['Adani Power', 'BPDB', 'Energy Trade', 'Electricity Grid', 'Business Standard'],
  },
  {
    id: '7',
    slug: 'sangbad-pratidin-cricket-bangladesh-india-bilateral-series-kolkata',
    title: 'Cricket Diplomacy: CAB President Welcomes Bangladesh Squad for Eden Gardens Test and T20 Warmups',
    summary: 'Sangbad Pratidin reports from the Cricket Association of Bengal (CAB) headquarters at Eden Gardens. Preparations are underway for the bilateral series fixtures, with Kolkata fans and diaspora communities expressing enthusiasm for competitive cricket between the Tigers and Team India.',
    keyPoints: [
      'Eden Gardens groundsmen prepare sporting pitches with high carry for the upcoming international fixtures.',
      'BCB and BCCI officials confirm full security protocol coordination with Kolkata Police.',
      'Sports commentators highlight the passionate rivalry and high television viewership generated across Bengal.'
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
    id: '8',
    slug: 'amar-ujala-tripura-transit-chittagong-port-connectivity',
    title: 'Tripura Government Urges Expedited Cargo Transit Protocols Through Chittagong and Mongla Ports',
    summary: 'Amar Ujala reports from Agartala that the state administration has requested the central commerce ministry in Delhi to finalize simplified digital manifest rules for goods moving from mainland India to the Northeast via Chittagong Port and the Maitri Setu bridge over the Feni River.',
    keyPoints: [
      'Transit route via Chittagong Port cuts freight distance from Kolkata to Agartala from 1,650 km to under 500 km.',
      'Customs automation and container tracking trials completed at Sabroom integrated check post.',
      'Northeastern business chambers project a 40% reduction in commodity transportation prices.'
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
      scannedAt: '5 hours ago',
    },
    publishedAt: '2026-09-11T13:20:00Z',
    readTime: '4 min read',
    imageUrl: 'https://images.unsplash.com/photo-1545459720-aac8509eb02c?w=1200&auto=format&fit=crop&q=80',
    tags: ['Tripura', 'Chittagong Port', 'Maitri Setu', 'Northeast Transit', 'Amar Ujala'],
  }
];
