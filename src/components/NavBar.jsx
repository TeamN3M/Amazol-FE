// import React, { useState } from "react";
import MainNavBar from "./Logout/MainNavBar";
import CustomerNavBar from "./Login/CustomerNavBar";
import { useSelector } from "react-redux";
import { getUser } from "../store/State";
//import ManagerNavBar from "./Login/ManagerNavBar";

const NavBar = () => {
  //const [isLoggedIn, setisLoggedIn] = useState(false);
  const [isLoggedIn] = useState(true);

  return <>{isLoggedIn ? <MainNavBar /> : <CustomerNavBar />}</>;
};

export default NavBar;
