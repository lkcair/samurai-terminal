import type { Metadata } from 'next'
import './globals.css'
import { AuthProvider } from '@/lib/authContext'

export const metadata: Metadata = {
  metadataBase: new URL('https://samuraiterminal.com'),
  title: 'Samurai Terminal - The Best Financial Terminal Alternative',
  description: 'Institutional-grade market data, real-time SEC analysis, and AI-powered screener. The Best financial terminal alternative.',
  keywords: [
    'Financial Terminal Alternative',
    'Real-time Stock Dashboard',
    'Crypto Terminal',
    'Professional Portfolio Tracker',
    'SEC Filings',
    'Stock Screener',
    'Portfolio Management',
  ],
  authors: [{ name: 'Samurai Financial Data Systems', url: 'https://samuraiterminal.com' }],
  creator: 'Samurai Financial Data Systems',
  openGraph: {
    title: 'Samurai Terminal - The Best Financial Terminal Alternative',
    description: 'Institutional-grade market data and AI-powered analysis',
    url: 'https://samuraiterminal.com',
    siteName: 'Samurai Terminal',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Samurai Terminal - The Best Financial Terminal Alternative',
      },
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Samurai Terminal - The Best Financial Terminal Alternative',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Samurai Terminal - The Best Financial Terminal Alternative',
    description: 'Institutional-grade market data and AI-powered analysis',
    images: ['/og-image.png', '/og-image.svg'],
  },
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://samuraiterminal.com" />
        <meta name="googlebot" content="index, follow" />
        <meta name="theme-color" content="#050505" />
      </head>
      <body className="bg-st-bg text-white">
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
