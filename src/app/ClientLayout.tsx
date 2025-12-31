'use client';

import { usePathname } from "next/navigation";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ToastProvider } from "@/context/ToastContext";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLoginPage = pathname === '/login' || pathname === '/Login';

  if (isLoginPage) {
    return (
      <ToastProvider>
        <main className="min-h-screen">{children}</main>
      </ToastProvider>
    );
  }

  return (
    <ToastProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </ToastProvider>
  );
}