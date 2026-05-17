'use client';

import { useState, useEffect, useCallback } from 'react';
import { MessageSquare, Send, CheckCheck, Eye, XCircle, Download, RefreshCw, Filter } from 'lucide-react';

interface WhatsAppLog {
  id: number;
  event_type: string;
  message_id: string;
  from_number: string;
  to_number: string;
  status: string;
  message_type: string;
  text_body: string;
  error_code: string;
  error_title: string;
  timestamp: string;
  received_at: string;
}

interface Stats {
  total: number;
  incoming: number;
  sent: number;
  delivered: number;
  read_count: number;
  failed: number;
  today_total: number;
}

export default function WhatsAppLogsPage() {
  const [logs, setLogs] = useState<WhatsAppLog[]>([]);
  const [stats, setStats] = useState<Stats>({ total: 0, incoming: 0, sent: 0, delivered: 0, read_count: 0, failed: 0, today_total: 0 });
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [statusFilter, setStatusFilter] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.varahasdc.co.in';

  const fetchStats = useCallback(async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/whatsapp/webhook-logs/stats`);
      const data = await res.json();
      if (data.success) setStats(data.stats);
    } catch (error) {
      console.error('Error fetching stats:', error);
    }
  }, [API_BASE_URL]);

  const fetchLogs = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({ page: page.toString(), limit: '20' });
      if (statusFilter) params.append('status', statusFilter);
      if (fromDate) params.append('from', fromDate);
      if (toDate) params.append('to', toDate);

      const res = await fetch(`${API_BASE_URL}/whatsapp/webhook-logs?${params}`);
      const data = await res.json();
      if (data.success) {
        setLogs(data.logs || []);
        setTotalPages(data.totalPages || 1);
        setTotal(data.total || 0);
      }
    } catch (error) {
      console.error('Error fetching logs:', error);
    } finally {
      setLoading(false);
    }
  }, [API_BASE_URL, page, statusFilter, fromDate, toDate]);

  useEffect(() => {
    fetchStats();
    fetchLogs();
  }, [fetchStats, fetchLogs]);

  const handleExport = () => {
    const params = new URLSearchParams();
    if (statusFilter) params.append('status', statusFilter);
    if (fromDate) params.append('from', fromDate);
    if (toDate) params.append('to', toDate);
    window.open(`${API_BASE_URL}/whatsapp/webhook-logs/export?${params}`, '_blank');
  };

  const handleRefresh = () => {
    fetchStats();
    fetchLogs();
  };

  const getStatusBadge = (log: WhatsAppLog) => {
    if (log.event_type === 'incoming_message') {
      return <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-700">Incoming</span>;
    }
    const statusColors: Record<string, string> = {
      sent: 'bg-yellow-100 text-yellow-700',
      delivered: 'bg-green-100 text-green-700',
      read: 'bg-purple-100 text-purple-700',
      failed: 'bg-red-100 text-red-700',
    };
    const color = statusColors[log.status] || 'bg-gray-100 text-gray-700';
    return <span className={`px-2 py-1 text-xs font-medium rounded-full ${color}`}>{log.status || log.event_type}</span>;
  };

  const formatDate = (dateStr: string) => {
    if (!dateStr) return '-';
    return new Date(dateStr).toLocaleString('en-IN', { timeZone: 'Asia/Calcutta' });
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">WhatsApp Message Logs</h1>
          <p className="text-gray-600 text-sm mt-1">Track delivery status and incoming messages</p>
        </div>
        <div className="flex gap-2">
          <button onClick={handleRefresh} className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition">
            <RefreshCw className="h-4 w-4" /> Refresh
          </button>
          <button onClick={handleExport} className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
            <Download className="h-4 w-4" /> Export CSV
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
        <div className="bg-white p-4 rounded-xl shadow border">
          <div className="flex items-center gap-2 mb-1">
            <MessageSquare className="h-4 w-4 text-gray-500" />
            <span className="text-xs text-gray-500">Total</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow border">
          <div className="flex items-center gap-2 mb-1">
            <MessageSquare className="h-4 w-4 text-blue-500" />
            <span className="text-xs text-gray-500">Incoming</span>
          </div>
          <p className="text-2xl font-bold text-blue-600">{stats.incoming}</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow border">
          <div className="flex items-center gap-2 mb-1">
            <Send className="h-4 w-4 text-yellow-500" />
            <span className="text-xs text-gray-500">Sent</span>
          </div>
          <p className="text-2xl font-bold text-yellow-600">{stats.sent}</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow border">
          <div className="flex items-center gap-2 mb-1">
            <CheckCheck className="h-4 w-4 text-green-500" />
            <span className="text-xs text-gray-500">Delivered</span>
          </div>
          <p className="text-2xl font-bold text-green-600">{stats.delivered}</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow border">
          <div className="flex items-center gap-2 mb-1">
            <Eye className="h-4 w-4 text-purple-500" />
            <span className="text-xs text-gray-500">Read</span>
          </div>
          <p className="text-2xl font-bold text-purple-600">{stats.read_count}</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow border">
          <div className="flex items-center gap-2 mb-1">
            <XCircle className="h-4 w-4 text-red-500" />
            <span className="text-xs text-gray-500">Failed</span>
          </div>
          <p className="text-2xl font-bold text-red-600">{stats.failed}</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow border">
          <div className="flex items-center gap-2 mb-1">
            <MessageSquare className="h-4 w-4 text-cyan-500" />
            <span className="text-xs text-gray-500">Today</span>
          </div>
          <p className="text-2xl font-bold text-cyan-600">{stats.today_total}</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-xl shadow border">
        <div className="flex items-center gap-2 mb-3">
          <Filter className="h-4 w-4 text-gray-500" />
          <span className="text-sm font-medium text-gray-700">Filters</span>
        </div>
        <div className="flex flex-wrap gap-4">
          <select
            value={statusFilter}
            onChange={(e) => { setStatusFilter(e.target.value); setPage(1); }}
            className="px-3 py-2 border rounded-lg text-sm"
          >
            <option value="">All Status</option>
            <option value="sent">Sent</option>
            <option value="delivered">Delivered</option>
            <option value="read">Read</option>
            <option value="failed">Failed</option>
          </select>
          <input
            type="date"
            value={fromDate}
            onChange={(e) => { setFromDate(e.target.value); setPage(1); }}
            className="px-3 py-2 border rounded-lg text-sm"
            placeholder="From Date"
          />
          <input
            type="date"
            value={toDate}
            onChange={(e) => { setToDate(e.target.value); setPage(1); }}
            className="px-3 py-2 border rounded-lg text-sm"
            placeholder="To Date"
          />
          <button
            onClick={() => { setStatusFilter(''); setFromDate(''); setToDate(''); setPage(1); }}
            className="px-3 py-2 text-sm text-gray-600 hover:text-gray-900"
          >
            Clear
          </button>
        </div>
      </div>

      {/* Logs Table */}
      <div className="bg-white rounded-xl shadow border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-4 py-3 text-left font-medium text-gray-600">#</th>
                <th className="px-4 py-3 text-left font-medium text-gray-600">Type</th>
                <th className="px-4 py-3 text-left font-medium text-gray-600">From</th>
                <th className="px-4 py-3 text-left font-medium text-gray-600">To</th>
                <th className="px-4 py-3 text-left font-medium text-gray-600">Status</th>
                <th className="px-4 py-3 text-left font-medium text-gray-600">Message</th>
                <th className="px-4 py-3 text-left font-medium text-gray-600">Error</th>
                <th className="px-4 py-3 text-left font-medium text-gray-600">Received At</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {loading ? (
                <tr><td colSpan={8} className="px-4 py-8 text-center text-gray-500">Loading...</td></tr>
              ) : logs.length === 0 ? (
                <tr><td colSpan={8} className="px-4 py-8 text-center text-gray-500">No logs found</td></tr>
              ) : (
                logs.map((log, idx) => (
                  <tr key={log.id || idx} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-gray-500">{log.id || (page - 1) * 20 + idx + 1}</td>
                    <td className="px-4 py-3">{getStatusBadge(log)}</td>
                    <td className="px-4 py-3 font-mono text-xs">{log.from_number || '-'}</td>
                    <td className="px-4 py-3 font-mono text-xs">{log.to_number || '-'}</td>
                    <td className="px-4 py-3">{log.status || log.event_type}</td>
                    <td className="px-4 py-3 max-w-[200px] truncate">{log.text_body || '-'}</td>
                    <td className="px-4 py-3 text-red-600 text-xs max-w-[150px] truncate">{log.error_title || '-'}</td>
                    <td className="px-4 py-3 text-xs text-gray-500">{formatDate(log.received_at)}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between px-4 py-3 border-t bg-gray-50">
            <span className="text-sm text-gray-600">Showing {logs.length} of {total} logs</span>
            <div className="flex gap-2">
              <button
                onClick={() => setPage(p => Math.max(1, p - 1))}
                disabled={page === 1}
                className="px-3 py-1 text-sm border rounded disabled:opacity-50"
              >
                Previous
              </button>
              <span className="px-3 py-1 text-sm">Page {page} of {totalPages}</span>
              <button
                onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="px-3 py-1 text-sm border rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
