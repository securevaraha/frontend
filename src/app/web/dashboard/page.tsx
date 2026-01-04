'use client';

import { useState, useEffect } from 'react';
import { MessageSquare, CalendarCheck, CalendarClock, TrendingUp, Users, Activity } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface DashboardStats {
  totalEnquiries: number;
  pendingEnquiries: number;
  totalAppointments: number;
  todayAppointments: number;
  availableSlots: number;
  bookedSlots: number;
}

export default function WebDashboard() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState<DashboardStats>({
    totalEnquiries: 0,
    pendingEnquiries: 0,
    totalAppointments: 0,
    todayAppointments: 0,
    availableSlots: 0,
    bookedSlots: 0
  });
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
    fetchDashboardStats();
  }, []);

  const fetchDashboardStats = async () => {
    setLoading(true);
    try {
      const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://varahasdc.co.in/api';
      
      // Fetch enquiries stats
      const enquiriesResponse = await fetch(`${API_BASE_URL}/web/enquiries/stats`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      });
      const enquiriesData = enquiriesResponse.ok ? await enquiriesResponse.json() : { success: false, total: 0, pending: 0 };
      
      // Fetch appointments stats
      const appointmentsResponse = await fetch(`${API_BASE_URL}/web/appointments/stats`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      });
      const appointmentsData = appointmentsResponse.ok ? await appointmentsResponse.json() : { success: false, total: 0, today: 0 };
      
      // Fetch schedule availability stats - need today's date
      const today = new Date();
      const todayStr = `${String(today.getDate()).padStart(2, '0')}-${String(today.getMonth() + 1).padStart(2, '0')}-${today.getFullYear()}`;
      const scheduleResponse = await fetch(`${API_BASE_URL}/web/schedule/stats?date=${todayStr}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      });
      const scheduleData = scheduleResponse.ok ? await scheduleResponse.json() : { success: false, available: 0, booked: 0 };
      
      setStats({
        totalEnquiries: enquiriesData.total || 0,
        pendingEnquiries: enquiriesData.pending || 0,
        totalAppointments: appointmentsData.total || 0,
        todayAppointments: appointmentsData.today || 0,
        availableSlots: scheduleData.available || 0,
        bookedSlots: scheduleData.booked || 0
      });
    } catch (error) {
      console.error('Error fetching dashboard stats:', error);
      // Set default values on error
      setStats({
        totalEnquiries: 0,
        pendingEnquiries: 0,
        totalAppointments: 0,
        todayAppointments: 0,
        availableSlots: 0,
        bookedSlots: 0
      });
    } finally {
      setLoading(false);
    }
  };

  const quickActions = [
    { 
      label: 'View Enquiries', 
      href: '/web/enquiries', 
      icon: MessageSquare, 
      color: 'bg-blue-500',
      description: 'Manage patient enquiries'
    },
    { 
      label: 'View Appointments', 
      href: '/web/appointments', 
      icon: CalendarCheck, 
      color: 'bg-green-500',
      description: 'View all appointments'
    },
    { 
      label: 'Schedule Availability', 
      href: '/web/schedule-availability', 
      icon: CalendarClock, 
      color: 'bg-purple-500',
      description: 'Manage time slots'
    }
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-600"></div>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      <div className="bg-gradient-to-r from-cyan-600 to-cyan-700 text-white p-6 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold mb-2">Web Dashboard</h1>
        <p className="text-cyan-100 text-lg">Welcome {user?.username || 'User'} ({user?.role || 'web'})</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Enquiries</p>
              <p className="text-3xl font-bold text-blue-600">{stats.totalEnquiries}</p>
            </div>
            <div className="p-3 bg-blue-100 rounded-full">
              <MessageSquare className="h-8 w-8 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Pending Enquiries</p>
              <p className="text-3xl font-bold text-orange-600">{stats.pendingEnquiries}</p>
            </div>
            <div className="p-3 bg-orange-100 rounded-full">
              <Activity className="h-8 w-8 text-orange-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Appointments</p>
              <p className="text-3xl font-bold text-green-600">{stats.totalAppointments}</p>
            </div>
            <div className="p-3 bg-green-100 rounded-full">
              <CalendarCheck className="h-8 w-8 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Today's Appointments</p>
              <p className="text-3xl font-bold text-purple-600">{stats.todayAppointments}</p>
            </div>
            <div className="p-3 bg-purple-100 rounded-full">
              <TrendingUp className="h-8 w-8 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Available Slots</p>
              <p className="text-3xl font-bold text-cyan-600">{stats.availableSlots}</p>
            </div>
            <div className="p-3 bg-cyan-100 rounded-full">
              <CalendarClock className="h-8 w-8 text-cyan-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Booked Slots</p>
              <p className="text-3xl font-bold text-red-600">{stats.bookedSlots}</p>
            </div>
            <div className="p-3 bg-red-100 rounded-full">
              <Users className="h-8 w-8 text-red-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {quickActions.map((action, index) => {
            const IconComponent = action.icon;
            return (
              <button
                key={index}
                onClick={() => router.push(action.href)}
                className="flex flex-col items-center space-y-3 p-6 rounded-lg border-2 border-gray-200 hover:border-cyan-500 hover:bg-cyan-50 transition-all duration-200 group"
              >
                <div className={`p-4 rounded-xl ${action.color} group-hover:scale-110 transition-transform duration-200`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <div className="text-center">
                  <span className="font-semibold text-gray-900 block">{action.label}</span>
                  <span className="text-sm text-gray-600 mt-1 block">{action.description}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

