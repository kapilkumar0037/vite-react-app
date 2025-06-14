import { useDispatch, useSelector } from "react-redux";
import TodoListItem from "./todo-list-item";
import { fetchTodos } from "../store/todo-slice";
import { useEffect, useState } from "react";
import type { AppDispatch } from "../store/store";
import TodoForm from "./todo-form";
import { useNavigate } from "react-router-dom";

export default function TodoList() {
  const completedItems = useSelector(
    (state: any) => state.todos.completedItems
  );
  const deletedTodos = useSelector((state: any) => state.todos.deletedTodos);
  const todos = useSelector((state: any) => state.todos.todos);
  const dispatch = useDispatch<AppDispatch>();

  //const [addTodo, setAddTodo] = useState(false);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const navigate = useNavigate();

  const navigateToAddUsers = () => {
    navigate("/add-todo");
  };
  // if (addTodo){
  //   return <TodoForm setAddTodoStatus={()=> setAddTodo(false)} />;
  // }
  // else {

  // }
  return (
    <div>
      <div className="card p-2">
        <div className="card-header border-0">
          <div className="d-flex justify-content-between">
            <h2>Todo List</h2>
            <button
              className="btn btn-primary"
              style={{ whiteSpace: "nowrap" }}
              onClick={() => {
                navigateToAddUsers();
              }}
            >
              Add Todo
            </button>
          </div>
          <ul className="nav nav-tabs" role="tablist">
            <li className="nav-item">
              <a className="nav-link active" data-bs-toggle="tab" href="#home">
                Todos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="tab" href="#menu1">
                Completed
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="tab" href="#menu2">
                Archievd
              </a>
            </li>
          </ul>
        </div>
        <div className="card-body align-items-left">
          {/* <h5 className="card-title">Special title treatment</h5> */}
          <div className="tab-content">
            <div id="home" className="container tab-pane active text-start">
              <table className="table">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">Task name</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {todos.map((todo: any, index: number) => {
                    return <TodoListItem todo={todo} key={index} />;
                  })}
                </tbody>
              </table>
            </div>
            <div id="menu1" className="container tab-pane fade text-start">
              <table className="table">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">Task name</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {completedItems.map((todo: any, index: number) => {
                    return <TodoListItem todo={todo} key={index} />;
                  })}
                </tbody>
              </table>
            </div>
            <div id="menu2" className="container tab-pane fade text-start">
              <table className="table">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">Task name</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {deletedTodos.map((todo: any, index: number) => {
                    return <TodoListItem todo={todo} key={index} />;
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
