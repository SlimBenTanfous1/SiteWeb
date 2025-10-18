'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import LoadingScreen from '@/components/LoadingScreen'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    // Simuler un temps de chargement
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Cursor effect */}
      <div 
        className="fixed pointer-events-none z-50 w-4 h-4 bg-neon-blue rounded-full mix-blend-difference transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
        }}
      />
      
      {/* Background particles */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 cyber-grid-bg opacity-30" />
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-neon-blue rounded-full animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-neon-pink rounded-full animate-ping" />
        <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-neon-purple rounded-full animate-bounce" />
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-neon-green rounded-full animate-pulse" />
      </div>

      <AnimatePresence>
        {isLoading ? (
          <LoadingScreen />
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative z-10"
          >
            <Header />
            <main>
              <Hero />
              <About />
              <Skills />
              <Experience />
              <Projects />
              <Contact />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
