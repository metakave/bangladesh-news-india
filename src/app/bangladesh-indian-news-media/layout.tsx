import { Metadata } from 'next';

const SITE_URL = 'https://bangladesh-news-india.vercel.app';

export const metadata: Metadata = {
  title: 'Bangladesh in Indian News Media: 100+ Verified Direct Despatches & Live Portals',
  description: 'Comprehensive directory of 100+ top Indian media outlets with dedicated Bangladesh coverage sections across Delhi, Kolkata, and regional bureaus in English, Bengali, Hindi, and Northeast languages.',
  keywords: [
    'Indian Media Directory Bangladesh',
    'Bangladesh News in Indian Media',
    'Kolkata Media Bangladesh',
    'Delhi Media Bangladesh Despatches',
    'Anandabazar Patrika Bangladesh',
    'The Hindu Bangladesh',
    'Indian Express Dhaka Bureau',
    'Amar Ujala Bangladesh',
    'Sangbad Pratidin Bangladesh'
  ],
  alternates: {
    canonical: `${SITE_URL}/bangladesh-indian-news-media`,
  },
  openGraph: {
    title: 'Bangladesh in Indian News Media: 100+ Verified Sources & Direct Despatches',
    description: 'Explore 100+ leading Indian print, digital, broadcast, and think-tank portals publishing dedicated reporting on Bangladesh.',
    url: `${SITE_URL}/bangladesh-indian-news-media`,
    type: 'website',
    images: [
      {
        url: '/images/brics-summit-2026-card.png',
        width: 1200,
        height: 675,
        alt: 'Bangladesh in Indian News Media Directory',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bangladesh in Indian News Media Directory',
    description: '100+ verified Indian news sources with direct links to Bangladesh sections.',
    images: ['/images/brics-summit-2026-card.png'],
  },
};

export default function MediaDirectoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
