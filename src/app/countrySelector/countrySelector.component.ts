import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Country } from './country.model'
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'country-selector',
  templateUrl: './countrySelector.component.html',
  styleUrls: ['./countrySelector.component.css']
})
export class CountrySelectorComponent implements OnInit {

	countries: Observable<{countries: Country[]}>;
	@Output() selectedCountry = new EventEmitter();

  constructor( private store: Store<{country:{ countries: Country[]}}>){}

  ngOnInit(){
  	this.countries = this.store.select('country')
  }

  selectCountry(country: string){
  	this.selectedCountry.emit(country);
  }
}