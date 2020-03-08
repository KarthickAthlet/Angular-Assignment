import { FilterModule } from './../filter/filter.module';
import { CardListModule } from './../card-list/card-list.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { LayoutComponent } from './layout/layout.component';


@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    CardListModule,
    FilterModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class CoreModule { }
