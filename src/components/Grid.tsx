import type { CSSProperties, ReactNode } from 'react';
import { useThemeStyles } from '../hooks/useThemeStyles';

interface GridProps {
  children: ReactNode;
  columns?: number;
  gap?: string;
  style?: CSSProperties;
}

export function Grid({ children, columns = 3, gap, style }: GridProps) {
  const { theme } = useThemeStyles();

  return (
    <div
      className="grid"
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: gap || theme.spacing.lg,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
