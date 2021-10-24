import { Component, OnInit } from '@angular/core';
import { Movie } from './models/movie';
import { MoviesService } from './movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {

  //represente ma liste de message
  movies: Movie[] = [];


  //represente le texte rentré dans la barre de recherche des films
  searchTerm: string

  constructor(

    //represente movies.service
    private myService: MoviesService,
    private route: ActivatedRoute

  ) { }

  ngOnInit(): void{

    /**
     * je souscris à mon observable des films pour récuperer la liste des films
     * stockée dans le tableau json "items" et je stocke le resultat dans movies
     * qui represente la liste des films
     */
    this.myService.getFilms()
    .subscribe((result)=>{
      this.movies = result['items'] 
    })

  }

}
