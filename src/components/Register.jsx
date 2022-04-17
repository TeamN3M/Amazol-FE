import * as React from "react";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import {
  SIGNUP,
  MANAGERSIGNUP,
  SIGNIN_OPT,
  OFFERS,
} from "../constants/strings";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import InfoPop from "./InfoPop";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { InputAdornment } from "@mui/material";
import { IconButton } from "@mui/material";
import paths from "../constants/paths";
import { useNavigate } from "react-router-dom";
import MainTheme from "../themes/MainTheme";
import { makeStyles } from "@material-ui/styles";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import {
  validateNames,
  validateEmail,
  validatePassword,
} from "../constants/strings";

const Register = () => {
  const [email, setEmail] = React.useState("");
  const [emailErrorText, setEmailErrorText] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordErrorText, setPasswordErrorText] = React.useState("");
  const [firstname, setFirstname] = React.useState("");
  const [firstnameErrorText, setFirstnameErrorText] = React.useState("");
  const [lastname, setLastname] = React.useState("");
  const [lastnameErrorText, setLastnameErrorText] = React.useState("");
  const navigate = useNavigate();

  const checkNames = (name) => {
    return !validateNames.test(name);
  };

  const checkEmail = (email) => {
    return !validateEmail.test(email);
  };

  const checkPassword = (password) => {
    return !validatePassword.test(password);
  };

  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleClickShowPassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setEmailErrorText("Please enter email");
    } else if (checkEmail(email)) {
      setEmailErrorText("email is not valid!");
    } else {
      setEmailErrorText("");
    }
    if (!password) {
      setPasswordErrorText("Please enter password");
    } else if (checkPassword(password)) {
      setPasswordErrorText("Invalid password !");
    } else {
      setPasswordErrorText("");
    }
    if (!firstname) {
      setFirstnameErrorText("Please enter first name");
    } else if (!checkNames(firstname)) {
      setFirstnameErrorText("The first name cant contain this char");
    } else if (firstname.length < 2) {
      setFirstnameErrorText("The first name must contain at least 2 letters");
    } else {
      setFirstnameErrorText("");
    }
    if (!lastname) {
      setLastnameErrorText("Please enter last name");
    } else if (!checkNames(lastname)) {
      setLastnameErrorText("The last name cant contain this char");
    } else if (lastname.length < 2) {
      setLastnameErrorText("The last name must contain at least 2 letters");
    } else {
      setLastnameErrorText("");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const useStyles = makeStyles({
    textFiled: {
      color: "white",
      backgroundColor: MainTheme.palette.background.default,
    },
    cssLabel: {
      color: "white",
    },

    cssOutlinedInput: {
      "&$cssFocused $notchedOutline": {
        borderColor: "#FFF",
      },
    },
    cssFocused: {},

    notchedOutline: {
      borderWidth: "1px",
      borderColor: "white !important",
    },

    input: {
      "&:-webkit-autofill": {
        WebkitBoxShadow: "0 0 0 100px #212121 inset",
        WebkitTextFillColor: "white",
      },
    },
  });
  const classes = useStyles();

  return (
    <ThemeProvider theme={MainTheme}>
      <Grid
        theme={MainTheme}
        container
        component="main"
        sx={{
          minWidth: "100%",
          height: "80vh",
          mb: 15,
        }}
      >
        <CssBaseline />
        <Grid
          theme={MainTheme}
          item
          xs={12}
          sm={8}
          md={5}
          component="main"
          elevation={6}
        >
          <Box textAlign="center">
            <Button
              type="submit"
              fullWidth
              // onClick={onSubmit}
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              startIcon={<ManageAccountsIcon />}
              style={{
                maxWidth: "400px",
                maxHeight: "50px",
                minWidth: "150px",
                minHeight: "30px",
                backgroundColor: "#161e33",
                textTransform: "capitalize",
              }}
            >
              {MANAGERSIGNUP}
            </Button>
          </Box>
          <Box
            sx={{
              my: 4,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "#161e33", color: "#fff" }}>
              <AccountBoxIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              {SIGNUP}
            </Typography>
            <Box
              theme={MainTheme}
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <CssBaseline />
              <TextField
                className={classes.textField}
                margin="normal"
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                color="secondary"
                autoFocus
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
                value={firstname}
                error={!!firstnameErrorText}
                helperText={firstnameErrorText}
                onChange={(e) => setFirstname(e.target.value)}
              />

              <TextField
                className={classes.textField}
                margin="normal"
                required
                fullWidth
                id="lastName"
                color="secondary"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
                value={lastname}
                error={!!lastnameErrorText}
                helperText={lastnameErrorText}
                onChange={(e) => setLastname(e.target.value)}
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
                margin="normal"
                required
                fullWidth
                id="email"
                color="secondary"
                label="Email Address"
                name="email"
                autoComplete="email"
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
                margin="normal"
                required
                fullWidth
                color="secondary"
                name="password"
                label="Password"
                type={passwordVisible ? "text" : "password"}
                id="password"
                autoComplete="new-password"
                InputProps={{
                  classes: {
                    root: classes.cssOutlinedInput,
                    focused: classes.cssFocused,
                    notchedOutline: classes.notchedOutline,
                    input: classes.input,
                  },
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        style={{
                          color: MainTheme.palette.text.primary,
                        }}
                      >
                        {passwordVisible ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
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

              <Box>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        value="allowExtraEmails"
                        style={{
                          color: MainTheme.palette.text.primary,
                        }}
                      />
                    }
                    label={OFFERS}
                  />
                </Grid>
              </Box>

              <Box textAlign="center">
                <Button
                  type="submit"
                  fullWidth
                  onClick={onSubmit}
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  style={{
                    maxWidth: "700px",
                    maxHeight: "50px",
                    minWidth: "350px",
                    minHeight: "30px",
                    backgroundColor: "#161e33",
                  }}
                >
                  {SIGNUP}
                </Button>
              </Box>
              <Grid item justifyContent="flex-start" sx={{ mr: 2 }}>
                <InfoPop />
              </Grid>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link
                    component="button"
                    onClick={() => {
                      navigate(paths.login);
                    }}
                    style={{
                      color: MainTheme.palette.text.primary,
                    }}
                    variant="body2"
                  >
                    {SIGNIN_OPT}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
        <Grid
          theme={MainTheme}
          item
          component="main"
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url("../images/sign up page/sign-up.jpg")`,
            backgroundRepeat: "no-repeat",
            backgroundColor: MainTheme.palette.background.default,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <CssBaseline />
      </Grid>
    </ThemeProvider>
  );
};
export default Register;
