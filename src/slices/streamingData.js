import { createSlice } from "@reduxjs/toolkit";

// Localstorage package
import { saveState } from "../features/localstorage";

// Envirenemnt Global Varibale
import {
  BaseUrl,
  authentificationHeader,
  compressionTimeoutDelay,
  maximumSize,
  protectedFromCleaning,
} from "../features/global";

const initialState = {
  streamingdata: [],
  BaseUrl: BaseUrl,
  authentificationHeader: authentificationHeader,
  compressionTimeoutDelay: compressionTimeoutDelay,
  maximumSize: maximumSize,
  protectedFromCleaning: protectedFromCleaning,
  value:0
};
 
export const streamingdataSlice = createSlice({
  name: "streamingdata",
  initialState,
  reducers: {
    addfetchedata: (state, action) => {
      console.log("I am Dispatched")
      console.log(action.payload[0].key)
      state.streamingdata.push(action.payload[0].data);
   
      saveState(action.payload[0].key,action.payload[0].data,state.compressionTimeoutDelay,state.protectedFromCleaning);
    },




    
    updateDSLConfiguration: (state, action) => {
      // state.BaseUrl = "t",
      //   state.authentificationHeader = "",
      //   state.compressionTimeoutDelay = "",
      //   state.maximumSize = "",
      //   state.protectedFromCleaning = ""
    },
  },
});

// Action creators are generated for each case reducer function
export const { addfetchedata, updateDSLConfiguration } =
  streamingdataSlice.actions;

export default streamingdataSlice.reducer;
