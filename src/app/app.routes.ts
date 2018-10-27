import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';

const routes: Routes = [
  // logged routes
  {
    component: WelcomeComponent,
    path: ''
  },
  {
    component: CategoryListComponent,
    path: 'category'
  },
  {
    component: ItemDetailComponent,
    path: 'detail'
  },
  {
    component: TodoComponent,
    path: 'todo'
  },
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
