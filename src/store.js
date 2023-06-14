import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cart/cartSlice.jsx";
import modalSlice from "./features/modal/modalSlice.jsx";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    modal: modalSlice,
  },
});
