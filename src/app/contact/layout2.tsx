"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Calendar, Stethoscope, Shield, Zap } from "lucide-react";

export default function ContactPageAlt() {
  return (
    <div>
      {/* Split Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Contact Info */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl lg:text-5xl font-bold mb-4" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>
                  Contact Varaha SDC
                </h1>
                <p className="text-lg mb-8" style={{color: '#586C80', fontFamily: 'Roboto, sans-serif'}}>
                  Advanced CT Imaging • Same Day Service • 24/7 Emergency Care
                </p>
              </motion.div>

              {/* Contact Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-[#0056AE] to-[#2E92ED] text-white p-6 rounded-2xl">
                  <Phone className="w-8 h-8 mb-3" />
                  <h3 className="font-bold mb-1">Call Now</h3>
                  <p className="text-sm opacity-90">8233338550</p>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100">
                  <Calendar className="w-8 h-8 mb-3" style={{color: '#2E92ED'}} />
                  <h3 className="font-bold mb-1" style={{color: '#0056AE'}}>Same Day</h3>
                  <p className="text-sm" style={{color: '#586C80'}}>No Waiting</p>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100">
                  <Shield className="w-8 h-8 mb-3" style={{color: '#2E92ED'}} />
                  <h3 className="font-bold mb-1" style={{color: '#0056AE'}}>24/7 Emergency</h3>
                  <p className="text-sm" style={{color: '#586C80'}}>Always Open</p>
                </div>
                
                <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-2xl">
                  <Zap className="w-8 h-8 mb-3" />
                  <h3 className="font-bold mb-1">Fast Reports</h3>
                  <p className="text-sm opacity-90">24 Hours</p>
                </div>
              </div>

              {/* Address */}
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0056AE] to-[#2E92ED] rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2" style={{color: '#0056AE'}}>Visit Our Center</h3>
                    <p style={{color: '#586C80', fontFamily: 'Roboto, sans-serif'}}>
                      Troma Centre, MDM Hospital<br />
                      Shastri Nagar, Jodhpur, Rajasthan 342001
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-blue-100">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0056AE] to-[#2E92ED] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Stethoscope className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold mb-2" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>
                  Book Your CT Scan
                </h2>
                <p className="text-sm" style={{color: '#586C80'}}>Same day service available</p>
              </div>
              
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:border-[#2E92ED]"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:border-[#2E92ED]"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:border-[#2E92ED]"
                />
                <select className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:border-[#2E92ED]">
                  <option>Select Scan Type</option>
                  <option>CT Scan - General</option>
                  <option>CT Scan - Cardiac</option>
                  <option>CT Scan - Emergency</option>
                  <option>Dual Energy CT</option>
                </select>
                <textarea
                  placeholder="Additional Information (Optional)"
                  rows={3}
                  className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:border-[#2E92ED]"
                ></textarea>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#0056AE] to-[#2E92ED] text-white font-bold py-4 px-6 rounded-xl hover:shadow-lg transition-all duration-300"
                >
                  Book Appointment Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Compact Map */}
      <section className="py-12" style={{backgroundColor: '#F8FBFF'}}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-4 shadow-lg">
              <div className="aspect-[21/9] rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3576.8234567890123!2d73.0243!3d26.2389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDE0JzIwLjAiTiA3M8KwMDEnMjcuNSJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{border: 0}}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-xl"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}