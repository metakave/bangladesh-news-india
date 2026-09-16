import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Editorial Policy | সম্পাদনা নীতিমালা',
  description: 'Narrative Compass editorial policy: RAW data ingestion, automated translation standards, 3-marker sentiment engine, and integrity rules for Indian media news monitoring.',
  keywords: [
    'Editorial Policy',
    'সম্পাদনা নীতিমালা',
    'Bangladeshi News in India',
    'Reporting Bangladesh',
    'Indian News Monitoring',
    'News Scanner for Bangladeshi News',
    'Narrative Compass'
  ],
};

export default function EditorialPolicyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
