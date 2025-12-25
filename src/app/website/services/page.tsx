'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function ServicesPage() {
  const [activeService, setActiveService] = useState(0)

  const services = [
    {
      id: 'mri-scan',
      title: 'MRI Scan',
      subtitle: 'Magnetic Resonance Imaging',
      description: 'High-resolution magnetic resonance imaging for detailed soft tissue analysis.',
      features: [
        '3T high-field MRI scanner',
        'Open MRI for comfort',
        'Functional MRI capabilities',
        'MR angiography',
        'Specialized coils'
      ],
      conditions: [
        'Brain and spine disorders',
        'Joint and muscle injuries',
        'Cardiac conditions',
        'Abdominal assessment',
        'Vascular imaging'
      ],
      duration: '15-90 minutes',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'ct-scan',
      title: 'CT Scan',
      subtitle: 'Computed Tomography',
      description: 'Advanced computed tomography for detailed cross-sectional imaging.',
      features: [
        '64-slice multi-detector CT',
        'Low-dose radiation protocols',
        'Contrast studies',
        '3D reconstruction',
        'Emergency scans'
      ],
      conditions: [
        'Trauma assessment',
        'Cancer screening',
        'Cardiac imaging',
        'Abdominal studies',
        'Neurological conditions'
      ],
      duration: '5-30 minutes',
      color: 'from-teal-500 to-teal-600'
    },
    {
      id: 'xray',
      title: 'X-Ray',
      subtitle: 'Digital Radiography',
      description: 'Digital radiography for bone and chest examinations with immediate results.',
      features: [
        'Digital X-ray technology',
        'Immediate image availability',
        'Reduced radiation exposure',
        'Portable X-ray services',
        'Specialized positioning'
      ],
      conditions: [
        'Bone fractures',
        'Chest conditions',
        'Joint problems',
        'Dental imaging',
        'Pre-operative screening'
      ],
      duration: '5-15 minutes',
      color: 'from-blue-600 to-teal-600'
    },
    {
      id: 'ultrasound',
      title: 'Ultrasound',
      subtitle: 'Sonography',
      description: 'Real-time imaging for pregnancy, cardiac, and abdominal studies.',
      features: [
        '4D ultrasound imaging',
        'Doppler flow studies',
        'Echocardiography',
        'Obstetric imaging',
        'Interventional guidance'
      ],
      conditions: [
        'Pregnancy monitoring',
        'Heart conditions',
        'Abdominal organs',
        'Vascular studies',
        'Thyroid assessment'
      ],
      duration: '15-45 minutes',
      color: 'from-teal-600 to-blue-600'
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-teal-600 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Medical Imaging Services</h1>
          <p className="text-blue-100 mb-6">
            State-of-the-art diagnostic imaging using cutting-edge technology for accurate diagnosis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/website/appointment" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:shadow-lg transition-all">
              Book Your Scan
            </Link>
            <Link href="/website/contact" className="border border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-all">
              Ask Questions
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Diagnostic Services</h2>
            <p className="text-gray-600">Choose from our comprehensive range of imaging services</p>
          </div>

          {/* Service Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {services.map((service, index) => (
              <button
                key={service.id}
                onClick={() => setActiveService(index)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  activeService === index
                    ? 'bg-gradient-to-r from-blue-500 to-teal-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                <span>{service.title}</span>
              </button>
            ))}
          </div>

          {/* Active Service Details */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-br ${services[activeService].color} rounded-xl flex items-center justify-center text-white text-xl`}>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{services[activeService].title}</h3>
                    <p className="text-blue-600 font-medium">{services[activeService].subtitle}</p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6">{services[activeService].description}</p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {services[activeService].features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center mt-0.5">
                            <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 8 8">
                              <path d="M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z"/>
                            </svg>
                          </div>
                          <span className="text-gray-600 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Common Uses
                    </h4>
                    <ul className="space-y-2">
                      {services[activeService].conditions.map((condition, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2"></div>
                          <span className="text-gray-600 text-sm">{condition}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <Link href="/website/appointment" className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-3 rounded-lg font-bold hover:shadow-lg transition-all">
                    Book {services[activeService].title} Now
                  </Link>
                </div>
              </div>
              
              <div className={`bg-gradient-to-br ${services[activeService].color} p-8 text-white relative overflow-hidden`}>
                <div className="text-center mb-6">
                  <h4 className="text-xl font-semibold mb-2">
                    Advanced {services[activeService].title} Technology
                  </h4>
                  <p className="text-white/80 text-sm">
                    State-of-the-art equipment ensuring highest quality imaging
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-sm text-white/70 mb-1">Typical Duration</div>
                    <div className="font-semibold">{services[activeService].duration}</div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-sm text-white/70 mb-1">Preparation</div>
                    <div className="text-sm">Minimal to no preparation required</div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-sm text-white/70 mb-1">Results</div>
                    <div className="text-sm">Available within 24-48 hours</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-10 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Simple 4-Step Process</h2>
            <p className="text-blue-100">
              We make your diagnostic imaging experience comfortable and efficient
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Schedule', desc: 'Book online or call us' },
              { step: '2', title: 'Prepare', desc: 'Follow simple instructions' },
              { step: '3', title: 'Scan', desc: 'Comfortable procedure' },
              { step: '4', title: 'Results', desc: 'Fast, accurate reports' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-blue-100 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Schedule Your Diagnostic Scan?</h2>
          <p className="text-gray-600 mb-6">
            Our experienced team is ready to provide you with the highest quality diagnostic imaging services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/website/appointment" className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-lg font-bold hover:shadow-lg transition-all">
              Book Appointment Now
            </Link>
            <Link href="tel:+917014265848" className="bg-gray-100 text-gray-800 px-8 py-4 rounded-lg font-bold hover:shadow-lg transition-all">
              Call +91 7014265848
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}