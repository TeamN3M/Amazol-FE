import React from 'react';
import { Grid } from '@material-ui/core';
import CartItem from '../CartItem/CartItem';
import { CssBaseline, Typography } from '@mui/material';
import useStyles from './styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';

const calculateTotal = (items) =>
  items.reduce((acc, item) => acc + item.count * item.price, 0);

const CartGrid = (props /*, addToCart, removeFromCart*/) => {
  const classes = useStyles();
  if (!props.products.length) return <p>Loading...</p>;
  return (
    <Grid container direction='row' spacing={2} columns={16}>
      <Grid item xs={8}>
        <Grid container direction='column' justify='center' spacing={4}>
          {props.products.map((product) => (
            <Grid item key={product.id} direction='row'>
              <CartItem product={product} />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={4}>
        <Box
          fontSize={'80px'}
          sx={{
            paddingTop: '2%',
            paddingRight: '2%',
            height: '100%',
            width: '100%',
          }}
        >
          <Paper
            className={classes.paper}
            sx={{
              height: '100%',
            }}
          >
            <Typography className={classes.summary}>&nbsp;Summary</Typography>

            <Divider></Divider>
            <Typography className={classes.summary}>
              &nbsp;Total: &nbsp;${calculateTotal(props.products).toFixed(2)}
            </Typography>
          </Paper>
        </Box>
      </Grid>
      <CssBaseline />
    </Grid>
  );
};

export default CartGrid;
