'use client';
import { useEffect, useState } from 'react';
import {
  Box, TextField, Button, RadioGroup,
  FormControlLabel, Radio, Typography, CircularProgress,
  Checkbox
} from '@mui/material';
import { securePost } from '@/app/service/secureClient';
import { useSnackbar } from '../../component/SnackbarProvider';

interface Props {
  initialData?: any;
  onSuccess?: () => void;
}

export default function ScanForm({ initialData, onSuccess }: Props) {
const [form, setForm] = useState<{
  s_id: string;
  s_name: string;
  isActive: boolean | number;
}>({
  s_id: '',
  s_name: '',
  isActive: 0,
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
    const { name, value, type, checked } = e.target;

    setForm(prev => ({
      ...prev,
      [name]: value,
      [name]: type === 'checkbox' ? (checked ? 1 : 0) : value,
    }));
  };

  const handleSubmit = async () => {
    setError('');
    const { s_name, isActive } = form;

    if (!s_name ) {
      setError('Category name and type are required.');
      return;
    }

    try {
      setLoading(true);
      debugger;
          const url = isEdit ? '/api/scan/update' : '/api/scan/add';
          const req = form;
          const res = await securePost(url,req);

      if (res.success) {
        if (onSuccess) onSuccess(); // Close dialog & refresh
        showSnackbar(res.message || 'Scan save successfully', 'success');
      } else {
        setError(res.message || 'Failed to save Scan.');
        showSnackbar(res.message || 'Scan save Failed', 'error');
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
        name="s_name"
        label="Scan Name"
        value={form.s_name} 
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
