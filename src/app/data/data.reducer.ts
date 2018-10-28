import { Item, mockItems, mockUsers, User } from '../../lib/mockItems';
import * as dataActions from './data.actions';

export interface State {
  items: Item[];
  users: User[];
  searchedItems: Item[];
  isLoading: boolean;
  loaded: boolean;
  error: any;
}

//
export const initialState: State = {
  items: mockItems,
  users: mockUsers,
  searchedItems: [],
  isLoading: true,
  loaded: false,
  error: {}
};

export function reducer(
  state = initialState,
  action: dataActions.Actions
): State {
  switch (action.type) {
    case dataActions.SEARCH_ITEM:
      return {
        ...state,
      };

    case dataActions.ADD_ITEM:
      const results = action.payload;

      return {
        ...state,
      };

    default: {
      return state;
    }
  }
}

