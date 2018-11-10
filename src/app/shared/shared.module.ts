import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountrySelectorComponent } from '../countrySelector/countrySelector.component';
import { JobSelectorComponent } from '../jobSelector/jobSelector.component';

@NgModule({
  declarations: [
    CountrySelectorComponent,
    JobSelectorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CountrySelectorComponent,
    JobSelectorComponent
  ]
})

export class SharedModule{

}