// import React, { useState } from "react";
import MainNavBar from "./Logout/MainNavBar";
import CustomerNavBar from "./Login/CustomerNavBar";
import { useSelector } from "react-redux";
import { getUser } from "../store/State";
//import ManagerNavBar from "./Login/ManagerNavBar";

const NavBar = () => {
  const state = useSelector((s) => s);
  // const dispatch=useDispatch();

  const user = getUser(state);

  // eslint-disable-next-line react/react-in-jsx-scope
  return <>{user !== undefined ? <CustomerNavBar /> : <MainNavBar />}</>;
};

export default NavBar;
