import type { Metadata } from 'next';
import '@/styles/globals.css';
import { AppProvider } from '@/context/ThemeContext';
import Header from '@/components/Header';
import BreakingNews from '@/components/BreakingNews';
import SearchModal from '@/components/SearchModal';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Narrative Compass | The Independent Journal of Record & Ideas',
  description: 'Fast, high-integrity digital journalism covering Indian media reporting on Bangladesh across English, Bengali, and Hindi with 3-marker sentiment tracking.',
  keywords: ['Bangladesh News', 'Indian Media Scanner', 'Narrative Compass', 'Teesta River', 'Petrapole Benapole', 'Anandabazar Patrika', 'The Hindu', 'Dainik Jagran'],
  authors: [{ name: 'Narrative Compass Editorial & Intelligence Desk' }],
  openGraph: {
    title: 'Narrative Compass | Indian Media Narrative Monitor',
    description: 'Real-time scanner of top Indian media reporting on Bangladesh across Delhi and Kolkata bureaus.',
    siteName: 'Narrative Compass',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Narrative Compass',
    description: 'Indian Media Scanner on Bangladesh with 3-marker sentiment analysis.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn" data-lang="bn" suppressHydrationWarning>
      <body>
        <AppProvider>
          <Header />
          <BreakingNews />
          <main style={{ minHeight: '80vh' }}>
            {children}
          </main>
          <SearchModal />
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
