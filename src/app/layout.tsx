import type { Metadata } from 'next'
import { Inter, Orbitron } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const orbitron = Orbitron({ 
  subsets: ['latin'],
  variable: '--font-orbitron',
})

export const metadata: Metadata = {
  title: 'Slim Ben Tanfous - Portfolio',
  description: 'Portfolio de Slim Ben Tanfous, étudiant ingénieur en informatique - Spécialité Cybersécurité. Découvrez mes projets, compétences et expériences en sécurité informatique.',
  keywords: 'cybersécurité, portfolio, ingénieur, sécurité informatique, Slim Ben Tanfous',
  authors: [{ name: 'Slim Ben Tanfous' }],
  openGraph: {
    title: 'Slim Ben Tanfous - Portfolio',
    description: 'Portfolio de Slim Ben Tanfous, étudiant ingénieur en informatique - Spécialité Cybersécurité',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${orbitron.variable}`}>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
