import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Compass } from 'lucide-react';

export default function NotFound() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '60vh',
      textAlign: 'center',
      padding: '2rem',
    }}>
      <Compass size={48} style={{ color: 'var(--brand-primary)', marginBottom: '1rem', opacity: 0.8 }} />
      <h1 className="font-masthead" style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
        404 - Article Not Found
      </h1>
      <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', maxWidth: '480px', marginBottom: '1.5rem', lineHeight: 1.5 }}>
        The dispatch, investigation, or archive page you are searching for might have been updated or moved.
      </p>
      <Link
        href="/"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.4rem',
          backgroundColor: 'var(--brand-primary)',
          color: '#ffffff',
          fontWeight: 700,
          fontSize: '0.85rem',
          padding: '0.65rem 1.25rem',
          borderRadius: 'var(--radius-sm)',
          textTransform: 'uppercase',
          letterSpacing: '0.04em',
        }}
      >
        <ArrowLeft size={14} /> Back to Frontpage
      </Link>
    </div>
  );
}
