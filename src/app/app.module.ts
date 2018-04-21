import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule} from '@angular/router';
import { MyMaterialModule } from './my-material.module';

import { AppRoutes} from './app.routes';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { GithubService } from './services/github.service';
import { SearchComponent } from './components/search/search.component';
import { ResultsComponent } from './components/results/results.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    SearchComponent,
    ResultsComponent
  ],
  imports: [
    RouterModule.forRoot(AppRoutes),
    MyMaterialModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  bootstrap: [AppComponent],
  providers: [GithubService]
})
export class AppModule { }
