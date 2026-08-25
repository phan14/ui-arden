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
}

export interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  description: string;
  features: string[];
  image: string;
  badge?: string;
}

export interface FactoryCapability {
  title: string;
  desc: string;
  iconName?: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  iconName?: string;
}

export interface WhyChooseItem {
  title: string;
  description: string;
  iconName?: string;
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
  specs?: { label: string; value: string }[];
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
}

export interface CareerItem {
  id: string;
  title: string;
  type: string;
  salary: string;
  experience: string;
  quantity: number;
  description: string;
  requirements: string[];
  benefits: string[];
}

export interface PolicyItem {
  id: string;
  title: string;
  slug: string;
  lastUpdated: string;
  content: { sectionTitle: string; items: string[] }[];
}

export interface FAQItem {
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
