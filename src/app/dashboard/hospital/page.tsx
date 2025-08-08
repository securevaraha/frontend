'use client';

import { useState } from 'react';
import {
  Box, Typography, Button, Dialog, DialogTitle, DialogContent
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import HospitalTable from './components/HospitalTable';
import HospitalForm from './components/HospitalForm';

export default function HospitalPage() {
  const [open, setOpen] = useState(false);
  const [reload, setReload] = useState(false);
  const [editingHospital, setEditingHospital] = useState<any | null>(null);

  const handleSuccess = () => {
    setOpen(false);
    setReload(prev => !prev); // Trigger table reload
    setEditingHospital(null); // Clear edit data
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h4" gutterBottom >
          Hospital Management
        </Typography>

        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => {
            setEditingHospital(null); // Clear existing data for new entry
            setOpen(true);
          }}
        >
          Add Hospital
        </Button>
      </Box>

      <HospitalTable
        reload={reload}
        onEdit={(hospital: any) => {
          setEditingHospital(hospital); // Set data for editing
          setOpen(true);
        }}
      />

      <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="sm">
        <DialogTitle>{editingHospital ? 'Edit Hospital' : 'Add Hospital'}</DialogTitle>
        <DialogContent>
          <HospitalForm
            initialData={editingHospital}
            onSuccess={handleSuccess}
          />
        </DialogContent>
      </Dialog>
    </Box>
  );
}
