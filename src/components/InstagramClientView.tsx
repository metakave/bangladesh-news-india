'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useApp } from '@/context/ThemeContext';
import { NewsItem, SentimentType } from '@/data/news-data';
import { TRANSLATIONS } from '@/data/translations';
import { formatArticleTimestamp } from '@/utils/date';
import SentimentBadge from '@/components/SentimentBadge';
import SourceBadge from '@/components/SourceBadge';
import {
  Instagram,
  Search,
  RotateCcw,
  ExternalLink,
  Tag,
  Building2,
  TrendingUp,
  Radio,
  ArrowRight,
  Share2,
  CheckCircle2,
} from 'lucide-react';

interface InstagramClientViewProps {
  initialArticles: NewsItem[];
}

const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&auto=format&fit=crop&q=80';

const OUTLET_PROFILES: Record<string, { handle: string; url: string }> = {
  firstpost: { handle: '@firstpost', url: 'https://www.instagram.com/firstpost/' },
  'the wall': { handle: '@thewall_bangla', url: 'https://www.instagram.com/thewall_bangla/' },
  thewall: { handle: '@thewall_bangla', url: 'https://www.instagram.com/thewall_bangla/' },
  'india today': { handle: '@indiatoday', url: 'https://www.instagram.com/indiatoday/' },
  indiatoday: { handle: '@indiatoday', url: 'https://www.instagram.com/indiatoday/' },
  newsmo: { handle: '@newsmo', url: 'https://www.instagram.com/newsmo/' },
  'ei samay': { handle: '@eisamay.digital', url: 'https://www.instagram.com/eisamay.digital/' },
  eisamay: { handle: '@eisamay.digital', url: 'https://www.instagram.com/eisamay.digital/' },
  'abp ananda': { handle: '@abpanandatv', url: 'https://www.instagram.com/abpanandatv/' },
  abpananda: { handle: '@abpanandatv', url: 'https://www.instagram.com/abpanandatv/' },
  'tv9 bangla': { handle: '@tv9_bangla', url: 'https://www.instagram.com/tv9_bangla/' },
  tv9: { handle: '@tv9_bangla', url: 'https://www.instagram.com/tv9_bangla/' },
  'republic bangla': { handle: '@republicbangla', url: 'https://www.instagram.com/republicbangla/' },
  ndtv: { handle: '@ndtv', url: 'https://www.instagram.com/ndtv/' },
  anandabazar: { handle: '@anandabazar_patrika', url: 'https://www.instagram.com/anandabazar_patrika/' },
  'zee 24 ghanta': { handle: '@zee24ghanta', url: 'https://www.instagram.com/zee24ghanta/' },
};

function getInstagramOutletInfo(article: NewsItem): { handle: string; url: string } {
  const nameLower = (article.source?.name || '').toLowerCase();
  for (const [k, v] of Object.entries(OUTLET_PROFILES)) {
    if (nameLower.includes(k)) return v;
  }
  return { handle: '@instagram', url: 'https://www.instagram.com' };
}

function resolveInstagramLink(article: NewsItem): string {
  const url = article.source?.originalUrl || '';
  const outletInfo = getInstagramOutletInfo(article);
  if (!url || url.includes('news.google.com') || !url.includes('instagram.com/')) {
    return outletInfo.url;
  }
  const fakeSeedCodes = ['DFP82j4T_9x', 'DGH38mPshj1', 'DF7uW_XMo8x', 'DFz8983zH3a'];
  if (fakeSeedCodes.some(c => url.includes(c))) {
    return outletInfo.url;
  }
  return url;
}

export default function InstagramClientView({ initialArticles }: InstagramClientViewProps) {
  const { lang } = useApp();
  const t = TRANSLATIONS[lang];
  const tig = t.instagram;

  // Filter states
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBureau, setSelectedBureau] = useState<'all' | 'Delhi' | 'Kolkata'>('all');
  const [selectedSentiment, setSelectedSentiment] = useState<'all' | SentimentType>('all');
  const [selectedOutlet, setSelectedOutlet] = useState<string>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Extract unique media outlets from the Instagram articles
  const availableOutlets = useMemo(() => {
    const outlets = new Set<string>();
    initialArticles.forEach((item) => {
      // Clean outlet name if it has (Instagram)
      const cleanName = item.source.name.replace(/\s*\(Instagram\)/i, '').trim();
      outlets.add(cleanName);
    });
    return Array.from(outlets).sort();
  }, [initialArticles]);

  // Filter articles
  const filteredArticles = useMemo(() => {
    return initialArticles.filter((item) => {
      // 1. Bureau filter
      if (selectedBureau !== 'all' && item.source.bureau !== selectedBureau) {
        return false;
      }

      // 2. Sentiment filter
      if (selectedSentiment !== 'all' && item.sentiment !== selectedSentiment) {
        return false;
      }

      // 3. Outlet filter
      if (selectedOutlet !== 'all') {
        const cleanName = item.source.name.replace(/\s*\(Instagram\)/i, '').trim();
        if (cleanName !== selectedOutlet) return false;
      }

      // 4. Search query (title, translations, summary, tags, original headline)
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesTitle = item.title?.toLowerCase().includes(query);
        const matchesEnglish = item.englishTitle?.toLowerCase().includes(query);
        const matchesBangla = item.banglaTitle?.toLowerCase().includes(query);
        const matchesSummary = (item.summaryBn + ' ' + item.summaryEn).toLowerCase().includes(query);
        const matchesSource = item.source.name.toLowerCase().includes(query);
        const matchesTags = item.tags?.some((tag) => tag.toLowerCase().includes(query));
        const matchesOriginalHeadline = item.source.originalHeadline?.toLowerCase().includes(query);

        if (
          !matchesTitle &&
          !matchesEnglish &&
          !matchesBangla &&
          !matchesSummary &&
          !matchesSource &&
          !matchesTags &&
          !matchesOriginalHeadline
        ) {
          return false;
        }
      }

      return true;
    });
  }, [initialArticles, selectedBureau, selectedSentiment, selectedOutlet, searchQuery]);

  // Metrics
  const metrics = useMemo(() => {
    const total = initialArticles.length;
    const delhiCount = initialArticles.filter((a) => a.source.bureau === 'Delhi').length;
    const kolkataCount = initialArticles.filter((a) => a.source.bureau === 'Kolkata').length;
    const positiveCount = initialArticles.filter((a) => a.sentiment === 'positive').length;
    const negativeCount = initialArticles.filter((a) => a.sentiment === 'negative').length;
    const neutralCount = initialArticles.filter((a) => a.sentiment === 'neutral').length;
    return { total, delhiCount, kolkataCount, positiveCount, negativeCount, neutralCount };
  }, [initialArticles]);

  const hasActiveFilters =
    selectedBureau !== 'all' ||
    selectedSentiment !== 'all' ||
    selectedOutlet !== 'all' ||
    searchQuery.trim().length > 0;

  const handleResetFilters = () => {
    setSelectedBureau('all');
    setSelectedSentiment('all');
    setSelectedOutlet('all');
    setSearchQuery('');
  };

  const handleShare = async (url: string, id: string) => {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(url);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh', paddingBottom: '3.5rem' }}>
      {/* Top Breadcrumb & Live Strip */}
      <div
        style={{
          borderBottom: '1px solid var(--border-primary)',
          backgroundColor: 'var(--bg-secondary)',
          padding: '0.65rem 0',
          fontSize: '0.82rem',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: 'var(--text-secondary)' }}>
            <Link href="/" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>
              {lang === 'bn' ? 'হোম' : 'Home'}
            </Link>
            <span>/</span>
            <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>
              {tig.navTitle}
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                fontSize: '0.74rem',
                fontWeight: 700,
                color: '#E1306C',
                backgroundColor: 'rgba(225, 48, 108, 0.1)',
                padding: '0.2rem 0.55rem',
                borderRadius: '999px',
                border: '1px solid rgba(225, 48, 108, 0.25)',
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: '#E1306C',
                  animation: 'pulse 1.8s infinite',
                }}
              />
              {lang === 'bn' ? 'লাইভ ইনস্টাগ্রাম ওয়্যার' : 'Live Instagram Wire'}
            </span>
          </div>
        </div>
      </div>

      {/* Hero Header Section */}
      <section
        style={{
          padding: '2.5rem 0 2rem 0',
          borderBottom: '1px solid var(--border-primary)',
          background: 'linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%)',
        }}
      >
        <div className="container">
          <div style={{ maxWidth: '850px', margin: '0 auto', textAlign: 'center' }}>
            {/* Instagram Gradient Badge */}
            <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  padding: '0.35rem 0.85rem',
                  borderRadius: '999px',
                  background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
                  color: '#ffffff',
                  fontSize: '0.78rem',
                  fontWeight: 800,
                  letterSpacing: '0.04em',
                  boxShadow: '0 3px 12px rgba(225, 48, 108, 0.3)',
                }}
              >
                <Instagram size={14} />
                {tig.badge}
              </span>
            </div>

            <h1
              className={lang === 'bn' ? 'font-bengali' : 'font-serif'}
              style={{
                fontSize: lang === 'bn' ? '2.1rem' : '2.35rem',
                fontWeight: 900,
                color: 'var(--text-primary)',
                lineHeight: 1.2,
                marginBottom: '0.75rem',
              }}
            >
              {tig.pageTitle}
            </h1>

            <p
              className={lang === 'bn' ? 'font-bengali' : ''}
              style={{
                fontSize: lang === 'bn' ? '0.98rem' : '1.02rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
                margin: '0 auto 1.75rem auto',
                maxWidth: '680px',
              }}
            >
              {tig.pageTagline}
            </p>

            {/* Quick Metrics Bar */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))',
                gap: '0.75rem',
                padding: '1rem',
                backgroundColor: 'var(--bg-card)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-primary)',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.35rem', fontWeight: 900, color: '#E1306C' }}>{metrics.total}</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase' }}>
                  {lang === 'bn' ? 'মোট পোস্ট' : 'Total Posts'}
                </div>
              </div>

              <div style={{ textAlign: 'center', borderLeft: '1px solid var(--border-primary)' }}>
                <div style={{ fontSize: '1.35rem', fontWeight: 900, color: 'var(--text-primary)' }}>{metrics.delhiCount}</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase' }}>
                  {lang === 'bn' ? 'দিল্লি ব্যুরো' : 'Delhi'}
                </div>
              </div>

              <div style={{ textAlign: 'center', borderLeft: '1px solid var(--border-primary)' }}>
                <div style={{ fontSize: '1.35rem', fontWeight: 900, color: 'var(--text-primary)' }}>{metrics.kolkataCount}</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase' }}>
                  {lang === 'bn' ? 'কলকাতা ব্যুরো' : 'Kolkata'}
                </div>
              </div>

              <div style={{ textAlign: 'center', borderLeft: '1px solid var(--border-primary)' }}>
                <div style={{ fontSize: '1.35rem', fontWeight: 900, color: 'var(--color-positive, #10b981)' }}>{metrics.positiveCount}</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase' }}>
                  {tig.positive}
                </div>
              </div>

              <div style={{ textAlign: 'center', borderLeft: '1px solid var(--border-primary)' }}>
                <div style={{ fontSize: '1.35rem', fontWeight: 900, color: 'var(--color-negative, #ef4444)' }}>{metrics.negativeCount}</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase' }}>
                  {tig.negative}
                </div>
              </div>

              <div style={{ textAlign: 'center', borderLeft: '1px solid var(--border-primary)' }}>
                <div style={{ fontSize: '1.35rem', fontWeight: 900, color: 'var(--color-neutral, #6b7280)' }}>{metrics.neutralCount}</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase' }}>
                  {tig.neutral}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter and Control Bar */}
      <section style={{ padding: '1.5rem 0', borderBottom: '1px solid var(--border-primary)', backgroundColor: 'var(--bg-card)' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {/* Search Input Bar */}
            <div style={{ position: 'relative', width: '100%' }}>
              <Search
                size={18}
                style={{
                  position: 'absolute',
                  left: '14px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: 'var(--text-muted)',
                }}
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={tig.searchPlaceholder}
                className={lang === 'bn' ? 'font-bengali' : ''}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem 0.75rem 2.6rem',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--border-primary)',
                  backgroundColor: 'var(--bg-primary)',
                  color: 'var(--text-primary)',
                  fontSize: '0.92rem',
                  outline: 'none',
                  transition: 'border-color 0.2s ease',
                }}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  style={{
                    position: 'absolute',
                    right: '12px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    color: 'var(--text-muted)',
                    cursor: 'pointer',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                  }}
                >
                  ✕
                </button>
              )}
            </div>

            {/* Filter Pills: Bureau, Sentiment, Outlet & Reset */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.85rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
                {/* Bureau Selector */}
                <div style={{ display: 'inline-flex', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-primary)', overflow: 'hidden' }}>
                  <button
                    onClick={() => setSelectedBureau('all')}
                    className={lang === 'bn' ? 'font-bengali' : ''}
                    style={{
                      padding: '0.35rem 0.75rem',
                      fontSize: '0.8rem',
                      fontWeight: selectedBureau === 'all' ? 700 : 500,
                      backgroundColor: selectedBureau === 'all' ? 'var(--brand-primary)' : 'var(--bg-secondary)',
                      color: selectedBureau === 'all' ? '#ffffff' : 'var(--text-secondary)',
                      border: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    {tig.allPosts}
                  </button>
                  <button
                    onClick={() => setSelectedBureau('Delhi')}
                    className={lang === 'bn' ? 'font-bengali' : ''}
                    style={{
                      padding: '0.35rem 0.75rem',
                      fontSize: '0.8rem',
                      fontWeight: selectedBureau === 'Delhi' ? 700 : 500,
                      backgroundColor: selectedBureau === 'Delhi' ? 'var(--brand-primary)' : 'var(--bg-secondary)',
                      color: selectedBureau === 'Delhi' ? '#ffffff' : 'var(--text-secondary)',
                      border: 'none',
                      borderLeft: '1px solid var(--border-primary)',
                      cursor: 'pointer',
                    }}
                  >
                    {tig.delhiBureau}
                  </button>
                  <button
                    onClick={() => setSelectedBureau('Kolkata')}
                    className={lang === 'bn' ? 'font-bengali' : ''}
                    style={{
                      padding: '0.35rem 0.75rem',
                      fontSize: '0.8rem',
                      fontWeight: selectedBureau === 'Kolkata' ? 700 : 500,
                      backgroundColor: selectedBureau === 'Kolkata' ? 'var(--brand-primary)' : 'var(--bg-secondary)',
                      color: selectedBureau === 'Kolkata' ? '#ffffff' : 'var(--text-secondary)',
                      border: 'none',
                      borderLeft: '1px solid var(--border-primary)',
                      cursor: 'pointer',
                    }}
                  >
                    {tig.kolkataBureau}
                  </button>
                </div>

                {/* Sentiment Filter */}
                <div style={{ display: 'inline-flex', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-primary)', overflow: 'hidden' }}>
                  <button
                    onClick={() => setSelectedSentiment('all')}
                    className={lang === 'bn' ? 'font-bengali' : ''}
                    style={{
                      padding: '0.35rem 0.75rem',
                      fontSize: '0.8rem',
                      fontWeight: selectedSentiment === 'all' ? 700 : 500,
                      backgroundColor: selectedSentiment === 'all' ? 'var(--brand-primary)' : 'var(--bg-secondary)',
                      color: selectedSentiment === 'all' ? '#ffffff' : 'var(--text-secondary)',
                      border: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    {tig.allSentiments}
                  </button>
                  <button
                    onClick={() => setSelectedSentiment('positive')}
                    className={lang === 'bn' ? 'font-bengali' : ''}
                    style={{
                      padding: '0.35rem 0.75rem',
                      fontSize: '0.8rem',
                      fontWeight: selectedSentiment === 'positive' ? 700 : 500,
                      backgroundColor: selectedSentiment === 'positive' ? 'var(--color-positive, #10b981)' : 'var(--bg-secondary)',
                      color: selectedSentiment === 'positive' ? '#ffffff' : 'var(--text-secondary)',
                      border: 'none',
                      borderLeft: '1px solid var(--border-primary)',
                      cursor: 'pointer',
                    }}
                  >
                    {tig.positive}
                  </button>
                  <button
                    onClick={() => setSelectedSentiment('negative')}
                    className={lang === 'bn' ? 'font-bengali' : ''}
                    style={{
                      padding: '0.35rem 0.75rem',
                      fontSize: '0.8rem',
                      fontWeight: selectedSentiment === 'negative' ? 700 : 500,
                      backgroundColor: selectedSentiment === 'negative' ? 'var(--color-negative, #ef4444)' : 'var(--bg-secondary)',
                      color: selectedSentiment === 'negative' ? '#ffffff' : 'var(--text-secondary)',
                      border: 'none',
                      borderLeft: '1px solid var(--border-primary)',
                      cursor: 'pointer',
                    }}
                  >
                    {tig.negative}
                  </button>
                  <button
                    onClick={() => setSelectedSentiment('neutral')}
                    className={lang === 'bn' ? 'font-bengali' : ''}
                    style={{
                      padding: '0.35rem 0.75rem',
                      fontSize: '0.8rem',
                      fontWeight: selectedSentiment === 'neutral' ? 700 : 500,
                      backgroundColor: selectedSentiment === 'neutral' ? 'var(--color-neutral, #6b7280)' : 'var(--bg-secondary)',
                      color: selectedSentiment === 'neutral' ? '#ffffff' : 'var(--text-secondary)',
                      border: 'none',
                      borderLeft: '1px solid var(--border-primary)',
                      cursor: 'pointer',
                    }}
                  >
                    {tig.neutral}
                  </button>
                </div>

                {/* Outlet Filter Dropdown */}
                {availableOutlets.length > 0 && (
                  <select
                    value={selectedOutlet}
                    onChange={(e) => setSelectedOutlet(e.target.value)}
                    style={{
                      padding: '0.35rem 0.75rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-primary)',
                      backgroundColor: 'var(--bg-secondary)',
                      color: 'var(--text-primary)',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      outline: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    <option value="all">{tig.allOutlets}</option>
                    {availableOutlets.map((outlet) => (
                      <option key={outlet} value={outlet}>
                        {outlet}
                      </option>
                    ))}
                  </select>
                )}
              </div>

              {/* Reset Filters & Results Count */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                  <strong style={{ color: 'var(--text-primary)' }}>{filteredArticles.length}</strong> {tig.totalDispatches}
                </span>

                {hasActiveFilters && (
                  <button
                    onClick={handleResetFilters}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                      padding: '0.3rem 0.65rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-primary)',
                      backgroundColor: 'var(--bg-secondary)',
                      color: 'var(--text-secondary)',
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                    }}
                  >
                    <RotateCcw size={12} />
                    {tig.clearFilters}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Posts Grid Section */}
      <section style={{ padding: '2.5rem 0' }}>
        <div className="container">
          {filteredArticles.length === 0 ? (
            <div
              style={{
                textAlign: 'center',
                padding: '4rem 1.5rem',
                backgroundColor: 'var(--bg-card)',
                borderRadius: 'var(--radius-md)',
                border: '1px dashed var(--border-primary)',
                maxWidth: '600px',
                margin: '0 auto',
              }}
            >
              <Instagram size={40} style={{ color: '#E1306C', margin: '0 auto 1rem auto', opacity: 0.7 }} />
              <h3
                className={lang === 'bn' ? 'font-bengali' : 'font-serif'}
                style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}
              >
                {tig.noPostsFound}
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                {lang === 'bn'
                  ? 'অনুগ্রহ করে ভিন্ন কোনো কি-ওয়ার্ড, ব্যুরো বা ফিল্টার নির্বাচন করে পুনরায় চেষ্টা করুন।'
                  : 'Try adjusting your search terms or clearing current bureau and sentiment filters.'}
              </p>
              <button
                onClick={handleResetFilters}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.55rem 1.25rem',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'var(--brand-primary)',
                  color: '#ffffff',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                <RotateCcw size={14} />
                {tig.clearFilters}
              </button>
            </div>
          ) : (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
                gap: '1.75rem',
              }}
            >
              {filteredArticles.map((article) => {
                const isBengali = /[\u0980-\u09FF]/.test(article.title) || article.source.language === 'Bengali';
                const timeAgo = formatArticleTimestamp(article.source.scannedAt, lang, article.publishedAt);
                const originalOutletName = article.source.name.replace(/\s*\(Instagram\)/i, '').trim();
                const outletInfo = getInstagramOutletInfo(article);
                const directInstagramUrl = resolveInstagramLink(article);

                // Extract hashtags from tags or caption
                const hashtags = article.tags?.filter((t) => t.startsWith('#')) || [];
                const otherTags = article.tags?.filter((t) => !t.startsWith('#') && t !== 'Instagram Post' && t !== 'Visual Journalism') || [];

                return (
                  <article
                    key={article.id}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      backgroundColor: 'var(--bg-card)',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--border-primary)',
                      overflow: 'hidden',
                      boxShadow: 'var(--shadow-sm)',
                      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                    }}
                    className="instagram-card"
                  >
                    {/* Card Header: Outlet Avatar & Bureau */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '0.85rem 1rem',
                        borderBottom: '1px solid var(--border-primary)',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                        {/* Instagram Gradient Ring Avatar */}
                        <div
                          style={{
                            width: '36px',
                            height: '36px',
                            borderRadius: '50%',
                            padding: '2px',
                            background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                          }}
                        >
                          <div
                            style={{
                              width: '100%',
                              height: '100%',
                              borderRadius: '50%',
                              backgroundColor: 'var(--bg-card)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: 'var(--text-primary)',
                              fontSize: '0.85rem',
                              fontWeight: 800,
                            }}
                          >
                            {originalOutletName.charAt(0)}
                          </div>
                        </div>

                        <div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                            <span style={{ fontWeight: 800, fontSize: '0.88rem', color: 'var(--text-primary)' }}>
                              {originalOutletName}
                            </span>
                            <span
                              style={{
                                fontSize: '0.68rem',
                                color: 'var(--brand-primary)',
                                fontWeight: 700,
                              }}
                              title={tig.verifiedSource}
                            >
                              ✓
                            </span>
                          </div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                            <a
                              href={outletInfo.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{ color: '#E1306C', fontWeight: 600, textDecoration: 'none' }}
                              title={`${originalOutletName} Instagram`}
                            >
                              {outletInfo.handle}
                            </a>
                            <span>•</span>
                            <span>{article.source.bureau === 'Kolkata' ? (lang === 'bn' ? 'কলকাতা ব্যুরো' : 'Kolkata') : (lang === 'bn' ? 'দিল্লি ব্যুরো' : 'Delhi')}</span>
                            <span>•</span>
                            <span>{timeAgo}</span>
                          </div>
                        </div>
                      </div>

                      <SentimentBadge sentiment={article.sentiment} size="sm" />
                    </div>

                    {/* Image Container with Instagram Badge */}
                    <div
                      style={{
                        position: 'relative',
                        width: '100%',
                        height: '240px',
                        backgroundColor: 'var(--bg-secondary)',
                        overflow: 'hidden',
                      }}
                    >
                      <Image
                        src={article.imageUrl || FALLBACK_IMAGE}
                        alt={article.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        style={{ objectFit: 'cover' }}
                      />

                      {/* Instagram Visual Badge overlay */}
                      <div
                        style={{
                          position: 'absolute',
                          top: '10px',
                          right: '10px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.35rem',
                          backgroundColor: 'rgba(0, 0, 0, 0.65)',
                          backdropFilter: 'blur(4px)',
                          color: '#ffffff',
                          padding: '0.25rem 0.55rem',
                          borderRadius: '999px',
                          fontSize: '0.7rem',
                          fontWeight: 700,
                        }}
                      >
                        <Instagram size={12} style={{ color: '#ff7a9e' }} />
                        <span>Instagram</span>
                      </div>
                    </div>

                    {/* Card Body: Caption, Translation, Key Insights */}
                    <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                      {/* Original Caption / Headline */}
                      <div style={{ marginBottom: '0.75rem' }}>
                        <div style={{ fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', color: '#E1306C', marginBottom: '0.25rem' }}>
                          {tig.caption}
                        </div>
                        <h2
                          className={isBengali ? 'font-bengali' : 'font-serif'}
                          style={{
                            fontSize: isBengali ? '1.05rem' : '1rem',
                            fontWeight: 700,
                            lineHeight: 1.35,
                            color: 'var(--text-primary)',
                            margin: 0,
                          }}
                        >
                          {article.title}
                        </h2>
                      </div>

                      {/* Bilingual Translation */}
                      {(article.banglaTitle || article.englishTitle) && (
                        <div
                          style={{
                            padding: '0.55rem 0.75rem',
                            borderRadius: 'var(--radius-sm)',
                            backgroundColor: 'var(--bg-secondary)',
                            borderLeft: '3px solid var(--brand-primary)',
                            marginBottom: '0.85rem',
                            fontSize: '0.82rem',
                            color: 'var(--text-secondary)',
                          }}
                        >
                          <span style={{ fontWeight: 700, color: 'var(--text-primary)', display: 'block', fontSize: '0.72rem', textTransform: 'uppercase', marginBottom: '0.15rem' }}>
                            {lang === 'bn' ? 'বাংলা ভাবানুবাদ' : 'English Translation'}
                          </span>
                          <span className={lang === 'bn' ? 'font-bengali' : ''}>
                            {lang === 'bn' ? (article.banglaTitle || article.title) : (article.englishTitle || article.title)}
                          </span>
                        </div>
                      )}

                      {/* Brief Analytical Summary */}
                      <p
                        className={lang === 'bn' ? 'font-bengali' : ''}
                        style={{
                          fontSize: '0.85rem',
                          lineHeight: 1.5,
                          color: 'var(--text-secondary)',
                          marginBottom: '0.85rem',
                          flex: 1,
                        }}
                      >
                        {lang === 'bn' ? article.summaryBn : article.summaryEn}
                      </p>

                      {/* Clickable Hashtags */}
                      {hashtags.length > 0 && (
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '0.85rem' }}>
                          {hashtags.map((ht) => (
                            <button
                              key={ht}
                              onClick={() => setSearchQuery(ht)}
                              style={{
                                border: 'none',
                                background: 'rgba(225, 48, 108, 0.08)',
                                color: '#E1306C',
                                fontSize: '0.74rem',
                                fontWeight: 700,
                                padding: '0.2rem 0.5rem',
                                borderRadius: 'var(--radius-sm)',
                                cursor: 'pointer',
                              }}
                            >
                              {ht}
                            </button>
                          ))}
                        </div>
                      )}

                      {/* Card Action Footer */}
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          paddingTop: '0.75rem',
                          borderTop: '1px solid var(--border-primary)',
                          marginTop: 'auto',
                          gap: '0.5rem',
                        }}
                      >
                        {/* Direct View on Instagram external link */}
                        <a
                          href={directInstagramUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.35rem',
                            padding: '0.4rem 0.75rem',
                            borderRadius: 'var(--radius-sm)',
                            background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
                            color: '#ffffff',
                            fontSize: '0.78rem',
                            fontWeight: 700,
                            textDecoration: 'none',
                            boxShadow: '0 2px 6px rgba(225, 48, 108, 0.25)',
                          }}
                        >
                          <Instagram size={13} />
                          <span>{tig.viewOnInstagram}</span>
                          <ExternalLink size={11} />
                        </a>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                          {/* Share / Copy Link */}
                          <button
                            onClick={() => handleShare(directInstagramUrl, article.id)}
                            title="Copy Link"
                            style={{
                              padding: '0.4rem',
                              borderRadius: 'var(--radius-sm)',
                              border: '1px solid var(--border-primary)',
                              backgroundColor: 'var(--bg-secondary)',
                              color: copiedId === article.id ? 'var(--color-positive, #10b981)' : 'var(--text-secondary)',
                              cursor: 'pointer',
                              display: 'inline-flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}
                          >
                            {copiedId === article.id ? <CheckCircle2 size={14} /> : <Share2 size={14} />}
                          </button>

                          {/* Full Report Link */}
                          <Link
                            href={`/article/${article.slug}`}
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '0.25rem',
                              padding: '0.4rem 0.65rem',
                              borderRadius: 'var(--radius-sm)',
                              border: '1px solid var(--border-primary)',
                              backgroundColor: 'var(--bg-secondary)',
                              color: 'var(--text-primary)',
                              fontSize: '0.78rem',
                              fontWeight: 700,
                              textDecoration: 'none',
                            }}
                          >
                            <span>{tig.readFullReport}</span>
                            <ArrowRight size={12} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Live Wire Notice Footer Banner */}
      <section style={{ marginTop: '1.5rem' }}>
        <div className="container">
          <div
            style={{
              padding: '1.25rem 1.5rem',
              backgroundColor: 'var(--bg-secondary)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(225, 48, 108, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#E1306C',
                  flexShrink: 0,
                }}
              >
                <Radio size={20} />
              </div>
              <div>
                <h4 style={{ margin: 0, fontSize: '0.92rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                  {lang === 'bn' ? 'অ্যালগরিদমিক ইনস্টাগ্রাম ওয়্যার স্ক্যানার' : 'Algorithmic Instagram Wire Scanner'}
                </h4>
                <p style={{ margin: '0.2rem 0 0 0', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                  {tig.liveWireNotice}
                </p>
              </div>
            </div>

            <Link
              href="/bangladesh-indian-news-media"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                fontSize: '0.82rem',
                fontWeight: 700,
                color: 'var(--brand-primary)',
                textDecoration: 'none',
              }}
            >
              <span>{lang === 'bn' ? '১২০+ সংবাদমাধ্যমের সম্পূর্ণ ডিরেক্টরি দেখুন' : 'Explore 120+ Newsroom Directory'}</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        .instagram-card:hover {
          transform: translateY(-3px);
          box-shadow: var(--shadow-md);
        }
        @keyframes pulse {
          0% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.4;
            transform: scale(1.15);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}
