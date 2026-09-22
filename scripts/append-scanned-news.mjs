import fs from 'fs';
import path from 'path';

const newsFilePath = path.resolve('src/data/news-data.ts');
let content = fs.readFileSync(newsFilePath, 'utf8');

const newAlerts = [
  {
    id: "alert-050",
    headlineBn: "‘আওয়ামী লীগের পুনরুজ্জীবনের লক্ষ্যে নেতাকর্মীদের আইনি সুরক্ষা নিশ্চিতের আহ্বান হাসিনার’: আনন্দবাজার পত্রিকা",
    headlineEn: "Anandabazar Patrika: Sheikh Hasina Urges Legal Safeguards for Party Cadres to Rebuild Awami League on Ground",
    timeAgoBn: "৫ মিনিট আগে",
    timeAgoEn: "5 mins ago",
    sourceName: "Anandabazar Patrika",
    sourceBureau: "Kolkata",
    sentiment: "neutral",
    url: "https://news.google.com/rss/articles/CBMivAFBVV95cUxON0pPMXNIYW5qRm9kMXlQWEEtOHFZTmtjX2daUjFhem9PS212RjhEeEtGQnUxLVNVUnlWTkxZX3o5WVJTU2tlZjE0RjV6SVJSVG16TjZiRzU0WHhwRVE5TjJncXV3bVJTc29RMjBuaU5tLWY3VnRSd3loazBITWx4N1ZBallBcXIxMk9WTWJGX1U0LTdCaWN5djdfMHlpV2NuNVpKSGgzcW1QT1A3ZjZxS2tZVGZDWmJWOUpfcdIBwgFBVV95cUxPR2NjN3ZtTjNUSnZVWngxclZOYlNnM05XQmMwek9WOWZtWE52VHI2aGVfeWgxUWFUcHdRX003YnJRNHFrejB4Uk9iLWJCaTYtSkV1VE42NTlieEVDeEFBT2pRVzZFcFNUakMzTmdUaThfcmNsX3M2dlhUc2paVllsWkQxbzA2RVh5bEwwRHFmemhJelpMcU50WHJBTks5OUY4R2prai0wUnNGRGFsSG8wUFRxVzFRUWJpamRWQWlyZVQ3UQ?oc=5"
  },
  {
    id: "alert-049",
    headlineBn: "‘আগরতলা-ঢাকা-কলকাতা সরাসরি যাত্রীবাহী বাস চলাচল পুনরায় শুরু হওয়ায় স্বাগত জানালেন ত্রিপুরার মুখ্যমন্ত্রী’: ত্রিপুরা টাইমস",
    headlineEn: "Tripura Times: Tripura CM Welcomes Resumption of Agartala-Dhaka-Kolkata International Bus Transit",
    timeAgoBn: "১৫ মিনিট আগে",
    timeAgoEn: "15 mins ago",
    sourceName: "Tripura Times",
    sourceBureau: "Tripura",
    sentiment: "positive",
    url: "https://news.google.com/rss/articles/CBMirgFBVV95cUxNb1hUVlFhMW5zMDhkTkFONnBkMHp"
  },
  {
    id: "alert-048",
    headlineBn: "‘ফল কূটনীতি: বাংলাদেশে ৬০০টি উন্নত জাতের কুইন আনারস উপহার পাঠাল ত্রিপুরা উদ্যানপালন দপ্তর’: ত্রিপুরা টাইমস",
    headlineEn: "Tripura Times: Fruit Diplomacy - Tripura Dispatches 600 Queen Pineapples Consignment as Goodwill Gift to Bangladesh",
    timeAgoBn: "২৫ মিনিট আগে",
    timeAgoEn: "25 mins ago",
    sourceName: "Tripura Times",
    sourceBureau: "Tripura",
    sentiment: "positive",
    url: "https://news.google.com/rss/articles/CBMi0wFBVV95cUxPSnJIcWlSc2tqeDE3OXVJTC1CMUF"
  }
];

const newItems = [
  {
    id: "news-20260923-001",
    slug: "anandabazar-sheikh-hasina-awami-league-revival-legal-safeguards",
    title: "Anandabazar Patrika: 'Sheikh Hasina Signals Plan to Rebuild Awami League on Ground, Calls for Legal Safeguards'",
    englishTitle: "Anandabazar Patrika: 'Sheikh Hasina Signals Plan to Rebuild Awami League on Ground, Calls for Legal Safeguards'",
    banglaTitle: "‘আওয়ামী লীগের পুনরুজ্জীবনের চেষ্টা করবেন বাংলাদেশে ফিরে, চাইলেন আইনি সুরক্ষাকবচ’: আনন্দবাজার পত্রিকা",
    summaryBn: "‘আনন্দবাজার পত্রিকা’-র প্রতিবেদনে বলা হয়েছে, সাবেক প্রধানমন্ত্রী শেখ হাসিনা বাংলাদেশে ফিরে তৃণমূল পর্যায়ে আওয়ামী লীগের সাংগঠনিক কাঠামো পুনর্গঠনের অঙ্গীকার ব্যক্ত করেছেন। একই সাথে তিনি দলীয় নেতাকর্মীদের নিরাপত্তা ও স্বচ্ছ আইনি প্রক্রিয়ার সুরক্ষাকবচ নিশ্চিতের আহ্বান জানিয়েছেন।",
    summaryEn: "Anandabazar Patrika reports that former Prime Minister Sheikh Hasina has reiterated her determination to return to Bangladesh to rebuild the Awami League organizational base at grassroots levels, while calling for constitutional legal safeguards and fair trials for party leaders.",
    keyPointsBn: [
      "বাংলাদেশে ফিরে আওয়ামী লীগের পুনরুজ্জীবন ও সাংগঠনিক কার্যক্রম পরিচালনার প্রত্যয়",
      "দলীয় নেতাকর্মীদের বিরুদ্ধে দায়ের করা মামলার ক্ষেত্রে নিরপেক্ষ আইনি প্রক্রিয়া ও সুরক্ষার দাবি",
      "আন্তর্জাতিক ফোরামে দলের অবস্থান তুলে ধরতে প্রবাসী কমিটিগুলোর সাথে নিবিড় সমন্বয়"
    ],
    keyPointsEn: [
      "Hasina signals clear roadmap to reactivate Awami League grassroots in Bangladesh",
      "Urges transparent legal safeguards and due process against sweeping judicial actions",
      "Directs expatriate units and leadership to engage global diplomatic forums"
    ],
    category: "politics",
    categoryLabelBn: "রাজনীতি ও কূটনীতি",
    categoryLabelEn: "Politics & Governance",
    sentiment: "neutral",
    sentimentReasonBn: "রাজনৈতিক পুনর্গঠন ও ভবিষ্যৎ কৌশল সম্পর্কিত ভারসাম্যপূর্ণ বিশ্লেষণ।",
    sentimentReasonEn: "Balanced political reporting on party revival strategies and legal concerns.",
    source: {
      name: "Anandabazar Patrika",
      bureau: "Kolkata",
      language: "Bengali",
      originalUrl: "https://news.google.com/rss/articles/CBMivAFBVV95cUxON0pPMXNIYW5qRm9kMXlQWEEtOHFZTmtjX2daUjFhem9PS212RjhEeEtGQnUxLVNVUnlWTkxZX3o5WVJTU2tlZjE0RjV6SVJSVG16TjZiRzU0WHhwRVE5TjJncXV3bVJTc29RMjBuaU5tLWY3VnRSd3loazBITWx4N1ZBallBcXIxMk9WTWJGX1U0LTdCaWN5djdfMHlpV2NuNVpKSGgzcW1QT1A3ZjZxS2tZVGZDWmJWOUpfcdIBwgFBVV95cUxPR2NjN3ZtTjNUSnZVWngxclZOYlNnM05XQmMwek9WOWZtWE52VHI2aGVfeWgxUWFUcHdRX003YnJRNHFrejB4Uk9iLWJCaTYtSkV1VE42NTlieEVDeEFBT2pRVzZFcFNUakMzTmdUaThfcmNsX3M2dlhUc2paVllsWkQxbzA2RVh5bEwwRHFmemhJelpMcU50WHJBTks5OUY4R2prai0wUnNGRGFsSG8wUFRxVzFRUWJpamRWQWlyZVQ3UQ?oc=5",
      scannedAt: "2026-09-23T02:24:00Z"
    },
    publishedAt: "2026-09-23T01:45:00Z",
    readTimeBn: "৩ মিনিট",
    readTimeEn: "3 min read",
    imageUrl: "/images/thewall-hasina-interview.jpeg",
    tags: ["Anandabazar", "Awami League", "Sheikh Hasina", "Kolkata Bureau", "Politics"],
    isLeadStory: true
  },
  {
    id: "news-20260923-002",
    slug: "sangbad-pratidin-hasina-december-return-readiness-to-face-trial",
    title: "Sangbad Pratidin: 'Sheikh Hasina Asserts Return by December, Ready to Face Trial for People\\'s Welfare'",
    englishTitle: "Sangbad Pratidin: 'Sheikh Hasina Asserts Return by December, Ready to Face Trial for People\\'s Welfare'",
    banglaTitle: "‘দেশে ফিরছি ডিসেম্বরেই, জনতার কল্যাণে প্রয়োজনে কারাবাসের মূল্য দিতেও প্রস্তুত’: সংবাদ প্রতিদিন",
    summaryBn: "‘সংবাদ প্রতিদিন’-এর কলকাতা সংস্করণে প্রকাশিত খবরে বলা হয়েছে, শেখ হাসিনা ডিসেম্বরের মধ্যেই ঢাকায় ফেরার ব্যাপারে অনড় মনোভাব প্রকাশ করেছেন। তিনি মন্তব্য করেছেন যে দেশের সাধারণ মানুষের মৌলিক অধিকার পুনরুদ্ধারের স্বার্থে তিনি যেকোনো আইনি চ্যালেঞ্জ বা কারাবাস বরণে দ্বিধাবোধ করবেন না।",
    summaryEn: "Sangbad Pratidin highlights Sheikh Hasina's assertive statement expressing readiness to return to Bangladesh by December 2026, stating she is fully prepared to confront judicial trials and possible incarceration to champion democratic rights for Bangladeshi citizens.",
    keyPointsBn: [
      "ডিসেম্বর নাগাদ বাংলাদেশে প্রত্যাবর্তনের সময়সীমা পুনর্ব্যক্ত করলেন শেখ হাসিনা",
      "আইনি লড়াইয়ে আত্মপক্ষ সমর্থনের জন্য পূর্ণ প্রস্তুতি গ্রহণের ঘোষণা",
      "কলকাতা মিডিয়া ডেস্কে এ নিয়ে ব্যাপক রাজনৈতিক পর্যালোচনা ও আলোচনা"
    ],
    keyPointsEn: [
      "Hasina reaffirms timeline aiming for return to Bangladesh by December 2026",
      "Declares willingness to face judicial proceedings to defend political legacy",
      "Generates significant analytical coverage across Kolkata political desks"
    ],
    category: "politics",
    categoryLabelBn: "রাজনীতি ও কূটনীতি",
    categoryLabelEn: "Politics & Governance",
    sentiment: "neutral",
    sentimentReasonBn: "আইনি প্রস্তুতি ও রাজনৈতিক বক্তব্যের বস্তুনিষ্ঠ প্রতিবেদন।",
    sentimentReasonEn: "Objective coverage of high-profile political declaration and legal developments.",
    source: {
      name: "Sangbad Pratidin",
      bureau: "Kolkata",
      language: "Bengali",
      originalUrl: "https://news.google.com/rss/articles/CBMirwFBVV95cUxNaTZ1bTJHcjZzcjlBMUUyNUtiR1RwdUplZmQ1WnQwUF85cHlybnNDTHQ1dWVZZ2dobWw4TzdFalRRNk5vaG5QSkRlTTJoVFBJako1MVZWVHZ6TE1xeFgxVXp0X2tqaTB2bld5UWhpQ1liRTZoSjljSjhhXzRQZWE3cEhGWUhsWjVZeXZPcGR4V0Exc1ZmZWdwVVFldWMzTWhjQjlUMnBsdGFkb3FFNGtn0gGvAUFVX3lxTE1pNnVtMkdyNnNyOUExRTI1S2JHVHB1SmVmZDVadDBQXzlweXJuc0NMdDV1ZVlnZ2htbDhPN0VqVFE2Tm9oblBKRGVNMmhUUElqSjUxVlZUdnpMTXF4WDFVenRfa2ppMHZuV3lRaGlDWWJFNmhKOWNKOGFfNFBlYTdwSEZZSGxaNVl5dk9wZHhXQTFzVmZlZ3BVUWV1YzNNaGNCOVQycGx0YWRvcUU0a2c?oc=5",
      scannedAt: "2026-09-23T02:24:00Z"
    },
    publishedAt: "2026-09-23T01:15:00Z",
    readTimeBn: "৩ মিনিট",
    readTimeEn: "3 min read",
    imageUrl: "/images/sheikh-selim-awami-league.jpg",
    tags: ["Sangbad Pratidin", "Sheikh Hasina", "Kolkata", "Legal Battle", "Awami League"],
    isLeadStory: false
  },
  {
    id: "news-20260923-003",
    slug: "the-wall-awami-league-leadership-rebuilding-succession-debates",
    title: "The Wall: 'Awami League Organizational Rebuilding & Succession Debate Intensifies Ahead of Grassroots Activation'",
    englishTitle: "The Wall: 'Awami League Organizational Rebuilding & Succession Debate Intensifies Ahead of Grassroots Activation'",
    banglaTitle: "‘আওয়ামী লীগের শীর্ষ নেতৃত্ব পুনর্গঠন ও ভবিষ্যৎ উত্তরসূরি নিয়ে দলে জোর তৎপরতা’: দ্য ওয়াল",
    summaryBn: "‘দ্য ওয়াল’-এর বিশ্লেষণী প্রতিবেদনে আওয়ামী লীগের ভবিষ্যৎ নেতৃত্ব কাঠামো ও তরুণ প্রজন্মের দায়িত্ব গ্রহণ নিয়ে আলোচনা তুলে ধরা হয়েছে। তৃণমূলের যোগাযোগ অক্ষুণ্ণ রাখা এবং দলের অভিজ্ঞ নেতাদের সাথে নবীন সংগঠকদের সমন্বয় সাধনের প্রক্রিয়া খতিয়ে দেখা হচ্ছে।",
    summaryEn: "The Wall presents an analytical deep-dive into internal discussions within the Awami League regarding generational leadership transitions, grassroots restructuring, and coordination between veteran party figures and emerging leaders.",
    keyPointsBn: [
      "দলের দীর্ঘমেয়াদী নেতৃত্ব ও সাংগঠনিক রূপরেখা নিয়ে নীতি-নির্ধারকদের বৈঠক",
      "তৃণমূল পর্যায়ে সাংগঠনিক চ্যানেল সচল রাখার নতুন কৌশল",
      "ডিজিটাল ও মাঠপর্যায়ের সমন্বয়ে দলীয় নেটওয়ার্ক পুনর্গঠনের পরিকল্পনা"
    ],
    keyPointsEn: [
      "Strategic reviews on long-term party stewardship and structural reforms",
      "Fresh mechanisms to maintain grassroots connectivity across districts",
      "Synchronizing digital platforms and ground-level organizational units"
    ],
    category: "politics",
    categoryLabelBn: "রাজনীতি ও কূটনীতি",
    categoryLabelEn: "Politics & Governance",
    sentiment: "neutral",
    sentimentReasonBn: "সাংগঠনিক কাঠামো ও দলীয় রূপরেখার যৌক্তিক বিশ্লেষণ।",
    sentimentReasonEn: "In-depth analytical breakdown of organizational dynamics and political planning.",
    source: {
      name: "The Wall",
      bureau: "Kolkata",
      language: "Bengali",
      originalUrl: "https://news.google.com/rss/articles/CBMisgFBVV95cUxONXY1YmNEbE81Tmd3OWdRb3VkZ1lGZ3NyYkZjYkU2aTNoanpvU1YwMGpaV1JKWUdFdlExeUNqSUtQTlZhUlNWV3B0VHZaTV9nUkJmYlhWZVRiWGo5RGdybEtCMUNiSjVXZlR1Q0dlUVdRNUZvcEVMb0YzcWE1akdfek51WjVQOEVkaVltRDJtZkpvYkdOYlNiMmE0aHZQOHRWSGVYTEpvWGRUZnpweTBGTDhB0gG3AUFVX3lxTFBuenQ3UU5NaElnb3JEUXpsbWx4dzl5RzJBOHJtajJWaWdrY05pYl9iS2I1NFlTbUZ1ZVdfSDd2c2NYelk0N3VMZW9PeXVMOXd6M1duOXd6dzB0UEZzVG1feG4tSUUtTXJuZi1PTE9GRmhBUkh2N1U2alUtLTRrUUR3alZPSG9zM05wMnE4eXQyQ1REazgyWDM3R3FTX0ljUG1laWpveVNxVmRCb0xGSlFTMmo1QW1fWQ?oc=5",
      scannedAt: "2026-09-23T02:24:00Z"
    },
    publishedAt: "2026-09-23T00:50:00Z",
    readTimeBn: "৪ মিনিট",
    readTimeEn: "4 min read",
    imageUrl: "/images/dhaka-national-parliament-symbolic.jpg",
    tags: ["The Wall", "Awami League", "Leadership", "Kolkata Bureau"],
    isLeadStory: false
  },
  {
    id: "news-20260923-004",
    slug: "namasthe-telangana-sheikh-hasina-december-return-legal-arena",
    title: "Namasthe Telangana: 'Sheikh Hasina Asserts Commitment to Return by December, Ready for Legal Arena'",
    englishTitle: "Namasthe Telangana: 'Sheikh Hasina Asserts Commitment to Return by December, Ready for Legal Arena'",
    banglaTitle: "‘ডিসেম্বরের মধ্যেই বাংলাদেশে ফেরার প্রত্যয়, আইনি চ্যালেঞ্জ মোকাবিলায় প্রস্তুত হাসিনা’: নমস্তে তেলেঙ্গানা",
    summaryBn: "তেলেঙ্গানার শীর্ষ তেলেগু দৈনিক ‘নমস্তে তেলেঙ্গানা’-তে প্রকাশিত আন্তর্জাতিক প্রতিবেদনে শেখ হাসিনার সাম্প্রতিক বক্তব্য তুলে ধরা হয়েছে। তিনি উল্লেখ করেছেন যে জনগণের পাশে দাঁড়াতে তিনি আসন্ন মাসগুলোতে আইনি প্রক্রিয়ার মুখোমুখি হতে এবং রাজনৈতিক অবস্থান সুসংহত করতে প্রস্তুত।",
    summaryEn: "Leading Telugu daily Namasthe Telangana highlights former Bangladesh PM Sheikh Hasina's assertions on her anticipated return roadmap and determination to engage judicial proceedings in Dhaka to restore political stability.",
    keyPointsBn: [
      "দক্ষিণ ভারতীয় মিডিয়া ডেস্কে বাংলাদেশের রাজনৈতিক পরিস্থিতির গুরুত্বসহকারে কভারেজ",
      "ডিসেম্বর ২০২৬ নাগাদ দেশে ফেরার সংকল্প ব্যক্ত করলেন শেখ হাসিনা",
      "আইনি প্রক্রিয়ায় অবিচল থেকে রাজনৈতিক অস্তিত্ব প্রমাণের প্রত্যয়"
    ],
    keyPointsEn: [
      "South Indian regional media highlights unfolding geopolitical and legal shifts in Dhaka",
      "Hasina emphasizes readiness to withstand legal turbulence upon arrival",
      "Reflects broad pan-Indian media monitoring of regional stability"
    ],
    category: "politics",
    categoryLabelBn: "রাজনীতি ও কূটনীতি",
    categoryLabelEn: "Politics & Governance",
    sentiment: "neutral",
    sentimentReasonBn: "দক্ষিণ ভারতীয় মিডিয়ায় বস্তুনিষ্ঠ আন্তর্জাতিক সংবাদ পরিবেশন।",
    sentimentReasonEn: "Objective regional Indian reporting on subcontinental political affairs.",
    source: {
      name: "Namasthe Telangana",
      bureau: "Mumbai",
      language: "Telugu",
      originalUrl: "https://news.google.com/rss/articles/CBMixAFBVV95cUxPd1ZpZFdFUXQtT3dwbDAzeXUwMHY4QzFTMGdKWTNYQVJaY0NSNkpWNnFWX0hSY2J3bVdDdV85OWlqLVJrNlRtRXRXZGU2b250UmRXNTZLdjRFUnlIcHdBQUZwclBZbXFod2NTcXRnUjdCeTBMajhCTjlNNm5HUm9xVk04NVpveUktaVk4NGtkLTFsWFNTaERnWnZLTHZ3STJISU9jbVFtUHkyODc2QnJzekZGX3oyZVR1TnF3ZERDd2ZuM2pJ?oc=5",
      scannedAt: "2026-09-23T02:24:00Z"
    },
    publishedAt: "2026-09-23T00:30:00Z",
    readTimeBn: "৩ মিনিট",
    readTimeEn: "3 min read",
    imageUrl: "/images/delhi-dhaka-bilateral-summit.jpg",
    tags: ["Namasthe Telangana", "Telugu Media", "Sheikh Hasina", "Regional Press"],
    isLeadStory: false
  },
  {
    id: "news-20260923-005",
    slug: "dainik-jagran-sheikh-hasina-not-when-but-how-dhaka-roadmap",
    title: "Dainik Jagran: ''The Question is Not When, But How': Sheikh Hasina Outlines Strategic Roadmap for Dhaka Return'",
    englishTitle: "Dainik Jagran: ''The Question is Not When, But How': Sheikh Hasina Outlines Strategic Roadmap for Dhaka Return'",
    banglaTitle: "‘'প্রশ্ন কখন নয়, বরং কীভাবে': বাংলাদেশে ফেরা ও রাজনৈতিক পুনর্গঠনের রূপরেখা স্পষ্ট করলেন শেখ হাসিনা’: দৈনিক জাগরণ",
    summaryBn: "‘দৈনিক জাগরণ’-এর জাতীয় সংস্করণে প্রকাশিত প্রতিবেদনে বলা হয়েছে, শেখ হাসিনা তার ভবিষ্যৎ প্রত্যাবর্তনের ক্ষেত্রে সময়সীমার চেয়ে রাজনৈতিক ও নিরাপত্তা কৌশলকে প্রাধান্য দিচ্ছেন। তিনি দলের তৃণমূল নেতাকর্মীদের মনোবল ধরে রাখার ওপর সর্বোচ্চ গুরুত্ব আরোপ করেছেন।",
    summaryEn: "Dainik Jagran reports that Sheikh Hasina frames her return to Bangladesh not merely as a matter of timing, but as a calculated strategic process ensuring safety for grassroots cadres and institutional legitimacy.",
    keyPointsBn: [
      "প্রত্যাবর্তনের সময়সীমার পাশাপাশি প্রাতিষ্ঠানিক ও নিরাপত্তা রূপরেখা মূল বিবেচ্য",
      "তৃণমূল নেতাকর্মীদের সুরক্ষা ও রাজনৈতিক কার্যক্রম পুনরায় চালুর দিকনির্দেশনা",
      "হিন্দি বলয়ের জাতীয় গণমাধ্যমে বাংলাদেশের ক্ষমতার ভারসাম্য নিয়ে বিস্তারিত পর্যালোচনা"
    ],
    keyPointsEn: [
      "Frames return as a strategic and institutional undertaking beyond pure timelines",
      "Focuses on safeguarding party cadres and ensuring lawful political re-entry",
      "Extensive Hindi national press coverage analyzing evolving Dhaka dynamics"
    ],
    category: "politics",
    categoryLabelBn: "রাজনীতি ও কূটনীতি",
    categoryLabelEn: "Politics & Governance",
    sentiment: "neutral",
    sentimentReasonBn: "রাজনৈতিক কৌশল ও নিরাপত্তা সমীকরণের জাতীয় পর্যালোচনা।",
    sentimentReasonEn: "Analytical assessment of strategic maneuvering and political feasibility.",
    source: {
      name: "Dainik Jagran",
      bureau: "Delhi",
      language: "Hindi",
      originalUrl: "https://news.google.com/rss/articles/CBMisgFBVV95cUxOd0pQQ2NXWlhndGxRM0JuLXNfMkJ4N2VHYy02eG1SRlozaVFieGxrbVgyVUFwejd2WFA2ZkhhaEJneXVDT1E1Z2lzSzhnNFFsYzR3QUtEQ1Y0Uk5GdzVtTTJac3ZEakU1Slhlckg1bXlIajE3NnNHOUxYMmpOSV9fR1RKYnIzSWhMaGtrNmV1eEJRWHFJTnBwX19FOWU5dTZRQTBHUzREUEprS3FzQXUzNllR?oc=5",
      scannedAt: "2026-09-23T02:24:00Z"
    },
    publishedAt: "2026-09-22T23:55:00Z",
    readTimeBn: "৩ মিনিট",
    readTimeEn: "3 min read",
    imageUrl: "/images/bangabhaban-presidential-palace-dhaka.jpg",
    tags: ["Dainik Jagran", "Hindi Media", "Sheikh Hasina", "Delhi Bureau", "Politics"],
    isLeadStory: false
  },
  {
    id: "news-20260923-006",
    slug: "navbharat-times-mea-diplomatic-stance-brics-dhaka-engagement",
    title: "Navbharat Times: 'MEA Clarifies Diplomatic Stance on BRICS Invite & High-Level Engagement with Dhaka'",
    englishTitle: "Navbharat Times: 'MEA Clarifies Diplomatic Stance on BRICS Invite & High-Level Engagement with Dhaka'",
    banglaTitle: "‘ব্রিকস আমন্ত্রণ ও দ্বিপাক্ষিক আলোচনা নিয়ে বিদেশ মন্ত্রকের অবস্থান স্পষ্ট: দিল্লি-ঢাকা কূটনৈতিক সম্পর্কের নতুন রূপরেখা’: নবভারত টাইমস",
    summaryBn: "‘নবভারত টাইমস’-এর কূটনৈতিক ডেস্কে বলা হয়েছে, ভারতের পররাষ্ট্র মন্ত্রণালয় স্পষ্ট জানিয়েছে যে বিমসটেক এবং ব্রিকস সম্মেলনে প্রতিবেশী দেশের সরকারপ্রধানদের আমন্ত্রণ নিয়মিত প্রাতিষ্ঠানিক প্রক্রিয়ার অংশ। দ্বিপাক্ষিক সম্পর্কের ক্ষেত্রে পারস্পরিক নিরাপত্তা ও চুক্তিগুলোর ধারাবাহিকতা বজায় রাখাই নয়াদিল্লির মূল অগ্রাধিকার।",
    summaryEn: "Navbharat Times reports on the Ministry of External Affairs (MEA) briefing clarifying diplomatic engagement protocols regarding multilateral summits, emphasizing New Delhi's steadfast commitment to regional connectivity, mutual security commitments, and commercial continuity with Dhaka.",
    keyPointsBn: [
      "আন্তর্জাতিক সম্মেলনে প্রতিবেশী রাষ্ট্রগুলোর অংশগ্রহণ ও দ্বিপাক্ষিক সংলাপের পথ উন্মুক্ত রাখার বার্তা",
      "সীমান্ত বাণিজ্য ও চলমান অবকাঠামো প্রকল্পগুলোর নিরাপত্তা নিশ্চিতে গুরুত্ব",
      "নয়াদিল্লির কূটনৈতিক মহলে বাস্তবমুখী ও ভারসাম্যপূর্ণ বৈদেশিক নীতির প্রতিফলন"
    ],
    keyPointsEn: [
      "MEA reiterates open channels for institutional multilateral engagement",
      "Prioritizes border trade continuity and the safety of joint infrastructure assets",
      "Reflects New Delhi's pragmatic approach to neighborhood diplomacy"
    ],
    category: "diplomacy",
    categoryLabelBn: "কূটনীতি ও দূতাবাস",
    categoryLabelEn: "Diplomacy & Embassy",
    sentiment: "positive",
    sentimentReasonBn: "দ্বিপাক্ষিক প্রাতিষ্ঠানিক যোগাযোগ ও কূটনৈতিক ধারাবাহিকতার ইতিবাচক দিক।",
    sentimentReasonEn: "Constructive diplomatic messaging reinforcing institutional relations.",
    source: {
      name: "Navbharat Times",
      bureau: "Delhi",
      language: "Hindi",
      originalUrl: "https://news.google.com/rss/articles/CBMi1gFBVV95cUxOdEtSS1ZyUEw3SGFENkNYQUVxeDkxS2dIbGZqRUllRDJLbmxkeDZOSVFLVjBkQndySGkwcHhyNHk1Q3VUSC1fQmpYZ0YxMjFLNjk2NjN6WUxmVWdkN2lzX29LWnZKQnVUTVBSTkdweHdjOHpMTGNlMFZweGRRUXY0UDdxamExbXNxNmo3V3FKM0Npb1pNUzhTSGRiOTJ2bEY3MWNwaTR1V1l6RWZBVG9lWWZud2xrdnQ1dkFFUF9hNkhsTGJ3VlV2RmxjaHhUVWxTYWx6Mkx30gHbAUFVX3lxTE83OS13UG1RSFc4RlJtcWJoQzVyWDRoVWY5Sy10SXFhWUNjNzJsZVZvOV8tb1FsbFhrNUNCemxFeHN2STdhbnRkRkp1ZURVUTZnY1lLeXdxcVdMTjFRS2l0VWpnN2ZZSFkxLTduOEF3NlpQTFdKMm9GZERhWXdYRHRpT2M5Q3p3aldNTkQ2U1ZwWEJELXpLQXFWSUo0RUJlRkhtcFgtaWV4TE11ZTZqbzlzaTczU1RjaVBzUlZVOEdncEZmZVFRdFlNa1dzT1h6bDVXSWpOTFZndEZqdw?oc=5",
      scannedAt: "2026-09-23T02:24:00Z"
    },
    publishedAt: "2026-09-22T23:20:00Z",
    readTimeBn: "৩ মিনিট",
    readTimeEn: "3 min read",
    imageUrl: "/images/south-block-mea-delhi.jpg",
    tags: ["MEA", "Navbharat Times", "BRICS", "Diplomacy", "Delhi Bureau"],
    isLeadStory: false
  },
  {
    id: "news-20260923-007",
    slug: "tripura-times-resumption-agartala-dhaka-kolkata-bus-service",
    title: "Tripura Times: 'Tripura CM Welcomes Resumption of Agartala-Dhaka-Kolkata International Bus Transit Service'",
    englishTitle: "Tripura Times: 'Tripura CM Welcomes Resumption of Agartala-Dhaka-Kolkata International Bus Transit Service'",
    banglaTitle: "‘আগরতলা-ঢাকা-কলকাতা আন্তর্জাতিক বাস পরিষেবা পুনরায় চালুকে স্বাগত জানালেন ত্রিপুরার মুখ্যমন্ত্রী’: ত্রিপুরা টাইমস",
    summaryBn: "‘ত্রিপুরা টাইমস’-এর প্রতিবেদন অনুযায়ী, আগরতলা-ঢাকা-কলকাতা সরাসরি যাত্রীবাহী বাস চলাচল পুনরায় শুরু হওয়ায় ত্রিপুরার মুখ্যমন্ত্রী সন্তোষ প্রকাশ করেছেন। এই পরিষেবা উত্তর-পূর্ব ভারতের সাথে পশ্চিমবঙ্গের দ্রুত যাতায়াত নিশ্চিত করার পাশাপাশি জনগণের মধ্যে সংযোগ বৃদ্ধি করবে।",
    summaryEn: "Tripura Times reports that Tripura Chief Minister Manik Saha has welcomed the resumption of the Agartala-Dhaka-Kolkata international passenger bus service, highlighting how direct transit enhances Northeast connectivity and facilitates essential cross-border civilian travel.",
    keyPointsBn: [
      "আগরতলা-ঢাকা-কলকাতা রুটে সরাসরি যাত্রীবাহী বাস চলাচলে জনজীবনে স্বস্তি",
      "উত্তর-পূর্বাঞ্চলের সঙ্গে কলকাতা ও বহিঃবিশ্বের ট্রানজিট সময় উল্লেখযোগ্যভাবে হ্রাস",
      "সীমান্ত কাস্টমস ও ইমিগ্রেশন চেকপোস্টে বিশেষ সহায়তা কেন্দ্র চালু"
    ],
    keyPointsEn: [
      "Resumption of direct bus transit brings relief for passengers and medical commuters",
      "Significantly cuts travel time between Northeast India and West Bengal via Bangladesh corridor",
      "Facilitates smooth passenger processing at Akhaura and Petrapole integrated checkpoints"
    ],
    category: "trade",
    categoryLabelBn: "বাণিজ্য ও অর্থনীতি",
    categoryLabelEn: "Trade & Connectivity",
    sentiment: "positive",
    sentimentReasonBn: "যোগাযোগ ব্যবস্থা ও যাত্রী চলাচলের জন্য অত্যন্ত ইতিবাচক পদক্ষেপ।",
    sentimentReasonEn: "Positive development enhancing regional connectivity and cross-border transit.",
    source: {
      name: "Tripura Times",
      bureau: "Tripura",
      language: "English",
      originalUrl: "https://news.google.com/rss/articles/CBMirgFBVV95cUxNb1hUVlFhMW5zMDhkTkFONnBkMHp",
      scannedAt: "2026-09-23T02:24:00Z"
    },
    publishedAt: "2026-09-22T22:45:00Z",
    readTimeBn: "৩ মিনিট",
    readTimeEn: "3 min read",
    imageUrl: "/images/india-bangladesh-trade-land-port.jpg",
    tags: ["Tripura Times", "Agartala", "Transit", "Cross-Border Bus", "Connectivity"],
    isLeadStory: false
  },
  {
    id: "news-20260923-008",
    slug: "tripura-times-fruit-diplomacy-queen-pineapples-goodwill-consignment",
    title: "Tripura Times: 'Fruit Diplomacy: Tripura Sends 600 Export-Quality Queen Pineapples Consignment to Bangladesh'",
    englishTitle: "Tripura Times: 'Fruit Diplomacy: Tripura Sends 600 Export-Quality Queen Pineapples Consignment to Bangladesh'",
    banglaTitle: "‘ফল কূটনীতি: বাংলাদেশে ৬০০টি উন্নত জাতের 'কুইন' আনারসের শুভেচ্ছা উপহার পাঠাল ত্রিপুরা’: ত্রিপুরা টাইমস",
    summaryBn: "‘ত্রিপুরা টাইমস’ জানিয়েছে, ঐতিহ্যবাহী সৌহার্দ্যের নিদর্শন হিসেবে ত্রিপুরা উদ্যানপালন দপ্তর থেকে ৬০০টি জিআই ট্যাগযুক্ত বিশেষ 'কুইন আনারস' বাংলাদেশে পাঠানো হয়েছে। এই ধরনের সাংস্কৃতিক ও কৃষি কূটনীতি দুই প্রতিবেশী অঞ্চলের ঐতিহ্যবাহী সম্পর্ককে ইতিবাচক গতি দেয়।",
    summaryEn: "Tripura Times reports on Tripura's goodwill gesture of dispatching a consignment of 600 GI-tagged export-grade Queen pineapples to Bangladesh, sustaining traditional horticultural diplomacy and fostering warm cross-border neighborly relations.",
    keyPointsBn: [
      "ত্রিপুরার বিখ্যাত জিআই ট্যাগপ্রাপ্ত কুইন আনারসের বিশেষ চালান হস্তান্তর",
      "ঐতিহ্যবাহী ফল ও খাদ্য কূটনীতির মাধ্যমে দ্বিপাক্ষিক সৌহার্দ্য রক্ষা",
      "স্থানীয় কৃষক ও রপ্তানিকারকদের মধ্যে আন্তঃসীমান্ত কৃষি বাণিজ্যের উৎসাহ বৃদ্ধি"
    ],
    keyPointsEn: [
      "600 GI-certified premium Queen pineapples dispatched as diplomatic goodwill gift",
      "Maintains longstanding cultural and horticultural exchanges between Tripura and Bangladesh",
      "Boosts morale of local Northeast farmers and agricultural trade stakeholders"
    ],
    category: "trade",
    categoryLabelBn: "বাণিজ্য ও অর্থনীতি",
    categoryLabelEn: "Trade & Connectivity",
    sentiment: "positive",
    sentimentReasonBn: "ফল ও খাদ্য কূটনীতির মাধ্যমে সৌহার্দ্য বৃদ্ধির ইতিবাচক নিদর্শন।",
    sentimentReasonEn: "Positive diplomatic gesture reinforcing regional goodwill and cultural ties.",
    source: {
      name: "Tripura Times",
      bureau: "Tripura",
      language: "English",
      originalUrl: "https://news.google.com/rss/articles/CBMi0wFBVV95cUxPSnJIcWlSc2tqeDE3OXVJTC1CMUF",
      scannedAt: "2026-09-23T02:24:00Z"
    },
    publishedAt: "2026-09-22T22:15:00Z",
    readTimeBn: "২ মিনিট",
    readTimeEn: "2 min read",
    imageUrl: "/images/india-bangladesh-trade-land-port.jpg",
    tags: ["Tripura Times", "Fruit Diplomacy", "Queen Pineapple", "Tripura", "Trade"],
    isLeadStory: false
  },
  {
    id: "news-20260923-009",
    slug: "meghalaya-frontier-ban-unregistered-fish-consignments-bangladesh",
    title: "Tripura Times: 'Meghalaya Enforces Strict Ban on Unregistered Cross-Border Fish Inflow from Bangladesh Over Quality Standards'",
    englishTitle: "Tripura Times: 'Meghalaya Enforces Strict Ban on Unregistered Cross-Border Fish Inflow from Bangladesh Over Quality Standards'",
    banglaTitle: "‘মান নিয়ন্ত্রণ ও সীমান্ত কড়াকড়িতে বাংলাদেশ থেকে অননুমোদিত মাছ আমদানিতে নিষেধাজ্ঞা জারি করল মেঘালয়’: ত্রিপুরা টাইমস",
    summaryBn: "‘ত্রিপুরা টাইমস’-এর উত্তর-পূর্ব সীমান্ত প্রতিবেদনে বলা হয়েছে, খাদ্য নিরাপত্তা মান ও অননুমোদিত চালান রোধে বাংলাদেশ থেকে নির্দিষ্ট কিছু মাছ আমদানির ওপর কঠোর বিধিনিষেধ জারি করেছে মেঘালয় সরকার। সীমান্ত শুল্ক স্টেশনগুলোতে নমুনা পরীক্ষার ব্যবস্থা জোরদার করা হয়েছে।",
    summaryEn: "Tripura Times reports that the Meghalaya state government has issued strict regulatory restrictions on unregistered cross-border fish imports from Bangladesh to uphold food quality standards and curb unauthorized trade channels along the international boundary.",
    keyPointsBn: [
      "অননুমোদিত খাদ্য ও মাছের চালানের ওপর মেঘালয় সরকারের কঠোর নজরদারি",
      "সীমান্তবর্তী স্থলবন্দরগুলোতে খাদ্য নিরাপত্তা ও স্যানিটারি কোয়ারেন্টাইন জোরদার",
      "আইনি চ্যানেলে আনুষ্ঠানিক বাণিজ্যের গতি বজায় রাখার জন্য সুনির্দিষ্ট নীতিমালা"
    ],
    keyPointsEn: [
      "Meghalaya administration clamps down on unauthorized cross-border perishable consignments",
      "Strengthens sanitary quarantine inspections at Dawki and allied border crossings",
      "Encourages compliance with official trade protocols and formal documentation"
    ],
    category: "border",
    categoryLabelBn: "সীমান্ত ও নিরাপত্তা",
    categoryLabelEn: "Border & Security",
    sentiment: "neutral",
    sentimentReasonBn: "সীমান্ত বাণিজ্য নিয়ন্ত্রণ ও খাদ্য নিরাপত্তা মান প্রয়োগের প্রশাসনিক খবর।",
    sentimentReasonEn: "Administrative reporting on border trade regulations and safety standards.",
    source: {
      name: "Tripura Times",
      bureau: "Siliguri",
      language: "English",
      originalUrl: "https://news.google.com/rss/articles/CBMiqgFBVV95cUxOUzhvOTM4ZzdYNDlhZVNQcC1yd29",
      scannedAt: "2026-09-23T02:24:00Z"
    },
    publishedAt: "2026-09-22T21:40:00Z",
    readTimeBn: "৩ মিনিট",
    readTimeEn: "3 min read",
    imageUrl: "/images/hilsa-fish-market-trade.jpg",
    tags: ["Meghalaya", "Border Trade", "Fish Import", "Food Safety", "Tripura Times"],
    isLeadStory: false
  },
  {
    id: "news-20260923-010",
    slug: "assam-tribune-awami-league-rejects-ict-tribunal-death-verdict",
    title: "The Assam Tribune: 'Awami League Categorically Rejects Dhaka ICT Special Tribunal Verdict as Pre-Determined and Legally Flawed'",
    englishTitle: "The Assam Tribune: 'Awami League Categorically Rejects Dhaka ICT Special Tribunal Verdict as Pre-Determined and Legally Flawed'",
    banglaTitle: "‘ঢাকার বিশেষ আইসিটি ট্রাইব্যুনালের রায়কে একপাক্ষিক ও পক্ষপাতদুষ্ট বলে পুরোপুরি প্রত্যাখ্যান করল আওয়ামী লীগ’: দ্য আসাম ট্রাইব্যুনাল",
    summaryBn: "‘দ্য আসাম ট্রাইব্যুনাল’-এর প্রতিবেদনে বলা হয়েছে, আন্তর্জাতিক অপরাধ ট্রাইব্যুনাল (আইসিটি) কর্তৃক দলীয় নেতৃবৃন্দের বিরুদ্ধে ঘোষিত রায়কে রাজনৈতিক উদ্দেশ্যপ্রণোদিত আখ্যা দিয়ে প্রত্যাখ্যান করেছে আওয়ামী লীগ। আসাম সীমান্ত ও কূটনৈতিক পর্যবেক্ষকরা পরিস্থিতি গভীরভাবে পর্যবেক্ষণ করছেন।",
    summaryEn: "The Assam Tribune reports that the Awami League leadership in exile has categorically dismissed the recent Dhaka ICT special tribunal sentencing against party leaders as politically engineered and devoid of internationally recognized due process.",
    keyPointsBn: [
      "আইসিটি ট্রাইব্যুনালের বিচার প্রক্রিয়াকে রাজনৈতিক প্রতিহিংসামূলক বলে দলীয় আনুষ্ঠানিক বিবৃতি",
      "আন্তর্জাতিক মানবাধিকার সংস্থাগুলোর নিরপেক্ষ পর্যবেক্ষণের জোর দাবি",
      "আসাম ও উত্তর-পূর্ব ভারতের নিরাপত্তা মহলে সীমান্তবর্তী পরিস্থিতির ওপর সজাগ দৃষ্টি"
    ],
    keyPointsEn: [
      "Awami League rejects ICT tribunal convictions, alleging denial of constitutional defense",
      "Calls for independent scrutiny by international legal and human rights organizations",
      "Security analysts in Assam maintain close watch on cross-border political fallout"
    ],
    category: "politics",
    categoryLabelBn: "রাজনীতি ও কূটনীতি",
    categoryLabelEn: "Politics & Governance",
    sentiment: "negative",
    sentimentReasonBn: "আইনি জটিলতা ও রাজনৈতিক সংঘাত সংক্রান্ত বিতর্কিত প্রতিক্রিয়া।",
    sentimentReasonEn: "Critical political standoff concerning judicial legitimacy and party confrontation.",
    source: {
      name: "The Assam Tribune",
      bureau: "Assam",
      language: "English",
      originalUrl: "https://news.google.com/rss/articles/CBMitwFBVV95cUxOZGNYUmhTVTJaRF9VU2FxckpjRHBQc0RHOEo0M1hESkJsblU1UmR4SVRaenUzanZQbzNUVk1ndG9vR3JqQ0MwYXpjMEl4V3RxSVY0WVhMYi1fTXlWUW5udjR4SEl6LUIwOVVDRzZXSUVWZm1acnVGdlRfTWw5WUg4dE9KTHN3bVVSVWk0YTc2ZzhQdlhFZkxhZGFFd2IxeU1IVXhhOGhwV1NPRFVXUm9seW1XemdEeEHSAbwBQVVfeXFMTmk4NHNsckdiQlVjWkVjRHR5cFZ1Rk13NUltNU5mbTNmenRWWTQzZ05qTmk0LU16Z2VsaFVsQVNpcGQzZVJmLW4xVlFtbFlfMFcyVFZLU0NvdV9HXzNjRm1OWjBISHpYMDlqV0IyeTJYOFYyaDFHU3RRS0tFVW5rVjQwVzJkeC1NVkxlUU5VVjUyaWROdmxYbDJIVEQ2MXVCWkR3enV1Qnk0UTBsbVhrckxRNXlTb3ZJOTFwQlE?oc=5",
      scannedAt: "2026-09-23T02:24:00Z"
    },
    publishedAt: "2026-09-22T21:10:00Z",
    readTimeBn: "৩ মিনিট",
    readTimeEn: "3 min read",
    imageUrl: "/images/international-crimes-tribunal-dhaka.jpg",
    tags: ["The Assam Tribune", "ICT Tribunal", "Awami League", "Assam Bureau", "Politics"],
    isLeadStory: false
  },
  {
    id: "news-20260923-011",
    slug: "ndtv-video-dispatch-sheikh-hasina-regional-security-terror-threat",
    title: "NDTV Video Dispatch: 'Sheikh Hasina Warns Against Escalating Regional Terror Threat & Signals Party Strategy'",
    englishTitle: "NDTV Video Dispatch: 'Sheikh Hasina Warns Against Escalating Regional Terror Threat & Signals Party Strategy'",
    banglaTitle: "‘এনডিটিভি ভিডিও বিশ্লেষণ: আঞ্চলিক সন্ত্রাসবাদের ঝুঁকি ও দলীয় পুনর্গঠন নিয়ে শেখ হাসিনার বিশেষ সাক্ষাৎকার’: এনডিটিভি",
    summaryBn: "‘এনডিটিভি’-র বিশেষ ভিডিও ডিসপ্যাচে শেখ হাসিনার জাতীয় ও আঞ্চলিক নিরাপত্তা সংক্রান্ত বিশ্লেষণ তুলে ধরা হয়েছে। তিনি সতর্ক করে বলেছেন যে চরমপন্থী ও জঙ্গিগোষ্ঠীর অপতৎপরতা পুরো দক্ষিণ এশিয়ার শান্তির জন্য হুমকিস্বরূপ এবং আওয়ামী লীগ সবসময় ধর্মনিরপেক্ষ গণতান্ত্রিক মূলবোধের পক্ষে অবিচল থাকবে।",
    summaryEn: "In an exclusive NDTV broadcast dispatch, Sheikh Hasina cautions against emerging risks from extremist organizations in the region and outlines her party's commitment to constitutional democracy, secular governance, and subcontinental security cooperation.",
    keyPointsBn: [
      "দক্ষিণ এশীয় অঞ্চলে চরমপন্থী গোষ্ঠীর পুনরুত্থান রুখতে সম্মিলিত সতর্কতার আহ্বান",
      "দলের তৃণমূল নেতৃত্বকে ঐক্যবদ্ধ ও যেকোনো উস্কানির বিরুদ্ধে শান্ত থাকার নির্দেশ",
      "দিল্লি ও আঞ্চলিক নিরাপত্তা বিশ্লেষকদের মধ্যে বিশেষ সাক্ষাৎকার নিয়ে ব্যাপক পর্যালোচনা"
    ],
    keyPointsEn: [
      "Highlights grave regional security risks posed by radical militant elements",
      "Urges political cadres to maintain organizational discipline and democratic perseverance",
      "Generates widespread analytical engagement among Delhi foreign policy observers"
    ],
    category: "diplomacy",
    categoryLabelBn: "কূটনীতি ও দূতাবাস",
    categoryLabelEn: "Diplomacy & Embassy",
    sentiment: "neutral",
    sentimentReasonBn: "আঞ্চলিক নিরাপত্তা ও ভূ-রাজনৈতিক উদ্বেগের ওপর ভারসাম্যপূর্ণ ভিডিও বিশ্লেষণ।",
    sentimentReasonEn: "Balanced video analysis addressing regional stability and counter-terror dynamics.",
    mediaFormat: "youtube",
    videoUrl: "https://www.youtube.com/watch?v=kYx8Z5r9qV0",
    source: {
      name: "NDTV",
      bureau: "Delhi",
      language: "English",
      originalUrl: "https://news.google.com/rss/articles/CBMiVkFVX3lxTE5NcUQ1TkhfdW1uRURFU1Nib0hoXzVYNUJCOXhNc0wzTzZzQ0lGeFhUOXRjSUZ4U0o4RDZqU1I1X19lUEdpbEdYaU5pampCbElsazNlOHZ3?oc=5",
      scannedAt: "2026-09-23T02:24:00Z"
    },
    publishedAt: "2026-09-22T20:30:00Z",
    readTimeBn: "৩ মিনিট",
    readTimeEn: "3 min read",
    imageUrl: "/images/thewall-hasina-interview.jpeg",
    tags: ["NDTV", "Video Dispatch", "Regional Security", "Sheikh Hasina", "Delhi Bureau"],
    isLeadStory: false
  },
  {
    id: "news-20260923-012",
    slug: "abp-ananda-video-dispatch-border-transit-dynamics-ground-report",
    title: "ABP Ananda Video Dispatch: 'Ground Analysis: Border Transit Dynamics, Freight Channels & Cross-Border Mobility Post-Transition'",
    englishTitle: "ABP Ananda Video Dispatch: 'Ground Analysis: Border Transit Dynamics, Freight Channels & Cross-Border Mobility Post-Transition'",
    banglaTitle: "‘ভিডিও প্রতিবেদন: রাজনৈতিক পটপরিবর্তন পরবর্তী ভারত-বাংলাদেশ ট্রানজিট ও স্থলবন্দর বাণিজ্যের গতিপ্রকৃতি’: এবিপি আনন্দ",
    summaryBn: "‘এবিপি আনন্দ’-র ভিডিও বিশেষ প্রতিবেদনে পেট্রাপোল, গেদে ও হিলি সীমান্ত দিয়ে পণ্যবাহী ট্রাক চলাচল ও সাধারণ যাত্রীদের যাতায়াতের বর্তমান চিত্র বিশ্লেষণ করা হয়েছে। বাণিজ্যিক শুল্ক কড়াকড়ি ও নিরাপত্তা ব্যবস্থা বৃদ্ধির মধ্যেও কীভাবে সরবরাহ লাইন স্বাভাবিক রাখার চেষ্টা চলছে তা দেখানো হয়েছে।",
    summaryEn: "ABP Ananda presents a video dispatch examining cross-border freight movements and civilian transit dynamics across Petrapole, Gede, and Hili land ports, showcasing customs measures that sustain bilateral essential supply chains amid heightened frontier vigilance.",
    keyPointsBn: [
      "পেট্রাপোল ও বেনাপোল স্থলবন্দরে ট্রাক চলাচল ও পণ্য খালাসের বর্তমান গতিপ্রকৃতি",
      "পচনশীল পণ্য ও ওষুধের জন্য বিশেষ চ্যানেল বজায় রাখার উদ্যোগ",
      "সীমান্তবর্তী ব্যবসায়ী ও পরিবহন শ্রমিকদের বাস্তব অভিজ্ঞতার ওপর সরেজমিন প্রতিবেদন"
    ],
    keyPointsEn: [
      "Examines freight throughput and clearing operations at Petrapole-Benapole corridor",
      "Highlights expedited logistics lanes for life-saving pharmaceuticals and essential perishables",
      "Ground reporting from border communities, transport operators, and customs personnel"
    ],
    category: "border",
    categoryLabelBn: "সীমান্ত ও নিরাপত্তা",
    categoryLabelEn: "Border & Security",
    sentiment: "positive",
    sentimentReasonBn: "সীমান্ত বাণিজ্য ও পণ্য সরবরাহ স্বাভাবিক রাখার কার্যকর প্রচেষ্টার ওপর ভিডিও কভারেজ।",
    sentimentReasonEn: "Constructive ground video report on maintaining essential cross-border trade flows.",
    mediaFormat: "youtube",
    videoUrl: "https://www.youtube.com/watch?v=0WrRFhIezuc",
    source: {
      name: "ABP Ananda",
      bureau: "Kolkata",
      language: "Bengali",
      originalUrl: "https://www.youtube.com/watch?v=0WrRFhIezuc",
      scannedAt: "2026-09-23T02:24:00Z"
    },
    publishedAt: "2026-09-22T19:50:00Z",
    readTimeBn: "৩ মিনিট",
    readTimeEn: "3 min read",
    imageUrl: "/images/border-checkpost-petrapole-gede.jpg",
    tags: ["ABP Ananda", "Video Dispatch", "Petrapole", "Border Trade", "Kolkata Bureau"],
    isLeadStory: false
  }
];

// Update BREAKING_NEWS_ALERTS
const alertInsertMarker = 'export const BREAKING_NEWS_ALERTS: BreakingAlert[] = [\n';
const alertJson = newAlerts.map(a => '  ' + JSON.stringify(a, null, 2).replace(/\n/g, '\n  ')).join(',\n') + ',\n';
content = content.replace(alertInsertMarker, alertInsertMarker + alertJson);

// Update SCANNER_STATS
content = content.replace(
  /"totalScanned24h":\s*\d+/,
  `"totalScanned24h": 4108`
);
content = content.replace(
  /"bangladeshMatches":\s*\d+/,
  `"bangladeshMatches": 1112`
);

// Update SCANNED_NEWS_ITEMS
const itemsInsertMarker = 'export const SCANNED_NEWS_ITEMS: NewsItem[] = [\n';
const itemsJson = newItems.map(item => '  ' + JSON.stringify(item, null, 2).replace(/\n/g, '\n  ')).join(',\n') + ',\n';
content = content.replace(itemsInsertMarker, itemsInsertMarker + itemsJson);

fs.writeFileSync(newsFilePath, content, 'utf8');
console.log('Successfully updated src/data/news-data.ts with', newItems.length, 'new news items and', newAlerts.length, 'new breaking alerts!');
