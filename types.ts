
export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  techStack: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  image: string;
  gallery?: string[];
  color: string;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}
