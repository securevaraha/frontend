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

export default function CategoryForm({ initialData, onSuccess }: Props) {
  const [form, setForm] = useState({
    c_id: '',
    c_name: '',
    c_type: '',
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
    const { c_name, c_type } = form;

    if (!c_name || !c_type) {
      setError('Category name and type are required.');
      return;
    }

    try {
      setLoading(true);
      debugger;
          const url = isEdit ? '/api/category/update' : '/api/category/add';
          const req = form;
          const res = await securePost(url,req);

      if ( res.success) {
        if (onSuccess) onSuccess(); // Close dialog & refresh
        showSnackbar(res.message || 'Category save successfully', 'success');
      } else {
        setError(res.message || 'Failed to save Category.');
        showSnackbar(res.message || 'Category save Failed', 'error');
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
        name="c_name"
        label="Category Name"
        value={form.c_name} 
        onChange={handleChange}
        fullWidth
        required
      />
      <RadioGroup row name="c_type" value={form.c_type} onChange={handleChange}>
        <FormControlLabel value="Free" control={<Radio />} label="Free" />
        <FormControlLabel value="Paid" control={<Radio />} label="Paid" />
      </RadioGroup>
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
