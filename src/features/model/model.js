import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};
const model = createSlice({
  name: "model",
  initialState,
  reducers: {
    openModel: (state, action) => {
      state.isOpen = true;
    },
    closeModel: (state, action) => {
      state.isOpen = false;
    },
  },
});
export const { openModel, closeModel } = model.actions;
export default model.reducer;
