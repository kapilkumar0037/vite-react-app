import TodoForm from "./todo-form";
import TodoListItem from "./todo-list-item";

export interface TodoListItem {
  id: number;
  title: string;
  completed: boolean;
}
export interface TodoList {
  completedItems: TodoListItem[];
  todos: TodoListItem[];
  onCompletedClicked: (id: number) => void;
  onDeleteClicked: (id: number) => void;
  onCreateTodo: (todo: TodoListItem) => void;
}

export default function TodoList({
  completedItems,
  todos,
  onCompletedClicked,
  onDeleteClicked,
  onCreateTodo,
}: TodoList) {
  return (
    <div>
      <h1>Todo List</h1>
      <h3>Completed</h3>

      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Task name</th>
            <th scope="col">Completed</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
        {completedItems.map((todo: any, index: number) => {
          return (
            <TodoListItem
              todo={todo}
              key={index}
              onDeleteClicked={onDeleteClicked}
            />
          );
        })}
        </tbody>
      </table>
      <h3>Todos</h3>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Task name</th>
            <th scope="col">Completed</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
        {todos.map((todo: any, index: number) => {
          return (
            <TodoListItem
              todo={todo}
              key={index}
              onCompletedClicked={onCompletedClicked}
            />
          );
        })}
        </tbody>
      </table>
      <h3>Add new todo</h3>

      <TodoForm onCreateTodo={onCreateTodo}></TodoForm>
    </div>
  );
}
