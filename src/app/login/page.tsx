'use client';

import {
  Box,
  Button,
  MenuItem,
  Select,
  TextField,
  Typography,
  InputLabel,
  FormControl,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { securePost } from '../service/secureClient';

export default function LoginPage() {
  const [admins, setAdmins] = useState([]);
  const [form, setForm] = useState({
    username: '',
    password: '',
    admin_type: '',
  });

  const router = useRouter();

  useEffect(() => {
    const fetchAdmins = async () => {
      debugger;
      const url = '/api/login';
      const req = {adminList: true};
      const res = await securePost(url, req);
      setAdmins(res.admins);
    };

    fetchAdmins();
  }, []);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const url = '/api/login/user';
    const req = form;
    const res = await securePost(url, req);
    if (res.success) {
      sessionStorage.setItem('token', res.token);
      sessionStorage.setItem('role', res.admin_type);
      // alert('Login successful!');
      router.push('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor="#f5f5f5"
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          p: 4,
          bgcolor: 'white',
          borderRadius: 2,
          boxShadow: 3,
          width: 400,
        }}
      >
        <Typography variant="h5" gutterBottom textAlign="center">
          Hospital Management Login
        </Typography>

        <TextField
          fullWidth
          margin="normal"
          label="Username"
          name="username"
          value={form.username}
          onChange={handleChange}
          required
        />

        <TextField
          fullWidth
          margin="normal"
          label="Password"
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          required
        />

        <FormControl fullWidth margin="normal">
          <InputLabel id="admin-type-label">Admin Type</InputLabel>
          <Select
            labelId="admin-type-label"
            name="admin_type"
            value={form.admin_type}
            label="Admin Type"
            onChange={handleChange}
            required
          >
            {admins.map((admin: any) => (
              <MenuItem key={admin.admin_id} value={admin.admin_id}>
                {admin.admin_type}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Button
          variant="contained"
          type="submit"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          Log In
        </Button>
      </Box>
    </Box>
  );
}
