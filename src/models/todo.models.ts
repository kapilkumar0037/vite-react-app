export interface TodoListItem {
    id: number;
    title: string;
    completed: boolean;
    isDeleted?: boolean;
  }
  export interface TodoList {
    completedItems: TodoListItem[];
    todos: TodoListItem[];
    deletedTodos: TodoListItem[];
  }