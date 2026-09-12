'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useApp } from '@/context/ThemeContext';
import { CATEGORIES } from '@/data/news-data';
import { TRANSLATIONS } from '@/data/translations';
import NarrativeCompassLogo from '@/components/NarrativeCompassLogo';
import {
  Search,
  Moon,
  Sun,
  Bookmark,
  Menu,
  X,
  Globe,
  Languages,
  ChevronDown,
} from 'lucide-react';

export default function Header() {
  const pathname = usePathname();
  const { theme, toggleTheme, lang, setLang, toggleLang, edition, setEdition, bookmarks, openSearch } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = TRANSLATIONS[lang];

  const today = new Date().toLocaleDateString(lang === 'bn' ? 'bn-BD' : 'en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <header style={{ backgroundColor: 'var(--bg-primary)', borderBottom: '2px solid var(--border-bold)' }}>
      {/* Top Utility Bar */}
      <div className="top-utility-bar" style={{
        borderBottom: '1px solid var(--border-primary)',
        padding: '0.45rem 0',
        fontSize: '0.78rem',
        color: 'var(--text-secondary)'
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Desktop Left: Date */}
          <div className="desktop-date-wrapper" style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <span style={{ fontWeight: 600 }} className={lang === 'bn' ? 'font-bengali' : ''}>{today}</span>
          </div>

          {/* Mobile Left: Quick Search Button (covers 33% width) */}
          <div className="mobile-search-wrapper" style={{ display: 'none', width: '33%', maxWidth: '33%' }}>
            <button
              onClick={openSearch}
              aria-label="Open Search"
              style={{
                width: '100%',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                color: 'var(--text-secondary)',
                backgroundColor: 'var(--bg-secondary)',
                padding: '0.24rem 0.5rem',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border-primary)',
                fontSize: '0.74rem',
                fontWeight: 600,
                textAlign: 'left',
                cursor: 'pointer',
              }}
            >
              <Search size={13} style={{ color: 'var(--brand-primary)', flexShrink: 0 }} />
              <span className="font-bengali" style={{ fontSize: '0.74rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {lang === 'bn' ? 'অনুসন্ধান' : 'Search'}
              </span>
            </button>
          </div>

          {/* Desktop Right: Full Controls */}
          <div className="desktop-controls-wrapper" style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            {/* Desktop Language Switcher Button */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: 'var(--bg-secondary)',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--border-primary)',
              overflow: 'hidden',
            }}>
              <button
                onClick={() => setLang('bn')}
                className="font-bengali"
                style={{
                  padding: '0.2rem 0.55rem',
                  fontSize: '0.75rem',
                  fontWeight: lang === 'bn' ? 800 : 600,
                  color: lang === 'bn' ? '#ffffff' : 'var(--text-secondary)',
                  backgroundColor: lang === 'bn' ? 'var(--brand-primary)' : 'transparent',
                  transition: 'all 0.15s ease',
                }}
              >
                বাংলা
              </button>
              <button
                onClick={() => setLang('en')}
                style={{
                  padding: '0.2rem 0.55rem',
                  fontSize: '0.75rem',
                  fontWeight: lang === 'en' ? 800 : 600,
                  color: lang === 'en' ? '#ffffff' : 'var(--text-secondary)',
                  backgroundColor: lang === 'en' ? 'var(--brand-primary)' : 'transparent',
                  transition: 'all 0.15s ease',
                }}
              >
                English
              </button>
            </div>

            {/* Quick Search Trigger */}
            <button
              onClick={openSearch}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: 'var(--text-secondary)',
                backgroundColor: 'var(--bg-secondary)',
                padding: '0.25rem 0.65rem',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border-primary)',
                fontSize: '0.75rem',
              }}
            >
              <Search size={13} />
              <span className="search-text font-bengali">{t.searchPlaceholder}</span>
              <kbd style={{
                backgroundColor: 'var(--bg-primary)',
                padding: '0.1rem 0.35rem',
                borderRadius: '3px',
                fontSize: '0.65rem',
                border: '1px solid var(--border-primary)',
                fontFamily: 'monospace'
              }}>
                ⌘K
              </kbd>
            </button>

            {/* Bookmarks */}
            <Link
              href="/saved"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                color: pathname === '/saved' ? 'var(--brand-primary)' : 'var(--text-secondary)',
                fontWeight: 600,
                position: 'relative'
              }}
            >
              <Bookmark size={15} />
              <span className="saved-text font-bengali">{t.saved}</span>
              {bookmarks.length > 0 && (
                <span style={{
                  backgroundColor: 'var(--brand-primary)',
                  color: '#ffffff',
                  fontSize: '0.65rem',
                  fontWeight: 800,
                  borderRadius: '50%',
                  width: '15px',
                  height: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  {bookmarks.length}
                </span>
              )}
            </Link>

            {/* Dark/Light Switcher */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              style={{
                color: 'var(--text-primary)',
                padding: '0.3rem',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: 'var(--bg-secondary)',
                border: '1px solid var(--border-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {theme === 'light' ? <Moon size={14} /> : <Sun size={14} style={{ color: '#fbbf24' }} />}
            </button>
          </div>

          {/* Mobile Right: Compact Brief Language Dropdown */}
          <div className="mobile-lang-wrapper" style={{ display: 'none' }}>
            <div style={{ position: 'relative', display: 'inline-flex', alignItems: 'center' }}>
              <Languages size={12} style={{ position: 'absolute', left: '0.42rem', pointerEvents: 'none', color: 'var(--brand-primary)' }} />
              <select
                value={lang}
                onChange={(e) => setLang(e.target.value as 'bn' | 'en')}
                aria-label="Language Selector"
                style={{
                  appearance: 'none',
                  backgroundColor: 'var(--bg-secondary)',
                  color: 'var(--text-primary)',
                  border: '1px solid var(--border-primary)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '0.2rem 1.35rem 0.2rem 1.45rem',
                  fontSize: '0.74rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  outline: 'none',
                }}
              >
                <option value="bn">বাং</option>
                <option value="en">EN</option>
              </select>
              <ChevronDown size={11} style={{ position: 'absolute', right: '0.35rem', pointerEvents: 'none', color: 'var(--text-secondary)' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Main Masthead Banner */}
      <div style={{ padding: '1.25rem 0 1rem 0', textAlign: 'center', position: 'relative' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ color: 'var(--text-primary)', display: 'none' }}
            className="mobile-hamburger"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Masthead Branding */}
          <div style={{ flex: 1, textAlign: 'center' }}>
            <Link href="/" style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', textDecoration: 'none' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 'clamp(0.45rem, 1.2vw, 0.85rem)',
                marginBottom: '0.3rem',
              }}>
                <NarrativeCompassLogo
                  size="clamp(2.1rem, 4.8vw, 3.4rem)"
                  style={{
                    filter: 'drop-shadow(0 2px 5px rgba(0, 0, 0, 0.14))',
                    transition: 'transform 0.2s ease',
                  }}
                />
                <h1
                  className={lang === 'bn' ? 'font-bengali' : 'font-masthead'}
                  style={{
                    fontSize: lang === 'bn' ? 'calc(clamp(2.1rem, 5.2vw, 3.5rem) - 5pt)' : 'clamp(2rem, 5vw, 3.4rem)',
                    fontWeight: 900,
                    lineHeight: 1.1,
                    letterSpacing: lang === 'bn' ? '0' : '0.08em',
                    color: 'var(--text-primary)',
                    margin: 0,
                  }}
                >
                  {t.siteTitle}
                </h1>
              </div>
              <div
                className={lang === 'bn' ? 'font-bengali' : ''}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: lang === 'bn' ? '0.88rem' : '0.82rem',
                  letterSpacing: lang === 'bn' ? '0' : '0.12em',
                  color: 'var(--color-tagline)',
                  fontWeight: 700
                }}
              >
                <span>{t.siteTagline}</span>
              </div>
            </Link>
          </div>

          <div style={{ width: '40px', display: 'none' }} className="mobile-spacer" />
        </div>
      </div>

      {/* Primary Category Navigation Bar */}
      <nav style={{
        borderTop: '1px solid var(--border-primary)',
        backgroundColor: 'var(--bg-primary)',
        position: 'sticky',
        top: 0,
        zIndex: 40,
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.75rem',
            overflowX: 'auto',
            scrollbarWidth: 'none',
            padding: '0.7rem 0',
            width: '100%',
          }} className="desktop-nav">
            <Link
              href="/"
              className={lang === 'bn' ? 'font-bengali' : ''}
              style={{
                fontWeight: pathname === '/' ? 800 : 600,
                fontSize: lang === 'bn' ? '0.88rem' : '0.84rem',
                color: pathname === '/' ? 'var(--brand-primary)' : 'var(--text-primary)',
                textTransform: lang === 'bn' ? 'none' : 'uppercase',
                letterSpacing: lang === 'bn' ? '0' : '0.05em',
                whiteSpace: 'nowrap',
                position: 'relative'
              }}
            >
              {t.allScans}
            </Link>

            {CATEGORIES.map((cat) => {
              const active = pathname === `/category/${cat.slug}`;
              return (
                <Link
                  key={cat.slug}
                  href={`/category/${cat.slug}`}
                  className={lang === 'bn' ? 'font-bengali' : ''}
                  style={{
                    fontWeight: active ? 800 : 600,
                    fontSize: lang === 'bn' ? '0.88rem' : '0.84rem',
                    color: active ? 'var(--brand-primary)' : 'var(--text-primary)',
                    textTransform: lang === 'bn' ? 'none' : 'uppercase',
                    letterSpacing: lang === 'bn' ? '0' : '0.05em',
                    whiteSpace: 'nowrap',
                    transition: 'color 0.15s ease'
                  }}
                >
                  {lang === 'bn' ? cat.labelBn : cat.labelEn}
                </Link>
              );
            })}

            <Link
              href="/bangladesh-indian-news-media"
              className={lang === 'bn' ? 'font-bengali' : ''}
              style={{
                fontWeight: pathname === '/bangladesh-indian-news-media' ? 800 : 600,
                fontSize: lang === 'bn' ? '0.88rem' : '0.84rem',
                color: pathname === '/bangladesh-indian-news-media' ? 'var(--brand-primary)' : 'var(--text-primary)',
                textTransform: lang === 'bn' ? 'none' : 'uppercase',
                letterSpacing: lang === 'bn' ? '0' : '0.05em',
                whiteSpace: 'nowrap',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                padding: '0.15rem 0.55rem',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: pathname === '/bangladesh-indian-news-media' ? 'rgba(217, 119, 6, 0.15)' : 'transparent',
                border: pathname === '/bangladesh-indian-news-media' ? '1px solid rgba(217, 119, 6, 0.3)' : '1px solid transparent',
                transition: 'all 0.15s ease'
              }}
            >
              <Globe size={13} style={{ color: 'var(--brand-gold)' }} />
              {t.mediaDirectory.navTitle}
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.65)',
          zIndex: 100,
          backdropFilter: 'blur(4px)'
        }} onClick={() => setMobileMenuOpen(false)}>
          <div style={{
            width: '80%',
            maxWidth: '320px',
            height: '100%',
            backgroundColor: 'var(--bg-card)',
            padding: '1.5rem',
            overflowY: 'auto',
            borderRight: '1px solid var(--border-primary)'
          }} onClick={(e) => e.stopPropagation()}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <NarrativeCompassLogo size={26} />
                <h2 className={lang === 'bn' ? 'font-bengali' : 'font-masthead'} style={{ fontSize: lang === 'bn' ? 'calc(1.35rem - 5pt)' : '1.35rem', fontWeight: 900, color: 'var(--brand-primary)', margin: 0 }}>
                  {t.siteTitle}
                </h2>
              </div>
              <button onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--text-primary)' }}>
                <X size={20} />
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', borderBottom: '1px solid var(--border-primary)', paddingBottom: '1.5rem', marginBottom: '1.5rem' }}>
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className="font-bengali" style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text-primary)' }}>
                {t.allScans}
              </Link>
              {CATEGORIES.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/category/${cat.slug}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-bengali"
                  style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--text-secondary)' }}
                >
                  {lang === 'bn' ? cat.labelBn : cat.labelEn}
                </Link>
              ))}
              <Link
                href="/bangladesh-indian-news-media"
                onClick={() => setMobileMenuOpen(false)}
                className="font-bengali"
                style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--brand-gold)', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
              >
                <Globe size={15} />
                {t.mediaDirectory.navTitle}
              </Link>
              <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="font-bengali" style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                {t.aboutUs.pageTitle}
              </Link>
              <Link href="/saved" onClick={() => setMobileMenuOpen(false)} className="font-bengali" style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--brand-primary)' }}>
                {t.saved} ({bookmarks.length})
              </Link>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <button
                onClick={() => toggleLang()}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'var(--text-primary)',
                  fontWeight: 600,
                  fontSize: '0.88rem'
                }}
              >
                <Languages size={16} />
                Language: {lang === 'bn' ? 'English এ পরিবর্তন করুন' : 'Switch to বাংলা'}
              </button>
              <button
                onClick={() => toggleTheme()}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'var(--text-primary)',
                  fontWeight: 600,
                  fontSize: '0.88rem'
                }}
              >
                {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
                {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 850px) {
          .mobile-hamburger {
            display: block !important;
          }
          .mobile-spacer {
            display: block !important;
          }
          .search-text, .saved-text {
            display: none !important;
          }
        }

        @media (max-width: 768px) {
          .top-utility-bar {
            padding: 0.32rem 0 !important;
          }
          .desktop-date-wrapper,
          .desktop-controls-wrapper {
            display: none !important;
          }
          .mobile-search-wrapper {
            display: flex !important;
            flex: 0 0 33% !important;
            width: 33% !important;
            max-width: 33% !important;
          }
          .mobile-lang-wrapper {
            display: flex !important;
            flex-shrink: 0 !important;
          }
        }
      `}</style>
    </header>
  );
}
