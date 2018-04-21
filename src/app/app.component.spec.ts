import { TestBed, async } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';

import { AppRoutes } from './app.routes';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { ResultsComponent } from './components/results/results.component';
import { UserComponent } from './components/user/user.component';
import { KeyvalueComponent } from './components/keyvalue/keyvalue.component';
import { ThumbnailComponent } from './components/thumbnail/thumbnail.component';
import { SearchFormComponent } from './components/search-form/search-form.component';

// services
import { GithubService } from './services/github.service';

// pipes
import { HideApiUrlPipe } from './pipes/hide-api-url.pipe';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot(AppRoutes),
        BrowserModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule
      ],
      declarations: [
        AppComponent,
        MainComponent,
        HeaderComponent,
        SearchComponent,
        ResultsComponent,
        UserComponent,
        KeyvalueComponent,
        ThumbnailComponent,
        HideApiUrlPipe,
        SearchFormComponent,
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' },
        GithubService,
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
