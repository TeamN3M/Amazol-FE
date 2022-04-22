import React from 'react';
import { Grid } from '@material-ui/core';
import Product from '../Product/Product';
import { CssBaseline } from '@mui/material';
import useStyles from './styles';

const products = [
  {
    id: 1,
    name: ' dildo1',
    description: 'For shuving up yo pussy',
    price: '100',
    image: '../images/home page/promoted_items/item_3.jpg',
  },
  {
    id: 2,
    name: ' dildo2',
    description: 'For shuving up yo pussy',
    price: '50',
    image: '../images/home page/promoted_items/item_1.jpg',
  },
  {
    id: 3,
    name: ' dildo2',
    description: 'For shuving up yo pussy',
    price: '50',
    image: '../images/home page/promoted_items/item_2.jpg',
  },
  {
    id: 4,
    name: ' dildo2',
    description: 'For shuving up yo pussy',
    price: '50',
    image: '../images/home page/promoted_items/item_2.jpg',
  },
  {
    id: 5,
    name: ' dildo1',
    description: 'For shuving up yo pussy',
    price: '100',
    image: '../images/home page/promoted_items/item_3.jpg',
  },
  {
    id: 6,
    name: ' dildo2',
    description: 'For shuving up yo pussy',
    price: '50',
    image: '../images/home page/promoted_items/item_2.jpg',
  },
];

const Products = () => {
  const classes = useStyles();
  if (!products.length) return <p>Loading...</p>;
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify='center' spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} ms={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
      <CssBaseline />
    </main>
  );
};

export default Products;
