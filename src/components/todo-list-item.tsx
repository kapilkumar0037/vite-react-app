export default function TodoListItem({
  todo,
  onCompletedClicked,
  onDeleteClicked,
}: any) {
  return (
    <tr>
      <td>{todo.id}</td>
      <td>{todo.title}</td>
      <td>{todo.completed.toString()}</td>
      <td>
        {todo.completed ? (
          <button
            className="btn btn-danger"
            onClick={() => onDeleteClicked(todo.id)}>
            Delete
          </button>
        ) : (
          <button
            className="btn btn-success"
            onClick={() => onCompletedClicked(todo.id)}>
            Complete
          </button>
        )}
      </td>
    </tr>
  );
}
