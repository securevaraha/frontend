'use client';

import { useState, useEffect, useCallback } from 'react';
import { MessageSquare, Send, CheckCheck, Eye, XCircle, Download, RefreshCw, Filter, X, Copy } from 'lucide-react';

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
  const [selectedLog, setSelectedLog] = useState<WhatsAppLog | null>(null);
  const [copied, setCopied] = useState(false);

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

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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
    <div className="p-4 sm:p-6 space-y-6">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-5 rounded-xl shadow-lg">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div>
            <h1 className="text-2xl font-bold">WhatsApp Message Logs</h1>
            <p className="text-green-100 text-sm mt-1">Track delivery status and incoming messages</p>
          </div>
          <div className="flex gap-2">
            <button onClick={handleRefresh} className="flex items-center gap-2 px-4 py-2 bg-white/20 text-white rounded-lg hover:bg-white/30 transition">
              <RefreshCw className="h-4 w-4" /> Refresh
            </button>
            <button onClick={handleExport} className="flex items-center gap-2 px-4 py-2 bg-white text-green-700 rounded-lg hover:bg-green-50 transition font-medium">
              <Download className="h-4 w-4" /> Export CSV
            </button>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
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
        <div className="flex flex-wrap gap-4 items-end">
          <div>
            <label className="text-xs text-gray-500 block mb-1">Status</label>
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
          </div>
          <div>
            <label className="text-xs text-gray-500 block mb-1">From Date</label>
            <input
              type="date"
              value={fromDate}
              onChange={(e) => { setFromDate(e.target.value); setPage(1); }}
              className="px-3 py-2 border rounded-lg text-sm"
            />
          </div>
          <div>
            <label className="text-xs text-gray-500 block mb-1">To Date</label>
            <input
              type="date"
              value={toDate}
              onChange={(e) => { setToDate(e.target.value); setPage(1); }}
              className="px-3 py-2 border rounded-lg text-sm"
            />
          </div>
          <button
            onClick={() => { setStatusFilter(''); setFromDate(''); setToDate(''); setPage(1); }}
            className="px-4 py-2 text-sm text-red-600 border border-red-200 rounded-lg hover:bg-red-50"
          >
            Clear Filters
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
                <th className="px-4 py-3 text-left font-medium text-gray-600">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {loading ? (
                <tr><td colSpan={9} className="px-4 py-8 text-center text-gray-500">Loading...</td></tr>
              ) : logs.length === 0 ? (
                <tr><td colSpan={9} className="px-4 py-8 text-center text-gray-500">No logs found</td></tr>
              ) : (
                logs.map((log, idx) => (
                  <tr key={log.id || idx} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-gray-500">{log.id || (page - 1) * 20 + idx + 1}</td>
                    <td className="px-4 py-3">{getStatusBadge(log)}</td>
                    <td className="px-4 py-3 font-mono text-xs">{log.from_number || '-'}</td>
                    <td className="px-4 py-3 font-mono text-xs">{log.to_number || '-'}</td>
                    <td className="px-4 py-3">{log.status || log.event_type}</td>
                    <td className="px-4 py-3 text-xs">{log.text_body ? (log.text_body.length > 40 ? log.text_body.substring(0, 40) + '...' : log.text_body) : '-'}</td>
                    <td className="px-4 py-3 text-red-600 text-xs">{log.error_title ? (log.error_title.length > 30 ? log.error_title.substring(0, 30) + '...' : log.error_title) : '-'}</td>
                    <td className="px-4 py-3 text-xs text-gray-500 whitespace-nowrap">{formatDate(log.received_at)}</td>
                    <td className="px-4 py-3">
                      <button
                        onClick={() => setSelectedLog(log)}
                        className="text-xs text-blue-600 hover:text-blue-800 font-medium"
                      >
                        View
                      </button>
                    </td>
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

      {/* Detail Modal */}
      {selectedLog && (
        <div className="fixed inset-0 bg-black/30 z-50 flex items-center justify-center p-4" onClick={() => setSelectedLog(null)}>
          <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full max-h-[80vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between p-4 border-b bg-gray-50 rounded-t-xl">
              <h3 className="font-semibold text-gray-900">Log Details #{selectedLog.id}</h3>
              <button onClick={() => setSelectedLog(null)} className="p-1 hover:bg-gray-200 rounded">
                <X className="h-5 w-5 text-gray-500" />
              </button>
            </div>
            <div className="p-4 space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-gray-500">Event Type</label>
                  <p className="text-sm font-medium">{selectedLog.event_type}</p>
                </div>
                <div>
                  <label className="text-xs text-gray-500">Status</label>
                  <p className="text-sm">{getStatusBadge(selectedLog)}</p>
                </div>
                <div>
                  <label className="text-xs text-gray-500">From</label>
                  <p className="text-sm font-mono">{selectedLog.from_number || '-'}</p>
                </div>
                <div>
                  <label className="text-xs text-gray-500">To</label>
                  <p className="text-sm font-mono">{selectedLog.to_number || '-'}</p>
                </div>
                <div>
                  <label className="text-xs text-gray-500">Received At</label>
                  <p className="text-sm">{formatDate(selectedLog.received_at)}</p>
                </div>
                <div>
                  <label className="text-xs text-gray-500">Message Type</label>
                  <p className="text-sm">{selectedLog.message_type || '-'}</p>
                </div>
              </div>

              {selectedLog.message_id && (
                <div>
                  <label className="text-xs text-gray-500">Message ID</label>
                  <div className="flex items-center gap-2 mt-1">
                    <code className="text-xs bg-gray-100 p-2 rounded flex-1 break-all select-all">{selectedLog.message_id}</code>
                    <button onClick={() => handleCopy(selectedLog.message_id)} className="p-1.5 hover:bg-gray-100 rounded" title="Copy">
                      <Copy className="h-4 w-4 text-gray-500" />
                    </button>
                  </div>
                </div>
              )}

              {selectedLog.text_body && (
                <div>
                  <label className="text-xs text-gray-500">Message Text</label>
                  <div className="flex items-start gap-2 mt-1">
                    <p className="text-sm bg-blue-50 p-3 rounded flex-1 break-all select-all">{selectedLog.text_body}</p>
                    <button onClick={() => handleCopy(selectedLog.text_body)} className="p-1.5 hover:bg-gray-100 rounded" title="Copy">
                      <Copy className="h-4 w-4 text-gray-500" />
                    </button>
                  </div>
                </div>
              )}

              {(selectedLog.error_code || selectedLog.error_title) && (
                <div>
                  <label className="text-xs text-gray-500">Error Details</label>
                  <div className="flex items-start gap-2 mt-1">
                    <div className="bg-red-50 border border-red-200 p-3 rounded flex-1">
                      {selectedLog.error_code && <p className="text-xs text-red-500 mb-1">Code: {selectedLog.error_code}</p>}
                      <p className="text-sm text-red-700 break-all select-all">{selectedLog.error_title}</p>
                    </div>
                    <button onClick={() => handleCopy(`${selectedLog.error_code || ''} - ${selectedLog.error_title || ''}`)} className="p-1.5 hover:bg-gray-100 rounded" title="Copy">
                      <Copy className="h-4 w-4 text-gray-500" />
                    </button>
                  </div>
                </div>
              )}

              {copied && (
                <p className="text-xs text-green-600 text-center">Copied to clipboard!</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
