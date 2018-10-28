import { Component, OnInit } from '@angular/core';
import { State } from '../data/data.reducer';
import { Store } from '@ngrx/store';
import { Item } from '../../lib/mockItems';

interface AppState {
  data: State;
}

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  data: Item[];

  constructor(
    private store: Store<AppState>
  ) {
    this.store.select('data').subscribe(data => {
      this.data = data.items ? data.items : [];
      console.log(this.data);
    });
  }


  ngOnInit() {
  }

}
