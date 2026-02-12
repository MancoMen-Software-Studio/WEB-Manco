export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  features: string[];
  technologies: string[];
  process: ProcessStep[];
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  technologies: string[];
  stats: ProjectStat[];
  challenge: string;
  solution: string;
  results: string;
  image: string;
  color: string;
}

export interface ProjectStat {
  label: string;
  value: string;
}

export interface Technology {
  name: string;
  category: TechCategory;
}

export type TechCategory =
  | "frontend"
  | "backend"
  | "cloud"
  | "database"
  | "devops"
  | "xr";

export interface CompanyValue {
  title: string;
  description: string;
  icon: string;
}

export interface MethodologyStep {
  number: string;
  title: string;
  description: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
}
