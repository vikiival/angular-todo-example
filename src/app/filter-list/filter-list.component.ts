import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-list',
  templateUrl: './filter-list.component.html',
  styleUrls: ['./filter-list.component.css']
})
export class FilterListComponent implements OnInit {
  selectedSort = '1';
  selectedType = '1';

  constructor() { }

  ngOnInit() {
  }

}
