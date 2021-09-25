// Core
import { createSelector } from "reselect";

export const selectFirstScore = createSelector(
  (state) => state.counter.firstScore,
  (firstScore) => firstScore
);

export const selectSecondScore = createSelector(
  (state) => state.counter.secondScore,
  (secondScore) => secondScore
);

export const selectThirdScore = createSelector(
  (state) => state.counter.thirdScore,
  (thirdScore) => {
    console.log("computing based on 'reselect'");
    return thirdScore;
  }
);

// export const selectFirstScore = (state) => {
//   return state.counter.firstScore;
// };
//
// export const selectSecondScore = (state) => {
//   return state.counter.secondScore;
// };
//
// export const selectThirdScore = (state) => {
//   console.log("computing based on basic redux-selector");
//   return state.counter.thirdScore;
// };
//
