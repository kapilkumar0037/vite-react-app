import { useState } from "react";

export default function TodoForm({ onCreateTodo }: any) {
  const [todoText, setTodoText] = useState("");
  return (
    <form>
      <input
        type="text"
        placeholder="Add a new todo"
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button
        onClick={() => {
          onCreateTodo({ id: 3, title: todoText, completed: false });
          setTodoText("");
        }}
      >
        Add Todo
      </button>
    </form>
  );
}
