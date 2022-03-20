import React from "react";
import { Stack } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import paths from "../constants/paths";
import Footer from "./Footer";
import NavBar from "./NavBar";
import HomePage from "./HomePage";
import Login from "./Login";
import Register from "./Register";

const RouteNavigate = () => (
  <Stack>
    <NavBar />
    <Routes>
      <Route path={paths.index} element={<HomePage />} />
      <Route path={paths.login} element={<Login />} />
      <Route path={paths.register} element={<Register />} />
    </Routes>
    <Footer />
  </Stack>
);

export default RouteNavigate;
