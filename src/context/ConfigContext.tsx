import { createContext, useContext } from 'react';
import type { AppConfig, PageConfig } from '../types/config';

interface ConfigContextValue {
  config: AppConfig;
  getPageConfig: (path: string) => PageConfig | undefined;
}

export const ConfigContext = createContext<ConfigContextValue | null>(null);

export function useConfigContext() {
  const ctx = useContext(ConfigContext);
  if (!ctx) throw new Error('useConfigContext must be used inside ConfigProvider');
  return ctx;
}
