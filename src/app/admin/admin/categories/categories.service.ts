import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { CategoryPost } from './CategoryPost';
import { CategoryResponse } from './CategoryResponse';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  categories = [
    {
      id: 1,
      label: 'label',
      published: true,
      actions: 'guzik'
    }
  ]


  constructor(private http: HttpClient) { }

  GetAllCategories(): Observable<Array<CategoryResponse>> {
    return this.http.get<Array<CategoryResponse>>(`/api/categories`)
  }

  addCategory(value: CategoryPost):Observable<CategoryResponse> {
   return this.http.post<CategoryResponse>('/api/categories',value)
  }

  editCategory(id:number,value:CategoryPost):Observable<CategoryResponse>{
    return this.http.patch<CategoryResponse>(`api/categories/${id}`,value)
  }
  getCategoryById(id:string):Observable<CategoryResponse>{
    return this.http.get<CategoryResponse>(`api/categories/${id}`)
  }

  deleteCategory(id):Observable<CategoryResponse>{
    return this.http.delete<CategoryResponse>(`api/categories/${id}`)
  }

}

