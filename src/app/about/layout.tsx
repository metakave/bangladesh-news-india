import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Narrative Compass | Indian News Monitoring & Media Analytics',
  description: 'Learn about Narrative Compass — the automated news scanner and sentiment tracking engine monitoring Bangladeshi news across 120+ Indian media outlets in Delhi, Kolkata, Tripura, and Assam.',
  keywords: [
    'About Narrative Compass',
    'Bangladeshi News in India',
    'Reporting Bangladesh',
    'Indian News Monitoring',
    'News Scanner for Bangladeshi News',
    'ভারতীয় মিডিয়ায় বাংলাদেশের খবর',
    'বাংলাদেশ সম্পর্কিত সংবাদ পর্যবেক্ষণ',
    'ভারতীয় গণমাধ্যম ট্র্যাকিং',
    'Sadiq M. Alam'
  ],
  openGraph: {
    title: 'About Narrative Compass | Indian News Monitoring & Media Analytics',
    description: 'Learn about Narrative Compass, our methodology, 3-marker sentiment engine, and platform founder Sadiq M. Alam.',
    url: 'https://bangladesh-news-india.vercel.app/about',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Narrative Compass (ন্যারেটিভ কম্পাস)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Narrative Compass is an automated news scanner and intelligence platform that indexes and analyzes how Indian news media report on Bangladesh across 120+ outlets in Kolkata, West Bengal, Tripura, Assam, and New Delhi.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does Narrative Compass scan Bangladeshi news in Indian media?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The platform runs an automated multi-mode news scanner (RSS feeds, site crawling, YouTube news channels) that indexes reports matching Bangladesh-related keywords, preserves original headlines, provides Bengali translations, and assigns 3-marker sentiment labels.',
      },
    },
    {
      '@type': 'Question',
      name: 'What key Indian media outlets are monitored for Bangladesh news?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Over 120 Indian outlets are monitored, including national press (The Hindu, Indian Express, Hindustan Times), Kolkata press (Anandabazar Patrika, Ei Samay, Sangbad Pratidin), North Bengal outlets (Uttarbanga Sambad, Siliguri Times), Tripura outlets (Dainik Sambad, Syandan Patrika, Tripura Times, News Vanguard), and Assam/Barak Valley outlets (The Assam Tribune, Barak Bulletin).',
      },
    },
  ],
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}
