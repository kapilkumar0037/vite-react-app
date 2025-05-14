export default function TodoListItem({
  todo,
  onCompletedClicked,
  onDeleteClicked,
}: any) {
  return (
    <li>
      {todo.title}
      {todo.completed ? <button onClick={()=>onDeleteClicked(todo.id)}>Delete</button> : <button onClick={()=>onCompletedClicked(todo.id)}>Complete</button>}
    </li>
  );
}
