import type { CSSProperties, ReactNode } from 'react';
import { useThemeStyles } from '../hooks/useThemeStyles';

interface CardProps {
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
  onClick?: () => void;
  hoverable?: boolean;
}

export function Card({ children, style, className = '', onClick, hoverable }: CardProps) {
  const { cardStyle } = useThemeStyles();

  return (
    <div
      className={`card ${hoverable ? 'card--hoverable' : ''} ${className}`}
      style={{ ...cardStyle, ...style }}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
