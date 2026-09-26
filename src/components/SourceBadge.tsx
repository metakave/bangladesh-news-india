'use client';

import React from 'react';
import { SourceMedia } from '@/data/news-data';
import { ExternalLink, Building2, Globe } from 'lucide-react';

interface SourceBadgeProps {
  source: SourceMedia;
  showLink?: boolean;
}

export default function SourceBadge({ source, showLink = true }: SourceBadgeProps) {
  const languageColors: Record<string, { color: string; bg: string }> = {
    English: { color: 'var(--brand-accent)', bg: 'rgba(56, 189, 248, 0.1)' },
    Bengali: { color: '#059669', bg: 'rgba(5, 150, 105, 0.1)' },
    Hindi: { color: '#d97706', bg: 'rgba(217, 119, 6, 0.1)' },
    Tamil: { color: '#8b5cf6', bg: 'rgba(139, 92, 246, 0.1)' },
    Telugu: { color: '#ec4899', bg: 'rgba(236, 72, 153, 0.1)' },
    Marathi: { color: '#f97316', bg: 'rgba(249, 115, 22, 0.1)' },
    Malayalam: { color: '#10b981', bg: 'rgba(16, 185, 129, 0.1)' },
    Assamese: { color: '#06b6d4', bg: 'rgba(6, 182, 212, 0.1)' },
    Gujarati: { color: '#eab308', bg: 'rgba(234, 179, 8, 0.1)' },
    Punjabi: { color: '#6366f1', bg: 'rgba(99, 102, 241, 0.1)' },
    Urdu: { color: '#0d9488', bg: 'rgba(13, 148, 136, 0.1)' },
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
