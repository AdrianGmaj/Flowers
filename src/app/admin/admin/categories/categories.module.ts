import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { MaterialModule } from 'src/app/material/material.module';
import { CategoriesService } from './categories.service';
import { CategoriesAddComponent } from './categories-add/categories-add.component';
import { CategoriesEditComponent } from './categories-edit/categories-edit.component';


@NgModule({
  declarations: [
    CategoriesListComponent,
    CategoriesAddComponent,
    CategoriesEditComponent],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    CategoriesService
  ]
})
export class CategoriesModule { }
