import { useThemeStyles } from '../../hooks/useThemeStyles';

interface StatsBarSectionProps {
  items: { label: string; value: string }[];
}

export function StatsBarSection({ items }: StatsBarSectionProps) {
  const { theme, borderColor } = useThemeStyles();

  return (
    <section
      className="stats-bar"
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${items.length}, 1fr)`,
        gap: theme.spacing.md,
        padding: theme.spacing.lg,
        backgroundColor: theme.surfaceColor,
        borderRadius: theme.borderRadius,
        border: `1px solid ${borderColor}`,
      }}
    >
      {items.map(item => (
        <div key={item.label} style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '1.75rem', fontWeight: 800, color: theme.primaryColor }}>
            {item.value}
          </div>
          <div style={{ fontSize: '0.85rem', color: theme.textMuted, marginTop: theme.spacing.xs }}>
            {item.label}
          </div>
        </div>
      ))}
    </section>
  );
}
