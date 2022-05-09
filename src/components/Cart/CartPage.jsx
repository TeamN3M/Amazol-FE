import React from 'react';
import { Grid, Typography } from '@mui/material';
// import { ThemeProvider } from '@mui/material/styles';
// import MainTheme from '../../themes/MainTheme';
import { CssBaseline } from '@mui/material';
import CartGrid from './CartGrid/CartGrid';
import { keyframes } from '@emotion/react';
// import { keyframes } from '@emotion/react';
// import ImageList from '@mui/material/ImageList';
// import ImageListItemBar from '@mui/material/ImageListItem';
// import ImageList from '@mui/material/ImageList';
// import ImageListItem from '@mui/material/ImageListItem';
// import ImageListItemBar from '@mui/material/ImageListItemBar';
// import ListSubheader from '@mui/material/ListSubheader';
// import IconButton from '@mui/material/IconButton';
// import InfoIcon from '@mui/icons-material/Info';
import { useSelector, useDispatch } from 'react-redux';
import { setCart } from '../../store/StateCart';
import { getUser } from '../../store/StateUser';
import { getCartById } from '../../Services/services';
import { useState } from 'react';

const calculateTotal = (items) =>
  items.reduce((acc, item) => acc + item.quantity * item.price, 0);

const RGB = keyframes`
  0% { color: red; }
33% { color: blue; }
66% { color: green; }
100% { color: red; }
`;

const CartPage = () => {
  const [tempCart, setTempCart] = useState([]);

  const getUserCart = async (state) => {
    const user = getUser(state);
    if (user !== undefined) {
      const id = user._id;
      const res = await getCartById(id);
      console.log('here');
      if (res.status == 200) {
        console.log(res.data.items);
        setTempCart(res.data.items);
      }
    }
  };

  const state = useSelector((s) => s);

  if (tempCart.length == 0) {
    getUserCart(state);
    console.log('HERE!');
    console.log(tempCart);
    return <>Loading...</>;
  }

  const dispatch = useDispatch();
  dispatch(setCart(tempCart));
  return (
    <>
      <Grid>
        <Typography
          color={'white'}
          variant='h1'
          sx={{ animation: `${RGB} 2.5s infinite`, alignItems: 'center' }}
        >
          Your Cart :
        </Typography>
        {tempCart.length === 0 ? <p>No items in cart.</p> : null}
        <CartGrid products={tempCart} />
        <h2>Total: ${calculateTotal(tempCart).toFixed(2)}</h2>
      </Grid>

      <CssBaseline />
    </>
  );
};

export default CartPage;
