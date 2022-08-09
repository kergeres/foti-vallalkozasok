import React from "react";
import { Button, Typography, typography } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import theme from "../style/Theme";
import Header from "./header/Header";
import UploadForm from "./main/uploadForm";

const Layout = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <UploadForm />
    </ThemeProvider>
  );
};

export default Layout;
