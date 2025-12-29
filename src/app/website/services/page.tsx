export default function ServicesPage() {
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
              Our <span className="text-transparent bg-gradient-to-r from-emerald-400 via-teal-400 to-blue-400 bg-clip-text animate-gradient">Services</span>
            </h1>
            <p className="text-2xl text-slate-600 font-light" style={{fontFamily: 'Exo 2, sans-serif'}}>Comprehensive medical imaging solutions</p>
            <div className="w-32 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 mx-auto mt-6 rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-200/15 rounded-full animate-bounce animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-200/10 rounded-full animate-float"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Emergency Care */}
            <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-red-200/50 hover:scale-110 hover:-translate-y-6 transition-all duration-700 hover:shadow-2xl hover:shadow-red-500/30 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-red-600 transition-colors duration-300" style={{fontFamily: 'Orbitron, monospace'}}>Emergency Care</h3>
                <p className="text-slate-600 leading-relaxed group-hover:text-slate-800 transition-colors duration-300" style={{fontFamily: 'Exo 2, sans-serif'}}>24/7 immediate medical care for emergency patients with priority scanning and same-day reporting</p>
                <div className="w-full h-1 bg-gradient-to-r from-red-400 to-pink-400 rounded-full mt-6 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
              </div>
              <div className="absolute top-4 right-4 w-3 h-3 bg-red-400 rounded-full animate-ping"></div>
            </div>

            {/* Cardiac Imaging */}
            <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-blue-200/50 hover:scale-110 hover:-translate-y-6 transition-all duration-700 hover:shadow-2xl hover:shadow-blue-500/30 overflow-hidden animation-delay-2000">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-300" style={{fontFamily: 'Orbitron, monospace'}}>Cardiac Imaging</h3>
                <p className="text-slate-600 leading-relaxed group-hover:text-slate-800 transition-colors duration-300" style={{fontFamily: 'Exo 2, sans-serif'}}>Advanced heart imaging within 2 heartbeats with 3D visualization and comprehensive cardiac analysis</p>
                <div className="w-full h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mt-6 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
              </div>
              <div className="absolute top-4 right-4 w-3 h-3 bg-blue-400 rounded-full animate-ping"></div>
            </div>

            {/* Dual Energy CT */}
            <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-emerald-200/50 hover:scale-110 hover:-translate-y-6 transition-all duration-700 hover:shadow-2xl hover:shadow-emerald-500/30 overflow-hidden animation-delay-4000">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-emerald-600 transition-colors duration-300" style={{fontFamily: 'Orbitron, monospace'}}>Dual Energy CT</h3>
                <p className="text-slate-600 leading-relaxed group-hover:text-slate-800 transition-colors duration-300" style={{fontFamily: 'Exo 2, sans-serif'}}>Superior image quality with simultaneous dual energy capability for enhanced diagnostic accuracy</p>
                <div className="w-full h-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full mt-6 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
              </div>
              <div className="absolute top-4 right-4 w-3 h-3 bg-emerald-400 rounded-full animate-ping"></div>
            </div>

            {/* Low Radiation Scanning */}
            <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-purple-200/50 hover:scale-110 hover:-translate-y-6 transition-all duration-700 hover:shadow-2xl hover:shadow-purple-500/30 overflow-hidden animation-delay-6000">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-violet-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-violet-500 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-purple-600 transition-colors duration-300" style={{fontFamily: 'Orbitron, monospace'}}>Low Radiation</h3>
                <p className="text-slate-600 leading-relaxed group-hover:text-slate-800 transition-colors duration-300" style={{fontFamily: 'Exo 2, sans-serif'}}>Up to 82% radiation dose reduction with SmartDose technology ensuring patient safety</p>
                <div className="w-full h-1 bg-gradient-to-r from-purple-400 to-violet-400 rounded-full mt-6 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
              </div>
              <div className="absolute top-4 right-4 w-3 h-3 bg-purple-400 rounded-full animate-ping"></div>
            </div>

            {/* Same Day Results */}
            <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-green-200/50 hover:scale-110 hover:-translate-y-6 transition-all duration-700 hover:shadow-2xl hover:shadow-green-500/30 overflow-hidden animation-delay-8000">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-green-600 transition-colors duration-300" style={{fontFamily: 'Orbitron, monospace'}}>Same Day Results</h3>
                <p className="text-slate-600 leading-relaxed group-hover:text-slate-800 transition-colors duration-300" style={{fontFamily: 'Exo 2, sans-serif'}}>All OPD & IPD cases done same day with reports within 24 hours for immediate care</p>
                <div className="w-full h-1 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full mt-6 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
              </div>
              <div className="absolute top-4 right-4 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
            </div>

            {/* Expert Radiologists */}
            <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-indigo-200/50 hover:scale-110 hover:-translate-y-6 transition-all duration-700 hover:shadow-2xl hover:shadow-indigo-500/30 overflow-hidden animation-delay-10000">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors duration-300" style={{fontFamily: 'Orbitron, monospace'}}>Expert Radiologists</h3>
                <p className="text-slate-600 leading-relaxed group-hover:text-slate-800 transition-colors duration-300" style={{fontFamily: 'Exo 2, sans-serif'}}>Efficient team of radiologists available for excellent reporting and consultation</p>
                <div className="w-full h-1 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full mt-6 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
              </div>
              <div className="absolute top-4 right-4 w-3 h-3 bg-indigo-400 rounded-full animate-ping"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black text-white mb-6" style={{fontFamily: 'Orbitron, monospace'}}>
            Ready for Advanced Medical Imaging?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto" style={{fontFamily: 'Exo 2, sans-serif'}}>
            Experience the future of medical diagnostics with our Revolution CT 256 Slice technology
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:scale-105 hover:shadow-xl transition-all duration-300 animate-pulse-glow">
            Schedule Your Scan Today
          </button>
        </div>
      </section>
    </div>
  )
}