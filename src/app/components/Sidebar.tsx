"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Box,
  Typography,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  useTheme,
} from "@mui/material";
import {
  Dashboard,
  Inventory2,
  ShoppingCart,
  ShoppingBag,
  BarChart,
  SupportAgent,
  Settings,
  Logout,
  ExpandLess,
  ExpandMore,
  LocalHospital,
  Category,
  Person,
  MedicalServices,
} from "@mui/icons-material";
import CircleONotchIcon from "../dashboard/component/icon";

const menuItems = [
  { name: "Dashboard", path: "/dashboard", icon: <Dashboard /> },
  {
    name: "Master",
    icon: <Inventory2 />,
    children: [
      { name: "Hospital", path: "/dashboard/hospital", icon: <LocalHospital /> },
      { name: "Category", path: "/dashboard/category", icon: <Category /> },
      { name: "Doctor", path: "/dashboard/doctor", icon: <Person /> },
      { name: "Scan", path: "/dashboard/scan", icon: <MedicalServices /> },
    ],
  }
  // { name: "Orders", path: "/dashboard/orders", icon: <ShoppingCart /> },
  // { name: "Purchase", path: "/dashboard/purchase", icon: <ShoppingBag /> },
  // { name: "Reporting", path: "/dashboard/reporting", icon: <BarChart /> },
  // { name: "Support", path: "/dashboard/support", icon: <SupportAgent /> },
  // { name: "Settings", path: "/dashboard/settings", icon: <Settings /> },
];

export default function Sidebar() {
  const theme = useTheme();
  const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({});

  const handleToggle = (name: string) => {
    setOpenMenus((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <Box
      sx={{
        width: 240,
        height: "100vh",
        bgcolor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        display: "flex",
        flexDirection: "column",
        p: 2,
      }}
    >
      {/* Profile Section */}
      <Box display="flex" flexDirection="column" alignItems="center" mb={3}>
        <CircleONotchIcon sx={{ color: "#3b5998", fontSize: 40 }} />
        <Typography variant="h4" fontWeight="bold">
          VDC
        </Typography>
      </Box>

      {/* Menu Items */}
      <List sx={{ flex: 1 }}>
        {menuItems.map((item) => (
          <Box key={item.name}>
            {!item.children ? (
              // Single-level item
              <Link href={item.path || "#"} style={{ textDecoration: "none", color: "inherit" }}>
                <ListItemButton
                  sx={{
                    borderRadius: "8px",
                    mb: 0.5,
                    "&:hover": { backgroundColor: theme.palette.primary.light },
                  }}
                >
                  <ListItemIcon sx={{ color: theme.palette.primary.contrastText, minWidth: 40 }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </Link>
            ) : (
              // Parent with children
              <>
                <ListItemButton
                  onClick={() => handleToggle(item.name)}
                  sx={{
                    borderRadius: "8px",
                    mb: 0.5,
                    "&:hover": { backgroundColor: theme.palette.primary.light },
                  }}
                >
                  <ListItemIcon sx={{ color: theme.palette.primary.contrastText, minWidth: 40 }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.name} />
                  {openMenus[item.name] ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={openMenus[item.name]} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.path}
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        <ListItemButton
                          sx={{
                            pl: 6,
                            borderRadius: "8px",
                            mb: 0.5,
                            "&:hover": { backgroundColor: theme.palette.primary.light },
                          }}
                        >
                          <ListItemIcon sx={{ color: theme.palette.primary.contrastText, minWidth: 40 }}>
                            {child.icon}
                          </ListItemIcon>
                          <ListItemText primary={child.name} />
                        </ListItemButton>
                      </Link>
                    ))}
                  </List>
                </Collapse>
              </>
            )}
          </Box>
        ))}
      </List>
    </Box>
  );
}