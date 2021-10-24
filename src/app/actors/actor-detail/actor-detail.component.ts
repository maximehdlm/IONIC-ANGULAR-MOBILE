import { Component, OnInit } from '@angular/core';
import { ActorsService } from '../actors.service';
import { Actor } from '../models/actor';
import { Movie } from 'src/app/movies/models/movie';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-actor-detail',
  templateUrl: './actor-detail.component.html',
  styleUrls: ['./actor-detail.component.scss'],
})
export class ActorDetailComponent implements OnInit {

  actor: Actor = {} as Actor

  movie: Movie[];

  constructor(

    private myService: ActorsService,
    private route: ActivatedRoute

  ) { }

  ngOnInit() {

    /**
     * je souscris a la méthode getFilm de actorService
     * et je recpere l'id qui est dans l'url actuelle de la route
     */

     this.myService.getActorDetail(this.route.snapshot.url[1].path)
     .subscribe((result)=>{
       console.log(result)
     })
  }

}
