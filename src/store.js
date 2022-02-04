import { configureStore } from "@reduxjs/toolkit";
import streamingdataReducer from "./slices/streamingData";
export const store = configureStore({
  reducer: { streamingdataReducer },
});
