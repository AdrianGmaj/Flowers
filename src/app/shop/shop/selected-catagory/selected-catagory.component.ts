import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs'
import { CategoryResponse } from 'src/app/admin/admin/categories/CategoryResponse';
import { CategoriesService } from 'src/app/admin/admin/categories/categories.service';
import { ProductResponse } from 'src/app/admin/admin/products/ProductResponse';
import { ProductsService } from 'src/app/admin/admin/products/products.service';

@Component({
  selector: 'app-selected-catagory',
  templateUrl: './selected-catagory.component.html',
  styleUrls: ['./selected-catagory.component.css']
})
export class SelectedCatagoryComponent implements OnInit {
  categoryId: string;
  category$: Observable<CategoryResponse>
  products$: Observable<Array<ProductResponse>>
  constructor(private route: ActivatedRoute,
    private categoriesService: CategoriesService,
    private productsService: ProductsService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      this.categoryId = param.get('categoryId');
      this.category$ = this.categoriesService.getCategoryById(this.categoryId);
      this.products$ = this.productsService.getAllProducts().pipe(
        map((response) => { return response.filter((product) => product.categoryId === parseInt(this.categoryId)) }))
    })
  }

}
