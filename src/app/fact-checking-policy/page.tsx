'use client';

import React from 'react';
import Link from 'next/link';
import { useApp } from '@/context/ThemeContext';
import { TRANSLATIONS } from '@/data/translations';
import {
  ShieldAlert,
  ChevronRight,
  AlertTriangle,
  Award,
  BookOpen,
  Eye,
  Scale,
  FileText
} from 'lucide-react';

export default function FactCheckingPolicyPage() {
  const { lang } = useApp();
  const t = TRANSLATIONS[lang];
  const policy = t.factCheckingPolicy;

  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh', paddingBottom: '5rem' }}>
      {/* Breadcrumb Bar */}
      <div
        style={{
          borderBottom: '1px solid var(--border-primary)',
          backgroundColor: 'var(--bg-secondary)',
          padding: '0.65rem 0',
          fontSize: '0.8rem',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}>
          <Link href="/" style={{ color: 'var(--text-secondary)' }}>
            {lang === 'bn' ? 'প্রচ্ছদ' : 'Home'}
          </Link>
          <ChevronRight size={13} />
          <span style={{ color: 'var(--brand-primary)', fontWeight: 700 }} className={lang === 'bn' ? 'font-bengali' : ''}>
            {policy.pageTitle}
          </span>
        </div>
      </div>

      {/* Hero Masthead */}
      <section
        style={{
          borderBottom: '1px solid var(--border-primary)',
          backgroundColor: 'var(--bg-secondary)',
          padding: '3rem 0 3.5rem 0',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '820px' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                backgroundColor: 'rgba(239, 68, 68, 0.1)',
                border: '1px solid rgba(239, 68, 68, 0.25)',
                color: '#ef4444',
                padding: '0.25rem 0.75rem',
                borderRadius: '9999px',
                fontSize: '0.75rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '1rem',
              }}
              className={lang === 'bn' ? 'font-bengali' : ''}
            >
              <ShieldAlert size={14} />
              <span>{policy.badge}</span>
            </div>

            <h1
              className={lang === 'bn' ? 'font-bengali' : ''}
              style={{
                fontSize: '2.5rem',
                fontWeight: 800,
                color: 'var(--text-primary)',
                lineHeight: 1.2,
                marginBottom: '1rem',
                letterSpacing: '-0.02em',
              }}
            >
              {policy.pageTitle}
            </h1>

            <p
              className={lang === 'bn' ? 'font-bengali' : ''}
              style={{
                fontSize: '1.15rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
                marginBottom: '1.75rem',
              }}
            >
              {policy.tagline}
            </p>

            <div
              style={{
                backgroundColor: 'var(--bg-card)',
                borderLeft: '4px solid #ef4444',
                borderTop: '1px solid var(--border-primary)',
                borderRight: '1px solid var(--border-primary)',
                borderBottom: '1px solid var(--border-primary)',
                borderRadius: '0 12px 12px 0',
                padding: '1.25rem 1.5rem',
                fontSize: '0.95rem',
                color: 'var(--text-primary)',
                lineHeight: 1.7,
                boxShadow: 'var(--shadow-sm)',
              }}
              className={lang === 'bn' ? 'font-bengali' : ''}
            >
              {policy.leadSummary}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <main className="container" style={{ paddingTop: '3rem' }}>
        <div style={{ maxWidth: '820px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          
          {/* Key Overview Cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1.25rem',
            }}
          >
            <div
              style={{
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-primary)',
                borderRadius: '12px',
                padding: '1.25rem',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.85rem',
              }}
            >
              <div
                style={{
                  backgroundColor: 'rgba(239, 68, 68, 0.1)',
                  color: '#ef4444',
                  padding: '0.6rem',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <ShieldAlert size={20} />
              </div>
              <div>
                <h3
                  className={lang === 'bn' ? 'font-bengali' : ''}
                  style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.25rem' }}
                >
                  {lang === 'bn' ? '০% ইন-হাউস ফ্যাক্ট-চেক' : '0% In-House Fact-Checking'}
                </h3>
                <p
                  className={lang === 'bn' ? 'font-bengali' : ''}
                  style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}
                >
                  {lang === 'bn' ? 'আমরা খবর সত্য বা মিথ্যা প্রমাণ করি না; সংবাদমূল যেভাবে পরিবেশিত হয় হুবহু সেটাই দেখাই।' : 'We do not verify or alter original news stories; dispatches are presented strictly as reported.'}
                </p>
              </div>
            </div>

            <div
              style={{
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-primary)',
                borderRadius: '12px',
                padding: '1.25rem',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.85rem',
              }}
            >
              <div
                style={{
                  backgroundColor: 'rgba(37, 99, 235, 0.1)',
                  color: '#2563eb',
                  padding: '0.6rem',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Award size={20} />
              </div>
              <div>
                <h3
                  className={lang === 'bn' ? 'font-bengali' : ''}
                  style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.25rem' }}
                >
                  {lang === 'bn' ? 'স্বীকৃত ভারতীয় সংবাদমাধ্যম' : 'Recognized Media Sources'}
                </h3>
                <p
                  className={lang === 'bn' ? 'font-bengali' : ''}
                  style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}
                >
                  {lang === 'bn' ? 'ভারতে প্রতিষ্ঠিত ও ইনস্টিটিউশনালি গ্রহণযোগ্য সংবাদ ডেস্কেই আমাদের ইনডেক্স সীমাবদ্ধ।' : 'Source selection is curated exclusively from established, mainstream Indian press desks.'}
                </p>
              </div>
            </div>

            <div
              style={{
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-primary)',
                borderRadius: '12px',
                padding: '1.25rem',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.85rem',
              }}
            >
              <div
                style={{
                  backgroundColor: 'rgba(245, 158, 11, 0.1)',
                  color: '#d97706',
                  padding: '0.6rem',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Eye size={20} />
              </div>
              <div>
                <h3
                  className={lang === 'bn' ? 'font-bengali' : ''}
                  style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.25rem' }}
                >
                  {lang === 'bn' ? 'মিডিয়া বয়ান সচেতনতা' : 'Media Narrative Awareness'}
                </h3>
                <p
                  className={lang === 'bn' ? 'font-bengali' : ''}
                  style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}
                >
                  {lang === 'bn' ? 'রাজনৈতিক প্রচার বা একপেশে খবর থেকে সচেতনতা বাড়াতে একাধিক উৎসের বয়ান তুলে ধরি।' : 'Highlights how news channels and newspapers construct political narratives and framing.'}
                </p>
              </div>
            </div>
          </div>

          {/* Section 1: No In-House Fact-Checking */}
          <article
            style={{
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-primary)',
              borderRadius: '16px',
              padding: '2rem',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ color: '#ef4444', backgroundColor: 'rgba(239, 68, 68, 0.1)', padding: '0.5rem', borderRadius: '8px' }}>
                <ShieldAlert size={22} />
              </div>
              <h2
                className={lang === 'bn' ? 'font-bengali' : ''}
                style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-primary)' }}
              >
                {policy.noFactCheckTitle}
              </h2>
            </div>
            <div
              className={lang === 'bn' ? 'font-bengali' : ''}
              style={{ fontSize: '0.98rem', color: 'var(--text-secondary)', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '1rem' }}
            >
              <p>{policy.noFactCheckP1}</p>
              <p>{policy.noFactCheckP2}</p>
            </div>
          </article>

          {/* Section 2: Quality Source Selection */}
          <article
            style={{
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-primary)',
              borderRadius: '16px',
              padding: '2rem',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ color: '#2563eb', backgroundColor: 'rgba(37, 99, 235, 0.1)', padding: '0.5rem', borderRadius: '8px' }}>
                <Award size={22} />
              </div>
              <h2
                className={lang === 'bn' ? 'font-bengali' : ''}
                style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-primary)' }}
              >
                {policy.qualitySourcesTitle}
              </h2>
            </div>
            <div
              className={lang === 'bn' ? 'font-bengali' : ''}
              style={{ fontSize: '0.98rem', color: 'var(--text-secondary)', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '1rem' }}
            >
              <p>{policy.qualitySourcesP1}</p>
              <p>{policy.qualitySourcesP2}</p>
            </div>
          </article>

          {/* Section 3: Media Narrative & Political Bias Awareness */}
          <article
            style={{
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-primary)',
              borderRadius: '16px',
              padding: '2rem',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ color: '#d97706', backgroundColor: 'rgba(245, 158, 11, 0.1)', padding: '0.5rem', borderRadius: '8px' }}>
                <Eye size={22} />
              </div>
              <h2
                className={lang === 'bn' ? 'font-bengali' : ''}
                style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-primary)' }}
              >
                {policy.narrativeAwarenessTitle}
              </h2>
            </div>
            <div
              className={lang === 'bn' ? 'font-bengali' : ''}
              style={{ fontSize: '0.98rem', color: 'var(--text-secondary)', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '1rem' }}
            >
              <p>{policy.narrativeAwarenessP1}</p>
              <p>{policy.narrativeAwarenessP2}</p>
            </div>
          </article>

          {/* Section 4: Reader Responsibility & Independent Verification */}
          <article
            style={{
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-primary)',
              borderRadius: '16px',
              padding: '2rem',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ color: '#059669', backgroundColor: 'rgba(16, 185, 129, 0.1)', padding: '0.5rem', borderRadius: '8px' }}>
                <Scale size={22} />
              </div>
              <h2
                className={lang === 'bn' ? 'font-bengali' : ''}
                style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-primary)' }}
              >
                {policy.readerDiscretionTitle}
              </h2>
            </div>
            <div
              className={lang === 'bn' ? 'font-bengali' : ''}
              style={{ fontSize: '0.98rem', color: 'var(--text-secondary)', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '1rem' }}
            >
              <p>{policy.readerDiscretionP1}</p>
              <p>{policy.readerDiscretionP2}</p>
            </div>
          </article>

          {/* Section 5: Disclaimer */}
          <article
            style={{
              backgroundColor: 'rgba(239, 68, 68, 0.04)',
              border: '1px solid rgba(239, 68, 68, 0.2)',
              borderRadius: '16px',
              padding: '2rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <AlertTriangle size={20} color="#ef4444" />
              <h2
                className={lang === 'bn' ? 'font-bengali' : ''}
                style={{ fontSize: '1.15rem', fontWeight: 700, color: '#ef4444' }}
              >
                {policy.disclaimerTitle}
              </h2>
            </div>
            <p
              className={lang === 'bn' ? 'font-bengali' : ''}
              style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}
            >
              {policy.disclaimerP1}
            </p>
          </article>

          {/* Navigation Links Banner */}
          <div
            style={{
              backgroundColor: 'var(--bg-secondary)',
              border: '1px solid var(--border-primary)',
              borderRadius: '16px',
              padding: '1.75rem',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '1rem',
            }}
          >
            <div>
              <h3
                className={lang === 'bn' ? 'font-bengali' : ''}
                style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.25rem' }}
              >
                {lang === 'bn' ? 'আমাদের অন্যান্য স্বয়ংক্রিয় নীতিমালা দেখুন' : 'Explore Our Automated Transparency Frameworks'}
              </h3>
              <p
                className={lang === 'bn' ? 'font-bengali' : ''}
                style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}
              >
                {lang === 'bn' ? 'আমাদের এআই অ্যালগরিদম ও ১০০% অসংশোধিত শিরোনাম নীতি জানার জন্য সম্পাদনা নীতিমালা পড়ুন।' : 'Read our full Editorial Policy for breakdown on AI scanning and verbatim headline standards.'}
              </p>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <Link
                href="/editorial-policy"
                className={`btn btn-secondary ${lang === 'bn' ? 'font-bengali' : ''}`}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem' }}
              >
                <FileText size={16} />
                <span>{lang === 'bn' ? 'সম্পাদনা নীতিমালা' : 'Editorial Policy'}</span>
              </Link>
              <Link
                href="/bangladesh-indian-news-media"
                className={`btn btn-primary ${lang === 'bn' ? 'font-bengali' : ''}`}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem' }}
              >
                <BookOpen size={16} />
                <span>{lang === 'bn' ? '১২০+ মিডিয়া ডিরেক্টরি' : '120+ Media Directory'}</span>
              </Link>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
