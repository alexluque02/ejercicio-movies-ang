import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../services/movie-service.service';
import { Movie } from '../models/movie.interface';

@Component({
  selector: 'app-details-movie',
  templateUrl: './details-movie.component.html',
  styleUrls: ['./details-movie.component.css']
})
export class DetailsMovieComponent implements OnInit {

  movie: any;

  /* constructor(private ruta: ActivatedRoute, private movieService: MovieService, private router: Router) {
     this.ruta.paramMap.subscribe(params => {
       const id = params.get('id');
       if (id !== null) {
         const movieId = +id; // Convierte el ID en número
         movieService.getPeliculaById(movieId).subscribe(movie => {
           this.movie = movie
           debugger
         });
         if (!this.movie) {
           this.router.navigate(['/**']); // Manejar el caso en que no se encuentra la película
         }
       } else {
         this.router.navigate(['/**']); // Manejar el caso en que no se proporciona un ID
       }
     });
   }*/

  constructor(
    private route: ActivatedRoute,
    private router: Router, private service: MovieService) { }


  ngOnInit() {
    const movieId = Number(this.route.snapshot.paramMap.get('id'));
    this.movie = this.service.getPeliculaById(movieId);
  }

  gotoItems(movie: Movie) {
    const movieId = movie ? movie.id : null;
    this.router.navigate(['/heroes', { id: movieId }]);
  }


}