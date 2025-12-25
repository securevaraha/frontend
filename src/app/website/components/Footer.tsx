import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-blue-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Varaha SDC</h3>
                <p className="text-blue-300 text-sm font-medium">Advanced Medical Imaging</p>
              </div>
            </div>
            
            <p className="text-white mb-4 leading-relaxed">
              Trusted healthcare partner providing advanced diagnostic imaging with compassionate care and expert medical professionals.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 bg-blue-800/50 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <span className="text-white">Plot No. 06, Ram Nagar, Sangriya, Jodhpur</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 bg-green-800/50 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </div>
                <Link href="tel:+917014265848" className="text-white hover:text-green-400 transition-colors">+91 7014265848</Link>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 bg-teal-800/50 rounded-lg flex items-center justify-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                </div>
                <span className="text-white">24/7 Emergency Care Available</span>
              </div>
            </div>
          </div>

          {/* Medical Services */}
          <div>
            <h4 className="font-semibold mb-4 text-white flex items-center gap-2">
              <div className="w-1 h-5 bg-gradient-to-b from-blue-400 to-teal-400 rounded-full"></div>
              Medical Services
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/website/services" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>MRI Imaging</Link></li>
              <li><Link href="/website/services" className="text-gray-400 hover:text-teal-400 transition-colors flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-teal-400 rounded-full"></div>CT Scans</Link></li>
              <li><Link href="/website/services" className="text-gray-400 hover:text-green-400 transition-colors flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>Digital X-Ray</Link></li>
              <li><Link href="/website/services" className="text-gray-400 hover:text-purple-400 transition-colors flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>Ultrasound</Link></li>
              <li><Link href="/website/appointment" className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>Book Appointment</Link></li>
            </ul>
          </div>

          {/* Patient Care */}
          <div>
            <h4 className="font-semibold mb-4 text-white flex items-center gap-2">
              <div className="w-1 h-5 bg-gradient-to-b from-teal-400 to-green-400 rounded-full"></div>
              Patient Care
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/website/about" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>About Our Team</Link></li>
              <li><Link href="/website/facilities" className="text-gray-400 hover:text-teal-400 transition-colors flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-teal-400 rounded-full"></div>Our Facilities</Link></li>
              <li><Link href="/website/contact" className="text-gray-400 hover:text-green-400 transition-colors flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>Contact Us</Link></li>
              <li><Link href="/website/privacy" className="text-gray-400 hover:text-purple-400 transition-colors flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700/50 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <p className="text-white text-sm">© {currentYear} Varaha SDC. Dedicated to your health.</p>
              <div className="flex items-center gap-2 text-xs">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white">Healthcare Excellence</span>
              </div>
            </div>
            
            <div className="flex items-center gap-6 text-xs text-white">
              <div className="flex items-center gap-1">
                <svg className="w-3 h-3 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span className="text-white">Certified Care</span>
              </div>
              <span className="text-white">•</span>
              <div className="flex items-center gap-1">
                <svg className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <span className="text-white">Trusted by 50K+ Patients</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}