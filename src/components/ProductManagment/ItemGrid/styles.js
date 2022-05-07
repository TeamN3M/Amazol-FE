import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  content: {
    // flexGrow: 1,
    // backgroundColor: theme.palette.background.default,
    // padding: theme.spacing(3),
  },
  root: {
    // flexGrow: 1,
  },
  paper: {
    backgroundColor: '#888888',
  },
  summary: {
    fontSize: '2.5rem',
  },
  loading: {
    padding: '60px',
    textAlign: 'center',
    background: '#888888',
    color: 'white',
    fontSize: '30px',
  }
}));
