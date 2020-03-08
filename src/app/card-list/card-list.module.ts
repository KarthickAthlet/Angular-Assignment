import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardListRoutingModule } from './card-list-routing.module';
import { CardsComponent } from './cards/cards.component';


@NgModule({
  declarations: [CardsComponent],
  imports: [
    CommonModule,
    CardListRoutingModule
  ],
  exports: [
    CardsComponent
  ]
})
export class CardListModule { }
