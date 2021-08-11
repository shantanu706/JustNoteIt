import { configureStore } from "@reduxjs/toolkit";

import noteSlice from "./Reducers/noteSlice";

const store = configureStore({
  reducer: {
    notex: noteSlice,
  },
});

export default store;
