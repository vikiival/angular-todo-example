import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddItemComponent } from '../add-item/add-item.component';
import { Router } from '@angular/router';
import { State as UserState } from '../login/login.reducer';
import { Store } from '@ngrx/store';
import { User } from '../../lib/mockItems';


interface AppState {
  user: UserState;
}


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  selectedUser: User;

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private store: Store<AppState>,
    ) {
    this.store.select('user').subscribe(user => {
      this.selectedUser = user.selectedUser;
    });
  }

  ngOnInit() {
  }

  addItem() {
    console.log('create Item');
    this.dialog.open(AddItemComponent);
  }

  navigateTo(path) {
    this.router.navigate([path]);
  }

}
