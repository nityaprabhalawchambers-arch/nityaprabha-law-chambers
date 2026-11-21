export type ActivePage =
  | 'home'
  | 'about'
  | 'practices'
  | 'blog'
  | 'resources'
  | 'contact'
  | 'book-consultation'
  | 'privacy'
  | 'terms'
  | 'international-desk'
  | 'case-registry';

export interface PracticeArea {
  id: string;
  title: string;
  group: 'founders-brands' | 'individuals-families' | 'disputes' | 'cross-cutting';
  shortDesc: string;
  fullDesc: string;
  painPointNarrative: string;
  image?: string;
  heroImage?: string;
  forums?: string[];
  statutoryRoadmap: {
    step: string;
    title: string;
    description: string;
  }[];
  faq: {
    question: string;
    answer: string;
  }[];
  ctaText: string;
  trustSignals: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  type?: 'memo' | 'digest' | 'treatise';
  image?: string;
  summary: string;
  content: string;
  author: string;
  authorTitle: string;
  date: string;
  readTime: string;
  statutoryRef?: string;
  downloadable?: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'ip' | 'corporate' | 'litigation' | 'privacy';
}

export interface ResourceItem {
  id: string;
  title: string;
  type: 'guide' | 'checklist' | 'playbook' | 'calculator';
  description: string;
  gated: boolean;
  fileSize: string;
}

export interface RepresentativeMatter {
  id: string;
  discipline: 'IPR & Patents' | 'Corporate & Tax' | 'Commercial Disputes' | 'International & Cross-Border';
  forum: string;
  matterSummary: string;
  statutoryContext: string;
  outcome: string;
  leadCounsel: string;
}

export interface InternationalDeskCapability {
  id: string;
  title: string;
  focus: string;
  description: string;
  image?: string;
  applicableLaws: string[];
  keyForums: string[];
}

export interface PartnerBio {
  id: string;
  name: string;
  title: string;
  roleBadge: string;
  specialization: string;
  portrait: string;
  education: string;
  admissions: string;
  experience: string;
  summary: string;
  phone: string;
  email: string;
  memberships: string[];
  qualifications: string[];
  keyForums: string[];
  notableMatters: string[];
}

export interface ConsultationInquiry {
  name: string;
  email: string;
  phone: string;
  company?: string;
  practiceArea: string;
  preferredPartner?: string;
  urgency: 'routine' | 'urgent' | 'critical';
  details: string;
  conflictCheckAgreed: boolean;
  privacyAgreed: boolean;
}
