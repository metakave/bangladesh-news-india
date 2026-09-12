'use client';

import React from 'react';
import { MARKET_DATA } from '@/data/news-data';
import { TrendingUp, TrendingDown, Sun, CloudRain, Wind } from 'lucide-react';

export default function MarketTicker() {
  return (
    <div style={{
      background: 'var(--bg-secondary)',
      borderBottom: '1px solid var(--border-primary)',
      fontSize: '0.78rem',
      fontWeight: 500,
      padding: '0.4rem 0',
      overflow: 'hidden',
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
        {/* Market Data Marquee */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', overflow: 'hidden', whiteSpace: 'nowrap', flex: 1 }}>
          <span style={{
            fontSize: '0.68rem',
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            color: 'var(--brand-primary)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem',
            paddingRight: '0.75rem',
            borderRight: '1px solid var(--border-primary)',
            flexShrink: 0
          }}>
            <span className="live-pulse" style={{ width: '6px', height: '6px' }}></span>
            Markets Live
          </span>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', overflowX: 'auto', scrollbarWidth: 'none' }}>
            {MARKET_DATA.map((item) => (
              <div key={item.symbol} style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', flexShrink: 0 }}>
                <span style={{ color: 'var(--text-secondary)', fontWeight: 600 }}>{item.name}:</span>
                <span className="font-mono" style={{ color: 'var(--text-primary)', fontWeight: 700 }}>{item.value}</span>
                <span style={{
                  color: item.isPositive ? 'var(--brand-green)' : 'var(--brand-red)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.15rem',
                  fontSize: '0.72rem',
                  fontWeight: 600
                }}>
                  {item.isPositive ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                  {item.change}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Live Weather & AQI Widget */}
        <div style={{
          display: 'none',
          alignItems: 'center',
          gap: '1.25rem',
          color: 'var(--text-secondary)',
          flexShrink: 0,
          borderLeft: '1px solid var(--border-primary)',
          paddingLeft: '1rem'
        }} className="weather-desk">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <Sun size={13} style={{ color: 'var(--brand-gold)' }} />
            <span>Dhaka: <strong>31°C</strong></span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <Wind size={13} style={{ color: 'var(--brand-accent)' }} />
            <span>AQI: <strong style={{ color: 'var(--brand-green)' }}>74 (Moderate)</strong></span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 900px) {
          .weather-desk {
            display: flex !important;
          }
        }
      `}</style>
    </div>
  );
}
