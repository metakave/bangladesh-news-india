'use client';

import React from 'react';
import Link from 'next/link';
import { NewsItem, SCANNER_STATS } from '@/data/news-data';
import { useApp } from '@/context/ThemeContext';
import { TRANSLATIONS } from '@/data/translations';
import ArticleCard from './ArticleCard';
import SentimentBadge from './SentimentBadge';
import { Radio, Building2, ExternalLink } from 'lucide-react';

interface HeroGridProps {
  articles: NewsItem[];
}

export default function HeroGrid({ articles }: HeroGridProps) {
  const { lang } = useApp();
  const t = TRANSLATIONS[lang];

  const leadArticle = articles.find((a) => a.isLeadStory) || articles[0];
  const secondaryStories = articles.filter((a) => !a.isLeadStory && a.isTrending).slice(0, 2);
  const leftColumnStories = articles.filter((a) => a.id !== leadArticle?.id && !secondaryStories.some(s => s.id === a.id)).slice(0, 3);
  const delhiStories = articles.filter((a) => a.source.bureau === 'Delhi');

  return (
    <section style={{ padding: '1.75rem 0', borderBottom: '1px solid var(--border-primary)' }}>
      <div className="container">
        <div className="hero-grid-layout">
          {/* Left Column: Kolkata Bureau Radar */}
          <div className="hero-col-left border-divider-r">
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottom: '2px solid var(--brand-primary)',
              paddingBottom: '0.4rem',
              marginBottom: '1.25rem'
            }}>
              <div
                className={lang === 'bn' ? 'font-bengali' : ''}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: lang === 'bn' ? '0.85rem' : '0.78rem',
                  fontWeight: 800,
                  textTransform: lang === 'bn' ? 'none' : 'uppercase',
                  letterSpacing: lang === 'bn' ? '0' : '0.08em',
                  color: 'var(--brand-primary)',
                }}
              >
                <Building2 size={14} />
                {t.kolkataPressDesk}
              </div>
              <span style={{ fontSize: '0.68rem', fontWeight: 700, color: 'var(--text-muted)' }}>
                ABP • Ei Samay
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {leftColumnStories.map((art, idx) => (
                <div key={art.id} style={{ borderBottom: idx !== leftColumnStories.length - 1 ? '1px solid var(--border-subtle)' : 'none', paddingBottom: idx !== leftColumnStories.length - 1 ? '1.25rem' : 0 }}>
                  <ArticleCard article={art} variant="compact" />
                </div>
              ))}
            </div>

            {/* Ingestion Intelligence Summary Box */}
            <div style={{
              marginTop: '1.5rem',
              padding: '1rem',
              backgroundColor: 'var(--bg-secondary)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-primary)'
            }}>
              <div
                className={lang === 'bn' ? 'font-bengali' : ''}
                style={{ fontSize: '0.74rem', fontWeight: 800, textTransform: lang === 'bn' ? 'none' : 'uppercase', color: 'var(--text-primary)', marginBottom: '0.65rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}
              >
                <Radio size={13} style={{ color: 'var(--brand-primary)' }} />
                {lang === 'bn' ? 'দিল্লি / কলকাতা স্ক্যানার স্ট্যাটাস' : 'Delhi / Kolkata Scanner Pulse'}
              </div>
              <div
                className={lang === 'bn' ? 'font-bengali' : ''}
                style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.78rem', color: 'var(--text-secondary)' }}
              >
                <div>• {lang === 'bn' ? `গত ২৪ ঘণ্টায় স্ক্যান করা হয়েছে ${SCANNER_STATS.totalScanned24h}টি ভারতীয় সংবাদ` : `Scanned ${SCANNER_STATS.totalScanned24h} Indian articles in last 24h`}</div>
                <div>• {lang === 'bn' ? `${SCANNER_STATS.bangladeshMatches}টি সংবাদে বাংলাদেশ বিষয়ক তথ্য চিহ্নিত` : `${SCANNER_STATS.bangladeshMatches} identified with keyword 'Bangladesh'`}</div>
                <div>• {lang === 'bn' ? `${SCANNER_STATS.bureauDistribution.kolkata}টি কলকাতা এবং ${SCANNER_STATS.bureauDistribution.delhi}টি দিল্লি ব্যুরোর` : `${SCANNER_STATS.bureauDistribution.kolkata} from Kolkata, ${SCANNER_STATS.bureauDistribution.delhi} from Delhi`}</div>
              </div>
            </div>
          </div>

          {/* Center Column: Dominant Lead Story + Sub-featured Grid */}
          <div className="hero-col-center border-divider-r">
            {leadArticle && <ArticleCard article={leadArticle} variant="lead" />}

            {/* Sub-featured stories */}
            <div style={{
              marginTop: '2rem',
              paddingTop: '1.75rem',
              borderTop: '1px solid var(--border-primary)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1.5rem'
            }}>
              {secondaryStories.map((story) => (
                <ArticleCard key={story.id} article={story} variant="featured" />
              ))}
            </div>
          </div>

          {/* Right Column: Delhi Bureau Focus */}
          <div className="hero-col-right">
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottom: '2px solid var(--border-bold)',
              paddingBottom: '0.4rem',
              marginBottom: '1.25rem'
            }}>
              <div
                className={lang === 'bn' ? 'font-bengali' : ''}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: lang === 'bn' ? '0.85rem' : '0.78rem',
                  fontWeight: 800,
                  textTransform: lang === 'bn' ? 'none' : 'uppercase',
                  letterSpacing: lang === 'bn' ? '0' : '0.08em',
                  color: 'var(--text-primary)',
                }}
              >
                <Building2 size={14} style={{ color: 'var(--brand-accent)' }} />
                {t.delhiNationalDesk}
              </div>
              <span style={{ fontSize: '0.68rem', fontWeight: 700, color: 'var(--text-muted)' }}>
                The Hindu • Express
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {delhiStories.slice(0, 4).map((art, idx) => (
                <div
                  key={art.id}
                  style={{
                    paddingBottom: '0.85rem',
                    borderBottom: idx !== delhiStories.slice(0, 4).length - 1 ? '1px solid var(--border-subtle)' : 'none',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                    <SentimentBadge sentiment={art.sentiment} size="sm" />
                    <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)', fontWeight: 700 }}>
                      {art.source.name}
                    </span>
                  </div>

                  <a
                    href={art.source.originalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none' }}
                  >
                    <h4
                      className={art.source.language === 'Hindi' ? 'font-devanagari' : art.source.language === 'Bengali' ? 'font-bengali' : 'font-serif'}
                      style={{
                        fontSize: '0.94rem',
                        fontWeight: 700,
                        lineHeight: 1.35,
                        color: 'var(--text-primary)',
                        marginBottom: '0.3rem',
                      }}
                    >
                      {art.title}
                    </h4>
                  </a>

                  {/* Bangla translation for Hindi or English when in bn mode */}
                  {art.banglaTitle && (
                    <div className="font-bengali" style={{ fontSize: '0.78rem', color: '#059669', marginBottom: '0.3rem', fontWeight: 600 }}>
                      বাংলা: {art.banglaTitle}
                    </div>
                  )}

                  <p
                    className={lang === 'bn' ? 'font-bengali' : ''}
                    style={{
                      fontSize: lang === 'bn' ? '0.84rem' : '0.8rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.45,
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {lang === 'bn' ? art.summaryBn : art.summaryEn}
                  </p>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '0.35rem', fontSize: '0.7rem' }}>
                    <span style={{ color: 'var(--text-muted)' }}>{art.source.language}</span>
                    <a
                      href={art.source.originalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={lang === 'bn' ? 'font-bengali' : ''}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.2rem',
                        color: 'var(--brand-primary)',
                        fontWeight: 700,
                      }}
                    >
                      {t.sourceLink} <ExternalLink size={10} />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Methodology Note Box */}
            <div style={{
              marginTop: '1.75rem',
              padding: '1.15rem',
              backgroundColor: 'var(--bg-accent)',
              borderRadius: 'var(--radius-md)',
              borderLeft: '3px solid var(--brand-primary)'
            }}>
              <div
                className={lang === 'bn' ? 'font-bengali' : ''}
                style={{ fontSize: '0.72rem', fontWeight: 800, textTransform: lang === 'bn' ? 'none' : 'uppercase', color: 'var(--brand-primary)', marginBottom: '0.35rem', letterSpacing: '0.06em' }}
              >
                {lang === 'bn' ? 'অটোমেটেড স্ক্যানার নীতিমালা' : 'Automated Scanner Rule'}
              </div>
              <p
                className={lang === 'bn' ? 'font-bengali' : ''}
                style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', lineHeight: 1.45 }}
              >
                {lang === 'bn'
                  ? 'দিল্লি ও কলকাতার শীর্ষ সংবাদমাধ্যম থেকে বাংলাদেশ বিষয়ক সংবাদ স্বয়ংক্রিয়ভাবে স্ক্যান করা হয়। শিরোনাম মূল ভাষায় রেখে ইতিবাচক, নিরপেক্ষ ও নেতিবাচক দৃষ্টিভঙ্গি চিহ্নিত করা হয়।'
                  : 'Articles are scanned continuously from accredited Indian newsrooms in Delhi & Kolkata. Summaries are extracted objectively and tagged with Positive, Neutral, or Negative markers.'}
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-grid-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.75rem;
        }

        @media (min-width: 860px) {
          .hero-grid-layout {
            grid-template-columns: 2.2fr 1fr;
          }
          .hero-col-left {
            display: none;
          }
        }

        @media (min-width: 1120px) {
          .hero-grid-layout {
            grid-template-columns: 1fr 2.4fr 1.15fr;
          }
          .hero-col-left {
            display: block;
          }
        }

        @media (max-width: 859px) {
          .border-divider-r {
            border-right: none !important;
            padding-right: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
