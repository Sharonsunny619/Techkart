interface StatsBarSectionProps {
  items: { label: string; value: string }[];
}

export function StatsBarSection({ items }: StatsBarSectionProps) {
  return (
    <section
      className="stats-bar gap-4 p-6 bg-surface rounded-lg border border-border"
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${items.length}, 1fr)`,
      }}
    >
      {items.map(item => (
        <div key={item.label} className="text-center">
          <div className="text-3xl font-extrabold text-primary">{item.value}</div>
          <div className="text-sm text-muted mt-1">{item.label}</div>
        </div>
      ))}
    </section>
  );
}
