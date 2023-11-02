import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieResponse } from '../models/movie.interface';

const API_KEY = "67e90c6f74bc6faf6aebc08470495925";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getPeliculas(page: number): Observable<MovieResponse> {
    return this.http.get<MovieResponse>("https://api.themoviedb.org/3/movie/now_playing?api_key=" + API_KEY + "&page=" + page);
  }
}
