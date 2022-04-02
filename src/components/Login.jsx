import * as React from "react";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import {
  SIGNIN,
  MANAGERSIGNIN,
  FORGOT,
  SIGNUP_OPT
} from "../constants/strings";
import paths from "../constants/paths";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import MainTheme from "../themes/MainTheme";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { InputAdornment } from "@mui/material";
import { IconButton } from "@mui/material";

const Login = () => {
  const [email, setEmail] = useState("");
  const [emailErrorText, setEmailErrorText] = useState("");
  const [password, setPassword] = useState("");
  const [passwordErrorText, setPasswordErrorText] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const handleClickShowPassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  const useStyles = makeStyles({
    textFiled: {
      color: "white",
      backgroundColor: MainTheme.palette.background.default,
    },
    cssLabel: {
      color: "white"
    },

    cssOutlinedInput: {
      "&$cssFocused $notchedOutline": {
        borderColor: "#FFF"
      },

    },
    cssFocused: {},

    notchedOutline: {
      borderWidth: "1px",
      borderColor: "white !important"
    },
    input: {
      "&:-webkit-autofill": {
        WebkitBoxShadow:  '0 0 0 100px #212121 inset',
        WebkitTextFillColor : "white"
      }
    }

  });
  const classes = useStyles();

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setEmailErrorText("Please enter email");
    } else {
      setEmailErrorText("");
    }
    if (!password) {
      setPasswordErrorText("Please enter password");
    } else {
      setPasswordErrorText("");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password")
    });
  };

  return (
    <ThemeProvider theme={MainTheme}>
      <Grid
        theme={MainTheme}
        container
        component='main'
        sx={{ height: "80vh" }}
      >
        <CssBaseline />
        <Grid
          theme={MainTheme}
          item
          xs={false}
          sm={4}
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
        <Grid
          theme={MainTheme}
          component='main'
          item
          xs={12}
          sm={8}
          md={5}
          elevation={6}
          square
        >
          <Box textAlign='center'>
            <Button
              type='submit'
              fullWidth
              // onClick={onSubmit}
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
              startIcon={<ManageAccountsIcon />}
              style={{
                maxWidth: "400px",
                maxHeight: "50px",
                minWidth: "150px",
                minHeight: "30px",
                backgroundColor: "#161e33",
                textTransform: "capitalize"
              }}
            >
              {MANAGERSIGNIN}
            </Button>
          </Box>
          <CssBaseline />
          <Box
            sx={{
              my: 4,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "#161e33", color: "#fff" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component='h1' variant='h5'>
              {SIGNIN}
            </Typography>
            <Box
              theme={MainTheme}
              component='form'
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <CssBaseline />
              <TextField
                className={classes.textField}
                margin='normal'
                required
                fullWidth
                id='email'
                label='Email Address'
                name='email'
                autoComplete='email'
                color='secondary'
                autoFocus
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
                    input:classes.input
                  }
                }}
              />
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
                    input:classes.input
                  },
                  endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton
                        aria-label='toggle password visibility'
                        onClick={handleClickShowPassword}
                        style={{
                          color: MainTheme.palette.text.primary
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
              <FormControlLabel
                control={
                  <Checkbox
                    value='remember'
                    style={{
                      color: MainTheme.palette.text.primary
                    }}
                  />
                }
                label='Remember me'
              />
              <Button
                type='submit'
                onClick={onSubmit}
                fullWidth
                variant='contained'
                sx={{ mt: 3, mb: 2 }}
                style={{
                  color: MainTheme.palette.text.primary,
                  backgroundColor: "#161e33"
                }}
              >
                {SIGNIN}
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link
                    href='/'
                    variant='body2'
                    style={{
                      color: MainTheme.palette.text.primary
                    }}
                  >
                    {FORGOT}
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    component='button'
                    onClick={() => {
                      navigate(paths.register);
                    }}
                    style={{
                      color: MainTheme.palette.text.primary
                    }}
                    variant='body2'
                  >
                    {SIGNUP_OPT}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};
export default Login;
