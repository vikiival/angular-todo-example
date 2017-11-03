import { Action } from '@ngrx/store';
import { LoginModel } from './login.interface';

export const LOGIN = 'LOGIN';

export class Login implements Action {
  type = LOGIN;
  constructor(public payload: LoginModel) { }
}


export type Actions = Login;
