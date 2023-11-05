import { Component, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, map, switchMap } from 'rxjs';
import { Movie, MovieResponse } from 'src/app/models/movie.interface';
import { MovieService } from 'src/app/services/movie-service.service';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent {


  @Input() movie!: Movie;


  getImageItem() {
    return "https://image.tmdb.org/t/p/w500/" + this.movie.poster_path
  }
}
