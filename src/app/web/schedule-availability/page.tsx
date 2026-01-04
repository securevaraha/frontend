'use client';

import { useState, useEffect } from 'react';
import { CalendarClock, Calendar, Clock, CheckCircle, XCircle, Plus, Edit, Trash2 } from 'lucide-react';

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

  useEffect(() => {
    fetchSchedule();
  }, [selectedDate]);

  const fetchSchedule = async () => {
    setLoading(true);
    try {
      const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://varahasdc.co.in/api';
      // Convert YYYY-MM-DD to DD-MM-YYYY format
      const dateParts = selectedDate.split('-');
      const formattedDate = dateParts.length === 3 && dateParts[0].length === 4
        ? `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`
        : selectedDate;
      
      const response = await fetch(`${API_BASE_URL}/web/schedule?date=${formattedDate}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      });
      
      if (response.ok) {
        const data = await response.json();
        if (data.success && data.slots) {
          setSlots(data.slots.map((slot: any) => ({
            id: slot.id,
            date: slot.date,
            startTime: slot.startTime || '',
            endTime: slot.endTime || '',
            status: slot.status || 'available',
            patientName: slot.patientName || undefined,
            cro: slot.cro || undefined
          })));
        } else {
          setSlots([]);
        }
      } else {
        const errorData = await response.json().catch(() => ({}));
        console.error('Failed to fetch schedule:', errorData);
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
      const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://varahasdc.co.in/api';
      // Convert YYYY-MM-DD to DD-MM-YYYY format
      const dateParts = selectedDate.split('-');
      const formattedDate = dateParts.length === 3 && dateParts[0].length === 4
        ? `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`
        : selectedDate;
      
      const response = await fetch(`${API_BASE_URL}/web/schedule`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          date: formattedDate,
          startTime: newSlot.startTime,
          endTime: newSlot.endTime,
          status: newSlot.status
        })
      });
      
      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          setShowAddModal(false);
          setNewSlot({ startTime: '', endTime: '', status: 'available' });
          fetchSchedule();
        } else {
          alert(`Failed to add time slot: ${data.error || 'Unknown error'}`);
        }
      } else {
        const errorData = await response.json().catch(() => ({}));
        alert(`Failed to add time slot: ${errorData.error || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Error adding time slot:', error);
      alert('Network error: Unable to add time slot');
    }
  };

  const updateSlotStatus = async (id: number, status: string) => {
    try {
      const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://varahasdc.co.in/api';
      const response = await fetch(`${API_BASE_URL}/web/schedule/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status })
      });
      
      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          fetchSchedule();
        } else {
          alert(`Failed to update slot: ${data.error || 'Unknown error'}`);
        }
      } else {
        const errorData = await response.json().catch(() => ({}));
        alert(`Failed to update slot: ${errorData.error || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Error updating slot status:', error);
      alert('Network error: Unable to update slot status');
    }
  };

  const deleteSlot = async (id: number) => {
    if (!confirm('Are you sure you want to delete this time slot?')) return;
    
    try {
      const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://varahasdc.co.in/api';
      const response = await fetch(`${API_BASE_URL}/web/schedule/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
      });
      
      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          fetchSchedule();
        } else {
          alert(`Failed to delete slot: ${data.error || 'Unknown error'}`);
        }
      } else {
        const errorData = await response.json().catch(() => ({}));
        alert(`Failed to delete slot: ${errorData.error || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Error deleting slot:', error);
      alert('Network error: Unable to delete slot');
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
          </div>
          <button
            onClick={() => setShowAddModal(true)}
            className="flex items-center gap-2 px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors"
          >
            <Plus className="h-5 w-5" />
            Add Time Slot
          </button>
        </div>
      </div>

      {/* Time Slots Grid */}
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {slots.map((slot) => (
            <div
              key={slot.id}
              className={`bg-white p-4 rounded-xl shadow-lg border-2 ${
                slot.status === 'available' ? 'border-green-200' :
                slot.status === 'booked' ? 'border-blue-200' : 'border-red-200'
              } hover:shadow-xl transition-shadow`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-gray-600" />
                  <span className="font-semibold text-gray-900">
                    {slot.startTime} - {slot.endTime}
                  </span>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusBadge(slot.status)} flex items-center gap-1`}>
                  {getStatusIcon(slot.status)}
                  {slot.status.charAt(0).toUpperCase() + slot.status.slice(1)}
                </span>
              </div>

              {slot.patientName && (
                <div className="mb-3">
                  <p className="text-sm text-gray-600">Patient: {slot.patientName}</p>
                  {slot.cro && <p className="text-sm text-gray-600">CRO: {slot.cro}</p>}
                </div>
              )}

              <div className="flex gap-2">
                {slot.status === 'available' && (
                  <button
                    onClick={() => updateSlotStatus(slot.id, 'blocked')}
                    className="flex-1 px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors text-sm"
                  >
                    Block
                  </button>
                )}
                {slot.status === 'booked' && (
                  <button
                    onClick={() => updateSlotStatus(slot.id, 'available')}
                    className="flex-1 px-3 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-sm"
                  >
                    Free Up
                  </button>
                )}
                {slot.status === 'blocked' && (
                  <button
                    onClick={() => updateSlotStatus(slot.id, 'available')}
                    className="flex-1 px-3 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-sm"
                  >
                    Unblock
                  </button>
                )}
                <button
                  onClick={() => deleteSlot(slot.id)}
                  className="px-3 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Add Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-xl max-w-md w-full mx-4">
            <h2 className="text-2xl font-bold mb-4">Add Time Slot</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Start Time</label>
                <input
                  type="time"
                  value={newSlot.startTime}
                  onChange={(e) => setNewSlot({ ...newSlot, startTime: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">End Time</label>
                <input
                  type="time"
                  value={newSlot.endTime}
                  onChange={(e) => setNewSlot({ ...newSlot, endTime: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                <select
                  value={newSlot.status}
                  onChange={(e) => setNewSlot({ ...newSlot, status: e.target.value as any })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  <option value="available">Available</option>
                  <option value="blocked">Blocked</option>
                </select>
              </div>
            </div>
            <div className="flex gap-4 mt-6">
              <button
                onClick={addTimeSlot}
                className="flex-1 px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors"
              >
                Add Slot
              </button>
              <button
                onClick={() => {
                  setShowAddModal(false);
                  setNewSlot({ startTime: '', endTime: '', status: 'available' });
                }}
                className="flex-1 px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

