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
      isChecked: true,
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
      isChecked: true,
    },
  ];

  promoExample = [
    {
      promo: '228',
      discount: 15,
    },
  ];

  constructor() {
    this.getTotalPrice();
  }

  total: number = 0;

  totalAfterDiscount: number = 0;

  promoInputValue!: string;

  isPromoInputEmpty!: boolean;

  isPromoInvalid!: boolean;

  deleteItem(index: number) {
    this.exampleItems.splice(index, 1);
  }

  editItem(event: number) {
    console.log('edit');
    console.log(event);
  }

  checkItemsPrice(event: any) {
    let index: number = Number(event.source.id.split('_')[1]);
    this.exampleItems[index].isChecked = event.checked;
  }

  getTotalPrice() {
    this.total = 0;
    this.exampleItems.forEach((element: any) => {
      if (element.isChecked) {
        this.total = this.total + element.price;
      }
    });
  }

  checkPromoCode() {
    if (this.promoInputValue === undefined) {
      this.isPromoInputEmpty = true;
    } else if (
      this.promoInputValue !== undefined &&
      this.promoInputValue !== this.promoExample[0].promo
    ) {
      this.isPromoInvalid = true;
    } else {
      this.totalAfterDiscount =
        this.total - (this.total * this.promoExample[0].discount) / 100;
      this.isPromoInvalid = false;
    }
  }
}
