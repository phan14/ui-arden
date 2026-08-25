import type { ReactNode } from 'react';

export interface NavItem {
  label: string;
  href: string;
  badge?: string;
  children?: { label: string; href: string; desc?: string }[];
}

export interface MetricItem {
  value: string;
  label: string;
  sublabel?: string;
  iconName?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  description: string;
  features: string[];
  image: string;
  badge?: string;
  moq?: string;
  time?: string;
  fabrics?: string[];
  techniques?: string[];
  detailUrl?: string;
}

export interface FactoryCapability {
  number: string;
  title: string;
  desc: string;
  iconName?: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  iconName?: string;
  badge?: string;
}

export interface WhyChooseItem {
  title: string;
  description: string;
  iconName?: string;
  badge?: string;
}

export interface ProjectSpec {
  label: string;
  value: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  slug: string;
  category: 'all' | 'tshirt' | 'shirt' | 'pants' | 'jacket' | 'uniform';
  categoryLabel: string;
  material: string;
  minOrder: string;
  image: string;
  gallery?: string[];
  client?: string;
  time?: string;
  specs?: ProjectSpec[];
  description?: string;
  highlights?: string[];
}

export interface ArticleAuthor {
  name: string;
  role: string;
  avatar: string;
}

export interface ArticleItem {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  content?: string;
  featured?: boolean;
  author?: ArticleAuthor;
  tags?: string[];
}

export interface CareerItem {
  id: string;
  title: string;
  department?: string;
  location?: string;
  type: string;
  salary: string;
  experience?: string;
  quantity?: number;
  desc?: string;
  description?: string;
  requirements: string[];
  benefits: string[];
}

export interface PolicySectionItem {
  id: string;
  title: string;
  iconName?: string;
  content: string | ReactNode;
}

export interface PolicyItem {
  id: string;
  title: string;
  slug: string;
  lastUpdated: string;
  content: { sectionTitle: string; items: string[] }[];
}

export interface FAQItem {
  id?: string;
  question: string;
  answer: string;
  category?: string;
}

export interface TestimonialItem {
  id: string;
  brandName: string;
  founderName: string;
  role: string;
  avatar: string;
  content: string;
  productType: string;
  quantity: string;
  rating: number;
}

export interface PriceEstimate {
  type: string;
  name: string;
  fabric: string;
  moq: string;
  priceRange: string;
  leadTime: string;
  note: string;
}

export interface PrintTechniqueItem {
  id: string;
  name: string;
  badge: string;
  desc: string;
  pros: string[];
  suitability: string;
  minQuantity: string;
  durability: string;
}

export interface SizeSpecItem {
  size: string;
  length: number;
  chest: number;
  shoulder: number;
  sleeve: number;
  weight: string;
  height: string;
}

export interface QuoteFormData {
  productType: string;
  customProduct?: string;
  quantity: string;
  fabricType: string;
  gsm: string;
  printingMethod: string[];
  hasDesign: 'yes' | 'no' | 'need_design';
  designFileUrl?: string;
  targetPrice?: string;
  targetDeadline?: string;
  notes: string;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  brandName?: string;
  address?: string;
}

export interface TrustBarItem {
  id: string;
  iconName: string;
  title: string;
  description: string;
  badge?: string;
}

export interface MOQTier {
  id: string;
  range: string;
  label: string;
  discount: string;
  leadTime: string;
  benefits: string[];
  recommendedFor: string;
  popular?: boolean;
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  description: string;
  iconName?: string;
  badge?: string;
}

export interface FactoryDepartment {
  id: string;
  title: string;
  capacity: string;
  equipment: string[];
  description: string;
  image: string;
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}
