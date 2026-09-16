import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Corrections & Clarifications | সংশোধনী ও স্পষ্টীকরণ',
  description: 'Report misrepresentations or technical glitches in Indian media coverage of Bangladesh. Platform owner double-checks and fixes issues within a 24 to 48 hours response window.',
  keywords: [
    'Corrections and Clarifications',
    'সংশোধনী ও স্পষ্টীকরণ',
    'Bangladeshi News in India',
    'Reporting Bangladesh',
    'Indian News Monitoring',
    'News Scanner for Bangladeshi News',
    'Narrative Compass'
  ],
};

export default function CorrectionsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
