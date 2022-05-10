import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  //   Grid,
} from '@material-ui/core';
import Box from '@mui/material/Box';

import Rating from '@mui/material/Rating';
// import { AddShoppingCart } from '@material-ui/icons';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import useStyles from './styles';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { getItemById } from '../../../Services/services';
//import MainTheme from "../../../themes/MainTheme";

// const styleForPaper = {
//   width: '96vw',
//   height: '20vh',
//   margin: 20,
//   textAlign: 'center',
//   display: 'inline-block',
// };

const styleForButton = {
  marginTop: '9vh',
};
const styleForIcon = {
  width: '2vw',
  height: '3vh',
};
// const styleForPrice = {
//   font: '5rem',
// };

const Product = (productIdAndQuantity) => {
  const [product, setProduct] = React.useState(false);

  const getProdDetails = async () => {
    console.log('looking for item ');
    console.log(productIdAndQuantity);

    const res = await getItemById(productIdAndQuantity.product.item_id);
    if (res.status == 200) {
      console.log('Found Item ' + productIdAndQuantity.product.item_id);
      console.log(res.data);
      setProduct(res.data);
    } else {
      console.log('No sexs Fk you');
    }
  };

  const [count, setCount] = React.useState(
    productIdAndQuantity.product.quantity
  );
  const [itemVisible, setItemVisible] = React.useState(true);
  const classes = useStyles();
  const inStock =
    parseInt(product.item_quantity) > 0
      ? '✅ In-stock (' + product.item_quantity + ')'
      : '❌ Not in-stock';
  if (itemVisible != true) return <></>;
  if (!product) {
    getProdDetails();
    return <></>;
  }

  return (
    <Card className={classes.root} sx={{ display: 'flex' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          border: 'solid 1px grey',
        }}
      >
        <CardMedia
          className={classes.media}
          image={product.item_pictures[0]}
          title={product.item_name}
          component='img'
          height={'25%'}
          width={'25%'}
          align={'left'}
        />
        <CardContent>
          <div className={classes.CardContent}></div>

          <Typography component='h2' className={classes.name}>
            {product.item_name}
          </Typography>
          <Rating
            name='read-only'
            value={product.item_rating}
            readOnly
            className={classes.rating}
          />

          <span className={classes.stock}>{inStock}</span>
          <Typography
            dangerouslySetInnerHTML={{ __html: product.item_description }}
            variant='body2'
            color='textSecondary'
            component='p'
          />
        </CardContent>
        <Divider orientation='vertical' variant='middle' flexItem />
        <CardContent>
          <Box>
            {' '}
            <Typography
              className={classes.price}
              style={{ alignContent: 'right', fontSize: '3rem' }}
              gutterBottom
            >
              ${product.item_price}
            </Typography>
            <ButtonGroup className={classes.amount}>
              <Button
                variant='text'
                className={classes.amount}
                aria-label='reduce'
                onClick={() => {
                  setCount(Math.max(count - 1, 0));
                }}
              >
                <RemoveIcon fontSize='large' />
              </Button>
              <Button variant='text' disabled>
                <Typography
                  className={classes.amount}
                  style={{ alignContent: 'center', fontSize: '1.5rem' }}
                  gutterBottom
                >
                  {' '}
                  {count}
                </Typography>
              </Button>
              <Button
                variant='text'
                className={classes.amount}
                aria-label='increase'
                onClick={() => {
                  setCount(count + 1);
                }}
              >
                <AddIcon fontSize='large' />
              </Button>
            </ButtonGroup>
          </Box>
        </CardContent>
        <CardActions disableSpacing className={classes.cardActions}>
          <IconButton
            aria-label='Example'
            style={styleForButton}
            onClick={() => {
              setItemVisible(false);
            }}
          >
            <DeleteForeverIcon style={styleForIcon} />
          </IconButton>
        </CardActions>
      </Box>
    </Card>
  );
};

export default Product;
