import { configureStore } from '@reduxjs/toolkit';
import { todoSlice } from './todo-slice';

export const store = configureStore({
  reducer: {
    todos: todoSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;