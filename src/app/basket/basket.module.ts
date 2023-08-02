import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasketRoutingModule } from './basket-routing.module';
import { BasketComponent } from './basket/basket.component';
import { MaterialModule } from '../material/material.module';
import { BasketEmptyComponent } from './basket-empty/basket-empty.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [BasketComponent, BasketEmptyComponent, PurchaseComponent],
  imports: [
    CommonModule,
    BasketRoutingModule,
    MaterialModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports:[
    BasketComponent,
    
  ]
})
export class BasketModule { }
