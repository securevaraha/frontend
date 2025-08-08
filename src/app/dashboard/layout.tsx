// app/dashboard/layout.tsx
'use client';

import { Box, Toolbar } from '@mui/material';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { SnackbarProvider } from './component/SnackbarProvider';



export default function DashboardLayout({ children }: { children: React.ReactNode }) {

  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1}}>
        <Header />
        <Toolbar />
        <SnackbarProvider>
        <Box sx={{ p: 2}}>
            {children}
          </Box>
          </SnackbarProvider>
      </Box>
    </Box>
  );
}
