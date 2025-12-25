export default function ContactPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-teal-600 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-blue-100">
            Get in touch with our team for appointments, questions, or emergency imaging services.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Cards */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Phone Numbers</h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-gray-900">Main Line</p>
                    <a href="tel:+917014265848" className="text-blue-600 hover:text-blue-700">+91 7014265848</a>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Emergency</p>
                    <a href="tel:+917014265848" className="text-red-600 hover:text-red-700">+91 7014265848</a>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Appointments</p>
                    <a href="tel:+917014265848" className="text-teal-600 hover:text-teal-700">+91 7014265848</a>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-6">
                <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center mb-4">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Email Addresses</h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-gray-900">General Inquiries</p>
                    <a href="mailto:techroverteam@gmail.com" className="text-teal-600 hover:text-teal-700">techroverteam@gmail.com</a>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Appointments</p>
                    <a href="mailto:techroverteam@gmail.com" className="text-teal-600 hover:text-teal-700">techroverteam@gmail.com</a>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Reports</p>
                    <a href="mailto:techroverteam@gmail.com" className="text-teal-600 hover:text-teal-700">techroverteam@gmail.com</a>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Operating Hours</h3>
                <div className="space-y-2 text-gray-700">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-semibold">7:00 AM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-semibold">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-semibold">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between border-t pt-2 mt-3">
                    <span className="text-red-600 font-semibold">Emergency</span>
                    <span className="text-red-600 font-semibold">24/7 Available</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">First Name *</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name *</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                      <input 
                        type="email" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
                      <input 
                        type="tel" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="+91 7014265848"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Subject *</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>Select a subject</option>
                      <option>Appointment Booking</option>
                      <option>General Inquiry</option>
                      <option>Report Request</option>
                      <option>Insurance Question</option>
                      <option>Technical Support</option>
                      <option>Feedback</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                    <textarea 
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Please describe your inquiry or question..."
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-teal-500 text-white py-4 px-8 rounded-lg font-semibold hover:shadow-lg transition-all"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Map */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Visit Our Facility</h2>
            <p className="text-gray-600">
              Conveniently located in Jodhpur with easy access and ample parking
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Location Details</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Address</h4>
                      <p className="text-gray-600">
                        Varaha Scan & Diagnostic Center<br/>
                        Plot No. 06, Ram Nagar<br/>
                        Sangriya, Jodhpur<br/>
                        Rajasthan, India
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                      <div className="w-4 h-4 bg-teal-600 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Parking & Access</h4>
                      <ul className="text-gray-600 space-y-1">
                        <li>• Free parking available</li>
                        <li>• Wheelchair accessible</li>
                        <li>• Ground floor facility</li>
                        <li>• Public transport nearby</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <div className="w-4 h-4 bg-green-600 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Nearby Landmarks</h4>
                      <ul className="text-gray-600 space-y-1">
                        <li>• City Hospital (2 min walk)</li>
                        <li>• Medical Plaza (5 min walk)</li>
                        <li>• Bus Station (10 min walk)</li>
                        <li>• Shopping Center (15 min walk)</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <a 
                    href="https://maps.google.com/search/Unit-1+Plot+No+06+Ram+Nagar+Sangriya+Jodhpur" 
                    target="_blank"
                    className="w-full bg-gradient-to-r from-blue-500 to-teal-500 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-96 bg-gradient-to-br from-blue-100 to-teal-100 flex items-center justify-center">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.0123456789!2d73.0123456!3d26.2123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDEyJzQ0LjQiTiA3M8KwMDAnNDQuNCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%" 
                  height="100%" 
                  style={{border:0}} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Varaha SDC Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-10 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">24/7 Imaging Services</h2>
          <p className="text-blue-100 mb-6">
            For urgent diagnostic imaging needs, our services are available 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+917014265848" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-colors"
            >
              Call: +91 7014265848
            </a>
            <a 
              href="/website/appointment" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Book Appointment
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}