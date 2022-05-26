import React from 'react';
// import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
// import { DataContext } from "../Providers/DataProvider";
import Title from './Title';
// import Button from '@material-ui/core/Button';
// import { currentDay } from "../Providers/DataProvider";
// import { format } from 'date-fns';

// function preventDefault(event) {
//   event.preventDefault();
// }

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  balance: {
    display: 'flex',
  },
  balanceItem: {
    marginRight: '40px',
  },
  typography: {
    fontWeight: '10',
    fontFamily: 'system-ui',
    paddingBottom: '7px',
  },
});

export default function TotalCard({ title, amount }) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.toolbar}>
        <Title>&nbsp;&nbsp;{title}</Title>
      </div>
      <div className={classes.balance}>
        <div className={classes.balanceItem}>
          <Typography component='p' variant='h3' className={classes.typography}>
            &nbsp;&nbsp;{amount}
          </Typography>
        </div>
      </div>
    </React.Fragment>
  );
}
