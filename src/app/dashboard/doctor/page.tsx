'use client';

import { useState } from 'react';
import {
  Box, Typography, Button, Dialog, DialogTitle, DialogContent
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DoctorTable from './components/DoctorTable';
import DoctorForm from './components/DoctorForm';

export default function DoctorPage() {
  const [open, setOpen] = useState(false);
  const [reload, setReload] = useState(false);
  const [editingDoctor, setEditingDoctor] = useState<any | null>(null);

  const handleSuccess = () => {
    setOpen(false);
    setReload(prev => !prev); // Trigger table reload
    setEditingDoctor(null); // Clear edit data
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
      <Typography variant="h4" gutterBottom>
        Doctor Management
      </Typography>

      <Button
        variant="contained"
        startIcon={<AddIcon />}
        onClick={() => {
          setEditingDoctor(null); // Clear existing data for new entry
          setOpen(true);
        }}
      >
        Add Doctor
      </Button>
      </Box>

      <DoctorTable
        reload={reload}
        onEdit={(Doctor: any) => {
          setEditingDoctor(Doctor); // Set data for editing
          setOpen(true);
        }}
      />

      <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="sm">
        <DialogTitle>{editingDoctor ? 'Edit Doctor' : 'Add Doctor'}</DialogTitle>
        <DialogContent>
          <DoctorForm
            initialData={editingDoctor}
            onSuccess={handleSuccess}
          />
        </DialogContent>
      </Dialog>
    </Box>
  );
}
