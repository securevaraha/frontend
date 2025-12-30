"use client";

import { Heart, Zap, Eye, Stethoscope, Activity, Shield, Bone, Droplets } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      icon: <Heart className="w-8 h-8 text-white" />,
      title: "CARDIAC CASES",
      features: [
        "Covers whole heart in one rotation",
        "Takes 1000 images in one rotation", 
        "One beat motion free coronary images",
        "Entire examination in one beat",
        "Entire aorta imaging in 7 seconds",
        "Low dose coronary & aorta imaging"
      ]
    },
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: "MONOENERGETIC IMAGING",
      features: [
        "Beam hardening artifact elimination",
        "Contrast augmentation",
        "Enhanced tissue visualization",
        "Helpful for implant patients"
      ]
    },
    {
      icon: <Eye className="w-8 h-8 text-white" />,
      title: "VIRTUAL NCCT",
      features: [
        "Virtual non-contrast CT scan",
        "Dual energy method",
        "Brain and body imaging",
        "Any body part scanning"
      ]
    },
    {
      icon: <Droplets className="w-8 h-8 text-white" />,
      title: "CONTRAST SCAN",
      features: [
        "Plain and contrast from single scan",
        "Dual energy method",
        "Reduced contrast usage",
        "Better image quality"
      ]
    },
    {
      icon: <Activity className="w-8 h-8 text-white" />,
      title: "ADVANCE LUNG ANALYSIS",
      features: [
        "Lung segmentation & evaluation",
        "Lung volume measurement",
        "Emphysema index calculation",
        "Lung capacity measurement"
      ]
    },
    {
      icon: <Bone className="w-8 h-8 text-white" />,
      title: "GOUT IMAGING",
      features: [
        "Color coded visualization",
        "Uric acid crystal detection",
        "Peripheral extremities imaging",
        "Precise gout diagnosis"
      ]
    },
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: "CALCULI CHARACTERIZATION",
      features: [
        "Chemical composition analysis",
        "Kidney stone visualization",
        "Stone character identification",
        "Treatment planning support"
      ]
    },
    {
      icon: <Stethoscope className="w-8 h-8 text-white" />,
      title: "MARROW IMAGING",
      features: [
        "Calcium subtraction method",
        "Marrow pathology detection",
        "Bone swelling analysis",
        "Dual energy marrow imaging"
      ]
    }
  ];

  const advantages = [
    "Less time on table with better scan quality",
    "Low radiation dose",
    "Virtual Bronchoscopy available",
    "1000 images in one rotation",
    "Better scans with less contrast",
    "Government rates pricing",
    "Brain and lung perfusion scans",
    "Dental scan available",
    "All body angiography available"
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/hero.png"
            alt="Medical imaging equipment"
            className="w-full h-full object-cover brightness-[0.4]"
          />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white" style={{fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>
            GSI (Dual Energy) Services
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-white" style={{fontFamily: 'Roboto, sans-serif'}}>
            Advanced dual energy CT applications for comprehensive diagnostic imaging
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>
            DUAL ENERGY APPLICATIONS
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="group perspective-1000 h-64">
                <div className="relative w-full h-full transform-style-preserve-3d transition-transform duration-700 group-hover:rotate-y-180">
                  {/* Front */}
                  <div className="absolute inset-0 backface-hidden bg-white rounded-2xl p-6 flex flex-col items-center justify-center shadow-lg" style={{color: '#0056AE'}}>
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{backgroundColor: '#0056AE'}}>
                      {service.icon}
                    </div>
                    <h3 className="text-lg font-bold text-center" style={{fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>
                      {service.title}
                    </h3>
                  </div>
                  
                  {/* Back */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180 bg-white rounded-2xl p-6 shadow-lg border border-blue-100">
                    <h3 className="text-lg font-bold mb-4 text-center" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>
                      {service.title}
                    </h3>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-[#2E92ED] rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm leading-relaxed" style={{color: '#586C80', fontFamily: 'Roboto, sans-serif'}}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Advantages */}
      <section className="py-20" style={{backgroundColor: '#F8FBFF'}}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>
            Advantages for Patients
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm border border-blue-100">
                  <div className="w-3 h-3 bg-gradient-to-r from-[#0056AE] to-[#2E92ED] rounded-full flex-shrink-0"></div>
                  <span style={{color: '#586C80', fontFamily: 'Roboto, sans-serif'}}>
                    {advantage}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#0056AE] to-[#2E92ED] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6" style={{fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>
            Experience Advanced Dual Energy CT
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto" style={{fontFamily: 'Roboto, sans-serif'}}>
            Book your appointment for state-of-the-art diagnostic imaging
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-[#0056AE] font-bold py-4 px-8 rounded-full text-lg hover:shadow-lg transition-all duration-300"
            style={{fontFamily: 'Roboto, sans-serif', fontWeight: 600}}
          >
            Schedule Appointment
          </a>
        </div>
      </section>
    </div>
  );
}