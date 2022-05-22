/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: undefined
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

export default sliceReducer.reducer;
