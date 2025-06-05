import { createBrowserRouter } from "react-router-dom";
import TodoList from "./components/todo-list";
import Layout from "./layout/Layout";
import TodoForm from "./components/todo-form";

export const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <TodoList />,
      },
      {
        path: "add-todo",
        element: <TodoForm />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
