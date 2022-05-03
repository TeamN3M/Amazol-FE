import React from 'react';
import { Grid } from '@material-ui/core';
import Item from '../Item/Item';
import NewItem from '../NewItem/NewItem';
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
      <Grid direction='row' columns={16}>
        <Grid item key={0} direction='row'>
          <NewItem product={props.products[0]} />
        </Grid>
        {props.products.map((product) => (
          <Grid
            item
            key={product.id}
            direction='row'
            justifyContent='space-around'
            alignItems='center'
          >
            <Item product={product} />
          </Grid>
        ))}
      </Grid>
      <CssBaseline />
    </>
  );
};

export default ItemGrid;
