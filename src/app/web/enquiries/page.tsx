'use client';

import { useState, useEffect } from 'react';
import { MessageSquare, Search, Phone, Mail, User } from 'lucide-react';

interface Enquiry {
  id: number;
  name: string;
  phone: string;
  email: string;
  enquiry: string;
  createdAt: string;
}

export default function EnquiriesPage() {
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchEnquiries();
  }, []);

  const fetchEnquiries = async () => {
    setLoading(true);
    try {
      const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://varahasdc.co.in/api';
      const response = await fetch(`${API_BASE_URL}/web/enquiries`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      });
      
      if (response.ok) {
        const data = await response.json();
        if (data.success && Array.isArray(data.enquiries)) {
          setEnquiries(data.enquiries);
        } else {
          setEnquiries([]);
        }
      } else {
        console.error('API response not ok:', response.status);
        setEnquiries([]);
      }
    } catch (error) {
      console.error('Error fetching enquiries:', error);
      setEnquiries([]);
    } finally {
      setLoading(false);
    }
  };



  const filteredEnquiries = enquiries.filter(enquiry => {
    const matchesSearch = enquiry.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         enquiry.phone.includes(searchTerm) ||
                         enquiry.enquiry.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });



  return (
    <div className="p-6 space-y-6">
      <div className="bg-gradient-to-r from-cyan-600 to-cyan-700 text-white p-6 rounded-xl shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Enquiries</h1>
            <p className="text-cyan-100">Manage patient enquiries and inquiries</p>
          </div>
          <MessageSquare className="h-12 w-12 text-white/80" />
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-100">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search by name, phone, or enquiry..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Enquiries List */}
      {loading ? (
        <div className="flex items-center justify-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-600"></div>
        </div>
      ) : filteredEnquiries.length === 0 ? (
        <div className="bg-white p-12 rounded-xl shadow-lg border border-gray-100 text-center">
          <MessageSquare className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600 text-lg">No enquiries found</p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredEnquiries.map((enquiry) => (
            <div
              key={enquiry.id}
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-cyan-100 rounded-lg">
                      <User className="h-5 w-5 text-cyan-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{enquiry.name}</h3>
                      <div className="flex items-center gap-4 mt-1">
                        <span className="text-sm text-gray-500">
                          {new Date(enquiry.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Phone className="h-4 w-4" />
                      <span>{enquiry.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Mail className="h-4 w-4" />
                      <span>{enquiry.email}</span>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-700">{enquiry.enquiry}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

