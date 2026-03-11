import type { UserProfile } from '../types/data';

export const currentUser: UserProfile = {
  id: 'u1',
  name: 'Alex Morgan',
  email: 'alex.morgan@example.com',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
  bio: 'Full-stack developer and tech enthusiast. Passionate about clean code, good design, and mechanical keyboards.',
  joinDate: '2023-06-15',
  stats: {
    orders: 24,
    wishlist: 8,
    reviews: 12,
  },
};
