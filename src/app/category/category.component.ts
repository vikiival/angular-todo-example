import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  @Input() categoryName = 'categoryName';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToCategory() {
    this.router.navigate([`/category`]);
  }

}
