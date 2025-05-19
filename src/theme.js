// theme.js
import { createTheme, lighten, darken } from "@mui/material/styles";
import Color from "./enum/colors";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: Color.primary,
      light: lighten(Color.primary, 0.18),
      dark: darken(Color.primary, 0.22),
      contrastText: "#fff",
    },
    secondary: {
      main: Color.secondary,
      light: lighten(Color.secondary, 0.18),
      dark: darken(Color.secondary, 0.22),
      contrastText: "#fff",
    },
    info: {
      main: Color.tertiary,
      light: lighten(Color.tertiary, 0.18),
      dark: darken(Color.tertiary, 0.22),
      contrastText: "#fff",
    },
    background: {
      default: lighten(Color.secondary, 0.96), // ainda mais claro
      paper: "#fff",
    },
    text: {
      primary: "#1a2233",
      secondary: "#4b587c",
      disabled: "#b0b8c9",
    },
  },
  typography: {
    fontFamily: "Inter, Roboto, Arial, sans-serif",
    h1: { fontWeight: 800, letterSpacing: -1, fontSize: "2.8rem" },
    h2: { fontWeight: 700, letterSpacing: -0.5, fontSize: "2.2rem" },
    h3: { fontWeight: 700, fontSize: "1.7rem" },
    h4: { fontWeight: 700, fontSize: "1.3rem" },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
    body1: { fontSize: "1.05rem" },
    body2: { fontSize: "0.97rem" },
    button: { fontWeight: 600, textTransform: "none" },
  },
  shape: {
    borderRadius: 14,
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 18,
          boxShadow: "0 2px 16px 0 rgba(23,90,191,0.07)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          fontWeight: 600,
          letterSpacing: 0.2,
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingTop: 24,
          paddingBottom: 24,
        },
      },
    },
  },
  shadows: Array(25).fill("0px 2px 16px rgba(23,90,191,0.07)"),
});

export default theme;
