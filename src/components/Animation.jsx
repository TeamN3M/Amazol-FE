import React, { useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import Lottie from "lottie-web";
import ERROR404 from "../assets/error404.json";
import MainTheme from "./../themes/MainTheme";

const AppAnimation = ({ animationSize, loop, LottieCmp, title }) => {
  useEffect(() => {
    Lottie.loadAnimation({
      autoplay: true,
      container: document.getElementById("lottie-div"),
      loop: loop !== undefined ? loop : true,
      animationData: LottieCmp || ERROR404,
      renderer: "svg"
    });
  }, [LottieCmp]);

  return (
    <Grid
      container
      justifyContent='center'
      direction='column'
      style={{ backgroundColor: "#212121", color: "white" }}
    >
      <Grid
        sx={{
          maxHeight: animationSize || MainTheme.spacing(40),
          maxWidth: animationSize ? animationSize * 1.2 : MainTheme.spacing(45),
          alignSelf: "center",
          mb: MainTheme.spacing(2)
        }}
      >
        <div id='lottie-div' />
      </Grid>
      {title && (
        <Typography mt={2} component='h3' variant='h5' textAlign='center'>
          {title}
        </Typography>
      )}
    </Grid>
  );
};

export default AppAnimation;
