'use client';

import React from 'react';
import Link from 'next/link';
import { useApp } from '@/context/ThemeContext';
import { TRANSLATIONS } from '@/data/translations';
import {
  ShieldCheck,
  Cpu,
  Clock,
  Scale,
  FileText,
  Newspaper,
  Rss,
  Globe,
  Youtube,
  Instagram,
  RefreshCw,
  Sparkles,
  ChevronRight,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Mail,
  Share2,
  TrendingUp,
  Layers,
  Award
} from 'lucide-react';

export default function EditorialPolicyPage() {
  const { lang } = useApp();
  const t = TRANSLATIONS[lang];
  const policy = t.editorialPolicy;

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
      <div
        style={{
          borderBottom: '2px solid var(--border-bold)',
          backgroundColor: 'var(--bg-card)',
          padding: '3.5rem 0 3rem 0',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div className="container">
          <div style={{ maxWidth: '880px', margin: '0 auto', textAlign: 'center' }}>
            {/* Mission Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: 'var(--bg-secondary)',
                border: '1px solid var(--border-bold)',
                padding: '0.4rem 1.1rem',
                borderRadius: '999px',
                fontSize: '0.82rem',
                fontWeight: 800,
                color: 'var(--brand-primary)',
                marginBottom: '1.25rem',
                letterSpacing: '0.04em',
              }}
            >
              <Cpu size={15} style={{ color: 'var(--brand-primary)' }} />
              <span className={lang === 'bn' ? 'font-bengali' : ''}>{policy.badge}</span>
            </div>

            {/* Main Title */}
            <h1
              className={lang === 'bn' ? 'font-bengali' : 'font-masthead'}
              style={{
                fontSize: lang === 'bn' ? 'clamp(2.3rem, 4.8vw, 3.4rem)' : 'clamp(2.4rem, 5vw, 3.5rem)',
                fontWeight: 700,
                color: 'var(--text-primary)',
                lineHeight: 1.2,
                marginBottom: '1.2rem',
              }}
            >
              {policy.pageTitle}
            </h1>

            {/* Tagline */}
            <p
              className={lang === 'bn' ? 'font-bengali' : ''}
              style={{
                fontSize: lang === 'bn' ? '1.2rem' : '1.2rem',
                color: 'var(--brand-primary)',
                fontWeight: 600,
                lineHeight: 1.45,
                marginBottom: '1.25rem',
              }}
            >
              {policy.tagline}
            </p>

            {/* Lead Summary */}
            <p
              className={lang === 'bn' ? 'font-bengali' : ''}
              style={{
                fontSize: lang === 'bn' ? '1.05rem' : '1.02rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.75,
                maxWidth: '820px',
                margin: '0 auto 2.2rem auto',
              }}
            >
              {policy.leadSummary}
            </p>

            {/* 6 Key Architectural Metrics / Stat Badges */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
                gap: '0.75rem',
                marginTop: '1.5rem',
              }}
            >
              {[
                { icon: <Clock size={16} color="#2563eb" />, label: policy.statPills.cycle24h },
                { icon: <Scale size={16} color="#059669" />, label: policy.statPills.zeroBias },
                { icon: <FileText size={16} color="#d97706" />, label: policy.statPills.asIsHeadlines },
                { icon: <TrendingUp size={16} color="#7c3aed" />, label: policy.statPills.sentimentTiers },
                { icon: <Layers size={16} color="#dc2626" />, label: policy.statPills.sourceChannels },
                { icon: <Award size={16} color="#0891b2" />, label: policy.statPills.popularMedia },
              ].map((pill, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: 'var(--bg-secondary)',
                    border: '1px solid var(--border-primary)',
                    borderRadius: '8px',
                    padding: '0.75rem 0.85rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.55rem',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                  }}
                >
                  {pill.icon}
                  <span className={lang === 'bn' ? 'font-bengali' : ''} style={{ textAlign: 'left', lineHeight: 1.3 }}>
                    {pill.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="container" style={{ maxWidth: '1000px', marginTop: '3.5rem' }}>
        
        {/* Visual Ingestion & Processing Pipeline Flowchart */}
        <section
          style={{
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--border-bold)',
            borderRadius: '12px',
            padding: '2rem 1.75rem',
            marginBottom: '3.5rem',
            boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <span
              style={{
                fontSize: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                fontWeight: 800,
                color: 'var(--brand-primary)',
                display: 'block',
                marginBottom: '0.35rem',
              }}
            >
              {lang === 'bn' ? 'সম্পূর্ণ অ্যালগরিদমিক আর্কিটেকচার' : 'Complete Algorithmic Pipeline'}
            </span>
            <h2
              className={lang === 'bn' ? 'font-bengali' : 'font-serif'}
              style={{
                fontSize: lang === 'bn' ? '1.75rem' : '1.85rem',
                color: 'var(--text-primary)',
                fontWeight: 700,
              }}
            >
              {lang === 'bn' ? 'স্বয়ংক্রিয় এআই স্ক্যানিং ও প্রক্রিয়াকরণ প্রবাহ' : 'How the 24-Hour Autonomous AI Engine Operates'}
            </h2>
            <p
              className={lang === 'bn' ? 'font-bengali' : ''}
              style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '0.4rem' }}
            >
              {lang === 'bn'
                ? 'উৎস থেকে পাঠক পর্যন্ত প্রতিটি ধাপ শতভাগ মানবিক হস্তক্ষেপ ও পক্ষপাতমুক্ত'
                : 'From source ingestion to reader dispatch with 100% human-free algorithmic execution'}
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1rem',
              position: 'relative',
            }}
          >
            {[
              {
                step: '01',
                title: lang === 'bn' ? '৪-চ্যানেল তথ্য সংগ্রহ' : '4-Channel Ingestion',
                desc: lang === 'bn' ? 'আরএসএস, ওয়েবসাইট, ইউটিউব ও ইনস্টাগ্রাম থেকে নিরবচ্ছিন্ন RAW ডেটা গ্রহণ' : 'Raw content synced from RSS feeds, portals, YouTube & Instagram desks',
                icon: <Layers size={20} color="#2563eb" />,
              },
              {
                step: '02',
                title: lang === 'bn' ? '২৪ ঘণ্টার এআই ক্রলিং' : '24h AI Crawling',
                desc: lang === 'bn' ? 'প্রতি ২৪ ঘণ্টা চক্রে স্বয়ংক্রিয় রোবট দ্বারা বাংলাদেশ সংশ্লিষ্ট সংবাদ শনাক্তকরণ' : 'Autonomous semantic parser runs every 24 hours to identify BD dispatches',
                icon: <Clock size={20} color="#059669" />,
              },
              {
                step: '03',
                title: lang === 'bn' ? 'শূন্য মানবিক পক্ষপাত' : 'Zero Human Bias',
                desc: lang === 'bn' ? 'কোনো মানুষের ব্যক্তিগত বাছাই বা সেন্সরশিপ নেই; অ্যালগরিদম ভিত্তিক নিরপেক্ষ নির্বাচন' : 'No human editor cherry-picks, alters or censors incoming coverage',
                icon: <Scale size={20} color="#d97706" />,
              },
              {
                step: '04',
                title: lang === 'bn' ? '৩-মাত্রিক সেন্টিমেন্ট' : '3-Tier Sentiment',
                desc: lang === 'bn' ? 'এনএলপি মডেল দ্বারা ইতিবাচক, নিরপেক্ষ ও নেতিবাচক দৃষ্টিভঙ্গি নির্ধারণ' : 'NLP neural engine scores lexical tone: Positive, Neutral, or Negative',
                icon: <TrendingUp size={20} color="#7c3aed" />,
              },
              {
                step: '05',
                title: lang === 'bn' ? 'হুবহু মূল শিরোনাম' : 'Headline "As Is"',
                desc: lang === 'bn' ? 'মূল গণমাধ্যমের শিরোনাম হুবহু প্রদর্শন এবং সরাসরি সোর্স লিংকে রিডাইরেক্ট' : 'Cited verbatim with direct hyperlink to original Indian media source',
                icon: <FileText size={20} color="#dc2626" />,
              },
            ].map((node, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  border: '1px solid var(--border-primary)',
                  borderRadius: '10px',
                  padding: '1.25rem 1rem',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '0.85rem',
                  }}
                >
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '8px',
                      backgroundColor: 'var(--bg-card)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '1px solid var(--border-primary)',
                    }}
                  >
                    {node.icon}
                  </div>
                  <span
                    style={{
                      fontSize: '0.85rem',
                      fontWeight: 900,
                      color: 'var(--brand-primary)',
                      fontFamily: 'monospace',
                    }}
                  >
                    {node.step}
                  </span>
                </div>
                <h3
                  className={lang === 'bn' ? 'font-bengali' : 'font-serif'}
                  style={{
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    marginBottom: '0.45rem',
                  }}
                >
                  {node.title}
                </h3>
                <p
                  className={lang === 'bn' ? 'font-bengali' : ''}
                  style={{
                    fontSize: '0.8rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.5,
                  }}
                >
                  {node.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Policy Deep-Dives (The Pillars) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          
          {/* Pillar 1: AI Scanning & Zero Bias */}
          <section
            style={{
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-primary)',
              borderRadius: '12px',
              padding: '2.5rem',
              boxShadow: '0 1px 4px rgba(0,0,0,0.03)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1.25rem' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(37, 99, 235, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#2563eb',
                }}
              >
                <Cpu size={24} />
              </div>
              <h2
                className={lang === 'bn' ? 'font-bengali' : 'font-serif'}
                style={{
                  fontSize: lang === 'bn' ? '1.65rem' : '1.75rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                }}
              >
                {policy.aiScanningTitle}
              </h2>
            </div>
            <p
              className={lang === 'bn' ? 'font-bengali' : ''}
              style={{
                fontSize: '1.05rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.8,
                marginBottom: '1rem',
              }}
            >
              {policy.aiScanningP1}
            </p>
            <p
              className={lang === 'bn' ? 'font-bengali' : ''}
              style={{
                fontSize: '1.05rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.8,
              }}
            >
              {policy.aiScanningP2}
            </p>
          </section>

          {/* Pillar 2: 24-Hour Continuous Cycle */}
          <section
            style={{
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-primary)',
              borderRadius: '12px',
              padding: '2.5rem',
              boxShadow: '0 1px 4px rgba(0,0,0,0.03)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1.25rem' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(5, 150, 105, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#059669',
                }}
              >
                <Clock size={24} />
              </div>
              <h2
                className={lang === 'bn' ? 'font-bengali' : 'font-serif'}
                style={{
                  fontSize: lang === 'bn' ? '1.65rem' : '1.75rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                }}
              >
                {policy.cycleTitle}
              </h2>
            </div>
            <p
              className={lang === 'bn' ? 'font-bengali' : ''}
              style={{
                fontSize: '1.05rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.8,
                marginBottom: '1rem',
              }}
            >
              {policy.cycleP1}
            </p>
            <p
              className={lang === 'bn' ? 'font-bengali' : ''}
              style={{
                fontSize: '1.05rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.8,
              }}
            >
              {policy.cycleP2}
            </p>

            <div
              style={{
                marginTop: '1.5rem',
                padding: '1rem 1.25rem',
                borderRadius: '8px',
                backgroundColor: 'var(--bg-secondary)',
                borderLeft: '4px solid #059669',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.75rem',
              }}
            >
              <RefreshCw size={20} color="#059669" style={{ flexShrink: 0, marginTop: '2px' }} />
              <p
                className={lang === 'bn' ? 'font-bengali' : ''}
                style={{ fontSize: '0.92rem', color: 'var(--text-primary)', lineHeight: 1.6, margin: 0 }}
              >
                {lang === 'bn'
                  ? 'প্রতিটি স্ক্যানের সাথে টাইমস্ট্যাম্প সংরক্ষিত থাকে। দিন-রাত ২৪ ঘণ্টা স্বয়ংক্রিয় রোবট ব্যাকগ্রাউন্ডে কাজ করে সর্বশেষ ডিসপ্যাচ পাঠকের সামনে হাজির করে।'
                  : 'Every scan preserves an immutable timestamp. The background autonomous bot operates around the clock to deliver newly verified media dispatches immediately.'}
              </p>
            </div>
          </section>

          {/* Pillar 3: Headlines Showcased "As Is" & Citation */}
          <section
            style={{
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-primary)',
              borderRadius: '12px',
              padding: '2.5rem',
              boxShadow: '0 1px 4px rgba(0,0,0,0.03)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1.25rem' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(217, 119, 6, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#d97706',
                }}
              >
                <FileText size={24} />
              </div>
              <h2
                className={lang === 'bn' ? 'font-bengali' : 'font-serif'}
                style={{
                  fontSize: lang === 'bn' ? '1.65rem' : '1.75rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                }}
              >
                {policy.asIsTitle}
              </h2>
            </div>
            <p
              className={lang === 'bn' ? 'font-bengali' : ''}
              style={{
                fontSize: '1.05rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.8,
                marginBottom: '1rem',
              }}
            >
              {policy.asIsP1}
            </p>
            <p
              className={lang === 'bn' ? 'font-bengali' : ''}
              style={{
                fontSize: '1.05rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.8,
              }}
            >
              {policy.asIsP2}
            </p>
          </section>

          {/* Pillar 4: 3-Tier AI Sentiment Deployment */}
          <section
            style={{
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-primary)',
              borderRadius: '12px',
              padding: '2.5rem',
              boxShadow: '0 1px 4px rgba(0,0,0,0.03)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1.25rem' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(124, 58, 237, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#7c3aed',
                }}
              >
                <Scale size={24} />
              </div>
              <h2
                className={lang === 'bn' ? 'font-bengali' : 'font-serif'}
                style={{
                  fontSize: lang === 'bn' ? '1.65rem' : '1.75rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                }}
              >
                {policy.sentimentTitle}
              </h2>
            </div>
            <p
              className={lang === 'bn' ? 'font-bengali' : ''}
              style={{
                fontSize: '1.05rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.8,
                marginBottom: '1.5rem',
              }}
            >
              {policy.sentimentP1}
            </p>

            {/* 3 Sentiment Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
              {/* Positive */}
              <div
                style={{
                  backgroundColor: 'rgba(16, 185, 129, 0.06)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  borderRadius: '10px',
                  padding: '1.25rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <span
                    style={{
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      backgroundColor: '#10b981',
                      display: 'inline-block',
                    }}
                  />
                  <h4
                    className={lang === 'bn' ? 'font-bengali' : ''}
                    style={{ fontSize: '1rem', fontWeight: 800, color: '#059669', margin: 0 }}
                  >
                    {lang === 'bn' ? 'ইতিবাচক (Positive)' : 'Positive on BD'}
                  </h4>
                </div>
                <p
                  className={lang === 'bn' ? 'font-bengali' : ''}
                  style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}
                >
                  {policy.sentimentPositive}
                </p>
              </div>

              {/* Neutral */}
              <div
                style={{
                  backgroundColor: 'rgba(100, 116, 139, 0.06)',
                  border: '1px solid rgba(100, 116, 139, 0.3)',
                  borderRadius: '10px',
                  padding: '1.25rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <span
                    style={{
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      backgroundColor: '#64748b',
                      display: 'inline-block',
                    }}
                  />
                  <h4
                    className={lang === 'bn' ? 'font-bengali' : ''}
                    style={{ fontSize: '1rem', fontWeight: 800, color: '#475569', margin: 0 }}
                  >
                    {lang === 'bn' ? 'নিরপেক্ষ (Neutral)' : 'Neutral on BD'}
                  </h4>
                </div>
                <p
                  className={lang === 'bn' ? 'font-bengali' : ''}
                  style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}
                >
                  {policy.sentimentNeutral}
                </p>
              </div>

              {/* Negative */}
              <div
                style={{
                  backgroundColor: 'rgba(239, 68, 68, 0.06)',
                  border: '1px solid rgba(239, 68, 68, 0.3)',
                  borderRadius: '10px',
                  padding: '1.25rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <span
                    style={{
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      backgroundColor: '#ef4444',
                      display: 'inline-block',
                    }}
                  />
                  <h4
                    className={lang === 'bn' ? 'font-bengali' : ''}
                    style={{ fontSize: '1rem', fontWeight: 800, color: '#dc2626', margin: 0 }}
                  >
                    {lang === 'bn' ? 'নেতিবাচক (Negative)' : 'Negative on BD'}
                  </h4>
                </div>
                <p
                  className={lang === 'bn' ? 'font-bengali' : ''}
                  style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}
                >
                  {policy.sentimentNegative}
                </p>
              </div>
            </div>

            <p
              className={lang === 'bn' ? 'font-bengali' : ''}
              style={{
                fontSize: '0.95rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              {policy.sentimentP2}
            </p>
          </section>

          {/* Pillar 5: Top Popular Indian Media Outlets */}
          <section
            style={{
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-primary)',
              borderRadius: '12px',
              padding: '2.5rem',
              boxShadow: '0 1px 4px rgba(0,0,0,0.03)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1.25rem' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(8, 145, 178, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#0891b2',
                }}
              >
                <Award size={24} />
              </div>
              <h2
                className={lang === 'bn' ? 'font-bengali' : 'font-serif'}
                style={{
                  fontSize: lang === 'bn' ? '1.65rem' : '1.75rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                }}
              >
                {policy.popularMediaTitle}
              </h2>
            </div>
            <p
              className={lang === 'bn' ? 'font-bengali' : ''}
              style={{
                fontSize: '1.05rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.8,
                marginBottom: '1rem',
              }}
            >
              {policy.popularMediaP1}
            </p>
            <p
              className={lang === 'bn' ? 'font-bengali' : ''}
              style={{
                fontSize: '1.05rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.8,
                marginBottom: '1.75rem',
              }}
            >
              {policy.popularMediaP2}
            </p>

            {/* Direct Link to Media Directory */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '1.1rem 1.4rem',
                borderRadius: '8px',
                backgroundColor: 'var(--bg-secondary)',
                border: '1px solid var(--border-primary)',
                flexWrap: 'wrap',
                gap: '1rem',
              }}
            >
              <div>
                <span
                  className={lang === 'bn' ? 'font-bengali' : ''}
                  style={{ fontWeight: 700, color: 'var(--text-primary)', display: 'block', fontSize: '0.95rem' }}
                >
                  {lang === 'bn' ? 'ভারতের ১১০+ শীর্ষ মিডিয়া ও বাংলাদেশ ডেস্ক ডিরেক্টরি' : 'Explore the 110+ Top Indian Media Outlets & Bangladesh Desks Directory'}
                </span>
                <span
                  className={lang === 'bn' ? 'font-bengali' : ''}
                  style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}
                >
                  {lang === 'bn' ? 'জাতীয় ও আঞ্চলিক মিডিয়ার ক্যাটাগরি, অফিসিয়াল সাইট ও আরএসএস লিংক' : 'Browse full list of monitored outlets, bureaus, official websites & RSS feeds'}
                </span>
              </div>
              <Link
                href="/bangladesh-indian-news-media"
                className="btn btn-outline"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                }}
              >
                <span className={lang === 'bn' ? 'font-bengali' : ''}>
                  {lang === 'bn' ? 'মিডিয়া ডিরেক্টরি দেখুন' : 'View Media Directory'}
                </span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </section>

          {/* Pillar 6: 4 Multi-Channel Sourcing Pipeline */}
          <section
            style={{
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-primary)',
              borderRadius: '12px',
              padding: '2.5rem',
              boxShadow: '0 1px 4px rgba(0,0,0,0.03)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1.25rem' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(220, 38, 38, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#dc2626',
                }}
              >
                <Layers size={24} />
              </div>
              <h2
                className={lang === 'bn' ? 'font-bengali' : 'font-serif'}
                style={{
                  fontSize: lang === 'bn' ? '1.65rem' : '1.75rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                }}
              >
                {policy.channelsTitle}
              </h2>
            </div>
            <p
              className={lang === 'bn' ? 'font-bengali' : ''}
              style={{
                fontSize: '1.05rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.8,
                marginBottom: '1.5rem',
              }}
            >
              {policy.channelsP1}
            </p>

            {/* 4 Channels Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '1.25rem',
                marginBottom: '1.5rem',
              }}
            >
              {/* Channel 1: RSS */}
              <div
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  border: '1px solid var(--border-primary)',
                  borderRadius: '10px',
                  padding: '1.25rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.65rem' }}>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '6px',
                      backgroundColor: 'rgba(249, 115, 22, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#f97316',
                    }}
                  >
                    <Rss size={18} />
                  </div>
                  <h3
                    className={lang === 'bn' ? 'font-bengali' : ''}
                    style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}
                  >
                    {policy.channelRssTitle}
                  </h3>
                </div>
                <p
                  className={lang === 'bn' ? 'font-bengali' : ''}
                  style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}
                >
                  {policy.channelRssDesc}
                </p>
              </div>

              {/* Channel 2: Websites */}
              <div
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  border: '1px solid var(--border-primary)',
                  borderRadius: '10px',
                  padding: '1.25rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.65rem' }}>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '6px',
                      backgroundColor: 'rgba(37, 99, 235, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#2563eb',
                    }}
                  >
                    <Globe size={18} />
                  </div>
                  <h3
                    className={lang === 'bn' ? 'font-bengali' : ''}
                    style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}
                  >
                    {policy.channelWebTitle}
                  </h3>
                </div>
                <p
                  className={lang === 'bn' ? 'font-bengali' : ''}
                  style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}
                >
                  {policy.channelWebDesc}
                </p>
              </div>

              {/* Channel 3: YouTube */}
              <div
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  border: '1px solid var(--border-primary)',
                  borderRadius: '10px',
                  padding: '1.25rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.65rem' }}>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '6px',
                      backgroundColor: 'rgba(239, 68, 68, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ef4444',
                    }}
                  >
                    <Youtube size={18} />
                  </div>
                  <h3
                    className={lang === 'bn' ? 'font-bengali' : ''}
                    style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}
                  >
                    {policy.channelYtTitle}
                  </h3>
                </div>
                <p
                  className={lang === 'bn' ? 'font-bengali' : ''}
                  style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}
                >
                  {policy.channelYtDesc}
                </p>
              </div>

              {/* Channel 4: Instagram */}
              <div
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  border: '1px solid var(--border-primary)',
                  borderRadius: '10px',
                  padding: '1.25rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.65rem' }}>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '6px',
                      backgroundColor: 'rgba(236, 72, 153, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ec4899',
                    }}
                  >
                    <Instagram size={18} />
                  </div>
                  <h3
                    className={lang === 'bn' ? 'font-bengali' : ''}
                    style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}
                  >
                    {policy.channelInstaTitle}
                  </h3>
                </div>
                <p
                  className={lang === 'bn' ? 'font-bengali' : ''}
                  style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}
                >
                  {policy.channelInstaDesc}
                </p>
              </div>
            </div>

            {/* Link to Instagram page */}
            <div style={{ textAlign: 'right' }}>
              <Link
                href="/instagram"
                className="btn btn-outline"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                }}
              >
                <Instagram size={15} />
                <span className={lang === 'bn' ? 'font-bengali' : ''}>
                  {lang === 'bn' ? 'ইনস্টাগ্রাম ডিসপ্যাচ ফিড দেখুন' : 'View Dedicated Instagram Feed'}
                </span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </section>

          {/* Pillar 7: Corrections & Transparency */}
          <section
            style={{
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-primary)',
              borderRadius: '12px',
              padding: '2.5rem',
              boxShadow: '0 1px 4px rgba(0,0,0,0.03)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1.25rem' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(5, 150, 105, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#059669',
                }}
              >
                <ShieldCheck size={24} />
              </div>
              <h2
                className={lang === 'bn' ? 'font-bengali' : 'font-serif'}
                style={{
                  fontSize: lang === 'bn' ? '1.65rem' : '1.75rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                }}
              >
                {policy.correctionsTitle}
              </h2>
            </div>
            <p
              className={lang === 'bn' ? 'font-bengali' : ''}
              style={{
                fontSize: '1.05rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.8,
                marginBottom: '1.5rem',
              }}
            >
              {policy.correctionsP1}
            </p>

            <div
              style={{
                backgroundColor: 'var(--bg-secondary)',
                border: '1px solid var(--border-primary)',
                borderRadius: '8px',
                padding: '1.25rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1rem',
              }}
            >
              <div>
                <span
                  className={lang === 'bn' ? 'font-bengali' : ''}
                  style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', display: 'block', marginBottom: '0.2rem' }}
                >
                  {policy.correctionsContact}
                </span>
                <a
                  href="mailto:hello@sadiqalam.com"
                  style={{
                    fontSize: '1.1rem',
                    fontWeight: 800,
                    color: 'var(--brand-primary)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    textDecoration: 'none',
                  }}
                >
                  <Mail size={18} />
                  hello@sadiqalam.com
                </a>
              </div>

              <Link
                href="/about"
                className="btn btn-outline"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                }}
              >
                <span className={lang === 'bn' ? 'font-bengali' : ''}>
                  {lang === 'bn' ? 'আমাদের সম্পর্কে পড়ুন' : 'Read About Us'}
                </span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
