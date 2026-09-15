import { Metadata } from 'next';

const SITE_URL = 'https://bangladesh-news-india.vercel.app';

export const metadata: Metadata = {
  title: 'সম্পাদনা নীতিমালা | Editorial Policy & AI Methodology - Narrative Compass',
  description: 'সম্পাদনা নীতিমালা (Editorial Policy) of Narrative Compass: 100% autonomous AI scanning, zero human bias, 24-hour automated cycles, original headlines cited "as-is", 3-tier sentiment analysis, and 4-channel ingestion from top Indian news media.',
  keywords: [
    'সম্পাদনা নীতিমালা',
    'Editorial Policy',
    'AI News Scanner Methodology',
    'Zero Human Bias',
    '24-Hour Automated Cycle',
    'Sentiment Analysis',
    'Indian Media Scanner',
    'Bangladesh India News'
  ],
  alternates: {
    canonical: `${SITE_URL}/editorial-policy`,
  },
  openGraph: {
    title: 'সম্পাদনা নীতিমালা | Editorial Policy & Autonomous AI Methodology',
    description: '100% autonomous machine-scanned media intelligence tracking prominent Indian news coverage of Bangladesh with zero human bias, headlines as-is, and 3-tier sentiment.',
    url: `${SITE_URL}/editorial-policy`,
    type: 'website',
  },
};

export default function EditorialPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
