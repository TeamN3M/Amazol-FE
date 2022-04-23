import React, { useState } from "react";
import MainNavBar from "./Logout/MainNavBar";
import CustomerNavBar from "./Login/CustomerNavBar";
//import ManagerNavBar from "./Login/ManagerNavBar";

const NavBar = () => {
  //const [isLoggedIn, setisLoggedIn] = useState(false);
  const [isLoggedIn] = useState(false);

  return <>{isLoggedIn ? <MainNavBar /> : <CustomerNavBar />}</>;
};

export default NavBar;
