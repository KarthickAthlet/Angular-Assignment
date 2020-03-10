import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox-filter',
  templateUrl: './checkbox-filter.component.html',
  styleUrls: ['./checkbox-filter.component.css']
})
export class CheckboxFilterComponent implements OnInit {

  filterStructure: any = [
    {
      menu: 'Species',
      subMenu: [
        {
          label: 'Human',
          id: 'Human'
        },
        {
          label: 'Mytholog',
          id: 'Mytholog'
        },
        {
          label: 'Other Species',
          id: 'o-Species'
        }
      ]
    },
    {
      menu: 'Gender',
      subMenu: [
        {
          label: 'Male',
          id: 'Male'
        },
        {
          label: 'Female',
          id: 'Female'
        }
      ]
    },
    {
      menu: 'Origin',
      subMenu: [
        {
          label: 'Unknown',
          id: 'Unknown'
        },
        {
          label: 'Post-Apocalyptic Earth',
          id: 'Apocalyptic'
        },
        {
          label: 'Nutpia 4',
          id: 'Nutpia'
        },
        {
          label: 'Other Origins',
          id: 'o-Origins'
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
