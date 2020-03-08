import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilterRoutingModule } from './filter-routing.module';
import { SortFilterComponent } from './sort-filter/sort-filter.component';
import { SearchFilterComponent } from './search-filter/search-filter.component';


@NgModule({
  declarations: [SortFilterComponent, SearchFilterComponent],
  imports: [
    CommonModule,
    FilterRoutingModule
  ]
})
export class FilterModule { }
