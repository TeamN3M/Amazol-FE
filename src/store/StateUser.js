/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import { getCart } from "../constants/helpers";

const initialState = {
  user: undefined,
  cart: getCart()
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
  }
});

export const { setUser, logoutUser } = sliceReducer.actions;

export const getUser = (state) => state.State.user;

export const getUserStateCart = (state) => state.State.cart;

export default sliceReducer.reducer;
