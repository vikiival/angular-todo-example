import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Item, User } from '../../lib/mockItems';
import { State } from '../data/data.reducer';
import { State as UserState } from '../login/login.reducer';
import { Store } from '@ngrx/store';
import { AddDataAction } from '../data/data.actions';
import { v4 as uuid } from 'uuid';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import { isNewExpression } from 'tsutils';

interface AppState {
  data: State;
  user: UserState;
}

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  addItemForm: FormGroup;
  selectedUser: User;

  constructor(
    private dialogRef: MatDialogRef<AddItemComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private store: Store<AppState>,
    private router: Router,
  ) {
    this.addItemForm = fb.group({
      // offerId: [''],
      category: [null, Validators.required],
      title: [null, Validators.required],
      text: [null, Validators.required],
      region: [null, Validators.required]
    });

    this.store.select('user').subscribe(user => {
      this.selectedUser = user.selectedUser;
    });

  }

  ngOnInit() {
  }

  onSubmit() {
    const {id, photo} = this.selectedUser;
    const newItemId = uuid();
    console.log('onSubmit');
    console.log(this.addItemForm.value);

    const newItem: Item = {
      ...this.addItemForm.value,
      id: newItemId,
      userId: id,
      photo,
    };
    this.store.dispatch(new AddDataAction(newItem));
    this.close();
    this.router.navigate([`/detail/${newItemId}`]);
  }

  close() {
    this.dialogRef.close();
  }

}
