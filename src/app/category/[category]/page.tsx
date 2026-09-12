import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SCANNED_NEWS_ITEMS, CATEGORIES } from '@/data/news-data';
import CategoryClientView from '@/components/CategoryClientView';

const SITE_URL = 'https://bangladesh-news-india.vercel.app';

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return CATEGORIES.map((cat) => ({
    category: cat.slug,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const categoryInfo = CATEGORIES.find((c) => c.slug === resolvedParams.category);

  if (!categoryInfo) {
    return {
      title: 'Category Not Found | Narrative Compass',
    };
  }

  const title = `${categoryInfo.labelEn} (${categoryInfo.labelBn}) | Narrative Compass`;
  const description = `Live intelligence scanner and reports on ${categoryInfo.labelEn} across leading Indian newsrooms and Delhi/Kolkata bureaus.`;
  const url = `${SITE_URL}/category/${categoryInfo.slug}`;

  return {
    title,
    description,
    keywords: [categoryInfo.labelEn, categoryInfo.labelBn, 'Bangladesh News', 'India Media Scanner', 'Narrative Compass'],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type: 'website',
      images: [
        {
          url: '/images/brics-summit-2026-card.png',
          width: 1200,
          height: 675,
          alt: `${categoryInfo.labelEn} - Narrative Compass`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/images/brics-summit-2026-card.png'],
    },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const resolvedParams = await params;
  const categorySlug = resolvedParams.category;
  const categoryInfo = CATEGORIES.find((c) => c.slug === categorySlug);

  if (!categoryInfo) {
    notFound();
  }

  const rawArticles = SCANNED_NEWS_ITEMS.filter((a) => a.category === categorySlug);
  const sortedArticles = [...rawArticles].sort((a, b) => {
    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
  });

  // Schema.org CollectionPage JSON-LD
  const jsonLdCollection = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `${categoryInfo.labelEn} - Indian Media Scanner`,
    alternateName: categoryInfo.labelBn,
    url: `${SITE_URL}/category/${categoryInfo.slug}`,
    description: `Scanned articles and narrative tracking on ${categoryInfo.labelEn}`,
    publisher: {
      '@type': 'NewsMediaOrganization',
      name: 'Narrative Compass',
      url: SITE_URL,
    },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: sortedArticles.map((art, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `${SITE_URL}/article/${art.slug}`,
        name: art.title,
      })),
    },
  };

  // Schema.org Breadcrumbs
  const jsonLdBreadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: SITE_URL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: categoryInfo.labelEn,
        item: `${SITE_URL}/category/${categoryInfo.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdCollection) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumbs) }}
      />
      <CategoryClientView
        categorySlug={categorySlug}
        categoryLabelBn={categoryInfo.labelBn}
        categoryLabelEn={categoryInfo.labelEn}
        articles={sortedArticles}
      />
    </>
  );
}
