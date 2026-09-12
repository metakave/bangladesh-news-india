import { Metadata } from 'next';

const SITE_URL = 'https://bangladesh-news-india.vercel.app';

export const metadata: Metadata = {
  title: 'About Us | Editorial Principles & Intelligence Methodology',
  description: 'Learn about Narrative Compass (ন্যারেটিভ কম্পাস): Our mission, balanced sentiment tracking methodology, news verification algorithms, and editorial code of ethics.',
  keywords: [
    'About Narrative Compass',
    'আমাদের সম্পর্কে',
    'Editorial Ethics',
    'Sentiment Analysis Methodology',
    'Journalism Standards',
    'Fact-Checking Policy'
  ],
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
  openGraph: {
    title: 'About Narrative Compass | Editorial Principles & Intelligence Methodology',
    description: 'Our mission to provide objective, multi-lingual, 3-marker sentiment monitoring of Indian media reporting on Bangladesh.',
    url: `${SITE_URL}/about`,
    type: 'website',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
