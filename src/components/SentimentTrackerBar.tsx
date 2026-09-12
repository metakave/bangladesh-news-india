'use client';

import React from 'react';
import { SCANNER_STATS, SentimentType, BureauType, LanguageType } from '@/data/news-data';
import { Radar, Filter, Radio, Building2, CheckCircle2, AlertCircle, MinusCircle } from 'lucide-react';

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
            <span style={{ fontSize: '0.82rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-primary)' }}>
              Live Indian Media Scanner: Bangladesh Coverage
            </span>
            <span style={{
              fontSize: '0.72rem',
              backgroundColor: 'var(--bg-secondary)',
              color: 'var(--text-muted)',
              padding: '0.15rem 0.5rem',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--border-primary)',
              fontWeight: 600,
            }}>
              Delhi &amp; Kolkata Bureaus
            </span>
          </div>

          {/* Aggregate Sentiment Ratio Pulse */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.75rem', fontWeight: 700 }}>
            <span style={{ color: '#15803d' }}>● {posPct}% Positive</span>
            <span style={{ color: 'var(--text-muted)' }}>|</span>
            <span style={{ color: 'var(--text-secondary)' }}>● {neuPct}% Neutral</span>
            <span style={{ color: 'var(--text-muted)' }}>|</span>
            <span style={{ color: '#dc2626' }}>● {negPct}% Negative</span>
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
            <span style={{ fontSize: '0.74rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', marginRight: '0.25rem' }}>
              Sentiment Marker:
            </span>

            <button
              onClick={() => onSelectSentiment('all')}
              style={{
                padding: '0.3rem 0.7rem',
                fontSize: '0.75rem',
                fontWeight: selectedSentiment === 'all' ? 800 : 600,
                color: selectedSentiment === 'all' ? '#ffffff' : 'var(--text-primary)',
                backgroundColor: selectedSentiment === 'all' ? 'var(--text-primary)' : 'var(--bg-secondary)',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border-primary)',
              }}
            >
              All Reports ({totalCount})
            </button>

            <button
              onClick={() => onSelectSentiment('positive')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                padding: '0.3rem 0.7rem',
                fontSize: '0.75rem',
                fontWeight: selectedSentiment === 'positive' ? 800 : 600,
                color: selectedSentiment === 'positive' ? '#ffffff' : '#15803d',
                backgroundColor: selectedSentiment === 'positive' ? '#15803d' : 'rgba(21, 128, 61, 0.1)',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid rgba(21, 128, 61, 0.3)',
              }}
            >
              <CheckCircle2 size={12} /> Positive
            </button>

            <button
              onClick={() => onSelectSentiment('neutral')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                padding: '0.3rem 0.7rem',
                fontSize: '0.75rem',
                fontWeight: selectedSentiment === 'neutral' ? 800 : 600,
                color: selectedSentiment === 'neutral' ? '#ffffff' : 'var(--text-secondary)',
                backgroundColor: selectedSentiment === 'neutral' ? 'var(--text-secondary)' : 'var(--bg-secondary)',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border-primary)',
              }}
            >
              <MinusCircle size={12} /> Neutral
            </button>

            <button
              onClick={() => onSelectSentiment('negative')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                padding: '0.3rem 0.7rem',
                fontSize: '0.75rem',
                fontWeight: selectedSentiment === 'negative' ? 800 : 600,
                color: selectedSentiment === 'negative' ? '#ffffff' : '#dc2626',
                backgroundColor: selectedSentiment === 'negative' ? '#dc2626' : 'rgba(220, 38, 38, 0.1)',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid rgba(220, 38, 38, 0.3)',
              }}
            >
              <AlertCircle size={12} /> Negative
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
                style={{
                  padding: '0.3rem 0.6rem',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  backgroundColor: 'var(--bg-secondary)',
                  color: 'var(--text-primary)',
                  border: '1px solid var(--border-primary)',
                  borderRadius: 'var(--radius-sm)',
                  outline: 'none',
                }}
              >
                <option value="all">All Bureaus (Delhi &amp; Kolkata)</option>
                <option value="Delhi">Delhi Bureaus Only (National / MEA)</option>
                <option value="Kolkata">Kolkata Bureaus Only (Bengal / Border)</option>
              </select>
            </div>

            {/* Language Filter */}
            <select
              value={selectedLanguage}
              onChange={(e) => onSelectLanguage(e.target.value as 'all' | LanguageType)}
              style={{
                padding: '0.3rem 0.6rem',
                fontSize: '0.75rem',
                fontWeight: 600,
                backgroundColor: 'var(--bg-secondary)',
                color: 'var(--text-primary)',
                border: '1px solid var(--border-primary)',
                borderRadius: 'var(--radius-sm)',
                outline: 'none',
              }}
            >
              <option value="all">All Languages</option>
              <option value="English">English Dailies</option>
              <option value="Bengali">Bengali Media (ABP, Ei Samay)</option>
              <option value="Hindi">Hindi Media (Jagran, Amar Ujala)</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
