export default function FacilitiesPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-teal-600 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Facilities</h1>
          <p className="text-blue-100">
            State-of-the-art medical imaging facility designed for patient comfort and diagnostic excellence.
          </p>
        </div>
      </section>

      {/* Advanced Equipment */}
      <section className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced CT & MRI Machines</h2>
            <p className="text-gray-600">
              Our cutting-edge imaging equipment delivers superior image quality while ensuring patient safety.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <h3 className="text-xl font-semibold mb-4">3T MRI Scanner</h3>
              <ul className="text-gray-600 space-y-2 text-left text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></div>
                  <span>High-field strength for superior image quality</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></div>
                  <span>Faster scan times for patient comfort</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></div>
                  <span>Advanced noise reduction technology</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></div>
                  <span>Wide bore design for claustrophobic patients</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></div>
                  <span>Specialized coils for all body parts</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <h3 className="text-xl font-semibold mb-4">64-Slice CT Scanner</h3>
              <ul className="text-gray-600 space-y-2 text-left text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2"></div>
                  <span>Multi-detector row technology</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2"></div>
                  <span>Low-dose radiation protocols</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2"></div>
                  <span>Sub-second scan times</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2"></div>
                  <span>3D and 4D reconstruction capabilities</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2"></div>
                  <span>Cardiac and vascular imaging</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <h3 className="text-xl font-semibold mb-4">Digital X-Ray System</h3>
              <ul className="text-gray-600 space-y-2 text-left text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2"></div>
                  <span>Direct digital radiography</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2"></div>
                  <span>Immediate image availability</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2"></div>
                  <span>Reduced radiation exposure</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2"></div>
                  <span>High-resolution imaging</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2"></div>
                  <span>Portable and fixed systems</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Hygiene Standards */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Hygiene & Safety Standards</h2>
              <p className="text-gray-600 mb-6">
                We maintain the highest standards of cleanliness and safety to protect our patients and staff.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Hospital-Grade Disinfection</h3>
                    <p className="text-gray-600 text-sm">All equipment and surfaces sanitized between patients using medical-grade disinfectants.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Air Filtration Systems</h3>
                    <p className="text-gray-600 text-sm">HEPA filtration and positive pressure systems maintain clean air quality.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Personal Protective Equipment</h3>
                    <p className="text-gray-600 text-sm">Staff equipped with appropriate PPE and follow strict hygiene protocols.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Regular Safety Audits</h3>
                    <p className="text-gray-600 text-sm">Continuous monitoring and improvement of safety and hygiene practices.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-6 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Safety First</h3>
              <p className="text-gray-600 mb-6">
                Our facility exceeds industry standards for cleanliness and safety, ensuring a secure environment for all patients.
              </p>
              <div className="bg-white rounded-lg p-4">
                <div className="text-2xl font-bold text-green-600 mb-2">100%</div>
                <div className="text-sm text-gray-600">Compliance with Safety Standards</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Waiting Areas */}
      <section className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Comfortable Patient Areas</h2>
            <p className="text-gray-600">
              Designed with patient comfort and well-being in mind, our facilities provide a calming, stress-free environment.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-4 h-4 bg-blue-600 rounded"></div>
              </div>
              <h3 className="font-semibold mb-2">Comfortable Seating</h3>
              <p className="text-gray-600 text-sm">Ergonomic chairs and sofas in spacious waiting areas.</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-4 h-4 bg-blue-600 rounded"></div>
              </div>
              <h3 className="font-semibold mb-2">Entertainment</h3>
              <p className="text-gray-600 text-sm">TVs, magazines, and free Wi-Fi to keep you comfortable.</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-4 h-4 bg-blue-600 rounded"></div>
              </div>
              <h3 className="font-semibold mb-2">Refreshments</h3>
              <p className="text-gray-600 text-sm">Complimentary water and light refreshments available.</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-4 h-4 bg-blue-600 rounded"></div>
              </div>
              <h3 className="font-semibold mb-2">Accessibility</h3>
              <p className="text-gray-600 text-sm">Fully accessible facilities with wheelchair access.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Facility Features */}
      <section className="py-10 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Additional Facility Features</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 text-center">
              <h3 className="font-semibold mb-2">Free Parking</h3>
              <p className="text-gray-600 text-sm">Ample parking spaces including handicap accessible spots.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 text-center">
              <h3 className="font-semibold mb-2">Private Changing Rooms</h3>
              <p className="text-gray-600 text-sm">Clean, private spaces with secure lockers for personal items.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 text-center">
              <h3 className="font-semibold mb-2">Climate Control</h3>
              <p className="text-gray-600 text-sm">Optimal temperature and humidity control throughout the facility.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 text-center">
              <h3 className="font-semibold mb-2">Secure Environment</h3>
              <p className="text-gray-600 text-sm">24/7 security monitoring and controlled access systems.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 text-center">
              <h3 className="font-semibold mb-2">Digital Check-in</h3>
              <p className="text-gray-600 text-sm">Streamlined registration process with digital forms.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 text-center">
              <h3 className="font-semibold mb-2">Healing Environment</h3>
              <p className="text-gray-600 text-sm">Calming colors, natural lighting, and peaceful ambiance.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}