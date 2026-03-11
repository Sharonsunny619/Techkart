import { useThemeContext } from '../context/ThemeContext';

export function useThemeStyles() {
  const { theme, themeName } = useThemeContext();

   const cssVariables: Record<string, string> = {
    '--color-primary': theme.primaryColor,
    '--color-secondary': theme.secondaryColor,
    '--color-accent': theme.accentColor,
    '--color-background': theme.backgroundColor,
    '--color-surface': theme.surfaceColor,
    '--color-foreground': theme.textColor,
    '--color-muted': theme.textMuted,
    '--color-border': themeName === 'dark' ? '#334155' : '#e2e8f0',
    '--font-body': theme.fontFamily,
  };

  return { cssVariables, theme, themeName };
}
