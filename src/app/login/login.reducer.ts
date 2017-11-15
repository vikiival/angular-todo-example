import { USERS } from '../../common/mockedData';
import * as LoginActions from './login.actions';

const defaultState = {
};

export function loginReducer(state: object = defaultState, action: LoginActions.Actions) {
  console.log(action);
  switch (action.type) {
    case 'LOGIN':
      return action.payload;
    default:
      return state;
  }

}
