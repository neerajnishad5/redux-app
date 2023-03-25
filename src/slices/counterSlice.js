import { createSlice } from "@reduxjs/toolkit";

// create a slice
const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 1 },
  //   reducer functions
  reducers: {
    // here state parameter represents initialState obj i.e. {value = 1}
    incrementCounterByOne: (state) => {
      // no need to write mutating logic IMMER library internally takes care of it
      state.value += 1;
    },
    // state parameter refers to initialState obj
    incrementCounterByValue: (state, action) => {
      // action obj
      console.log("action obj:", action);

      // reducer incrementing the state value by action's payload
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function : create and export action creator function
export const { incrementCounterByOne, incrementCounterByValue } =
  counterSlice.actions;

//export all reducers as a single reducer
export default counterSlice.reducer;
