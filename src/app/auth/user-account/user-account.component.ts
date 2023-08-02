import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Basket } from 'src/app/basket/basket';
import { BasketService } from 'src/app/basket/basket.service';
import { OrderServiceService } from 'src/app/order-service/order-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {


  basket: Basket

  constructor(private authService: AuthService,
    private router: Router,
    private basketService: BasketService,
    private orderService: OrderServiceService) { }

  ngOnInit() {
    this.basketService.getBasket().subscribe((response)=>{
      this.basket = response
          })

          
  }

  
  logOut() {
    this.authService.signOut()
      .subscribe(() => {
        this.router.navigateByUrl('sign-in')
      })
  }



}
