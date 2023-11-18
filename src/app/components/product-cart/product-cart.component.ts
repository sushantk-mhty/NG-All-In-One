import { Component } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.scss']
})
export class ProductCartComponent {

  public products: Product[] = [
    {
      sno: 'AA101',
      name: 'boAT watch',
      image:
        'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1695899843/Croma%20Assets/Wearable/Wearable%20Devices/Images/301658_samv03.png?tr=w-1000',
      qty: 2,
      price: 15000,
    },
    {
      sno: 'AA102',
      name: 'apple watch',
      image:
        'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1694713300/Croma%20Assets/Communication/Wearable%20Devices/Images/300848_0_hyu5ar.png?tr=w-1000',
      qty: 5,
      price: 92000,
    },
    {
      sno: 'AA103',
      name: 'MAC Book',
      image:
        'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1685969095/Croma%20Assets/Computers%20Peripherals/Laptop/Images/256605_li76nl.png?tr=w-1000',
      qty: 3,
      price: 156000,
    },
    {
      sno: 'AA104',
      name: 'Sony TV',
      image:
        'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1697019009/Croma%20Assets/Entertainment/Television/Images/272016_0_qf0ncq.png?tr=w-1000',
      qty: 3,
      price: 16000,
    },
  ];

}
