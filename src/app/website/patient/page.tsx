export default function PatientPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-200/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-teal-200/15 rounded-full animate-float"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-7xl font-black text-slate-900 mb-6" style={{fontFamily: 'Orbitron, monospace'}}>
              Patient <span className="text-transparent bg-gradient-to-r from-emerald-400 via-teal-400 to-blue-400 bg-clip-text animate-gradient">Information</span>
            </h1>
            <p className="text-2xl text-slate-600 font-light" style={{fontFamily: 'Exo 2, sans-serif'}}>Your health and comfort are our top priorities</p>
            <div className="w-32 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 mx-auto mt-6 rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Same Day Service */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-black text-slate-900 mb-8" style={{fontFamily: 'Orbitron, monospace'}}>
                Same Day <span className="text-transparent bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text">Service</span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-6 bg-emerald-50 rounded-2xl border border-emerald-200 hover:scale-105 transition-all duration-300">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full mt-2 animate-pulse"></div>
                  <p className="text-slate-700 text-lg" style={{fontFamily: 'Exo 2, sans-serif'}}>All OPD & IPD cases are done same day as the registration, there is no waiting for the next day.</p>
                </div>
                <div className="flex items-start space-x-4 p-6 bg-teal-50 rounded-2xl border border-teal-200 hover:scale-105 transition-all duration-300">
                  <div className="w-3 h-3 bg-teal-500 rounded-full mt-2 animate-pulse"></div>
                  <p className="text-slate-700 text-lg" style={{fontFamily: 'Exo 2, sans-serif'}}>All reports are provided within 24 hours of the scan.</p>
                </div>
                <div className="flex items-start space-x-4 p-6 bg-blue-50 rounded-2xl border border-blue-200 hover:scale-105 transition-all duration-300">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 animate-pulse"></div>
                  <p className="text-slate-700 text-lg" style={{fontFamily: 'Exo 2, sans-serif'}}>All trauma patients are done on priority and urgent case's reports are provided the same day.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-10 shadow-2xl border border-emerald-200">
              <h3 className="text-3xl font-black text-slate-900 mb-8" style={{fontFamily: 'Orbitron, monospace'}}>
                Quick <span className="text-transparent bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text">Stats</span>
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-black text-emerald-600 mb-2 animate-pulse-glow">24</div>
                  <div className="text-sm text-slate-600">Hours Report</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-teal-600 mb-2 animate-pulse-glow">0</div>
                  <div className="text-sm text-slate-600">Days Waiting</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-blue-600 mb-2 animate-pulse-glow">24/7</div>
                  <div className="text-sm text-slate-600">Emergency</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-purple-600 mb-2 animate-pulse-glow">100%</div>
                  <div className="text-sm text-slate-600">Priority Care</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Benefits */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-200/15 rounded-full animate-bounce animation-delay-2000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-slate-900 mb-6" style={{fontFamily: 'Orbitron, monospace'}}>
              Patient <span className="text-transparent bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text">Benefits</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-emerald-200/50 hover:scale-110 hover:-translate-y-4 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/25">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-emerald-600 transition-colors duration-300" style={{fontFamily: 'Orbitron, monospace'}}>Low Radiation</h3>
                <p className="text-slate-600 leading-relaxed group-hover:text-slate-800 transition-colors duration-300" style={{fontFamily: 'Exo 2, sans-serif'}}>Up to 82% reduction in radiation dose with advanced SmartDose technology ensuring patient safety</p>
                <div className="w-full h-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full mt-6 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
              </div>
              <div className="absolute top-4 right-4 w-3 h-3 bg-emerald-400 rounded-full animate-ping"></div>
            </div>

            <div className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-blue-200/50 hover:scale-110 hover:-translate-y-4 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/25 animation-delay-2000">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-300" style={{fontFamily: 'Orbitron, monospace'}}>Fast Scanning</h3>
                <p className="text-slate-600 leading-relaxed group-hover:text-slate-800 transition-colors duration-300" style={{fontFamily: 'Exo 2, sans-serif'}}>Complete cardiac scans within 2 heartbeats for minimal discomfort and maximum efficiency</p>
                <div className="w-full h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mt-6 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
              </div>
              <div className="absolute top-4 right-4 w-3 h-3 bg-blue-400 rounded-full animate-ping"></div>
            </div>

            <div className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-purple-200/50 hover:scale-110 hover:-translate-y-4 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/25 animation-delay-4000">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-violet-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-violet-500 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-purple-600 transition-colors duration-300" style={{fontFamily: 'Orbitron, monospace'}}>High Quality</h3>
                <p className="text-slate-600 leading-relaxed group-hover:text-slate-800 transition-colors duration-300" style={{fontFamily: 'Exo 2, sans-serif'}}>Superior 256-slice image quality for accurate diagnosis and precise treatment planning</p>
                <div className="w-full h-1 bg-gradient-to-r from-purple-400 to-violet-400 rounded-full mt-6 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
              </div>
              <div className="absolute top-4 right-4 w-3 h-3 bg-purple-400 rounded-full animate-ping"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CT Scan Advantages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-slate-900 mb-6" style={{fontFamily: 'Orbitron, monospace'}}>
              CT Scan <span className="text-transparent bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text">Advantages</span>
            </h2>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-10 shadow-2xl border border-blue-200">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-black text-slate-900 mb-6" style={{fontFamily: 'Orbitron, monospace'}}>
                  Comprehensive <span className="text-transparent bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text">Imaging</span>
                </h3>
                <p className="text-xl text-slate-700 leading-relaxed mb-6" style={{fontFamily: 'Exo 2, sans-serif'}}>
                  A major advantage of CT is its ability to image bone, soft tissue, and blood vessels all at the same time.
                </p>
                <p className="text-xl text-slate-700 leading-relaxed" style={{fontFamily: 'Exo 2, sans-serif'}}>
                  Unlike conventional x-rays, CT scanning provides very detailed images of many types of tissue as well as 
                  the lungs, bones, and blood vessels which makes it easy for doctors to diagnose the disease and start 
                  the treatment of the patients.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-lg text-center hover:scale-105 transition-all duration-300">
                  <div className="text-3xl font-black text-blue-600 mb-2">Bone</div>
                  <div className="text-sm text-slate-600">Detailed Imaging</div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg text-center hover:scale-105 transition-all duration-300">
                  <div className="text-3xl font-black text-cyan-600 mb-2">Tissue</div>
                  <div className="text-sm text-slate-600">Soft Tissue</div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg text-center hover:scale-105 transition-all duration-300">
                  <div className="text-3xl font-black text-blue-600 mb-2">Vessels</div>
                  <div className="text-sm text-slate-600">Blood Vessels</div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg text-center hover:scale-105 transition-all duration-300">
                  <div className="text-3xl font-black text-cyan-600 mb-2">Organs</div>
                  <div className="text-sm text-slate-600">Internal Organs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black text-white mb-6" style={{fontFamily: 'Orbitron, monospace'}}>
            Need an Appointment?
          </h2>
          <p className="text-xl text-blue-100 mb-8" style={{fontFamily: 'Exo 2, sans-serif'}}>
            Contact us for immediate medical care and consultation
          </p>
          <div className="flex justify-center space-x-8 mb-8">
            <div className="flex items-center space-x-2 text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              <span className="text-lg font-medium">+91 7014265848</span>
            </div>
            <div className="flex items-center space-x-2 text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <span className="text-lg font-medium">techroverteam@gmail.com</span>
            </div>
          </div>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:scale-105 hover:shadow-xl transition-all duration-300 animate-pulse-glow">
            Book Appointment Now
          </button>
        </div>
      </section>
    </div>
  )
}