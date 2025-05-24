import { useDispatch } from "react-redux";
import { deleteTodosAsync, markCompleted } from "../store/todo-slice";
import type { AppDispatch } from "../store/store";

export default function TodoListItem({
  todo
}: any) {
   const dispatch = useDispatch<AppDispatch>(); 

  const handleDelete = (id:any) => {
    dispatch(deleteTodosAsync(id));
  };
  return (
    <tr>
      <td>{todo.title}</td>
      <td>
        {todo.completed ? (
          <button
            className="btn btn-danger"
            onClick={() => handleDelete(todo.id)}>
            Delete
          </button>
        ) : (
          <button
            className="btn btn-success"
            onClick={() => dispatch(markCompleted(todo.id))}>
            Complete
          </button>
        )}
      </td>
    </tr>
  );
}
