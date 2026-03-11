import type { ReactNode, CSSProperties } from 'react';
import { Navbar } from './Navbar';
import { useThemeStyles } from '../hooks/useThemeStyles';

export function Layout({ children }: { children: ReactNode }) {
  const { cssVariables } = useThemeStyles();

  return (
    <div
      className="min-h-screen bg-background text-foreground font-body transition-colors duration-300"
      style={cssVariables as CSSProperties}
    >
      <Navbar />
      <main className="max-w-[1100px] mx-auto p-6">
        {children}
      </main>
    </div>
  );
}
