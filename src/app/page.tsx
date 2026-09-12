'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { SCANNED_NEWS_ITEMS, SentimentType, BureauType, LanguageType, SCANNER_STATS } from '@/data/news-data';
import HeroGrid from '@/components/HeroGrid';
import SentimentTrackerBar from '@/components/SentimentTrackerBar';
import ArticleCard from '@/components/ArticleCard';
import Newsletter from '@/components/Newsletter';
import { Radio, ArrowRight, Sparkles, Building2, Globe, Shield, RefreshCw } from 'lucide-react';

export default function HomePage() {
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
                <h2 className="font-masthead" style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                  Filtered Scanned Reports ({filteredArticles.length})
                </h2>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                  Showing reports matching: Sentiment: <strong>{selectedSentiment.toUpperCase()}</strong> | Bureau: <strong>{selectedBureau}</strong> | Language: <strong>{selectedLanguage}</strong>
                </div>
              </div>

              <button
                onClick={() => {
                  setSelectedSentiment('all');
                  setSelectedBureau('all');
                  setSelectedLanguage('all');
                }}
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
                Reset Filters
              </button>
            </div>

            {filteredArticles.length === 0 ? (
              <div style={{ padding: '4rem 1rem', textAlign: 'center', color: 'var(--text-muted)' }}>
                <p style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  No scanned reports match this specific combination of filters.
                </p>
                <button
                  onClick={() => {
                    setSelectedSentiment('all');
                    setSelectedBureau('all');
                    setSelectedLanguage('all');
                  }}
                  style={{ marginTop: '1rem', color: 'var(--brand-primary)', fontWeight: 700 }}
                >
                  View All Scanned Articles
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
                <h3 className="font-masthead" style={{
                  fontSize: '1.35rem',
                  fontWeight: 800,
                  color: 'var(--text-primary)',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                }}>
                  Diplomacy, Water &amp; Bilateral Governance
                </h3>
              </div>
              <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                Scanned from Delhi MEA &amp; Foreign Desks
              </span>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
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
                <h3 className="font-masthead" style={{
                  fontSize: '1.35rem',
                  fontWeight: 800,
                  color: 'var(--text-primary)',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                }}>
                  Trade, Petrapole-Benapole Freight &amp; Energy
                </h3>
              </div>
              <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                Kolkata &amp; Border Customs Reporting
              </span>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
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
                <h3 className="font-masthead" style={{
                  fontSize: '1.35rem',
                  fontWeight: 800,
                  color: 'var(--text-primary)',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                }}>
                  Border Security, BSF &amp; Frontier Reports
                </h3>
              </div>
              <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                Meghalaya, Tripura &amp; North Bengal Desks
              </span>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
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
                <h3 className="font-masthead" style={{
                  fontSize: '1.35rem',
                  fontWeight: 800,
                  color: 'var(--text-primary)',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                }}>
                  Sports Diplomacy &amp; Cultural Connections
                </h3>
              </div>
              <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                Eden Gardens &amp; Bengal Diaspora
              </span>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '1.75rem',
            }}>
              {sportsAndCulture.map((art) => (
                <ArticleCard key={art.id} article={art} variant="featured" />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 7. Newsletter */}
      <Newsletter />
    </div>
  );
}
