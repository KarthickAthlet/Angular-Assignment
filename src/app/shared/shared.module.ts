import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { CheckboxComponent } from './partials/checkbox/checkbox.component';
import { SearchPipe } from '../pipes/search.pipe';
import { SortPipe } from '../pipes/sort.pipe';


@NgModule({
  declarations: [
    CheckboxComponent,
    SortPipe,
    SearchPipe],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    CheckboxComponent,
    SortPipe,
    SearchPipe]
})
export class SharedModule { }
