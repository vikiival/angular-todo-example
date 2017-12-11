import * as TodoActions from './todo.actions';
import {TodoModel} from './todo.interface';

const defaultState: TodoModel[] = [];

export function todoReducer(state: TodoModel[] = defaultState, action: TodoActions.Actions) {
  console.log(action);
  switch (action.type) {
    case TodoActions.ADD_TODO:
      return [ ...state, action.payload];
    case TodoActions.TOGGLE_TODO:
      return state.map(todo =>
        todo.id === action.payload.id
          ?  {...todo, completed: !todo.completed}
          : todo);
    default:
      return state;
  }
}
