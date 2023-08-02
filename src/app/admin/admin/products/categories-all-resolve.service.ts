import { Injectable } from '@angular/core';
import { ProductResponse } from './ProductResponse';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { ProductsService } from './products.service';
import { CategoriesService } from '../categories/categories.service';
import { CategoryResponse } from '../categories/CategoryResponse';
@Injectable({
  providedIn: 'root'
})
export class CategoriesAllResolveService implements Resolve<Array<CategoryResponse>> {

constructor(
  private categoriesService: CategoriesService) { }

resolve(route: ActivatedRouteSnapshot){
  
 return this.categoriesService.GetAllCategories()

}
}
