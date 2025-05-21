export interface TodoListItem {
    id: number;
    title: string;
    completed: boolean;
  }
  export interface TodoList {
    completedItems: TodoListItem[];
    todos: TodoListItem[];
  }