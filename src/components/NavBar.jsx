import React, { useState } from "react";
import { AppBar, Toolbar, Button } from "@mui/material";
import MainTheme from "../Themes/MainTheme";
import { LOGO } from "../constants/urls";
import { makeStyles } from "@mui/styles";
import LoginIcon from "@mui/icons-material/Login";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import HomeIcon from "@mui/icons-material/Home";
import { SIGNIN, SIGNUP, HOMEPAGE } from "../constants/strings";
import { useNavigate } from "react-router-dom";
import paths from "../constants/paths";

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
  const navigate = useNavigate();
  const classes = useStyles();
  const [isHomePage, setIsHomePage] = useState(true);

  const handleLoginClicked = () => {
    setIsHomePage(false);
    navigate(paths.login);
  };
  const handleRegisterClicked = () => {
    setIsHomePage(false);
    navigate(paths.register);
  };
  const handleHomeClicked = () => {
    setIsHomePage(true);
    navigate(paths.index);
  };

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
                  onClick={handleRegisterClicked}
                  startIcon={<AppRegistrationIcon />}
                >
                  {SIGNUP}
                </Button>
                <Button
                  className={classes.btn}
                  sx={{ m: 2, textTransform: "capitalize" }}
                  variant='contained'
                  size='small'
                  onClick={handleLoginClicked}
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
                  onClick={handleHomeClicked}
                  startIcon={<HomeIcon />}
                >
                  {HOMEPAGE}
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
