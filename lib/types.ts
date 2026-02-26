export type KycStatus = "not_started" | "pending" | "verified";

export interface UIThemeMode {
  primary: string;
  text: string;
  textLight: string;
  background: string;
  backgroundSoft: string;
  border: string;
}

export interface UITheme {
  mode: "light" | "dark";
  light: UIThemeMode;
  dark: UIThemeMode;
}

export interface UIUser {
  name: string;
  kycStatus: KycStatus;
}

export interface UINavItem {
  label: string;
  route: string;
  external?: boolean;
  badge?: string;
}


export type UINavSection =
  | {
      label: string;
      items: UINavItem[];
    }
  | {
      label: string;
      route: string;
      badge?: string;
      external?: boolean;
    };

export interface UIInfoCard {
  id: string;
  title: string;
  description: string;
  color?: string;
  action?: string;
}

export interface UIAlert {
  id: string;
  type: "kyc" | "system" | "promo";
  title: string;
  description: string;
  ctaLabel?: string;
  ctaRoute?: string;
  visibleWhenKyc?: KycStatus[];
}

export interface UIConfig {
  logo: string;
  theme: UITheme;
  user: UIUser;
  balance: string;
  alerts: UIAlert[];
  nav: UINavSection[];
  infoCards: UIInfoCard[];
  footer: UIFooter;
}

export interface Account {
  id: string;
  type: string;
  platform: string;
  balance: string;
  currency: string;
  live_account: boolean;
}

export interface AccountsResponse {
accounts: Account[]
}

export interface UIFooter {
  leftText: string[];
  links: { label: string; url: string }[];
  copyright: string;
}