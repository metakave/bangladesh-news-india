import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Indian Media Directory | 120+ Outlets Reporting Bangladesh',
  description: 'Complete catalog of 120+ Indian newspapers, television news channels, and digital media portals in Delhi, West Bengal, Tripura, and Assam reporting on Bangladesh.',
  keywords: [
    'Bangladeshi News in India',
    'Reporting Bangladesh',
    'Indian News Monitoring',
    'News Scanner for Bangladeshi News',
    'भारतीय মিডিয়ায় বাংলাদেশের খবর',
    'বাংলাদেশ সম্পর্কিত সংবাদ পর্যবেক্ষণ',
    'ভারতীয় গণমাধ্যম ট্র্যাকিং',
    'বাংলাদেশ বিষয়ক সংবাদ স্ক্যানার',
    'Indian Media Directory',
    'Anandabazar Patrika',
    'Tripura Times',
    'The Assam Tribune',
    'Uttarbanga Sambad'
  ],
  openGraph: {
    title: '120+ Indian Outlets Reporting Bangladesh | Narrative Compass Directory',
    description: 'Explore the complete directory of Indian news outlets monitored for coverage of Bangladesh.',
    url: 'https://bangladesh-news-india.vercel.app/bangladesh-indian-news-media',
  },
};

export default function DirectoryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
