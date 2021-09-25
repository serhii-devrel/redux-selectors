// Core
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counters",

  initialState: {
    firstScore: 0,
    secondScore: 0,
    thirdScore: 0,
  },

  reducers: {
    incrementFirst: (state) => ({
      ...state,
      firstScore: state.firstScore + 1,
    }),

    incrementSecond: (state) => ({
      ...state,
      secondScore: state.secondScore + 1,
    }),

    incrementThird: (state) => ({
      ...state,
      thirdScore: state.thirdScore + 1,
    }),
  },
});

// Exports actions
export const { incrementFirst, incrementSecond, incrementThird } =
  counterSlice.actions;

// Exports reducer
export default counterSlice.reducer;
