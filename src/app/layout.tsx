import type { Metadata } from 'next';
import '@/styles/globals.css';
import { AppProvider } from '@/context/ThemeContext';
import Header from '@/components/Header';
import MarketTicker from '@/components/MarketTicker';
import BreakingNews from '@/components/BreakingNews';
import SearchModal from '@/components/SearchModal';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Bangladesh Watch | The Independent Journal of Record & Ideas',
  description: 'Fast, high-integrity digital journalism covering Bangladeshi politics, economy, tech freelancing, garment innovation, climate resilience, and global diplomacy.',
  keywords: ['Bangladesh News', 'Dhaka Economy', 'Matarbari Deep Sea Port', 'Bangladesh RMG', 'Freelancing Bangladesh', 'Bangladesh Politics', 'Delta Plan 2100'],
  authors: [{ name: 'Bangladesh Watch Editorial Board' }],
  openGraph: {
    title: 'Bangladesh Watch | The Independent Journal of Record & Ideas',
    description: 'Fast, high-integrity digital journalism covering Bangladeshi politics, economy, tech, and geopolitics.',
    siteName: 'Bangladesh Watch',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bangladesh Watch',
    description: 'Fast, high-integrity digital journalism on Bangladesh & the Bay of Bengal.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <AppProvider>
          <MarketTicker />
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
