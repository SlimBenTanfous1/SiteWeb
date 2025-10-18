'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Shield, Code, Zap, Download } from 'lucide-react'
import { useInView } from 'react-intersection-observer'

export default function Hero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-32 h-32 border border-neon-blue/20 rounded-full"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-neon-pink/20 rounded-full"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-neon-blue/10 to-neon-pink/10 rounded-full blur-3xl"
        />
      </div>

      <div ref={ref} className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Main title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-cyber font-bold mb-6"
          >
            <span className="gradient-text text-shadow-lg">Slim Ben Tanfous</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-4"
          >
            <h2 className="text-2xl md:text-3xl font-pop font-light text-white/90 mb-2">
              Étudiant Ingénieur Informatique
            </h2>
            <div className="flex items-center justify-center space-x-4 text-neon-blue">
              <Shield className="w-6 h-6" />
              <span className="text-xl font-cyber font-semibold">Cybersécurité</span>
              <Code className="w-6 h-6" />
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed"
          >
            Passionné par la cybersécurité, je suis à la recherche d'un 
            <span className="text-neon-pink font-semibold"> stage de fin d'étude de 6 mois</span> 
            {' '}à partir de <span className="text-neon-blue font-semibold">Janvier 2026</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 pt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToNext()}
              className="cyber-button group"
            >
              <Zap className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              Découvrir mon profil
            </motion.button>
            
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/SlimBenTanfous_CV.pdf"
              download
              className="flex items-center space-x-2 px-6 py-3 border border-neon-pink text-neon-pink rounded-lg font-cyber font-bold transition-all duration-300 hover:bg-neon-pink hover:text-dark-bg hover:shadow-lg hover:shadow-neon-pink/50"
            >
              <Download className="w-5 h-5" />
              <span>Télécharger CV</span>
            </motion.a>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1, duration: 0.8 }}
            className="pt-8 space-y-2 text-white/60"
          >
            <p className="text-sm">
              📧 slim.bentanfous@esprit.tn
            </p>
            <p className="text-sm">
              📱 +216 23 17 77 05
            </p>
            <p className="text-sm">
              📍 Tunis, Tunisie
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={scrollToNext}
          className="text-neon-blue hover:text-neon-pink transition-colors duration-300"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.button>
      </motion.div>
    </section>
  )
}
