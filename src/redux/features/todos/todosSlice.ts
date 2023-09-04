'use client';

import { createSlice } from '@reduxjs/toolkit';

export interface ListState {
  title: string;
  content: string;
}

const initialState: ListState[] = [{ title: 'Start', content: 'random' }];

export const todosSlice = createSlice({
  name: 'todolist',
  initialState,
  reducers: {
    add: (state, action) => {
      const newItem = action.payload;
      state.push(newItem);
    },
    remove: (state, action) => {
      const idx = action.payload;
      return state.filter((_, index) => index !== idx);
    }
  }
});

export const { add, remove } = todosSlice.actions;

export default todosSlice.reducer;
