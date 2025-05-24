import { createBrowserRouter } from "react-router-dom";
import TodoList from "./components/todo-list";
import Layout from "./layout/Layout";

export const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <TodoList />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
