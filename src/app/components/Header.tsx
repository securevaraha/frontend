'use client';

import { useEffect } from 'react';
import { AppBar, Button, MenuItem, Select, Toolbar, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useThemeMode } from '@/context/ThemeContext';

const menuItems = [
  { name: 'Light', value: 'light' },
  { name: 'Dark', value: 'dark' },
  { name: 'Green', value: 'green' },
  { name: 'Red', value: 'red' },
  { name: 'Teal', value: 'teal' },
  { name: 'Orange', value: 'orange' },
]

const Header = () => {
  const router = useRouter();
  const { mode, setMode } = useThemeMode();


  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    router.push('/login');
  };

  // Auto logout after 1 minute (60000 ms)
  useEffect(() => {
    const timeout = setTimeout(() => {
      logout();
    }, 10 * 60 * 1000); // 10 minute

    return () => clearTimeout(timeout); // cleanup
  }, []);

  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6" noWrap>
          VDC
        </Typography>

        <Select
          value={mode}
          onChange={(e) => setMode(e.target.value as any)}
          size="small"
          sx={{ color: 'white', borderColor: 'white', mx: 2 }}
        >
          {menuItems.map((item) => (
            <MenuItem key={item.value} value={item.value}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
        <Button color="inherit" onClick={logout}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
