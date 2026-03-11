import type { ReactNode, CSSProperties } from 'react';
import { Navbar } from './Navbar';
import { useThemeStyles } from '../hooks/useThemeStyles';

export function Layout({ children }: { children: ReactNode }) {
  const { cssVariables, theme } = useThemeStyles();

  return (
    <div
      style={{
        ...cssVariables,
        minHeight: '100vh',
        backgroundColor: theme.backgroundColor,
        color: theme.textColor,
        fontFamily: theme.fontFamily,
        transition: 'background-color 0.3s ease, color 0.3s ease',
      } as CSSProperties}
    >
      <Navbar />
      <main style={{ maxWidth: 1100, margin: '0 auto', padding: `${theme.spacing.lg} ${theme.spacing.lg}` }}>
        {children}
      </main>
    </div>
  );
}
