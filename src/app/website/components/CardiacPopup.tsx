"use client";

import { useState, useEffect } from "react";
import { X, Heart } from "lucide-react";
import Image from "next/image";

export default function CardiacPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000); // Show after 3 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-lg">
      <div className="bg-white rounded-2xl shadow-2xl border border-blue-100 overflow-hidden transform transition-all duration-500 animate-slide-up">
        {/* Image Section */}
        <div className="relative h-32">
          <Image
            src="/hero.png"
            alt="TAVI Protocol Angiography"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <div className="absolute top-2 left-2 bg-[#0056AE] text-white px-2 py-1 rounded text-xs font-medium">
            TAVI PROTOCOL
          </div>
          <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
            ANGIOGRAPHY
          </div>
          <button 
            onClick={() => setIsVisible(false)}
            className="absolute top-2 right-2 bg-white/20 hover:bg-white/30 text-white rounded-full p-1 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        
        {/* Content Section */}
        <div className="p-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center flex-shrink-0">
              <Heart className="w-5 h-5 text-white" />
            </div>
            
            <div className="flex-1">
              <h3 className="text-lg font-bold mb-3" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>
                Advanced Cardiac Imaging
              </h3>
              
              <div className="space-y-2 text-sm" style={{color: '#586C80', fontFamily: 'Roboto, sans-serif'}}>
                <p>The 256 slice CT provides a quantum leap in imaging and is now being used to diagnose heart disease.</p>
                <p>This advanced scanner achieves whole imaging of the heart within a short time span using low dose radiation.</p>
              </div>
              
              <button 
                className="mt-4 bg-gradient-to-r from-[#0056AE] to-[#2E92ED] text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-300"
                style={{fontFamily: 'Roboto, sans-serif', fontWeight: 600}}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}