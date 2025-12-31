'use client';

import { useState, useEffect } from 'react';
import { Search, RefreshCw, Calendar, Phone, Mail, User, CheckCircle, Clock } from 'lucide-react';
import SuperAdminLayout, { Card, Table, TableHeader, TableHeaderCell, TableBody, TableRow, TableCell, Button, Pagination } from '@/components/SuperAdminLayout';

interface Appointment {
  id: number;
  name: string;
  phone: string;
  email: string;
  scanType: string;
  message: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  reportStatus: 'not_generated' | 'generated' | 'sent';
  createdAt: string;
}

export default function SuperAdminAppointments() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    setLoading(true);
    try {
      const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://varahasdc.co.in/api';
      const response = await fetch(`${API_BASE_URL}/appointments`);
      
      if (response.ok) {
        const data = await response.json();
        setAppointments(data.appointments || []);
      } else {
        // Use demo data if API fails
        setAppointments(demoAppointments);
      }
    } catch (error) {
      console.error('Error fetching appointments:', error);
      // Use demo data on error
      setAppointments(demoAppointments);
    } finally {
      setLoading(false);
    }
  };

  // Demo data for testing
  const demoAppointments: Appointment[] = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      phone: '9876543210',
      email: 'rajesh.kumar@email.com',
      scanType: 'CT Scan - General',
      message: 'Need urgent CT scan for chest pain',
      status: 'pending',
      reportStatus: 'not_generated',
      createdAt: new Date().toISOString()
    },
    {
      id: 2,
      name: 'Priya Sharma',
      phone: '9123456789',
      email: 'priya.sharma@email.com',
      scanType: 'CT Scan - Cardiac',
      message: 'Follow-up cardiac scan as recommended by doctor',
      status: 'confirmed',
      reportStatus: 'not_generated',
      createdAt: new Date(Date.now() - 86400000).toISOString() // 1 day ago
    },
    {
      id: 3,
      name: 'Amit Patel',
      phone: '9988776655',
      email: 'amit.patel@email.com',
      scanType: 'Dual Energy CT',
      message: 'Routine health checkup scan',
      status: 'completed',
      reportStatus: 'generated',
      createdAt: new Date(Date.now() - 172800000).toISOString() // 2 days ago
    },
    {
      id: 4,
      name: 'Sunita Devi',
      phone: '9555444333',
      email: 'sunita.devi@email.com',
      scanType: 'CT Scan - Emergency',
      message: 'Emergency scan for accident patient',
      status: 'completed',
      reportStatus: 'sent',
      createdAt: new Date(Date.now() - 259200000).toISOString() // 3 days ago
    },
    {
      id: 5,
      name: 'Vikram Singh',
      phone: '9444333222',
      email: 'vikram.singh@email.com',
      scanType: 'CT Scan - General',
      message: 'Abdominal pain investigation',
      status: 'cancelled',
      reportStatus: 'not_generated',
      createdAt: new Date(Date.now() - 345600000).toISOString() // 4 days ago
    },
    {
      id: 6,
      name: 'Meera Joshi',
      phone: '9333222111',
      email: 'meera.joshi@email.com',
      scanType: 'CT Scan - Cardiac',
      message: 'Pre-surgery cardiac evaluation',
      status: 'pending',
      reportStatus: 'not_generated',
      createdAt: new Date(Date.now() - 432000000).toISOString() // 5 days ago
    }
  ];

  const updateAppointmentStatus = async (id: number, status: string) => {
    try {
      const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://varahasdc.co.in/api';
      const response = await fetch(`${API_BASE_URL}/appointments/${id}/status`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status })
      });
      
      if (response.ok) {
        fetchAppointments();
      }
    } catch (error) {
      console.error('Error updating appointment status:', error);
    }
  };

  const filteredAppointments = appointments.filter(appointment => {
    const matchesSearch = 
      appointment.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      appointment.phone.includes(searchTerm) ||
      appointment.email.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || appointment.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const paginatedAppointments = filteredAppointments.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(filteredAppointments.length / itemsPerPage);

  const getStatusBadge = (status: string) => {
    const styles = {
      pending: 'bg-yellow-100 text-yellow-800 border-yellow-300',
      confirmed: 'bg-blue-100 text-blue-800 border-blue-300',
      completed: 'bg-green-100 text-green-800 border-green-300',
      cancelled: 'bg-red-100 text-red-800 border-red-300'
    };
    
    return (
      <span className={`px-2 py-1 text-xs font-semibold rounded-full border ${styles[status as keyof typeof styles]}`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  const getReportStatusBadge = (reportStatus: string) => {
    const styles = {
      not_generated: 'bg-gray-100 text-gray-800 border-gray-300',
      generated: 'bg-blue-100 text-blue-800 border-blue-300',
      sent: 'bg-green-100 text-green-800 border-green-300'
    };
    
    const labels = {
      not_generated: 'Not Generated',
      generated: 'Generated',
      sent: 'Sent'
    };
    
    return (
      <span className={`px-2 py-1 text-xs font-semibold rounded-full border ${styles[reportStatus as keyof typeof styles]}`}>
        {labels[reportStatus as keyof typeof labels]}
      </span>
    );
  };

  return (
    <SuperAdminLayout 
      title="Appointments Management" 
      subtitle="Manage patient appointments and bookings"
      actions={
        <Button onClick={fetchAppointments} disabled={loading}>
          <RefreshCw className={`h-4 w-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
          Refresh
        </Button>
      }
    >
      <div className="space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total</p>
                <p className="text-2xl font-bold text-blue-600">{appointments.length}</p>
              </div>
              <Calendar className="h-8 w-8 text-blue-600" />
            </div>
          </Card>
          
          <Card className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Pending</p>
                <p className="text-2xl font-bold text-yellow-600">
                  {appointments.filter(a => a.status === 'pending').length}
                </p>
              </div>
              <Clock className="h-8 w-8 text-yellow-600" />
            </div>
          </Card>
          
          <Card className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Confirmed</p>
                <p className="text-2xl font-bold text-blue-600">
                  {appointments.filter(a => a.status === 'confirmed').length}
                </p>
              </div>
              <CheckCircle className="h-8 w-8 text-blue-600" />
            </div>
          </Card>
          
          <Card className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Completed</p>
                <p className="text-2xl font-bold text-green-600">
                  {appointments.filter(a => a.status === 'completed').length}
                </p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
          </Card>
        </div>

        {/* Filters */}
        <Card className="p-4">
          <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search by name, phone, or email..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            <div>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Status</option>
                <option value="pending">Pending</option>
                <option value="confirmed">Confirmed</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
          </div>
        </Card>

        {/* Appointments Table */}
        <Card>
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Appointments List</h2>
          </div>
          
          <Table>
            <TableHeader>
              <TableHeaderCell>Patient</TableHeaderCell>
              <TableHeaderCell>Contact</TableHeaderCell>
              <TableHeaderCell>Scan Type</TableHeaderCell>
              <TableHeaderCell>Message</TableHeaderCell>
              <TableHeaderCell>Status</TableHeaderCell>
              <TableHeaderCell>Report Status</TableHeaderCell>
              <TableHeaderCell>Date</TableHeaderCell>
              <TableHeaderCell>Actions</TableHeaderCell>
            </TableHeader>
            
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell colSpan={8} className="text-center py-12">
                    <RefreshCw className="h-5 w-5 animate-spin text-blue-500 mx-auto" />
                  </TableCell>
                </TableRow>
              ) : paginatedAppointments.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={8} className="text-center py-12 text-gray-500">
                    No appointments found
                  </TableCell>
                </TableRow>
              ) : (
                paginatedAppointments.map((appointment) => (
                  <TableRow key={appointment.id}>
                    <TableCell>
                      <div className="flex items-center space-x-3">
                        <User className="h-4 w-4 text-blue-600" />
                        <div className="font-medium">{appointment.name}</div>
                      </div>
                    </TableCell>
                    
                    <TableCell>
                      <div className="space-y-1">
                        <div className="flex items-center space-x-1">
                          <Phone className="h-3 w-3 text-gray-400" />
                          <span className="text-sm">{appointment.phone}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Mail className="h-3 w-3 text-gray-400" />
                          <span className="text-sm">{appointment.email}</span>
                        </div>
                      </div>
                    </TableCell>
                    
                    <TableCell>{appointment.scanType}</TableCell>
                    
                    <TableCell>
                      <div className="max-w-xs truncate" title={appointment.message}>
                        {appointment.message || '-'}
                      </div>
                    </TableCell>
                    
                    <TableCell>{getStatusBadge(appointment.status)}</TableCell>
                    
                    <TableCell>{getReportStatusBadge(appointment.reportStatus)}</TableCell>
                    
                    <TableCell>
                      <div className="text-sm">
                        {new Date(appointment.createdAt).toLocaleDateString()}
                      </div>
                    </TableCell>
                    
                    <TableCell>
                      <div className="flex space-x-1">
                        {appointment.status === 'pending' && (
                          <Button
                            size="sm"
                            variant="success"
                            onClick={() => updateAppointmentStatus(appointment.id, 'confirmed')}
                          >
                            Confirm
                          </Button>
                        )}
                        {appointment.status === 'confirmed' && (
                          <Button
                            size="sm"
                            variant="primary"
                            onClick={() => updateAppointmentStatus(appointment.id, 'completed')}
                          >
                            Complete
                          </Button>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
          
          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
              totalItems={filteredAppointments.length}
              itemsPerPage={itemsPerPage}
            />
          )}
        </Card>
      </div>
    </SuperAdminLayout>
  );
}