import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';
import { ProductResponse } from '../ProductResponse';
import { Observable } from 'rxjs'
import { CategoriesService } from '../../categories/categories.service';
import { CategoryResponse } from '../../categories/CategoryResponse';
@Component({
  selector: 'app-products-add',
  templateUrl: './products-add.component.html',
  styleUrls: ['./products-add.component.css']
})
export class ProductsAddComponent implements OnInit {
  categories$: Observable<Array<CategoryResponse>>

  productAddForm = new FormGroup({
    categoryId: new FormControl(''),
    price: new FormControl(''),
    name: new FormControl(''),
    thumbnail: new FormControl(''),
    image: new FormControl(''),
    active: new FormControl(''),
    description: new FormControl('')

  })
  constructor(private productService: ProductsService,
    private categoriesService: CategoriesService,
    private router: Router) { }

  ngOnInit() {
    this.categories$ = this.categoriesService.GetAllCategories()
  }


  addProduct(value) {
    this.productService.addProduct(value).subscribe(response => {
      this.router.navigateByUrl('/admin/products')
    })

  }
}
