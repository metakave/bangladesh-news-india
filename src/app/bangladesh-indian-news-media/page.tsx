'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useApp } from '@/context/ThemeContext';
import { TRANSLATIONS } from '@/data/translations';
import { INDIAN_MEDIA_DIRECTORY, IndianMediaOutlet } from '@/data/indian-media-directory';
import {
  Search,
  ExternalLink,
  Globe,
  Rss,
  Building2,
  Newspaper,
  Tv,
  Radio,
  BookOpen,
  Filter,
  CheckCircle2,
  ChevronRight,
  ArrowUpRight
} from 'lucide-react';

export default function BangladeshIndianNewsMediaPage() {
  const { lang } = useApp();
  const t = TRANSLATIONS[lang];
  const dirT = t.mediaDirectory;

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState<'All' | 'English' | 'Bengali' | 'Hindi' | 'Regional'>('All');
  const [selectedType, setSelectedType] = useState<string>('All');
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  // Filter outlets
  const filteredOutlets = useMemo(() => {
    return INDIAN_MEDIA_DIRECTORY.filter((outlet) => {
      // Language Filter
      if (selectedLanguage === 'English' && outlet.language !== 'English') return false;
      if (selectedLanguage === 'Bengali' && outlet.language !== 'Bengali') return false;
      if (selectedLanguage === 'Hindi' && outlet.language !== 'Hindi') return false;
      if (selectedLanguage === 'Regional' && (outlet.language === 'English' || outlet.language === 'Bengali' || outlet.language === 'Hindi')) return false;

      // Type Filter
      if (selectedType !== 'All' && outlet.type !== selectedType) return false;

      // Search Query Filter
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchesName = outlet.name.toLowerCase().includes(q);
        const matchesNameBn = outlet.nameBn?.toLowerCase().includes(q) || false;
        const matchesHeadOffice = outlet.headOffice.toLowerCase().includes(q);
        const matchesHeadOfficeBn = outlet.headOfficeBn?.toLowerCase().includes(q) || false;
        const matchesLang = outlet.language.toLowerCase().includes(q);
        const matchesDomain = outlet.domain.toLowerCase().includes(q);
        if (!matchesName && !matchesNameBn && !matchesHeadOffice && !matchesHeadOfficeBn && !matchesLang && !matchesDomain) {
          return false;
        }
      }

      return true;
    });
  }, [searchQuery, selectedLanguage, selectedType]);

  const stats = useMemo(() => {
    return {
      total: INDIAN_MEDIA_DIRECTORY.length,
      english: INDIAN_MEDIA_DIRECTORY.filter(o => o.language === 'English').length,
      bengali: INDIAN_MEDIA_DIRECTORY.filter(o => o.language === 'Bengali').length,
      hindi: INDIAN_MEDIA_DIRECTORY.filter(o => o.language === 'Hindi').length,
      regional: INDIAN_MEDIA_DIRECTORY.filter(o => !['English', 'Bengali', 'Hindi'].includes(o.language)).length,
    };
  }, []);

  const handleImageError = (id: string) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
  };

  const getLanguagePillColor = (language: string) => {
    switch (language) {
      case 'Bengali':
        return { bg: 'rgba(16, 185, 129, 0.12)', text: '#059669', border: 'rgba(16, 185, 129, 0.3)' };
      case 'English':
        return { bg: 'rgba(59, 130, 246, 0.12)', text: '#2563eb', border: 'rgba(59, 130, 246, 0.3)' };
      case 'Hindi':
        return { bg: 'rgba(249, 115, 22, 0.12)', text: '#ea580c', border: 'rgba(249, 115, 22, 0.3)' };
      default:
        return { bg: 'rgba(139, 92, 246, 0.12)', text: '#7c3aed', border: 'rgba(139, 92, 246, 0.3)' };
    }
  };

  const getLanguageLabel = (language: string) => {
    if (lang === 'bn') {
      switch (language) {
        case 'Bengali': return 'বাংলা';
        case 'English': return 'ইংরেজি';
        case 'Hindi': return 'হিন্দি';
        case 'Malayalam': return 'মালয়ালম';
        case 'Tamil': return 'তামিল';
        case 'Telugu': return 'তেলেগু';
        case 'Marathi': return 'মারাঠি';
        case 'Gujarati': return 'গুজরাতি';
        default: return language;
      }
    }
    return language;
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Broadcast/Digital':
        return <Tv size={13} />;
      case 'Magazine/Digital':
        return <BookOpen size={13} />;
      default:
        return <Newspaper size={13} />;
    }
  };

  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh', paddingBottom: '4rem' }}>
      {/* Breadcrumbs */}
      <div style={{
        borderBottom: '1px solid var(--border-primary)',
        backgroundColor: 'var(--bg-secondary)',
        padding: '0.65rem 0',
        fontSize: '0.8rem',
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}>
          <Link href="/" style={{ color: 'var(--text-secondary)' }}>
            {lang === 'bn' ? 'প্রচ্ছদ' : 'Home'}
          </Link>
          <ChevronRight size={13} />
          <span style={{ color: 'var(--brand-primary)', fontWeight: 700 }} className={lang === 'bn' ? 'font-bengali' : ''}>
            {dirT.pageTitle}
          </span>
        </div>
      </div>

      {/* Hero Header Section */}
      <div style={{
        borderBottom: '2px solid var(--border-bold)',
        backgroundColor: 'var(--bg-card)',
        padding: '3rem 0 2.5rem 0',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div className="container">
          <div style={{ maxWidth: '840px', margin: '0 auto', textAlign: 'center' }}>
            {/* Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: 'var(--bg-secondary)',
              border: '1px solid var(--border-bold)',
              padding: '0.35rem 0.85rem',
              borderRadius: '999px',
              fontSize: '0.78rem',
              fontWeight: 800,
              color: 'var(--brand-primary)',
              marginBottom: '1rem',
              letterSpacing: '0.04em',
            }}>
              <CheckCircle2 size={15} style={{ color: 'var(--brand-gold)' }} />
              <span className={lang === 'bn' ? 'font-bengali' : ''}>{dirT.badge}</span>
            </div>

            {/* Main Page Title */}
            <h1
              className={lang === 'bn' ? 'font-bengali' : 'font-masthead'}
              style={{
                fontSize: lang === 'bn' ? 'clamp(1.85rem, 3.8vw, 2.85rem)' : 'clamp(1.95rem, 4.0vw, 3.05rem)',
                fontWeight: 600,
                color: 'var(--text-primary)',
                lineHeight: 1.2,
                letterSpacing: lang === 'bn' ? '0' : '0.03em',
                marginBottom: '1rem',
              }}
            >
              {dirT.pageTitle}
            </h1>

            {/* Subtitle */}
            <p
              className={lang === 'bn' ? 'font-bengali' : ''}
              style={{
                fontSize: lang === 'bn' ? '1.05rem' : '1.02rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.65,
                marginBottom: '2rem',
              }}
            >
              {dirT.pageTagline}
            </p>

            {/* Quick Stats Metric Ribbon */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
              flexWrap: 'wrap',
              borderTop: '1px solid var(--border-primary)',
              paddingTop: '1.25rem',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                <span style={{ color: 'var(--brand-primary)', fontSize: '1.1rem', fontWeight: 900 }}>100</span>
                <span className={lang === 'bn' ? 'font-bengali' : ''}>{lang === 'bn' ? 'মোট মিডিয়া' : 'Total Media'}</span>
              </div>
              <span style={{ color: 'var(--border-bold)' }}>•</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.82rem', fontWeight: 700, color: '#2563eb' }}>
                <span style={{ fontSize: '1.1rem', fontWeight: 900 }}>39</span>
                <span className={lang === 'bn' ? 'font-bengali' : ''}>{lang === 'bn' ? 'ইংরেজি দৈনিক' : 'English (1st)'}</span>
              </div>
              <span style={{ color: 'var(--border-bold)' }}>•</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.82rem', fontWeight: 700, color: '#059669' }}>
                <span style={{ fontSize: '1.1rem', fontWeight: 900 }}>21</span>
                <span className={lang === 'bn' ? 'font-bengali' : ''}>{lang === 'bn' ? 'বাংলা গণমাধ্যম' : 'Bengali (2nd)'}</span>
              </div>
              <span style={{ color: 'var(--border-bold)' }}>•</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.82rem', fontWeight: 700, color: '#ea580c' }}>
                <span style={{ fontSize: '1.1rem', fontWeight: 900 }}>29</span>
                <span className={lang === 'bn' ? 'font-bengali' : ''}>{lang === 'bn' ? 'হিন্দি গণমাধ্যম' : 'Hindi (3rd)'}</span>
              </div>
              <span style={{ color: 'var(--border-bold)' }}>•</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.82rem', fontWeight: 700, color: '#7c3aed' }}>
                <span style={{ fontSize: '1.1rem', fontWeight: 900 }}>10</span>
                <span className={lang === 'bn' ? 'font-bengali' : ''}>{lang === 'bn' ? 'আঞ্চলিক দৈনিক' : 'Regional'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Directory & Grid Content */}
      <div className="container" style={{ marginTop: '2.5rem' }}>
        {/* Controls Toolbar: Search & Language Filter Tabs */}
        <div style={{
          backgroundColor: 'var(--bg-card)',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--border-primary)',
          padding: '1.25rem',
          boxShadow: 'var(--shadow-sm)',
          marginBottom: '2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}>
          {/* Top row: Search input */}
          <div style={{ position: 'relative', width: '100%' }}>
            <Search
              size={18}
              style={{
                position: 'absolute',
                left: '1rem',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--text-muted)',
              }}
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={dirT.searchPlaceholder}
              className={lang === 'bn' ? 'font-bengali' : ''}
              style={{
                width: '100%',
                padding: '0.75rem 1rem 0.75rem 2.85rem',
                backgroundColor: 'var(--bg-secondary)',
                border: '1px solid var(--border-primary)',
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.92rem',
                color: 'var(--text-primary)',
                outline: 'none',
                transition: 'border-color 0.15s ease',
              }}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                style={{
                  position: 'absolute',
                  right: '0.85rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-muted)',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  padding: '0.2rem 0.4rem',
                }}
              >
                ✕
              </button>
            )}
          </div>

          {/* Bottom row: Language Tabs (English First, Bengali Second, Hindi Third, Regional) */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '0.75rem',
          }}>
            {/* Language Tabs */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              flexWrap: 'wrap',
            }}>
              {(['All', 'English', 'Bengali', 'Hindi', 'Regional'] as const).map((lTab) => {
                const isActive = selectedLanguage === lTab;
                let label = '';
                if (lTab === 'All') label = dirT.all;
                else if (lTab === 'English') label = dirT.english;
                else if (lTab === 'Bengali') label = dirT.bengali;
                else if (lTab === 'Hindi') label = dirT.hindi;
                else if (lTab === 'Regional') label = dirT.regional;

                return (
                  <button
                    key={lTab}
                    onClick={() => setSelectedLanguage(lTab)}
                    className={lang === 'bn' ? 'font-bengali' : ''}
                    style={{
                      padding: '0.45rem 0.85rem',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.82rem',
                      fontWeight: isActive ? 800 : 600,
                      backgroundColor: isActive ? 'var(--brand-primary)' : 'var(--bg-secondary)',
                      color: isActive ? '#ffffff' : 'var(--text-secondary)',
                      border: `1px solid ${isActive ? 'var(--brand-primary)' : 'var(--border-primary)'}`,
                      cursor: 'pointer',
                      transition: 'all 0.15s ease',
                    }}
                  >
                    {label}
                  </button>
                );
              })}
            </div>

            {/* Results count */}
            <div style={{
              fontSize: '0.82rem',
              fontWeight: 700,
              color: 'var(--text-muted)',
            }} className={lang === 'bn' ? 'font-bengali' : ''}>
              {dirT.showing} <span style={{ color: 'var(--text-primary)', fontWeight: 800 }}>{filteredOutlets.length}</span> {dirT.outlets}
            </div>
          </div>
        </div>

        {/* 4-Column Media Grid */}
        {filteredOutlets.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '4rem 1rem',
            backgroundColor: 'var(--bg-card)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-primary)',
          }}>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', fontWeight: 600 }} className={lang === 'bn' ? 'font-bengali' : ''}>
              {lang === 'bn' ? 'কোনো সংবাদমাধ্যম পাওয়া যায়নি। অনুগ্রহ করে অন্য কোনো ফিল্টার ব্যবহার করুন।' : 'No media outlets found matching your criteria.'}
            </p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedLanguage('All'); setSelectedType('All'); }}
              style={{
                marginTop: '1rem',
                backgroundColor: 'var(--brand-primary)',
                color: '#ffffff',
                border: 'none',
                padding: '0.55rem 1.25rem',
                borderRadius: 'var(--radius-sm)',
                fontWeight: 700,
                fontSize: '0.85rem',
                cursor: 'pointer',
              }}
              className={lang === 'bn' ? 'font-bengali' : ''}
            >
              {lang === 'bn' ? 'সব ফিল্টার রিসেট করুন' : 'Reset All Filters'}
            </button>
          </div>
        ) : (
          <div className="media-outlet-grid">
            {filteredOutlets.map((outlet, index) => {
              const langPill = getLanguagePillColor(outlet.language);
              const logoSrc = `https://www.google.com/s2/favicons?domain=${outlet.domain}&sz=128`;
              const hasError = imageErrors[outlet.id];

              return (
                <div
                  key={outlet.id}
                  className="media-card"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-primary)',
                    padding: '1.25rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: 'var(--shadow-sm)',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease',
                    position: 'relative',
                  }}
                >
                  {/* Top Card Area */}
                  <div>
                    {/* Header Row: Logo & Language Badge */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                      {/* Logo Container (Unified Width & Height) */}
                      <div
                        style={{
                          width: '48px',
                          height: '48px',
                          minWidth: '48px',
                          borderRadius: '10px',
                          backgroundColor: '#ffffff',
                          border: '1px solid var(--border-primary)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: '0 2px 4px rgba(0,0,0,0.04)',
                          overflow: 'hidden',
                          padding: '6px',
                        }}
                      >
                        {!hasError ? (
                          <img
                            src={logoSrc}
                            alt={`${outlet.name} logo`}
                            width={34}
                            height={34}
                            style={{ objectFit: 'contain', width: '34px', height: '34px' }}
                            onError={() => handleImageError(outlet.id)}
                            loading="lazy"
                          />
                        ) : (
                          <div style={{
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'var(--brand-primary)',
                            color: '#ffffff',
                            fontWeight: 900,
                            fontSize: '0.9rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '6px',
                          }}>
                            {outlet.name.slice(0, 2).toUpperCase()}
                          </div>
                        )}
                      </div>

                      {/* Language Pill */}
                      <span
                        style={{
                          fontSize: '0.72rem',
                          fontWeight: 800,
                          padding: '0.25rem 0.6rem',
                          borderRadius: '999px',
                          backgroundColor: langPill.bg,
                          color: langPill.text,
                          border: `1px solid ${langPill.border}`,
                          textTransform: 'uppercase',
                          letterSpacing: '0.04em',
                        }}
                        className={lang === 'bn' ? 'font-bengali' : ''}
                      >
                        {getLanguageLabel(outlet.language)}
                      </span>
                    </div>

                    {/* Outlet Name */}
                    <h3
                      className={lang === 'bn' ? 'font-bengali' : 'font-masthead'}
                      style={{
                        fontSize: '1.05rem',
                        fontWeight: 800,
                        color: 'var(--text-primary)',
                        lineHeight: 1.3,
                        marginBottom: '0.35rem',
                      }}
                    >
                      {lang === 'bn' && outlet.nameBn ? outlet.nameBn : outlet.name}
                    </h3>

                    {/* English Subtitle if Bengali mode */}
                    {lang === 'bn' && outlet.nameBn && (
                      <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.65rem' }}>
                        {outlet.name}
                      </div>
                    )}

                    {/* Type & Headquarters */}
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.3rem',
                      fontSize: '0.76rem',
                      color: 'var(--text-secondary)',
                      marginBottom: '1.25rem',
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                        <span style={{ color: 'var(--brand-gold)' }}>{getTypeIcon(outlet.type)}</span>
                        <span>{outlet.type}</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                        <Building2 size={13} style={{ color: 'var(--text-muted)' }} />
                        <span className={lang === 'bn' ? 'font-bengali' : ''}>
                          {lang === 'bn' && outlet.headOfficeBn ? outlet.headOfficeBn : outlet.headOffice}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Action Button: Direct Bangladesh Category / Tag Link */}
                  <div>
                    <a
                      href={outlet.bangladeshUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="category-btn"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.45rem',
                        width: '100%',
                        backgroundColor: 'var(--brand-primary)',
                        color: '#ffffff',
                        fontSize: '0.82rem',
                        fontWeight: 700,
                        padding: '0.65rem 0.85rem',
                        borderRadius: 'var(--radius-sm)',
                        textDecoration: 'none',
                        boxShadow: 'var(--shadow-sm)',
                        transition: 'background-color 0.15s ease, transform 0.15s ease',
                      }}
                    >
                      <span className={lang === 'bn' ? 'font-bengali' : ''}>
                        {dirT.viewBangladeshDesk}
                      </span>
                      <ArrowUpRight size={15} />
                    </a>

                    {/* Subtle footer links (Website & RSS) */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginTop: '0.65rem',
                      fontSize: '0.72rem',
                      color: 'var(--text-muted)',
                      paddingTop: '0.5rem',
                      borderTop: '1px dashed var(--border-primary)',
                    }}>
                      <a
                        href={outlet.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'var(--text-secondary)', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}
                      >
                        <Globe size={11} /> {outlet.domain.replace('www.', '')}
                      </a>
                      {outlet.rssFeedUrl && (
                        <a
                          href={outlet.rssFeedUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: 'var(--brand-gold)', display: 'inline-flex', alignItems: 'center', gap: '0.2rem', fontWeight: 600 }}
                          title="RSS Feed"
                        >
                          <Rss size={11} /> RSS
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <style jsx>{`
        .media-outlet-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.35rem;
        }

        .media-card:hover {
          transform: translateY(-3px);
          box-shadow: var(--shadow-md) !important;
          border-color: var(--brand-primary) !important;
        }

        .category-btn:hover {
          opacity: 0.92;
          transform: scale(1.01);
        }

        @media (max-width: 1100px) {
          .media-outlet-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 800px) {
          .media-outlet-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 520px) {
          .media-outlet-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
