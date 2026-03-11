import { useState, type ReactNode } from 'react';
import type { AppConfig } from '../types/config';
import type { UserProfile } from '../types/data';
import { ConfigContext } from './ConfigContext';
import { ThemeContext } from './ThemeContext';
import { UserContext } from './UserContext';
import { lightTheme, darkTheme } from '../config/themes';
import { currentUser } from '../data/user';

interface AppProvidersProps {
  config: AppConfig;
  children: ReactNode;
}

export function AppProviders({ config, children }: AppProvidersProps) {
  const [themeName, setThemeName] = useState<'light' | 'dark'>('light');
  const [user, setUser] = useState<UserProfile>(currentUser);

  const theme = themeName === 'light' ? lightTheme : darkTheme;

  function toggleTheme() {
    setThemeName(prev => (prev === 'light' ? 'dark' : 'light'));
  }

  function getPageConfig(path: string) {
    return config.pages.find(p => p.path === path);
  }

  function updateUser(updates: Partial<UserProfile>) {
    setUser(prev => ({ ...prev, ...updates }));
  }

  return (
    <ConfigContext.Provider value={{ config, getPageConfig }}>
      <ThemeContext.Provider value={{ theme, themeName, toggleTheme }}>
        <UserContext.Provider value={{ user, updateUser }}>
          {children}
        </UserContext.Provider>
      </ThemeContext.Provider>
    </ConfigContext.Provider>
  );
}
