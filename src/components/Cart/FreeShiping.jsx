/* eslint-disable react/react-in-jsx-scope */
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

import MainTheme from "../../themes/MainTheme";

const useStyles = makeStyles(() => ({
  root: {
    height: MainTheme.spacing(5),
    backgroundColor: MainTheme.palette.secondary.main,
    color: MainTheme.palette.primary.main,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: MainTheme.spacing(3),
    fontFamily: "system-ui",
    fontWeight: 500
  }
}));

const FreeShippingBar = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <Grid item style={{ margin: 10 }}>
        shipping on orders over 80$
      </Grid>

      <Grid item style={{ height: MainTheme.spacing(3) }}>
        <LocalShippingIcon />
      </Grid>
    </Grid>
  );
};

export default FreeShippingBar;
