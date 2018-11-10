import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { map, filter } from 'rxjs/operators';
import { Job } from './job.model';

@Component({
  selector: 'job-selector',
  templateUrl: './jobSelector.component.html',
  styleUrls: ['./jobSelector.component.css']
})
export class JobSelectorComponent implements OnInit {

	@Output() selectedJob = new EventEmitter();
  @Input() area: string = "services";

  jobs: Observable<{jobs: Job[]}>

  constructor( private store: Store<{ job: { jobs: Job[]}}>){}

  ngOnInit(){
    this.jobs = this.store.select('job');
  }

  selectJob(job: string){
    this.selectedJob.emit(job);
  }

}