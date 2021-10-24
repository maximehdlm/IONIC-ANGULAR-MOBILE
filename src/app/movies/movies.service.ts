import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from './models/movie';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  //Movie represente ma liste de films
  private movies: Movie[] = []

  /**
   * @param http en private pour eviter de devoir déclarer une proprieté et ainsi de faire une
   *  initialisation du service http pour faire des requêtes http.
   */

  constructor(

    private router: Router,
    private http: HttpClient
  ) {}

  /**
   * 
   * @returns un observable qui contient une liste de films,
   * communique avec l'api de imdb 
   */

  getFilms():Observable<Movie[]>{

    return this.http.get<Movie[]>("https://imdb-api.com/fr/API/Top250Movies/k_xzaark1w")
  }

  /**
   * Récupere l'id d'un film dans l'url pour
   * @returns un observable contenant ses informations
   */

  getFilm(id: string):Observable<Movie>{

    return this.http.get<Movie>("https://imdb-api.com/fr/API/Title/k_xzaark1w/" + id)
  }
}
