"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Calendar, Stethoscope, Shield, Zap } from "lucide-react";

export default function ContactPage() {
  return (
    <div>
      {/* Compact Hero Section */}
      <section className="relative py-16 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/hero.png"
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
            Contact Varaha SDC
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

      {/* Quick Contact Cards */}
      <section className="py-12 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="bg-white p-4 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-[#0056AE] to-[#2E92ED] rounded-full flex items-center justify-center mx-auto mb-3">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-sm mb-1" style={{color: '#0056AE'}}>Call Now</h3>
              <p className="text-xs" style={{color: '#586C80'}}>8233338550</p>
            </div>
            
            <div className="bg-white p-4 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-sm mb-1" style={{color: '#0056AE'}}>Same Day</h3>
              <p className="text-xs" style={{color: '#586C80'}}>No Waiting</p>
            </div>
            
            <div className="bg-white p-4 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-sm mb-1" style={{color: '#0056AE'}}>24/7 Emergency</h3>
              <p className="text-xs" style={{color: '#586C80'}}>Always Open</p>
            </div>
            
            <div className="bg-white p-4 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-sm mb-1" style={{color: '#0056AE'}}>Fast Reports</h3>
              <p className="text-xs" style={{color: '#586C80'}}>24 Hours</p>
            </div>
          </div>
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

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl border border-blue-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0056AE] to-[#2E92ED] rounded-full flex items-center justify-center">
                    <Stethoscope className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>
                      Book Your CT Scan
                    </h3>
                    <p className="text-sm" style={{color: '#586C80'}}>Same day service available</p>
                  </div>
                </div>
                
                <form className="space-y-4" onSubmit={async (e) => {
                  e.preventDefault();
                  const formData = new FormData(e.target as HTMLFormElement);
                  const data = {
                    fullName: formData.get('fullName'),
                    gender: formData.get('gender'),
                    age: formData.get('age'),
                    contactNumber: formData.get('contactNumber'),
                    address: formData.get('address'),
                    scan: formData.get('scan'),
                    appointmentDate: formData.get('appointmentDate'),
                    scheduleTime: formData.get('scheduleTime'),
                    additionalInformation: formData.get('additionalInformation')
                  };
                  
                  try {
                    const response = await fetch('/api/contact', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify(data)
                    });
                    
                    if (response.ok) {
                      alert('Appointment booked successfully! We will contact you soon.');
                      (e.target as HTMLFormElement).reset();
                    } else {
                      alert('Error booking appointment. Please try again.');
                    }
                  } catch (error) {
                    alert('Error booking appointment. Please try again.');
                  }
                }}>
                  <div>
                    <input
                      name="fullName"
                      type="text"
                      placeholder="Full Name"
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2E92ED] text-sm"
                      style={{fontFamily: 'Roboto, sans-serif'}}
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <select
                      name="gender"
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2E92ED] text-sm"
                      style={{fontFamily: 'Roboto, sans-serif'}}
                    >
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                    <input
                      name="age"
                      type="number"
                      placeholder="Age"
                      required
                      min="1"
                      max="120"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2E92ED] text-sm"
                      style={{fontFamily: 'Roboto, sans-serif'}}
                    />
                  </div>
                  <div>
                    <input
                      name="contactNumber"
                      type="tel"
                      placeholder="Contact Number"
                      required
                      pattern="[0-9]{10}"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2E92ED] text-sm"
                      style={{fontFamily: 'Roboto, sans-serif'}}
                    />
                  </div>
                  <div>
                    <textarea
                      name="address"
                      placeholder="Address"
                      required
                      rows={2}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2E92ED] text-sm"
                      style={{fontFamily: 'Roboto, sans-serif'}}
                    ></textarea>
                  </div>
                  <div>
                    <select
                      name="scan"
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2E92ED] text-sm"
                      style={{fontFamily: 'Roboto, sans-serif'}}
                    >
                      <option value="">Select Scan Type</option>
                      <option value="CT Scan - General">CT Scan - General</option>
                      <option value="CT Scan - Cardiac">CT Scan - Cardiac</option>
                      <option value="CT Scan - Emergency">CT Scan - Emergency</option>
                      <option value="Dual Energy CT">Dual Energy CT</option>
                      <option value="CT Angiography">CT Angiography</option>
                      <option value="CT Brain">CT Brain</option>
                      <option value="CT Chest">CT Chest</option>
                      <option value="CT Abdomen">CT Abdomen</option>
                      <option value="CT Spine">CT Spine</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      name="appointmentDate"
                      type="date"
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2E92ED] text-sm"
                      style={{fontFamily: 'Roboto, sans-serif'}}
                    />
                    <input
                      name="scheduleTime"
                      type="time"
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2E92ED] text-sm"
                      style={{fontFamily: 'Roboto, sans-serif'}}
                    />
                  </div>
                  <div>
                    <textarea
                      name="additionalInformation"
                      placeholder="Additional Information (Optional)"
                      rows={3}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2E92ED] text-sm"
                      style={{fontFamily: 'Roboto, sans-serif'}}
                    ></textarea>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      className="flex-1 bg-gradient-to-r from-[#0056AE] to-[#2E92ED] text-white font-bold py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300 text-sm"
                      style={{fontFamily: 'Roboto, sans-serif', fontWeight: 600}}
                    >
                      Book Appointment
                    </button>
                    <button
                      type="button"
                      className="flex-1 border-2 border-[#2E92ED] text-[#2E92ED] font-bold py-3 px-6 rounded-lg hover:bg-[#2E92ED] hover:text-white transition-all duration-300 text-sm"
                      style={{fontFamily: 'Roboto, sans-serif', fontWeight: 600}}
                    >
                      Call Now: 8233338550
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-8" style={{backgroundColor: '#F8FBFF'}}>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Side - Location Info */}
            <div>
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
            </div>
            
            {/* Right Side - Map */}
            <div>
              <div className="bg-white rounded-xl p-3 shadow-lg">
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