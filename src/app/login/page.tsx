"use client";

import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Link,
  useTheme,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Paper,
} from "@mui/material";
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
  const theme = useTheme();

  useEffect(() => {
    const fetchAdmins = async () => {
      debugger;
      const url = '/api/login';
      const req = { adminList: true };
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
      sessionStorage.setItem('user', res.user);
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
      bgcolor={theme.palette.background.default}
    >
      <Paper
        elevation={2}
        sx={{
          width: '60%',    // example fixed width
          p: 0,
          borderRadius: 2,
          backgroundColor: theme.palette.background.paper,
        }}
      >
        <Box
          sx={{
            height: "70vh",
            display: "flex",
            backgroundColor: theme.palette.primary.main,
            color: "text.primary",
            fontSize: 14,
            userSelect: "none",
          }}
        >
          {/* Left side - logo + illustration */}
          <Box
            sx={{
              flex: 1,
              position: "relative",
              // backgroundColor: "#eaf0f0",
              clipPath: "polygon(0 0, 80% 0, 70% 100%, 0% 100%)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              p: 4,
            }}
          >
            {/* Logo top-left */}
            <Box sx={{ width: 200 }}>

              <Typography
                variant="h4"
                sx={{ color: theme.palette.background.default, fontWeight: 600, mt: 1 }}
              >
                Hospital Management
              </Typography>
              <Typography variant="caption" sx={{color: theme.palette.background.default,fontSize:'xl',fontWeight: 600,  mt: 2 }}>
              Welcome, Please Login
            </Typography>
            </Box>

            {/* Illustration center */}
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mt: 6,
              }}
            >
            </Box>
                  <Box
                    component="img"
                    src="/assets/4.png"
                    alt="Scientist working"
                    sx={{
                      width: '30dvh',
                      objectFit: "cover",
                      marginLeft:'70px',
                      height:'33dvh'
                    }}
                  />

            {/* Bottom text */}
            <Typography variant="caption" sx={{color: theme.palette.background.default, mt: 2 }}>
              2015-25 varaha SDC
            </Typography>
          </Box>

          {/* Right side - login form */}
          <Box
            sx={{
              flex: 1,
              maxWidth: 420,
              px: 6,
              py: 10,
              backgroundColor: "background.paper",
              borderTopLeftRadius: 32,
              borderBottomLeftRadius: 32,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography variant="h4" sx={{color: theme.palette.primary.main, mb: 2, fontWeight: 600 }}>
              Login
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


            <Link
              href="/"
              underline="hover"
              sx={{ fontSize: 12, mt: 1, alignSelf: "flex-end", color: "primary.main" }}
            >
              Forgot Password?
            </Link>

            <Button variant="contained" sx={{ mt: 4, mb: 2 }} onClick={handleSubmit}>
              Login
            </Button>


          </Box>
        </Box>
      </Paper>
    </Box>
  );
}