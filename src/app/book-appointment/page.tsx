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

export default function BookAppointmentPage() {
  const [availableSlots, setAvailableSlots] = useState<TimeSlot[]>([]);
  const [scans, setScans] = useState<Scan[]>([]);
  const [selectedScans, setSelectedScans] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [scanSearch, setScanSearch] = useState('');
  const [showScanDropdown, setShowScanDropdown] = useState(false);
  const [toast, setToast] = useState<{show: boolean, message: string, type: 'success' | 'error'}>({show: false, message: '', type: 'success'});
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const showToast = (message: string, type: 'success' | 'error') => {
    setToast({show: true, message, type});
    setTimeout(() => setToast({show: false, message: '', type: 'success'}), 5000);
  };

  useEffect(() => {
    fetchScans();
    
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
      const response = await fetch(`https://varahasdc.co.in/api/web/available-slots?date=${date}`);
      const data = await response.json();
      
      if (data.success) {
        setAvailableSlots(data.availableSlots || []);
      } else {
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
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/home.jpg"
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
            Book Your Appointment
          </motion.h1>
          <motion.p
            className="text-lg max-w-2xl mx-auto text-white"
            style={{fontFamily: 'Roboto, sans-serif'}}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Schedule your CT scan • Same Day Service • Expert Care
          </motion.p>
        </div>
      </section>

      {/* Appointment Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Side - Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold mb-6" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>
                Why Choose Us?
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#0056AE] to-[#2E92ED] rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 text-sm" style={{color: '#000000', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>Lightning-Fast Same Day Service</h3>
                    <p className="text-sm" style={{color: '#586C80', fontFamily: 'Roboto, sans-serif'}}>Skip the wait! Book today, scan today - it's that simple</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#0056AE] to-[#2E92ED] rounded-full flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 text-sm" style={{color: '#000000', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>Ultra-Fast 24 Hour Reports</h3>
                    <p className="text-sm" style={{color: '#586C80', fontFamily: 'Roboto, sans-serif'}}>Crystal-clear results delivered at warp speed - your health can't wait</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#0056AE] to-[#2E92ED] rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 text-sm" style={{color: '#000000', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>Always-On 24/7 Emergency Care</h3>
                    <p className="text-sm" style={{color: '#586C80', fontFamily: 'Roboto, sans-serif'}}>Medical emergencies don't follow schedules - neither do we</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#0056AE] to-[#2E92ED] rounded-full flex items-center justify-center flex-shrink-0">
                    <Stethoscope className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 text-sm" style={{color: '#000000', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>World-Class Expert Care</h3>
                    <p className="text-sm" style={{color: '#586C80', fontFamily: 'Roboto, sans-serif'}}>Elite radiologists and cutting-edge tech - your health deserves the best</p>
                  </div>
                </div>
              </div>
              

              
              {/* Quick Info Cards */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-white p-4 rounded-xl shadow-lg text-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#0056AE] to-[#2E92ED] rounded-full flex items-center justify-center mx-auto mb-3">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-sm mb-1" style={{color: '#0056AE'}}>Same Day Service</h3>
                  <p className="text-xs" style={{color: '#586C80'}}>No waiting period</p>
                </div>
                
                <div className="bg-white p-4 rounded-xl shadow-lg text-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Stethoscope className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-sm mb-1" style={{color: '#0056AE'}}>Expert Care</h3>
                  <p className="text-xs" style={{color: '#586C80'}}>Qualified radiologists</p>
                </div>
                
                <div className="bg-white p-4 rounded-xl shadow-lg text-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-sm mb-1" style={{color: '#0056AE'}}>24/7 Emergency</h3>
                  <p className="text-xs" style={{color: '#586C80'}}>Always available</p>
                </div>
                
                <div className="bg-white p-4 rounded-xl shadow-lg text-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-sm mb-1" style={{color: '#0056AE'}}>Fast Reports</h3>
                  <p className="text-xs" style={{color: '#586C80'}}>Within 24 hours</p>
                </div>
              </div>
            </div>

            {/* Right Side - Appointment Form */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl border border-blue-100 shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0056AE] to-[#2E92ED] rounded-full flex items-center justify-center">
                    <Stethoscope className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>
                      Appointment Form
                    </h2>
                    <p className="text-sm" style={{color: '#586C80', fontFamily: 'Roboto, sans-serif'}}>
                      Fill in your details and we'll confirm your appointment
                    </p>
                  </div>
                </div>
              
              <form className="space-y-6" onSubmit={async (e) => {
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
                
                const age = parseInt(data.age as string);
                if (age > 100) {
                  showToast('Age cannot be more than 100 years', 'error');
                  setIsSubmitting(false);
                  return;
                }
                
                if (selectedScans.length === 0) {
                  showToast('Please select at least one scan type', 'error');
                  setIsSubmitting(false);
                  return;
                }
                
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
                    setShowSuccessModal(true);
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
                    className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2E92ED] text-sm"
                    style={{fontFamily: 'Roboto, sans-serif'}}
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <select
                    name="gender"
                    required
                    className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2E92ED] text-sm"
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
                    className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2E92ED] text-sm"
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
                    className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2E92ED] text-sm"
                    style={{fontFamily: 'Roboto, sans-serif'}}
                  />
                </div>
                <div>
                  <textarea
                    name="address"
                    placeholder="Address"
                    required
                    rows={2}
                    className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2E92ED] text-sm"
                    style={{fontFamily: 'Roboto, sans-serif'}}
                  ></textarea>
                </div>
                <div className="relative scan-dropdown">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Scan Types</label>
                  <div className="relative">
                    <div 
                      className="w-full p-4 border border-gray-300 rounded-lg cursor-pointer bg-white flex items-center justify-between"
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
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    name="appointmentDate"
                    type="date"
                    required
                    min={new Date().toISOString().split('T')[0]}
                    value={selectedDate}
                    onChange={(e) => handleDateChange(e.target.value)}
                    className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2E92ED] text-sm"
                    style={{fontFamily: 'Roboto, sans-serif'}}
                  />
                  <select
                    name="scheduleTime"
                    required
                    disabled={!selectedDate || loadingSlots}
                    className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2E92ED] text-sm disabled:bg-gray-100"
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
                    className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2E92ED] text-sm"
                    style={{fontFamily: 'Roboto, sans-serif'}}
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#0056AE] to-[#2E92ED] text-white font-bold py-4 px-6 rounded-lg hover:shadow-lg transition-all duration-300 text-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  style={{fontFamily: 'Roboto, sans-serif', fontWeight: 600}}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Booking Appointment...
                    </>
                  ) : (
                    <>
                      <Calendar className="w-5 h-5" />
                      Book Appointment
                    </>
                  )}
                </button>
              </form>
              </div>
            </div>
          </div>
        </div>
      </section>


      
      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full transform animate-scale-in">
            <div className="p-6">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2" style={{fontFamily: 'Roboto, sans-serif'}}>
                  Appointment Booked Successfully!
                </h3>
              </div>
              
              <div className="text-center mb-6">
                <p className="text-gray-700 leading-relaxed mb-4" style={{fontFamily: 'Roboto, sans-serif'}}>
                  We will contact you soon to confirm your appointment details.
                </p>
                
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-4 border border-blue-100">
                  <p className="text-sm font-semibold text-gray-800 mb-3">Contact us directly:</p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center gap-2 text-sm">
                      <Phone className="w-4 h-4 text-blue-600" />
                      <span className="text-gray-700">+91 8233338550</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <button
                onClick={() => setShowSuccessModal(false)}
                className="w-full bg-gradient-to-r from-[#0056AE] to-[#2E92ED] text-white font-semibold py-3 px-4 rounded-lg hover:shadow-lg transition-all duration-300"
                style={{fontFamily: 'Roboto, sans-serif'}}
              >
                Got it!
              </button>
            </div>
          </div>
        </div>
      )}
      
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