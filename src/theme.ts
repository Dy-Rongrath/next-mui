'use client';
import { Roboto } from 'next/font/google';
import { createTheme, responsiveFontSizes, ThemeOptions } from '@mui/material/styles';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

// Common settings to be shared across all themes
const commonSettings: ThemeOptions = {
  typography: {
    fontFamily: roboto.style.fontFamily,
    h1: { fontWeight: 700, fontSize: '3rem' },
    h2: { fontWeight: 700, fontSize: '2.5rem' },
    h3: { fontWeight: 600, fontSize: '2rem' },
    h4: { fontWeight: 600, fontSize: '1.75rem' },
    h5: { fontWeight: 500, fontSize: '1.5rem' },
    h6: { fontWeight: 500, fontSize: '1.25rem' },
    button: { textTransform: 'none', fontWeight: 600 },
  },
  shape: {
    borderRadius: 8, // A more standard border radius
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true, // Flatter, more modern buttons
      },
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '10px 24px', // Consistent button padding
        },
      },
    },
    MuiAppBar: {
      defaultProps: {
        elevation: 0, // No shadow for a cleaner look
      },
      styleOverrides: {
        // Use a callback to dynamically set styles based on the theme
        colorPrimary: ({ theme }) => ({
          backgroundColor: theme.palette.background.paper,
          color: theme.palette.text.primary,
          borderBottom: `1px solid ${theme.palette.divider}`,
        }),
      },
    },
    MuiCard: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: ({ theme }) => ({
          border: `1px solid ${theme.palette.divider}`,
          borderRadius: theme.shape.borderRadius,
        }),
      },
    },
    MuiPaper: {
       defaultProps: {
        elevation: 0,
      },
       styleOverrides: {
        root: ({ theme }) => ({
           // Match card styling for consistency
           border: `1px solid ${theme.palette.divider}`,
        }),
      },
    }
  },
};

// Light theme configuration
let lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { 
        main: '#1976d2',
        light: '#42a5f5',
        dark: '#1565c0',
        contrastText: '#fff' 
    },
    secondary: { 
        main: '#9c27b0',
        light: '#ba68c8',
        dark: '#7b1fa2',
        contrastText: '#fff' 
    },
    background: { default: '#f5f5f5', paper: '#ffffff' },
    text: {
        primary: '#212121',
        secondary: '#757575'
    }
  },
}, commonSettings);

// Dark theme configuration
let darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { 
        main: '#90caf9',
        light: '#e3f2fd',
        dark: '#42a5f5',
        contrastText: 'rgba(0, 0, 0, 0.87)' 
    },
    secondary: { 
        main: '#f48fb1',
        light: '#f8bbd0',
        dark: '#f06292',
        contrastText: 'rgba(0, 0, 0, 0.87)' 
    },
    background: { default: '#121212', paper: '#1e1e1e' },
    text: {
        primary: '#ffffff',
        secondary: '#bdbdbd'
    }
  },
}, commonSettings);

// Make font sizes responsive
lightTheme = responsiveFontSizes(lightTheme);
darkTheme = responsiveFontSizes(darkTheme);

export { lightTheme, darkTheme };

