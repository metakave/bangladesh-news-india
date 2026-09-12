'use client';

import React from 'react';
import Link from 'next/link';
import { Article } from '@/data/news-data';
import ArticleCard from './ArticleCard';
import { ArrowRight, Landmark, TrendingUp, Cpu, Leaf, Globe, Sparkles, Trophy } from 'lucide-react';

interface CategorySectionProps {
  title: string;
  categorySlug: string;
  articles: Article[];
  iconName?: string;
  layout?: 'grid3' | 'grid4' | 'split';
}

const ICONS_MAP: Record<string, React.ReactNode> = {
  Landmark: <Landmark size={18} />,
  TrendingUp: <TrendingUp size={18} />,
  Cpu: <Cpu size={18} />,
  Leaf: <Leaf size={18} />,
  Globe: <Globe size={18} />,
  Sparkles: <Sparkles size={18} />,
  Trophy: <Trophy size={18} />,
};

export default function CategorySection({
  title,
  categorySlug,
  articles,
  iconName = 'TrendingUp',
  layout = 'split',
}: CategorySectionProps) {
  if (articles.length === 0) return null;

  const lead = articles[0];
  const secondary = articles.slice(1, 4);

  return (
    <section style={{ padding: '2.5rem 0', borderBottom: '1px solid var(--border-primary)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '2px solid var(--border-bold)',
          paddingBottom: '0.6rem',
          marginBottom: '1.75rem',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <span style={{ color: 'var(--brand-primary)' }}>
              {ICONS_MAP[iconName] || <TrendingUp size={18} />}
            </span>
            <h3
              className="font-masthead"
              style={{
                fontSize: '1.35rem',
                fontWeight: 800,
                color: 'var(--text-primary)',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
              }}
            >
              {title}
            </h3>
          </div>

          <Link
            href={`/category/${categorySlug}`}
            style={{
              fontSize: '0.78rem',
              fontWeight: 700,
              color: 'var(--brand-primary)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
            }}
          >
            Explore All <ArrowRight size={13} />
          </Link>
        </div>

        {/* Section Content */}
        {layout === 'split' ? (
          <div className="category-split-layout">
            <div className="category-lead-col">
              <ArticleCard article={lead} variant="featured" />
            </div>

            <div className="category-list-col">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {secondary.map((art, idx) => (
                  <div
                    key={art.id}
                    style={{
                      borderBottom: idx !== secondary.length - 1 ? '1px solid var(--border-subtle)' : 'none',
                      paddingBottom: idx !== secondary.length - 1 ? '1.25rem' : 0,
                    }}
                  >
                    <ArticleCard article={art} variant="horizontal" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1.75rem'
          }}>
            {articles.slice(0, 4).map((art) => (
              <ArticleCard key={art.id} article={art} variant="featured" />
            ))}
          </div>
        )}
      </div>

      <style jsx>{`
        .category-split-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        @media (min-width: 820px) {
          .category-split-layout {
            grid-template-columns: 1.35fr 1fr;
          }
        }
      `}</style>
    </section>
  );
}
