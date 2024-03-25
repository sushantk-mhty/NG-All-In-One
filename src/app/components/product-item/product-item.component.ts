import { Component, signal } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent {
  public product: Product = {
    sno: 'AA101',
    name: 'boAT watch',
    image:
      'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1695899843/Croma%20Assets/Wearable/Wearable%20Devices/Images/301658_samv03.png?tr=w-1000',
    qty: 2,
    price: 15000,
  };

  public incrementQty(): void {
    this.product = {
      ...this.product, // without modify existing product obj
      qty: this.product.qty + 1,
    };
  }
  public decrementQty(): void {
    this.product = {
      ...this.product, // without modify existing product obj
      qty: this.product.qty - 1 > 0 ? this.product.qty - 1 : 1,
    };
  }
}
