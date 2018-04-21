import { TestBed, async } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

import { AppRoutes } from './app.routes';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot(AppRoutes),
      ],
      declarations: [
        AppComponent,
        MainComponent
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' },
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
