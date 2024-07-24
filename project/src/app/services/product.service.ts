import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [];

  private apiUrl = 'https://your-backend-api-url.com/products';

  constructor(private http: HttpClient) { }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product);
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  updateProduct(updatedProduct: Product): Observable<Product> {
    return this.http.put<Product>(`${this.apiUrl}/${updatedProduct.id}`, updatedProduct);
  }

  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
