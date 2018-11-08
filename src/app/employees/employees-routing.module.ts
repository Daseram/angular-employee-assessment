import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { DetailEmployeeComponent } from './detail-employee/detail-employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeesComponent } from './employees.component';

const employeesRoutes: Routes = [
  { path: '', component: EmployeesComponent, children: [
    { path: 'new', component: AddEmployeeComponent },
    { path: ':id', component: DetailEmployeeComponent },
    { path: ':id/edit', component: EditEmployeeComponent},
  ] },
];

@NgModule({
  imports: [
    RouterModule.forChild(employeesRoutes)
  ],
  exports: [RouterModule],
  providers: [
  ]
})
export class EmployeesRoutingModule {}