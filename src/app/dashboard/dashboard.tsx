// 'use client';
// import { useEffect, useState } from 'react';
// import {
//   Container,
//   Typography,
//   Paper,
//   Box,
//   Divider,
//   CircularProgress,
// } from '@mui/material';
// import { securePost } from '../service/secureClient';

// const formatCurrency = (amount: number): string =>
//   '₹' + amount.toLocaleString('en-IN', { minimumFractionDigits: 2 });

// const Dashboard = () => {
//   const [data, setData] = useState<{ currentMonthTotal: number; lastMonthTotal: number } | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchDashboardData = async () => {
//       try {
//         const url = '/api/dashboard/amounts';
//         const req = null;
//         const res = await securePost(url, req);
//         setData(res);
//       } catch (err) {
//         console.error('Error fetching dashboard data:', err);
//       } finally {
//         setLoading(false); // ✅ Fix: always stop loading
//       }
//     };

//     fetchDashboardData();
//   }, []);

//   return (
//     <>
//       <Container disableGutters maxWidth={false} sx={{ mt: 1, px: 2 }}>
//         <Paper elevation={3} sx={{
//           p: 2,
//           backgroundImage: 'url(/assets/parallax10.jpg)',
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           backgroundRepeat: 'no-repeat',
//           color: '#fff', // optional, if your image is dark
//           minHeight: '300px', // set height so image is visible
//         }}>
//           <Typography variant="h4" gutterBottom>
//             Dashboard
//           </Typography>
//         </Paper>
//       </Container>
//       <Box display="flex" gap={2} sx={{ px: 2, mt: 1 }}>
//         {/* Left Box */}
//         <Container disableGutters maxWidth={false} sx={{ width: '50%' }}>
//           <Paper elevation={3} sx={{ p: 2 }}>
//             <Typography variant="h6" gutterBottom>
//               Total Amount for Last Month:
//             </Typography>
//             <Divider sx={{ mb: 3 }} />
//             {loading ? (
//               <Box display="flex" justifyContent="center" py={4}>
//                 <CircularProgress />
//               </Box>
//             ) : (
//               <>
//                 <Typography variant="h6">
//                   <strong>{formatCurrency(data?.lastMonthTotal || 0)}</strong>
//                 </Typography>
//               </>
//             )}
//           </Paper>
//         </Container>

//         {/* Right Box */}
//         <Container disableGutters maxWidth={false} sx={{ width: '50%' }}>
//           <Paper elevation={3} sx={{ p: 2 }}>
//             <Typography variant="h6" gutterBottom>
//               Total Amount for Current Month:
//             </Typography>
//             <Divider sx={{ mb: 3 }} />
//             {loading ? (
//               <Box display="flex" justifyContent="center" py={4}>
//                 <CircularProgress />
//               </Box>
//             ) : (
//               <>
//                 <Typography variant="h6" sx={{ mt: 2 }}>
//                   <strong>{formatCurrency(data?.currentMonthTotal || 0)}</strong>
//                 </Typography>
//               </>
//             )}
//           </Paper>
//         </Container>
//       </Box>
//     </>
//   );
// };

// export default Dashboard;
// pages/dashboard/index.tsx

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";


import StatCard from "./component/StatCard";
import InventoryChart from "./component/InventoryChart";
import ExpenseProfitChart from "./component/ExpenseProfitChart";
import TopStoresChart from "./component/TopStoresChart";
import { Container } from "@mui/material";

export default function Dashboard() {
  return (

     <Box sx={{ flexGrow: 1 }}>
  <Container maxWidth="xl" >
    {/* Row 1 - Stat Cards */}
    <Grid container spacing={13}>
      <Grid xs={12} sm={6} md={3}>
        <StatCard title="Total Products" value="5483" icon="inventory" color="primary" />
      </Grid>
      <Grid xs={12} sm={6} md={3}>
        <StatCard title="Orders" value="2859" icon="shopping_cart" color="secondary" />
      </Grid>
      <Grid xs={12} sm={6} md={3}>
        <StatCard title="Total Stock" value="5483" icon="store" color="success" />
      </Grid>
      <Grid xs={12} sm={6} md={3}>
        <StatCard title="Out of Stock" value="38" icon="error" color="error" />
      </Grid>
    </Grid>

    {/* Row 2 - Charts */}
    <Grid container spacing={2} sx={{ mt: 1 }}>
      <Grid xs={12} md={4}>
        <InventoryChart sold={32} total={68} />
      </Grid>
      <Grid xs={12} md={4}>
        <ExpenseProfitChart />
      </Grid>
      <Grid xs={12} md={4}>
        <TopStoresChart />
      </Grid>
    </Grid>
  </Container>
</Box>

  );
}