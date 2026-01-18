"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import { Heart, Zap, Shield, Activity, CheckCircle2, Brain, Wind, Bone, Droplets, Scan, Stethoscope, Sparkles } from "lucide-react";

export default function DualEnergyPage() {
  useEffect(() => {
    if (window.location.hash === '#angiography') {
      setTimeout(() => {
        const element = document.getElementById('angiography');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 500);
    }
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full flex items-center justify-center text-white">
        <Image
          src="/images/home.jpg"
          alt="Dual Energy CT Scan"
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
            Dual Energy
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl max-w-3xl mx-auto"
            style={{fontFamily: 'Roboto, sans-serif'}}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            256 slice CT simultaneous dual energy capability
          </motion.p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            
            {/* WHY USE DUAL ENERGY Heading */}
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-12 text-center uppercase"
              style={{color: '#000000', fontFamily: 'Roboto, sans-serif', fontWeight: 700}}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              WHY USE DUAL ENERGY
            </motion.h2>

            {/* Two Column Layout */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="grid lg:grid-cols-2 gap-8">
                {/* What is Dual Energy */}
                <div>
                  <div className="bg-gradient-to-r from-[#0056AE] to-[#2E92ED] rounded-t-2xl p-6">
                    <h3 className="text-2xl font-bold text-white flex items-center gap-3" style={{fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>
                      <Shield className="w-7 h-7" />
                      What is Dual Energy
                    </h3>
                  </div>
                  <div className="bg-white rounded-b-2xl p-8 shadow-lg border-2 border-t-0" style={{borderColor: '#E8F2FF'}}>
                    <p className="text-base leading-relaxed" style={{color: '#000000', fontFamily: 'Roboto, sans-serif'}}>
                      Dual-Energy CT (DECT) is an advanced imaging technique that uses two different X-ray energy levels (spectra) in a single scan, allowing for material characterization beyond what conventional CT offers, by analyzing how materials absorb different energies to differentiate substances like iodine, calcium, or uric acid, leading to better lesion detection, reduced artifacts, and more precise functional information for diagnosis.
                    </p>
                  </div>
                </div>

                {/* Difference Section */}
                <div>
                  <div className="bg-gradient-to-r from-[#0056AE] to-[#2E92ED] rounded-t-2xl p-6">
                    <h3 className="text-2xl font-bold text-white flex items-center gap-3" style={{fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>
                      <CheckCircle2 className="w-7 h-7" />
                      Difference between Single and Dual Energy CT
                    </h3>
                  </div>
                  <div className="bg-white rounded-b-2xl p-8 shadow-lg border-2 border-t-0" style={{borderColor: '#E8F2FF'}}>
                    <p className="text-base leading-relaxed" style={{color: '#000000', fontFamily: 'Roboto, sans-serif'}}>
                      Dual-energy computed tomography (DECT) uses different energy spectrum x-ray beams for differentiating materials with similar attenuation at a certain energy. Compared with single-energy CT, it provides images with better diagnostic performance and a potential reduction of contrast agent and radiation doses.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Dual-Energy KUB - Left-Right Layout */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="p-8 rounded-2xl" style={{background: 'linear-gradient(135deg, #F8FBFF 0%, #E8F2FF 100%)'}}>
                  <h3 className="text-2xl font-bold mb-4" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>
                    Dual-Energy KUB (Kidney, Ureter, Bladder)
                  </h3>
                  <p className="text-base leading-relaxed" style={{color: '#000000', fontFamily: 'Roboto, sans-serif'}}>
                    Dual-Energy KUB (Kidney, Ureter, Bladder) is an advanced X-ray imaging technique that uses two different X-ray energy level in a single scan to differentiate materials, primarily to determine the chemical composition of kidney stones. This helps doctors select appropriate treatments, potentially avoiding unnecessary surgery by identifying stones like uric acid stones that can be dissolved medically, and it offers a low-dose, cost-effective alternative to Dual Energy for stone characterization.
                  </p>
                </div>
                <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl">
                  <Image src="/images/GSI KUB.jpg" alt="Dual Energy KUB Imaging" fill className="object-cover" />
                </div>
              </div>
            </motion.div>

            {/* Gout Imaging - Right-Left Layout */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="lg:order-2 p-8 rounded-2xl shadow-lg" style={{backgroundColor: '#FFFFFF', borderTop: '4px solid #2E92ED'}}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{backgroundColor: '#E8F2FF'}}>
                      <Activity className="w-7 h-7" style={{color: '#2E92ED'}} />
                    </div>
                    <h3 className="text-2xl font-bold" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>
                      Gout Imaging
                    </h3>
                  </div>
                  <p className="text-base leading-relaxed" style={{color: '#000000', fontFamily: 'Roboto, sans-serif'}}>
                    Dual-Energy CT is a powerful, non-invasive imaging tool that detects and quantifies uric acid crystal deposits (tophi) in gout by using two different X-ray energy levels to differentiate them from other tissues.
                  </p>
                </div>
                <div className="lg:order-1 relative h-80 rounded-2xl overflow-hidden shadow-2xl">
                  <Image src="/images/GSI GOUT 1.png" alt="Gout Imaging" fill className="object-cover" />
                </div>
              </div>
            </motion.div>

            {/* Metal Artifact Reduction - Left-Right Layout */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="p-8 rounded-2xl border-2" style={{borderColor: '#0056AE', backgroundColor: '#F8FBFF'}}>
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-3" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>
                    <Shield className="w-7 h-7" />
                    Metal Artifact Reduction
                  </h3>
                  <p className="text-base leading-relaxed" style={{color: '#000000', fontFamily: 'Roboto, sans-serif'}}>
                    (DECT) reduces artifacts, especially from metal implants, by acquiring data at two different X-ray energy levels, allowing for material decomposition and reconstruction that minimize beam-hardening streaks, offering clearer views of surrounding tissues, though specialized algorithms like MAR often provide even better results for complex metal artifacts, with optimal artifact reduction.
                  </p>
                </div>
                <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl">
                  <Image src="/images/GSI ARTIFACT 1.jpg" alt="Metal Artifact Reduction" fill className="object-cover" />
                </div>
              </div>
            </motion.div>

            {/* DUAL ENERGY APPLICATIONS Section - Theme Design */}
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <div className="bg-gradient-to-r from-[#0056AE] to-[#2E92ED] rounded-t-2xl p-6">
                <h3 className="text-3xl md:text-4xl font-bold text-white" style={{fontFamily: 'Roboto, sans-serif', fontWeight: 700}}>
                  DUAL ENERGY APPLICATIONS
                </h3>
              </div>
              <div className="bg-white rounded-b-2xl p-8 shadow-lg border-2 border-t-0" style={{borderColor: '#E8F2FF'}}>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { icon: Heart, title: 'CARDIAC CASES', items: ['Covers whole heart in one rotation', 'Takes 4000 images in two rotation', 'Two beat motion free coronary images'], color: '#0056AE' },
                    { icon: Zap, title: 'MONOENERGETIC', items: ['Beam hardening artifact elimination', 'Helpful for implant patients'], color: '#2E92ED' },
                    { icon: Brain, title: 'VIRTUAL NCCT', items: ['Virtual non contrast CT scan'], color: '#0056AE' },
                    { icon: Droplets, title: 'CONTRAST SCAN', items: ['Plain and contrast from single scan'], color: '#2E92ED' },
                    { icon: Wind, title: 'LUNG ANALYSIS', items: ['Lung segmentation & volume analysis', 'Measure lung capacity'], color: '#0056AE' },
                    { icon: Activity, title: 'GOUT IMAGING', items: ['Color coded uric acid visualization'], color: '#2E92ED' }
                  ].map((app, idx) => (
                    <div key={idx} className="bg-white rounded-xl p-6 border-l-4 shadow-md hover:shadow-lg transition-shadow duration-300" style={{borderLeftColor: app.color}}>
                      <div className="flex items-center gap-3 mb-4">
                        <app.icon className="w-6 h-6" style={{color: app.color}} />
                        <h4 className="text-lg font-bold" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif'}}>
                          {app.title}
                        </h4>
                      </div>
                      <ul className="space-y-2">
                        {app.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start gap-2 text-sm" style={{color: '#000000', fontFamily: 'Roboto, sans-serif'}}>
                            <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{backgroundColor: app.color}}></div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Introduction Paragraph - Card Style */}
            <motion.div
              className="mb-12 p-8 rounded-2xl shadow-lg border-l-4"
              style={{backgroundColor: '#F8FBFF', borderLeftColor: '#0056AE'}}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#0056AE'}}>
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-lg leading-relaxed" style={{color: '#000000', fontFamily: 'Roboto, sans-serif'}}>
                    The machine provide fast scans with minimum radiations, its less time on table for patients with better quality scans, it Captures detailed images of entire organs in a single scan, reducing radiation exposure.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Two Heart Beats Paragraph - Highlighted Box */}
            <motion.div
              className="mb-12 p-8 rounded-2xl relative overflow-hidden"
              style={{background: 'linear-gradient(135deg, #E8F2FF 0%, #F0F8FF 100%)'}}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-8 h-8" style={{color: '#0056AE'}} />
                <h3 className="text-2xl font-bold" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>
                  2 Heart Beats Scanning
                </h3>
              </div>
              <p className="text-base leading-relaxed mb-4" style={{color: '#000000', fontFamily: 'Roboto, sans-serif'}}>
                All scans including cardiac scans are done within 2 heart beats. In the time it takes for a heart to beat once, GE healthcare's revolution CT scanner can capture a detailed picture of the body. The x-ray tube moves at this speed it can capture thousands of slices or images of the body, per second. The scanner helps the doctors to improve image quality and reduce the amount of radiation the patients receives compared with other scanners
              </p>
            </motion.div>

            {/* Quantum Leap Paragraph - Icon Card */}
            <motion.div
              className="mb-12 p-8 rounded-2xl shadow-md border-2"
              style={{borderColor: '#E8F2FF', backgroundColor: '#FFFFFF'}}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#E8F2FF'}}>
                  <Activity className="w-8 h-8" style={{color: '#0056AE'}} />
                </div>
                <div>
                  <p className="text-lg leading-relaxed mb-4" style={{color: '#000000', fontFamily: 'Roboto, sans-serif'}}>
                    The 256 slice CT provides a quantum leap in imaging and is now being used to diagnose heart disease
                  </p>
                  <p className="text-lg leading-relaxed" style={{color: '#000000', fontFamily: 'Roboto, sans-serif'}}>
                    This advanced scanner achieves whole imaging of the heart within a short time span using low dose radiation, providing much more visual detail about the hearts function and structures.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Angiography Section - Full Width with Theme Shade */}
            <motion.div
              id="angiography"
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="bg-gradient-to-r from-[#0056AE] to-[#2E92ED] rounded-t-2xl p-6">
                <h3 className="text-3xl md:text-4xl font-bold text-white flex items-center justify-center gap-3" style={{fontFamily: 'Roboto, sans-serif', fontWeight: 700}}>
                  <Activity className="w-10 h-10" />
                  ANGIOGRAPHY
                </h3>
              </div>
              <div className="bg-white rounded-b-2xl p-8 shadow-lg border-2 border-t-0" style={{borderColor: '#E8F2FF'}}>
                <p className="text-lg text-center mb-8 max-w-4xl mx-auto" style={{color: '#000000', fontFamily: 'Roboto, sans-serif'}}>
                  Advanced angiographic imaging enables precise visualization of blood vessels throughout the body, helping diagnose vascular conditions and plan treatments. Our Revolution CT provides exceptional image quality for coronary angiography, peripheral vascular studies, and comprehensive vascular assessments with minimal contrast and reduced radiation exposure.
                </p>
                
                <div className="relative overflow-hidden rounded-2xl" style={{backgroundColor: '#F8FBFF'}}>
                  <style jsx>{`
                    @keyframes scrollAngio {
                      0% { transform: translateX(0); }
                      100% { transform: translateX(calc(-280px * 8)); }
                    }
                    .angio-carousel {
                      display: flex;
                      gap: 1.5rem;
                      padding: 2rem 0;
                      animation: scrollAngio 15s linear infinite;
                    }
                  `}</style>
                  <div className="angio-carousel">
                    {[
                      '/images/se001.png',
                      '/images/se002.png',
                      '/images/se003.png',
                      '/images/se004.png',
                      '/images/se005.png',
                      '/images/se006.png',
                      '/images/se007.png',
                      '/images/se008.png',
                      '/images/se001.png',
                      '/images/se002.png',
                      '/images/se003.png',
                      '/images/se004.png',
                      '/images/se005.png',
                      '/images/se006.png',
                      '/images/se007.png',
                      '/images/se008.png'
                    ].map((src, idx) => (
                      <div key={idx} className="relative h-64 w-64 flex-shrink-0 rounded-xl overflow-hidden shadow-lg">
                        <Image src={src} alt={`Angiography ${idx + 1}`} fill className="object-cover" />
                      </div>
                    ))}
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>
            Experience Advanced Dual Energy
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto" style={{color: '#586C80', fontFamily: 'Roboto, sans-serif'}}>
            Schedule your appointment today and benefit from our cutting-edge dual energy
          </p>
          <a
            href="https://app.varahasdc.co.in/book-appointment"
            className="inline-block bg-gradient-to-r from-[#0056AE] to-[#2E92ED] text-white font-bold py-4 px-8 rounded-full text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            style={{fontFamily: 'Roboto, sans-serif', fontWeight: 600}}
          >
            Book Appointment
          </a>
        </div>
      </section>
    </div>
  );
}