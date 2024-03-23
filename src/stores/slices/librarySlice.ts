// slices/librarySlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentLibrary: null,
};

const librarySlice = createSlice({
  name: "library",
  initialState,
  reducers: {
    setCurrentLibrary: (state, action) => {
      state.currentLibrary = action.payload;
    },
  },
});

export const { setCurrentLibrary } = librarySlice.actions;

export default librarySlice.reducer;
