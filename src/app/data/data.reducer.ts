import { Category, Item, mockItems, mockUsers, User } from '../../lib/mockItems';
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
      const searchedText: string = action.payload[0];
      const searchedRegion: string = action.payload[1];
      const filteredItems: Item[] = state.items.filter(item => item.text.match(searchedText) || item.title.match(searchedText));

      return {
        ...state,
        searchedItems: searchedRegion ? filteredItems.filter(item => item.region === searchedRegion) : filteredItems,
      };

    case dataActions.SEARCH_CATEGORY_ITEM:
      const searchedCategory: Category = action.payload;
      return {
        ...state,
        searchedItems: state.items.filter(item => item.category === searchedCategory),
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

