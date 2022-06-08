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
import { addItemToCart, addItemToFavorites } from '../../../Services/services';
import MySnackBar from '../../Alerts/MySnackBar';
import { useSelector } from 'react-redux';
import { getUser } from '../../../store/StateUser';
import { useState, useEffect } from 'react';

import ReviewModal from '../Reviews/ReviewModal';

const Product = ({ product }) => {
  const state = useSelector((s) => s);
  const user = getUser(state);

  const [cartUpdated, setCartUpdated] = useState(false);
  const [favoritesUpdated, setFavoritesUpdated] = useState(false);
  const [failedUpdate, setFailedUpdate] = useState(false);

  const classes = useStyles();

  const handleAddToCart = async (id, item) => {
    const res = await addItemToCart(id, item);
    if (res.status == 200) {
      setCartUpdated(true);
    }
  };
  const handleAddToFavorites = async (id, item) => {
    const res = await addItemToFavorites(id, item);
    if (res.status == 200) {
      setFavoritesUpdated(true);
    } else {
      setFailedUpdate(true);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setCartUpdated(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [cartUpdated]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFavoritesUpdated(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [favoritesUpdated]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFailedUpdate(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [failedUpdate]);

  const inStock =
    parseInt(product.item_quantity) > 0
      ? '✅ In-stock (' + product.item_quantity + ')'
      : '❌ Not in-stock';
  return (
    <Card className={classes.root} title={product.item_name}>
      <MySnackBar
        open={cartUpdated}
        timeout={2000}
        severity='success'
        message='Added The product to the cart.'
      />
      <MySnackBar
        open={favoritesUpdated}
        timeout={2000}
        severity='success'
        message='Added The product to the Wish List.'
      />
      <MySnackBar
        open={failedUpdate}
        timeout={2000}
        severity='warning'
        message='The product is already in the Wish List.'
      />

      <CardActions disableSpacing className={classes.cardFavButt}>
        <IconButton
          aria-label='Example'
          onClick={() => {
            handleAddToFavorites(user._id, product);
          }}
        >
          <Favorite />
        </IconButton>
      </CardActions>
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
            <span className={classes.stock}>{inStock}</span>
          </Grid>
        </div>
        {/* <Typography variant='h2' color='textSecondary'>
          {product.description}
        </Typography> */}
        <Typography
          className={classes.desc}
          dangerouslySetInnerHTML={{ __html: product.item_description }}
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
      <CardActions disableSpacing className={classes.cardContent}>
        <IconButton
          aria-label='Example'
          onClick={() => {
            handleAddToCart(user._id, product);
          }}
        >
          <AddShoppingCart />
        </IconButton>
        <ReviewModal item={product} />
      </CardActions>
    </Card>
  );
};

export default Product;
