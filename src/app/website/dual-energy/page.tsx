export default function DualEnergyPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-teal-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-emerald-500/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/10 rounded-full animate-bounce animation-delay-4000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-6xl lg:text-8xl font-black text-white mb-6" style={{fontFamily: 'Orbitron, monospace'}}>
              GSI <span className="text-transparent bg-gradient-to-r from-emerald-400 via-teal-400 to-blue-400 bg-clip-text animate-gradient">(Dual Energy)</span>
            </h1>
            <p className="text-2xl text-slate-300 font-light max-w-4xl mx-auto" style={{fontFamily: 'Exo 2, sans-serif'}}>
              Revolutionary dual energy CT technology for enhanced diagnostic capabilities and superior image quality
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 mx-auto mt-8 rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-black text-slate-900 text-center mb-16" style={{fontFamily: 'Orbitron, monospace'}}>
            DUAL ENERGY <span className="text-transparent bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text">APPLICATIONS</span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Cardiac Cases */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-red-200/50 hover:scale-105 transition-all duration-500">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-pink-500 rounded-2xl flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="text-3xl font-black text-slate-900" style={{fontFamily: 'Orbitron, monospace'}}>CARDIAC CASES</h3>
              </div>
              <ul className="space-y-4 text-slate-700" style={{fontFamily: 'Exo 2, sans-serif'}}>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span>Covers whole heart in one rotation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span>Takes 1000 images in one rotation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span>One beat motion free coronary images at any heart rate</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span>Entire examination performed in one beat</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span>Images entire aorta in less than 7 seconds</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span>Vascular plaque characterization using dual energy method</span>
                </li>
              </ul>
            </div>

            {/* Monoenergetic Imaging */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-blue-200/50 hover:scale-105 transition-all duration-500">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h3 className="text-3xl font-black text-slate-900" style={{fontFamily: 'Orbitron, monospace'}}>MONOENERGETIC IMAGING</h3>
              </div>
              <ul className="space-y-4 text-slate-700" style={{fontFamily: 'Exo 2, sans-serif'}}>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span>Beam hardening artifact elimination</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span>Contrast augmentation and tissue visualization</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span>Helpful for implant patients</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Additional Applications Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {/* Virtual NCCT */}
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-emerald-200/50 hover:scale-105 transition-all duration-500">
              <h4 className="text-xl font-bold text-emerald-600 mb-4" style={{fontFamily: 'Orbitron, monospace'}}>VIRTUAL NCCT</h4>
              <p className="text-slate-700" style={{fontFamily: 'Exo 2, sans-serif'}}>Virtual non-contrast CT scan using dual energy method for brain and body imaging</p>
            </div>

            {/* Contrast Scan */}
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-teal-200/50 hover:scale-105 transition-all duration-500">
              <h4 className="text-xl font-bold text-teal-600 mb-4" style={{fontFamily: 'Orbitron, monospace'}}>CONTRAST SCAN</h4>
              <p className="text-slate-700" style={{fontFamily: 'Exo 2, sans-serif'}}>Both plain and contrast scan can be generated from single scan</p>
            </div>

            {/* Advance Lung Analysis */}
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-purple-200/50 hover:scale-105 transition-all duration-500">
              <h4 className="text-xl font-bold text-purple-600 mb-4" style={{fontFamily: 'Orbitron, monospace'}}>ADVANCE LUNG ANALYSIS</h4>
              <p className="text-slate-700" style={{fontFamily: 'Exo 2, sans-serif'}}>Segmentation of lungs, volume evaluation, density calculation, and emphysema index measurement</p>
            </div>

            {/* Gout Imaging */}
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-orange-200/50 hover:scale-105 transition-all duration-500">
              <h4 className="text-xl font-bold text-orange-600 mb-4" style={{fontFamily: 'Orbitron, monospace'}}>GOUT IMAGING</h4>
              <p className="text-slate-700" style={{fontFamily: 'Exo 2, sans-serif'}}>Color-coded visualization of deposited uric acid crystals in peripheral extremities</p>
            </div>

            {/* Calculi Characterization */}
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-yellow-200/50 hover:scale-105 transition-all duration-500">
              <h4 className="text-xl font-bold text-yellow-600 mb-4" style={{fontFamily: 'Orbitron, monospace'}}>CALCULI CHARACTERIZATION</h4>
              <p className="text-slate-700" style={{fontFamily: 'Exo 2, sans-serif'}}>Visualization of chemical composition of kidney stones for better diagnosis</p>
            </div>

            {/* Marrow Imaging */}
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-pink-200/50 hover:scale-105 transition-all duration-500">
              <h4 className="text-xl font-bold text-pink-600 mb-4" style={{fontFamily: 'Orbitron, monospace'}}>MARROW IMAGING</h4>
              <p className="text-slate-700" style={{fontFamily: 'Exo 2, sans-serif'}}>Dual energy marrow imaging by calcium subtraction for bone pathologies</p>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Advantages */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-teal-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-black text-white text-center mb-16" style={{fontFamily: 'Orbitron, monospace'}}>
            Patient <span className="text-transparent bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text">Advantages</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-emerald-400/30 hover:scale-105 transition-all duration-500">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4" style={{fontFamily: 'Orbitron, monospace'}}>Better Quality</h3>
              <p className="text-slate-300" style={{fontFamily: 'Exo 2, sans-serif'}}>Less time on table with better scan quality and 1000 images per rotation</p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-blue-400/30 hover:scale-105 transition-all duration-500">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4" style={{fontFamily: 'Orbitron, monospace'}}>Low Radiation</h3>
              <p className="text-slate-300" style={{fontFamily: 'Exo 2, sans-serif'}}>Significantly reduced radiation dose with advanced technology</p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-purple-400/30 hover:scale-105 transition-all duration-500">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-violet-500 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4" style={{fontFamily: 'Orbitron, monospace'}}>Advanced Scans</h3>
              <p className="text-slate-300" style={{fontFamily: 'Exo 2, sans-serif'}}>Virtual Bronchoscopy, Perfusion scans, Dental scans, and All body angiography available</p>
            </div>
          </div>

          {/* Additional Benefits */}
          <div className="mt-16 bg-white/10 backdrop-blur-lg p-10 rounded-3xl border border-white/20">
            <h3 className="text-3xl font-bold text-white mb-8 text-center" style={{fontFamily: 'Orbitron, monospace'}}>Complete Benefits Package</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <ul className="space-y-4 text-slate-300" style={{fontFamily: 'Exo 2, sans-serif'}}>
                <li className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
                  <span>Better scans with less contrast</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-teal-400 rounded-full"></div>
                  <span>Advanced technology at government rates</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <span>Perfusion scans for brain and lung</span>
                </li>
              </ul>
              <ul className="space-y-4 text-slate-300" style={{fontFamily: 'Exo 2, sans-serif'}}>
                <li className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                  <span>Dental scan for dental patients</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-pink-400 rounded-full"></div>
                  <span>Virtual Bronchoscopy available</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <span>All body angiography services</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black text-white mb-6" style={{fontFamily: 'Orbitron, monospace'}}>
            Experience Dual Energy CT Technology
          </h2>
          <p className="text-xl text-emerald-100 mb-8" style={{fontFamily: 'Exo 2, sans-serif'}}>
            Advanced diagnostic capabilities with superior image quality and patient safety
          </p>
          <button className="bg-white text-emerald-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-emerald-50 transition-colors shadow-xl">
            Schedule Your Scan
          </button>
        </div>
      </section>
    </div>
  )
}