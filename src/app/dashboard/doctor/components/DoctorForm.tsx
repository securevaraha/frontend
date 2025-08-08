'use client';
import { useEffect, useState } from 'react';
import {
  Box, TextField, Button, Typography, CircularProgress, Checkbox,
  FormControlLabel
} from '@mui/material';
import { securePost } from '@/app/service/secureClient';
import { useSnackbar } from '../../component/SnackbarProvider';

interface Props {
  initialData?: any;
  onSuccess?: () => void;
}

export default function DoctorForm({ initialData, onSuccess }: Props) {
const [form, setForm] = useState<{
  d_id: string;
  d_name: string;
  isActive: boolean | number;
}>({
  d_id: '',
  d_name: '',
  isActive: 0,
});
const { showSnackbar } = useSnackbar();

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const isEdit = !!initialData;

  useEffect(() => {
    if (initialData) {
      setForm(initialData);
    }
  }, [initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    setForm(prev => ({
      ...prev,
      [name]: value,
      [name]: type === 'checkbox' ? (checked ? 1 : 0) : value,
    }));
  };


  const handleSubmit = async () => {
    setError('');
    const { d_name, isActive } = form;

    if (!d_name ) {
      setError('Doctor name and isActive are required.');
      return;
    }

    try {
      setLoading(true);
      debugger;
      const url = isEdit ? '/api/doctor/update' : '/api/doctor/add';
      console.log(form);
      let v = form;
      v.isActive = v.isActive == 1? true: false;
      const req = form;
      const res = await securePost(url, req);

      if ( res.success) {
        if (onSuccess) onSuccess(); // Close dialog & refresh
        showSnackbar(res.message || 'Doctor save successfully', 'success');
      } else {
        setError(res.message || 'Failed to save Doctor.');
        showSnackbar(res.message || 'Doctor save Failed', 'error');
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
        name="d_name"
        label="Category Name"
        value={form.d_name}
        onChange={handleChange}
        fullWidth
        required
      />
      <FormControlLabel
        label="Is Active"
        control={
          <Checkbox
            checked={form.isActive === 1}
            onChange={handleChange}
            name="isActive"
          />
        }
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
