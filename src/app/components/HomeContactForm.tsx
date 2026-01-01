"use client";

import { useState } from "react";

export default function HomeContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<"success" | "error" | "">("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      fullName: formData.get('fullName'),
      gender: formData.get('gender'),
      age: formData.get('age'),
      contactNumber: formData.get('contactNumber'),
      address: formData.get('address'),
      scan: formData.get('scan'),
      appointmentDate: formData.get('appointmentDate'),
      scheduleTime: formData.get('scheduleTime'),
      additionalInformation: formData.get('additionalInformation')
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (result.success) {
        const form = e.target as HTMLFormElement;
        form.reset();
        setMessage("Appointment booked successfully! We will contact you soon.");
        setMessageType("success");
      } else {
        setMessage(result.error || "Failed to book appointment. Please try again.");
        setMessageType("error");
      }
      
      setTimeout(() => {
        setMessage("");
        setMessageType("");
      }, 5000);
    } catch (error) {
      console.error('Form submission error:', error);
      setMessage("Failed to book appointment. Please try again.");
      setMessageType("error");
      setTimeout(() => {
        setMessage("");
        setMessageType("");
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg">
      <h3 className="text-lg font-bold text-center mb-4" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>Book Appointment</h3>
      
      {message && (
        <div className={`mb-4 p-3 rounded-lg text-center text-sm font-medium ${
          messageType === "success" 
            ? "bg-green-50 text-green-700 border border-green-200" 
            : "bg-red-50 text-red-700 border border-red-200"
        }`} style={{fontFamily: 'Roboto, sans-serif'}}>
          {messageType === "success" ? "✓ " : "✗ "}{message}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          name="fullName"
          type="text"
          placeholder="Full Name"
          required
          className="w-full p-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-[#2E92ED]"
          style={{fontFamily: 'Roboto, sans-serif'}}
        />
        <div className="grid grid-cols-2 gap-3">
          <select
            name="gender"
            required
            className="w-full p-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-[#2E92ED]"
            style={{fontFamily: 'Roboto, sans-serif'}}
          >
            <option value="">Gender</option>
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
            max="120"
            className="w-full p-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-[#2E92ED]"
            style={{fontFamily: 'Roboto, sans-serif'}}
          />
        </div>
        <input
          name="contactNumber"
          type="tel"
          placeholder="Contact Number"
          required
          pattern="[0-9]{10}"
          className="w-full p-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-[#2E92ED]"
          style={{fontFamily: 'Roboto, sans-serif'}}
        />
        <textarea
          name="address"
          placeholder="Address"
          required
          rows={2}
          className="w-full p-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-[#2E92ED]"
          style={{fontFamily: 'Roboto, sans-serif'}}
        ></textarea>
        <select
          name="scan"
          required
          className="w-full p-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-[#2E92ED]"
          style={{fontFamily: 'Roboto, sans-serif'}}
        >
          <option value="">Select Scan Type</option>
          <option value="CT Scan - General">CT Scan - General</option>
          <option value="CT Scan - Cardiac">CT Scan - Cardiac</option>
          <option value="CT Scan - Emergency">CT Scan - Emergency</option>
          <option value="Dual Energy CT">Dual Energy CT</option>
          <option value="CT Angiography">CT Angiography</option>
          <option value="CT Brain">CT Brain</option>
          <option value="CT Chest">CT Chest</option>
          <option value="CT Abdomen">CT Abdomen</option>
          <option value="CT Spine">CT Spine</option>
          <option value="Other">Other</option>
        </select>
        <div className="grid grid-cols-2 gap-3">
          <input
            name="appointmentDate"
            type="date"
            required
            min={new Date().toISOString().split('T')[0]}
            className="w-full p-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-[#2E92ED]"
            style={{fontFamily: 'Roboto, sans-serif'}}
          />
          <input
            name="scheduleTime"
            type="time"
            required
            className="w-full p-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-[#2E92ED]"
            style={{fontFamily: 'Roboto, sans-serif'}}
          />
        </div>
        <textarea
          name="additionalInformation"
          placeholder="Additional Information (Optional)"
          rows={2}
          className="w-full p-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-[#2E92ED]"
          style={{fontFamily: 'Roboto, sans-serif'}}
        ></textarea>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-[#0056AE] to-[#2E92ED] text-white font-bold py-3 px-6 rounded-lg text-sm hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          style={{fontFamily: 'Roboto, sans-serif', fontWeight: 600}}
        >
          {isSubmitting ? 'Booking...' : 'Book Appointment'}
        </button>
      </form>
    </div>
  );
}
