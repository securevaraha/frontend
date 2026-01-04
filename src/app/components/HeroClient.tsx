// app/components/HeroClient.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

export default function HeroClient() {
  return (
    <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-6"
      >
        {/* Badge */}
        {/* Removed trusted badge */}

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight" 
          style={{fontFamily: 'Roboto, sans-serif', fontWeight: 700, letterSpacing: '-0.02em'}}
        >
          <span className="text-white">Engineering the Future of</span>{" "}
          <span style={{color: '#2E92ED'}}>Medical Diagnostics</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto text-gray-200 leading-relaxed" 
          style={{fontFamily: 'Roboto, sans-serif', lineHeight: '1.7'}}
        >
          Varaha SDC delivers precision, reliability, and unmatched
          performance in every diagnostic service we provide. Transform your healthcare with
          cutting-edge medical imaging technology.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
        >
          <Link
            href="/services"
            className="group font-bold py-3.5 px-7 rounded-full text-base sm:text-lg hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center gap-3 min-w-[180px] sm:min-w-[200px] justify-center" 
            style={{backgroundColor: '#2E92ED', color: '#ffffff', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}
          >
            Explore Our Services
            <ArrowRight 
              size={18} 
              className="transition-transform duration-300 group-hover:translate-x-1" 
            />
          </Link>
          
          <Link
            href="/contact"
            className="group bg-transparent border-2 border-white text-white font-semibold py-3.5 px-7 rounded-full text-base sm:text-lg hover:bg-white transition-all duration-300 flex items-center gap-3 min-w-[180px] sm:min-w-[200px] justify-center backdrop-blur-sm" 
            style={{fontFamily: 'Roboto, sans-serif', fontWeight: 600}} 
            onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#0056AE'} 
            onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#ffffff'}
          >
            <Play size={16} />
            Book Appointment
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-10 sm:pt-12 max-w-4xl mx-auto"
        >
          <div className="text-center">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold" style={{color: '#2E92ED', fontFamily: 'Roboto, sans-serif', fontWeight: 700}}>25+</div>
            <div className="text-xs sm:text-sm text-gray-300 mt-1" style={{fontFamily: 'Roboto, sans-serif'}}>Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold" style={{color: '#2E92ED', fontFamily: 'Roboto, sans-serif', fontWeight: 700}}>500+</div>
            <div className="text-xs sm:text-sm text-gray-300 mt-1" style={{fontFamily: 'Roboto, sans-serif'}}>Happy Patients</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold" style={{color: '#2E92ED', fontFamily: 'Roboto, sans-serif', fontWeight: 700}}>50+</div>
            <div className="text-xs sm:text-sm text-gray-300 mt-1" style={{fontFamily: 'Roboto, sans-serif'}}>Medical Services</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold" style={{color: '#2E92ED', fontFamily: 'Roboto, sans-serif', fontWeight: 700}}>24/7</div>
            <div className="text-xs sm:text-sm text-gray-300 mt-1" style={{fontFamily: 'Roboto, sans-serif'}}>Support</div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}