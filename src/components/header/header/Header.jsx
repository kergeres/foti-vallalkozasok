import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import { Scrollbars } from "react-custom-scrollbars";
import { styled, alpha } from "@mui/material/styles";
import { Grid } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import logo from "../../../logo.png";
import BusinessTypeCard from "../BusinessTypeCard";
import cvts from "../../../data/cvts";
import classes from "./Header.css";
import SearchIcon from "@mui/icons-material/Search";

const drawerWidth = 240;

function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleChange = (event) => {
    props.setIsOpenNowCheck(event.target.checked);
  };
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <img src={logo} className="App-logo" alt="logo" />
      </Typography>
      <Divider />
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        sx={{
          height: 120,
          display: "flex",
        }}
        component="nav"
      >
        <Toolbar
        // sx={{
        //   display: "flex",
        //   justifyContent: "center",
        // }}
        >
          {/* <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none" },
            }} //ez volt a css baki
          ></Typography>
          <Box
            sx={{
              width: "100%",
              display: "flex",
            }}
          >
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              {!navigator.userAgent.match(/Android/i) &&
                !navigator.userAgent.match(/iPhone/i) && (
                  <Grid item xs={0}>
                    <img
                      src={logo}
                      sx={{ display: "none" }}
                      className="App-logo"
                      alt="logo"
                    />
                  </Grid>
                )}
              <Grid
                item
                sx={{
                  height: "110%",
                  alignSelf: "stretch",
                }}
                xs={6}
              >
                <Grid
                  sx={{ height: 100, width: { xs: "150%", md: "100%" } }}
                  container
                  direction="column"
                  justifyContent="end"
                  alignItems="center"
                >
                  <Grid item>
                    <Search sx={{ borderRadius: "2px", mb: 2 }}>
                      <SearchIconWrapper>
                        <SearchIcon />
                      </SearchIconWrapper>
                      <StyledInputBase
                        placeholder="Keres??s"
                        disabled={props.searchType}
                        value={props.searchV}
                        inputProps={{ "aria-label": "search" }}
                        onChange={(e) => props.setSearchV(e.target.value)}
                        autoFocus
                      />
                    </Search>
                  </Grid>
                  {/* businessTypeCard */}
                  <Grid
                    sx={{
                      // border: "1px solid white",
                      width: { xs: "100vw", md: "100%" },
                      height: "50%",
                      mb: -2,
                      display: "flex",
                      overflowX: "auto",
                    }}
                    item
                  >
                    {cvts.BUSINESSTYPE.map((item) => {
                      return (
                        <BusinessTypeCard
                          key={item.code}
                          name={item.value}
                          type={item.code}
                          setSearchType={props.setSearchType}
                          searchType={props.searchType}
                        />
                      );
                    })}
                  </Grid>
                  {/* <Grid item>
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Checkbox
                            onChange={handleChange}
                            checked={props.isOpenNowCheck}
                            sx={{
                              "&.Mui-checked": {
                                color: "black",
                              },
                            }}
                          />
                        }
                        label="Most is Nyitva"
                      />
                    </FormGroup>
                  </Grid> */}
                </Grid>
              </Grid>
              <Grid xs={2} item />
            </Grid>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

Header.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Header;
