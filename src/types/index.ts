// =============================================================================
// Tipos centrais do Portfolio Web — espelham os schemas Zod da Portfolio API
// Ref: spec 00 § 5 (Tipos)
// =============================================================================

export type TechCategory = "language" | "frontend" | "backend" | "database" | "tools";

export type Technology = {
  slug: string;
  name: string;
  category: TechCategory;
  showInSkills: boolean;
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  cover: { src: string; alt: string };
  gallery: unknown[];
  technologies: Technology[];
  features: string[];
  links: { github: string; live: string | null };
  featured: boolean;
  order: number;
};

export type Language = {
  name: string;
  level: string;
  levelLabel: string;
};

export type Degree = {
  institution: string;
  course: string;
  status: string;
  expectedEnd?: string;
};

export type Course = {
  name: string;
  institution: string;
  hours: number;
};

export type Experience = {
  company: string;
  role: string;
  start: string;
  end?: string;
  description: string;
};

export type Contact = {
  type: string;
  name: string;
  handle: string;
  url: string;
};

export type Profile = {
  name: string;
  role: string;
  slogan: string;
  location: string;
  availability: string;
  about: string;
  photos: {
    hero: string;
    about: string;
  };
  languages: Language[];
  education: {
    degrees: Degree[];
    courses: Course[];
  };
  experience: Experience[];
  contacts: Contact[];
};

export type Portfolio = {
  profile: Profile;
  projects: Project[];
  technologies: Technology[];
};
