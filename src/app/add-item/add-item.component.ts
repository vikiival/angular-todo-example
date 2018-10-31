import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from '../../lib/mockItems';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  addItemForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.addItemForm = fb.group({
      // offerId: [''],
      category: [null, Validators.required],
      title: [null, Validators.required],
      text: [null, Validators.required],
      region: [null, Validators.required]
    });

  }

  ngOnInit() {
  }

  onSubmit() {
    console.log('onSubmit');
    console.log(this.addItemForm.value);
  }

}
