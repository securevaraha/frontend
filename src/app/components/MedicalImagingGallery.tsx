'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

const ImageCard = ({ src, title, description, redirectUrl }: { src: string, title: string, description: string, redirectUrl: string }) => {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(redirectUrl);
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
      redirectUrl: '/cardiac'
    },
    { 
      src: '/images/angiography_main.png', 
      title: 'Angiography', 
      description: 'Advanced angiography for detailed vascular visualization',
      redirectUrl: '/dual-energy'
    },
    { 
      src: '/images/duealenergy:gi.png', 
      title: 'Dual Energy / GSI', 
      description: 'Dual energy imaging for enhanced tissue characterization',
      redirectUrl: '/dual-energy'
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
              redirectUrl={image.redirectUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MedicalImagingGallery;