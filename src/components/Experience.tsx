'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Building2, 
  Calendar, 
  MapPin, 
  Code, 
  Server, 
  Shield,
  Users,
  Award,
  ExternalLink
} from 'lucide-react'

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experiences = [
    {
      company: 'BFI GROUPE',
      position: 'Stagiaire – Virtualisation et Infrastructure',
      period: 'Juin–Août 2025',
      location: 'Tunisie',
      type: 'Stage',
      icon: Server,
      color: 'from-blue-400 to-blue-600',
      borderColor: 'border-blue-400/30',
      achievements: [
        'Déploiement de Proxmox VE et migration de VMs depuis VMware ESXi',
        'Tests multi-OS (Windows Server, Oracle Linux, Oracle DB) et conversion de VMs en conteneurs LXC',
        'Configuration d\'un cluster HA, mise en place de sauvegardes automatisées (VEEAM) et réalisation de tests SAN/NAS',
        'Automatisation via API REST et développement d\'une application web en HTML/JS/CSS (création de VMs, quotas, supervision, RBAC)'
      ],
      technologies: ['Proxmox VE', 'VMware ESXi', 'VEEAM', 'LXC', 'API REST', 'HTML/JS/CSS', 'RBAC']
    },
    {
      company: 'BFPME',
      position: 'Stagiaire Développement Logiciel',
      period: 'Juin–Août 2024',
      location: 'Tunisie',
      type: 'Stage',
      icon: Code,
      color: 'from-green-400 to-green-600',
      borderColor: 'border-green-400/30',
      achievements: [
        'Développé une app de gestion des congés adoptée par 50+ employés (JavaFX, MySQL)',
        'Implémenté une authentification faciale via AWS Rekognition',
        'Conçu une base MySQL évolutive avec interface utilisateur performante'
      ],
      technologies: ['JavaFX', 'MySQL', 'AWS Rekognition', 'Java', 'Facial Recognition']
    },
    {
      company: 'ACCESS CONTENT AGENCY',
      position: 'Stagiaire Développement Web',
      period: 'Août-Septembre 2022',
      location: 'Tunisie',
      type: 'Stage',
      icon: Users,
      color: 'from-purple-400 to-purple-600',
      borderColor: 'border-purple-400/30',
      achievements: [
        'Développement d\'un Chatbot en utilisant ReactJS (intégration de l\'API Messenger)',
        'Participation à des projets de design graphique avec Adobe Photoshop et Adobe Illustrator'
      ],
      technologies: ['ReactJS', 'API Messenger', 'Adobe Photoshop', 'Adobe Illustrator', 'JavaScript']
    }
  ]

  const projects = [
    {
      name: 'MurusSecure',
      period: '2025',
      school: 'ESPRIT',
      icon: Shield,
      color: 'from-red-400 to-red-600',
      borderColor: 'border-red-400/30',
      description: 'Conception et mise en œuvre d\'une architecture réseau pour un centre hospitalier',
      achievements: [
        'Orchestration et automatisation d\'outils de sécurité avec détection d\'anomalies basée sur l\'IA',
        'Analyse et interprétation du comportement de malwares, et rédaction de rapports détaillés'
      ],
      technologies: ['Architecture réseau', 'IA', 'Analyse de malwares', 'Sécurité hospitalière']
    },
    {
      name: 'Nova Insurance',
      period: '2024',
      school: 'ESPRIT',
      icon: Award,
      color: 'from-orange-400 to-orange-600',
      borderColor: 'border-orange-400/30',
      description: 'Conception d\'une application de gestion d\'assurance',
      achievements: [
        'Adaptation de l\'application en un site web en Framework Symfony',
        'Implémentation d\'un estimateur auto à l\'aide de l\'IA'
      ],
      technologies: ['JavaFX', 'Symfony', 'IA', 'Gestion d\'assurance', 'Web Development']
    },
    {
      name: 'S.M.A.R.T',
      period: '2023',
      school: 'ESPRIT',
      icon: Building2,
      color: 'from-cyan-400 to-cyan-600',
      borderColor: 'border-cyan-400/30',
      description: 'Création de site web pour un centre hospitalier',
      achievements: [
        'Adaptation du site web en application desktop en QT Creator'
      ],
      technologies: ['HTML', 'JavaScript', 'PHP', 'CSS', 'QT Creator', 'Desktop Application']
    }
  ]

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 right-1/4 w-56 h-56 border border-neon-orange/10 rounded-full"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-gradient-to-r from-neon-blue/20 to-neon-green/20 rounded-full blur-3xl"
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
            EXPÉRIENCE PROFESSIONNELLE
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-pink mx-auto rounded-full" />
          <p className="text-white/70 text-lg mt-6 max-w-2xl mx-auto">
            Un parcours enrichissant à travers différentes entreprises et technologies
          </p>
        </motion.div>

        {/* Professional Experience */}
        <div className="mb-20">
          <h3 className="text-2xl font-cyber font-bold text-white mb-12 text-center">
            Stages & Expériences
          </h3>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.period}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className={`cyber-border rounded-2xl p-8 hover-lift ${exp.borderColor}`}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex items-start space-x-4 mb-4 lg:mb-0">
                    <div className={`w-12 h-12 bg-gradient-to-r ${exp.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <exp.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-cyber font-bold text-white mb-1">
                        {exp.position}
                      </h4>
                      <div className="flex items-center space-x-2 text-neon-blue font-pop font-semibold mb-2">
                        <Building2 className="w-4 h-4" />
                        <span>{exp.company}</span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-white/60 text-sm">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                        <span className="px-2 py-1 bg-neon-blue/20 text-neon-blue rounded-full text-xs font-medium">
                          {exp.type}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h5 className="text-lg font-pop font-semibold text-white mb-3">
                    Réalisations principales :
                  </h5>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <motion.li
                        key={achIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: index * 0.2 + achIndex * 0.1, duration: 0.5 }}
                        className="flex items-start space-x-3 text-white/80"
                      >
                        <div className="w-2 h-2 bg-neon-blue rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm leading-relaxed">{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-6 border-t border-white/10">
                  <h5 className="text-sm font-pop font-semibold text-white/90 mb-3">
                    Technologies utilisées :
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
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
              </motion.div>
            ))}
          </div>
        </div>

        {/* Projects */}
        <div>
          <h3 className="text-2xl font-cyber font-bold text-white mb-12 text-center">
            Projets Académiques
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.2, duration: 0.6 }}
                className={`cyber-border rounded-2xl p-6 hover-lift ${project.borderColor}`}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-10 h-10 bg-gradient-to-r ${project.color} rounded-lg flex items-center justify-center`}>
                    <project.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-cyber font-bold text-white">
                      {project.name}
                    </h4>
                    <p className="text-white/60 text-sm">
                      {project.period} • {project.school}
                    </p>
                  </div>
                </div>

                <p className="text-white/80 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-3">
                  <h5 className="text-sm font-pop font-semibold text-white/90">
                    Réalisations :
                  </h5>
                  <ul className="space-y-1">
                    {project.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start space-x-2 text-white/70 text-xs">
                        <div className="w-1.5 h-1.5 bg-neon-pink rounded-full mt-1.5 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 pt-4 border-t border-white/10">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-dark-card/30 text-white/70 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
