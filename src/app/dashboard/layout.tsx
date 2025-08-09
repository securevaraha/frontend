// app/dashboard/layout.tsx
'use client';

import { Box, Toolbar } from '@mui/material';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { SnackbarProvider } from './component/SnackbarProvider';
import Topbar from "./component/Topbar";



export default function DashboardLayout({ children }: { children: React.ReactNode }) {

  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      
      <Box component="main" sx={{ flexGrow: 1}}>
        
        <SnackbarProvider>
        <Box sx={{ p: 2}}>
          <Topbar />
            {children}
          </Box>
          </SnackbarProvider>
      </Box>
    </Box>
  );
}
