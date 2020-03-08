import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  searchKey: any;
  constructor() { }

  ngOnInit(): void {
  }

  onGetSearchKey(event) {
    console.log(event);
    this.searchKey = event;
  }

}
