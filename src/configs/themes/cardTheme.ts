import { createTheme } from "@mui/material";

export const cardTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },

  typography: {
    fontFamily: "'Spectral', serif",
    h5: {
      fontSize: "1.5rem",
      fontWeight: 700,
      color: "black",
      [`@media (max-width:600px)`]: {
        fontSize: "1.2rem",
      },
    },
    h6: {
      fontSize: "1rem",
      fontWeight: 400,
      color: "#686D76",
      lineHeight: 1.2,
      [`@media (max-width:600px)`]: {
        fontSize: "0.9rem",
      },
    },
  },

  palette: {
    primary: {
      main: "#6a1b9a",
      contrastText: "#fff",
    },
    secondary: {
      main: "#ff4081",
      contrastText: "#000",
    },
    background: {
      default: "#f0f0f0",
      paper: "#ffffff",
    },
    text: {
      primary: "#000000",
      secondary: "#686D76",
    },
  },

  spacing: 8,

  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          display: "flex",
          flexDirection: "row",
          width: "100%",
          maxWidth: "370px",
          height: "auto",
          borderRadius: "20px",
          boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",
          margin: "16px",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            transform: "scale(1.05)",
            boxShadow: "rgba(0, 0, 0, 0.3) 0px 10px 20px",
          },
          "&:focus-visible": {
            outline: "2px solid #6a1b9a",
            outlineOffset: "2px",
          },
        },
      },
    },

    MuiCardMedia: {
      styleOverrides: {
        root: {
          width: 150,
          height: "auto",
          objectFit: "cover",
        },
      },
    },

    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: "16px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          transition: "background-color 0.3s ease",
          "&:hover": {
            backgroundColor: "#f5f5f5",
          },
        },
      },
    },
    MuiFab: {
      styleOverrides: {
        root: {
          backgroundColor: "#f5f5f5", 
          "&:hover": {
            backgroundColor: "#b9b9b9", 
          },
        },
      },
    },
  },
});
