import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { LoginModel } from './login.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loggedUser$: object;

  constructor(
    private fb: FormBuilder,
    private store: Store<LoginModel>
  ) {
    this.loginForm = fb.group({
      userName : [''],
      password : ['', Validators.required],
    });
  }

  submitLogin() {
    this.store.dispatch({
      type: 'LOGIN',
      payload: this.loginForm.value
    });
    console.log(this.loginForm.value);
  }
  ngOnInit() {
  }

}
