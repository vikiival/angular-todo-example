import { Action } from '@ngrx/store';
import { LoginModel } from './login.interface';

export const LOGIN = '[LOGIN] attempting to login user';
export const LOGOUT = '[LOGIN] logouting user';

export class LoginAction implements Action {
  type = LOGIN;
  constructor(public payload: LoginModel) { }
}

export class LogoutAction implements Action {
  type = LOGOUT;
  constructor(public payload: any) { }
}


export type Actions = LoginAction | LogoutAction;
