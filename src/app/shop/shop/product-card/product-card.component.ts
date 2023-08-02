import { Component, Input, OnInit } from '@angular/core';
import { ProductResponse } from 'src/app/admin/admin/products/ProductResponse';
import { BasketService } from 'src/app/basket/basket.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  constructor(private basketService: BasketService) { }

  ngOnInit() {
  }
  @Input()
  product:ProductResponse;

  addProduct(product){
this.basketService.addProduct(product)
  }
}
