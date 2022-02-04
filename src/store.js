import { configureStore } from "@reduxjs/toolkit";
import streamingdataReducer from "./slices/streamingData/streamingdataSlice";
export const store = configureStore({
  reducer: { streamingdataReducer },
});
