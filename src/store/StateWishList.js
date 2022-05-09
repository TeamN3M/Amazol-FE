/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlist: undefined
};

export const sliceReducer = createSlice({
  name: "StateWishList",
  initialState,
  reducers: {
    setWishlist: (state, action) => {
      state.wishlist = action.payload;
    },
    clearWishlist: (state) => {
      state.wishlist = undefined;
    }
  }
});

export const { setWishlist, clearWishlist } = sliceReducer.actions;

export const getWishlist = (state) => state.State.wishlist;

export default sliceReducer.reducer;
