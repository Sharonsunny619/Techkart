import type React from "react";

export interface ThemeConfig {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  backgroundColor: string;
  surfaceColor: string;
  textColor: string;
  textMuted: string;
  borderRadius: string;
  fontFamily: string;
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
}

export interface NavItem {
  label: string;
  path: string;
  icon?: React.ReactNode | string;
}

export interface SectionConfig {
  type: string;
  props: Record<string, unknown>;
}

export interface PageConfig {
  path: string;
  title: string;
  sections: SectionConfig[];
}

export interface AppConfig {
  siteName: string;
  theme: ThemeConfig;
  navigation: NavItem[];
  pages: PageConfig[];
}
