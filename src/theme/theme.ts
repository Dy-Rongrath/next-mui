'use client';
import { Roboto } from 'next/font/google';
import { createTheme, responsiveFontSizes, ThemeOptions } from '@mui/material/styles';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

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
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '10px 24px',
        },
      },
    },
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
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
           border: `1px solid ${theme.palette.divider}`,
        }),
      },
    }
  },
};

// Light theme with a coffee shop palette
let lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { 
        main: '#6f4e37', // Coffee Brown
        light: '#a07d61',
        dark: '#4d3625',
        contrastText: '#fff' 
    },
    secondary: { 
        main: '#a52a2a', // Muted Red for accents
        light: '#d35f5f',
        dark: '#7f0000',
        contrastText: '#fff' 
    },
    background: { default: '#f5f5f5', paper: '#ffffff' }, // Off-white background
    text: {
        primary: '#3e2723', // Dark brown text
        secondary: '#5d4037'
    }
  },
}, commonSettings);

// Dark theme with a coffee shop palette
let darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { 
        main: '#a07d61', // Lighter coffee for dark mode
        light: '#d2ad8e',
        dark: '#7f4f39',
        contrastText: 'rgba(0, 0, 0, 0.87)' 
    },
    secondary: { 
        main: '#d35f5f', // Lighter red for dark mode
        light: '#ff9e80',
        dark: '#c56832',
        contrastText: 'rgba(0, 0, 0, 0.87)' 
    },
    background: { default: '#121212', paper: '#1e1e1e' },
    text: {
        primary: '#ffffff',
        secondary: '#bdbdbd'
    }
  },
}, commonSettings);

lightTheme = responsiveFontSizes(lightTheme);
darkTheme = responsiveFontSizes(darkTheme);

export { lightTheme, darkTheme };
