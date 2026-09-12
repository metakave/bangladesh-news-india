'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

export type AppLanguage = 'bn' | 'en';

interface AppContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  lang: AppLanguage;
  setLang: (lang: AppLanguage) => void;
  toggleLang: () => void;
  edition: 'national' | 'global';
  setEdition: (edition: 'national' | 'global') => void;
  bookmarks: string[]; // article slugs
  toggleBookmark: (slug: string) => void;
  isBookmarked: (slug: string) => boolean;
  isSearchOpen: boolean;
  openSearch: () => void;
  closeSearch: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [lang, setLangState] = useState<AppLanguage>('bn'); // Default to Bengali
  const [edition, setEdition] = useState<'national' | 'global'>('national');
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('india_watch_theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
      setTheme('light');
      document.documentElement.setAttribute('data-theme', 'light');
    }

    const savedLang = localStorage.getItem('india_watch_lang') as AppLanguage | null;
    const initialLang = savedLang || 'bn';
    setLangState(initialLang);
    document.documentElement.setAttribute('lang', initialLang);
    document.documentElement.setAttribute('data-lang', initialLang);

    const savedBookmarks = localStorage.getItem('india_watch_bookmarks');
    if (savedBookmarks) {
      try {
        setBookmarks(JSON.parse(savedBookmarks));
      } catch (e) {
        console.error('Failed to parse bookmarks', e);
      }
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('india_watch_theme', nextTheme);
  };

  const setLang = (newLang: AppLanguage) => {
    setLangState(newLang);
    document.documentElement.setAttribute('lang', newLang);
    document.documentElement.setAttribute('data-lang', newLang);
    localStorage.setItem('india_watch_lang', newLang);
  };

  const toggleLang = () => {
    const nextLang = lang === 'bn' ? 'en' : 'bn';
    setLang(nextLang);
  };

  const toggleBookmark = (slug: string) => {
    setBookmarks((prev) => {
      const updated = prev.includes(slug)
        ? prev.filter((item) => item !== slug)
        : [...prev, slug];
      localStorage.setItem('india_watch_bookmarks', JSON.stringify(updated));
      return updated;
    });
  };

  const isBookmarked = (slug: string) => bookmarks.includes(slug);

  const openSearch = () => setIsSearchOpen(true);
  const closeSearch = () => setIsSearchOpen(false);

  // Global Ctrl+K / Cmd+K listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <AppContext.Provider
      value={{
        theme,
        toggleTheme,
        lang,
        setLang,
        toggleLang,
        edition,
        setEdition,
        bookmarks,
        toggleBookmark,
        isBookmarked,
        isSearchOpen,
        openSearch,
        closeSearch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
