import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../../lib/mockItems';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  @Input() item: Item;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToCategory() {
    this.router.navigate([`/detail/${this.item.id}`]);
  }
}
