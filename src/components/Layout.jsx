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
  const [searchType, setSearchType] = React.useState(null);
  const [isOpenNowCheck, setIsOpenNowCheck] = React.useState(false);

  return (
    <ThemeProvider theme={theme}>
      <Header
        searchType={searchType}
        setSearchType={setSearchType}
        searchV={searchV}
        setSearchV={setSearchV}
        isOpenNowCheck={isOpenNowCheck}
        setIsOpenNowCheck={setIsOpenNowCheck}
      />
      {/* <UploadForm /> */}
      <Businesses
        isOpenNowCheck={isOpenNowCheck}
        setIsOpenNowCheck={setIsOpenNowCheck}
        searchType={searchType}
        searchV={searchV}
      />
      {/* <BusinessProfile /> */}
      {/* <Footer /> */}
    </ThemeProvider>
  );
};

export default Layout;
