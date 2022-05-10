/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: undefined
};

export const sliceReducer = createSlice({
  name: "StateCart",
  initialState,
  reducers: {
    setCart: (state, action) => {
      state.cart = action.payload;
    },
    clearCart: (state) => {
      state.cart = undefined;
    }
  }
});

export const { setCart, clearCart } = sliceReducer.actions;

export const getCart = (state) => state.StateCart.cart;

export default sliceReducer.reducer;
