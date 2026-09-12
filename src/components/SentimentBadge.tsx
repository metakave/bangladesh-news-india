'use client';

import React from 'react';
import { SentimentType } from '@/data/news-data';
import { useApp } from '@/context/ThemeContext';
import { CheckCircle2, AlertCircle, MinusCircle } from 'lucide-react';

interface SentimentBadgeProps {
  sentiment: SentimentType;
  showIcon?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export default function SentimentBadge({
  sentiment,
  showIcon = true,
  size = 'md',
}: SentimentBadgeProps) {
  const { lang } = useApp();

  const configs = {
    positive: {
      labelBn: 'ইতিবাচক দৃষ্টিভঙ্গি',
      labelEn: 'Positive on BD',
      color: '#15803d',
      bg: 'rgba(21, 128, 61, 0.12)',
      border: 'rgba(21, 128, 61, 0.3)',
      dotColor: '#22c55e',
      icon: <CheckCircle2 size={size === 'sm' ? 11 : 13} />,
    },
    negative: {
      labelBn: 'নেতিবাচক / উদ্বেগ',
      labelEn: 'Negative on BD',
      color: '#dc2626',
      bg: 'rgba(220, 38, 38, 0.12)',
      border: 'rgba(220, 38, 38, 0.3)',
      dotColor: '#ef4444',
      icon: <AlertCircle size={size === 'sm' ? 11 : 13} />,
    },
    neutral: {
      labelBn: 'নিরপেক্ষ / বিশ্লেষণ',
      labelEn: 'Neutral on BD',
      color: 'var(--text-secondary)',
      bg: 'var(--bg-secondary)',
      border: 'var(--border-primary)',
      dotColor: '#94a3b8',
      icon: <MinusCircle size={size === 'sm' ? 11 : 13} />,
    },
  };

  const current = configs[sentiment] || configs.neutral;
  const label = lang === 'bn' ? current.labelBn : current.labelEn;

  const fontSizes = {
    sm: '0.66rem',
    md: '0.72rem',
    lg: '0.8rem',
  };

  const paddings = {
    sm: '0.15rem 0.45rem',
    md: '0.2rem 0.55rem',
    lg: '0.3rem 0.75rem',
  };

  return (
    <span
      className={lang === 'bn' ? 'font-bengali' : ''}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.35rem',
        fontSize: fontSizes[size],
        fontWeight: 700,
        color: current.color,
        backgroundColor: current.bg,
        border: `1px solid ${current.border}`,
        padding: paddings[size],
        borderRadius: 'var(--radius-sm)',
        letterSpacing: lang === 'bn' ? '0' : '0.04em',
        textTransform: lang === 'bn' ? 'none' : 'uppercase',
        flexShrink: 0,
      }}
      title={`Narrative Marker: ${label}`}
    >
      <span
        style={{
          width: size === 'sm' ? '6px' : '7px',
          height: size === 'sm' ? '6px' : '7px',
          borderRadius: '50%',
          backgroundColor: current.dotColor,
          display: 'inline-block',
          boxShadow: `0 0 6px ${current.dotColor}`,
        }}
      />
      <span>{label}</span>
    </span>
  );
}
