import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RoutingModule } from './app.routes';
import { MatListModule, MatInputModule, MatRadioModule } from '@angular/material';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { LoginComponent } from './login/login.component';

const DesignModules = [
  MatListModule,
  MatInputModule,
  MatRadioModule
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
    RoutingModule
  ],
  providers: [],
  exports: [
    DesignModules,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
