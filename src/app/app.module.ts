import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EmployeesModule } from './employees/employees.module';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module'
import { StoreModule } from '@ngrx/store';
import { CountryReducer } from './countrySelector/store/country.reducers';
import { JobReducer } from './jobSelector/store/job.reducers';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EmployeesModule,
    SharedModule,
    StoreModule.forRoot({ country: CountryReducer, job: JobReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
