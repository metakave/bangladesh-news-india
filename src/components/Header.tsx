'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useApp } from '@/context/ThemeContext';
import { CATEGORIES } from '@/data/news-data';
import {
  Search,
  Moon,
  Sun,
  Bookmark,
  Menu,
  X,
  Globe,
  Flame,
  Newspaper,
  Compass,
  Radio,
  SlidersHorizontal
} from 'lucide-react';

export default function Header() {
  const pathname = usePathname();
  const { theme, toggleTheme, edition, setEdition, bookmarks, openSearch } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <header style={{ backgroundColor: 'var(--bg-primary)', borderBottom: '2px solid var(--border-bold)' }}>
      {/* Top Utility Bar */}
      <div style={{
        borderBottom: '1px solid var(--border-primary)',
        padding: '0.45rem 0',
        fontSize: '0.78rem',
        color: 'var(--text-secondary)'
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Date & Edition */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <span style={{ fontWeight: 600 }}>{today}</span>
            <span style={{ color: 'var(--border-primary)' }}>|</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <Globe size={13} style={{ color: 'var(--brand-primary)' }} />
              <button
                onClick={() => setEdition(edition === 'national' ? 'global' : 'national')}
                style={{
                  color: 'var(--text-primary)',
                  fontWeight: 700,
                  fontSize: '0.75rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                }}
              >
                Edition: <span style={{ color: 'var(--brand-primary)', textDecoration: 'underline' }}>{edition === 'national' ? 'Dhaka (National)' : 'International'}</span>
              </button>
            </div>
            <span style={{ display: 'none' }} className="epaper-link">
              <Link href="/epaper" style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>
                Today&apos;s ePaper
              </Link>
            </span>
          </div>

          {/* User Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
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
              <span className="search-text">Search Bangladesh news...</span>
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
              <span className="saved-text">Saved</span>
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

            {/* Subscribe CTA */}
            <button
              style={{
                backgroundColor: 'var(--brand-primary)',
                color: '#ffffff',
                fontWeight: 700,
                fontSize: '0.72rem',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                padding: '0.35rem 0.75rem',
                borderRadius: 'var(--radius-sm)',
                display: 'none',
              }}
              className="subscribe-btn"
            >
              Subscribe
            </button>
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
            <Link href="/" style={{ display: 'inline-block' }}>
              <h1
                className="font-masthead"
                style={{
                  fontSize: 'clamp(2rem, 5vw, 3.4rem)',
                  fontWeight: 900,
                  lineHeight: 1,
                  letterSpacing: '0.08em',
                  color: 'var(--text-primary)',
                  textTransform: 'uppercase',
                  marginBottom: '0.25rem'
                }}
              >
                Bangladesh Watch
              </h1>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.75rem',
                fontSize: '0.72rem',
                textTransform: 'uppercase',
                letterSpacing: '0.18em',
                color: 'var(--text-muted)',
                fontWeight: 700
              }}>
                <span>Est. 2026</span>
                <span>•</span>
                <span>The Independent Journal of Record &amp; Ideas</span>
                <span>•</span>
                <span>Dhaka • Chattogram • Sylhet</span>
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
              style={{
                fontWeight: pathname === '/' ? 800 : 600,
                fontSize: '0.84rem',
                color: pathname === '/' ? 'var(--brand-primary)' : 'var(--text-primary)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                whiteSpace: 'nowrap',
                position: 'relative'
              }}
            >
              Frontpage
            </Link>

            {CATEGORIES.map((cat) => {
              const active = pathname === `/category/${cat.slug}`;
              return (
                <Link
                  key={cat.slug}
                  href={`/category/${cat.slug}`}
                  style={{
                    fontWeight: active ? 800 : 600,
                    fontSize: '0.84rem',
                    color: active ? 'var(--brand-primary)' : 'var(--text-primary)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    whiteSpace: 'nowrap',
                    transition: 'color 0.15s ease'
                  }}
                >
                  {cat.label}
                </Link>
              );
            })}

            <Link
              href="/category/opinion"
              style={{
                fontWeight: pathname === '/category/opinion' ? 800 : 600,
                fontSize: '0.84rem',
                color: pathname === '/category/opinion' ? 'var(--brand-primary)' : 'var(--text-primary)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                whiteSpace: 'nowrap',
              }}
            >
              Opinion
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
              <h2 className="font-masthead" style={{ fontSize: '1.4rem', fontWeight: 900, color: 'var(--brand-primary)' }}>
                BANGLADESH WATCH
              </h2>
              <button onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--text-primary)' }}>
                <X size={20} />
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', borderBottom: '1px solid var(--border-primary)', paddingBottom: '1.5rem', marginBottom: '1.5rem' }}>
              <Link href="/" onClick={() => setMobileMenuOpen(false)} style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text-primary)' }}>
                Frontpage (Home)
              </Link>
              {CATEGORIES.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/category/${cat.slug}`}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--text-secondary)' }}
                >
                  {cat.label}
                </Link>
              ))}
              <Link href="/saved" onClick={() => setMobileMenuOpen(false)} style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--brand-primary)' }}>
                Saved Articles ({bookmarks.length})
              </Link>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <button
                onClick={() => {
                  toggleTheme();
                }}
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
                Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
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
        @media (min-width: 640px) {
          .subscribe-btn {
            display: block !important;
          }
          .epaper-link {
            display: inline-block !important;
          }
        }
      `}</style>
    </header>
  );
}
