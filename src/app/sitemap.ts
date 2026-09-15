import { MetadataRoute } from 'next';
import { SCANNED_NEWS_ITEMS, CATEGORIES } from '@/data/news-data';

const SITE_URL = 'https://bangladesh-news-india.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: 'hourly',
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/bangladesh-indian-news-media`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/archive`,
      lastModified: now,
      changeFrequency: 'hourly',
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  // Category routes
  const categoryRoutes: MetadataRoute.Sitemap = [
    ...CATEGORIES.map((cat) => ({
      url: `${SITE_URL}/category/${cat.slug}`,
      lastModified: now,
      changeFrequency: 'hourly' as const,
      priority: 0.8,
    })),
    {
      url: `${SITE_URL}/category/politics`,
      lastModified: now,
      changeFrequency: 'hourly' as const,
      priority: 0.8,
    },
  ];

  // Article routes
  const articleRoutes: MetadataRoute.Sitemap = SCANNED_NEWS_ITEMS.map((item) => {
    const parsedDate = new Date(item.publishedAt);
    const lastModified = isNaN(parsedDate.getTime()) ? now : parsedDate;
    return {
      url: `${SITE_URL}/article/${item.slug}`,
      lastModified,
      changeFrequency: 'weekly',
      priority: item.isLeadStory ? 0.95 : 0.8,
    };
  });

  return [...staticRoutes, ...categoryRoutes, ...articleRoutes];
}
