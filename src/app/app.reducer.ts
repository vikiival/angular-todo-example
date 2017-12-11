import { loginReducer } from './login/login.reducer';
import { todoReducer } from './todo/todo.reducer';

export const reducers = {
  login: loginReducer,
  todos: todoReducer
};
