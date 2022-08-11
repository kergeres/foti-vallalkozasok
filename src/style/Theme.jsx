import { createTheme } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    FovaBlue: {
      main: "#094d82",
    },
    FovaGreen: {
      main: "#016D33",
    },
    FovaYellow: {
      main: "#F6B801",
    },
  },
  typography: {
    fontFamily: "'Roboto slab', serif;",
    capitalNav: {
      fontFamily: "font-family: 'Montserrat', sans-serif;",
    },
    smallNav: {
      fontFamily: "font-family: 'Open Sans', sans-serif;",
    },
  },
});

export default theme;
