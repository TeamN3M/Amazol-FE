import * as React from "react";
import { useState, useEffect } from "react";
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
import { SIGNIN, FORGOT, SIGNUP_OPT, ERRORLOGIN } from "../constants/strings";
import paths from "../constants/paths";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import MainTheme from "../themes/MainTheme";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { InputAdornment } from "@mui/material";
import { IconButton } from "@mui/material";
import { loginUser } from "../Services/services";
import { validateEmail } from "../constants/strings";
import { rememberMeSession } from "../constants/helpers";
import { useDispatch } from "react-redux";
import MySnackBar from "./Alerts/MySnackBar";
import { loginAlerts } from "../constants/strings";
import { setUser } from '../store/StateUser';

const Login = () => {
  const [email, setEmail] = useState('');
  const [emailErrorText, setEmailErrorText] = useState('');
  const [password, setPassword] = useState('');
  const [passwordErrorText, setPasswordErrorText] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [loginError, setLoginError] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [loginFlag, setLoginFlag] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLoginError = () => {
    setLoginError(true);
    if (loginError) {
      setOpenAlert(true);
      setTimeout(() => {
        setOpenAlert(false);
      }, 1000);
    }
  };
  const handleClickShowPassword = () => {
    setPasswordVisible((prevState) => !prevState);
  };
  const handleClickRememberMe = () => {
    setRememberMe((prevState) => !prevState);
  };
  const checkEmail = (email) => {
    return !validateEmail.test(email);
  };

  const useStyles = makeStyles({
    textFiled: {
      color: 'white',
      backgroundColor: MainTheme.palette.background.default,
    },
    cssLabel: {
      color: 'white',
      '&.Mui-focused': {
        color: 'white',
      },
    },

    cssOutlinedInput: {
      '&$cssFocused $notchedOutline': {
        borderColor: '#FFF',
      },
    },
    cssFocused: {},

    notchedOutline: {
      borderWidth: '1px',
      borderColor: 'white !important',
    },
    input: {
      color: 'white',
      '&:-webkit-autofill': {
        WebkitBoxShadow: '0 0 0 100px #212121 inset',
        WebkitTextFillColor: 'white',
      },
    },
  });
  const classes = useStyles();

  const handleValidate = async (email, password) => {
    if (!email) {
      setEmailErrorText('Please enter email');
      return;
    } else if (checkEmail(email)) {
      setEmailErrorText('email is not valid!');
      return;
    } else {
      setEmailErrorText('');
    }
    if (!password) {
      setPasswordErrorText('Please enter password');
      return;
    } else {
      setPasswordErrorText('');
    }

    const res = await loginUser(email, password);
    if (res.status == 200) {
      if (rememberMe) {
        rememberMeSession(res.data['accessToken']);
      }
      dispatch(setUser(res.data["user"]));
      setLoginFlag(true);
      setLoginError(false);
      setOpenAlert(true);
      setTimeout(() => {
        setOpenAlert(false);
        navigate(paths.index);
      }, 2000);
    } else {
      handleLoginError();
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email');
    const password = data.get('password');
    handleValidate(email, password);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpenAlert(false);

      if (loginFlag) {
        navigate(paths.index);
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [openAlert]);

  return (
    <Grid container component='main' sx={{ height: '80vh' }}>
      <CssBaseline />
      <Grid
        theme={MainTheme}
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: `url("../images/sign in page/sign-in.jpg")`,
          backgroundRepeat: 'no-repeat',

          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <CssBaseline />
      </Grid>
      <Grid component='main' item xs={12} sm={8} md={5} elevation={6} square>
        <Box
          sx={{
            my: 4,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: '#161e33', color: '#fff' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography
            component='h1'
            variant='h5'
            style={{
              color: 'white',
            }}
          >
            {SIGNIN}
          </Typography>
          <Box
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
                  focused: classes.cssFocused,
                },
              }}
              InputProps={{
                classes: {
                  root: classes.cssOutlinedInput,
                  focused: classes.cssFocused,
                  notchedOutline: classes.notchedOutline,
                  input: classes.input,
                },
              }}
            />
            <TextField
              className={classes.textField}
              margin='normal'
              required
              fullWidth
              name='password'
              label='Password'
              type={passwordVisible ? 'text' : 'password'}
              id='password'
              autoComplete='current-password'
              InputProps={{
                classes: {
                  root: classes.cssOutlinedInput,
                  focused: classes.cssFocused,
                  notchedOutline: classes.notchedOutline,
                  input: classes.input,
                },
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton
                      aria-label='toggle password visibility'
                      onClick={handleClickShowPassword}
                      style={{
                        color: 'white',
                      }}
                    >
                      {passwordVisible ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              color='secondary'
              value={password}
              error={!!passwordErrorText}
              helperText={passwordErrorText}
              onChange={(e) => setPassword(e.target.value)}
              InputLabelProps={{
                classes: {
                  root: classes.cssLabel,
                  focused: classes.cssFocused,
                },
              }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={rememberMe}
                  onChange={handleClickRememberMe}
                  sx={{
                    color: '#FFFFFF',
                    '&.Mui-checked': {
                      color: '#FFFFFF',
                    },
                  }}
                />
              }
              style={{
                color: 'white',
              }}
              label='Remember me'
            />
            {loginError ? (
              <Typography
                variant='h6'
                style={{
                  color: "red",
                  fontfamily: "Lucida Console, Courier New, monospace",
                  alignItems: "center",
                  marginTop: "2px"
                }}
              >
                {ERRORLOGIN}
              </Typography>
            ) : null}
            <Button
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
              style={{
                color: MainTheme.palette.text.primary,
                backgroundColor: '#161e33',
              }}
            >
              {SIGNIN}
            </Button>
            <MySnackBar
              open={openAlert}
              timeout={2000}
              severity={
                loginError ? loginAlerts.FAIL.severity : loginAlerts.OK.severity
              }
              message={
                loginError ? loginAlerts.FAIL.message : loginAlerts.OK.message
              }
            />
          </Box>
          <Grid container>
            <Grid item xs>
              <Button
                type='submit'
                variant='text'
                onClick={() => {
                  navigate(paths.forgot);
                }}
                style={{
                  color: "white",
                  textTransform: "capitalize"
                }}
              >
                {FORGOT}
              </Button>
            </Grid>
            <Grid item>
              <Link
                component='button'
                onClick={() => {
                  navigate(paths.register);
                }}
                style={{
                  color: "white",
                  textDecoration: "none"
                }}
                variant='body2'
              >
                {SIGNUP_OPT}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};
export default Login;
