'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { User, MapPin, Calendar, GraduationCap, Award, Languages } from 'lucide-react'

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const languages = [
    { name: 'Français', level: 'C1', color: 'from-blue-400 to-blue-600' },
    { name: 'Anglais', level: 'C1', color: 'from-green-400 to-green-600' },
    { name: 'Allemand', level: 'A2', color: 'from-yellow-400 to-yellow-600' },
    { name: 'Arabe', level: 'Natif', color: 'from-purple-400 to-purple-600' },
  ]

  const stats = [
    { label: 'Projets réalisés', value: '5+', icon: '🚀' },
    { label: 'Technologies maîtrisées', value: '20+', icon: '⚡' },
    { label: 'Années d\'expérience', value: '1+', icon: '🎯' },
    { label: 'Certifications', value: '2', icon: '🏆' },
  ]

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 right-1/4 w-40 h-40 border border-neon-purple/10 rounded-full"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-neon-blue/20 to-neon-pink/20 rounded-full blur-2xl"
        />
      </div>

      <div ref={ref} className="container mx-auto px-6 relative z-10 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-cyber font-bold gradient-text mb-6">
            À PROPOS DE MOI
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-pink mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-10 items-start">
          {/* Left side - Personal info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-8 lg:col-span-1"
          >
            <div className="cyber-border rounded-2xl p-8 hover-lift">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-neon-blue to-neon-pink rounded-lg flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-cyber font-bold text-white">Profil Personnel</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-neon-blue" />
                  <span className="text-white/80">Tunis, Tunisie</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-neon-pink" />
                  <span className="text-white/80">Recherche stage de fin d'étude - Janvier 2026</span>
                </div>
                <div className="flex items-center space-x-3">
                  <GraduationCap className="w-5 h-5 text-neon-purple" />
                  <span className="text-white/80">ESPRIT - Génie Informatique</span>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="cyber-border rounded-2xl p-8 hover-lift">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-neon-purple to-neon-orange rounded-lg flex items-center justify-center">
                  <Languages className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-cyber font-bold text-white">Langues</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {languages.map((lang, index) => (
                  <motion.div
                    key={lang.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                    className="text-center"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${lang.color} rounded-full mx-auto mb-2 flex items-center justify-center text-white font-bold text-sm`}>
                      {lang.level}
                    </div>
                    <p className="text-white/80 font-pop font-medium">{lang.name}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right side - Description and stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-8 lg:col-span-2"
          >
            <div className="cyber-border rounded-2xl p-8 hover-lift">
              <h3 className="text-2xl font-cyber font-bold text-white mb-6">
                Mon Parcours
              </h3>
              <p className="text-white/80 leading-relaxed mb-6">
                Passionné par la cybersécurité depuis mes débuts en informatique, j'ai développé 
                une expertise solide dans la protection des systèmes d'information et la détection 
                d'intrusions. Mon parcours à ESPRIT m'a permis d'acquérir des compétences techniques 
                approfondies tout en développant une approche méthodique de la sécurité.
              </p>
              <p className="text-white/80 leading-relaxed">
                Je recherche actuellement un <span className="text-neon-blue font-semibold">stage de fin d'étude de 6 mois</span> 
                {' '}à partir de <span className="text-neon-pink font-semibold">Janvier 2026</span> afin d'obtenir mon diplôme d'ingénieur et mettre en pratique 
                mes connaissances et contribuer à la sécurité d'une entreprise innovante.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                  className="cyber-border rounded-xl p-6 text-center hover-lift"
                >
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-2xl font-cyber font-bold gradient-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-white/60 text-sm font-pop">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="cyber-border rounded-2xl p-8 hover-lift"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-neon-orange to-neon-pink rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-cyber font-bold text-white">Certifications</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-dark-card/50 rounded-lg">
                  <div>
                    <h4 className="text-white font-pop font-semibold">CyberOps Associate</h4>
                    <p className="text-white/60 text-sm">Mai 2025</p>
                  </div>
                  <div className="w-8 h-8 bg-neon-blue rounded-full flex items-center justify-center">
                    <Award className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-dark-card/50 rounded-lg">
                  <div>
                    <h4 className="text-white font-pop font-semibold">CCNA: Switching, Routing, and Wireless Essentials</h4>
                    <p className="text-white/60 text-sm">Septembre 2024</p>
                  </div>
                  <div className="w-8 h-8 bg-neon-pink rounded-full flex items-center justify-center">
                    <Award className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
