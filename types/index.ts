/* ============================================================
   HeLiPet Open Top Pro Plus — Type Definitions
   ============================================================ */

import type { LucideIcon } from 'lucide-react';

/** Navigation link item */
export interface NavItem {
  label: string;
  href: string;
}

/** Problem card data */
export interface ProblemItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

/** Feature card data */
export interface FeatureItem {
  icon: LucideIcon;
  title: string;
  description: string;
  badge?: string;
}

/** How-it-works step */
export interface StepItem {
  icon: LucideIcon;
  title: string;
  description: string;
  step: number;
}

/** Smart feature grid item */
export interface SmartFeatureItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

/** Product gallery image */
export interface GalleryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

/** Specification row */
export interface SpecItem {
  label: string;
  value: string;
  icon: LucideIcon;
}

/** Comparison item */
export interface ComparisonItem {
  feature: string;
  traditional: string;
  helipet: string;
  traditionalStatus: 'negative' | 'neutral';
  helipetStatus: 'positive' | 'neutral';
}

/** Customer review */
export interface ReviewItem {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  text: string;
  date: string;
  petName?: string;
}

/** FAQ item */
export interface FAQItem {
  question: string;
  answer: string;
}

/** Registration form data */
export interface RegistrationFormData {
  name: string;
  phone: string;
  email: string;
  address: string;
  message?: string;
}

/** Chatbot message */
export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

/** Social link */
export interface SocialLink {
  icon: LucideIcon;
  href: string;
  label: string;
}

/** Footer link group */
export interface FooterLinkGroup {
  title: string;
  links: { label: string; href: string }[];
}

/** Analytics event types */
export type AnalyticsEventType =
  | 'cta_click'
  | 'scroll_depth'
  | 'form_submit'
  | 'chatbot_open'
  | 'gallery_view'
  | 'faq_expand';

/** Analytics event payload */
export interface AnalyticsEvent {
  type: AnalyticsEventType;
  label: string;
  value?: string | number;
  timestamp: Date;
}

/** Theme mode */
export type ThemeMode = 'light' | 'dark';
