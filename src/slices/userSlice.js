import { createSlice } from "@reduxjs/toolkit";

// create a slice

const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "Akash",
    designation: "Manager",
    city: "Hyderabad",
  },
  reducers: {
    changeName: (state, action) => {
      state.name = action.payload;
    },
    changeDesignation: (state, action) => {
      state.designation = action.payload;
    },
    changeCity: (state, action) => {
      state.city = action.payload;
    },
  },
});

// exporting individual reducers
export const { changeCity, changeDesignation, changeName } = userSlice.actions;

// exporting all reducers as a single reducer bundle
export default userSlice.reducer;
