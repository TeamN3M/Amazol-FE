/* eslint-disable react/react-in-jsx-scope */
// import React, { useState } from "react";
import MainNavBar from "./Logout/MainNavBar";
import CustomerNavBar from "./Login/CustomerNavBar";
import { useSelector } from "react-redux";
import { getUser } from "../store/State";
import ManagerNavBar from "./Login/ManagerNavBar";

const NavBar = () => {
  const state = useSelector((s) => s);
  // const dispatch=useDispatch();
  let navBarType;

  const user = getUser(state);
  if (user !== undefined) {
    console.log(user.first_name);
  } else {
    console.log("no log in");
  }
  if (user !== undefined) {
    navBarType = user.isAdmin ? <ManagerNavBar /> : <CustomerNavBar />;
  } else {
    navBarType = <MainNavBar />;
  }

  return <>{navBarType}</>;
};

export default NavBar;
