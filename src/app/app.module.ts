import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RoutingModule } from './app.routes';
import {
  MatListModule,
  MatInputModule,
  MatRadioModule,
  MatButtonModule
} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import {metaReducers, reducers} from './app.reducer';
import { HeaderComponent } from './header/header.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CategoryComponent } from './category/category.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { ListItemComponent } from './list-item/list-item.component';
import { SearchPanelComponent } from './search-panel/search-panel.component';


const DesignModules = [
  MatListModule,
  MatInputModule,
  MatRadioModule,
  MatButtonModule,
  MatToolbarModule,
  MatCardModule,
  MatGridListModule,
  MatSelectModule,
  MatSidenavModule
];

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    LoginComponent,
    ProfileComponent,
    HeaderComponent,
    WelcomeComponent,
    CategoryComponent,
    CategoryListComponent,
    ListItemComponent,
    SearchPanelComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DesignModules,
    RoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument({ maxAge: 25 }) //  Retains last 25 states
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  exports: [
    DesignModules,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
