import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User, Results } from './models/github.models';

import { Observable } from 'rxjs/Observable';
import { tap, catchError } from 'rxjs/operators';
import 'rxjs/add/observable/throw';

@Injectable()
export class GithubService {
  userUrl = 'https://api.github.com/search/users?q=';

  constructor(
    private http: HttpClient
  ) { }

  // Added error handling (Production level would throw, while in development it would be displayed or tracked)
  searchUsers(inputVal: string): Observable<Results> {
    return this.http.get<Results>(`${this.userUrl}${inputVal}`).pipe(
      catchError((error) => Observable.throw(error.error)),
    )
  }
}
