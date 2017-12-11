import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { LoginComponent } from './login/login.component';
import {ProfileComponent} from "./profile/profile.component";

const routes: Routes = [
  // logged routes
  {
    component: TodoComponent,
    path: ''
  },
  // not logged routes
  {
    component: LoginComponent,
    path: 'login'
  },
  {
    component: ProfileComponent,
    path: 'profile'
  },
];

export const RoutingModule: ModuleWithProviders = RouterModule.forRoot(routes);
