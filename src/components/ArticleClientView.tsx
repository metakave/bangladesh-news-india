'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { NewsItem } from '@/data/news-data';
import { useApp } from '@/context/ThemeContext';
import { TRANSLATIONS } from '@/data/translations';
import { formatArticleTimestamp } from '@/utils/date';
import SentimentBadge from './SentimentBadge';
import SourceBadge from './SourceBadge';
import ArticleCard from './ArticleCard';
import {
  Clock,
  Calendar,
  Share2,
  ChevronRight,
  ExternalLink,
  Bookmark,
  Sparkles,
  TrendingUp,
  Languages,
  ArrowLeft,
  CheckCircle2
} from 'lucide-react';

const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&auto=format&fit=crop&q=80';

interface ArticleClientViewProps {
  article: NewsItem;
  relatedArticles: NewsItem[];
  trendingArticles?: NewsItem[];
}

export default function ArticleClientView({
  article,
  relatedArticles,
  trendingArticles = [],
}: ArticleClientViewProps) {
  const { lang, isBookmarked } = useApp();
  const t = TRANSLATIONS[lang];
  const [copied, setCopied] = useState(false);
  const [imgSrc, setImgSrc] = useState(article.imageUrl || FALLBACK_IMAGE);

  const isBengaliContent = /[\u0980-\u09FF]/.test(article.title) || article.source.language === 'Bengali';
  const isHindiContent = /[\u0900-\u097F]/.test(article.title) || article.source.language === 'Hindi';
  const isEnglishContent = !isBengaliContent && !isHindiContent;

  const isHindi = article.source.language === 'Hindi';
  const isBengali = article.source.language === 'Bengali';
  const isEnglish = article.source.language === 'English';

  const categoryLabel = lang === 'bn' ? article.categoryLabelBn : article.categoryLabelEn;
  const summary = lang === 'bn' ? article.summaryBn : article.summaryEn;
  const keyPoints = lang === 'bn' ? article.keyPointsBn : article.keyPointsEn;
  const sentimentReason = lang === 'bn' ? article.sentimentReasonBn : article.sentimentReasonEn;
  const readTime = lang === 'bn' ? article.readTimeBn : article.readTimeEn;

  const titleFontClass = isBengaliContent ? 'font-bengali' : isHindiContent ? 'font-devanagari' : 'font-serif';

  const formattedScannedTime = formatArticleTimestamp(article.source.scannedAt, lang, article.publishedAt);
  const formattedDate = new Date(article.publishedAt).toLocaleDateString(lang === 'bn' ? 'bn-BD' : 'en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const handleShare = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <article style={{ padding: '2rem 0 4rem 0' }}>
      <div className="container">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem',
          fontSize: '0.78rem',
          color: 'var(--text-muted)',
          marginBottom: '1.5rem',
          flexWrap: 'wrap',
        }}>
          <Link href="/" style={{ color: 'var(--text-secondary)' }} className={lang === 'bn' ? 'font-bengali' : ''}>
            {lang === 'bn' ? 'হোম' : 'Home'}
          </Link>
          <ChevronRight size={12} />
          <Link
            href={`/category/${article.category}`}
            style={{ color: 'var(--brand-primary)', fontWeight: 600 }}
            className={lang === 'bn' ? 'font-bengali' : ''}
          >
            {categoryLabel}
          </Link>
          <ChevronRight size={12} />
          <span style={{ color: 'var(--text-muted)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '340px' }} className={isBengaliContent || lang === 'bn' ? 'font-bengali' : ''}>
            {article.title}
          </span>
        </nav>

        {/* Article Grid Container */}
        <div className="article-layout-grid">
          {/* Main Article Content Column */}
          <div className="article-main-col">
            {/* Header / Badges & Metadata */}
            <header style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
                  <Link href={`/category/${article.category}`} className={`category-pill ${lang === 'bn' ? 'font-bengali' : ''}`}>
                    {categoryLabel}
                  </Link>
                  <SourceBadge source={article.source} />
                </div>
                <SentimentBadge sentiment={article.sentiment} size="md" />
              </div>

              {/* Main Original Headline */}
              <h1
                className={titleFontClass}
                style={{
                  fontSize: 'clamp(1.75rem, 3.8vw, 2.75rem)',
                  fontWeight: 800,
                  lineHeight: isBengaliContent || isHindiContent ? 1.35 : 1.2,
                  color: 'var(--text-primary)',
                  letterSpacing: isBengaliContent || isHindiContent ? '0' : '-0.02em',
                  marginBottom: '1.25rem',
                }}
              >
                {article.title}
              </h1>

              {/* Parallel Translation Box */}
              {isHindiContent && article.banglaTitle && (
                <div style={{
                  backgroundColor: 'rgba(201, 58, 29, 0.05)',
                  borderLeft: '4px solid var(--brand-primary)',
                  padding: '0.85rem 1.15rem',
                  borderRadius: '0 var(--radius-sm) var(--radius-sm) 0',
                  marginBottom: '1.25rem',
                }}>
                  <div style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--brand-primary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.35rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <Languages size={13} /> {t.hindiTranslationHeader}
                  </div>
                  <p className="font-bengali" style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--text-primary)', lineHeight: 1.45, marginBottom: article.englishTitle ? '0.35rem' : 0 }}>
                    {article.banglaTitle}
                  </p>
                  {article.englishTitle && (
                    <p className="font-serif" style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', fontStyle: 'italic', lineHeight: 1.4 }}>
                      <strong style={{ fontStyle: 'normal' }}>EN:</strong> {article.englishTitle}
                    </p>
                  )}
                </div>
              )}

              {isBengaliContent && article.englishTitle && article.englishTitle !== article.title && (
                <div style={{
                  backgroundColor: 'rgba(15, 76, 129, 0.05)',
                  borderLeft: '4px solid var(--brand-accent)',
                  padding: '0.85rem 1.15rem',
                  borderRadius: '0 var(--radius-sm) var(--radius-sm) 0',
                  marginBottom: '1.25rem',
                }}>
                  <div style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--brand-accent)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.35rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <Languages size={13} /> {t.englishTranslationHeader}
                  </div>
                  <p className="font-serif" style={{ fontSize: '1.02rem', fontWeight: 600, color: 'var(--text-primary)', lineHeight: 1.4, fontStyle: 'italic' }}>
                    {article.englishTitle}
                  </p>
                </div>
              )}

              {isEnglishContent && article.banglaTitle && article.banglaTitle !== article.title && (
                <div style={{
                  backgroundColor: 'rgba(15, 76, 129, 0.05)',
                  borderLeft: '4px solid var(--brand-accent)',
                  padding: '0.85rem 1.15rem',
                  borderRadius: '0 var(--radius-sm) var(--radius-sm) 0',
                  marginBottom: '1.25rem',
                }}>
                  <div style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--brand-accent)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.35rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <Languages size={13} /> {lang === 'bn' ? 'বাংলা অনুবাদ' : 'Bengali Headline Translation'}
                  </div>
                  <p className="font-bengali" style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--text-primary)', lineHeight: 1.45 }}>
                    {article.banglaTitle}
                  </p>
                </div>
              )}

              {/* Byline & Metadata Ribbon */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1rem',
                paddingTop: '1rem',
                borderTop: '1px solid var(--border-primary)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                    <Calendar size={13} /> {formattedDate}
                  </span>
                  <span>•</span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                    <Clock size={13} /> {readTime}
                  </span>
                  <span>•</span>
                  <span style={{ color: 'var(--brand-primary)', fontWeight: 600 }}>
                    {t.scannedAgo}: {formattedScannedTime}
                  </span>
                </div>

                {/* Actions: Share */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>

                  <button
                    onClick={handleShare}
                    aria-label="Share article link"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      padding: '0.4rem 0.75rem',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: 'var(--bg-secondary)',
                      color: 'var(--text-secondary)',
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      transition: 'all 0.15s ease',
                    }}
                  >
                    {copied ? <CheckCircle2 size={14} style={{ color: 'var(--brand-green)' }} /> : <Share2 size={14} />}
                    {copied ? (lang === 'bn' ? 'কপি হয়েছে' : 'Copied!') : (lang === 'bn' ? 'শেয়ার' : 'Share')}
                  </button>
                </div>
              </div>
            </header>

            {/* Main Featured Image */}
            {article.imageUrl && (
              <figure style={{ margin: '1.5rem 0 2rem 0' }}>
                <div style={{
                  position: 'relative',
                  width: '100%',
                  height: '420px',
                  borderRadius: 'var(--radius-sm)',
                  overflow: 'hidden',
                  backgroundColor: 'var(--bg-secondary)',
                }}>
                  <Image
                    src={imgSrc}
                    alt={article.title}
                    fill
                    priority
                    onError={() => setImgSrc(FALLBACK_IMAGE)}
                    sizes="(max-width: 1024px) 100vw, 70vw"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <figcaption style={{
                  fontSize: '0.78rem',
                  color: 'var(--text-muted)',
                  marginTop: '0.5rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '0.5rem'
                }}>
                  <span className={isBengaliContent || lang === 'bn' ? 'font-bengali' : ''}>{article.title}</span>
                  <span style={{ fontWeight: 600 }}>Source: {article.source.name} ({article.source.bureau} Bureau)</span>
                </figcaption>
              </figure>
            )}

            {/* Sentiment & Narrative Context Banner */}
            <div style={{
              backgroundColor: article.sentiment === 'positive'
                ? 'rgba(21, 128, 61, 0.08)'
                : article.sentiment === 'negative'
                ? 'rgba(220, 38, 38, 0.08)'
                : 'rgba(74, 85, 104, 0.08)',
              borderLeft: `4px solid ${
                article.sentiment === 'positive'
                  ? 'var(--brand-green)'
                  : article.sentiment === 'negative'
                  ? 'var(--brand-red)'
                  : 'var(--text-secondary)'
              }`,
              padding: '1.15rem 1.35rem',
              borderRadius: '0 var(--radius-md) var(--radius-md) 0',
              margin: '2rem 0',
            }}>
              <div style={{
                fontSize: lang === 'bn' ? '0.84rem' : '0.78rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: article.sentiment === 'positive'
                  ? 'var(--brand-green)'
                  : article.sentiment === 'negative'
                  ? 'var(--brand-red)'
                  : 'var(--text-secondary)',
                marginBottom: '0.4rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
              }}>
                <Sparkles size={14} />
                {t.scannerContext} {lang === 'bn'
                  ? (article.sentiment === 'positive' ? 'ইতিবাচক দৃষ্টিভঙ্গি' : article.sentiment === 'negative' ? 'নেতিবাচক / সতর্কবার্তা' : 'নিরপেক্ষ বিশ্লেষণ')
                  : (article.sentiment === 'positive' ? 'Positive Narrative on BD' : article.sentiment === 'negative' ? 'Negative Narrative on BD' : 'Neutral / Policy Appraisal')}
              </div>
              <p className={lang === 'bn' ? 'font-bengali' : ''} style={{ fontSize: lang === 'bn' ? '1.02rem' : '0.96rem', color: 'var(--text-primary)', lineHeight: 1.6 }}>
                {sentimentReason}
              </p>
            </div>

            {/* Key Strategic Highlights Box */}
            {keyPoints && keyPoints.length > 0 && (
              <div style={{
                backgroundColor: 'var(--bg-secondary)',
                border: '1px solid var(--border-primary)',
                padding: '1.25rem 1.5rem',
                borderRadius: 'var(--radius-md)',
                margin: '2rem 0',
              }}>
                <div style={{
                  fontSize: '0.78rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  color: 'var(--brand-primary)',
                  marginBottom: '0.75rem',
                  letterSpacing: '0.06em',
                }} className={lang === 'bn' ? 'font-bengali' : ''}>
                  {t.keyHighlights}
                </div>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', paddingLeft: '1.2rem', color: 'var(--text-primary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  {keyPoints.map((point, idx) => (
                    <li key={idx} className={lang === 'bn' ? 'font-bengali' : ''}>
                      <strong>{point}</strong>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Full Analytical Summary Body */}
            <div style={{ margin: '2.5rem 0' }}>
              <h2 className={`font-masthead ${lang === 'bn' ? 'font-bengali' : ''}`} style={{
                fontSize: '1.25rem',
                fontWeight: 800,
                color: 'var(--text-primary)',
                marginBottom: '1rem',
                borderBottom: '2px solid var(--border-bold)',
                paddingBottom: '0.4rem',
              }}>
                {lang === 'bn' ? 'বিস্তারিত পর্যবেক্ষণ ও সারসংক্ষেপ' : 'Analytical Summary & Media Intel'}
              </h2>
              <div
                className={lang === 'bn' || /[\u0980-\u09FF]/.test(summary || '') ? 'font-bengali' : 'font-serif'}
                style={{
                  fontSize: '1.12rem',
                  lineHeight: 1.8,
                  color: 'var(--text-primary)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.25rem',
                }}
              >
                <p>{summary}</p>
              </div>
            </div>

            {/* Outbound Link Box */}
            <div style={{
              backgroundColor: 'var(--bg-accent)',
              border: '1px solid var(--border-primary)',
              borderRadius: 'var(--radius-md)',
              padding: '1.35rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem',
              margin: '2.5rem 0',
            }}>
              <div>
                <div style={{ fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '0.06em' }}>
                  {t.sourceLink}
                </div>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '0.2rem' }}>
                  {article.source.name} • {article.source.bureau} Desk ({article.source.language})
                </div>
              </div>
              <a
                href={article.source.originalUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  backgroundColor: 'var(--brand-primary)',
                  color: '#ffffff',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  padding: '0.65rem 1.25rem',
                  borderRadius: 'var(--radius-sm)',
                  boxShadow: 'var(--shadow-sm)',
                  transition: 'background-color 0.15s ease',
                }}
              >
                {t.readOriginalOn} {article.source.name}
                <ExternalLink size={14} />
              </a>
            </div>

            {/* Article Tags */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              flexWrap: 'wrap',
              margin: '2rem 0',
              paddingTop: '1.25rem',
              borderTop: '1px solid var(--border-primary)',
            }}>
              <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-muted)' }}>Tags:</span>
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    backgroundColor: 'var(--bg-secondary)',
                    color: 'var(--text-secondary)',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    padding: '0.3rem 0.65rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--border-primary)',
                  }}
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Back to Scans Button */}
            <div style={{ marginTop: '2rem' }}>
              <Link
                href="/"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  color: 'var(--brand-primary)',
                }}
                className={lang === 'bn' ? 'font-bengali' : ''}
              >
                <ArrowLeft size={16} />
                {t.viewAllScanned}
              </Link>
            </div>
          </div>

          {/* Right Sticky Sidebar */}
          <aside className="article-sidebar-col">
            <div style={{ position: 'sticky', top: '80px', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {/* Related Reports in this Topic */}
              <div style={{
                backgroundColor: 'var(--bg-card)',
                padding: '1.25rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-primary)',
                boxShadow: 'var(--shadow-sm)',
              }}>
                <h3
                  className={`font-masthead ${lang === 'bn' ? 'font-bengali' : ''}`}
                  style={{
                    fontSize: '1rem',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    color: 'var(--text-primary)',
                    borderBottom: '2px solid var(--brand-primary)',
                    paddingBottom: '0.4rem',
                    marginBottom: '1rem',
                  }}
                >
                  {lang === 'bn' ? 'সম্পর্কিত স্ক্যানড সংবাদ' : 'Related Reports'}
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {relatedArticles.length > 0 ? (
                    relatedArticles.map((art) => (
                      <ArticleCard key={art.id} article={art} variant="horizontal" />
                    ))
                  ) : (
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                      {lang === 'bn' ? 'কোনো অতিরিক্ত প্রতিবেদন নেই' : 'No other reports in this category.'}
                    </p>
                  )}
                </div>
              </div>

              {/* Trending Scanned Stories */}
              <div style={{
                backgroundColor: 'var(--bg-card)',
                padding: '1.25rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-primary)',
                boxShadow: 'var(--shadow-sm)',
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.85rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  color: 'var(--text-primary)',
                  borderBottom: '2px solid var(--border-bold)',
                  paddingBottom: '0.4rem',
                  marginBottom: '1rem',
                }} className={lang === 'bn' ? 'font-bengali' : ''}>
                  <TrendingUp size={15} style={{ color: 'var(--brand-primary)' }} />
                  {lang === 'bn' ? 'শীর্ষ আলোচিত সংবাদ' : 'Trending Scans'}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  {trendingArticles.slice(0, 5).map((art, idx, arr) => (
                    <Link
                      key={art.id}
                      href={`/article/${art.slug}`}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.65rem',
                        paddingBottom: '0.65rem',
                        borderBottom: idx !== arr.length - 1 ? '1px solid var(--border-subtle)' : 'none',
                      }}
                    >
                      <span className="font-masthead" style={{ fontSize: '1.25rem', fontWeight: 900, color: 'var(--brand-primary)', opacity: 0.8 }}>
                        0{idx + 1}
                      </span>
                      <div>
                        <h4
                          className={art.source.language === 'Bengali' ? 'font-bengali' : art.source.language === 'Hindi' ? 'font-devanagari' : 'font-serif'}
                          style={{ fontSize: '0.88rem', fontWeight: 700, lineHeight: 1.35, color: 'var(--text-primary)', margin: 0 }}
                        >
                          {art.title}
                        </h4>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <style jsx>{`
        .article-layout-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
        }

        @media (min-width: 980px) {
          .article-layout-grid {
            grid-template-columns: 2.3fr 1fr;
          }
        }
      `}</style>
    </article>
  );
}
