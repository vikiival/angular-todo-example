import * as LoginActions from './login.actions';
import { mockUsers, User } from '../../lib/mockItems';
import { LOGIN, LOGOUT } from './login.actions';

export interface State {
  users: Array<User>;
  selectedUser: User;
}

const defaultState: State = {
  users: mockUsers,
  selectedUser: null
};

export function reducer(state: State = defaultState, action: LoginActions.Actions) {
  console.log(action);
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        selectedUser: state.users.find(user => user.name === action.payload.userName && user.password === action.payload.password)
      };
    case LOGOUT:
      return {
        ...state,
        selectedUser: null
      };
    default:
      return state;
  }

}
