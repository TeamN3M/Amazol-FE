/* eslint-disable no-undef */
import * as React from "react";
import { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {
  SIGNUP,
  MANAGERSIGNUP,
  COSTUMERSIGNUP,
  SIGNIN_OPT,
  REGISTEROK,
  REGISTERFAIL,
  EXISTUSER,
  OFFERS,
  validateNames,
  validateEmail,
  validatePassword,
} from "../constants/strings";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import InfoPop from "./InfoPop";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import Typography from "@mui/material/Typography";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { InputAdornment } from "@mui/material";
import { IconButton } from "@mui/material";
import paths from "../constants/paths";
import { useNavigate } from "react-router-dom";
import MainTheme from "../themes/MainTheme";
import { makeStyles } from "@material-ui/styles";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { addCart, getCode, registerUser } from "../Services/services";
import MySnackBar from "./Alerts/MySnackBar";

const Register = () => {
  const [email, setEmail] = useState("");
  const [emailErrorText, setEmailErrorText] = useState("");
  const [password, setPassword] = useState("");
  const [passwordErrorText, setPasswordErrorText] = useState("");
  const [firstname, setFirstname] = useState("");
  const [firstnameErrorText, setFirstnameErrorText] = useState("");
  const [lastname, setLastname] = useState("");
  const [lastnameErrorText, setLastnameErrorText] = useState("");
  const [managerCode, setManagerCode] = useState("");
  const [managerCodeErrorText, setManagerCodeErrorText] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isManagerClicked, setIsManagerClicked] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [userType, setUserType] = useState(MANAGERSIGNUP);
  const [alertType, setAlertType] = useState({});
  const [registerFlag, setRegisterFlag] = useState(false);
  let CODE = "";
  let errorFlag = [false, false, false, false, false];

  const alerts = {
    OK: [{ severity: "success", message: REGISTEROK }],
    EXIST: [{ severity: "warning", message: EXISTUSER }],
    FAIL: [{ severity: "error", message: REGISTERFAIL }],
  };

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

  const handleClickManager = () => {
    setIsManagerClicked((prevState) => !prevState);
  };
  const handleClickShowPassword = () => {
    setPasswordVisible((prevState) => !prevState);
  };

  useEffect(() => {
    isManagerClicked ? setUserType(COSTUMERSIGNUP) : setUserType(MANAGERSIGNUP);
  }, [isManagerClicked]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpenAlert(false);

      if (registerFlag) {
        navigate(paths.login);
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [openAlert]);

  const handleValidate = async (
    managerCode,
    firstname,
    lastname,
    email,
    password
  ) => {
    const result = await getCode();
    if (result.status == 200) {
      CODE = result.data[0]["AmazolCode"];
    } else {
      console.log("ERROR IN SERVER");
    }
    if (isManagerClicked) {
      if (!managerCode) {
        setManagerCodeErrorText("Please enter code");
        errorFlag[0] = true;
      } else if (managerCode !== CODE) {
        setManagerCodeErrorText("Incorrect code");
        errorFlag[0] = true;
      } else {
        setManagerCodeErrorText("");
        errorFlag[0] = false;
      }
    }
    if (!email) {
      setEmailErrorText("Please enter email");
      errorFlag[1] = true;
    } else if (checkEmail(email)) {
      setEmailErrorText("email is not valid!");
      errorFlag[1] = true;
    } else {
      setEmailErrorText("");
      errorFlag[1] = false;
    }
    if (!password) {
      setPasswordErrorText("Please enter password");
      errorFlag[2] = true;
    } else if (checkPassword(password)) {
      setPasswordErrorText("Invalid password !");
      errorFlag[2] = true;
    } else {
      setPasswordErrorText("");
      errorFlag[2] = false;
    }
    if (!firstname) {
      setFirstnameErrorText("Please enter first name");
      errorFlag[3] = true;
    } else if (!checkNames(firstname)) {
      setFirstnameErrorText("The first name cant contain this char");
      errorFlag[3] = true;
    } else if (firstname.length < 2) {
      setFirstnameErrorText("The first name must contain at least 2 letters");
      errorFlag[3] = true;
    } else {
      setFirstnameErrorText("");
      errorFlag[3] = false;
    }

    if (!checkNames(lastname)) {
      setLastnameErrorText("The last name cant contain this char");
      errorFlag[4] = true;
    } else if (lastname.length < 2) {
      setLastnameErrorText("The last name must contain at least 2 letters");
      errorFlag[4] = true;
    } else {
      setLastnameErrorText("");
      errorFlag[4] = false;
    }

    const isAllfalse = (value) => value === false;
    if (errorFlag.every(isAllfalse)) {
      const res = await registerUser(
        managerCode,
        firstname,
        lastname,
        email,
        password
      );

      if (res.status === 200) {
        setAlertType(alerts["OK"][0]);
        const resCart = await addCart(res.data._id);
        if (resCart.status == 200) {
          console.log("add cart user");
        }
        setRegisterFlag(true);
      } else if (res.code === 400) {
        if (res.msg["error"] === "user exists") {
          setAlertType(alerts["EXIST"][0]);
        } else {
          setAlertType(alerts["FAIL"][0]);
        }
      }
      setOpenAlert(true);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const code = data.get("code");
    const fname = data.get("firstName");
    const lname = data.get("lastName");
    const email = data.get("email");
    const password = data.get("password");

    handleValidate(code, fname, lname, email, password);
  };

  const useStyles = makeStyles({
    textFiled: {
      color: "white",
      backgroundColor: MainTheme.palette.background.default,
    },
    cssLabel: {
      color: "white",
      "&.Mui-focused": {
        color: "white",
      },
      "& .MuiInputBase-root.Mui-disabled": {
        color: "rgba(0, 0, 0, 0.6) !important", // (default alpha is 0.38)
      },
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
      color: "white",
      "&:-webkit-autofill": {
        WebkitBoxShadow: "0 0 0 100px #212121 inset",
        WebkitTextFillColor: "white",
      },
    },
  });

  const classes = useStyles();

  return (
    <Grid
      container
      component="main"
      sx={{
        minWidth: "100%",
        height: "80vh",
        mb: 15,
      }}
    >
      <CssBaseline />
      <Grid item xs={12} sm={8} md={5} component="main" elevation={6}>
        <Box textAlign="center">
          <Button
            type="submit"
            fullWidth
            onClick={handleClickManager}
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            startIcon={
              isManagerClicked ? <AccountCircleIcon /> : <ManageAccountsIcon />
            }
            style={{
              maxWidth: "400px",
              maxHeight: "50px",
              minWidth: "150px",
              minHeight: "30px",
              backgroundColor: "#161e33",
              textTransform: "capitalize",
            }}
          >
            {userType}
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
          <Typography
            component="h1"
            variant="h5"
            style={{
              color: "white",
            }}
          >
            {SIGNUP}
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            <CssBaseline />
            {isManagerClicked ? (
              <TextField
                className={classes.textField}
                margin="normal"
                autoComplete
                name="code"
                required
                fullWidth
                id="code"
                label="Manager Code"
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
                value={managerCode}
                error={!!managerCodeErrorText}
                helperText={managerCodeErrorText}
                onChange={(e) => setManagerCode(e.target.value)}
              />
            ) : null}
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
                        color: "white",
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
                      sx={{
                        color: "#FFFFFF",
                        "&.Mui-checked": {
                          color: "#FFFFFF",
                        },
                      }}
                    />
                  }
                  style={{
                    color: "white",
                  }}
                  label={OFFERS}
                />
              </Grid>
            </Box>

            <Box textAlign="center">
              <Button
                type="submit"
                fullWidth
                // onClick={handleSubmit}
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
            <MySnackBar
              open={openAlert}
              timeout={3000}
              severity={alertType.severity}
              message={alertType.message}
            />
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link
                  component="button"
                  onClick={() => {
                    navigate(paths.login);
                  }}
                  style={{
                    color: "white",
                    textDecoration: "none",
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
  );
};
export default Register;
