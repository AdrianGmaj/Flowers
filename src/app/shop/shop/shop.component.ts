import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryResponse } from 'src/app/admin/admin/categories/CategoryResponse';
import { CategoriesService } from 'src/app/admin/admin/categories/categories.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

categories$:Observable<Array<CategoryResponse>>
  constructor(private categoriesService:CategoriesService) { }

  ngOnInit() {
  this.categories$=  this.categoriesService.GetAllCategories()
  
  }
 
}
