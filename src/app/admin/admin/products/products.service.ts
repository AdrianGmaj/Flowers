import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductPost } from './ProductPost';
import { ProductResponse } from './ProductResponse';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products = [
    {
      id: 1,
      name: "adek",
      price: 88,
      description: "adek łowca zagadek",
      image: "img",
      published: "false",
      actions: "button"
    }
  ]
  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Array<any>> {
    return this.http.get<Array<any>>('/api/products');
  }

  getProductById(id: string): Observable<ProductResponse> {
    return this.http.get<ProductResponse>(`/api/products/${id}`);
  }

  editProduct(id: number, value: ProductPost): Observable<ProductResponse> {
    return this.http.patch<ProductResponse>(`/api/products/${id}`, value)

  }


  deleteProduct(id): Observable<ProductResponse> {
    return this.http.delete<ProductResponse>(`/api/products/${id}`)
  }

  addProduct(value: ProductPost): Observable<ProductResponse> {
    return this.http.post<ProductResponse>('/api/products', value);
  }


}
