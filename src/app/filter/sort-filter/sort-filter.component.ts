import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sort-filter',
  templateUrl: './sort-filter.component.html',
  styleUrls: ['./sort-filter.component.css']
})
export class SortFilterComponent implements OnInit {

  @Output() sortOrderValue: any = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  sortOrder(value) {
    this.sortOrderValue.emit(value);
  }

}
