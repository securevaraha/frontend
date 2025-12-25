'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'

export default function HomePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' })
    }
  }

  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      role: "Cardiologist",
      text: "Exceptional MRI imaging quality. The detailed cardiac scans help me make accurate diagnoses.",
      rating: 5,
      avatar: "👩⚕️"
    },
    {
      name: "Rajesh Kumar",
      role: "Patient",
      text: "Professional staff, comfortable environment, and quick results. Highly recommend.",
      rating: 5,
      avatar: "👨"
    },
    {
      name: "Dr. Michael Chen",
      role: "Neurologist",
      text: "Outstanding brain MRI capabilities. Crystal-clear images for neurological assessments.",
      rating: 5,
      avatar: "👨⚕️"
    }
  ]

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-teal-50 py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-teal-100 px-3 sm:px-4 py-2 rounded-full mb-4 sm:mb-6">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs sm:text-sm font-semibold text-gray-700">24/7 Emergency Available</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 sm:mb-6">
                <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                  Advanced MRI
                </span>
                <br />
                <span className="text-gray-900">& CT Scan Center</span>
              </h1>
              
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                State-of-the-art 3T MRI and 64-slice CT scanner technology providing precise diagnostic imaging with expert radiologist interpretation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12 justify-center lg:justify-start">
                <Link href="/website/appointment" className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold hover:shadow-xl transition-all duration-300 text-center">
                  Book MRI/CT Scan
                </Link>
                <Link href="/website/services" className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold hover:shadow-lg transition-all duration-300 text-center">
                  View Services
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-md mx-auto lg:mx-0">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">15+</div>
                  <div className="text-gray-600 text-xs sm:text-sm font-medium">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">50K+</div>
                  <div className="text-gray-600 text-xs sm:text-sm font-medium">Scans Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">24/7</div>
                  <div className="text-gray-600 text-xs sm:text-sm font-medium">Emergency Care</div>
                </div>
              </div>
            </div>

            <div className="relative mt-8 lg:mt-0">
              <div className="bg-gradient-to-br from-blue-100 to-teal-100 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8">
                <div className="grid grid-cols-2 gap-3 sm:gap-6 mb-6 sm:mb-8">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl sm:rounded-2xl p-3 sm:p-6 text-center text-white">
                    <h3 className="font-bold mb-1 sm:mb-2 text-sm sm:text-base">3T MRI Scanner</h3>
                    <p className="text-blue-100 text-xs sm:text-sm">High-resolution imaging</p>
                  </div>
                  <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl sm:rounded-2xl p-3 sm:p-6 text-center text-white">
                    <h3 className="font-bold mb-1 sm:mb-2 text-sm sm:text-base">64-Slice CT</h3>
                    <p className="text-teal-100 text-xs sm:text-sm">Rapid scanning</p>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Why Choose Our Imaging?</h3>
                  <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-700">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-4 sm:w-5 h-4 sm:h-5 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-2 sm:w-3 h-2 sm:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <span>Expert radiologist reports within 24 hours</span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-4 sm:w-5 h-4 sm:h-5 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-2 sm:w-3 h-2 sm:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <span>Latest technology for accurate diagnosis</span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-4 sm:w-5 h-4 sm:h-5 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-2 sm:w-3 h-2 sm:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <span>Comfortable, patient-friendly environment</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="bg-gradient-to-br from-indigo-50 to-purple-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Our Specialties</h2>
            <p className="text-gray-600">Expert diagnostic services</p>
          </div>
          
          <div className="relative mx-8">
            {/* Left Arrow */}
            <button 
              onClick={scrollLeft}
              className="absolute -left-8 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl hover:bg-blue-50 transition-all duration-300"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
              </svg>
            </button>
            
            {/* Right Arrow */}
            <button 
              onClick={scrollRight}
              className="absolute -right-8 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl hover:bg-blue-50 transition-all duration-300"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
              </svg>
            </button>
            
            <div className="overflow-x-auto scrollbar-hide" ref={scrollRef}>
              <div className="flex gap-4 pb-4 px-4" style={{width: 'max-content'}}>
                {[
                  { 
                    title: 'Cardiology Imaging', 
                    desc: 'Advanced cardiac MRI and CT angiography for heart conditions',
                    features: ['Cardiac MRI', 'CT Angiography', 'Stress Testing', 'Heart Function Analysis'],
                    gradient: 'from-red-500 to-pink-600'
                  },
                  { 
                    title: 'Neurology Scans', 
                    desc: 'Brain and spine MRI with functional imaging capabilities',
                    features: ['Brain MRI', 'Spine Imaging', 'Functional MRI', 'Stroke Assessment'],
                    gradient: 'from-purple-500 to-indigo-600'
                  },
                  { 
                    title: 'Orthopedic Imaging', 
                    desc: 'Joint and bone diagnostic imaging for musculoskeletal conditions',
                    features: ['Joint MRI', 'Bone Scans', 'Sports Injuries', 'Arthritis Assessment'],
                    gradient: 'from-orange-500 to-red-600'
                  },
                  { 
                    title: 'Oncology Imaging', 
                    desc: 'Cancer detection and monitoring with advanced imaging techniques',
                    features: ['Tumor Detection', 'Cancer Staging', 'Treatment Monitoring', 'Screening Programs'],
                    gradient: 'from-green-500 to-teal-600'
                  },
                  { 
                    title: 'Pediatric Imaging', 
                    desc: 'Specialized imaging services designed for children and infants',
                    features: ['Child-Friendly Environment', 'Sedation Services', 'Specialized Protocols', 'Family Support'],
                    gradient: 'from-blue-500 to-cyan-600'
                  },
                  { 
                    title: 'Emergency Imaging', 
                    desc: '24/7 emergency diagnostic services for urgent medical conditions',
                    features: ['Trauma Scans', 'Stroke Protocols', 'Emergency CT', 'Rapid Results'],
                    gradient: 'from-red-600 to-orange-600'
                  }
                ].map((specialty, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex-shrink-0 group" style={{width: '280px'}}>
                    <div className={`bg-gradient-to-br ${specialty.gradient} p-4 text-white relative`}>
                      <div className="absolute top-0 right-0 w-8 h-8 bg-white/20 rounded-full transform translate-x-4 -translate-y-4 group-hover:scale-150 group-hover:bg-white/30 transition-all duration-500"></div>
                      <h3 className="font-bold mb-2 group-hover:text-yellow-200 transition-colors duration-300">{specialty.title}</h3>
                      <p className="text-white/90 text-sm mb-3">{specialty.desc}</p>
                      <div className="space-y-1">
                        {specialty.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="w-1.5 h-1.5 bg-white/80 rounded-full group-hover:bg-yellow-300 transition-colors duration-300"></div>
                            <span className="text-white/90">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="p-3 text-center border-t-2 border-transparent group-hover:border-blue-200 transition-colors duration-300">
                      <Link href="/website/services" className="text-gray-600 text-sm font-medium hover:text-blue-600 transition-colors">
                        Learn More →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Scroll indicators */}
            <div className="flex justify-center mt-4 gap-2">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="w-2 h-2 bg-gray-300 rounded-full"></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gradient-to-br from-white to-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-teal-100 px-4 py-2 rounded-full mb-6">
              <span className="font-semibold text-gray-700">Our Specialties</span>
            </div>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Advanced Diagnostic Imaging</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Comprehensive MRI and CT scan services with cutting-edge technology</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: 'MRI Scans', 
                desc: '3T high-field MRI for brain, spine, joints',
                features: ['Brain & Spine MRI', 'Joint & Muscle MRI', 'Cardiac MRI', 'Functional MRI'],
                gradient: 'from-blue-500 to-blue-600'
              },
              { 
                title: 'CT Scans', 
                desc: '64-slice CT scanner for rapid imaging',
                features: ['Chest CT', 'Abdominal CT', 'CT Angiography', 'Emergency CT'],
                gradient: 'from-teal-500 to-teal-600'
              },
              { 
                title: 'X-Ray', 
                desc: 'Digital radiography for examinations',
                features: ['Chest X-Ray', 'Bone X-Ray', 'Dental X-Ray', 'Portable X-Ray'],
                gradient: 'from-indigo-500 to-purple-600'
              },
              { 
                title: 'Ultrasound', 
                desc: 'Real-time imaging for various studies',
                features: ['4D Ultrasound', 'Cardiac Echo', 'Doppler Studies', 'Pregnancy Scans'],
                gradient: 'from-emerald-500 to-teal-600'
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className={`bg-gradient-to-br ${service.gradient} p-6 text-white`}>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-white/90 text-sm">{service.desc}</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-4 h-4 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center">
                          <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                          </svg>
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/website/services" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-teal-600 py-8 sm:py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full mb-3 sm:mb-4 border border-white/30">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-2 sm:w-3 h-2 sm:h-3 bg-yellow-400 rounded-full"></div>
                ))}
              </div>
              <span className="font-semibold text-white text-xs sm:text-sm">Patient Reviews</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-3">Trusted Healthcare Partner</h2>
            <p className="text-blue-100 max-w-xl mx-auto text-sm sm:text-base">What our patients say about their diagnostic experience</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/15 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/30">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">{testimonials[currentTestimonial].avatar}</div>
                
                <div className="flex justify-center mb-3 sm:mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <div key={i} className="w-4 sm:w-5 h-4 sm:h-5 bg-yellow-400 rounded-full mr-1 flex items-center justify-center">
                      <svg className="w-2 sm:w-3 h-2 sm:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    </div>
                  ))}
                </div>
                
                <blockquote className="text-base sm:text-lg text-white mb-3 sm:mb-4 leading-relaxed font-medium px-2">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>
                
                <div className="bg-white/20 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/30">
                  <div className="font-bold text-white text-sm sm:text-base">{testimonials[currentTestimonial].name}</div>
                  <div className="text-blue-200 text-xs sm:text-sm">{testimonials[currentTestimonial].role}</div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-4 sm:mt-6 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`transition-all duration-300 rounded-full ${
                    currentTestimonial === index 
                      ? 'w-6 sm:w-8 h-2 sm:h-3 bg-white' 
                      : 'w-2 sm:w-3 h-2 sm:h-3 bg-white/40 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4 sm:mb-6">Visit Our Modern Facility</h2>
              <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8">Conveniently located in Jodhpur with easy parking and accessibility.</p>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4 sm:p-0 p-3 sm:bg-transparent bg-white sm:rounded-none rounded-xl sm:shadow-none shadow-sm sm:border-0 border border-gray-100">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 sm:w-6 h-5 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">Address</h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">Unit-1: Plot No. 06, Ram Nagar<br/>Sangriya, Jodhpur</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 sm:gap-4 sm:p-0 p-3 sm:bg-transparent bg-white sm:rounded-none rounded-xl sm:shadow-none shadow-sm sm:border-0 border border-gray-100">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 sm:w-6 h-5 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">Hours</h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">Mon-Fri: 7:00 AM - 9:00 PM<br/>Sat-Sun: 8:00 AM - 6:00 PM<br/>Emergency: 24/7</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 sm:gap-4 sm:p-0 p-3 sm:bg-transparent bg-white sm:rounded-none rounded-xl sm:shadow-none shadow-sm sm:border-0 border border-gray-100">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 sm:w-6 h-5 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">Contact</h3>
                    <div className="space-y-1">
                      <a href="tel:+917014265848" className="block text-blue-600 hover:text-blue-700 font-medium text-sm sm:text-base transition-colors sm:text-gray-600 sm:hover:text-gray-600 sm:font-normal">+91 7014265848</a>
                      <a href="mailto:techroverteam@gmail.com" className="block text-teal-600 hover:text-teal-700 text-sm sm:text-base transition-colors sm:text-gray-600 sm:hover:text-gray-600">techroverteam@gmail.com</a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 sm:mt-8">
                <Link href="/website/contact" className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold hover:shadow-xl transition-all duration-300 inline-block active:scale-95 sm:active:scale-100 touch-manipulation">
                  Get Directions
                </Link>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-100 to-teal-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 mt-8 lg:mt-0">
              <div className="h-48 sm:h-64 bg-gradient-to-br from-blue-200 to-teal-200 rounded-lg sm:rounded-xl mb-4 sm:mb-6 flex items-center justify-center">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.0123456789!2d73.0123456!3d26.2123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDEyJzQ0LjQiTiA3M8KwMDAnNDQuNCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%" 
                  height="100%" 
                  style={{border:0, borderRadius: '12px'}} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Varaha SDC Location"
                ></iframe>
              </div>
              <div className="text-center">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Our Location</h3>
                <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">Unit-1: Plot No. 06, Ram Nagar, Sangriya, Jodhpur</p>
                <Link href="https://maps.google.com/search/Unit-1+Plot+No+06+Ram+Nagar+Sangriya+Jodhpur" target="_blank" className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-bold hover:shadow-lg transition-all duration-300 text-sm sm:text-base inline-block active:scale-95 sm:active:scale-100 touch-manipulation">
                  Open in Google Maps
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced UX */}
      <section className="bg-gradient-to-br from-blue-600 to-teal-600 py-8 sm:py-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{backgroundImage: 'radial-gradient(circle at 25% 25%, white 2px, transparent 2px)', backgroundSize: '60px 60px'}}></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full mb-3 sm:mb-4">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-white text-xs sm:text-sm font-medium">Available Now</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
            Ready for Your Diagnostic Scan?
          </h2>
          
          <p className="text-blue-100 mb-6 sm:mb-8 max-w-xl mx-auto text-sm sm:text-base">
            Expert imaging with same-day results. Book your appointment in 30 seconds.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link href="/website/appointment" className="group bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
              <svg className="w-4 sm:w-5 h-4 sm:h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
              Book Appointment
            </Link>
            <Link href="tel:+917014265848" className="group bg-white/10 backdrop-blur-sm border border-white/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2">
              <svg className="w-4 sm:w-5 h-4 sm:h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              Call Now
            </Link>
          </div>
          
          <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-blue-100 text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-3 sm:w-4 h-3 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              <span>Same Day Results</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-3 sm:w-4 h-3 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              <span>Expert Radiologists</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}