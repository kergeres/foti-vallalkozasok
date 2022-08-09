import React from "react";
import { Button, Typography, typography } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import theme from "../style/Theme";

const Layout = () => {
  return (
    <ThemeProvider theme={theme}>
      <Button>feeeeeeeeeeeeeeeee</Button>
      <Typography>igen en vagyok a szoved</Typography>
    </ThemeProvider>
  );
};

export default Layout;
