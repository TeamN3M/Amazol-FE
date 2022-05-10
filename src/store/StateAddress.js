/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  address: undefined
};

export const sliceReducer = createSlice({
  name: "StateAddress",
  initialState,
  reducers: {
    setUserAddress: (state, action) => {
      state.address = action.payload;
    },
    clearAddress: (state) => {
      state.address = undefined;
    }
  }
});

export const { setUserAddress, clearAddress } = sliceReducer.actions;

export const getAddress = (state) => state.State.address;

export default sliceReducer.reducer;
