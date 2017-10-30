import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.loginForm = fb.group({
      userName : [''],
      password : ['', Validators.required],
    });
  }

  submitLogin() {
    console.log(this.loginForm.value);
  }
  ngOnInit() {
  }

}
