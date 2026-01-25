"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Heart, Activity, Zap, Shield, CheckCircle2, ChevronLeft, ChevronRight, Clock, Users, Award, Stethoscope } from "lucide-react";

export default function CardiacPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const cardiacImages = [
    {
      src: "/images/Cardiac1.png",
      alt: "Cardiac CT Scan",
      title: "Advanced Cardiac Imaging"
    },
    {
      src: "/images/Cardiac2.png", 
      alt: "Heart Scan Technology",
      title: "Precision Heart Diagnostics"
    },
    {
      src: "/images/Cardiac3.png",
      alt: "Coronary Angiography",
      title: "Coronary Vessel Analysis"
    },
    {
      src: "/images/Cardiac4.png",
      alt: "Cardiac Analysis",
      title: "Comprehensive Heart Analysis"
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
            <div className="space-y-12">
              
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
                    <p className="text-sm mb-4" style={{color: '#000000', fontFamily: 'Roboto, sans-serif'}}>
                      Cardiac imaging plays an important role in both congenital and acquired heart diseases.
                    </p>
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

                {/* Cardiac Images Carousel */}
                <div className="relative overflow-hidden rounded-2xl" style={{backgroundColor: '#F8FBFF'}}>
                  <style jsx>{`
                    @keyframes scrollCardiac {
                      0% { transform: translateX(0); }
                      100% { transform: translateX(calc(-320px * 12)); }
                    }
                    .cardiac-carousel {
                      display: flex;
                      gap: 1.5rem;
                      padding: 2rem 0;
                      animation: scrollCardiac 25s linear infinite;
                    }
                    .cardiac-carousel:hover {
                      animation-play-state: paused;
                    }
                    .cardiac-image {
                      transition: all 0.5s ease;
                    }
                    .cardiac-image:hover {
                      transform: scale(1.1) translateY(-10px);
                      z-index: 10;
                      box-shadow: 0 20px 40px rgba(0, 86, 174, 0.3);
                    }
                  `}</style>
                  <div className="cardiac-carousel">
                    {[
                      '/images/Cardiac/cardiac1.png',
                      '/images/Cardiac/cardiac2.png',
                      '/images/Cardiac/cardiac3.png',
                      '/images/Cardiac/cardiac4.png',
                      '/images/Cardiac/cardiac5.png',
                      '/images/Cardiac/cardiac6.png',
                      '/images/Cardiac/cardiac7.png',
                      '/images/Cardiac/cardiac8.png',
                      '/images/Cardiac/cardiac9.png',
                      '/images/Cardiac/cardiac10.png',
                      '/images/Cardiac/cardiac11.png',
                      '/images/Cardiac/cardiac12.png',
                      '/images/Cardiac/cardiac1.png',
                      '/images/Cardiac/cardiac2.png',
                      '/images/Cardiac/cardiac3.png',
                      '/images/Cardiac/cardiac4.png',
                      '/images/Cardiac/cardiac5.png',
                      '/images/Cardiac/cardiac6.png'
                    ].map((src, idx) => (
                      <div key={idx} className="cardiac-image group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl flex-shrink-0" style={{width: '300px', height: '300px'}}>
                        <div className="relative w-full h-full">
                          <Image 
                            src={src} 
                            alt={`Cardiac ${(idx % 12) + 1}`} 
                            fill 
                            className="object-contain p-2 transition-transform duration-500 group-hover:scale-110" 
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-red-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          <div className="absolute bottom-2 left-2 right-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2 text-center">
                              <p className="text-xs font-semibold text-gray-800">Cardiac Scan {(idx % 12) + 1}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
              
            </div>

            {/* Coronary Angiogram and TAVI Cards */}
            <div className="space-y-12">
              {/* CT Coronary Angiogram Card */}
              <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
                <div>
                  <div className="bg-gradient-to-r from-[#0056AE] to-[#2E92ED] rounded-t-2xl p-6">
                    <h3 className="text-2xl font-bold text-white flex items-center gap-3" style={{fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>
                      <Activity className="w-7 h-7" />
                      Coronary Angiogram
                    </h3>
                  </div>
                  <div className="bg-white rounded-b-2xl p-8 shadow-lg border-2 border-t-0" style={{borderColor: '#E8F2FF'}}>
                    <p className="text-base leading-relaxed" style={{color: '#000000', fontFamily: 'Roboto, sans-serif'}}>
                      A CT Coronary Angiogram is a non-invasive imaging test that uses a CT scanner, and contrast dye to create detailed 3D pictures of your heart's arteries, revealing plaque, blockages, or narrowing (stenosis) that can cause heart problems like chest pain.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                    <div className="relative aspect-[4/3] w-full">
                      <Image 
                        src="/images/Cardiac/Caronary Ang1.jpg" 
                        alt="Coronary Angiogram 1" 
                        fill 
                        className="object-contain p-2 transition-transform duration-700 group-hover:scale-110" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                    <div className="absolute bottom-2 left-2 right-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2 text-center">
                        <p className="text-xs font-semibold text-gray-800">Coronary Angiogram</p>
                      </div>
                    </div>
                  </div>
                  <div className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                    <div className="relative aspect-[4/3] w-full">
                      <Image 
                        src="/images/Cardiac/Caronary Ang2.jpg" 
                        alt="Coronary Angiogram 2" 
                        fill 
                        className="object-contain p-2 transition-transform duration-700 group-hover:scale-110" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                    <div className="absolute bottom-2 left-2 right-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2 text-center">
                        <p className="text-xs font-semibold text-gray-800">3D Vessel Analysis</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* TAVI/TAVR Card */}
              <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
                <div className="lg:order-2">
                  <div className="bg-gradient-to-r from-[#2E92ED] to-[#0056AE] rounded-t-2xl p-6">
                    <h3 className="text-2xl font-bold text-white flex items-center gap-3" style={{fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>
                      <Stethoscope className="w-7 h-7" />
                      TAVI/TAVR
                    </h3>
                  </div>
                  <div className="bg-white rounded-b-2xl p-8 shadow-lg border-2 border-t-0" style={{borderColor: '#E8F2FF'}}>
                    <p className="text-base leading-relaxed" style={{color: '#000000', fontFamily: 'Roboto, sans-serif'}}>
                      A TAVI (Transcatheter Aortic Valve Implantation) heart procedure, also known as TAVR, is a minimally invasive way to replace a diseased aortic heart valve using a catheter, avoiding open-heart surgery.
                    </p>
                  </div>
                </div>
                <div className="lg:order-1 relative overflow-hidden rounded-2xl" style={{backgroundColor: '#F8FBFF'}}>
                  <style jsx>{`
                    @keyframes scrollTavi {
                      0% { transform: translateX(0); }
                      100% { transform: translateX(calc(-320px * 3)); }
                    }
                    .tavi-carousel {
                      display: flex;
                      gap: 1rem;
                      padding: 1rem 0;
                      animation: scrollTavi 12s linear infinite;
                    }
                    .tavi-carousel:hover {
                      animation-play-state: paused;
                    }
                    .tavi-image {
                      transition: all 0.5s ease;
                    }
                    .tavi-image:hover {
                      transform: scale(1.1) translateY(-10px);
                      z-index: 10;
                      box-shadow: 0 20px 40px rgba(46, 146, 237, 0.3);
                    }
                  `}</style>
                  <div className="tavi-carousel">
                    {[
                      { src: '/images/Cardiac tavi Tavr/tavi 1.jpg', title: 'TAVI Procedure' },
                      { src: '/images/Cardiac tavi Tavr/tavi 2.jpeg', title: 'Valve Replacement' },
                      { src: '/images/Cardiac tavi Tavr/tavi 3.jpg', title: 'Complete Analysis' },
                      { src: '/images/Cardiac tavi Tavr/tavi 1.jpg', title: 'TAVI Procedure' },
                      { src: '/images/Cardiac tavi Tavr/tavi 2.jpeg', title: 'Valve Replacement' },
                      { src: '/images/Cardiac tavi Tavr/tavi 3.jpg', title: 'Complete Analysis' }
                    ].map((item, idx) => (
                      <div key={idx} className="tavi-image group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl flex-shrink-0" style={{width: '300px', height: '250px'}}>
                        <div className="relative w-full h-full">
                          <Image 
                            src={item.src} 
                            alt={`TAVI ${(idx % 3) + 1}`} 
                            fill 
                            className="object-contain p-2 transition-transform duration-500 group-hover:scale-110" 
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          <div className="absolute bottom-2 left-2 right-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2 text-center">
                              <p className="text-xs font-semibold text-gray-800">{item.title}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* CARDIAC CT APPLICATIONS Section */}
              <div className="mt-12">
                <div className="bg-gradient-to-r from-[#0056AE] to-[#2E92ED] rounded-t-2xl p-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-white uppercase text-center" style={{fontFamily: 'Roboto, sans-serif', fontWeight: 700}}>
                    CARDIAC CT APPLICATIONS
                  </h3>
                </div>
                <div className="bg-white rounded-b-2xl p-8 shadow-lg border-2 border-t-0" style={{borderColor: '#E8F2FF'}}>
                  <div className="grid md:grid-cols-3 gap-8">
                    {/* Coronary Assessment */}
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

                    {/* Structure Analysis */}
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
              </div>

            </div>
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
            href="https://app.varahasdc.co.in/book-appointment"
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