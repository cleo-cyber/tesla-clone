import { configureStore } from '@reduxjs/toolkit';
import carReducer from '../features/car/CarSlice'
export const store = configureStore({
  reducer: {
    car:carReducer
  },
});
