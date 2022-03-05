import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'store/features/counter';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
