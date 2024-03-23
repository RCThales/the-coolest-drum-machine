// store.js
import { configureStore } from "@reduxjs/toolkit";
import libraryReducer from "./slices/librarySlice";
import volumeReducer from "./slices/volumeSlice";
import textScreenReducer from "./slices/textScreen";

export const store = configureStore({
  reducer: {
    library: libraryReducer,
    volume: volumeReducer,
    textScreen: textScreenReducer,
  },
});
