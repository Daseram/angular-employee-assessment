import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { EmployeesComponent } from './employees/employees.component';
import { HomeComponent } from './home/home.component'

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'employees', component: EmployeesComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}