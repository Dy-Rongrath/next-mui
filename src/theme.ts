"use client";
import { Roboto } from "next/font/google";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

// Configure the Roboto font from Google Fonts for Next.js optimization
const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

// Create the initial theme object
let theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
      contrastText: "#fff",
    },
    secondary: {
      main: "#9c27b0",
      contrastText: "#fff",
    },
    error: {
      main: "#d32f2f",
    },
    background: {
      default: "#f5f5f5",
      paper: "#fff",
    },
    success: { main: "#388e3c" },
    warning: { main: "#fbc02d" },
    info: { main: "#0288d1" },
  },
  typography: {
    // Apply the optimized Roboto font
    fontFamily: roboto.style.fontFamily,
    h1: {
      fontWeight: 700,
      fontSize: "2.5rem",
      letterSpacing: "-0.01562em",
    },
    h2: {
      fontWeight: 700,
      fontSize: "2rem",
      letterSpacing: "-0.00833em",
    },
    h3: {
      fontWeight: 700,
      fontSize: "1.75rem",
      letterSpacing: "0em",
    },
    body1: { fontSize: "1rem" },
    body2: { fontSize: "0.875rem" },
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        // Use a callback to access the theme's palette
        colorPrimary: ({ theme }) => ({
          backgroundColor: theme.palette.primary.main,
        }),
      },
    },
  },
});

// Apply responsive font sizes to the theme
theme = responsiveFontSizes(theme);

export default theme;
