'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Shield, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github,
  ArrowUp,
  Heart
} from 'lucide-react'

export default function Footer() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/95 to-transparent" />
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-neon-blue/5 rounded-full"
        />
      </div>

      <div ref={ref} className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="lg:col-span-1"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-neon-blue to-neon-pink rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-cyber font-bold gradient-text">
                    Slim Ben Tanfous
                  </h3>
                  <p className="text-white/60 text-sm font-pop">
                    Cybersécurité
                  </p>
                </div>
              </div>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                Étudiant ingénieur en cybersécurité passionné par la protection 
des systèmes d&apos;information et l&apos;innovation technologique.
              </p>
              <div className="flex space-x-4">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://linkedin.com/in/slim-ben-tanfous"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg flex items-center justify-center hover:from-blue-400 hover:to-blue-600 transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5 text-white" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://github.com/slim-ben-tanfous"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-r from-gray-500 to-gray-700 rounded-lg flex items-center justify-center hover:from-gray-400 hover:to-gray-600 transition-all duration-300"
                >
                  <Github className="w-5 h-5 text-white" />
                </motion.a>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h4 className="text-lg font-cyber font-bold text-white mb-6">
                Navigation
              </h4>
              <ul className="space-y-3">
                {[
                  { name: 'Accueil', href: '#hero' },
                  { name: 'À propos', href: '#about' },
                  { name: 'Compétences', href: '#skills' },
                  { name: 'Expérience', href: '#experience' },
                  { name: 'Projets', href: '#projects' },
                  { name: 'Contact', href: '#contact' }
                ].map((link, index) => (
                  <li key={link.name}>
                    <motion.a
                      whileHover={{ x: 5 }}
                      href={link.href}
                      className="text-white/70 hover:text-neon-blue transition-colors duration-300 text-sm font-pop"
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <h4 className="text-lg font-cyber font-bold text-white mb-6">
                Contact
              </h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-neon-blue" />
                  <a 
                    href="mailto:slim.bentanfous@esprit.tn"
                    className="text-white/70 hover:text-neon-blue transition-colors duration-300 text-sm font-pop"
                  >
                    slim.bentanfous@esprit.tn
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-neon-pink" />
                  <a 
                    href="tel:+21623177705"
                    className="text-white/70 hover:text-neon-pink transition-colors duration-300 text-sm font-pop"
                  >
                    +216 23 17 77 05
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-neon-purple" />
                  <span className="text-white/70 text-sm font-pop">
                    Tunis, Tunisie
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Skills Summary */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <h4 className="text-lg font-cyber font-bold text-white mb-6">
                Expertise
              </h4>
              <div className="space-y-3">
                <div className="text-sm">
                  <p className="text-white/90 font-pop font-semibold mb-1">Cybersécurité</p>
                  <p className="text-white/60 text-xs">Surveillance, détection, SOAR</p>
                </div>
                <div className="text-sm">
                  <p className="text-white/90 font-pop font-semibold mb-1">Développement</p>
                  <p className="text-white/60 text-xs">Python, Java, Web, Mobile</p>
                </div>
                <div className="text-sm">
                  <p className="text-white/90 font-pop font-semibold mb-1">Réseaux</p>
                  <p className="text-white/60 text-xs">Routage, commutation, VPN</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-white/60 text-sm font-pop flex items-center space-x-2"
              >
                <span>© {currentYear} Slim Ben Tanfous. Fait avec</span>
                <Heart className="w-4 h-4 text-neon-pink animate-pulse" />
                <span>et Next.js</span>
              </motion.p>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToTop}
                className="flex items-center space-x-2 px-4 py-2 cyber-border rounded-lg hover:bg-neon-blue/10 transition-all duration-300"
              >
                <ArrowUp className="w-4 h-4 text-neon-blue" />
                <span className="text-neon-blue text-sm font-pop font-medium">
                  Retour en haut
                </span>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              rotate: [0, 360, 0],
            }}
            transition={{
              duration: 60,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-1/4 right-1/4 w-2 h-2 bg-neon-blue rounded-full opacity-30"
          />
          <motion.div
            animate={{
              x: [0, -80, 0],
              y: [0, 80, 0],
              rotate: [0, -180, 0],
            }}
            transition={{
              duration: 45,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-neon-pink rounded-full opacity-40"
          />
          <motion.div
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-neon-purple rounded-full"
          />
        </div>
      </div>
    </footer>
  )
}
