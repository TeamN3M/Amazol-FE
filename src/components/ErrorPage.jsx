import React from "react";
import { Grid } from "@mui/material";
import { CssBaseline } from "@mui/material";
import MainTheme from "../themes/MainTheme";
import Animation from "./Animation";
import Error404 from "../assets/error404.json";

const ErrorPage = () => {
  return (
    <>
      <Grid
        container
        justifyContent='center'
        style={{ color: "white", marginBottom: 30 }}
      >
        <Animation
          title='We did not find the page but here is a cute cat'
          LottieCmp={Error404}
          animationSize={MainTheme.spacing(60)}
        />
      </Grid>
      <CssBaseline />
    </>
  );
};

export default ErrorPage;
