import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { TodoList, TodoListItem } from "../models/todo.models";
import { apiService } from "../shared/services/api.sevice";

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
    const response = await apiService.todos.get();
    const data = await response.data;
    return data;
});

export const archieveTodosAsync = createAsyncThunk(
    'todos/archieveTodo',
    async (payload: TodoListItem, thunkAPI) => {
        const updatedTodo = { ...payload, isDeleted: true };
        const response = await apiService.updateTodo(updatedTodo.id).put(updatedTodo);
        thunkAPI.dispatch(fetchTodos());
        return response.data.id;
    }
);

export const deleteTodosAsync = createAsyncThunk(
    'todos/deleteTodo',
    async (payload: TodoListItem, thunkAPI) => {
        const response = await apiService.deleteTodo(payload.id).delete();
        thunkAPI.dispatch(fetchTodos());
        return response.data.id;
    }
);

export const createTodosAsync = createAsyncThunk(
    'todos/createTodo',
    async (payload: TodoListItem, thunkAPI) => {
        payload.id = Math.floor(Math.random() * 1000);
        payload.completed = false;
        payload.isDeleted = false;
        const response = await apiService.todos.post(payload);
        thunkAPI.dispatch(fetchTodos());
        return response.data;
    }
);

export const completeTodosAsync = createAsyncThunk(
    'todos/completeTodo',
    async (payload: TodoListItem, thunkAPI) => {
        const updatedTodo = { ...payload, completed: true };
        const response = await apiService.updateTodo(updatedTodo.id).put(updatedTodo);
        thunkAPI.dispatch(fetchTodos());
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

    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchTodos.fulfilled, (state, action) => {
                const todos: TodoListItem[] = action.payload;
                state.completedItems = todos.filter((todo) => todo.completed === true && todo.isDeleted === false);
                state.deletedTodos = todos.filter((todo) => todo.isDeleted === true && todo.completed === true);
                state.todos = todos.filter((todo) => todo.isDeleted === false && todo.completed === false);

            })
    },
});

export const { } = todoSlice.actions;