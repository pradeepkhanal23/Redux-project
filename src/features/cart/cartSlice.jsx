import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
  defaultAmount: 1,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart(state) {
      state.cartItems = [];
      state.amount = 0;
      state.total = 0;
    },
    addToCart(state, action) {
      state.cartItems.push(action.payload);
      state.amount += 1;
    },
    removeItem(state, action) {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      state.amount -= 1;
    },
  },
});

export default cartSlice.reducer;
export const { clearCart, addToCart, removeItem } = cartSlice.actions;
