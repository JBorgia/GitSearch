import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs/Observable';
import { User } from '../../services/models/github.models';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  @Input() users$: Observable<User[]>;
  @Input() count: FormControl;
  @Input() total_count: number;
  limit = 10;


  constructor() { }

  ngOnInit() {
    this.count.valueChanges.subscribe(cursor => this.limit = cursor);
  }

}
