'use client';

import React, { useState, use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { useApp } from '@/context/ThemeContext';
import { SCANNED_NEWS_ITEMS, CATEGORIES } from '@/data/news-data';
import { TRANSLATIONS } from '@/data/translations';
import ArticleCard from '@/components/ArticleCard';
import { ChevronRight } from 'lucide-react';

export default function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const resolvedParams = use(params);
  const categorySlug = resolvedParams.category;
  const { lang } = useApp();
  const t = TRANSLATIONS[lang];

  const categoryInfo = CATEGORIES.find((c) => c.slug === categorySlug);

  if (!categoryInfo) {
    notFound();
  }

  const [sortBy, setSortBy] = useState<'latest' | 'sentiment'>('latest');

  const rawArticles = SCANNED_NEWS_ITEMS.filter((a) => a.category === categorySlug);

  const sortedArticles = [...rawArticles].sort((a, b) => {
    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
  });

  const categoryTitle = lang === 'bn' ? categoryInfo.labelBn : categoryInfo.labelEn;

  return (
    <div style={{ padding: '2rem 0 4rem 0' }}>
      <div className="container">
        {/* Breadcrumb */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem',
          fontSize: '0.78rem',
          color: 'var(--text-muted)',
          marginBottom: '1.5rem',
        }}>
          <Link href="/" className={lang === 'bn' ? 'font-bengali' : ''} style={{ color: 'var(--text-secondary)' }}>
            {lang === 'bn' ? 'হোম' : 'Home'}
          </Link>
          <ChevronRight size={12} />
          <span
            className={lang === 'bn' ? 'font-bengali' : ''}
            style={{ color: 'var(--brand-primary)', fontWeight: 700, textTransform: lang === 'bn' ? 'none' : 'uppercase' }}
          >
            {categoryTitle}
          </span>
        </div>

        {/* Category Masthead */}
        <div style={{
          borderBottom: '2px solid var(--border-bold)',
          paddingBottom: '1.25rem',
          marginBottom: '2rem',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
        }}>
          <div>
            <h1
              className={lang === 'bn' ? 'font-bengali' : 'font-masthead'}
              style={{
                fontSize: lang === 'bn' ? 'clamp(1.8rem, 3.8vw, 2.5rem)' : 'clamp(2rem, 4vw, 2.75rem)',
                fontWeight: 900,
                color: 'var(--text-primary)',
                textTransform: lang === 'bn' ? 'none' : 'uppercase',
                letterSpacing: lang === 'bn' ? '0' : '0.04em',
                lineHeight: 1.2,
                marginBottom: '0.35rem',
              }}
            >
              {categoryTitle}
            </h1>
            <p
              className={lang === 'bn' ? 'font-bengali' : ''}
              style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}
            >
              {lang === 'bn'
                ? `ভারতীয় সংবাদমাধ্যমে "${categoryTitle}" সংক্রান্ত সর্বশেষ সংগৃহীত ও বিশ্লেষণকৃত প্রতিবেদন।`
                : `Comprehensive scanned reports, intelligence, and verified coverage on ${categoryTitle}.`}
            </p>
          </div>

          <div
            className={lang === 'bn' ? 'font-bengali' : ''}
            style={{
              fontSize: '0.82rem',
              fontWeight: 700,
              color: 'var(--brand-primary)',
              backgroundColor: 'var(--bg-secondary)',
              padding: '0.35rem 0.85rem',
              borderRadius: 'var(--radius-full)',
              border: '1px solid var(--border-primary)',
            }}
          >
            {lang === 'bn' ? `${sortedArticles.length} টি স্ক্যানড প্রতিবেদন` : `${sortedArticles.length} Scanned Reports`}
          </div>
        </div>

        {/* Articles Grid */}
        {sortedArticles.length === 0 ? (
          <div style={{ padding: '4rem 1rem', textAlign: 'center', color: 'var(--text-muted)' }}>
            <p
              className={lang === 'bn' ? 'font-bengali' : ''}
              style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-primary)' }}
            >
              {lang === 'bn' ? 'এই বিভাগে বর্তমানে কোনো প্রতিবেদন পাওয়া যায়নি।' : 'No scanned articles currently indexed under this section.'}
            </p>
            <Link
              href="/"
              className={lang === 'bn' ? 'font-bengali' : ''}
              style={{ display: 'inline-block', marginTop: '1rem', color: 'var(--brand-primary)', fontWeight: 700 }}
            >
              {lang === 'bn' ? 'মূল পাতায় ফিরে যান' : 'Return to Frontpage'}
            </Link>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '2rem',
          }}>
            {sortedArticles.map((art) => (
              <div
                key={art.id}
                style={{
                  backgroundColor: 'var(--bg-card)',
                  padding: '1.25rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-primary)',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <ArticleCard article={art} variant="featured" />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

