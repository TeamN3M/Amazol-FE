/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import { getCartSession } from "../constants/helpers";

const initialState = {
  user: undefined,
  cart: getCartSession()
};

export const sliceReducer = createSlice({
  name: "State",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    logoutUser: (state) => {
      state.user = undefined;
    }
    // addToUserCart: (state, action) => {
    //   const prodIndex = findCartProductIndex(
    //     state.cart.products,
    //     action.payload.id
    //   );
    //   if (prodIndex > -1) {
    //     state.cart.products[prodIndex] = {
    //       product: action.payload.id,
    //       quantity:
    //         state.cart.products[prodIndex].quantity +
    //         (1 || action.payload.quantity)
    //     };
    //   } else {
    //     state.cart.products = [
    //       ...state.cart.products,
    //       {
    //         product: action.payload.product,
    //         quantity: action.payload.quantity || 1
    //       }
    //     ];
    //   }
    //   state.cart.total = calcCartTotal(state.cart.products);
    //   setCartSession(state.cart);
    // },
    // removeFromCart: (state, action) => {
    //   const prodIndex = findCartProductIndex(
    //     state.cart.products,
    //     action.payload.id
    //   );
    //   if (prodIndex > -1) {
    //     const newCart = [...state.cart.products];
    //     newCart.splice(prodIndex, 1);
    //     state.cart.products = newCart;
    //     state.cart.total = calcCartTotal(state.cart.products);
    //   }
    //   setCartSession(state.cart);
    // },
  }
});

export const { setUser, logoutUser } = sliceReducer.actions;

export const getUser = (state) => state.State.user;
export const getUserCart = (state) => state.State.cart;

export default sliceReducer.reducer;
