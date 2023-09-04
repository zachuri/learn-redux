'use client';

import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '@/redux/features/counter/counterSlice';

export const store = configureStore({
  // Function that takes in an action
  // makes changes to the state and value to that specific state
  // access of current values of different states
  reducer: {
    counter: counterReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
