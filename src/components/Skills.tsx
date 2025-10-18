'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Shield, 
  Code, 
  Database, 
  Network, 
  Terminal, 
  GitBranch,
  Monitor,
  Lock,
  Search,
  Zap,
  Globe,
  Server
} from 'lucide-react'

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillCategories = [
    {
      title: 'Cybersécurité',
      icon: Shield,
      color: 'from-red-400 to-red-600',
      borderColor: 'border-red-400/30',
      skills: [
        { name: 'Wazuh', level: 90, description: 'Surveillance et détection d\'intrusions' },
        { name: 'Security Onion', level: 85, description: 'Plateforme de sécurité' },
        { name: 'Kibana', level: 80, description: 'Visualisation de données' },
        { name: 'Wireshark', level: 85, description: 'Analyse de trafic réseau' },
        { name: 'Snort', level: 75, description: 'Détection d\'intrusions' },
      ]
    },
    {
      title: 'SOAR & Réponse aux incidents',
      icon: Zap,
      color: 'from-orange-400 to-orange-600',
      borderColor: 'border-orange-400/30',
      skills: [
        { name: 'Shuffle', level: 80, description: 'Automatisation de la sécurité' },
        { name: 'TheHive', level: 75, description: 'Gestion des incidents' },
        { name: 'Cortex', level: 70, description: 'Analyse de malwares' },
      ]
    },
    {
      title: 'Réseaux',
      icon: Network,
      color: 'from-blue-400 to-blue-600',
      borderColor: 'border-blue-400/30',
      skills: [
        { name: 'Routage & Commutation', level: 90, description: 'VLAN, OSPF, TCP/IP' },
        { name: 'Protocoles', level: 85, description: 'DHCP, DNS, SMTP, SFTP, LDAP' },
        { name: 'Configuration LAN/WAN', level: 80, description: 'Sécurisation des réseaux' },
        { name: 'VPN & IPsec', level: 75, description: 'Tunnels sécurisés' },
      ]
    },
    {
      title: 'Programmation',
      icon: Code,
      color: 'from-green-400 to-green-600',
      borderColor: 'border-green-400/30',
      skills: [
        { name: 'Python', level: 90, description: 'Scripts de sécurité, automatisation' },
        { name: 'Bash', level: 85, description: 'Scripts système' },
        { name: 'Java', level: 80, description: 'Applications desktop' },
        { name: 'C++', level: 75, description: 'Programmation système' },
        { name: 'C#', level: 70, description: 'Applications .NET' },
        { name: 'PHP', level: 80, description: 'Développement web' },
        { name: 'HTML/CSS', level: 85, description: 'Interfaces utilisateur' },
      ]
    },
    {
      title: 'Bases de données',
      icon: Database,
      color: 'from-purple-400 to-purple-600',
      borderColor: 'border-purple-400/30',
      skills: [
        { name: 'MySQL', level: 85, description: 'Base de données relationnelle' },
        { name: 'Oracle DB', level: 80, description: 'Base de données d\'entreprise' },
        { name: 'PostgreSQL', level: 75, description: 'Base de données open source' },
      ]
    },
    {
      title: 'DevOps & Supervision',
      icon: Terminal,
      color: 'from-cyan-400 to-cyan-600',
      borderColor: 'border-cyan-400/30',
      skills: [
        { name: 'Git', level: 90, description: 'Contrôle de version' },
        { name: 'Docker', level: 80, description: 'Conteneurisation' },
        { name: 'Nmap', level: 85, description: 'Scan de ports et vulnérabilités' },
        { name: 'Zeek', level: 75, description: 'Analyse de trafic réseau' },
      ]
    },
    {
      title: 'Gestion de projets',
      icon: GitBranch,
      color: 'from-pink-400 to-pink-600',
      borderColor: 'border-pink-400/30',
      skills: [
        { name: 'Trello', level: 85, description: 'Gestion de tâches' },
        { name: 'Notion', level: 80, description: 'Documentation et organisation' },
        { name: 'GitHub', level: 90, description: 'Collaboration et versioning' },
      ]
    },
    {
      title: 'Compétences sociales',
      icon: Globe,
      color: 'from-yellow-400 to-yellow-600',
      borderColor: 'border-yellow-400/30',
      skills: [
        { name: 'Leadership', level: 85, description: 'Encadrement d\'équipe' },
        { name: 'Travail en équipe', level: 90, description: 'Collaboration efficace' },
        { name: 'Adaptabilité', level: 88, description: 'Flexibilité et réactivité' },
        { name: 'Gestion du temps', level: 85, description: 'Organisation et priorisation' },
        { name: 'Gestion de projet', level: 80, description: 'Planification et suivi' },
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            rotate: [0, -180, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/3 left-1/4 w-48 h-48 border border-neon-green/10 rounded-full"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/3 right-1/3 w-40 h-40 bg-gradient-to-r from-neon-purple/20 to-neon-orange/20 rounded-full blur-3xl"
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
            MES COMPÉTENCES
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-pink mx-auto rounded-full" />
          <p className="text-white/70 text-lg mt-6 max-w-2xl mx-auto">
            Une expertise technique diversifiée acquise au fil de mes projets et expériences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
              className={`cyber-border rounded-2xl p-6 hover-lift ${category.borderColor}`}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className={`w-10 h-10 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center`}>
                  <category.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-cyber font-bold text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ 
                      delay: categoryIndex * 0.1 + skillIndex * 0.05, 
                      duration: 0.4 
                    }}
                    className="space-y-2"
                  >
                    <div className="p-3 rounded-lg bg-dark-card/30 border border-white/10 hover:bg-dark-card/50 transition-colors duration-300">
                      <div className="text-white/90 font-pop font-medium text-sm">
                        {skill.name}
                      </div>
                      <p className="text-white/60 text-xs leading-snug mt-1">
                        {skill.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="cyber-border rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-cyber font-bold gradient-text mb-4">
              Approche d'apprentissage continue
            </h3>
            <p className="text-white/80 leading-relaxed">
              Je m'efforce constamment d'approfondir mes connaissances en cybersécurité. 
              Chaque projet est une opportunité d'apprendre de nouvelles technologies et d'améliorer mes compétences. 
              Mon objectif est de rester à la pointe des dernières tendances en sécurité informatique.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
