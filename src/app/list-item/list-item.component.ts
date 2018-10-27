import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToCategory() {
    this.router.navigate([`/`]);
  }
}
