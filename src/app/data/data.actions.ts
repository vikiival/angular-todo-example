import { Action } from '@ngrx/store';
import { Item } from '../../lib/mockItems';

export const SEARCH_ITEM = '[Search] Getting the search resul';
export const ADD_ITEM = '[Search] Successfuly got result of search';

export class SearchDataAction implements Action {
  readonly type = SEARCH_ITEM;

  constructor(public payload: string) {}
}

export class AddDataAction implements Action {
  readonly type = ADD_ITEM;

  constructor(public payload: Item) {}
}


export type Actions =
  | SearchDataAction
  | AddDataAction;
