'use client';

import React from 'react';
import { SourceMedia } from '@/data/news-data';
import { ExternalLink, Building2, Globe } from 'lucide-react';

interface SourceBadgeProps {
  source: SourceMedia;
  showLink?: boolean;
}

export default function SourceBadge({ source, showLink = true }: SourceBadgeProps) {
  const languageColors = {
    English: { color: 'var(--brand-accent)', bg: 'rgba(56, 189, 248, 0.1)' },
    Bengali: { color: '#059669', bg: 'rgba(5, 150, 105, 0.1)' },
    Hindi: { color: '#d97706', bg: 'rgba(217, 119, 6, 0.1)' },
  };

  const langStyle = languageColors[source.language] || languageColors.English;

  return (
    <div style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.45rem',
      flexWrap: 'wrap',
      fontSize: '0.74rem',
    }}>
      {/* Source Publication Link */}
      <a
        href={source.originalUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.3rem',
          fontWeight: 800,
          color: 'var(--text-primary)',
          backgroundColor: 'var(--bg-secondary)',
          padding: '0.2rem 0.55rem',
          borderRadius: 'var(--radius-sm)',
          border: '1px solid var(--border-primary)',
          textDecoration: 'none',
        }}
        title={`Open original report on ${source.name}`}
      >
        <span>{source.name}</span>
        {showLink && <ExternalLink size={11} style={{ color: 'var(--text-muted)' }} />}
      </a>

      {/* Bureau Location Badge */}
      <span style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.25rem',
        fontWeight: 700,
        fontSize: '0.68rem',
        textTransform: 'uppercase',
        color: source.bureau === 'Kolkata' ? '#0f766e' : '#4338ca',
        backgroundColor: source.bureau === 'Kolkata' ? 'rgba(15, 118, 110, 0.1)' : 'rgba(67, 56, 202, 0.1)',
        padding: '0.15rem 0.45rem',
        borderRadius: 'var(--radius-sm)',
        border: `1px solid ${source.bureau === 'Kolkata' ? 'rgba(15, 118, 110, 0.25)' : 'rgba(67, 56, 202, 0.25)'}`,
      }}>
        <Building2 size={10} />
        {source.bureau} Bureau
      </span>

      {/* Language Badge */}
      <span style={{
        fontWeight: 600,
        fontSize: '0.68rem',
        color: langStyle.color,
        backgroundColor: langStyle.bg,
        padding: '0.15rem 0.45rem',
        borderRadius: 'var(--radius-sm)',
      }}>
        {source.language}
      </span>
    </div>
  );
}
