// context/ThemeContext.tsx
'use client';

import { createContext, useContext, useMemo, useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Box, CssBaseline } from '@mui/material';
import { lightTheme, darkTheme, greenTheme, redTheme, tealTheme, orangeTheme } from '@/lib/theme';

type ThemeMode = 'light' | 'dark' | 'green'|'red'|'teal'|'orange';

const ThemeContext = createContext({
  mode: 'light' as ThemeMode,
  setMode: (mode: ThemeMode) => {},
});

export const useThemeMode = () => useContext(ThemeContext);

export const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState<ThemeMode>('light');

  const theme = useMemo(() => {
    switch (mode) {
      case 'dark':
        return darkTheme;
      case 'green':
        return greenTheme;
        case 'red':
        return redTheme;
        case 'teal':
        return tealTheme;
        case 'orange':
        return orangeTheme;
      default:
        return lightTheme;
    }
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          sx={{
            bgcolor: theme.palette.background.default, // theme-based background
            minHeight: '100dvh',
          }}
        >
          {children}
        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
