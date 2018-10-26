import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { LoginComponent } from './login/login.component';
import {ProfileComponent} from './profile/profile.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  // logged routes
  {
    component: WelcomeComponent,
    path: ''
  },
  {
    component: TodoComponent,
    path: 'todo'
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
