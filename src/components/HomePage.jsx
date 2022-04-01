import React from "react";
import { Grid, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import MainTheme from "../themes/MainTheme";
import { CssBaseline } from "@mui/material";
import { keyframes } from '@emotion/react'


const RGB= keyframes`
    0% { color: red; }
  33% { color: blue; }
  66% { color: green; }
  100% { color: red; }
`

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
          <Typography variant='h1' sx={{animation: `${RGB} 2.5s infinite`}} >HOME PAGE</Typography>
        </Grid>
      </ThemeProvider>
    </>
  );
};

export default HomePage;
