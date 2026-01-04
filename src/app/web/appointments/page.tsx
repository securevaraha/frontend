'use client';

import { useState, useEffect } from 'react';
import { CalendarCheck, Search, Filter, Calendar, Clock, User, Phone, FileText, CheckCircle, XCircle } from 'lucide-react';

interface Appointment {
  id: number;
  cro: string;
  patientName: string;
  phone: string;
  age: string;
  gender: string;
  scanType: string;
  appointmentDate: string;
  appointmentTime: string;
  status: 'scheduled' | 'completed' | 'cancelled';
  createdAt: string;
}

export default function AppointmentsPage() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'scheduled' | 'completed' | 'cancelled'>('all');
  const [dateFilter, setDateFilter] = useState('');

  useEffect(() => {
    fetchAppointments();
  }, [statusFilter, dateFilter]);

  const fetchAppointments = async () => {
    setLoading(true);
    try {
      // Mock appointments data from web contact form
      const mockAppointments = [
        {
          id: 1,
          cro: 'WEB001',
          patientName: 'John Doe',
          phone: '9876543210',
          email: 'john@example.com',
          age: '35',
          gender: 'male',
          scanType: 'CT Scan',
          appointmentDate: new Date().toISOString().split('T')[0],
          appointmentTime: '10:00',
          status: 'scheduled' as const,
          createdAt: new Date().toISOString()
        },
        {
          id: 2,
          cro: 'WEB002',
          patientName: 'Jane Smith',
          phone: '9876543211',
          email: 'jane@example.com',
          age: '28',
          gender: 'female',
          scanType: 'MRI Scan',
          appointmentDate: new Date().toISOString().split('T')[0],
          appointmentTime: '14:30',
          status: 'scheduled' as const,
          createdAt: new Date().toISOString()
        }
      ];
      
      // Filter by status and date if provided
      let filtered = mockAppointments;
      if (statusFilter !== 'all') {
        filtered = filtered.filter(apt => apt.status === statusFilter);
      }
      if (dateFilter) {
        filtered = filtered.filter(apt => apt.appointmentDate === dateFilter);
      }
      
      setAppointments(filtered);
    } catch (error) {
      console.error('Error fetching appointments:', error);
      setAppointments([]);
    } finally {
      setLoading(false);
    }
  };

  const updateAppointmentStatus = async (id: number, status: 'scheduled' | 'completed' | 'cancelled') => {
    setAppointments(appointments.map(apt => 
      apt.id === id ? { ...apt, status } : apt
    ));
  };

  const filteredAppointments = appointments.filter(appointment => {
    const matchesSearch = appointment.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         appointment.cro.includes(searchTerm) ||
                         appointment.phone.includes(searchTerm);
    return matchesSearch;
  });

  const getStatusBadge = (status: string) => {
    const badges = {
      scheduled: 'bg-blue-100 text-blue-800 border-blue-200',
      completed: 'bg-green-100 text-green-800 border-green-200',
      cancelled: 'bg-red-100 text-red-800 border-red-200'
    };
    return badges[status as keyof typeof badges] || badges.scheduled;
  };

  const getStatusIcon = (status: string) => {
    if (status === 'completed') return <CheckCircle className="h-4 w-4" />;
    if (status === 'cancelled') return <XCircle className="h-4 w-4" />;
    return <Clock className="h-4 w-4" />;
  };

  return (
    <div className="p-6 space-y-6">
      <div className="bg-gradient-to-r from-cyan-600 to-cyan-700 text-white p-6 rounded-xl shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Appointments</h1>
            <p className="text-cyan-100">View and manage patient appointments</p>
          </div>
          <CalendarCheck className="h-12 w-12 text-white/80" />
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-100">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by patient name, CRO, or phone..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5 text-gray-400" />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as any)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            >
              <option value="all">All Status</option>
              <option value="scheduled">Scheduled</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
            </select>
            <input
              type="date"
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              placeholder="Filter by date"
            />
          </div>
        </div>
      </div>

      {/* Appointments List */}
      {loading ? (
        <div className="flex items-center justify-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-600"></div>
        </div>
      ) : filteredAppointments.length === 0 ? (
        <div className="bg-white p-12 rounded-xl shadow-lg border border-gray-100 text-center">
          <CalendarCheck className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600 text-lg">No appointments found</p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredAppointments.map((appointment) => (
            <div
              key={appointment.id}
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-cyan-100 rounded-lg">
                      <User className="h-5 w-5 text-cyan-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{appointment.patientName}</h3>
                      <div className="flex items-center gap-4 mt-1">
                        <span className="text-sm text-gray-600">CRO: {appointment.cro}</span>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusBadge(appointment.status)} flex items-center gap-1`}>
                          {getStatusIcon(appointment.status)}
                          {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Phone className="h-4 w-4" />
                      <span>{appointment.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <User className="h-4 w-4" />
                      <span>{appointment.age} years, {appointment.gender}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(appointment.appointmentDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span>{appointment.appointmentTime}</span>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-gray-600" />
                      <span className="font-medium text-gray-700">Scan Type:</span>
                      <span className="text-gray-600">{appointment.scanType}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  {appointment.status === 'scheduled' && (
                    <>
                      <button
                        onClick={() => updateAppointmentStatus(appointment.id, 'completed')}
                        className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                      >
                        Mark as Completed
                      </button>
                      <button
                        onClick={() => updateAppointmentStatus(appointment.id, 'cancelled')}
                        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                      >
                        Cancel Appointment
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

