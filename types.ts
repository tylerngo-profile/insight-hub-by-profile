export interface NavItem {
  label: string;
  href: string;
}

export interface FeatureStep {
  number: string;
  title: string;
  description: string;
}

export interface PricingTier {
  name: string;
  description: string;
  price: string;
  features: string[];
  cta: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}
