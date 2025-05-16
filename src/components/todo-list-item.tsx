export default function TodoListItem({
  todo,
  onCompletedClicked,
  onDeleteClicked,
}: any) {
  return (
    <tr>
      <td>{todo.id}</td>
      <td>{todo.title}</td>
      <td>{todo.completed}</td>
      <td>
      {todo.completed ? <button onClick={()=>onDeleteClicked(todo.id)}>Delete</button> : <button onClick={()=>onCompletedClicked(todo.id)}>Complete</button>}

      </td>

    </tr>
  );
}
