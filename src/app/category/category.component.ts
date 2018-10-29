import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchCategoryDataAction } from '../data/data.actions';
import { Category } from '../../lib/mockItems';
import { State } from '../data/data.reducer';
import { Store } from '@ngrx/store';

interface AppState {
  data: State;
}

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})

export class CategoryComponent implements OnInit {
  @Input() category: Category = Category.GARDEN;
  @Input() categoryName = 'categoryName';
  @Input() imageUrl = '../../assets/image-placeholder.png';

  constructor(
    private router: Router,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
  }

  navigateToCategory() {
    this.store.dispatch(new SearchCategoryDataAction(this.category));
    this.router.navigate([`/category`]);
  }
}
