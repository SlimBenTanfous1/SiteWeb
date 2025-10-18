'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { 
  Shield, 
  Award, 
  Building2, 
  ExternalLink, 
  Github, 
  Eye,
  Code,
  Server,
  Brain,
  Database,
  Network,
  Lock,
  X
} from 'lucide-react'

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [lightbox, setLightbox] = useState<null | { src: string; alt: string }>(null)

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setLightbox(null)
    }
    if (lightbox) {
      document.addEventListener('keydown', onKey)
      return () => document.removeEventListener('keydown', onKey)
    }
  }, [lightbox])

  const featuredProjects = [
    {
      title: 'HealthCare-app',
      subtitle: 'API REST sécurisée et pipeline DevSecOps',
      year: '2025',
      category: 'DevSecOps',
      icon: Server,
      color: 'from-green-400 to-green-600',
      borderColor: 'border-green-400/30',
      bgGradient: 'from-green-500/10 to-green-600/5',
      description: "API Flask sécurisée (JWT) avec PostgreSQL et documentation Swagger, intégrée dans un pipeline CI/CD complet et déployée en Docker.",
      longDescription: "Développement d'une API REST avec Flask et PostgreSQL mettant l'accent sur la sécurité (authentification/autorisation JWT) et la qualité (tests Pytest, couverture suivie par Codecov). Mise en place d'un pipeline GitHub Actions pour tests, mesure de couverture, build et push des images Docker, avec configurations multi-environnements (dev, staging, prod).",
      features: [
        'Authentification et autorisation sécurisées via JWT',
        'Base de données PostgreSQL avec visualisation pgAdmin',
        'Documentation interactive Swagger/Flasgger',
        'Tests unitaires Pytest + suivi de couverture Codecov',
        'CI/CD GitHub Actions: tests, coverage, build & push Docker',
        'Déploiement Docker avec configs multi-environnements'
      ],
      technologies: ['Flask', 'PostgreSQL', 'JWT', 'Swagger', 'Flasgger', 'Pytest', 'Codecov', 'GitHub Actions', 'Docker'],
      status: 'Terminé',
      github: '#',
      demo: '#',
      image: '/Diagram.png'
    },
    {
      title: 'BFI GROUPE – Migration d\'infrastructure',
      subtitle: 'Déploiement Proxmox VE et migration VMware ESXi',
      year: '2025',
      category: 'Infrastructure',
      icon: Network,
      color: 'from-blue-400 to-blue-600',
      borderColor: 'border-blue-400/30',
      bgGradient: 'from-blue-500/10 to-blue-600/5',
      description: "Stage 2025: déploiement Proxmox VE et migration d\'une infrastructure VMware ESXi. Développement d\'une application web de gestion des VMs avec RBAC et mise en place de sauvegardes automatisées.",
      longDescription: "Conduite de la migration d\'une infrastructure virtuelle vers Proxmox VE, incluant la planification, l\'exécution et la validation post-migration. Conception d\'une application web pour la gestion des machines virtuelles avec contrôle d\'accès basé sur les rôles (RBAC) et intégration d\'un système de sauvegardes automatisées via VEEAM. Durcissement et supervision des hôtes Linux, conteneurisation avec Docker et exposition d\'une API REST pour l\'orchestration.",
      features: [
        'Déploiement Proxmox VE et migration depuis VMware ESXi',
        'Application web de gestion des VMs avec RBAC',
        'Sauvegardes automatisées et politiques de rétention (VEEAM)',
        'Conteneurisation et packaging avec Docker',
        'Durcissement et supervision des hôtes Linux',
        'API REST pour opérations d\'orchestration et d\'intégration'
      ],
      technologies: ['Proxmox VE', 'VMware ESXi', 'Linux', 'Docker', 'VEEAM', 'HTML/JS/CSS', 'REST API'],
      status: 'Terminé',
      github: '#',
      demo: '#',
      image: '/bfi.png'
    },
    {
      title: 'MurusSecure',
      subtitle: 'Architecture de sécurité hospitalière',
      year: '2025',
      category: 'Cybersécurité',
      icon: Shield,
      color: 'from-red-400 to-red-600',
      borderColor: 'border-red-400/30',
      bgGradient: 'from-red-500/10 to-red-600/5',
      description: 'Conception et mise en œuvre d\'une architecture réseau sécurisée pour un centre hospitalier avec orchestration d\'outils de sécurité et détection d\'anomalies basée sur l\'IA.',
      longDescription: 'Projet ambitieux de cybersécurité visant à protéger les infrastructures critiques d\'un centre hospitalier. L\'architecture intègre des solutions de monitoring avancées, des systèmes de détection d\'intrusions et des mécanismes d\'automatisation pour une réponse rapide aux menaces.',
      features: [
        'Architecture réseau sécurisée pour infrastructure critique',
        'Orchestration et automatisation d\'outils de sécurité',
        'Détection d\'anomalies basée sur l\'intelligence artificielle',
        'Analyse comportementale des malwares',
        'Rapports détaillés et tableaux de bord en temps réel',
        'Intégration avec les systèmes hospitaliers existants'
      ],
      technologies: ['Wazuh', 'Security Onion', 'Kibana', 'Python', 'Machine Learning', 'Docker', 'Kubernetes'],
      status: 'Terminé',
      github: '#',
      demo: '#',
      image: '/infra.png'
    },
    {
      title: 'Système de Gestion des Congés',
      subtitle: 'Plateforme de gestion d\'employés et congés',
      year: '2024',
      category: 'Développement Logiciel',
      icon: Award,
      color: 'from-orange-400 to-orange-600',
      borderColor: 'border-orange-400/30',
      bgGradient: 'from-orange-500/10 to-orange-600/5',
      description: 'Application complète de gestion d\'assurance développée en JavaFX puis adaptée en site web Symfony avec estimateur automatique basé sur l\'IA.',
      longDescription: 'Solution complète pour la gestion des polices d\'assurance, depuis l\'application desktop jusqu\'à la plateforme web. Intégration d\'un système d\'estimation automatique utilisant l\'intelligence artificielle pour optimiser les processus de souscription.',
      features: [
        'Application desktop JavaFX avec interface moderne',
        'Migration vers plateforme web Symfony',
        'Estimateur automatique basé sur l\'IA',
        'Gestion complète des polices d\'assurance',
        'Système de calcul de primes intelligent',
        'Interface utilisateur responsive et intuitive'
      ],
      technologies: ['JavaFX', 'MySQL', 'Python', 'AWS Rekognition', 'PowerBI' ],
      status: 'Terminé',
      github: 'https://github.com/SlimBenTanfous1/NewConge.git',
      demo: '#',
      image: '/api/placeholder/600/400'
    },
    {
      title: 'S.M.A.R.T',
      subtitle: 'Système de gestion hospitalière',
      year: '2023',
      category: 'Développement Web',
      icon: Building2,
      color: 'from-cyan-400 to-cyan-600',
      borderColor: 'border-cyan-400/30',
      bgGradient: 'from-cyan-500/10 to-cyan-600/5',
      description: 'Site web complet pour un centre hospitalier avec adaptation en application desktop QT Creator, intégrant gestion des patients et des rendez-vous.',
      longDescription: 'Premier projet d\'envergure combinant développement web et desktop. Le système permet la gestion complète des patients, des rendez-vous et des ressources hospitalières avec une interface adaptée aux besoins du personnel médical.',
      features: [
        'Site web responsive avec gestion des patients',
        'Système de prise de rendez-vous en ligne',
        'Application desktop QT Creator',
        'Base de données sécurisée',
        'Interface adaptée au personnel médical',
        'Gestion des ressources hospitalières'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL', 'QT Creator', 'C++'],
      status: 'Terminé',
      github: 'https://github.com/SlimBenTanfous1/S.A.F.E.git',
      demo: '#',
      image: '/api/placeholder/600/400'
    }
  ]

  const otherProjects = [
    {
      title: 'Nova Insurrance',
      description: 'Conception d\'une application de gestion d\'assurance',
      technologies: ['JavaFX', 'Symfony','IA', 'Web Développement'],
      status: 'Terminé',
      icon: Users
    },
    {
      title: 'Chatbot Messenger',
      description: 'Bot conversationnel intégré à l\'API Messenger',
      technologies: ['ReactJS', 'API Messenger', 'Node.js'],
      status: 'Terminé',
      icon: MessageCircle
    }
  
  ]

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 80, 0],
            rotate: [0, 180, 0],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/3 right-1/4 w-64 h-64 border border-neon-green/10 rounded-full"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 left-1/3 w-56 h-56 bg-gradient-to-r from-neon-purple/20 to-neon-blue/20 rounded-full blur-3xl"
        />
      </div>

      <div ref={ref} className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-cyber font-bold gradient-text mb-6">
            MES PROJETS
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-pink mx-auto rounded-full" />
          <p className="text-white/70 text-lg mt-6 max-w-2xl mx-auto">
            Des projets variés allant de la cybersécurité au développement web et desktop
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="space-y-12 mb-20">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className={`cyber-border rounded-3xl p-8 hover-lift ${project.borderColor} bg-gradient-to-br ${project.bgGradient}`}
            >
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Project Info */}
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${project.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                      <project.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-2xl font-cyber font-bold text-white">
                          {project.title}
                        </h3>
                        <span className="px-3 py-1 bg-neon-blue/20 text-neon-blue rounded-full text-xs font-medium">
                          {project.year}
                        </span>
                      </div>
                      <p className="text-neon-blue font-pop font-semibold mb-2">
                        {project.subtitle}
                      </p>
                      <span className="px-2 py-1 bg-dark-card/50 text-white/70 rounded text-xs font-medium">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <p className="text-white/80 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-4">
                    <h4 className="text-lg font-pop font-semibold text-white">
                      Fonctionnalités clés :
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.features.slice(0, 4).map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: index * 0.2 + featureIndex * 0.1, duration: 0.4 }}
                          className="flex items-start space-x-2 text-white/70 text-sm"
                        >
                          <div className="w-1.5 h-1.5 bg-neon-pink rounded-full mt-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-sm font-pop font-semibold text-white/90">
                      Technologies :
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={inView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ delay: index * 0.2 + techIndex * 0.05, duration: 0.3 }}
                          className="px-3 py-1 bg-dark-card/50 text-neon-blue rounded-full text-xs font-medium border border-neon-blue/30"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 pt-4">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.github}
                      className={`flex items-center space-x-2 px-4 py-2 bg-dark-card/50 text-white rounded-lg hover:bg-neon-blue/20 transition-colors duration-300 ${(!project.github || project.github === '#') ? 'hidden' : ''}`}
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm font-medium">Code</span>
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.demo}
                      className={`flex items-center space-x-2 px-4 py-2 cyber-button ${(!project.demo || project.demo === '#') ? 'hidden' : ''}`}
                    >
                      <Eye className="w-4 h-4" />
                      <span className="text-sm font-medium">Démo</span>
                    </motion.a>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Terminé' 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Project Visual */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: index * 0.2 + 0.3, duration: 0.6 }}
                  className="relative"
                >
                  <div
                    className={`relative rounded-2xl overflow-hidden bg-dark-card/30 border border-white/10 ${project.image ? 'cursor-zoom-in' : ''}`}
                    role={project.image ? ('button' as any) : undefined}
                    tabIndex={project.image ? 0 : -1}
                    aria-label={project.image ? `Agrandir l'image de ${project.title}` : undefined}
                    onClick={() => project.image && setLightbox({ src: project.image as string, alt: `${project.title} – aperçu` })}
                    onKeyDown={(e) => {
                      if (project.image && (e.key === 'Enter' || e.key === ' ')) {
                        e.preventDefault()
                        setLightbox({ src: project.image as string, alt: `${project.title} – aperçu` })
                      }
                    }}
                  >
                    <div
                      className="aspect-video bg-gradient-to-br from-dark-card to-dark-card/50 flex items-center justify-center"
                      style={{ backgroundImage: project.image ? `url(${project.image})` : undefined, backgroundSize: 'cover', backgroundPosition: 'center' }}
                    >
                      <div className={`text-center ${project.image ? 'hidden' : ''}`}>
                        <project.icon className="w-16 h-16 text-white/30 mx-auto mb-4" />
                        <p className="text-white/50 text-sm">Aperçu du projet</p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-cyber font-bold text-white mb-8 text-center">
            Autres Projets
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                className="cyber-border rounded-xl p-6 hover-lift"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-neon-purple to-neon-pink rounded-lg flex items-center justify-center">
                    <project.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-cyber font-bold text-white">
                      {project.title}
                    </h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Terminé' 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                <p className="text-white/70 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-dark-card/30 text-white/60 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {lightbox && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <button
              aria-label="Fermer l'image"
              className="absolute -top-10 right-0 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition"
              onClick={() => setLightbox(null)}
            >
              <X className="w-6 h-6" />
            </button>
            <img src={lightbox.src} alt={lightbox.alt} className="max-h-[80vh] max-w-[90vw] rounded-xl shadow-2xl object-contain" />
          </div>
        </div>
      )}
    </section>
  )
}

function Users({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
    </svg>
  )
}

function MessageCircle({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  )
}
