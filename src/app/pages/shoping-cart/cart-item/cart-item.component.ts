import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent {
  @Input() cartItems!: any;
  @Output() deleteEvent = new EventEmitter<number>();
  @Output() editEvent = new EventEmitter<number>();

  onDelete(index: number) {
    this.deleteEvent.emit(index);
  }

  onEdit(index: number) {
    this.editEvent.emit(index);
  }


}
