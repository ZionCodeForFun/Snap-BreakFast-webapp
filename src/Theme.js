import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF6600",
    },
    secondary: {
      main: "#2D2D2D",
    },
  },
  typography: {
    fontFamily: "'Poppins', 'Roboto', sans-serif",
    h6: {
      fontWeight: 600,
    },
    body2: {
      fontSize: "0.9rem",
    },
  },
  shape: {
    borderRadius: 12,
  },
});

export default theme;
