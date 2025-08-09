'use client';

import { useState } from 'react';
import {
  Box, Typography, Button, Dialog, DialogTitle, DialogContent,
  useTheme,
  Paper
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DoctorTable from './components/DoctorTable';
import DoctorForm from './components/DoctorForm';


export default function DoctorPage() {
  const [open, setOpen] = useState(false);
  const [reload, setReload] = useState(false);
  const [editingDoctor, setEditingDoctor] = useState<any | null>(null);
    const theme = useTheme();

  const handleSuccess = () => {
    setOpen(false);
    setReload(prev => !prev); // Trigger table reload
    setEditingDoctor(null); // Clear edit data
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
            Doctor Management
          </Typography>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => {
              setEditingDoctor(null);
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
      <DoctorTable
        reload={reload}
        onEdit={(Doctor: any) => {
          setEditingDoctor(Doctor); // Set data for editing
          setOpen(true);
        }}
      />
      </Paper>
      

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
