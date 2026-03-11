import { useThemeStyles } from '../hooks/useThemeStyles';

interface BadgeProps {
  text: string;
  variant?: 'default' | 'success' | 'warning' | 'danger';
}

const BADGE_COLORS: Record<string, { bg: string; text: string }> = {
  success: { bg: '#dcfce7', text: '#166534' },
  warning: { bg: '#fef3c7', text: '#92400e' },
  danger: { bg: '#fee2e2', text: '#991b1b' },
};

export function Badge({ text, variant = 'default' }: BadgeProps) {
  const { theme } = useThemeStyles();

  
  const colors = BADGE_COLORS[variant] ?? {
    bg: `${theme.primaryColor}18`,
    text: theme.primaryColor,
  };

  return (
    <span
      style={{
        display: 'inline-block',
        padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
        borderRadius: '999px',
        fontSize: '0.75rem',
        fontWeight: 600,
        backgroundColor: colors.bg,
        color: colors.text,
      }}
    >
      {text}
    </span>
  );
}
