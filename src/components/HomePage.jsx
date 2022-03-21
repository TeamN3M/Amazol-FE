import React from "react";
import { Grid } from "@mui/material";

import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

const HomePage = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Grid container component='main' sx={{ height: "80vh" }}>
          <CssBaseline />
          <Grid
            style={{
              minWidth: "85%",
              height: "100vh"
            }}
            sx={{
              marginLeft: 20,
              marginTop: 2,

              backgroundImage: `url("../images/home page/homebackground.jpg")`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          />
        </Grid>
      </ThemeProvider>
    </>
  );
};

export default HomePage;
