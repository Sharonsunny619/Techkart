import { createContext, useContext } from 'react';
import type { ThemeConfig } from '../types/config';

interface ThemeContextValue {
  theme: ThemeConfig;
  themeName: 'light' | 'dark';
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextValue | null>(null);

export function useThemeContext() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('Wrap your app in ThemeProvider first');
  return ctx;
}
