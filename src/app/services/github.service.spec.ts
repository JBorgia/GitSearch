import { TestBed, inject } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { GithubService } from './github.service';

import { User, Results } from './models/github.models';

describe('GithubService', () => {
  let service: GithubService;
  let backend: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [GithubService]
    });

    service = TestBed.get(GithubService);
    backend = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    backend.verify();
  });

  it('should be created', inject([GithubService], (api) => {
    expect(api).toBeTruthy();
  }));

  it('should send a get request', (done) => {
    service.searchUsers('JBorgia')
      .subscribe(res => {
        expect(res.incomplete_results).toBe(false);
        expect(res.items.length).toBeGreaterThan(0);
        expect(res.total_count).toBe(1);
        done();
      });

    const req = backend.expectOne({
      url: 'https://api.github.com/search/users',
      method: 'GET',
    });
    req.flush({
      total_count: 1,
      items: [{
        avatar_url: 'https://avatars0.githubusercontent.com/u/22381905?v=4',
        events_url: 'https://api.github.com/users/JBorgia/events{/privacy}',
        followers_url: 'https://api.github.com/users/JBorgia/followers',
        following_url: 'https://api.github.com/users/JBorgia/following{/other_user}',
        gists_url: 'https://api.github.com/users/JBorgia/gists{/gist_id}',
        gravatar_id: '',
        html_url: 'https://github.com/JBorgia',
        id: 22381905,
        login: 'JBorgia',
        organizations_url: 'https://api.github.com/users/JBorgia/orgs',
        received_events_url: 'https://api.github.com/users/JBorgia/received_events',
        repos_url: 'https://api.github.com/users/JBorgia/repos',
        score: 30.949139,
        site_admin: false,
        starred_url: 'https://api.github.com/users/JBorgia/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/JBorgia/subscriptions',
        type: 'User',
        url: 'https://api.github.com/users/JBorgia',
      }],
      incomplete_results: false,
    });
    backend.verify();
  });
});
