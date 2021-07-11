import { createSlice } from "@reduxjs/toolkit";

export const noteSlice = createSlice({
  name: "notex",
  initialState: {
    noteBucket: [],
    count: 0,
  },
  reducers: {
    addNote: (state, action) => {
      action.payload.id = state.count;
      state.noteBucket.push(action.payload);
      state.count += 1;
    },
    deleteNote: (state, action) => {
      state.count = 0;
      for (let i = 0; i < state.noteBucket.length; i++) {
        if (i !== action.payload) {
          state.noteBucket[i].id = state.count;
          state.count += 1;
        }
      }
      console.log(state.noteBucket);
      state.noteBucket.splice(action.payload, 1);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addNote } = noteSlice.actions;

export default noteSlice.reducer;
