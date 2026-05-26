import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { LocalBusinessSchema } from '@/components/schema/local-business'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'BGK Handy Services | Roofing, Handyman & Property Maintenance | Lima, Ohio',
    template: '%s | BGK Handy Services',
  },
  description: 'Trusted home repairs since 2008. Professional roofing repairs, handyman services, and property maintenance in Lima, Wapakoneta, St. Marys, and Delphos, Ohio. BBB A+ Rated. 24/7 Emergency roof repairs. Call (567) 284-8733.',
  keywords: [
    'handyman services Lima Ohio',
    'roofing repairs Wapakoneta',
    'property maintenance Ohio',
    'roof repair near me',
    'emergency roof repair',
    '24/7 roofing services',
    'home repairs St Marys Ohio',
    'Delphos handyman',
    'siding repair',
    'window replacement',
    'door installation',
    'BGK Handy Services',
  ],
  authors: [{ name: 'BGK Handy Services' }],
  creator: 'BGK Handy Services',
  publisher: 'BGK Handy Services',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL('https://bgkhandyservices.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://bgkhandyservices.com',
    siteName: 'BGK Handy Services',
    title: 'BGK Handy Services | Trusted Home Repairs Since 2008',
    description: 'Professional roofing, handyman, and property maintenance services in Lima, Ohio area. BBB A+ Rated. 24/7 Emergency services available.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'BGK Handy Services - Trusted Home Repairs',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BGK Handy Services | Roofing & Handyman Services',
    description: 'Professional home repairs in Lima, Ohio. BBB A+ Rated. Call (567) 284-8733.',
    images: ['/images/og-image.jpg'],
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
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
  manifest: '/manifest.json',
  category: 'Home Services',
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#1a1a2e' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1a2e' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} bg-background`}>
      <head>
        <LocalBusinessSchema />
      </head>
      <body className="font-sans antialiased min-h-screen bg-background text-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
