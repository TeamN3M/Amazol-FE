/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import {
  getCartSession,
  setCartSession,
  findCartItemIndex,
  calcCartTotal
} from "../constants/helpers";

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
    },
    addToUserCart: (state, action) => {
      const itemIndex = findCartItemIndex(state.cart.items, action.payload.id);
      console.log("items ", state.cart.items, "id ", action.payload.id);
      if (itemIndex > -1) {
        state.cart.items[itemIndex] = {
          item: action.payload.id,
          quantity:
            state.cart.items[itemIndex].quantity +
            (1 || action.payload.quantity)
        };
      } else {
        state.cart.items = [
          ...state.cart.items,
          {
            items: action.payload.item,
            quantity: action.payload.quantity || 1
          }
        ];
      }
      state.cart.total = calcCartTotal(state.cart.items);
      setCartSession(state.cart);
    },
    removeFromCart: (state, action) => {
      const prodIndex = findCartItemIndex(
        state.cart.products,
        action.payload.id
      );
      if (prodIndex > -1) {
        const newCart = [...state.cart.products];
        newCart.splice(prodIndex, 1);
        state.cart.products = newCart;
        state.cart.total = calcCartTotal(state.cart.products);
      }
      setCartSession(state.cart);
    }
  }
});

export const { setUser, logoutUser, addToUserCart, removeFromCart } =
  sliceReducer.actions;

export const getUser = (state) => state.State.user;
export const getUserCart = (state) => state.State.cart;

export default sliceReducer.reducer;
