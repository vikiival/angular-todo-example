import { Action } from '@ngrx/store';
import { Category, Item } from '../../lib/mockItems';

export const SEARCH_ITEM = '[Search] Getting the search results';
export const ADD_ITEM = '[Search] Successfully got result of search';
export const SEARCH_CATEGORY_ITEM = '[Search] Getting the category results';

export class SearchDataAction implements Action {
  readonly type = SEARCH_ITEM;

  constructor(public payload: [string, string]) {}
}

export class SearchCategoryDataAction implements Action {
  readonly type = SEARCH_CATEGORY_ITEM;

  constructor(public payload: Category) {}
}

export class AddDataAction implements Action {
  readonly type = ADD_ITEM;

  constructor(public payload: Item) {}
}


export type Actions =
  | SearchDataAction
  | SearchCategoryDataAction
  | AddDataAction;
