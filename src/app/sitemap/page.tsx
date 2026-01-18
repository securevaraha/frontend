"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Home, User, Stethoscope, Zap, Heart, Phone } from "lucide-react";

export default function SitemapPage() {
  const sitePages = [
    { name: "Home", href: "/", icon: <Home className="w-8 h-8" />, description: "Welcome to Varaha SDC" },
    { name: "About Us", href: "/about", icon: <User className="w-8 h-8" />, description: "Learn about our center" },
    { name: "Services", href: "/services", icon: <Stethoscope className="w-8 h-8" />, description: "Our CT scan services" },
    { name: "Dual Energy", href: "/dual-energy", icon: <Zap className="w-8 h-8" />, description: "Advanced dual energy CT" },
    { name: "Cardiac", href: "/cardiac", icon: <Heart className="w-8 h-8" />, description: "Cardiac CT imaging" },
    { name: "Contact Us", href: "/contact", icon: <Phone className="w-8 h-8" />, description: "Get in touch with us" }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden" style={{background: 'linear-gradient(135deg, #F8FBFF 0%, #E8F2FF 50%, #ffffff 100%)'}}>
      {/* Animated Medical Background */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full animate-pulse" style={{backgroundColor: '#2E92ED', opacity: 0.1}}></div>
        <div className="absolute top-40 right-20 w-24 h-24 rounded-full animate-bounce" style={{backgroundColor: '#0056AE', opacity: 0.15, animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 rounded-full animate-pulse" style={{backgroundColor: '#2E92ED', opacity: 0.08, animationDelay: '2s'}}></div>
        <div className="absolute bottom-40 right-1/3 w-28 h-28 rounded-full animate-bounce" style={{backgroundColor: '#0056AE', opacity: 0.12, animationDelay: '3s'}}></div>
      </div>

      {/* Hero Section */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, type: "spring", bounce: 0.4 }}
            className="mb-8"
          >
            <div className="inline-flex items-center justify-center w-32 h-32 rounded-full mb-6 shadow-2xl relative" style={{background: 'linear-gradient(135deg, #0056AE, #2E92ED)'}}>
              <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              <div className="absolute inset-0 rounded-full animate-ping" style={{backgroundColor: '#2E92ED', opacity: 0.3}}></div>
            </div>
          </motion.div>
          
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6"
            style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 700}}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Site Navigation
          </motion.h1>
          
          <motion.p
            className="text-xl max-w-3xl mx-auto leading-relaxed"
            style={{color: '#586C80', fontFamily: 'Roboto, sans-serif'}}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Navigate through Varaha SDC's advanced CT scan center - Your trusted partner in medical imaging
          </motion.p>
        </div>
      </section>

      {/* Interactive Sitemap Cards */}
      <section className="pb-20 relative z-10">
        <div className="container mx-auto px-8 sm:px-12 lg:px-16 xl:px-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sitePages.map((page, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100, rotateX: -30 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.15,
                  type: "spring",
                  bounce: 0.3
                }}
                whileHover={{ 
                  scale: 1.08, 
                  rotateY: 8,
                  z: 50,
                  transition: { duration: 0.3 }
                }}
                className="group perspective-1000"
              >
                <Link href={page.href}>
                  <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-[#2E92ED] overflow-hidden transform-gpu h-64">
                    {/* Animated Background */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{background: 'linear-gradient(135deg, #E8F2FF, #F8FBFF)'}}></div>
                    
                    {/* Floating Elements */}
                    <div className="absolute top-4 right-4 w-3 h-3 rounded-full animate-pulse" style={{backgroundColor: '#2E92ED', opacity: 0.6}}></div>
                    <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full animate-bounce" style={{backgroundColor: '#0056AE', opacity: 0.8, animationDelay: '0.5s'}}></div>
                    
                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col justify-between">
                      <div className="flex items-center gap-4 mb-4">
                        <motion.div 
                          className="w-20 h-20 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500"
                          style={{background: 'linear-gradient(135deg, #0056AE, #2E92ED)'}}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          {page.icon}
                        </motion.div>
                        
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold group-hover:text-[#0056AE] transition-colors duration-300 mb-2" style={{color: '#000000', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>
                            {page.name}
                          </h3>
                          <div className="w-0 h-1 rounded-full group-hover:w-full transition-all duration-700" style={{background: 'linear-gradient(90deg, #0056AE, #2E92ED)'}}></div>
                        </div>
                      </div>
                      
                      <p className="text-sm leading-relaxed group-hover:text-[#0056AE] transition-colors duration-300" style={{color: '#586C80', fontFamily: 'Roboto, sans-serif'}}>
                        {page.description}
                      </p>
                      
                      {/* Hover Arrow */}
                      <motion.div 
                        className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300"
                        initial={{ x: -20 }}
                        whileHover={{ x: 0 }}
                      >
                        <svg className="w-6 h-6" style={{color: '#2E92ED'}} fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </motion.div>
                    </div>
                    
                    {/* Ripple Effect */}
                    <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0 h-0 rounded-full group-hover:w-full group-hover:h-full transition-all duration-1000" style={{backgroundColor: '#2E92ED', opacity: 0.1}}></div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}