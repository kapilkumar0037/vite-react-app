import { useDispatch } from "react-redux";
import { archieveTodosAsync, completeTodosAsync, deleteTodosAsync } from "../store/todo-slice";
import type { AppDispatch } from "../store/store";
import type { TodoListItem } from "../models/todo.models";

export default function TodoListItem({
  todo
}: any) {
   const dispatch = useDispatch<AppDispatch>(); 

  return (
    <tr>
      <td>{todo.title}</td>
      <td>
        {todo.completed && todo.isDeleted ? (
          <button
            className="btn btn-danger"
            onClick={() => dispatch(deleteTodosAsync(todo))}>
            Delete
          </button>
        ) : todo.completed === false && todo.isDeleted === false? (
          <button
            className="btn btn-success"
            onClick={() => dispatch(completeTodosAsync(todo))}>
            Complete
          </button>
        ):(<button
          className="btn btn-secondary"
          onClick={() => dispatch(archieveTodosAsync(todo))}>
          Archieve
        </button>)}
      </td>
    </tr>
  );
}
