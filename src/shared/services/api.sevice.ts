import { Api } from './api';

const BASE = 'http://localhost:3000';

export class ApiService {
  todos = new Api(`${BASE}/todos`);
  
  deleteTodo(id: number): Api {
    return new Api(`${BASE}/todos/${id}`);
  }
}