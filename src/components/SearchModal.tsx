'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '@/context/ThemeContext';
import { SCANNED_NEWS_ITEMS, NewsItem } from '@/data/news-data';
import SentimentBadge from './SentimentBadge';
import { Search, X, ExternalLink, Sparkles } from 'lucide-react';

const POPULAR_TAGS = ['Teesta River', 'Petrapole', 'BSF', 'Visas', 'Hilsa', 'Adani Power', 'Cricket'];

export default function SearchModal() {
  const { isSearchOpen, closeSearch } = useApp();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<NewsItem[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

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
      return (
        art.title.toLowerCase().includes(lower) ||
        art.summary.toLowerCase().includes(lower) ||
        art.source.name.toLowerCase().includes(lower) ||
        art.source.bureau.toLowerCase().includes(lower) ||
        art.source.language.toLowerCase().includes(lower) ||
        art.sentiment.toLowerCase().includes(lower) ||
        art.tags.some((t) => t.toLowerCase().includes(lower))
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
          maxWidth: '680px',
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
            placeholder="Search scanned Indian media reports by topic, source, or sentiment..."
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

        {/* Popular Tags */}
        <div style={{
          padding: '0.75rem 1.25rem',
          backgroundColor: 'var(--bg-secondary)',
          borderBottom: '1px solid var(--border-primary)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          flexWrap: 'wrap',
        }}>
          <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
            Quick Filter:
          </span>
          {POPULAR_TAGS.map((tag) => (
            <button
              key={tag}
              onClick={() => setQuery(tag)}
              style={{
                fontSize: '0.72rem',
                backgroundColor: 'var(--bg-card)',
                color: 'var(--text-primary)',
                padding: '0.2rem 0.55rem',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border-primary)',
                cursor: 'pointer',
                fontWeight: 500,
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
              <p style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                Scan Database of Indian Media on Bangladesh
              </p>
              <p style={{ fontSize: '0.8rem', marginTop: '0.25rem' }}>
                Search through reports from Anandabazar Patrika, The Hindu, Indian Express, Dainik Jagran, and Ei Samay.
              </p>
            </div>
          ) : results.length === 0 ? (
            <div style={{ padding: '2.5rem 1rem', textAlign: 'center', color: 'var(--text-muted)' }}>
              <p style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                No scanned items found for &ldquo;{query}&rdquo;
              </p>
              <p style={{ fontSize: '0.82rem', marginTop: '0.35rem' }}>
                Try searching &apos;Teesta&apos;, &apos;Petrapole&apos;, &apos;BSF&apos;, or &apos;Visas&apos;.
              </p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                Found {results.length} Scanned Reports
              </div>
              {results.map((art) => (
                <div
                  key={art.id}
                  style={{
                    display: 'block',
                    padding: '0.85rem',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--bg-primary)',
                    border: '1px solid var(--border-subtle)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.4rem', flexWrap: 'wrap', gap: '0.4rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <SentimentBadge sentiment={art.sentiment} size="sm" />
                      <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--brand-primary)' }}>
                        {art.source.name} [{art.source.bureau}]
                      </span>
                    </div>
                    <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{art.source.scannedAt}</span>
                  </div>

                  <h4 className="font-serif" style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                    {art.title}
                  </h4>

                  <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', marginBottom: '0.5rem', lineHeight: 1.45 }}>
                    {art.summary}
                  </p>

                  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <a
                      href={art.source.originalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.25rem',
                        fontSize: '0.74rem',
                        fontWeight: 700,
                        color: 'var(--brand-primary)',
                      }}
                    >
                      Read Original on {art.source.name} <ExternalLink size={11} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
