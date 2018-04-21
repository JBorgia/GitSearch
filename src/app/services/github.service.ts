import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User, Results } from './models/github.models';

import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators';

@Injectable()
export class GithubService {
  userUrl = 'https://api.github.com/search/users?q=';

  constructor(
    private http: HttpClient
  ) { }

  searchUsers(inputVal: string): Observable<Results> {
    return this.http.get<Results>(`${this.userUrl}${inputVal}`);
  }
}
