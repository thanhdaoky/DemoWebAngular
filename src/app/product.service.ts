import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly URL = 'http://localhost:3000/product';
  constructor(private http: HttpClient) {}

  getProduct() {
    return this.http.get<Product[]>(this.URL);
  }
}
