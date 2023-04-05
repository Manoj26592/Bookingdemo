import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-newbooking',
  templateUrl: './newbooking.component.html',
  styleUrls: ['./newbooking.component.scss']
})
export class NewbookingComponent implements OnInit {

    parentForm = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
    isEditable = false;
  
    constructor(private _formBuilder: FormBuilder) {}

  
  ngOnInit(): void {
    
  }
  bookhotel(){
    console.log(this.parentForm.value)
  }
  }
  



