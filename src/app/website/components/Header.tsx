'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'Home', href: '/website', icon: '🏠' },
    { name: 'About', href: '/website/about', icon: '👥' },
    { name: 'Services', href: '/website/services', icon: '🏥' },
    { name: 'Facilities', href: '/website/facilities', icon: '🔬' },
    { name: 'Contact', href: '/website/contact', icon: '📞' },
  ]

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-blue-50 to-teal-50 text-gray-800 py-3 text-xs border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-between items-center gap-2">
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                  <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                </div>
                <span className="font-bold text-gray-800">+91 7014265848</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-teal-500 rounded-full flex items-center justify-center">
                  <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                </div>
                <span className="text-gray-700">techroverteam@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="text-gray-700">Unit-1: Plot No. 06, Ram Nagar, Sangriya, Jodhpur</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-600 font-semibold">ONLINE</span>
              </div>
              <Link href="/website/appointment" className="bg-gradient-to-r from-blue-600 to-teal-600 px-3 py-1 rounded-full text-white font-bold hover:shadow-lg transition-all duration-300">
                BOOK NOW
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-blue-100' 
          : 'bg-white shadow-lg'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Logo and Navigation Row */}
          <div className="flex justify-between items-center py-2">
            <Link href="/website" className="flex items-center gap-4 group">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 via-blue-500 to-teal-500 rounded-3xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <div className="text-white text-2xl font-bold">V</div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full border-2 border-white flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 bg-green-500 text-white text-xs px-2 py-0.5 rounded-full font-bold">
                  24/7
                </div>
              </div>
              <div>
                <h1 className="text-3xl font-black text-transparent bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text group-hover:from-teal-600 group-hover:to-blue-600 transition-all duration-500">
                  VARAHA SDC
                </h1>
                <p className="text-sm font-bold text-gray-600 tracking-wider">ADVANCED DIAGNOSTIC CENTER</p>
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    ))}
                  </div>
                  <span className="text-xs font-bold text-gray-500">15+ YEARS</span>
                </div>
              </div>
            </Link>

            {/* Navigation */}
            <nav className="flex items-center bg-gray-50 rounded-xl p-1 gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 rounded-lg font-bold text-xs transition-all duration-300 ${
                    pathname === item.href
                      ? 'bg-gradient-to-r from-blue-600 to-teal-600 text-white shadow-lg'
                      : 'text-gray-700 hover:bg-white hover:shadow-md'
                  }`}
                  style={pathname === item.href ? { color: '#ffffff' } : {}}
                >
                  <span>{item.name.toUpperCase()}</span>
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-6">
              <div className="hidden md:flex items-center gap-4 bg-gradient-to-r from-blue-50 to-teal-50 px-6 py-3 rounded-2xl border border-blue-200">
                <div className="text-center">
                  <div className="text-2xl font-black text-blue-600">50K+</div>
                  <div className="text-xs font-bold text-gray-600">SCANS</div>
                </div>
                <div className="w-px h-8 bg-gray-300"></div>
                <div className="text-center">
                  <div className="text-2xl font-black text-teal-600">98%</div>
                  <div className="text-xs font-bold text-gray-600">SUCCESS</div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full flex items-center justify-center text-white shadow-2xl z-50"
            >
              <div className="w-6 h-6 flex flex-col justify-center gap-1">
                <span className={`block w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`block w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
              </div>
            </button>

            {isMenuOpen && (
              <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" onClick={() => setIsMenuOpen(false)}>
                <div className="fixed bottom-24 right-6 bg-white rounded-3xl shadow-2xl p-6 min-w-[200px]">
                  <div className="space-y-2">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm hover:bg-gray-50 transition-all duration-300"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <span className="text-xl">{item.icon}</span>
                        <span>{item.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  )
}