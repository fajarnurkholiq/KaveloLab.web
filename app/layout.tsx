import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'KaveloLab — Website Profesional untuk UMKM Indonesia',
  description:
    'KaveloLab membantu UMKM Indonesia punya website profesional yang simpel, cepat, dan langsung terhubung ke pelanggan. Mulai dari Rp299.000.',
  openGraph: {
    title: 'KaveloLab — Website Profesional untuk UMKM Indonesia',
    description:
      'KaveloLab membantu UMKM Indonesia punya website profesional yang simpel, cepat, dan langsung terhubung ke pelanggan.',
    url: 'https://kavelolab.com',
    siteName: 'KaveloLab',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'KaveloLab — Digital Studio untuk UMKM',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className={inter.variable}>
      <body>{children}</body>
    </html>
  )
}
