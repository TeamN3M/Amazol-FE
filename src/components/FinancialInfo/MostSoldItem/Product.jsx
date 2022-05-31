import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grid,
} from '@material-ui/core';

import Rating from '@mui/material/Rating';

import useStyles from './styles';

const Product = ({ product }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} title={product.item_name} elevation={0}>
      <CardMedia
        className={classes.media}
        image={product.item_pictures}
        title={product.item_name}
      />
      <CardContent>
        <div className={classes.CardContent}>
          <Grid
            container
            justifyContent='space-between'
            direction='column'
            alignItems='flex-start'
          >
            <Typography gutterBottom component='h2' className={classes.name}>
              {product.item_name}
            </Typography>
            <Typography
              className={classes.price}
              style={{ alignContent: 'right' }}
              gutterBottom
              component='h2'
              align='right'
            >
              ${product.item_price}
            </Typography>
          </Grid>
          <Grid
            alignItems='center'
            container
            justifyContent='space-between'
            direction='row'
          >
            <Rating
              name='read-only'
              precision={0.5}
              value={parseInt(product.item_rating) / 2}
              readOnly
              className={classes.rating}
            />
          </Grid>
        </div>
      </CardContent>
    </Card>
  );
};

export default Product;
