import { useUserContext } from '../../context/UserContext';
import { useThemeStyles } from '../../hooks/useThemeStyles';
import { Card } from '../Card';

interface UserCardSectionProps {
  layout?: 'horizontal' | 'vertical';
  showStats?: boolean;
}

export function UserCardSection({ layout = 'horizontal', showStats }: UserCardSectionProps) {
  const { user } = useUserContext();
  const { theme, themeName } = useThemeStyles();

  const horizontal = layout === 'horizontal';

  return (
    <Card style={{ marginBottom: theme.spacing.lg, overflow: 'hidden' }}>
      <div
        className="user-card__inner"
        style={{
          display: 'flex',
          flexDirection: horizontal ? 'row' : 'column',
          alignItems: 'center',
          gap: theme.spacing.lg,
          padding: theme.spacing.lg,
        }}
      >
        <img
          src={user.avatar}
          alt={user.name}
          style={{
            width: 100, height: 100,
            borderRadius: '50%',
            objectFit: 'cover',
            border: `3px solid ${theme.primaryColor}`,
          }}
        />
        <div style={{ flex: 1 }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, margin: `0 0 ${theme.spacing.xs}` }}>
            {user.name}
          </h2>
          <p style={{ color: theme.textMuted, margin: `0 0 ${theme.spacing.xs}`, fontSize: '0.9rem' }}>
            {user.email}
          </p>
          <p style={{ color: theme.textMuted, margin: 0, fontSize: '0.9rem' }}>
            {user.bio}
          </p>
        </div>
      </div>

      {showStats && (
        <div
          className="user-card__stats"
          style={{ display: 'flex', gap: theme.spacing.md, padding: `0 ${theme.spacing.lg} ${theme.spacing.lg}` }}
        >
          {Object.entries(user.stats).map(([key, val]) => (
            <div
              key={key}
              style={{
                textAlign: 'center',
                padding: `${theme.spacing.md} ${theme.spacing.lg}`,
                backgroundColor: themeName === 'dark' ? '#0f172a' : '#f8fafc',
                borderRadius: theme.borderRadius,
                flex: 1,
              }}
            >
              <div style={{ fontSize: '1.5rem', fontWeight: 800, color: theme.primaryColor }}>{val}</div>
              <div style={{ fontSize: '0.8rem', color: theme.textMuted, textTransform: 'capitalize', marginTop: theme.spacing.xs }}>
                {key}
              </div>
            </div>
          ))}
        </div>
      )}
    </Card>
  );
}
