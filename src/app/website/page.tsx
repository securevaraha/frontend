import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 py-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Side - Content with Animations */}
            <div className="relative z-10">
              {/* Animated Background Elements */}
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-200/30 rounded-full animate-pulse"></div>
              <div className="absolute top-20 -right-5 w-20 h-20 bg-teal-200/40 rounded-full animate-bounce animation-delay-2000"></div>
              <div className="absolute -bottom-5 left-10 w-16 h-16 bg-sky-200/50 rounded-full animate-float animation-delay-4000"></div>
              
              <div className="relative">
                <h1 className="mb-8 leading-tight">
                  <div className="text-6xl lg:text-8xl font-black mb-4" style={{fontFamily: 'Orbitron, monospace'}}>
                    <span className="bg-gradient-to-r from-emerald-500 via-teal-400 to-blue-500 bg-clip-text text-transparent">
                      Revolution
                    </span>
                    <span className="text-slate-900 font-black">CT</span>
                  </div>
                  <div className="text-7xl lg:text-9xl font-black text-slate-900 mb-4" style={{fontFamily: 'Exo 2, sans-serif'}}>
                    <span className="text-emerald-600">256</span> <span className="text-teal-600 italic">Slice</span>
                  </div>
                  <div className="text-2xl lg:text-3xl font-bold text-blue-700 tracking-[0.3em]" style={{fontFamily: 'Orbitron, monospace'}}>
                    M E D I C A L &nbsp;&nbsp;&nbsp;&nbsp; S C A N N E R
                  </div>
                </h1>
                
                <div className="mb-8">
                  <p className="text-lg lg:text-xl text-slate-700 leading-relaxed">
                    Revolutionary <span className="font-semibold text-emerald-600">technology</span> that puts <span className="font-semibold text-teal-600">uncompromised coverage</span>, <span className="font-semibold text-blue-600">spatial resolution</span>, <span className="font-semibold text-cyan-600">temporal resolution</span> and <span className="font-semibold text-emerald-700">dose performance</span> all in one advanced CT scanner.
                  </p>
                </div>
                
                {/* Animated Stats */}
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div className="bg-gradient-to-br from-emerald-50 to-teal-50 backdrop-blur-sm p-6 rounded-2xl border-2 border-emerald-200/50 hover:scale-105 transition-all duration-300 hover:shadow-xl">
                    <div className="text-5xl font-black text-transparent bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text animate-pulse-glow mb-2">256</div>
                    <div className="text-sm text-slate-700 font-bold uppercase tracking-wider">Slice Technology</div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 backdrop-blur-sm p-6 rounded-2xl border-2 border-blue-200/50 hover:scale-105 transition-all duration-300 hover:shadow-xl">
                    <div className="text-5xl font-black text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text animate-pulse-glow mb-2">82%</div>
                    <div className="text-sm text-slate-700 font-bold uppercase tracking-wider">Less Radiation</div>
                  </div>
                </div>
                
                {/* CTA Buttons */}
                <div className="flex space-x-4">
                  <button className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 hover:shadow-xl transition-all duration-300 animate-pulse-glow">
                    Book Scan Now
                  </button>
                  <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            </div>

            {/* Right Side - Images */}
            <div className="relative">
              <div className="relative z-10">
                {/* Main Image */}
                <div className="relative">
                  <img 
                    src="/home01-06.png" 
                    alt="CT Scanner Technology" 
                    className="w-full h-auto rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl"></div>
                  
                  {/* Secondary Image - Overlapped */}
                  <div className="absolute bottom-4 right-4 w-1/3">
                    <img 
                      src="/home01-05.png" 
                      alt="Medical Equipment" 
                      className="w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-500 border-2 border-white"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-teal-900/20 to-transparent rounded-lg"></div>
                  </div>
                  
                  {/* New Images */}
                  <div className="absolute -top-2 right-0 w-1/4">
                    <img 
                      src="/home01-07 (1).png" 
                      alt="Medical Technology" 
                      className="w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="absolute bottom-4 left-4 w-1/5 animate-heartbeat">
                    <img 
                      src="/home01-08 (1).png" 
                      alt="Advanced Equipment" 
                      className="w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Animated Heart */}
                  <div className="absolute bottom-4 left-4 z-20">
                    <div className="animate-heartbeat">
                      <svg className="w-12 h-12 text-red-500 drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute top-10 right-10 w-16 h-16 bg-blue-500/20 rounded-full animate-float"></div>
              <div className="absolute bottom-20 -left-5 w-12 h-12 bg-teal-500/30 rounded-full animate-bounce animation-delay-4000"></div>
            </div>
          </div>
        </div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-teal-600 rounded-full filter blur-3xl"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-200/15 rounded-full animate-bounce animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-200/10 rounded-full animate-float"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4" style={{fontFamily: 'Orbitron, monospace'}}>
              Advanced <span className="text-transparent bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text">Medical</span> Technology
            </h2>
            <p className="text-xl text-slate-600" style={{fontFamily: 'Exo 2, sans-serif'}}>Precision diagnostics with revolutionary CT scanning capabilities</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* 256 Slice CT Scanner */}
            <div className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-emerald-200/50 hover:scale-110 hover:-translate-y-4 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/25">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="text-6xl lg:text-7xl font-black text-transparent bg-gradient-to-br from-emerald-500 to-teal-600 bg-clip-text mb-4 animate-pulse-glow" style={{fontFamily: 'Exo 2, sans-serif'}}>
                  256
                </div>
                <div className="text-lg font-bold text-slate-800 mb-2" style={{fontFamily: 'Orbitron, monospace'}}>Slice CT Scanner</div>
                <div className="w-full h-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
              </div>
              <div className="absolute top-4 right-4 w-3 h-3 bg-emerald-400 rounded-full animate-ping"></div>
            </div>

            {/* 24/7 Emergency Care */}
            <div className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-red-200/50 hover:scale-110 hover:-translate-y-4 transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/25 animation-delay-2000">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-pink-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="text-6xl lg:text-7xl font-black text-transparent bg-gradient-to-br from-red-500 to-pink-600 bg-clip-text mb-4 animate-pulse-glow" style={{fontFamily: 'Exo 2, sans-serif'}}>
                  24/7
                </div>
                <div className="text-lg font-bold text-slate-800 mb-2" style={{fontFamily: 'Orbitron, monospace'}}>Emergency Care</div>
                <div className="w-full h-1 bg-gradient-to-r from-red-400 to-pink-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
              </div>
              <div className="absolute top-4 right-4 w-3 h-3 bg-red-400 rounded-full animate-ping"></div>
            </div>

            {/* 82% Radiation Reduction */}
            <div className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-blue-200/50 hover:scale-110 hover:-translate-y-4 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/25 animation-delay-4000">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="text-6xl lg:text-7xl font-black text-transparent bg-gradient-to-br from-blue-500 to-cyan-600 bg-clip-text mb-4 animate-pulse-glow" style={{fontFamily: 'Exo 2, sans-serif'}}>
                  82%
                </div>
                <div className="text-lg font-bold text-slate-800 mb-2" style={{fontFamily: 'Orbitron, monospace'}}>Radiation Reduction</div>
                <div className="w-full h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
              </div>
              <div className="absolute top-4 right-4 w-3 h-3 bg-blue-400 rounded-full animate-ping"></div>
            </div>

            {/* 2 Heart Beats Scan Time */}
            <div className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-purple-200/50 hover:scale-110 hover:-translate-y-4 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/25 animation-delay-6000">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-violet-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="text-6xl lg:text-7xl font-black text-transparent bg-gradient-to-br from-purple-500 to-violet-600 bg-clip-text mb-4 animate-pulse-glow" style={{fontFamily: 'Exo 2, sans-serif'}}>
                  2
                </div>
                <div className="text-lg font-bold text-slate-800 mb-2" style={{fontFamily: 'Orbitron, monospace'}}>Heart Beats Scan Time</div>
                <div className="w-full h-1 bg-gradient-to-r from-purple-400 to-violet-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
              </div>
              <div className="absolute top-4 right-4 w-3 h-3 bg-purple-400 rounded-full animate-ping"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/30 to-teal-50/30">
          <div className="absolute top-10 right-20 w-64 h-64 bg-emerald-200/20 rounded-full animate-float"></div>
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-blue-200/15 rounded-full animate-bounce animation-delay-4000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="group">
              <h2 className="text-5xl lg:text-6xl font-black text-slate-900 mb-8 leading-tight" style={{fontFamily: 'Orbitron, monospace'}}>
                Advanced <span className="text-transparent bg-gradient-to-r from-emerald-500 via-teal-500 to-blue-500 bg-clip-text animate-gradient">Medical Imaging</span> Technology
              </h2>
              
              <div className="space-y-6 mb-10">
                <p className="text-xl text-slate-700 leading-relaxed group-hover:text-slate-800 transition-colors duration-300" style={{fontFamily: 'Exo 2, sans-serif'}}>
                  In the time it takes for your heart to beat once, GE Healthcare's Revolution CT scanner 
                  can capture a <span className="font-bold text-emerald-600">detailed picture</span> of your body. The x-ray tube moves at incredible speed, 
                  capturing <span className="font-bold text-teal-600">thousands of slices</span> per second.
                </p>
                <p className="text-xl text-slate-700 leading-relaxed group-hover:text-slate-800 transition-colors duration-300" style={{fontFamily: 'Exo 2, sans-serif'}}>
                  We focus on bringing <span className="font-bold text-blue-600">quality diagnosis services</span> by providing accurate and timely test 
                  results to our valued customers. With a commitment to excellence, Varaha is your 
                  <span className="font-bold text-emerald-700">trusted partner</span> in promoting good health and overall well-being.
                </p>
              </div>
              
              {/* Animated Feature Cards */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="group/card bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-emerald-200/50 hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/20 transition-all duration-500">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-xl flex items-center justify-center group-hover/card:rotate-12 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-2" style={{fontFamily: 'Orbitron, monospace'}}>Same Day Results</h4>
                      <p className="text-slate-600 text-sm" style={{fontFamily: 'Exo 2, sans-serif'}}>No waiting, immediate care with 24-hour reporting</p>
                    </div>
                  </div>
                </div>
                
                <div className="group/card bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-blue-200/50 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-500 animation-delay-2000">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center group-hover/card:rotate-12 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-2" style={{fontFamily: 'Orbitron, monospace'}}>Low Radiation</h4>
                      <p className="text-slate-600 text-sm" style={{fontFamily: 'Exo 2, sans-serif'}}>Up to 82% dose reduction with SmartDose technology</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Technical Specs */}
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-10 shadow-2xl border border-slate-200/50 hover:scale-105 transition-all duration-700 group">
                <div className="absolute top-6 right-6 w-4 h-4 bg-emerald-400 rounded-full animate-ping"></div>
                
                <h3 className="text-3xl font-black text-slate-900 mb-8" style={{fontFamily: 'Orbitron, monospace'}}>
                  Technical <span className="text-transparent bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text">Specifications</span>
                </h3>
                
                <div className="space-y-6">
                  <div className="group/spec flex justify-between items-center p-4 bg-white/60 rounded-xl hover:bg-white/80 transition-all duration-300">
                    <span className="text-slate-600 font-medium" style={{fontFamily: 'Exo 2, sans-serif'}}>Slice Capability</span>
                    <span className="font-black text-emerald-600 text-xl group-hover/spec:scale-110 transition-transform duration-300" style={{fontFamily: 'Orbitron, monospace'}}>256 Slice CT</span>
                  </div>
                  
                  <div className="group/spec flex justify-between items-center p-4 bg-white/60 rounded-xl hover:bg-white/80 transition-all duration-300">
                    <span className="text-slate-600 font-medium" style={{fontFamily: 'Exo 2, sans-serif'}}>Dual Energy</span>
                    <span className="font-black text-teal-600 text-xl group-hover/spec:scale-110 transition-transform duration-300" style={{fontFamily: 'Orbitron, monospace'}}>Simultaneous</span>
                  </div>
                  
                  <div className="group/spec flex justify-between items-center p-4 bg-white/60 rounded-xl hover:bg-white/80 transition-all duration-300">
                    <span className="text-slate-600 font-medium" style={{fontFamily: 'Exo 2, sans-serif'}}>Detector Technology</span>
                    <span className="font-black text-blue-600 text-xl group-hover/spec:scale-110 transition-transform duration-300" style={{fontFamily: 'Orbitron, monospace'}}>Gemstone</span>
                  </div>
                  
                  <div className="group/spec flex justify-between items-center p-4 bg-white/60 rounded-xl hover:bg-white/80 transition-all duration-300">
                    <span className="text-slate-600 font-medium" style={{fontFamily: 'Exo 2, sans-serif'}}>Scanning Mode</span>
                    <span className="font-black text-purple-600 text-xl group-hover/spec:scale-110 transition-transform duration-300" style={{fontFamily: 'Orbitron, monospace'}}>Axial & Spiral</span>
                  </div>
                </div>
                
                {/* Animated Progress Indicators */}
                <div className="mt-8 space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600" style={{fontFamily: 'Exo 2, sans-serif'}}>Image Quality</span>
                    <span className="text-emerald-600 font-bold">98%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-emerald-400 to-teal-500 h-2 rounded-full w-[98%] animate-pulse"></div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600" style={{fontFamily: 'Exo 2, sans-serif'}}>Speed Performance</span>
                    <span className="text-blue-600 font-bold">95%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-400 to-cyan-500 h-2 rounded-full w-[95%] animate-pulse animation-delay-2000"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-teal-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-emerald-500/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500/10 rounded-full animate-bounce animation-delay-4000"></div>
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-teal-500/10 rounded-full animate-float animation-delay-2000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-7xl font-black text-white mb-6" style={{fontFamily: 'Orbitron, monospace'}}>
              Our <span className="text-transparent bg-gradient-to-r from-emerald-400 via-teal-400 to-blue-400 bg-clip-text animate-gradient">Services</span>
            </h2>
            <p className="text-2xl text-slate-300 font-light" style={{fontFamily: 'Exo 2, sans-serif'}}>Comprehensive medical imaging solutions</p>
            <div className="w-32 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 mx-auto mt-6 rounded-full animate-pulse"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Emergency Care */}
            <div className="group relative bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-red-400/30 hover:scale-110 hover:-translate-y-6 transition-all duration-700 hover:shadow-2xl hover:shadow-red-500/30">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-pink-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-white mb-4 group-hover:text-red-300 transition-colors duration-300" style={{fontFamily: 'Orbitron, monospace'}}>Emergency Care</h3>
                <p className="text-slate-300 leading-relaxed group-hover:text-white transition-colors duration-300" style={{fontFamily: 'Exo 2, sans-serif'}}>24/7 immediate medical care for emergency patients with priority scanning and same-day reporting</p>
                <div className="w-full h-1 bg-gradient-to-r from-red-400 to-pink-400 rounded-full mt-6 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
              </div>
              <div className="absolute top-4 right-4 w-3 h-3 bg-red-400 rounded-full animate-ping"></div>
            </div>

            {/* Cardiac Imaging */}
            <div className="group relative bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-blue-400/30 hover:scale-110 hover:-translate-y-6 transition-all duration-700 hover:shadow-2xl hover:shadow-blue-500/30 animation-delay-2000">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-white mb-4 group-hover:text-blue-300 transition-colors duration-300" style={{fontFamily: 'Orbitron, monospace'}}>Cardiac Imaging</h3>
                <p className="text-slate-300 leading-relaxed group-hover:text-white transition-colors duration-300" style={{fontFamily: 'Exo 2, sans-serif'}}>Advanced heart imaging within 2 heartbeats with 3D visualization and comprehensive cardiac analysis</p>
                <div className="w-full h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mt-6 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
              </div>
              <div className="absolute top-4 right-4 w-3 h-3 bg-blue-400 rounded-full animate-ping"></div>
            </div>

            {/* Dual Energy CT */}
            <div className="group relative bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-emerald-400/30 hover:scale-110 hover:-translate-y-6 transition-all duration-700 hover:shadow-2xl hover:shadow-emerald-500/30 animation-delay-4000">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-white mb-4 group-hover:text-emerald-300 transition-colors duration-300" style={{fontFamily: 'Orbitron, monospace'}}>Dual Energy CT</h3>
                <p className="text-slate-300 leading-relaxed group-hover:text-white transition-colors duration-300" style={{fontFamily: 'Exo 2, sans-serif'}}>Superior image quality with simultaneous dual energy capability for enhanced diagnostic accuracy</p>
                <div className="w-full h-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full mt-6 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
              </div>
              <div className="absolute top-4 right-4 w-3 h-3 bg-emerald-400 rounded-full animate-ping"></div>
            </div>

            {/* Low Radiation Scanning */}
            <div className="group relative bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-purple-400/30 hover:scale-110 hover:-translate-y-6 transition-all duration-700 hover:shadow-2xl hover:shadow-purple-500/30 animation-delay-6000">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-violet-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-violet-500 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-white mb-4 group-hover:text-purple-300 transition-colors duration-300" style={{fontFamily: 'Orbitron, monospace'}}>Low Radiation</h3>
                <p className="text-slate-300 leading-relaxed group-hover:text-white transition-colors duration-300" style={{fontFamily: 'Exo 2, sans-serif'}}>Up to 82% radiation dose reduction with SmartDose technology ensuring patient safety</p>
                <div className="w-full h-1 bg-gradient-to-r from-purple-400 to-violet-400 rounded-full mt-6 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
              </div>
              <div className="absolute top-4 right-4 w-3 h-3 bg-purple-400 rounded-full animate-ping"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready for Advanced Medical Imaging?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Experience the future of medical diagnostics with our Revolution CT 256 Slice technology
          </p>
          <Link href="/website/contact" className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-colors">
            Schedule Your Scan Today
          </Link>
        </div>
      </section>
    </div>
  )
}