'use client';

import React from 'react';
import Link from 'next/link';
import { useApp } from '@/context/ThemeContext';
import { SCANNED_NEWS_ITEMS } from '@/data/news-data';
import { TRANSLATIONS } from '@/data/translations';
import ArticleCard from '@/components/ArticleCard';
import { Bookmark, Trash2, ArrowRight, BookOpen } from 'lucide-react';

export default function SavedArticlesPage() {
  const { bookmarks, toggleBookmark, lang } = useApp();
  const t = TRANSLATIONS[lang];

  const bookmarkedArticles = SCANNED_NEWS_ITEMS.filter((a) => bookmarks.includes(a.slug));

  return (
    <div style={{ padding: '2.5rem 0 5rem 0' }}>
      <div className="container" style={{ maxWidth: '960px' }}>
        {/* Header */}
        <div style={{
          borderBottom: '2px solid var(--border-bold)',
          paddingBottom: '1.25rem',
          marginBottom: '2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: 'rgba(201, 58, 29, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--brand-primary)',
            }}>
              <Bookmark size={20} fill="currentColor" />
            </div>
            <div>
              <h1
                className={lang === 'bn' ? 'font-bengali' : 'font-masthead'}
                style={{
                  fontSize: lang === 'bn' ? '1.75rem' : '1.85rem',
                  fontWeight: 900,
                  color: 'var(--text-primary)',
                  textTransform: lang === 'bn' ? 'none' : 'uppercase',
                  letterSpacing: lang === 'bn' ? '0' : '0.04em',
                  lineHeight: 1.2,
                }}
              >
                {lang === 'bn' ? 'সংরক্ষিত সংবাদ তালিকা' : 'Saved Reading List'}
              </h1>
              <p
                className={lang === 'bn' ? 'font-bengali' : ''}
                style={{ fontSize: '0.86rem', color: 'var(--text-secondary)' }}
              >
                {lang === 'bn'
                  ? 'পরে পড়ার জন্য আপনার সংরক্ষিত ভারতীয় সংবাদমাধ্যমের প্রতিবেদনসমূহ।'
                  : 'Scanned Indian media articles you have bookmarked to review later.'}
              </p>
            </div>
          </div>

          <span
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
            {lang === 'bn' ? `${bookmarkedArticles.length} টি সংরক্ষিত` : `${bookmarkedArticles.length} Stories Saved`}
          </span>
        </div>

        {/* Content */}
        {bookmarkedArticles.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '5rem 1.5rem',
            backgroundColor: 'var(--bg-secondary)',
            borderRadius: 'var(--radius-md)',
            border: '1px dashed var(--border-primary)',
          }}>
            <BookOpen size={48} style={{ color: 'var(--brand-primary)', opacity: 0.5, margin: '0 auto 1rem auto' }} />
            <h3
              className={lang === 'bn' ? 'font-bengali' : 'font-serif'}
              style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}
            >
              {lang === 'bn' ? 'সংরক্ষিত তালিকা খালি' : 'Your Reading List is Empty'}
            </h3>
            <p
              className={lang === 'bn' ? 'font-bengali' : ''}
              style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', maxWidth: '440px', margin: '0 auto 1.5rem auto', lineHeight: 1.55 }}
            >
              {lang === 'bn'
                ? 'যেকোনো প্রতিবেদনের বুকমার্ক আইকনে ক্লিক করে আপনি সেটি এখানে সংরক্ষণ করে রাখতে পারেন।'
                : 'Whenever you encounter a scanned report you want to review later, click the bookmark icon on any card.'}
            </p>
            <Link
              href="/"
              className={lang === 'bn' ? 'font-bengali' : ''}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                backgroundColor: 'var(--brand-primary)',
                color: '#ffffff',
                fontWeight: 700,
                fontSize: '0.82rem',
                padding: '0.6rem 1.25rem',
                borderRadius: 'var(--radius-sm)',
                textTransform: lang === 'bn' ? 'none' : 'uppercase',
                letterSpacing: lang === 'bn' ? '0' : '0.04em',
              }}
            >
              {lang === 'bn' ? 'মূল পাতায় ফিরে যান' : 'Browse All Scans'} <ArrowRight size={14} />
            </Link>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {bookmarkedArticles.map((art) => (
              <div
                key={art.id}
                style={{
                  backgroundColor: 'var(--bg-card)',
                  padding: '1.25rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1.5rem',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <div style={{ flex: 1 }}>
                  <ArticleCard article={art} variant="horizontal" />
                </div>

                <button
                  onClick={() => toggleBookmark(art.slug)}
                  style={{
                    color: 'var(--brand-red)',
                    padding: '0.5rem',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'rgba(220, 38, 38, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                  title={lang === 'bn' ? 'তালিকা থেকে মুছুন' : 'Remove from saved'}
                  aria-label="Remove from saved"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

