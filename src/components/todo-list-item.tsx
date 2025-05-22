import { useDispatch } from "react-redux";
import { deleteTodos, markCompleted } from "../store/todo-slice";

export default function TodoListItem({
  todo
}: any) {
  const dispatch = useDispatch();

  const handleDelete = (id: number) => {
    dispatch(deleteTodos(id));
  };
  return (
    <tr>
      <td>{todo.id}</td>
      <td>{todo.title}</td>
      <td>{todo.completed.toString()}</td>
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
