import { useState } from "react";

export default function TodoForm({ onCreateTodo }: any) {
  const [todoText, setTodoText] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="Add a new todo"
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button
        onClick={() => {
          onCreateTodo({ id: 5, title: todoText, completed: false });
          setTodoText("");
        }}
      >
        Add Todo
      </button>
    </div>
  );
}
