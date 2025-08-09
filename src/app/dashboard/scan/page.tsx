'use client';

import { useState } from 'react';
import {
  Box, Typography, Button, Dialog, DialogTitle, DialogContent,
  Paper,
  useTheme
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ScanTable from './components/ScanTable';
import ScanForm from './components/ScanForm';

export default function ScanPage() {
  const [open, setOpen] = useState(false);
  const [reload, setReload] = useState(false);
  const [editingScan, setEditingScan] = useState<any | null>(null);
    const theme = useTheme();

  const handleSuccess = () => {
    setOpen(false);
    setReload(prev => !prev); // Trigger table reload
    setEditingScan(null); // Clear edit data
  };

  return (
    <Box sx={{ padding: 0 }}>
            <Paper
        elevation={1}
        sx={{
          p: 2,
          borderRadius: 2,
          backgroundColor: theme.palette.background.paper,
        }}
      >
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography
            variant="h5"
            sx={{ fontWeight: 500, color: theme.palette.text.primary }}
          >
            Scan Management
          </Typography>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => {
              setEditingScan(null);
              setOpen(true);
            }}
            sx={{
              borderRadius: 2,
              textTransform: 'none',
              fontWeight: 500,
            }}
          >
            Add Hospital
          </Button>
        </Box>
      <ScanTable
        reload={reload}
        onEdit={(Scan: any) => {
          setEditingScan(Scan); // Set data for editing
          setOpen(true);
        }}
      />
      </Paper>

      <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="sm">
        <DialogTitle>{editingScan ? 'Edit Scan' : 'Add Scan'}</DialogTitle>
        <DialogContent>
          <ScanForm
            initialData={editingScan}
            onSuccess={handleSuccess}
          />
        </DialogContent>
      </Dialog>
    </Box>
  );
}
