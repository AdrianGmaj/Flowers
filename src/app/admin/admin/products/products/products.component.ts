import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products$: Observable<Array<any>>


  displayedColumns: string[] = [
    'id',
    'categoryId',
    'price',
    'name',

    'active',

    'actions',

  ];
  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.products$ = this.productsService.getAllProducts()

  }

  deleteProduct(id) {
    this.productsService.deleteProduct(id).subscribe(() => {
      this.products$ = this.productsService.getAllProducts()
    })

  }

}
