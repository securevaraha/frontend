"use client";

import { useState, useEffect } from "react";
import { Search, Droplets, Scan, CheckCircle2, XCircle } from "lucide-react";

interface ScanData {
  sno: number;
  scanName: string;
  renalTest: string;
}

interface ScansData {
  CECT: ScanData[];
  NCCT: ScanData[];
}

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState<"CECT" | "NCCT">("CECT");
  const [searchQuery, setSearchQuery] = useState("");
  const [scansData, setScansData] = useState<ScansData>({ CECT: [], NCCT: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/ct-scans.json")
      .then((res) => res.json())
      .then((data: ScansData) => {
        setScansData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading scans data:", err);
        setLoading(false);
      });
  }, []);

  const filteredScans = scansData[activeTab]?.filter((scan) =>
    scan.scanName.toLowerCase().includes(searchQuery.toLowerCase())
  ) || [];

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
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white" style={{fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>
            GSI (Dual Energy) Services
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-white" style={{fontFamily: 'Roboto, sans-serif'}}>
            Advanced dual energy CT applications for comprehensive diagnostic imaging
          </p>
        </div>
      </section>

      {/* Scans Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>
            Available CT Scans
          </h2>
          
          {/* Tabs */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-gray-100 rounded-xl p-1">
              <button
                onClick={() => {
                  setActiveTab("CECT");
                  setSearchQuery("");
                }}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === "CECT"
                    ? "bg-gradient-to-r from-[#0056AE] to-[#2E92ED] text-white shadow-lg"
                    : "text-gray-600 hover:text-[#0056AE]"
                }`}
                style={{fontFamily: 'Roboto, sans-serif', fontWeight: 600}}
              >
                CECT (Contrast Enhanced)
              </button>
              <button
                onClick={() => {
                  setActiveTab("NCCT");
                  setSearchQuery("");
                }}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === "NCCT"
                    ? "bg-gradient-to-r from-[#0056AE] to-[#2E92ED] text-white shadow-lg"
                    : "text-gray-600 hover:text-[#0056AE]"
                }`}
                style={{fontFamily: 'Roboto, sans-serif', fontWeight: 600}}
              >
                NCCT (Non-Contrast)
              </button>
            </div>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder={`Search ${activeTab} scans...`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2E92ED] focus:border-transparent"
                style={{fontFamily: 'Roboto, sans-serif'}}
              />
            </div>
          </div>

          {/* Loading State */}
          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block w-8 h-8 border-4 border-[#0056AE] border-t-transparent rounded-full animate-spin"></div>
              <p className="mt-4 text-gray-600" style={{fontFamily: 'Roboto, sans-serif'}}>Loading scans...</p>
            </div>
          ) : (
            <>
              {/* Scans Grid */}
              <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 mb-8">
                {filteredScans.map((scan, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg p-3 shadow-sm border border-gray-200 hover:shadow-md hover:border-[#2E92ED] transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h3 className="font-semibold text-xs leading-tight mb-1" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>
                          {scan.scanName}
                        </h3>
                      </div>
                      <div className="ml-2">
                        {scan.renalTest && scan.renalTest.toLowerCase().includes('required') ? (
                          <CheckCircle2 className="w-4 h-4 text-green-500" />
                        ) : scan.renalTest && scan.renalTest.toLowerCase().includes('not') ? (
                          <XCircle className="w-4 h-4 text-gray-400" />
                        ) : null}
                      </div>
                    </div>
                    {scan.renalTest && (
                      <div className="mt-2 pt-2 border-t border-gray-100">
                        <p className="text-xs leading-tight" style={{color: '#586C80', fontFamily: 'Roboto, sans-serif'}}>
                          <span className="font-medium">RFT: </span>
                          {scan.renalTest.length > 20 ? `${scan.renalTest.substring(0, 20)}...` : scan.renalTest}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* No Results */}
              {filteredScans.length === 0 && !loading && (
                <div className="text-center py-12">
                  <Scan className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-600" style={{fontFamily: 'Roboto, sans-serif'}}>
                    No scans found matching "{searchQuery}"
                  </p>
                </div>
              )}

              {/* Results Count */}
              {filteredScans.length > 0 && (
                <div className="text-center text-sm text-gray-600 mb-4" style={{fontFamily: 'Roboto, sans-serif'}}>
                  Showing {filteredScans.length} of {scansData[activeTab]?.length || 0} {activeTab} scans
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Patient Advantages */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-cyan-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-blue-100/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-cyan-100/30 to-transparent rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center mb-4 px-6 py-2 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 border border-blue-200">
              <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span className="text-blue-800 font-semibold">Patient Benefits</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>
              Advantages for Patients
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the benefits of our advanced CT technology designed with your comfort and safety in mind
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
                  title: "Less time on table with better scan quality",
                  color: "from-blue-500 to-blue-600"
                },
                {
                  icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
                  title: "Low radiation dose",
                  color: "from-green-500 to-green-600"
                },
                {
                  icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>,
                  title: "Virtual Bronchoscopy available",
                  color: "from-purple-500 to-purple-600"
                },
                {
                  icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/></svg>,
                  title: "1000 images in one rotation",
                  color: "from-yellow-500 to-orange-500"
                },
                {
                  icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z"/></svg>,
                  title: "Better scans with less contrast",
                  color: "from-cyan-500 to-blue-500"
                },
                {
                  icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/></svg>,
                  title: "Government rates pricing",
                  color: "from-emerald-500 to-teal-500"
                },
                {
                  icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>,
                  title: "Brain and lung perfusion scans",
                  color: "from-red-500 to-pink-500"
                },
                {
                  icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>,
                  title: "Dental scan available",
                  color: "from-indigo-500 to-purple-500"
                },
                {
                  icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/></svg>,
                  title: "All body angiography available",
                  color: "from-rose-500 to-red-500"
                }
              ].map((advantage, index) => (
                <div key={index} className="group relative">
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${advantage.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <div className="text-white">
                          {advantage.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 leading-tight group-hover:text-[#0056AE] transition-colors duration-300" style={{fontFamily: 'Roboto, sans-serif', color: '#1f2937'}}>
                          {advantage.title}
                        </h3>
                        <div className={`w-8 h-0.5 bg-gradient-to-r ${advantage.color} mt-2 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#0056AE] to-[#2E92ED] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6" style={{fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>
            Experience Advanced Dual Energy CT
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto" style={{fontFamily: 'Roboto, sans-serif'}}>
            Book your appointment for state-of-the-art diagnostic imaging
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-[#0056AE] font-bold py-4 px-8 rounded-full text-lg hover:shadow-lg transition-all duration-300"
            style={{fontFamily: 'Roboto, sans-serif', fontWeight: 600}}
          >
            Schedule Appointment
          </a>
        </div>
      </section>
    </div>
  );
}