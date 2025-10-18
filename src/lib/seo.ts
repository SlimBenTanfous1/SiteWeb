import { Metadata } from 'next'
import { SITE_CONFIG } from './constants'

export const defaultMetadata: Metadata = {
  title: SITE_CONFIG.title,
  description: SITE_CONFIG.description,
  keywords: [
    'cybersécurité',
    'développement',
    'portfolio',
    'ingénieur',
    'sécurité informatique',
    'Slim Ben Tanfous',
    'ESPRIT',
    'stage',
    'Python',
    'Java',
    'Next.js',
    'React',
    'TypeScript'
  ],
  authors: [{ name: SITE_CONFIG.author.name }],
  creator: SITE_CONFIG.author.name,
  publisher: SITE_CONFIG.author.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(SITE_CONFIG.url),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: SITE_CONFIG.url,
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.title,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    images: [SITE_CONFIG.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
}

export function generatePageMetadata(
  title: string,
  description: string,
  path: string = ''
): Metadata {
  const fullTitle = `${title} | ${SITE_CONFIG.name}`
  const fullUrl = `${SITE_CONFIG.url}${path}`

  return {
    title: fullTitle,
    description,
    openGraph: {
      title: fullTitle,
      description,
      url: fullUrl,
    },
    twitter: {
      title: fullTitle,
      description,
    },
    alternates: {
      canonical: fullUrl,
    },
  }
}
