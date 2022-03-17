import React from "react";
import { AppBar,Toolbar,Button, Grid } from "@mui/material";
import MainTheme from "../Themes/MainTheme";
import { LOGO } from "../constants/strings";
import { margin } from "@mui/system";


const NavBar = () => {
//   const navigate = useNavigate();

//   const handleLoginClicked = () => {
//     navigate(paths.login);
//   };
//   const handleRegisterClicked = () => {
//     navigate(paths.register);
//   };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: MainTheme.palette.primary.main
      }}
    >
      <Toolbar sx={{ justifyContent: "left" }}>
          <img alt="logo" src={LOGO} width={200} height={100}/>
          <Grid sx={{ justifyContent:"space-between", mr:30}}>
          <Button
          sx={{
            borderRadius: MainTheme.spacing(1),
            color: "white",
            margin:"5"
          }}
          variant="outlined"
        //   onClick={handleLoginClicked}
        >
          Login
        </Button>
        <Button
          sx={{
            borderRadius: MainTheme.spacing(1),
            color: "white",
            margin:"5"
          }}
          variant="outlined"
        //   onClick={handleRegisterClicked}
        >
          Register
        </Button>
        </Grid>
        
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;