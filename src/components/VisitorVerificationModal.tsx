'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useApp } from '@/context/ThemeContext';
import { TRANSLATIONS } from '@/data/translations';
import {
  ShieldCheck,
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

export default function VisitorVerificationModal() {
  const { lang } = useApp();
  const t = TRANSLATIONS[lang].verificationModal;

  const [isVerified, setIsVerified] = useState<boolean>(true); // start true to prevent flicker on mount
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [secondsLeft, setSecondsLeft] = useState<number>(59);

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

  // Initial Verification Check & 59-Second Timer Setup
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
    const initialRemaining = Math.max(0, 59 - elapsedSeconds);

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
      const remaining = Math.max(0, 59 - currentElapsed);
      setSecondsLeft(remaining);

      if (remaining === 0) {
        setIsOpen(true);
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [checkVerifiedCookie]);

  // Lock Body Scroll when Modal is Open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Resend Cooldown Timer
  useEffect(() => {
    if (resendCooldown <= 0) return;
    const timer = setInterval(() => {
      setResendCooldown((prev) => Math.max(0, prev - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, [resendCooldown]);

  // Real-time Background Polling when link is sent (checks if user verified from another tab/device)
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
        <div className="fixed bottom-6 right-6 z-[9999] flex items-center gap-3 bg-emerald-950/95 border border-emerald-500/40 text-emerald-100 px-5 py-3.5 rounded-xl shadow-2xl backdrop-blur-md animate-in fade-in slide-in-from-bottom-5 duration-300">
          <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
          <div>
            <p className="text-sm font-semibold">{t.verifiedToast}</p>
            <p className="text-xs text-emerald-300/80">
              {lang === 'bn' ? 'সকল প্রতিবেদন ও বিশ্লেষণ উন্মুক্ত।' : 'Full access to all news and scans is unlocked.'}
            </p>
          </div>
        </div>
      )}

      {/* Non-dismissible 59s Modal */}
      {isOpen && !isVerified && (
        <div
          className="fixed inset-0 z-[9990] flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-xl animate-in fade-in duration-300"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-lg bg-slate-900 border border-slate-700/70 rounded-2xl shadow-2xl overflow-hidden text-slate-100 animate-in zoom-in-95 duration-300">
            {/* Top Accent Gradient Bar */}
            <div className="h-1.5 w-full bg-gradient-to-r from-red-600 via-amber-500 to-emerald-500" />

            <div className="p-6 sm:p-8">
              {/* Header Badge & Brand */}
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-medium">
                  <Lock className="w-3.5 h-3.5 text-amber-400" />
                  <span>{t.badge}</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                  <Compass className="w-4 h-4 text-red-500" />
                  <span>Narrative Compass</span>
                </div>
              </div>

              {!isSent ? (
                /* STEP 1: VISITOR FORM */
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-1.5">
                    {t.title}
                  </h2>
                  <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                    {t.subtitle}
                  </p>

                  {errorMsg && (
                    <div className="mb-5 flex items-start gap-2.5 p-3 rounded-lg bg-red-950/60 border border-red-500/40 text-red-200 text-xs sm:text-sm">
                      <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        {t.nameLabel} <span className="text-red-400">*</span>
                      </label>
                      <div className="relative">
                        <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder={t.namePlaceholder}
                          className="w-full pl-10 pr-4 py-2.5 bg-slate-950/60 border border-slate-700/80 rounded-lg text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-colors"
                        />
                      </div>
                    </div>

                    {/* Designation & Company (Grid) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                          {t.designationLabel}
                        </label>
                        <div className="relative">
                          <Briefcase className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                          <input
                            type="text"
                            value={designation}
                            onChange={(e) => setDesignation(e.target.value)}
                            placeholder={t.designationPlaceholder}
                            className="w-full pl-10 pr-4 py-2.5 bg-slate-950/60 border border-slate-700/80 rounded-lg text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                          {t.companyLabel}
                        </label>
                        <div className="relative">
                          <Building className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                          <input
                            type="text"
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            placeholder={t.companyPlaceholder}
                            className="w-full pl-10 pr-4 py-2.5 bg-slate-950/60 border border-slate-700/80 rounded-lg text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-colors"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        {t.emailLabel} <span className="text-red-400">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder={t.emailPlaceholder}
                          className="w-full pl-10 pr-4 py-2.5 bg-slate-950/60 border border-slate-700/80 rounded-lg text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-colors"
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full mt-2 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white font-semibold text-sm shadow-lg shadow-red-900/30 focus:outline-none focus:ring-2 focus:ring-amber-500 disabled:opacity-60 disabled:cursor-not-allowed transition-all cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>{t.submittingBtn}</span>
                        </>
                      ) : (
                        <>
                          <span>{t.submitBtn}</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>

                  <div className="mt-4 text-center">
                    <p className="text-[11px] text-slate-400">
                      🔒 {t.requiredNote}
                    </p>
                  </div>
                </div>
              ) : (
                /* STEP 2: LINK SENT SCREEN */
                <div className="text-center py-2">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <Mail className="w-7 h-7" />
                  </div>

                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    {t.successTitle}
                  </h2>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed mb-4">
                    {t.successDesc.replace('{email}', submittedEmail)}
                  </p>

                  <div className="inline-block p-3.5 bg-slate-950/80 border border-slate-800 rounded-xl text-xs text-amber-300/90 mb-6 max-w-sm">
                    💡 <strong>{t.checkInboxHint}</strong>
                  </div>

                  {/* Realtime Waiting Indicator */}
                  <div className="flex items-center justify-center gap-2 text-xs text-slate-400 mb-6">
                    <Loader2 className="w-3.5 h-3.5 animate-spin text-amber-400" />
                    <span>
                      {lang === 'bn'
                        ? 'ইমেইল ভেরিফিকেশনের জন্য অপেক্ষা করা হচ্ছে...'
                        : 'Waiting for email verification confirmation...'}
                    </span>
                  </div>

                  {errorMsg && (
                    <div className="mb-4 flex items-center justify-center gap-2 p-2.5 rounded-lg bg-red-950/60 border border-red-500/40 text-red-200 text-xs">
                      <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      type="button"
                      disabled={resendCooldown > 0 || isSubmitting}
                      onClick={handleResend}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-750 border border-slate-700 text-xs font-semibold text-slate-200 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      <RefreshCw className={`w-3.5 h-3.5 ${isSubmitting ? 'animate-spin' : ''}`} />
                      <span>
                        {resendCooldown > 0
                          ? `${t.resendIn} ${resendCooldown}s`
                          : t.resendBtn}
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setIsSent(false)}
                      className="w-full sm:w-auto text-xs text-slate-400 hover:text-slate-200 underline underline-offset-4 py-2"
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
    </>
  );
}
