import { Injectable } from '@angular/core';
import { ProductResponse } from './ProductResponse';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { ProductsService } from './products.service';
import { CategoriesService } from '../categories/categories.service';
@Injectable({
  providedIn: 'root'
})
export class ProductsResolveService implements Resolve<ProductResponse> {

constructor(private productsService: ProductsService,
  private categoriesService: CategoriesService) { }

resolve(route: ActivatedRouteSnapshot){
  const { productId } = route.params;
 return this.productsService.getProductById(productId);


}
}
