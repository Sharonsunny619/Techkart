import type { ThemeConfig } from '../types/config';

export const lightTheme: ThemeConfig = {
  primaryColor: '#2563eb',
  secondaryColor: '#1e40af',
  accentColor: '#f59e0b',
  backgroundColor: '#f8fafc',
  surfaceColor: '#ffffff',
  textColor: '#0f172a',
  textMuted: '#64748b',
  borderRadius: '8px',
  fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '48px',
  },
};

export const darkTheme: ThemeConfig = {
  primaryColor: '#3b82f6',
  secondaryColor: '#60a5fa',
  accentColor: '#fbbf24',
  backgroundColor: '#0f172a',
  surfaceColor: '#1e293b',
  textColor: '#f1f5f9',
  textMuted: '#94a3b8',
  borderRadius: '8px',
  fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '48px',
  },
};
