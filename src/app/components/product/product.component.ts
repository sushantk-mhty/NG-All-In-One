import { Component, Input } from '@angular/core';

type Product ={
  sno: string;
  name: string;
  image: string;
  price: number;
  qty: number;
}
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  
@Input() product:Product | undefined;
}
