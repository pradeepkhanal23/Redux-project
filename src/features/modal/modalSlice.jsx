import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const modalSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    closeModal(state) {
      state.isOpen = false;
    },
    openModal(state) {
      state.isOpen = true;
    },
  },
});

export default modalSlice.reducer;

export const { closeModal, openModal } = modalSlice.actions;
