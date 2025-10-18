'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Download,
  
} from 'lucide-react'

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Form section removed: keeping only contact info

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'slim.bentanfous@esprit.tn',
      href: 'mailto:slim.bentanfous@esprit.tn',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: Phone,
      label: 'Téléphone',
      value: '+216 23 17 77 05',
      href: 'tel:+21623177705',
      color: 'from-green-400 to-green-600'
    },
    {
      icon: MapPin,
      label: 'Localisation',
      value: 'Tunis, Tunisie',
      href: '#',
      color: 'from-purple-400 to-purple-600'
    }
  ]

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com/in/slim-ben-tanfous',
      color: 'from-blue-500 to-blue-700',
      hoverColor: 'hover:from-blue-400 hover:to-blue-600'
    },
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/slim-ben-tanfous',
      color: 'from-gray-500 to-gray-700',
      hoverColor: 'hover:from-gray-400 hover:to-gray-600'
    }
  ]

  return (
  <section id="contact" className="py-20 relative overflow-hidden">
    {/* Background decoration */}
    <div className="absolute inset-0 z-0">
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
          rotate: [0, 180, 0],
        }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-1/4 left-1/4 w-72 h-72 border border-neon-pink/10 rounded-full"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.15, 0.05],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 rounded-full blur-3xl"
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
          CONTACTEZ-MOI
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-pink mx-auto rounded-full" />
        <p className="text-white/70 text-lg mt-6 max-w-2xl mx-auto">
          Intéressé par mon profil ? N'hésitez pas à me contacter pour discuter d'opportunités de stage
        </p>
      </motion.div>
    </div>
  </section>)}
