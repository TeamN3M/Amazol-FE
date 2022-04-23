import { createTheme } from '@mui/material/styles';

const MainTheme = createTheme({
  palette: {
    primary: {
      main: '#000000 !important',
    },
    secondary: {
      main: '#bdbdbd !important',
    },
    background: {
      default: '#212121 !important',
    },
    text: {
      primary: '#FFFFFF !important',
      secondory: '#EEEEEE !important',
    },

    button: {
      color: '#424242 !important',
    },
  },
});

export default MainTheme;
