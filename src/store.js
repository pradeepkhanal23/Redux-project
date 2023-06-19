import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice.jsx";
import modalReducer from "./features/modal/modalSlice.jsx";
import productReducer from "./features/products/productSlice.jsx";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
    product: productReducer,
  },
});
