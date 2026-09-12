'use client';

import React from 'react';
import Link from 'next/link';
import { useApp } from '@/context/ThemeContext';
import { ARTICLES } from '@/data/news-data';
import ArticleCard from '@/components/ArticleCard';
import { Bookmark, Trash2, ArrowRight, BookOpen } from 'lucide-react';

export default function SavedArticlesPage() {
  const { bookmarks, toggleBookmark } = useApp();

  const bookmarkedArticles = ARTICLES.filter((a) => bookmarks.includes(a.slug));

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
              <h1 className="font-masthead" style={{
                fontSize: '1.85rem',
                fontWeight: 900,
                color: 'var(--text-primary)',
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                lineHeight: 1.1,
              }}>
                Saved Reading List
              </h1>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                Articles you have saved to read offline or review later.
              </p>
            </div>
          </div>

          <span style={{
            fontSize: '0.82rem',
            fontWeight: 700,
            color: 'var(--brand-primary)',
            backgroundColor: 'var(--bg-secondary)',
            padding: '0.35rem 0.85rem',
            borderRadius: 'var(--radius-full)',
            border: '1px solid var(--border-primary)',
          }}>
            {bookmarkedArticles.length} Stories Saved
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
            <h3 className="font-serif" style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
              Your Reading List is Empty
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', maxWidth: '420px', margin: '0 auto 1.5rem auto' }}>
              Whenever you encounter a story or deep analysis you want to read later, click the bookmark icon on any article card.
            </p>
            <Link
              href="/"
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
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
              }}
            >
              Browse Frontpage <ArrowRight size={14} />
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
                  title="Remove from saved"
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
