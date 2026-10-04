export type Locale = "pt" | "en" | "es";
export interface Project {
  id: string;
  name: string;
  description: string;
  tags: string[];
  image: string;
  links: string[];
}
export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  contributions: string[];
  certificates: string[];
}
export interface Certificate {
  id: string;
  title: string;
  institution: string;
}
export interface Content {
  title: string;
  about: string[];
  projects: Project[];
  experiences: Experience[];
  education: { title: string; institution: string; period: string }[];
  awards: { title: string; event: string; year: string }[];
  certifications: Certificate[];
  activities: string[];
  otherSkills: string[];
  languages: { name: string; level: string }[];
}
