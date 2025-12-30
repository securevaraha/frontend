// app/components/Footer.tsx

"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#0056AE] via-[#00143F] to-[#0056AE] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="relative">
                <Image
                  src="/Varaha logo@4x 2.png"
                  alt="Varaha SDC Logo"
                  width={50}
                  height={50}
                  className="rounded-full ring-2 ring-white/20"
                />
              </div>
              <div>
                <span className="text-xl font-bold text-white block" style={{fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>
                  Varaha SDC
                </span>
                <span className="text-xs" style={{color: '#B8D4F0', fontFamily: 'Roboto, sans-serif'}}>
                  Advanced Diagnostic Center
                </span>
              </div>
            </Link>
            
            <p className="mb-6 leading-relaxed" style={{color: '#B8D4F0', fontFamily: 'Roboto, sans-serif'}}>
              Engineering excellence in medical diagnostics with cutting-edge
              technology. Trusted by thousands of patients for accurate diagnosis.
            </p>
            
            <div className="flex space-x-4">
              <Link
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110" style={{backgroundColor: 'rgba(46, 146, 237, 0.2)'}} onMouseEnter={(e) => e.target.style.backgroundColor = '#2E92ED'} onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(46, 146, 237, 0.2)'}
              >
                <Facebook size={18} />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110" style={{backgroundColor: 'rgba(46, 146, 237, 0.2)'}} onMouseEnter={(e) => e.target.style.backgroundColor = '#2E92ED'} onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(46, 146, 237, 0.2)'}
              >
                <Twitter size={18} />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110" style={{backgroundColor: 'rgba(46, 146, 237, 0.2)'}} onMouseEnter={(e) => e.target.style.backgroundColor = '#2E92ED'} onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(46, 146, 237, 0.2)'}
              >
                <Linkedin size={18} />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110" style={{backgroundColor: 'rgba(46, 146, 237, 0.2)'}} onMouseEnter={(e) => e.target.style.backgroundColor = '#2E92ED'} onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(46, 146, 237, 0.2)'}
              >
                <Instagram size={18} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6" style={{color: '#2E92ED', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/about" 
                  className="transition-colors duration-300 flex items-center gap-2 group" style={{color: '#B8D4F0', fontFamily: 'Roboto, sans-serif'}} onMouseEnter={(e) => e.target.style.color = '#ffffff'} onMouseLeave={(e) => e.target.style.color = '#B8D4F0'}
                >
                  <span className="w-1 h-1 rounded-full transition-all duration-300 group-hover:w-2" style={{backgroundColor: '#2E92ED'}}></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="transition-colors duration-300 flex items-center gap-2 group" style={{color: '#B8D4F0', fontFamily: 'Roboto, sans-serif'}} onMouseEnter={(e) => e.target.style.color = '#ffffff'} onMouseLeave={(e) => e.target.style.color = '#B8D4F0'}
                >
                  <span className="w-1 h-1 rounded-full transition-all duration-300 group-hover:w-2" style={{backgroundColor: '#2E92ED'}}></span>
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/facilities"
                  className="transition-colors duration-300 flex items-center gap-2 group" style={{color: '#B8D4F0', fontFamily: 'Roboto, sans-serif'}} onMouseEnter={(e) => e.target.style.color = '#ffffff'} onMouseLeave={(e) => e.target.style.color = '#B8D4F0'}
                >
                  <span className="w-1 h-1 rounded-full transition-all duration-300 group-hover:w-2" style={{backgroundColor: '#2E92ED'}}></span>
                  Facilities
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="transition-colors duration-300 flex items-center gap-2 group" style={{color: '#B8D4F0', fontFamily: 'Roboto, sans-serif'}} onMouseEnter={(e) => e.target.style.color = '#ffffff'} onMouseLeave={(e) => e.target.style.color = '#B8D4F0'}
                >
                  <span className="w-1 h-1 rounded-full transition-all duration-300 group-hover:w-2" style={{backgroundColor: '#2E92ED'}}></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6" style={{color: '#2E92ED', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>
              Patient Care
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/privacy-policy"
                  className="transition-colors duration-300 flex items-center gap-2 group" style={{color: '#B8D4F0', fontFamily: 'Roboto, sans-serif'}} onMouseEnter={(e) => e.target.style.color = '#ffffff'} onMouseLeave={(e) => e.target.style.color = '#B8D4F0'}
                >
                  <span className="w-1 h-1 rounded-full transition-all duration-300 group-hover:w-2" style={{backgroundColor: '#2E92ED'}}></span>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-and-conditions"
                  className="transition-colors duration-300 flex items-center gap-2 group" style={{color: '#B8D4F0', fontFamily: 'Roboto, sans-serif'}} onMouseEnter={(e) => e.target.style.color = '#ffffff'} onMouseLeave={(e) => e.target.style.color = '#B8D4F0'}
                >
                  <span className="w-1 h-1 rounded-full transition-all duration-300 group-hover:w-2" style={{backgroundColor: '#2E92ED'}}></span>
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="transition-colors duration-300 flex items-center gap-2 group" style={{color: '#B8D4F0', fontFamily: 'Roboto, sans-serif'}} onMouseEnter={(e) => e.target.style.color = '#ffffff'} onMouseLeave={(e) => e.target.style.color = '#B8D4F0'}
                >
                  <span className="w-1 h-1 rounded-full transition-all duration-300 group-hover:w-2" style={{backgroundColor: '#2E92ED'}}></span>
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6" style={{color: '#2E92ED', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>
              Contact Info
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 flex-shrink-0" style={{color: '#2E92ED'}} size={18} />
                <div style={{color: '#B8D4F0', fontFamily: 'Roboto, sans-serif'}}>
                  <p className="font-medium text-white mb-1">Location:</p>
                  <p className="text-sm">Troma Centre, MDM Hospital, Shastri Nagar, Jodhpur, Rajasthan 342001</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="flex-shrink-0" style={{color: '#2E92ED'}} size={18} />
                <a 
                  href="mailto:info@varahasdc.in"
                  className="transition-colors" style={{color: '#B8D4F0', fontFamily: 'Roboto, sans-serif'}} onMouseEnter={(e) => e.target.style.color = '#ffffff'} onMouseLeave={(e) => e.target.style.color = '#B8D4F0'}
                >
                  info@varahasdc.in
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="flex-shrink-0" style={{color: '#2E92ED'}} size={18} />
                <a 
                  href="tel:+918233338550"
                  className="transition-colors" style={{color: '#B8D4F0', fontFamily: 'Roboto, sans-serif'}} onMouseEnter={(e) => e.target.style.color = '#ffffff'} onMouseLeave={(e) => e.target.style.color = '#B8D4F0'}
                >
                  +91 8233338550
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <Clock className="flex-shrink-0" style={{color: '#2E92ED'}} size={18} />
                <div style={{color: '#B8D4F0', fontFamily: 'Roboto, sans-serif'}}>
                  <p className="text-sm">24/7 Emergency Services</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <p className="text-center lg:text-left" style={{color: '#B8D4F0', fontFamily: 'Roboto, sans-serif'}}>
              &copy; {new Date().getFullYear()} Varaha SDC. All Rights Reserved.
            </p>
            <div className="flex items-center gap-6 text-sm" style={{color: '#B8D4F0', fontFamily: 'Roboto, sans-serif'}}>
              <Link href="/privacy-policy" className="transition-colors" onMouseEnter={(e) => e.target.style.color = '#ffffff'} onMouseLeave={(e) => e.target.style.color = '#B8D4F0'}>
                Privacy
              </Link>
              <Link href="/terms-and-conditions" className="transition-colors" onMouseEnter={(e) => e.target.style.color = '#ffffff'} onMouseLeave={(e) => e.target.style.color = '#B8D4F0'}>
                Terms
              </Link>
              <Link href="/sitemap" className="transition-colors" onMouseEnter={(e) => e.target.style.color = '#ffffff'} onMouseLeave={(e) => e.target.style.color = '#B8D4F0'}>
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;