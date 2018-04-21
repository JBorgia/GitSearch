import { Component, AfterViewInit } from '@angular/core';
import { FormControl } from '@angular/forms';

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

}
