import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { LoginModel } from './login.interface';
import { LOGIN } from './login.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private store: Store<LoginModel>,
  ) {
    this.loginForm = fb.group({
      userName: [''],
      password: ['', Validators.required],
    });
  }

  submitLogin() {
    this.store.dispatch({
      type: LOGIN,
      payload: this.loginForm.value
    });
    this.router.navigate(['/']);
  }

  ngOnInit() {
  }

}
