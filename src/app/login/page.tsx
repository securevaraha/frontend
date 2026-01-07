'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Hospital, User, Lock, Eye, EyeOff, Shield, Stethoscope, UserCheck, Monitor, Sparkles, Package, Globe } from 'lucide-react';
import Image from 'next/image';

export default function Login() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [selectedRole, setSelectedRole] = useState('');

  const roles = [
    { id: 'superadmin', name: 'Super Admin', icon: Shield, color: 'from-red-500 to-red-600' },
    { id: 'admin', name: 'Admin', icon: Shield, color: 'from-blue-500 to-blue-600' },
    { id: 'reception', name: 'Reception', icon: UserCheck, color: 'from-rose-500 to-rose-600' },
    { id: 'doctor', name: 'Doctor', icon: Stethoscope, color: 'from-emerald-500 to-emerald-600' },
    { id: 'console', name: 'Console', icon: Monitor, color: 'from-violet-500 to-violet-600' },
    { id: 'inventory', name: 'Inventory', icon: Package, color: 'from-orange-500 to-orange-600' },
    { id: 'web', name: 'Web Login', icon: Globe, color: 'from-cyan-500 to-cyan-600' },
  ];

  const handleRoleSelect = (role: any) => {
    setSelectedRole(role.id);
    setFormData({ username: '', password: '' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://varahasdc.co.in/api';
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('user', JSON.stringify(data.user));
        
        switch(data.user.role) {
          case 'superadmin':
            router.push('/superadmin/dashboard');
            break;
          case 'admin':
            router.push('/admin/dashboard');
            break;
          case 'doctor':
            router.push('/doctor/dashboard');
            break;
          case 'reception':
            router.push('/reception/dashboard');
            break;
          case 'console':
            router.push('/console/dashboard');
            break;
          case 'inventory':
            router.push('/inventory/dashboard');
            break;
          case 'web':
            router.push('/web/dashboard');
            break;
          default:
            router.push('/dashboard');
        }
      } else {
        setError(data.error || 'Login failed');
      }
    } catch (error) {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0056AE] via-[#2E92ED] to-[#0056AE] flex">
      {/* Left Side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 flex-col justify-center items-center p-12 text-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0056AE]/20 via-[#2E92ED]/10 to-[#0056AE]/20"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-20 w-24 h-24 bg-white/5 rounded-full blur-2xl animate-bounce" style={{animationDelay: '1s'}}></div>
        
        <div className="relative z-10 text-center max-w-md">
          {/* Logo Section */}
          <div className="mb-12 relative">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-white/20 rounded-full blur-xl animate-pulse"></div>
              <Image
                src="/Varaha logo@4x 2.png"
                alt="Varaha SDC Logo"
                width={140}
                height={140}
                className="relative mx-auto mb-6 rounded-full ring-4 ring-white/40 shadow-2xl transform hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
            <div className="space-y-2">
              <h1 className="text-5xl font-bold mb-2 text-white" style={{fontFamily: 'Roboto, sans-serif', fontWeight: 700}}>
                Varaha SDC
              </h1>
              <div className="h-1 w-32 bg-gradient-to-r from-transparent via-white to-transparent mx-auto rounded-full"></div>
              <p className="text-xl opacity-90 font-medium" style={{fontFamily: 'Roboto, sans-serif'}}>
                Advanced CT Scan Management System
              </p>
            </div>
          </div>
          
          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-4 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:rotate-12 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="font-bold text-sm mb-1 text-white">256 Slice CT</h3>
              <p className="text-xs opacity-80">Technology</p>
            </div>
            
            <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-4 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:rotate-12 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="font-bold text-sm mb-1 text-white">Same Day</h3>
              <p className="text-xs opacity-80">Service</p>
            </div>
            
            <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-4 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:rotate-12 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="font-bold text-sm mb-1 text-white">24/7 Emergency</h3>
              <p className="text-xs opacity-80">Care</p>
            </div>
            
            <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-4 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:rotate-12 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zM4 18v-4h2v-2H4v-2h2v-2H4V6h2V4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-2h-2v2H4z"/>
                </svg>
              </div>
              <h3 className="font-bold text-sm mb-1 text-white">Expert Medical</h3>
              <p className="text-xs opacity-80">Team</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 bg-gray-50">
        <div className="w-full max-w-md">
          {/* Login Card */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="lg:hidden mb-6">
                <Image
                  src="/Varaha logo@4x 2.png"
                  alt="Varaha SDC Logo"
                  width={80}
                  height={80}
                  className="mx-auto rounded-full ring-4 ring-[#2E92ED]/20 shadow-lg"
                  priority
                />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Welcome Back
              </h2>
              <p className="text-gray-600">
                Sign in to access your medical dashboard
              </p>
            </div>

          {/* Role Selection */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Select Your Role
            </label>
            <div className="grid grid-cols-2 gap-3">
              {roles.map((role) => {
                const IconComponent = role.icon;
                return (
                  <button
                    key={role.id}
                    type="button"
                    onClick={() => handleRoleSelect(role)}
                    className={`p-3 rounded-xl text-sm transition-all duration-300 border-2 ${
                      selectedRole === role.id
                        ? `bg-gradient-to-r ${role.color} text-white border-transparent shadow-lg`
                        : `bg-gray-50 hover:bg-gray-100 text-gray-700 border-gray-200 hover:border-gray-300`
                    }`}
                  >
                    <IconComponent className={`w-5 h-5 mx-auto mb-2 ${
                      selectedRole === role.id ? 'text-white' : 'text-gray-500'
                    }`} />
                    <div className="font-medium">{role.name}</div>
                  </button>
                );
              })}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-lg">
                <div className="text-red-700 text-sm">{error}</div>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Username
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  required
                  value={formData.username}
                  onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E92ED] focus:border-transparent transition-all duration-200"
                  placeholder="Enter your username"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full pl-10 pr-12 py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E92ED] focus:border-transparent transition-all duration-200"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading || !selectedRole}
              className="w-full bg-gradient-to-r from-[#0056AE] to-[#2E92ED] text-white py-3 px-4 rounded-lg text-sm font-medium hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#2E92ED] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            >
              {loading ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Signing in...</span>
                </div>
              ) : (
                <span>Sign In to Dashboard</span>
              )}
            </button>
          </form>

          <div className="mt-6 text-center">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <p className="text-xs text-gray-500 font-medium">Secure Medical System</p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}