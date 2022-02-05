import { createSlice } from '@reduxjs/toolkit'

// Localstorage package
import {saveState} from "../utiles/localstorage"

const initialState = {
  streamingdata: [],
};

export const streamingdataSlice = createSlice({
  name: 'streamingdata',
  initialState,
  reducers: {
  addfetchedata:(state,action)=>{
  state.streamingdata.push(action.payload[0])
  saveState(action.payload[0].key,action.payload[0])
  }
  },
})

// Action creators are generated for each case reducer function
export const { addfetchedata } = streamingdataSlice.actions

export default streamingdataSlice.reducer