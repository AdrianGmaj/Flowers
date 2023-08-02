import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductsAddComponent } from './products-add/products-add.component';
import { ProductsEditComponent } from './products-edit/products-edit.component';
import { ProductsResolveService } from './products-resolve.service';
import { CategoriesResolveService } from '../categories/categories-resolve.service';
import { CategoriesAllResolveService } from './categories-all-resolve.service';

const routes: Routes = [
  {path:'', component: ProductsComponent},
  {path:'products-add', component: ProductsAddComponent},
  {path:'product-edit/:productId', component: ProductsEditComponent,
resolve:{
  productById: ProductsResolveService,
  allCategories: CategoriesAllResolveService
}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
