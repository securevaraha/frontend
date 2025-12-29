export default function FacilitiesPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-sky-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-sky-500/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/10 rounded-full animate-bounce animation-delay-4000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-6xl lg:text-8xl font-black text-white mb-6" style={{fontFamily: 'Orbitron, monospace'}}>
              Our <span className="text-transparent bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text animate-gradient">Facilities</span>
            </h1>
            <p className="text-2xl text-slate-300 font-light max-w-4xl mx-auto" style={{fontFamily: 'Exo 2, sans-serif'}}>
              State-of-the-art medical imaging technology and world-class healthcare facilities
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-sky-400 to-blue-400 mx-auto mt-8 rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Revolution CT Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-slate-900 mb-6" style={{fontFamily: 'Orbitron, monospace'}}>
              Revolution CT <span className="text-transparent bg-gradient-to-r from-sky-500 to-blue-500 bg-clip-text">256 Slice Machine</span>
            </h2>
            <p className="text-xl text-slate-600" style={{fontFamily: 'Exo 2, sans-serif'}}>Advanced diagnostic capabilities with revolutionary technology</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Key Features */}
            <div>
              <h3 className="text-3xl font-bold text-slate-900 mb-8" style={{fontFamily: 'Orbitron, monospace'}}>Key Features</h3>
              <div className="space-y-4">
                {[
                  'Volume GSI & High Definition',
                  '3D Dose Modulation', 
                  'Smart Prep with Dynamic Transition',
                  'Dynamic Perfusion',
                  'Reduce Metal Artifacts',
                  'Overlapped Reconstruction',
                  'Organ Dose Modulation',
                  'Digital Tilt',
                  'Fast Scout',
                  'Enhanced Lesion Detectability'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-sky-50 rounded-xl border border-sky-200 hover:scale-105 transition-all duration-300">
                    <div className="w-3 h-3 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full animate-pulse"></div>
                    <span className="text-slate-700 font-medium" style={{fontFamily: 'Exo 2, sans-serif'}}>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Specifications */}
            <div className="bg-white p-10 rounded-3xl shadow-2xl border border-sky-200 hover:scale-105 transition-all duration-700">
              <h3 className="text-3xl font-black text-slate-900 mb-8" style={{fontFamily: 'Orbitron, monospace'}}>
                Technical <span className="text-transparent bg-gradient-to-r from-sky-500 to-blue-500 bg-clip-text">Specifications</span>
              </h3>
              
              <div className="space-y-6">
                <div className="flex justify-between items-center p-4 bg-sky-50 rounded-xl">
                  <span className="text-slate-600 font-medium" style={{fontFamily: 'Exo 2, sans-serif'}}>Slice Capability</span>
                  <span className="font-black text-sky-600 text-xl" style={{fontFamily: 'Orbitron, monospace'}}>256 Slice CT</span>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-blue-50 rounded-xl">
                  <span className="text-slate-600 font-medium" style={{fontFamily: 'Exo 2, sans-serif'}}>Dual Energy</span>
                  <span className="font-black text-blue-600 text-xl" style={{fontFamily: 'Orbitron, monospace'}}>Simultaneous</span>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-sky-50 rounded-xl">
                  <span className="text-slate-600 font-medium" style={{fontFamily: 'Exo 2, sans-serif'}}>Detector Technology</span>
                  <span className="font-black text-sky-600 text-xl" style={{fontFamily: 'Orbitron, monospace'}}>Gemstone</span>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-blue-50 rounded-xl">
                  <span className="text-slate-600 font-medium" style={{fontFamily: 'Exo 2, sans-serif'}}>Scanning Mode</span>
                  <span className="font-black text-blue-600 text-xl" style={{fontFamily: 'Orbitron, monospace'}}>Axial & Spiral</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facility Features */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-sky-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-black text-white text-center mb-16" style={{fontFamily: 'Orbitron, monospace'}}>
            World-Class <span className="text-transparent bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text">Medical Facilities</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-sky-400/30 hover:scale-110 hover:-translate-y-4 transition-all duration-500">
              <div className="w-16 h-16 bg-gradient-to-br from-sky-400 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4" style={{fontFamily: 'Orbitron, monospace'}}>24/7 Availability</h3>
              <p className="text-slate-300" style={{fontFamily: 'Exo 2, sans-serif'}}>Round the clock emergency services with immediate care and priority scanning</p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-blue-400/30 hover:scale-110 hover:-translate-y-4 transition-all duration-500">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-sky-500 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4" style={{fontFamily: 'Orbitron, monospace'}}>Expert Staff</h3>
              <p className="text-slate-300" style={{fontFamily: 'Exo 2, sans-serif'}}>Cooperative team of medical professionals available 24x7 for patient care</p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-sky-400/30 hover:scale-110 hover:-translate-y-4 transition-all duration-500">
              <div className="w-16 h-16 bg-gradient-to-br from-sky-400 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4" style={{fontFamily: 'Orbitron, monospace'}}>Advanced Technology</h3>
              <p className="text-slate-300" style={{fontFamily: 'Exo 2, sans-serif'}}>Latest GE Revolution CT scanner with cutting-edge medical imaging technology</p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-blue-400/30 hover:scale-110 hover:-translate-y-4 transition-all duration-500">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-sky-500 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4" style={{fontFamily: 'Orbitron, monospace'}}>Quality Reports</h3>
              <p className="text-slate-300" style={{fontFamily: 'Exo 2, sans-serif'}}>Efficient radiologist team providing accurate and timely diagnostic reports</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-sky-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black text-white mb-6" style={{fontFamily: 'Orbitron, monospace'}}>
            Experience Our Advanced Facilities
          </h2>
          <p className="text-xl text-sky-100 mb-8" style={{fontFamily: 'Exo 2, sans-serif'}}>
            State-of-the-art medical imaging with world-class patient care
          </p>
          <button className="bg-white text-sky-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-sky-50 transition-colors shadow-xl">
            Schedule Your Visit
          </button>
        </div>
      </section>
    </div>
  )
}