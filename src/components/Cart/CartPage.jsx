import { setCartSession } from "../../constants/helpers";
import React from "react";
import { Grid, Typography } from "@mui/material";
import { CssBaseline } from "@mui/material";
import CartGrid from "./CartGrid/CartGrid";
import { keyframes } from "@emotion/react";
import { useSelector, useDispatch } from "react-redux";
import { setCart } from "../../store/StateCart";
import { getUser } from "../../store/StateUser";
import { getCartById, getItems } from "../../Services/services";
import { useState } from "react";
import LinearProgress from "@mui/material/LinearProgress";
import { makeStyles } from "@material-ui/core/styles";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import LoadingButton from "@mui/lab/LoadingButton";
import paths from "../../constants/paths";
import { useNavigate } from "react-router-dom";

const RGB = keyframes`
  0% { color: red; }
33% { color: blue; }
66% { color: green; }
100% { color: red; }
`;

const CartPage = () => {
  const navigate = useNavigate();
  const [tempCart, setTempCart] = useState([]);
  const [allItems, setItems] = useState([]);
  const state = useSelector((s) => s);

  const handleCheckoutClick = () => {
    navigate(paths.purchase);
  };

  const useStyles = makeStyles({
    loading: {
      padding: "60px",
      textAlign: "center",
      background: "#888888",
      color: "white",
      fontSize: "30px"
    },
    header: {
      padding: "60px",
      textAlign: "center",
      background: "#888888",
      color: "white",
      fontSize: "5rem"
    }
  });
  const classes = useStyles();
  const getAllItems = async () => {
    const res = await getItems();
    if (res.status == 200) {
      // console.log("got items");
      // console.log(res.data);
      setItems(res.data);
    }
  };

  if (allItems.length == 0) {
    getAllItems();
  }

  const getUserCartByUser = async (user) => {
    if (user !== undefined) {
      const id = user._id;
      const res = await getCartById(id);
      // console.log("here");
      if (res.status == 200) {
        // console.log(res.data.items);
        setTempCart(res.data.items);
      }
    }
  };

  if (tempCart.length == 0) {
    getUserCartByUser(getUser(state));
    // console.log("Got Cart obj:");
    // console.log(tempCart);
  }

  let sum = 0;
  let text = "";
  if (allItems.length != 0 && tempCart.length != 0) {
    for (let i = 0; i < tempCart.length; i++) {
      for (let j = 0; j < allItems.length; j++) {
        if (tempCart[i].item_id == allItems[j]._id) {
          text =
            text +
            allItems[j].item_price +
            " X " +
            tempCart[i].quantity +
            " <br>";
          sum =
            sum +
            parseInt(allItems[j].item_price) * parseInt(tempCart[i].quantity);
        }
      }
    }
  } else
    return (
      <>
        <p className={classes.loading}>Loading...</p>
        <LinearProgress />
        <CssBaseline />
      </>
    );
  console.log(text);
  console.log(sum);

  const dispatch = useDispatch();
  dispatch(setCart(tempCart));
  setCartSession(tempCart);
  return (
    <>
      <Grid>
        <Typography
          color={"white"}
          variant='h1'
          sx={{ animation: `${RGB} 2.5s infinite`, alignItems: "center" }}
          class={classes.header}
        >
          Your Cart :
        </Typography>

        {tempCart.length === 0 ? <p>No items in cart.</p> : null}
        <CartGrid
          products={tempCart}
          userid={getUser(state)._id}
          sum={sum}
          reciptText={text}
        />
        <LoadingButton
          type='submit'
          fullWidth
          // onClick={navToPayment}
          variant='contained'
          sx={{ mt: 3, mb: 2 }}
          startIcon={<PaidOutlinedIcon />}
          style={{
            marginLeft: "5%",
            maxWidth: "90%",
            maxHeight: "70px",
            minWidth: "150px",
            minHeight: "50px",
            backgroundColor: "#161e33",
            textTransform: "capitalize",
            padding: "auto"
          }}
          onClick={handleCheckoutClick}
        >
          Pay now
        </LoadingButton>
      </Grid>

      <CssBaseline />
    </>
  );
};

export default CartPage;
