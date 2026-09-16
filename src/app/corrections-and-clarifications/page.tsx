'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useApp } from '@/context/ThemeContext';
import { TRANSLATIONS } from '@/data/translations';
import {
  RefreshCw,
  ChevronRight,
  CheckCircle2,
  Clock,
  AlertCircle,
  Send,
  FileText,
  ShieldCheck,
  BookOpen
} from 'lucide-react';

export default function CorrectionsPage() {
  const { lang } = useApp();
  const t = TRANSLATIONS[lang];
  const policy = t.correctionsPolicy;
  const labels = policy.labels;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    articleUrl: '',
    issueType: '',
    description: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const res = await fetch('/api/corrections', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Failed to send submission. Please try again.');
      }

      setIsSubmitted(true);
    } catch (err: any) {
      console.error('Error submitting form:', err);
      setErrorMessage(err?.message || 'An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      articleUrl: '',
      issueType: '',
      description: '',
    });
    setErrorMessage('');
    setIsSubmitted(false);
  };

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
      <section
        style={{
          borderBottom: '1px solid var(--border-primary)',
          backgroundColor: 'var(--bg-secondary)',
          padding: '3rem 0 3.5rem 0',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '820px' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                backgroundColor: 'rgba(37, 99, 235, 0.1)',
                border: '1px solid rgba(37, 99, 235, 0.25)',
                color: '#2563eb',
                padding: '0.25rem 0.75rem',
                borderRadius: '9999px',
                fontSize: '0.75rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '1rem',
              }}
              className={lang === 'bn' ? 'font-bengali' : ''}
            >
              <RefreshCw size={14} />
              <span>{policy.badge}</span>
            </div>

            <h1
              className={lang === 'bn' ? 'font-bengali' : ''}
              style={{
                fontSize: '2.5rem',
                fontWeight: 800,
                color: 'var(--text-primary)',
                lineHeight: 1.2,
                marginBottom: '1rem',
                letterSpacing: '-0.02em',
              }}
            >
              {policy.pageTitle}
            </h1>

            <p
              className={lang === 'bn' ? 'font-bengali' : ''}
              style={{
                fontSize: '1.15rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
                marginBottom: '1.75rem',
              }}
            >
              {policy.tagline}
            </p>

            <div
              style={{
                backgroundColor: 'var(--bg-card)',
                borderLeft: '4px solid #2563eb',
                borderTop: '1px solid var(--border-primary)',
                borderRight: '1px solid var(--border-primary)',
                borderBottom: '1px solid var(--border-primary)',
                borderRadius: '0 12px 12px 0',
                padding: '1.25rem 1.5rem',
                fontSize: '0.95rem',
                color: 'var(--text-primary)',
                lineHeight: 1.7,
                boxShadow: 'var(--shadow-sm)',
              }}
              className={lang === 'bn' ? 'font-bengali' : ''}
            >
              {policy.leadSummary}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <main className="container" style={{ paddingTop: '3rem' }}>
        <div style={{ maxWidth: '820px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          
          {/* Commitment & SLA Highlights */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1.25rem',
            }}
          >
            <div
              style={{
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-primary)',
                borderRadius: '12px',
                padding: '1.25rem',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.85rem',
              }}
            >
              <div
                style={{
                  backgroundColor: 'rgba(37, 99, 235, 0.1)',
                  color: '#2563eb',
                  padding: '0.6rem',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <ShieldCheck size={20} />
              </div>
              <div>
                <h3
                  className={lang === 'bn' ? 'font-bengali' : ''}
                  style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.25rem' }}
                >
                  {lang === 'bn' ? 'কারিগরি ডাবল-চেকিং' : 'Double-Checking Commitment'}
                </h3>
                <p
                  className={lang === 'bn' ? 'font-bengali' : ''}
                  style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}
                >
                  {lang === 'bn' ? 'ন্যারেটিভ কম্পাস টিম যেকোনো রিপোর্টেড কারিগরি ফাল্ট বা ডেটা অসঙ্গতি নিবিড়ভাবে ফিক্স করে।' : 'Narrative Compass owner & engineering team will double check any reported technical glitch ASAP.'}
                </p>
              </div>
            </div>

            <div
              style={{
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-primary)',
                borderRadius: '12px',
                padding: '1.25rem',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.85rem',
              }}
            >
              <div
                style={{
                  backgroundColor: 'rgba(16, 185, 129, 0.1)',
                  color: '#059669',
                  padding: '0.6rem',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Clock size={20} />
              </div>
              <div>
                <h3
                  className={lang === 'bn' ? 'font-bengali' : ''}
                  style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.25rem' }}
                >
                  {lang === 'bn' ? '২৪ থেকে ৪৮ ঘণ্টার ভেতর রেসপন্স' : '24 to 48 Hours Response'}
                </h3>
                <p
                  className={lang === 'bn' ? 'font-bengali' : ''}
                  style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}
                >
                  {lang === 'bn' ? 'যেকোনো রিপ্লাই বা স্পষ্টীকরণের জন্য আমাদের সর্বোচ্চ ২৪ থেকে ৪৮ ঘণ্টা সময় প্রদান করার অনুরোধ করছি।' : 'Please allow us 24 to 48 hours to thoroughly investigate and respond to submissions.'}
                </p>
              </div>
            </div>
          </div>

          {/* Form / Interactive Section */}
          <article
            style={{
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-primary)',
              borderRadius: '16px',
              padding: '2rem',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div style={{ color: '#2563eb', backgroundColor: 'rgba(37, 99, 235, 0.1)', padding: '0.5rem', borderRadius: '8px' }}>
                <RefreshCw size={22} />
              </div>
              <div>
                <h2
                  className={lang === 'bn' ? 'font-bengali' : ''}
                  style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-primary)' }}
                >
                  {policy.formTitle}
                </h2>
                <p
                  className={lang === 'bn' ? 'font-bengali' : ''}
                  style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.15rem' }}
                >
                  {policy.formDesc}
                </p>
              </div>
            </div>

            {isSubmitted ? (
              <div
                style={{
                  backgroundColor: 'rgba(16, 185, 129, 0.08)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  borderRadius: '12px',
                  padding: '2rem',
                  textAlign: 'center',
                }}
              >
                <div style={{ display: 'inline-flex', padding: '0.75rem', borderRadius: '50%', backgroundColor: 'rgba(16, 185, 129, 0.15)', color: '#059669', marginBottom: '1rem' }}>
                  <CheckCircle2 size={32} />
                </div>
                <h3
                  className={lang === 'bn' ? 'font-bengali' : ''}
                  style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}
                >
                  {labels.successTitle}
                </h3>
                <p
                  className={lang === 'bn' ? 'font-bengali' : ''}
                  style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: '600px', margin: '0 auto 1.5rem auto' }}
                >
                  {labels.successMsg}
                </p>
                <button
                  onClick={handleReset}
                  className={`btn btn-secondary ${lang === 'bn' ? 'font-bengali' : ''}`}
                  style={{ fontSize: '0.85rem' }}
                >
                  {lang === 'bn' ? 'আরেকটি রিপোর্ট পাঠান' : 'Submit Another Report'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
                  <div>
                    <label
                      className={lang === 'bn' ? 'font-bengali' : ''}
                      style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.4rem' }}
                    >
                      {labels.name} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={lang === 'bn' ? 'আপনার নাম লিখুন' : 'Enter your name'}
                      style={{
                        width: '100%',
                        padding: '0.65rem 0.85rem',
                        borderRadius: '8px',
                        border: '1px solid var(--border-primary)',
                        backgroundColor: 'var(--bg-secondary)',
                        color: 'var(--text-primary)',
                        fontSize: '0.9rem',
                      }}
                    />
                  </div>

                  <div>
                    <label
                      className={lang === 'bn' ? 'font-bengali' : ''}
                      style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.4rem' }}
                    >
                      {labels.email} *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={lang === 'bn' ? 'আপনার ইমেইল নাম লিখুন' : 'name@example.com'}
                      style={{
                        width: '100%',
                        padding: '0.65rem 0.85rem',
                        borderRadius: '8px',
                        border: '1px solid var(--border-primary)',
                        backgroundColor: 'var(--bg-secondary)',
                        color: 'var(--text-primary)',
                        fontSize: '0.9rem',
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
                  <div>
                    <label
                      className={lang === 'bn' ? 'font-bengali' : ''}
                      style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.4rem' }}
                    >
                      {labels.articleUrl} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.articleUrl}
                      onChange={(e) => setFormData({ ...formData, articleUrl: e.target.value })}
                      placeholder={lang === 'bn' ? 'সংবাদের লিংক বা শিরোনাম...' : 'https://narrativecompass.bd/article/... or headline'}
                      style={{
                        width: '100%',
                        padding: '0.65rem 0.85rem',
                        borderRadius: '8px',
                        border: '1px solid var(--border-primary)',
                        backgroundColor: 'var(--bg-secondary)',
                        color: 'var(--text-primary)',
                        fontSize: '0.9rem',
                      }}
                    />
                  </div>

                  <div>
                    <label
                      className={lang === 'bn' ? 'font-bengali' : ''}
                      style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.4rem' }}
                    >
                      {labels.issueType} *
                    </label>
                    <select
                      required
                      value={formData.issueType}
                      onChange={(e) => setFormData({ ...formData, issueType: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.65rem 0.85rem',
                        borderRadius: '8px',
                        border: '1px solid var(--border-primary)',
                        backgroundColor: 'var(--bg-secondary)',
                        color: 'var(--text-primary)',
                        fontSize: '0.9rem',
                      }}
                      className={lang === 'bn' ? 'font-bengali' : ''}
                    >
                      <option value="">{labels.issueTypes.select}</option>
                      <option value="misrepresentation">{labels.issueTypes.misrepresentation}</option>
                      <option value="brokenLink">{labels.issueTypes.brokenLink}</option>
                      <option value="categoryMismatch">{labels.issueTypes.categoryMismatch}</option>
                      <option value="translationIssue">{labels.issueTypes.translationIssue}</option>
                      <option value="other">{labels.issueTypes.other}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    className={lang === 'bn' ? 'font-bengali' : ''}
                    style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.4rem' }}
                  >
                    {labels.description} *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder={lang === 'bn' ? 'সংবাদে কী ধরনের অমিল বা কারিগরি ত্রুটি রয়েছে তা বিস্তারিত ব্যাখ্যা করুন...' : 'Describe what is wrong or misrepresented in the report...'}
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.85rem',
                      borderRadius: '8px',
                      border: '1px solid var(--border-primary)',
                      backgroundColor: 'var(--bg-secondary)',
                      color: 'var(--text-primary)',
                      fontSize: '0.9rem',
                      resize: 'vertical',
                    }}
                    className={lang === 'bn' ? 'font-bengali' : ''}
                  />
                </div>

                {errorMessage && (
                  <div
                    style={{
                      backgroundColor: 'rgba(239, 68, 68, 0.1)',
                      border: '1px solid rgba(239, 68, 68, 0.3)',
                      color: '#dc2626',
                      borderRadius: '8px',
                      padding: '0.75rem 1rem',
                      fontSize: '0.85rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                    }}
                    className={lang === 'bn' ? 'font-bengali' : ''}
                  >
                    <AlertCircle size={16} />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`btn btn-primary ${lang === 'bn' ? 'font-bengali' : ''}`}
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.5rem', fontSize: '0.95rem' }}
                  >
                    <Send size={16} />
                    <span>{isSubmitting ? labels.submitting : labels.submit}</span>
                  </button>
                </div>
              </form>
            )}
          </article>

          {/* Guidelines Section */}
          <article
            style={{
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-primary)',
              borderRadius: '16px',
              padding: '2rem',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ color: '#2563eb', backgroundColor: 'rgba(37, 99, 235, 0.1)', padding: '0.5rem', borderRadius: '8px' }}>
                <ShieldCheck size={22} />
              </div>
              <h2
                className={lang === 'bn' ? 'font-bengali' : ''}
                style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-primary)' }}
              >
                {policy.commitmentTitle}
              </h2>
            </div>
            <div
              className={lang === 'bn' ? 'font-bengali' : ''}
              style={{ fontSize: '0.98rem', color: 'var(--text-secondary)', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '1rem' }}
            >
              <p>{policy.commitmentP1}</p>
              <p>{policy.responseWindowP1}</p>
            </div>
          </article>

          {/* Navigation Links Banner */}
          <div
            style={{
              backgroundColor: 'var(--bg-secondary)',
              border: '1px solid var(--border-primary)',
              borderRadius: '16px',
              padding: '1.75rem',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '1rem',
            }}
          >
            <div>
              <h3
                className={lang === 'bn' ? 'font-bengali' : ''}
                style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.25rem' }}
              >
                {lang === 'bn' ? 'আমাদের তথ্য যাচাই নীতিমালা দেখুন' : 'View Our Fact-Checking & Transparency Policy'}
              </h3>
              <p
                className={lang === 'bn' ? 'font-bengali' : ''}
                style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}
              >
                {lang === 'bn' ? 'আমরা কীভাবে তথ্য ইনডেক্স করি এবং পাঠকদের সচেতনতা বৃদ্ধি করি তা জানতে পড়ুন।' : 'Learn how we index media narratives and encourage independent reader verification.'}
              </p>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <Link
                href="/fact-checking-policy"
                className={`btn btn-secondary ${lang === 'bn' ? 'font-bengali' : ''}`}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem' }}
              >
                <FileText size={16} />
                <span>{lang === 'bn' ? 'তথ্য যাচাই নীতিমালা' : 'Fact-Checking Policy'}</span>
              </Link>
              <Link
                href="/editorial-policy"
                className={`btn btn-primary ${lang === 'bn' ? 'font-bengali' : ''}`}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem' }}
              >
                <BookOpen size={16} />
                <span>{lang === 'bn' ? 'সম্পাদনা নীতিমালা' : 'Editorial Policy'}</span>
              </Link>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
