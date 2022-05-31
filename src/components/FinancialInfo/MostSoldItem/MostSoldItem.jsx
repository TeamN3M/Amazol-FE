import React from 'react';
// import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
// import { DataContext } from "../Providers/DataProvider";
import Title from './Title';
import Product from './Product';
// import Button from '@material-ui/core/Button';
// import { currentDay } from "../Providers/DataProvider";
// import { format } from 'date-fns';
import { Chart } from 'react-google-charts';

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
  padding: {
    padding: '10px',
  },
});

export default function MostSoldItem({ title, data }) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.toolbar}>
        <Title>&nbsp;&nbsp;{title}</Title>
      </div>
      <Product product={data.bestSeller} />
      <div className={classes.balance}>
        <div className={classes.balanceItem}>
          {/* <Typography component='p' variant='h3' className={classes.typography}>
            &nbsp;&nbsp;{amount}
          </Typography> */}
        </div>
      </div>
      <div className={classes.padding}>
        <App data={data.itemCounterThisMonthArr} />
      </div>
    </React.Fragment>
  );
}

// export const data = [
//   ['Department', 'Revenues Change'],
//   ['Shoes', 10700],
//   ['Sports', -15400],
//   ['Toys', 12500],
//   ['Electronics', -2100],
//   ['Food', 22600],
//   ['Art', 1100],
// ];
export const options = {
  allowHtml: true,
  showRowNumber: true,
};
export const formatters = [
  {
    type: 'ColorFormat',
    column: 1,
    options: {
      width: 120,
    },
    ranges: [
      [-20000, 0, 'white', 'orange'],
      [20000, null, 'red', '#33ff33'],
    ],
  },
];
export function App({ data }) {
  console.log(data);
  return React.createElement(Chart, {
    chartType: 'Table',
    width: '100%',
    // height: '355px',
    data: data,
    options: options,
    formatters: formatters,
  });
}
