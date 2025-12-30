import Image from "next/image";
import HeroClient from "./components/HeroClient";
import CardiacPopup from "./components/CardiacPopup";
import { Trophy, ShieldCheck, Wrench, Award, Users, Clock } from "lucide-react";

// Feature Card Component
const FeatureCardClient = ({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) => (
  <div className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-blue-100 hover:border-[#2E92ED] overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0056AE] to-[#2E92ED]"></div>
    <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#0056AE] to-[#2E92ED] rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-800 mb-4">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{children}</p>
  </div>
);

// Contact Form Component
const HomeContactForm = () => (
  <div className="bg-white rounded-xl p-6 shadow-lg">
    <h3 className="text-lg font-bold text-center mb-4" style={{color: '#0056AE'}}>Get In Touch</h3>
    <form className="space-y-3">
      <div className="grid grid-cols-2 gap-3">
        <input type="text" placeholder="Name" className="w-full p-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-[#2E92ED]" />
        <input type="email" placeholder="Email" className="w-full p-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-[#2E92ED]" />
      </div>
      <input type="text" placeholder="Subject" className="w-full p-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-[#2E92ED]" />
      <textarea placeholder="Message" rows={3} className="w-full p-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-[#2E92ED]"></textarea>
      <button type="submit" className="w-full bg-gradient-to-r from-[#0056AE] to-[#2E92ED] text-white font-bold py-3 px-6 rounded-lg text-sm hover:shadow-lg transition-all duration-300">
        Send Message
      </button>
    </form>
  </div>
);

export default async function HomePage() {
  return (
    <div className="overflow-hidden">
      <section className="relative h-screen w-full flex items-center justify-center text-white">
        <Image
          src="/hero.png"
          alt="Medical imaging equipment"
          fill
          className="object-cover brightness-[0.4]"
          priority
        />
        <HeroClient />
      </section>

      {/* Revolution CT Section */}
      <section className="py-16 lg:py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <svg className="absolute top-10 left-10 w-64 h-64 text-[#E8F2FF]" fill="currentColor" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="2" />
            <circle cx="20" cy="30" r="1" />
            <circle cx="80" cy="20" r="1.5" />
            <circle cx="70" cy="80" r="1" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0056AE] to-[#2E92ED] text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
              Revolution CT Technology
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>
              256 Slice Machine
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#0056AE] to-[#2E92ED] mx-auto"></div>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Features Web */}
              <div className="relative w-[600px] h-[600px] mx-auto">
                {/* Center Hub */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className="w-24 h-24 bg-gradient-to-br from-[#0056AE] to-[#2E92ED] rounded-full flex items-center justify-center shadow-2xl">
                    <div className="text-white text-center">
                      <div className="text-2xl font-bold">256</div>
                      <div className="text-xs">SLICE CT</div>
                    </div>
                  </div>
                  <div className="absolute inset-0 rounded-full border-4 border-[#2E92ED]/20 animate-ping"></div>
                </div>
                
                {/* Perfect Circle Features */}
                {[
                  'Volume GSI', 'High Definition', '3D Dose modulation', 'Smart prep with Dynamic Transition',
                  'Dynamic perfusion', 'Reduce metal artifacts', 'Overlapped Recon', 'Organ Dose Modulation',
                  'Digital Tilt', 'Fast Scout', 'Enhance lesion detectability', 'Improve tissue characterisation'
                ].map((feature, index) => {
                  const angle = (index * 30) - 90;
                  const radius = 240;
                  const x = Math.cos((angle * Math.PI) / 180) * radius;
                  const y = Math.sin((angle * Math.PI) / 180) * radius;
                  
                  return (
                    <div key={index} className="absolute z-10" style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      transform: 'translate(-50%, -50%)'
                    }}>
                      {/* Connection Line */}
                      <div className="absolute w-px bg-gradient-to-r from-[#2E92ED] to-transparent opacity-30" style={{
                        height: radius - 48,
                        left: '50%',
                        top: y < 0 ? '100%' : `-${radius - 48}px`,
                        transform: `translateX(-50%) rotate(${angle + 90}deg)`,
                        transformOrigin: y < 0 ? 'top' : 'bottom'
                      }}></div>
                      
                      {/* Feature Card */}
                      <div className="bg-white rounded-xl p-4 shadow-lg border-2 border-transparent hover:border-[#2E92ED] transition-all duration-300 hover:scale-110 hover:shadow-xl group cursor-pointer" style={{minWidth: '140px'}}>
                        <div className="text-center">
                          <div className="w-3 h-3 bg-gradient-to-r from-[#0056AE] to-[#2E92ED] rounded-full mx-auto mb-2 group-hover:animate-pulse"></div>
                          <span className="text-xs font-semibold leading-tight block" style={{color: '#000000', fontFamily: 'Roboto, sans-serif'}}>
                            {feature}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
                
                {/* Outer Circle Guide */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-[#E8F2FF] rounded-full"></div>
              </div>

              {/* Description */}
              <div className="space-y-6">
                <div className="p-8 rounded-2xl" style={{backgroundColor: '#E8F2FF'}}>
                  <h3 className="text-2xl font-bold mb-4" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>
                    Revolutionary Technology
                  </h3>
                  <p className="text-lg leading-relaxed mb-4" style={{color: '#000000', fontFamily: 'Roboto, sans-serif'}}>
                    Revolution CT is a breakthrough that puts in your hand uncompromised technology coverage; spatial resolution, temporal resolution and dose performance all in one CT.
                  </p>
                  <p className="text-lg leading-relaxed" style={{color: '#000000', fontFamily: 'Roboto, sans-serif'}}>
                    In the time it takes for your heart to beat once, GE healthcare's revolution CT scanner can capture a detailed picture of your body.
                  </p>
                </div>
                
                <div className="p-8 rounded-2xl" style={{backgroundColor: '#F0F8FF'}}>
                  <p className="text-lg leading-relaxed" style={{color: '#000000', fontFamily: 'Roboto, sans-serif'}}>
                    We focus on bringing quality diagnosis services by providing accurate and timely test results. With a commitment to excellence, Varaha is your trusted partner in promoting good health.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 lg:py-20 relative overflow-hidden" style={{backgroundColor: '#F8FBFF'}}>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-[#2E92ED]/10 to-[#0056AE]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-br from-[#0056AE]/10 to-[#2E92ED]/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0056AE] to-[#2E92ED] text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
              Advanced Technology
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>
              Technical Specifications
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#0056AE] to-[#2E92ED] mx-auto mb-6"></div>
            <p className="text-lg max-w-3xl mx-auto" style={{color: '#586C80', fontFamily: 'Roboto, sans-serif'}}>
              Cutting-edge medical imaging technology with unparalleled precision and safety
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: '256 Slice CT Simultaneous Dual Energy Capability',
                icon: '⚡',
                gradient: 'from-blue-500 to-cyan-500'
              },
              {
                title: 'Both Axial and Spiral Mode System with Dual Source',
                icon: '🔄',
                gradient: 'from-purple-500 to-pink-500'
              },
              {
                title: 'Gemstone Detector with Ultra Fast kVp Switching Technology',
                icon: '💎',
                gradient: 'from-green-500 to-emerald-500'
              },
              {
                title: 'Dual Layer Detector Technology for Dual Energy Data Acquisition',
                icon: '📡',
                gradient: 'from-orange-500 to-red-500'
              }
            ].map((spec, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl blur-xl" style={{background: `linear-gradient(135deg, ${spec.gradient.includes('blue') ? '#3B82F6, #06B6D4' : spec.gradient.includes('purple') ? '#8B5CF6, #EC4899' : spec.gradient.includes('green') ? '#10B981, #059669' : '#F97316, #EF4444'})`}}></div>
                
                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-blue-100 group-hover:border-transparent group-hover:scale-105">
                  <div className="flex items-start gap-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${spec.gradient} flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {spec.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm" style={{backgroundColor: '#2E92ED'}}>
                          {index + 1}
                        </div>
                        <div className="h-px flex-1 bg-gradient-to-r from-[#2E92ED] to-transparent"></div>
                      </div>
                      <h3 className="text-lg font-bold mb-3 group-hover:text-[#0056AE] transition-colors duration-300" style={{color: '#000000', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>
                        {spec.title}
                      </h3>
                      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className={`h-full bg-gradient-to-r ${spec.gradient} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left`}></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-r from-[#0056AE] to-[#2E92ED] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-4 bg-white rounded-full px-8 py-4 shadow-lg border border-blue-100">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-[#0056AE] to-[#2E92ED] rounded-full border-2 border-white"></div>
                <div className="w-8 h-8 bg-gradient-to-r from-[#2E92ED] to-[#0056AE] rounded-full border-2 border-white"></div>
                <div className="w-8 h-8 bg-gradient-to-r from-[#0056AE] to-[#2E92ED] rounded-full border-2 border-white"></div>
              </div>
              <span className="text-sm font-medium" style={{color: '#586C80', fontFamily: 'Roboto, sans-serif'}}>Trusted by Medical Professionals Worldwide</span>
            </div>
          </div>
        </div>
      </section>

      {/* Same Day Service */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>
              Patients Done The Same Day, No Waiting
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group perspective-1000">
              <div className="relative w-full h-64 transform-style-preserve-3d transition-transform duration-700 group-hover:rotate-y-180">
                <div className="absolute inset-0 backface-hidden">
                  <div className="text-center p-6 rounded-xl h-full flex flex-col justify-center" style={{backgroundColor: '#E8F2FF'}}>
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto" style={{backgroundColor: '#2E92ED'}}>
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>Same Day Registration</h3>
                  </div>
                </div>
                <div className="absolute inset-0 backface-hidden rotate-y-180">
                  <div className="text-center p-6 rounded-xl h-full flex flex-col justify-center" style={{backgroundColor: '#2E92ED'}}>
                    <p className="text-sm leading-relaxed text-white" style={{fontFamily: 'Roboto, sans-serif'}}>All OPD & IPD cases are done same day as the registration, there is no waiting for the next day</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="group perspective-1000">
              <div className="relative w-full h-64 transform-style-preserve-3d transition-transform duration-700 group-hover:rotate-y-180">
                <div className="absolute inset-0 backface-hidden">
                  <div className="text-center p-6 rounded-xl h-full flex flex-col justify-center" style={{backgroundColor: '#E8F2FF'}}>
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto" style={{backgroundColor: '#2E92ED'}}>
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>24 Hour Reports</h3>
                  </div>
                </div>
                <div className="absolute inset-0 backface-hidden rotate-y-180">
                  <div className="text-center p-6 rounded-xl h-full flex flex-col justify-center" style={{backgroundColor: '#2E92ED'}}>
                    <p className="text-sm leading-relaxed text-white" style={{fontFamily: 'Roboto, sans-serif'}}>All reports are provided within 24 hours of the scan</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="group perspective-1000">
              <div className="relative w-full h-64 transform-style-preserve-3d transition-transform duration-700 group-hover:rotate-y-180">
                <div className="absolute inset-0 backface-hidden">
                  <div className="text-center p-6 rounded-xl h-full flex flex-col justify-center" style={{backgroundColor: '#E8F2FF'}}>
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto" style={{backgroundColor: '#2E92ED'}}>
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>Special Cases</h3>
                  </div>
                </div>
                <div className="absolute inset-0 backface-hidden rotate-y-180">
                  <div className="text-center p-6 rounded-xl h-full flex flex-col justify-center" style={{backgroundColor: '#2E92ED'}}>
                    <p className="text-sm leading-relaxed text-white" style={{fontFamily: 'Roboto, sans-serif'}}>Only patients with scans that are to be done empty stomach are called the second day</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="group perspective-1000">
              <div className="relative w-full h-64 transform-style-preserve-3d transition-transform duration-700 group-hover:rotate-y-180">
                <div className="absolute inset-0 backface-hidden">
                  <div className="text-center p-6 rounded-xl h-full flex flex-col justify-center" style={{backgroundColor: '#E8F2FF'}}>
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto" style={{backgroundColor: '#2E92ED'}}>
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>Priority Cases</h3>
                  </div>
                </div>
                <div className="absolute inset-0 backface-hidden rotate-y-180">
                  <div className="text-center p-6 rounded-xl h-full flex flex-col justify-center" style={{backgroundColor: '#2E92ED'}}>
                    <p className="text-sm leading-relaxed text-white" style={{fontFamily: 'Roboto, sans-serif'}}>All trauma patients are done on priority and urgent case's reports are provided the same day</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dual Energy Section */}
      <section className="py-16 lg:py-20" style={{backgroundColor: '#F8FBFF'}}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>
              Dual Energy
            </h2>
            <p className="text-xl mb-6" style={{color: '#000000', fontFamily: 'Roboto, sans-serif'}}>256 slice CT simultaneous dual energy capability</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group perspective-1000">
              <div className="relative w-full h-80 transform-style-preserve-3d transition-transform duration-700 group-hover:rotate-y-180">
                <div className="absolute inset-0 backface-hidden">
                  <div className="p-6 rounded-xl h-full flex flex-col justify-center items-center" style={{backgroundColor: '#E8F2FF'}}>
                    <div className="w-20 h-20 rounded-full flex items-center justify-center mb-4" style={{backgroundColor: '#2E92ED'}}>
                      <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-center" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>Fast & Safe Scanning</h3>
                  </div>
                </div>
                <div className="absolute inset-0 backface-hidden rotate-y-180">
                  <div className="p-6 rounded-xl h-full flex flex-col justify-center" style={{backgroundColor: '#2E92ED'}}>
                    <p className="text-sm leading-relaxed text-white text-center" style={{fontFamily: 'Roboto, sans-serif'}}>The machine provides fast scans with minimum radiations, less time on table for patients with better quality scans. It captures detailed images of entire organs in a single scan, reducing radiation exposure.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="group perspective-1000">
              <div className="relative w-full h-80 transform-style-preserve-3d transition-transform duration-700 group-hover:rotate-y-180">
                <div className="absolute inset-0 backface-hidden">
                  <div className="p-6 rounded-xl h-full flex flex-col justify-center items-center" style={{backgroundColor: '#E8F2FF'}}>
                    <div className="w-20 h-20 rounded-full flex items-center justify-center mb-4" style={{backgroundColor: '#2E92ED'}}>
                      <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-center" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>2 Heart Beats Scanning</h3>
                  </div>
                </div>
                <div className="absolute inset-0 backface-hidden rotate-y-180">
                  <div className="p-6 rounded-xl h-full flex flex-col justify-center" style={{backgroundColor: '#2E92ED'}}>
                    <p className="text-sm leading-relaxed text-white text-center" style={{fontFamily: 'Roboto, sans-serif'}}>All scans including cardiac scans are done within 2 heart beats. In the time it takes for a heart to beat once, GE healthcare's revolution CT scanner can capture a detailed picture of the body.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="group perspective-1000">
              <div className="relative w-full h-80 transform-style-preserve-3d transition-transform duration-700 group-hover:rotate-y-180">
                <div className="absolute inset-0 backface-hidden">
                  <div className="p-6 rounded-xl h-full flex flex-col justify-center items-center" style={{backgroundColor: '#E8F2FF'}}>
                    <div className="w-20 h-20 rounded-full flex items-center justify-center mb-4" style={{backgroundColor: '#2E92ED'}}>
                      <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-center" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>Advanced Heart Imaging</h3>
                  </div>
                </div>
                <div className="absolute inset-0 backface-hidden rotate-y-180">
                  <div className="p-6 rounded-xl h-full flex flex-col justify-center" style={{backgroundColor: '#2E92ED'}}>
                    <p className="text-sm leading-relaxed text-white text-center" style={{fontFamily: 'Roboto, sans-serif'}}>The 256 slice CT provides a quantum leap in imaging and is now being used to diagnose heart disease. This advanced scanner achieves whole imaging of the heart within a short time span using low dose radiation.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="group perspective-1000">
              <div className="relative w-full h-80 transform-style-preserve-3d transition-transform duration-700 group-hover:rotate-y-180">
                <div className="absolute inset-0 backface-hidden">
                  <div className="p-6 rounded-xl h-full flex flex-col justify-center items-center" style={{backgroundColor: '#E8F2FF'}}>
                    <div className="w-20 h-20 rounded-full flex items-center justify-center mb-4" style={{backgroundColor: '#2E92ED'}}>
                      <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-center" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>Superior Image Quality</h3>
                  </div>
                </div>
                <div className="absolute inset-0 backface-hidden rotate-y-180">
                  <div className="p-6 rounded-xl h-full flex flex-col justify-center" style={{backgroundColor: '#2E92ED'}}>
                    <p className="text-sm leading-relaxed text-white text-center" style={{fontFamily: 'Roboto, sans-serif'}}>The x-ray tube moves at incredible speed capturing thousands of slices per second. The scanner helps doctors improve image quality and reduce radiation exposure compared to other scanners.</p>
                  </div>
                </div>
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
            <p className="text-xl mb-6" style={{color: '#000000', fontFamily: 'Roboto, sans-serif'}}>GE Revolution CT scanners have features that can reduce radiation exposure for patients</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group relative overflow-hidden rounded-2xl" style={{backgroundColor: '#E8F2FF'}}>
              <div className="p-6 h-64 flex flex-col justify-between transition-all duration-500 group-hover:scale-105">
                <div>
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{backgroundColor: '#2E92ED'}}>
                    <span className="text-white font-bold text-2xl" style={{fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>40%</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>SmartDose Technologies</h3>
                </div>
                <div className="transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-sm" style={{color: '#000000', fontFamily: 'Roboto, sans-serif'}}>Reduces radiation dose by up to 40% without affecting image quality</p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" style={{backgroundColor: '#2E92ED'}}></div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl" style={{backgroundColor: '#F0F8FF'}}>
              <div className="p-6 h-64 flex flex-col justify-between transition-all duration-500 group-hover:scale-105">
                <div>
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{backgroundColor: '#0056AE'}}>
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>Revolution CT Apex</h3>
                </div>
                <div className="transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-sm" style={{color: '#000000', fontFamily: 'Roboto, sans-serif'}}>Reduces radiation dose in dual-energy CTA compared to other CT scanners</p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" style={{backgroundColor: '#0056AE'}}></div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl" style={{backgroundColor: '#E8F2FF'}}>
              <div className="p-6 h-64 flex flex-col justify-between transition-all duration-500 group-hover:scale-105">
                <div>
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{backgroundColor: '#2E92ED'}}>
                    <span className="text-white font-bold text-2xl" style={{fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>40%</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>Revolution Aspire</h3>
                </div>
                <div className="transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-sm" style={{color: '#000000', fontFamily: 'Roboto, sans-serif'}}>Reduces radiation dose by up to 40%</p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" style={{backgroundColor: '#2E92ED'}}></div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl" style={{backgroundColor: '#F0F8FF'}}>
              <div className="p-6 h-64 flex flex-col justify-between transition-all duration-500 group-hover:scale-105">
                <div>
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{backgroundColor: '#0056AE'}}>
                    <span className="text-white font-bold text-2xl" style={{fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>82%</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>ASiR-V Reconstruction</h3>
                </div>
                <div className="transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-sm" style={{color: '#000000', fontFamily: 'Roboto, sans-serif'}}>Reduces radiation dose by up to 82%</p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" style={{backgroundColor: '#0056AE'}}></div>
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
            <p className="text-xl mb-6" style={{color: '#000000', fontFamily: 'Roboto, sans-serif'}}>A major advantage of CT is its ability to image bone, soft tissue, and blood vessels all at the same time</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
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
                  CT scanning provides the unique ability to image bone, soft tissue, and blood vessels simultaneously, giving doctors a complete picture in a single scan.
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
                  Unlike conventional x-rays, CT scanning provides very detailed images of lungs, bones, and blood vessels, making it easy for doctors to diagnose diseases and start treatment.
                </p>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-2 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700" style={{backgroundColor: '#2E92ED'}}></div>
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
              Over 25 years of experience in providing advanced medical imaging
              services with state-of-the-art equipment for accurate diagnosis.
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
      <section className="py-12" style={{backgroundColor: '#F8FBFF'}}>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
            <div>
              <h2 className="text-2xl font-bold mb-3" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>
                Ready for Your Scan?
              </h2>
              <p className="text-sm" style={{color: '#586C80', fontFamily: 'Roboto, sans-serif'}}>
                Contact us today to schedule your appointment or learn more about our advanced imaging services.
              </p>
            </div>
            <div>
              <HomeContactForm />
            </div>
          </div>
        </div>
      </section>
      
      <CardiacPopup />
    </div>
  );
}