'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useApp } from '@/context/ThemeContext';
import { SCANNED_NEWS_ITEMS, NewsItem } from '@/data/news-data';
import { TRANSLATIONS } from '@/data/translations';
import { formatArticleTimestamp } from '@/utils/date';
import SentimentBadge from './SentimentBadge';
import { Search, X, ExternalLink, Sparkles, Languages } from 'lucide-react';

const POPULAR_TAGS_BN = ['শেখ হাসিনা', 'আওয়ামী লীগ', 'তিস্তা নদী', 'পেট্রাপোল', 'বিএসএফ', 'ভিসা', 'ইলিশ', 'আদানি পাওয়ার'];
const POPULAR_TAGS_EN = ['Sheikh Hasina', 'Awami League', 'Teesta River', 'Petrapole', 'BSF', 'Visas', 'Hilsa', 'Adani Power'];

export default function SearchModal() {
  const { isSearchOpen, closeSearch, lang } = useApp();
  const t = TRANSLATIONS[lang];
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<NewsItem[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const popularTags = lang === 'bn' ? POPULAR_TAGS_BN : POPULAR_TAGS_EN;

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    } else {
      setQuery('');
      setResults([]);
    }
  }, [isSearchOpen]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const lower = query.toLowerCase();
    const filtered = SCANNED_NEWS_ITEMS.filter((art) => {
      const matchTitle = art.title.toLowerCase().includes(lower);
      const matchBnTitle = art.banglaTitle?.toLowerCase().includes(lower) || false;
      const matchEnTitle = art.englishTitle?.toLowerCase().includes(lower) || false;
      const matchSummaryBn = art.summaryBn.toLowerCase().includes(lower);
      const matchSummaryEn = art.summaryEn.toLowerCase().includes(lower);
      const matchSource = art.source.name.toLowerCase().includes(lower);
      const matchBureau = art.source.bureau.toLowerCase().includes(lower);
      const matchLang = art.source.language.toLowerCase().includes(lower);
      const matchTags = art.tags.some((tg) => tg.toLowerCase().includes(lower));

      return (
        matchTitle ||
        matchBnTitle ||
        matchEnTitle ||
        matchSummaryBn ||
        matchSummaryEn ||
        matchSource ||
        matchBureau ||
        matchLang ||
        matchTags
      );
    });

    setResults(filtered);
  }, [query]);

  if (!isSearchOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        backdropFilter: 'blur(6px)',
        zIndex: 200,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: '5vh 1rem 2rem 1rem',
      }}
      onClick={closeSearch}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '700px',
          backgroundColor: 'var(--bg-card)',
          borderRadius: 'var(--radius-lg)',
          boxShadow: 'var(--shadow-xl)',
          border: '1px solid var(--border-primary)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          maxHeight: '85vh',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Header Input */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          padding: '1rem 1.25rem',
          borderBottom: '1px solid var(--border-primary)',
          gap: '0.75rem',
          backgroundColor: 'var(--bg-primary)',
        }}>
          <Search size={20} style={{ color: 'var(--brand-primary)', flexShrink: 0 }} />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t.searchPlaceholder}
            className={lang === 'bn' ? 'font-bengali' : ''}
            style={{
              flex: 1,
              border: 'none',
              background: 'none',
              outline: 'none',
              fontSize: '1.05rem',
              color: 'var(--text-primary)',
              fontFamily: 'inherit',
            }}
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              style={{ color: 'var(--text-muted)' }}
              aria-label="Clear query"
            >
              <X size={18} />
            </button>
          )}
          <button
            onClick={closeSearch}
            style={{
              padding: '0.2rem 0.5rem',
              backgroundColor: 'var(--bg-secondary)',
              borderRadius: 'var(--radius-sm)',
              fontSize: '0.75rem',
              color: 'var(--text-muted)',
              border: '1px solid var(--border-primary)',
            }}
          >
            ESC
          </button>
        </div>

        {/* Quick Filter Tags */}
        <div style={{
          padding: '0.75rem 1.25rem',
          backgroundColor: 'var(--bg-secondary)',
          borderBottom: '1px solid var(--border-primary)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          flexWrap: 'wrap',
        }}>
          <span
            className={lang === 'bn' ? 'font-bengali' : ''}
            style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: lang === 'bn' ? 'none' : 'uppercase' }}
          >
            {lang === 'bn' ? 'দ্রুত ফিল্টার:' : 'Quick Filter:'}
          </span>
          {popularTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setQuery(tag)}
              className={lang === 'bn' ? 'font-bengali' : ''}
              style={{
                fontSize: '0.74rem',
                backgroundColor: 'var(--bg-card)',
                color: 'var(--text-primary)',
                padding: '0.2rem 0.55rem',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border-primary)',
                cursor: 'pointer',
                fontWeight: 600,
              }}
            >
              #{tag}
            </button>
          ))}
        </div>

        {/* Search Results Area */}
        <div style={{ padding: '1rem 1.25rem', overflowY: 'auto', flex: 1 }}>
          {query.trim() === '' ? (
            <div style={{ padding: '2rem 1rem', textAlign: 'center', color: 'var(--text-muted)' }}>
              <Sparkles size={32} style={{ margin: '0 auto 0.75rem auto', color: 'var(--brand-primary)', opacity: 0.6 }} />
              <p
                className={lang === 'bn' ? 'font-bengali' : ''}
                style={{ fontSize: '0.98rem', fontWeight: 700, color: 'var(--text-primary)' }}
              >
                {lang === 'bn' ? 'বাংলাদেশ সম্পর্কিত ভারতীয় গণমাধ্যমের ডেটাবেজ স্ক্যানার' : 'Scan Database of Indian Media on Bangladesh'}
              </p>
              <p
                className={lang === 'bn' ? 'font-bengali' : ''}
                style={{ fontSize: '0.84rem', marginTop: '0.35rem', lineHeight: 1.5 }}
              >
                {lang === 'bn'
                  ? 'আনন্দবাজার পত্রিকা, দ্য হিন্দু, ইন্ডিয়ান এক্সপ্রেস, দৈনিক জাগরণ, এই সময় ও অমর উজালা থেকে প্রতিবেদন খুঁজুন।'
                  : 'Search through scanned reports from Anandabazar Patrika, The Hindu, Indian Express, Dainik Jagran, and Ei Samay.'}
              </p>
            </div>
          ) : results.length === 0 ? (
            <div style={{ padding: '2.5rem 1rem', textAlign: 'center', color: 'var(--text-muted)' }}>
              <p
                className={lang === 'bn' ? 'font-bengali' : ''}
                style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }}
              >
                {lang === 'bn'
                  ? `"${query}" সম্পর্কিত কোনো স্ক্যানড প্রতিবেদন পাওয়া যায়নি`
                  : `No scanned items found for "${query}"`}
              </p>
              <p
                className={lang === 'bn' ? 'font-bengali' : ''}
                style={{ fontSize: '0.84rem', marginTop: '0.35rem' }}
              >
                {lang === 'bn'
                  ? "'তিস্তা', 'পেট্রাপোল', 'বিএসএফ', অথবা 'ভিসা' লিখে অনুসন্ধান করুন।"
                  : "Try searching 'Teesta', 'Petrapole', 'BSF', or 'Visas'."}
              </p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div
                className={lang === 'bn' ? 'font-bengali' : ''}
                style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: lang === 'bn' ? 'none' : 'uppercase' }}
              >
                {lang === 'bn'
                  ? `${results.length} টি স্ক্যানড প্রতিবেদন পাওয়া গেছে`
                  : `Found ${results.length} Scanned Reports`}
              </div>
              {results.map((art) => {
                const isHindi = art.source.language === 'Hindi';
                const isBengali = art.source.language === 'Bengali';
                const isEnglish = art.source.language === 'English';
                const titleFontClass = isBengali ? 'font-bengali' : isHindi ? 'font-devanagari' : 'font-serif';
                const summary = lang === 'bn' ? art.summaryBn : art.summaryEn;

                return (
                  <div
                    key={art.id}
                    style={{
                      display: 'block',
                      padding: '0.95rem',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'var(--bg-primary)',
                      border: '1px solid var(--border-subtle)',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.45rem', flexWrap: 'wrap', gap: '0.4rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <SentimentBadge sentiment={art.sentiment} size="sm" />
                        <span style={{ fontSize: '0.74rem', fontWeight: 700, color: 'var(--brand-primary)' }}>
                          {art.source.name} [{art.source.bureau}]
                        </span>
                      </div>
                      <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                        {formatArticleTimestamp(art.source.scannedAt, lang, art.publishedAt)}
                      </span>
                    </div>

                    {/* Original Headline */}
                    <Link
                      href={`/article/${art.slug}`}
                      onClick={closeSearch}
                      style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                      <h4
                        className={titleFontClass}
                        style={{
                          fontSize: isBengali || isHindi ? '1.05rem' : '1.05rem',
                          fontWeight: 700,
                          color: 'var(--text-primary)',
                          marginBottom: '0.35rem',
                          lineHeight: 1.4,
                          transition: 'color 0.15s ease',
                        }}
                      >
                        {art.title}
                      </h4>
                    </Link>

                    {/* Hindi translations */}
                    {isHindi && (art.englishTitle || art.banglaTitle) && (
                      <div style={{
                        backgroundColor: 'var(--bg-secondary)',
                        padding: '0.35rem 0.55rem',
                        borderRadius: 'var(--radius-sm)',
                        fontSize: '0.76rem',
                        marginBottom: '0.45rem',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.2rem',
                      }}>
                        {art.banglaTitle && <div className="font-bengali"><strong style={{ color: '#059669', fontFamily: 'var(--font-sans)' }}>বাংলা:</strong> {art.banglaTitle}</div>}
                        {art.englishTitle && <div><strong style={{ color: 'var(--brand-accent)' }}>EN:</strong> {art.englishTitle}</div>}
                      </div>
                    )}

                    {/* English translations */}
                    {isEnglish && art.banglaTitle && (
                      <div style={{
                        backgroundColor: 'var(--bg-secondary)',
                        padding: '0.3rem 0.5rem',
                        borderRadius: 'var(--radius-sm)',
                        fontSize: '0.76rem',
                        marginBottom: '0.45rem',
                      }}>
                        <div className="font-bengali"><strong style={{ color: '#059669', fontFamily: 'var(--font-sans)' }}>বাংলা অনুবাদ:</strong> {art.banglaTitle}</div>
                      </div>
                    )}

                    <p
                      className={lang === 'bn' ? 'font-bengali' : ''}
                      style={{ fontSize: lang === 'bn' ? '0.88rem' : '0.84rem', color: 'var(--text-secondary)', marginBottom: '0.5rem', lineHeight: 1.55 }}
                    >
                      {summary}
                    </p>

                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                      <a
                        href={art.source.originalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={lang === 'bn' ? 'font-bengali' : ''}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.25rem',
                          fontSize: '0.76rem',
                          fontWeight: 700,
                          color: 'var(--brand-primary)',
                        }}
                      >
                        {t.readOriginalOn} {art.source.name} <ExternalLink size={11} />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

