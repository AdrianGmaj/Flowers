import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { ProductResponse } from '../admin/admin/products/ProductResponse';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {


  constructor(private http: HttpClient,
    private auth: AuthService) { }



  create(order: OrderCreateRequest) {
    return this.http.post('/api/orders', order, this.auth.getAuthOptions())
  }

  ordersForLoggedUser(){
    return this.http.get('/api/orders', this.auth.getAuthOptions())
  }
}

 export interface OrderCreateRequest {
  order: Order;
  data: OrderData;
}

 export interface Order {
  products: Array<ProductResponse>;
  price: number;
}

export interface OrderData {
  name: string;
  city: string;
  address: string;
  cardNumber: string;
  expiration: string;
  security: string;
}