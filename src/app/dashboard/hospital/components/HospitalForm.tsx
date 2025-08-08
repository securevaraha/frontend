'use client';
import { useEffect, useState } from 'react';
import {
  Box, TextField, Button, RadioGroup,
  FormControlLabel, Radio, Typography, CircularProgress
} from '@mui/material';
import { securePost } from '@/app/service/secureClient';
import { useSnackbar } from '../../component/SnackbarProvider';

interface Props {
  initialData?: any;
  onSuccess?: () => void;
}

export default function HospitalForm({ initialData, onSuccess }: Props) {
  const [form, setForm] = useState({
    h_id: '',
    name: '',
    h_short: '',
    h_type: '',
    h_contact: '',
    h_address: ''
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const isEdit = !!initialData;
  const { showSnackbar } = useSnackbar();

  useEffect(() => {
    if (initialData) {
      setForm(initialData);
    }
  }, [initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    setError('');
    const { name, h_type } = form;

    if (!name || !h_type) {
      setError('Hospital name and type are required.');
      return;
    }

    try {
      setLoading(true);
      debugger;
          const url = isEdit ? '/api/hospital/update' : '/api/hospital/add';
          const req = form;
          const res = await securePost(url,req);

      if (res.success) {
        if (onSuccess) onSuccess(); // Close dialog & refresh
        showSnackbar(res.message || 'Hospital save successfully', 'success');
      } else {
        setError(res.message || 'Failed to save hospital.');
        showSnackbar(res.message || 'Hospital save Failed', 'error');
      }
    } catch (err) {
      console.error(err);
      setError('Server error.');
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    if (onSuccess) onSuccess(); // Closes dialog
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 1 }}>
      {error && <Typography color="error">{error}</Typography>}
      <TextField
        name="name"
        label="Hospital Name"
        value={form.name} 
        onChange={handleChange}
        fullWidth
        required
      />
      <TextField
        name="h_short"
        label="Short Name"
        value={form.h_short}
        onChange={handleChange}
        fullWidth
      />
      <RadioGroup row name="h_type" value={form.h_type} onChange={handleChange}>
        <FormControlLabel value="Private" control={<Radio />} label="Private" />
        <FormControlLabel value="Government" control={<Radio />} label="Government" />
      </RadioGroup>
      <TextField
        name="h_address"
        label="Address"
        value={form.h_address}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        name="h_contact"
        label="Contact"
        value={form.h_contact}
        onChange={handleChange}
        fullWidth
      />
      <Button
        variant="contained"
        onClick={handleSubmit}
        disabled={loading}
      >
        {loading ? <CircularProgress size={24} /> : isEdit ? 'Update' : 'Add'}
      </Button>
      <Button
        variant="outlined"
        onClick={handleCancel}
        disabled={loading}
      >
        Cancel
      </Button>
    </Box>
  );
}
