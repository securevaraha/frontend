'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const CarouselCard = ({ images, title, colorClass, indicatorClass, redirectUrl, delay = 0 }: { images: any[], title: string, colorClass: string, indicatorClass: string, redirectUrl: string, delay?: number }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1500);

    return () => clearInterval(interval);
  }, [images.length]);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleCardClick = () => {
    window.location.href = redirectUrl;
  };

  return (
    <div 
      className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 hover:shadow-2xl hover:-translate-y-2 hover:scale-105 transition-all duration-500 group cursor-pointer"
      onClick={handleCardClick}
    >
      <div className="relative h-80 overflow-hidden">
        <Image
          src={images[currentIndex].src}
          alt={images[currentIndex].title}
          fill
          className="object-contain transition-all duration-500 group-hover:scale-110"
        />
        <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-white text-sm font-medium ${colorClass}`}>
          {currentIndex + 1} / {images.length}
        </div>
        
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Navigation Arrows - Show on hover */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            prevImage();
          }}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          onClick={(e) => {
            e.stopPropagation();
            nextImage();
          }}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      <div className="p-6 group-hover:bg-gray-50 transition-colors duration-300">
        <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-600 transition-colors duration-300" style={{color: '#0056AE'}}>{title}</h3>
        <p className="text-gray-600 mb-4 group-hover:text-gray-700 transition-colors duration-300">{images[currentIndex].description}</p>
        <div className="flex space-x-1">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? `${indicatorClass} scale-125` : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const MedicalImagingGallery = () => {
  const medicalImages = {
    cardiac: [
      { src: '/images/cadiac.png', title: 'Cardiac CT Scan', description: 'High-resolution cardiac imaging' },
      { src: '/images/CARDIAC.jpg', title: 'Cardiac Angiography', description: 'Detailed heart vessel visualization' },
      { src: '/images/cardiac2.png', title: 'Cardiac Structure', description: 'Complete heart structure analysis' },
      { src: '/images/cardiac3.png', title: 'Cardiac Function', description: 'Heart function assessment' },
      { src: '/images/cardiac4.png', title: 'Cardiac Perfusion', description: 'Blood flow analysis' }
    ],
    angiography: [
      { src: '/images/angiography.jpg', title: 'Coronary Angiography', description: 'Coronary artery visualization' },
      { src: '/images/angiography2.jpg', title: 'Vascular Imaging', description: 'Complete vascular system' }
    ],
    dualEnergy: [
      { src: '/images/se001.png', title: 'Dual Energy CT', description: 'Advanced dual energy imaging' },
      { src: '/images/se002.png', title: 'Spectral Imaging', description: 'Material decomposition' },
      { src: '/images/se003.png', title: 'Bone Analysis', description: 'Bone density assessment' },
      { src: '/images/se004.png', title: 'Soft Tissue', description: 'Enhanced soft tissue contrast' },
      { src: '/images/se005.png', title: 'Vascular Study', description: 'Iodine mapping' },
      { src: '/images/se006.png', title: 'Organ Analysis', description: 'Multi-organ assessment' },
      { src: '/images/se007.png', title: 'Pathology Detection', description: 'Enhanced lesion detection' },
      { src: '/images/se008.png', title: 'Quantitative Analysis', description: 'Precise measurements' }
    ]
  };

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{color: '#0056AE'}}>Medical Imaging Gallery</h2>
          <p className="text-xl text-gray-600">Advanced imaging capabilities in cardiac, angiography, and dual energy</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <CarouselCard 
            images={medicalImages.cardiac} 
            title="Cardiac" 
            colorClass="bg-red-500"
            indicatorClass="bg-red-500"
            redirectUrl="/cardiac"
          />
          <CarouselCard 
            images={medicalImages.angiography} 
            title="Angiography" 
            colorClass="bg-blue-500"
            indicatorClass="bg-blue-500"
            redirectUrl="/dual-energy"
          />
          <CarouselCard 
            images={medicalImages.dualEnergy} 
            title="Dual Energy / GSI" 
            colorClass="bg-purple-500"
            indicatorClass="bg-purple-500"
            redirectUrl="/dual-energy"
          />
        </div>
      </div>
    </section>
  );
};

export default MedicalImagingGallery;