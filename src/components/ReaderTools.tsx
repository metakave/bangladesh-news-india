'use client';

import React, { useState, useEffect } from 'react';
import { useApp } from '@/context/ThemeContext';
import { Bookmark, Share2, Type, Check, Link as LinkIcon, Twitter } from 'lucide-react';

interface ReaderToolsProps {
  slug: string;
  title: string;
  onFontSizeChange: (size: 'sm' | 'md' | 'lg' | 'xl') => void;
  onFontFamilyChange: (family: 'serif' | 'sans') => void;
  currentFontSize: 'sm' | 'md' | 'lg' | 'xl';
  currentFontFamily: 'serif' | 'sans';
}

export default function ReaderTools({
  slug,
  title,
  onFontSizeChange,
  onFontFamilyChange,
  currentFontSize,
  currentFontFamily,
}: ReaderToolsProps) {
  const { toggleBookmark, isBookmarked } = useApp();
  const bookmarked = isBookmarked(slug);
  const [copied, setCopied] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleShareTwitter = () => {
    if (typeof window !== 'undefined') {
      const url = encodeURIComponent(window.location.href);
      const text = encodeURIComponent(`"${title}" - via India Watch`);
      window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
    }
  };

  const handleShareWhatsApp = () => {
    if (typeof window !== 'undefined') {
      const url = encodeURIComponent(window.location.href);
      const text = encodeURIComponent(`"${title}"\nRead more on India Watch: ${window.location.href}`);
      window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
    }
  };

  return (
    <>
      {/* Top Reading Progress Bar */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: '3px',
          backgroundColor: 'var(--brand-primary)',
          width: `${scrollProgress}%`,
          zIndex: 100,
          transition: 'width 0.1s ease',
        }}
      />

      {/* Reader Control Bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
          padding: '0.75rem 0',
          borderTop: '1px solid var(--border-primary)',
          borderBottom: '1px solid var(--border-primary)',
          margin: '1.5rem 0',
          fontSize: '0.84rem',
        }}
      >
        {/* Typography Customization */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
          {/* Font Size Selector */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)' }}>Text Size:</span>
            {(['sm', 'md', 'lg', 'xl'] as const).map((size) => (
              <button
                key={size}
                onClick={() => onFontSizeChange(size)}
                style={{
                  padding: '0.15rem 0.45rem',
                  fontSize: size === 'sm' ? '0.75rem' : size === 'md' ? '0.85rem' : size === 'lg' ? '0.95rem' : '1.05rem',
                  fontWeight: currentFontSize === size ? 800 : 500,
                  color: currentFontSize === size ? '#ffffff' : 'var(--text-primary)',
                  backgroundColor: currentFontSize === size ? 'var(--brand-primary)' : 'var(--bg-secondary)',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--border-primary)',
                }}
              >
                A
              </button>
            ))}
          </div>

          {/* Font Family Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <button
              onClick={() => onFontFamilyChange(currentFontFamily === 'serif' ? 'sans' : 'serif')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                fontSize: '0.75rem',
                padding: '0.2rem 0.55rem',
                backgroundColor: 'var(--bg-secondary)',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border-primary)',
                color: 'var(--text-primary)',
                fontWeight: 600,
              }}
            >
              <Type size={13} />
              {currentFontFamily === 'serif' ? 'Serif Mode' : 'Sans-Serif'}
            </button>
          </div>
        </div>

        {/* Action Controls: Share & Bookmark */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <button
            onClick={handleCopyLink}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              fontSize: '0.75rem',
              fontWeight: 600,
              padding: '0.25rem 0.6rem',
              backgroundColor: 'var(--bg-secondary)',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--border-primary)',
              color: copied ? 'var(--brand-green)' : 'var(--text-secondary)',
            }}
          >
            {copied ? <Check size={13} /> : <LinkIcon size={13} />}
            {copied ? 'Copied Link' : 'Copy Link'}
          </button>

          <button
            onClick={handleShareWhatsApp}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              fontSize: '0.75rem',
              fontWeight: 600,
              padding: '0.25rem 0.6rem',
              backgroundColor: 'rgba(37, 211, 102, 0.1)',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid rgba(37, 211, 102, 0.3)',
              color: '#16a34a',
            }}
          >
            WhatsApp
          </button>

          <button
            onClick={handleShareTwitter}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              fontSize: '0.75rem',
              fontWeight: 600,
              padding: '0.25rem 0.6rem',
              backgroundColor: 'var(--bg-secondary)',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--border-primary)',
              color: 'var(--text-primary)',
            }}
          >
            <Twitter size={13} />
            Post
          </button>
        </div>
      </div>
    </>
  );
}
