import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { SIGNUP, SIGNIN_OPT, OFFERS } from "../constants/strings";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

const Register = () => {

  const [email, setEmail] = React.useState("");
  const [emailErrorText, setEmailErrorText] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordErrorText, setPasswordErrorText] = React.useState("");
  const [firstname, setFirstname] = React.useState("");
  const [firstnameErrorText, setFirstnameErrorText] = React.useState("");
  const [lastname, setLastname] = React.useState("");
  const [lastnameErrorText, setLastnameErrorText] = React.useState("");

  function validateEmail (email) {
    const regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regexp.test(email);
  }
  function validateNames (name) {
    const regexp = /[^A-Za-z]+/;
    return !regexp.test(name);
  }

  const onSubmit = e => {
    e.preventDefault();
    if (!email) {
      setEmailErrorText("Please enter email");
    }
    else if(! validateEmail (email)){
      setEmailErrorText("email is not valid!");
    }
     else {
      setEmailErrorText("");
    }
    if (!password) {
      setPasswordErrorText("Please enter password");
    }
    else if(password.length<6){
      setPasswordErrorText("Your password is too short !");
    }
     else {
      setPasswordErrorText("");
    }
    if (!firstname) {
      setFirstnameErrorText("Please enter first name");
    } 
    else if( !validateNames (firstname) || firstname.length<2)   {
      setFirstnameErrorText("The first name cant contain this char");
    }
    else {
      setFirstnameErrorText("");
    }
    if (!lastname) {
      setLastnameErrorText("Please enter last name");
    } 
    else if( !validateNames(lastname) || lastname.length<2)  {
      setFirstnameErrorText("The last name cant contain this char");
    }else {
      setLastnameErrorText("");
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
    <ThemeProvider theme={theme}>
      <Grid container component='main' sx={{ height: "80vh", mb: 15 }}>
        <CssBaseline />

        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <AccountBoxIcon />
            </Avatar>
            <Typography component='h1' variant='h5'>
              {SIGNUP}
            </Typography>
            <Box
              component='form'
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin='normal'
                autoComplete='given-name'
                name='firstName'
                required
                fullWidth
                id='firstName'
                label='First Name'
                autoFocus
                value={firstname}
                error={!!firstnameErrorText}
                helperText={firstnameErrorText}
                onChange={e => setFirstname(e.target.value)}
              />
              <TextField
                margin='normal'
                required
                fullWidth
                id='lastName'
                label='Last Name'
                name='lastName'
                autoComplete='family-name'
                value={lastname}
                error={!!lastnameErrorText}
                helperText={lastnameErrorText}
                onChange={e => setLastname(e.target.value)}
              />
              <TextField
                margin='normal'
                required
                fullWidth
                id='email'
                label='Email Address'
                name='email'
                autoComplete='email'
                value={email}
                error={!!emailErrorText}
                helperText={emailErrorText}
                onChange={e => setEmail(e.target.value)}
              />
              <TextField
                margin='normal'
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='password'
                autoComplete='new-password'
                value={password}
                error={!!passwordErrorText}
                helperText={passwordErrorText}
                onChange={e => setPassword(e.target.value)}
              />
              <Box>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox value='allowExtraEmails' color='primary' />
                    }
                    label={OFFERS}
                  />
                </Grid>
              </Box>

              <Box textAlign='center'>
                <Button
                  type='submit'
                  fullWidth
                  onClick={onSubmit}
                  variant='contained'
                  sx={{ mt: 3, mb: 2 }}
                  style={{
                    maxWidth: "700px",
                    maxHeight: "50px",
                    minWidth: "350px",
                    minHeight: "30px"
                  }}
                >
                  {SIGNUP}
                </Button>
              </Box>
              <Grid container justifyContent='flex-end'>
                <Grid item>
                  <Link href='/Login' variant='body2' textTransform='ltr'>
                    {SIGNIN_OPT}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url("../images/sign up page/sign-up.jpg")`,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "contain",
            backgroundPosition: "center"
          }}
        />
      </Grid>
    </ThemeProvider>
  );
};
export default Register;
