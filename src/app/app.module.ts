import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { PageHomeComponent } from './ui/page-home/page-home.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DetailsMovieComponent } from './details-movie/details-movie.component';
import { PageNotFoundComponent } from './ui/page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieItemComponent,
    PageHomeComponent,
    NavbarComponent,
    DetailsMovieComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
