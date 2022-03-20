import React from "react";
import { Grid } from "@mui/material";
import { BACKGRUOND } from "../constants/urls";

const HomePage = () => {
  return (
    <>
      <Grid
        container
        spacing={0}
        direction='column'
        alignItems='center'
        justifyContent='center'
        style={{ minHeight: "100vh" }}
      >
        <img alt='home_back' src={BACKGRUOND} />
      </Grid>
    </>
  );
};

export default HomePage;
