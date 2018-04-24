import { Component, AfterViewInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements AfterViewInit {
  criteria = new FormControl();
  count = new FormControl();

  constructor() { }

  ngAfterViewInit() {
    this.criteria.setValue('eric');
    this.count.setValue('10');
  }

  // The regex pattern validator is based on GitHub's user criteria.
  // The backend would still be exposed to receiving incorrect data if a user downloads and edits the 
  // web application, but GitHub's backend handles these errors.
  // Also, added distinctUntilChanged() to GithubService to ensure the corrections don't speed up the 
  // use of the API call cap
  enforceInputRestriction(event) {
    console.log('FIRED', event.target.value);
    this.criteria.setValue(/^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}/i.exec(event.target.value)[0]);
  };

}
