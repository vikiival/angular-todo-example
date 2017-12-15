import { USERS } from '../../common/mockedData';
import * as LoginActions from './login.actions';
import {LoginModel} from './login.interface';

export interface State {
  name: string;
  password: string;
}

const defaultState: State = {
  name: '',
  password: ''
};

export function loginReducer(state: State = defaultState, action: LoginActions.Actions) {
  console.log(action);
  switch (action.type) {
    case 'LOGIN':
      return action.payload;
    default:
      return state;
  }

}
