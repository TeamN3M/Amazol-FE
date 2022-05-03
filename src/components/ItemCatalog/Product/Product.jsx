import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Grid,
} from '@material-ui/core';
import IconButton from '@mui/material/IconButton';
import Rating from '@mui/material/Rating';
import { AddShoppingCart, Favorite } from '@material-ui/icons';
import useStyles from './styles';
//import MainTheme from "../../../themes/MainTheme";

const Product = ({ product }) => {
  const classes = useStyles();
  const inStock =
    parseInt(product.quantity) > 0
      ? '✅ In-stock (' + product.quantity + ')'
      : '❌ Not in-stock';
  return (
    <Card className={classes.root}>
      <CardActions disableSpacing className={classes.cardFavButt}>
        <IconButton aria-label='Example'>
          <Favorite />
        </IconButton>
      </CardActions>
      <CardMedia
        className={classes.media}
        image={product.image}
        title={product.name}
      />
      <CardContent>
        <div className={classes.CardContent}>
          <Grid
            alignItems='center'
            container
            justifyContent='space-between'
            direction='row'
          >
            <Typography gutterBottom component='h2' className={classes.name}>
              {product.name}
            </Typography>
            <Typography
              className={classes.price}
              style={{ alignContent: 'right' }}
              gutterBottom
              component='h2'
              align='right'
            >
              ${product.price}
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
              value={product.rating}
              readOnly
              className={classes.rating}
            />
            <span className={classes.stock}>{inStock}</span>
          </Grid>
        </div>
        {/* <Typography variant='h2' color='textSecondary'>
          {product.description}
        </Typography> */}
        <Typography
          dangerouslySetInnerHTML={{ __html: product.description }}
          variant='body2'
          color='textSecondary'
          component='p'
        />
        <Typography
          dangerouslySetInnerHTML={{ __html: product.category }}
          variant='body2'
          color='textSecondary'
          component='p'
        />
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label='Example'>
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;
