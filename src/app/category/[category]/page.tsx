'use client';

import React, { useState, use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ARTICLES, CATEGORIES, OPINION_PIECES } from '@/data/news-data';
import ArticleCard from '@/components/ArticleCard';
import { ChevronRight, SlidersHorizontal, ArrowUpDown } from 'lucide-react';

export default function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const resolvedParams = use(params);
  const categorySlug = resolvedParams.category;

  const categoryInfo = CATEGORIES.find((c) => c.slug === categorySlug) || (
    categorySlug === 'opinion' ? { slug: 'opinion', label: 'Opinion & Editorials' } : null
  );

  if (!categoryInfo) {
    notFound();
  }

  const [sortBy, setSortBy] = useState<'latest' | 'views'>('latest');

  let rawArticles = ARTICLES.filter((a) => a.category === categorySlug);
  if (categorySlug === 'opinion') {
    rawArticles = ARTICLES.filter((a) => a.isOpinion || a.category === 'politics');
  }

  const sortedArticles = [...rawArticles].sort((a, b) => {
    if (sortBy === 'views') {
      return b.views - a.views;
    }
    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
  });

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
          <Link href="/" style={{ color: 'var(--text-secondary)' }}>Home</Link>
          <ChevronRight size={12} />
          <span style={{ color: 'var(--brand-primary)', fontWeight: 700, textTransform: 'uppercase' }}>
            {categoryInfo.label}
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
              className="font-masthead"
              style={{
                fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                fontWeight: 900,
                color: 'var(--text-primary)',
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                lineHeight: 1.1,
                marginBottom: '0.35rem',
              }}
            >
              {categoryInfo.label}
            </h1>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
              Comprehensive reporting, deep investigations, and expert perspectives on {categoryInfo.label}.
            </p>
          </div>

          {/* Sort Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-muted)' }}>Sort by:</span>
            <button
              onClick={() => setSortBy('latest')}
              style={{
                padding: '0.3rem 0.75rem',
                fontSize: '0.75rem',
                fontWeight: sortBy === 'latest' ? 800 : 500,
                color: sortBy === 'latest' ? '#ffffff' : 'var(--text-primary)',
                backgroundColor: sortBy === 'latest' ? 'var(--brand-primary)' : 'var(--bg-secondary)',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border-primary)',
              }}
            >
              Latest
            </button>
            <button
              onClick={() => setSortBy('views')}
              style={{
                padding: '0.3rem 0.75rem',
                fontSize: '0.75rem',
                fontWeight: sortBy === 'views' ? 800 : 500,
                color: sortBy === 'views' ? '#ffffff' : 'var(--text-primary)',
                backgroundColor: sortBy === 'views' ? 'var(--brand-primary)' : 'var(--bg-secondary)',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border-primary)',
              }}
            >
              Most Read
            </button>
          </div>
        </div>

        {/* Articles Grid */}
        {sortedArticles.length === 0 ? (
          <div style={{ padding: '4rem 1rem', textAlign: 'center', color: 'var(--text-muted)' }}>
            <p style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-primary)' }}>
              No articles currently indexed under this section.
            </p>
            <Link href="/" style={{ display: 'inline-block', marginTop: '1rem', color: 'var(--brand-primary)', fontWeight: 700 }}>
              Return to Frontpage
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
