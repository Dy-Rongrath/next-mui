'use client';
import React, { createContext, useState, useMemo, useContext } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import CssBaseline from '@mui/material/CssBaseline';
import { lightTheme, darkTheme } from '@/theme/theme';

// Create a context to hold the theme state and toggle function
const ThemeContext = createContext({
  toggleTheme: () => {},
  mode: 'light',
});

// Create a custom hook for easy access to the theme context
export const useThemeContext = () => useContext(ThemeContext);

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  // Memoize the context value to prevent unnecessary re-renders
  const themeHelpers = useMemo(
    () => ({
      toggleTheme: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
      mode,
    }),
    [mode]
  );

  // Select the active theme based on the current mode
  const theme = useMemo(() => (mode === 'light' ? lightTheme : darkTheme), [mode]);

  return (
    <AppRouterCacheProvider>
      <ThemeContext.Provider value={themeHelpers}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </ThemeContext.Provider>
    </AppRouterCacheProvider>
  );
}

