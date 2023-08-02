import { Component, OnInit } from '@angular/core';
import { ProductResponse } from 'src/app/admin/admin/products/ProductResponse';
import {Observable} from 'rxjs'
import { ProductsService } from 'src/app/admin/admin/products/products.service';

@Component({
  selector: 'app-all-categories',
  templateUrl: './all-categories.component.html',
  styleUrls: ['./all-categories.component.css']
})
export class AllCategoriesComponent implements OnInit {
products$:Observable<Array<ProductResponse>>
  constructor(private productService: ProductsService) { }

  ngOnInit() {
    this.products$ = this.productService.getAllProducts()
  }

}
