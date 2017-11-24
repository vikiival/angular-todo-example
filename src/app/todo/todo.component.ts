import { Component, OnInit } from '@angular/core';
import { UUID } from 'angular2-uuid';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { TODOS } from '../../common/mockedData';
import {TodoModel} from './todo.interface';
import {ADD_TODO} from './todo.actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: TodoModel[];
  todos$: Observable<TodoModel[]>;

  constructor(
    private store: Store<TodoModel>
  ) {
    // this.todos$ = store.select('todos');
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
    case 'SHOW ACTIVE':
        this.todos = this.todos.filter(todo => !todo.completed);
        break;
    case 'SHOW COMPLETED':
        this.todos = this.todos.filter(todo => todo.completed);
        break;
    default:
        this.todos = TODOS;
}
  }

  handleToggleTodo(event) {
    this.todos = this.todos.map(todo =>
      todo.id === event.id
      ?  {...todo, completed: !todo.completed}
      : todo);
  }

  ngOnInit() {
    this.todos = TODOS;
  }

}
