'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, Volume2, FastForward, Check } from 'lucide-react';

interface AudioPlayerProps {
  title: string;
  duration?: string;
  textToRead: string;
}

export default function AudioPlayer({
  title,
  duration = '5:00',
  textToRead,
}: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [progress, setProgress] = useState(0);
  const [isSupported, setIsSupported] = useState(true);
  const synthRef = useRef<SpeechSynthesis | null>(null);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      synthRef.current = window.speechSynthesis;
    } else {
      setIsSupported(false);
    }

    return () => {
      if (synthRef.current) {
        synthRef.current.cancel();
      }
    };
  }, []);

  const handleTogglePlay = () => {
    if (!synthRef.current) return;

    if (isPlaying) {
      synthRef.current.pause();
      setIsPlaying(false);
    } else {
      if (synthRef.current.paused) {
        synthRef.current.resume();
        setIsPlaying(true);
      } else {
        synthRef.current.cancel();
        const utterance = new SpeechSynthesisUtterance(textToRead);
        utterance.rate = playbackRate;
        utterance.pitch = 1.0;
        
        utterance.onend = () => {
          setIsPlaying(false);
          setProgress(100);
        };

        utterance.onerror = () => {
          setIsPlaying(false);
        };

        utteranceRef.current = utterance;
        synthRef.current.speak(utterance);
        setIsPlaying(true);
      }
    }
  };

  const handleRestart = () => {
    if (!synthRef.current) return;
    synthRef.current.cancel();
    setProgress(0);
    setIsPlaying(false);
  };

  const cycleSpeed = () => {
    const nextRate = playbackRate === 1 ? 1.25 : playbackRate === 1.25 ? 1.5 : 1;
    setPlaybackRate(nextRate);
    if (isPlaying && synthRef.current) {
      synthRef.current.cancel();
      const utterance = new SpeechSynthesisUtterance(textToRead);
      utterance.rate = nextRate;
      utteranceRef.current = utterance;
      synthRef.current.speak(utterance);
    }
  };

  return (
    <div
      style={{
        backgroundColor: 'var(--bg-card)',
        border: '1px solid var(--border-primary)',
        borderRadius: 'var(--radius-md)',
        padding: '1rem 1.25rem',
        margin: '1.75rem 0',
        boxShadow: 'var(--shadow-sm)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            backgroundColor: 'rgba(201, 58, 29, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--brand-primary)',
          }}>
            <Volume2 size={16} />
          </div>
          <div>
            <div style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--brand-primary)', letterSpacing: '0.06em' }}>
              Listen to this article
            </div>
            <div style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
              Narrated Audio Edition • {duration}
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <button
            onClick={cycleSpeed}
            style={{
              fontSize: '0.72rem',
              fontWeight: 700,
              padding: '0.2rem 0.5rem',
              backgroundColor: 'var(--bg-secondary)',
              borderRadius: 'var(--radius-sm)',
              color: 'var(--text-primary)',
              border: '1px solid var(--border-primary)',
            }}
          >
            {playbackRate}x
          </button>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <button
          onClick={handleTogglePlay}
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: 'var(--brand-primary)',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            boxShadow: 'var(--shadow-sm)',
          }}
          aria-label={isPlaying ? 'Pause narration' : 'Play narration'}
        >
          {isPlaying ? <Pause size={18} /> : <Play size={18} style={{ marginLeft: '2px' }} />}
        </button>

        <button
          onClick={handleRestart}
          style={{
            color: 'var(--text-muted)',
            padding: '0.4rem',
            borderRadius: 'var(--radius-sm)',
          }}
          aria-label="Restart narration"
        >
          <RotateCcw size={16} />
        </button>

        {/* Audio Wave / Visual Indicator */}
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '4px', height: '24px', overflow: 'hidden' }}>
          {[12, 22, 16, 28, 14, 24, 18, 10, 20, 16, 26, 12, 18, 22, 14, 20, 16, 24, 12, 18].map((h, i) => (
            <div
              key={i}
              style={{
                width: '3px',
                height: isPlaying ? `${Math.max(6, (h * (i % 2 === 0 ? 1.2 : 0.8)))}px` : `${Math.max(4, h * 0.4)}px`,
                backgroundColor: isPlaying ? 'var(--brand-primary)' : 'var(--border-primary)',
                borderRadius: '2px',
                transition: 'height 0.2s ease',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
