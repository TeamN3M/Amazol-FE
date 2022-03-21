import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { SIGNIN, FORGOT, SIGNUP_OPT } from "../constants/strings";
import paths from "../constants/paths";
import { useNavigate } from "react-router-dom";

const theme = createTheme();

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [emailErrorText, setEmailErrorText] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordErrorText, setPasswordErrorText] = React.useState("");
  const navigate = useNavigate();

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
    <ThemeProvider theme={theme}>
      <Grid container component='main' sx={{ height: "80vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url("../images/sign in page/sign-in.jpg")`,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />
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
              <LockOutlinedIcon />
            </Avatar>
            <Typography component='h1' variant='h5'>
              {SIGNIN}
            </Typography>
            <Box
              component='form'
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin='normal'
                required
                fullWidth
                id='email'
                label='Email Address'
                name='email'
                autoComplete='email'
                autoFocus
                value={email}
                error={!!emailErrorText}
                helperText={emailErrorText}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                margin='normal'
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='password'
                autoComplete='current-password'
                value={password}
                error={!!passwordErrorText}
                helperText={passwordErrorText}
                onChange={(e) => setPassword(e.target.value)}
              />
              <FormControlLabel
                control={<Checkbox value='remember' color='primary' />}
                label='Remember me'
              />
              <Button
                type='submit'
                onClick={onSubmit}
                fullWidth
                variant='contained'
                sx={{ mt: 3, mb: 2 }}
              >
                {SIGNIN}
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href='/' variant='body2'>
                    {FORGOT}
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    component='button'
                    onClick={() => {
                      navigate(paths.register);
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
