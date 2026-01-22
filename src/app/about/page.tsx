// app/about/page.tsx

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Gem, Lightbulb, Handshake, Target, Heart, Zap, Users, UserCheck } from "lucide-react";
import { ReactNode } from "react";

// A reusable card for our values

const ValueCard = ({
  icon,
  title,
  children,
}: {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}) => (
  <div className="bg-white p-6 rounded-lg shadow-md text-center border-t-4" style={{borderColor: '#2E92ED'}}>
    <div className="flex justify-center items-center mb-4" style={{color: '#0056AE'}}>
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-2" style={{color: '#000000', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>{title}</h3>
    <p style={{color: '#586C80', fontFamily: 'Roboto, sans-serif'}}>{children}</p>
  </div>
);

export default function AboutUsPage() {
  return (
    <div>
      {/* Hero Section */}
      <motion.section
        className="relative h-[60vh] w-full flex items-center justify-center text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/images/home.jpg"
          alt="Medical imaging equipment"
          fill
          className="object-cover brightness-[0.4]"
          priority
        />
        <div className="relative z-10 text-center p-4">
          <h1 className="text-5xl md:text-7xl font-extrabold drop-shadow-lg">
            About Us
          </h1>
          <p className="text-lg md:text-xl mt-4 drop-shadow-md">
            Varaha SDC introduces the city's first 256-slice CT technology for superior medical diagnosis with minimal radiation.
          </p>
        </div>
      </motion.section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Welcome Varaha SDC CT Scan
          </motion.h2>
          <motion.div
            className="space-y-6 text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-lg leading-relaxed" style={{color: '#586C80', fontFamily: 'Roboto, sans-serif'}}>
              Varaha SDC brings an advanced technology (256 slice) machine to the city for the first time. We at Varaha focus on bringing quality diagnosis by providing best quality services. Our CT machine i.e GE Revolution CT 256 slice dual energy provides high quality scans with low dose radiations compared to other machines. Our advanced technology gives doctors an edge in diagnosing the illness better.
            </p>
            <p className="text-lg leading-relaxed" style={{color: '#586C80', fontFamily: 'Roboto, sans-serif'}}>
              We provide immediate medical care for emergency patients and our acquiescent staff will be glad to assist you 24x7 and we have an efficient team of radiologist for excellent reporting.
            </p>
            <p className="text-lg leading-relaxed" style={{color: '#586C80', fontFamily: 'Roboto, sans-serif'}}>
              We focus on bringing quality diagnosis services by providing accurate and timely test results to our valued customers. With a commitment to excellence and a wide range of comprehensive test panels, varaha is your trusted partner in promoting good health and overall well-being. We strive to provide high quality services near you while assuring affordability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Core Values Section */}
      <section className="py-20" style={{backgroundColor: '#F8FBFF'}}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ValueCard icon={<Gem size={48} />} title="Precision Excellence">
              Every diagnostic service is delivered with uncompromising accuracy, using state-of-the-art equipment and expert analysis.
            </ValueCard>
            <ValueCard
              icon={<Lightbulb size={48} />}
              title="Advanced Technology"
            >
              We continuously invest in the latest medical imaging technology to provide the most comprehensive diagnostic solutions.
            </ValueCard>
            <ValueCard
              icon={<Handshake size={48} />}
              title="Patient Care"
            >
              Your health is our priority. We provide compassionate care with personalized attention to every patient's needs.
            </ValueCard>
            <ValueCard
              icon={<Target size={48} />}
              title="Reliable Results"
            >
              Our diagnostic services are engineered for accuracy and speed, ensuring timely results for effective treatment planning.
            </ValueCard>
          </div>
        </div>
      </section>

      {/* Medical Services Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>
              Advanced CT Scan Services
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#0056AE] to-[#2E92ED] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive CT imaging solutions with cutting-edge technology and expert care
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <motion.div
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-blue-100 hover:border-[#2E92ED] overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-red-600"></div>
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">24/7 EMERGENCY SCANS</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Immediate CT scan services available 24 hours a day for emergency and trauma cases
              </p>
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>

            <motion.div
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-blue-100 hover:border-[#2E92ED] overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -10 }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0056AE] to-[#2E92ED]"></div>
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#0056AE] to-[#2E92ED] rounded-full mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">CARDIAC CT SCANS</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Advanced cardiac CT imaging for detailed heart visualization within seconds using low dose radiation with 3D reconstruction
              </p>
              <div className="absolute inset-0 bg-gradient-to-br from-[#0056AE]/5 to-[#2E92ED]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>

            <motion.div
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-blue-100 hover:border-[#2E92ED] overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -10 }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-green-600"></div>
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">DUAL ENERGY CT</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Revolutionary dual energy CT technology provides superior image quality with reduced radiation dose
              </p>
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-green-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>

            <motion.div
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-blue-100 hover:border-[#2E92ED] overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -10 }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-purple-600"></div>
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">EXPERT TECHNICIANS</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Certified CT technicians and radiologists available 24x7 to ensure accurate scanning and reporting
              </p>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          </div>

          {/* Doctors Section */}
          <motion.div
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-blue-100 mb-16"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center mb-8">
              <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#0056AE] to-[#2E92ED] rounded-full">
                <UserCheck className="w-10 h-10 text-white" />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-center text-gray-800 mb-6">EXPERT DOCTORS</h3>
            <p className="text-xl text-gray-600 text-center max-w-2xl mx-auto leading-relaxed">
              We have an efficient team of radiologists for reporting, ensuring accurate diagnosis and comprehensive patient care
            </p>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-4" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>
            Ready to Experience Excellence in Healthcare?
          </h2>
          <p className="max-w-2xl mx-auto mb-8" style={{color: '#586C80', fontFamily: 'Roboto, sans-serif'}}>
            Discover our comprehensive medical services or get in touch with our team to schedule your consultation.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/services"
              className="bg-[#2E92ED] text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-white hover:text-[#0056AE] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Our Services
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border-2 font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 hover:bg-[#0056AE] hover:text-white" style={{borderColor: '#0056AE', color: '#0056AE'}}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
