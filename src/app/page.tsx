import Image from "next/image";
import HeroClient from "./components/HeroClient";
import CardiacPopup from "./components/CardiacPopup";
import HomeContactForm from "./components/HomeContactForm";
import MedicalServicesCards from "./components/MedicalServicesCards";
import MedicalImagingGallery from "./components/MedicalImagingGallery";
import { Trophy, ShieldCheck, Wrench, Award, Users, Clock } from "lucide-react";

// Feature Card Component
const FeatureCardClient = ({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) => (
  <div className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-blue-100 hover:border-[#2E92ED] overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0056AE] to-[#2E92ED]"></div>
    <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#0056AE] to-[#2E92ED] rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-4" style={{color: '#0056AE'}}>{title}</h3>
    <p className="text-gray-600 leading-relaxed">{children}</p>
  </div>
);


export default async function HomePage() {
  return (
    <div className="overflow-hidden">
      <section className="relative h-screen w-full flex items-center justify-center text-white">
        <Image
          src="/images/HOME123.png"
          alt="Medical imaging equipment"
          fill
          className="object-cover brightness-[0.4]"
          priority
        />
        <HeroClient />
      </section>

      {/* Features Section - 4 Cards - Compact Medical Design */}
      <section className="py-12 lg:py-16 bg-gradient-to-b from-white to-[#F8FBFF] relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {/* 24/7 Services Available */}
            <div className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-[#0056AE] overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#0056AE]/5 to-transparent rounded-bl-full"></div>
              <div className="p-5 flex flex-col items-start min-h-[200px]">
                <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 bg-gradient-to-br from-[#0056AE] to-[#2E92ED]">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-base font-semibold leading-tight mb-2" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>
                  24/7 Services Available
                </h3>
                <p className="text-xs leading-relaxed" style={{color: '#586C80', fontFamily: 'Roboto, sans-serif'}}>
                  Immediate medical care available 24 hours a day for emergency patients
                </p>
              </div>
            </div>

            {/* Low Radiation */}
            <div className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-[#2E92ED] overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#2E92ED]/5 to-transparent rounded-bl-full"></div>
              <div className="p-5 flex flex-col items-start min-h-[200px]">
                <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 bg-gradient-to-br from-[#2E92ED] to-[#0056AE]">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-base font-semibold leading-tight mb-2" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>
                  Low Radiation
                </h3>
                <p className="text-xs leading-relaxed" style={{color: '#586C80', fontFamily: 'Roboto, sans-serif'}}>
                  Advanced dose reduction techniques ensure minimal radiation exposure for patient safety
                </p>
              </div>
            </div>

            {/* Dual Energy Scan */}
            <div className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-green-500 overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-500/5 to-transparent rounded-bl-full"></div>
              <div className="p-5 flex flex-col items-start min-h-[200px]">
                <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 bg-gradient-to-br from-green-500 to-green-600">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <h3 className="text-base font-semibold leading-tight mb-2" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>
                  Dual Energy Scan
                </h3>
                <p className="text-xs leading-relaxed" style={{color: '#586C80', fontFamily: 'Roboto, sans-serif'}}>
                  Dual energy scans provides better quality of scans with low dose radiation
                </p>
              </div>
            </div>
                
            {/* No Waiting (Patient done same day) */}
            <div className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-purple-500 overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-500/5 to-transparent rounded-bl-full"></div>
              <div className="p-5 flex flex-col items-start min-h-[200px]">
                <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 bg-gradient-to-br from-purple-500 to-purple-600">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-base font-semibold leading-tight mb-2" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>
                  No Waiting (Patient done same day)
                </h3>
                <p className="text-xs leading-relaxed" style={{color: '#586C80', fontFamily: 'Roboto, sans-serif'}}>
                  All patients are scanned the same day as registration with no waiting period
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>
              Technical Specifications
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#0056AE] to-[#2E92ED] mx-auto"></div>
          </div>

          {/* First Section - Left Content, Right Image */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h4 className="text-2xl font-bold mb-4" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>
                Revolution CT Technology
              </h4>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 p-3 rounded-lg" style={{backgroundColor: '#F8FBFF'}}>
                  <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#2E92ED'}}></div>
                  <span className="text-sm font-medium" style={{color: '#374151', fontFamily: 'Roboto, sans-serif'}}>Revolution CT is a breakthrough that puts in your hand uncompromised technology coverage; spatial resolution, temporal resolution and dose performance all in one CT.</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg" style={{backgroundColor: '#F8FBFF'}}>
                  <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#2E92ED'}}></div>
                  <span className="text-sm font-medium" style={{color: '#374151', fontFamily: 'Roboto, sans-serif'}}>GE healthcare's revolution CT scanner can capture a detailed picture of your body. The x-ray tube moves at this speed it can capture thousands of slices or images of the body, per second.</span>
                </div>
              </div>
              
              <div>
                <h4 className="text-2xl font-bold mb-4" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>
                  Core Specifications
                </h4>
                <div className="space-y-3">
                  {[
                    '256 Slice CT Simultaneous Dual Energy Capability',
                    'Both Axial and Spiral Mode System with Dual Source',
                    'Gemstone Detector with Ultra Fast kVp Switching Technology',
                    'Dual Layer Detector Technology for Dual Energy Data Acquisition'
                  ].map((spec, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-lg" style={{backgroundColor: '#F8FBFF'}}>
                      <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#2E92ED'}}></div>
                      <span className="text-sm font-medium" style={{color: '#374151', fontFamily: 'Roboto, sans-serif'}}>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="/images/angiography.jpg"
                alt="Revolution CT Technology"
                className="w-full h-[400px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          {/* Second Section - Right Content, Left Image */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative lg:order-1">
              <img
                src="/hero.png"
                alt="CT Scanner Equipment"
                className="w-full h-[400px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
            
            <div className="space-y-6 lg:order-2">
              <h4 className="text-2xl font-bold mb-4" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>
                Revolution CT 256 Slice Machine Features
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Volume GSI', 'High Definition', '3D Dose modulation', 'Smart prep with Dynamic Transition',
                  'Dynamic perfusion', 'Reduce metal artifacts', 'Overlapped Recon', 'Organ Dose Modulation',
                  'Digital Tilt', 'Fast Scout', 'Enhance lesion detectability', 'Improve tissue characterisation'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 p-2">
                    <svg className="w-4 h-4" style={{color: '#2E92ED'}} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    <span className="text-sm" style={{color: '#374151', fontFamily: 'Roboto, sans-serif'}}>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Low Radiation Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>
              Low Radiation
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#0056AE] to-[#2E92ED] mx-auto mb-6"></div>
            <p className="text-xl mb-6" style={{color: '#000000', fontFamily: 'Roboto, sans-serif'}}>GE Revolution CT scanners have features that can reduce radiation exposure for patients</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-105 hover:shadow-xl" style={{backgroundColor: '#E8F2FF'}}>
              <div className="p-6 h-64 flex flex-col justify-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300" style={{backgroundColor: '#2E92ED'}}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-3 group-hover:text-[#2E92ED] transition-colors duration-300" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>SmartDose Technologies</h3>
                <p className="text-sm leading-relaxed" style={{color: '#000000', fontFamily: 'Roboto, sans-serif'}}>Reduces radiation dose by up to 40% without affecting image quality</p>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" style={{backgroundColor: '#2E92ED'}}></div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-105 hover:shadow-xl" style={{backgroundColor: '#F0F8FF'}}>
              <div className="p-6 h-64 flex flex-col justify-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300" style={{backgroundColor: '#0056AE'}}>
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-3 group-hover:text-[#2E92ED] transition-colors duration-300" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>Revolution CT Apex</h3>
                <p className="text-sm leading-relaxed" style={{color: '#000000', fontFamily: 'Roboto, sans-serif'}}>Reduces radiation dose in dual-energy CTA compared to other CT scanners</p>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" style={{backgroundColor: '#0056AE'}}></div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-105 hover:shadow-xl" style={{backgroundColor: '#E8F2FF'}}>
              <div className="p-6 h-64 flex flex-col justify-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300" style={{backgroundColor: '#2E92ED'}}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-3 group-hover:text-[#2E92ED] transition-colors duration-300" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>Revolution Aspire</h3>
                <p className="text-sm leading-relaxed" style={{color: '#000000', fontFamily: 'Roboto, sans-serif'}}>Reduces radiation dose by up to 40%</p>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" style={{backgroundColor: '#2E92ED'}}></div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-105 hover:shadow-xl" style={{backgroundColor: '#F0F8FF'}}>
              <div className="p-6 h-64 flex flex-col justify-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300" style={{backgroundColor: '#0056AE'}}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-3 group-hover:text-[#2E92ED] transition-colors duration-300" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>ASiR-V Reconstruction</h3>
                <p className="text-sm leading-relaxed" style={{color: '#000000', fontFamily: 'Roboto, sans-serif'}}>Reduces radiation dose by up to 82%</p>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" style={{backgroundColor: '#0056AE'}}></div>
            </div>
          </div>
        </div>
      </section>

      <MedicalImagingGallery />

      {/* Services & Care Section */}
      <section className="py-16 lg:py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>
              Our Services & Care
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#0056AE] to-[#2E92ED] mx-auto"></div>
          </div>
          
          <div className="mx-auto px-8 sm:px-12 lg:px-16 xl:px-20">
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
              {/* 24 Hour Reporting */}
              <div className="group perspective-1000">
                <div className="relative w-full h-80 transform-style-preserve-3d transition-transform duration-700 group-hover:rotate-y-180">
                  <div className="absolute inset-0 backface-hidden">
                    <div className="text-center p-6 lg:p-8 rounded-2xl h-full flex flex-col justify-center border-t-4 shadow-lg" style={{backgroundColor: '#E8F2FF', borderTopColor: '#2E92ED'}}>
                      <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto" style={{backgroundColor: '#2E92ED'}}>
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold mb-4" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>
                        24 HOUR REPORTING
                      </h3>
                    </div>
                  </div>
                  <div className="absolute inset-0 backface-hidden rotate-y-180">
                    <div className="text-center p-6 lg:p-8 rounded-2xl h-full flex flex-col justify-center shadow-lg" style={{backgroundColor: '#2E92ED'}}>
                      <p className="text-sm leading-relaxed text-white" style={{fontFamily: 'Roboto, sans-serif'}}>
                        Complete reports provided within 24 hours and also shared on WhatsApp for your convenience
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Personal Care */}
              <div className="group perspective-1000">
                <div className="relative w-full h-80 transform-style-preserve-3d transition-transform duration-700 group-hover:rotate-y-180">
                  <div className="absolute inset-0 backface-hidden">
                    <div className="text-center p-6 lg:p-8 rounded-2xl h-full flex flex-col justify-center border-t-4 shadow-lg" style={{backgroundColor: '#E8F2FF', borderTopColor: '#2E92ED'}}>
                      <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto" style={{backgroundColor: '#2E92ED'}}>
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold mb-4" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>
                        COOPERATIVE STAFF
                      </h3>
                    </div>
                  </div>
                  <div className="absolute inset-0 backface-hidden rotate-y-180">
                    <div className="text-center p-6 lg:p-8 rounded-2xl h-full flex flex-col justify-center shadow-lg" style={{backgroundColor: '#2E92ED'}}>
                      <p className="text-sm leading-relaxed text-white" style={{fontFamily: 'Roboto, sans-serif'}}>
                        Experienced radiologists and cooperative staff available 24x7 to guide and assist you
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Doctors */}
              <div className="group perspective-1000">
                <div className="relative w-full h-80 transform-style-preserve-3d transition-transform duration-700 group-hover:rotate-y-180">
                  <div className="absolute inset-0 backface-hidden">
                    <div className="text-center p-6 lg:p-8 rounded-2xl h-full flex flex-col justify-center border-t-4 shadow-lg" style={{backgroundColor: '#E8F2FF', borderTopColor: '#0056AE'}}>
                      <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto" style={{backgroundColor: '#0056AE'}}>
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold mb-4" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>
                        DOCTORS
                      </h3>
                    </div>
                  </div>
                  <div className="absolute inset-0 backface-hidden rotate-y-180">
                    <div className="text-center p-6 lg:p-8 rounded-2xl h-full flex flex-col justify-center shadow-lg" style={{backgroundColor: '#0056AE'}}>
                      <p className="text-sm leading-relaxed text-white" style={{fontFamily: 'Roboto, sans-serif'}}>
                        We have an efficient team of radiologists for reporting
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Expert Team */}
              <div className="group perspective-1000">
                <div className="relative w-full h-80 transform-style-preserve-3d transition-transform duration-700 group-hover:rotate-y-180">
                  <div className="absolute inset-0 backface-hidden">
                    <div className="text-center p-6 lg:p-8 rounded-2xl h-full flex flex-col justify-center border-t-4 shadow-lg" style={{backgroundColor: '#E8F2FF', borderTopColor: '#0056AE'}}>
                      <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto" style={{backgroundColor: '#0056AE'}}>
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold mb-4" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>
                        PERSONAL CARE
                      </h3>
                    </div>
                  </div>
                  <div className="absolute inset-0 backface-hidden rotate-y-180">
                    <div className="text-center p-6 lg:p-8 rounded-2xl h-full flex flex-col justify-center shadow-lg" style={{backgroundColor: '#0056AE'}}>
                      <p className="text-sm leading-relaxed text-white" style={{fontFamily: 'Roboto, sans-serif'}}>
                        Dedicated personal care with individual attention to ensure comfort and support throughout your visit
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Services */}
              <div className="group perspective-1000">
                <div className="relative w-full h-80 transform-style-preserve-3d transition-transform duration-700 group-hover:rotate-y-180">
                  <div className="absolute inset-0 backface-hidden">
                    <div className="text-center p-6 lg:p-8 rounded-2xl h-full flex flex-col justify-center border-t-4 shadow-lg" style={{backgroundColor: '#E8F2FF', borderTopColor: '#0056AE'}}>
                      <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto" style={{backgroundColor: '#0056AE'}}>
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold mb-4" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>
                        EMERGENCY SERVICES
                      </h3>
                    </div>
                  </div>
                  <div className="absolute inset-0 backface-hidden rotate-y-180">
                    <div className="text-center p-6 lg:p-8 rounded-2xl h-full flex flex-col justify-center shadow-lg" style={{backgroundColor: '#0056AE'}}>
                      <p className="text-sm leading-relaxed text-white" style={{fontFamily: 'Roboto, sans-serif'}}>
                        Immediate emergency CT scan services available 24/7 for trauma and critical cases
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Advantages of CT Scans */}
      <section className="py-16 lg:py-20" style={{backgroundColor: '#F8FBFF'}}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>
              Advantages of CT Scans
            </h2>
          </div>

          <div className="mx-auto px-8 sm:px-12 lg:px-16 xl:px-20">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative p-8 rounded-3xl overflow-hidden" style={{backgroundColor: '#E8F2FF'}}>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{background: 'linear-gradient(135deg, #2E92ED, #0056AE)'}}></div>
              <div className="relative z-10 transform group-hover:scale-105 transition-all duration-500">
                <div className="flex items-center mb-6">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mr-4 group-hover:rotate-12 transition-transform duration-500" style={{backgroundColor: '#2E92ED'}}>
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold group-hover:text-white transition-colors duration-500" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>Comprehensive Imaging</h3>
                </div>
                <p className="text-lg leading-relaxed group-hover:text-white transition-colors duration-500" style={{color: '#000000', fontFamily: 'Roboto, sans-serif'}}>
                  A major advantage of CT is its ability to image bone, soft tissue, and blood vessels all at the same time
                </p>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-2 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700" style={{backgroundColor: '#0056AE'}}></div>
            </div>

            <div className="group relative p-8 rounded-3xl overflow-hidden" style={{backgroundColor: '#F0F8FF'}}>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{background: 'linear-gradient(135deg, #0056AE, #2E92ED)'}}></div>
              <div className="relative z-10 transform group-hover:scale-105 transition-all duration-500">
                <div className="flex items-center mb-6">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mr-4 group-hover:rotate-12 transition-transform duration-500" style={{backgroundColor: '#0056AE'}}>
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold group-hover:text-white transition-colors duration-500" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>Superior Detail</h3>
                </div>
                <p className="text-lg leading-relaxed group-hover:text-white transition-colors duration-500" style={{color: '#000000', fontFamily: 'Roboto, sans-serif'}}>
                  Unlike conventional x-rays, CT scanning provides very detailed images of many types of tissue as well as the lungs, bones, and blood vessels which makes it easy for doctors to diagnose the disease and start the treatment of the patients
                </p>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-2 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700" style={{backgroundColor: '#2E92ED'}}></div>
            </div>

            <div className="group relative p-8 rounded-3xl overflow-hidden" style={{backgroundColor: '#E8F2FF'}}>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{background: 'linear-gradient(135deg, #2E92ED, #0056AE)'}}></div>
              <div className="relative z-10 transform group-hover:scale-105 transition-all duration-500">
                <div className="flex items-center mb-6">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mr-4 group-hover:rotate-12 transition-transform duration-500" style={{backgroundColor: '#2E92ED'}}>
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold group-hover:text-white transition-colors duration-500" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>Fast & Accurate</h3>
                </div>
                <p className="text-lg leading-relaxed group-hover:text-white transition-colors duration-500" style={{color: '#000000', fontFamily: 'Roboto, sans-serif'}}>
                  Our Revolution CT 256 slice technology provides rapid scanning with exceptional accuracy, enabling quick diagnosis and immediate treatment planning for better patient outcomes
                </p>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-2 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700" style={{backgroundColor: '#0056AE'}}></div>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>
              Why Choose Varaha SDC?
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{color: '#586C80', fontFamily: 'Roboto, sans-serif'}}>
              We combine decades of expertise with cutting-edge technology to deliver unmatched quality
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            <FeatureCardClient
              icon={<Trophy size={32} className="text-white" />}
              title="Industry Leaders"
            >
              Over 10 years of experience in providing advanced medical imaging
              services with state-of-the-art equipment for accurate CT Scan.
            </FeatureCardClient>
            
            <FeatureCardClient
              icon={<ShieldCheck size={32} className="text-white" />}
              title="Advanced Technology"
            >
              Our Revolution CT 256 slice machine provides superior image quality
              with minimal radiation exposure for patient safety.
            </FeatureCardClient>
            
            <FeatureCardClient
              icon={<Wrench size={32} className="text-white" />}
              title="Expert Team"
            >
              Highly qualified radiologists and technicians ensure accurate
              reporting and exceptional patient care.
            </FeatureCardClient>
            
            <FeatureCardClient
              icon={<Award size={32} className="text-white" />}
              title="Quality Assured"
            >
              Certified processes and quality control systems ensure every scan
              meets the highest medical standards.
            </FeatureCardClient>
            
            <FeatureCardClient
              icon={<Users size={32} className="text-white" />}
              title="Patient Focused"
            >
              Same-day service with 24-hour reporting ensures quick diagnosis
              and treatment planning for our patients.
            </FeatureCardClient>
            
            <FeatureCardClient
              icon={<Clock size={32} className="text-white" />}
              title="24/7 Emergency"
            >
              Round-the-clock emergency services with priority handling for
              trauma and urgent cases.
            </FeatureCardClient>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-20 relative overflow-hidden" style={{backgroundColor: '#F8FBFF'}}>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-[#2E92ED]/10 to-[#0056AE]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-br from-[#0056AE]/10 to-[#2E92ED]/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="group p-6 rounded-2xl transition-all duration-300 hover:scale-105" style={{backgroundColor: '#E8F2FF'}}>
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300" style={{backgroundColor: '#2E92ED'}}>
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold mb-2" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>Same Day Service</h3>
                    <p className="text-sm" style={{color: '#586C80', fontFamily: 'Roboto, sans-serif'}}>No waiting - get scanned the same day you register</p>
                  </div>
                  
                  <div className="group p-6 rounded-2xl transition-all duration-300 hover:scale-105" style={{backgroundColor: '#F0F8FF'}}>
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300" style={{backgroundColor: '#0056AE'}}>
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold mb-2" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>24 Hour Reports</h3>
                    <p className="text-sm" style={{color: '#586C80', fontFamily: 'Roboto, sans-serif'}}>Fast, accurate results within 24 hours</p>
                  </div>
                  
                  <div className="group p-6 rounded-2xl transition-all duration-300 hover:scale-105" style={{backgroundColor: '#E8F2FF'}}>
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300" style={{backgroundColor: '#2E92ED'}}>
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold mb-2" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>WhatsApp Reports</h3>
                    <p className="text-sm" style={{color: '#586C80', fontFamily: 'Roboto, sans-serif'}}>Reports shared directly on WhatsApp for convenience</p>
                  </div>
                  
                  <div className="group p-6 rounded-2xl transition-all duration-300 hover:scale-105" style={{backgroundColor: '#F0F8FF'}}>
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300" style={{backgroundColor: '#0056AE'}}>
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"/>
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold mb-2" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>24/7 Emergency</h3>
                    <p className="text-sm" style={{color: '#586C80', fontFamily: 'Roboto, sans-serif'}}>Round-the-clock emergency services</p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="/book-appointment" className="flex-1 bg-gradient-to-r from-[#0056AE] to-[#2E92ED] text-white font-bold py-4 px-8 rounded-xl text-center hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                    Book Appointment Now
                  </a>
                  <a href="tel:8233338550" className="flex-1 border-2 border-[#2E92ED] text-[#2E92ED] font-bold py-4 px-8 rounded-xl text-center hover:bg-[#2E92ED] hover:text-white transition-all duration-300">
                    Call: 8233338550
                  </a>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-2xl border border-blue-100">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#0056AE] to-[#2E92ED] rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-2" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>Get In Touch</h3>
                    <p className="text-sm" style={{color: '#586C80', fontFamily: 'Roboto, sans-serif'}}>Schedule your appointment or ask any questions</p>
                  </div>
                  
                  <HomeContactForm />
                </div>
                
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-[#0056AE] to-[#2E92ED] rounded-full animate-bounce"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-[#2E92ED] to-[#0056AE] rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <CardiacPopup />
    </div>
  );
}