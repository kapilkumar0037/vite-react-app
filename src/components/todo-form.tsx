import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTodosAsync, setStatus } from "../store/todo-slice";
import type { AppDispatch } from "../store/store";
import { useNavigate } from "react-router-dom";
import type { TodoList } from "../models/todo.models";

export default function TodoForm() {
  const [todoText, setTodoText] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const navigate = useNavigate();

  const status = useSelector((state: any) => state.todos.status);

  useEffect(() => {
    if (status === "succeeded") {
      dispatch(setStatus("idle"));
      navigate("/"); 

    }
  }, [status, navigate]);
  
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
            dispatch(
              createTodosAsync({ id: 6, title: todoText, completed: false })
            );
            setTodoText("");
          }}
        >
          Add Todo
        </button>
      </div>
    </div>
  );
}
