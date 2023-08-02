import { Component, Input, OnInit } from '@angular/core';
import { Basket } from 'src/app/basket/basket';
import { BasketService } from 'src/app/basket/basket.service';

@Component({
  selector: 'app-basket-icon',
  templateUrl: './basket-icon.component.html',
  styleUrls: ['./basket-icon.component.css']
})
export class BasketIconComponent implements OnInit {

 
  basket: Basket
  constructor(private basketService: BasketService) { }

  ngOnInit() {
    this.basketService.getBasket().subscribe((response)=>{
this.basket = response
    })
  }

}
