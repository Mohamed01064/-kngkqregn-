import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  cards = [
    {
      image: 'https://picsum.photos/200/300',
      description: 'apple watch version 4',
      showDescription: false
    },
    {
      image: 'https://picsum.photos/200/300?random=2',
      description: 'labtop asus tuf 15 gaming',
      showDescription: false
    },
    {
      image: 'https://picsum.photos/200/300?random=3',
      description: 'iphone 13 pro max',
      showDescription: false
    }
  ];

  toggleDescription(card: any) {
    card.showDescription = !card.showDescription;
  }
}
