import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDetails } from 'src/app/models/movie-details.interface';
import { MovieService } from 'src/app/services/movie-service.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  selectedMovie !: MovieDetails;
  movieId = 0;
  route: ActivatedRoute = inject(ActivatedRoute);

  constructor(private movieService: MovieService) {
    this.movieId = Number(this.route.snapshot.params['id']);
  }

  ngOnInit(): void {
    this.movieService.getPeliculaById(this.movieId).subscribe(resp => {
      this.selectedMovie = resp;
    })
  }

  getImageItem() {
    return "https://image.tmdb.org/t/p/w500/" + this.selectedMovie.poster_path
  }

}
