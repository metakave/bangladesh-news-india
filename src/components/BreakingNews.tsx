'use client';

import React, { useState, useEffect } from 'react';
import { BREAKING_NEWS_ALERTS } from '@/data/news-data';
import { useApp } from '@/context/ThemeContext';
import { TRANSLATIONS } from '@/data/translations';
import { ChevronRight, ChevronLeft, Radio, ExternalLink } from 'lucide-react';

export default function BreakingNews() {
  const { lang } = useApp();
  const t = TRANSLATIONS[lang];
  const [currentIndex, setCurrentIndex] = useState(0);
  // Keep at most latest 20 breaking alerts in the top ticker
  const activeAlerts = BREAKING_NEWS_ALERTS.slice(0, 20);

  useEffect(() => {
    if (activeAlerts.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % activeAlerts.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [activeAlerts.length]);

  if (!activeAlerts || activeAlerts.length === 0) {
    return null;
  }

  const safeIndex = currentIndex >= activeAlerts.length ? 0 : currentIndex;
  const current = activeAlerts[safeIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % activeAlerts.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + activeAlerts.length) % activeAlerts.length);
  };

  const headline = lang === 'bn' ? current.headlineBn : current.headlineEn;
  const timeAgo = lang === 'bn' ? current.timeAgoBn : current.timeAgoEn;

  return (
    <div
      className="breaking-news-bar"
      style={{
        backgroundColor: '#c93a1d',
        color: '#ffffff',
        padding: '0.45rem 0',
        fontSize: '0.84rem',
        fontWeight: 500,
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', overflow: 'hidden', flex: 1 }}>
          <div
            className={lang === 'bn' ? 'font-bengali' : ''}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              backgroundColor: 'rgba(0, 0, 0, 0.25)',
              padding: '0.2rem 0.55rem',
              borderRadius: 'var(--radius-sm)',
              fontSize: '0.72rem',
              fontWeight: 800,
              letterSpacing: lang === 'bn' ? '0' : '0.06em',
              textTransform: lang === 'bn' ? 'none' : 'uppercase',
              flexShrink: 0
            }}
          >
            <Radio size={13} style={{ color: '#fbbf24' }} />
            {t.latestNews}
          </div>

          <a
            href={current.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              transition: 'opacity 0.2s ease',
              textDecoration: 'none',
            }}
          >
            <span style={{ opacity: 0.85, fontSize: '0.75rem', flexShrink: 0 }}>
              [{current.sourceName} • {current.sourceBureau} • {timeAgo}]
            </span>
            <span
              className={lang === 'bn' || /[\u0980-\u09FF]/.test(headline || '') ? 'font-bengali' : ''}
              style={{ fontWeight: 600, overflow: 'hidden', textOverflow: 'ellipsis' }}
            >
              {headline}
            </span>
            <ExternalLink size={12} style={{ opacity: 0.8, flexShrink: 0 }} />
          </a>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', flexShrink: 0 }}>
          <span style={{ fontSize: '0.72rem', opacity: 0.75, marginRight: '0.35rem' }}>
            {safeIndex + 1}/{activeAlerts.length}
          </span>
          <button
            onClick={handlePrev}
            aria-label="Previous alert"
            style={{
              color: '#ffffff',
              padding: '0.15rem',
              borderRadius: '2px',
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <ChevronLeft size={14} />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next alert"
            style={{
              color: '#ffffff',
              padding: '0.15rem',
              borderRadius: '2px',
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <ChevronRight size={14} />
          </button>
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 768px) {
          .breaking-news-bar {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
