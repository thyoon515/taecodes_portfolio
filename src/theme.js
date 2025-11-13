// src/theme.js
import { createTheme } from "@mui/material/styles";

const common = {
  typography: {
    fontFamily: "system-ui, Avenir, Helvetica, Arial, sans-serif",
  },
};

export const getDesignTokens = (mode = "dark") => ({
  ...common,
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: { main: "#646cff" },
          secondary: { main: "#00DFA2" },
          background: { default: "#ffffff", paper: "#f5f5f5" },
          text: { primary: "#213547" },
        }
      : {
          primary: { main: "#646cff" },
          secondary: { main: "#00DFA2" },
          background: { default: "#0d1117", paper: "#121212" },
          text: { primary: "rgba(255,255,255,0.87)" },
        }),
  },
});
