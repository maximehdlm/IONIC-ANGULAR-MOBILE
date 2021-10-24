import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActorsPageRoutingModule } from './actors-routing.module';

import { ActorsPage } from './actors.page';
import { ActorDetailComponent } from './actor-detail/actor-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActorsPageRoutingModule
  ],
  declarations: [ActorsPage, ActorDetailComponent]
})
export class ActorsPageModule {}
