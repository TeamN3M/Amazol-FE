
import React from 'react';
import { Stack } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import paths from '../constants/paths';
import Footer from './Footer';
import NavBar from './NavBar';

// import MenuSearchBar from "./MenuSearchBar";
import Profile from './ManageAccount/Profile';
import HomePage from './HomePage';
import Login from './Login';
import Register from './Register';
import Search from './ItemCatalog/SearchResult';
import { ThemeProvider } from '@mui/material';
import MainTheme from '../themes/MainTheme';

//import Products from "./products/Products";
//import Cart from "./cart/Cart";
import { getJwtKey } from "../constants/helpers";
import { getUser } from "../Services/services";


const RouteNavigate = () => (
  <ThemeProvider theme={MainTheme}>
    <Stack>
      <NavBar />
      {/* <MenuSearchBar /> */}
      <Routes>
        <Route path={paths.index} element={<HomePage />} />
        <Route path={paths.login} element={<Login />} />
        <Route path={paths.register} element={<Register />} />
        <Route path={paths.profile} element={<Profile />} />
        <Route path={paths.search} element={<Search />} />
      </Routes>
      <Footer />
    </Stack>
  </ThemeProvider>
);


export default RouteNavigate;
