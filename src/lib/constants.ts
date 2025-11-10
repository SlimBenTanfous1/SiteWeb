export const SITE_CONFIG = {
  name: 'Slim Ben Tanfous',
  title: 'Portfolio | Cybersécurité',
  description: 'Portfolio de Slim Ben Tanfous, étudiant ingénieur en cybersécurité. Découvrez mes projets, compétences et expériences en sécurité informatique.',
  url: 'https://slim-ben-tanfous.vercel.app',
  ogImage: '/og-image.jpg',
  author: {
    name: 'Slim Ben Tanfous',
    email: 'slim.bentanfous@esprit.tn',
    phone: '+216 23 17 77 05',
    location: 'Tunis, Tunisie'
  },
  social: {
    linkedin: 'https://linkedin.com/in/slim-ben-tanfous',
    github: 'https://github.com/slim-ben-tanfous',
  },
} as const

export const NAVIGATION_ITEMS = [
  { name: 'Accueil', href: '#hero' },
  { name: 'À propos', href: '#about' },
  { name: 'Compétences', href: '#skills' },
  { name: 'Expérience', href: '#experience' },
  { name: 'Projets', href: '#projects' },
  { name: 'Contact', href: '#contact' },
] as const

export const SKILL_CATEGORIES = [
  {
    id: 'cybersecurity',
    title: 'Cybersécurité',
    icon: 'Shield',
    color: 'from-red-400 to-red-600',
    borderColor: 'border-red-400/30',
  },
  {
    id: 'soar',
    title: 'SOAR & Réponse aux incidents',
    icon: 'Zap',
    color: 'from-orange-400 to-orange-600',
    borderColor: 'border-orange-400/30',
  },
  {
    id: 'networks',
    title: 'Réseaux',
    icon: 'Network',
    color: 'from-blue-400 to-blue-600',
    borderColor: 'border-blue-400/30',
  },
  {
    id: 'programming',
    title: 'Programmation',
    icon: 'Code',
    color: 'from-green-400 to-green-600',
    borderColor: 'border-green-400/30',
  },
  {
    id: 'databases',
    title: 'Bases de données',
    icon: 'Database',
    color: 'from-purple-400 to-purple-600',
    borderColor: 'border-purple-400/30',
  },
  {
    id: 'devops',
    title: 'DevOps & Supervision',
    icon: 'Terminal',
    color: 'from-cyan-400 to-cyan-600',
    borderColor: 'border-cyan-400/30',
  },
  {
    id: 'projectManagement',
    title: 'Gestion de projets',
    icon: 'GitBranch',
    color: 'from-pink-400 to-pink-600',
    borderColor: 'border-pink-400/30',
  },
  {
    id: 'softSkills',
    title: 'Compétences sociales',
    icon: 'Globe',
    color: 'from-yellow-400 to-yellow-600',
    borderColor: 'border-yellow-400/30',
  },
] as const

export const LANGUAGES = [
  { name: 'Français', level: 'C1', color: 'from-blue-400 to-blue-600' },
  { name: 'Anglais', level: 'C1', color: 'from-green-400 to-green-600' },
  { name: 'Allemand', level: 'A2', color: 'from-yellow-400 to-yellow-600' },
  { name: 'Arabe', level: 'Natif', color: 'from-purple-400 to-purple-600' },
] as const

export const CERTIFICATIONS = [
  {
    name: 'AWS Cloud Security Foundations',
    issuer: 'AWS',
    date: 'Novembre 2025',
    description: 'Compréhension des principes essentiels de la sécurité sur AWS : IAM, chiffrement, conformité et surveillance, pour renforcer la maîtrise des environnements cloud et multi-cloud sécurisés.',
  },
  {
    name: 'Oracle Cloud Infrastructure Foundations Associate',
    issuer: 'Oracle',
    date: 'Oracle 2025',
    description: 'Compréhension des fondamentaux du cloud computing, des modèles IaaS/PaaS, de la gestion des identités et des accès (IAM)',
  },
  {
    name: 'Hedera Hashgraph Associate',
    issuer: 'Hedera',
    date: 'Octobre 2025',
    description: 'Certification en blockchain',
  },
  {
    name: 'CyberOps Associate',
    issuer: 'Cisco',
    date: 'Mai 2025',
    description: 'Certification en cybersécurité et opérations de sécurité',
  },
  {
    name: 'CCNA: Switching, Routing, and Wireless Essentials',
    issuer: 'Cisco',
    date: 'Septembre 2024',
    description: 'Certification en réseaux et commutation',
  },
] as const

export const EXPERIENCES = [
  {
    company: 'BFI GROUPE',
    position: 'Stagiaire – Virtualisation et Infrastructure',
    period: 'Juin–Août 2025',
    location: 'Tunisie',
    type: 'Stage',
    achievements: [
      'Déploiement de Proxmox VE et migration de VMs depuis VMware ESXi',
      'Tests multi-OS (Windows Server, Oracle Linux, Oracle DB) et conversion de VMs en conteneurs LXC',
      'Configuration d\'un cluster HA, mise en place de sauvegardes automatisées (VEEAM) et réalisation de tests SAN/NAS',
      'Automatisation via API REST et développement d\'une application web en HTML/JS/CSS (création de VMs, quotas, supervision, RBAC)',
    ],
    technologies: ['Proxmox VE', 'VMware ESXi', 'VEEAM', 'LXC', 'API REST', 'HTML/JS/CSS', 'RBAC'],
  },
  {
    company: 'BFPME',
    position: 'Stagiaire Développement Logiciel',
    period: 'Juin–Août 2024',
    location: 'Tunisie',
    type: 'Stage',
    achievements: [
      'Développé une app de gestion des congés adoptée par 50+ employés (JavaFX, MySQL)',
      'Implémenté une authentification faciale via AWS Rekognition',
      'Conçu une base MySQL évolutive avec interface utilisateur performante',
    ],
    technologies: ['JavaFX', 'MySQL', 'AWS Rekognition', 'Java', 'Facial Recognition'],
  },
  {
    company: 'ACCESS CONTENT AGENCY',
    position: 'Stagiaire Développement Web',
    period: 'Août-Septembre 2022',
    location: 'Tunisie',
    type: 'Stage',
    achievements: [
      'Développement d\'un Chatbot en utilisant ReactJS (intégration de l\'API Messenger)',
      'Participation à des projets de design graphique avec Adobe Photoshop et Adobe Illustrator',
    ],
    technologies: ['ReactJS', 'API Messenger', 'Adobe Photoshop', 'Adobe Illustrator', 'JavaScript'],
  },
] as const

export const PROJECTS = [
  {
    title: 'MurusSecure',
    subtitle: 'Architecture de sécurité hospitalière',
    year: '2025',
    category: 'Cybersécurité',
    description: 'Conception et mise en œuvre d\'une architecture réseau sécurisée pour un centre hospitalier avec orchestration d\'outils de sécurité et détection d\'anomalies basée sur l\'IA.',
    features: [
      'Architecture réseau sécurisée pour infrastructure critique',
      'Orchestration et automatisation d\'outils de sécurité',
      'Détection d\'anomalies basée sur l\'intelligence artificielle',
      'Analyse comportementale des malwares',
      'Rapports détaillés et tableaux de bord en temps réel',
      'Intégration avec les systèmes hospitaliers existants',
    ],
    technologies: ['Wazuh', 'Security Onion', 'Kibana', 'Python', 'Machine Learning', 'Docker', 'Kubernetes'],
    status: 'En cours',
    github: '#',
    demo: '#',
  },
  {
    title: 'Nova Insurance',
    subtitle: 'Plateforme de gestion d\'assurance',
    year: '2024',
    category: 'Développement',
    description: 'Application complète de gestion d\'assurance développée en JavaFX puis adaptée en site web Symfony avec estimateur automatique basé sur l\'IA.',
    features: [
      'Application desktop JavaFX avec interface moderne',
      'Migration vers plateforme web Symfony',
      'Estimateur automatique basé sur l\'IA',
      'Gestion complète des polices d\'assurance',
      'Système de calcul de primes intelligent',
      'Interface utilisateur responsive et intuitive',
    ],
    technologies: ['JavaFX', 'Symfony', 'PHP', 'MySQL', 'JavaScript', 'CSS', 'Machine Learning', 'API REST'],
    status: 'Terminé',
    github: '#',
    demo: '#',
  },
  {
    title: 'S.M.A.R.T',
    subtitle: 'Système de gestion hospitalière',
    year: '2023',
    category: 'Développement Web',
    description: 'Site web complet pour un centre hospitalier avec adaptation en application desktop QT Creator, intégrant gestion des patients et des rendez-vous.',
    features: [
      'Site web responsive avec gestion des patients',
      'Système de prise de rendez-vous en ligne',
      'Application desktop QT Creator',
      'Base de données sécurisée',
      'Interface adaptée au personnel médical',
      'Gestion des ressources hospitalières',
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL', 'QT Creator', 'C++'],
    status: 'Terminé',
    github: '#',
    demo: '#',
  },
] as const

export const OTHER_PROJECTS = [
  {
    title: 'Système de Gestion des Congés',
    description: 'Application JavaFX avec authentification faciale AWS Rekognition',
    technologies: ['JavaFX', 'AWS Rekognition', 'MySQL'],
    status: 'Terminé',
  },
  {
    title: 'Chatbot Messenger',
    description: 'Bot conversationnel intégré à l\'API Messenger',
    technologies: ['ReactJS', 'API Messenger', 'Node.js'],
    status: 'Terminé',
  },
  {
    title: 'Plateforme de Virtualisation',
    description: 'Interface web pour gestion de VMs Proxmox',
    technologies: ['HTML/JS/CSS', 'Proxmox API', 'REST'],
    status: 'En cours',
  },
] as const

export const CONTACT_INFO = [
  {
    icon: 'Mail',
    label: 'Email',
    value: 'slim.bentanfous@esprit.tn',
    href: 'mailto:slim.bentanfous@esprit.tn',
    color: 'from-blue-400 to-blue-600',
  },
  {
    icon: 'Phone',
    label: 'Téléphone',
    value: '+216 23 17 77 05',
    href: 'tel:+21623177705',
    color: 'from-green-400 to-green-600',
  },
  {
    icon: 'MapPin',
    label: 'Localisation',
    value: 'Tunis, Tunisie',
    href: '#',
    color: 'from-purple-400 to-purple-600',
  },
] as const

export const SOCIAL_LINKS = [
  {
    name: 'LinkedIn',
    icon: 'Linkedin',
    href: 'https://linkedin.com/in/slim-ben-tanfous',
    color: 'from-blue-500 to-blue-700',
    hoverColor: 'hover:from-blue-400 hover:to-blue-600',
  },
  {
    name: 'GitHub',
    icon: 'Github',
    href: 'https://github.com/slim-ben-tanfous',
    color: 'from-gray-500 to-gray-700',
    hoverColor: 'hover:from-gray-400 hover:to-gray-600',
  },
] as const

export const STATS = [
  { label: 'Projets réalisés', value: '15+', icon: '🚀' },
  { label: 'Technologies maîtrisées', value: '20+', icon: '⚡' },
  { label: 'Années d\'expérience', value: '3+', icon: '🎯' },
  { label: 'Certifications', value: '2', icon: '🏆' },
] as const

export const ANIMATION_DELAYS = {
  hero: 0.2,
  about: 0.4,
  skills: 0.6,
  experience: 0.8,
  projects: 1.0,
  contact: 1.2,
} as const

export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const

export const Z_INDEX = {
  hide: -1,
  auto: 'auto',
  base: 0,
  docked: 10,
  dropdown: 1000,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  tooltip: 1800,
} as const

export const THEME_COLORS = {
  neon: {
    blue: '#00ffff',
    pink: '#ff0080',
    green: '#00ff00',
    purple: '#8000ff',
    orange: '#ff8000',
  },
  dark: {
    bg: '#0a0a0a',
    card: '#1a1a1a',
    border: '#333333',
  },
} as const
