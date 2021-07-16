import { createSlice } from "@reduxjs/toolkit";
import { saveState } from "../localStorage";

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
      saveState(state.noteBucket);
    },
    deleteNote: (state, action) => {
      state.count = 0;
      for (let i = 0; i < state.noteBucket.length; i++) {
        if (i !== action.payload) {
          state.noteBucket[i].id = state.count;
          state.count += 1;
        }
      }
      state.noteBucket.splice(action.payload, 1);
      saveState(state.noteBucket);
    },
    loadNotes:(state,action) => {
      state.noteBucket = action.payload;
    }
  },
});

// Action creators are generated for each case reducer function
export const { addNote } = noteSlice.actions;

export default noteSlice.reducer;
