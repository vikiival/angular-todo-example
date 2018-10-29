import { Component, OnInit } from '@angular/core';
import { State } from '../data/data.reducer';
import { Store } from '@ngrx/store';
import { SearchDataAction } from '../data/data.actions';
import { Router } from '@angular/router';

interface AppState {
  data: State;
}

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.css']
})
export class SearchPanelComponent implements OnInit {
  selectedArea: string;
  searchedText: string;

  constructor(
    private router: Router,
    private store: Store<AppState>,
  ) { }

  ngOnInit() {
  }

  activateSearch() {
    this.store.dispatch(new SearchDataAction([this.searchedText, this.selectedArea]));
    this.router.navigate(['/search']);
  }

}
