import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddItemComponent } from '../add-item/add-item.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    private router: Router
    ) { }

  ngOnInit() {
  }

  addItem() {
    console.log('create Item');
    this.dialog.open(AddItemComponent);
  }

  navigateTo(path) {
    this.router.navigate(['/']);
  }

}
