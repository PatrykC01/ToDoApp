import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./slices/tasksSlice.ts";
import { composeWithDevTools } from "redux-devtools-extension";

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
