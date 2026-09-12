'use client';

import React from 'react';
import Link from 'next/link';
import { useApp } from '@/context/ThemeContext';
import { TRANSLATIONS } from '@/data/translations';
import {
  Shield,
  Cpu,
  Mail,
  ChevronRight,
  Globe,
  Sparkles,
  Bot,
  User,
  Scale,
  Award,
  ArrowUpRight,
  CheckCircle2,
  Share2
} from 'lucide-react';

export default function AboutPage() {
  const { lang } = useApp();
  const t = TRANSLATIONS[lang];
  const about = t.aboutUs;

  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh', paddingBottom: '5rem' }}>
      {/* Breadcrumb Bar */}
      <div style={{
        borderBottom: '1px solid var(--border-primary)',
        backgroundColor: 'var(--bg-secondary)',
        padding: '0.65rem 0',
        fontSize: '0.8rem',
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}>
          <Link href="/" style={{ color: 'var(--text-secondary)' }}>
            {lang === 'bn' ? 'প্রচ্ছদ' : 'Home'}
          </Link>
          <ChevronRight size={13} />
          <span style={{ color: 'var(--brand-primary)', fontWeight: 700 }} className={lang === 'bn' ? 'font-bengali' : ''}>
            {about.pageTitle}
          </span>
        </div>
      </div>

      {/* Hero Masthead Section */}
      <div style={{
        borderBottom: '2px solid var(--border-bold)',
        backgroundColor: 'var(--bg-card)',
        padding: '3.5rem 0 3rem 0',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div className="container">
          <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center' }}>
            {/* Mission Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: 'var(--bg-secondary)',
              border: '1px solid var(--border-bold)',
              padding: '0.35rem 0.95rem',
              borderRadius: '999px',
              fontSize: '0.78rem',
              fontWeight: 800,
              color: 'var(--brand-primary)',
              marginBottom: '1.25rem',
              letterSpacing: '0.04em',
            }}>
              <Sparkles size={15} style={{ color: 'var(--brand-gold)' }} />
              <span className={lang === 'bn' ? 'font-bengali' : ''}>{about.badge}</span>
            </div>

            {/* Main Title */}
            <h1
              className={lang === 'bn' ? 'font-bengali' : 'font-masthead'}
              style={{
                fontSize: lang === 'bn' ? 'clamp(2.4rem, 5vw, 3.5rem)' : 'clamp(2.5rem, 5.2vw, 3.6rem)',
                fontWeight: 900,
                color: 'var(--text-primary)',
                lineHeight: 1.15,
                letterSpacing: lang === 'bn' ? '0' : '0.03em',
                marginBottom: '1rem',
              }}
            >
              {about.pageTitle}
            </h1>

            {/* Subtitle */}
            <p
              className={lang === 'bn' ? 'font-bengali' : ''}
              style={{
                fontSize: lang === 'bn' ? '1.12rem' : '1.1rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.65,
                maxWidth: '720px',
                margin: '0 auto',
              }}
            >
              {about.tagline}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="container" style={{ marginTop: '3.5rem' }}>
        <div style={{ maxWidth: '880px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          
          {/* Section 1: The Problem & Context */}
          <div style={{
            backgroundColor: 'var(--bg-card)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-primary)',
            padding: '2.25rem',
            boxShadow: 'var(--shadow-sm)',
            position: 'relative',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div style={{
                width: '38px',
                height: '38px',
                borderRadius: '8px',
                backgroundColor: 'rgba(220, 38, 38, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--brand-primary)',
              }}>
                <Scale size={20} />
              </div>
              <h2
                className={lang === 'bn' ? 'font-bengali' : 'font-masthead'}
                style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--text-primary)' }}
              >
                {about.problemTitle}
              </h2>
            </div>

            <p
              className={lang === 'bn' ? 'font-bengali' : ''}
              style={{ fontSize: '0.98rem', lineHeight: 1.8, color: 'var(--text-secondary)', marginBottom: '1rem' }}
            >
              {about.problemP1}
            </p>
            <p
              className={lang === 'bn' ? 'font-bengali' : ''}
              style={{ fontSize: '0.98rem', lineHeight: 1.8, color: 'var(--text-secondary)' }}
            >
              {about.problemP2}
            </p>
          </div>

          {/* Section 2: Our Mission & 3-Language Monitoring */}
          <div style={{
            backgroundColor: 'var(--bg-card)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-primary)',
            padding: '2.25rem',
            boxShadow: 'var(--shadow-sm)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div style={{
                width: '38px',
                height: '38px',
                borderRadius: '8px',
                backgroundColor: 'rgba(37, 99, 235, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#2563eb',
              }}>
                <Globe size={20} />
              </div>
              <h2
                className={lang === 'bn' ? 'font-bengali' : 'font-masthead'}
                style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--text-primary)' }}
              >
                {about.missionTitle}
              </h2>
            </div>

            <p
              className={lang === 'bn' ? 'font-bengali' : ''}
              style={{ fontSize: '0.98rem', lineHeight: 1.8, color: 'var(--text-secondary)', marginBottom: '1rem' }}
            >
              {about.missionP1}
            </p>

            {/* Language & Sentiment Tags */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1rem',
              margin: '1.5rem 0',
            }}>
              <div style={{
                padding: '1rem',
                backgroundColor: 'var(--bg-secondary)',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border-primary)',
              }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
                  {lang === 'bn' ? '১. ইংরেজি সংবাদমাধ্যম' : '1. English Media'}
                </div>
                <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  The Hindu, TOI, Indian Express, Mint, Telegraph
                </div>
              </div>

              <div style={{
                padding: '1rem',
                backgroundColor: 'var(--bg-secondary)',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border-primary)',
              }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
                  {lang === 'bn' ? '২. বাংলা সংবাদমাধ্যম' : '2. Bengali Media'}
                </div>
                <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  আনন্দবাজার, সংবাদ প্রতিদিন, এই সময়, বর্তমান
                </div>
              </div>

              <div style={{
                padding: '1rem',
                backgroundColor: 'var(--bg-secondary)',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border-primary)',
              }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
                  {lang === 'bn' ? '৩. হিন্দি সংবাদমাধ্যম' : '3. Hindi Media'}
                </div>
                <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  दैनिक जागरण, अमर उजाला, दैनिक भास्कर, आज तक
                </div>
              </div>
            </div>

            <p
              className={lang === 'bn' ? 'font-bengali' : ''}
              style={{ fontSize: '0.98rem', lineHeight: 1.8, color: 'var(--text-secondary)' }}
            >
              {about.missionP2}
            </p>
          </div>

          {/* Section 3: Algorithmic Objectivity & Frontier AI */}
          <div style={{
            backgroundColor: 'var(--bg-card)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-primary)',
            padding: '2.25rem',
            boxShadow: 'var(--shadow-sm)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div style={{
                width: '38px',
                height: '38px',
                borderRadius: '8px',
                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#059669',
              }}>
                <Bot size={20} />
              </div>
              <h2
                className={lang === 'bn' ? 'font-bengali' : 'font-masthead'}
                style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--text-primary)' }}
              >
                {about.aiTitle}
              </h2>
            </div>

            <p
              className={lang === 'bn' ? 'font-bengali' : ''}
              style={{ fontSize: '0.98rem', lineHeight: 1.8, color: 'var(--text-secondary)', marginBottom: '1rem' }}
            >
              {about.aiP1}
            </p>
            <p
              className={lang === 'bn' ? 'font-bengali' : ''}
              style={{ fontSize: '0.98rem', lineHeight: 1.8, color: 'var(--text-secondary)' }}
            >
              {about.aiP2}
            </p>
          </div>

          {/* Section 4: Leadership Profile (Sadiq M. Alam) */}
          <div style={{
            backgroundColor: 'var(--bg-card)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-bold)',
            padding: '2.25rem',
            boxShadow: 'var(--shadow-md)',
            position: 'relative',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <div style={{
                width: '38px',
                height: '38px',
                borderRadius: '8px',
                backgroundColor: 'rgba(217, 119, 6, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--brand-gold)',
              }}>
                <Award size={20} />
              </div>
              <h2
                className={lang === 'bn' ? 'font-bengali' : 'font-masthead'}
                style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--text-primary)' }}
              >
                {about.leadershipTitle}
              </h2>
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '1.5rem',
              flexWrap: 'wrap',
              backgroundColor: 'var(--bg-secondary)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-primary)',
              padding: '1.5rem',
            }}>
              <div style={{
                width: '64px',
                height: '64px',
                minWidth: '64px',
                borderRadius: '50%',
                backgroundColor: 'var(--brand-primary)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 900,
                fontSize: '1.4rem',
                boxShadow: 'var(--shadow-sm)',
              }}>
                SA
              </div>

              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--brand-gold)', letterSpacing: '0.06em' }}>
                  {about.headOfIdea}
                </div>
                <h3
                  className={lang === 'bn' ? 'font-bengali' : 'font-masthead'}
                  style={{ fontSize: '1.3rem', fontWeight: 900, color: 'var(--text-primary)', margin: '0.2rem 0 0.5rem 0' }}
                >
                  {about.sadiqName}
                </h3>
                <p
                  className={lang === 'bn' ? 'font-bengali' : ''}
                  style={{ fontSize: '0.92rem', lineHeight: 1.65, color: 'var(--text-secondary)' }}
                >
                  {about.sadiqBio}
                </p>
              </div>
            </div>
          </div>

          {/* Section 5: Press & Media Inquiries */}
          <div style={{
            backgroundColor: 'var(--bg-card)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-primary)',
            padding: '2.25rem',
            boxShadow: 'var(--shadow-sm)',
            textAlign: 'center',
          }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              backgroundColor: 'rgba(220, 38, 38, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--brand-primary)',
              margin: '0 auto 1.25rem auto',
            }}>
              <Mail size={22} />
            </div>

            <h2
              className={lang === 'bn' ? 'font-bengali' : 'font-masthead'}
              style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}
            >
              {about.contactTitle}
            </h2>

            <p
              className={lang === 'bn' ? 'font-bengali' : ''}
              style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', maxWidth: '540px', margin: '0 auto 1.5rem auto' }}
            >
              {about.contactDesc}
            </p>

            <a
              href={`mailto:${about.email}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: 'var(--brand-primary)',
                color: '#ffffff',
                padding: '0.85rem 1.75rem',
                borderRadius: 'var(--radius-sm)',
                fontWeight: 700,
                fontSize: '0.95rem',
                boxShadow: 'var(--shadow-sm)',
                textDecoration: 'none',
                transition: 'all 0.15s ease',
              }}
            >
              <Mail size={16} />
              {about.email}
              <ArrowUpRight size={16} />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
