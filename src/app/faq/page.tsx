"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What should I bring for my appointment?",
      answer: "Please bring a valid ID, insurance card, previous medical reports, and any referral letters from your doctor."
    },
    {
      question: "How long does a CT scan take?",
      answer: "Most CT scans take 10-30 minutes. Our Revolution CT 256 slice machine can complete scans in just 2 heartbeats for cardiac imaging."
    },
    {
      question: "Is the CT scan safe?",
      answer: "Yes, our advanced CT technology uses low-dose radiation protocols, reducing exposure by up to 82% compared to conventional scanners."
    },
    {
      question: "When will I get my results?",
      answer: "Most reports are available within 24 hours. Emergency cases receive priority reporting on the same day."
    },
    {
      question: "Do you accept insurance?",
      answer: "Yes, we accept most major insurance plans. Please contact us to verify your specific coverage."
    },
    {
      question: "Can I eat before my scan?",
      answer: "This depends on the type of scan. Some procedures require fasting. We'll provide specific instructions when you book your appointment."
    },
    {
      question: "Do you provide emergency services?",
      answer: "Yes, we offer 24/7 emergency diagnostic services with trauma protocols and rapid reporting for critical cases."
    },
    {
      question: "How do I schedule an appointment?",
      answer: "You can call us at +91 8233338550, email info@varahasdc.in, or use our online booking form on the contact page."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full flex items-center justify-center text-white">
        <Image
          src="/images/home.jpg"
          alt="Medical imaging equipment"
          fill
          className="object-cover brightness-[0.4]"
          priority
        />
        <div className="relative z-10 text-center p-4">
          <h1 className="text-5xl md:text-7xl font-extrabold drop-shadow-lg">
            FAQ
          </h1>
          <p className="text-lg md:text-xl mt-4 drop-shadow-md">
            Find answers to common questions about our medical imaging services
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <h3 className="text-lg font-semibold" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>
                    {faq.question}
                  </h3>
                  <ChevronDown 
                    className={`w-5 h-5 transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}
                    style={{color: '#2E92ED'}}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p style={{color: '#586C80', fontFamily: 'Roboto, sans-serif', lineHeight: '1.6'}}>
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}