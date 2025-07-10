export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'design' | 'other';
  icon?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  github?: string;
  featured: boolean;
}

export interface Certificate {
  id: string;
  title: string;
  organization: string;
  date: string;
  description: string;
  image?: string;
  link?: string;
}

export interface NavItem {
  name: string;
  href: string;
}

export interface Social {
  name: string;
  url: string;
  icon: string;
}