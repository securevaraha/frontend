// lib/theme.ts
import { createTheme } from "@mui/material";

// 🌞 Light Theme
export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#1976d2" }, // Blue
    secondary: { main: "#9c27b0" }, // Purple
    background: {
      default: "#f5f5f5", // Light gray page background
      paper: "#ffffff",   // Card background
    },
  },
});

// 🌚 Dark Theme
export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#90caf9" }, // Light blue
    secondary: { main: "#f48fb1" }, // Pink
    background: {
      default: "#121212", // Dark background
      paper: "#1e1e1e",   // Card background
    },
  },
});

// 🌿 Green Theme
export const greenTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#388e3c" }, // Green
    secondary: { main: "#ff9800" }, // Orange
    background: {
      default: "#e8f5e9", // Light green
      paper: "#ffffff",
    },
  },
});

// ❤️ Red Theme
export const redTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#d32f2f" }, // Red
    secondary: { main: "#fdd835" }, // Yellow
    background: {
      default: "#ffebee", // Light pink
      paper: "#ffffff",
    },
  },
});

// 🌊 Teal Theme
export const tealTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#00796b" }, // Teal
    secondary: { main: "#ffc107" }, // Amber
    background: {
      default: "#e0f2f1", // Light teal
      paper: "#ffffff",
    },
  },
});

// 🟠 Orange Theme
export const orangeTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#e64a19" }, // Deep Orange
    secondary: { main: "#607d8b" }, // Blue Grey
    background: {
      default: "#fff3e0", // Light orange
      paper: "#ffffff",
    },
  },
});
