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
      <section className="relative py-20 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/hero.png"
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
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {filteredScans.map((scan, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-5 shadow-md border border-gray-200 hover:shadow-lg hover:border-[#2E92ED] transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="font-bold text-base mb-2" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>
                          {scan.scanName}
                        </h3>
                      </div>
                      <div className="ml-2">
                        {scan.renalTest && scan.renalTest.toLowerCase().includes('required') ? (
                          <CheckCircle2 className="w-5 h-5 text-green-500" />
                        ) : scan.renalTest && scan.renalTest.toLowerCase().includes('not') ? (
                          <XCircle className="w-5 h-5 text-gray-400" />
                        ) : null}
                      </div>
                    </div>
                    {scan.renalTest && (
                      <div className="mt-3 pt-3 border-t border-gray-100">
                        <p className="text-xs" style={{color: '#586C80', fontFamily: 'Roboto, sans-serif'}}>
                          <span className="font-medium">Renal Function Test: </span>
                          {scan.renalTest}
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
      <section className="py-20" style={{backgroundColor: '#F8FBFF'}}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16" style={{color: '#0056AE', fontFamily: 'Roboto, sans-serif', fontWeight: 600}}>
            Advantages for Patients
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Less time on table with better scan quality",
                "Low radiation dose",
                "Virtual Bronchoscopy available",
                "1000 images in one rotation",
                "Better scans with less contrast",
                "Government rates pricing",
                "Brain and lung perfusion scans",
                "Dental scan available",
                "All body angiography available"
              ].map((advantage, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm border border-blue-100">
                  <div className="w-3 h-3 bg-gradient-to-r from-[#0056AE] to-[#2E92ED] rounded-full flex-shrink-0"></div>
                  <span style={{color: '#586C80', fontFamily: 'Roboto, sans-serif'}}>
                    {advantage}
                  </span>
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