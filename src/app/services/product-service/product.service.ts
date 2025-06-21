import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASEURL } from '../../environment';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private apiUrl = BASEURL;
  private http = inject(HttpClient);
  constructor() {}

  getProducts() {
    return this.http.get<any[]>(`${this.apiUrl}/products`);
  }
}
