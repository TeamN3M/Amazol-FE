import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import useStyles from './styles';
import MainTheme from '../../../themes/MainTheme';

const Product = ({ product }) => {
  const classes = useStyles(MainTheme);
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={product.image}
        title={product.name}
      />
      <CardContent>
        <div className={classes.CardContent}>
          <Typography variant='h5' gutterBottom component='h2'>
            {product.name}
          </Typography>
          <Typography variant='h5' gutterBottom component='h2'>
            ${product.price}
          </Typography>
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
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label='Add to Cart'>
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;
