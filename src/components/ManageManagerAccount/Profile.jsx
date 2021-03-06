import * as React from "react";
import { useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { makeStyles } from "@material-ui/styles";
import TextField from "@mui/material/TextField";
import { InputAdornment } from "@mui/material";
import { IconButton } from "@mui/material";
import {
  validateNames,
  validateEmail,
  validatePassword,
  changeInfoAlerts,
  SAVE,
} from "../../constants/strings";
import { useSelector } from "react-redux";
import { getUser } from "../../store/StateUser";
import { getJwtKey } from "../../constants/helpers";
import { setUser } from "../../store/StateUser";
import { useDispatch } from "react-redux";
import { updateUserInfo } from "../../Services/services";
import MySnackBar from "../Alerts/MySnackBar";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";

const useStyles = makeStyles({
  paperRoot: {
    backgroundColor: "#212121 !important",
    borderRadius: 20,
    borderColor: "white !important",
    padding: 50,
  },
  textFiled: {
    color: "white",
    "& .MuiFormHelperText-root": {
      color: "white",
    },
  },
  cssLabel: {
    color: "white",
    "&.Mui-focused": {
      color: "white",
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

export default function Checkout() {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    const localJwt = getJwtKey();
    const func = async () => getUser();

    if (localJwt) {
      func().then((res) => {
        if (res.status === 200) {
          dispatch(setUser(res.data.user));
        } else {
          console.log("not found");
        }
      });
    }
  }, []);

  const state = useSelector((s) => s);
  const user = getUser(state);
  const [email, setEmail] = useState(user !== undefined ? user.email : "");
  const [emailErrorText, setEmailErrorText] = useState("");
  const [password, setPassword] = useState("");
  const [passwordErrorText, setPasswordErrorText] = useState("");
  const [firstname, setFirstname] = useState(
    user !== undefined ? user.first_name : ""
  );
  const [firstnameErrorText, setFirstnameErrorText] = useState("");
  const [lastname, setLastname] = useState(
    user !== undefined ? user.last_name : ""
  );
  const [lastnameErrorText, setLastnameErrorText] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [infoFlag, setInfoFlag] = useState(false);

  const checkNames = (name) => {
    return !validateNames.test(name);
  };

  const checkEmail = (email) => {
    return !validateEmail.test(email);
  };

  const checkPassword = (password) => {
    return !validatePassword.test(password);
  };
  const handleClickShowPassword = () => {
    setPasswordVisible((prevState) => !prevState);
  };

  const handleSave = async () => {
    if (!email) {
      setEmailErrorText("Please enter email");
      return;
    } else if (checkEmail(email)) {
      setEmailErrorText("email is not valid!");
      return;
    } else {
      setEmailErrorText("");
    }
    if (!password) {
      setPasswordErrorText("Please enter password");
    } else if (checkPassword(password)) {
      setPasswordErrorText("Invalid password !");
      return;
    } else {
      setPasswordErrorText("");
    }
    if (!firstname) {
      setFirstnameErrorText("Please enter first name");
      return;
    } else if (!checkNames(firstname)) {
      setFirstnameErrorText("The first name cant contain this char");
      return;
    } else if (firstname.length < 2) {
      setFirstnameErrorText("The first name must contain at least 2 letters");
      return;
    } else {
      setFirstnameErrorText("");
    }

    if (!checkNames(lastname)) {
      setLastnameErrorText("The last name cant contain this char");
      return;
    } else if (lastname.length < 2) {
      setLastnameErrorText("The last name must contain at least 2 letters");
      return;
    } else {
      setLastnameErrorText("");
    }
    const res = await updateUserInfo(
      user._id,
      firstname,
      lastname,
      email,
      password
    );
    if (res.status == 200) {
      setInfoFlag(true);
    }
    setOpenAlert(true);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpenAlert(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [openAlert]);

  return (
    <Grid>
      <MySnackBar
        open={openAlert}
        timeout={2000}
        severity={
          infoFlag
            ? changeInfoAlerts.OK.severity
            : changeInfoAlerts.FAIL.severity
        }
        message={
          infoFlag ? changeInfoAlerts.OK.message : changeInfoAlerts.FAIL.message
        }
      />
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: "relative",
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      ></AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          classes={{ root: classes.paperRoot }}
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography
            variant="h4"
            align="center"
            style={{
              color: "white",
            }}
          >
            Edit Your Details
          </Typography>

          <Grid container spacing={3}>
            <Grid item xs={12}>
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
            </Grid>
            <Grid item xs={12}>
              <TextField
                className={classes.textField}
                margin="normal"
                fullWidth
                id="lastName"
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
            </Grid>
            <Grid item xs={12}>
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
            </Grid>
            <Grid item xs={12}>
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
            </Grid>
          </Grid>

          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              variant="contained"
              endIcon={<ChangeCircleIcon />}
              sx={{ mt: 3, ml: 1, borderRadius: 3 }}
              onClick={handleSave}
            >
              {SAVE}
            </Button>
          </Box>
        </Paper>
      </Container>
    </Grid>
  );
}
