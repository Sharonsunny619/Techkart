import { createContext, useContext } from 'react';
import type { UserProfile } from '../types/data';

interface UserContextValue {
  user: UserProfile;
  updateUser: (updates: Partial<UserProfile>) => void;
}

export const UserContext = createContext<UserContextValue | null>(null);

export function useUserContext() {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error('useUserContext needs UserProvider as a parent');
  return ctx;
}
