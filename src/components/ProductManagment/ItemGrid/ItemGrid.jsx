import React from 'react';
import { Grid } from '@material-ui/core';
import Item from '../Item/Item';
import NewItem from '../NewItem/NewItem';
import { CssBaseline } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import useStyles from './styles';
// import useStyles from './styles';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Divider from '@mui/material/Divider';

const ItemGrid = (props /*, addToCart, removeFromCart*/) => {
  const classes = useStyles();
  if (!props.products.length)
    return (
      <>
        <p className={classes.loading}>Loading...</p>
        <LinearProgress />
      </>
    );
  return (
    <>
      <Grid direction='row' columns={16}>
        <Grid item key={0} direction='row'>
          <NewItem />
        </Grid>
        {props.products.map((product) => (
          <Grid item key={product._id} direction='row'>
            <Item product={product} />
          </Grid>
        ))}
      </Grid>
      <CssBaseline />
    </>
  );
};

export default ItemGrid;
