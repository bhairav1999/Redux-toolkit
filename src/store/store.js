import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./../features/cart/cartSlice";
import modelReducer from "./../features/model/model";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modelReducer,
  },
});
export default store;
