import type { UserProfile } from "../types/data";

export const currentUser: UserProfile = {
  id: "u1",
  name: "Sharon Sunny",
  email: "sharon.sunny@example.com",
  avatar: "SS",
  bio: "React developer and tech enthusiast. Passionate about clean code, good design, and mechanical keyboards.",
  joinDate: "2023-06-15",
  stats: {
    orders: 24,
    wishlist: 8,
    reviews: 12,
  },
};
