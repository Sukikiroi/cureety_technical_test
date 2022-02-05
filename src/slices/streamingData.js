import { createSlice } from "@reduxjs/toolkit";

// Localstorage package
import { saveState } from "../utiles/localstorage";

// Envirenemnt Global Varibale
import {
  BaseUrl,
  authentificationHeader,
  compressionTimeoutDelay,
  maximumSize,
  protectedFromCleaning,
} from "../utiles/global";

const initialState = {
  streamingdata: [],
  BaseUrl: BaseUrl,
  authentificationHeader: authentificationHeader,
  compressionTimeoutDelay: compressionTimeoutDelay,
  maximumSize: maximumSize,
  protectedFromCleaning: protectedFromCleaning,
};
console.log(initialState);
export const streamingdataSlice = createSlice({
  name: "streamingdata",
  initialState,
  reducers: {
    addfetchedata: (state, action) => {
      state.streamingdata.push(action.payload[0]);
      saveState(action.payload[0].key, action.payload[0]);
    },
    updateDSLConfiguration: (state, action) => {
      (state.BaseUrl = ""),
        (state.authentificationHeader = ""),
        (state.compressionTimeoutDelay = ""),
        (state.maximumSize = ""),
        (state.protectedFromCleaning = "");
    },
  },
});

// Action creators are generated for each case reducer function
export const { addfetchedata, updateDSLConfiguration } =
  streamingdataSlice.actions;

export default streamingdataSlice.reducer;
