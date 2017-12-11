import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { LoginModel } from './login.interface';
import {LOGIN} from './login.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loggedUser$: Observable<LoginModel>;

  constructor(
    private fb: FormBuilder,
    private store: Store<LoginModel>
  ) {
    this.loginForm = fb.group({
      userName : [''],
      password : ['', Validators.required],
    });

    this.loggedUser$ = this.store;
    console.log('HERE');
  }

  submitLogin() {
    this.store.dispatch({
      type: LOGIN,
      payload: this.loginForm.value
    });
  }
  ngOnInit() {
  }

}
