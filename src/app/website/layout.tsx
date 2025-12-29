import { Inter } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

export const metadata = {
  title: 'Varaha SDC - Advanced Diagnostic Center | MRI, CT Scan, X-Ray & Ultrasound',
  description: 'Professional MRI, CT Scan, X-Ray and Ultrasound services with state-of-the-art technology and expert care. Book your appointment today for accurate diagnostics.',
  keywords: 'MRI scan, CT scan, X-ray, ultrasound, diagnostic center, medical imaging, healthcare, radiology',
  icons: {
    icon: '/Varaha logo@4x 2.png',
    shortcut: '/Varaha logo@4x 2.png',
    apple: '/Varaha logo@4x 2.png',
  },
  openGraph: {
    title: 'Varaha SDC - Advanced Diagnostic Center',
    description: 'Professional diagnostic imaging services with cutting-edge technology',
    type: 'website',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}