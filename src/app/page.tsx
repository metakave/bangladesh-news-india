'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { SCANNED_NEWS_ITEMS, SentimentType, BureauType, LanguageType } from '@/data/news-data';
import { useApp } from '@/context/ThemeContext';
import { TRANSLATIONS } from '@/data/translations';
import HeroGrid from '@/components/HeroGrid';
import SentimentTrackerBar from '@/components/SentimentTrackerBar';
import ArticleCard from '@/components/ArticleCard';
import Newsletter from '@/components/Newsletter';
import { Building2, Globe, Shield, Sparkles, Archive, ArrowRight } from 'lucide-react';

export default function HomePage() {
  const { lang } = useApp();
  const t = TRANSLATIONS[lang];

  const [selectedSentiment, setSelectedSentiment] = useState<'all' | SentimentType>('all');
  const [selectedBureau, setSelectedBureau] = useState<'all' | BureauType>('all');
  const [selectedLanguage, setSelectedLanguage] = useState<'all' | LanguageType>('all');

  const filteredArticles = SCANNED_NEWS_ITEMS.filter((item) => {
    if (selectedSentiment !== 'all' && item.sentiment !== selectedSentiment) return false;
    if (selectedBureau !== 'all' && item.source.bureau !== selectedBureau) return false;
    if (selectedLanguage !== 'all' && item.source.language !== selectedLanguage) return false;
    return true;
  });

  const diplomacyReports = filteredArticles.filter((a) => a.category === 'diplomacy');
  const tradeReports = filteredArticles.filter((a) => a.category === 'trade' || a.category === 'economy');
  const borderReports = filteredArticles.filter((a) => a.category === 'border');
  const sportsAndCulture = filteredArticles.filter((a) => a.category === 'sports' || a.category === 'culture');

  return (
    <div>
      {/* 1. Live Sentiment & Bureau Filter Bar */}
      <SentimentTrackerBar
        selectedSentiment={selectedSentiment}
        onSelectSentiment={setSelectedSentiment}
        selectedBureau={selectedBureau}
        onSelectBureau={setSelectedBureau}
        selectedLanguage={selectedLanguage}
        onSelectLanguage={setSelectedLanguage}
        totalCount={SCANNED_NEWS_ITEMS.length}
      />

      {/* 2. Frontpage Editorial Grid */}
      {selectedSentiment === 'all' && selectedBureau === 'all' && selectedLanguage === 'all' ? (
        <HeroGrid articles={SCANNED_NEWS_ITEMS} />
      ) : (
        /* Filtered View Header & Results Grid */
        <section style={{ padding: '2rem 0', borderBottom: '1px solid var(--border-primary)' }}>
          <div className="container">
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '1.5rem',
              borderBottom: '2px solid var(--border-bold)',
              paddingBottom: '0.75rem',
            }}>
              <div>
                <h2 className={lang === 'bn' ? 'font-bengali' : 'font-masthead'} style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                  {t.filteredReports} ({filteredArticles.length})
                </h2>
                <div className={lang === 'bn' ? 'font-bengali' : ''} style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                  {lang === 'bn'
                    ? `ফিল্টার শর্ত: মনোভাব: ${selectedSentiment} | ব্যুরো: ${selectedBureau} | ভাষা: ${selectedLanguage}`
                    : `Showing reports matching: Sentiment: ${selectedSentiment.toUpperCase()} | Bureau: ${selectedBureau} | Language: ${selectedLanguage}`}
                </div>
              </div>

              <button
                onClick={() => {
                  setSelectedSentiment('all');
                  setSelectedBureau('all');
                  setSelectedLanguage('all');
                }}
                className={lang === 'bn' ? 'font-bengali' : ''}
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  color: 'var(--brand-primary)',
                  backgroundColor: 'var(--bg-secondary)',
                  padding: '0.35rem 0.75rem',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--border-primary)',
                }}
              >
                {t.resetFilters}
              </button>
            </div>

            {filteredArticles.length === 0 ? (
              <div style={{ padding: '4rem 1rem', textAlign: 'center', color: 'var(--text-muted)' }}>
                <p className={lang === 'bn' ? 'font-bengali' : ''} style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  {t.noReportsFound}
                </p>
                <button
                  onClick={() => {
                    setSelectedSentiment('all');
                    setSelectedBureau('all');
                    setSelectedLanguage('all');
                  }}
                  className={lang === 'bn' ? 'font-bengali' : ''}
                  style={{ marginTop: '1rem', color: 'var(--brand-primary)', fontWeight: 700 }}
                >
                  {t.viewAllScanned}
                </button>
              </div>
            ) : (
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                gap: '1.75rem',
              }}>
                {filteredArticles.map((item) => (
                  <ArticleCard key={item.id} article={item} variant="featured" />
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* 3. Diplomacy & Water Negotiations Hub */}
      {diplomacyReports.length > 0 && (
        <section style={{ padding: '2.5rem 0', borderBottom: '1px solid var(--border-primary)' }}>
          <div className="container">
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottom: '2px solid var(--border-bold)',
              paddingBottom: '0.6rem',
              marginBottom: '1.75rem',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Globe size={18} style={{ color: 'var(--brand-primary)' }} />
                <h3 className={lang === 'bn' ? 'font-bengali' : 'font-masthead'} style={{
                  fontSize: '1.35rem',
                  fontWeight: 800,
                  color: 'var(--text-primary)',
                  letterSpacing: lang === 'bn' ? '0' : '0.04em',
                }}>
                  {t.sections.diplomacy}
                </h3>
              </div>
              <span className={lang === 'bn' ? 'font-bengali' : ''} style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                {t.sections.diplomacySub}
              </span>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '1.75rem',
            }}>
              {diplomacyReports.map((art) => (
                <ArticleCard key={art.id} article={art} variant="featured" />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4. Cross-Border Trade & Freight Logistics Hub */}
      {tradeReports.length > 0 && (
        <section style={{ padding: '2.5rem 0', borderBottom: '1px solid var(--border-primary)', backgroundColor: 'var(--bg-secondary)' }}>
          <div className="container">
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottom: '2px solid var(--border-bold)',
              paddingBottom: '0.6rem',
              marginBottom: '1.75rem',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Building2 size={18} style={{ color: 'var(--brand-primary)' }} />
                <h3 className={lang === 'bn' ? 'font-bengali' : 'font-masthead'} style={{
                  fontSize: '1.35rem',
                  fontWeight: 800,
                  color: 'var(--text-primary)',
                  letterSpacing: lang === 'bn' ? '0' : '0.04em',
                }}>
                  {t.sections.trade}
                </h3>
              </div>
              <span className={lang === 'bn' ? 'font-bengali' : ''} style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                {t.sections.tradeSub}
              </span>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '1.75rem',
            }}>
              {tradeReports.map((art) => (
                <ArticleCard key={art.id} article={art} variant="featured" />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. Border Security & Frontier Vigil Hub */}
      {borderReports.length > 0 && (
        <section style={{ padding: '2.5rem 0', borderBottom: '1px solid var(--border-primary)' }}>
          <div className="container">
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottom: '2px solid var(--border-bold)',
              paddingBottom: '0.6rem',
              marginBottom: '1.75rem',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Shield size={18} style={{ color: '#dc2626' }} />
                <h3 className={lang === 'bn' ? 'font-bengali' : 'font-masthead'} style={{
                  fontSize: '1.35rem',
                  fontWeight: 800,
                  color: 'var(--text-primary)',
                  letterSpacing: lang === 'bn' ? '0' : '0.04em',
                }}>
                  {t.sections.border}
                </h3>
              </div>
              <span className={lang === 'bn' ? 'font-bengali' : ''} style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                {t.sections.borderSub}
              </span>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '1.75rem',
            }}>
              {borderReports.map((art) => (
                <ArticleCard key={art.id} article={art} variant="featured" />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. Sports & Cultural Exchange */}
      {sportsAndCulture.length > 0 && (
        <section style={{ padding: '2.5rem 0', borderBottom: '1px solid var(--border-primary)', backgroundColor: 'var(--bg-card)' }}>
          <div className="container">
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottom: '2px solid var(--border-bold)',
              paddingBottom: '0.6rem',
              marginBottom: '1.75rem',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Sparkles size={18} style={{ color: 'var(--brand-gold)' }} />
                <h3 className={lang === 'bn' ? 'font-bengali' : 'font-masthead'} style={{
                  fontSize: '1.35rem',
                  fontWeight: 800,
                  color: 'var(--text-primary)',
                  letterSpacing: lang === 'bn' ? '0' : '0.04em',
                }}>
                  {t.sections.sports}
                </h3>
              </div>
              <span className={lang === 'bn' ? 'font-bengali' : ''} style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                {t.sections.sportsSub}
              </span>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '1.75rem',
            }}>
              {sportsAndCulture.map((art) => (
                <ArticleCard key={art.id} article={art} variant="featured" />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 7. Comprehensive Archive Callout */}
      <section style={{ padding: '2.5rem 0', borderBottom: '1px solid var(--border-primary)', backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem',
            padding: '1.75rem 2rem',
            backgroundColor: 'var(--bg-primary)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-primary)',
            boxShadow: 'var(--shadow-sm)',
          }}>
            <div style={{ maxWidth: '680px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.4rem' }}>
                <Archive size={16} style={{ color: 'var(--brand-primary)' }} />
                <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--brand-primary)', letterSpacing: '0.06em' }}>
                  {t.archive.badge}
                </span>
              </div>
              <h3 className={lang === 'bn' ? 'font-bengali' : 'font-masthead'} style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                {t.archive.exploreArchiveCta}
              </h3>
              <p className={lang === 'bn' ? 'font-bengali' : ''} style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', margin: 0 }}>
                {t.archive.tagline}
              </p>
            </div>

            <div>
              <Link
                href="/archive"
                className={lang === 'bn' ? 'font-bengali' : ''}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem 1.4rem',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'var(--brand-primary)',
                  color: '#ffffff',
                  fontSize: '0.88rem',
                  fontWeight: 700,
                  textDecoration: 'none',
                  whiteSpace: 'nowrap',
                  boxShadow: 'var(--shadow-sm)',
                  transition: 'opacity 0.15s ease',
                }}
              >
                <Archive size={16} />
                {t.archive.viewArchiveBtn}
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Newsletter */}
      <Newsletter />
    </div>
  );
}
