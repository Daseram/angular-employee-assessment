import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit{

	addEmployeeForm: FormGroup;

	constructor( private _formBuilder: FormBuilder) { }

  ngOnInit() {
  	this.addEmployeeForm = this._formBuilder.group({
  		name:["", Validators.required],
  		birthdate:["", Validators.required],
  		country:["", Validators.required],
  		username:["", Validators.required],
  		hireDate:["", Validators.required],
  		status:[false, Validators.required],
  		area:["services", Validators.required],
  		jobTitle:["", Validators.required],
  		tipRate:[""]
  	})
  }

  selectCountry(country:string){
    this.addEmployeeForm.controls['country'].setValue(country);
  }

  selectjob(job:string){
    this.addEmployeeForm.controls['jobTitle'].setValue(job);
  }

  onSubmit(employee:any){
    console.log(employee)
  }
}