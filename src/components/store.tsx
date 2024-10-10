import { configureStore } from '@reduxjs/toolkit';
import shelterReducer from './shelterSlice';

export const store = configureStore({
  reducer: {
    shelter: shelterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;