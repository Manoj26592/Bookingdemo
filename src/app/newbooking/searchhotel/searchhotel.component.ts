import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';

@Component({
  selector: 'app-searchhotel',
  templateUrl: './searchhotel.component.html',
  styleUrls: ['./searchhotel.component.scss']
})
export class SearchhotelComponent implements OnInit{
  searchhotel: any;
  fb: any;
  parentForm: any;
  ngOnInit(): void {
   
  }
  // searchhotel!:FormGroup
  // parentForm!: FormGroup;
  // createform: any;
  // options: string[] = ['One', 'Two', 'Three'];
  // filteredOptions: Observable<string[]> | undefined;
  // myControl: any;
  // createform: any;

  // constructor(private fb:FormBuilder,private formContainer:FormGroupDirective){

  // }
  // ngOnInit(): void {
  //   this.createform()
  //   this.parentForm=this.formContainer.form;
  //   if(this.parentForm){
  //     this.parentForm.addControl("searchhotel",this.searchhotel);
  //   }

   
    

  createform(){
    this.searchhotel=this.fb.group({
      "city":[''],
      "checkInDate":[''],
      "checkoutDate":[''],
      "children":[''],
    })
  }
  saveForm(){
    console.log(this.searchhotel.value)
    console.log(this.parentForm.value)
  }
}


 











