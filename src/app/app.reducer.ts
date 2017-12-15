import * as fromLogin from './login/login.reducer';
import * as fromTodo from './todo/todo.reducer';
import {ActionReducer, combineReducers} from '@ngrx/store';
import {localStorageSync} from 'ngrx-store-localstorage';
import {compose} from '@ngrx/core/compose';

export interface State {
  todos: fromTodo.State;
}

export const reducers = {
  todos: fromTodo.todoReducer,
};

export const synchronizedReducers = [
  'todos',
];

const combinedReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
  console.log(state, action);
  return combinedReducer(state, action);
}
