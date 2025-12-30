"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Home, User, Stethoscope, Building2, Phone, Shield, FileText, HelpCircle, Map } from "lucide-react";

export default function SitemapPage() {
  const sitePages = [
    { name: "Home", href: "/", icon: <Home className="w-6 h-6" />, color: "from-blue-500 to-cyan-500" },
    { name: "About Us", href: "/about", icon: <User className="w-6 h-6" />, color: "from-purple-500 to-pink-500" },
    { name: "Services", href: "/services", icon: <Stethoscope className="w-6 h-6" />, color: "from-green-500 to-emerald-500" },
    { name: "Facilities", href: "/facilities", icon: <Building2 className="w-6 h-6" />, color: "from-orange-500 to-red-500" },
    { name: "Contact", href: "/contact", icon: <Phone className="w-6 h-6" />, color: "from-indigo-500 to-purple-500" },
    { name: "Privacy Policy", href: "/privacy-policy", icon: <Shield className="w-6 h-6" />, color: "from-teal-500 to-blue-500" },
    { name: "Terms & Conditions", href: "/terms-and-conditions", icon: <FileText className="w-6 h-6" />, color: "from-rose-500 to-pink-500" },
    { name: "FAQ", href: "/faq", icon: <HelpCircle className="w-6 h-6" />, color: "from-amber-500 to-orange-500" },
    { name: "Sitemap", href: "/sitemap", icon: <Map className="w-6 h-6" />, color: "from-violet-500 to-purple-500" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F8FBFF] to-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-[#2E92ED]/10 to-[#0056AE]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-[#0056AE]/10 to-[#2E92ED]/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-[#2E92ED]/5 to-[#0056AE]/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Hero Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-[#0056AE] to-[#2E92ED] rounded-full mb-6 shadow-2xl">
              <Map className="w-12 h-12 text-white" />
            </div>
          </motion.div>
          
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Site Navigation
          </motion.h1>
          
          <motion.p
            className="text-xl max-w-2xl mx-auto"
            style={{color: '#586C80', fontFamily: 'Roboto, sans-serif'}}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Explore all pages and services of Varaha SDC diagnostic center
          </motion.p>
        </div>
      </section>

      {/* Sitemap Grid */}
      <section className="pb-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {sitePages.map((page, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, rotateY: -15 }}
                animate={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                className="group perspective-1000"
              >
                <Link href={page.href}>
                  <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-blue-100 hover:border-transparent overflow-hidden transform-gpu">
                    {/* Animated Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${page.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                    
                    {/* Floating Particles */}
                    <div className="absolute top-2 right-2 w-2 h-2 bg-[#2E92ED] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-bounce"></div>
                    <div className="absolute bottom-2 left-2 w-1 h-1 bg-[#0056AE] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse" style={{animationDelay: '0.5s'}}></div>
                    
                    {/* Content */}
                    <div className="relative z-10 flex items-center gap-4">
                      <div className={`w-16 h-16 bg-gradient-to-br ${page.color} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                        {page.icon}
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-xl font-bold group-hover:text-[#0056AE] transition-colors duration-300" style={{color: '#000000', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>
                          {page.name}
                        </h3>
                        <div className="w-0 h-0.5 bg-gradient-to-r from-[#0056AE] to-[#2E92ED] group-hover:w-full transition-all duration-500 mt-2"></div>
                      </div>
                      
                      {/* Arrow Animation */}
                      <div className="opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                        <svg className="w-5 h-5" style={{color: '#2E92ED'}} fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    
                    {/* Ripple Effect */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0 h-0 bg-[#2E92ED]/20 rounded-full group-hover:w-full group-hover:h-full transition-all duration-700"></div>
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