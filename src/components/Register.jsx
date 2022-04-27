import * as React from 'react';
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
//import { authManager } from '../Services/services';
import {
  SIGNUP,
  MANAGERSIGNUP,
  SIGNIN_OPT,
  OFFERS,
  MANAGERREGISTER,
  ENTERCODE,
  validateNames,
  validateEmail,
  validatePassword,
} from '../constants/strings';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import InfoPop from './InfoPop';

import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Typography from '@mui/material/Typography';
//import { ThemeProvider } from "@mui/material/styles";
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { InputAdornment, Modal } from '@mui/material';
import { IconButton } from '@mui/material';
import paths from '../constants/paths';
import { useNavigate } from 'react-router-dom';
import MainTheme from '../themes/MainTheme';
import { makeStyles } from '@material-ui/styles';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

const Register = () => {
  const [email, setEmail] = React.useState('');
  const [emailErrorText, setEmailErrorText] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passwordErrorText, setPasswordErrorText] = React.useState('');
  const [firstname, setFirstname] = React.useState('');
  const [firstnameErrorText, setFirstnameErrorText] = React.useState('');
  const [lastname, setLastname] = React.useState('');
  const [lastnameErrorText, setLastnameErrorText] = React.useState('');
  //const [code, setCode] = React.useState('');
  //const [lastnameErrorText, setLastnameErrorText] = React.useState('');
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
      setEmailErrorText('Please enter email');
    } else if (checkEmail(email)) {
      setEmailErrorText('email is not valid!');
    } else {
      setEmailErrorText('');
    }
    if (!password) {
      setPasswordErrorText('Please enter password');
    } else if (checkPassword(password)) {
      setPasswordErrorText('Invalid password !');
    } else {
      setPasswordErrorText('');
    }
    if (!firstname) {
      setFirstnameErrorText('Please enter first name');
    } else if (!checkNames(firstname)) {
      setFirstnameErrorText('The first name cant contain this char');
    } else if (firstname.length < 2) {
      setFirstnameErrorText('The first name must contain at least 2 letters');
    } else {
      setFirstnameErrorText('');
    }
    if (!lastname) {
      setLastnameErrorText('Please enter last name');
    } else if (!checkNames(lastname)) {
      setLastnameErrorText('The last name cant contain this char');
    } else if (lastname.length < 2) {
      setLastnameErrorText('The last name must contain at least 2 letters');
    } else {
      setLastnameErrorText('');
    }
  };

  // const handleOnClickCode  = async (code) =>{
  //   const res = await authManager(code);
  //   if (res.status == 200)
  //       console.log("Aproved Manager");
  //   else
  //     {
  //       console.log("Dissaproved Manager");
  //       //navigate(paths.index);
  //     }
  //   }

  // };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
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
    modal: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      color: '#FFFFFF',
      width: 400,
      backgroundColor: '#212121',
      bgcolor: '#212121',
      border: '2px solid #FFF',
      boxShadow: 24,
      p: 4,
      padding: '20px',
    },
  });

  const classes = useStyles();

  return (
    <Grid
      container
      component='main'
      sx={{
        minWidth: '100%',
        height: '80vh',
        mb: 15,
      }}
    >
      <CssBaseline />
      <Grid item xs={12} sm={8} md={5} component='main' elevation={6}>
        <Box textAlign='center'>
          <Button
            type='submit'
            fullWidth
            onClick={handleOpen}
            variant='contained'
            sx={{ mt: 3, mb: 2 }}
            startIcon={<ManageAccountsIcon />}
            style={{
              maxWidth: '400px',
              maxHeight: '50px',
              minWidth: '150px',
              minHeight: '30px',
              backgroundColor: '#161e33',
              textTransform: 'capitalize',
            }}
          >
            {MANAGERSIGNUP}
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby='modal-modal-title'
            aria-describedby='modal-modal-description'
          >
            <Box className={classes.modal}>
              <Typography id='modal-modal-title' variant='h6' component='h2'>
                {MANAGERREGISTER}
              </Typography>
              <Typography id='modal-modal-description' sx={{ mt: 2 }}>
                {ENTERCODE}
              </Typography>
              <TextField
                className={classes.textField}
                margin='normal'
                required
                fullWidth
                id='code'
                color='secondary'
                autoFocus
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
                // onChange={(e) => setCode(e.target.value)}
              />
              <Grid
                className={classes.amount}
                justifyContent={'space-between'}
                container
              >
                <Button
                  variant='text'
                  className={classes.amount}
                  aria-label='reduce'
                  //onClick={handleOnClickCode(code)}
                  style={{
                    color: 'white',
                  }}
                >
                  Continue
                  <CheckCircleOutlineIcon fontSize='large' />
                </Button>
                <Button
                  variant='text'
                  className={classes.amount}
                  aria-label='increase'
                  style={{
                    color: 'white',
                  }}
                  onClick={handleClose}
                >
                  Cancle
                  <CancelOutlinedIcon fontSize='large' />
                </Button>
              </Grid>
            </Box>
          </Modal>
        </Box>
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
            <AccountBoxIcon />
          </Avatar>
          <Typography
            component='h1'
            variant='h5'
            style={{
              color: 'white',
            }}
          >
            {SIGNUP}
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
              autoComplete='given-name'
              name='firstName'
              required
              fullWidth
              id='firstName'
              label='First Name'
              color='secondary'
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
              margin='normal'
              required
              fullWidth
              id='lastName'
              color='secondary'
              label='Last Name'
              name='lastName'
              autoComplete='family-name'
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
              margin='normal'
              required
              fullWidth
              id='email'
              color='secondary'
              label='Email Address'
              name='email'
              autoComplete='email'
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
              margin='normal'
              required
              fullWidth
              color='secondary'
              name='password'
              label='Password'
              type={passwordVisible ? 'text' : 'password'}
              id='password'
              autoComplete='new-password'
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
                      value='allowExtraEmails'
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
                  maxWidth: '700px',
                  maxHeight: '50px',
                  minWidth: '350px',
                  minHeight: '30px',
                  backgroundColor: '#161e33',
                }}
              >
                {SIGNUP}
              </Button>
            </Box>
            <Grid item justifyContent='flex-start' sx={{ mr: 2 }}>
              <InfoPop />
            </Grid>
            <Grid container justifyContent='flex-end'>
              <Grid item>
                <Link
                  component='button'
                  onClick={() => {
                    navigate(paths.login);
                  }}
                  style={{
                    color: 'white',
                    textDecoration: 'none',
                  }}
                  variant='body2'
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
        component='main'
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: `url("../images/sign up page/sign-up.jpg")`,
          backgroundRepeat: 'no-repeat',
          backgroundColor: MainTheme.palette.background.default,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <CssBaseline />
    </Grid>
  );
};
export default Register;
