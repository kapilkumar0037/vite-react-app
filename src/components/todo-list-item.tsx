import { useDispatch } from "react-redux";
import { completeTodosAsync, deleteTodosAsync } from "../store/todo-slice";
import type { AppDispatch } from "../store/store";

export default function TodoListItem({
  todo
}: any) {
   const dispatch = useDispatch<AppDispatch>(); 

  return (
    <tr>
      <td>{todo.title}</td>
      <td>
        {todo.completed ? (
          <button
            className="btn btn-danger"
            onClick={() => dispatch(deleteTodosAsync(todo))}>
            Delete
          </button>
        ) : (
          <button
            className="btn btn-success"
            onClick={() => dispatch(completeTodosAsync(todo))}>
            Complete
          </button>
        )}
      </td>
    </tr>
  );
}
