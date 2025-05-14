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
      <ul>
        {completedItems.map((todo: any, index: number) => {
          return (
            <TodoListItem
              todo={todo}
              key={index}
              onDeleteClicked={onDeleteClicked}
            />
          );
        })}
      </ul>
      <h3>Todos</h3>
      <ul>
        {todos.map((todo: any, index: number) => {
          return (
            <TodoListItem
              todo={todo}
              key={index}
              onCompletedClicked={onCompletedClicked}
            />
          );
        })}
      </ul>
      <TodoForm onCreateTodo={onCreateTodo}></TodoForm>
    </div>
  );
}
