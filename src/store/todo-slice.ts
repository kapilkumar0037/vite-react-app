import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { TodoList, TodoListItem } from "../models/todo.models";
import { apiService } from "../shared/services/api.sevice";

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
    const response = await apiService.todos.get();
    const data = await response.data;
    return data;
});

export const deleteTodosAsync = createAsyncThunk(
    'todos/deleteTodo',
    async (payload: TodoListItem) => {
        payload.isDeleted = true;
        const response = await apiService.updateTodo(payload.id).put(payload);
        return response.data.id;
    }
);

export const createTodosAsync = createAsyncThunk(
    'todos/createTodo',
    async (payload: TodoListItem) => {
        payload.id = Math.floor(Math.random() * 1000);
        const response = await apiService.todos.post(payload);
        return response.data;
    }
);

export const completeTodosAsync = createAsyncThunk(
    'todos/completeTodo',
    async (payload: TodoListItem) => {
        payload.completed = true;
        const response = await apiService.updateTodo(payload.id).put(payload);
        return response.data;
    }
);
const initialState: TodoList = {
    completedItems: [],
    todos: [],
    deletedTodos: []
}
export const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
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
                const todos: TodoListItem[] = action.payload;
                state.completedItems = todos.filter((todo) => todo.completed === true);
                state.todos = todos.filter((todo) => todo.completed === false);

            })
            //   .addCase(fetchUser.rejected, (state, action) => {
            //     state.loading = false;
            //     state.error = action.error.message;
            //   });

            .addCase(deleteTodosAsync.fulfilled, (state, action) => {
                state.completedItems = state.completedItems.map((todo) => {
                    todo.id === action.payload ? todo.isDeleted = true : todo.isDeleted = false;
                    return todo;
                });
                state.deletedTodos = [...state.deletedTodos, ...state.completedItems.filter((todo) => todo.isDeleted === true)];
                state.completedItems = state.completedItems.filter((todo) => todo.id !== action.payload);
            })

            .addCase(createTodosAsync.fulfilled, (state, action) => {
                state.todos = [...state.todos, action.payload];
            })
            .addCase(completeTodosAsync.fulfilled, (state, action) => {
                const todo = state.todos.find((todo) => todo.id === action.payload);
                if (!todo) return;
                state.completedItems = [...state.completedItems, { ...todo, completed: true }];
                state.todos = state.todos.filter((todo) => todo.id !== action.payload);
            })
    },
});

export const { markCompleted } = todoSlice.actions;