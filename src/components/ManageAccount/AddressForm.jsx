import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@material-ui/styles";

export default function AddressForm() {
  const useStyles = makeStyles({
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

  const classes = useStyles();
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Edit Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
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
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
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
            className={classes.textField}
            name="password"
            label="Password"
            id="password"
            autoComplete="current-password"
            fullWidth
            variant="standard"
            type="password"
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
            className={classes.textField}
            name="email"
            label="Email"
            id="email"
            autoComplete="current-email"
            fullWidth
            variant="standard"
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
          <Typography variant="h6" gutterBottom>
            Shipping Address
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            className={classes.textField}
            required
            id="address"
            name="address"
            label="Address line "
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
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
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
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
            fullWidth
            autoComplete="shipping country"
            variant="standard"
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
    </React.Fragment>
  );
}
