import React from "react";
import { AppBar, Toolbar, Button } from "@mui/material";
import MainTheme from "../Themes/MainTheme";
import { LOGO } from "../constants/strings";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  },
  appBar: {
    position: "static",
    backgroundColor: MainTheme.palette.primary.main
  },
  Options: {
    display: "flex",
    justifyContent: "space-evenly"
  },
  btn: {
    borderRadius: MainTheme.spacing(1),
    color: "white"
  }
});

const NavBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <img
            alt='logo'
            style={{ width: 200, height: 100, flexGrow: 1 }}
            src={LOGO}
          />
          <div className={classes.Options}>
            <Button className={classes.btn} sx={{ m: 2 }} variant='contained'>
              Register
            </Button>
            <Button className={classes.btn} sx={{ m: 2 }} variant='contained'>
              Login
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
