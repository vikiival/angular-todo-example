import { Component, OnInit } from '@angular/core';
import { UUID } from 'angular2-uuid';

import { TODOS } from '../../common/mockedData';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos = [];
  newTodo = '';

  handleAddTodo(event) {
    if (event.code === 'Enter') {
      this.todos = [
        ...this.todos,
        {
            id: UUID.UUID(),
            name: event.target.value,
            completed: false
          }
      ]
    }
  }

  handleRadioButton(event) {
    console.log(event);
  }

  handleToggleTodo(event) {
    this.todos = this.todos.map(todo =>
      todo.id === event.id
      ?  {...todo, completed: !todo.completed}
      : todo);
  }

  constructor() { }

  ngOnInit() {
    this.todos = TODOS;
  }

}
