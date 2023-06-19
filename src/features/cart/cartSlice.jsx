import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  amount: 0,
  // total: 0,
  // defaultAmount: 1,
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
    // increase(state, { payload }) {
    //   const selectedItem = state.cartItems.find((item) => {
    //     state.defaultAmount += 1;
    //     return item.id === payload.id;
    //   });
    //   state.defaultAmount += selectedItem.price / selectedItem.price;
    // },
    // calculateTotal(state) {
    //   let amount = 1;
    //   let total = 0;
    //   state.cartItems.forEach((item) => {
    //     amount += item.amount;
    //     total += item.amount * item.price;
    //   });
    //   state.amount = amount;
    //   state.total = total;
    // },
  },
});

export default cartSlice.reducer;
export const { clearCart, addToCart, removeItem } = cartSlice.actions;
