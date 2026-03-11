import { useProducts } from '../../hooks/useProducts';
import { useThemeStyles } from '../../hooks/useThemeStyles';
import { Card } from '../Card';
import { Badge } from '../Badge';
import { Button } from '../Button';
import { Grid } from '../Grid';
import type { CSSProperties } from 'react';

interface ProductGridSectionProps {
  columns?: number;
  showFilters?: boolean;
  layout?: 'grid' | 'list';
}

function ratingStars(rating: number) {
  const full = Math.floor(rating);
  return '★'.repeat(full) + '☆'.repeat(5 - full);
}

export function ProductGridSection({ columns = 3, showFilters }: ProductGridSectionProps) {
  const { products, categories, activeCategory, setActiveCategory, searchQuery, setSearchQuery } = useProducts();
  const { theme, themeName } = useThemeStyles();

  const inputStyle: CSSProperties = {
    padding: `${theme.spacing.sm} ${theme.spacing.md}`,
    borderRadius: theme.borderRadius,
    border: `1px solid ${themeName === 'dark' ? '#475569' : '#cbd5e1'}`,
    backgroundColor: theme.surfaceColor,
    color: theme.textColor,
    fontSize: '0.9rem',
    fontFamily: theme.fontFamily,
    width: 260,
  };

  return (
    <section>
      {showFilters && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: theme.spacing.sm, marginBottom: theme.spacing.lg, alignItems: 'center' }}>
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            style={inputStyle}
          />
          <Button
            variant={activeCategory === null ? 'primary' : 'ghost'}
            onClick={() => setActiveCategory(null)}
          >
            All
          </Button>
          {categories.map(cat => (
            <Button
              key={cat}
              variant={activeCategory === cat ? 'primary' : 'ghost'}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </Button>
          ))}
        </div>
      )}

      {products.length === 0 ? (
        <p style={{ textAlign: 'center', color: theme.textMuted, padding: theme.spacing.xl }}>
          No products match your criteria.
        </p>
      ) : (
        <Grid columns={columns}>
          {products.map(product => (
            <Card key={product.id} hoverable>
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: '100%',
                  height: 200,
                  objectFit: 'cover',
                  borderRadius: `${theme.borderRadius} ${theme.borderRadius} 0 0`,
                }}
              />
              <div style={{ padding: theme.spacing.md }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: theme.spacing.sm }}>
                  {product.name}
                </h3>
                <p style={{ fontSize: '0.85rem', color: theme.textMuted, marginBottom: theme.spacing.sm }}>
                  {product.description}
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '1.15rem', fontWeight: 700, color: theme.primaryColor }}>
                    ${product.price.toFixed(2)}
                  </span>
                  <Badge
                    text={product.inStock ? 'In Stock' : 'Sold Out'}
                    variant={product.inStock ? 'success' : 'danger'}
                  />
                </div>
                <div style={{ marginTop: theme.spacing.sm, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: theme.accentColor, letterSpacing: 1 }}>
                    {ratingStars(product.rating)}
                  </span>
                  <span style={{ fontSize: '0.8rem', color: theme.textMuted }}>{product.category}</span>
                </div>
              </div>
            </Card>
          ))}
        </Grid>
      )}
    </section>
  );
}
