import React from "react";
import { Stack } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import paths from "../constants/paths";
import Footer from "./Footer";
import NavBar from "./NavBar";

// import MenuSearchBar from "./MenuSearchBar";
import Profile from "./ManageAccount/Profile";
import HomePage from "./HomePage";
import Login from "./Login";
import Register from "./Register";
import Search from "./ItemCatalog/SearchResult";
import { ThemeProvider } from "@mui/material";
import MainTheme from "../themes/MainTheme";
import { createTheme } from "@mui/material/styles";
//import Products from "./products/Products";
//import Cart from "./cart/Cart";
// import { getJwtKey } from "../constants/helpers";
// import { getUser } from "../Services/services";
const themeDark = createTheme({
  palette: {
    background: {
      default: "#212121",
    },
  },
});

const RouteNavigate = () => (
  <Stack>
    <ThemeProvider theme={MainTheme}>
      <NavBar />
    </ThemeProvider>
    {/* <MenuSearchBar /> */}
    <ThemeProvider theme={themeDark}>
      <Routes>
        <Route path={paths.index} element={<HomePage />} />
        <Route path={paths.login} element={<Login />} />
        <Route path={paths.register} element={<Register />} />
        <Route path={paths.profile} element={<Profile />} />
        <Route path={paths.search} element={<Search />} />
      </Routes>
    </ThemeProvider>
    <ThemeProvider theme={MainTheme}>
      <Footer />
    </ThemeProvider>
  </Stack>
);

export default RouteNavigate;
