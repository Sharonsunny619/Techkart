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
      className="text-center px-6 py-12 rounded-lg mb-12"
      style={{ background: bg }}
    >
      <h1 className="text-4xl font-extrabold mb-4">
         {heading}
      </h1>
      <p className="text-lg text-muted max-w-xl mx-auto mb-6">
        {subheading}
      </p>
      {ctaText && (
        <Button onClick={() => ctaLink && navigate(ctaLink)}>{ctaText}</Button>
      )}
    </section>
  );
}
