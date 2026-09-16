import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'News Archive | Scanned Bangladeshi News in Indian Media',
  description: 'Searchable chronological archive of Bangladeshi news reported across top Indian media outlets in Kolkata, Tripura, Assam, and New Delhi.',
  keywords: [
    'Bangladeshi News Archive',
    'Bangladeshi News in India',
    'Reporting Bangladesh',
    'Indian News Monitoring',
    'News Scanner for Bangladeshi News',
    'ভারতীয় মিডিয়ায় বাংলাদেশের খবর',
    'বাংলাদেশ সম্পর্কিত সংবাদ পর্যবেক্ষণ',
    'ভারতীয় গণমাধ্যম ট্র্যাকিং',
    'বাংলাদেশ বিষয়ক সংবাদ স্ক্যানার'
  ],
};

export default function ArchiveLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
