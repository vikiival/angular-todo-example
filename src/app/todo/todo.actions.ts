import { Action } from '@ngrx/store';
import { TodoModel } from './todo.interface';

export const ADD_TODO = '[TODO] adding Todo';
export const TOGGLE_TODO = '[TODO] setting Todo';

export class AddTodoAction implements Action {
  readonly type = ADD_TODO;
  constructor(public payload: TodoModel) { }
}

export class ToggleTodo implements Action {
  readonly type = TOGGLE_TODO;
  constructor(public payload: TodoModel) {}
}


export type Actions = AddTodoAction | ToggleTodo;
