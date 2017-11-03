import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RoutingModule } from './app.routes';
import {
  MatListModule,
  MatInputModule,
  MatRadioModule,
  MatButtonModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { LoginComponent } from './login/login.component';
import { loginReducer } from './login/login.reducer';

const DesignModules = [
  MatListModule,
  MatInputModule,
  MatRadioModule,
  MatButtonModule
];

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DesignModules,
    RoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ login: loginReducer })
  ],
  providers: [],
  exports: [
    DesignModules,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
