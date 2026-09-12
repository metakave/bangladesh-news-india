'use client';

import React, { useState, use } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ARTICLES, OPINION_PIECES, Article } from '@/data/news-data';
import AudioPlayer from '@/components/AudioPlayer';
import ReaderTools from '@/components/ReaderTools';
import ArticleCard from '@/components/ArticleCard';
import Newsletter from '@/components/Newsletter';
import {
  Clock,
  Eye,
  Calendar,
  MapPin,
  Sparkles,
  MessageSquare,
  Send,
  User,
  Share2,
  ChevronRight,
  TrendingUp,
} from 'lucide-react';

interface Comment {
  id: string;
  name: string;
  avatar: string;
  date: string;
  text: string;
}

export default function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;

  const article = ARTICLES.find((a) => a.slug === slug);
  const opinion = OPINION_PIECES.find((p) => p.slug === slug);

  // If opinion piece was clicked
  const currentArticle: Article | undefined = article || (opinion ? {
    id: opinion.id,
    slug: opinion.slug,
    title: opinion.title,
    subtitle: 'An India Watch Exclusive Column',
    excerpt: opinion.excerpt,
    content: [
      opinion.excerpt,
      "India's demographic transformation is intersecting with a global technological revolution in artificial intelligence. While western commentators often emphasize workforce displacement, India's reality presents a fundamentally different economic dynamic.",
      "The deployment of open-source vernacular voice agents across India's regional languages is unlocking productivity for millions of micro-entrepreneurs, farmers, and healthcare workers who were previously disenfranchised by text-heavy interfaces.",
      "By building high-speed digital public infrastructure upon which sovereign AI models can iterate, India is not merely consuming global AI innovation—it is establishing the foundational blueprint for how emerging economies leverage compute for social mobility."
    ],
    category: 'politics',
    categoryLabel: 'Opinion',
    author: {
      name: opinion.author.name,
      role: opinion.author.role,
      avatar: opinion.author.avatar,
      location: 'New Delhi',
    },
    publishedAt: opinion.publishedAt,
    readTime: opinion.readTime,
    views: 34500,
    imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&auto=format&fit=crop&q=80',
    imageCaption: 'The intersection of human capital and intelligent digital systems.',
    imageCredit: 'India Watch Perspective',
    tags: ['AI', 'Economy', 'Demographics', 'Future of Work'],
  } : undefined);

  if (!currentArticle) {
    notFound();
  }

  const [fontSize, setFontSize] = useState<'sm' | 'md' | 'lg' | 'xl'>('md');
  const [fontFamily, setFontFamily] = useState<'serif' | 'sans'>('serif');
  const [commentName, setCommentName] = useState('');
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 'c1',
      name: 'Dr. Rajiv Menon',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
      date: '2 hours ago',
      text: 'A profoundly thorough analysis. The focus on reliable high-voltage power grids and talent pipeline readiness is precisely where policy execution matters most for semiconductor fabs.',
    },
    {
      id: 'c2',
      name: 'Shreya Kulkarni',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80',
      date: '4 hours ago',
      text: 'Extremely well-written piece. India Watch continues to produce the highest caliber technical and economic reporting.',
    }
  ]);

  const relatedArticles = ARTICLES.filter((a) => a.slug !== slug && a.category === currentArticle.category).slice(0, 3);
  const trendingArticles = ARTICLES.filter((a) => a.slug !== slug).slice(0, 4);

  const formattedDate = new Date(currentArticle.publishedAt).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const fullTextToRead = `${currentArticle.title}. ${currentArticle.excerpt}. ${currentArticle.content.join(' ')}`;

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentText.trim()) return;

    const newComment: Comment = {
      id: Date.now().toString(),
      name: commentName.trim() || 'Reader',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80',
      date: 'Just now',
      text: commentText.trim(),
    };

    setComments([newComment, ...comments]);
    setCommentName('');
    setCommentText('');
  };

  const getFontSizeRem = () => {
    switch (fontSize) {
      case 'sm': return '1.02rem';
      case 'md': return '1.15rem';
      case 'lg': return '1.28rem';
      case 'xl': return '1.45rem';
    }
  };

  return (
    <article style={{ padding: '2rem 0 4rem 0' }}>
      <div className="container">
        {/* Breadcrumb Navigation */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem',
          fontSize: '0.78rem',
          color: 'var(--text-muted)',
          marginBottom: '1.5rem',
        }}>
          <Link href="/" style={{ color: 'var(--text-secondary)' }}>Home</Link>
          <ChevronRight size={12} />
          <Link href={`/category/${currentArticle.category}`} style={{ color: 'var(--brand-primary)', fontWeight: 600 }}>
            {currentArticle.categoryLabel}
          </Link>
          <ChevronRight size={12} />
          <span style={{ color: 'var(--text-muted)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '300px' }}>
            {currentArticle.title}
          </span>
        </div>

        {/* Article Grid Container */}
        <div className="article-layout-grid">
          {/* Main Article Content Column */}
          <div className="article-main-col">
            {/* Header / Headline Area */}
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'inline-block', marginBottom: '0.75rem' }}>
                <Link href={`/category/${currentArticle.category}`} className="category-pill">
                  {currentArticle.categoryLabel}
                </Link>
              </div>

              <h1
                className="font-serif"
                style={{
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  fontWeight: 800,
                  lineHeight: 1.18,
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.02em',
                  marginBottom: '1rem',
                }}
              >
                {currentArticle.title}
              </h1>

              {currentArticle.subtitle && (
                <p style={{
                  fontSize: '1.2rem',
                  lineHeight: 1.5,
                  color: 'var(--text-secondary)',
                  marginBottom: '1.5rem',
                  fontStyle: 'italic',
                }}>
                  {currentArticle.subtitle}
                </p>
              )}

              {/* Byline & Metadata Ribbon */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1rem',
                paddingTop: '1rem',
                borderTop: '1px solid var(--border-primary)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  <div style={{
                    position: 'relative',
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    backgroundColor: 'var(--bg-secondary)',
                  }}>
                    <Image
                      src={currentArticle.author.avatar}
                      alt={currentArticle.author.name}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div>
                    <div style={{ fontWeight: 800, fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                      {currentArticle.author.name}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span>{currentArticle.author.role}</span>
                      <span>•</span>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.2rem' }}>
                        <MapPin size={11} /> {currentArticle.author.location}
                      </span>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                    <Calendar size={13} /> {formattedDate}
                  </span>
                  <span>•</span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                    <Clock size={13} /> {currentArticle.readTime}
                  </span>
                </div>
              </div>
            </div>

            {/* Reader Controls Toolbar */}
            <ReaderTools
              slug={currentArticle.slug}
              title={currentArticle.title}
              onFontSizeChange={setFontSize}
              onFontFamilyChange={setFontFamily}
              currentFontSize={fontSize}
              currentFontFamily={fontFamily}
            />

            {/* Audio Reader Player Widget */}
            <AudioPlayer
              title={currentArticle.title}
              duration={currentArticle.audioDuration || '5:00'}
              textToRead={fullTextToRead}
            />

            {/* Main Featured Image with Caption */}
            {currentArticle.imageUrl && (
              <figure style={{ margin: '2rem 0' }}>
                <div style={{
                  position: 'relative',
                  width: '100%',
                  height: '460px',
                  borderRadius: 'var(--radius-sm)',
                  overflow: 'hidden',
                  backgroundColor: 'var(--bg-secondary)',
                }}>
                  <Image
                    src={currentArticle.imageUrl}
                    alt={currentArticle.title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 70vw"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                {(currentArticle.imageCaption || currentArticle.imageCredit) && (
                  <figcaption style={{
                    fontSize: '0.8rem',
                    color: 'var(--text-muted)',
                    marginTop: '0.65rem',
                    lineHeight: 1.45,
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '0.5rem'
                  }}>
                    <span>{currentArticle.imageCaption}</span>
                    <span style={{ fontStyle: 'italic', fontWeight: 600 }}>Credit: {currentArticle.imageCredit}</span>
                  </figcaption>
                )}
              </figure>
            )}

            {/* Key Takeaways Box (if available) */}
            {currentArticle.keyTakeaways && currentArticle.keyTakeaways.length > 0 && (
              <div style={{
                backgroundColor: 'var(--bg-secondary)',
                borderLeft: '4px solid var(--brand-primary)',
                padding: '1.25rem 1.5rem',
                borderRadius: '0 var(--radius-md) var(--radius-md) 0',
                margin: '2rem 0',
              }}>
                <div style={{ fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--brand-primary)', marginBottom: '0.75rem', letterSpacing: '0.06em', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Sparkles size={14} style={{ color: 'var(--brand-gold)' }} />
                  Executive Summary &amp; Key Takeaways
                </div>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem', paddingLeft: '1.2rem', color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.55 }}>
                  {currentArticle.keyTakeaways.map((point, idx) => (
                    <li key={idx}><strong>{point}</strong></li>
                  ))}
                </ul>
              </div>
            )}

            {/* Article Body Content */}
            <div
              className={fontFamily === 'serif' ? 'font-serif' : 'font-sans'}
              style={{
                fontSize: getFontSizeRem(),
                lineHeight: 1.75,
                color: 'var(--text-primary)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.4rem',
              }}
            >
              {currentArticle.content.map((paragraph, index) => (
                <p
                  key={index}
                  className={index === 0 ? 'drop-cap' : ''}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Article Tags */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              flexWrap: 'wrap',
              margin: '2.5rem 0 2rem 0',
              paddingTop: '1.5rem',
              borderTop: '1px solid var(--border-primary)',
            }}>
              <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-muted)' }}>Tags:</span>
              {currentArticle.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    backgroundColor: 'var(--bg-secondary)',
                    color: 'var(--text-secondary)',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    padding: '0.3rem 0.65rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--border-primary)',
                  }}
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Author Profile Card */}
            <div style={{
              backgroundColor: 'var(--bg-secondary)',
              padding: '1.5rem',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-primary)',
              display: 'flex',
              alignItems: 'center',
              gap: '1.25rem',
              margin: '2.5rem 0',
            }}>
              <div style={{
                position: 'relative',
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                overflow: 'hidden',
                backgroundColor: 'var(--bg-primary)',
                flexShrink: 0,
              }}>
                <Image
                  src={currentArticle.author.avatar}
                  alt={currentArticle.author.name}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                  {currentArticle.author.name}
                </h4>
                <div style={{ fontSize: '0.8rem', color: 'var(--brand-primary)', fontWeight: 600, marginBottom: '0.4rem' }}>
                  {currentArticle.author.role} • {currentArticle.author.location}
                </div>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.45 }}>
                  Covers strategic technologies, industrial infrastructure, and public policy for India Watch.
                </p>
              </div>
            </div>

            {/* Interactive Comments Section */}
            <section style={{
              margin: '3rem 0',
              paddingTop: '2rem',
              borderTop: '2px solid var(--border-bold)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.5rem' }}>
                <MessageSquare size={20} style={{ color: 'var(--brand-primary)' }} />
                <h3 className="font-masthead" style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                  Reader Discussion ({comments.length})
                </h3>
              </div>

              {/* Comment Submission Form */}
              <form onSubmit={handleAddComment} style={{
                backgroundColor: 'var(--bg-card)',
                padding: '1.25rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-primary)',
                marginBottom: '2rem',
                boxShadow: 'var(--shadow-sm)',
              }}>
                <div style={{ marginBottom: '0.75rem' }}>
                  <input
                    type="text"
                    placeholder="Your Name / Organization"
                    value={commentName}
                    onChange={(e) => setCommentName(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.6rem 0.85rem',
                      fontSize: '0.85rem',
                      backgroundColor: 'var(--bg-primary)',
                      border: '1px solid var(--border-primary)',
                      borderRadius: 'var(--radius-sm)',
                      color: 'var(--text-primary)',
                      outline: 'none',
                    }}
                  />
                </div>

                <div style={{ marginBottom: '0.75rem' }}>
                  <textarea
                    rows={3}
                    placeholder="Contribute constructive commentary to this report..."
                    required
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.75rem 0.85rem',
                      fontSize: '0.9rem',
                      backgroundColor: 'var(--bg-primary)',
                      border: '1px solid var(--border-primary)',
                      borderRadius: 'var(--radius-sm)',
                      color: 'var(--text-primary)',
                      outline: 'none',
                      fontFamily: 'inherit',
                      resize: 'vertical',
                    }}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    backgroundColor: 'var(--brand-primary)',
                    color: '#ffffff',
                    fontWeight: 700,
                    fontSize: '0.8rem',
                    padding: '0.55rem 1.25rem',
                    borderRadius: 'var(--radius-sm)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                  }}
                >
                  <Send size={13} /> Post Comment
                </button>
              </form>

              {/* Comments Feed */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {comments.map((comment) => (
                  <div
                    key={comment.id}
                    style={{
                      backgroundColor: 'var(--bg-secondary)',
                      padding: '1.15rem',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--border-subtle)',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.6rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                        <div style={{
                          position: 'relative',
                          width: '32px',
                          height: '32px',
                          borderRadius: '50%',
                          overflow: 'hidden',
                          backgroundColor: 'var(--border-primary)',
                        }}>
                          <img
                            src={comment.avatar}
                            alt={comment.name}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                          />
                        </div>
                        <span style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                          {comment.name}
                        </span>
                      </div>
                      <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{comment.date}</span>
                    </div>
                    <p style={{ fontSize: '0.88rem', lineHeight: 1.5, color: 'var(--text-secondary)' }}>
                      {comment.text}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Sticky Sidebar */}
          <aside className="article-sidebar-col">
            <div style={{ position: 'sticky', top: '80px', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {/* Related Reports in this Topic */}
              <div style={{
                backgroundColor: 'var(--bg-card)',
                padding: '1.25rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-primary)',
                boxShadow: 'var(--shadow-sm)',
              }}>
                <h4
                  className="font-masthead"
                  style={{
                    fontSize: '1rem',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    color: 'var(--text-primary)',
                    borderBottom: '2px solid var(--brand-primary)',
                    paddingBottom: '0.4rem',
                    marginBottom: '1rem',
                  }}
                >
                  Related Reports
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {relatedArticles.map((art) => (
                    <ArticleCard key={art.id} article={art} variant="horizontal" />
                  ))}
                </div>
              </div>

              {/* Trending Stories */}
              <div style={{
                backgroundColor: 'var(--bg-card)',
                padding: '1.25rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-primary)',
                boxShadow: 'var(--shadow-sm)',
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.85rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  color: 'var(--text-primary)',
                  borderBottom: '2px solid var(--border-bold)',
                  paddingBottom: '0.4rem',
                  marginBottom: '1rem',
                }}>
                  <TrendingUp size={15} style={{ color: 'var(--brand-primary)' }} />
                  Trending Across India Watch
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  {trendingArticles.map((art, idx) => (
                    <Link
                      key={art.id}
                      href={`/article/${art.slug}`}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.65rem',
                        paddingBottom: '0.65rem',
                        borderBottom: idx !== trendingArticles.length - 1 ? '1px solid var(--border-subtle)' : 'none',
                      }}
                    >
                      <span className="font-masthead" style={{ fontSize: '1.25rem', fontWeight: 900, color: 'var(--brand-primary)', opacity: 0.8 }}>
                        0{idx + 1}
                      </span>
                      <div>
                        <h5 className="font-serif" style={{ fontSize: '0.9rem', fontWeight: 700, lineHeight: 1.35, color: 'var(--text-primary)' }}>
                          {art.title}
                        </h5>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <style jsx>{`
        .article-layout-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
        }

        @media (min-width: 980px) {
          .article-layout-grid {
            grid-template-columns: 2.3fr 1fr;
          }
        }
      `}</style>
    </article>
  );
}
