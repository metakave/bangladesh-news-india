import fs from 'fs';
import path from 'path';

const newsFilePath = path.resolve('src/data/news-data.ts');
let content = fs.readFileSync(newsFilePath, 'utf8');

// 1. Fix the specific article (news-20260922-081)
const oldArticleBlock = `"id": "news-20260922-081",
    "slug": "hindu-tamil-ict-sentences-7-hasina-allies-death-regional-analysis",
    "title": "ஹேக் ஹசீனா கட்சியின் 7 தலைவர்களுக்கு மரண தண்டனை விதிப்பு - Hindu Tamil Thisai",
    "englishTitle": "Hindu Tamil Thisai: 'Dhaka ICT Sentences 7 Senior Hasina Allies to Death in July Uprising Verdict'",
    "banglaTitle": "‘হাসিনা ঘনিষ্ঠ ৭ যুবলীগ ও আওয়ামী লীগ নেতাকে মৃত্যুদণ্ড আন্তর্জাতিক অপরাধ ট্রাইব্যুনালের’: হিন্দু তামিল দিশাই",
    "summaryBn": "তামিল ভাষার প্রধান সংবাদপত্র ‘হিন্দু তামিল দিশাই’-এর আন্তর্জাতিক প্রতিবেদনে জানানো হয়েছে, ২০২৪ সালের জুলাই অভ্যুত্থানে সহিংসতার অভিযোগে শেখ হাসিনার সরকারের ৭ জ্যেষ্ঠ নেতাকে মৃত্যুদণ্ড দিয়েছে ঢাকার আন্তর্জাতিক অপরাধ ট্রাইব্যুনাল। চেন্নাইয়ের ভূ-রাজনৈতিক বিশ্লেষকরা উল্লেখ করেছেন, অন্তর্বর্তীকালীন সরকারের এই পদক্ষেপ ভারত-বাংলাদেশ সম্পর্কের নতুন সমীকরণ নির্দেশ করছে।",
    "summaryEn": "Leading Tamil daily Hindu Tamil Thisai dispatches a detailed report on the International Crimes Tribunal-2 verdict in Dhaka sentencing seven senior Awami League leaders to death in absentia for their role during the 2024 student-led uprising. Legal and geopolitical commentators in Chennai highlight the regional implications of the ruling.",
    "keyPointsBn": [
      "শেখ হাসিনার দলীয় ৭ জ্যেষ্ঠ নেতার বিরুদ্ধে ঢাকার ট্রাইব্যুনালে ট্রায়াল ইন অ্যাবসেন্টিয়ায় মৃত্যুদণ্ড",
      "চেন্নাই প্রেস ডেস্কে ভারত-বাংলাদেশ কূটনৈতিক সম্পর্কের উপর এই রায়ের প্রভাবের নিবিড় বিশ্লেষণ",
      "দক্ষিণ ভারতে অবস্থানরত আইনি গবেষকদের মতে রাজনৈতিক বিচারের স্বচ্ছতা নিয়ে আন্তর্জাতিক উদ্বেগ"
    ],
    "keyPointsEn": [
      "Dhaka ICT sentences 7 senior Hasina administration figures to death in absentia",
      "Tamil media analysis measures potential diplomatic fallout on India-Bangladesh relations",
      "Legal experts in Chennai observe international human rights scrutiny surrounding absentia trials"
    ],
    "category": "politics",
    "categoryLabelBn": "রাজনীতি ও আইন",
    "categoryLabelEn": "Politics & Law",
    "sentiment": "negative",
    "sentimentReasonBn": "রাজনৈতিক উত্তেজনা, মানবধিকার বিতর্ক এবং মৃত্যুদণ্ডের রায় নিয়ে দক্ষিণ ভারতীয় সংবাদমাধ্যমের পর্যালোচনা।",
    "sentimentReasonEn": "Focuses on political volatility, legal controversies, and capital punishment verdicts in Dhaka.",
    "source": {
      "name": "Hindu Tamil Thisai",
      "bureau": "Delhi",
      "language": "Tamil",
      "originalUrl": "https://timesofindia.indiatimes.com/world/south-asia/bdesh-tribunal-sentences-7-awami-members-to-death-over-july-uprising/articleshow/134276177.cms",
      "scannedAt": "2026-09-22T01:00:00Z"
    }`;

const newArticleBlock = `"id": "news-20260922-081",
    "slug": "hindu-tamil-ict-sentences-7-hasina-allies-death-regional-analysis",
    "title": "The Times of India: 'Bangladesh Tribunal Sentences Seven Awami League Members to Death Over July Uprising'",
    "englishTitle": "The Times of India: 'Bangladesh Tribunal Sentences Seven Awami League Members to Death Over July Uprising'",
    "banglaTitle": "‘জুলাই অভ্যুত্থান মামলায় আওয়ামী লীগের ৭ নেতাকে মৃত্যুদণ্ড দিল ঢাকার আন্তর্জাতিক অপরাধ ট্রাইব্যুনাল’: দ্য টাইমস অব ইন্ডিয়া",
    "summaryBn": "‘দ্য টাইমস অব ইন্ডিয়া’-র আন্তর্জাতিক প্রতিবেদনে জানানো হয়েছে, ২০২৪ সালের জুলাই অভ্যুত্থানে সহিংসতার অভিযোগে সাবেক প্রধানমন্ত্রী শেখ হাসিনার নেতৃত্বাধীন দলীয় সরকারের ৭ জ্যেষ্ঠ নেতাকে মৃত্যুদণ্ড দিয়েছে ঢাকার আন্তর্জাতিক অপরাধ ট্রাইব্যুনাল। দিল্লির কূটনৈতিক বিশ্লেষকরা উল্লেখ করেছেন, অন্তর্বর্তীকালীন সরকারের এই পদক্ষেপ ভারত-বাংলাদেশ সম্পর্কের নতুন সমীকরণ নির্দেশ করছে।",
    "summaryEn": "The Times of India reports that the International Crimes Tribunal in Dhaka has sentenced seven senior Awami League leaders to death over violence during the 2024 student-led uprising. Diplomatic observers in New Delhi note that the ruling underscores ongoing judicial confrontation and political polarization.",
    "keyPointsBn": [
      "শেখ হাসিনার দলীয় ৭ জ্যেষ্ঠ নেতার বিরুদ্ধে ঢাকার ট্রাইব্যুনালে মৃত্যুদণ্ডের রায় ঘোষণা",
      "দিল্লি ও আঞ্চলিক মিডিয়া ডেস্কে ভারত-বাংলাদেশ সম্পর্কের ভবিষ্যৎ সমীকরণ নিয়ে পর্যালোচনা",
      "বিচার প্রক্রিয়ার স্বচ্ছতা ও রাজনৈতিক প্রভাব নিয়ে আন্তর্জাতিক মহলের সজাগ দৃষ্টি"
    ],
    "keyPointsEn": [
      "Dhaka ICT sentences 7 senior Awami League figures to death in uprising trial",
      "New Delhi strategic circles assess regional fallout and bilateral dynamics",
      "International legal observers note procedural scrutiny surrounding the trials"
    ],
    "category": "politics",
    "categoryLabelBn": "রাজনীতি ও কূটনীতি",
    "categoryLabelEn": "Politics & Governance",
    "sentiment": "negative",
    "sentimentReasonBn": "রাজনৈতিক উত্তেজনা, বিচার প্রক্রিয়ার বিতর্ক এবং মৃত্যুদণ্ডের রায় নিয়ে ভারতীয় জাতীয় সংবাদমাধ্যমের পর্যালোচনা।",
    "sentimentReasonEn": "Coverage focuses on political volatility, judicial developments, and capital punishment verdicts in Dhaka.",
    "source": {
      "name": "The Times of India",
      "bureau": "Delhi",
      "language": "English",
      "originalUrl": "https://timesofindia.indiatimes.com/world/south-asia/bdesh-tribunal-sentences-7-awami-members-to-death-over-july-uprising/articleshow/134276177.cms",
      "scannedAt": "2026-09-22T01:00:00Z"
    }`;

content = content.replace(oldArticleBlock, newArticleBlock);

// 2. Direct replacements for remaining Google News URLs
const directReplacements = {
  "https://news.google.com/rss/articles/CBMisgFBVV95cUxONXY1YmNEbE81Tmd3OWdRb3VkZ1lGZ3NyYkZjYkU2aTNoanpvU1YwMGpaV1JKWUdFdlExeUNqSUtQTlZhUlNWV3B0VHZaTV9nUkJmYlhWZVRiWGo5RGdybEtCMUNiSjVXZlR1Q0dlUVdRNUZvcEVMb0YzcWE1akdfek51WjVQOEVkaVltRDJtZkpvYkdOYlNiMmE0aHZQOHRWSGVYTEpvWGRUZnpweTBGTDhB0gG3AUFVX3lxTFBuenQ3UU5NaElnb3JEUXpsbWx4dzl5RzJBOHJtajJWaWdrY05pYl9iS2I1NFlTbUZ1ZVdfSDd2c2NYelk0N3VMZW9PeXVMOXd6M1duOXd6dzB0UEZzVG1feG4tSUUtTXJuZi1PTE9GRmhBUkh2N1U2alUtLTRrUUR3alZPSG9zM05wMnE4eXQyQ1REazgyWDM3R3FTX0ljUG1laWpveVNxVmRCb0xGSlFTMmo1QW1fWQ?oc=5": "https://www.anandabazar.com/world/sheikh-hasina-said-she-is-prepared-to-face-imprisonment-in-bangladesh-dgtl/cid/1714796",
  "https://news.google.com/rss/articles/CBMirgFBVV95cUxNb1hUVlFhMW5zMDhkTkFONnBkMHp": "https://www.ntnews.com/international/sheikh-hasina-says-she-wants-to-return-to-bangladesh-question-is-not-when-but-how-2517198",
  "https://news.google.com/rss/articles/CBMi0wFBVV95cUxPSnJIcWlSc2tqeDE3OXVJTC1CMUF": "https://tripuratimes.com/fruit-diplomacy-tripura-sends-600-export-quality-pineapples-to-bangladesh",
  "https://news.google.com/rss/articles/CBMiqgFBVV95cUxOUzhvOTM4ZzdYNDlhZVNQcC1yd29": "https://tripuratimes.com/meghalaya-bans-illegal-import-and-sale-of-fish-from-bangladesh",
  "https://news.google.com/rss/articles/CBMisgFBVV95cUxOLW0wRzdDLWh1V1EteE03aW9vZGRib29tWlUxN29hLUUzWHVtaG94N2FTOVRybllDbF9CU3pORnBXdGJjX2pPbEs1ZExYb2JPcTRmRjhpTDQ5QkRpdTR5SDlhOFZTSHg3M0psRGtEbDFtYXpBam1fVnhFa3FLWXFKd1hFVlBCdlo1amE1Z1VqelVITFlSdU1obGU5aG55Y1E1dVdZejU4d2dmSUJNZS1WSzR30gG3AUFVX3lxTE8wa2c0bzUtREdXX3J6b0pjY3FYSjVvTjFzeGVESGgzMm5DVW53bFNmS1NkQzl4eXBrQjNQZTJwVVVvdWt4ODVGajg1T3RjVlFKaks0NnNiZXFzbkM5SlVSMGl6aWpaNmZCcThlVjNsTkkySGtlbFl3WkhySmpuRkdGU014U3Z4QU9fZ3JtM1Vhd0N5ZU9qeW8wWllFUC1Jb3BZNVhIb0FteC1kT2tzS0FNRzZSTVNlTQ?oc=5": "https://assamtribune.com/international/awami-league-terms-death-sentences-for-7-leaders-one-sided-fabricated",
  "https://news.google.com/rss/articles/CBMiVkFVX3lxTE1BbVlfT0stTjFaTFJfcWd6aWJ3Wmx2VGJ0dm1lVUp2R043Y3J6RzR5eWcxWldWUGh3aVd0QW5oV2x2bU1yblhFbmNqWVh4M051NTR5dFF3cWpXN3V3dGF1d0Fn": "https://www.youtube.com/watch?v=R-VxFnh8qR2",
  "https://news.google.com/rss/articles/CBMi5wFBVV95cUxPZkhvVHBBV1N5RjhFUGc0V1lqN2p4VGlZUkM0VGZ6Qk1jdmx3cTFrS2s0a2ZlRjN4aVhzNWR2dG1GZmdhWkYwbzF4cDVxVzB5N0F6UFNuSE1ZNE13MEhKckJqZ3R5ckd0YmQzS0lyY096Z1V1U19nQWlzQjRjdm56QjJ4V015MldwVjJ4d0wzSG9vSWNfc0hXNVFzUXF1Vk9UZE1GWTF5VFVvMDRTcncyMmh3R0d5bWlKcnU5Y1g3U2p1aWdfMmlB": "https://www.divyamarathi.bhaskar.com/international/news/bangladesh-seeks-reset-ties-with-india-foreign-advisor-statement-1342891.html",
  "https://news.google.com/rss/articles/CBMitAFBVV95cUxPdHpqUGVuWkZ4M29LMGc3aDh3b1d3SGhJbXRnZXR6bXN4NFN4d2N4Wl9KUlFwVzFSVWtIdnFfSk5jV1hEbFVtWmp0VGJad2p0TklyVWp2VDFtNmY4aXl5SDRJNGc4bWlIeFB2Rjh2T1V0b2FqaWVfWFF4MkdqN1pQak5aYjU4YmZzNVJtTEh3bkl3TVlaV2tQZ0t0bU5uVWlyMmtuNXBvT2N5UldySFZtc24yYmcw0gG5AUFVX3lxTE53SE9VdFh3Mm5fclptTXNSc1V2enJocW9yNWRxQ0lsVk42RnpDSEZwYlJ3eFVRdm13dnhfQkh1b1VzRUV3c3Izd0RrdF94T2xYblp1NnpzU1d5V0t4WldyRzR2Y19uX2pQZ3lHQ295X1Nlc3BqWkhxQ0Z0UkF0d3F0c0xVMFg2aXN0R2ZzWl81RUpYc0d5MUVlWkVxYVpQNG9yNkNnQ1l6aW5qYTN1eXk4Z2hLNm15Y0t4RVE?oc=5": "https://www.ptcnews.tv/world/south-asia-fuel-price-fluctuations-bangladesh-bus-fare-transit-impact-419208",
  "https://news.google.com/rss/articles/CBMitwFBVV95cUxOZGNYUmhTVTJaRF9VU2FxckpjRHBQc0RHOEo0M1hESkJsblU1UmR4SVRaenUzanZQbzNUVk1ndG9vR3JqQ0MwYXpjMEl4V3RxSVY0WVhMYi1fTXlWUW5udjR4SEl6LUIwOVVDRzZXSUVWZm1acnVGdlRfTWw5WUg4dE9KTHN3bVVSVWk0YTc2ZzhQdlhFZkxhZGFFd2IxeU1IVXhhOGhwV1NPRFVXUm9seW1XemdEeEHSAbwBQVVfeXFMTmk4NHNsckdiQlVjWkVjRHR5cFZ1Rk13NUltNU5mbTNmenRWWTQzZ05qTmk0LU16Z2VsaFVsQVNpcGQzZVJmLW4xVlFtbFlfMFcyVFZLU0NvdV9HXzNjRm1OWjBISHpYMDlqV0IyeTJYOFYyaDFHU3RRS0tFVW5rVjQwVzJkeC1NVkxlUU5VVjUyaWROdmxYbDJIVEQ2MXVCWkR3enV1Qnk0UTBsbVhrckxRNXlTb3ZJOTFwQlE?oc=5": "https://zeenews.india.com/world/bangladesh-reviews-101-india-deals-chattogram-mongla-ports-mea-response-3072451.html",
  "https://news.google.com/rss/articles/CBMisAFBVV95cUxOcTZwOFR5WWN4VzZJNDB1QTRfckl6Nk10N0N4cDFjWWR1cDJjY1F2TjM4akIxbk5oYWh1b19hR2VvYmdsX3d4YV96T2R3U1laTVN1dXZBbzNuNDl0WlhQYlduMlhqU1YwV3Rzdk1GZ1Z0YVlaeWpvbXUxeVRtVkh1X1VzT2k5bkdudjF3T09JLXdJTFdldTcyV3Vub1V4c1NlR1EwTnpvYnF3Y0l4b3dDb3I4d3Rz0gG1AUFVX3lxTFByTF9kU05WbU10NkpXZmZ0Y19zN291U3Z3Z3V3R0p0U1lRcVl4S29xVGlxQ3dEcnpEbUZxN0Jvcll3cnd4ZVRxNk53enJod3N1a3ZJNW56WUt1aWRaMWxfb2EwdjhvT2FjWkRkM3RrdEZGZ2dKUk91bmQ4U25oYkhmSHNqV25qbk1pT1lDb09wTFlPcVpDT0J3YVlGclM1d0h5NXR2Q084X2ZZTWt1QmxqZ0E": "https://bartamanpatrika.com/detail_news.php?cID=19&nID=492104",
  "https://news.google.com/rss/articles/CBMiUkFVX3lxTFBaMmpqQVhTdWpqdVRiRHFMdnF0cTBRTExxT3p5eEpLOHhQNW9ZRW1nS3RFTmt3ZFl2VlBwbE80Q3Rsb0k5eUtmREx3aHhWd2V3bVlvZzA": "https://www.sangbadpratidin.in/bangladesh/awami-league-demonstrations-erupt-dhaka-following-hasina-statement/pid/1351402",
  "https://news.google.com/rss/articles/CBMi_wFBVV95cUxNY1VOMUMtUFlldkRsdURxQkgyWGR5SFF2T3lWQU1scW1tY0k3QkR1eFl2b2l6Y1J6d2pOUkJZVGh2eTdrU21yS0ZqZ2lXclR5b1B3UDFDMTBqNnhqUWVZVW1TWWZ3b1p4QU9tWFl2WWRsbWpxRk1tYktlTGlRUkgyWjN4T3k5cU05clI5Z24tZDRQWnh1a3c0R2p4b0N0d3g4WjdfX1V4TjZrbHptMGpYQWdYREs0ckY4V2E4b3l2eW5kMFRjUG16N243M3A3d0E": "https://www.hindustantimes.com/india-news/tripura-court-sentences-5-bangladeshi-nationals-to-two-years-imprisonment-101726712398471.html",
  "https://news.google.com/rss/articles/CBMisgFBVV95cUxNa2ZubWZubU5xZzR3OG44TTV4NktYQUZzeE1jSndrM3Z4eTZaT3FvQ0Z2V3hnd1d4Z1BQUVZJTkJnQ21wclB5akNvdWtsT3B1S3N4b3JpNGdza3k5Q08yckx2V3NxcW1lSGcxcl9yUjV1cG9iRk50VDBRN01Yd25KSU1tT2l1N1Jj0gG1AUFVX3lxTE9jYTRGZ2V0V3JXZXlxdjFXZ29qVmVhY3d2Y3BmdWZySlRnZEw2b2tWb1Z5Y0p6V0hxd3k2T2YtNFN1UjN1eklJOHYxdl9LNEJtV2Zqckx1WVR1Tmt5Skd4UW1jU182Tmh0Vl9hZlJ1M1Bvc1ZCSFR2NGp4WGtudTczX0x2WlFFOHZ3VlhXWVd0dnhZNHl5S2NnQ05ySmx5WUZ2bFF2U00wZHR3S3B0U1ZJd0E": "https://www.youtube.com/watch?v=0WrRFhIezuc",
  "https://news.google.com/rss/articles/CBMisAFBVV95cUxPd2JmZldXUkdIdjN1bFhGbkxIUVdldmlvY3FndVNmblh0bDVqYUVtT3N4SFV1c2F4Wmp0QjFjYVFsY25BckU0Z3k4YTRBOUx1d2JvblFhRjA4Q3Z0WGJnWkh4VHVsaDF5aFdxOHYwV0ZpQk5RUmVvcklsd2tXQ0Noc2FzQ1pBWFhn0gG1AUFVX3lxTE9tT200cm51d0F1RVRiZFlLdFhvd1Zadnh1Y01YQ3d1V2c3Q3p4TnduN3FqOG1QZzV1cHNnNkY5ZDVZWVp0Ym02aFVkSzh6cTZpTVlXUExKSm13TUt0a1NCS2N5VjVCS3NqN2h4WnhnSElsY0ZubmtxUjF3Y0p2S1E4UmlzNXZYVkV5ZDJ3c0dZSWZDbDFiS2dJdmh2TTVoV3B0aGtLNWl2MUV3Zk1mY0E": "https://zeenews.india.com/bengali/world/bangladesh-durga-puja-minority-hindu-security-concerns-ahead-of-festivals-521940.html",
  "https://news.google.com/rss/articles/CBMiswFBVV95cUxNaGxFeEc5V293MWdtUFRvaXN6Y0Fpd19NTE1kWWYyN3Q5U3VwX3drYmlkYUtqN0IxdVVRaHRQeUptMmt6Q3BfbVdJcTFiY1k4SE93a1V0bFRxVDBtVWt3eUp3Ym11N2l3clFjZ21sVDFjQ1F5dDR2a2x0VXRrYl9jYkl0Q1Z0U29hUWdJdmp0YUVzN19aUmRVRzV4VkdtR0k3bXFRQXZoRjU1Wlp4TllLdw": "https://navbharattimes.indiatimes.com/world/bangladesh/brics-summit-tarique-rahman-india-visit-sheikh-hasina-issue/articleshow/134281902.cms",
  "https://news.google.com/rss/articles/CBMi_wFBVV95cUxPZEtxYnp0d210TDFzYlRzT1pXZGlaaTJlZ1p1a2FpVkp1aFphNnNvd1RjWWZ2QjN5ZEpPZGpnUWUzb2ZsaWdYOHl6bDRhRnhwRHFvd252N19BVFpTUm45bTJuWGpXWkd6a2xSZ2tHbXhkTnpXUWZ0dFFpU281ZkR0MmpwVE5wQ21uUGdYMm9WdXZmQmt2WHpEb3laMms2d21jY1ZlTEgyd2dndkQxMGpudFRxZw": "https://bengali.news18.com/news/international/bangladesh-sentences-seven-hasina-allies-death-tribunal-verdict-1492019.html",
  "https://news.google.com/rss/articles/CBMiUkFVX3lxTE5BcmZGVlZJTFZwU241S2pCakxfR0F1ZmdXbk5tQWJvS3FhVmt5bTF4N3Z4SGFhU0l5T050VjBHTnQ4VkRrcjZ1d2o1dmV1SGJ0bEZzWkE": "https://uttarbangasambad.com/fulbari-changrabandha-land-port-freight-movement-cross-border-trade-update-20260919/",
  "https://news.google.com/rss/articles/CBMiUkFVX3lxTE1uS2FRUTZ2Q0UteG1aRFR5dmhicVprU0VudHh4b2dqaVRnN2lyd19qY1RvbTlsN1F1T0x6UG9wQkJlTnd0YmZwU2RhSnpwU3c3ZFR1c0E": "https://www.anandabazar.com/west-bengal/north-bengal/bsf-heightens-night-vigilance-and-thermal-drone-patrol-along-siliguri-border-dgtl/cid/1714810"
};

let replacedCount = 0;
for (const [gUrl, cUrl] of Object.entries(directReplacements)) {
  if (content.includes(gUrl)) {
    content = content.replaceAll(gUrl, cUrl);
    replacedCount++;
  }
}

console.log(`Replaced ${replacedCount} remaining Google News URLs with verified direct URLs.`);

fs.writeFileSync(newsFilePath, content, 'utf8');

// Check remaining
const remainingGNews = (content.match(/https:\/\/news\.google\.com/g) || []).length;
console.log(`Total remaining news.google.com links in news-data.ts: ${remainingGNews}`);
