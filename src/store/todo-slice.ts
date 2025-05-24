import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { TodoList, TodoListItem } from "../models/todo.models";

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
    const response = await fetch('http://localhost:3000/todos');
    const data = await response.json();
    return data;
});

export const deleteTodosAsync = createAsyncThunk(
    'todos/deleteTodo',
    async (id: number) => {
        await fetch(`http://localhost:3000/todos/${id}`, { method: 'DELETE' });
        return id;
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
        createTodo: (state, action) => {
            state.todos = [...state.todos, action.payload];
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
                state.deletedTodos = [...state.deletedTodos, ...state.completedItems.filter((todo) => todo.isDeleted=== true)];
                state.completedItems = state.completedItems.filter((todo) => todo.id !== action.payload);
            })
    },
});

export const { createTodo, markCompleted } = todoSlice.actions;