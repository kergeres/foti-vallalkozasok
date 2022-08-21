import { createTheme } from "@mui/material/styles";
// import variables from "./_variables";
import variables from "./_variables.scss";

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
    // title
    h1: {
      fontSize: "32px",
      fontWeight: 700,
      textTransform: "uppercase",
      lineHeight: "32px",
      paddingTop: "50px",
    },
    // subtitle
    h6: {
      color: variables.mainGray,
    },
    subtitle1: {
      textTransform: "uppercase",
      fontFamily: variables.sansSeriff,
      fontWeight: 500,
    },
  },
});

export default theme;
