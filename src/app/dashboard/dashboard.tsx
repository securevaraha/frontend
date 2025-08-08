'use client';
import { useEffect, useState } from 'react';
import {
  Container,
  Typography,
  Paper,
  Box,
  Divider,
  CircularProgress,
} from '@mui/material';
import { securePost } from '../service/secureClient';

const formatCurrency = (amount: number): string =>
  '₹' + amount.toLocaleString('en-IN', { minimumFractionDigits: 2 });

const Dashboard = () => {
  const [data, setData] = useState<{ currentMonthTotal: number; lastMonthTotal: number } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const url = '/api/dashboard/amounts';
        const req = null;
        const res = await securePost(url, req);
        setData(res);
      } catch (err) {
        console.error('Error fetching dashboard data:', err);
      } finally {
        setLoading(false); // ✅ Fix: always stop loading
      }
    };

    fetchDashboardData();
  }, []);

  return (
    <>
      <Container disableGutters maxWidth={false} sx={{ mt: 1, px: 2 }}>
        <Paper elevation={3} sx={{
          p: 2,
          backgroundImage: 'url(/assets/parallax10.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          color: '#fff', // optional, if your image is dark
          minHeight: '300px', // set height so image is visible
        }}>
          <Typography variant="h4" gutterBottom>
            Dashboard
          </Typography>
        </Paper>
      </Container>
      <Box display="flex" gap={2} sx={{ px: 2, mt: 1 }}>
        {/* Left Box */}
        <Container disableGutters maxWidth={false} sx={{ width: '50%' }}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Total Amount for Last Month:
            </Typography>
            <Divider sx={{ mb: 3 }} />
            {loading ? (
              <Box display="flex" justifyContent="center" py={4}>
                <CircularProgress />
              </Box>
            ) : (
              <>
                <Typography variant="h6">
                  <strong>{formatCurrency(data?.lastMonthTotal || 0)}</strong>
                </Typography>
              </>
            )}
          </Paper>
        </Container>

        {/* Right Box */}
        <Container disableGutters maxWidth={false} sx={{ width: '50%' }}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Total Amount for Current Month:
            </Typography>
            <Divider sx={{ mb: 3 }} />
            {loading ? (
              <Box display="flex" justifyContent="center" py={4}>
                <CircularProgress />
              </Box>
            ) : (
              <>
                <Typography variant="h6" sx={{ mt: 2 }}>
                  <strong>{formatCurrency(data?.currentMonthTotal || 0)}</strong>
                </Typography>
              </>
            )}
          </Paper>
        </Container>
      </Box>
    </>
  );
};

export default Dashboard;
