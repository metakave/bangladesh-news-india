import type { Metadata } from 'next';
import { Cinzel, Newsreader, Noto_Serif_Bengali, Noto_Serif_Devanagari, Plus_Jakarta_Sans, Space_Grotesk } from 'next/font/google';
import '@/styles/globals.css';
import { AppProvider } from '@/context/ThemeContext';
import Header from '@/components/Header';
import BreakingNews from '@/components/BreakingNews';
import SearchModal from '@/components/SearchModal';
import VisitorVerificationModal from '@/components/VisitorVerificationModal';
import Footer from '@/components/Footer';
import GoogleAnalytics from '@/components/GoogleAnalytics';

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['600', '700', '800', '900'],
  variable: '--font-cinzel',
  display: 'swap',
});

const newsreader = Newsreader({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-newsreader',
  display: 'swap',
});

const notoBengali = Noto_Serif_Bengali({
  subsets: ['bengali'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-bengali-custom',
  display: 'swap',
});

const notoDevanagari = Noto_Serif_Devanagari({
  subsets: ['devanagari'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-devanagari-custom',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '700'],
  variable: '--font-mono-custom',
  display: 'swap',
});

const SITE_URL = 'https://bangladesh-news-india.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Narrative Compass | The Independent Journal of Record & Ideas',
    template: '%s | Narrative Compass',
  },
  description: 'Fast, high-integrity digital journalism scanning top Indian media reporting on Bangladesh across Delhi and Kolkata bureaus in English, Bengali, and Hindi with 3-marker sentiment tracking.',
  keywords: [
    'Bangladesh News',
    'Indian Media Scanner',
    'Narrative Compass',
    'ন্যারেটিভ কম্পাস',
    'Teesta River Water Treaty',
    'Petrapole Benapole Border Trade',
    'Anandabazar Patrika',
    'The Hindu',
    'The Indian Express',
    'Dainik Jagran',
    'Amar Ujala',
    'Ei Samay',
    'Sangbad Pratidin',
    'India Bangladesh Relations',
    'Diplomatic Radar'
  ],
  authors: [{ name: 'Narrative Compass Editorial & Intelligence Desk', url: SITE_URL }],
  creator: 'Narrative Compass',
  publisher: 'Narrative Compass Digital Publishing',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
    languages: {
      'bn-BD': '/',
      'en-US': '/',
    },
  },
  icons: {
    icon: [
      { url: '/narrative-compass.svg', type: 'image/svg+xml' },
      { url: '/icon.svg', type: 'image/svg+xml' }
    ],
    shortcut: '/narrative-compass.svg',
    apple: '/narrative-compass.svg',
  },
  openGraph: {
    title: 'Narrative Compass | Indian Media Narrative Monitor & Journal of Record',
    description: 'Real-time scanner and balanced sentiment tracking of top Indian media reporting on Bangladesh across Delhi and Kolkata bureaus.',
    url: SITE_URL,
    siteName: 'Narrative Compass',
    locale: 'bn_BD',
    alternateLocale: ['en_US'],
    type: 'website',
    images: [
      {
        url: '/images/brics-summit-2026-card.png',
        width: 1200,
        height: 675,
        alt: 'Narrative Compass - Indian Media Narrative Monitor on Bangladesh',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Narrative Compass | Indian Media Scanner on Bangladesh',
    description: 'Real-time intelligence desk tracking Indian newsrooms covering Bangladesh with 3-marker sentiment analysis.',
    images: ['/images/brics-summit-2026-card.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLdOrg = {
  '@context': 'https://schema.org',
  '@type': 'NewsMediaOrganization',
  name: 'Narrative Compass',
  alternateName: 'ন্যারেটিভ কম্পাস',
  url: SITE_URL,
  logo: {
    '@type': 'ImageObject',
    url: `${SITE_URL}/narrative-compass.svg`,
    width: '384',
    height: '384',
  },
  sameAs: [],
  description: 'Independent news narrative monitor and journal of record tracking Indian media reporting on Bangladesh.',
  publishingPrinciples: `${SITE_URL}/editorial-policy`,
  diversityPolicy: `${SITE_URL}/about#standards`,
  ethicsPolicy: `${SITE_URL}/editorial-policy`,
  factCheckingPolicy: `${SITE_URL}/fact-checking-policy`,
  correctionsPolicy: `${SITE_URL}/about#corrections`,
};

const jsonLdWebSite = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Narrative Compass',
  alternateName: 'ন্যারেটিভ কম্পাস',
  url: SITE_URL,
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${SITE_URL}/?search={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="bn"
      data-lang="bn"
      className={`${cinzel.variable} ${newsreader.variable} ${notoBengali.variable} ${notoDevanagari.variable} ${plusJakarta.variable} ${spaceGrotesk.variable}`}
      suppressHydrationWarning
    >
      <head>
        <GoogleAnalytics />
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://www.google.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrg) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
        />
      </head>
      <body>
        <AppProvider>
          <Header />
          <BreakingNews />
          <main style={{ minHeight: '80vh' }}>
            {children}
          </main>
          <SearchModal />
          <VisitorVerificationModal />
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
