"use client";

import { motion } from "framer-motion";
import { Zap, Heart, Eye, Stethoscope, Activity, Shield } from "lucide-react";

export default function FacilitiesPage() {
  const facilities = [
    {
      icon: <Heart className="w-12 h-12 text-white" />,
      title: "Revolution CT 256 Slice",
      description: "Advanced cardiac imaging with dual energy capability and low radiation exposure",
      features: ["256 slice simultaneous imaging", "Dual energy technology", "Low dose radiation", "3D cardiac visualization"]
    },
    {
      icon: <Activity className="w-12 h-12 text-white" />,
      title: "MRI Imaging",
      description: "High-resolution magnetic resonance imaging for detailed soft tissue analysis",
      features: ["1.5T and 3T MRI systems", "Functional MRI capabilities", "Contrast enhanced studies", "Pediatric protocols"]
    },
    {
      icon: <Eye className="w-12 h-12 text-white" />,
      title: "Digital X-Ray",
      description: "Digital radiography with instant results and minimal radiation exposure",
      features: ["Digital DR technology", "Instant image processing", "PACS integration", "Portable X-ray services"]
    },
    {
      icon: <Stethoscope className="w-12 h-12 text-white" />,
      title: "Ultrasound Services",
      description: "Comprehensive ultrasound imaging including 4D and Doppler studies",
      features: ["4D ultrasound imaging", "Color Doppler studies", "Obstetric & gynecologic scans", "Interventional procedures"]
    },
    {
      icon: <Zap className="w-12 h-12 text-white" />,
      title: "Emergency Diagnostics",
      description: "24/7 emergency diagnostic services with rapid reporting",
      features: ["24/7 availability", "Trauma protocols", "Rapid reporting", "Critical care support"]
    },
    {
      icon: <Shield className="w-12 h-12 text-white" />,
      title: "Preventive Health",
      description: "Comprehensive health check-up packages for early disease detection",
      features: ["Executive health packages", "Cardiac screening", "Cancer screening", "Wellness programs"]
    }
  ];

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
            Our Facilities
          </motion.h1>
          <motion.p
            className="text-xl max-w-3xl mx-auto"
            style={{fontFamily: 'Roboto, sans-serif'}}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            State-of-the-art medical imaging and diagnostic facilities with cutting-edge technology
          </motion.p>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <motion.div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-blue-100 hover:border-[#2E92ED]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-[#0056AE] to-[#2E92ED] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {facility.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-4" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>
                  {facility.title}
                </h3>
                
                <p className="mb-6 leading-relaxed" style={{color: '#586C80', fontFamily: 'Roboto, sans-serif'}}>
                  {facility.description}
                </p>
                
                <ul className="space-y-2">
                  {facility.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#2E92ED] rounded-full"></div>
                      <span className="text-sm" style={{color: '#586C80', fontFamily: 'Roboto, sans-serif'}}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{backgroundColor: '#F8FBFF'}}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>
            Schedule Your Diagnostic Test
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto" style={{color: '#586C80', fontFamily: 'Roboto, sans-serif'}}>
            Experience our world-class facilities and expert medical team
          </p>
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-[#0056AE] to-[#2E92ED] text-white font-bold py-4 px-8 rounded-full text-lg hover:shadow-lg transition-all duration-300"
            style={{fontFamily: 'Roboto, sans-serif', fontWeight: 600}}
          >
            Book Appointment
          </a>
        </div>
      </section>
    </div>
  );
}