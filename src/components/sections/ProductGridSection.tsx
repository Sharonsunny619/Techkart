import { useProducts } from '../../hooks/useProducts';
import { Card } from '../Card';
import { Badge } from '../Badge';
import { Grid } from '../Grid';

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

  return (
    <section>
      {showFilters && (
        <div className="flex flex-wrap items-center justify-between mb-6">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="py-2 px-4 rounded-lg border border-border bg-surface text-foreground text-sm font-body w-full sm:w-65 mb-4 block"
          />
          <div className="flex gap-6 overflow-x-auto scrollbar-none">
            <button
              onClick={() => setActiveCategory(null)}
              className={`pb-2 text-sm font-semibold cursor-pointer shrink-0 transition-colors duration-200 -mb-px ${
                activeCategory === null
                  ? 'text-primary border-primary'
                  : 'text-muted border-transparent hover:text-foreground'
              }`}
            >
              All
            </button>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`pb-2 text-sm font-semibold cursor-pointer shrink-0 transition-colors duration-200 -mb-px ${
                  activeCategory === cat
                    ? 'text-primary border-primary'
                    : 'text-muted border-transparent hover:text-foreground'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      )}

      {products.length === 0 ? (
        <p className="text-center text-muted py-12">No products match your criteria.</p>
      ) : (
        <Grid columns={columns}>
          {products.map(product => (
            <Card key={product.id} hoverable>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-50 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-base font-semibold mb-2">{product.name}</h3>
                <p className="text-sm text-muted mb-2">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-primary">
                    ${product.price.toFixed(2)}
                  </span>
                  <Badge
                    text={product.inStock ? 'In Stock' : 'Sold Out'}
                    variant={product.inStock ? 'success' : 'danger'}
                  />
                </div>
                <div className="mt-2 flex justify-between items-center">
                  <span className="text-accent tracking-wide">{ratingStars(product.rating)}</span>
                  <span className="text-xs text-muted">{product.category}</span>
                </div>
              </div>
            </Card>
          ))}
        </Grid>
      )}
    </section>
  );
}
