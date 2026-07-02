/* ============================================================
   Layout: ThemeProvider
   Provides dark mode context via class-based strategy.
   ============================================================ */

'use client';

import {
  createContext,
  useContext,
} from 'react';
import { useTheme } from '@/hooks/useTheme';
import type { ThemeMode } from '@/types';

interface ThemeContextValue {
  theme: ThemeMode;
  toggleTheme: () => void;
  mounted: boolean;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: 'light',
  toggleTheme: () => {},
  mounted: false,
});

export function useThemeContext() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { theme, toggleTheme, mounted } = useTheme();

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, mounted }}>
      {children}
    </ThemeContext.Provider>
  );
}
