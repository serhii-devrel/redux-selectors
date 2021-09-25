// Core
import { configureStore } from "@reduxjs/toolkit";

// Reducers
import counter from "../features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter,
  },
});
