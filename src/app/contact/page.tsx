"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Calendar, Shield, Zap } from "lucide-react";
import HomeContactForm from "../components/HomeContactForm";

export default function ContactPage() {
  return (
    <div>
      {/* Compact Hero Section */}
      <section className="relative h-[60vh] w-full flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/aboutus.jpeg"
            alt="Medical imaging equipment"
            className="w-full h-full object-cover brightness-[0.4]"
          />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1
            className="text-3xl md:text-4xl font-bold mb-4 text-white"
            style={{fontFamily: 'Roboto, sans-serif', fontWeight: 600}}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Contact Us
          </motion.h1>
          <motion.p
            className="text-lg max-w-2xl mx-auto text-white"
            style={{fontFamily: 'Roboto, sans-serif'}}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Advanced CT Imaging • Same Day Service • 24/7 Emergency Care
          </motion.p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold mb-6" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>
                Visit Our Center
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#0056AE] to-[#2E92ED] rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 text-sm" style={{color: '#000000', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>Address</h3>
                    <p className="text-sm" style={{color: '#586C80', fontFamily: 'Roboto, sans-serif'}}>
                      Troma Centre, MDM Hospital<br />
                      Shastri Nagar, Jodhpur, Rajasthan 342001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#0056AE] to-[#2E92ED] rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 text-sm" style={{color: '#000000', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>Phone</h3>
                    <p className="text-sm" style={{color: '#586C80', fontFamily: 'Roboto, sans-serif'}}>+91 8233338550</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#0056AE] to-[#2E92ED] rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 text-sm" style={{color: '#000000', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>Email</h3>
                    <p className="text-sm" style={{color: '#586C80', fontFamily: 'Roboto, sans-serif'}}>info@varahasdc.in</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#0056AE] to-[#2E92ED] rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 text-sm" style={{color: '#000000', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>Hours</h3>
                    <p className="text-sm" style={{color: '#586C80', fontFamily: 'Roboto, sans-serif'}}>24/7 Emergency Services</p>
                  </div>
                </div>
              </div>
              
              {/* Services List */}
              <div className="mt-8 p-4 rounded-xl" style={{backgroundColor: '#F8FBFF'}}>
                <h3 className="font-bold mb-3 text-sm" style={{color: '#0056AE'}}>Our Services</h3>
                <div className="space-y-2">
                  {['256 Slice CT Scan', 'Dual Energy Imaging', 'Cardiac CT', 'Emergency Scans', '3D Reconstruction'].map((service, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#2E92ED] rounded-full"></div>
                      <span className="text-xs" style={{color: '#586C80'}}>{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Get In Touch Form */}
            <div className="lg:col-span-2">
              <div className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-2xl border border-blue-100">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#0056AE] to-[#2E92ED] rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-2" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>Get In Touch</h3>
                    <p className="text-sm" style={{color: '#586C80', fontFamily: 'Roboto, sans-serif'}}>Schedule your appointment or ask any questions</p>
                  </div>
                  
                  <HomeContactForm />
                </div>
                
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-[#0056AE] to-[#2E92ED] rounded-full animate-bounce"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-[#2E92ED] to-[#0056AE] rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-8" style={{backgroundColor: '#F8FBFF'}}>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Side - Find Us Info */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-4" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>
                Find Us
              </h2>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0056AE] to-[#2E92ED] rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2" style={{color: '#000000', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>Our Location</h3>
                    <p className="text-lg leading-relaxed" style={{color: '#586C80', fontFamily: 'Roboto, sans-serif'}}>
                      Troma Centre, MDM Hospital<br />
                      Shastri Nagar, Jodhpur, Rajasthan 342001
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Quick Contact Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-blue-50 to-white p-4 rounded-xl shadow-lg text-center border border-blue-100">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0056AE] to-[#2E92ED] rounded-full flex items-center justify-center mx-auto mb-3">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-sm mb-1" style={{color: '#0056AE'}}>Call Now</h3>
                  <p className="text-xs" style={{color: '#586C80'}}>8233338550</p>
                </div>
                
                <div className="bg-gradient-to-br from-green-50 to-white p-4 rounded-xl shadow-lg text-center border border-green-100">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-sm mb-1" style={{color: '#0056AE'}}>Same Day</h3>
                  <p className="text-xs" style={{color: '#586C80'}}>No Waiting</p>
                </div>
                
                <div className="bg-gradient-to-br from-red-50 to-white p-4 rounded-xl shadow-lg text-center border border-red-100">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-sm mb-1" style={{color: '#0056AE'}}>24/7 Emergency</h3>
                  <p className="text-xs" style={{color: '#586C80'}}>Always Open</p>
                </div>
                
                <div className="bg-gradient-to-br from-purple-50 to-white p-4 rounded-xl shadow-lg text-center border border-purple-100">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-sm mb-1" style={{color: '#0056AE'}}>Fast Reports</h3>
                  <p className="text-xs" style={{color: '#586C80'}}>24 Hours</p>
                </div>
              </div>
            </div>
            
            {/* Right Side - Map */}
            <div className="flex items-start">
              <div className="bg-white rounded-xl p-3 shadow-lg w-full">
                <div className="aspect-[4/3] rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3576.8234567890123!2d73.0243!3d26.2389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDE0JzIwLjAiTiA3M8KwMDEnMjcuNSJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{border: 0}}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}