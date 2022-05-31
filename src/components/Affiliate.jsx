import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { CssBaseline } from "@mui/material";
import { useNavigate } from "react-router-dom";
import paths from "../constants/paths";
import { endLoginSession } from "../constants/helpers";
import { logoutUser } from "../store/StateUser";
import { useDispatch } from "react-redux";

import Animation from "./Animation";
import Loading from "../assets/affiliate.json";

const AffiliateNavigate = () => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      endLoginSession();
      dispatch(logoutUser());
      setIsLoading(false);
      navigate(paths.index);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <Grid
          container
          justifyContent='center'
          style={{ color: "white", marginBottom: 30 }}
        >
          <Animation
            title='Thank you...You are taken to the home page'
            LottieCmp={Loading}
          />
        </Grid>
      ) : null}

      <CssBaseline />
    </>
  );
};

export default AffiliateNavigate;
