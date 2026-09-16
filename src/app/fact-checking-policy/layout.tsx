import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fact-Checking Policy | তথ্য যাচাই নীতিমালা',
  description: 'Narrative Compass fact-checking policy & disclaimer regarding Indian media reporting on Bangladesh, reader verification, and narrative awareness.',
  keywords: [
    'Fact-Checking Policy',
    'তথ্য যাচাই নীতিমালা',
    'Bangladeshi News in India',
    'Reporting Bangladesh',
    'Indian News Monitoring',
    'News Scanner for Bangladeshi News',
    'Narrative Compass'
  ],
};

export default function FactCheckingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
