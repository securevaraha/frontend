"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Heart, Zap, Shield, Activity, CheckCircle2, Brain, Wind, Bone, Droplets, Scan, Stethoscope, Sparkles } from "lucide-react";

export default function DualEnergyPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full flex items-center justify-center text-white">
        <Image
          src="/hero.png"
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
            DUAL ENERGY
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

            {/* What is Dual Energy - Accordion Style */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
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
            </motion.div>

            {/* Difference Section - Two Column */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4" style={{borderLeftColor: '#2E92ED'}}>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>
                  <CheckCircle2 className="w-7 h-7" style={{color: '#2E92ED'}} />
                  Difference between Single and Dual Energy CT
                </h3>
                <p className="text-base leading-relaxed" style={{color: '#000000', fontFamily: 'Roboto, sans-serif'}}>
                  Dual-energy computed tomography (DECT) uses different energy spectrum x-ray beams for differentiating materials with similar attenuation at a certain energy. Compared with single-energy CT, it provides images with better diagnostic performance and a potential reduction of contrast agent and radiation doses.
                </p>
              </div>
            </motion.div>

            {/* Dual-Energy KUB - Info Box */}
            <motion.div
              className="mb-12 p-8 rounded-2xl"
              style={{background: 'linear-gradient(135deg, #F8FBFF 0%, #E8F2FF 100%)'}}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-4" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>
                Dual-Energy KUB (Kidney, Ureter, Bladder)
              </h3>
              <p className="text-base leading-relaxed" style={{color: '#000000', fontFamily: 'Roboto, sans-serif'}}>
                Dual-Energy KUB (Kidney, Ureter, Bladder) is an advanced X-ray imaging technique that uses two different X-ray energy level in a single scan to differentiate materials, primarily to determine the chemical composition of kidney stones. This helps doctors select appropriate treatments, potentially avoiding unnecessary surgery by identifying stones like uric acid stones that can be dissolved medically, and it offers a low-dose, cost-effective alternative to Dual Energy for stone characterization.
              </p>
            </motion.div>

            {/* Gout Imaging - Feature Card */}
            <motion.div
              className="mb-12 p-8 rounded-2xl shadow-lg"
              style={{backgroundColor: '#FFFFFF', borderTop: '4px solid #2E92ED'}}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
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
            </motion.div>

            {/* Metal Artifact Reduction - Technical Box */}
            <motion.div
              className="mb-12 p-8 rounded-2xl border-2"
              style={{borderColor: '#0056AE', backgroundColor: '#F8FBFF'}}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>
                <Shield className="w-7 h-7" />
                Metal Artifact Reduction
              </h3>
              <p className="text-base leading-relaxed" style={{color: '#000000', fontFamily: 'Roboto, sans-serif'}}>
                (DECT) reduces artifacts, especially from metal implants, by acquiring data at two different X-ray energy levels, allowing for material decomposition and reconstruction that minimize beam-hardening streaks, offering clearer views of surrounding tissues, though specialized algorithms like MAR often provide even better results for complex metal artifacts, with optimal artifact reduction.
              </p>
            </motion.div>

            {/* DUAL ENERGY APPLICATIONS Section */}
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="bg-gradient-to-r from-[#0056AE] to-[#2E92ED] rounded-t-2xl p-6 mb-0">
                <h3 className="text-2xl md:text-3xl font-bold text-white uppercase" style={{fontFamily: 'Roboto, sans-serif', fontWeight: 700}}>
                  DUAL ENERGY APPLICATIONS
                </h3>
              </div>
              <div className="bg-white rounded-b-2xl p-8 shadow-lg border-2 border-t-0" style={{borderColor: '#E8F2FF'}}>
                
                {/* CARDIAC CASES */}
                <div className="mb-8 pb-8 border-b-2" style={{borderColor: '#E8F2FF'}}>
                  <div className="flex items-center gap-3 mb-4">
                    <Heart className="w-8 h-8" style={{color: '#0056AE'}} />
                    <h4 className="text-xl font-bold uppercase" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>
                      CARDIAC CASES
                    </h4>
                  </div>
                  <ul className="space-y-3 ml-11">
                    <li className="flex items-start gap-3">
                      <span className="text-[#2E92ED] mt-1.5">•</span>
                      <span style={{color: '#000000', fontFamily: 'Roboto, sans-serif'}}>Covers whole heart in one rotation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#2E92ED] mt-1.5">•</span>
                      <span style={{color: '#000000', fontFamily: 'Roboto, sans-serif'}}>Takes 1000 images in one rotation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#2E92ED] mt-1.5">•</span>
                      <span style={{color: '#000000', fontFamily: 'Roboto, sans-serif'}}>In cardiac imaging, revolution CT can be used to acquire one beat motion free coronary images at any heart rate</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#2E92ED] mt-1.5">•</span>
                      <span style={{color: '#000000', fontFamily: 'Roboto, sans-serif'}}>Entire examination is performed in one beat</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#2E92ED] mt-1.5">•</span>
                      <span style={{color: '#000000', fontFamily: 'Roboto, sans-serif'}}>For complex cases, revolution CTs combination of speed, coverage and resolution helps in imaging the entire arota in only one contrast injection typically in less than 7 sec.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#2E92ED] mt-1.5">•</span>
                      <span style={{color: '#000000', fontFamily: 'Roboto, sans-serif'}}>Excellent image quality can be generated of both coronary arteries and the entire arota at low dose</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#2E92ED] mt-1.5">•</span>
                      <span style={{color: '#000000', fontFamily: 'Roboto, sans-serif'}}>Vascular plague characterisaton (VPC) using dual energy method</span>
                    </li>
                  </ul>
                </div>

                {/* MONOENERGETIC IMAGING */}
                <div className="mb-8 pb-8 border-b-2" style={{borderColor: '#E8F2FF'}}>
                  <div className="flex items-center gap-3 mb-4">
                    <Zap className="w-8 h-8" style={{color: '#2E92ED'}} />
                    <h4 className="text-xl font-bold uppercase" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>
                      MONOENERGETIC IMAGING
                    </h4>
                  </div>
                  <ul className="space-y-3 ml-11">
                    <li className="flex items-start gap-3">
                      <span className="text-[#2E92ED] mt-1.5">•</span>
                      <span style={{color: '#000000', fontFamily: 'Roboto, sans-serif'}}>Mono energetic imagining for beam hardening artifact elimination contrast augmentation and tissue visualisation with mono energetic images</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#2E92ED] mt-1.5">•</span>
                      <span style={{color: '#000000', fontFamily: 'Roboto, sans-serif'}}>Helpful for implant patients</span>
                    </li>
                  </ul>
                </div>

                {/* VIRTUAL NCCT */}
                <div className="mb-8 pb-8 border-b-2" style={{borderColor: '#E8F2FF'}}>
                  <div className="flex items-center gap-3 mb-4">
                    <Brain className="w-8 h-8" style={{color: '#0056AE'}} />
                    <h4 className="text-xl font-bold uppercase" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>
                      VIRTUAL NCCT (Any body part)
                    </h4>
                  </div>
                  <ul className="space-y-3 ml-11">
                    <li className="flex items-start gap-3">
                      <span className="text-[#2E92ED] mt-1.5">•</span>
                      <span style={{color: '#000000', fontFamily: 'Roboto, sans-serif'}}>Virtual non contrast CT scan using dual energy method for brain and body imaging</span>
                    </li>
                  </ul>
                </div>

                {/* CONTRAST SCAN */}
                <div className="mb-8 pb-8 border-b-2" style={{borderColor: '#E8F2FF'}}>
                  <div className="flex items-center gap-3 mb-4">
                    <Droplets className="w-8 h-8" style={{color: '#2E92ED'}} />
                    <h4 className="text-xl font-bold uppercase" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>
                      CONTRAST SCAN
                    </h4>
                  </div>
                  <ul className="space-y-3 ml-11">
                    <li className="flex items-start gap-3">
                      <span className="text-[#2E92ED] mt-1.5">•</span>
                      <span style={{color: '#000000', fontFamily: 'Roboto, sans-serif'}}>Both plain and contrast scan can be generated from single scan</span>
                    </li>
                  </ul>
                </div>

                {/* ADVANCE LUNG ANALYSIS */}
                <div className="mb-8 pb-8 border-b-2" style={{borderColor: '#E8F2FF'}}>
                  <div className="flex items-center gap-3 mb-4">
                    <Wind className="w-8 h-8" style={{color: '#0056AE'}} />
                    <h4 className="text-xl font-bold uppercase" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>
                      ADVANCE LUNG ANALYSIS
                    </h4>
                  </div>
                  <ul className="space-y-3 ml-11">
                    <li className="flex items-start gap-3">
                      <span className="text-[#2E92ED] mt-1.5">•</span>
                      <span style={{color: '#000000', fontFamily: 'Roboto, sans-serif'}}>Segmentation of lungs; evaluation: lung volume mean lung density and standard deviation calculation of emphysema index, sub-ranges percentiles and clusters</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#2E92ED] mt-1.5">•</span>
                      <span style={{color: '#000000', fontFamily: 'Roboto, sans-serif'}}>Mesure lung capacity</span>
                    </li>
                  </ul>
                </div>

                {/* GOUT IMAGING */}
                <div className="mb-8 pb-8 border-b-2" style={{borderColor: '#E8F2FF'}}>
                  <div className="flex items-center gap-3 mb-4">
                    <Activity className="w-8 h-8" style={{color: '#2E92ED'}} />
                    <h4 className="text-xl font-bold uppercase" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>
                      GOUT IMAGING
                    </h4>
                  </div>
                  <ul className="space-y-3 ml-11">
                    <li className="flex items-start gap-3">
                      <span className="text-[#2E92ED] mt-1.5">•</span>
                      <span style={{color: '#000000', fontFamily: 'Roboto, sans-serif'}}>Colour coded visualisation of deposited uric acid crystals in peripheral extremities</span>
                    </li>
                  </ul>
                </div>

                {/* CALCULI CHARACTERIZATION */}
                <div className="mb-8 pb-8 border-b-2" style={{borderColor: '#E8F2FF'}}>
                  <div className="flex items-center gap-3 mb-4">
                    <Scan className="w-8 h-8" style={{color: '#0056AE'}} />
                    <h4 className="text-xl font-bold uppercase" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>
                      CALCULI CHARACTERIZATION
                    </h4>
                  </div>
                  <ul className="space-y-3 ml-11">
                    <li className="flex items-start gap-3">
                      <span className="text-[#2E92ED] mt-1.5">•</span>
                      <span style={{color: '#000000', fontFamily: 'Roboto, sans-serif'}}>Visualisation of the chemical composition of kidney stones</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#2E92ED] mt-1.5">•</span>
                      <span style={{color: '#000000', fontFamily: 'Roboto, sans-serif'}}>Can tell the character of the stone which helps in further diagnose</span>
                    </li>
                  </ul>
                </div>

                {/* MARROW IMAGING */}
                <div className="mb-8 pb-8 border-b-2" style={{borderColor: '#E8F2FF'}}>
                  <div className="flex items-center gap-3 mb-4">
                    <Bone className="w-8 h-8" style={{color: '#2E92ED'}} />
                    <h4 className="text-xl font-bold uppercase" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>
                      MARROW IMAGING
                    </h4>
                  </div>
                  <ul className="space-y-3 ml-11">
                    <li className="flex items-start gap-3">
                      <span className="text-[#2E92ED] mt-1.5">•</span>
                      <span style={{color: '#000000', fontFamily: 'Roboto, sans-serif'}}>Dual energy marrow imaging by calcium subtraction to look for marrow pathologies on CT</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#2E92ED] mt-1.5">•</span>
                      <span style={{color: '#000000', fontFamily: 'Roboto, sans-serif'}}>For swelling in bone</span>
                    </li>
                  </ul>
                </div>

                {/* CONTRAST VS BLOOD DIFFERENTIATION */}
                <div className="mb-0">
                  <div className="flex items-center gap-3 mb-4">
                    <Stethoscope className="w-8 h-8" style={{color: '#0056AE'}} />
                    <h4 className="text-xl font-bold uppercase" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>
                      CONTRAST VS BLOOD DIFFERENTIATION
                    </h4>
                  </div>
                  <ul className="space-y-3 ml-11">
                    <li className="flex items-start gap-3">
                      <span className="text-[#2E92ED] mt-1.5">•</span>
                      <span style={{color: '#000000', fontFamily: 'Roboto, sans-serif'}}>Differentiation of brain haemorrhage from contrast enhancement</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#2E92ED] mt-1.5">•</span>
                      <span style={{color: '#000000', fontFamily: 'Roboto, sans-serif'}}>Can differentiate between blood & contrast</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#2E92ED] mt-1.5">•</span>
                      <span style={{color: '#000000', fontFamily: 'Roboto, sans-serif'}}>For trauma and operation patients</span>
                    </li>
                  </ul>
                </div>

              </div>
            </motion.div>

            {/* What does it means for patients? */}
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <div className="bg-gradient-to-br from-[#0056AE] to-[#2E92ED] rounded-t-2xl p-6">
                <h3 className="text-2xl md:text-3xl font-bold text-white" style={{fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>
                  What does it means for patients? / Advantages for patients
                </h3>
              </div>
              <div className="bg-white rounded-b-2xl p-8 shadow-lg border-2 border-t-0" style={{borderColor: '#E8F2FF'}}>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{color: '#2E92ED'}} />
                      <span style={{color: '#000000', fontFamily: 'Roboto, sans-serif'}}>Less time on table with better scan quality</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{color: '#2E92ED'}} />
                      <span style={{color: '#000000', fontFamily: 'Roboto, sans-serif'}}>Low radiation dose</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{color: '#2E92ED'}} />
                      <span style={{color: '#000000', fontFamily: 'Roboto, sans-serif'}}>Virtual Bronchoscopy available</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{color: '#2E92ED'}} />
                      <span style={{color: '#000000', fontFamily: 'Roboto, sans-serif'}}>The machine takes 1000 images in one rotation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{color: '#2E92ED'}} />
                      <span style={{color: '#000000', fontFamily: 'Roboto, sans-serif'}}>Better scans done with less contrast</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{color: '#2E92ED'}} />
                      <span style={{color: '#000000', fontFamily: 'Roboto, sans-serif'}}>Advance technology and scans available at government rates</span>
                    </li>
                  </ul>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{color: '#2E92ED'}} />
                      <span style={{color: '#000000', fontFamily: 'Roboto, sans-serif'}}>Perfusion scans available like brain and lung</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{color: '#2E92ED'}} />
                      <span style={{color: '#000000', fontFamily: 'Roboto, sans-serif'}}>Denta scan for dental patients available</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{color: '#2E92ED'}} />
                      <span style={{color: '#000000', fontFamily: 'Roboto, sans-serif'}}>Virtual Bronchoscopy can be done</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{color: '#2E92ED'}} />
                      <span style={{color: '#000000', fontFamily: 'Roboto, sans-serif'}}>All body angiography available</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Moved 3 Paragraphs to End */}
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
            href="/contact"
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

