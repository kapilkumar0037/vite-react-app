import { useDispatch } from "react-redux";
import { deleteToDo, markCompleted } from "../store/todo-slice";

export default function TodoListItem({
  todo
}: any) {
  const dispatch = useDispatch();

  return (
    <tr>
      <td>{todo.id}</td>
      <td>{todo.title}</td>
      <td>{todo.completed.toString()}</td>
      <td>
        {todo.completed ? (
          <button
            className="btn btn-danger"
            onClick={() => dispatch(deleteToDo(todo.id))}>
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
