import { useProducts } from '../../hooks/useProducts';
import { useThemeStyles } from '../../hooks/useThemeStyles';
import { Card } from '../Card';
import { Badge } from '../Badge';
import { Grid } from '../Grid';

interface FeaturedProductsSectionProps {
  heading: string;
  maxItems?: number;
  layout?: 'grid' | 'list';
}

export function FeaturedProductsSection({ heading, maxItems = 3 }: FeaturedProductsSectionProps) {
  const { products } = useProducts({ maxItems });
  const { theme } = useThemeStyles();

  return (
    <section style={{ marginBottom: theme.spacing.xl }}>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: theme.spacing.lg }}>
        {heading}
      </h2>
      <Grid columns={3}>
        {products.map(product => (
          <Card key={product.id} hoverable>
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: '100%',
                height: 180,
                objectFit: 'cover',
                borderRadius: `${theme.borderRadius} ${theme.borderRadius} 0 0`,
                marginBottom: theme.spacing.md,
              }}
            />
            <div style={{ padding: `0 ${theme.spacing.md} ${theme.spacing.md}` }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: theme.spacing.sm }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 600, margin: 0 }}>{product.name}</h3>
                <Badge
                  text={product.inStock ? 'In Stock' : 'Out of Stock'}
                  variant={product.inStock ? 'success' : 'danger'}
                />
              </div>
              <p style={{ fontSize: '0.85rem', color: theme.textMuted, marginBottom: theme.spacing.sm }}>
                {product.description}
              </p>
              <span style={{ fontSize: '1.1rem', fontWeight: 700, color: theme.primaryColor }}>
                ${product.price.toFixed(2)}
              </span>
            </div>
          </Card>
        ))}
      </Grid>
    </section>
  );
}
