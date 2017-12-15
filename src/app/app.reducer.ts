import * as fromLogin from './login/login.reducer';
import * as fromTodo from './todo/todo.reducer';

// export interface State {
//   todos: fromTodo.State;
// }

export const reducers = {
  login: fromLogin.loginReducer,
  todos: fromTodo.todoReducer,
};
