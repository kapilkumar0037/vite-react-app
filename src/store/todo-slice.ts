import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { TodoList } from "../models/todo.models";
import axios from "axios";

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
    const response = await fetch('http://localhost:3000/todos');
    const data = await response.json();
    return data;
});

export const fetchCompletedTodos = createAsyncThunk('todos/completedTodos', async () => {
    const response = await fetch('http://localhost:3000/completedItems');
    const data = await response.json();
    return data;
});

export const deleteTodosAsync = createAsyncThunk(
    'todos/deleteTodo',
    async (id: number) => {
        await fetch(`http://localhost:3000/completedItems/${id}`, { method: 'DELETE' });
        return id;
    }
);

const initialState: TodoList = {
    completedItems: [],
    todos: []
}
export const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        createTodo: (state, action) => {
            state.todos = [...state.todos, action.payload];
        },
        deleteToDo: (state, action) => {
            const newTodos = state.todos.filter((todo) => todo.id !== action.payload);
            state.todos = newTodos;
            const newCompletedItems = state.completedItems.filter((todo) => todo.id !== action.payload);
            state.completedItems = newCompletedItems;

        },
        markCompleted: (state, action) => {
            const todo = state.todos.find((todo) => todo.id === action.payload);
            if (!todo) return;
            state.completedItems = [...state.completedItems, { ...todo, completed: true }];
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        }

    },

    extraReducers: (builder) => {
        builder
            //   .addCase(fetchUser.pending, (state) => {
            //     state.loading = true;
            //     state.error = null;
            //   })
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.todos = action.payload;
            })
            //   .addCase(fetchUser.rejected, (state, action) => {
            //     state.loading = false;
            //     state.error = action.error.message;
            //   });

            .addCase(fetchCompletedTodos.fulfilled, (state, action) => {
                state.completedItems = action.payload;
            })

            .addCase(deleteTodosAsync.fulfilled, (state, action) => {
                const newCompletedItems = state.completedItems.filter((todo) => todo.id !== action.payload);
                state.completedItems = newCompletedItems;
            })
    },
});

export const { createTodo, deleteToDo, markCompleted } = todoSlice.actions;