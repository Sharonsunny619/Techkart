import type { AppConfig } from '../types/config';

const appConfig: AppConfig = {
  siteName: 'TechKart',
  theme: {
    primaryColor: '#2563eb',
    secondaryColor: '#1e40af',
    accentColor: '#f59e0b',
    backgroundColor: '#f8fafc',
    surfaceColor: '#ffffff',
    textColor: '#0f172a',
    textMuted: '#64748b',
    borderRadius: '8px',
    fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
    spacing: {
      xs: '4px',
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '48px',
    },
  },
  navigation: [
    { label: 'Home', path: '/' },
    { label: 'Products', path: '/products' },
    { label: 'Profile', path: '/profile' },
  ],
  pages: [
    {
      path: '/',
      title: 'Home',
      sections: [
        {
          type: 'hero',
          props: {
            heading: 'Welcome to TechKart',
            subheading: 'Curated tech gear for developers and creators.',
            ctaText: 'Browse Products',
            ctaLink: '/products',
          },
        },
        {
          type: 'featuredProducts',
          props: {
            heading: 'Featured Products',
            maxItems: 3,
            layout: 'grid',
          },
        },
        {
          type: 'statsBar',
          props: {
            items: [
              { label: 'Products', value: '120+' },
              { label: 'Happy Customers', value: '4,500+' },
              { label: 'Categories', value: '15' },
              { label: 'Brands', value: '40+' },
            ],
          },
        },
      ],
    },
    {
      path: '/products',
      title: 'Products',
      sections: [
        {
          type: 'pageHeader',
          props: {
            heading: 'All Products',
            description: 'Explore our full catalog of carefully selected tech gear.',
          },
        },
        {
          type: 'productGrid',
          props: {
            layout: 'grid',
            columns: 3,
            showFilters: true,
          },
        },
      ],
    },
    {
      path: '/profile',
      title: 'Profile',
      sections: [
        {
          type: 'pageHeader',
          props: {
            heading: 'Your Profile',
            description: 'Manage your account and preferences.',
          },
        },
        {
          type: 'userCard',
          props: {
            layout: 'horizontal',
            showStats: true,
          },
        },
        {
          type: 'profileDetails',
          props: {
            editable: true,
          },
        },
      ],
    },
  ],
};

export default appConfig;
