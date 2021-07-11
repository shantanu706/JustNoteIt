import { createSlice } from '@reduxjs/toolkit'

export const noteSlice = createSlice({
  name: "notex",
  initialState: {
    noteBucket:[],
    count:1,
},
  reducers: {
    addNote: (state, action) => {
      action.payload.id=state.count;
      state.count += 1;
      state.noteBucket.push(action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { addNote } = noteSlice.actions

export default noteSlice.reducer