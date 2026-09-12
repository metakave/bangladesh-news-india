'use client';

import React, { useState } from 'react';
import { useApp } from '@/context/ThemeContext';
import { TRANSLATIONS } from '@/data/translations';
import { Mail, CheckCircle, Sparkles } from 'lucide-react';

export default function Newsletter() {
  const { lang } = useApp();
  const t = TRANSLATIONS[lang].newsletter;
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
    }
  };

  return (
    <section style={{
      backgroundColor: 'var(--bg-secondary)',
      borderTop: '2px solid var(--border-bold)',
      borderBottom: '1px solid var(--border-primary)',
      padding: '3rem 0',
      margin: '2rem 0 0 0',
    }}>
      <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.4rem',
          fontSize: '0.75rem',
          fontWeight: 800,
          textTransform: lang === 'bn' ? 'none' : 'uppercase',
          letterSpacing: lang === 'bn' ? '0' : '0.08em',
          color: 'var(--brand-primary)',
          backgroundColor: 'var(--bg-primary)',
          padding: '0.25rem 0.75rem',
          borderRadius: 'var(--radius-full)',
          marginBottom: '1rem',
          border: '1px solid var(--border-primary)'
        }} className={lang === 'bn' ? 'font-bengali' : ''}>
          <Sparkles size={13} style={{ color: 'var(--brand-gold)' }} />
          {t.badge}
        </div>

        <h2
          className={lang === 'bn' ? 'font-bengali' : 'font-masthead'}
          style={{
            fontSize: lang === 'bn' ? 'clamp(1.3rem, 2.6vw, 1.95rem)' : 'clamp(1.45rem, 2.8vw, 2.15rem)',
            fontWeight: 900,
            color: 'var(--text-primary)',
            marginBottom: '0.75rem',
            lineHeight: 1.3
          }}
        >
          {t.title}
        </h2>

        <p
          className={lang === 'bn' ? 'font-bengali' : ''}
          style={{
            fontSize: lang === 'bn' ? '0.98rem' : '0.95rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.65,
            marginBottom: '1.75rem',
            maxWidth: '620px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          {t.desc}
        </p>

        {subscribed ? (
          <div
            className={lang === 'bn' ? 'font-bengali' : ''}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.75rem 1.5rem',
              backgroundColor: 'rgba(21, 128, 61, 0.1)',
              border: '1px solid var(--brand-green)',
              borderRadius: 'var(--radius-md)',
              color: 'var(--brand-green)',
              fontWeight: 700,
            }}
          >
            <CheckCircle size={18} />
            {t.success}
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{
            display: 'flex',
            maxWidth: '520px',
            margin: '0 auto',
            gap: '0.5rem',
            flexDirection: 'row',
          }} className="newsletter-form">
            <div style={{
              flex: 1,
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
            }}>
              <Mail size={16} style={{
                position: 'absolute',
                left: '12px',
                color: 'var(--text-muted)',
              }} />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.placeholder}
                className={lang === 'bn' ? 'font-bengali' : ''}
                style={{
                  width: '100%',
                  padding: '0.75rem 0.75rem 0.75rem 2.4rem',
                  fontSize: '0.9rem',
                  backgroundColor: 'var(--bg-card)',
                  color: 'var(--text-primary)',
                  border: '1px solid var(--border-primary)',
                  borderRadius: 'var(--radius-sm)',
                  outline: 'none',
                  fontFamily: 'inherit',
                }}
              />
            </div>

            <button
              type="submit"
              className={lang === 'bn' ? 'font-bengali' : ''}
              style={{
                backgroundColor: 'var(--brand-primary)',
                color: '#ffffff',
                fontWeight: 700,
                fontSize: '0.85rem',
                padding: '0.75rem 1.4rem',
                borderRadius: 'var(--radius-sm)',
                textTransform: lang === 'bn' ? 'none' : 'uppercase',
                letterSpacing: lang === 'bn' ? '0' : '0.04em',
                flexShrink: 0,
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              {t.btn}
            </button>
          </form>
        )}

        <div
          className={lang === 'bn' ? 'font-bengali' : ''}
          style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.85rem' }}
        >
          {t.noSpam}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 540px) {
          .newsletter-form {
            flex-direction: column !important;
          }
        }
      `}</style>
    </section>
  );
}

