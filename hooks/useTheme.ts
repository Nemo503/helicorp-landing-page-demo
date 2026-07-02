/* ============================================================
   Hook: useTheme
   Light mode default, zero flash of dark theme, class-based toggle.
   ============================================================ */

'use client';

import { useState, useEffect, useCallback } from 'react';
import type { ThemeMode } from '@/types';

const STORAGE_KEY = 'helipet-theme';

export function useTheme() {
  const [theme, setThemeState] = useState<ThemeMode>('light');
  const [mounted, setMounted] = useState(false);

  const applyThemeClass = (mode: ThemeMode) => {
    if (typeof document === 'undefined') return;
    const root = document.documentElement;
    if (mode === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  };

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem(STORAGE_KEY) as ThemeMode | null;

    if (stored === 'dark') {
      setThemeState('dark');
      applyThemeClass('dark');
    } else {
      // Default to Light Mode
      setThemeState('light');
      applyThemeClass('light');
    }
  }, []);

  const setTheme = useCallback((mode: ThemeMode) => {
    setThemeState(mode);
    localStorage.setItem(STORAGE_KEY, mode);
    applyThemeClass(mode);
  }, []);

  const toggleTheme = useCallback(() => {
    const nextTheme: ThemeMode = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
  }, [theme, setTheme]);

  return { theme, setTheme, toggleTheme, mounted };
}
