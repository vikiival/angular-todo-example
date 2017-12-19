import * as fromLogin from './login/login.reducer';
import * as fromTodo from './todo/todo.reducer';
import {ActionReducer, ActionReducerMap, MetaReducer} from '@ngrx/store';
import {localStorageSync} from 'ngrx-store-localstorage';

export interface State {
  todos: fromTodo.State;
}

export const reducers: ActionReducerMap<State> = {
  todos: fromTodo.todoReducer,
};

export const synchronizedReducers = [
  'todos',
];

export function localStorageSyncReducer(reducer: ActionReducer<State>): ActionReducer<State> {
  return localStorageSync({
    keys: synchronizedReducers,
    rehydrate: true
  })(reducer);
}

export const metaReducers: MetaReducer<State>[] = [localStorageSyncReducer]
