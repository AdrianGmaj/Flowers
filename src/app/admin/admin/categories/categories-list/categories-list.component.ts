import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../categories.service';
import { Observable } from 'rxjs';
import { CategoryResponse } from '../CategoryResponse';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit {

  categories$:Observable<Array<CategoryResponse>>
 
 

  displayedColumns: string[] = [
    'id',
    'name',
    'active',
    'actions'
  ];

  constructor(private categoriesService:CategoriesService) { }

  ngOnInit() {
this.categories$ = this.categoriesService.GetAllCategories()

  }
deleteCategory(id){
  this.categoriesService.deleteCategory(id).subscribe(()=>{
    this.categories$ = this.categoriesService.GetAllCategories()
    console.log((id))
  })

}

}
