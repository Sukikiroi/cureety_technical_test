import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  streamingdata:[],
}

export const streamingdataSlice = createSlice({
  name: 'streamingdata',
  initialState,
  reducers: {
  addfetchedata:(state,action)=>{
  state.streamingdata.push(action.payload)
  }
  },
})

// Action creators are generated for each case reducer function
export const { addfetchedata } = streamingdataSlice.actions

export default streamingdataSlice.reducer