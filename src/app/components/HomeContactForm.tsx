"use client";

import { useState } from "react";

export default function HomeContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<"success" | "error" | "">("");
  const [errors, setErrors] = useState<{email?: string; phone?: string}>({});

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string) => {
    const phoneRegex = /^[6-9]\d{9}$/;
    return phoneRegex.test(phone);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");
    setErrors({});

    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      message: formData.get('message') as string
    };

    const newErrors: {email?: string; phone?: string} = {};
    
    if (!validateEmail(data.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (!validatePhone(data.phone)) {
      newErrors.phone = "Please enter a valid 10-digit mobile number";
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('https://varahasdc.co.in/api/web/enquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        const form = e.target as HTMLFormElement;
        form.reset();
        setMessage("Thank you for your enquiry! We will contact you soon.");
        setMessageType("success");
      } else {
        setMessage(result.error || "Failed to submit enquiry. Please try again.");
        setMessageType("error");
      }
      
      setTimeout(() => {
        setMessage("");
        setMessageType("");
      }, 5000);
    } catch (error) {
      console.error('Form submission error:', error);
      setMessage("Failed to submit enquiry. Please try again.");
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
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1" style={{fontFamily: 'Roboto, sans-serif'}}>Full Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your full name"
            required
            className="w-full p-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-[#2E92ED]"
            style={{fontFamily: 'Roboto, sans-serif'}}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1" style={{fontFamily: 'Roboto, sans-serif'}}>Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email address"
            required
            className={`w-full p-3 text-sm border rounded-lg focus:outline-none ${
              errors.email ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-[#2E92ED]'
            }`}
            style={{fontFamily: 'Roboto, sans-serif'}}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1" style={{fontFamily: 'Roboto, sans-serif'}}>Mobile Number</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="Enter your mobile number"
            required
            className={`w-full p-3 text-sm border rounded-lg focus:outline-none ${
              errors.phone ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-[#2E92ED]'
            }`}
            style={{fontFamily: 'Roboto, sans-serif'}}
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1" style={{fontFamily: 'Roboto, sans-serif'}}>Your Message / Enquiry</label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter your message or enquiry"
            required
            rows={3}
            className="w-full p-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-[#2E92ED]"
            style={{fontFamily: 'Roboto, sans-serif'}}
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-[#0056AE] to-[#2E92ED] text-white font-bold py-3 px-6 rounded-lg text-sm hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          style={{fontFamily: 'Roboto, sans-serif', fontWeight: 600}}
        >
          {isSubmitting ? 'Sending...' : 'Send Enquiry'}
        </button>
      </form>
    </div>
  );
}
