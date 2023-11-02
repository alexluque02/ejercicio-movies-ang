import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie.interface';
import { MovieService } from 'src/app/services/movie-service.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movieList: Movie[] = [];
  count = 0;
  page = 1;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.loadNewPage();
  }

  loadNewPage() {
    this.movieService.getPeliculas(this.page).subscribe(resp => {
      this.movieList = resp.results;

    })
    this.movieService.getPeliculas(this.page).subscribe(resp =>
      this.count = resp.total_results);
  }


}
