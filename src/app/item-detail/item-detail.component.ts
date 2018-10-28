import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { State } from '../data/data.reducer';
import { Store } from '@ngrx/store';
import { Item, User } from '../../lib/mockItems';

interface AppState {
  data: State;
}

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  item: Item;
  selectedUser: User;

  constructor(private route: ActivatedRoute,
              private store: Store<AppState>) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.store.select('data').subscribe(data => {
        this.item = data.items.find(item => item.id === params.id);
        this.selectedUser = data.users.find(user => user.id === this.item.userId);
        console.log('this.item', this.item);
      });
    });
  }

}
