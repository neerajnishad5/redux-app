import { configureStore } from "@reduxjs/toolkit";

// importing default export from slices
import counterReducer from "./slices/counterSlice";
import user from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: user,
  },
});
