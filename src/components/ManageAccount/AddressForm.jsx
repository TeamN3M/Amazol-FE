import * as React from "react";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@material-ui/styles";
import { InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {
  validateNames,
  validateEmail,
  validatePassword,
} from "../../constants/strings";

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
export default function AddressForm() {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [emailErrorText, setEmailErrorText] = useState("");
  const [password, setPassword] = useState("");
  const [passwordErrorText, setPasswordErrorText] = useState("");
  const [firstname, setFirstname] = useState("");
  const [firstnameErrorText, setFirstnameErrorText] = useState("");
  const [lastname, setLastname] = useState("");
  const [lastnameErrorText, setLastnameErrorText] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [address, setAddress] = useState("");
  const [addressErrorText, setAddressErrorText] = useState("");
  const [city, setCity] = useState("");
  const [cityErrorText, setCityErrorText] = useState("");
  const [country, setCountry] = useState("");
  const [countryErrorText, setCountryErrorText] = useState("");
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

  const handleSave = () => {
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

    if (!checkNames(lastname)) {
      setLastnameErrorText("The last name cant contain this char");
    } else if (lastname.length < 2) {
      setLastnameErrorText("The last name must contain at least 2 letters");
    } else {
      setLastnameErrorText("");
    }
    if (!address) {
      setAddressErrorText("Please enter Address");
    }
    if (!city) {
      setCityErrorText("Please enter City");
    }
    if (!country) {
      setCountryErrorText("Please enter Country");
    }
  };
  return (
    <React.Fragment>
      <Typography
        variant="h6"
        gutterBottom
        style={{
          color: "#9c8786",
        }}
      >
        Edit Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            className={classes.textField}
            margin="dense"
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
        <Grid item xs={12} sm={6}>
          <TextField
            className={classes.textField}
            margin="dense"
            fullWidth
            id="lastName"
            label="Last Name *"
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
            margin="dense"
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
            s
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            margin="dense"
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
        <Grid item>
          <Typography
            variant="h6"
            gutterBottom
            style={{
              color: "#9c8786",
            }}
          >
            Shipping Address
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            className={classes.textField}
            margin="dense"
            fullWidth
            id="address"
            label="Address *"
            name="Address"
            autoComplete="address-line"
            value={address}
            error={!!addressErrorText}
            helperText={addressErrorText}
            onChange={(e) => setAddress(e.target.value)}
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
        <Grid item xs={12} sm={6}>
          <TextField
            className={classes.textField}
            required
            id="city"
            name="city"
            label="City"
            margin="dense"
            fullWidth
            autoComplete="shipping address-level2"
            value={city}
            error={!!cityErrorText}
            helperText={cityErrorText}
            onChange={(e) => setCity(e.target.value)}
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
        <Grid item xs={12} sm={6}>
          <TextField
            className={classes.textField}
            required
            id="country"
            name="country"
            label="Country"
            margin="dense"
            fullWidth
            autoComplete="shipping country"
            value={country}
            error={!!countryErrorText}
            helperText={countryErrorText}
            onChange={(e) => setCountry(e.target.value)}
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
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button variant="contained" sx={{ mt: 3, ml: 1 }} onClick={handleSave}>
          SAVE
        </Button>
      </Box>
    </React.Fragment>
  );
}
