import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TodoList from "./components/todo-list";

function App() {
  const [completedItems, setCompletedItems] = useState([
    { id: 1, title: "Learn React", completed: true },
    { id: 2, title: "Learn TypeScript", completed: true },
  ]);

  const [todos, setTodos] = useState([
    { id: 3, title: "Learn angular", completed: false },
    { id: 4, title: "Learn Javascript", completed: false },
  ]);

  function onCompletedClicked(id: number) {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(newTodos);
    const newCompletedItems = completedItems.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setCompletedItems(newCompletedItems);
  }

  function onDeleteClicked(id: number) {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    const newCompletedItems = completedItems.filter((todo) => todo.id !== id);
    setCompletedItems(newCompletedItems);
  }

  function onCreateTodo(todo: {
    id: number;
    title: string;
    completed: boolean;
  }) {
    const newTodos = [...todos, todo];
    setTodos(newTodos);
    const newCompletedItems = [...completedItems, todo];
    setCompletedItems(newCompletedItems);
  }

  return (
    <>
      <TodoList
        completedItems={completedItems}
        todos={todos}
        onCompletedClicked={onCompletedClicked}
        onDeleteClicked={onDeleteClicked}
        onCreateTodo={onCreateTodo}
      />
    </>
  );
}

export default App;
