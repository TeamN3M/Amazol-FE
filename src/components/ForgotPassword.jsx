import * as React from "react";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MainTheme from "../themes/MainTheme";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockResetIcon from "@mui/icons-material/LockReset";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import paths from "../constants/paths";
import { useNavigate } from "react-router-dom";
import {
  RESETPASSWORDTITLE,
  CANCEL,
  validateEmail
} from "../constants/strings";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  textFiled: {
    color: "white",
    backgroundColor: MainTheme.palette.background.default
  },
  cssLabel: {
    color: "white",
    "&.Mui-focused": {
      color: "white"
    },
    "& .MuiInputBase-root.Mui-disabled": {
      color: "rgba(0, 0, 0, 0.6) !important" // (default alpha is 0.38)
    }
  },

  cssOutlinedInput: {
    "&$cssFocused $notchedOutline": {
      borderColor: "#FFF"
    }
  },
  cssFocused: {},

  notchedOutline: {
    borderWidth: "1px",
    borderColor: "white !important"
  },

  input: {
    color: "white",
    "&:-webkit-autofill": {
      WebkitBoxShadow: "0 0 0 100px #212121 inset",
      WebkitTextFillColor: "white"
    }
  }
});

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [emailErrorText, setEmailErrorText] = useState("");

  const checkEmail = (email) => {
    return !validateEmail.test(email);
  };
  const handleResetPassword = () => {
    if (!email) {
      setEmailErrorText("Please enter email");
      return;
    } else if (checkEmail(email)) {
      setEmailErrorText("email is not valid!");
      return;
    } else {
      setEmailErrorText("");
    }
    console.log("emsil sent to", email);
  };

  const handleClose = () => {
    navigate(paths.login);
  };

  const classes = useStyles();
  return (
    <Grid container component='main' sx={{ height: "80vh" }}>
      <CssBaseline />
      <Grid
        theme={MainTheme}
        item
        xs={false}
        sm={2}
        md={7}
        sx={{
          backgroundImage: `url("../images/sign in page/sign-in.jpg")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <CssBaseline />
      </Grid>
      <Grid component='main' item square sx={{ ml: 15, mt: 10 }}>
        <Box
          sx={{
            my: 4,
            mx: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "#161e33", color: "#fff" }}>
            <LockResetIcon />
          </Avatar>
          <Typography
            component='h1'
            variant='h5'
            style={{
              color: "white"
            }}
          >
            {RESETPASSWORDTITLE}
          </Typography>
        </Box>
        <Typography
          textAlign='center'
          variant='h5'
          style={{
            color: "white"
          }}
        >
          link to reset your password will be sent to you by email
        </Typography>

        <TextField
          margin='normal'
          required
          fullWidth
          id='email'
          color='secondary'
          label='Email Address'
          name='email'
          autoComplete='email'
          value={email}
          error={!!emailErrorText}
          helperText={emailErrorText}
          onChange={(e) => setEmail(e.target.value)}
          InputLabelProps={{
            classes: {
              root: classes.cssLabel,
              focused: classes.cssFocused
            }
          }}
          InputProps={{
            classes: {
              root: classes.cssOutlinedInput,
              focused: classes.cssFocused,
              notchedOutline: classes.notchedOutline,
              input: classes.input
            }
          }}
        />
        <Grid container justifyContent='space-between'>
          <Button
            style={{ color: "red", textTransform: "capitalize" }}
            onClick={handleClose}
          >
            {CANCEL}
          </Button>
          <Button
            style={{ color: "blue", textTransform: "capitalize" }}
            onClick={handleResetPassword}
          >
            {RESETPASSWORDTITLE}
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default ForgotPassword;
