import { useNavigate } from 'react-router-dom';
import { Button } from '../Button';
import { useThemeStyles } from '../../hooks/useThemeStyles';

interface HeroSectionProps {
  heading: string;
  subheading: string;
  ctaText?: string;
  ctaLink?: string;
}

export function HeroSection({ heading, subheading, ctaText, ctaLink }: HeroSectionProps) {
  const navigate = useNavigate();
  const { theme, themeName } = useThemeStyles();

  const bg = themeName === 'dark'
    ? `linear-gradient(135deg, ${theme.surfaceColor} 0%, #1a2744 100%)`
    : `linear-gradient(135deg, ${theme.primaryColor}08 0%, ${theme.primaryColor}15 100%)`;

  return (
    <section
      style={{
        textAlign: 'center',
        padding: `${theme.spacing.xl} ${theme.spacing.lg}`,
        background: bg,
        borderRadius: theme.borderRadius,
        marginBottom: theme.spacing.xl,
      }}
    >
      <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: theme.spacing.md }}>
         {heading}
      </h1>
      <p style={{ fontSize: '1.15rem', color: theme.textMuted, maxWidth: 560, margin: `0 auto ${theme.spacing.lg}` }}>
        {subheading}
      </p>
      {ctaText && (
        <Button onClick={() => ctaLink && navigate(ctaLink)}>{ctaText}</Button>
      )}
    </section>
  );
}
