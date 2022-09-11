import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../style/Theme";
import Header from "./header/header/Header";
import UploadForm from "./main/uploadForm";
import BusinessProfile from "./main/business/businessProfile";
import Footer from "./footer/Footer";
import Businesses from "./main/busenesses/Businesses";

const Layout = () => {
  const [searchV, setSearchV] = React.useState("");
  return (
    <ThemeProvider theme={theme}>
      <Header searchV={searchV} setSearchV={setSearchV} />
      {/* <UploadForm /> */}
      <Businesses searchV={searchV} />
      {/* <BusinessProfile /> */}
      {/* <Footer /> */}
    </ThemeProvider>
  );
};

export default Layout;
