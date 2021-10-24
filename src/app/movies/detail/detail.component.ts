import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Movie } from '../models/movie';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {

  //movie reprente les donnée du film
  movie: Movie = {} as Movie

  constructor(
    private myService: MoviesService,

    //permet de recuperer la route sur laquelle je souscris à l'observable
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    /**
     * je souscris a la méthode getFilm de movieService
     * et je recpere l'id qui est dans l'url actuelle de la route
     */

     this.myService.getFilm(this.route.snapshot.url[1].path)
     .subscribe((result)=>{
       this.movie = result
     })
  }

}
