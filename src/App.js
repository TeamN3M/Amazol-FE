import React from "react";
import { ThemeProvider } from "@mui/styles";
import { BrowserRouter } from "react-router-dom";
import MainTheme from "./themes/MainTheme";
// import "./App.css";

import RouteNavigate from "./components/RouteNavigate";

function App() {
  return (
    <>
      <ThemeProvider theme={MainTheme}>
        <BrowserRouter>
          <RouteNavigate />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
