export const siteConfig = {
  name: "Slim Ben Tanfous",
  title: "Portfolio | Cybersécurité",
  description: "Portfolio de Slim Ben Tanfous, étudiant ingénieur en cybersécurité. Découvrez mes projets, compétences et expériences en sécurité informatique.",
  keywords: [
    "cybersécurité",
    "développement",
    "portfolio",
    "ingénieur",
    "sécurité informatique",
    "Slim Ben Tanfous",
    "ESPRIT",
    "stage",
    "Python",
    "Java",
    "Next.js",
    "React",
    "TypeScript"
  ],
  author: {
    name: "Slim Ben Tanfous",
    email: "slim.bentanfous@esprit.tn",
    phone: "+216 23 17 77 05",
    location: "Tunis, Tunisie"
  },
  social: {
    linkedin: "https://linkedin.com/in/slim-ben-tanfous",
    github: "https://github.com/slim-ben-tanfous"
  },
  url: "https://slim-ben-tanfous.vercel.app",
  ogImage: "/og-image.jpg",
  links: {
    twitter: "",
    github: "https://github.com/slim-ben-tanfous",
    linkedin: "https://linkedin.com/in/slim-ben-tanfous"
  }
}

export const navigation = [
  { name: "Accueil", href: "#hero" },
  { name: "À propos", href: "#about" },
  { name: "Compétences", href: "#skills" },
  { name: "Expérience", href: "#experience" },
  { name: "Projets", href: "#projects" },
  { name: "Contact", href: "#contact" }
]

export const skills = {
  cybersecurity: [
    { name: "Wazuh", level: 90, description: "Surveillance et détection d'intrusions" },
    { name: "Security Onion", level: 85, description: "Plateforme de sécurité" },
    { name: "Kibana", level: 80, description: "Visualisation de données" },
    { name: "Wireshark", level: 85, description: "Analyse de trafic réseau" },
    { name: "Snort", level: 75, description: "Détection d'intrusions" }
  ],
  soar: [
    { name: "Shuffle", level: 80, description: "Automatisation de la sécurité" },
    { name: "TheHive", level: 75, description: "Gestion des incidents" },
    { name: "Cortex", level: 70, description: "Analyse de malwares" }
  ],
  networks: [
    { name: "Routage & Commutation", level: 90, description: "VLAN, OSPF, TCP/IP" },
    { name: "Protocoles", level: 85, description: "DHCP, DNS, SMTP, SFTP, LDAP" },
    { name: "Configuration LAN/WAN", level: 80, description: "Sécurisation des réseaux" },
    { name: "VPN & IPsec", level: 75, description: "Tunnels sécurisés" }
  ],
  programming: [
    { name: "Python", level: 90, description: "Scripts de sécurité, automatisation" },
    { name: "Bash", level: 85, description: "Scripts système" },
    { name: "Java", level: 80, description: "Applications desktop" },
    { name: "C++", level: 75, description: "Programmation système" },
    { name: "C#", level: 70, description: "Applications .NET" },
    { name: "PHP", level: 80, description: "Développement web" },
    { name: "HTML/CSS", level: 85, description: "Interfaces utilisateur" }
  ],
  databases: [
    { name: "MySQL", level: 85, description: "Base de données relationnelle" },
    { name: "Oracle DB", level: 80, description: "Base de données d'entreprise" },
    { name: "PostgreSQL", level: 75, description: "Base de données open source" }
  ],
  devops: [
    { name: "Git", level: 90, description: "Contrôle de version" },
    { name: "Docker", level: 80, description: "Conteneurisation" },
    { name: "Nmap", level: 85, description: "Scan de ports et vulnérabilités" },
    { name: "Zeek", level: 75, description: "Analyse de trafic réseau" }
  ],
  projectManagement: [
    { name: "Trello", level: 85, description: "Gestion de tâches" },
    { name: "Notion", level: 80, description: "Documentation et organisation" },
    { name: "GitHub", level: 90, description: "Collaboration et versioning" }
  ],
  softSkills: [
    { name: "Leadership", level: 85, description: "Encadrement d'équipe" },
    { name: "Travail en équipe", level: 90, description: "Collaboration efficace" },
    { name: "Adaptabilité", level: 88, description: "Flexibilité et réactivité" },
    { name: "Gestion du temps", level: 85, description: "Organisation et priorisation" },
    { name: "Gestion de projet", level: 80, description: "Planification et suivi" }
  ]
}

export const experiences = [
  {
    company: "BFI GROUPE",
    position: "Stagiaire – Virtualisation et Infrastructure",
    period: "Juin–Août 2025",
    location: "Tunisie",
    type: "Stage",
    achievements: [
      "Déploiement de Proxmox VE et migration de VMs depuis VMware ESXi",
      "Tests multi-OS (Windows Server, Oracle Linux, Oracle DB) et conversion de VMs en conteneurs LXC",
      "Configuration d'un cluster HA, mise en place de sauvegardes automatisées (VEEAM) et réalisation de tests SAN/NAS",
      "Automatisation via API REST et développement d'une application web en HTML/JS/CSS (création de VMs, quotas, supervision, RBAC)"
    ],
    technologies: ["Proxmox VE", "VMware ESXi", "VEEAM", "LXC", "API REST", "HTML/JS/CSS", "RBAC"]
  },
  {
    company: "BFPME",
    position: "Stagiaire Développement Logiciel",
    period: "Juin–Août 2024",
    location: "Tunisie",
    type: "Stage",
    achievements: [
      "Développé une app de gestion des congés adoptée par 50+ employés (JavaFX, MySQL)",
      "Implémenté une authentification faciale via AWS Rekognition",
      "Conçu une base MySQL évolutive avec interface utilisateur performante"
    ],
    technologies: ["JavaFX", "MySQL", "AWS Rekognition", "Java", "Facial Recognition"]
  },
  {
    company: "ACCESS CONTENT AGENCY",
    position: "Stagiaire Développement Web",
    period: "Août-Septembre 2022",
    location: "Tunisie",
    type: "Stage",
    achievements: [
      "Développement d'un Chatbot en utilisant ReactJS (intégration de l'API Messenger)",
      "Participation à des projets de design graphique avec Adobe Photoshop et Adobe Illustrator"
    ],
    technologies: ["ReactJS", "API Messenger", "Adobe Photoshop", "Adobe Illustrator", "JavaScript"]
  }
]

export const projects = [
  {
    title: "MurusSecure",
    subtitle: "Architecture de sécurité hospitalière",
    year: "2025",
    category: "Cybersécurité",
    description: "Conception et mise en œuvre d'une architecture réseau sécurisée pour un centre hospitalier avec orchestration d'outils de sécurité et détection d'anomalies basée sur l'IA.",
    features: [
      "Architecture réseau sécurisée pour infrastructure critique",
      "Orchestration et automatisation d'outils de sécurité",
      "Détection d'anomalies basée sur l'intelligence artificielle",
      "Analyse comportementale des malwares",
      "Rapports détaillés et tableaux de bord en temps réel",
      "Intégration avec les systèmes hospitaliers existants"
    ],
    technologies: ["Wazuh", "Security Onion", "Kibana", "Python", "Machine Learning", "Docker", "Kubernetes"],
    status: "En cours",
    github: "#",
    demo: "#"
  },
  {
    title: "Nova Insurance",
    subtitle: "Plateforme de gestion d'assurance",
    year: "2024",
    category: "Développement",
    description: "Application complète de gestion d'assurance développée en JavaFX puis adaptée en site web Symfony avec estimateur automatique basé sur l'IA.",
    features: [
      "Application desktop JavaFX avec interface moderne",
      "Migration vers plateforme web Symfony",
      "Estimateur automatique basé sur l'IA",
      "Gestion complète des polices d'assurance",
      "Système de calcul de primes intelligent",
      "Interface utilisateur responsive et intuitive"
    ],
    technologies: ["JavaFX", "Symfony", "PHP", "MySQL", "JavaScript", "CSS", "Machine Learning", "API REST"],
    status: "Terminé",
    github: "#",
    demo: "#"
  },
  {
    title: "S.M.A.R.T",
    subtitle: "Système de gestion hospitalière",
    year: "2023",
    category: "Développement Web",
    description: "Site web complet pour un centre hospitalier avec adaptation en application desktop QT Creator, intégrant gestion des patients et des rendez-vous.",
    features: [
      "Site web responsive avec gestion des patients",
      "Système de prise de rendez-vous en ligne",
      "Application desktop QT Creator",
      "Base de données sécurisée",
      "Interface adaptée au personnel médical",
      "Gestion des ressources hospitalières"
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "QT Creator", "C++"],
    status: "Terminé",
    github: "#",
    demo: "#"
  }
]

export const languages = [
  { name: "Français", level: "C1", color: "from-blue-400 to-blue-600" },
  { name: "Anglais", level: "C1", color: "from-green-400 to-green-600" },
  { name: "Allemand", level: "A2", color: "from-yellow-400 to-yellow-600" },
  { name: "Arabe", level: "Natif", color: "from-purple-400 to-purple-600" }
]

export const certifications = [
  {
    name: "CyberOps Associate",
    issuer: "Cisco",
    date: "Mai 2025",
    description: "Certification en cybersécurité et opérations de sécurité"
  },
  {
    name: "CCNA: Switching, Routing, and Wireless Essentials",
    issuer: "Cisco",
    date: "Septembre 2024",
    description: "Certification en réseaux et commutation"
  }
]
