/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import { getCartSession } from "../constants/helpers";

const initialState = {
  cart: getCartSession()
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

export const getCart = (state) => state.State.cart;

export default sliceReducer.reducer;
