'use client';

import React from 'react';
import Link from 'next/link';
import { useApp } from '@/context/ThemeContext';
import { CATEGORIES } from '@/data/news-data';
import { TRANSLATIONS } from '@/data/translations';
import NarrativeCompassLogo from '@/components/NarrativeCompassLogo';
import { Globe, Shield, Rss, ArrowUp, Calendar, Bookmark, Moon, Sun, Archive } from 'lucide-react';
import VisitorCounter from '@/components/VisitorCounter';

export default function Footer() {
  const { lang, theme, toggleTheme, bookmarks } = useApp();
  const t = TRANSLATIONS[lang];

  const today = new Date().toLocaleDateString(lang === 'bn' ? 'bn-BD' : 'en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer style={{
      backgroundColor: 'var(--bg-secondary)',
      borderTop: '2px solid var(--border-bold)',
      paddingTop: '2.5rem',
      paddingBottom: '2.5rem',
      fontSize: '0.85rem',
      color: 'var(--text-secondary)',
    }}>
      <div className="container">
        {/* Mobile Quick Utility Bar (Date, Bookmarks, Dark/Light Mode) */}
        <div className="mobile-footer-utility-bar" style={{
          display: 'none',
          backgroundColor: 'var(--bg-primary)',
          border: '1px solid var(--border-primary)',
          borderRadius: 'var(--radius-md)',
          padding: '0.75rem 1rem',
          marginBottom: '2rem',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '0.75rem',
          flexWrap: 'wrap',
        }}>
          {/* Mobile Date */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.78rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
            <Calendar size={13} style={{ color: 'var(--brand-primary)' }} />
            <span className={lang === 'bn' ? 'font-bengali' : ''}>{today}</span>
          </div>

          {/* Mobile Actions: Theme Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            {/* Theme Switcher */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                backgroundColor: 'var(--bg-secondary)',
                border: '1px solid var(--border-primary)',
                padding: '0.3rem 0.65rem',
                borderRadius: 'var(--radius-sm)',
                color: 'var(--text-primary)',
                fontSize: '0.75rem',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              {theme === 'light' ? (
                <>
                  <Moon size={13} />
                  <span>{lang === 'bn' ? 'ডার্ক মোড' : 'Dark'}</span>
                </>
              ) : (
                <>
                  <Sun size={13} style={{ color: '#fbbf24' }} />
                  <span>{lang === 'bn' ? 'লাইট মোড' : 'Light'}</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Top Footer Section */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2.5rem',
          borderBottom: '1px solid var(--border-primary)',
          paddingBottom: '2.5rem',
          marginBottom: '2rem',
        }}>
          {/* Masthead & Info */}
          <div style={{ gridColumn: 'span 2' }} className="footer-brand-col">
            <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.65rem', textDecoration: 'none', marginBottom: '0.6rem' }}>
              <NarrativeCompassLogo size={28} />
              <h2
                className={lang === 'bn' ? 'font-bengali' : 'font-masthead'}
                style={{
                  fontSize: lang === 'bn' ? 'calc(1.75rem - 3pt)' : 'calc(1.8rem + 1pt)',
                  fontWeight: 900,
                  color: 'var(--text-primary)',
                  letterSpacing: lang === 'bn' ? '0' : '0.06em',
                  margin: 0,
                }}
              >
                {t.siteTitle}
              </h2>
            </Link>
            <p
              className={lang === 'bn' ? 'font-bengali' : ''}
              style={{
                fontSize: lang === 'bn' ? '0.92rem' : '0.88rem',
                lineHeight: 1.65,
                color: 'var(--text-secondary)',
                marginBottom: '1.25rem',
                maxWidth: '420px'
              }}
            >
              {t.footer.about}
            </p>
            <div
              className={lang === 'bn' ? 'font-bengali' : ''}
              style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.75rem', fontWeight: 600, flexWrap: 'wrap' }}
            >
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: 'var(--brand-primary)' }}>
                <Shield size={14} /> {t.footer.verified}
              </span>
              <span>•</span>
              <span>{lang === 'bn' ? 'প্রতিষ্ঠিত ২০২৬' : 'Est. 2026'}</span>
            </div>

            {/* Live Visitor Tracker Counter */}
            <div style={{ marginTop: '1.25rem' }}>
              <VisitorCounter variant="compact" />
            </div>
          </div>

          {/* Sections */}
          <div>
            <h4
              className={lang === 'bn' ? 'font-bengali' : ''}
              style={{
                fontSize: '0.78rem',
                fontWeight: 800,
                textTransform: lang === 'bn' ? 'none' : 'uppercase',
                letterSpacing: lang === 'bn' ? '0' : '0.08em',
                color: 'var(--text-primary)',
                marginBottom: '1rem',
              }}
            >
              {lang === 'bn' ? 'সংবাদ বিভাগ' : 'News Desks'}
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {CATEGORIES.slice(0, 4).map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/category/${cat.slug}`}
                    className={lang === 'bn' ? 'font-bengali' : ''}
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {lang === 'bn' ? cat.labelBn : cat.labelEn}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Sections */}
          <div>
            <h4
              className={lang === 'bn' ? 'font-bengali' : ''}
              style={{
                fontSize: '0.78rem',
                fontWeight: 800,
                textTransform: lang === 'bn' ? 'none' : 'uppercase',
                letterSpacing: lang === 'bn' ? '0' : '0.08em',
                color: 'var(--text-primary)',
                marginBottom: '1rem',
              }}
            >
              {lang === 'bn' ? 'অন্যান্য ও সংরক্ষিত' : 'Features & Media'}
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {CATEGORIES.slice(4).map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/category/${cat.slug}`}
                    className={lang === 'bn' ? 'font-bengali' : ''}
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {lang === 'bn' ? cat.labelBn : cat.labelEn}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/bangladesh-indian-news-media"
                  className={lang === 'bn' ? 'font-bengali' : ''}
                  style={{ color: 'var(--brand-gold)', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
                >
                  <Globe size={13} />
                  {t.mediaDirectory.navTitle}
                </Link>
              </li>
              <li>
                <Link
                  href="/archive"
                  className={lang === 'bn' ? 'font-bengali' : ''}
                  style={{ color: 'var(--brand-primary)', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
                >
                  <Archive size={13} />
                  {t.archive.navTitle}
                </Link>
              </li>
            </ul>
          </div>

          {/* Editorial Ethics & Standards */}
          <div>
            <h4
              className={lang === 'bn' ? 'font-bengali' : ''}
              style={{
                fontSize: '0.78rem',
                fontWeight: 800,
                textTransform: lang === 'bn' ? 'none' : 'uppercase',
                letterSpacing: lang === 'bn' ? '0' : '0.08em',
                color: 'var(--text-primary)',
                marginBottom: '1rem',
              }}
            >
              {lang === 'bn' ? 'নীতিমালা ও মানদণ্ড' : 'Standards & Governance'}
            </h4>
            <ul
              className={lang === 'bn' ? 'font-bengali' : ''}
              style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.8rem' }}
            >
              <li>
                <Link
                  href="/about"
                  className={lang === 'bn' ? 'font-bengali' : ''}
                  style={{ color: 'var(--brand-primary)', fontWeight: 700 }}
                >
                  {t.aboutUs.pageTitle}
                </Link>
              </li>
              <li><a href="#ethics" style={{ color: 'var(--text-secondary)' }}>{lang === 'bn' ? 'সম্পাদনা নীতিমালা' : 'Editorial Code of Ethics'}</a></li>
              <li><a href="#corrections" style={{ color: 'var(--text-secondary)' }}>{lang === 'bn' ? 'সংশোধনী ও স্পষ্টীকরণ' : 'Corrections & Clarifications'}</a></li>
              <li><a href="#factcheck" style={{ color: 'var(--text-secondary)' }}>{lang === 'bn' ? 'তথ্য যাচাই নীতিমালা' : 'Fact-Checking Policy'}</a></li>
              <li><a href="#rss" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: 'var(--brand-gold)' }}><Rss size={12} /> {lang === 'bn' ? 'আরএসএস ফিড' : 'RSS Feeds'}</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Back to Top */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.78rem',
          color: 'var(--text-muted)',
        }}>
          <div className={lang === 'bn' ? 'font-bengali' : ''}>
            {t.footer.allRights}
          </div>

          <button
            onClick={scrollToTop}
            className={lang === 'bn' ? 'font-bengali' : ''}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              color: 'var(--text-primary)',
              fontWeight: 700,
              fontSize: '0.75rem',
              textTransform: lang === 'bn' ? 'none' : 'uppercase',
              letterSpacing: lang === 'bn' ? '0' : '0.05em',
            }}
          >
            {t.footer.backToTop} <ArrowUp size={14} />
          </button>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .footer-brand-col {
            grid-column: span 1 !important;
          }
          .mobile-footer-utility-bar {
            display: flex !important;
          }
        }
      `}</style>
    </footer>
  );
}
