'use client';

import Image from 'next/image';

const ImageCard = ({ src, title, description, sectionId }: { src: string, title: string, description: string, sectionId: string }) => {
  const handleCardClick = () => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 hover:shadow-2xl hover:-translate-y-2 hover:scale-105 transition-all duration-500 group cursor-pointer"
      onClick={handleCardClick}
    >
      <div className="relative h-80 overflow-hidden">
        <Image
          src={src}
          alt={title}
          fill
          className="object-contain transition-all duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-6 group-hover:bg-gray-50 transition-colors duration-300">
        <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-600 transition-colors duration-300" style={{color: '#0056AE'}}>{title}</h3>
        <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{description}</p>
      </div>
    </div>
  );
};

const MedicalImagingGallery = () => {
  const medicalImages = [
    { 
      src: '/images/cardiac_main.png', 
      title: 'Cardiac', 
      description: 'High-resolution cardiac imaging for comprehensive heart analysis',
      sectionId: 'cardiac-section'
    },
    { 
      src: '/images/angiography_main.png', 
      title: 'Angiography', 
      description: 'Advanced angiography for detailed vascular visualization',
      sectionId: 'angiography-section'
    },
    { 
      src: '/images/duealenergy:gi.png', 
      title: 'Dual Energy / GSI', 
      description: 'Dual energy imaging for enhanced tissue characterization',
      sectionId: 'dual-energy-section'
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{color: '#0056AE'}}>Medical Imaging Gallery</h2>
          <p className="text-xl text-gray-600">Advanced imaging capabilities in cardiac, angiography, and dual energy</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {medicalImages.map((image, index) => (
            <ImageCard 
              key={index}
              src={image.src}
              title={image.title}
              description={image.description}
              sectionId={image.sectionId}
            />
          ))}
        </div>
        
        <div className="mt-16 space-y-12">
          <div id="cardiac-section" className="text-center p-8 bg-red-50 rounded-2xl">
            <h3 className="text-3xl font-bold mb-4" style={{color: '#0056AE'}}>Cardiac Imaging</h3>
            <p className="text-lg text-gray-700">Our cardiac CT imaging provides detailed visualization of heart structures, coronary arteries, and cardiac function assessment for comprehensive cardiovascular diagnosis.</p>
          </div>
          
          <div id="angiography-section" className="text-center p-8 bg-blue-50 rounded-2xl">
            <h3 className="text-3xl font-bold mb-4" style={{color: '#0056AE'}}>Angiography</h3>
            <p className="text-lg text-gray-700">Advanced angiographic imaging enables precise visualization of blood vessels throughout the body, helping diagnose vascular conditions and plan treatments.</p>
          </div>
          
          <div id="dual-energy-section" className="text-center p-8 bg-purple-50 rounded-2xl">
            <h3 className="text-3xl font-bold mb-4" style={{color: '#0056AE'}}>Dual Energy / GSI</h3>
            <p className="text-lg text-gray-700">Dual energy CT technology provides enhanced tissue characterization, material decomposition, and improved diagnostic confidence with reduced radiation dose.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MedicalImagingGallery;