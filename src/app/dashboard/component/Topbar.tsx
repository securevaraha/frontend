"use client";
import { AppBar, Toolbar, Typography, Box, IconButton, Avatar, useTheme, Menu, MenuItem, Divider } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useRouter, usePathname } from "next/navigation";
import { useThemeMode } from "@/context/ThemeContext";
import { useState, useEffect } from "react";

const menuItems = [
    { name: "Light", value: "light" },
    { name: "Dark", value: "dark" },
    { name: "Green", value: "green" },
    { name: "Red", value: "red" },
    { name: "Teal", value: "teal" },
    { name: "Orange", value: "orange" },
];

function formatTitle(pathname: string) {
    const lastSegment = pathname.split("/").filter(Boolean).pop() || "dashboard";
    return lastSegment
        .replace(/-/g, " ")
        .replace(/\b\w/g, (char) => char.toUpperCase());
}

export default function Topbar() {
    const pathname = usePathname();
    const pageTitle = formatTitle(pathname);
    const theme = useTheme();
    const router = useRouter();
    const { mode, setMode } = useThemeMode();

    const [username, setUsername] = useState("username");
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const menuOpen = Boolean(anchorEl);

    useEffect(() => {
        const user = sessionStorage.getItem("user");
        if (user) setUsername(user);
    }, []);

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const logout = () => {
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("role");
        sessionStorage.removeItem("user");
        router.push("/login");
    };

    // Auto logout after 10 minutes
    useEffect(() => {
        const timeout = setTimeout(logout, 10 * 60 * 1000);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <AppBar position="static" color="transparent" elevation={0} sx={{ mb: 3, bgcolor: theme.palette.primary.light }}>
            <Toolbar sx={{ justifyContent: "space-between" }}>
                <Typography variant="h6">{pageTitle}</Typography>

                <Box display="flex" alignItems="center" gap={2}>
                    <IconButton color="inherit">
                        <NotificationsIcon />
                    </IconButton>

                    {/* Username & Avatar trigger */}
                    <Box display="flex" alignItems="center" sx={{ cursor: "pointer" }} onClick={handleMenuOpen}>
                        <Avatar>{username.charAt(0)}</Avatar>
                        <Typography sx={{ ml: 1 }}>{username}</Typography>
                    </Box>

                    {/* Dropdown Menu */}
                    <Menu
                        anchorEl={anchorEl}
                        open={menuOpen}
                        onClose={handleMenuClose}
                        anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "right",
                        }}
                        transformOrigin={{
                            vertical: "top",
                            horizontal: "right",
                        }}
                    >
                        {/* Theme Menu Items */}
                        {menuItems.map((item) => (
                            <MenuItem
                                key={item.value}
                                selected={mode === item.value}
                                onClick={() => {
                                    setMode(item.value as any);
                                    handleMenuClose();
                                }}
                            >
                                {item.name}
                            </MenuItem>
                        ))}

                        <Divider />

                        {/* Logout Button */}
                        <MenuItem
                            onClick={() => {
                                handleMenuClose();
                                logout();
                            }}
                            sx={{ color: "error.main", fontWeight: "bold" }}
                        >
                            Logout
                        </MenuItem>
                    </Menu>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
