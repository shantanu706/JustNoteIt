import { configureStore } from '@reduxjs/toolkit';
import noteSlice from './Reducers/noteSlice';

export default configureStore({
  reducer: {
      notex: noteSlice,
    },
});