import type { CSSProperties, ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
  onClick?: () => void;
  hoverable?: boolean;
}

export function Card({ children, style, className = '', onClick, hoverable }: CardProps) {
  return (
    <div
      className={`card bg-surface text-foreground rounded-3xl border border-border ${hoverable ? 'card--hoverable' : ''} ${className}`}
      style={style}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
