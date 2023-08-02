import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OrderCreateRequest, OrderServiceService } from 'src/app/order-service/order-service.service';
import { BasketService } from '../basket.service';
import { Basket } from '../basket';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {
  PurchaseData = new FormGroup({
    name: new FormControl('',
      [Validators.required,
      Validators.minLength(3),
      ],
    ),
    city: new FormControl('',
      [Validators.required,
      Validators.minLength(3)]),


    address: new FormControl('',
      [Validators.required,
      Validators.minLength(3),
      ]),

    cardNumber: new FormControl('',
      [Validators.required,
      Validators.minLength(13),
      Validators.maxLength(16),
     ]),


    expiration: new FormControl('',
      [Validators.required,
      Validators.minLength(3),
      ]),

    security: new FormControl('',
      [Validators.required,
      Validators.minLength(3),
      ]),


  })

   order: OrderCreateRequest
   basket:Basket = { products: [], price: 0 }

  constructor(private orderService: OrderServiceService,
    private basketService: BasketService) { }

  ngOnInit() {
    // this.basketService.getBasket().subscribe(bs => basket = bs)

    // let basket:Basket = { products: [], price: 0 }
    // let data = this.PurchaseData.getRawValue()

    // this.order = {
    //   order: {
    //     price: basket.price,
    //     products: basket.products
    //   },
    //   data: {
    //     name: data.name,
    //     city: data.city,
    //     address: data.address,
    //     cardNumber: data.cardNumber,
    //     expiration: data.expiration,
    //     security: data.security
    //   }
    // }
    
  }



  buy() {

    this.basketService.getBasket().subscribe(bs => this.basket = bs)

  
    let data = this.PurchaseData.getRawValue()

    this.order = {
      order: {
        price: this.basket.price,
        products: this.basket.products
      },
      data: {
        name: data.name,
        city: data.city,
        address: data.address,
        cardNumber: data.cardNumber,
        expiration: data.expiration,
        security: data.security
      }
    }

    this.orderService.create(this.order).subscribe({
      next: response => {
        console.log('next', response)

        this.basketService.cleanBasket()
      },
      error: err => {
        console.log('err', err)
      }
    })




  }

}
