'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { NewsItem } from '@/data/news-data';
import { useApp } from '@/context/ThemeContext';
import SentimentBadge from './SentimentBadge';
import SourceBadge from './SourceBadge';
import { Bookmark, Clock, ExternalLink, Sparkles, Volume2, ArrowUpRight } from 'lucide-react';

interface ArticleCardProps {
  article: NewsItem;
  variant?: 'lead' | 'featured' | 'compact' | 'horizontal';
  showImage?: boolean;
}

export default function ArticleCard({
  article,
  variant = 'compact',
  showImage = true,
}: ArticleCardProps) {
  const { toggleBookmark, isBookmarked } = useApp();
  const bookmarked = isBookmarked(article.slug);

  const formattedDate = new Date(article.publishedAt).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  });

  if (variant === 'lead') {
    return (
      <article style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {showImage && article.imageUrl && (
          <div style={{
            position: 'relative',
            width: '100%',
            height: '380px',
            borderRadius: 'var(--radius-sm)',
            overflow: 'hidden',
            backgroundColor: 'var(--bg-secondary)',
          }}>
            <Image
              src={article.imageUrl}
              alt={article.title}
              fill
              priority
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
              <span style={{
                backgroundColor: 'var(--brand-primary)',
                color: '#ffffff',
                fontSize: '0.7rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                padding: '0.25rem 0.6rem',
                borderRadius: 'var(--radius-sm)',
                boxShadow: 'var(--shadow-md)',
              }}>
                Lead Scanned Report
              </span>
              <SentimentBadge sentiment={article.sentiment} size="md" />
            </div>
          </div>
        )}

        <div>
          {/* Category & Source Metadata */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.65rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <span className="category-pill">{article.categoryLabel}</span>
              <SourceBadge source={article.source} />
            </div>

            <button
              onClick={(e) => {
                e.preventDefault();
                toggleBookmark(article.slug);
              }}
              aria-label="Bookmark article"
              style={{
                color: bookmarked ? 'var(--brand-primary)' : 'var(--text-muted)',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Bookmark size={15} fill={bookmarked ? 'currentColor' : 'none'} />
            </button>
          </div>

          {/* Title with Sentiment Badge if no image */}
          {(!showImage || !article.imageUrl) && (
            <div style={{ marginBottom: '0.5rem' }}>
              <SentimentBadge sentiment={article.sentiment} size="sm" />
            </div>
          )}

          <h2
            className="font-serif"
            style={{
              fontSize: 'clamp(1.5rem, 2.2vw, 2.1rem)',
              fontWeight: 800,
              lineHeight: 1.2,
              color: 'var(--text-primary)',
              marginBottom: '0.75rem',
              letterSpacing: '-0.01em',
            }}
          >
            {article.title}
          </h2>

          {/* Original Headline in Vernacular if available */}
          {article.source.originalHeadline && (
            <div style={{
              fontSize: '0.85rem',
              fontStyle: 'italic',
              color: 'var(--text-muted)',
              marginBottom: '0.75rem',
              paddingLeft: '0.75rem',
              borderLeft: '2px solid var(--border-primary)',
            }}>
              Original Headline ({article.source.language}): &ldquo;{article.source.originalHeadline}&rdquo;
            </div>
          )}

          {/* Analytical Summary */}
          <p style={{
            fontSize: '0.96rem',
            lineHeight: 1.6,
            color: 'var(--text-secondary)',
            marginBottom: '1rem'
          }}>
            {article.summary}
          </p>

          {/* Key Takeaways */}
          {article.keyPoints && article.keyPoints.length > 0 && (
            <div style={{
              backgroundColor: 'var(--bg-secondary)',
              borderLeft: '3px solid var(--brand-primary)',
              padding: '0.85rem 1rem',
              borderRadius: '0 var(--radius-md) var(--radius-md) 0',
              marginBottom: '1.25rem',
            }}>
              <div style={{ fontSize: '0.74rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--brand-primary)', marginBottom: '0.4rem', letterSpacing: '0.05em' }}>
                Key Strategic Highlights
              </div>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', paddingLeft: '1rem', fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.45 }}>
                {article.keyPoints.slice(0, 3).map((pt, i) => (
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
              <span>Scanned {article.source.scannedAt}</span>
              <span>•</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                <Clock size={12} /> {article.readTime}
              </span>
            </div>

            <a
              href={article.source.originalUrl}
              target="_blank"
              rel="noopener noreferrer"
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
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              Read Full on {article.source.name} <ExternalLink size={12} />
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
        {showImage && article.imageUrl && (
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
              src={article.imageUrl}
              alt={article.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
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
            {(!showImage || !article.imageUrl) && (
              <SentimentBadge sentiment={article.sentiment} size="sm" />
            )}
          </div>

          <h3
            className="font-serif"
            style={{
              fontSize: '1.15rem',
              fontWeight: 700,
              lineHeight: 1.3,
              color: 'var(--text-primary)',
              marginBottom: '0.55rem',
            }}
          >
            {article.title}
          </h3>

          <p style={{
            fontSize: '0.86rem',
            lineHeight: 1.5,
            color: 'var(--text-secondary)',
            marginBottom: '1rem',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}>
            {article.summary}
          </p>

          {/* Sentiment Rationale Note */}
          <div style={{
            fontSize: '0.74rem',
            color: 'var(--text-muted)',
            backgroundColor: 'var(--bg-secondary)',
            padding: '0.4rem 0.6rem',
            borderRadius: 'var(--radius-sm)',
            marginBottom: '1rem',
            marginTop: 'auto',
          }}>
            <strong style={{ color: 'var(--text-primary)' }}>Scanner Context:</strong> {article.sentimentReason}
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '0.75rem',
            paddingTop: '0.75rem',
            borderTop: '1px solid var(--border-subtle)',
          }}>
            <span style={{ color: 'var(--text-muted)' }}>{article.source.scannedAt}</span>

            <a
              href={article.source.originalUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.3rem',
                fontWeight: 700,
                color: 'var(--brand-primary)',
                textTransform: 'uppercase',
                fontSize: '0.72rem',
              }}
            >
              Original Source <ExternalLink size={11} />
            </a>
          </div>
        </div>
      </article>
    );
  }

  if (variant === 'horizontal') {
    return (
      <article style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
        {showImage && article.imageUrl && (
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
              src={article.imageUrl}
              alt={article.title}
              fill
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

          <a
            href={article.source.originalUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <h4
              className="font-serif"
              style={{
                fontSize: '0.98rem',
                fontWeight: 700,
                lineHeight: 1.35,
                color: 'var(--text-primary)',
                marginBottom: '0.25rem',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}
            >
              {article.title}
            </h4>
          </a>

          <p style={{
            fontSize: '0.8rem',
            color: 'var(--text-secondary)',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            lineHeight: 1.45,
          }}>
            {article.summary}
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

      <a
        href={article.source.originalUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: 'none' }}
      >
        <h4
          className="font-serif"
          style={{
            fontSize: '1.05rem',
            fontWeight: 700,
            lineHeight: 1.35,
            color: 'var(--text-primary)',
          }}
        >
          {article.title}
        </h4>
      </a>

      <p style={{
        fontSize: '0.84rem',
        lineHeight: 1.45,
        color: 'var(--text-secondary)',
        display: '-webkit-box',
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
      }}>
        {article.summary}
      </p>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
        <span>Scanned {article.source.scannedAt}</span>
        <a
          href={article.source.originalUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.2rem',
            color: 'var(--brand-primary)',
            fontWeight: 700,
          }}
        >
          Source Link <ExternalLink size={10} />
        </a>
      </div>
    </article>
  );
}
