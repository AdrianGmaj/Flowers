import { Component, OnInit } from '@angular/core';
import { OrderServiceService } from 'src/app/order-service/order-service.service';

@Component({
  selector: 'app-hisotry',
  templateUrl: './hisotry.component.html',
  styleUrls: ['./hisotry.component.css']
})
export class HisotryComponent implements OnInit {
  orders
  constructor(private orderService: OrderServiceService) { }

  ngOnInit() {
    this.orderService.ordersForLoggedUser().subscribe(response => {
      console.log(response)
      this.orders = response
    })
  }

}
