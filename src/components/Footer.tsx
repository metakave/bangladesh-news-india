'use client';

import React from 'react';
import Link from 'next/link';
import { CATEGORIES } from '@/data/news-data';
import { Globe, Shield, Rss, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer style={{
      backgroundColor: 'var(--bg-secondary)',
      borderTop: '2px solid var(--border-bold)',
      paddingTop: '3.5rem',
      paddingBottom: '2.5rem',
      fontSize: '0.85rem',
      color: 'var(--text-secondary)',
    }}>
      <div className="container">
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
            <Link href="/">
              <h2 className="font-masthead" style={{
                fontSize: '1.8rem',
                fontWeight: 900,
                color: 'var(--text-primary)',
                letterSpacing: '0.06em',
                marginBottom: '0.5rem',
              }}>
                BANGLADESH WATCH
              </h2>
            </Link>
            <p style={{
              fontSize: '0.88rem',
              lineHeight: 1.6,
              color: 'var(--text-secondary)',
              marginBottom: '1.25rem',
              maxWidth: '380px'
            }}>
              Bangladesh Watch is an independent digital news publication dedicated to rigorous factual reporting, investigative journalism, and insightful economic analysis across the Bengal delta and the Bay of Bengal region.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.75rem', fontWeight: 600 }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: 'var(--brand-primary)' }}>
                <Shield size={14} /> Trust In Journalism Verified
              </span>
              <span>•</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                <Globe size={14} /> Bay of Bengal Bureau
              </span>
            </div>
          </div>

          {/* Sections */}
          <div>
            <h4 style={{
              fontSize: '0.78rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'var(--text-primary)',
              marginBottom: '1rem',
            }}>
              News Desks
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {CATEGORIES.slice(0, 4).map((cat) => (
                <li key={cat.slug}>
                  <Link href={`/category/${cat.slug}`} style={{ color: 'var(--text-secondary)' }}>
                    {cat.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Sections */}
          <div>
            <h4 style={{
              fontSize: '0.78rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'var(--text-primary)',
              marginBottom: '1rem',
            }}>
              Features &amp; Media
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {CATEGORIES.slice(4).map((cat) => (
                <li key={cat.slug}>
                  <Link href={`/category/${cat.slug}`} style={{ color: 'var(--text-secondary)' }}>
                    {cat.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/category/opinion" style={{ color: 'var(--text-secondary)' }}>
                  Opinion &amp; Editorials
                </Link>
              </li>
              <li>
                <Link href="/saved" style={{ color: 'var(--brand-primary)', fontWeight: 600 }}>
                  Saved Reading List
                </Link>
              </li>
            </ul>
          </div>

          {/* Editorial Ethics & Standards */}
          <div>
            <h4 style={{
              fontSize: '0.78rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'var(--text-primary)',
              marginBottom: '1rem',
            }}>
              Standards &amp; Governance
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.8rem' }}>
              <li><a href="#ethics" style={{ color: 'var(--text-secondary)' }}>Editorial Code of Ethics</a></li>
              <li><a href="#corrections" style={{ color: 'var(--text-secondary)' }}>Corrections &amp; Clarifications</a></li>
              <li><a href="#factcheck" style={{ color: 'var(--text-secondary)' }}>Fact-Checking Policy</a></li>
              <li><a href="#ombudsperson" style={{ color: 'var(--text-secondary)' }}>Readers&apos; Editor / Ombudsman</a></li>
              <li><a href="#rss" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: 'var(--brand-gold)' }}><Rss size={12} /> RSS News Feeds</a></li>
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
          <div>
            © {new Date().getFullYear()} Bangladesh Watch Media Group. All rights reserved. Registered under Press Council standards • Kawran Bazar, Dhaka.
          </div>

          <button
            onClick={scrollToTop}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              color: 'var(--text-primary)',
              fontWeight: 700,
              fontSize: '0.75rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}
          >
            Back to Top <ArrowUp size={14} />
          </button>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .footer-brand-col {
            grid-column: span 1 !important;
          }
        }
      `}</style>
    </footer>
  );
}
