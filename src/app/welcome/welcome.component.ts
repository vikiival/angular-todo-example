import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  selectedArea: string;
  searchedText: string;

  constructor() { }

  ngOnInit() {
  }

  scroll(el) {
    el.scrollIntoView();
  }
}
