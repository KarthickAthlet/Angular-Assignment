import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  searchKey: any;
  sortKey: any;
  constructor() { }

  ngOnInit(): void {
  }

  onGetSearchKey(value) {
    // console.log(event);
    this.searchKey = value;
  }

  sortFilterValue(value) {
    this.sortKey = value;
  }
}
