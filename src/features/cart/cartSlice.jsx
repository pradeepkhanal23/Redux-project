import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart(state) {
      state.cartItems = [];
    },
    addToCart(state, action) {
      state.cartItems.push(action.payload);
      state.amount += 1;
    },
  },
});

export default cartSlice.reducer;
export const { clearCart, addToCart } = cartSlice.actions;
