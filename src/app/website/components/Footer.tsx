import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="/Varaha logo@4x 2.png" 
                alt="Varaha SDC Logo" 
                className="w-12 h-12 object-contain"
              />
              <div>
                <h3 className="text-2xl font-black text-white">Varaha SDC</h3>
                <p className="text-blue-300 font-semibold">Advanced Diagnostic Center</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Leading diagnostic imaging center providing state-of-the-art MRI, CT, X-Ray, and Ultrasound services with expert radiologist interpretation and compassionate patient care.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold">Address</p>
                  <p className="text-gray-300 text-sm">Unit-1: Plot No. 06, Ram Nagar, Sangriya, Jodhpur</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-600/20 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold">Contact</p>
                  <Link href="tel:+917014265848" className="text-green-400 hover:text-green-300 transition-colors font-medium">
                    +91 7014265848
                  </Link>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-teal-600/20 rounded-lg flex items-center justify-center">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                </div>
                <div>
                  <p className="text-white font-semibold">Emergency Care</p>
                  <p className="text-gray-300 text-sm">Available 24/7</p>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-blue-400 to-teal-400 rounded-full"></div>
              Our Services
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/website/services" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center gap-2 group">
                  <div className="w-2 h-2 bg-blue-400 rounded-full group-hover:scale-125 transition-transform"></div>
                  MRI Imaging
                </Link>
              </li>
              <li>
                <Link href="/website/services" className="text-gray-300 hover:text-teal-400 transition-colors flex items-center gap-2 group">
                  <div className="w-2 h-2 bg-teal-400 rounded-full group-hover:scale-125 transition-transform"></div>
                  CT Scans
                </Link>
              </li>
              <li>
                <Link href="/website/services" className="text-gray-300 hover:text-green-400 transition-colors flex items-center gap-2 group">
                  <div className="w-2 h-2 bg-green-400 rounded-full group-hover:scale-125 transition-transform"></div>
                  Digital X-Ray
                </Link>
              </li>
              <li>
                <Link href="/website/services" className="text-gray-300 hover:text-purple-400 transition-colors flex items-center gap-2 group">
                  <div className="w-2 h-2 bg-purple-400 rounded-full group-hover:scale-125 transition-transform"></div>
                  Ultrasound
                </Link>
              </li>
              <li>
                <Link href="/website/appointment" className="text-gray-300 hover:text-yellow-400 transition-colors flex items-center gap-2 group">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full group-hover:scale-125 transition-transform"></div>
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-teal-400 to-green-400 rounded-full"></div>
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/website/about" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center gap-2 group">
                  <div className="w-2 h-2 bg-blue-400 rounded-full group-hover:scale-125 transition-transform"></div>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/website/facilities" className="text-gray-300 hover:text-teal-400 transition-colors flex items-center gap-2 group">
                  <div className="w-2 h-2 bg-teal-400 rounded-full group-hover:scale-125 transition-transform"></div>
                  Our Facilities
                </Link>
              </li>
              <li>
                <Link href="/website/contact" className="text-gray-300 hover:text-green-400 transition-colors flex items-center gap-2 group">
                  <div className="w-2 h-2 bg-green-400 rounded-full group-hover:scale-125 transition-transform"></div>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/website/privacy" className="text-gray-300 hover:text-purple-400 transition-colors flex items-center gap-2 group">
                  <div className="w-2 h-2 bg-purple-400 rounded-full group-hover:scale-125 transition-transform"></div>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/website/terms" className="text-gray-300 hover:text-yellow-400 transition-colors flex items-center gap-2 group">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full group-hover:scale-125 transition-transform"></div>
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm">
              <p className="text-gray-300">
                © {currentYear} Varaha SDC. All rights reserved.
              </p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-gray-300">Healthcare Excellence</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span className="text-gray-300">Certified Care</span>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-gray-300 text-sm">Powered by</span>
              <a 
                href="https://www.techrover.co.in/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex items-center gap-2 px-3 py-1 rounded-lg bg-gradient-to-r from-blue-500/10 to-teal-500/10 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300"
              >
                <div className="w-5 h-5 bg-gradient-to-br from-blue-400 to-teal-400 rounded flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                  </svg>
                </div>
                <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent font-bold text-sm group-hover:from-blue-300 group-hover:to-teal-300 transition-all">
                  Tech Rover
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}