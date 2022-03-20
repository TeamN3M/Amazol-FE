import React from "react";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route
} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register/Register";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import "./App.css";
import HomePage from "./components/HomePage";
import paths from "./constants/paths";

function App() {
  return (
    <>
      <NavBar />
      <Router>
        <Switch>
          <Route exact path={paths.index} element={<HomePage />} />
          <Route path={paths.login} element={<Login />} />
          <Route path={paths.register} element={<Register />} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
