import {createTheme} from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: "#8ADD37",
    },
    secondary: {
      main: "#333333",
      light: "#70758F"
    },
    text: {
      primary: "#333333",
      secondary: "#1F242A",
    },
  },
  typography: {
    h2: {
      fontWeight: "400",
      lineHeight: "1.4",
    },
    body1: {
      fontWeight: "400",
      fontSize: "20px",
      lineHeight: "1.2",
    },
    body2: {
      fontWeight: "400",
      fontSize: "20px",
      lineHeight: "1.1",
      color: "#A1A4B5"
    },
  },
});

export default theme;