import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilterRoutingModule } from './filter-routing.module';
import { SortFilterComponent } from './sort-filter/sort-filter.component';
import { SearchFilterComponent } from './search-filter/search-filter.component';
import { CheckboxFilterComponent } from './checkbox-filter/checkbox-filter.component';


@NgModule({
  declarations: [SortFilterComponent, SearchFilterComponent, CheckboxFilterComponent],
  imports: [
    CommonModule,
    FormsModule,
    FilterRoutingModule
  ],
  exports: [
    SortFilterComponent,
    SearchFilterComponent,
    CheckboxFilterComponent
  ]
})
export class FilterModule { }
