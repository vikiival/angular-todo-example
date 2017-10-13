import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule, MatInputModule} from '@angular/material';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';

const DesignModules = [
  MatToolbarModule,
  MatInputModule
];

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DesignModules,
  ],
  providers: [],
  exports: [DesignModules],
  bootstrap: [AppComponent]
})
export class AppModule { }
