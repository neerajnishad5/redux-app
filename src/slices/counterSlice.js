import { createSlice } from "@reduxjs/toolkit";

createSlice({
  name: "counter",
  initialState: { value: 1 },
  reducers: {
    // here state parameter represents initial state i.e. value = 1
    incrementCounterByOne: (state) => {
      // no need to write mutating logic IMMER library internally takes care of it
      state.value += 1;
    },
    incrementCounterByValue: (state, action) => {
      console.log("action obj:", action);
    },
  },
});
