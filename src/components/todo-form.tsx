import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "../store/todo-slice";

export default function TodoForm() {
  const [todoText, setTodoText] = useState("");
  const dispatch = useDispatch();
  return (
    <div
      style={{ display: "flex", gap: "10px", justifyContent: "space-around" }}
    >
      <input
        className="form-control"
        type="text"
        placeholder="Add a new todo"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button
        className="btn btn-primary"
        style={{ whiteSpace: "nowrap" }}
        onClick={() => {
          dispatch(createTodo({ id: 5, title: todoText, completed: false }));
          setTodoText("");
        }}
      >
        Add Todo
      </button>
    </div>
  );
}
