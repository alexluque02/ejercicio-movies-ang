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
  selectedId: number = 0;

  constructor(private route: ActivatedRoute, private router: Router, private service: MovieService) { }

  movies!: Observable<Movie[]>; // Define un Observable para el array de películas

  ngOnInit() {
    this.movies = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = Number(params.get('id'));
        return this.service.getPeliculas().pipe(
          map((response: MovieResponse) => response.results)
        );
      })
    );
  }

  viewDetails(id: number) {
    this.router.navigate(['/pelicula', id]);
  }


  getImageItem() {
    return "https://image.tmdb.org/t/p/w500/" + this.movie.poster_path
  }
}
