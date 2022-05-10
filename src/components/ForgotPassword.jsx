import * as React from "react";
import { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MainTheme from "../themes/MainTheme";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { InputAdornment } from "@mui/material";
import { IconButton } from "@mui/material";
import LockResetIcon from "@mui/icons-material/LockReset";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import paths from "../constants/paths";
import { useNavigate } from "react-router-dom";
import {
  RESETPASSWORDTITLE,
  CANCEL,
  validateEmail,
  validatePassword
} from "../constants/strings";
import { makeStyles } from "@mui/styles";
import { getUserByEmail } from "../Services/services";
import { resetPassword } from "../Services/services";
import MySnackBar from "./Alerts/MySnackBar";
import { resetPasswordAlerts } from "../constants/strings";

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
  const [password, setPassword] = useState("");
  const [passwordErrorText, setPasswordErrorText] = useState("");
  const [conpassword, setConPassword] = useState("");
  const [conpasswordErrorText, setConPasswordErrorText] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [validUser, setValidUser] = useState(false);
  const [userID, setUserID] = useState("");
  const [openAlert, setOpenAlert] = useState(false);
  const [reset, setReset] = useState(false);

  const checkEmail = (email) => {
    return !validateEmail.test(email);
  };
  const checkPassword = (password) => {
    return !validatePassword.test(password);
  };
  const handleClickShowPassword = () => {
    setPasswordVisible((prevState) => !prevState);
  };

  const handleResetPassword = async () => {
    if (!email) {
      setEmailErrorText("Please enter email");
      return;
    } else if (checkEmail(email)) {
      setEmailErrorText("email is not valid!");
      return;
    } else {
      setEmailErrorText("");
    }
    const res = await getUserByEmail(email);
    if (res.status == 200) {
      setValidUser(true);
      setUserID(res.data);
    } else {
      setOpenAlert(true);
    }
  };
  const handleSaveNewPassword = async () => {
    if (!password) {
      setPasswordErrorText("Please enter password");
      return;
    } else if (checkPassword(password)) {
      setPasswordErrorText("Invalid password !");
      return;
    } else {
      setPasswordErrorText("");
    }
    if (!conpassword) {
      setConPasswordErrorText("Please enter password");
      return;
    } else if (conpassword !== password) {
      setConPasswordErrorText("Password Not match !");
      return;
    } else {
      setPasswordErrorText("");
    }
    const res = await resetPassword(userID, password);
    if (res.status == 200) {
      setReset(true);
      setOpenAlert(true);
    } else {
      setReset(false);
      setOpenAlert(true);
    }
  };

  const handleClose = () => {
    navigate(paths.login);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      if (reset) {
        navigate(paths.login);
      }
      setOpenAlert(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [openAlert]);

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
          {validUser
            ? "Enter your new password of your account"
            : "Enter the email address of your account"}
        </Typography>
        {validUser ? (
          <Grid box>
            <TextField
              className={classes.textField}
              margin='normal'
              required
              fullWidth
              name='password'
              label='Password'
              type={passwordVisible ? "text" : "password"}
              id='password'
              autoComplete='current-password'
              InputProps={{
                classes: {
                  root: classes.cssOutlinedInput,
                  focused: classes.cssFocused,
                  notchedOutline: classes.notchedOutline,
                  input: classes.input
                },
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton
                      aria-label='toggle password visibility'
                      onClick={handleClickShowPassword}
                      style={{
                        color: "white"
                      }}
                    >
                      {passwordVisible ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
              color='secondary'
              value={password}
              error={!!passwordErrorText}
              helperText={passwordErrorText}
              onChange={(e) => setPassword(e.target.value)}
              InputLabelProps={{
                classes: {
                  root: classes.cssLabel,
                  focused: classes.cssFocused
                }
              }}
            />
            <TextField
              className={classes.textField}
              margin='normal'
              required
              fullWidth
              name='confirm password'
              label='confirm password'
              type={passwordVisible ? "text" : "password"}
              id='confirm password'
              autoComplete='current-password'
              InputProps={{
                classes: {
                  root: classes.cssOutlinedInput,
                  focused: classes.cssFocused,
                  notchedOutline: classes.notchedOutline,
                  input: classes.input
                },
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton
                      aria-label='toggle password visibility'
                      onClick={handleClickShowPassword}
                      style={{
                        color: "white"
                      }}
                    >
                      {passwordVisible ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
              color='secondary'
              value={conpassword}
              error={!!conpasswordErrorText}
              helperText={conpasswordErrorText}
              onChange={(e) => setConPassword(e.target.value)}
              InputLabelProps={{
                classes: {
                  root: classes.cssLabel,
                  focused: classes.cssFocused
                }
              }}
            />
            <MySnackBar
              open={openAlert}
              timeout={2000}
              severity={
                reset
                  ? resetPasswordAlerts.OK.severity
                  : resetPasswordAlerts.FAIL.severity
              }
              message={
                reset
                  ? resetPasswordAlerts.OK.message
                  : resetPasswordAlerts.FAIL.message
              }
            />
          </Grid>
        ) : (
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
        )}
        <Grid container justifyContent='space-between'>
          <Button
            style={{ color: "red", textTransform: "capitalize" }}
            onClick={handleClose}
          >
            {CANCEL}
          </Button>
          <Button
            style={{ color: "blue", textTransform: "capitalize" }}
            onClick={validUser ? handleSaveNewPassword : handleResetPassword}
          >
            {validUser ? "SAVE" : RESETPASSWORDTITLE}
          </Button>
          <MySnackBar
            open={openAlert && !validUser}
            timeout={2000}
            severity={resetPasswordAlerts.EXIST.severity}
            message={resetPasswordAlerts.EXIST.message}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};
export default ForgotPassword;
