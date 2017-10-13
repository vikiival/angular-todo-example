import { Component, OnInit } from '@angular/core';

import { TODOS } from '../../common/mockedData';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos = [];
  newTodo = '';
  constructor() { }

  ngOnInit() {
    this.todos = TODOS;
  }

}
