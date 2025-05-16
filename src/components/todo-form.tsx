import { useState } from "react";

export default function TodoForm({ onCreateTodo }: any) {
  const [todoText, setTodoText] = useState("");
  return (
    <div>
      <input className="form-control"
        type="text"
        placeholder="Add a new todo"
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button className="btn btn-primary"
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
