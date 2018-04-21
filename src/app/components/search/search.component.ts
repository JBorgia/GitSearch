import { Component, ViewChild, OnInit } from '@angular/core';
import { GithubService } from '../../services/github.service';
import { SearchFormComponent } from '../search-form/search-form.component';

import { Observable } from 'rxjs/Observable';
import { tap, map, switchMap, debounceTime, take, distinctUntilChanged, filter } from 'rxjs/operators';

import { Results, User } from '../../services/models/github.models';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @ViewChild(SearchFormComponent) searchForm: SearchFormComponent;
  results$: Observable<Results>;
  users$: Observable<User[]>;
  total_count: number;

  constructor(
    private gitHubService: GithubService
  ) { }

  ngOnInit() {
    this.users$ = this.searchForm.criteria.valueChanges
      .pipe(
        filter(val => val && val.length >= 3),
        debounceTime(300),
        switchMap(inputVal => this.gitHubService.searchUsers(inputVal).pipe(
          tap((results:Results) => this.total_count = results.total_count),
          map((results: Results) => results.items)
        ))
      );
  }
}
