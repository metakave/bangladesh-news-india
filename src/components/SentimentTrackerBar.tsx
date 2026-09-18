'use client';

import React from 'react';
import { SCANNER_STATS, SentimentType, BureauType, LanguageType } from '@/data/news-data';
import { useApp } from '@/context/ThemeContext';
import { TRANSLATIONS } from '@/data/translations';
import { Building2, CheckCircle2, AlertCircle, MinusCircle } from 'lucide-react';

interface SentimentTrackerBarProps {
  selectedSentiment: 'all' | SentimentType;
  onSelectSentiment: (s: 'all' | SentimentType) => void;
  selectedBureau: 'all' | BureauType;
  onSelectBureau: (b: 'all' | BureauType) => void;
  selectedLanguage: 'all' | LanguageType;
  onSelectLanguage: (l: 'all' | LanguageType) => void;
  totalCount: number;
}

export default function SentimentTrackerBar({
  selectedSentiment,
  onSelectSentiment,
  selectedBureau,
  onSelectBureau,
  selectedLanguage,
  onSelectLanguage,
  totalCount,
}: SentimentTrackerBarProps) {
  const { lang } = useApp();
  const t = TRANSLATIONS[lang];
  const { sentimentDistribution } = SCANNER_STATS;
  const total = sentimentDistribution.positive + sentimentDistribution.neutral + sentimentDistribution.negative;

  const posPct = Math.round((sentimentDistribution.positive / total) * 100);
  const neuPct = Math.round((sentimentDistribution.neutral / total) * 100);
  const negPct = Math.round((sentimentDistribution.negative / total) * 100);

  return (
    <div style={{
      backgroundColor: 'var(--bg-card)',
      borderBottom: '2px solid var(--border-bold)',
      padding: '1.25rem 0',
      boxShadow: 'var(--shadow-sm)',
    }}>
      <div className="container">
        {/* Top Header: Live Scanner Status & Sentiment Bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
          marginBottom: '1rem',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <span className="live-pulse" style={{ width: '8px', height: '8px', backgroundColor: 'var(--brand-primary)' }} />
            <span
              className={lang === 'bn' ? 'font-bengali' : ''}
              style={{
                fontSize: lang === 'bn' ? 'calc(0.82rem - 1pt)' : '0.82rem',
                fontWeight: 800,
                textTransform: lang === 'bn' ? 'none' : 'uppercase',
                letterSpacing: lang === 'bn' ? '0' : '0.06em',
                color: 'var(--text-primary)'
              }}
            >
              {t.liveScanner}
            </span>
          </div>

          {/* Aggregate Sentiment Ratio Pulse */}
          <div
            className={lang === 'bn' ? 'font-bengali' : ''}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              fontSize: lang === 'bn' ? 'calc(0.75rem - 1pt)' : '0.75rem',
              fontWeight: 700
            }}
          >
            <span style={{ color: '#15803d' }}>● {posPct}% {t.positiveMarker}</span>
            <span style={{ color: 'var(--text-muted)' }}>|</span>
            <span style={{ color: 'var(--text-secondary)' }}>● {neuPct}% {t.neutralMarker}</span>
            <span style={{ color: 'var(--text-muted)' }}>|</span>
            <span style={{ color: '#dc2626' }}>● {negPct}% {t.negativeMarker}</span>
          </div>
        </div>

        {/* Visual Multi-Segment Pulse Bar */}
        <div style={{
          display: 'flex',
          height: '6px',
          width: '100%',
          borderRadius: '3px',
          overflow: 'hidden',
          marginBottom: '1.25rem',
          backgroundColor: 'var(--border-subtle)',
        }}>
          <div style={{ width: `${posPct}%`, backgroundColor: '#22c55e', transition: 'width 0.3s' }} title={`Positive: ${posPct}%`} />
          <div style={{ width: `${neuPct}%`, backgroundColor: '#94a3b8', transition: 'width 0.3s' }} title={`Neutral: ${neuPct}%`} />
          <div style={{ width: `${negPct}%`, backgroundColor: '#ef4444', transition: 'width 0.3s' }} title={`Negative: ${negPct}%`} />
        </div>

        {/* Interactive Filter Controls */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.8rem',
        }}>
          {/* Sentiment Filter Tabs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexWrap: 'wrap' }}>
            <span
              className={lang === 'bn' ? 'font-bengali' : ''}
              style={{
                fontSize: lang === 'bn' ? 'calc(0.74rem - 1pt)' : '0.74rem',
                fontWeight: 700,
                color: 'var(--text-muted)',
                textTransform: lang === 'bn' ? 'none' : 'uppercase',
                marginRight: '0.25rem'
              }}
            >
              {t.sentimentMarker}
            </span>

            <button
              onClick={() => onSelectSentiment('all')}
              className={lang === 'bn' ? 'font-bengali' : ''}
              style={{
                padding: '0.35rem 0.75rem',
                fontSize: lang === 'bn' ? 'calc(0.75rem - 1pt)' : '0.75rem',
                fontWeight: selectedSentiment === 'all' ? 800 : 600,
                color: selectedSentiment === 'all' ? '#ffffff' : 'var(--text-primary)',
                backgroundColor: selectedSentiment === 'all' ? 'var(--brand-primary)' : 'var(--bg-secondary)',
                borderRadius: 'var(--radius-sm)',
                border: selectedSentiment === 'all' ? '1px solid var(--brand-primary)' : '1px solid var(--border-primary)',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
              }}
            >
              {t.allReports} ({totalCount})
            </button>

            <button
              onClick={() => onSelectSentiment('positive')}
              className={lang === 'bn' ? 'font-bengali' : ''}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                padding: '0.35rem 0.75rem',
                fontSize: lang === 'bn' ? 'calc(0.75rem - 1pt)' : '0.75rem',
                fontWeight: selectedSentiment === 'positive' ? 800 : 600,
                color: selectedSentiment === 'positive' ? '#ffffff' : '#22c55e',
                backgroundColor: selectedSentiment === 'positive' ? '#16a34a' : 'rgba(34, 197, 94, 0.12)',
                borderRadius: 'var(--radius-sm)',
                border: selectedSentiment === 'positive' ? '1px solid #16a34a' : '1px solid rgba(34, 197, 94, 0.35)',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
              }}
            >
              <CheckCircle2 size={12} /> {t.positiveMarker}
            </button>

            <button
              onClick={() => onSelectSentiment('neutral')}
              className={lang === 'bn' ? 'font-bengali' : ''}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                padding: '0.35rem 0.75rem',
                fontSize: lang === 'bn' ? 'calc(0.75rem - 1pt)' : '0.75rem',
                fontWeight: selectedSentiment === 'neutral' ? 800 : 600,
                color: selectedSentiment === 'neutral' ? '#ffffff' : 'var(--text-secondary)',
                backgroundColor: selectedSentiment === 'neutral' ? 'var(--brand-accent)' : 'var(--bg-secondary)',
                borderRadius: 'var(--radius-sm)',
                border: selectedSentiment === 'neutral' ? '1px solid var(--brand-accent)' : '1px solid var(--border-primary)',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
              }}
            >
              <MinusCircle size={12} /> {t.neutralMarker}
            </button>

            <button
              onClick={() => onSelectSentiment('negative')}
              className={lang === 'bn' ? 'font-bengali' : ''}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                padding: '0.35rem 0.75rem',
                fontSize: lang === 'bn' ? 'calc(0.75rem - 1pt)' : '0.75rem',
                fontWeight: selectedSentiment === 'negative' ? 800 : 600,
                color: selectedSentiment === 'negative' ? '#ffffff' : '#f87171',
                backgroundColor: selectedSentiment === 'negative' ? '#dc2626' : 'rgba(220, 38, 38, 0.12)',
                borderRadius: 'var(--radius-sm)',
                border: selectedSentiment === 'negative' ? '1px solid #dc2626' : '1px solid rgba(220, 38, 38, 0.35)',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
              }}
            >
              <AlertCircle size={12} /> {t.negativeMarker}
            </button>
          </div>

          {/* Bureau & Language Filter Dropdowns */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            {/* Bureau Filter */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <Building2 size={13} style={{ color: 'var(--text-muted)' }} />
              <select
                value={selectedBureau}
                onChange={(e) => onSelectBureau(e.target.value as 'all' | BureauType)}
                className={lang === 'bn' ? 'font-bengali' : ''}
                style={{
                  padding: '0.3rem 0.6rem',
                  fontSize: lang === 'bn' ? 'calc(0.75rem - 1pt)' : '0.75rem',
                  fontWeight: 600,
                  backgroundColor: 'var(--bg-secondary)',
                  color: 'var(--text-primary)',
                  border: '1px solid var(--border-primary)',
                  borderRadius: 'var(--radius-sm)',
                  outline: 'none',
                }}
              >
                <option value="all">{t.allBureaus}</option>
                <option value="Delhi">{t.delhiBureauOnly}</option>
                <option value="Kolkata">{t.kolkataBureauOnly}</option>
                <option value="Mumbai">{(t as any).mumbaiBureauOnly || 'Mumbai Bureaus Only'}</option>
              </select>
            </div>

            {/* Language Filter */}
            <select
              value={selectedLanguage}
              onChange={(e) => onSelectLanguage(e.target.value as 'all' | LanguageType)}
              className={lang === 'bn' ? 'font-bengali' : ''}
              style={{
                padding: '0.3rem 0.6rem',
                fontSize: lang === 'bn' ? 'calc(0.75rem - 1pt)' : '0.75rem',
                fontWeight: 600,
                backgroundColor: 'var(--bg-secondary)',
                color: 'var(--text-primary)',
                border: '1px solid var(--border-primary)',
                borderRadius: 'var(--radius-sm)',
                outline: 'none',
              }}
            >
                <option value="all">{t.allLanguages}</option>
                <option value="English">{t.englishMedia}</option>
                <option value="Bengali">{t.bengaliMedia}</option>
                <option value="Hindi">{t.hindiMedia}</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
