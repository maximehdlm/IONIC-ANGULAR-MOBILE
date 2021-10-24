import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoviesPageRoutingModule } from './movies-routing.module';
import { DetailComponent } from './detail/detail.component';
import { MoviesPage } from './movies.page';

/**
 * Ng2SearchPipeModule me permet d'effectuer des recherches personnalisées avec un champ de texte
 */
 import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoviesPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [MoviesPage, DetailComponent]
})
export class MoviesPageModule {}
