import {Component, OnInit} from '@angular/core';
import { UUID } from 'angular2-uuid';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import {TodoModel} from './todo.interface';
import {ADD_TODO, TOGGLE_TODO} from './todo.actions';
import {State} from './todo.reducer';

const SHOW_ACTIVE = 'SHOW ACTIVE';
const SHOW_COMPLETED = 'SHOW COMPLETED';
const SHOW_ALL = 'SHOW ALL';

interface AppState {
  todos: State;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  visibility = SHOW_ALL;
  todoElements: TodoModel[];
  filteredTodos: TodoModel[];

  constructor(
    private store: Store<AppState>
  ) {

    this.store.select('todos').subscribe(data => {
      this.todoElements = data.todos;
      this.handleRadioButton(this.visibility);
    });
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
    switch (event) {
      case SHOW_ACTIVE:
        this.filteredTodos = this.todoElements.filter(todo => !todo.completed);
        break;
      case SHOW_COMPLETED:
        this.filteredTodos = this.todoElements.filter(todo => todo.completed);
        break;
      default:
        this.filteredTodos = this.todoElements;
    }

    this.visibility = event;
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
