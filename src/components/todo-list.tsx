import { useDispatch, useSelector } from "react-redux";
import TodoForm from "./todo-form";
import TodoListItem from "./todo-list-item";
import { createTodo, deleteToDo, markCompleted } from "../store/todo-slice";

export interface TodoListItem {
  id: number;
  title: string;
  completed: boolean;
}
export interface TodoList {
  completedItems: TodoListItem[];
  todos: TodoListItem[];
}

export default function TodoList() {
  const completedItems = useSelector(
    (state: any) => state.todos.completedItems
  );
  const todos = useSelector((state: any) => state.todos.todos);

  const dispatch = useDispatch();
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
                onDeleteClicked={()=> dispatch(deleteToDo(todo.id))}
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
                onCompletedClicked={()=>dispatch(markCompleted(todo.id))}
              />
            );
          })}
        </tbody>
      </table>
      <h3>Add new todo</h3>

      <TodoForm></TodoForm>
    </div>
  );
}
