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
  patients: [],
  cancerOrigins: [],
  BaseUrl: BaseUrl,
  authentificationHeader: authentificationHeader,
  compressionTimeoutDelay: compressionTimeoutDelay,
  maximumSize: maximumSize,
  protectedFromCleaning: protectedFromCleaning,
  value: 0,
};

export const streamingdataSlice = createSlice({
  name: "streamingdata",
  initialState,
  reducers: {
    addfetchedata: (state, action) => {
      console.log("I am Dispatched");
      console.log(action.payload[0].key);
      state.streamingdata.push(action.payload[0].data);
      localStorage.setItem(
        action.payload[0].key,
        JSON.stringify(action.payload[0].data)
      );
      saveState(
        action.payload[0].key,
        action.payload[0].data,
        state.compressionTimeoutDelay,
        state.protectedFromCleaning
      );
    },

    updatePatients: (state, action) => {
      saveState('patients',action.payload) 
      
    },
    updatecancerOrigins: (state, action) => {
       
      saveState('cancerOrigins',action.payload)
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
export const { addfetchedata, updateDSLConfiguration ,updatePatients,updatecancerOrigins} =
  streamingdataSlice.actions;

export default streamingdataSlice.reducer;
