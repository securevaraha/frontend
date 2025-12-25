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
      <div className="bg-gradient-to-r from-blue-50 to-teal-50 text-gray-800 py-2 sm:py-3 text-xs border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center gap-2">
            <div className="flex items-center gap-2 sm:gap-6 overflow-x-auto scrollbar-hide">
              <a href="tel:+917014265848" className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0 hover:text-blue-600 transition-colors">
                <div className="w-3 sm:w-4 h-3 sm:h-4 bg-blue-500 rounded-full flex items-center justify-center">
                  <svg className="w-2 sm:w-2.5 h-2 sm:h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                </div>
                <span className="font-bold text-gray-800 text-xs sm:text-sm whitespace-nowrap">+91 7014265848</span>
              </a>
              <a href="mailto:techroverteam@gmail.com" className="hidden sm:flex items-center gap-2 hover:text-teal-600 transition-colors">
                <div className="w-4 h-4 bg-teal-500 rounded-full flex items-center justify-center">
                  <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                </div>
                <span className="text-gray-700 text-xs lg:text-sm">techroverteam@gmail.com</span>
              </a>
              <div className="hidden lg:flex items-center gap-2">
                <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="text-gray-700 text-xs">Unit-1: Plot No. 06, Ram Nagar, Sangriya, Jodhpur</span>
              </div>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-3 flex-shrink-0">
              <div className="flex items-center gap-1">
                <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-600 font-semibold text-xs">ONLINE</span>
              </div>
              <Link href="/website/appointment" className="bg-gradient-to-r from-blue-600 to-teal-600 px-2 sm:px-3 py-1.5 sm:py-2 rounded-full text-white font-bold hover:shadow-lg active:scale-95 transition-all duration-300 text-xs touch-manipulation">
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
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          {/* Logo and Navigation Row */}
          <div className="flex justify-between items-center py-2 sm:py-3">
            <Link href="/website" className="flex items-center gap-2 sm:gap-4 group touch-manipulation">
              <div className="relative">
                <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-blue-600 via-blue-500 to-teal-500 rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-xl group-hover:shadow-2xl group-active:scale-95 transition-all duration-300">
                  <div className="text-white text-lg sm:text-2xl font-bold">V</div>
                  <div className="absolute -top-0.5 sm:-top-1 -right-0.5 sm:-right-1 w-4 sm:w-6 h-4 sm:h-6 bg-red-500 rounded-full border-2 border-white flex items-center justify-center">
                    <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white rounded-full animate-pulse"></div>
                  </div>
                </div>
                <div className="absolute -bottom-1 sm:-bottom-2 -right-1 sm:-right-2 bg-green-500 text-white text-xs px-1 sm:px-2 py-0.5 rounded-full font-bold">
                  24/7
                </div>
              </div>
              <div className="min-w-0">
                <h1 className="text-lg sm:text-2xl lg:text-3xl font-black text-transparent bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text group-hover:from-teal-600 group-hover:to-blue-600 transition-all duration-500 leading-tight">
                  VARAHA SDC
                </h1>
                <p className="text-xs sm:text-sm font-bold text-gray-600 tracking-wider leading-tight">ADVANCED DIAGNOSTIC CENTER</p>
                <div className="flex items-center gap-1 sm:gap-2 mt-0.5 sm:mt-1">
                  <div className="flex gap-0.5 sm:gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-yellow-400 rounded-full"></div>
                    ))}
                  </div>
                  <span className="text-xs font-bold text-gray-500">15+ YEARS</span>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center bg-gray-50 rounded-xl p-1 gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 rounded-lg font-bold text-xs transition-all duration-300 hover:scale-105 active:scale-95 ${
                    pathname === item.href
                      ? 'bg-gradient-to-r from-blue-600 to-teal-600 text-white shadow-lg'
                      : 'text-gray-700 hover:bg-white hover:shadow-md'
                  }`}
                >
                  <span>{item.name.toUpperCase()}</span>
                </Link>
              ))}
            </nav>

            {/* Desktop Stats */}
            <div className="hidden xl:flex items-center gap-4 bg-gradient-to-r from-blue-50 to-teal-50 px-6 py-3 rounded-2xl border border-blue-200">
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

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden w-11 h-11 bg-gradient-to-r from-blue-600 to-teal-600 rounded-xl flex items-center justify-center text-white shadow-lg active:scale-95 transition-all duration-200 touch-manipulation"
              aria-label="Toggle menu"
            >
              <div className="w-5 h-5 flex flex-col justify-center gap-1">
                <span className={`block w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`block w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="max-w-7xl mx-auto px-3 py-4">
              <div className="space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center gap-3 px-4 py-4 rounded-xl font-bold text-base transition-all duration-300 active:scale-95 touch-manipulation ${
                      pathname === item.href
                        ? 'bg-gradient-to-r from-blue-600 to-teal-600 text-white shadow-lg'
                        : 'text-gray-700 hover:bg-gray-50 active:bg-gray-100'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="text-xl">{item.icon}</span>
                    <span>{item.name}</span>
                  </Link>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <Link
                  href="/website/appointment"
                  className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-4 rounded-xl font-bold text-base active:scale-95 transition-all duration-300 touch-manipulation"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                  Book Appointment
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}