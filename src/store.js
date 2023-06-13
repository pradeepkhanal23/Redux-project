import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cart/cartSlice.jsx";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});
