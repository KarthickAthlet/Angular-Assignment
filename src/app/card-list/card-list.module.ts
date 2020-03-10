
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardListRoutingModule } from './card-list-routing.module';
import { SharedModule } from './../shared/shared.module';
import { CardsComponent } from './cards/cards.component';


@NgModule({
  declarations: [CardsComponent],
  imports: [
    CommonModule,
    SharedModule,
    CardListRoutingModule
  ],
  exports: [
    CardsComponent
  ]
})
export class CardListModule { }
