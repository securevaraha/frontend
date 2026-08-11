'use client';

import { useRouter } from 'next/navigation';
import { ShieldAlert, ArrowLeft, LogOut } from 'lucide-react';

interface AccessDeniedProps {
  /** Role that is actually required to view the page that was requested */
  requiredRole?: string;
  /** Role the current user is logged in as */
  currentRole?: string;
  message?: string;
}

export default function AccessDenied({ requiredRole, currentRole, message }: AccessDeniedProps) {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('user');
    router.push('/vdc_login');
  };

  const dashboardForRole: Record<string, string> = {
    superadmin: '/superadmin/dashboard',
    admin: '/admin/dashboard',
    reception: '/reception/dashboard',
    doctor: '/doctor/dashboard',
    console: '/console/dashboard',
    inventory: '/inventory/dashboard',
    web: '/web/dashboard',
  };

  const goToOwnDashboard = () => {
    const href = (currentRole && dashboardForRole[currentRole]) || '/vdc_login';
    router.push(href);
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-br from-slate-50 via-red-50 to-rose-50 p-6">
      <div className="max-w-md w-full text-center bg-white rounded-2xl shadow-xl border border-red-100 p-8">
        <div className="relative mx-auto mb-6 w-20 h-20">
          <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-rose-600 rounded-full blur opacity-40"></div>
          <div className="relative w-20 h-20 bg-gradient-to-r from-red-500 to-rose-600 rounded-full flex items-center justify-center mx-auto">
            <ShieldAlert className="h-10 w-10 text-white" />
          </div>
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-2">Access Denied</h1>
        <p className="text-gray-600 mb-1">
          {message || "You don't have permission to view this page."}
        </p>
        {requiredRole && (
          <p className="text-sm text-gray-500 mb-6">
            This section requires the <span className="font-semibold capitalize">{requiredRole}</span> role
            {currentRole ? (
              <> — you are logged in as <span className="font-semibold capitalize">{currentRole}</span>.</>
            ) : (
              '.'
            )}
          </p>
        )}
        {!requiredRole && <div className="mb-6" />}

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={goToOwnDashboard}
            className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-medium hover:from-sky-600 hover:to-indigo-700 transition-all duration-200 shadow-md"
          >
            <ArrowLeft className="h-4 w-4" />
            Go to my dashboard
          </button>
          <button
            onClick={handleLogout}
            className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-all duration-200"
          >
            <LogOut className="h-4 w-4" />
            Switch account
          </button>
        </div>
      </div>
    </div>
  );
}
