'use client';
import { useState } from 'react';
import Link from 'next/link';
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Collapse,
  useTheme,
} from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

const drawerWidth = 240;

const menuItems = [
  { name: 'Dashboard', path: '/dashboard' },
  {
    name: 'Master',
    children: [
      { name: 'Hospital', path: '/dashboard/hospital' },
      { name: 'Category', path: '/dashboard/category' },
      { name: 'Doctor', path: '/dashboard/doctor' },
      { name: 'Scan', path: '/dashboard/scan' },
    ],
  },
  // Add more items as needed
];

const Sidebar = () => {
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});
  const theme = useTheme();

  const handleToggle = (name: string) => {
    setOpenMenus((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: theme.palette.primary.main,
          // color: theme.palette.primary.main,
        },
      }}
    >
      <Toolbar />
      <List>
        {menuItems.map((item) => (
          <div key={item.name}>
            <ListItem disablePadding>
              {item.path ? (
                <ListItemButton component={Link} href={item.path.toLowerCase()}>
                  <ListItemText primary={item.name} />
                </ListItemButton>
              ) : (
                <ListItemButton onClick={() => handleToggle(item.name)}>
                  <ListItemText primary={item.name} />
                  {openMenus[item.name] ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
              )}
            </ListItem>

            {item.children && (
              <Collapse in={openMenus[item.name]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {item.children.map((child) => (
                    <ListItem key={child.name} disablePadding sx={{ pl: 4 }}>
                      <ListItemButton component={Link} href={child.path.toLowerCase()}>
                        <ListItemText primary={child.name} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            )}
          </div>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
