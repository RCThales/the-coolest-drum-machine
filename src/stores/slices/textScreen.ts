// slices/librarySlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  textScreen: "Play!",
};

const textScreenSlice = createSlice({
  name: "textScreen",
  initialState,
  reducers: {
    setTextScreen: (state, action) => {
      state.textScreen = action.payload;
    },
  },
});

export const { setTextScreen } = textScreenSlice.actions;

export default textScreenSlice.reducer;
