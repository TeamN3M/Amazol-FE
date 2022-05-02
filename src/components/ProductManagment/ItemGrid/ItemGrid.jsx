import React from 'react';
import { Grid } from '@material-ui/core';
import Item from '../Item/Item';
import { CssBaseline } from '@mui/material';
// import useStyles from './styles';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Divider from '@mui/material/Divider';

const ItemGrid = (props /*, addToCart, removeFromCart*/) => {
  // const classes = useStyles();
  if (!props.products.length) return <p>Loading...</p>;
  return (
    <>
      <Grid direction='row' spacing={2} columns={16}>
        {props.products.map((product) => (
          <Grid item key={product.id} direction='row'>
            <Item product={product} />
          </Grid>
        ))}
      </Grid>
      <CssBaseline />
    </>
  );
};

export default ItemGrid;
