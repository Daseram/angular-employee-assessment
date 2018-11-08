import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmployeesRoutingModule } from './employees-routing.module';

import { EmployeesComponent} from './employees.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { DetailEmployeeComponent } from './detail-employee/detail-employee.component';

@NgModule({
  declarations: [
  EmployeesComponent,
  AddEmployeeComponent,
  EditEmployeeComponent,
  DetailEmployeeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    EmployeesRoutingModule
  ]
})

export class EmployeesModule{

}