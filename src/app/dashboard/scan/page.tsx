'use client';

import { useState } from 'react';
import {
  Box, Typography, Button, Dialog, DialogTitle, DialogContent
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ScanTable from './components/ScanTable';
import ScanForm from './components/ScanForm';

export default function ScanPage() {
  const [open, setOpen] = useState(false);
  const [reload, setReload] = useState(false);
  const [editingScan, setEditingScan] = useState<any | null>(null);

  const handleSuccess = () => {
    setOpen(false);
    setReload(prev => !prev); // Trigger table reload
    setEditingScan(null); // Clear edit data
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
      <Typography variant="h4" gutterBottom>
        Scan Management
      </Typography>

      <Button
        variant="contained"
        startIcon={<AddIcon />}
        onClick={() => {
          setEditingScan(null); // Clear existing data for new entry
          setOpen(true);
        }}
      >
        Add Scan
      </Button>
      </Box>

      <ScanTable
        reload={reload}
        onEdit={(Scan: any) => {
          setEditingScan(Scan); // Set data for editing
          setOpen(true);
        }}
      />

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
