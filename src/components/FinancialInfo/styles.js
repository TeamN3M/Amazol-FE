import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  header: {
    padding: '60px',
    textAlign: 'center',
    background: '#888888',
    color: 'white',
    fontSize: '40px',

    // fontFamily: 'cursive',  
    fontFamily: 'system-ui',
    fontStyle:'bold',
  },
  grid: {
    padding: '60px',
    textAlign: 'center',
    color: 'white',
    fontSize: '30px',
    marginBottom: '30px',
    alignItems: 'center',
  },
  griditem:{
  borderRadius: '16px',
  alignItems: 'center',

  },
});
