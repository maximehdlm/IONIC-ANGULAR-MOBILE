import { Component, OnInit } from '@angular/core';
import { Actor } from './models/actor';
import { ActivatedRoute } from '@angular/router';
import { ActorsService } from './actors.service';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.page.html',
  styleUrls: ['./actors.page.scss'],
})
export class ActorsPage implements OnInit {

  actors: Actor[] = []
  searchTerm: string

  constructor(
    private route: ActivatedRoute,
    private myService: ActorsService
  ) { }

  ngOnInit() {}

    /**
     * je souscris a la méthode getActors qui est dans le service actorsService
     * 
     */
    //actorSearch represente la barre de recherche dans actors.page.html
    actorSearch(event){
    let name = event.target.value
     this.myService.getActors(name)
     .subscribe((result)=>{
       this.actors = result['results']
     })
    }
  
  

}
