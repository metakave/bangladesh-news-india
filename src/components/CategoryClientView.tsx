'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useApp } from '@/context/ThemeContext';
import { NewsItem } from '@/data/news-data';
import { TRANSLATIONS } from '@/data/translations';
import ArticleCard from '@/components/ArticleCard';
import { ChevronRight, ChevronLeft, Archive } from 'lucide-react';
import { toBengaliDigits } from '@/utils/date';

interface CategoryClientViewProps {
  categorySlug: string;
  categoryLabelBn: string;
  categoryLabelEn: string;
  articles: NewsItem[];
}

const ITEMS_PER_PAGE = 9;

export default function CategoryClientView({
  categorySlug,
  categoryLabelBn,
  categoryLabelEn,
  articles,
}: CategoryClientViewProps) {
  const { lang } = useApp();
  const t = TRANSLATIONS[lang];
  const tp = t.pagination;
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Sort articles chronologically descending (latest first)
  const sortedArticles = React.useMemo(() => {
    return [...articles].sort((a, b) => {
      return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
    });
  }, [articles]);

  useEffect(() => {
    setCurrentPage(1);
  }, [categorySlug]);

  const totalPages = Math.ceil(sortedArticles.length / ITEMS_PER_PAGE) || 1;
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, sortedArticles.length);
  const currentArticles = sortedArticles.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const categoryTitle = lang === 'bn' ? categoryLabelBn : categoryLabelEn;

  return (
    <div style={{ padding: '2rem 0 4rem 0' }}>
      <div className="container">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            fontSize: '0.78rem',
            color: 'var(--text-muted)',
            marginBottom: '1.5rem',
          }}
        >
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
        </nav>

        {/* Category Masthead */}
        <header
          style={{
            borderBottom: '2px solid var(--border-bold)',
            paddingBottom: '1.25rem',
            marginBottom: '2rem',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <div>
            <h1
              className={lang === 'bn' ? 'font-bengali' : 'font-masthead'}
              style={{
                fontSize: lang === 'bn' ? 'clamp(1.65rem, 3.5vw, 2.3rem)' : 'clamp(1.8rem, 3.7vw, 2.55rem)',
                fontWeight: 600,
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

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Link
              href="/archive"
              style={{
                fontSize: '0.8rem',
                fontWeight: 700,
                color: 'var(--brand-primary)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.3rem',
                padding: '0.35rem 0.75rem',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--brand-primary)',
                textDecoration: 'none',
              }}
            >
              <Archive size={13} />
              {t.archive.navTitle}
            </Link>

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
              {lang === 'bn'
                ? `${toBengaliDigits(sortedArticles.length)} টি স্ক্যানড প্রতিবেদন`
                : `${sortedArticles.length} Scanned Reports`}
            </div>
          </div>
        </header>

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
          <>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                gap: '2rem',
                marginBottom: '2.5rem',
              }}
            >
              {currentArticles.map((art) => (
                <div
                  key={art.id}
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    padding: '1.25rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-primary)',
                    boxShadow: 'var(--shadow-sm)',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                  }}
                >
                  <ArticleCard article={art} variant="featured" />
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  paddingTop: '2rem',
                  borderTop: '1px solid var(--border-primary)',
                }}
              >
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    padding: '0.45rem 0.85rem',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    backgroundColor: currentPage === 1 ? 'var(--bg-secondary)' : 'var(--bg-primary)',
                    color: currentPage === 1 ? 'var(--text-muted)' : 'var(--text-primary)',
                    border: '1px solid var(--border-primary)',
                    cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                    opacity: currentPage === 1 ? 0.6 : 1,
                  }}
                >
                  <ChevronLeft size={14} />
                  {tp.previous}
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
                  const isActive = pageNum === currentPage;
                  return (
                    <button
                      key={pageNum}
                      onClick={() => handlePageChange(pageNum)}
                      style={{
                        minWidth: '2.2rem',
                        height: '2.2rem',
                        borderRadius: 'var(--radius-sm)',
                        fontSize: '0.82rem',
                        fontWeight: isActive ? 800 : 600,
                        backgroundColor: isActive ? 'var(--brand-primary)' : 'var(--bg-primary)',
                        color: isActive ? '#ffffff' : 'var(--text-primary)',
                        border: isActive ? '1px solid var(--brand-primary)' : '1px solid var(--border-primary)',
                        cursor: 'pointer',
                      }}
                    >
                      {lang === 'bn' ? toBengaliDigits(pageNum) : pageNum}
                    </button>
                  );
                })}

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    padding: '0.45rem 0.85rem',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    backgroundColor: currentPage === totalPages ? 'var(--bg-secondary)' : 'var(--bg-primary)',
                    color: currentPage === totalPages ? 'var(--text-muted)' : 'var(--text-primary)',
                    border: '1px solid var(--border-primary)',
                    cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
                    opacity: currentPage === totalPages ? 0.6 : 1,
                  }}
                >
                  {tp.next}
                  <ChevronRight size={14} />
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
