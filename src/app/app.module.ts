import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MyMaterialModule } from './my-material.module';

import { AppRoutes} from './app.routes';

// components
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

@NgModule({
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
    SearchFormComponent
  ],
  imports: [
    RouterModule.forRoot(AppRoutes),
    MyMaterialModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    GithubService
  ]
})
export class AppModule { }
