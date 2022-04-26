import React from "react";
import { Provider } from "react-redux";
// import { ThemeProvider } from "@mui/styles";
import { BrowserRouter } from "react-router-dom";
// import MainTheme from "./themes/MainTheme";
// import "./App.css";

import RouteNavigate from "./components/RouteNavigate";
import Store from "./store/Store";

function App() {
  return (
    <>
      {/* <ThemeProvider theme={MainTheme}> */}
      <Provider store={Store}>
        <BrowserRouter>
          <RouteNavigate />
        </BrowserRouter>
      </Provider>
      {/* </ThemeProvider> */}
    </>
  );
}

export default App;
