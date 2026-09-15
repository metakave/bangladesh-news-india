import { Metadata } from 'next';
import { SCANNED_NEWS_ITEMS } from '@/data/news-data';
import ArchiveClientView from '@/components/ArchiveClientView';

export const metadata: Metadata = {
  title: 'News Archive & Past Coverage | Narrative Compass',
  description:
    'Browse the complete chronological archive of Indian media news reports, sentiment analysis, and coverage of Bangladesh from Delhi and Kolkata bureaus.',
  openGraph: {
    title: 'News Archive & Past Coverage | Narrative Compass',
    description:
      'Browse the complete chronological archive of Indian media news reports, sentiment analysis, and coverage of Bangladesh.',
    type: 'website',
    url: 'https://narrativecompass.bd/archive',
  },
  alternates: {
    canonical: 'https://narrativecompass.bd/archive',
  },
};

export default function ArchivePage() {
  // Pass sorted items to client view
  const sortedArticles = [...SCANNED_NEWS_ITEMS].sort((a, b) => {
    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
  });

  return <ArchiveClientView initialArticles={sortedArticles} />;
}
