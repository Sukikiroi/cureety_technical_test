import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  streamingdata:[],
}

export const streamingdataSlice = createSlice({
  name: 'streamingdata',
  initialState,
  reducers: {
  
  },
})

// Action creators are generated for each case reducer function
export const {  } = streamingdataSlice.actions

export default streamingdataSlice.reducer