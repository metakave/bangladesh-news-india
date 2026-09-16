import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SCANNED_NEWS_ITEMS } from '@/data/news-data';
import ArticleClientView from '@/components/ArticleClientView';

const SITE_URL = 'https://bangladesh-news-india.vercel.app';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SCANNED_NEWS_ITEMS.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const article = SCANNED_NEWS_ITEMS.find((a) => a.slug === resolvedParams.slug);

  if (!article) {
    return {
      title: 'Article Not Found | Narrative Compass',
    };
  }

  const title = `${article.title} | Narrative Compass`;
  const description = article.summaryEn || article.summaryBn;
  const url = `${SITE_URL}/article/${article.slug}`;
  const imageUrl = article.imageUrl.startsWith('http')
    ? article.imageUrl
    : `${SITE_URL}${article.imageUrl}`;

  return {
    title,
    description,
    keywords: [
      ...article.tags,
      article.source.name,
      'Bangladeshi News in India',
      'Reporting Bangladesh',
      'Indian News Monitoring',
      'News Scanner for Bangladeshi News',
      'ভারতীয় মিডিয়ায় বাংলাদেশের খবর',
      'বাংলাদেশ সম্পর্কিত সংবাদ পর্যবেক্ষণ',
      'ভারতীয় গণমাধ্যম ট্র্যাকিং',
      'বাংলাদেশ বিষয়ক সংবাদ স্ক্যানার'
    ],
    authors: [{ name: `${article.source.name} (${article.source.bureau} Bureau)` }],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type: 'article',
      publishedTime: article.publishedAt,
      section: article.categoryLabelEn,
      tags: article.tags,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 675,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const article = SCANNED_NEWS_ITEMS.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = SCANNED_NEWS_ITEMS.filter(
    (a) => a.slug !== slug && a.category === article.category
  ).slice(0, 3);
  const trendingArticles = SCANNED_NEWS_ITEMS.filter((a) => a.slug !== slug).slice(0, 5);

  const articleImageUrl = article.imageUrl.startsWith('http')
    ? article.imageUrl
    : `${SITE_URL}${article.imageUrl}`;

  // Schema.org NewsArticle JSON-LD
  const jsonLdArticle = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/article/${article.slug}`,
    },
    headline: article.title,
    description: article.summaryEn || article.summaryBn,
    image: [articleImageUrl],
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    author: {
      '@type': 'Organization',
      name: `${article.source.name} (${article.source.bureau} Bureau)`,
      url: article.source.originalUrl,
    },
    publisher: {
      '@type': 'NewsMediaOrganization',
      name: 'Narrative Compass',
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/narrative-compass.svg`,
      },
    },
    inLanguage: article.source.language === 'Bengali' ? 'bn' : article.source.language === 'Hindi' ? 'hi' : 'en',
    articleSection: article.categoryLabelEn,
    keywords: article.tags.join(', '),
  };

  // Schema.org BreadcrumbList JSON-LD
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
        name: article.categoryLabelEn,
        item: `${SITE_URL}/category/${article.category}`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: article.title,
        item: `${SITE_URL}/article/${article.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumbs) }}
      />
      <ArticleClientView
        article={article}
        relatedArticles={relatedArticles}
        trendingArticles={trendingArticles}
      />
    </>
  );
}
