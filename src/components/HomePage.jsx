import React from "react";
import { Grid, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import MainTheme from "../themes/MainTheme";
import { CssBaseline } from "@mui/material";

const HomePage = () => {
  return (
    <>
      <ThemeProvider theme={MainTheme}>
        <Grid
          container
          component='main'
          sx={{
            minWidth: "100%",
            height: "100vh"
          }}
        >
          <CssBaseline />
          <Typography variant='h1'>HOME PAGE</Typography>
        </Grid>
      </ThemeProvider>
    </>
  );
};

export default HomePage;
