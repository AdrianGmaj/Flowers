import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop/shop.component';
import { ShopRoutingModule } from './shop-routing.module';
import { MaterialModule } from '../material/material.module';
import { SelectedCatagoryComponent } from './shop/selected-catagory/selected-catagory.component';
import { AllCategoriesComponent } from './shop/all-categories/all-categories.component';
import { ProductCardComponent } from './shop/product-card/product-card.component';


@NgModule({
  declarations: [
    ShopComponent,
    SelectedCatagoryComponent,
    AllCategoriesComponent,
  ProductCardComponent],
  imports: [
    CommonModule,
    ShopRoutingModule,
    MaterialModule
  ],
  exports: [
    ShopComponent
  ]
})
export class ShopModule { }
