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
import { Bookmark, Clock, ExternalLink, Languages } from 'lucide-react';

interface ArticleCardProps {
  article: NewsItem;
  variant?: 'lead' | 'featured' | 'compact' | 'horizontal';
  showImage?: boolean;
}

const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&auto=format&fit=crop&q=80';

export default function ArticleCard({
  article,
  variant = 'compact',
  showImage = true,
}: ArticleCardProps) {
  const { lang, toggleBookmark, isBookmarked } = useApp();
  const t = TRANSLATIONS[lang];
  const bookmarked = isBookmarked(article.slug);
  const [imgSrc, setImgSrc] = useState(article.imageUrl || FALLBACK_IMAGE);

  const isBengaliContent = /[\u0980-\u09FF]/.test(article.title) || article.source.language === 'Bengali';
  const isHindiContent = /[\u0900-\u097F]/.test(article.title) || article.source.language === 'Hindi';
  const isEnglishContent = !isBengaliContent && !isHindiContent;

  const isHindi = article.source.language === 'Hindi';
  const isBengali = article.source.language === 'Bengali';
  const isEnglish = article.source.language === 'English';

  const formattedTime = formatArticleTimestamp(article.source.scannedAt, lang, article.publishedAt);
  const categoryLabel = lang === 'bn' ? article.categoryLabelBn : article.categoryLabelEn;
  const summary = lang === 'bn' ? article.summaryBn : article.summaryEn;
  const keyPoints = lang === 'bn' ? article.keyPointsBn : article.keyPointsEn;
  const sentimentReason = lang === 'bn' ? article.sentimentReasonBn : article.sentimentReasonEn;
  const readTime = lang === 'bn' ? article.readTimeBn : article.readTimeEn;

  const titleFontClass = isBengaliContent ? 'font-bengali' : isHindiContent ? 'font-devanagari' : 'font-serif';

  if (variant === 'lead') {
    return (
      <article style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {showImage && (
          <div style={{
            position: 'relative',
            width: '100%',
            height: '380px',
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
              sizes="(max-width: 768px) 100vw, 55vw"
              style={{ objectFit: 'cover' }}
            />
            <div style={{
              position: 'absolute',
              top: '12px',
              left: '12px',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}>
              <span
                className={lang === 'bn' ? 'font-bengali' : ''}
                style={{
                  backgroundColor: 'var(--brand-primary)',
                  color: '#ffffff',
                  fontSize: '0.7rem',
                  fontWeight: 800,
                  letterSpacing: lang === 'bn' ? '0' : '0.08em',
                  textTransform: lang === 'bn' ? 'none' : 'uppercase',
                  padding: '0.25rem 0.6rem',
                  borderRadius: 'var(--radius-sm)',
                  boxShadow: 'var(--shadow-md)',
                }}
              >
                {lang === 'bn' ? 'প্রধান স্ক্যানড সংবাদ' : 'Lead Scanned Report'}
              </span>
              <SentimentBadge sentiment={article.sentiment} size="md" />
            </div>
          </div>
        )}

        <div>
          {/* Category & Source Metadata */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.65rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <span className={`category-pill ${lang === 'bn' ? 'font-bengali' : ''}`}>{categoryLabel}</span>
              <SourceBadge source={article.source} />
            </div>
          </div>

          {/* Primary Headline in Original Script (Always kept in original source language) */}
          <Link href={`/article/${article.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <h2
              className={titleFontClass}
              style={{
                fontSize: isBengaliContent || isHindiContent ? 'clamp(1.45rem, 2.3vw, 2rem)' : 'clamp(1.5rem, 2.2vw, 2.1rem)',
                fontWeight: 800,
                lineHeight: isBengaliContent || isHindiContent ? 1.45 : 1.25,
                color: 'var(--text-primary)',
                marginBottom: '0.75rem',
                letterSpacing: isBengaliContent || isHindiContent ? '0' : '-0.01em',
                transition: 'color 0.15s ease',
              }}
            >
              {article.title}
            </h2>
          </Link>

          {/* Translations Box for Hindi News */}
          {isHindi && (article.englishTitle || article.banglaTitle) && (
            <div style={{
              backgroundColor: 'var(--bg-secondary)',
              border: '1px solid var(--border-primary)',
              borderRadius: 'var(--radius-md)',
              padding: '0.85rem 1rem',
              marginBottom: '1rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.45rem',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.72rem', fontWeight: 800, color: 'var(--brand-primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                <Languages size={13} />
                {t.hindiTranslationHeader}
              </div>

              {article.banglaTitle && (
                <div className="font-bengali" style={{ fontSize: '0.9rem', color: 'var(--text-primary)', lineHeight: 1.45 }}>
                  <strong style={{ color: '#059669', fontSize: '0.75rem', fontFamily: 'var(--font-sans)' }}>{t.bengaliTranslation}</strong> {article.banglaTitle}
                </div>
              )}

              {article.englishTitle && (
                <div style={{ fontSize: '0.86rem', color: 'var(--text-primary)', lineHeight: 1.45 }}>
                  <strong style={{ color: 'var(--brand-accent)', fontSize: '0.75rem' }}>{t.englishTranslation}</strong> {article.englishTitle}
                </div>
              )}
            </div>
          )}

          {/* Translation Box for English News (Provides Bangla Translation) */}
          {isEnglish && article.banglaTitle && (
            <div style={{
              backgroundColor: 'var(--bg-secondary)',
              border: '1px solid var(--border-primary)',
              borderRadius: 'var(--radius-md)',
              padding: '0.75rem 1rem',
              marginBottom: '1rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.35rem',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.72rem', fontWeight: 800, color: 'var(--brand-primary)', letterSpacing: '0.05em' }}>
                <Languages size={13} />
                {t.englishTranslationHeader}
              </div>
              <div className="font-bengali" style={{ fontSize: '0.92rem', color: 'var(--text-primary)', lineHeight: 1.45 }}>
                <strong style={{ color: '#059669', fontSize: '0.75rem', fontFamily: 'var(--font-sans)' }}>{t.bengaliTranslation}</strong> {article.banglaTitle}
              </div>
            </div>
          )}

          {/* Translation Box for Bengali News when in English UI mode */}
          {(isBengaliContent || isBengali) && lang === 'en' && article.englishTitle && article.englishTitle !== article.title && (
            <div style={{
              backgroundColor: 'var(--bg-secondary)',
              border: '1px solid var(--border-primary)',
              borderRadius: 'var(--radius-md)',
              padding: '0.65rem 0.9rem',
              marginBottom: '1rem',
              fontSize: '0.86rem',
              color: 'var(--text-primary)',
            }}>
              <strong style={{ color: 'var(--brand-accent)', fontSize: '0.75rem' }}>English Translation:</strong> {article.englishTitle}
            </div>
          )}

          {/* Summary */}
          <p
            className={lang === 'bn' ? 'font-bengali' : ''}
            style={{
              fontSize: lang === 'bn' ? '1rem' : '0.96rem',
              lineHeight: lang === 'bn' ? 1.7 : 1.6,
              color: 'var(--text-secondary)',
              marginBottom: '1rem'
            }}
          >
            {summary}
          </p>

          {/* Key Takeaways */}
          {keyPoints && keyPoints.length > 0 && (
            <div style={{
              backgroundColor: 'var(--bg-secondary)',
              borderLeft: '3px solid var(--brand-primary)',
              padding: '0.85rem 1rem',
              borderRadius: '0 var(--radius-md) var(--radius-md) 0',
              marginBottom: '1.25rem',
            }}>
              <div className={lang === 'bn' ? 'font-bengali' : ''} style={{ fontSize: '0.74rem', fontWeight: 800, textTransform: lang === 'bn' ? 'none' : 'uppercase', color: 'var(--brand-primary)', marginBottom: '0.4rem', letterSpacing: '0.05em' }}>
                {t.keyHighlights}
              </div>
              <ul
                className={lang === 'bn' ? 'font-bengali' : ''}
                style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', paddingLeft: '1.1rem', fontSize: lang === 'bn' ? '0.9rem' : '0.86rem', color: 'var(--text-secondary)', lineHeight: lang === 'bn' ? 1.6 : 1.45 }}
              >
                {keyPoints.slice(0, 3).map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Outbound Link CTA & Metadata */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            paddingTop: '0.85rem',
            borderTop: '1px solid var(--border-subtle)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
              <span>{t.scannedAgo} {formattedTime}</span>
              <span>•</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                <Clock size={12} /> {readTime}
              </span>
            </div>

            <a
              href={article.source.originalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={lang === 'bn' ? 'font-bengali' : ''}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                backgroundColor: 'var(--brand-primary)',
                color: '#ffffff',
                fontWeight: 700,
                fontSize: '0.8rem',
                padding: '0.45rem 1rem',
                borderRadius: 'var(--radius-sm)',
                textTransform: lang === 'bn' ? 'none' : 'uppercase',
                letterSpacing: lang === 'bn' ? '0' : '0.04em',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              {t.readOriginalOn} {article.source.name} <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </article>
    );
  }

  if (variant === 'featured') {
    return (
      <article style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        backgroundColor: 'var(--bg-card)',
        padding: '1.25rem',
        borderRadius: 'var(--radius-md)',
        border: '1px solid var(--border-primary)',
        boxShadow: 'var(--shadow-sm)',
      }}>
        {showImage && (
          <div style={{
            position: 'relative',
            width: '100%',
            height: '190px',
            borderRadius: 'var(--radius-sm)',
            overflow: 'hidden',
            backgroundColor: 'var(--bg-secondary)',
            marginBottom: '1rem',
          }}>
            <Image
              src={imgSrc}
              alt={article.title}
              fill
              loading="lazy"
              onError={() => setImgSrc(FALLBACK_IMAGE)}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: 'cover' }}
            />
            <div style={{ position: 'absolute', top: '10px', left: '10px' }}>
              <SentimentBadge sentiment={article.sentiment} size="sm" />
            </div>
          </div>
        )}

        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          {/* Header Badges */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.6rem', flexWrap: 'wrap', gap: '0.4rem' }}>
            <SourceBadge source={article.source} />
            {!showImage && (
              <SentimentBadge sentiment={article.sentiment} size="sm" />
            )}
          </div>

          {/* Primary Headline in Original Script */}
          <Link href={`/article/${article.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <h3
              className={titleFontClass}
              style={{
                fontSize: isBengaliContent || isHindiContent ? '1.12rem' : '1.15rem',
                fontWeight: 700,
                lineHeight: isBengaliContent || isHindiContent ? 1.45 : 1.3,
                color: 'var(--text-primary)',
                marginBottom: '0.55rem',
                transition: 'color 0.15s ease',
              }}
            >
              {article.title}
            </h3>
          </Link>

          {/* Hindi Translations Box */}
          {isHindi && (article.englishTitle || article.banglaTitle) && (
            <div style={{
              backgroundColor: 'var(--bg-secondary)',
              border: '1px solid var(--border-primary)',
              borderRadius: 'var(--radius-sm)',
              padding: '0.6rem 0.75rem',
              marginBottom: '0.75rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.35rem',
              fontSize: '0.8rem',
            }}>
              {article.banglaTitle && (
                <div className="font-bengali" style={{ color: 'var(--text-primary)', lineHeight: 1.4, fontSize: '0.86rem' }}>
                  <strong style={{ color: '#059669', fontSize: '0.7rem', fontFamily: 'var(--font-sans)' }}>বাংলা:</strong> {article.banglaTitle}
                </div>
              )}
              {article.englishTitle && (
                <div style={{ color: 'var(--text-primary)', lineHeight: 1.35 }}>
                  <strong style={{ color: 'var(--brand-accent)', fontSize: '0.7rem' }}>EN:</strong> {article.englishTitle}
                </div>
              )}
            </div>
          )}

          {/* English Headline Translation for English News */}
          {isEnglish && article.banglaTitle && (
            <div style={{
              backgroundColor: 'var(--bg-secondary)',
              border: '1px solid var(--border-primary)',
              borderRadius: 'var(--radius-sm)',
              padding: '0.5rem 0.7rem',
              marginBottom: '0.75rem',
              fontSize: '0.82rem',
            }}>
              <div className="font-bengali" style={{ color: 'var(--text-primary)', lineHeight: 1.35 }}>
                <strong style={{ color: '#059669', fontSize: '0.7rem', fontFamily: 'var(--font-sans)' }}>বাংলা অনুবাদ:</strong> {article.banglaTitle}
              </div>
            </div>
          )}

          {/* Bengali News English translation when in English mode */}
          {(isBengaliContent || isBengali) && lang === 'en' && article.englishTitle && article.englishTitle !== article.title && (
            <div style={{
              backgroundColor: 'var(--bg-secondary)',
              border: '1px solid var(--border-primary)',
              borderRadius: 'var(--radius-sm)',
              padding: '0.5rem 0.7rem',
              marginBottom: '0.75rem',
              fontSize: '0.8rem',
            }}>
              <strong style={{ color: 'var(--brand-accent)', fontSize: '0.7rem' }}>EN:</strong> {article.englishTitle}
            </div>
          )}

          <p
            className={lang === 'bn' ? 'font-bengali' : ''}
            style={{
              fontSize: lang === 'bn' ? '0.9rem' : '0.86rem',
              lineHeight: lang === 'bn' ? 1.6 : 1.5,
              color: 'var(--text-secondary)',
              marginBottom: '1rem',
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden'
            }}
          >
            {summary}
          </p>

          {/* Sentiment Rationale Note */}
          <div
            className={lang === 'bn' ? 'font-bengali' : ''}
            style={{
              fontSize: lang === 'bn' ? '0.85rem' : '0.80rem',
              lineHeight: lang === 'bn' ? 1.55 : 1.45,
              color: 'var(--text-secondary)',
              backgroundColor: 'var(--bg-secondary)',
              padding: '0.5rem 0.75rem',
              borderRadius: 'var(--radius-sm)',
              marginBottom: '1rem',
              marginTop: 'auto',
            }}
          >
            <strong style={{ color: 'var(--text-primary)', marginRight: '0.25rem' }}>{t.scannerContext}</strong> {sentimentReason}
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '0.75rem',
            paddingTop: '0.75rem',
            borderTop: '1px solid var(--border-subtle)',
          }}>
            <span style={{ color: 'var(--text-muted)' }}>{formattedTime}</span>

            <a
              href={article.source.originalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={lang === 'bn' ? 'font-bengali' : ''}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.3rem',
                fontWeight: 700,
                color: 'var(--brand-primary)',
                textTransform: lang === 'bn' ? 'none' : 'uppercase',
                fontSize: '0.72rem',
              }}
            >
              {t.sourceLink} <ExternalLink size={11} />
            </a>
          </div>
        </div>
      </article>
    );
  }

  if (variant === 'horizontal') {
    return (
      <article style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
        {showImage && (
          <div style={{
            position: 'relative',
            width: '110px',
            height: '85px',
            borderRadius: 'var(--radius-sm)',
            overflow: 'hidden',
            flexShrink: 0,
            backgroundColor: 'var(--bg-secondary)',
          }}>
            <Image
              src={imgSrc}
              alt={article.title}
              fill
              onError={() => setImgSrc(FALLBACK_IMAGE)}
              sizes="120px"
              style={{ objectFit: 'cover' }}
            />
          </div>
        )}

        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.35rem', flexWrap: 'wrap' }}>
            <SentimentBadge sentiment={article.sentiment} size="sm" />
            <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--text-muted)' }}>• {article.source.name} [{article.source.bureau}]</span>
          </div>

          <Link
            href={`/article/${article.slug}`}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <h4
              className={titleFontClass}
              style={{
                fontSize: isBengaliContent || isHindiContent ? '0.96rem' : '0.98rem',
                fontWeight: 700,
                lineHeight: isBengaliContent || isHindiContent ? 1.45 : 1.35,
                color: 'var(--text-primary)',
                marginBottom: '0.25rem',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                transition: 'color 0.15s ease',
              }}
            >
              {article.title}
            </h4>
          </Link>

          {isHindi && article.banglaTitle && (
            <div className="font-bengali" style={{ fontSize: '0.78rem', color: '#059669', marginBottom: '0.25rem', fontWeight: 600 }}>
              বাংলা: {article.banglaTitle}
            </div>
          )}

          {isEnglish && article.banglaTitle && (
            <div className="font-bengali" style={{ fontSize: '0.78rem', color: '#059669', marginBottom: '0.25rem', fontWeight: 600 }}>
              বাংলা অনুবাদ: {article.banglaTitle}
            </div>
          )}

          <p
            className={lang === 'bn' ? 'font-bengali' : ''}
            style={{
              fontSize: lang === 'bn' ? '0.84rem' : '0.8rem',
              color: 'var(--text-secondary)',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              lineHeight: lang === 'bn' ? 1.55 : 1.45,
            }}
          >
            {summary}
          </p>
        </div>
      </article>
    );
  }

  // Compact
  return (
    <article style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem', flexWrap: 'wrap' }}>
        <SentimentBadge sentiment={article.sentiment} size="sm" />
        <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: 600 }}>
          {article.source.name} ({article.source.bureau})
        </span>
      </div>

      <Link
        href={`/article/${article.slug}`}
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <h4
          className={titleFontClass}
          style={{
            fontSize: isBengaliContent || isHindiContent ? '1rem' : '1.05rem',
            lineHeight: isBengaliContent || isHindiContent ? 1.45 : 1.35,
            color: 'var(--text-primary)',
            transition: 'color 0.15s ease',
          }}
        >
          {article.title}
        </h4>
      </Link>

      {isHindi && (article.englishTitle || article.banglaTitle) && (
        <div style={{
          backgroundColor: 'var(--bg-secondary)',
          padding: '0.4rem 0.55rem',
          borderRadius: 'var(--radius-sm)',
          fontSize: '0.75rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.2rem',
        }}>
          {article.banglaTitle && <div className="font-bengali" style={{ fontSize: '0.8rem' }}><strong style={{ color: '#059669', fontFamily: 'var(--font-sans)' }}>বাংলা:</strong> {article.banglaTitle}</div>}
          {article.englishTitle && <div><strong style={{ color: 'var(--brand-accent)' }}>EN:</strong> {article.englishTitle}</div>}
        </div>
      )}

      {isEnglish && article.banglaTitle && (
        <div style={{
          backgroundColor: 'var(--bg-secondary)',
          padding: '0.35rem 0.5rem',
          borderRadius: 'var(--radius-sm)',
          fontSize: '0.75rem',
        }}>
          <div className="font-bengali" style={{ fontSize: '0.8rem' }}><strong style={{ color: '#059669', fontFamily: 'var(--font-sans)' }}>বাংলা:</strong> {article.banglaTitle}</div>
        </div>
      )}

      <p
        className={lang === 'bn' ? 'font-bengali' : ''}
        style={{
          fontSize: lang === 'bn' ? '0.88rem' : '0.84rem',
          lineHeight: lang === 'bn' ? 1.55 : 1.45,
          color: 'var(--text-secondary)',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}
      >
        {summary}
      </p>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
        <span>{t.scannedAgo} {formattedTime}</span>
        <a
          href={article.source.originalUrl}
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
    </article>
  );
}
