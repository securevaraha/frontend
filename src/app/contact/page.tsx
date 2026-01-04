"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Calendar, Stethoscope, Shield, Zap } from "lucide-react";
import { useState, useEffect } from "react";

interface TimeSlot {
  startTime: string;
  endTime: string;
  display: string;
}

interface Scan {
  id: number;
  name: string;
}

export default function ContactPage() {
  const [availableSlots, setAvailableSlots] = useState<TimeSlot[]>([]);
  const [scans, setScans] = useState<Scan[]>([]);
  const [selectedScans, setSelectedScans] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [scanSearch, setScanSearch] = useState('');
  const [showScanDropdown, setShowScanDropdown] = useState(false);
  const [toast, setToast] = useState<{show: boolean, message: string, type: 'success' | 'error'}>({show: false, message: '', type: 'success'});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const showToast = (message: string, type: 'success' | 'error') => {
    setToast({show: true, message, type});
    setTimeout(() => setToast({show: false, message: '', type: 'success'}), 5000);
  };

  useEffect(() => {
    fetchScans();
    
    // Close dropdown when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.scan-dropdown')) {
        setShowScanDropdown(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const fetchScans = async () => {
    try {
      const response = await fetch('https://varahasdc.co.in/api/web/scans');
      const data = await response.json();
      if (data.success) {
        setScans(data.scans || []);
      }
    } catch (error) {
      console.error('Error fetching scans:', error);
    }
  };

  const fetchAvailableSlots = async (date: string) => {
    if (!date) return;
    
    setLoadingSlots(true);
    try {
      console.log('Fetching slots for date:', date);
      const response = await fetch(`https://varahasdc.co.in/api/web/available-slots?date=${date}`);
      const data = await response.json();
      
      console.log('Slots response:', data);
      
      if (data.success) {
        setAvailableSlots(data.availableSlots || []);
        if (data.availableSlots?.length === 0) {
          console.log('No slots available for this date');
        }
      } else {
        console.error('Failed to fetch slots:', data.error);
        setAvailableSlots([]);
      }
    } catch (error) {
      console.error('Error fetching slots:', error);
      setAvailableSlots([]);
    } finally {
      setLoadingSlots(false);
    }
  };

  const handleDateChange = (date: string) => {
    setSelectedDate(date);
    fetchAvailableSlots(date);
  };
  return (
    <div>
      {/* Compact Hero Section */}
      <section className="relative py-16 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/hero.png"
            alt="Medical imaging equipment"
            className="w-full h-full object-cover brightness-[0.4]"
          />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1
            className="text-3xl md:text-4xl font-bold mb-4 text-white"
            style={{fontFamily: 'Roboto, sans-serif', fontWeight: 600}}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Contact Varaha SDC
          </motion.h1>
          <motion.p
            className="text-lg max-w-2xl mx-auto text-white"
            style={{fontFamily: 'Roboto, sans-serif'}}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Advanced CT Imaging • Same Day Service • 24/7 Emergency Care
          </motion.p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold mb-6" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>
                Visit Our Center
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#0056AE] to-[#2E92ED] rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 text-sm" style={{color: '#000000', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>Address</h3>
                    <p className="text-sm" style={{color: '#586C80', fontFamily: 'Roboto, sans-serif'}}>
                      Troma Centre, MDM Hospital<br />
                      Shastri Nagar, Jodhpur, Rajasthan 342001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#0056AE] to-[#2E92ED] rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 text-sm" style={{color: '#000000', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>Phone</h3>
                    <p className="text-sm" style={{color: '#586C80', fontFamily: 'Roboto, sans-serif'}}>+91 8233338550</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#0056AE] to-[#2E92ED] rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 text-sm" style={{color: '#000000', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>Email</h3>
                    <p className="text-sm" style={{color: '#586C80', fontFamily: 'Roboto, sans-serif'}}>info@varahasdc.in</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#0056AE] to-[#2E92ED] rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 text-sm" style={{color: '#000000', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>Hours</h3>
                    <p className="text-sm" style={{color: '#586C80', fontFamily: 'Roboto, sans-serif'}}>24/7 Emergency Services</p>
                  </div>
                </div>
              </div>
              
              {/* Services List */}
              <div className="mt-8 p-4 rounded-xl" style={{backgroundColor: '#F8FBFF'}}>
                <h3 className="font-bold mb-3 text-sm" style={{color: '#0056AE'}}>Our Services</h3>
                <div className="space-y-2">
                  {['256 Slice CT Scan', 'Dual Energy Imaging', 'Cardiac CT', 'Emergency Scans', '3D Reconstruction'].map((service, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#2E92ED] rounded-full"></div>
                      <span className="text-xs" style={{color: '#586C80'}}>{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl border border-blue-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0056AE] to-[#2E92ED] rounded-full flex items-center justify-center">
                    <Stethoscope className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>
                      Book Your CT Scan
                    </h3>
                    <p className="text-sm" style={{color: '#586C80'}}>Same day service available</p>
                  </div>
                </div>
                
                <form className="space-y-4" onSubmit={async (e) => {
                  e.preventDefault();
                  
                  if (isSubmitting) return;
                  setIsSubmitting(true);
                  
                  const formData = new FormData(e.target as HTMLFormElement);
                  const data = {
                    fullName: formData.get('fullName'),
                    gender: formData.get('gender'),
                    age: formData.get('age'),
                    contactNumber: formData.get('contactNumber'),
                    address: formData.get('address'),
                    scan: selectedScans,
                    appointmentDate: formData.get('appointmentDate'),
                    scheduleTime: formData.get('scheduleTime'),
                    additionalInformation: formData.get('additionalInformation')
                  };
                  
                  // Validate age
                  const age = parseInt(data.age as string);
                  if (age > 100) {
                    showToast('Age cannot be more than 100 years', 'error');
                    setIsSubmitting(false);
                    return;
                  }
                  
                  // Validate scans
                  if (selectedScans.length === 0) {
                    showToast('Please select at least one scan type', 'error');
                    setIsSubmitting(false);
                    return;
                  }
                  
                  // Validate phone number
                  const phone = data.contactNumber as string;
                  if (!/^[6-9][0-9]{9}$/.test(phone)) {
                    showToast('Please enter a valid 10-digit phone number starting with 6-9', 'error');
                    setIsSubmitting(false);
                    return;
                  }
                  
                  try {
                    const response = await fetch('https://varahasdc.co.in/api/web/book-appointment', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify(data)
                    });
                    
                    const result = await response.json();
                    
                    if (response.ok && result.success) {
                      showToast('Appointment booked successfully! We will contact you soon.', 'success');
                      (e.target as HTMLFormElement).reset();
                      setSelectedDate('');
                      setAvailableSlots([]);
                      setSelectedScans([]);
                      setShowScanDropdown(false);
                    } else {
                      showToast(result.error || 'Error booking appointment. Please try again.', 'error');
                    }
                  } catch (error) {
                    console.error('Booking error:', error);
                    showToast('Error booking appointment. Please check your connection and try again.', 'error');
                  } finally {
                    setIsSubmitting(false);
                  }
                }}>
                  <div>
                    <input
                      name="fullName"
                      type="text"
                      placeholder="Full Name"
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2E92ED] text-sm"
                      style={{fontFamily: 'Roboto, sans-serif'}}
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <select
                      name="gender"
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2E92ED] text-sm"
                      style={{fontFamily: 'Roboto, sans-serif'}}
                    >
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                    <input
                      name="age"
                      type="number"
                      placeholder="Age"
                      required
                      min="1"
                      max="100"
                      onInput={(e) => {
                        const target = e.target as HTMLInputElement;
                        if (parseInt(target.value) > 100) {
                          target.value = '100';
                        }
                      }}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2E92ED] text-sm"
                      style={{fontFamily: 'Roboto, sans-serif'}}
                    />
                  </div>
                  <div>
                    <input
                      name="contactNumber"
                      type="tel"
                      placeholder="Contact Number (10 digits)"
                      required
                      pattern="[6-9][0-9]{9}"
                      maxLength={10}
                      onInput={(e) => {
                        const target = e.target as HTMLInputElement;
                        target.value = target.value.replace(/[^0-9]/g, '').slice(0, 10);
                      }}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2E92ED] text-sm"
                      style={{fontFamily: 'Roboto, sans-serif'}}
                    />
                  </div>
                  <div>
                    <textarea
                      name="address"
                      placeholder="Address"
                      required
                      rows={2}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2E92ED] text-sm"
                      style={{fontFamily: 'Roboto, sans-serif'}}
                    ></textarea>
                  </div>
                  <div className="relative scan-dropdown">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Scan Types</label>
                    <div className="relative">
                      <div 
                        className="w-full p-3 border border-gray-300 rounded-lg cursor-pointer bg-white flex items-center justify-between"
                        onClick={() => setShowScanDropdown(!showScanDropdown)}
                      >
                        <span className="text-sm text-gray-700">
                          {selectedScans.length === 0 ? 'Select Scan Types' : `${selectedScans.length} scan(s) selected`}
                        </span>
                        <svg className={`w-4 h-4 transition-transform ${showScanDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                      
                      {showScanDropdown && (
                        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-hidden">
                          <div className="p-2 border-b border-gray-200">
                            <input
                              type="text"
                              placeholder="Search scans..."
                              value={scanSearch}
                              onChange={(e) => setScanSearch(e.target.value)}
                              className="w-full p-2 border border-gray-200 rounded text-sm focus:outline-none focus:border-blue-500"
                            />
                          </div>
                          <div className="max-h-40 overflow-y-auto">
                            {scans
                              .filter(scan => scan.name.toLowerCase().includes(scanSearch.toLowerCase()))
                              .map((scan) => (
                                <label key={scan.id} className="flex items-center gap-2 p-2 hover:bg-gray-50 cursor-pointer">
                                  <input
                                    type="checkbox"
                                    checked={selectedScans.includes(scan.name)}
                                    onChange={(e) => {
                                      if (e.target.checked) {
                                        setSelectedScans([...selectedScans, scan.name]);
                                      } else {
                                        setSelectedScans(selectedScans.filter(s => s !== scan.name));
                                      }
                                    }}
                                    className="rounded border-gray-300"
                                  />
                                  <span className="text-sm">{scan.name}</span>
                                </label>
                              ))
                            }
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {selectedScans.length > 0 && (
                      <div className="mt-2">
                        <div className="flex flex-wrap gap-1">
                          {selectedScans.map((scanName, index) => (
                            <span key={index} className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                              {scanName}
                              <button
                                type="button"
                                onClick={() => setSelectedScans(selectedScans.filter(s => s !== scanName))}
                                className="text-blue-600 hover:text-blue-800 ml-1"
                              >
                                ×
                              </button>
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      name="appointmentDate"
                      type="date"
                      required
                      min={new Date().toISOString().split('T')[0]}
                      value={selectedDate}
                      onChange={(e) => handleDateChange(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2E92ED] text-sm"
                      style={{fontFamily: 'Roboto, sans-serif'}}
                    />
                    <select
                      name="scheduleTime"
                      required
                      disabled={!selectedDate || loadingSlots}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2E92ED] text-sm disabled:bg-gray-100"
                      style={{fontFamily: 'Roboto, sans-serif'}}
                    >
                      <option value="">
                        {!selectedDate ? 'Select date first' : 
                         loadingSlots ? 'Loading slots...' : 
                         availableSlots.length === 0 ? 'No slots available - Please call us' : 'Select time slot'}
                      </option>
                      {availableSlots.map((slot, index) => (
                        <option key={index} value={slot.startTime}>
                          {slot.display}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <textarea
                      name="additionalInformation"
                      placeholder="Additional Information (Optional)"
                      rows={3}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2E92ED] text-sm"
                      style={{fontFamily: 'Roboto, sans-serif'}}
                    ></textarea>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 bg-gradient-to-r from-[#0056AE] to-[#2E92ED] text-white font-bold py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300 text-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      style={{fontFamily: 'Roboto, sans-serif', fontWeight: 600}}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Booking...
                        </>
                      ) : (
                        'Book Appointment'
                      )}
                    </button>
                    <button
                      type="button"
                      className="flex-1 border-2 border-[#2E92ED] text-[#2E92ED] font-bold py-3 px-6 rounded-lg hover:bg-[#2E92ED] hover:text-white transition-all duration-300 text-sm"
                      style={{fontFamily: 'Roboto, sans-serif', fontWeight: 600}}
                    >
                      Call Now: 8233338550
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-8" style={{backgroundColor: '#F8FBFF'}}>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Side - Location Info */}
            <div>
              <h2 className="text-2xl font-bold mb-4" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>
                Find Us
              </h2>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0056AE] to-[#2E92ED] rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2" style={{color: '#000000', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>Our Location</h3>
                    <p className="text-lg leading-relaxed" style={{color: '#586C80', fontFamily: 'Roboto, sans-serif'}}>
                      Troma Centre, MDM Hospital<br />
                      Shastri Nagar, Jodhpur, Rajasthan 342001
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Side - Map */}
            <div>
              <div className="bg-white rounded-xl p-3 shadow-lg">
                <div className="aspect-[4/3] rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3576.8234567890123!2d73.0243!3d26.2389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDE0JzIwLjAiTiA3M8KwMDEnMjcuNSJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{border: 0}}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-blue-50 to-white p-4 rounded-xl shadow-lg text-center border border-blue-100">
              <div className="w-12 h-12 bg-gradient-to-br from-[#0056AE] to-[#2E92ED] rounded-full flex items-center justify-center mx-auto mb-3">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-sm mb-1" style={{color: '#0056AE'}}>Call Now</h3>
              <p className="text-xs" style={{color: '#586C80'}}>8233338550</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-white p-4 rounded-xl shadow-lg text-center border border-green-100">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-sm mb-1" style={{color: '#0056AE'}}>Same Day</h3>
              <p className="text-xs" style={{color: '#586C80'}}>No Waiting</p>
            </div>
            
            <div className="bg-gradient-to-br from-red-50 to-white p-4 rounded-xl shadow-lg text-center border border-red-100">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-sm mb-1" style={{color: '#0056AE'}}>24/7 Emergency</h3>
              <p className="text-xs" style={{color: '#586C80'}}>Always Open</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-white p-4 rounded-xl shadow-lg text-center border border-purple-100">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-sm mb-1" style={{color: '#0056AE'}}>Fast Reports</h3>
              <p className="text-xs" style={{color: '#586C80'}}>24 Hours</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Toast Notification */}
      {toast.show && (
        <div className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg max-w-sm transform transition-all duration-300 ${
          toast.type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
        }`}>
          <div className="flex items-center gap-3">
            {toast.type === 'success' ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            )}
            <span className="text-sm font-medium">{toast.message}</span>
            <button 
              onClick={() => setToast({show: false, message: '', type: 'success'})}
              className="ml-auto text-white hover:text-gray-200"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}