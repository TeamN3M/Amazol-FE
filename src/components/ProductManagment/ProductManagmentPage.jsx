import React from 'react';
import { Grid, Typography } from '@mui/material';
// import { ThemeProvider } from '@mui/material/styles';
// import MainTheme from '../../themes/MainTheme';
import { CssBaseline } from '@mui/material';
import ItemGrid from './ItemGrid/ItemGrid';
import { getItemById } from '../../Services/services';
import { makeStyles } from '@mui/styles';

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

// const products = [
//   {
//     id: 1,
//     name: ' Item1',
//     description: 'Descriprion 1 2 3 4',
//     price: '100',
//     rating: '1',
//     quantity: '100',
//     image: [
//       'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
//       'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
//       'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
//     ],
//     time: '1',
//     count: '1',
//   },
//   {
//     id: 2,
//     name: ' Item2',
//     description: 'Descriprion 1 2 3 4',
//     price: '100',
//     rating: '2',
//     quantity: '50',
//     image: [
//       'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
//       'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
//       'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
//     ],
//     time: '2',
//     count: '3',
//   },
//   {
//     id: 3,
//     name: ' item3',
//     description: 'lurem epusem korb djdn reno',
//     price: '104',
//     rating: '2',
//     quantity: '0',
//     category: 'Category 1',
//     image: [
//       'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
//       'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
//       'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
//     ],
//     time: '2',
//   },
//   {
//     id: 4,
//     name: ' item4',
//     description: 'lurem epusem korb djdn reno',
//     price: '1011',
//     rating: '2',
//     quantity: '50',
//     category: 'Category 3',
//     image: [
//       'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
//       'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
//       'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
//     ],
//     time: '2',
//   },
//   {
//     id: 5,
//     name: ' item5',
//     description: 'lurem epusem korb djdn reno',
//     price: '10',
//     rating: '2',
//     quantity: '50',
//     category: 'Category 3',
//     image: [
//       'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
//       'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
//       'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
//     ],
//     time: '2',
//   },
//   {
//     id: 6,
//     name: ' item6',
//     description: 'lurem epusem korb djdn reno',
//     price: '100',
//     rating: '2',
//     quantity: '0',
//     category: 'Category 2',
//     image: [
//       'https://www.maxgaming.com/bilder/artiklar/20874.jpg',
//       'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
//       'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
//     ],
//     time: '2',
//   },
//   {
//     id: 7,
//     name: ' dildo2',
//     description: 'lurem epusem korb djdn reno',
//     price: '1030',
//     rating: '2',
//     quantity: '50',
//     category: 'Category 2',
//     image: [
//       'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
//       'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
//       'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
//     ],
//     time: '2',
//   },
// ];

const useStyles = makeStyles({
  header: {
    padding: '60px',
    textAlign: 'center',
    background: '#888888',
    color: 'white',
    fontSize: '5rem',
  },
});

const ProductManagmentPage = () => {
  const [products, setProducts] = React.useState([]);
  const getProds = async () => {
    console.log('getting items');
    const res = await getItemById('');
    if (res.status == 200) {
      console.log('got items');
      console.log(res.data);
      setProducts(res.data);
    } else {
      console.log('no sex fuck u');
    }
  };
  const classes = useStyles();
  if (!products.length) getProds();
  return (
    <>
      <Grid>
        <br />
        <Typography
          color={'white'}
          variant='h1'
          sx={{ alignItems: 'center' }}
          class={classes.header}
        >
          Product Managment
        </Typography>

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
