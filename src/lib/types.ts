export interface Skill {
  name: string
  level: number
  description: string
}

export interface SkillCategory {
  id: string
  title: string
  icon: string
  color: string
  borderColor: string
  skills: Skill[]
}

export interface Experience {
  company: string
  position: string
  period: string
  location: string
  type: string
  achievements: string[]
  technologies: string[]
}

export interface Project {
  title: string
  subtitle: string
  year: string
  category: string
  description: string
  features: string[]
  technologies: string[]
  status: 'En cours' | 'Terminé' | 'En pause'
  github: string
  demo: string
}

export interface ContactInfo {
  icon: string
  label: string
  value: string
  href: string
  color: string
}

export interface SocialLink {
  name: string
  icon: string
  href: string
  color: string
  hoverColor: string
}

export interface Language {
  name: string
  level: string
  color: string
}

export interface Certification {
  name: string
  issuer: string
  date: string
  description: string
}

export interface Stat {
  label: string
  value: string
  icon: string
}

export interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

export interface AnimationVariants {
  initial: any
  animate: any
  exit?: any
  hover?: any
  tap?: any
}

export interface ThemeColors {
  neon: {
    blue: string
    pink: string
    green: string
    purple: string
    orange: string
  }
  dark: {
    bg: string
    card: string
    border: string
  }
}

export interface SiteConfig {
  name: string
  title: string
  description: string
  url: string
  ogImage: string
  author: {
    name: string
    email: string
    phone: string
    location: string
  }
  social: {
    linkedin: string
    github: string
  }
}
