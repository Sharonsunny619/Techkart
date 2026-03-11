import { useProducts } from '../../hooks/useProducts';
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

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6">
        {heading}
      </h2>
      <Grid columns={3}>
        {products.map(product => (
          <Card key={product.id} hoverable>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-45 object-cover rounded-t-lg mb-4"
            />
            <div className="px-4 pb-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-base font-semibold m-0">{product.name}</h3>
                <Badge
                  text={product.inStock ? 'In Stock' : 'Out of Stock'}
                  variant={product.inStock ? 'success' : 'danger'}
                />
              </div>
              <p className="text-sm text-muted mb-2">
                {product.description}
              </p>
              <span className="text-lg font-bold text-primary">
                ${product.price.toFixed(2)}
              </span>
            </div>
          </Card>
        ))}
      </Grid>
    </section>
  );
}
