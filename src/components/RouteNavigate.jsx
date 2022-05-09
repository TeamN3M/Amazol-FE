import React, { useEffect } from "react";
import { Stack } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import paths from "../constants/paths";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Profile from "./ManageAccount/Profile";
import MProfile from "./ManageManagerAccount/Profile";
import Orders from "./CustomerOrders/Orders";
import HomePage from "./HomePage";
import Login from "./Login";
import Register from "./Register";
import Search from "./ItemCatalog/SearchResult";
import Cart from "./Cart/CartPage";
import ProductManagment from "./ProductManagment/ProductManagmentPage";
import { ThemeProvider } from "@mui/material";
import MainTheme from "../themes/MainTheme";
import { createTheme } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import { getJwtKey } from "../constants/helpers";
import { getUser } from "../Services/services";
import { setUser } from "../store/State";
//import Products from "./products/Products";
//import Cart from "./cart/Cart";
// import { getUser } from "../Services/services";
const themeDark = createTheme({
  palette: {
    background: {
      default: "#212121"
    }
  }
});

const RouteNavigate = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const localJwt = getJwtKey();
    const func = async () => getUser();

    if (localJwt) {
      func().then((res) => {
        if (res.status === 200) {
          console.log("find user");
          dispatch(setUser(res.data.user));
        } else {
          console.log("not found");
        }
      });
    }
  }, []);

  return (
    <Stack>
      <ThemeProvider theme={MainTheme}>
        <NavBar />
      </ThemeProvider>
      <ThemeProvider theme={themeDark}>
        <Routes>
          <Route path={paths.index} element={<HomePage />} />
          <Route path={paths.login} element={<Login />} />
          <Route path={paths.register} element={<Register />} />
          <Route path={paths.profile} element={<Profile />} />
          <Route path={paths.mprofile} element={<MProfile />} />
          <Route path={paths.search} element={<Search />} />
          <Route path={paths.cart} element={<Cart />} />
          <Route path={paths.cusomerorders} element={<Orders />} />
          <Route path={paths.prodmanage} element={<ProductManagment />} />
        </Routes>
      </ThemeProvider>
      <ThemeProvider theme={MainTheme}>
        <Footer />
      </ThemeProvider>
    </Stack>
  );
};

export default RouteNavigate;
