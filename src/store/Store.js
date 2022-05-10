import { configureStore, combineReducers } from "@reduxjs/toolkit";
import StateReducer from "./StateUser";

const combinedReducers = combineReducers({
  State: StateReducer
});

const Store = configureStore({
  reducer: combinedReducers
});

export default Store;
