"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#0056AE] to-[#2E92ED] text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{fontFamily: 'Roboto, sans-serif', fontWeight: 600}}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Contact Us
          </motion.h1>
          <motion.p
            className="text-xl max-w-2xl mx-auto"
            style={{fontFamily: 'Roboto, sans-serif'}}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Get in touch with our medical experts for appointments and consultations
          </motion.p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>
                Get In Touch
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0056AE] to-[#2E92ED] rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2" style={{color: '#000000', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>Location</h3>
                    <p style={{color: '#586C80', fontFamily: 'Roboto, sans-serif'}}>
                      Troma Centre, MDM Hospital<br />
                      Shastri Nagar, Jodhpur, Rajasthan 342001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0056AE] to-[#2E92ED] rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2" style={{color: '#000000', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>Phone</h3>
                    <p style={{color: '#586C80', fontFamily: 'Roboto, sans-serif'}}>+91 8233338550</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0056AE] to-[#2E92ED] rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2" style={{color: '#000000', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>Email</h3>
                    <p style={{color: '#586C80', fontFamily: 'Roboto, sans-serif'}}>info@varahasdc.in</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0056AE] to-[#2E92ED] rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2" style={{color: '#000000', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>Hours</h3>
                    <p style={{color: '#586C80', fontFamily: 'Roboto, sans-serif'}}>24/7 Emergency Services</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>
                Book Appointment
              </h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2E92ED]"
                    style={{fontFamily: 'Roboto, sans-serif'}}
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2E92ED]"
                    style={{fontFamily: 'Roboto, sans-serif'}}
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2E92ED]"
                  style={{fontFamily: 'Roboto, sans-serif'}}
                />
                <select className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2E92ED]" style={{fontFamily: 'Roboto, sans-serif'}}>
                  <option>Select Service</option>
                  <option>CT Scan</option>
                  <option>MRI</option>
                  <option>X-Ray</option>
                  <option>Ultrasound</option>
                </select>
                <textarea
                  placeholder="Additional Message"
                  rows={4}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2E92ED]"
                  style={{fontFamily: 'Roboto, sans-serif'}}
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#0056AE] to-[#2E92ED] text-white font-bold py-4 px-8 rounded-lg hover:shadow-lg transition-all duration-300"
                  style={{fontFamily: 'Roboto, sans-serif', fontWeight: 600}}
                >
                  Book Appointment
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}