import { Component } from '@angular/core';

@Component({
  selector: 'app-shoping-cart',
  templateUrl: './shoping-cart.component.html',
  styleUrls: ['./shoping-cart.component.scss'],
})
export class ShopingCartComponent {
  exampleItems: any = [
    {
      numberFlight: 'FR 1925',
      flight: { oneWay: 'Dublin — Warsaw', roundTrip: 'Modlin  — Dublin' },
      type: 'Round Trip',
      dataAndTime: {
        oneWay: '1 Mar, 2023, 8:40 — 12:00',
        roundTrip: '18 Mar, 2023, 7:40 — 11:00  ',
      },
      passengers: {
        adult: 1,
        child: 1,
        infant: 1,
      },
      price: 551,
      isBtnPanelOpen: false,
    },
    {
      numberFlight: 'FR 1936',
      flight: { oneWay: 'Gdansk — Warsaw', roundTrip: '' },
      type: 'One way',
      dataAndTime: {
        oneWay: '1 Mar, 2023, 8:40 — 12:00',
        roundTrip: '28 May, 2023, 15:40 — 16:40',
      },
      passengers: {
        adult: 1,
        child: 0,
        infant: 0,
      },
      price: 20,
      isBtnPanelOpen: false,
    },
    
  ];

  constructor() {
    console.log(this.exampleItems);
  }
  deleteItem(index: number) {
    this.exampleItems.splice(index, 1);
  }

  editItem(event: number) {
    console.log('edit');
    console.log(event);
  }
}
