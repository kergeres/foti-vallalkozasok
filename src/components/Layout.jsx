import React from "react";
import { Button, Typography, typography } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import theme from "../style/Theme";
import Header from "./header/header/Header";
import UploadForm from "./main/uploadForm";
import BusinessProfile from "./main/business/businessProfile";
import Footer from "./footer/Footer";
import Businesses from "./main/busenesses/Businesses";

const Layout = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <UploadForm />
      {/* <Businesses /> */}
      {/* <BusinessProfile /> */}
      {/* <Footer /> */}
    </ThemeProvider>
  );
};

export default Layout;
