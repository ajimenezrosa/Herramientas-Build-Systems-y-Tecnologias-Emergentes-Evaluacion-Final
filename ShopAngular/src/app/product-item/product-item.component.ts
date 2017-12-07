import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../model/Product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input()
  product: Product;

  purchaseQuantity: number;

  constructor() {

    this.purchaseQuantity = 0;

  }

  ngOnInit() {
  }

}
