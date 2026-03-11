import { useThemeStyles } from '../../hooks/useThemeStyles';

interface PageHeaderSectionProps {
  heading: string;
  description?: string;
}

export function PageHeaderSection({ heading, description }: PageHeaderSectionProps) {
  const { theme } = useThemeStyles();

  return (
    <header style={{ marginBottom: theme.spacing.lg, paddingBottom: theme.spacing.md, borderBottom: `2px solid ${theme.primaryColor}20` }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: theme.spacing.xs }}>
        {heading}
      </h1>
      {description && <p style={{ fontSize: '1rem', color: theme.textMuted, margin: 0 }}>{description}</p>}
    </header>
  );
}
