import { Metadata } from 'next';
import { SCANNED_NEWS_ITEMS } from '@/data/news-data';
import InstagramClientView from '@/components/InstagramClientView';

export const metadata: Metadata = {
  title: 'Instagram Feed & Visual Journalism | Narrative Compass',
  description:
    'Dedicated tracker of Indian news media Instagram photo dispatches, visual journalism, and post captions covering Bangladesh from Delhi and Kolkata bureaus.',
  openGraph: {
    title: 'Instagram Feed & Visual Journalism | Narrative Compass',
    description:
      'Curated Instagram photo dispatches, infographics, and post captions from leading Indian newsrooms reporting on Bangladesh.',
    type: 'website',
    url: 'https://narrativecompass.bd/instagram',
  },
  alternates: {
    canonical: 'https://narrativecompass.bd/instagram',
  },
};

export default function InstagramPage() {
  // Pre-filter items that originate from Instagram or are tagged as visual journalism dispatches
  const instagramArticles = SCANNED_NEWS_ITEMS.filter((item) => {
    return (
      item.tags?.includes('Instagram Post') ||
      item.source.originalUrl.includes('instagram.com') ||
      item.source.name.toLowerCase().includes('instagram')
    );
  }).sort((a, b) => {
    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
  });

  return <InstagramClientView initialArticles={instagramArticles} />;
}
