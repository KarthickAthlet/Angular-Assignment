import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css']
})
export class SearchFilterComponent implements OnInit {
  searchKey = '';
  @Output() searchKeyEmit = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  sendSearchKey(searchKey) {
    this.searchKeyEmit.emit(searchKey?.value);
  }

}
