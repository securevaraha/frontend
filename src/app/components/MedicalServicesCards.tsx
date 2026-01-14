'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const MedicalServicesCards = () => {
  const [selectedCategory, setSelectedCategory] = useState(1);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const services = [
    {
      id: 1,
      title: 'CARDIAC',
      subtitle: 'Advanced Heart Imaging',
      images: ['/images/CARDIAC.jpg', '/images/cardiac2.png', '/images/cardiac3.png', '/images/cardiac4.png', '/images/cadiac.png'],
      color: 'from-red-500 to-pink-600',
      bgColor: 'bg-red-50',
      iconColor: 'text-red-600',
      link: '/cardiac'
    },
    {
      id: 2,
      title: 'ANGIOGRAPHY',
      subtitle: 'Vascular Imaging Excellence',
      images: ['/images/angiography.jpg', '/images/angiography2.jpg', '/images/ln001.png', '/images/ln002.png', '/images/ln005.png', '/images/ln006.png', '/images/ln007.png', '/images/ln008.png', '/images/pg001.png'],
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
      link: '/dual-energy#angiography'
    },
    {
      id: 3,
      title: 'DUAL ENERGY / GSI',
      subtitle: 'Gemstone Spectral Imaging',
      images: ['/images/se001.png', '/images/se002.png', '/images/se003.png', '/images/se004.png', '/images/se005.png', '/images/se006.png', '/images/se007.png', '/images/se008.png'],
      color: 'from-purple-500 to-indigo-600',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600',
      link: '/dual-energy'
    }
  ];

  const currentService = services.find(s => s.id === selectedCategory);

  return (
    <section className="py-8 md:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{color: '#0056AE', fontFamily: 'Inter, system-ui, sans-serif'}}>
            Medical Imaging Gallery
          </h2>
          <p className="text-lg md:text-xl text-gray-600" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
            Explore our comprehensive collection of medical imaging services
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-8 md:mb-12 overflow-x-auto">
          <div className="flex bg-gray-100 rounded-2xl p-1 md:p-2 min-w-max">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setSelectedCategory(service.id)}
                className={`px-3 md:px-8 py-2 md:py-4 rounded-xl font-semibold transition-all duration-300 text-sm md:text-base whitespace-nowrap ${
                  selectedCategory === service.id
                    ? `bg-gradient-to-r ${service.color} text-white shadow-lg`
                    : 'text-gray-600 hover:text-gray-800'
                }`}
                style={{fontFamily: 'Inter, system-ui, sans-serif'}}
              >
                <span className="hidden sm:inline">{service.title}</span>
                <span className="sm:hidden">{service.title.split(' ')[0]}</span>
                <span className="ml-1 md:ml-2 text-xs md:text-sm opacity-75">({service.images.length})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Images Grid */}
        {currentService && (
          <div className="mb-8">
            <div className={`text-center mb-6 md:mb-8 p-4 md:p-6 rounded-2xl ${currentService.bgColor}`}>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2" style={{color: '#0056AE', fontFamily: 'Inter, system-ui, sans-serif'}}>
                {currentService.title}
              </h3>
              <p className="text-sm md:text-lg text-gray-700" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
                {currentService.subtitle} • {currentService.images.length} Images
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 md:gap-4">
              {currentService.images.map((image, index) => (
                <div
                  key={index}
                  className="group relative aspect-square bg-white rounded-lg md:rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                >
                  <Image
                    src={image}
                    alt={`${currentService.title} ${index + 1}`}
                    fill
                    className="object-contain p-1 md:p-2 group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                  <div className="absolute bottom-1 md:bottom-2 right-1 md:right-2 bg-black/70 text-white text-xs px-1.5 md:px-2 py-0.5 md:py-1 rounded-full">
                    {index + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Image Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-2 md:p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-full max-h-full">
              <Image
                src={selectedImage}
                alt="Selected medical image"
                width={800}
                height={600}
                className="object-contain max-h-[90vh] md:max-h-[80vh] rounded-lg w-auto h-auto"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-2 md:top-4 right-2 md:right-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full"
              >
                <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-8 md:mt-12">
          {currentService && (
            <Link href={currentService.link}>
              <button className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:scale-105 transition-all duration-300 text-sm md:text-base"
                style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
                View {currentService.title} Details
              </button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default MedicalServicesCards;