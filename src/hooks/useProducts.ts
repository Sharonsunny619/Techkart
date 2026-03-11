import { useState, useMemo } from 'react';
import { products as allProducts } from '../data/products';

interface UseProductsOptions {
  maxItems?: number;
}

export function useProducts(options: UseProductsOptions = {}) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = useMemo(() => {
    return [...new Set(allProducts.map(p => p.category))].sort();
  }, []);

  const products = useMemo(() => {
    let result = allProducts;

    if (activeCategory) {
      result = result.filter(p => p.category === activeCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        p => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)
      );
    }

    return options.maxItems ? result.slice(0, options.maxItems) : result;
  }, [activeCategory, searchQuery, options.maxItems]);

  return {
    products,
    categories,
    activeCategory,
    setActiveCategory,
    searchQuery,
    setSearchQuery,
    totalCount: allProducts.length,
  };
}
