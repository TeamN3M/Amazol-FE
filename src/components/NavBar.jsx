import React from "react";
import { AppBar, Toolbar, Button } from "@mui/material";
import MainTheme from "../Themes/MainTheme";
import { LOGO } from "../constants/urls";
import { makeStyles } from "@mui/styles";
// import LoginIcon from "@mui/icons-material/Login";
import { LOGIN, SIGNUP } from "../constants/strings";
//import { useNavigate } from 'react-router-dom';


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
  return (
    <div className={classes.root}>
      <AppBar
        position='static'
        sx={{
          backgroundColor: MainTheme.palette.primary.main
        }}
      >
        <Toolbar>
          <img alt='logo' style={{ width: 200, height: 100 }} src={LOGO} />
          <div className={classes.Options}>
            <Button
              className={classes.btn}
              sx={{ m: 2, textTransform: "capitalize" }}
              variant='contained'
              size='large'
              onClick={(e) => {
                e.preventDefault();
                window.location.href='/Register';
                }}
          
            >
              {SIGNUP}
            </Button>
            <Button
              className={classes.btn}
              sx={{ m: 2, textTransform: "capitalize" }}
              variant='contained'
              size='large'
              onClick={(e) => {
                e.preventDefault();
                window.location.href='/Login';
                }}
              // startIcon={<LoginIcon />}
            >
              {LOGIN}
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
