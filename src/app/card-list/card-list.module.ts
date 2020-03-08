import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardListRoutingModule } from './card-list-routing.module';
import { CardsComponent } from './cards/cards.component';
import { SortPipe } from '../pipes/sort.pipe';
import { SearchPipe } from '../pipes/search.pipe';


@NgModule({
  declarations: [CardsComponent,
    SortPipe,
    SearchPipe],
  imports: [
    CommonModule,
    CardListRoutingModule
  ],
  exports: [
    CardsComponent,
    SortPipe,
    SearchPipe
  ]
})
export class CardListModule { }
