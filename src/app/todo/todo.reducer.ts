import * as TodoActions from './todo.actions';
import {TodoModel} from './todo.interface';

export interface State {
  todos: TodoModel[];
}

const defaultState: State = {
  todos: []
};

export function todoReducer(state: State = defaultState, action: TodoActions.Actions): State {
  console.log(action);
  switch (action.type) {
    case TodoActions.ADD_TODO:
      return {
        todos: [ ...state.todos, action.payload]
      };
    case TodoActions.TOGGLE_TODO:
      return {
        todos: state.todos.map(todo =>
          todo.id === action.payload.id
            ?  {...todo, completed: !todo.completed}
            : todo)
      };
    default:
      return state;
  }
}
