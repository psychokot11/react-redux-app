import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counterSlice";
import themeSlice from "../features/themeSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    theme: themeSlice,
  },
});
