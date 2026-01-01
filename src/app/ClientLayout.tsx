'use client';

import { usePathname } from "next/navigation";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ToastProvider } from "@/context/ToastContext";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  // Website routes that should show header and footer
  const websiteRoutes = [
    '/',
    '/about',
    '/services', 
    '/facilities',
    '/dual-energy',
    '/contact',
    '/privacy-policy',
    '/terms-and-conditions',
    '/sitemap'
  ];
  
  const showHeaderFooter = websiteRoutes.includes(pathname);

  return (
    <ToastProvider>
      {showHeaderFooter ? (
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      ) : (
        <main className="min-h-screen">{children}</main>
      )}
    </ToastProvider>
  );
}