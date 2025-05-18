import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: "todos",
    initialState: {
        completedItems: [
            { id: 1, title: "Learn React", completed: true },
            { id: 2, title: "Learn TypeScript", completed: true },
        ],
        todos: [
            { id: 3, title: "Learn angular", completed: false },
            { id: 4, title: "Learn Javascript", completed: false },
        ]
    },
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
            const todo = state.todos.find((todo)=> todo.id===action.payload);
            if (!todo) return;
            state.completedItems = [...state.completedItems, { ...todo, completed: true }];
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        }

    }
});

export const { createTodo, deleteToDo, markCompleted } = todoSlice.actions;