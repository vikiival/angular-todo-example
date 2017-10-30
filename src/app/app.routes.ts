import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { LoginComponent } from './login/login.component';

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
];

export const RoutingModule: ModuleWithProviders = RouterModule.forRoot(routes);
