export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-teal-50 py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-emerald-200/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-200/15 rounded-full animate-float"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-6xl lg:text-7xl font-black text-slate-900 mb-6" style={{fontFamily: 'Orbitron, monospace'}}>
              About <span className="text-transparent bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text">Varaha</span>
            </h1>
            <p className="text-2xl text-slate-600 max-w-3xl mx-auto" style={{fontFamily: 'Exo 2, sans-serif'}}>
              Pioneering advanced medical imaging technology for better healthcare
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-black text-slate-900 mb-8" style={{fontFamily: 'Orbitron, monospace'}}>
                Our <span className="text-transparent bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text">Mission</span>
              </h2>
              <p className="text-xl text-slate-700 leading-relaxed mb-6" style={{fontFamily: 'Exo 2, sans-serif'}}>
                Varaha SDC brings advanced technology (256 slice) machine to the city for the first time. 
                We focus on bringing quality diagnosis by providing best quality services.
              </p>
              <p className="text-xl text-slate-700 leading-relaxed" style={{fontFamily: 'Exo 2, sans-serif'}}>
                Our CT machine i.e GE Revolution CT 256 slice dual energy provides high quality scans 
                with low dose radiations compared to other machines.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-black text-emerald-600 mb-2 animate-pulse-glow">256</div>
                    <div className="text-sm text-slate-600">Slice Technology</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-black text-blue-600 mb-2 animate-pulse-glow">82%</div>
                    <div className="text-sm text-slate-600">Less Radiation</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-black text-teal-600 mb-2 animate-pulse-glow">24/7</div>
                    <div className="text-sm text-slate-600">Emergency Care</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-black text-purple-600 mb-2 animate-pulse-glow">2</div>
                    <div className="text-sm text-slate-600">Heart Beats</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-teal-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-emerald-500/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500/10 rounded-full animate-bounce"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-white mb-6" style={{fontFamily: 'Orbitron, monospace'}}>
              Advanced <span className="text-transparent bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text">Technology</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto" style={{fontFamily: 'Exo 2, sans-serif'}}>
              GE Revolution CT 256 slice dual energy provides superior diagnostic capabilities
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-emerald-400/30 hover:scale-105 transition-all duration-500">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-black text-white mb-4" style={{fontFamily: 'Orbitron, monospace'}}>High Quality Scans</h3>
              <p className="text-slate-300" style={{fontFamily: 'Exo 2, sans-serif'}}>Superior image quality with 256 slice technology for precise diagnostics</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-blue-400/30 hover:scale-105 transition-all duration-500">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-2xl font-black text-white mb-4" style={{fontFamily: 'Orbitron, monospace'}}>Low Radiation</h3>
              <p className="text-slate-300" style={{fontFamily: 'Exo 2, sans-serif'}}>Up to 82% dose reduction ensuring patient safety without compromising quality</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-purple-400/30 hover:scale-105 transition-all duration-500">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-violet-500 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-2xl font-black text-white mb-4" style={{fontFamily: 'Orbitron, monospace'}}>Fast Scanning</h3>
              <p className="text-slate-300" style={{fontFamily: 'Exo 2, sans-serif'}}>Complete scans within 2 heartbeats for cardiac imaging excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-slate-900 mb-6" style={{fontFamily: 'Orbitron, monospace'}}>
              Our <span className="text-transparent bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text">Values</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/80 p-8 rounded-3xl shadow-xl hover:scale-105 transition-all duration-500">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-4" style={{fontFamily: 'Orbitron, monospace'}}>Quality</h3>
                <p className="text-slate-600" style={{fontFamily: 'Exo 2, sans-serif'}}>Uncompromised quality in every scan and service we provide</p>
              </div>
            </div>
            
            <div className="bg-white/80 p-8 rounded-3xl shadow-xl hover:scale-105 transition-all duration-500">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-4" style={{fontFamily: 'Orbitron, monospace'}}>Innovation</h3>
                <p className="text-slate-600" style={{fontFamily: 'Exo 2, sans-serif'}}>Leading with cutting-edge technology and advanced solutions</p>
              </div>
            </div>
            
            <div className="bg-white/80 p-8 rounded-3xl shadow-xl hover:scale-105 transition-all duration-500">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-4" style={{fontFamily: 'Orbitron, monospace'}}>Care</h3>
                <p className="text-slate-600" style={{fontFamily: 'Exo 2, sans-serif'}}>Patient-centered approach with compassionate healthcare</p>
              </div>
            </div>
            
            <div className="bg-white/80 p-8 rounded-3xl shadow-xl hover:scale-105 transition-all duration-500">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-violet-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-4" style={{fontFamily: 'Orbitron, monospace'}}>Trust</h3>
                <p className="text-slate-600" style={{fontFamily: 'Exo 2, sans-serif'}}>Building lasting relationships through reliable healthcare services</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black text-white mb-6" style={{fontFamily: 'Orbitron, monospace'}}>
            Experience Advanced Medical Imaging
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto" style={{fontFamily: 'Exo 2, sans-serif'}}>
            Join thousands of patients who trust Varaha SDC for accurate, safe, and fast diagnostic services
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:scale-105 hover:shadow-xl transition-all duration-300">
            Schedule Your Scan Today
          </button>
        </div>
      </section>
    </div>
  )
}