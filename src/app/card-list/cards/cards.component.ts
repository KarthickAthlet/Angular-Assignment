import { CardsService } from '../cards.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  cardDetails: any;

  constructor(private cardService: CardsService) { }

  ngOnInit(): void {
    this.cardService.getCardList().subscribe(data => this.cardDetails = data);
  }

}
