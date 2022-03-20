import React, { useState } from "react";
import { AppBar, Toolbar, Button } from "@mui/material";
import MainTheme from "../Themes/MainTheme";
import { LOGO } from "../constants/urls";
import { makeStyles } from "@mui/styles";
import LoginIcon from "@mui/icons-material/Login";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import { SIGNIN, SIGNUP } from "../constants/strings";

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  },

  Options: {
    display: "flex",
    justifyContent: "right",
    flexGrow: 1
  },
  btn: {
    borderRadius: MainTheme.spacing(1),
    color: "white"
  }
});

const NavBar = () => {
  const classes = useStyles();
  const [isHomePage, setIsHomePage] = useState(true);
  console.log(isHomePage);
  return (
    <>
      {isHomePage ? (
        <div className={classes.root}>
          <AppBar
            position='static'
            sx={{
              backgroundColor: MainTheme.palette.primary.main
            }}
          >
            <Toolbar>
              <img alt='logo' style={{ width: 200, height: 70 }} src={LOGO} />

              <div className={classes.Options}>
                <Button
                  className={classes.btn}
                  sx={{ m: 2, textTransform: "capitalize" }}
                  variant='contained'
                  size='small'
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = "/Register";
                    setIsHomePage(false);
                  }}
                  startIcon={<AppRegistrationIcon />}
                >
                  {SIGNUP}
                </Button>
                <Button
                  className={classes.btn}
                  sx={{ m: 2, textTransform: "capitalize" }}
                  variant='contained'
                  size='small'
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = "/Login";
                    setIsHomePage(false);
                  }}
                  startIcon={<LoginIcon />}
                >
                  {SIGNIN}
                </Button>
              </div>
            </Toolbar>
          </AppBar>
        </div>
      ) : (
        <div className={classes.root}>
          <AppBar
            position='static'
            sx={{
              backgroundColor: MainTheme.palette.primary.main
            }}
          >
            <Toolbar>
              <img alt='logo' style={{ width: 200, height: 70 }} src={LOGO} />

              <div className={classes.Options}>
                <Button
                  className={classes.btn}
                  sx={{ m: 2, textTransform: "capitalize" }}
                  variant='contained'
                  size='small'
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = "/Login";
                    setIsHomePage(false);
                  }}
                  startIcon={<LoginIcon />}
                >
                  stam
                </Button>
              </div>
            </Toolbar>
          </AppBar>
        </div>
      )}
    </>
  );
};

export default NavBar;
