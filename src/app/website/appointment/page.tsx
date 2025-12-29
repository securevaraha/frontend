'use client'

import { useState } from 'react'

export default function AppointmentPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    scanType: '',
    bodyPart: '',
    preferredDate: '',
    preferredTime: '',
    urgency: 'routine',
    message: ''
  })

  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const scanTypes = [
    { value: 'mri-scan', label: 'MRI Scan', duration: '30-90 min', description: 'Magnetic Resonance Imaging' },
    { value: 'ct-scan', label: 'CT Scan', duration: '10-30 min', description: 'Computed Tomography' },
    { value: 'xray', label: 'X-Ray', duration: '5-15 min', description: 'Digital Radiography' },
    { value: 'ultrasound', label: 'Ultrasound', duration: '15-45 min', description: 'Diagnostic Sonography' }
  ]

  const timeSlots = [
    '08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00'
  ]

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {}
    
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required'
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^[\+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Phone number is invalid'
    }
    if (!formData.scanType) newErrors.scanType = 'Scan type is required'
    if (!formData.preferredDate) newErrors.preferredDate = 'Preferred date is required'
    if (!formData.preferredTime) newErrors.preferredTime = 'Preferred time is required'
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setShowSuccess(true)
    
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      scanType: '',
      bodyPart: '',
      preferredDate: '',
      preferredTime: '',
      urgency: 'routine',
      message: ''
    })

    // Hide success message after 5 seconds
    setTimeout(() => setShowSuccess(false), 5000)
  }

  const selectedScan = scanTypes.find(scan => scan.value === formData.scanType)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative hero-section overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-transparent z-10"></div>
        <div className="w-full h-full overflow-hidden">
          <img
            src="/Screenshot 2025-12-28 at 10.51.24AM.png"
            alt="Book Appointment"
            className="w-full h-full object-cover object-center hero-image"
            loading="eager"
          />
        </div>
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl">
              <h1 className="text-5xl font-black text-white mb-6">
                Book Your Appointment
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                Schedule your diagnostic imaging appointment in just a few simple steps. Our team will confirm your booking within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Message */}
      {showSuccess && (
        <div className="fixed top-4 right-4 z-50 bg-green-500 text-white px-6 py-4 rounded-xl shadow-2xl">
          <div className="flex items-center gap-3">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            <div>
              <div className="font-bold">Appointment Requested!</div>
              <div className="text-sm">We'll contact you within 24 hours.</div>
            </div>
          </div>
        </div>
      )}

      {/* Form Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-2xl p-8 lg:p-12">
                <div className="mb-8">
                  <h2 className="text-3xl font-black text-gray-900 mb-4">Appointment Details</h2>
                  <p className="text-gray-600">Please fill out all required fields to schedule your diagnostic imaging appointment.</p>
                </div>
                
                <div className="space-y-8">
                  {/* Personal Information */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <div className="w-2 h-6 bg-blue-500 rounded-full"></div>
                      Personal Information
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-3">
                          First Name *
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          required
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-4 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${
                            errors.firstName ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="Enter your first name"
                        />
                        {errors.firstName && <p className="text-red-500 text-sm mt-2">{errors.firstName}</p>}
                      </div>
                      
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-3">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          required
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-4 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${
                            errors.lastName ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="Enter your last name"
                        />
                        {errors.lastName && <p className="text-red-500 text-sm mt-2">{errors.lastName}</p>}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-3">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-4 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${
                            errors.email ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="your.email@example.com"
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email}</p>}
                      </div>
                      
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-3">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-4 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${
                            errors.phone ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="+91 7014265848"
                        />
                        {errors.phone && <p className="text-red-500 text-sm mt-2">{errors.phone}</p>}
                      </div>
                    </div>
                  </div>

                  {/* Scan Information */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <div className="w-2 h-6 bg-teal-500 rounded-full"></div>
                      Scan Information
                    </h3>
                    
                    <div className="mb-6">
                      <label className="block text-sm font-bold text-gray-700 mb-3">
                        Type of Scan *
                      </label>
                      <div className="grid md:grid-cols-2 gap-4">
                        {scanTypes.map((scan) => (
                          <label
                            key={scan.value}
                            className={`cursor-pointer border-2 rounded-xl p-4 transition-all duration-300 ${
                              formData.scanType === scan.value
                                ? 'border-blue-500 bg-blue-50'
                                : 'border-gray-200 hover:border-blue-300'
                            }`}
                          >
                            <input
                              type="radio"
                              name="scanType"
                              value={scan.value}
                              checked={formData.scanType === scan.value}
                              onChange={handleInputChange}
                              className="sr-only"
                            />
                            <div className="flex items-center justify-between">
                              <div>
                                <div className="font-bold text-gray-900">{scan.label}</div>
                                <div className="text-sm text-gray-600">{scan.description}</div>
                                <div className="text-xs text-blue-600 font-medium mt-1">{scan.duration}</div>
                              </div>
                              <div className={`w-5 h-5 rounded-full border-2 ${
                                formData.scanType === scan.value
                                  ? 'border-blue-500 bg-blue-500'
                                  : 'border-gray-300'
                              }`}>
                                {formData.scanType === scan.value && (
                                  <div className="w-full h-full rounded-full bg-white scale-50"></div>
                                )}
                              </div>
                            </div>
                          </label>
                        ))}
                      </div>
                      {errors.scanType && <p className="text-red-500 text-sm mt-2">{errors.scanType}</p>}
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-3">
                          Body Part (Optional)
                        </label>
                        <input
                          type="text"
                          name="bodyPart"
                          value={formData.bodyPart}
                          onChange={handleInputChange}
                          className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                          placeholder="e.g., Brain, Knee, Chest"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-3">
                          Urgency Level
                        </label>
                        <select
                          name="urgency"
                          value={formData.urgency}
                          onChange={handleInputChange}
                          className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        >
                          <option value="routine">Routine (1-2 weeks)</option>
                          <option value="urgent">Urgent (2-3 days)</option>
                          <option value="emergency">Emergency (Same day)</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Scheduling */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <div className="w-2 h-6 bg-green-500 rounded-full"></div>
                      Preferred Schedule
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-3">
                          Preferred Date *
                        </label>
                        <input
                          type="date"
                          name="preferredDate"
                          required
                          value={formData.preferredDate}
                          onChange={handleInputChange}
                          min={new Date().toISOString().split('T')[0]}
                          className={`w-full px-4 py-4 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${
                            errors.preferredDate ? 'border-red-500' : 'border-gray-300'
                          }`}
                        />
                        {errors.preferredDate && <p className="text-red-500 text-sm mt-2">{errors.preferredDate}</p>}
                      </div>
                      
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-3">
                          Preferred Time *
                        </label>
                        <select
                          name="preferredTime"
                          required
                          value={formData.preferredTime}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-4 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${
                            errors.preferredTime ? 'border-red-500' : 'border-gray-300'
                          }`}
                        >
                          <option value="">Select time</option>
                          {timeSlots.map((time) => (
                            <option key={time} value={time}>
                              {new Date(`2000-01-01T${time}`).toLocaleTimeString([], {
                                hour: 'numeric',
                                minute: '2-digit',
                                hour12: true
                              })}
                            </option>
                          ))}
                        </select>
                        {errors.preferredTime && <p className="text-red-500 text-sm mt-2">{errors.preferredTime}</p>}
                      </div>
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-3">
                      Additional Information (Optional)
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Please provide any additional information, medical history, or special requirements..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-4 px-8 rounded-xl font-bold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ${
                      isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Submitting Request...
                      </div>
                    ) : (
                      'Submit Appointment Request'
                    )}
                  </button>
                </div>
              </form>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Selected Scan Info */}
              {selectedScan && (
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Selected Scan</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="font-semibold text-gray-900">{selectedScan.label}</div>
                      <div className="text-sm text-gray-600">{selectedScan.description}</div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Duration:</span>
                      <span className="font-semibold text-blue-600">{selectedScan.duration}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Contact Information */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-6">Need Assistance?</h3>
                <div className="space-y-4">
                  <a href="tel:+917014265848" className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Call Us</div>
                      <div className="text-sm text-gray-600">+91 7014265848</div>
                    </div>
                  </a>

                  <a href="mailto:techroverteam@gmail.com" className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Email Us</div>
                      <div className="text-sm text-gray-600">techroverteam@gmail.com</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Operating Hours</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Monday - Friday</span>
                    <span className="font-semibold">7:00 AM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Saturday</span>
                    <span className="font-semibold">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Sunday</span>
                    <span className="font-semibold">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="border-t border-teal-200 pt-2 mt-3">
                    <div className="flex justify-between">
                      <span className="text-red-600 font-semibold">Emergency</span>
                      <span className="text-red-600 font-semibold">24/7</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}