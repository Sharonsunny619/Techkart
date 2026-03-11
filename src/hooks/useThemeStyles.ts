import { useThemeContext } from '../context/ThemeContext';

export function useThemeStyles() {
  const { theme, themeName } = useThemeContext();

  const cssVariables: Record<string, string> = {
    '--color-primary': theme.primaryColor,
    '--color-secondary': theme.secondaryColor,
    '--color-accent': theme.accentColor,
    '--color-bg': theme.backgroundColor,
    '--color-surface': theme.surfaceColor,
    '--color-text': theme.textColor,
    '--color-text-muted': theme.textMuted,
    '--radius': theme.borderRadius,
    '--font-family': theme.fontFamily,
    '--spacing-xs': theme.spacing.xs,
    '--spacing-sm': theme.spacing.sm,
    '--spacing-md': theme.spacing.md,
    '--spacing-lg': theme.spacing.lg,
    '--spacing-xl': theme.spacing.xl,
  };

  const borderColor = themeName === 'dark' ? '#334155' : '#e2e8f0';

  const cardStyle = {
    backgroundColor: theme.surfaceColor,
    color: theme.textColor,
    borderRadius: theme.borderRadius,
    border: `1px solid ${borderColor}`,
  };

  return { cssVariables, cardStyle, theme, themeName, borderColor };
}
