import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "../store/todo-slice";

export default function TodoForm({setAddTodoStatus}: any) {
  const [todoText, setTodoText] = useState("");
  const dispatch = useDispatch();

  return (
    <div className="card text-center p-2">
      <div className="card-header border-0">
        <h3>Add new todo</h3>
      </div>
      <div className="card-body text-start">
        <input
          className="form-control"
          type="text"
          placeholder="Add a new todo"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
        <button
          className="btn btn-primary mt-3"
          style={{ whiteSpace: "nowrap" }}
          onClick={() => {
            dispatch(createTodo({ id: 5, title: todoText, completed: false }));
            setTodoText("");
            setAddTodoStatus();
          }}
        >
          Add Todo
        </button>
      </div>
    </div>
  );
}
