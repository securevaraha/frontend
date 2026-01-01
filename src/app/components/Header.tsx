// app/components/Header.tsx

"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const productCategories = [
    { name: "C-2300 Block Cutter", href: "/products/c-2300-block-cutter" },
    { name: "LPM Disk Polishing Machine", href: "/products/lpm-disk-polishing-machine" },
    { name: "LPM Flicker Machine", href: "/products/lpm-flicker-machine" },
    { name: "Stone Processing Machine", href: "/products/stone-processing-machine" },
    { name: "WSM Wire Saw Machine", href: "/products/wsm-wire-saw-machine" },
  ];

  return (
    <>
      {/* Top Contact Bar */}
      <div style={{backgroundColor: '#00143F'}} className="text-white py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone size={14} />
              <span>8233338550</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={14} />
              <span>info@varahasdc.in</span>
            </div>
          </div>
          <div className="text-xs flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            <span>Troma Centre, MDM Hospital, Shastri Nagar, Jodhpur, Rajasthan 342001</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`text-white shadow-lg sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-xl backdrop-blur-sm" : "bg-gradient-to-r from-[#0056AE] to-[#2E92ED]"
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center gap-3">
                <div className="relative">
                  <Image
                    src="/Varaha logo@4x 2.png"
                    alt="Varaha SDC Logo"
                    width={60}
                    height={60}
                    className="lg:w-[70px] lg:h-[70px] rounded-full ring-2 ring-white/20"
                    priority
                  />
                </div>
                <div className="hidden sm:block">
                  <span className={`text-xl lg:text-2xl font-bold ${isScrolled ? 'text-[#0056AE]' : 'text-[#E8F2FF]'}`} style={{fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>
                    Varaha SDC
                  </span>
                  <p className={`text-xs -mt-1 ${isScrolled ? 'text-[#2E92ED]' : 'text-[#B8D4F0]'}`} style={{fontFamily: 'Roboto, sans-serif'}}>
                    Advanced Diagnostic Center
                  </p>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex lg:items-center lg:space-x-8">
              <Link
                href="/"
                className={`transition-colors duration-300 font-medium relative group ${isScrolled ? 'text-gray-800 hover:text-[#0056AE]' : 'text-white hover:text-[#E8F2FF]'}`} style={{fontFamily: 'Roboto, sans-serif', fontWeight: 600}}
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full" style={{backgroundColor: '#2E92ED'}}></span>
              </Link>
              <Link
                href="/about"
                className={`transition-colors duration-300 font-medium relative group ${isScrolled ? 'text-gray-800 hover:text-[#0056AE]' : 'text-white hover:text-[#E8F2FF]'}`} style={{fontFamily: 'Roboto, sans-serif', fontWeight: 600}}
              >
                About Us
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full" style={{backgroundColor: '#2E92ED'}}></span>
              </Link>
              <Link
                href="/services"
                className={`transition-colors duration-300 font-medium relative group ${isScrolled ? 'text-gray-800 hover:text-[#0056AE]' : 'text-white hover:text-[#E8F2FF]'}`} style={{fontFamily: 'Roboto, sans-serif', fontWeight: 600}}
              >
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full" style={{backgroundColor: '#2E92ED'}}></span>
              </Link>
              <Link
                href="/dual-energy"
                className={`transition-colors duration-300 font-medium relative group ${isScrolled ? 'text-gray-800 hover:text-[#0056AE]' : 'text-white hover:text-[#E8F2FF]'}`} style={{fontFamily: 'Roboto, sans-serif', fontWeight: 600}}
              >
                Dual Energy
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full" style={{backgroundColor: '#2E92ED'}}></span>
              </Link>
              <Link
                href="/contact"
                className={`transition-colors duration-300 font-medium relative group ${isScrolled ? 'text-gray-800 hover:text-[#0056AE]' : 'text-white hover:text-[#E8F2FF]'}`} style={{fontFamily: 'Roboto, sans-serif', fontWeight: 600}}
              >
                Contact Us
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full" style={{backgroundColor: '#2E92ED'}}></span>
              </Link>
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link
                href="/contact"
                className="font-semibold px-6 py-2.5 rounded-full hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-lg" style={{backgroundColor: '#2E92ED', color: '#ffffff', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}
              >
                Book Appointment
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-lg transition-colors ${isScrolled ? 'text-gray-800 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white shadow-xl border-t border-gray-200 animate-slide-up">
            <div className="py-4">
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="block px-6 py-3 text-gray-800 hover:bg-green-50 hover:text-brand-green-dark transition-colors font-medium"
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={() => setIsMenuOpen(false)}
                className="block px-6 py-3 text-gray-800 hover:bg-green-50 hover:text-brand-green-dark transition-colors font-medium"
              >
                About Us
              </Link>
              <Link
                href="/services"
                onClick={() => setIsMenuOpen(false)}
                className="block px-6 py-3 text-gray-800 hover:bg-green-50 hover:text-brand-green-dark transition-colors font-medium"
              >
                Services
              </Link>
              <Link
                href="/dual-energy"
                onClick={() => setIsMenuOpen(false)}
                className="block px-6 py-3 text-gray-800 hover:bg-green-50 hover:text-brand-green-dark transition-colors font-medium"
              >
                Dual Energy
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="block px-6 py-3 text-gray-800 hover:bg-green-50 hover:text-brand-green-dark transition-colors font-medium border-t border-gray-100"
              >
                Contact Us
              </Link>

              <div className="px-6 py-4 border-t border-gray-100">
                <Link
                  href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full text-center bg-brand-green-dark text-white font-semibold py-3 rounded-lg hover:bg-brand-green transition-colors"
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;