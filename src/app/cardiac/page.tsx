"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Heart, Activity, Zap, Shield, CheckCircle2, ChevronLeft, ChevronRight, Clock, Users, Award, Stethoscope } from "lucide-react";

export default function CardiacPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const cardiacImages = [
    {
      src: "/images/CARDIAC.jpg",
      alt: "Cardiac CT Scan",
      title: "Advanced Cardiac Imaging"
    },
    {
      src: "/images/cardiac2.png", 
      alt: "Heart Scan Technology",
      title: "Precision Heart Diagnostics"
    },
    {
      src: "/images/cardiac3.png",
      alt: "Coronary Angiography",
      title: "Coronary Vessel Analysis"
    },
    {
      src: "/images/cardiac4.png",
      alt: "Cardiac Analysis",
      title: "Comprehensive Heart Analysis"
    },
    {
      src: "/images/angiography.jpg",
      alt: "Angiography Imaging",
      title: "Vascular Imaging Technology"
    },
    {
      src: "/images/angiography2.jpg",
      alt: "Advanced Angiography",
      title: "State-of-the-Art Angiography"
    }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % cardiacImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + cardiacImages.length) % cardiacImages.length);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full flex items-center justify-center text-white">
        <Image
          src="/images/home.jpg"
          alt="Cardiac Imaging"
          fill
          className="object-cover brightness-[0.4]"
          priority
        />
        <div className="relative z-10 text-center px-4">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4"
            style={{fontFamily: 'Roboto, sans-serif', fontWeight: 600}}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Cardiac
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl max-w-3xl mx-auto"
            style={{fontFamily: 'Roboto, sans-serif'}}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Advanced Heart Diagnostics with Revolutionary CT Technology
          </motion.p>
        </div>
      </section>

      {/* Main Content Section - Left Right Layout */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            
            {/* Left-Right Layout Container */}
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              
              {/* Left Side - Content */}
              <div className="space-y-8">
                
                {/* What is Cardiac CT */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="bg-gradient-to-r from-[#0056AE] to-[#2E92ED] rounded-t-2xl p-6">
                    <h3 className="text-2xl font-bold text-white flex items-center gap-3" style={{fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>
                      <Heart className="w-7 h-7" />
                      What is Cardiac CT Imaging
                    </h3>
                  </div>
                  <div className="bg-white rounded-b-2xl p-8 shadow-lg border-2 border-t-0" style={{borderColor: '#E8F2FF'}}>
                    <p className="text-base leading-relaxed mb-4" style={{color: '#000000', fontFamily: 'Roboto, sans-serif'}}>
                      Cardiac CT imaging is a non-invasive diagnostic technique that uses advanced computed tomography technology to create detailed images of the heart and coronary arteries. Our revolutionary CT scanner can capture the entire heart in just one rotation, providing exceptional image quality with minimal radiation exposure.
                    </p>
                    <p className="text-base leading-relaxed" style={{color: '#000000', fontFamily: 'Roboto, sans-serif'}}>
                      This advanced imaging technique allows for comprehensive evaluation of cardiac structures, coronary arteries, and heart function, enabling early detection and accurate diagnosis of various heart conditions.
                    </p>
                  </div>
                </motion.div>

                {/* Key Features */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h3 className="text-2xl font-bold mb-6" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 700}}>
                    KEY FEATURES
                  </h3>
                  <div className="space-y-6">
                    <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4" style={{borderLeftColor: '#0056AE'}}>
                      <div className="flex items-center gap-3 mb-3">
                        <Clock className="w-6 h-6" style={{color: '#2E92ED'}} />
                        <h4 className="text-lg font-bold" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif'}}>
                          Ultra-Fast Scanning
                        </h4>
                      </div>
                      <p className="text-sm" style={{color: '#000000', fontFamily: 'Roboto, sans-serif'}}>
                        Complete heart imaging in just 2 heartbeats with minimal motion artifacts.
                      </p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4" style={{borderLeftColor: '#2E92ED'}}>
                      <div className="flex items-center gap-3 mb-3">
                        <Shield className="w-6 h-6" style={{color: '#0056AE'}} />
                        <h4 className="text-lg font-bold" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif'}}>
                          Low Radiation Dose
                        </h4>
                      </div>
                      <p className="text-sm" style={{color: '#000000', fontFamily: 'Roboto, sans-serif'}}>
                        Advanced dose reduction techniques ensure minimal radiation exposure.
                      </p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4" style={{borderLeftColor: '#0056AE'}}>
                      <div className="flex items-center gap-3 mb-3">
                        <Activity className="w-6 h-6" style={{color: '#2E92ED'}} />
                        <h4 className="text-lg font-bold" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif'}}>
                          High Resolution
                        </h4>
                      </div>
                      <p className="text-sm" style={{color: '#000000', fontFamily: 'Roboto, sans-serif'}}>
                        256-slice technology provides exceptional detail for accurate diagnosis.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Benefits */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <div className="bg-gradient-to-br from-[#0056AE] to-[#2E92ED] rounded-t-2xl p-6">
                    <h3 className="text-xl font-bold text-white" style={{fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>
                      Benefits for Patients
                    </h3>
                  </div>
                  <div className="bg-white rounded-b-2xl p-6 shadow-lg border-2 border-t-0" style={{borderColor: '#E8F2FF'}}>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{color: '#2E92ED'}} />
                        <span className="text-sm" style={{color: '#000000', fontFamily: 'Roboto, sans-serif'}}>Non-invasive alternative to cardiac catheterization</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{color: '#2E92ED'}} />
                        <span className="text-sm" style={{color: '#000000', fontFamily: 'Roboto, sans-serif'}}>Early detection of heart disease</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{color: '#2E92ED'}} />
                        <span className="text-sm" style={{color: '#000000', fontFamily: 'Roboto, sans-serif'}}>Comprehensive cardiac evaluation in minutes</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{color: '#2E92ED'}} />
                        <span className="text-sm" style={{color: '#000000', fontFamily: 'Roboto, sans-serif'}}>Advanced technology at affordable rates</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>

              </div>
              
              {/* Right Side - Image Gallery */}
              <div className="lg:sticky lg:top-8">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-2xl font-bold mb-8 text-center" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 700}}>
                    CARDIAC GALLERY
                  </h2>
                  
                  <div className="relative">
                    <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl mb-6">
                      <Image
                        src={cardiacImages[currentImageIndex].src}
                        alt={cardiacImages[currentImageIndex].alt}
                        fill
                        className="object-cover transition-all duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="text-lg font-bold" style={{fontFamily: 'Roboto, sans-serif'}}>
                          {cardiacImages[currentImageIndex].title}
                        </h3>
                      </div>
                    </div>
                    
                    {/* Navigation Buttons */}
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                    
                    {/* Dots Indicator */}
                    <div className="flex justify-center space-x-2">
                      {cardiacImages.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === currentImageIndex ? 'bg-[#0056AE] scale-125' : 'bg-gray-300 hover:bg-gray-400'
                          }`}
                        />
                      ))}
                    </div>
                    
                    {/* Thumbnail Grid */}
                    <div className="grid grid-cols-3 gap-2 mt-6">
                      {cardiacImages.map((image, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`relative h-20 rounded-lg overflow-hidden transition-all duration-300 ${
                            index === currentImageIndex ? 'ring-2 ring-[#0056AE] scale-105' : 'hover:scale-105'
                          }`}
                        >
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
              
            </div>

            {/* Full Width Applications Section */}
            <motion.div
              className="mt-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="bg-gradient-to-r from-[#0056AE] to-[#2E92ED] rounded-t-2xl p-6 mb-0">
                <h3 className="text-2xl md:text-3xl font-bold text-white uppercase text-center" style={{fontFamily: 'Roboto, sans-serif', fontWeight: 700}}>
                  CARDIAC CT APPLICATIONS
                </h3>
              </div>
              <div className="bg-white rounded-b-2xl p-8 shadow-lg border-2 border-t-0" style={{borderColor: '#E8F2FF'}}>
                
                <div className="grid md:grid-cols-3 gap-8">
                  {/* Coronary Artery Assessment */}
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <Heart className="w-8 h-8" style={{color: '#0056AE'}} />
                      <h4 className="text-lg font-bold" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>
                        CORONARY ASSESSMENT
                      </h4>
                    </div>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-[#2E92ED] mt-1">•</span>
                        <span className="text-sm" style={{color: '#000000', fontFamily: 'Roboto, sans-serif'}}>Non-invasive coronary artery evaluation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#2E92ED] mt-1">•</span>
                        <span className="text-sm" style={{color: '#000000', fontFamily: 'Roboto, sans-serif'}}>Stenosis and blockage detection</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#2E92ED] mt-1">•</span>
                        <span className="text-sm" style={{color: '#000000', fontFamily: 'Roboto, sans-serif'}}>Calcium scoring for risk assessment</span>
                      </li>
                    </ul>
                  </div>

                  {/* Cardiac Structure Analysis */}
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <Activity className="w-8 h-8" style={{color: '#2E92ED'}} />
                      <h4 className="text-lg font-bold" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>
                        STRUCTURE ANALYSIS
                      </h4>
                    </div>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-[#2E92ED] mt-1">•</span>
                        <span className="text-sm" style={{color: '#000000', fontFamily: 'Roboto, sans-serif'}}>Heart chambers assessment</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#2E92ED] mt-1">•</span>
                        <span className="text-sm" style={{color: '#000000', fontFamily: 'Roboto, sans-serif'}}>Heart valve evaluation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#2E92ED] mt-1">•</span>
                        <span className="text-sm" style={{color: '#000000', fontFamily: 'Roboto, sans-serif'}}>Congenital defect detection</span>
                      </li>
                    </ul>
                  </div>

                  {/* Advanced Features */}
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <Zap className="w-8 h-8" style={{color: '#0056AE'}} />
                      <h4 className="text-lg font-bold" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>
                        ADVANCED FEATURES
                      </h4>
                    </div>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-[#2E92ED] mt-1">•</span>
                        <span className="text-sm" style={{color: '#000000', fontFamily: 'Roboto, sans-serif'}}>Cardiac perfusion imaging</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#2E92ED] mt-1">•</span>
                        <span className="text-sm" style={{color: '#000000', fontFamily: 'Roboto, sans-serif'}}>Myocardial viability assessment</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#2E92ED] mt-1">•</span>
                        <span className="text-sm" style={{color: '#000000', fontFamily: 'Roboto, sans-serif'}}>3D cardiac reconstruction</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20" style={{backgroundColor: '#F8FBFF'}}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{backgroundColor: '#0056AE'}}>
              <Stethoscope className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>
            Advanced Cardiac Care Awaits
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto" style={{color: '#586C80', fontFamily: 'Roboto, sans-serif'}}>
            Experience the future of cardiac imaging with our revolutionary CT technology. Schedule your cardiac evaluation today.
          </p>
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-[#0056AE] to-[#2E92ED] text-white font-bold py-4 px-8 rounded-full text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            style={{fontFamily: 'Roboto, sans-serif', fontWeight: 600}}
          >
            Book Cardiac Scan
          </a>
        </div>
      </section>
    </div>
  );
}