/* eslint-disable react/react-in-jsx-scope */
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import FavoriteIcon from "@mui/icons-material/Favorite";

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

const WishListBar = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <FavoriteIcon />
      <Grid item style={{ margin: 10 }}>
        Your Favorites Items
      </Grid>

      <Grid item style={{ height: MainTheme.spacing(3) }}>
        <FavoriteIcon />
      </Grid>
    </Grid>
  );
};

export default WishListBar;
