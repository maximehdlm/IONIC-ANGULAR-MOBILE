import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActorDetailComponent } from './actor-detail/actor-detail.component';

import { ActorsPage } from './actors.page';

const routes: Routes = [
  {
    path: '',
    component: ActorsPage
  },
  {
    path: 'actor-detail/:idActor',
    component: ActorDetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActorsPageRoutingModule {}
