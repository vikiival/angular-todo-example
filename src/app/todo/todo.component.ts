import { Component, OnInit } from '@angular/core';
import { UUID } from 'angular2-uuid';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { TODOS } from '../../common/mockedData';
import {TodoModel} from './todo.interface';
import {ADD_TODO, TOGGLE_TODO} from './todo.actions';

const SHOW_ACTIVE = 'SHOW ACTIVE';
const SHOW_COMPLETED = 'SHOW COMPLETED';
const SHOW_ALL = 'SHOW ALL';

interface AppState {
  todos: TodoModel[];
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  visibility = SHOW_ALL;
  todos$: Observable<TodoModel[]>;
  todosElements: TodoModel[];

  constructor(
    private store: Store<AppState>
  ) {
    this.todos$ = this.store.select('todos');

    this.todos$.subscribe(
      elements => this.todosElements = elements
    );
  }

  handleAddTodo(event) {
    if (event.code === 'Enter') {
      this.store.dispatch({
        type: ADD_TODO,
        payload: {
          id: UUID.UUID(),
          name: event.target.value,
          completed: false
        }
      });
    }
  }

  handleRadioButton(event) {
    console.log(event.target.innerText);
    switch (event.target.innerText) {
      case SHOW_ACTIVE:
        this.todos$.subscribe(
          elements => this.todosElements = elements.filter(todo => !todo.completed)
        );
        break;
      case SHOW_COMPLETED:
        this.todos$.subscribe(
          elements => this.todosElements = elements.filter(todo => todo.completed)
        );
        break;
      default:
        this.todos$.subscribe(
          elements => this.todosElements = elements
        );
    }

    // this.visibility = event.target.innerText;
  }

  handleToggleTodo(event) {
    this.store.dispatch({
      type: TOGGLE_TODO,
      payload: {
        id: event.id
      }
    });
  }

  ngOnInit() {}

}
