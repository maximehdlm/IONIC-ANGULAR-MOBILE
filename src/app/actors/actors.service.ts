import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Actor } from './models/actor';

@Injectable({
  providedIn: 'root'
})
export class ActorsService {

  //Actor represente ma liste d'acteurs
  private actors: Actor[] = []

  /**
   * @param http en private pour eviter de devoir déclarer une proprieté et ainsi de faire une
   *  initialisation du service http pour faire des requêtes http.
   */

  constructor(

    private http: HttpClient
  ) {}

  /**
   * 
   * @returns un observable qui contient une liste d'acteurs,
   * par rapport au nom dans l'url
   * communique avec l'api de imdb 
   */

  getActors(actorName: string):Observable<Actor[]>{

    return this.http.get<Actor[]>("https://imdb-api.com/en/API/SearchName/k_xzaark1w/" + actorName)
  }

  /**
   * 
   * @returns un observable contant les informations d'un acteur
   * par rapport à son id
   */

  getActorDetail(id: string):Observable<Actor>{
    return this.http.get<Actor>("https://imdb-api.com/en/API/Name/k_xzaark1w/" + id)
  }
}
