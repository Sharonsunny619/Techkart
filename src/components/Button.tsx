import type { CSSProperties, ReactNode } from 'react';
import { useThemeStyles } from '../hooks/useThemeStyles';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  onClick?: () => void;
  style?: CSSProperties;
  type?: 'button' | 'submit';
}

export function Button({ children, variant = 'primary', onClick, style, type = 'button' }: ButtonProps) {
  const { theme } = useThemeStyles();

  const base: CSSProperties = {
    padding: `${theme.spacing.sm} ${theme.spacing.lg}`,
    borderRadius: theme.borderRadius,
    fontFamily: theme.fontFamily,
    fontSize: '0.9rem',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    border: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    gap: theme.spacing.sm,
  };

  const variantStyles: Record<string, CSSProperties> = {
    primary: { backgroundColor: theme.primaryColor, color: '#fff' },
    secondary: {
      backgroundColor: 'transparent',
      color: theme.primaryColor,
      border: `1.5px solid ${theme.primaryColor}`,
    },
    ghost: { backgroundColor: 'transparent', color: theme.textMuted },
  };

  return (
    <button
      type={type}
      className={`btn btn--${variant}`}
      style={{ ...base, ...variantStyles[variant], ...style }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
