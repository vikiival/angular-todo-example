import { Action } from '@ngrx/store';
import { LoginModel } from './login.interface';

export const LOGIN = '[LOGIN] attempting to login user';

export class LoginAction implements Action {
  type = LOGIN;
  constructor(public payload: LoginModel) { }
}


export type Actions = LoginAction;
