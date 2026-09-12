'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useApp } from '@/context/ThemeContext';
import { TRANSLATIONS } from '@/data/translations';
import {
  Mail,
  User,
  Briefcase,
  Building,
  CheckCircle2,
  AlertCircle,
  Loader2,
  RefreshCw,
  Compass,
  ArrowRight,
  Lock,
} from 'lucide-react';

const POPUP_DELAY_SECONDS = 150; // 2 minutes 30 seconds

export default function VisitorVerificationModal() {
  const { lang } = useApp();
  const t = TRANSLATIONS[lang].verificationModal;

  const [isVerified, setIsVerified] = useState<boolean>(true); // start true to prevent flicker on mount
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [secondsLeft, setSecondsLeft] = useState<number>(POPUP_DELAY_SECONDS);

  // Form State
  const [name, setName] = useState('');
  const [designation, setDesignation] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');

  // Submission State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState('');
  const [resendCooldown, setResendCooldown] = useState(0);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [showVerifiedToast, setShowVerifiedToast] = useState(false);

  // Check if visitor is already verified via Cookie
  const checkVerifiedCookie = useCallback(() => {
    if (typeof document === 'undefined') return false;
    return document.cookie.split(';').some((c) => c.trim().startsWith('visitor_verified=true'));
  }, []);

  // Check URL query param for ?verified=1
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('verified') === '1' || urlParams.get('verified') === 'true') {
      document.cookie = 'visitor_verified=true; Path=/; Max-Age=31536000; SameSite=Lax';
      setIsVerified(true);
      setIsOpen(false);
      setShowVerifiedToast(true);

      // Clean up the URL parameter without full refresh
      const newUrl = window.location.pathname + window.location.hash;
      window.history.replaceState({}, document.title, newUrl);

      setTimeout(() => {
        setShowVerifiedToast(false);
      }, 5000);
    }
  }, []);

  // Initial Verification Check & 2m 30s Timer Setup
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const verified = checkVerifiedCookie();
    if (verified) {
      setIsVerified(true);
      setIsOpen(false);
      return;
    }

    setIsVerified(false);

    // Initialize or get first visit timestamp from sessionStorage
    const storageKey = 'nc_visitor_first_seen_ts';
    let firstSeen = sessionStorage.getItem(storageKey);
    const now = Date.now();

    if (!firstSeen) {
      firstSeen = now.toString();
      sessionStorage.setItem(storageKey, firstSeen);
    }

    const firstSeenTime = parseInt(firstSeen, 10);
    const elapsedSeconds = Math.floor((now - firstSeenTime) / 1000);
    const initialRemaining = Math.max(0, POPUP_DELAY_SECONDS - elapsedSeconds);

    setSecondsLeft(initialRemaining);

    if (initialRemaining === 0) {
      setIsOpen(true);
      return;
    }

    const timer = setInterval(() => {
      // Check if verified in meantime
      if (checkVerifiedCookie()) {
        setIsVerified(true);
        setIsOpen(false);
        clearInterval(timer);
        return;
      }

      const currentElapsed = Math.floor((Date.now() - firstSeenTime) / 1000);
      const remaining = Math.max(0, POPUP_DELAY_SECONDS - currentElapsed);
      setSecondsLeft(remaining);

      if (remaining === 0) {
        setIsOpen(true);
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [checkVerifiedCookie]);

  // Lock Body Scroll ONLY when Modal is actively open and unverified
  useEffect(() => {
    if (isOpen && !isVerified) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, isVerified]);

  // Resend Cooldown Timer
  useEffect(() => {
    if (resendCooldown <= 0) return;
    const timer = setInterval(() => {
      setResendCooldown((prev) => Math.max(0, prev - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, [resendCooldown]);

  // Real-time Background Polling when link is sent
  useEffect(() => {
    if (!isOpen || !isSent || !submittedEmail) return;

    const pollInterval = setInterval(async () => {
      try {
        const res = await fetch(`/api/auth/status?email=${encodeURIComponent(submittedEmail)}`);
        const data = await res.json();
        if (data.verified) {
          setIsVerified(true);
          setIsOpen(false);
          setShowVerifiedToast(true);
          setTimeout(() => setShowVerifiedToast(false), 5000);
        }
      } catch {
        // ignore polling errors
      }
    }, 3000);

    return () => clearInterval(pollInterval);
  }, [isOpen, isSent, submittedEmail]);

  // Handle Form Submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!name.trim()) {
      setErrorMsg(t.nameRequired);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email.trim())) {
      setErrorMsg(t.invalidEmail);
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch('/api/auth/send-verification', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          designation: designation.trim(),
          company: company.trim(),
          email: email.trim().toLowerCase(),
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || t.errorGeneric);
      }

      setSubmittedEmail(email.trim().toLowerCase());
      setIsSent(true);
      setResendCooldown(60);
    } catch (err: any) {
      setErrorMsg(err.message || t.errorGeneric);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle Resend
  const handleResend = async () => {
    if (resendCooldown > 0 || isSubmitting) return;
    setErrorMsg(null);
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/auth/send-verification', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          designation: designation.trim(),
          company: company.trim(),
          email: submittedEmail,
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || t.errorGeneric);
      }
      setResendCooldown(60);
    } catch (err: any) {
      setErrorMsg(err.message || t.errorGeneric);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Prevent escape key dismissal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        e.preventDefault();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <>
      {/* Success Toast */}
      {showVerifiedToast && (
        <div
          style={{
            position: 'fixed',
            bottom: '1.5rem',
            right: '1.5rem',
            zIndex: 99999,
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            backgroundColor: '#064e3b',
            border: '1px solid #10b981',
            color: '#ecfdf5',
            padding: '0.85rem 1.25rem',
            borderRadius: '12px',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.4)',
          }}
        >
          <CheckCircle2 style={{ width: '22px', height: '22px', color: '#34d399', flexShrink: 0 }} />
          <div>
            <p style={{ margin: 0, fontSize: '0.875rem', fontWeight: 600 }}>{t.verifiedToast}</p>
            <p style={{ margin: 0, fontSize: '0.75rem', color: '#a7f3d0' }}>
              {lang === 'bn' ? 'সকল প্রতিবেদন ও বিশ্লেষণ উন্মুক্ত।' : 'Full access to all news and scans is unlocked.'}
            </p>
          </div>
        </div>
      )}

      {/* Non-dismissible 59s Modal */}
      {isOpen && !isVerified && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100vw',
            height: '100vh',
            zIndex: 99990,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem',
            backgroundColor: 'rgba(15, 23, 42, 0.88)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            overflowY: 'auto',
          }}
          role="dialog"
          aria-modal="true"
        >
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '520px',
              backgroundColor: 'var(--bg-card, #1e293b)',
              border: '1px solid var(--border-primary, #334155)',
              borderRadius: '16px',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.6)',
              overflow: 'hidden',
              color: 'var(--text-primary, #ffffff)',
              margin: 'auto',
              maxHeight: '92vh',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* Top Accent Gradient Bar */}
            <div
              style={{
                height: '5px',
                width: '100%',
                background: 'linear-gradient(90deg, #c93a1d 0%, #b45309 50%, #15803d 100%)',
                flexShrink: 0,
              }}
            />

            <div style={{ padding: '1.75rem 2rem', overflowY: 'auto' }}>
              {/* Header Badge & Brand */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '0.75rem',
                  marginBottom: '1rem',
                }}
              >
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    padding: '0.25rem 0.65rem',
                    borderRadius: '9999px',
                    backgroundColor: 'rgba(245, 158, 11, 0.12)',
                    border: '1px solid rgba(245, 158, 11, 0.3)',
                    color: '#f59e0b',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                  }}
                >
                  <Lock style={{ width: '13px', height: '13px' }} />
                  <span>{t.badge}</span>
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    fontSize: '0.75rem',
                    color: 'var(--text-muted, #94a3b8)',
                    fontFamily: 'var(--font-mono, monospace)',
                  }}
                >
                  <Compass style={{ width: '14px', height: '14px', color: '#c93a1d' }} />
                  <span>Narrative Compass</span>
                </div>
              </div>

              {!isSent ? (
                /* STEP 1: VISITOR FORM */
                <div>
                  <h2
                    style={{
                      fontSize: '1.35rem',
                      fontWeight: 800,
                      color: 'var(--text-primary, #ffffff)',
                      margin: '0 0 0.4rem 0',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {t.title}
                  </h2>
                  <p
                    style={{
                      fontSize: '0.875rem',
                      color: 'var(--text-secondary, #cbd5e1)',
                      margin: '0 0 1.25rem 0',
                      lineHeight: 1.5,
                    }}
                  >
                    {t.subtitle}
                  </p>

                  {errorMsg && (
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.6rem',
                        padding: '0.75rem 1rem',
                        borderRadius: '8px',
                        backgroundColor: 'rgba(220, 38, 38, 0.15)',
                        border: '1px solid rgba(220, 38, 38, 0.4)',
                        color: '#fca5a5',
                        fontSize: '0.825rem',
                        marginBottom: '1.25rem',
                      }}
                    >
                      <AlertCircle style={{ width: '16px', height: '16px', color: '#ef4444', marginTop: '2px', flexShrink: 0 }} />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {/* Name */}
                    <div>
                      <label
                        style={{
                          display: 'block',
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                          color: 'var(--text-secondary, #cbd5e1)',
                          marginBottom: '0.35rem',
                        }}
                      >
                        {t.nameLabel} <span style={{ color: '#ef4444' }}>*</span>
                      </label>
                      <div style={{ position: 'relative' }}>
                        <User
                          style={{
                            position: 'absolute',
                            left: '0.85rem',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            width: '16px',
                            height: '16px',
                            color: 'var(--text-muted, #94a3b8)',
                          }}
                        />
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder={t.namePlaceholder}
                          style={{
                            width: '100%',
                            padding: '0.65rem 1rem 0.65rem 2.5rem',
                            backgroundColor: 'var(--bg-secondary, #0f172a)',
                            border: '1px solid var(--border-primary, #334155)',
                            borderRadius: '8px',
                            fontSize: '0.875rem',
                            color: 'var(--text-primary, #ffffff)',
                            outline: 'none',
                          }}
                        />
                      </div>
                    </div>

                    {/* Designation & Company (Grid) */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                      <div>
                        <label
                          style={{
                            display: 'block',
                            fontSize: '0.75rem',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                            color: 'var(--text-secondary, #cbd5e1)',
                            marginBottom: '0.35rem',
                          }}
                        >
                          {t.designationLabel}
                        </label>
                        <div style={{ position: 'relative' }}>
                          <Briefcase
                            style={{
                              position: 'absolute',
                              left: '0.85rem',
                              top: '50%',
                              transform: 'translateY(-50%)',
                              width: '16px',
                              height: '16px',
                              color: 'var(--text-muted, #94a3b8)',
                            }}
                          />
                          <input
                            type="text"
                            value={designation}
                            onChange={(e) => setDesignation(e.target.value)}
                            placeholder={t.designationPlaceholder}
                            style={{
                              width: '100%',
                              padding: '0.65rem 0.75rem 0.65rem 2.4rem',
                              backgroundColor: 'var(--bg-secondary, #0f172a)',
                              border: '1px solid var(--border-primary, #334155)',
                              borderRadius: '8px',
                              fontSize: '0.825rem',
                              color: 'var(--text-primary, #ffffff)',
                              outline: 'none',
                            }}
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          style={{
                            display: 'block',
                            fontSize: '0.75rem',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                            color: 'var(--text-secondary, #cbd5e1)',
                            marginBottom: '0.35rem',
                          }}
                        >
                          {t.companyLabel}
                        </label>
                        <div style={{ position: 'relative' }}>
                          <Building
                            style={{
                              position: 'absolute',
                              left: '0.85rem',
                              top: '50%',
                              transform: 'translateY(-50%)',
                              width: '16px',
                              height: '16px',
                              color: 'var(--text-muted, #94a3b8)',
                            }}
                          />
                          <input
                            type="text"
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            placeholder={t.companyPlaceholder}
                            style={{
                              width: '100%',
                              padding: '0.65rem 0.75rem 0.65rem 2.4rem',
                              backgroundColor: 'var(--bg-secondary, #0f172a)',
                              border: '1px solid var(--border-primary, #334155)',
                              borderRadius: '8px',
                              fontSize: '0.825rem',
                              color: 'var(--text-primary, #ffffff)',
                              outline: 'none',
                            }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        style={{
                          display: 'block',
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                          color: 'var(--text-secondary, #cbd5e1)',
                          marginBottom: '0.35rem',
                        }}
                      >
                        {t.emailLabel} <span style={{ color: '#ef4444' }}>*</span>
                      </label>
                      <div style={{ position: 'relative' }}>
                        <Mail
                          style={{
                            position: 'absolute',
                            left: '0.85rem',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            width: '16px',
                            height: '16px',
                            color: 'var(--text-muted, #94a3b8)',
                          }}
                        />
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder={t.emailPlaceholder}
                          style={{
                            width: '100%',
                            padding: '0.65rem 1rem 0.65rem 2.5rem',
                            backgroundColor: 'var(--bg-secondary, #0f172a)',
                            border: '1px solid var(--border-primary, #334155)',
                            borderRadius: '8px',
                            fontSize: '0.875rem',
                            color: 'var(--text-primary, #ffffff)',
                            outline: 'none',
                          }}
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      style={{
                        width: '100%',
                        marginTop: '0.5rem',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem',
                        padding: '0.8rem 1.5rem',
                        borderRadius: '8px',
                        background: 'linear-gradient(135deg, #c93a1d 0%, #a92911 100%)',
                        color: '#ffffff',
                        fontWeight: 700,
                        fontSize: '0.875rem',
                        boxShadow: '0 10px 15px -3px rgba(201, 58, 29, 0.3)',
                        cursor: isSubmitting ? 'not-allowed' : 'pointer',
                        opacity: isSubmitting ? 0.7 : 1,
                        border: 'none',
                      }}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 style={{ width: '16px', height: '16px', animation: 'spin 1s linear infinite' }} />
                          <span>{t.submittingBtn}</span>
                        </>
                      ) : (
                        <>
                          <span>{t.submitBtn}</span>
                          <ArrowRight style={{ width: '16px', height: '16px' }} />
                        </>
                      )}
                    </button>
                  </form>

                  <div style={{ marginTop: '1rem', textAlign: 'center' }}>
                    <p style={{ margin: 0, fontSize: '0.72rem', color: 'var(--text-muted, #94a3b8)' }}>
                      🔒 {t.requiredNote}
                    </p>
                  </div>
                </div>
              ) : (
                /* STEP 2: LINK SENT SCREEN */
                <div style={{ textAlign: 'center', padding: '0.5rem 0' }}>
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      margin: '0 auto 1rem auto',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(16, 185, 129, 0.15)',
                      border: '1px solid rgba(16, 185, 129, 0.4)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#10b981',
                    }}
                  >
                    <Mail style={{ width: '28px', height: '28px' }} />
                  </div>

                  <h2
                    style={{
                      fontSize: '1.35rem',
                      fontWeight: 800,
                      color: 'var(--text-primary, #ffffff)',
                      margin: '0 0 0.5rem 0',
                    }}
                  >
                    {t.successTitle}
                  </h2>
                  <p
                    style={{
                      fontSize: '0.875rem',
                      color: 'var(--text-secondary, #cbd5e1)',
                      lineHeight: 1.5,
                      margin: '0 auto 1rem auto',
                      maxWidth: '420px',
                    }}
                  >
                    {t.successDesc.replace('{email}', submittedEmail)}
                  </p>

                  <div
                    style={{
                      display: 'inline-block',
                      padding: '0.75rem 1rem',
                      backgroundColor: 'var(--bg-secondary, #0f172a)',
                      border: '1px solid var(--border-primary, #334155)',
                      borderRadius: '8px',
                      fontSize: '0.75rem',
                      color: '#fbbf24',
                      marginBottom: '1.25rem',
                    }}
                  >
                    💡 <strong>{t.checkInboxHint}</strong>
                  </div>

                  {/* Realtime Waiting Indicator */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                      fontSize: '0.75rem',
                      color: 'var(--text-muted, #94a3b8)',
                      marginBottom: '1.25rem',
                    }}
                  >
                    <Loader2 style={{ width: '14px', height: '14px', color: '#f59e0b', animation: 'spin 1s linear infinite' }} />
                    <span>
                      {lang === 'bn'
                        ? 'ইমেইল ভেরিফিকেশনের জন্য অপেক্ষা করা হচ্ছে...'
                        : 'Waiting for email verification confirmation...'}
                    </span>
                  </div>

                  {errorMsg && (
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem',
                        padding: '0.5rem',
                        borderRadius: '8px',
                        backgroundColor: 'rgba(220, 38, 38, 0.15)',
                        border: '1px solid rgba(220, 38, 38, 0.4)',
                        color: '#fca5a5',
                        fontSize: '0.75rem',
                        marginBottom: '1rem',
                      }}
                    >
                      <AlertCircle style={{ width: '14px', height: '14px', color: '#ef4444', flexShrink: 0 }} />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
                    <button
                      type="button"
                      disabled={resendCooldown > 0 || isSubmitting}
                      onClick={handleResend}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.4rem',
                        padding: '0.65rem 1.1rem',
                        borderRadius: '8px',
                        backgroundColor: 'var(--bg-secondary, #0f172a)',
                        border: '1px solid var(--border-primary, #334155)',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        color: 'var(--text-primary, #ffffff)',
                        cursor: resendCooldown > 0 || isSubmitting ? 'not-allowed' : 'pointer',
                        opacity: resendCooldown > 0 || isSubmitting ? 0.6 : 1,
                      }}
                    >
                      <RefreshCw style={{ width: '13px', height: '13px' }} />
                      <span>
                        {resendCooldown > 0
                          ? `${t.resendIn} ${resendCooldown}s`
                          : t.resendBtn}
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setIsSent(false)}
                      style={{
                        fontSize: '0.75rem',
                        color: 'var(--text-muted, #94a3b8)',
                        textDecoration: 'underline',
                        textUnderlineOffset: '3px',
                        padding: '0.5rem',
                        cursor: 'pointer',
                        background: 'none',
                        border: 'none',
                      }}
                    >
                      {t.changeInfoBtn}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </>
  );
}
