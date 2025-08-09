"use client";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "@/lib/createEmotionCache";
import { ReactNode } from "react";
import { ThemeContextProvider } from "@/context/ThemeContext";

const clientSideEmotionCache = createEmotionCache();

export function Providers({ children }: { children: ReactNode }) {
  return (
    <CacheProvider value={clientSideEmotionCache}>
      <ThemeContextProvider>
        <CssBaseline />
        {children}
      </ThemeContextProvider>
    </CacheProvider>
  );
}
