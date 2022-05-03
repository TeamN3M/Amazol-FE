import React from 'react';
import { Grid, Typography } from '@mui/material';
// import { ThemeProvider } from '@mui/material/styles';
// import MainTheme from '../../themes/MainTheme';
import { CssBaseline } from '@mui/material';
import ItemGrid from './ItemGrid/ItemGrid';
// import { keyframes } from '@emotion/react';
// import { keyframes } from '@emotion/react';
// import ImageList from '@mui/material/ImageList';
// import ImageListItemBar from '@mui/material/ImageListItem';
// import ImageList from '@mui/material/ImageList';
// import ImageListItem from '@mui/material/ImageListItem';
// import ImageListItemBar from '@mui/material/ImageListItemBar';
// import ListSubheader from '@mui/material/ListSubheader';
// import IconButton from '@mui/material/IconButton';
// import InfoIcon from '@mui/icons-material/Info';

const products = [
  {
    id: 1,
    name: ' Item1',
    description: 'Descriprion 1 2 3 4',
    price: '100',
    rating: '1',
    quantity: '100',
    image: '../images/home page/promoted_items/item_3.jpg',
    time: '1',
    count: '1',
  },
  {
    id: 2,
    name: ' Item2',
    description: 'Descriprion 1 2 3 4',
    price: '100',
    rating: '2',
    quantity: '50',
    image: '../images/home page/promoted_items/item_4.jpg',
    time: '2',
    count: '3',
  },
  {
    id: 3,
    name: ' Item3',
    description: 'Descriprion 1 2 3 4',
    price: '100',
    rating: '2',
    quantity: '0',
    image: '../images/home page/promoted_items/item_5.jpg',
    time: '2',
    count: '1',
  },
  {
    id: 4,
    name: ' Item4',
    description: 'Descriprion 1 2 3 4',
    price: '100',
    rating: '2',
    quantity: '50',
    image: '../images/home page/promoted_items/item_6.jpg',
    time: '2',
    count: '1',
  },
  {
    id: 5,
    name: ' Item5',
    description: 'Descriprion 1 2 3 4',
    price: '100',
    rating: '2',
    quantity: '50',
    image: '../images/home page/promoted_items/item_1.jpg',
    time: '2',
    count: '1',
  },
  {
    id: 6,
    name: ' Item6',
    description: 'Descriprion 1 2 3 4',
    price: '100',
    rating: '2',
    quantity: '0',
    image: '../images/home page/promoted_items/item_2.jpg',
    time: '2',
    count: '1',
  },
  {
    id: 7,
    name: ' Item7',
    description: 'Descriprion 1 2 3 4',
    price: '100',
    rating: '2',
    quantity: '50',
    image: '../images/home page/promoted_items/item_3.jpg',
    time: '2',
    count: '1',
  },
];

const ProductManagmentPage = () =>
  /*{
    products , addToCart, removeFromCart 
  }*/
  {
    return (
      <>
        <Grid>
          <br />
          <Typography
            color={'white'}
            variant='h1'
            sx={{ alignItems: 'center' }}
          >
            &nbsp;Product Managment :
          </Typography>
          {products.length === 0 ? <p>No items in cart.</p> : null}
          <ItemGrid products={products /*, addToCart, removeFromCart */} />
        </Grid>
        <CssBaseline />
      </>
    );
  };

/*
<Wrapper>
<h2>Your Cart</h2>
{cartItems.length === 0 ? <p>No items in cart.</p> : null}
{cartItems.map((item) => (
  <CartItem
    key={item.id}
    item={item}
    addToCart={addToCart}
    removeFromCart={removeFromCart}
  />
))}
<h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
</Wrapper>
*/

export default ProductManagmentPage;
