import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { keyframes } from "@emotion/react";
import { makeStyles } from "@material-ui/styles";
import TextField from "@mui/material/TextField";
const RGB = keyframes`
    0% { color: red; }
  33% { color: blue; }
  66% { color: green; }
  100% { color: red; }
`;

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

  return (
    <Grid>
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
            variant="h5"
            sx={{ animation: `${RGB} 2.5s infinite` }}
            align="center"
          >
            Edit Your Details
          </Typography>
          <Typography variant="h6" gutterBottom>
            Edit Details
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12}>
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
            <Grid item xs={12}>
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
          </Grid>

          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button variant="contained" sx={{ mt: 3, ml: 1 }}>
              SAVE
            </Button>
          </Box>
        </Paper>
      </Container>
    </Grid>
  );
}
