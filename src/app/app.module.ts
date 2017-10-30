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

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { LoginComponent } from './login/login.component';

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
    ReactiveFormsModule
  ],
  providers: [],
  exports: [
    DesignModules,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
