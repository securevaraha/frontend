'use client';

import { useState, useEffect } from 'react';
import { CalendarClock, Calendar, Clock, CheckCircle, XCircle, Plus, Edit, Trash2, Download } from 'lucide-react';

interface TimeSlot {
  id: number;
  date: string;
  startTime: string;
  endTime: string;
  status: 'available' | 'booked' | 'blocked';
  patientName?: string;
  cro?: string;
}

export default function ScheduleAvailabilityPage() {
  const [slots, setSlots] = useState<TimeSlot[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newSlot, setNewSlot] = useState({ startTime: '', endTime: '', status: 'available' as const });
  const [statusFilter, setStatusFilter] = useState<'all' | 'available' | 'booked' | 'blocked'>('all');

  useEffect(() => {
    fetchSchedule();
  }, [selectedDate, statusFilter]);

  const fetchSchedule = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({ date: selectedDate });
      if (statusFilter !== 'all') {
        params.append('status', statusFilter);
      }
      
      const response = await fetch(`https://varahasdc.co.in/api/web/schedule?${params}`);
      const data = await response.json();
      
      if (data.success) {
        setSlots(data.slots || []);
      } else {
        console.error('Failed to fetch schedule:', data.error);
        setSlots([]);
      }
    } catch (error) {
      console.error('Error fetching schedule:', error);
      setSlots([]);
    } finally {
      setLoading(false);
    }
  };

  const addTimeSlot = async () => {
    if (!newSlot.startTime || !newSlot.endTime) {
      alert('Please provide both start time and end time');
      return;
    }
    
    try {
      const response = await fetch('https://varahasdc.co.in/api/web/schedule', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          date: selectedDate,
          startTime: newSlot.startTime,
          endTime: newSlot.endTime,
          status: newSlot.status
        })
      });
      
      const data = await response.json();
      
      if (data.success) {
        setShowAddModal(false);
        setNewSlot({ startTime: '', endTime: '', status: 'available' });
        fetchSchedule(); // Refresh the list
      } else {
        alert(data.error || 'Failed to add time slot');
      }
    } catch (error) {
      console.error('Error adding slot:', error);
      alert('Error adding time slot. Please try again.');
    }
  };

  const updateSlotStatus = async (id: number, status: 'available' | 'booked' | 'blocked') => {
    try {
      const response = await fetch(`https://varahasdc.co.in/api/web/schedule/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status })
      });
      
      const data = await response.json();
      
      if (data.success) {
        fetchSchedule(); // Refresh the list
      } else {
        alert(data.error || 'Failed to update slot status');
      }
    } catch (error) {
      console.error('Error updating slot:', error);
      alert('Error updating slot status. Please try again.');
    }
  };

  const deleteSlot = async (id: number) => {
    if (!confirm('Are you sure you want to delete this time slot?')) return;
    
    try {
      const response = await fetch(`https://varahasdc.co.in/api/web/schedule/${id}`, {
        method: 'DELETE'
      });
      
      const data = await response.json();
      
      if (data.success) {
        fetchSchedule(); // Refresh the list
      } else {
        alert(data.error || 'Failed to delete slot');
      }
    } catch (error) {
      console.error('Error deleting slot:', error);
      alert('Error deleting slot. Please try again.');
    }
  };

  const getStatusBadge = (status: string) => {
    const badges = {
      available: 'bg-green-100 text-green-800 border-green-200',
      booked: 'bg-blue-100 text-blue-800 border-blue-200',
      blocked: 'bg-red-100 text-red-800 border-red-200'
    };
    return badges[status as keyof typeof badges] || badges.available;
  };

  const getStatusIcon = (status: string) => {
    if (status === 'available') return <CheckCircle className="h-4 w-4" />;
    if (status === 'booked') return <Clock className="h-4 w-4" />;
    return <XCircle className="h-4 w-4" />;
  };

  const exportToExcel = () => {
    const csvContent = [
      ['Date', 'Start Time', 'End Time', 'Status', 'Patient Name', 'CRO'],
      ...slots.map(slot => [
        selectedDate,
        slot.startTime,
        slot.endTime,
        slot.status,
        slot.patientName || '',
        slot.cro || ''
      ])
    ].map(row => row.join(',')).join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `schedule-${selectedDate}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const availableCount = slots.filter(s => s.status === 'available').length;
  const bookedCount = slots.filter(s => s.status === 'booked').length;
  const blockedCount = slots.filter(s => s.status === 'blocked').length;

  return (
    <div className="p-6 space-y-6">
      <div className="bg-gradient-to-r from-cyan-600 to-cyan-700 text-white p-6 rounded-xl shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Schedule Availability</h1>
            <p className="text-cyan-100">Manage time slots and availability</p>
          </div>
          <CalendarClock className="h-12 w-12 text-white/80" />
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Available Slots</p>
              <p className="text-2xl font-bold text-green-600">{availableCount}</p>
            </div>
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Booked Slots</p>
              <p className="text-2xl font-bold text-blue-600">{bookedCount}</p>
            </div>
            <Clock className="h-8 w-8 text-blue-600" />
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Blocked Slots</p>
              <p className="text-2xl font-bold text-red-600">{blockedCount}</p>
            </div>
            <XCircle className="h-8 w-8 text-red-600" />
          </div>
        </div>
      </div>

      {/* Date Selection and Add Button */}
      <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-100">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Calendar className="h-5 w-5 text-gray-400" />
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as any)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            >
              <option value="all">All Status</option>
              <option value="available">Available</option>
              <option value="booked">Booked</option>
              <option value="blocked">Blocked</option>
            </select>
          </div>
          <button
            onClick={() => setShowAddModal(true)}
            className="flex items-center gap-2 px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors"
          >
            <Plus className="h-5 w-5" />
            Add Time Slot
          </button>
          <button
            onClick={exportToExcel}
            className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            <Download className="h-4 w-4" />
            Export
          </button>
        </div>
      </div>

      {/* Time Slots Table */}
      {loading ? (
        <div className="flex items-center justify-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-600"></div>
        </div>
      ) : slots.length === 0 ? (
        <div className="bg-white p-12 rounded-xl shadow-lg border border-gray-100 text-center">
          <CalendarClock className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600 text-lg">No time slots found for this date</p>
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-cyan-50 to-blue-50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Time Slot</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Duration</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Patient Info</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {slots.map((slot, index) => {
                  const duration = slot.startTime && slot.endTime ? 
                    `${Math.abs(new Date(`1970-01-01T${slot.endTime}:00`).getTime() - new Date(`1970-01-01T${slot.startTime}:00`).getTime()) / (1000 * 60)} min` : 
                    'N/A';
                  
                  return (
                    <tr key={slot.id} className={`hover:bg-gray-50 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-gray-25'}`}>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            slot.status === 'available' ? 'bg-gradient-to-br from-green-500 to-green-600' :
                            slot.status === 'booked' ? 'bg-gradient-to-br from-blue-500 to-blue-600' :
                            'bg-gradient-to-br from-red-500 to-red-600'
                          }`}>
                            <Clock className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900">{slot.startTime} - {slot.endTime}</div>
                            <div className="text-sm text-gray-500">Slot ID: {slot.id}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-gray-600 font-medium">{duration}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium border ${getStatusBadge(slot.status)}`}>
                          {getStatusIcon(slot.status)}
                          {slot.status.charAt(0).toUpperCase() + slot.status.slice(1)}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        {slot.patientName ? (
                          <div>
                            <div className="font-medium text-gray-900">{slot.patientName}</div>
                            <div className="text-sm text-gray-500">CRO: {slot.cro}</div>
                          </div>
                        ) : (
                          <span className="text-gray-400 italic">No patient assigned</span>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          {slot.status === 'available' && (
                            <button
                              onClick={() => updateSlotStatus(slot.id, 'blocked')}
                              className="px-3 py-1 bg-red-500 text-white text-xs rounded-lg hover:bg-red-600 transition-colors"
                            >
                              Block
                            </button>
                          )}
                          {slot.status === 'booked' && (
                            <button
                              onClick={() => updateSlotStatus(slot.id, 'available')}
                              className="px-3 py-1 bg-green-500 text-white text-xs rounded-lg hover:bg-green-600 transition-colors"
                            >
                              Free Up
                            </button>
                          )}
                          {slot.status === 'blocked' && (
                            <button
                              onClick={() => updateSlotStatus(slot.id, 'available')}
                              className="px-3 py-1 bg-green-500 text-white text-xs rounded-lg hover:bg-green-600 transition-colors"
                            >
                              Unblock
                            </button>
                          )}
                          <button
                            onClick={() => deleteSlot(slot.id)}
                            className="px-3 py-1 bg-gray-500 text-white text-xs rounded-lg hover:bg-gray-600 transition-colors"
                          >
                            <Trash2 className="w-3 h-3" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Add Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full">
            <div className="p-6">
              <h2 className="text-xl font-bold mb-4 text-gray-900">Add Time Slot</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Start Time</label>
                  <input
                    type="time"
                    value={newSlot.startTime}
                    onChange={(e) => setNewSlot({ ...newSlot, startTime: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">End Time</label>
                  <input
                    type="time"
                    value={newSlot.endTime}
                    onChange={(e) => setNewSlot({ ...newSlot, endTime: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                  <select
                    value={newSlot.status}
                    onChange={(e) => setNewSlot({ ...newSlot, status: e.target.value as any })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    <option value="available">Available</option>
                    <option value="blocked">Blocked</option>
                  </select>
                </div>
              </div>
              <div className="flex gap-3 mt-6">
                <button
                  onClick={addTimeSlot}
                  className="flex-1 px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors font-medium"
                >
                  Add Slot
                </button>
                <button
                  onClick={() => {
                    setShowAddModal(false);
                    setNewSlot({ startTime: '', endTime: '', status: 'available' });
                  }}
                  className="flex-1 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

